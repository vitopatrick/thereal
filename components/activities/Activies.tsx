const activities = [
  {
    type: "withdrawal",
    remark: "First withdrawal",
    date: new Date().toLocaleDateString(),
    approved: false,
  },
  {
    type: "deposit",
    remark: "Testing withdrawals for me kids",
    date: new Date().toLocaleDateString(),
    approved: false,
  },
  {
    type: "withdrawal",
    remark: "Transfer to my second account",
    date: new Date().toLocaleDateString(),
    approved: false,
  },
  {
    type: "withdrawal",
    remark: "normal withdrawal",
    date: new Date().toLocaleDateString(),
    approved: true,
  },
];

export default function Activies() {
  return (
    //card body
    <div className="bg-stone-800 p-3 rounded-md h-full">
      {/* header */}
      <h3 className="lg:text-2xl text-xl border-b-2 pb-3 border-neutral-500">
        Recent Activities
      </h3>
      {/* container for activities */}
      <div className="mt-3 space-y-4">
        {activities.length < 1 ? (
          <div className="flex items-center justify-center">
            <div className="flex item-center justify-center  text-neutral-400 gap-3">
              <p className="capitalize"> no recent transactions</p>
            </div>
          </div>
        ) : (
          activities.map((activiity, index) => (
            <div key={index} className="flex justify-between">
              <div className="space-y-2">
                <h2 className="line-clamp-1">{activiity.remark}</h2>
                <h2 className="text-neutral-400">{activiity.type}</h2>
              </div>
              <div className="space-y-2">
                <h3>{activiity.date}</h3>
                <h3
                  className={
                    activiity.approved ? "text-green-500" : "text-red-500"
                  }
                >
                  {activiity.approved ? "Approved" : "Pending..."}
                </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
