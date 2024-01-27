import "./Thank.css";
interface ThankProps {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      number: string;
      month: string;
      year: string;
      cvc: string;
    }>
  >;
}
function Thank({ setSubmitted, setUser }: ThankProps) {
  const handleClick = () => {
    setSubmitted(false);
    setUser({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
  };
  return (
    <div className="thank-section">
      <h1>THANK YOU!</h1>
      <p>We’ve added your card details</p>
      <button className="continue" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
}
export default Thank;
