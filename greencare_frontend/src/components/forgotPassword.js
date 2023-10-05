import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Api from "../api/api";

export default function ForgotPassword() {
  const [isOpen, setIsOpen] = useState(false);
  const spring = useSpring({
    from: { y: -50 },
    to: { y: 0 },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data) {
    Api.getResetPasswordLink(data).then((result) => {
      if (result === "reset password link sent successfully!") {
        setIsOpen(true);
      }
    });
  }
  return (
    <>
      <animated.div style={spring} className="login-register">
        <div className="login-register-logo">GreenCare</div>
        <div className="login-register-header">Fill in your Email:</div>
        <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", {
              required: "email is required!",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "invalid email!",
              },
            })}
            className="input"
            type="text"
            placeholder="Email"
          ></input>
          {errors.email && <div className="error">{errors.email?.message}</div>}
        </form>
        <button type="submit" className="login-register-button">
          send link!
        </button>
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
