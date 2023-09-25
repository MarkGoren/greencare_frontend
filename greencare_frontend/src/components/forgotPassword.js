import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Modal from "react-modal";
import { useState } from "react";

export default function ForgotPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const spring = useSpring({
    from: { y: -50 },
    to: { y: 0 },
  });

  function handleClick() {
    setIsOpen(true);
  }
  return (
    <>
      <animated.div style={spring} className="login-register">
        <div className="login-register-logo">GreenCare</div>
        <div className="login-register-header">Fill in your Email:</div>
        <form className="login-register-form">
          <div className="login-register-input">
            <input className="input" type="text" placeholder="Email"></input>
          </div>
        </form>
        <div className="login-register-button" onClick={handleClick}>
          send password reset link!
        </div>
      </animated.div>

      <Modal isOpen={isOpen} className="modal">
        <h2>Password Reset Link Sent Successfully!</h2>
        <div>
          Open your email to view the link, follow the instructions in the email
          we sent to reset your password
        </div>
        <Link className="link" to={"/login"}>
          <div className="login-register-button">Return To login</div>
        </Link>
      </Modal>
    </>
  );
}
