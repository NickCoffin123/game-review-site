import { useState } from "react";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("username : " + username);
  }

  return (
    <>
      <section className="mx-auto max-w-md px-8 py-16">
        <h1 className="text-5xl font-bold">Login</h1>
        <form 
        className="flex flex-col  gap-6 mt-8"
        onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              className="w-full bg-gray-100 text-gray-900 px-3 py-2 rounded-md border border-gray-300"
              autoComplete="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="w-full bg-gray-100 text-gray-900 px-3 py-2 rounded-md border border-gray-300"
              autoComplete="current-password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
          className="w-full bg-gray-100 text-gray-900 px-3 py-2 rounded-md border border-gray-300 hover:bg-black hover:text-white"
          type="submit"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}
