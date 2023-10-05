import { Link, useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../app/authSlice";
import Modal from "react-modal";
import Api from "../api/api";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (auth.isLoggedIn) navigate("/");
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("encId")) {
      Api.approveEmail(urlParams.get("encId")).then((result) => {
        if (result === "email approved successfully!") {
          setIsOpen(true);
        }
      });
    }
  }, []);

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
      password: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(signIn(data));
  };

  const onClick = () => {
    setShowPassword(!showPassword);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <animated.div style={spring} className="login-register">
        {auth.isLoggedIn && navigate("/")}
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
            {errors.email && (
              <div className="error">{errors.email?.message}</div>
            )}
          </div>
          <div className="login-register-input">
            <input
              {...register("password", {
                required: "password is required!",
              })}
              className="input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            ></input>
            {errors.password && (
              <div className="error">{errors.password?.message}</div>
            )}
            {auth.error && <div className="error">{auth?.error}</div>}
            <div
              className="pw-visibillity-button"
              title={showPassword ? "hide password" : "show password"}
              onClick={onClick}
            >
              {showPassword ? "😳" : "😌"}
            </div>
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

      <Modal isOpen={isOpen} className="modal">
        <h2>Email approved succesfully!</h2>
        <Link className="link" to={"/login"} onClick={closeModal}>
          <div className="login-register-button">Continue to login</div>
        </Link>
      </Modal>
    </>
  );
}
