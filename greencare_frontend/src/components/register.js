import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
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
      email: "",
      password: "",
      passwordRep: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  const onClick = () => {
    setIsVisible(!isVisible);
  };
  return (
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
          {errors.email && <div className="error">{errors.email?.message}</div>}
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
            type={isVisible ? "text" : "password"}
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
            type={isVisible ? "text" : "password"}
            placeholder="Repeat Password"
          ></input>
          <div
            className="pw-visibillity-button"
            title={isVisible ? "hide password" : "show password"}
            onClick={onClick}
          >
            {isVisible ? "😳" : "😌"}
          </div>
          {errors.passwordRep && (
            <div className="error">{errors.passwordRep?.message}</div>
          )}
        </div>
        <button type="submit" className="login-register-button">
          register!
        </button>
      </form>
      <Link className="link" to={"/login"}>
        <div className="login-register-button">or login here</div>
      </Link>
    </animated.div>
  );
}
