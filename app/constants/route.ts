import {
  LayoutDashboard,
  Store,
  Package,
  PackageOpen,
  Boxes,
  UsersRound,
  CircleUser,
  ShieldUser,
  Newspaper,
  Banknote,
  Truck,
} from "lucide-react";

export const allRoutes = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    url: "/overview",
  },
  {
    title: "User",
    icon: UsersRound,
    url: "/user",
  },
  {
    title: "Product Management",
    icon: PackageOpen,
    child: [
      {
        title: "Product",
        icon: Package,
        url: "/product",
      },
      {
        title: "Price",
        icon: Banknote,
        url: "/product/price-history",
      },
      {
        title: "Stock",
        icon: Boxes,
        url: "/product/stock",
      },
      {
        title: "Transfer Stock",
        icon: Truck,
        url: "/product/stock/transfer",
      },
      {
        title: "Request",
        icon: Newspaper,
        url: "/product/request",
      },
    ],
  },
  {
    title: "Branch",
    icon: Store,
    url: "/branch",
  },
  {
    title: "Role",
    icon: CircleUser,
    url: "/role",
  },
  {
    title: "Permission",
    icon: ShieldUser,
    url: "/permission",
  },
];
