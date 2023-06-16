
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Employ.css';

const api = 'https://rocky-temple-83495.herokuapp.com/employees/';

function Employ() {
  const [employ, setEmploy] = useState({
    name: '',
    surname: '',
    email: '',
    position: '',
  });

  const { id } = useParams();
  const  navigate = useNavigate('');

  useEffect(() => {
    fetch(api + id)
      .then((result) => result.json())
      .then((data) => setEmploy(data))
      .catch((error) => {
        throw new Error('Failed to fetch employs: ' + error.message);
      });
  }, [id]);

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
      'content-type': 'application/json',
    };

    if (!validateEmail(employ.email)) {
      alert('Invalid email address');
      return;
    }

    fetch(api + id, {
      method: 'PUT', 
      headers: headers,
      body: JSON.stringify(employ),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch((error) => {
        console.error('Error editing the employ:', error);
      });
  };

  const handleDelete = () => {
    fetch(api + id, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          
        }
        navigate('/')
      
      })
      .catch((error) => {
        console.error('Error deleting the employ:', error);
      });
      navigate('/')
  };

  return (
    <div className='employ'>
      <h2>You can edit employed here</h2>

      <form className='form-employ' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='name'
          value={employ.name}
          onChange={(e) => onInputChange(e)}
          name='name'
        />

        <input
          type='text'
          placeholder='surname'
          value={employ.surname}
          onChange={(e) => onInputChange(e)}
          name='surname'
        />

        <input
          type='text'
          placeholder='email'
          value={employ.email}
          onChange={(e) => onInputChange(e)}
          name='email'
        />

        <input
          type='text'
          placeholder='position'
          value={employ.position}
          onChange={(e) => onInputChange(e)}
          name='position'
        />

        <button type='submit'>Edit</button>
      </form>
      <button className='delete' onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Employ;
