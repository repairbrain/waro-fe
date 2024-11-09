import React, { useState, useEffect } from "react";
import { Input, Button } from "@mui/joy";

const MusicianForm = ({ onCancel, onSubmit, initialValues }) => {
  const [formValues, setFormValues] = useState({
    name: initialValues?.name || "",
    description: initialValues?.description || "",
    genre: initialValues?.genre || "",
    location: initialValues?.location || "",
    instruments: initialValues?.instruments || "",
  });

  useEffect(() => {
    if (initialValues) {
      setFormValues(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 flex-1 max-w-lg"
    >
      <Input
        placeholder="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        required
      />
      <Input
        placeholder="Description"
        id="description"
        name="description"
        value={formValues.description}
        onChange={handleChange}
        required
      />
      <Input
        placeholder="Genre"
        id="genre"
        name="genre"
        value={formValues.genre}
        onChange={handleChange}
        required
      />
      <Input
        placeholder="Location"
        id="location"
        name="location"
        value={formValues.location}
        onChange={handleChange}
        required
      />
      <Input
        placeholder="Instruments"
        id="instruments"
        name="instruments"
        value={formValues.instruments}
        onChange={handleChange}
        required
      />
      <div className="flex gap-2 mt-2">
        <Button onClick={onCancel} color="secondary">
          Cancel
        </Button>
        <Button type="submit" color="primary">
          Save
        </Button>
      </div>
    </form>
  );
};

export default MusicianForm;
