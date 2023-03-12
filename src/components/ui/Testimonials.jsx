import { IoStarSharp } from "react-icons/io5/index.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-6 flex flex-col items-center mx-4">
      <h2 className="text-center font-roboto text-3xl font-bold">
        Testimonials
      </h2>
      <p className="mt-2 text-center font-montserrat">
        Here's what people are saying about our work!
      </p>
      <article className=" mt-2 flex flex-col items-center justify-center rounded bg-slate-50 p-6 font-montserrat shadow-md lg:w-[40rem]">
        <blockquote>
          <p>
            "The website is elegant, simple, and to the point."
          </p>
          <p className="pt-2">
            -Johnny Rocheforte, landscaping expert with over 20 years of
            experience
          </p>
        </blockquote>
        <div className="flex pt-2">
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        </div>
      </article>
      <article className="mx-2 mt-4 flex flex-col items-center justify-center rounded bg-slate-50 p-6 font-montserrat shadow-md lg:w-[40rem]">
        <blockquote>
          <p>
            "Early one morning the sun was shining and she was lying in bed."
          </p>
          <p className="pt-2 text-center">
            -Elston Gunn, working for awhile on a fishing boat right outside Delacroix 
          </p>
        </blockquote>
        <div className="flex pt-2">
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        </div>
      </article>
      <article className="mx-2 mt-4 flex flex-col items-center justify-center rounded bg-slate-50 p-6 font-montserrat shadow-md lg:w-[40rem]">
        <blockquote>
          <p>
            "Somehow I found myself down at the dockside
            Thinking 'bout the old days of Liverpool and Rotherhithe."
          </p>
          <p className="pt-2 text-center">
            -Howard Coward, angry young man
          </p>
        </blockquote>
        <div className="flex pt-2 text-center">
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
          <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        </div>
      </article>
    </section>
  );
}
