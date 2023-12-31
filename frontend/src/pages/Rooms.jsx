import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";
import {
  PiTelevisionSimpleBold,
  PiToiletBold,
  PiBathtubBold,
} from "react-icons/pi";
import { BiWifi, BiFridge } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import {
  RiCustomerService2Fill,
  RiSafe2Fill,
  RiTShirtAirFill,
} from "react-icons/ri";
import { BsTelephoneOutbound } from "react-icons/bs";
import { useLanguage } from "../LanguageContext";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/rooms/turkish");
      setRooms(response.data.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/rooms/${id}`);
  };

  function renderWifiIcon(room) {
    if (room.roomFeatures.includes("wifi")) {
      return <BiWifi />;
    }
    return null;
  }

  function renderTvIcon(room) {
    if (room.roomFeatures.includes("tv")) {
      return <PiTelevisionSimpleBold />;
    }
    return null;
  }

  function renderAirConditioningIcon(room) {
    if (room.roomFeatures.includes("klima")) {
      return <TbAirConditioning />;
    }
    return null;
  }

  function renderFridgeIcon(room) {
    if (room.roomFeatures.includes("mini bar")) {
      return <BiFridge />;
    }
    return null;
  }

  function renderCustomerServiceIcon(room) {
    if (room.roomFeatures.includes("7/24 servis")) {
      return <RiCustomerService2Fill />;
    }
    return null;
  }

  function renderTelephoneIcon(room) {
    if (room.roomFeatures.includes("telefon")) {
      return <BsTelephoneOutbound />;
    }
    return null;
  }

  function renderToiletIcon(room) {
    if (room.roomFeatures.includes("wc")) {
      return <PiToiletBold />;
    }
    return null;
  }

  function renderBathtubIcon(room) {
    if (room.roomFeatures.includes("banyo")) {
      return <PiBathtubBold />;
    }
    return null;
  }

  function renderSafeIcon(room) {
    if (room.roomFeatures.includes("elektronik kasa")) {
      return <RiSafe2Fill />;
    }
    return null;
  }

  function renderAirfryIcon(room) {
    if (room.roomFeatures.includes("airfryer")) {
      return <RiTShirtAirFill />;
    }
    return null;
  }

  return (
    <div className="bg-gray-300">
      <Header />
      <div className="container min-h-screen mx-auto">
        <div className="flex justify-center items-center">
          <div className="pt-14">
            <div className="grid grid-cols-3 gap-8 justify-center mt-14">
              {rooms.map((room, index) =>
                room.roomVisibility ? (
                  <div key={index} className="">
                    <div className="max-w-md bg-gray-200 p-2 rounded overflow-hidden shadow-lg hover:shadow-xl">
                      <img
                        className="w-full"
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                        alt="Property Image"
                      />
                      <div className="px-4 py-4">
                        <div className="mb-2">
                          <h2 className="text-xl font-bold text-gray-900 truncate">
                            {language === "tr"
                              ? room.roomTitle
                              : room.roomTitle_en}
                          </h2>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex items-center space-x-2">
                            {renderWifiIcon(room)}
                            {renderTvIcon(room)}
                            {renderAirConditioningIcon(room)}
                            {renderFridgeIcon(room)}
                            {renderCustomerServiceIcon(room)}
                            {renderTelephoneIcon(room)}
                            {renderToiletIcon(room)}
                            {renderBathtubIcon(room)}
                            {renderSafeIcon(room)}
                            {renderAirfryIcon(room)}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-3xl font-extrabold text-blue-600">
                            XYZ TL
                          </p>
                        </div>
                        <div className="mt-4">
                          <button
                            onClick={() => handleCardClick(room._id)}
                            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                          >
                            {language === "tr" ? "Daha Fazla" : "More"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
      <Divide />
      <Footer />
    </div>
  );
}
