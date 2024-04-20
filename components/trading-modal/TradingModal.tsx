import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useFetchUser } from "../../hooks/useFetchUser";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const TradingModal = ({ hide, setHide, tradingFunction }: any) => {
  const [tradingPassword, setTradingPassword] = useState<string>("");
  const { userState: user }: any = useFetchUser();

  const modalFunction = async (e: any) => {
    e.preventDefault();
    if (!tradingPassword) {
      return toast.error("Please Enter Trading Password", {
        position: "bottom-center",
      });
    }
    if (!user?.trading_password) {
      return toast.error("Please create a secure password", {
        position: "bottom-center",
      });
    }
    if (tradingPassword != user?.trading_password) {
      return toast.error("password Incorrect", {
        position: "bottom-center",
      });
    }
    try {
      await tradingFunction(e);
      // toast("Request submitted", {
      //   bodyClassName: "toast",
      //   type: "info",
      //   position: "top-center",
      // });
      setHide(false);
    } catch (error) {
      toast.error("could not process request", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        key={hide}
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] text-white font-main md:w-[40%] mx-auto my-12 bg-stone-800 rounded-md relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <X
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 text-center font-semibold text-xl capitalize underline underline-offset-2">
              Trading Password
            </h2>
          </div>
          {/* form  */}
          <form className="my-3">
            <div className="flex items-center justify-center">
              <InputOTP
                maxLength={4}
                value={tradingPassword}
                onChange={(value) => setTradingPassword(value)}
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <button
              onClick={modalFunction}
              type="submit"
              className="inline-block w-full mt-6 font-sec py-2 bg-orange-600 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TradingModal;
