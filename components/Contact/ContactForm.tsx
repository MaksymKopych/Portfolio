import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { sendContactForm } from "../../lib/api";

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
        reset,
    } = useForm();
    const resetForm = () => {
        reset(), setPhone(null);
    };
    const onSubmit = async (data) => {
        data.phone = phone;
        try {
            const res = await sendContactForm(data);
            if (res.message === "Email sent successfully") {
                resetForm();
            }
            showAlert();
            setSucces(res.message);
        } catch (error) {
            showAlert();
            setSendErr(error.message);
        }
    };
    return (
        <div id="contact" className="mb-4">
            {isSended && sendErr && <p className="alert error">{sendErr}</p>}
            {isSended && !sendErr && <p className="alert success"> {succes}</p>}
            <p className={`section-title`}>
                Interested ? <span>Contact Me :)</span>
            </p>
            <div className="grid">
                <div className="span-4 span-md-12 box-shadow box-shadow-md br-15 p-20">
                    <div className={`thumb ${styles.imageBox} shadow-before box-shadow-md`}>
                        <div className="thumb__container ">
                            <img src="/contact.jpg" alt="" className="thumb__img br-15 " />
                        </div>
                    </div>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.contactTitle}>Maksym Kopych</h2>
                        <p>Front End Developer</p>
                        <p>I am open to work. Connect with me via email or phone.</p>
                        <div className={styles.contactLinks}>
                            <p>Phone: <a href="tel:+14377757702">+1 437-775-7702</a></p>
                            <p>Email: <a href="mailto:maximkopych@gmail.com">maximkopych@gmail.com</a></p>
                        </div>
                    </div>
                    <div className={styles.contactSocial}>
                        <p className={styles.socilaTitle}>Find Me</p>
                        <div className={`${styles.socialBox} box-shadow-md`}>
                            <a
                                className={`${styles.socialLink}  br-15 `}
                                href="https://www.linkedin.com/in/maksymkopych/"
                            >
                                <img
                                    src="/linkedin.svg"
                                    alt="linkedin"
                                />
                            </a>
                            <a
                                className={`${styles.socialLink}  br-15 `}
                                href="https://github.com/MaksymKopych"
                            >
                                <img
                                    src="/github.svg"
                                    alt="linkedin"
                                />
                            </a>
                            <a
                                className={`${styles.socialLink}  br-15 `}
                                href="https://www.facebook.com/maksymkopych"
                            >
                                <img
                                    src="/facebook.svg"
                                    alt="linkedin"
                                />
                            </a>
                            <a
                                className={`${styles.socialLink} br-15 `}
                                href="https://www.instagram.com/maksym_kopych/"
                            >
                                <img
                                    src="/instagram.svg"
                                    alt="linkedin"
                                />
                            </a>
                        </div>

                    </div>

                </div>
                <form className={`span-8 span-md-12 box-shadow br-15 box-shadow-md ${styles.form}`} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputBox}>
                        <div className={styles.input}>
                            <input
                                className="shadow-inset"
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
                            <p className="err">
                                {errors?.name && <p>{errors?.name?.message || "error"}</p>}
                            </p>
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
                                placeholder="Email"
                            />
                            <p className="err">
                                {errors?.email && <p>{errors?.email?.message || "error"}</p>}
                            </p>
                        </div>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.input}>
                            <PhoneInput
                                defaultCountry="CA"
                                placeholder="Phone"
                                value={phone}
                                onChange={setPhone}
                            />
                            <p className="err">
                                {errors?.phone && <p>{errors?.phone?.message || "error"}</p>}
                            </p>
                        </div>
                        <div className={styles.input}>
                            <input
                                {...register("subject", {
                                    required: "required",
                                })}
                                type="text"
                                placeholder="Subject"
                            />
                            <p className="err">
                                {errors?.subject && <p>{errors?.subject?.message || "error"}</p>}
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.textarea}`}>
                        <textarea

                            color="30"

                            placeholder="Your offer"
                            {...register("offer", {
                                required: "required",
                            })}
                        ></textarea>
                        <p className="err">
                            {errors?.offer && <p>{errors?.offer?.message || "error"}</p>}
                        </p>
                    </div>

                    <div className="btn-box">
                        <button type="submit" className="btn">
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};
export default Contact;
