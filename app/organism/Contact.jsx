"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../components/Loader";
import UseLanguage from "../lang/useLanguage";

const Contact = () => {
  const { t } = UseLanguage();
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    const form = e.target;

    // NEXT_PUBLIC_SERVICE_ID=service_se8w93v
    // NEXT_PUBLIC_TEMPLATE_ID=template_n675d23
    // NEXT_PUBLIC_PRIVATE_KEY=qvcRHozBydZvq7pk2zFHB

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

    // NEXT_PUBLIC_SERVICE_ID='eAADnx4Eu4CWiG9n4'
    // NEXT_PUBLIC_TEMPLATE_ID='template_n675d23'
    // NEXT_PUBLIC_PRIVATE_KEY='qvcRHozBydZvq7pk2zFHB'

    // const serviceId = process.env.gmail;
    // const templateId = process.env.template_n675d23;
    // const privateKey = process.env.O0aQuJa0u8TKSv-pCFN3Q;

    if (form.message.value == "" && form.email.value == "") {
      console.log("yeyyy");
      setErrorMessage("Please enter data");
      setIsLoading(false);
      return;
    }
    try {
      emailjs.sendForm(serviceId, templateId, form, privateKey).then(
        () => {
          alert("Message sent successfully!");
          form.reset();
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
    } catch (err) {
      console.log(err);
      alert("An unexpected error occurred, please try again.");
      setIsLoading(false);
    }
  };
  return (
    <section
      className="lg:ml-1/6 flex flex-col lg:flex-row items-center justify-center 
    py-20 gap-20 p-0 lg:px-20 bg-white"
    >
      {isLoading && <Loader />}

      <div className="flex flex-col gap-5 w-full lg:w-1/2 items-center lg:items-start text-center lg:text-start">
        <h5 className="font-semibold text-3xl text-violet mb-2">
          {t("contact.h1")}
        </h5>
        <p className="w-full lg:w-3/4 text-lg text-secondary mb-4">
          {t("contact.p")}
        </p>
      </div>

      <form
        className="bg-secondary flex flex-col gap-5 px-8 py-10 rounded-2xl w-full lg:w-1/2"
        onSubmit={handleSubmit}
      >
        <h5 className="font-medium text-2xl text-violet mb-4">
          {t("contact.h2")}
        </h5>
        <div className="flex flex-col gap-4">
          <div>
            <input
              className="w-full p-4 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-violet focus:border-violet"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
          <div>
            <textarea
              className="w-full h-32 p-4 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-violet focus:border-violet"
              name="message"
              placeholder="Your Message"
              required
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
          </div>
        </div>
        <button
          className="bg-violet text-white font-semibold rounded-lg w-full py-3 mt-4 duration-300 hover:bg-secondary hover:text-violet border border-violet"
          type="submit"
        >
          {t("contact.button")}
        </button>
      </form>
    </section>
  );
};

export default Contact;
