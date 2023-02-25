import react, { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState(true);

  function messageHandler() {
    setMessage(false);
  }

  return message ? (
    <div className="bg-black p-4">
      <div className="mx-auto lg:w-1/3">
        <p className="text-white">
          Like what you see? This is a theme made by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="border-b-4 border-b-green-500 hover:border-b-green-800"
            href="https://www.treverparish.com/"
          >
            Trever Parish
          </a>{" "}
          . I offer this theme to my clients included in my website package. It
          is fully customizable to meet different needs. My number is in place
          of where your number would be used, in the case you use this theme.
        </p>
        <p className="mt-4 text-white">
          All information provided on this site is fictional and purely for
          demonstrative purposes. All services and verbiage used is ostensible
          and any relation to actual events is coincidental or parodic.
        </p>
        <p className="mt-4 text-white">
          The contact form on this site does not work, visit my website linked earlier in this message to get in contact with me.
        </p>
        <p className="mt-4 text-white">
          This design cannot be replicated or used in any fashion. All images
          and icons used are free to use and require no attribution to their
          respect owners.
        </p>
        <div className="buttonContainer mt-4 flex justify-center">
          <button
            className={
              "cursor-pointer rounded bg-green-500 p-2 text-white hover:bg-green-800"
            }
            type="submit"
            onClick={messageHandler}
          >
            Hide Message
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
