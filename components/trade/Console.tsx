import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "@/context/UserAuthContext";
import { store } from "@/config/firebase";
import { useFetchUser } from "@/hooks/useFetchUser";
import { toast } from "sonner";
import { formatCurrency } from "@/lib/format";
import TradingModal from "../trading-modal/TradingModal";
import { tradingOptions } from "@/lib/tradingoptions";
import { TradingContext } from "@/context/TradingContext";

interface Itrade {
  min: number;
  profit: number;
}

const TradingConsole = () => {
  // State of the select tag
  const [show, setShow] = useState(false);
  const [option, setOptions] = useState<any>(300);
  const [trade, setTrade] = useState<Itrade[]>(
    tradingOptions.filter((trade) => trade.min == option)
  );

  const router = useRouter();
  const { user: state }: any = useContext(UserContext);
  const { selectedCoin }: any = useContext(TradingContext);
  const { userState }: any = useFetchUser();

  console.log(userState);

  // function to add Orders
  async function addOrders(e: any) {
    e.preventDefault();

    if (trade[0].min > userState?.balance)
      return toast.error("insufficent fund,please fund account");

    try {
      // create the collection ref
      const orderRef = collection(store, "users", `${state.email}`, "orders");

      // update account
      const userRef = doc(store, "/users", `${state.email}`);
      await updateDoc(userRef, {
        trading_account: increment(+trade[0].min),
        balance: increment(-trade[0].min),
        trading_stage: increment(+1),
      });

      // create Collection and then reload page or refresh page
      await addDoc(orderRef, {
        coin: selectedCoin,
        amount: trade[0].min,
        date: serverTimestamp(),
        profit: trade[0].profit,
        duration: "4 Days",
        status: false,
      });

      await fetch("/api/trade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          amount: trade[0].min,
          coin: selectedCoin,
        }),
      });

      router.refresh();
    } catch (error) {
      return toast.error("Could not Perform Trade");
    }
  }

  return (
    <>
      <div className="bg-stone-800 text-white shadow-md font-main p-4 rounded">
        {/* parent container */}
        <div>
          {/* child content */}
          <div className="flex flex-col gap-4">
            {/* header component */}
            <div className="mb-4">
              <h3 className="pt-2 pb-1 text-xl font-bold">Enter Trade</h3>
              <p className="text-sm text-neutral-400 capitalize">
                select your trading options
              </p>
            </div>
            <select
              value={option}
              onChange={(e) =>
                setOptions(() => {
                  // set the option
                  setTrade(
                    tradingOptions.filter(
                      (trade) => +e.target.value == trade.min
                    )
                  );
                })
              }
              className="bg-stone-700 p-4 rounded-md "
            >
              {tradingOptions.map((options) => (
                <option key={options.min} value={options.min}>
                  {formatCurrency(options.min)}
                </option>
              ))}
            </select>
            {trade && (
              <div className="flex justify-between ">
                {/* minimum Trade */}
                <div>
                  <p className="text-neutral-400">Minimum Amount</p>
                  <p>{formatCurrency(trade[0].min)}</p>
                </div>
                {/* Profit  */}
                <div>
                  <p className="text-neutral-400">Profit</p>
                  <p>{formatCurrency(trade[0].profit)}</p>
                </div>
              </div>
            )}
            {/* duration */}
            <div>
              <div>
                <p className="text-neutral-400">Duration</p>
                <p>4 Days</p>
              </div>
            </div>
            {/* button */}
            <div>
              <button
                onClick={() => setShow(true)}
                className="font-bold py-3 my-4 text-sm w-full px-3 uppercase rounded text-black bg-orange-600"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <TradingModal hide={show} setHide={setShow} tradingFunction={addOrders} />
    </>
  );
};

export default TradingConsole;
