import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    lastName: "",
    login: "",
    createAccount: "",
    confirmAccount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = () => {
    console.log("Signing in...");
    // Add your sign-in logic here
  };

  const handleCreateAccount = () => {
    console.log("Creating account...");
    // Add your account creation logic here
    navigate("/");
  };

  return (
    <section className="container w-full h-full p-44">
      {" "}
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-around items-start gap-8">
          <div>
            <h1 className="text-3xl font-bold ">Hello there</h1>
            <p className="text-lg">
              Please sign in or create an account to continue.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold ">Sign in</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="capitalize">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="capitalize">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberDetails" className="w-4 h-4" />
              <label htmlFor="rememberDetails">Remember my details</label>
            </div>
            <button
              onClick={handleSignIn}
              className="w-80 h-12 bg-[#ED165F] text-white font-bold text-lg rounded-md"
            >
              Sign in
            </button>
            <p>Forgot password</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold capitalize">Create account</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="capitalize">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="capitalize">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="loginEmail" className="capitalize">
                Email
              </label>
              <input
                type="text"
                id="loginEmail"
                name="login"
                value={formData.login}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="createPassword" className="capitalize">
                Create Password
              </label>
              <input
                type="password"
                id="createPassword"
                name="createAccount"
                value={formData.createAccount}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Create password"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="confirmPassword" className="capitalize">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmAccount"
                value={formData.confirmAccount}
                onChange={handleChange}
                className="w-80 h-12 border-2 border-gray-300 rounded-md px-3"
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" className="w-4 h-4" />
              <label htmlFor="newsletter">
                I want to receive Safari newsletters with the best deals and
                offers
              </label>
            </div>
            <button
              onClick={handleCreateAccount}
              className="w-80 h-12 bg-[#ED165F] text-white font-bold text-lg rounded-md"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
