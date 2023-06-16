
import { useState } from "react";

function AddEmployess() {
  
  const [employ, setEmploy] = useState({
    name: "",
    surname: "",
    email: "",
    position: "",
  });

  const onInputChange = (e) => {
    setEmploy({ ...employ, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Regex pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "content-type": "application/json",
    };

    if (!validateEmail(employ.email)) {
      alert("Invalid email address");
      return;
    }

    setEmploy({ name: "", surname: "", email: "", position: "" });
    fetch("https://rocky-temple-83495.herokuapp.com/employees", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(employ),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error adding the employ:", error);
      });
  };

  return (
    <div className="AddEmployess">
      <h2>Add Employ</h2>

      <form onSubmit={onSubmit}>
        <div className="add-inp">
          <input
            type="text"
            placeholder="name"
            value={employ.name}
            onChange={(e) => onInputChange(e)}
            name="name"
          />
        </div>

        <div className="add-inp">
          <input
            type="text"
            placeholder="surname"
            value={employ.surname}
            onChange={(e) => onInputChange(e)}
            name="surname"
          />
        </div>

        <div className="add-inp">
          <input
            type="text"
            placeholder="email"
            value={employ.email}
            onChange={(e) => onInputChange(e)}
            name="email"
          />
        </div>

        <div className="add-inp">
          <input
            type="text"
            placeholder="position"
            value={employ.position}
            onChange={(e) => onInputChange(e)}
            name="position"
          />
        </div>

        <button type="submit">Add Employ</button>
      </form>
    </div>
  );
}

export default AddEmployess;
