import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function ResendVerification() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") || "");
  const [message, setMessage] = useState("");

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/resend-verification", { email });
      setMessage("Verification email sent successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to resend email.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-2xl font-bold mb-4">Resend Verification</h1>
      <form onSubmit={handleResend} className="w-full max-w-md space-y-4">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Enter your email"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Resend Email
        </button>
        {message && <p className="text-center text-sm text-green-700 mt-2">{message}</p>}
      </form>
    </div>
  );
}
