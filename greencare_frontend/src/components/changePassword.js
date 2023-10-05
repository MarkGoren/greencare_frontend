import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "react-modal";
import Api from "../api/api";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const spring = useSpring({
    from: { y: -50 },
    to: { y: 0 },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
      newPasswordRep: "",
    },
  });

  const onSubmit = (data) => {
    const { newPasswordRep, ...rest } = data;
    Api.resetPassword(rest).then((result) => {
      if (result === "new password set successfully!") {
        setShowModal(true);
      } else if (result.statusCode === 400) {
        setErrorMessage(
          "your request has expired, please open the link in your email again"
        );
      }
    });
  };
  const onClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <animated.div style={{ ...spring }} className="login-register">
        <div className="login-register-logo">GreenCare</div>
        <div className="login-register-header">New Password:</div>
        <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-register-input">
            <input
              {...register("newPassword", {
                required: "password is required!",
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters!",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/,
                  message:
                    "password must include at least one letter, uppercase letter and number!",
                },
              })}
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
            ></input>
            {errors.newPassword && (
              <div className="error">{errors.newPassword?.message}</div>
            )}
          </div>
          <div className="login-register-input">
            <input
              {...register("newPasswordRep", {
                required: "please repeat password!",
                validate: (value) => {
                  if (watch("newPassword") !== value) {
                    return "passwords do not match!";
                  }
                },
              })}
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Repeat Password"
            ></input>
            {errors.newPasswordRep && (
              <div className="error">{errors.newPasswordRep?.message}</div>
            )}

            {errorMessage && <div className="error">{errorMessage}</div>}

            <div
              className="pw-visibillity-button"
              title={showPassword ? "hide password" : "show password"}
              onClick={onClick}
            >
              {showPassword ? "😳" : "😌"}
            </div>
          </div>
          <button type="submit" className="login-register-button">
            change password!
          </button>
        </form>
      </animated.div>

      <Modal isOpen={showModal} className="modal">
        <h2>You have successfully changed your password!</h2>
        <div>Please login with your new password!</div>
        <Link
          className="link"
          to={"/login"}
          onClick={() => setShowModal(false)}
        >
          <div className="login-register-button">Login here</div>
        </Link>
      </Modal>
    </>
  );
}
