import Button from "./components/button/button";
import { useMutation } from "react-query";
import { useState } from "react";
import axios from "axios";

const API_URL = "https://localhost:4200/api";

export default function Atho() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState(null);
  const { mutate, isLoading } = useMutation(
    "login",
    () =>
      axios.post(
        `${API_URL}/auth/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      ),
    {
      onSuccess: ({ data }) => {
        setUser(data.user);
      },
    }
  );

  return (
    <div className="login">
      <div className="form">
        {!user ? (
          <form className="login-dorm">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="text"
              required
              pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="text"
              required
            />
            <button onClick={() => mutate()} disabled={isLoading}>
              login
            </button>
          </form>
        ) : (
          <span className="material-text">
            Регистрация прошла успешно {user?.email}
          </span>
        )}
      </div>
    </div>
  );
}
