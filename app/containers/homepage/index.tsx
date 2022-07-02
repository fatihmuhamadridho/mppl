/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { carsDummy } from "@components/core/cards/dummy";

const Layout = dynamic(() => import("@containers/layout"));
const Submission = dynamic(() => import("@components/core/submission"));
const BrandsCard = dynamic(() => import("@components/core/cards/brands"));
const CarsCard = dynamic(() => import("@components/core/cards/cars"));

const Homepage = () => {
  return (
    <Layout>
      <div className="w-full h-[505px] flex">
        <img
          className="absolute -z-50"
          src={"/images/banner.png"}
          alt=""
          width={"100%"}
          height={"100%"}
        />
        <div className="w-full flex items-center justify-center">
          <h1 className="absolute max-w-[1200px] text-[52px] font-semibold text-white text-center">
            Anda Ingin Tahu Selisih Harga Mobil Tahun Lama? Website Disini
            Mencari Solusinya
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center -translate-y-20">
        <Submission />
      </div>
      <div className="max-w-[1200px] mx-auto space-y-4">
        <BrandsCard />
        <hr className="border-solid border-[1px] border-[black]" />
        <div className="!my-10">
          <div className="grid grid-rows-2 grid-cols-5 place-content-center gap-y-[21px] gap-x-[40px]">
            {carsDummy.map((car: any, index: any) => {
              return (
                <CarsCard key={index} car={car} />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
