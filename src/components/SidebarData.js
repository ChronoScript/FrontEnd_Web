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
        path: "/Recipe",
        icon: <FaIcons.FaEnvelopeOpenText />,
 
    },
    {
        title: "Settings",
        path: "/dashboard",
        icon: <IoIcons.IoMdHelpCircle />,
    },
]