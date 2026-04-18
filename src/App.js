import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";

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

  // ✅ useEffect INSIDE function
  useEffect(() => {
    localStorage.setItem("apps", JSON.stringify(applications));
  }, [applications]);

  return (
    <div>
      <h1>Opportunity Tracker</h1>

      <Form addApplication={addApplication} />

      <List
        applications={applications}
        updateStatus={updateStatus}
        deleteApp={deleteApp}
      />
    </div>
  );
}

export default App;