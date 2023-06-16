

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css'


const api = 'https://rocky-temple-83495.herokuapp.com/employees'

function Home() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        fetch(api)
            .then(result => result.json())
            .then(data => setUsers(data))
            .catch(error => {
                throw new Error("Failed to fetch products: " + error.message);
            });
    }, []);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='Home'>
            {
                currentUsers.map((user, i) => {
                    return (
                        <div className='cart' key={i}>
                            <Link to={'/user/' + user.id}>{user.name}</Link>
                        </div>
                    )
                })
            }

            <div className="pagination">
                {
                    Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={currentPage === i + 1 ? 'active' : ''}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;
