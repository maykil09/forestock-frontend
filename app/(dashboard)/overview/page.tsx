import LowStockAlertChart from "@/components/module/overview/LowStockAlertChart";
import OverviewCard from "@/components/module/overview/OverviewCard";
import SalesAndStocksChart from "@/components/module/overview/SalesAndStocksChart";
import TopBranchChart from "@/components/module/overview/TopBranchChart";
import HeaderTitle from "@/components/shared/HeaderTitle";
import { Boxes, ClockFading, DollarSign, Store, User } from "lucide-react";
import React from "react";

const monthlyPerformanceData = [
  { month: "January", stocks: 186, sales: 80 },
  { month: "February", stocks: 305, sales: 200 },
  { month: "March", stocks: 237, sales: 120 },
  { month: "April", stocks: 73, sales: 190 },
  { month: "May", stocks: 209, sales: 130 },
  { month: "June", stocks: 214, sales: 140 },
  { month: "July", stocks: 198, sales: 160 },
  { month: "August", stocks: 176, sales: 170 },
  { month: "September", stocks: 142, sales: 155 },
  { month: "October", stocks: 185, sales: 190 },
  { month: "November", stocks: 160, sales: 220 },
  { month: "December", stocks: 190, sales: 240 },
];

const lowStockData = [
  { product: "SSD 512GB", stock: 16 },
  { product: "RAM 8GB", stock: 7 },
  { product: "Mechanical Keyboard", stock: 2 },
  { product: "27'' Monitor", stock: 15 },
  { product: "Gaming Mouse", stock: 1 },
];

// Branch-level comparison data
const topBranchData = [
  { branch: "Hube Puerto", sales: 420, stock: 180 },
  { branch: "Hube Center Point", sales: 360, stock: 150 },
  { branch: "Hube Iligan", sales: 510, stock: 200 },
];

const Overview = () => {
  return (
    <>
      <div className="px-4">
        <HeaderTitle title="Overview" />
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-4 lg:px-6 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:shadow-xs">
        <OverviewCard
          title="Branches"
          data="3"
          Icon={Store}
          action={{
            label: "Manage Branches",
            href: "/branch",
          }}
          footer={{
            title: "Registered branches",
            description:
              "Total physical or operational locations in the system.",
          }}
        />
        <OverviewCard
          title="Users"
          data="15"
          Icon={User}
          action={{
            label: "View Users",
            href: "/user",
          }}
          footer={{
            title: "Registered users",
            description: "Includes all users with active system access.",
          }}
        />
        <OverviewCard
          title="Stocks"
          data="500"
          Icon={Boxes}
          action={{
            label: "View Inventory",
            href: "/product/stock",
          }}
          footer={{
            title: "Total available stock",
            description:
              "All inventory items currently in stock across branches.",
          }}
        />
        <OverviewCard
          title="Pendings"
          data="5"
          Icon={ClockFading}
          action={{
            label: "View Requests",
            href: "/product/request",
          }}
          footer={{
            title: "Unresolved requests",
            description:
              "Includes transfer, restock, and transaction approvals.",
          }}
        />
      </div>
      {/* Chart Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 gap-6 px-4">
        {/* 1. Sales & Stock Trends */}
        <div className="col-span-1 xl:col-span-2 w-full">
          <SalesAndStocksChart chartData={monthlyPerformanceData} />
        </div>

        {/* 2. Low Stock Alerts */}
        <div className="col-span-1 w-full">
          <LowStockAlertChart chartData={lowStockData} />
        </div>

        {/* 3. Top Branches */}
        <div className="col-span-1 md:col-span-1 xl:col-span-3 w-full">
          <TopBranchChart chartData={topBranchData} />
        </div>
      </div>
    </>
  );
};

export default Overview;
