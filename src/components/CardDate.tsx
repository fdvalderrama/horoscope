import React, { useState } from "react";
import zodiacSigns from "../ZodiacSignInfo.json"; // Asegúrate de ajustar la ruta

interface ZodiacSign {
  name: string;
  startDate: string;
  endDate: string;
  prediction: string;
  image: string;
}

const CardDate = () => {
  const [birthdate, setBirthdate] = useState<string>("");
  const [zodiacSign, setZodiacSign] = useState<ZodiacSign | null>(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate) {
      const sign = calculateZodiacSign(birthdate);

      setZodiacSign(sign || null);
    }
  };

  const calculateZodiacSign = (birthdate: string) => {
    const [year, month, day] = birthdate.split("-").map(Number); // Extraemos el mes y el día
    const birthMonthDay = `${month}-${day}`; // Formateamos a MM-DD

    // Busca el signo en el archivo ZodiacSignInfo.json
    return zodiacSigns.find((sign) => {
      const { startDate, endDate } = sign; // startDate y endDate deben estar en formato MM-DD
      return birthMonthDay >= startDate && birthMonthDay <= endDate;
    });
  };

  return (
    <div className="card">
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

      {zodiacSign && (
        <div className="mt-5">
          <h2 className="text-xl font-bold">{zodiacSign.name}</h2>
          <p>{zodiacSign.prediction}</p>
          <img
            src={zodiacSign.image}
            alt={zodiacSign.name}
            className="w-20 h-20"
          />
        </div>
      )}
    </div>
  );
};

export default CardDate;
