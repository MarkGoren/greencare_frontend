import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { finishRegister, signUp } from "../app/registerSlice";

export default function Register() {
  const dispatch = useDispatch();
  const registerState = useSelector((state) => state.register);
  const [showPassword, setShowPassword] = useState(false);
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
      fullName: "",
      email: "",
      password: "",
      passwordRep: "",
    },
  });

  const onSubmit = (data) => {
    const { passwordRep, ...rest } = data;
    dispatch(signUp(rest));
  };
  const onClick = () => {
    setShowPassword(!showPassword);
  };
  function handleClick() {
    dispatch(finishRegister());
  }
  return (
    <>
      <animated.div style={{ ...spring }} className="login-register">
        <div className="login-register-logo">GreenCare</div>
        <div className="login-register-header">Register:</div>
        <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-register-input">
            <input
              {...register("email", {
                required: "email is required!",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "email is invalid!",
                },
              })}
              className="input"
              type="text"
              placeholder="Email"
            ></input>
            {errors.email && (
              <div className="error">{errors.email?.message}</div>
            )}
          </div>
          <div className="login-register-input">
            <input
              {...register("fullName", {
                required: "your full name is required!",
                pattern: {
                  value: /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/,
                  message: "invalid full name!",
                },
              })}
              className="input"
              type="text"
              placeholder="Full Name"
            ></input>
            {errors.fullName && (
              <div className="error">{errors.fullName?.message}</div>
            )}
          </div>
          <div className="login-register-input">
            <input
              {...register("password", {
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
              placeholder="Password"
            ></input>
            {errors.password && (
              <div className="error">{errors.password?.message}</div>
            )}
          </div>
          <div className="login-register-input">
            <input
              {...register("passwordRep", {
                required: "please repeat password!",
                validate: (value) => {
                  if (watch("password") !== value) {
                    return "passwords do not match!";
                  }
                },
              })}
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Repeat Password"
            ></input>
            {errors.passwordRep && (
              <div className="error">{errors.passwordRep?.message}</div>
            )}
            {registerState.error && (
              <div className="error">{registerState?.error}</div>
            )}
            <div
              className="pw-visibillity-button"
              title={showPassword ? "hide password" : "show password"}
              onClick={onClick}
            >
              {showPassword ? "😳" : "😌"}
            </div>
          </div>
          <button type="submit" className="login-register-button">
            register!
          </button>
        </form>
        <Link className="link" to={"/login"}>
          <div className="login-register-button">or login here</div>
        </Link>
      </animated.div>

      <Modal isOpen={registerState.success} className="modal">
        <h2>You have Successfully registered!</h2>
        <div>
          Check your email for our confirmation link, please approve to start
          using our platform.
        </div>
        <Link className="link" to={"/login"} onClick={handleClick}>
          <div className="login-register-button">Login here</div>
        </Link>
      </Modal>
    </>
  );
}
