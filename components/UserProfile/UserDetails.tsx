"use client";

import { Banknote, Eye, EyeOff, Lock, Mail, Verified } from "lucide-react";
import { UserType } from "../../hooks/useFetchUser";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";

const UsersDetails = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {/* parent grid container */}
      <div className="md:w-[60%] mx-auto  md:grid grid-cols-2 gap-4 px-2">
        {/* grid children */}
        <div className="my-2 p-4 flex items-center gap-6 bg-stone-800 rounded shadow">
          {loading && <Skeleton className="h-12 w-12 rounded-full" />}
          {!loading && (
            <div className="bg-neutral-700 p-3 md:p-5 rounded-full">
              <Mail />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">Email</h2>
            {loading && <Skeleton className="h-4 w-[250px]" />}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base">{user.email}</h1>
            )}
          </div>
        </div>
        {/* grid child 2 */}
        <div className="my-2 p-4 flex items-center gap-6 bg-stone-800 rounded shadow">
          {loading && <Skeleton className="h-12 w-12 rounded-full" />}
          {!loading && (
            <div className="bg-neutral-700 p-3 md:p-5 rounded-full">
              <Verified className="text-[#dc2626] text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">
              Trading Stage
            </h2>
            {loading && <Skeleton className="h-4 w-[250px]" />}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base text-paper">
                {user?.trading_stage == 0
                  ? "Just Started"
                  : user?.trading_stage}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 3 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-stone-800 rounded shadow">
          {loading && <Skeleton className="h-12 w-12 rounded-full" />}
          {!loading && (
            <div className="bg-neutral-700 p-3 md:p-5 rounded-full">
              <Banknote className="text-[#fbbf24] text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">
              Daily Withdrawal Limit
            </h2>
            {loading && <Skeleton className="h-4 w-[250px]" />}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base">
                {user.verfied ? "25 BTC" : "Please Verify account"}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 4 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-stone-800 rounded shadow">
          {loading && <Skeleton className="h-12 w-12 rounded-full" />}
          {!loading && (
            <div className="bg-neutral-700 p-3 md:p-5 rounded-full">
              <Lock className="text-[#ea580c] text-base md:text-2xl" />
            </div>
          )}
          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base">
              Trading Password
            </h2>
            {loading && <Skeleton className="h-4 w-[250px]" />}
            {!loading && (
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-base md:text-lg text-paper">
                  {user.trading_password
                    ? isShow
                      ? user.trading_password
                      : "xxxxx"
                    : "N/A"}
                </h1>
                <button onClick={toggleShow}>
                  {isShow ? <Eye /> : <EyeOff />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
