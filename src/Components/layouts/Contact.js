import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

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
      .then(
        form.current.reset(),
        toast.success(`Message Successfully sended `, {
          position: "bottom-center",
          duration: 2000,
          style: {
            border: "1px solid white",
            background: "rgba(255, 255, 255, 0.08)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            color: "black",
          },
        })
      );
  };

  
  return (
    <div id="contact" className="w-full h-screen bg-stone-800 ">
      <div className="w-full h-1/6 py-5 text-center">
        <h2 className="text-3xl head-font text-white">
          <span className="head-font head bg-stone-950 px-1 shadow">C</span>
          ontact
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
              className="w-full my-2 shadow text-white  p-2 bg-stone-900 h-[40px] border-none rounded-sm outline-none"
              type="text"
              name="user_name"
              htmlFor="name"
              required
            ></input>
          </div>
          <div className="flex-col my-1">
            <label className="w-full text-white font-semibold ">Email *</label>
            <input
              className="w-full my-2 shadow text-white p-2 bg-stone-900 h-[40px] border-none rounded-sm outline-none "
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
              className="w-full my-2 shadow text-white p-2 resize-none bg-stone-900 h-[100px] rounded-sm border-none outline-none scroll"
              type="text"
              name="message"
              htmlFor="text"
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-end">
            <button className="bg-stone-900 text-white px-6 py-2 font-semibold rounded-sm shadow hover:head bg-aqua">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
