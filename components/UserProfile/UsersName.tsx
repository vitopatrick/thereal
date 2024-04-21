"use client";

import { Lock } from "lucide-react";
import { UserType } from "../../hooks/useFetchUser";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import UserTradingModal from "./UserTradingPassword";

const UsersName = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  const isTradingPassword = user?.trading_password ? true : false;

  const [secondModal, setSecondModal] = useState(false);

  return (
    // container
    <div className="mt-4 mb-10 px-3">
      {/* parent flex container */}
      <div className="flex gap-4 flex-col items-center">
        {loading && <Skeleton className="h-12 w-12 rounded-full" />}
        {!loading && (
          <div className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] font-medium uppercase bg-neutral-500 p-4 rounded-full flex items-center justify-center text-4xl md:text-8xl text-black">
            {user?.name.slice(0, 2)}
          </div>
        )}

        <div>
          {loading && <Skeleton className="h-4 w-[250px]" />}
          {!loading && (
            <h1 className="font-bold md:text-xl text-base text-center text-white uppercase">
              {user?.name}
            </h1>
          )}
        </div>
      </div>
      {!isTradingPassword ? (
        <div className="flex items-center gap-2 text-red-400 justify-center my-3">
          <Lock />
          <button onClick={() => setSecondModal(true)}>
            Add Trading Password
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-red-400 justify-center my-3">
          <Lock />
          <button onClick={() => setSecondModal(true)}>
            Change Trading Password
          </button>
        </div>
      )}
      <UserTradingModal
        hide={secondModal}
        setHide={setSecondModal}
        heading={isTradingPassword}
      />
    </div>
    // end of container
  );
};

export default UsersName;
