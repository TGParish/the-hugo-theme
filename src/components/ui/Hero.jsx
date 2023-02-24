export default function Hero() {
  return (
    <div className="flex h-[40rem] w-full flex-col items-center justify-center bg-[url('/images/tile.jpg')] bg-cover bg-center bg-no-repeat text-white lg:bg-fixed xl:h-[50rem]">
      <div className="max-w-[30rem] px-3">
        <h1 className="font-roboto text-[3rem] font-bold leading-tight">
          Make a statement with this minimalist and modern design.
        </h1>
        <p className="mt-4 font-montserrat text-xl">
          Your website is the front page of your brand. Show your clients you
          mean business.
        </p>
        <div className="my-5 flex w-full">
          <a
            className="rounded bg-green-500 p-4 text-white hover:bg-green-600"
            href="#contact"
          >
            Start Your New Project Today
          </a>
        </div>
      </div>
    </div>
  );
}
