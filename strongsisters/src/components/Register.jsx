// // src/components/Register.jsx
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert('User registered successfully');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//           className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//           className="w-full p-2 border border-gray-300 rounded-lg mb-4"
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
