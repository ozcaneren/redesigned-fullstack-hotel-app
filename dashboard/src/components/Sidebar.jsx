import { NavLink } from "react-router-dom";
import {
  MdOutlineRoundaboutRight,
  MdMeetingRoom,
  MdOutlineRoomService,
} from "react-icons/md";
import { RiContactsLine, RiTeamLine } from "react-icons/ri";
import { useState } from "react";
import { BiAccessibility, BiHomeAlt2 } from "react-icons/bi";
import { LuSettings2, LuPanelBottomClose } from "react-icons/lu";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { FaPager } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

function Sidebar() {
  const headerDropdownKey = "headerDropdownState";
  const documentDropdownKey = "documentDropdownState";
  const footerDropdownKey = "footerDropdownState";
  const servicesDropdownKey = "servicesDropdownState";
  const teamsDropdownKey = "teamsDropdownState";
  const [shown, setShown] = useState(false);

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const [openHeaderDropdown, setOpenHeaderDropdown] = useState(() => {
    const storedValue = localStorage.getItem(headerDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [openDocumentDropdown, setOpenDocumentDropdown] = useState(() => {
    const storedValue = localStorage.getItem(documentDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [openFooterDropdown, setOpenFooterDropdown] = useState(() => {
    const storedValue = localStorage.getItem(footerDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [openServicesDropdown, setOpenServicesDropdown] = useState(() => {
    const storedValue = localStorage.getItem(servicesDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [openTeamsDropdown, setOpenTeamsDropdown] = useState(() => {
    const storedValue = localStorage.getItem(teamsDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleHeaderDropdown = () => {
    const updatedValue = !openHeaderDropdown;
    setOpenHeaderDropdown(updatedValue);
    localStorage.setItem(headerDropdownKey, JSON.stringify(updatedValue));
  };

  const toggleDocumentDropdown = () => {
    const updatedValue = !openDocumentDropdown;
    setOpenDocumentDropdown(updatedValue);
    localStorage.setItem(documentDropdownKey, JSON.stringify(updatedValue));
  };

  const toggleFooterDropdown = () => {
    const updatedValue = !openFooterDropdown;
    setOpenFooterDropdown(updatedValue);
    localStorage.setItem(footerDropdownKey, JSON.stringify(updatedValue));
  };

  const toggleServicesDropdown = () => {
    const updatedValue = !openServicesDropdown;
    setOpenServicesDropdown(updatedValue);
    localStorage.setItem(servicesDropdownKey, JSON.stringify(updatedValue));
  };

  const toggleTeamsDropdown = () => {
    const updatedValue = !openTeamsDropdown;
    setOpenTeamsDropdown(updatedValue);
    localStorage.setItem(teamsDropdownKey, JSON.stringify(updatedValue));
  };

  return (
    <div>
      <div className="fixed flex flex-col top-0 left-0 w-64 pb-24 bg-white font-medium transition-all duration-300 z-10">
        <div className="overflow-y-auto overflow-x-auto flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 block">
              <div className="flex flex-row items-center h-8">
                <div className="tracking-wide text-gray-500">Menü</div>
              </div>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 text-md focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <BiHomeAlt2 size={16} />
                </span>
                <span className="ml-2 tracking-wide truncate  ">Anasayfa</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/general"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <BiAccessibility size={16} />
                </span>
                <span className="ml-2 tracking-wide truncate  ">
                  Genel Ayarlar
                </span>
              </NavLink>
            </li>

            <li className="px-5 block">
              <div className="flex pb-4 flex-row items-center pt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-500">
                  Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
              <motion.div
                onClick={() => setShown(!shown)}
                className="relative flex cursor-pointer flex-row items-center px-4 justify-between h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                <div className="flex items-center">
                  <span className="inline-flex justify-center items-center">
                    <TbLayoutNavbarCollapse size={16} />
                  </span>
                  <span className="ml-2 text-md tracking-wide truncate">
                    Header
                  </span>
                </div>
              </motion.div>
              <motion.ul
                variants={showMenu}
                initial="exit"
                animate={shown ? "enter" : "exit"}
                className="py-2 px-2 space-y-2 cursor-pointer"
              >
                <div href="/introduction">
                  <motion.li
                    whileHover={{
                      color: "#FFFFFF",
                    }}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                  >
                    <span className="inline-flex justify-center items-center pl-6">
                      <HiOutlineDocumentText size={16} />
                    </span>
                    <span className="pl-2 text-md tracking-wide truncate">
                      Title
                    </span>
                  </motion.li>
                </div>
                <div href="/introduction">
                  <motion.li
                    whileHover={{
                      color: "#FFFFFF",
                    }}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                  >
                    <span className="inline-flex justify-center items-center pl-6">
                      <HiOutlineDocumentText size={16} />
                    </span>
                    <span className="pl-2 text-md tracking-wide truncate">
                      Title
                    </span>
                  </motion.li>
                </div>
                <div href="/introduction">
                  <motion.li
                    whileHover={{
                      color: "#FFFFFF",
                    }}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                  >
                    <span className="inline-flex justify-center items-center pl-6">
                      <HiOutlineDocumentText size={16} />
                    </span>
                    <span className="pl-2 text-md tracking-wide truncate">
                      Title
                    </span>
                  </motion.li>
                </div>
                <div href="/introduction">
                  <motion.li
                    whileHover={{
                      color: "#FFFFFF",
                    }}
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                  >
                    <span className="inline-flex justify-center items-center pl-6">
                      <HiOutlineDocumentText size={16} />
                    </span>
                    <span className="pl-2 text-md tracking-wide truncate">
                      Title
                    </span>
                  </motion.li>
                </div>

              </motion.ul>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <MdOutlineRoundaboutRight size={16} />
                </span>
                <span className="ml-2 tracking-wide truncate  ">
                  Hakkimizda
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleHeaderDropdown}
                className="relative flex flex-row items-center px-4 justify-between h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                <div className="flex items-center">
                  <span className="inline-flex justify-center items-center">
                    <TbLayoutNavbarCollapse size={16} />
                  </span>
                  <span className="ml-2 text-md tracking-wide truncate  ">
                    Header
                  </span>
                </div>
                <div className="flex items-center">
                  {openHeaderDropdown ? (
                    <AiOutlineArrowUp size={14} />
                  ) : (
                    <AiOutlineArrowDown size={14} />
                  )}
                </div>
              </NavLink>
              {openHeaderDropdown ? (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <NavLink
                      to="/header/title"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <HiOutlineDocumentText size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Title
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/header/link"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <HiOutlineDocumentText size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Link
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <NavLink
                onClick={toggleFooterDropdown}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <LuPanelBottomClose size={16} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Footer
                </span>
              </NavLink>
              {openFooterDropdown ? (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <NavLink
                      to="/footer/icon"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <LuPanelBottomClose size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Icon
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/footer/title"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <LuPanelBottomClose size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Başlik
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/footer/link"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <LuPanelBottomClose size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Linkler
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <NavLink
                onClick={toggleDocumentDropdown}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlineDocumentText size={16} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Belgeler
                </span>
              </NavLink>
              {openDocumentDropdown ? (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <NavLink
                      to="/document/title"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <HiOutlineDocumentText size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Başlık
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/document/card"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center pl-6">
                        <HiOutlineDocumentText size={16} />
                      </span>
                      <span className="pl-2 text-md tracking-wide truncate">
                        Belge
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>

            {/* ana sayfa kismi */}
            <li className="px-5 block">
              <div className="flex flex-row pb-4 items-center pt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Ana Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/hero"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <FaPager className="" size={16} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Hero Section
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleServicesDropdown}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MdOutlineRoomService size={16} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Servisler
                </span>
              </NavLink>
              {openServicesDropdown ? (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <NavLink
                      to="/services/title"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-6">
                        <MdOutlineRoomService size={16} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Başlık
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/card"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-6">
                        <MdOutlineRoomService size={16} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Servis
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <NavLink
                onClick={toggleTeamsDropdown}
                className="relative flex flex-row px-4 justify-between items-center w-[240px] h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
              >
                <div className="flex items-center">
                  <span className="inline-flex justify-center items-center">
                    <RiTeamLine size={16} />
                  </span>
                  <span className="ml-2 text-md tracking-wide truncate">
                    Ekip
                  </span>
                </div>
                <div className="flex items-center">
                  {openTeamsDropdown ? (
                    <AiOutlineArrowUp size={14} />
                  ) : (
                    <AiOutlineArrowDown size={14} />
                  )}
                </div>
              </NavLink>
              {openTeamsDropdown ? (
                <ul className="py-2 px-2 space-y-2">
                  <li>
                    <NavLink
                      to="/teams/title"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-6">
                        <RiTeamLine size={16} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Başlık
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/teams/card"
                      className={({ isActive }) =>
                        isActive
                          ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                          : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                      }
                    >
                      <span className="inline-flex justify-center items-center ml-6">
                        <RiTeamLine size={16} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Çalışanlar
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>

            {/* icerik kismi */}
            <li className="px-5 block">
              <div className="flex pb-4 flex-row items-center pt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  İçerik Yönetimi
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/room"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MdMeetingRoom size={16} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Oda Ayarlari
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/room/feature"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-600 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <LuSettings2 size={16} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Ozellik Ayarlari
                </span>
              </NavLink>
            </li>
          </ul>

          <p className="px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
