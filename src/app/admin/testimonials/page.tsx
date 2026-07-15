import { getTestimonials } from "@/actions/testimonials";
import TestimonialsClient from "./TestimonialsClient";

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();
  return <TestimonialsClient initialTestimonials={testimonials} />;
}
