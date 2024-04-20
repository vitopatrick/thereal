"use client";

import { useState } from "react";
import StakingModal from "@/components/staking/StakingModal";

export const stakingOptions = [
  {
    id: 1,
    range: "$5,000 - $100,000",
    duration: "14",
    min: 5000,
    plan: "USDT",
    network: "TRC-20",
    image: "https://cryptologos.cc/logos/tether-usdt-logo.png?v=031",
    roi: "60%",
  },
  {
    id: 2,
    range: "$7,500 - $80,000",
    duration: "30",
    min: 7500,
    plan: "TON",
    network: "ton",
    image: "https://ton.org/download/ton_symbol.png",
    roi: "100%",
  },
  {
    id: 3,
    range: "$5000 - $150,000",
    duration: "60",
    min: 5000,
    plan: "TRON",
    network: "TRC-20",
    image: "https://cryptologos.cc/logos/tron-trx-logo.png?v=031",
    roi: "150%",
  },
];

export default function StakingPage() {
  // set the visibilty of the staking Modal
  const [visible, setVisible] = useState(false);
  // Set the selected Option
  const [data, setData] = useState();

  const passData = (passData: any) => {
    setVisible(true);
    setData(passData);
  };

  return (
    <>
      <div className="p-5">
        {/* header */}
        <h3 className="text-2xl lg:text-3xl ">Staking</h3>
        {/* staking options */}
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3">
          {" "}
          {stakingOptions.map((opt) => (
            <div
              key={opt.id}
              className="bg-stone-800 p-4 rounded shadow my-4 md:my-0"
            >
              {/* staking name */}
              <div className="py-4 flex gap-3">
                <div className="w-[40px]">
                  <img src={opt.image} alt="" />
                </div>
                <div>
                  <h4
                    className={
                      opt.plan === "USDT"
                        ? "text-teal-600 font-semibold text-xl"
                        : opt.plan === "TON"
                        ? "text-blue-600 font-semibold text-xl"
                        : "text-red-500 font-semibold text-xl"
                    }
                  >
                    {opt.plan}
                  </h4>
                  <p className="text-sm my-2 text-neutral-400 font-bold">
                    {opt.network}
                  </p>
                </div>
              </div>
              {/* staking range */}
              <div>
                <p className="font-sec text-2xl font-bold text-paper">
                  {opt.range}
                </p>
              </div>
              <div className="my-4 flex items-center gap-3 font-sec">
                <p className="font-semibold text-xs text-neutral-400">
                  Redemption Period
                </p>
                <p className="font-semibold text-xs">{opt.duration}days</p>
              </div>
              <div className="my-4 flex items-center gap-3 font-sec">
                <p className="font-semibold text-xs text-neutral-400">
                  Reference APR
                </p>
                <p className="font-semibold text-xs">{opt.roi}</p>
              </div>
              <button
                onClick={() => passData(opt)}
                className="mt-4 mb-2 font-sec inline-block bg-orange-500 py-1 rounded text-white  w-full hover:bg-orange-600"
              >
                Stake now
              </button>
            </div>
          ))}
        </div>
      </div>
      <StakingModal visible={visible} setVisible={setVisible} data={data} />
    </>
  );
}
