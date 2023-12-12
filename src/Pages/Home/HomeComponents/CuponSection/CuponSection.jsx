import { useState } from "react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionHeader from "../../../../components/Common/SectionHeader";
import CuponImage from "../../../../assets/discount.svg";
import { Link } from "react-router-dom";

const CuponSection = () => {
  const [cuponCode, setCuponCode] = useState();

  return (
    <div className="max-w-7xl mx-auto px-3 xl:px-0 font-playpen mt-32">
      <SectionHeader subtitle={"#Cupons"} title={"All Available Cupons"} />
      <div className="mt-8">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Swiper modules={[Navigation, A11y]} slidesPerView={1} navigation>
            <SwiperSlide>
              <div className="xl:h-[380px] px-10 py-8 rounded-lg bg-blue-100 flex flex-col-reverse lg:flex-row">
                <div className="flex-1 text-center lg:text-left mt-8">
                  <h2 className="text-4xl xl:text-6xl font-bold">
                    Spacial Offer !!!
                  </h2>
                  <p className="text-xl my-5">
                    Get exclusive discounts with our limited-time coupons.
                    Checkout and{" "}
                    <span className="text-blue-500 font-bold text-2xl">
                      save 20%
                    </span>
                  </p>
                  <h4 className="mb-5 text-2xl">
                    {cuponCode
                      ? cuponCode
                      : "Click the button and get the code"}
                  </h4>
                  {!cuponCode ? (
                    <button
                      onClick={() => {
                        setCuponCode("Legend490");
                      }}
                      className="btn btn-primary"
                    >
                      Get Cupon
                    </button>
                  ) : (
                    <Link className="btn btn-primary">Use Cupon</Link>
                  )}
                </div>
                <img
                  className="w-1/2 h-1/2 mx-auto xl:w-full xl:h-full flex-1"
                  src={CuponImage}
                  alt="cupon image"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:h-[380px] px-10 py-8 rounded-lg bg-blue-100 flex flex-col-reverse lg:flex-row">
                <div className="flex-1 text-center lg:text-left mt-8">
                  <h2 className="text-4xl xl:text-6xl font-bold">
                    Spacial Offer !!!
                  </h2>
                  <p className="text-xl my-5">
                    Get exclusive discounts with our limited-time coupons.
                    Checkout and{" "}
                    <span className="text-blue-500 font-bold text-2xl">
                      save 10%
                    </span>
                  </p>
                  <h4 className="mb-5 text-2xl">
                    {cuponCode
                      ? cuponCode
                      : "Click the button and get the code"}
                  </h4>
                  {!cuponCode ? (
                    <button
                      onClick={() => {
                        setCuponCode("Legend490");
                      }}
                      className="btn btn-primary"
                    >
                      Get Cupon
                    </button>
                  ) : (
                    <Link className="btn btn-primary">Use Cupon</Link>
                  )}
                </div>
                <img
                  className="w-1/2 h-1/2 mx-auto xl:w-full xl:h-full flex-1"
                  src={CuponImage}
                  alt="cupon image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CuponSection;
