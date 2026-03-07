import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("User registered:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow rounded max-w-md mx-auto md:max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="block w-full border rounded px-3 py-2 mb-2"
      />
      {errors.username && <p className="text-red-600">{errors.username}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block w-full border rounded px-3 py-2 mb-2"
      />
      {errors.email && <p className="text-red-600">{errors.email}</p>}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block w-full border rounded px-3 py-2 mb-2"
      />
      {errors.password && <p className="text-red-600">{errors.password}</p>}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded md:w-auto w-full">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
