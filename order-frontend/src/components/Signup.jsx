


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      toast.success('Signup Successful');
      navigate('/signin');
    } catch (err) {
      toast.error(err.response?.data?.error || '❌ Signup Failed');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h2 className="mb-4 text-center">📝 Sign Up</h2>
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label>Name</label>
              <input name="name" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input name="email" type="email" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Phone</label>
              <input name="phone" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input name="password" type="password" className="form-control" required onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <div className="mt-3 text-center">
            <span>Already have an account? </span>
            <a href="/signin" className="text-primary fw-semibold">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

