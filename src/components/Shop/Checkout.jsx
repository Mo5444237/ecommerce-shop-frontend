import { useMutation } from "@tanstack/react-query";
import { checkout } from "../../services/order";

import useInput from "../../hooks/use-Input";
import FormInput from "../UI/FormInput";
import classes from "./Checkout.module.css";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import Modal from "../UI/Modal";

const Checkout = (props) => {

  const {
    value: address1Value,
    isValid: address1IsValid,
    hasError: address1HasError,
    valueBlurHandler: address1BlurHandler,
    valueChangeHandler: address1ChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: address2Value,
    isValid: address2IsValid,
    hasError: address2HasError,
    valueBlurHandler: address2BlurHandler,
    valueChangeHandler: address2ChangeHandler,
  } = useInput((value) => true);

  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalCodeValue,
    isValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueBlurHandler: postalCodeBlurHandler,
    valueChangeHandler: postalCodeChangeHandler,
  } = useInput((value) => value.match(/^[0-9]{5}$/g));

  let formIsValid =
    address1IsValid && address2IsValid && cityIsValid && postalCodeIsValid;

  const { mutate, isPending } = useMutation({
    mutationFn: checkout,
    onSuccess: (data) => {
      window.location.replace(data.url)
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    mutate({
      shippingAddress: {
        address1: address1Value,
        address2: address2Value,
        city: cityValue,
        postalCode: postalCodeValue,
      },
    });
  };

  return (
    <Modal className={classes.container} onClose={props.onHideCheckout}>
      <form method="POST" className={classes.form} onSubmit={submitHandler}>
        <h1>Shipping address</h1>
        <FormInput
          className={classes.input}
          label="Address-1"
          input={{
            id: "address-1",
            name: "address-1",
            placeholder: "address-1",
            type: "text",
            value: address1Value,
            onChange: address1ChangeHandler,
            onBlur: address1BlurHandler,
          }}
          hasError={address1HasError}
          errorMsg="Enter a valid address"
        />
        <FormInput
          className={classes.input}
          label="Address-2"
          input={{
            id: "address-2",
            name: "address-2",
            placeholder: "address-2",
            type: "text",
            value: address2Value,
            onChange: address2ChangeHandler,
            onBlur: address2BlurHandler,
          }}
          hasError={address2HasError}
          errorMsg="Enter a valid address"
        />
        <FormInput
          className={classes.input}
          label="City"
          input={{
            id: "city",
            name: "city",
            placeholder: "city",
            type: "text",
            value: cityValue,
            onChange: cityChangeHandler,
            onBlur: cityBlurHandler,
          }}
          hasError={cityHasError}
          errorMsg="Enter a valid city name"
        />
        <FormInput
          className={classes.input}
          label="Postal-code"
          input={{
            id: "postal-code",
            name: "postal-code",
            placeholder: "postal-code",
            type: "text",
            value: postalCodeValue,
            onChange: postalCodeChangeHandler,
            onBlur: postalCodeBlurHandler,
          }}
          hasError={postalCodeHasError}
          errorMsg="Enter a valid postal code"
        />
        <div className={classes.actions}>
          <Button
            disabled={isPending || !formIsValid}
            title={isPending ? <Spinner /> : "Next"}
            type="submit"
          />
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
