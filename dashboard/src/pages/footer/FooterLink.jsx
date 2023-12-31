import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import FooterAddLinkModal from "./FooterAddLinkModal";
import FooterEditLinkModal from "./FooterEditLinkModal";
import Layout from "../layout";

export default function FooterLink() {
  const [footerLink, setFooterLink] = useState([]);
  const [selectedFooterLink, setSelectedFooterLink] = useState([]);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/footer", label: "Footer" },
    { url: "/footer/link", label: "Link ve Dropdownlar" },
  ];

  const getFooterTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/links"
      );
      setFooterLink(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterTitles();
  }, []);

  const handleLinkDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/footer/link/${id}`);
      getFooterTitles();
    } catch (error) {
      console.error("Error deleting footer:", error);
    }
  };

  const handleLinkCheckboxChange = (footerId) => {
    if (selectedFooterLink.includes(footerId)) {
      setSelectedFooterLink(selectedFooterLink.filter((id) => id !== footerId));
    } else {
      setSelectedFooterLink([...selectedFooterLink, footerId]);
    }
  };

  const handleLinkEditSelected = () => {
    setShowLinkModal(true);
  };

  const handleLinkDeleteSelected = () => {
    selectedFooterLink.map((footerId) => handleLinkDelete(footerId));
  };

  const handleLinkMasterCheckboxChange = () => {
    if (selectedFooterLink.length === footerLink.length) {
      setSelectedFooterLink([]);
    } else {
      setSelectedFooterLink(footerLink.map((footer) => footer._id));
    }
  };

  return (
    <Layout>
      <div className="ml-14 mb-10 md:ml-64">
        <div className="pt-4 pb-4 px-4">
          <div className="w-3/12">
            <div>
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
            <div className="">
              <div>
                <div className="flex flex-row">
                  <div className="flex justify-center items-center">
                    <div className="w-full flex justify-center">
                      <div className="w-full px-4 relative">
                        <FooterAddLinkModal />
                      </div>
                      <div className="ml-auto mr-4">
                        <button
                          onClick={handleLinkEditSelected}
                          className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Düzenle
                        </button>
                        {showLinkModal && (
                          <FooterEditLinkModal
                            showLinkModal={showLinkModal}
                            setShowLinkModal={setShowLinkModal}
                            footerId={selectedFooterLink}
                          />
                        )}
                      </div>
                      <div className="ml-auto">
                        <button
                          onClick={handleLinkDeleteSelected}
                          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-full mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th scope="col" className="p-4 w-[10px]">
                                <div className="flex items-center">
                                  <input
                                    id="footerLinkCheckbox-all"
                                    type="checkbox"
                                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                                    checked={
                                      selectedFooterLink.length ===
                                      footerLink.length
                                    }
                                    onChange={handleLinkMasterCheckboxChange}
                                  />
                                  <label className="sr-only">checkbox</label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left"
                              >
                                Ana Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left"
                              >
                                Dropdownlar
                              </th>
                            </tr>
                          </thead>
                          {footerLink.map((footerTitle, index) => (
                            <tbody key={index} className="bg-slate-600">
                              <tr className="hover:bg-slate-500">
                                <td className="py-5 px-4 flex items-center max-w-[320px] w-[10px]">
                                  <input
                                    type="checkbox"
                                    id={`footerLinkCheckbox-${footerLink._id}`}
                                    className="w-4 h-4 flex justify-center items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    checked={selectedFooterLink.includes(
                                      footerTitle._id
                                    )}
                                    onChange={() =>
                                      handleLinkCheckboxChange(footerTitle._id)
                                    }
                                  />
                                </td>
                                <td className="">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {footerTitle.footerLinkTitle}
                                    </p>
                                  </div>
                                </td>
                                <td className="">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {footerTitle.footerLinkText}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
