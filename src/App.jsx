import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Employ from './pages/employ/Employ'
import NavBar from './components/header/NavBar'
import AddEmployess from './pages/addEmployees/AddEmployess'
import CreatTask from './pages/creatTask/CreatTask'
import Tasks from './pages/tasks/Tasks'

function App() {
  return (
    <div className='App'>
    <>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/user/:id' element = {<Employ />}/>
          <Route path='/add' element = {<AddEmployess  />}/>
          <Route path='/create-task' element = {<CreatTask  />}/>
          <Route path='/tasks' element = {<Tasks />}/>
        </Routes>
      </Router>
    </>
    </div>
  )
}

export default App