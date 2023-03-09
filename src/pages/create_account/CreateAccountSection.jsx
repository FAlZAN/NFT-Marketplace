import React from "react";
import background from "../../assets/create-account-background.png";
import user from "../../assets/user-2.svg";
import envolope from "../../assets/envelope.svg";
import lock from "../../assets/lock.svg";

function CreateAccountSection() {
  return (
    <section className="text-white  flex flex-col md:flex-row md:justify-start">
      <img
        className="w-full md:w-2/5 h-60 md:h-auto object-cover"
        src={background}
        alt="background"
      />

      <div className=" my-8 px-8 md:px-12 lg:px-20">
        <h3 className="mb-4 text-5xl lg:text-6xl font-semibold font-worksans">
          Create Account
        </h3>

        <p className="font-worksans lg:text-2xl">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>

        <form className="pt-8 font-worksans text-black caret-black  flex flex-col gap-4">
          <div className="relative">
            <input
              className="w-full py-3 px-12 rounded-3xl"
              type="text"
              placeholder="Username"
            />

            <img
              className="absolute top-3.5 left-5"
              src={user}
              alt="user icon"
            />
          </div>

          <div className="relative">
            <input
              className="w-full py-3 px-12 rounded-3xl"
              type="email"
              placeholder="Email Address"
            />

            <img
              className="absolute top-3.5 left-5"
              src={envolope}
              alt="envolope icon"
            />
          </div>

          <div className="relative">
            <input
              className="w-full py-3 px-12 rounded-3xl"
              type="password"
              placeholder="Password"
            />

            <img
              className="absolute top-3.5 left-5"
              src={lock}
              alt="lock icon"
            />
          </div>

          <div className="relative">
            <input
              className="w-full py-3 px-12 rounded-3xl"
              type="password"
              placeholder="Confirm Password"
            />

            <img
              className="absolute top-3.5 left-5"
              src={lock}
              alt="lock icon"
            />
          </div>

          <input
            className="bg-[#A259FF] text-white mt-4 py-3 px-12 rounded-3xl"
            type="submit"
            value="Create account"
          />
        </form>
      </div>
    </section>
  );
}

export default CreateAccountSection;
