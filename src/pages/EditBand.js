import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BandForm from "../components/BandForm";
import { API } from "../config";

const EditBand = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const fetchBand = async (id) => {
    try {
      const response = await fetch(`${API}/band/${id}`);
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
    fetchBand(id);
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${API}/band/${id}`, {
        method: "PUT",
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
        <h1 className="text-3xl font-bold">Edit Band</h1>
      </div>
      <div className="flex justify-center">
        <BandForm
          initialValues={data}
          onCancel={() => navigate("/")}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default EditBand;
