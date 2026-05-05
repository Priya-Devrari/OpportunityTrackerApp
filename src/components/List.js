function List(props) {
  function getInitials(name) {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  if (props.applications.length === 0) {
    return (
      <div className="empty">
        No applications yet. Add one above!
      </div>
    );
  }

  return (
    <div>
      {props.applications.map((app, index) => (
        <div className="app-card" key={index}>
          <div className="app-left">
            <div className="avatar">{getInitials(app.company)}</div>
            <div>
              <div className="app-company">{app.company}</div>
              <div className="app-role">{app.role}</div>
              <div className="app-date">{app.date}</div>
            </div>
          </div>

          <div className="app-right">
            <select
              className="status-select"
              value={app.status}
              onChange={(e) => props.updateStatus(index, e.target.value)}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>

            <span className={`badge badge-${app.status}`}>{app.status}</span>

            <button
              className="del-btn"
              onClick={() => props.deleteApp(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;