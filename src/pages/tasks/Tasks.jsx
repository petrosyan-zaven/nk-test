
import { useState, useEffect } from "react";

const api = "https://rocky-temple-83495.herokuapp.com/task";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    fetch(api)
      .then((result) => result.json())
      .then((data) => setTasks(data))
      .catch((error) => {
        throw new Error("Failed to fetch tasks: " + error.message);
      });
  }, []);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks?.length / tasksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Tasks">
      {currentTasks.map((task, i) => (
        <div className="cart" key={i}>
          <h2>{task.name}</h2>
          <h3>{task.description}</h3>
        </div>
      ))}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
