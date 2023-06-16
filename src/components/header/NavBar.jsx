import './Navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='NavBar'>
        <Link to='/'>Employees</Link>
        <Link to='/tasks'>Tasks</Link>
        <Link to='/add'>Add Employees</Link>
        <Link to='/create-task'>Create task</Link>

    </nav>
  )
}

export default NavBar