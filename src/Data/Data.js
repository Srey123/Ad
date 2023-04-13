// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,

} from "@iconscout/react-unicons";


import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";


export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Orders",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 90,
   
    png: UilUsdSquare,
    series: [
      {
        name: "Orders",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Customers",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "customers",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Products",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue:80,
    
    png: UilClipboardAlt,
    series: [
      {
        name: "products",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];