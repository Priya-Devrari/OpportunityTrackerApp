
function List(props) {
  return (
    <div>
      <h2>Applications List</h2>

      {props.applications.map((app, index) => (
        <div key={index}>
          <p>{app.company}</p>
          <p>{app.role}</p>
          <p>Status: {app.status}</p>

          <button onClick={() => props.updateStatus(index, "Selected")}>
            Select
          </button>

          <button onClick={() => props.updateStatus(index, "Rejected")}>
            Reject
          </button>

          <button onClick={() => props.deleteApp(index)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default List;

