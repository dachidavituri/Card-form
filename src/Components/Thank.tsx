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
  setError: React.Dispatch<
    React.SetStateAction<{
      number: boolean;
      name: boolean;
      month: boolean;
      year: boolean;
      cvc: boolean;
    }>
  >;
}
function Thank({ setSubmitted, setUser, setError }: ThankProps) {
  const handleClick = () => {
    setSubmitted(false);
    setUser({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
    setError({
      number: false,
      name: false,
      month: false,
      year: false,
      cvc: false,
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
