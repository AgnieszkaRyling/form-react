import { useState } from "react";

import "./Form.css";

const Form = () => {
  const [errorInputFirstName, setErrorInputFirstName] = useState(false);
  const [errorInputLastName, setErrorInputLastName] = useState(false);
  const [errorInputMail, setErrorInputMail] = useState(false);
  const [errorInputPassword, setErrorInputPassword] = useState(false);
  const [errorInputPasswordRepeat, setErrorInputPasswordRepeat] =
    useState(false);

  const [valueInputFirstName, setValueInputFirstName] = useState("");
  const [valueInputLastName, setValueInputLastName] = useState("");
  const [valueInputMail, setValueInputMail] = useState("");
  const [valueInputPassword, setValueInputPassword] = useState("");
  const [valueInputPasswordRepeat, setValueInputPasswordRepeat] = useState("");

  const handleButtonSumbit = () => {
    if (!valueInputFirstName) {
      setErrorInputFirstName("This field is required");
    }
    if (!valueInputLastName) {
      setErrorInputLastName("This field is required");
    }
    if (!valueInputMail) {
      setErrorInputMail("This field is required");
    } else {
      if (!valueInputMail.includes("@")) {
        setErrorInputMail("Invalid email address");
      }
    }
    if (!valueInputPassword) {
      setErrorInputPassword("This field is required");
    }
    if (!valueInputPasswordRepeat) {
      setErrorInputPasswordRepeat("This field is required");
    } else if (valueInputPassword !== valueInputPasswordRepeat) {
      setErrorInputPasswordRepeat("Passwords do not match");
    }
  };

  const validateInputFirstName = (e) => {
    if (!e.target.value) {
      setErrorInputFirstName("This field is required");
    }
  };

  const validateInputLastName = (e) => {
    if (!e.target.value) {
      setErrorInputLastName("This field is requred");
    }
  };

  const validateInputMail = (e) => {
    if (!e.target.value) {
      setErrorInputMail("This field is required");
    }
  };

  const validateInputPassword = (e) => {
    if (!e.target.value) {
      setErrorInputPassword("This field is required");
    }
  };

  const validateInputPasswordRepeat = (e) => {
    if (!e.target.value) {
      setErrorInputPasswordRepeat("This field is required");
    } else if (e.target.value !== valueInputPassword) {
      setErrorInputPasswordRepeat("Passwords do not match");
    } else {
      setErrorInputPasswordRepeat("");
    }
  };

  return (
    <form className="form">
      <h1 className="h1-text">Fill in to register</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setValueInputFirstName(e.target.value);
            validateInputFirstName(e);
          }}
        />
        {errorInputFirstName && <p className="error">{errorInputFirstName}</p>}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setValueInputLastName(e.target.value);
            validateInputLastName(e);
          }}
        />
        {errorInputLastName && <p className="error">{errorInputLastName}</p>}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setValueInputMail(e.target.value);
            validateInputMail(e);
          }}
        />
        {errorInputMail && <p className="error">{errorInputMail}</p>}
      </div>
      <div className="input-box">
        <input
          type="password"
          placeholder="Pasword"
          onChange={(e) => {
            setValueInputPassword(e.target.value);
            validateInputPassword(e);
          }}
        />
        {errorInputPassword && <p className="error">{errorInputPassword}</p>}
      </div>
      <div className="input-box mb-30">
        <input
          type="password"
          placeholder="Repeat Password"
          onChange={(e) => {
            setValueInputPasswordRepeat(e.target.value);
            validateInputPasswordRepeat(e);
          }}
        />
        {errorInputPasswordRepeat && (
          <p className="error">{errorInputPasswordRepeat}</p>
        )}
      </div>
      <button
        type="button"
        className="form-button"
        onClick={handleButtonSumbit}
      >
        Register
      </button>
    </form>
  );
};
export default Form;
