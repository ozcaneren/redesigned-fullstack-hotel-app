import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState([]);
  const [dataHead, setDataHead] = useState([]);
  const [color, setColor] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/header/links"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getHeadData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/header/texts"
      );
      setDataHead(response.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getHeadData();
  }, []);

  const getColorData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/general");
      setColor(response.data.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getColorData();
  }, []);

  console.log(color);

  return (
    <>
      {color.map((color, index) => (
        <header
          key={index}
          className={`w-full text-gray-700 top-0 z-50 bg-[${color.mainColor}] shadow-sm fixed body-font`}
        >
          <div className="container flex flex-col items-center z-20 p-6 mx-auto md:flex-row">
            <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
              <div>
                {dataHead.map((header, index) => (
                  <div key={index} className="flex justify-start items-center">
                    {/* <img src="https://assets-global.website-files.com/646d198164f9c7efcdcdbd29/64972c0ed50cd97a8f523a48_logo.svg" alt="" /> */}
                    <Link to="/">
                      <h1 className="font-tilt text-2xl font-medium">
                        {header.headerTitle}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </a>
            <nav className="flex items-center font-tilt justify-center text-lg font-medium md:ml-auto">
              {data.map((header, index) => (
                <div key={index} className="flex justify-center items-center">
                  {header.headerText ? (
                    <div>
                      {header.headerTextDropdown ? (
                        <div>
                          <span
                            onClick={() => toggleDropdown(index)}
                            className="relative flex cursor-pointer px-2 py-2 flex-row items-center h-11 focus:outline-none"
                          >
                            <span
                              className={` ${
                                index === openDropdown
                                  ? "rotate-180"
                                  : "rotate-0"
                              } transition-transform`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </span>
                            <span className="block py-2 border-b lg:border-0  lg:p-0">
                              {header.headerText}
                            </span>
                          </span>
                          {index === openDropdown && (
                            <ul className="absolute z-10 origin-top-right mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              {header.headerTextDropdown &&
                                header.headerTextDropdown.map(
                                  (item, itemIndex) => (
                                    <div className="py-2 p-2" key={itemIndex}>
                                      <li className="block px-4 py-2 mb-1 text-base text-gray-700 rounded-md bg-white hover:bg-gray-300">
                                        <Link
                                          to={
                                            header.headerTextDropdownLink[
                                              itemIndex
                                            ]
                                          }
                                        >
                                          <span className="ml-1 text-md tracking-wide truncate">
                                            {item}
                                          </span>
                                        </Link>
                                      </li>
                                    </div>
                                  )
                                )}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <div className="flex justify-center items-center">
                          <Link
                            to={
                              header.headerText === "Iletisim"
                                ? "/contact"
                                : header.headerText === "Odalarimiz"
                                ? "/rooms"
                                : header.headerText === "Hakkimizda"
                                ? "/about"
                                : header.headerText === "Sikca Sorulan Sorular"
                                ? "/faq"
                                : header.headerText === "Belgeler"
                                ? "/documents"
                                : "/"
                            }
                          >
                            <span className="relative flex cursor-pointer flex-row items-center focus:outline-none">
                              <span className="block py-2 px-2 lg:hover-bg-transparent lg-border-0 lg-p-0">
                                {header.headerText}
                              </span>
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
          </div>
        </header>
      ))}
    </>
  );

  function toggleDropdown(index) {
    setOpenDropdown(index === openDropdown ? null : index);
  }
}
