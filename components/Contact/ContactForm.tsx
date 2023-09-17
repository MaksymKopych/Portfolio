import React, { FormEvent, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ValidationError } from "yup";
import styles from "./Contact.module.scss";
import validation from "./validation";
import extractYupErrors from "../../utils/extractYupErrors";

export interface MailForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    offer: string;
}

const initialValue: MailForm = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    offer: "",
};
const Contact = () => {
    const [isSended, setIsSended] = useState(false);
    const [sendErr, setSendErr] = useState(null);
    const [success, setSuccess] = useState(null);
    const [form, setForm] = useState<MailForm>(initialValue);
    const [formErrors, setFormErrors] = useState<Partial<Record<keyof MailForm, string>>>({});

    const showAlert = () => {
        setIsSended(true);
        setTimeout(() => {
            setIsSended(false);
            setSendErr(null);
            setSuccess(null);
        }, 2000);
    };

    const handleChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        setFormErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const sendContactForm = async (data: MailForm) =>
        fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if (!res.ok) throw new Error("Failed to send message");
            return res.json();
        });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormErrors({});

        try {
            await validation.validate(form, { abortEarly: false });
            const res = await sendContactForm(form);
            console.log(res);
            setForm(initialValue); // Clear the form data after successful submission
            showAlert();
            setSuccess(res.message);
        } catch (error) {
            if (error instanceof ValidationError) {
                const errors = extractYupErrors(error);
                console.log(errors);
                setFormErrors(errors);
                showAlert();
                setSendErr(error.message);
            }
        }
    };
    return (
        <div id="contact" className="mb-4 container">
            {isSended && sendErr && <p className="alert error">{sendErr}</p>}
            {isSended && !sendErr && <p className="alert success"> {success}</p>}
            <p className={`section-title`}>
                Interested ? <span>Contact Me :)</span>
            </p>
            <div className="grid gap-4"
            >
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
                                    alt="github"
                                />
                            </a>
                            <a
                                className={`${styles.socialLink}  br-15 `}
                                href="https://www.facebook.com/maksymkopych"
                            >
                                <img
                                    src="/facebook.svg"
                                    alt="facebook"
                                />
                            </a>
                            <a
                                className={`${styles.socialLink} br-15 `}
                                href="https://www.instagram.com/maksym_kopych/"
                            >
                                <img
                                    src="/instagram.svg"
                                    alt="instagram"
                                />
                            </a>
                        </div>

                    </div>

                </div>
                <form className={`span-8 span-md-12 box-shadow br-15 box-shadow-md ${styles.form}`}
                    onSubmit={handleSubmit}
                >
                    <div className={styles.inputBox}>
                        <div className={styles.input}>
                            <input
                                className="shadow-inset"
                                name="name"
                                type="text"
                                placeholder="Full Name*"
                                onChange={handleChange}
                                value={form.name}
                            />
                            <p className="err">
                                {formErrors?.name && <span>{formErrors.name || "error"}</span>}
                            </p>

                        </div>
                        <div className={styles.input}>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email*"
                                onChange={handleChange}
                                value={form.email}
                            />
                            <p className="err">
                                {formErrors?.email && <span>{formErrors.email || "error"}</span>}
                            </p>
                        </div>
                    </div>
                    <div className={styles.inputBox}>
                        <div className={styles.input}>
                            <PhoneInput
                                defaultCountry="CA"
                                placeholder="Phone*"
                                value={form.phone}
                                onChange={(e) => {
                                    setForm((prev) => ({
                                        ...prev,
                                        phone: e,
                                    }));
                                    setFormErrors((prev) => ({
                                        ...prev,
                                        phone: "",
                                    }));
                                }}
                            />
                            <p className="err">
                                {formErrors?.phone && <span>{formErrors.phone || "error"}</span>}
                            </p>
                        </div>
                        <div className={styles.input}>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject*"
                                onChange={handleChange}
                                value={form.subject}
                            />
                            <p className="err">
                                {formErrors?.subject && <span>{formErrors.subject || "error"}</span>}
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.textarea}`}>
                        <textarea
                            name="offer"
                            color="30"
                            placeholder="Your offer*"
                            onChange={handleChange}
                            value={form.offer}
                        ></textarea>
                        <p className="err">
                            {formErrors?.offer && <span>{formErrors.offer || "error"}</span>}
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
