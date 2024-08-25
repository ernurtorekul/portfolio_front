"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loader from "../components/Loader";

const Contact = () => {
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
        <h5 className="font-semibold text-3xl text-violet">Contact with me</h5>
        <p className="w-full lg:w-3/4 text-lg text-secondary">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. If you&apos;re interested in
          working together or just want to say hi, feel free to reach out
          through the form below or email me directly. Let&apos;s make something
          amazing together!
        </p>
        <span className="text-secondary">P.s anecdotes also accepts ;</span>
      </div>
      <form
        className="bg-secondary flex flex-col gap-5 px-5 py-10 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h5 className="font-medium text-xl pl-2">Get in touch</h5>
        <div>
          <p className="text-red-500">{errorMessage}</p>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div>
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <textarea
            className="w-full h-20 p-2 rounded-lg outline-none"
            type="text"
            name="message"
            placeholder="Message"
          />
        </div>
        <button
          className="bg-violet text-white rounded-lg w-40 h-10 duration-300 hover:bg-white hover:text-violet"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
