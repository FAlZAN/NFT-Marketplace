import React from "react";
import background from "../../assets/create-account-background.png";
import { WALLET_OPTION } from "../../assets/index";

function ConnectWalletSection() {
  return (
    <section className="text-white  flex flex-col md:flex-row md:justify-start">
      <img
        className="w-full md:w-2/5 h-60 md:h-auto object-cover"
        src={background}
        alt="background"
      />

      <div className="my-8 px-8  flex flex-col gap-8">
        <div className="md:px-7 lg:px-20">
          <h3 className="mb-4 text-4xl lg:text-5xl font-semibold font-worksans">
            Connect Wallet
          </h3>

          <p className="font-worksans lg:text-2xl">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>
        </div>

        <div className="md:px-7 lg:px-20  flex flex-col gap-y-5">
          {WALLET_OPTION.map((wallet, index) => (
            <div
              key={index}
              className="bg-[#3b3b3b] p-4 border-2 border-[#A259FF] rounded-lg-2 cursor-pointer hover:scale-95 transition ease-out duration-200  flex justify-center gap-x-5"
            >
              <div className="w-[232px]  flex">
                <img className="mr-4" src={wallet.icon} alt="icon" />
                <h5 className="text-2xl font-worksans font-semibold">
                  {wallet.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConnectWalletSection;
