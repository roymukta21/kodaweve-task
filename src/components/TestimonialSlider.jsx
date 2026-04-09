import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import Testimonial from "./Testimonial";
import { testimonialsData } from "../data/testimonials";

const TestimonialSlider = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.id}>
            <Testimonial name={item.name} feedback={item.feedback} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;