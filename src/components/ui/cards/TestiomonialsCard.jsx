import { IoStarSharp } from 'react-icons/io5/index.js';

export default function TestimonialsCard({ testimonial, author }) {
  return (
    <article className="mt-2 flex w-full flex-col items-center justify-center rounded bg-slate-50 p-4 font-montserrat shadow-md md:max-w-[40rem]">
      <blockquote>
        <p>{testimonial}</p>
        <p className="pt-2">-{author}</p>
      </blockquote>
      <div className="flex pt-2">
        <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
        <IoStarSharp className="h-[3rem] w-[3rem] text-yellow-500" />
      </div>
    </article>
  );
}
