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
  SubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  setCvcHovered: React.Dispatch<React.SetStateAction<boolean>>;
}
function Form({ user, setUser, SubmitForm, setCvcHovered }: FormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            className="card-number"
            maxLength={19}
            name="number"
            id="number"
            value={user.number}
            onChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div>
          <label htmlFor="holder">CARD HOLDER</label>
          <input
            type="text"
            className="card-holder"
            name="name"
            id="holder"
            value={user.name}
            onChange={handleChange}
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="additional-info">
          <div>
            <label htmlFor="holder">EXPIRATION MM</label>
            <input
              type="text"
              className="card-holder"
              name="month"
              id="holder"
              value={user.month}
              onChange={handleChange}
              placeholder="MM"
            />
          </div>
          <div>
            <label htmlFor="holder">EXPIRATION YY</label>
            <input
              type="text"
              className="card-holder"
              name="year"
              id="holder"
              value={user.year}
              onChange={handleChange}
              placeholder="YY"
            />
          </div>
          <div>
            <label htmlFor="holder">CVC</label>
            <input
              type="text"
              className="card-holder"
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
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
export default Form;
