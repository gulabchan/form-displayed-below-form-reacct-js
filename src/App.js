import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email };
    setSubmittedData([...submittedData, data]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h2>Submitted Data</h2>
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>
              {data.name} - {data.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Form;
