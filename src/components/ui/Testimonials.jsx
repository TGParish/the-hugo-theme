import TestimonialsCard from './cards/TestiomonialsCard';

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-4 mt-6 flex flex-col items-center">
      <h2 className="text-center font-roboto text-3xl font-bold">
        Testimonials
      </h2>
      <div className="flex flex-col gap-6">
        <TestimonialsCard
          testimonial={'The website is elegant, simple, and to the point.'}
          author={
            'Johnny Rocheforte, landscaping expert with over 20 years of experience'
          }
        />
        <TestimonialsCard
          testimonial={
            'Early one morning the sun was shining and she was lying in bed.'
          }
          author={
            'Elston Gunn, working for awhile on a fishing boat right outside Delacroix'
          }
        />
        <TestimonialsCard
          testimonial={
            "Somehow I found myself down at the dockside Thinking 'bout the old days of Liverpool and Rotherhithe."
          }
          author={'Howard Coward, angry young man'}
        />
      </div>
    </section>
  );
}
