// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="container mt-5">
//       <div className="row align-items-center">
//         {/* Left Section */}
//         <div className="col-md-6 text-center text-md-start">
//           <h1 className="display-5 fw-bold mb-3 text-primary">Order Management System</h1>
//           <p className="lead text-muted">
//             Manage your orders efficiently — create, track, and organize all your customer orders in one place.
//           </p>
//           <div className="mt-4 d-flex gap-3">
//             <Link to="/signin" className="btn btn-success">🔐 Sign In</Link>
//             <Link to="/signup" className="btn btn-outline-primary">📝 Sign Up</Link>
//           </div>
//         </div>

//         {/* Right Section - Optional Image */}
//         <div className="col-md-6 text-center mt-4 mt-md-0">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
//             alt="Order illustration"
//             className="img-fluid"
//             style={{ maxHeight: '300px' }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-4 flex-column-reverse flex-md-row">
        
        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold mb-3 text-primary">
            Order Management System
          </h1>
          <p className="lead text-muted">
            Manage your orders efficiently — create, track, and organize all your customer orders in one place.
          </p>
          <div className="mt-4 d-grid gap-2 d-md-flex justify-content-center justify-content-md-start">
            <Link to="/signin" className="btn btn-success px-4 py-2">
              🔐 Sign In
            </Link>
            <Link to="/signup" className="btn btn-outline-primary px-4 py-2">
              📝 Sign Up
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
            alt="Order illustration"
            className="img-fluid"
            style={{ maxHeight: '300px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

