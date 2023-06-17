
// import { useState, useEffect } from "react";

// const api = "https://rocky-temple-83495.herokuapp.com/tasks";

// function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const tasksPerPage = 5;

//   useEffect(() => {
//     fetch(api)
//       .then((result) => result.json())
//       .then((data) => setTasks(data))
//       .catch((error) => {
//         throw new Error("Failed to fetch tasks: " + error.message);
//       });
//   }, []);

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

//   const totalPages = Math.ceil(tasks?.length / tasksPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };
//   console.log(tasks);

//   return (
//     <div className="Tasks">
//       {currentTasks.map((task, i) => (
//         <div className="cart" key={i}>
//           <h2>{task.name}</h2>
//           <h3>{task.description}</h3>
//           <h3>{task.employed}emp</h3>
//         </div>
//       ))}

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={currentPage === i + 1 ? "active" : ""}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tasks;



// import { useState, useEffect } from "react";

// const api = "https://rocky-temple-83495.herokuapp.com/tasks";

// function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchParams, setSearchParams] = useState({
//     name_like: "",
//     description_like: "",
//     startDate: "",
//     endDate: ""
//   });
//   const tasksPerPage = 5;

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   useEffect(() => {
//     fetchTasks();
//   }, [searchParams]);

//   const fetchTasks = () => {
//     const url = new URL(api);
//     const params = new URLSearchParams(searchParams);
//     url.search = params.toString();

//     fetch(url)
//       .then((result) => result.json())
//       .then((data) => setTasks(data))
//       .catch((error) => {
//         throw new Error("Failed to fetch tasks: " + error.message);
//       });
//   };

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

//   const totalPages = Math.ceil(tasks?.length / tasksPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchChange = (event) => {
//     setSearchParams((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value
//     }));
//   };

//   return (
//     <div className="Tasks">
//       <div className="search-bar">
//         <input
//           type="text"
//           name="name_like"
//           placeholder="Search by name"
//           value={searchParams.name_like}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="description_like"
//           placeholder="Search by description"
//           value={searchParams.description_like}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="startDate"
//           placeholder="Start Date (MM/DD/YYYY)"
//           value={searchParams.startDate}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="endDate"
//           placeholder="End Date (MM/DD/YYYY)"
//           value={searchParams.endDate}
//           onChange={handleSearchChange}
//         />
//         <button onClick={fetchTasks}>Search</button>
//       </div>

//       {currentTasks.map((task, i) => (
//         <div className="cart" key={i}>
//           <h2>{task.name}</h2>
//           <h3>{task.description}</h3>
//         </div>
//       ))}

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={currentPage === i + 1 ? "active" : ""}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tasks;

// import { useState, useEffect } from "react";

// const api = "https://rocky-temple-83495.herokuapp.com/tasks";

// function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchParams, setSearchParams] = useState({
//     name_like: "",
//     description_like: "",
//     startDate: "",
//     endDate: ""
//   });
//   const tasksPerPage = 5;

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   useEffect(() => {
//     fetchTasks();
//   }, [searchParams]);

//   const fetchTasks = () => {
//     const url = new URL(api);
//     const params = new URLSearchParams(searchParams);
//     url.search = params.toString();

//     fetch(url)
//       .then((result) => result.json())
//       .then((data) => setTasks(data))
//       .catch((error) => {
//         throw new Error("Failed to fetch tasks: " + error.message);
//       });
//   };

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

//   const totalPages = Math.ceil(tasks?.length / tasksPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchChange = (event) => {
//     setSearchParams((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value
//     }));
//   };

//   return (
//     <div className="Tasks">
//       <div className="search-bar">
//         <input
//           type="text"
//           name="name_like"
//           placeholder="Search by name"
//           value={searchParams.name_like}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="description_like"
//           placeholder="Search by description"
//           value={searchParams.description_like}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="startDate"
//           placeholder="Start Date (MM/DD/YYYY)"
//           value={searchParams.startDate}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="endDate"
//           placeholder="End Date (MM/DD/YYYY)"
//           value={searchParams.endDate}
//           onChange={handleSearchChange}
//         />
//         <button onClick={() => setSearchParams({
//           name_like: "",
//           description_like: "",
//           startDate: "",
//           endDate: ""
//         })}>Reset</button>
//         <button onClick={fetchTasks}>Search</button>
//       </div>

//       {currentTasks.map((task, i) => (
//         <div className="cart" key={i}>
//           <h2>{task.name}</h2>
//           <h3>{task.description}</h3>
//         </div>
//       ))}

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={currentPage === i + 1 ? "active" : ""}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tasks;


// import { useState, useEffect } from "react";

// const api = "https://rocky-temple-83495.herokuapp.com/tasks";

// function Tasks() {
//   const [tasks, setTasks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     name_like: "",
//     description_like: "",
//     startDate: "",
//     endDate: ""
//   });
//   const tasksPerPage = 5;

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   useEffect(() => {
//     fetchTasks();
//   }, [filters]);

//   const fetchTasks = () => {
//     const url = new URL(api);
//     const params = new URLSearchParams(filters);
//     url.search = params.toString();

//     fetch(url)
//       .then((result) => result.json())
//       .then((data) => setTasks(data))
//       .catch((error) => {
//         throw new Error("Failed to fetch tasks: " + error.message);
//       });
//   };

//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

//   const totalPages = Math.ceil(tasks?.length / tasksPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFilterChange = (event) => {
//     setFilters((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value
//     }));
//   };

//   const handleFilterReset = () => {
//     setFilters({
//       name_like: "",
//       description_like: "",
//       startDate: "",
//       endDate: ""
//     });
//   };

//   return (
//     <div className="Tasks">
//       <div className="filter-bar">
//         <input
//           type="text"
//           name="name_like"
//           placeholder="Filter by name"
//           value={filters.name_like}
//           onChange={handleFilterChange}
//         />
//         <input
//           type="text"
//           name="description_like"
//           placeholder="Filter by description"
//           value={filters.description_like}
//           onChange={handleFilterChange}
//         />
//         <input
//           type="text"
//           name="startDate"
//           placeholder="Filter by Start Date (MM/DD/YYYY)"
//           value={filters.startDate}
//           onChange={handleFilterChange}
//         />
//         <input
//           type="text"
//           name="endDate"
//           placeholder="Filter by End Date (MM/DD/YYYY)"
//           value={filters.endDate}
//           onChange={handleFilterChange}
//         />
//         <button onClick={handleFilterReset}>Reset Filters</button>
//       </div>

//       {currentTasks.map((task, i) => (
//         <div className="cart" key={i}>
//           <h2>{task.name}</h2>
//           <h3>{task.description}</h3>
//           <h3>{task.employed}emp</h3>
//         </div>
//       ))}

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={currentPage === i + 1 ? "active" : ""}
//             onClick={() => handlePageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Tasks;

import { useState, useEffect } from "react";

const api = "https://rocky-temple-83495.herokuapp.com/tasks";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    fetch(api)
      .then((result) => result.json())
      .then((data) => {
        setTasks(data);
        setFilteredTasks(data);
      })
      .catch((error) => {
        throw new Error("Failed to fetch tasks: " + error.message);
      });
  }, []);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(filteredTasks?.length / tasksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const filtered = tasks.filter((task) =>
      task[name]?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTasks(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="Tasks">
      <div className="filter-bar">
        <input
          type="text"
          name="name_like"
          placeholder="Filter by name"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="description_like"
          placeholder="Filter by description"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Filter by Start Date (MM/DD/YYYY)"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="Filter by End Date (MM/DD/YYYY)"
          onChange={handleFilterChange}
        />
        <button onClick={() => setFilteredTasks(tasks)}>Reset Filters</button>
      </div>

      {currentTasks.map((task, i) => (
        <div className="cart" key={i}>
          <h2>{task.name}</h2>
          <h3>{task.description}</h3>
          <h3>{task.employed}emp</h3>
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
