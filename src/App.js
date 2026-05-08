import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Chart from "./components/Chart";
import HackathonForm from "./components/HackathonForm";
import HackathonList from "./components/HackathonList";
import "./App.css";

function App() {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("apps");
    return saved ? JSON.parse(saved) : [];
  });

  const [hackathons, setHackathons] = useState(() => {
    const saved = localStorage.getItem("hackathons");
    return saved ? JSON.parse(saved) : [];
  });

  const [activeTab, setActiveTab] = useState("jobs");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState(""); 

  function addApplication(app) {
    setApplications([...applications, app]);
  }

  function updateStatus(index, status) {
    const updated = [...applications];
    updated[index].status = status;
    setApplications(updated);
  }

  function deleteApp(index) {
    const updated = applications.filter((_, i) => i !== index);
    setApplications(updated);
  }

  function addHackathon(h) {
    setHackathons([...hackathons, h]);
  }

  function updateHackathonStatus(index, status) {
    const updated = [...hackathons];
    updated[index].result = status;
    setHackathons(updated);
  }

  function deleteHackathon(index) {
    const updated = hackathons.filter((_, i) => i !== index);
    setHackathons(updated);
  }

  useEffect(() => {
    localStorage.setItem("apps", JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem("hackathons", JSON.stringify(hackathons));
  }, [hackathons]);

  const total = applications.length;
  const interview = applications.filter((a) => a.status === "Interview").length;
  const selected = applications.filter((a) => a.status === "Selected").length;
  const rejected = applications.filter((a) => a.status === "Rejected").length;

  const totalH = hackathons.length;
  const wonH = hackathons.filter((h) => h.result === "Won").length;
  const participatedH = hackathons.filter((h) => h.result === "Participated").length;
  const shortlistedH = hackathons.filter((h) => h.result === "Shortlisted").length;

  return (
    <div className="container">
      <h1>Opportunity Tracker</h1>
      <p className="subtitle">Track your job applications and hackathons</p>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "jobs" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("jobs")}
        >
          💼 Jobs
        </button>
        <button
          className={`tab-btn ${activeTab === "hackathons" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("hackathons")}
        >
          🏆 Hackathons
        </button>
      </div>

      {activeTab === "jobs" && (
        <>
          <div className="stats">
            <div className="stat-card stat-total">
              <div className="stat-num">{total}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-card stat-interview">
              <div className="stat-num">{interview}</div>
              <div className="stat-label">Interview</div>
            </div>
            <div className="stat-card stat-selected">
              <div className="stat-num">{selected}</div>
              <div className="stat-label">Selected</div>
            </div>
            <div className="stat-card stat-rejected">
              <div className="stat-num">{rejected}</div>
              <div className="stat-label">Rejected</div>
            </div>
          </div>
          <Chart applications={applications} />
          <Form addApplication={addApplication} />
          <p className="section-title">Applications</p>
          <div className="filter-buttons">
            {["All", "Applied", "Interview", "Selected", "Rejected"].map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
         <div className="search-bar">
  <input
    placeholder="🔍 Search by company name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

<List
  applications={(filter === "All" ? applications : applications.filter((a) => a.status === filter))
    .filter((a) => a.company.toLowerCase().includes(search.toLowerCase()))}
  updateStatus={updateStatus}
  deleteApp={deleteApp}
/>
        </>
      )}

      {activeTab === "hackathons" && (
        <>
          <div className="stats">
            <div className="stat-card stat-total">
              <div className="stat-num">{totalH}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-card stat-selected">
              <div className="stat-num">{wonH}</div>
              <div className="stat-label">Won</div>
            </div>
            <div className="stat-card stat-interview">
              <div className="stat-num">{shortlistedH}</div>
              <div className="stat-label">Shortlisted</div>
            </div>
            <div className="stat-card stat-rejected">
              <div className="stat-num">{participatedH}</div>
              <div className="stat-label">Participated</div>
            </div>
          </div>
          <HackathonForm addHackathon={addHackathon} />
          <p className="section-title">Hackathons</p>
          <HackathonList
            hackathons={hackathons}
            updateHackathonStatus={updateHackathonStatus}
            deleteHackathon={deleteHackathon}
          />
        </>
      )}
    </div>
  );
}

export default App;