import React from "react";
import { useNavigate } from "react-router-dom";
import BandForm from "../components/BandForm";
import { API } from "../config";

const AddBand = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API}/band`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      navigate("/");
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Add Band</h1>
      </div>
      <div className="flex justify-center">
        <BandForm onCancel={() => navigate("/")} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddBand;
