import { useState } from "react";

function HackathonForm(props) {
  const [name, setName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("Participated");

  function handleSubmit() {
    if (!name.trim() || !organizer.trim()) return;

    const data = {
      name: name,
      organizer: organizer,
      date: date,
      result: result,
    };

    props.addHackathon(data);
    setName("");
    setOrganizer("");
    setDate("");
    setResult("Participated");
  }

  return (
    <div className="form-card">
      <h2>Add Hackathon</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Hackathon Name</label>
          <input
            placeholder="e.g. Smart India Hackathon"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Organizer</label>
          <input
            placeholder="e.g. Government of India"
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Result</label>
          <select value={result} onChange={(e) => setResult(e.target.value)}>
            <option value="Participated">Participated</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Won">Won</option>
          </select>
        </div>
        <button className="add-btn" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}

export default HackathonForm;