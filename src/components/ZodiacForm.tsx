import React, { useState } from "react";

interface ZodiacFormProps {
  onDateSubmit: (birthdate: string) => void;
}

const ZodiacForm: React.FC<ZodiacFormProps> = ({ onDateSubmit }) => {
  const [birthdate, setBirthdate] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate) {
      onDateSubmit(birthdate);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col space-y-2 items-center mb-5">
        <label htmlFor="birthdate" className="text-gray-700 font-medium">
          Fecha de Nacimiento
        </label>
        <input
          id="birthdate"
          type="date"
          value={birthdate}
          onChange={handleDateChange}
          className="w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-700"
        />
      </div>
      <button
        type="submit"
        className="w-32 bg-black text-white font-semibold py-2 rounded-lg shadow hover:bg-indigo-600 transition duration-300"
      >
        Generar
      </button>
    </form>
  );
};

export default ZodiacForm;
