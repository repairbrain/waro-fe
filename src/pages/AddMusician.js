import React from "react";
import { useNavigate } from "react-router-dom";
import MusicianForm from "../components/MusicianForm";
import { API } from "../config";

const AddMusician = () => {
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API}/musician`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      navigate("/musicians");
    } catch (error) {
      console.error("Error fetching musicians:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold">Add Musician</h1>
      </div>
      <div className="flex justify-center">
        <MusicianForm
          onCancel={() => navigate("/musicians")}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default AddMusician;
