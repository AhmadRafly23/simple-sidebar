import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome style={{ color: "white" }} />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper style={{ color: "white" }} />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaCartPlus style={{ color: "white" }} />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople style={{ color: "white" }} />,
    cName: "nav-text",
  },
  {
    title: "Mesagges",
    path: "/mesagges",
    icon: <FaEnvelopeOpenText style={{ color: "white" }} />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle style={{ color: "white" }} />,
    cName: "nav-text",
  },
];
