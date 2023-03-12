import react, { useState, useEffect } from "react";
import { AiFillPhone } from "react-icons/ai/index.js";
import {GrMail} from 'react-icons/gr/index.js'
import {MdMapsHomeWork} from 'react-icons/md/index.js'


export default function () {
  let [form, setForm] = useState(false);
  let isSubmitted,
    loading,
    success,
    failure = true;
  return (
    <section id="contact" className="mt-8 mx-4">
      <h2 className="mt-4 text-center font-roboto text-3xl font-bold">
        Contact Us
      </h2>
      <div className="flex h-full flex-col justify-center">
        <form className="mb-4 mx-auto w-full px-2 lg:w-[40rem]">
          <p className="mt-2 font-montserrat">
            This form is for demonstration purposes only and does not do anything
            but look good, contact me through{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="border-b-4 border-b-green-500 hover:border-b-green-800"
              href="https://www.treverparish.com/"
            >
              my site
            </a>{" "}
            instead.
          </p>
          <div className="mt-3 flex flex-col space-y-6 ">
            <input
              className="border-grey-day bg-grey-shame text-dark-grey rounded border-2 p-2"
              type="text"
              placeholder="Name*"
              required
            />
            <input
              className="border-grey-day bg-grey-shame text-dark-grey rounded border-2 p-2"
              type="email"
              placeholder="Email*"
              required
            />
            <input
              className="border-grey-day bg-grey-shame text-dark-grey rounded border-2 p-2"
              type="tel"
              placeholder="Phone Number"
            />
            <textarea
              className="border-grey-day bg-grey-shame text-dark-grey h-40 rounded border-2 p-2"
              type="email"
              placeholder="Message*"
              required
            />
            <button
              className={
                !isSubmitted
                  ? "cursor-pointer rounded bg-green-500 p-2 text-white hover:bg-green-800"
                  : "cursor-not-allowed rounded bg-slate-500 p-2 text-white"
              }
              type="submit"
              disabled={isSubmitted}
            >
              Submit
            </button>
    
          </div>
          <div className="mt-6 flex flex-col ">
            <div>

        <div className="flex">
          <AiFillPhone className="mt-1 mr-1" />
          <a className="" href="tel:9514733954">
            (951)-473-3954
          </a>
        </div>
        <div className="flex mt-2">
          <GrMail className="mt-1 mr-1" />
                myemail@email.com
        </div>
        <div className="flex mt-2">
          <MdMapsHomeWork className="mt-1 mr-1" />
          1600 Pennsylvania Avenue, N.W. <br />
          Washington, DC 20500 <br />
        </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
