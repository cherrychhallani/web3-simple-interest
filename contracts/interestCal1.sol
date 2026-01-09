// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InterestCal {
    address public manager;
    uint256 public R;

    event RateUpdated(uint256 oldRate, uint256 newRate, address updatedBy);
    event ManagerChanged(address oldManager, address newManager);
    event InterestCalculated(uint256 P, uint256 T, uint256 R, uint256 interest, address user);

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager");
        _;
    }

    constructor(uint256 _rate) {
        manager = msg.sender;
        R = _rate;
    }

    function updateRate(uint256 _newRate) public onlyManager {
        uint256 oldRate = R;
        R = _newRate;
        emit RateUpdated(oldRate, _newRate, msg.sender);
    }

    function changeManager(address _newManager) public onlyManager {
        address old = manager;
        manager = _newManager;
        emit ManagerChanged(old, _newManager);
    }

    function calculateInterest(uint256 P, uint256 T) public returns (uint256) {
        uint256 interest = (P * R * T) / 100;
        emit InterestCalculated(P, T, R, interest, msg.sender);
        return interest;
    }
}
