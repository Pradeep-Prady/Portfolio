import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ikp8xes",
        "template_rqd2mme",
        form.current,
        "GIm9L2rMJrBh_7YRG"
      )
      .then(form.current.reset());
  };
  return (
    <div className="w-full h-screen bg-stone-800 ">
      <div className="w-full h-1/6 py-5 text-center">
        <h2 className="text-3xl head-font text-white">
          <span className="head-font head">C</span>ontact
        </h2>
      </div>

      <div className="w-full h-5/6 flex items-center justify-center">
        <form
          className="bg-stone-950 p-7 rounded-sm shadow"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="flex-col my-1">
            <label className="w-full  text-white font-semibold ">Name *</label>
            <input
              className="w-full my-2 shadow text-white  p-2 bg-stone-900 h-[40px] border-none outline-none"
              type="text"
              ame="user_name"
              htmlFor="name"
              required
            ></input>
          </div>
          <div className="flex-col my-1">
            <label className="w-full text-white font-semibold ">Email *</label>
            <input
              className="w-full my-2 shadow text-white p-2 bg-stone-900 h-[40px] border-none outline-none"
              type="email"
              name="user_email"
              htmlFor="email"
              required
            ></input>
          </div>
          <div className="flex-col my-1">
            <label className="w-full text-white font-semibold ">
              Message *
            </label>
            <textarea
              className="w-full my-2 shadow text-white p-2 resize-none bg-stone-900 h-[100px] border-none outline-none"
              type="text"
              name="message"
              htmlFor="text"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-end">
            <button className="bg-stone-900 shadow text-white px-6 py-2 font-semibold">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
