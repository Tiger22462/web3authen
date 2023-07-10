//import 
import React, { useState, useEffect } from "react";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";
import { useNavigate } from "react-router-dom";
////

export default function SignUp() {
  //Set const usestate
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState(null);
  const [auth, setAuth] = useState(null);

  //load Data from blockchainData
  const loadAccounts = async () => {
    let { auth, accounts } = await loadBlockchainData();
    setAccounts(accounts);
    setAuth(auth);
  };

  //Sign up function
  const signUp = async () => {
    if (!username || !email || !password) {
      alert("Please fill in all details.");
      return;
    }
    //mail regex
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      alert("Please enter a valid email address.");
      return;
    }
    //phone regex
    // var phoneformat = /^\d{10}$/;
    // if (!phone.match(phoneformat)) {
    //   alert("Please enter phone number.");
    //   return;
    // }
    // //set value in local storage and use smart contract 
    try {
      await auth.methods.createUser(username, email,password,phone).send({ from: accounts });
      localStorage.setItem("username",username);
      localStorage.setItem("email", email);
      localStorage.setItem("password",password);
      // localStorage.setItem("phone",phone);
      navigate("/");
      window.location.reload();
    } catch (e) {
      console.log(e.message);
    }
  };

  //Everytime load page need to do this
  useEffect(() => {
    loadWeb3();
    loadAccounts();
  }, []);

  return (
    <div style={rootDiv}>
      <input
        style={input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        type="text"
      />
      <input
        style={input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="text"
      />
      <input
        style={input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />
      {/* <input
        style={input}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        type="tel"
      /> */}
      <button style={button} onClick={signUp}>
        Sign Up
      </button>

      
    </div>
  );
}

const rootDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const input = {
  width: 300,
  padding: 10,
  margin: 10,
  borderRadius: 10,
  outline: "none",
  border: "2px solid grey",
  fontSize: 17,
};

const button = {
  width: 325,
  padding: 10,
  borderRadius: 10,
  margin: 10,
  cursor: "pointer",
  fontSize: 17,
  color: "white",
  backgroundColor: "#9D27CD",
  border: "none",
};


