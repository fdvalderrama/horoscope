const CardDate = () => {
  return (
    <div className="card">
      <form>
        <div className="flex flex-col space-y-2 items-center mb-5">
          <label htmlFor="birthdate" className="text-gray-700 font-medium">
            Fecha de Nacimiento
          </label>
          <input
            id="birthdate"
            type="date"
            className="w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 p-2 text-gray-700"
          />
        </div>
        <button className="w-32 bg-black text-white font-semibold py-2 rounded-lg shadow hover:bg-indigo-600 transition duration-300">
          Generar
        </button>
      </form>
    </div>
  );
};

export default CardDate;
