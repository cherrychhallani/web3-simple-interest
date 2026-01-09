# 🌐 Web3 Simple Interest Calculator

This project is a simple **Web3 decentralized application (DApp)** to calculate **Simple Interest** using a **Solidity smart contract** and a **NextJS frontend**.

---

## 📐 Simple Interest Formula

SI = (P × R × T) / 100

Where:
- **P** = Principal amount  
- **R** = Rate of interest (stored on blockchain)  
- **T** = Time period (in years)

---

## 🛠 Tech Stack Used

- **Frontend:** NextJS (React, App Router)
- **Smart Contract:** Solidity
- **IDE:** Remix IDE
- **Blockchain Simulator:** Ganache
- **Wallet:** MetaMask
- **Web3 Library:** web3.js
- **Platform:** Unix (Ubuntu)

---

## 📁 Project Structure

```

web3-simple-interest/
├── app/                    # NextJS frontend pages
├── contracts/
│   └── interestCal.sol     # Solidity smart contract
├── package.json
├── README.md

````

---

## 🔐 Smart Contract Features

- Stores interest rate (`R`) on the blockchain
- Allows updating interest rate using MetaMask
- Calculates simple interest using the stored rate

---

## ▶️ How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ````

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open browser:

   ```
   http://localhost:3000
   ```

---

## ⛓ Blockchain Setup

* Ganache is used as a local Ethereum blockchain
* MetaMask is connected to the Ganache network
* Smart contract is compiled and deployed using Remix IDE
* Contract address and ABI are used in the frontend to interact with the blockchain

---

## 📝 Notes

* Setting the interest rate requires a blockchain transaction and MetaMask confirmation
* Calculating interest is a read-only operation and does not require gas

---

## 👤 Author

**Cherry Chhallani**
