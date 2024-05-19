import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiIcons.AiFillHome />,
       
    },
    {
        title: "HouseOwners",
        path: "/services",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Create HouseOwner",
                path: "/HouseOwnerProfile",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "List HouseOwner",
                path: "/ListHouseOwner",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            // {
            //     title: "Service 3",
            //     path: "/services/services3",
            //     icon: <IoIcons.IoIosPaper />,
            // },
        ],
    },
    {
        title: "Dietitians",
        path: "/DietitianProfile",
        icon: <FaIcons.FaPhone />,
        
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Create Dietitian",
                path: "/DietitianProfile",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "List Dietitians",
                path: "/ListDietitian",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Meal Planning",
        path: "/events",
        icon: <FaIcons.FaEnvelopeOpenText />,
 
        //iconClosed: <RiIcons.RiArrowDownSFill />,
        //iconOpened: <RiIcons.RiArrowUpSFill />,
 
        //subNav: [
            //{
                //title: "Event 1",
                //path: "/events/events1",
                //icon: <IoIcons.IoIosPaper />,
            //},
            //{
                //title: "Event 2",
                //path: "/events/events2",
                //icon: <IoIcons.IoIosPaper />,
            //},
        //],
    },
    {
        title: "Settings",
        path: "/register",
        icon: <IoIcons.IoMdHelpCircle />,
    },
]