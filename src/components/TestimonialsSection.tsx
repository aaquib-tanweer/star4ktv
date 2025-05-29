// Import client testimonial images
import testimonial1 from './clients testimonials/1.jpg';
import testimonial2 from './clients testimonials/2.jpg';
import testimonial3 from './clients testimonials/3.jpg';
import testimonial4 from './clients testimonials/4.jpg';
import testimonial5 from './clients testimonials/5.jpg';
import testimonial6 from './clients testimonials/6.jpg';
import testimonial7 from './clients testimonials/7.jpg';
import testimonial8 from './clients testimonials/8.jpg';

export function TestimonialsSection() {
  const testimonialImages = [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
    testimonial6,
    testimonial7,
    testimonial8
  ];

  return (
    <div className="py-16 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialImages.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <img 
                src={testimonial} 
                alt={`Client testimonial ${index + 1}`} 
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}