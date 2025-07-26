"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export type TBranchPerformance = {
  branch: string;
  sales: number;
  stock: number;
};

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#5EEAD4",
  },
  stock: {
    label: "Stock",
    color: "#14B8A6",
  },
} satisfies ChartConfig;

const TopBranchChart = ({ chartData }: { chartData: TBranchPerformance[] }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Top Branches</CardTitle>
        <CardDescription>
          Compare sales and stock levels across branches
        </CardDescription>
      </CardHeader>

      <CardContent className="h-96 w-full">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 10, right: 20, left: 60, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis
                dataKey="branch"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="sales" fill="#5EEAD4" radius={4} />
              <Bar dataKey="stock" fill="#14B8A6" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Hube Iligan is leading in performance{" "}
          <TrendingUp className="h-4 w-4 text-green-600" />
        </div>
        <div className="text-muted-foreground leading-none">
          Compare sales and stock levels to optimize inventory across branches.
        </div>
      </CardFooter>
    </Card>
  );
};

export default TopBranchChart;
