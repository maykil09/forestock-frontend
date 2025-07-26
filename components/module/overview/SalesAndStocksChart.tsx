"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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

export type TMonthlyPerformance = {
  month: string;
  stocks: number;
  sales: number;
};

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-2)",
  },
  stocks: {
    label: "Stocks",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

const SalesAndStocksChart = ({
  chartData,
}: {
  chartData: TMonthlyPerformance[];
}) => {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>Sales & Stocks</CardTitle>
        <CardDescription>
          Visual comparison of monthly sales and available stock levels.
        </CardDescription>
      </CardHeader>
      <CardContent className="h-80 w-full sm:h-72 xs:h-64">
        <ChartContainer config={chartConfig} className="h-full w-full">
          {/* <div className="w-full h-full"> */}
          <AreaChart
            width={undefined} // allow responsive
            height={undefined} // allow responsive
            className="h-full w-full"
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              width={undefined} // allow responsive
              height={undefined} // allow responsive
              className="h-full w-full"
              dataKey="sales"
              type="natural"
              fill="var(--color-sales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
            <Area
              width={undefined} // allow responsive
              height={undefined} // allow responsive
              className="h-full w-full"
              dataKey="stocks"
              type="natural"
              fill="var(--color-stocks)"
              fillOpacity={0.4}
              stroke="var(--color-stocks)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
          {/* </div> */}
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesAndStocksChart;
