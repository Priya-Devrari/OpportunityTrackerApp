import { useState } from "react";

function Form(props) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  function handleSubmit() {
    if (!company.trim() || !role.trim()) return;

    const data = {
      company: company,
      role: role,
      status: status,
      date: new Date().toLocaleDateString("en-IN"),
    };

    props.addApplication(data);
    setCompany("");
    setRole("");
    setStatus("Applied");
  }

  return (
    <div className="form-card">
      <h2>Add Application</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Company</label>
          <input
            placeholder="e.g. Google"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <input
            placeholder="e.g. SDE Intern"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <button className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;