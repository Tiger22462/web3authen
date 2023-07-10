import React from "react";
import { useNavigate } from "react-router-dom";

export default function FirstPage() {
    const navigate = useNavigate()
    return (
    <div>
      <h1>Quesionaire</h1>
      <button
        style={button}
        onClick={() => { navigate("/Signup");
        }}>
        {" "}
        SIGN UP
      </button>
      <button
        style={button}
        onClick={() => { navigate("/Signin");
        }}>
        {" "}
        SIGNIN
      </button>
    </div>
  );
}
const button = {
  width: 100,
  padding: 10,
  borderRadius: 5,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};
