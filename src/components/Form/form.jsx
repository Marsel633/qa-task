import { useForm } from "react-hook-form";
import styles from "./form.module.scss";
import { useDispatch } from "react-redux";
import { addFeedbacks } from "../../store/eventsSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = (values) => {
    dispatch(addFeedbacks(values));
    reset();
  };

  console.log(formState.errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__item}>
        <span>Firstname</span>
        <input
          className={formState.errors.firstname && styles.errorFormItem}
          type="text"
          autoComplete="off"
          {...register("firstname", { required: true })}
        />
      </div>
      <div className={styles.form__item}>
        <span>Lastname</span>
        <input
          className={formState.errors.lastname && styles.errorFormItem}
          type="text"
          autoComplete="off"
          {...register("lastname", { required: true })}
        />
      </div>
      <div className={styles.form__item}>
        <span>Email</span>
        <input
          className={formState.errors.email && styles.errorFormItem}
          type="email"
          autoComplete="off"
          {...register("email", { required: true })}
        />
      </div>
      <div className={styles.form__item}>
        <span>Message</span>
        <textarea
          className={formState.errors.message && styles.errorFormItem}
          name="Message"
          autoComplete="off"
          {...register("message", { required: true })}
        ></textarea>
        <button type="submit">Send Now</button>
      </div>
    </form>
  );
};
