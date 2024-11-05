import React from "react";
import { useState, useEffect } from "react";
import { API } from "../config";

const MusiciansList = () => {
  const [musicians, setMusicians] = useState([]);

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

  useEffect(() => {
    fetchMusicians();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Available Musicians
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicians.map((item) => (
          <div key={item.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
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
