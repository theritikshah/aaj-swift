"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Subroto Mozumdar",
    review:
      "It was a tough time when they started operation, considering restrictions on road entries, new customers and high expectations of dealers etc , was the big challenges to them. But, the team of AAJ enterprises has been focused on their duties since the 1st day.",
    rating: 5,
  },
  {
    name: "Subroto Mozumdar",
    review:
      "With the end of a successful financial year and the with the sales for a majority of the markets for the school season ending, I would like to thank AAJ and your team for the improvements you have brought about in contributing to our success...",
    rating: 5,
  },
  {
    name: "Subroto Mozumdar",
    review:
      "With the end of a successful financial year and the with the sales for a majority of the markets for the school season ending, I would like to thank AAJ and your team for the improvements you have brought about in contributing to our success...",
    rating: 5,
  },
  {
    name: "Subroto Mozumdar",
    review:
      "With the end of a successful financial year and the with the sales for a majority of the markets for the school season ending, I would like to thank AAJ and your team for the improvements you have brought about in contributing to our success...",
    rating: 5,
  },
  // Add more reviews if needed
];

const CustomerReviews = () => {
  const swiperRef = useRef<any>(null);
  return (
    <div className="w-full bg-black py-12 mt-16">
      <div className="flex flex-col container mx-auto gap-9">
        <header className="flex justify-between items-center">
          <h2 className="text-4xl font-medium text-white"> Customer Reviews</h2>
          <div className="space-x-2">
            <button
              onClick={() => (swiperRef.current as any)?.slidePrev()}
              className="bg-transparent border-white hover:bg-red btn btn-circle  text-white"
            >
              <FontAwesomeIcon className="!text-xl" icon={faArrowLeft} />
            </button>
            <button
              onClick={() => (swiperRef.current as any)?.slideNext()}
              className="bg-transparent border-white hover:bg-red btn btn-circle  text-white"
            >
              <FontAwesomeIcon
                className="!text-xl text-white"
                icon={faArrowRight}
              />
            </button>
          </div>
        </header>
        <main className="flex gap-10 ">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={3}
            className="relative"
            loop={true}
          >
            {reviews.map((review: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  {" "}
                  <Review
                    name={review.name}
                    rating={review.rating}
                    review={review.review}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </main>
      </div>
    </div>
  );
};

export default CustomerReviews;

function Review({
  name,
  rating,
  review,
}: {
  name: string;
  rating: number;
  review: string;
}) {
  return (
    <div className="bg-white p-10 rounded-2xl">
      <h5 className="font-semibold">{name}</h5>
      <div className="flex  mb-4 ">
        {Array(rating)
          .fill("*")
          .map((_, i) => (
            <span key={i} className="text-yellow-500 text-xl">
              ★
            </span>
          ))}
      </div>
      <p>{review}</p>
    </div>
  );
}
