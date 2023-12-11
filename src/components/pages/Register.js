import React, { useContext, useState } from 'react'
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../../App';
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
  const { setUser } = useContext(Mycontext);

  const [errors, setErrors] = useState({})


  const handelchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })

  }
  const handilesubmit = (e) => {
    e.preventDefault()
    console.log('we are here');
    const validationErrors = {}
    if (!formData.username.trim()) {
      validationErrors.username = "username is not required"
    }
    if (!formData.email.trim()) {
      validationErrors.email = "email is requird"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid"
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is requird"
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 Character"
    }
    if (formData.confirmpassword !== formData.password) {
      validationErrors.confirmpassword = "password not match"
    }


    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted is successfully")

      navigate("/login");
      //LastData();
      setUser((user) => [...user, {
        id: user.length + 1,
        username: formData.username,
        email: formData.email,
        password: formData.password, 
        
      }])
    }
  }



  return (
    <div className='carta'>
      <Form className="form" onSubmit={handilesubmit}>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text"
            name='username'
            placeholder='username'
            onChange={handelchange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {errors.username && <span id='ERROR' >{errors.username}</span>}<br />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"
            name='email'
            placeholder="example@gmail.com"
            onChange={handelchange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {errors.email && <span id='ERROR'>{errors.email}</span>}<br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="password"
            placeholder="********"
            onChange={handelchange} />
        </Form.Group>

        {errors.password && <span id='ERROR'>{errors.password}</span>}<br />

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>confirmpassword</Form.Label>
          <Form.Control type="password"
            name="confirmpassword"
            placeholder="********"
            onChange={handelchange} />
        </Form.Group>
        {errors.confirmpassword && <span id='ERROR'>{errors.confirmpassword}</span>}<br />
        <Button variant="primary" className='submit' onClick={handilesubmit} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register