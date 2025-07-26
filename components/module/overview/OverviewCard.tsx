import React from "react";
import { type LucideIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type TOverviewCardProps = {
  title: string;
  data: string;
  Icon?: LucideIcon;
  action?: {
    label: string;
    href: string;
  };
  footer?: {
    title: string;
    description: string;
  };
};

const OverviewCard = ({
  title,
  data,
  Icon,
  action,
  footer,
}: TOverviewCardProps) => {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>

        <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-4xl">
          {data}
        </CardTitle>

        {action && (
          <CardAction>
            <Link href={action.href}>
              <Button className="cursor-pointer" variant="outline" size="sm">
                {action.label}
              </Button>
            </Link>
          </CardAction>
        )}
      </CardHeader>

      {footer && (
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 font-medium">{footer.title}</div>
          <div className="text-muted-foreground">{footer.description}</div>
        </CardFooter>
      )}
    </Card>
  );
};

export default OverviewCard;
