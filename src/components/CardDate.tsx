import React, { useState } from "react";
import zodiacSigns from "../ZodiacSignInfo.json";
import ZodiacForm from "./ZodiacForm";
import ZodiacResult from "./ZodiacResult";
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

  const calculateZodiacSign = (birthdate: string) => {
    const [year, month, day] = birthdate.split("-").map(Number);
    const birthDateObject = new Date(year, month - 1, day);

    const sign = zodiacSigns.find((sign) => {
      const [startMonth, startDay] = sign.startDate.split("-").map(Number);
      const [endMonth, endDay] = sign.endDate.split("-").map(Number);

      const startDateObject = new Date(year, startMonth - 1, startDay);
      const endDateObject = new Date(year, endMonth - 1, endDay);

      if (startDateObject > endDateObject) {
        endDateObject.setFullYear(endDateObject.getFullYear() + 1);
      }

      return (
        birthDateObject >= startDateObject && birthDateObject <= endDateObject
      );
    });

    if (sign) {
      sign.image = zodiacImages[sign.name];
      setZodiacSign(sign);
    }
  };

  return (
    <div className="card">
      <ZodiacForm onDateSubmit={calculateZodiacSign} />
      <ZodiacResult zodiacSign={zodiacSign} />
    </div>
  );
};

export default CardDate;
