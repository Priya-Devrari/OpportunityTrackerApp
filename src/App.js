import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("apps");
    return saved ? JSON.parse(saved) : [];
  });

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

  useEffect(() => {
    localStorage.setItem("apps", JSON.stringify(applications));
  }, [applications]);

  const total = applications.length;
  const interview = applications.filter((a) => a.status === "Interview").length;
  const selected = applications.filter((a) => a.status === "Selected").length;
  const rejected = applications.filter((a) => a.status === "Rejected").length;

  return (
    <div className="container">
      <h1>Opportunity Tracker</h1>
      <p className="subtitle">Track your job applications and hackathons</p>

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

      <Form addApplication={addApplication} />

      <p className="section-title">Applications</p>
      <List
        applications={applications}
        updateStatus={updateStatus}
        deleteApp={deleteApp}
      />
    </div>
  );
}

export default App;