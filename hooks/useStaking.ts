import { UserContext } from "@/context/UserAuthContext";
import { useState, useMemo, useContext } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { store } from "@/config/firebase";

export const useStaking = (path: String | any) => {
  const [transactions, setTransactions] = useState<
    [{}] | null | undefined | any
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // user context
  const { user }: any = useContext(UserContext);

  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchTransactions = async () => {
      // create collectionRef
      const collectionRef = collection(store, "/users", `${user.email}`, path);

      const transactionsArray: any = [];

      onSnapshot(
        collectionRef,
        (docs) => {
          docs.forEach((doc) => {
            const data = doc.data();

            transactionsArray.push({
              network: data.network,
              amount: parseInt(data.amount),
              plan: data.plan,
              id: doc.id,
              profit: data.profit ? data.profit : null,
              profit_date: data.profitDate,
              start_date: data.start_date,
            });
            setTransactions(transactionsArray);
          });
        },
        (error: any) => setError(error.code)
      );
    };

    fetchTransactions();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => controller.abort();
  }, [user.email]);

  return {
    error,
    loading,
    transactions,
  };
};
