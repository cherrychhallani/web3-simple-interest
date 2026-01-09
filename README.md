# 🧮 Simple Interest DApp (Web3 Project)

This project is a **Simple Interest Calculator Decentralized Application (DApp)** built using **Ethereum Blockchain**, **Solidity Smart Contracts**, and a **Next.js (React) frontend**.
It supports **role-based access** with a **Manager** and **User**, and displays **blockchain event logs** on the UI.

---

## 📌 Features

### 👔 Manager

* Connect wallet using MetaMask
* Update Interest Rate (R)
* Transfer Manager Role to another Ethereum address

### 👤 User

* Connect wallet
* Enter Principal (P) and Time (T)
* Calculate Simple Interest using blockchain logic

### 📜 Event Logs

* Displays blockchain events on UI:

  * ManagerChanged
  * RateUpdated
  * InterestCalculated
* Events are also printed in browser console

---

## 📐 Formula Used

Simple Interest:

SI = (P × R × T) / 100

Where:

* P = Principal
* R = Interest Rate (stored on blockchain)
* T = Time (years)

---

## 🧱 Tech Stack

| Layer          | Technology               |
| -------------- | ------------------------ |
| Smart Contract | Solidity                 |
| IDE            | Remix IDE                |
| Blockchain     | Ganache (Local Ethereum) |
| Wallet         | MetaMask                 |
| Frontend       | Next.js (React)          |
| Web3 Library   | web3.js                  |
| OS             | Ubuntu / Linux           |

---

## 📂 Project Structure

app/
├─ page.tsx            → Home page

├─ set-rate/page.tsx   → Manager dashboard

├─ calculate/page.tsx  → User dashboard

├─ events/page.tsx     → Blockchain event logs

├─ globals.css         → Global UI styling

---

## ⚙️ Step-by-Step Setup Guide

### ✅ 1. Install Dependencies

```bash
npm install
npm install web3
```

---

### ✅ 2. Start Ganache

1. Open Ganache
2. Click **Quickstart Ethereum**
3. Keep it running
4. Note RPC Server:

```
http://127.0.0.1:8545
```

---

### ✅ 3. Configure MetaMask

1. Install MetaMask extension
2. Add Network → Manual

| Field        | Value                                          |
| ------------ | ---------------------------------------------- |
| Network Name | Ganache                                        |
| RPC URL      | [http://127.0.0.1:8545](http://127.0.0.1:8545) |
| Chain ID     | 1337                                           |
| Currency     | ETH                                            |

3. Import account using private keys from Ganache

---

### ✅ 4. Deploy Smart Contract (Remix)

1. Go to: [https://remix.ethereum.org](https://remix.ethereum.org)
2. Create file: `interestCal.sol`
3. Paste smart contract code
4. Compile with Solidity 0.8.x
5. Deploy using:

   * Environment: Injected Provider (MetaMask)
   * Constructor value: 5

Deployer becomes **Manager**.

---

### ✅ 5. Copy ABI and Contract Address

After deployment in Remix:

* Copy **Contract Address**
* Copy **ABI**

Paste both into:

* app/set-rate/page.tsx
* app/calculate/page.tsx
* app/events/page.tsx

---

### ✅ 6. Run Frontend

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔐 Role-Based Access

* Only Manager can:

  * Update Rate
  * Change Manager

* Any user can:

  * Calculate Interest

Smart contract enforces access using `onlyManager` modifier.

---

## 📢 Blockchain Events

Events emitted:

* RateUpdated(oldRate, newRate, updatedBy)
* ManagerChanged(oldManager, newManager)
* InterestCalculated(P, T, R, interest, user)

These are:

* Visible in Remix logs
* Visible in Ganache transactions
* Displayed on `/events` page

---

## 🧠 Key Concepts Demonstrated

* Smart Contracts
* MetaMask integration
* Web3 transactions
* Events and Logs
* Role-based authorization
* Frontend-blockchain interaction

---

## 🧪 Testing Instructions

1. Open `/set-rate`
2. Connect Manager wallet
3. Update Rate → Success
4. Switch MetaMask account
5. Try update rate → Fails
6. Go to `/calculate`
7. Calculate interest
8. View logs in `/events`

---

## 🚀 Future Improvements

* Live real-time event streaming
* Wallet auto-detection
* Better UI animations
* Database-backed history

---

## 👩‍💻 Author

Cherry Sandeep Chhallani

---

## 📜 License

This project is for academic and learning purposes only.
