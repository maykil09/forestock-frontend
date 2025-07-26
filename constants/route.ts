import {
  LayoutDashboard,
  Store,
  Package,
  PackageOpen,
  Boxes,
  UsersRound,
  UserRound,
  CircleUser,
  ShieldUser,
  Newspaper,
  Banknote,
  Truck,
  Computer,
  Shield,
  CircleUserRound,
  ClipboardPenLine,
} from "lucide-react";

export const allRoutes = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    url: "/overview",
  },
  {
    title: "User Management",
    icon: UsersRound,
    child: [
      {
        title: "User",
        icon: UserRound,
        url: "/user",
      },
      {
        title: "Role",
        icon: CircleUser,
        url: "/user/role",
      },
      {
        title: "Permission",
        icon: Shield,
        url: "/user/permission",
      },
      {
        title: "Assign Role",
        icon: CircleUserRound,
        url: "/user/assign-role",
      },
      {
        title: "Assign Permission",
        icon: ShieldUser,
        url: "/user/assign-permission",
      },
      {
        title: "Assign Branch",
        icon: Store,
        url: "/user/assign-branch",
      },
    ],
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
        icon: ClipboardPenLine,
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
    title: "Transaction",
    icon: Computer,
    url: "/transaction",
  },
  {
    title: "Reports",
    icon: Newspaper,
    url: "/reports",
  },
];
