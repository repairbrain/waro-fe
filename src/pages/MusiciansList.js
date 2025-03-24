import React, { useState, useEffect } from "react";
import IconButton from "@mui/joy/IconButton";
import { Edit02Icon, Delete02Icon } from "hugeicons-react";
import { API } from "../config";
import ConfirmModal from "../components/ConfirmModal";

const defaultModalState = {
  open: false,
  id: null,
  name: "",
};

const MusiciansList = () => {
  const [musicians, setMusicians] = useState([]);
  const [modalData, setModalData] = useState(defaultModalState);

  const fetchMusicians = async () => {
    try {
      const response = await fetch(`${API}/musicians`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setMusicians(data);
    } catch (error) {
      console.error("Error fetching musicians:", error);
    }
  };

  const onDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API}/musician/${modalData.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setModalData(defaultModalState);
      fetchMusicians();
    } catch (error) {
      console.error("Error deleting", error);
    }
  };

  const onDeleteClick = (id, name) => {
    setModalData({
      open: true,
      id,
      name,
    });
  };

  useEffect(() => {
    fetchMusicians();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ConfirmModal
        open={modalData.open}
        title={`Delete ${modalData.name}?`}
        description="Are you sure you want to delete this musician?"
        onClose={() => setModalData(defaultModalState)}
        onConfirm={onDeleteConfirm}
      />
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Available Musicians</h1>
        <a href="/add-musician" className="ml-4 text-3xl text-blue-500">
          +
        </a>
      </div>
      <div className="text-center mb-6">
        <a href="/" className="text-blue-500 hover:underline">
          Available Bands!!!
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicians.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-md">
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-2 pr-16">{item.name}</h2>
              <div className="absolute right-0 top-0">
                <IconButton component="a" href={`/edit-musician/${item.id}`}>
                  <Edit02Icon />
                </IconButton>
                <IconButton onClick={() => onDeleteClick(item.id, item.name)}>
                  <Delete02Icon />
                </IconButton>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <p className="text-gray-600">
              <span className="font-bold">Genre:</span> {item.genre}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Location:</span> {item.location}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Instruments:</span> {item.instruments}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusiciansList;
