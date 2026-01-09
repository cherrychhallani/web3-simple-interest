export default function Home() {
  return (
    <div className="page">
      <div className="card">
        <h1>Simple Interest DApp</h1>

        <a href="/set-rate">
          <button>Manager Page</button>
        </a>

        <a href="/calculate">
          <button>User Page</button>
        </a>

        <a href="/events">
          <button>View Blockchain Events</button>
        </a>
      </div>
    </div>
  );
}
