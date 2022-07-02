import Image from "next/image";
import { useRouter } from "next/router";

const Submission = () => {
  const router = useRouter();

  return (
    <div className="drop-shadow-[0px_4px_1px_rgba(0,0,0,0.25)]">
      <ul className="h-[43px] flex items-center">
        <button className="py-[12px] px-[17px] bg-[#EEEEEE]">
          Linear Regression
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
          />
        </div>
        <div>
          <input
            className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
            type="text"
            placeholder="Tipe Mobil"
          />
        </div>
        <div>
          <input
            className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
            type="text"
            placeholder="Tahun Mobil"
          />
        </div>
        <input
          className="pl-6 w-full max-w-[180px] h-[42px] rounded-[4px]"
          type="text"
          placeholder="Harga Mobil"
        />
        <button className="w-full max-w-[138px] bg-[black] text-white font-bold rounded-[4px]" onClick={() => router.push("/test")}>
          Harga Mobil
        </button>
      </div>
    </div>
  );
};

export default Submission;
