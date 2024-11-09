import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MusicianForm from "../components/MusicianForm";
import { API } from "../config";

const EditMusician = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchMusician = async (id) => {
    try {
      const response = await fetch(`${API}/musician/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  useEffect(() => {
    fetchMusician(id);
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API}/musician/${id}`, {
        method: "PUT",
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
        <h1 className="text-3xl font-bold">Edit Musician</h1>
      </div>
      <div className="flex justify-center">
        <MusicianForm
          initialValues={data}
          onCancel={() => navigate("/musicians")}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default EditMusician;
