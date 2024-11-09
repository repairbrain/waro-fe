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

const BandsList = () => {
  const [bands, setBands] = useState([]);
  const [modalData, setModalData] = useState(defaultModalState);

  const fetchBands = async () => {
    try {
      const response = await fetch(`${API}/bands`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBands(data);
    } catch (error) {
      console.error("Error fetching bands:", error);
    }
  };

  const onDeleteConfirm = async () => {
    try {
      const response = await fetch(`${API}/band/${modalData.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setModalData(defaultModalState);
      fetchBands();
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
    fetchBands();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ConfirmModal
        open={modalData.open}
        title={`Delete ${modalData.name}?`}
        description="Are you sure you want to delete this band?"
        onClose={() => setModalData(defaultModalState)}
        onConfirm={onDeleteConfirm}
      />
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Available Bands</h1>
        <a href="/add-band" className="ml-4 text-3xl text-blue-500">
          +
        </a>
      </div>
      <div className="text-center mb-6">
        <a href="/musicians" className="text-blue-500 hover:underline">
          Available Musicians
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => (
          <div key={band.id} className="p-6 bg-white rounded-lg shadow-md">
            <div className="relative">
              <h2 className="text-2xl font-semibold mb-2">{band.name}</h2>
              <div className="absolute right-0 top-0">
                <IconButton component="a" href={`/edit-band/${band.id}`}>
                  <Edit02Icon />
                </IconButton>
                <IconButton onClick={() => onDeleteClick(band.id, band.name)}>
                  <Delete02Icon />
                </IconButton>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{band.description}</p>
            <p className="text-gray-600">
              <span className="font-bold">Genre:</span> {band.genre}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Location:</span> {band.location}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Available Positions:</span>{" "}
              {band.availablePositions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandsList;
