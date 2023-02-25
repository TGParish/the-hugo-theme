
export default function ServicesCard({
  heading,
  kitchen,
  backsplash,
  shower,
  tub,
  children,
}) {
  return (
    // <article className="mx-4 mt-4 max-w-[20rem] rounded-xl  shadow-md">
    //   <div className="w-full rounded ">
    //     <img className="" src="/images/kitchen-tile.jpg" alt="" />
    //   </div>
    //   <h2 className="text-center font-roboto text-2xl font-bold">{heading}</h2>

    //   {/* <div className="flex items-center justify-center py-3"></div> */}

    //   <p className="px-4 font-montserrat">{children}</p>
    // </article>
    //
    <article className="flex h-auto w-full flex-col overflow-hidden rounded-xl shadow-lg md:max-w-[20rem] lg:h-[28rem] pb-2">
      {kitchen ? (
        <img className="h-[20rem] w-full " src="/images/kitchen-tile.jpg" />
      ) : null}
      {backsplash ? (
        <img className="h-[20rem] w-full " src="/images/backsplash.jpg" />
      ) : null}
      {shower ? (
        <img className="h-[20rem] w-full " src="/images/shower-tile.jpg" />
      ) : null}
      <div className="p-2">
        <h2 className="text-center font-roboto text-2xl font-bold">
          {heading}
        </h2>
        <p className="px-2 pb-2 font-montserrat text-gray-700">{children}</p>
        <div className="flex justify-center">
          <a href="/sample">
            <button className="rounded bg-green-500 p-2 text-white hover:bg-green-700">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}
