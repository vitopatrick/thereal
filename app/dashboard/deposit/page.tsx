import DepositFaq from "@/components/Deposit/DepositFaq";
import DepositForm from "@/components/Deposit/DepositForm";
import DepositHistory from "@/components/Deposit/DepositHistory";

export default function DepositPage() {
  return (
    <div>
      <div className="text-white flex items-start gap-4 flex-col md:flex-row mx-auto w-[90%]">
        <DepositForm />
        <DepositFaq />
      </div>
      <DepositHistory />
    </div>
  );
}
