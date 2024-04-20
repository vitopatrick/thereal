import axios from "axios";
import { formatCurrency } from "@/lib/format";

const fetchAllCoins = async () => {
  try {
    const { data } = await axios.get("https://api.coinranking.com/v2/coins");

    const coinData = data.data?.coins?.map((coin: any) => ({
      name: coin.name,
      price: coin.price,
      sym: coin.symbol,
      img: coin.iconUrl,
      marketCap: coin.marketCap,
    }));

    return coinData;
  } catch (error) {
    return error;
  }
};

export default async function MarketPage() {
  const coins = await fetchAllCoins();

  return (
    <div className="p-5">
      {/* header */}
      <h3 className="text-2xl lg:text-3xl ">Market Overview</h3>
      {/* table header */}
      <div className="grid grid-cols-3 lg:grid-cols-5 mt-3 bg-stone-700 p-3 rounded-t">
        <div className="col-span-2">Coin</div>
        <div>Price</div>
        <div className="hidden lg:block">Symbol</div>
        <div className="hidden lg:block">Market Cap</div>
      </div>
      {/* details */}
      {coins.map((coin: any, index: number) => (
        <div
          className="grid grid-cols-3 lg:grid-cols-5 mt-1 bg-stone-900 p-3 rounded-t coin"
          key={coin.name}
        >
          <div className="col-span-2 flex gap-2">
            <img
              src={coin.img}
              alt={coin.name}
              className="lg:w-[5%] hidden lg:block"
            />
            <div>
              <p>{coin.name}</p>
              <p className="text-neutral-500 lg:hidden">{coin.sym}</p>
            </div>
          </div>
          <div>{formatCurrency(coin.price, 3)}</div>
          <div className="hidden lg:block">{coin.sym}</div>
          <div className="hidden lg:block">
            {formatCurrency(coin.marketCap)}
          </div>
        </div>
      ))}
    </div>
  );
}
