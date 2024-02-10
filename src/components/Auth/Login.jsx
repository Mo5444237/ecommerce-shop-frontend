import classes from "./AuthForm.module.css";

import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import FormInput from "../UI/FormInput";
import useInput from "../../hooks/use-Input";


import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";
import { fetchCartData } from "../../store/cart-actions";
import { uiActions } from "../../store/ui-slice";

const Login = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput((value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueBlurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== '');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      dispatch(userActions.setUser({ user: data.user }));
      navigate('/')
      dispatch(fetchCartData());
    },
    onError: (error) => {
      dispatch(uiActions.setUiChanged(true));
      dispatch(uiActions.addNotification({
        status: 'error',
        title: 'Error',
        message: error.info?.message || 'Something went wrong'
      }))
    }
  })

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: emailValue,
      password: passwordValue
    }
    mutate(userData);
  };

  // overall form validity
  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }


  return (
    <div className={classes.container}>
      <form method="POST" className={classes.form} onSubmit={submitHandler}>
        <h1>Login</h1>
        <FormInput
          className={classes.input}
          label="E-mail"
          input={{
            id: "email",
            name: "email",
            placeholder: "email",
            type: "email",
            value: emailValue,
            onChange: emailChangeHandler,
            onBlur: emailBlurHandler,
          }}
          hasError={emailHasError}
          errorMsg = 'Enter a valid E-mail'
        />
        <FormInput
          className={classes.input}
          label="Password"
          input={{
            id: "password",
            name: "password",
            placeholder: "password",
            type: "password",
            value: passwordValue,
            onChange: passwordChangeHandler,
            onBlur: passwordBlurHandler,
          }}
        />
        <div className={classes.actions}>
          <div className={classes.links}>
            <p>Create new account?</p>
            <Link to={"?mode=signup"}>Signup</Link>
          </div>
          <Button
            disabled={isPending || !formIsValid}
            title={isPending ? <Spinner /> : "Login"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
