import ServicesCard from "./cards/ServicesCard";

export default function Services() {
  return (
    <section id="services">
      <div id="services-header" className="mt-4">
        <h2 className="text-center font-roboto text-3xl font-bold">Services</h2>
      </div>
      <div
        id="card-container"
        className="mx-2 mt-2 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center"
      >
        <ServicesCard kitchen heading={"Kitchen Tile"}>
          A good tile job can last the life time of your house and adds value.
          We only use the best materials so you can enjoy your house for many
          years to come.
        </ServicesCard>
        <ServicesCard shower heading={"Shower Tile"}>
          A shower remodel is a great way to spruce up a dated bathroom. We use
          tile specifically intended for wet areas so you never have an issue with
          your new investment.
        </ServicesCard>
        <ServicesCard backsplash heading={"Backsplash Installation"}>
          A kitchen backsplash is the perfect way to bring new life into a
          kitchen and update its look. New floor tile in combination with a
          backsplash will add value to your home.
        </ServicesCard>
      </div>
    </section>
  );
}
