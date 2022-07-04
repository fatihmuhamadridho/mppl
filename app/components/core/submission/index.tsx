const Submission = ({ cprHandleChange, cprHandleSubmit, checkCarPrice }: any) => {
  return (
    <form className="drop-shadow-[0px_4px_1px_rgba(0,0,0,0.25)]" onSubmit={cprHandleSubmit}>
      <ul className="h-[43px] flex items-center">
        <button type="button" className="py-[12px] px-[17px] bg-[#EEEEEE]">
          Regression
        </button>
        {/* <button className="py-[12px] px-[17px] bg-[#EEEEEE]/[0.9]">
          ID3 Regression
        </button> */}
      </ul>
      <div className="w-[976px] py-4 px-6 bg-[#EEEEEE] flex space-x-6">
        <div>
          <input
            className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
            type="text"
            placeholder="Merek Mobil"
            name="brand_name"
            onChange={cprHandleChange}
            value={checkCarPrice.brand_name}
            required
          />
        </div>
        <div>
          <input
            className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
            type="text"
            placeholder="Tipe Mobil"
            name="type_car"
            onChange={cprHandleChange}
            value={checkCarPrice.type_car}
            required
          />
        </div>
        <div>
          <input
            className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
            type="number"
            placeholder="Tahun Mobil"
            name="created_year"
            onChange={cprHandleChange}
            value={checkCarPrice.created_year}
            required
          />
        </div>
        <input
          className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
          type="number"
          placeholder="Harga Mobil"
          name="price"
          onChange={cprHandleChange}
          value={checkCarPrice.price}
          required
        />
        <button className="w-full max-w-[138px] bg-[black] text-white font-bold rounded-[4px]">
          Harga Mobil
        </button>
      </div>
    </form>
  );
};

export default Submission;
