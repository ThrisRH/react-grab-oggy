import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationContainer, PrevButton, NextButton } from "./Button";
import { Box } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import QuanAn from "./QuanAn";
import data from "./QuanAnData";

const SliderQuanAn = () => {
  // Sử dụng useRef để lưu trữ tham chiếu tới Swiper instance
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    // Nếu swiperRef tồn tại và đã được khởi tạo
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Chuyển đến slide trước đó
    }
  };

  const handleNextClick = () => {
    // Nếu swiperRef tồn tại và đã được khởi tạo
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Chuyển đến slide tiếp theo
    }
  };
  return (
    <>
      <Box style={{ position: "relative" }}>
        <Swiper slidesPerView={4} ref={swiperRef}>
          {data.QuanAnData.map((item, index) => {
            return (
              <SwiperSlide
                style={{
                  maxWidth: "280px",
                  minWidth: "280px",
                  padding: "0px 12px 24px 12px",
                }}
              >
                <QuanAn
                  ImageLink={item.ImageLink}
                  TenQuanAn={item.TenQuanAn}
                  MonAnTieuBieu={item.MonAnTieuBieu}
                  Rate={item.Rate}
                  Time={item.Time}
                  Distance={item.Distance}
                  Promote={item.Promote}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <NavigationContainer>
          <PrevButton onClick={handlePrevClick} />
          <NextButton onClick={handleNextClick} />
        </NavigationContainer>
      </Box>
    </>
  );
};

export default SliderQuanAn;
