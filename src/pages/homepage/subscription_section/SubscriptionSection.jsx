import React from "react";
import envelope from "../../../assets/envelope-2.svg";
import subscription from "../../../assets/subscription.png";

function SubscriptionSection() {
  return (
    <section className="my-8 px-8 md:px-12 text-white">
      <div className="w-fit md:bg-[#3b3b3b] md:rounded-lg-2 md:p-5  flex flex-col gap-8  md:flex-row  lg:justify-center">
        <div className="md:flex md:items-center  lg:w-2/5">
          <img
            className="w-full rounded-lg-2 object-cover  lg:w-full lg:h-80"
            src={subscription}
            alt="illustration"
          />
        </div>

        <div className="flex flex-col justify-center gap-3  lg:w-2/5">
          <h4 className="text-3xl lg:text-4xl font-semibold font-worksans">
            Join our weekly digest
          </h4>

          <p className="font-worksans lg:text-2xl">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <form className="max-w-md mt-5 font-worksans text-black caret-black  flex flex-col gap-4  lg:bg-white lg:rounded-lg-2 lg:flex-row lg:justify-between lg:items-center lg:gap-0">
            <div>
              <input
                className="w-full py-3 px-5 rounded-lg-2 focus:outline-none"
                type="email"
                placeholder="Email Address"
              />
            </div>

            <div>
              <button
                className="w-full bg-[#A259FF] text-white font-semibold py-3 px-12 rounded-lg-2 hover:scale-95 transition ease-out duration-200  flex justify-center items-center gap-x-3"
                type="submit"
              >
                <img className="" src={envelope} alt="envolope icon" />
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;
