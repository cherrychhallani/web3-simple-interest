import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d1117",
      }}
    >
      <div
        style={{
          background: "#161b22",
          border: "1px solid #00ff9c",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          textAlign: "center",
          width: "350px",
        }}
      >
        <h1 style={{ color: "#00ff9c" ,marginBottom: "30px" }}>
          Simple Interest Web3 DApp
        </h1>

        <Link href="/set-rate">
          <button style={buttonStyle}>
            Set Interest Rate
          </button>
        </Link>

        <br /><br />

        <Link href="/calculate">
          <button style={buttonStyle}>
            Calculate Interest
          </button>
        </Link>
      </div>
    </main>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#161b22",
border: "1px solid #00ff9c",

  color: "#fff",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
};
