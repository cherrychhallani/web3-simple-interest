"use client";

import Web3 from "web3";
import { useEffect, useState } from "react";

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

function stringifyBigInt(obj: any) {
  return JSON.stringify(
    obj,
    (_, value) => (typeof value === "bigint" ? value.toString() : value),
    2
  );
}

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    if (typeof window === "undefined") return;

    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      alert("MetaMask not detected");
      return;
    }

    const web3 = new Web3(ethereum);
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

    const managerChanged = await contract.getPastEvents("ManagerChanged", {
      fromBlock: 0,
      toBlock: "latest",
    });

    const rateUpdated = await contract.getPastEvents("RateUpdated", {
      fromBlock: 0,
      toBlock: "latest",
    });

    const interestCalculated = await contract.getPastEvents(
      "InterestCalculated",
      {
        fromBlock: 0,
        toBlock: "latest",
      }
    );

    const allEvents = [
      ...managerChanged.map((e) => ({
        type: "ManagerChanged",
        data: e.returnValues,
      })),
      ...rateUpdated.map((e) => ({
        type: "RateUpdated",
        data: e.returnValues,
      })),
      ...interestCalculated.map((e) => ({
        type: "InterestCalculated",
        data: e.returnValues,
      })),
    ];

    console.log("Blockchain Events:", allEvents);
    setEvents(allEvents);
  }

  return (
  <div className="page">
    <div
      className="card"
      style={{
        width: "85%",
        maxWidth: "1100px"
      }}
    >
      <h2>Blockchain Event Logs</h2>

      {events.length === 0 && <p>No events found</p>}

      {events.map((e, i) => (
        <div key={i} style={{ marginBottom: 30 }}>
          <strong>{e.type}</strong>
          <pre>{stringifyBigInt(e.data)}</pre>
        </div>
      ))}
    </div>
  </div>
);

}
