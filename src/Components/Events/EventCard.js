// This page is dedicated to a particular event card

// necessary imports
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const EventCard = ({ image, title, subtitle, path, index, id}) => {

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  

  return (
    // wrapper div
    <div className={`w-full flex justify-center`}>
      {/* main div */}
      <div
        className={`w-[1350px] flex flex-col items-center gap-4 lg:gap-24 lg:flex-row ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        } justify-center`}
      >
        {/* image div */}
        <div>
          <img src={image} className="" alt="error" />
        </div>

        {/* content div */}
        <div className="flex flex-col justify-center items-start gap-9 max-w-[590px]">
          {/* title */}
          <div className="font-semibold md:text-[40px] text-[30px]">
            {title}
          </div>

          {/* description */}
          <div className="font-normal text-[18px] text-[#666666]">
            {subtitle}
          </div>

          {/* button for navigating to full event page */}
          <Link to={`/event-detail/${id}`} onClick={() => scrollToTop()}>
            <button className="flex items-center justify-center gap-3 font-semibold text-primary-light hover:text-primary-dark">
              Learn More <GoArrowRight></GoArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
