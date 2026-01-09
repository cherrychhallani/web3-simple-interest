"use client";

import Web3 from "web3";
import { useState } from "react";

const ABI = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "P", "type": "uint256" },
      { "internalType": "uint256", "name": "T", "type": "uint256" }
    ],
    "name": "calculateInterest",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "_newManager", "type": "address" }],
    "name": "changeManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_rate", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "P", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "T", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "R", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "interest", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "user", "type": "address" }
    ],
    "name": "InterestCalculated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "address", "name": "oldManager", "type": "address" },
      { "indexed": false, "internalType": "address", "name": "newManager", "type": "address" }
    ],
    "name": "ManagerChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "oldRate", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newRate", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "updatedBy", "type": "address" }
    ],
    "name": "RateUpdated",
    "type": "event"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_newRate", "type": "uint256" }],
    "name": "updateRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "manager",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "R",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  }
];

const CONTRACT_ADDRESS = "0x80d1c9ee8934EEb73645aE7a182Ee4d460Cd6105";

export default function SetRate() {
  const [rate, setRate] = useState("");
  const [newManager, setNewManager] = useState("");
  const [account, setAccount] = useState("");

  async function connect() {
    if (typeof window === "undefined") return;
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      alert("MetaMask not detected");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  }

  async function updateRate() {
    if (!account) {
      alert("Connect wallet first");
      return;
    }
    const web3 = new Web3((window as any).ethereum);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    await contract.methods.updateRate(rate).send({ from: account });
  }

  async function changeManager() {
    if (!account) {
      alert("Connect wallet first");
      return;
    }
    const web3 = new Web3((window as any).ethereum);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    await contract.methods.changeManager(newManager).send({ from: account });
  }

  return (
    <div className="page">
      <div className="card">
        <h2>Manager Dashboard</h2>

        <button onClick={connect}>Connect Wallet</button>
        <p style={{ wordBreak: "break-all" }}>Connected: {account}</p>

        <hr />

        <h3>Update Interest Rate</h3>
        <input
          placeholder="New Rate"
          onChange={(e) => setRate(e.target.value)}
        />
        <button onClick={updateRate}>Update Rate</button>

        <hr />

        <h3>Change Manager</h3>
        <input
          placeholder="New Manager Address"
          onChange={(e) => setNewManager(e.target.value)}
        />
        <button onClick={changeManager}>Change Manager</button>
      </div>
    </div>
  );
}
