import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ContactEditModal = ({ contactId, showModal, setShowModal }) => {
  ContactEditModal.propTypes = {
    contactId: PropTypes.string,
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func,
  };
  const [contact, setContact] = useState({});

  const fetchContactById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/contact/${contactId}`
      );
      setContact(response.data.data);
    } catch (error) {
      console.error("Iletisim getirilirken hata oluştu:", error);
    }
  }, [contactId]);

  useEffect(() => {
    fetchContactById();
  }, [fetchContactById, contactId]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/contact/${contactId}`, {
        ...contact,
      });
      setShowModal(false);
    } catch (error) {
      console.error("Iletisim güncellenirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[600px] my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl text-[#65647C] font-semibold">
                    Iletisim Duzenle
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent flex  justify-center items-center text-[#65647C]  h-6 w-6 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form onSubmit={handleUpdate}>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm text-left font-bold mb-2"
                        htmlFor="cardTitle"
                      >
                        Iletisim Basligi
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardText"
                        type="text"
                        placeholder="Iletisim Basligi"
                        name="cardText"
                        value={contact.cardText}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm text-left font-bold mb-2"
                        htmlFor="cardValue"
                      >
                        Iletisim Degeri
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="cardValue"
                        type="text"
                        placeholder="Iletisim Degeri"
                        name="cardValue"
                        value={contact.cardValue}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </form>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-[#353A4E] text-white background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Kapat
                  </button>
                  <button
                    className="bg-[#353A4E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    onClick={() => {
                      handleUpdate();
                      setShowModal(false);
                    }}
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[1px] backdrop-opacity-80 backdrop-brightness-90 fixed inset-0 z-40"></div>
        </>
      ) : null}
    </>
  );
};

export default ContactEditModal;
