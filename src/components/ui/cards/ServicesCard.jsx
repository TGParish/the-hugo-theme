import {
  HiOutlineDesktopComputer,
  HiOutlinePencil,
  HiServer,
} from 'react-icons/hi';
import { FaPencilRuler } from 'react-icons/fa';

export default function ServicesCard({
  heading,
  children,
  dev,
  design,
  hosting,
}) {
  return (
    <article className="flex h-auto w-full flex-col rounded-xl border-2 p-6 shadow-lg md:max-h-[25rem] md:max-w-[40rem] lg:max-w-[30rem]">
      {dev ? (
        <HiOutlineDesktopComputer className="mx-auto h-20 w-20  text-gray-600 lg:h-32 lg:w-32" />
      ) : null}
      {design ? (
        <HiOutlinePencil className="mx-auto h-20 w-20 text-gray-600 lg:h-32 lg:w-32" />
      ) : null}
      {hosting ? (
        <HiServer className="mx-auto h-20 w-20  text-gray-600 lg:h-32 lg:w-32" />
      ) : null}

      <h2 className="mt-2 text-center font-roboto text-2xl font-bold">
        {heading}
      </h2>
      <p className="font-montserrat text-gray-700">{children}</p>
      <div className="mt-4 flex justify-center">
        <a href="/sample">
          <button className="rounded bg-green-500 p-2 text-white hover:bg-green-700">
            Learn More
          </button>
        </a>
      </div>
    </article>
  );
}
