import { useState } from "react";
import useEmploy from "../../hooks/useEmploy";

function CreatTask() {
  const employes = useEmploy();
  console.log(employes);

  const [task, setTask] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    employed: "",
  });

  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "content-type": "application/json",
    };

    setTask({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      employed: "",
    });
    console.log(task, "a");

    fetch("https://rocky-temple-83495.herokuapp.com/tasks", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      
      .catch((error) => {
        console.error("Error adding the task:", error);
      });
  };

  return (
    <div className="CreatTask">
      <h2>Add Task</h2>

      <form onSubmit={onSubmit}>
        <div className="inp">
          <input
            type="text"
            placeholder="name"
            value={task.name}
            onChange={(e) => onInputChange(e)}
            name="name"
          />
        </div>

        <div className="inp">
          <input
            type="text"
            placeholder="description"
            value={task.description}
            onChange={(e) => onInputChange(e)}
            name="description"
          />
        </div>

        <div className="inp">
          <input
            type="date"
            placeholder="start date"
            value={task.startDate}
            onChange={(e) => onInputChange(e)}
            name="startDate"
          />
        </div>

        <div className="inp">
          <input
            type="date"
            placeholder="end date"
            value={task.endDate}
            onChange={(e) => onInputChange(e)}
            name="endDate"
          />
        </div>



        <select name="employ" onChange={(e) => onInputChange(e)}>
          {employes?.map((employ, i) => (
            <option key={i} value={employ.id}>
              {employ.name}
            </option>
          ))}
        </select>

        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default CreatTask;
