import classes from "./NewsLetter.module.css";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import useInput from "../../hooks/use-Input";
import Button from "../UI/Button";
import FormInput from "../UI/FormInput";


const NewsLetter = () => {
  const {
    value: emailValue,
    isValid,
    valueBlurHandler,
    valueChangeHandler,
    reset,
  } = useInput(value => value.trim() !== '');

    const dispatch = useDispatch();
    
  const submitHandler = (e) => {
      e.preventDefault();
      if (isValid) {
          reset();
          dispatch(uiActions.setUiChanged(true));
          dispatch(uiActions.addNotification({
              status: 'success',
              title: 'Success',
              message: "We'll keep you updated."
          }))
      }
  };

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Latest Updates</h1>
      <div className={classes["inner-container"]}>
        <div className={classes.text}>
          <h3>Be The First To Know</h3>
          <p>Get Our Daily Offers And Discounts</p>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <FormInput
            className={classes.input}
            label="email"
            input={{
              id: "email",
              required: true,
              placeholder: "email",
              value: emailValue,
              onChange: valueChangeHandler,
              onBlur: valueBlurHandler,
            }}
          />
          <Button title="Subscribe" />
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
