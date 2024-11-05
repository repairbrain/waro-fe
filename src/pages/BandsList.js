import React from "react";
import { useState, useEffect } from "react";
import { API } from "../config";

const BandsList = () => {
  const [bands, setBands] = useState([]);
  
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

  useEffect(() => {
    fetchBands();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Available Bands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => (
          <div key={band.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{band.name}</h2>
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
