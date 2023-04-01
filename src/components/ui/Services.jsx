import ServicesCard from './cards/ServicesCard';

export default function Services() {
  return (
    <section id="services">
      <div id="services-header" className="mt-6">
        <h2 className="text-center font-roboto text-3xl font-bold">Services</h2>
      </div>
      <div
        id="card-container"
        className="mx-4 mt-2 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center"
      >
        <ServicesCard dev heading={'Web Development'}>
          Think of a website as your online ambassador. It shows potential
          clients that you care about your brand's image and gives them a way to
          find out about your services.
        </ServicesCard>
        <ServicesCard design heading={'Web Design'}>
          Not only does a website have to function well, but it needs to look
          good, too. A well designed website delights the eye, while a poorly
          made one sends people running for the hills.
        </ServicesCard>
        <ServicesCard hosting heading={'Hosting'}>
          Managing a website can be a full-time job in itself. I offer hosting
          to my clients to ensure the site is always up and running, resolving
          any server issues that come up.
        </ServicesCard>
      </div>
    </section>
  );
}
