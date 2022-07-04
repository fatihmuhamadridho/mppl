/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { carsDummy } from "@components/core/cards/dummy";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "@redux/store";
import { useEffect } from "react";
import { getAllCars } from "@redux/actions/car";

const Layout = dynamic(() => import("@containers/layout"));
const Submission = dynamic(() => import("@components/core/submission"));
const BrandsCard = dynamic(() => import("@components/core/cards/brands"));
const CarsCard = dynamic(() => import("@components/core/cards/cars"));

const Homepage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const state = selector((state: any) => state);

  useEffect(() => {
    if(!state.carReducer.isSuccess || state.carReducer.cars === null) {
      dispatch(getAllCars())
    }
  }, [dispatch, state.carReducer.cars, state.carReducer.isSuccess])

  // console.log(state.carReducer)

  return (
    <Layout>
      <div className="w-full h-[505px] flex bg-[url('/images/banner.png')] bg-cover">
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
            {state?.carReducer?.cars?.map((car: any, index: any) => {
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
