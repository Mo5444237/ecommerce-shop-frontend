import classes from './FormInput.module.css'

const FormInput = (props) => {
    return (
        <div className={`${classes.form__group} ${props.className}`}>
            <input {...props.input} className={`${classes.form__field} ${props.hasError? classes.invalid : ''}`} />
            <label htmlFor={props.input.id} className={classes.form__label}>
                {props.label}
            </label>
            {props.hasError && <span className={classes.error}>{props.errorMsg}</span>}
            {props.serverMsg && <span className={classes.error}>{props.serverMsg}</span>}
        </div>
    );
}

export default FormInput;