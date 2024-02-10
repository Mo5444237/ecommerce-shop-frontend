import classes from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import coverImage from "../../assets/contact-us.jpg";
import FormInput from "../UI/FormInput";
import useInput from "../../hooks/use-Input";
import Button from "../UI/Button";

const Contact = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((value) => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));

  const {
    value: descriptionValue,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueBlurHandler: descriptionBlurHandler,
    valueChangeHandler: descriptionChangeHandler,
    reset: descriptionReset
  } = useInput((value) => value.trim() !== "");


  const dispatch = useDispatch();

  let formIsValid = nameIsValid && emailIsValid && descriptionIsValid;

  const submitHandler = (e) => {
    e.preventDefault();

    if (formIsValid) {
      nameReset();
      emailReset();
      descriptionReset();

      dispatch(uiActions.setUiChanged(true));
      dispatch(uiActions.addNotification({
        status: 'success',
        title: 'Success',
        message: 'Your message was received.'
      }));
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h3>We'd love to hear from you.</h3>
        <img src={coverImage} alt="Cover Image" />
      </div>
      <div className={classes.right}>
        <div className={classes["form-container"]}>
          <form method="post" className={classes.form} onSubmit={submitHandler}>
            <h1>Contact Us</h1>
            <FormInput
              className={classes.input}
              label="Full Name"
              input={{
                id: "name",
                name: "name",
                placeholder: "name",
                type: "text",
                value: nameValue,
                onChange: nameChangeHandler,
                onBlur: nameBlurHandler,
              }}
              hasError={nameHasError}
              errorMsg="Enter a valid name"
            />
            <FormInput
              className={classes.input}
              label="E-mail"
              input={{
                id: "email",
                name: "email",
                placeholder: "email",
                type: "text",
                value: emailValue,
                onChange: emailChangeHandler,
                onBlur: emailBlurHandler,
              }}
              hasError={emailHasError}
              errorMsg="Enter a valid email"
            />
            <div className={classes.description}>
              <textarea
                id="description"
                rows="4"
                placeholder="Enter a description..."
                value={descriptionValue}
                onChange={descriptionChangeHandler}
                onBlur={descriptionBlurHandler}
              ></textarea>
              <label htmlFor="description">Description</label>
            </div>
            <div className={classes.actions}>
              <Button
                //   disabled={isPending || !formIsValid}
                //   title={isPending ? <Spinner /> : "Next"}
                title="Submit"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
