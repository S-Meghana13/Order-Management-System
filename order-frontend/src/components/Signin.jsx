


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', form);
      toast.success('Signin Successful');
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userEmail', res.data.user.email);
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.error || '❌ Signin Failed');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h2 className="mb-4 text-center">🔐 Sign In</h2>
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
              <label>Email</label>
              <input name="email" type="email" className="form-control" required onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input name="password" type="password" className="form-control" required onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
          <div className="mt-3 text-center">
            <span>Don't have an account? </span>
            <a href="/signup" className="text-primary fw-semibold">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

