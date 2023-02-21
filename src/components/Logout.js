import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

function Logout() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://127.0.0.1:8000/api/logout/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to log out");
        }
        localStorage.removeItem("token");
        navigate("")
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      }
    };

    logout();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Logging out...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <p>You have been logged out successfully.</p>
      )}
    </div>
  );
}

export default Logout;
