"use client";

import { useState } from "react";
import Web3 from "web3";

export default function Calculate() {
  const [P, setP] = useState("");
  const [T, setT] = useState("");
  const [result, setResult] = useState("");

  async function calculateInterest() {
    const web3 = new Web3((window as any).ethereum);
    await (window as any).ethereum.request({ method: "eth_requestAccounts" });

    const contractAddress = "0xa0043A051A6b86f78a0D84Dac9dE3305BA262017";
    const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_R",
				"type": "uint256"
			}
		],
		"name": "setRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "P",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "T",
				"type": "uint256"
			}
		],
		"name": "calculateInterest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "R",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

    const contract = new web3.eth.Contract(abi, contractAddress);
    const value = await contract.methods.calculateInterest(P, T).call();

    setResult(value);
  }

  return (
    <main style={pageStyle}>
      <div style={cardStyle}>
        <h2>Calculate Simple Interest</h2>

        <input
          placeholder="Principal (P)"
          onChange={(e) => setP(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Time (T in years)"
          onChange={(e) => setT(e.target.value)}
          style={inputStyle}
        />

        <button onClick={calculateInterest} style={buttonStyle}>
          Calculate
        </button>

        <h3 style={{ marginTop: "20px" }}>
          Simple Interest: <span style={{ color: "#16a34a" }}>{result}</span>
        </h3>
      </div>
    </main>
  );
}

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0d1117", // dark blackish
};

const cardStyle = {
  background: "#161b22", // slightly lighter dark
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 0 20px rgba(0, 255, 0, 0.15)",
  width: "350px",
  textAlign: "center",
  border: "1px solid #00ff9c",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #00ff9c",
  background: "#0d1117",
  color: "#ffffff",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#00ff9c", // neon green
  color: "#000000",      // black text
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

