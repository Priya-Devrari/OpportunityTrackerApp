function HackathonList(props) {
  function getInitials(name) {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  if (props.hackathons.length === 0) {
    return (
      <div className="empty">
        No hackathons yet. Add one above!
      </div>
    );
  }

  return (
    <div>
      {props.hackathons.map((h, index) => (
        <div className="app-card" key={index}>
          <div className="app-left">
            <div className="avatar" style={{ background: "#fff4e0", color: "#b97a00" }}>
              {getInitials(h.name)}
            </div>
            <div>
              <div className="app-company">{h.name}</div>
              <div className="app-role">{h.organizer}</div>
              <div className="app-date">{h.date}</div>
            </div>
          </div>

          <div className="app-right">
            <select
              className="status-select"
              value={h.result}
              onChange={(e) => props.updateHackathonStatus(index, e.target.value)}
            >
              <option value="Participated">Participated</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Won">Won</option>
            </select>

            <span className={`badge ${
              h.result === "Won" ? "badge-Selected" :
              h.result === "Shortlisted" ? "badge-Interview" :
              "badge-Applied"
            }`}>
              {h.result}
            </span>

            <button
              className="del-btn"
              onClick={() => props.deleteHackathon(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HackathonList;