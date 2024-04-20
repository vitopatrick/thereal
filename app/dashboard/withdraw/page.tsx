import WithdrawalFaq from "@/components/withdrawal/WithdrawalFaq";
import WithdrawalForm from "@/components/withdrawal/WithdrawalForm";
import WithdrawalHistory from "@/components/withdrawal/WithdrawalHistory";
import React from "react";

export default function WithdrawalPage() {
  return (
    <div className="p-4">
      <div className="flex md:flex-row flex-col">
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>
      <WithdrawalHistory />
    </div>
  );
}
