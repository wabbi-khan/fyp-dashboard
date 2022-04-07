import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuSidebar = () => {
  const router = useRouter();
  const menuItems = [
    {
      text: "Dashboard",
      url: "/",
      icon: "icon-home",
    },
    {
      text: "Employees Management",
      url: "/employees-management",
      icon: "icon-database",
    },
    {
      text: "File Management",
      url: "/file-management",
      icon: "icon-bag2",
    },
    {
      text: "Meeting Scheduler",
      url: "/meeting-scheduler",
      icon: "icon-users2",
    },
    // {
    //   text: "Categories",
    //   url: "/categories",
    //   icon: "icon-users2",
    // },
    // {
    //   text: "Settings",
    //   url: "/settings",
    //   icon: "icon-cog",
    // },
  ];

  return (
    <ul className='menu' style={{ marginTop: "100px" }}>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={router.pathname === item.url ? "active" : ""}
        >
          <Link href={item.url}>
            <a style={{ paddingBottom: "15px" }}>
              <i className={item.icon}></i>
              {item.text}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuSidebar;
