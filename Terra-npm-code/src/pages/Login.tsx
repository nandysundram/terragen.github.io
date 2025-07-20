import { useState } from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [pass, setPass] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === "admin") {
      login("demo-token");
      nav("/wizard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent">
      <form onSubmit={submit} className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-sm space-y-6">
        <h1 className="text-3xl font-bold text-center text-primary">Welcome</h1>
        <input
          type="password"
          placeholder="Enter password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          className="w-full border border-muted rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-accent transition">
          Sign In
        </button>
      </form>
    </div>
  );
}