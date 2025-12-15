// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InterestCal {
    uint256 public R;

    function setRate(uint256 _R) public {
        R = _R;
    }

    function calculateInterest(uint256 P, uint256 T)
        public
        view
        returns (uint256)
    {
        return (P * R * T) / 100;
    }
}
