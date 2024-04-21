import { useContext, useState } from "react";
import { store } from "@/config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { X } from "lucide-react";

interface UserTradingModalTypes {
  hide: Boolean;
  setHide: any;
  heading: Boolean;
}

const UserTradingModal = ({
  hide,
  setHide,
  heading,
}: UserTradingModalTypes) => {
  const [tradingPassword, setTradingPassword] = useState("");

  const { user: state }: any = useContext(UserContext);
  const router = useRouter();

  // handle verification
  const submitVerification = async (e: any) => {
    // prevent Browser Default
    e.preventDefault();

    // check if the forms are Empty
    if (!tradingPassword) {
      toast("Please form correctly");
      return;
    }
    try {
      // update the document
      const userRef = doc(store, "users", `${state.email}`);
      await updateDoc(userRef, {
        trading_password: tradingPassword,
      });
      setHide(false);
      router.refresh();
    } catch (e: any) {
      toast(e.code);
    }
  };

  return (
    <AnimatePresence>
      {/* parent div positioned absolute */}
      <motion.div
        key={hide ? 1 : 0}
        variants={{
          start: {
            opacity: 0,
            scale: 0,
          },
          end: {
            opacity: 1,
            scale: 1,
          },
          exit: {
            opacity: 0,
            scale: 0,
          },
        }}
        initial="start"
        animate="end"
        exit="exit"
        transition={{
          duration: 0.2,
        }}
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-stone-800 rounded-md font-variable relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <X
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="py-3 font-semibold text-center text-white text-xl capitalize underline">
              {heading ? "Change Password" : "Add Trading Password"}
            </h2>
          </div>
          {/* form  */}
          <form>
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
            {/* submit button */}
            <button
              onClick={submitVerification}
              className="inline-block w-full mt-6 font-sec py-2 bg-orange-600 text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UserTradingModal;
