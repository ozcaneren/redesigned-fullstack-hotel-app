import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const DocumentEditCardModal = ({
  documentId,
  showCardModal,
  setShowCardModal,
}) => {
  DocumentEditCardModal.propTypes = {
    documentId: PropTypes.string,
    showCardModal: PropTypes.bool,
    setShowCardModal: PropTypes.func,
  };
  const [document, setDocument] = useState({});

  const fetchDocumentById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/document/card/${documentId}`
      );
      setDocument(response.data);
    } catch (error) {
      console.error("Document getirilirken hata oluştu:", error);
    }
  }, [documentId]);

  useEffect(() => {
    fetchDocumentById();
  }, [fetchDocumentById, documentId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/document/card/${documentId}`, {
        ...document,
      });
      setShowCardModal(false);
    } catch (error) {
      console.error("Document güncellenirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocument((prevDocument) => ({
      ...prevDocument,
      [name]: value,
    }));
  };

  return (
    <>
      {showCardModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-modalMainText font-semibold">
                    Belge Duzenle
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-modalMainText float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowCardModal(false)}
                  >
                    <span className="bg-transparent flex justify-center items-center text-modalMainText h-6 w-6 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleUpdate}>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-modalLabelText text-sm font-bold mb-2"
                      >
                        cardTitle
                      </label>
                      <input
                        type="text"
                        name="cardTitle"
                        value={document.cardTitle}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Icon"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-modalLabelText text-sm font-bold mb-2"
                      >
                        cardText
                      </label>
                      <input
                        type="text"
                        name="cardText"
                        value={document.cardText}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Icon"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor=""
                        className="block text-modalLabelText text-sm font-bold mb-2"
                      >
                        cardLink
                      </label>
                      <input
                        type="text"
                        name="cardLink"
                        value={document.cardLink}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-modalMainText leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Icon"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="bg-[#353A4E] text-white background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowCardModal(false)}
                    >
                      Kapat
                    </button>
                    <button
                      className="bg-[#353A4E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => {
                        handleUpdate();
                        setShowCardModal(false);
                      }}
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[1px] backdrop-opacity-80 backdrop-brightness-90 fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
};

export default DocumentEditCardModal;
