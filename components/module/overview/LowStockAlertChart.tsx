"use client";

import { AlertTriangle } from "lucide-react";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

export const description = "A horizontal bar chart showing low-stock products";

type StockLevel = {
  label: string;
  threshold: number;
  color: string;
};

type ExtendedChartConfig = {
  stock: {
    label: string;
    levels: StockLevel[];
  };
};

// Chart config with threshold levels
const chartConfig: ExtendedChartConfig = {
  stock: {
    label: "Stock",
    levels: [
      { label: "Critical", threshold: 5, color: "#EF4444" },
      { label: "Warning", threshold: 10, color: "#F97316" },
      { label: "Low", threshold: 15, color: "#EAB308" },
      { label: "Good", threshold: Infinity, color: "#020618" },
    ],
  },
};
type LowStockData = {
  product: string;
  stock: number;
};

type TLowStockAlertChartProps = {
  chartData: LowStockData[];
  title?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
};

// Dynamically get bar color based on thresholds
const getBarColor = (stock: number) => {
  const levels = chartConfig.stock.levels;
  for (const level of levels) {
    if (stock <= level.threshold) return level.color;
  }
  return "#A3A3A3"; // fallback
};

const LowStockAlertChart = ({
  chartData,
  title = "Low Stock Alerts",
  description = "Products running low across all branches",
  actionHref = "/product/request",
  actionLabel = "Restock Now",
}: TLowStockAlertChartProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <Link href={actionHref}>
            <Button className="cursor-pointer" variant="outline" size="sm">
              {actionLabel}
            </Button>
          </Link>
        </CardAction>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={{}}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 0, right: 20, left: 40, bottom: 0 }}>
            <XAxis type="number" />
            <YAxis
              dataKey="product"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="stock" radius={4}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.stock)} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium">
          Action needed on critical items
          <AlertTriangle className="h-4 w-4 text-destructive" />
        </div>
        <div className="text-muted-foreground leading-none">
          Restock suggested for products below safety threshold.
        </div>

        {/* Dynamic Legend */}
        <div className="flex flex-wrap gap-4 text-xs mt-3">
          {chartConfig.stock.levels.map((level) => (
            <div key={level.label} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: level.color }}
              />
              {level.label}
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LowStockAlertChart;
