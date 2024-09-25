import React, { useState } from "react";
import zodiacSigns from "../ZodiacSignInfo.json"; // Asegúrate de ajustar la ruta
import Acuario from "../assets/acuario.jpg";
import Aries from "../assets/aries.jpg";
import Cancer from "../assets/cancer.jpg";
import Capricornio from "../assets/capricornio.jpg";
import Escorpio from "../assets/escorpio.jpg";
import Geminis from "../assets/geminis.jpg";
import Leo from "../assets/leo.jpg";
import Libra from "../assets/libra.jpg";
import Piscis from "../assets/piscis.jpg";
import Sagitario from "../assets/sagitario.jpg";
import Tauro from "../assets/tauro.jpg";
import Virgo from "../assets/virgo.jpg";

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

  const zodiacImages: { [key: string]: string } = {
    Acuario: Acuario,
    Aries: Aries,
    Cáncer: Cancer,
    Capricornio: Capricornio,
    Escorpio: Escorpio,
    Géminis: Geminis,
    Leo: Leo,
    Libra: Libra,
    Piscis: Piscis,
    Sagitario: Sagitario,
    Tauro: Tauro,
    Virgo: Virgo,
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate) {
      const sign = calculateZodiacSign(birthdate);
      sign.image = zodiacImages[sign.name];

      setZodiacSign(sign || null);
    }
  };

  const calculateZodiacSign = (birthdate: string) => {
    const [year, month, day] = birthdate.split("-").map(Number);

    // Convert birthdate to a Date object
    const birthDateObject = new Date(year, month - 1, day); // JavaScript's Date months are 0-based

    return zodiacSigns.find((sign) => {
      const [startMonth, startDay] = sign.startDate.split("-").map(Number);
      const [endMonth, endDay] = sign.endDate.split("-").map(Number);

      // Create Date objects for start and end dates (use the same year as the birthdate for comparison)
      const startDateObject = new Date(year, startMonth - 1, startDay);
      const endDateObject = new Date(year, endMonth - 1, endDay);

      // If the zodiac sign spans across the year boundary, adjust the endDateObject to next year
      if (startDateObject > endDateObject) {
        endDateObject.setFullYear(endDateObject.getFullYear() + 1);
      }

      // Check if the birthdate falls within the zodiac sign's date range
      return (
        birthDateObject >= startDateObject && birthDateObject <= endDateObject
      );
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
