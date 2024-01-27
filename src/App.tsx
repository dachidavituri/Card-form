import React, { ChangeEvent } from "react";
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
  const SubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);

    setSubmitted(true);
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
        <Thank setSubmitted={setSubmitted} setUser={setUser} />
      ) : (
        <Form
          user={user}
          setUser={setUser}
          SubmitForm={SubmitForm}
          setCvcHovered={setCvcHovered}
        />
      )}
    </div>
  );
}

export default App;
