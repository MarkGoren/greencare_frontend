import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

export default function Login() {
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
    },
  });

  const onSubmit = (data) => console.log(data);
  const onClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <animated.div style={spring} className="login-register">
      <div className="login-register-logo">GreenCare</div>
      <div className="login-register-header">Login:</div>
      <form className="login-register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-register-input">
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
        </div>
        <div className="login-register-input">
          <input
            {...register("password", {
              required: "password is required!",
            })}
            className="input"
            type={isVisible ? "text" : "password"}
            placeholder="Password"
          ></input>
          <div
            className="pw-visibillity-button"
            title={isVisible ? "hide password" : "show password"}
            onClick={onClick}
          >
            {isVisible ? "😳" : "😌"}
          </div>
          {errors.password && (
            <div className="error">{errors.password?.message}</div>
          )}
        </div>
        <button type="submit" className="login-register-button">
          login!
        </button>
      </form>
      <Link className="link" to={"/register"}>
        <div className="login-register-button">or register here</div>
      </Link>

      <Link className="link" to={"/forgotPassword"}>
        <div className="forgot-password-button">forgot password</div>
      </Link>
    </animated.div>
  );
}
