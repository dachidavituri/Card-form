import React, { ChangeEvent } from "react";
// validation only fill submit
import "./App.css";
import { useState } from "react";
import FrontCard from "./Components/FrontCard";
import Form from "./Components/Form";
import Thank from "./Components/Thank";
import BackCard from "./Components/BackCard";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [cvcHovered, setCvcHovered] = useState(false);
  interface User {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
  }
  const [user, setUser] = useState<User>({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [error, setError] = useState({
    number: false,
    name: false,
    month: false,
    year: false,
    cvc: false
  })
  const SubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    const containsNumber = /\d/.test(user.name)
    const numericMonth = Number(user.month)
    const numericYear = Number(user.year)
    let hasError = false
    if(user.number.length !== 19){
      setError((prevError) => ({ ...prevError, number: true }));
      hasError = true
    }if(containsNumber || user.name === "" || user.name.length < 4){
      setError((prevError) => ({ ...prevError, name: true }));
      hasError = true
    }if(user.cvc.length !== 3){
      setError((prevError) => ({ ...prevError, cvc: true }));
      hasError = true
    }if (isNaN(numericMonth) || numericMonth > 12 || numericMonth < 1) {
      setError((prevError) => ({ ...prevError, month: true }));
      hasError = true
    }if (isNaN(numericYear) || user.year == '') {
      setError((prevError) => ({ ...prevError, year: true }));
      hasError = true
    }
    if(!hasError){
      setSubmitted(true)
    }
    
  };
  return (
    <div className="App">
      {cvcHovered ? (
        <BackCard cvc={user.cvc} />
      ) : (
        <FrontCard
          name={user.name}
          number={user.number}
          month={user.month}
          year={user.year}
        />
      )}

      {submitted ? (
        <Thank setSubmitted={setSubmitted} setUser={setUser} setError={setError}/>
      ) : (
        <Form
          user={user}
          setUser={setUser}
          SubmitForm={SubmitForm}
          setCvcHovered={setCvcHovered}
          error={error}
          setError={setError}
        />
      )}
    </div>
  );
}

export default App;
