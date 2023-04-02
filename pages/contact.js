import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { sendContactForm } from "./lib/api.js";
const Contact = () => {
  const [phone, setPhone] = useState(null);
  const [isSended, setIsSended] = useState(false);
  const [sendErr, setSendErr] = useState(null);
  const [succes, setSucces] = useState(null);

  const showAlert = () => {
    setIsSended(true);
    setTimeout(() => {
      setIsSended(false);
    }, 2000);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    data.phone = phone;
    try {
      const res = await sendContactForm(data);
      showAlert();
      setSucces(res.message);
    } catch (error) {
      showAlert();
      setSendErr(error.message);
    }
  };
  return (
    <div className={`container section ${styles.contact}`}>
      {isSended && sendErr && <p className="alert error">{sendErr}</p>}
      {isSended && !sendErr && <p className="alert success"> {succes}</p>}
      <h1 className={styles.header}>
        Interested ? <span>Contact Me :)</span>
      </h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputBox}>
          <div className={styles.input}>
            <input
              {...register("name", {
                required: "required",
                minLength: {
                  value: 6,
                  message: "To Short",
                },
              })}
              type="text"
              placeholder="Full Name"
            />
            <span className="err">
              {errors?.name && <p>{errors?.name?.message || "error"}</p>}
            </span>
          </div>
          <div className={styles.input}>
            <input
              {...register("email", {
                required: "required",
                pattern: {
                  value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                  message: "Wrong Email",
                },
              })}
              type="email"
              placeholder="Email Adress"
            />
            <span className="err">
              {errors?.email && <p>{errors?.email?.message || "error"}</p>}
            </span>
          </div>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.input}>
            <PhoneInput
              defaultCountry="CA"
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
            />
            <span className="err">
              {errors?.phone && <p>{errors?.phone?.message || "error"}</p>}{" "}
            </span>
          </div>
          <div className={styles.input}>
            <input
              {...register("subject", {
                required: "required",
              })}
              type="text"
              placeholder="Email Subject"
            />
            <span className="err">
              {errors?.subject && <p>{errors?.subject?.message || "error"}</p>}
            </span>
          </div>
        </div>
        <div className={`${styles.textarea}`}>
          <textarea
            name=""
            id=""
            color="30"
            rows="10"
            placeholder="Your offer"
            {...register("offer", {
              required: "required",
            })}
          ></textarea>
          <span className="err">
            {errors?.offer && <p>{errors?.offer?.message || "error"}</p>}
          </span>
        </div>

        <div className="btn-box">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
