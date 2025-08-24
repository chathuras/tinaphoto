import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample photos - you can replace these with your actual photos
const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000&h=600&fit=crop',
    alt: 'Mountain landscape',
    title: 'Beautiful Mountains'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&h=600&fit=crop',
    alt: 'Forest path',
    title: 'Peaceful Forest'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&h=600&fit=crop',
    alt: 'Ocean waves',
    title: 'Ocean Waves'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1000&h=600&fit=crop',
    alt: 'Sunset over lake',
    title: 'Golden Sunset'
  }
];

const PhotoCarousel: React.FC = () => {
  return (
    <div className="photo-carousel">
      {/* <h2>Photo Gallery</h2> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="slide-content">
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="slide-image"
              />
              <div className="slide-overlay">
                <h3>{photo.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
