import React from "react";

interface ZodiacResultProps {
  zodiacSign: {
    name: string;
    prediction: string;
    image: string;
  } | null;
}

const ZodiacResult: React.FC<ZodiacResultProps> = ({ zodiacSign }) => {
  if (!zodiacSign) return null;

  return (
    <div className="mt-5 flex flex-col items-center bg-violet-200 rounded-lg shadow-lg p-5">
      <h2 className="text-3xl font-bold mb-10">{zodiacSign.name}</h2>
      <div className="flex items-center mb-10">
        <img
          src={zodiacSign.image}
          alt={zodiacSign.name}
          className="h-60 object-cover rounded-lg mr-20"
        />
        <p className="text-lg text-gray-700">{zodiacSign.prediction}</p>
      </div>
    </div>
  );
};

export default ZodiacResult;
