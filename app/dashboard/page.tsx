"use client";

import Chart from "@/components/Chart/Chart";
import Summary from "@/components/portfolio-summary/Summary";

export default function DashboardPage() {
  return (
    <div className="p-4">
      <Chart />
      <Summary />
    </div>
  );
}
