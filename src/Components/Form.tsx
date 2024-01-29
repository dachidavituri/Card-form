import "./Form.css";

interface FormProps {
  user: {
    name: string;
    number: string;
    month: string;
    year: string;
    cvc: string;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      number: string;
      month: string;
      year: string;
      cvc: string;
    }>
  >;
  setError: React.Dispatch<
    React.SetStateAction<{
      number: boolean;
      name: boolean;
      month: boolean;
      year: boolean;
      cvc: boolean;
    }>
  >;
  error: {
    number: boolean,
    name: boolean
    month: boolean,
    year: boolean,
    cvc: boolean
  }
  SubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  setCvcHovered: React.Dispatch<React.SetStateAction<boolean>>;
}
function Form({ user, error, setUser, SubmitForm, setCvcHovered, setError}: FormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError((prevError) => ({...prevError, [event.target.name]: false}))
    if (event.target.name === "number") {
      const formattedValue = event.target.value
        .replace(/[^0-9]/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setUser({ ...user, [event.target.name]: formattedValue });
    } else {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
    
  };
  return (
    <div className="form-section">
      <form onSubmit={SubmitForm}>
        <div>
          <label htmlFor="number">CARD NUMBER</label>
          <input
            type="text"
            className={`card-number ${error.number? 'error': ''}`}
            maxLength={19}
            name="number"
            id="number"
            value={user.number}
            onChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {error.number && <p className="error-message">Invalid Number</p>}
        </div>
        <div>
          <label htmlFor="holder">CARD HOLDER</label>
          <input
            type="text"
            className={`card-holder ${error.name? 'error': ''}`}
            name="name"
            id="holder"
            value={user.name}
            onChange={handleChange}
            placeholder="e.g. Jane Appleseed"
          />
          {error.name && <p className="error-message">Invalid Name</p>}
        </div>

        <div className="additional-info">
          <div>
            <label htmlFor="holder">EXPIRATION MM</label>
            <input
              type="text"
              className={`card-holder ${error.month? 'error': ''}`}
              name="month"
              id="holder"
              value={user.month}
              onChange={handleChange}
              placeholder="MM"
              maxLength={2}
              minLength={2}
            />
            {error.month && <p className="error-message">Invalid Month</p>}
          </div>
          <div>
            <label htmlFor="holder">EXPIRATION YY</label>
            <input
              type="text"
              className={`card-holder ${error.year? 'error': ''}`}
              name="year"
              id="holder"
              value={user.year}
              onChange={handleChange}
              placeholder="YY"
              maxLength={2}
              minLength={2}
            />
            {error.year && <p className="error-message">Invalid Year</p>}
          </div>
          <div>
            <label htmlFor="holder">CVC</label>
            <input
              type="text"
              className={`card-holder ${error.cvc? 'error': ''}`}
              name="cvc"
              id="holder"
              value={user.cvc}
              onChange={handleChange}
              placeholder="e.g. 123"
              maxLength={3}
              onMouseOver={() => {
                setCvcHovered(true);
              }}
              onMouseOut={() => {
                setCvcHovered(false);
              }}
            />
           {error.cvc && <p className="error-message">Invalid CVC</p>}
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export default Form;
