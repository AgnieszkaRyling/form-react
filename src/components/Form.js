import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <h1 className="h1-text">Fill in to register</h1>
      <div className="input-box">
        <input type="text" placeholder="First Name" />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Last Name" />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Email" />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Pasword" />
      </div>
      <div className="input-box mb-30">
        <input type="password" placeholder="Repeat Password" />
      </div>
      <button type="button" className="form-button">
        Register
      </button>
    </form>
  );
};
export default Form;
