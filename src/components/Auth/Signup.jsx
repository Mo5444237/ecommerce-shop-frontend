import classes from "./AuthForm.module.css";

import useInput from "../../hooks/use-Input";
import FormInput from "../UI/FormInput";
import Spinner from "../UI/Spinner";
import Button from "../UI/Button";
import ErrorIcon from "../UI/ErrorIcon";

import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/auth";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueBlurHandler: fullNameBlurHandler,
    valueChangeHandler: fullNameChangeHandler,
  } = useInput((value) => value.trim() !== "");

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
  } = useInput((value) =>
    value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  );

  const {
    value: passwordConfirmationValue,
    isValid: passwordConfirmationIsValid,
    hasError: passwordConfirmationHasError,
    valueBlurHandler: passwordConfirmationBlurHandler,
    valueChangeHandler: passwordConfirmationChangeHandler,
    reset: passwordConfirmationReset,
  } = useInput((value) => value === passwordValue);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate, isError, error, isPending, data } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      navigate('/auth?mode=login')
       dispatch(uiActions.setUiChanged(true));
       dispatch(
         uiActions.addNotification({
           status: "success",
           title: "Success",
           message: "Signed-up successfully.",
         })
       );
    },
    onError: (error) => {
      passwordReset();
      passwordConfirmationReset();
      dispatch(uiActions.setUiChanged(true));
      dispatch(uiActions.addNotification({
        status: 'error',
        title: 'Error',
        message: error.info?.message || 'Something went wrong'
      }))
    },
  });

  // overall form validity
  let formIsValid = false;

  if (
    fullNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    passwordConfirmationIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      name: fullNameValue,
      email: emailValue,
      password: passwordValue,
      passwordConfirmation: passwordConfirmationValue,
    };

    mutate(userData);
  };

  let errors;
  if (isError) {
    errors = error.info.errors.map((err) => (
      <li className={classes.error}>{err.msg}</li>
    ));
  }

  return (
    <div className={classes.container}>
      <form method="POST" className={classes.form} onSubmit={submitHandler}>
        <h1>Signup</h1>
        {isError && (
          <ul className={classes.errors}>
            <ErrorIcon />
            <div>{errors}</div>
          </ul>
        )}
        <FormInput
          className={classes.input}
          label="Full Name"
          input={{
            id: "name",
            name: "name",
            placeholder: "name",
            type: "text",
            value: fullNameValue,
            onChange: fullNameChangeHandler,
            onBlur: fullNameBlurHandler,
          }}
          hasError={fullNameHasError}
          errorMsg={"Enter a valid name"}
        />
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
          errorMsg={"Enter a valid email"}
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
          hasError={passwordHasError}
          errorMsg={"Enter a strong password"}
        />
        <FormInput
          className={classes.input}
          label="Confirm Password"
          input={{
            id: "passwordConfirmation",
            name: "passwordConfirmation",
            placeholder: "passwordConfirmation",
            type: "password",
            value: passwordConfirmationValue,
            onChange: passwordConfirmationChangeHandler,
            onBlur: passwordConfirmationBlurHandler,
          }}
          hasError={passwordConfirmationHasError}
          errorMsg={"Passwords have to match"}
        />
        <div className={classes.actions}>
          <div className={classes.links}>
            <p>Already have an account?</p>
            <Link to={"?mode=login"}>Login</Link>
          </div>
          <Button
            disabled={isPending || !formIsValid}
            title={isPending ? <Spinner /> : "Register"}
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
