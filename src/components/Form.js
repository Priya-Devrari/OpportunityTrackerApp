
import { useState } from "react";

function Form(props) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      company: company,
      role: role,
      status: "Applied"
    };

    props.addApplication(data);

    setCompany("");
    setRole("");
  }

  return (
    <div>
      <h2>Add Application</h2>

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Form;