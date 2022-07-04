/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Image from "next/image";
import { carsDummy } from "@components/core/cards/dummy";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "@redux/store";
import { useEffect, useState } from "react";
import { getAllCars } from "@redux/actions/car";

const Layout = dynamic(() => import("@containers/layout"));
const Submission = dynamic(() => import("@components/core/submission"));
const BrandsCard = dynamic(() => import("@components/core/cards/brands"));
const CarsCard = dynamic(() => import("@components/core/cards/cars"));
const Breadcrumbs = dynamic(() => import("@components/mui/breadcrumbs"));
const Table = dynamic(() => import("@components/mui/table"));

const Homepage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const state = selector((state: any) => state);
  const date = new Date();

  const [checkCarPrice, setCheckCarPrice] = useState({
    isCheck: false,
    brand_name: "",
    type_car: "",
    created_year: "",
    price: "",
  });

  const car_age_X =
    state?.carReducer?.cars
      ?.map(
        (data: any) => Number(date.getFullYear()) - Number(data.created_year)
      )
      .reduce((a: any, b: any) => a + b, 0) +
    (Number(date.getFullYear()) - Number(checkCarPrice.created_year));
  const car_price_Y =
    state?.carReducer?.cars
      ?.map((data: any) => data.price)
      .reduce((a: any, b: any) => a + b, 0) + Number(checkCarPrice.price);
  const XY =
    state?.carReducer?.cars
      ?.map(
        (data: any) =>
          (Number(date.getFullYear()) - Number(data.created_year)) *
          Number(data.price)
      )
      .reduce((a: any, b: any) => a + b, 0) +
    (Number(date.getFullYear()) - Number(checkCarPrice.created_year)) *
      Number(checkCarPrice.price);
  const X2 = state?.carReducer?.cars
    ?.map(
      (data: any) =>
        (Number(date.getFullYear()) - Number(data.created_year)) *
        (Number(date.getFullYear()) - Number(data.created_year))
    )
    .reduce((a: any, b: any) => a + b, 0);
  const SXX = X2 - (car_age_X * car_age_X) / state?.carReducer?.cars?.length;
  const SXY = XY - (car_age_X * car_price_Y) / state?.carReducer?.cars?.length;
  const b1 = SXY / SXX;
  const b0 = 0.5 * (car_price_Y - b1 * car_age_X);

  const datasetPrice = state?.carReducer?.cars?.map((data: any) => data?.price);
  const datasetYear = state?.carReducer?.cars?.map(
    (data: any) => data?.created_year
  );

  const minimumYear = date.getFullYear() - Math?.max?.apply(null, datasetYear);
  const maksimumYear = date.getFullYear() - Math?.min?.apply(null, datasetYear);
  const minimumPrice =
    Math?.min?.apply(null, datasetPrice) +
    Number(((b1 * maksimumYear) / 10).toFixed());
  const maksimumPrice =
    Math?.max?.apply(null, datasetPrice) +
    Number(((b1 * minimumYear) / 10).toFixed());

  useEffect(() => {
    if (!state.carReducer.isSuccess || state.carReducer.cars === null) {
      dispatch(getAllCars());
    }
  }, [dispatch, state.carReducer.cars, state.carReducer.isSuccess]);

  const cprHandleChange = (e: any) => {
    let { name, value } = e.target;

    setCheckCarPrice((prevState: any) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const cprHandleSubmit = (e: any) => {
    e.preventDefault();

    setCheckCarPrice((prevState: any) => {
      return {
        ...prevState,
        isCheck: true,
        created_year: Number(prevState.created_year),
        price: Number(prevState.price.replace(/[^0-9.-]+/g, "")),
      };
    });

    // console.log(checkCarPrice)
  };

  // console.log("sumYear", car_age_X);
  // console.log("sumPrice", car_price_Y);
  // console.log("sumXY", XY);
  // console.log("sumX2", X2);
  // console.log("SXX", SXX);
  // console.log("SXY", SXY);
  // console.log("b1", (b1 / 10) * minimumYear);
  // console.log("b0", b0);
  // console.log("min", minimumPrice);
  // console.log("max", maksimumPrice);
  // console.log("minYear", minimumYear);
  // console.log("maxYear", maksimumYear);

  return (
    <Layout>
      {!checkCarPrice.isCheck && (
        <>
          <div className="w-full h-[505px] flex bg-[url('/images/banner.png')] bg-cover">
            <div className="w-full flex items-center justify-center">
              <h1 className="absolute max-w-[1200px] text-[52px] font-semibold text-white text-center">
                Anda Ingin Tahu Selisih Harga Mobil Tahun Lama? Website Disini
                Mencari Solusinya
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center -translate-y-20">
            <Submission
              cprHandleChange={cprHandleChange}
              cprHandleSubmit={cprHandleSubmit}
              checkCarPrice={checkCarPrice}
            />
          </div>
          <div className="max-w-[1200px] mx-auto space-y-4">
            <BrandsCard />
            <hr className="border-solid border-[1px] border-[black]" />
            <div className="!my-10">
              <div className="grid grid-rows-2 grid-cols-5 place-content-center gap-y-[21px] gap-x-[40px]">
                {state?.carReducer?.cars?.map((car: any, index: any) => {
                  return <CarsCard key={index} car={car} />;
                })}
              </div>
            </div>
          </div>
        </>
      )}

      {checkCarPrice.isCheck && (
        <>
          <div className="w-full max-w-[1192px] mx-auto">
            <div className="pt-[44px] pb-4">
              {/* <Breadcrumbs /> */}
            </div>
            <div className="pb-[32px] flex items-center space-x-4">
              <Image
                src={"/images/brands/toyota.svg"}
                alt=""
                width={45}
                height={45}
              />
              <h1 className="text-[32px] font-bold">
                {checkCarPrice?.brand_name + " " + checkCarPrice?.type_car}
              </h1>
            </div>
            <div className="flex space-x-[60px]">
              <div>
                <Image
                  src={"/images/display/toyota1.png"}
                  alt=""
                  width={456}
                  height={258}
                />
                <div className="pt-7 flex !space-x-3">
                  <Image
                    src={"/images/display/toyota1.png"}
                    alt=""
                    width={144}
                    height={83}
                  />
                  <Image
                    src={"/images/display/toyota1.png"}
                    alt=""
                    width={144}
                    height={83}
                  />
                  <Image
                    src={"/images/display/toyota1.png"}
                    alt=""
                    width={144}
                    height={83}
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-[36px] font-bold">
                  {(Number(checkCarPrice.price) + Number(b1)).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </h1>
                <p className="text-[#000000]/[0.5]">
                  {"Harga " +
                    state?.carReducer?.car?.brand_name +
                    " " +
                    state?.carReducer?.car?.type_car +
                    " Tahun " +
                    date.getFullYear() +
                    " di Indonesia"}
                </p>
                <h1>Spesifikasi Toyota Camry 2</h1>
                <ul className="grid grid-cols-2 gap-x-[38px]">
                  <li className="flex space-x-[169px] border-solid border-b-[1px] border-[black]">
                    <p>Segmen</p>
                    <p>Segmen C</p>
                  </li>
                  <li className="flex space-x-[169px] border-solid border-b-[1px] border-[black]">
                    <p>Segmen</p>
                    <p>Segmen C</p>
                  </li>
                  <li className="flex space-x-[169px] border-solid border-b-[1px] border-[black]">
                    <p>Segmen</p>
                    <p>Segmen C</p>
                  </li>
                  <li className="flex space-x-[169px] border-solid border-b-[1px] border-[black]">
                    <p>Segmen</p>
                    <p>Segmen C</p>
                  </li>
                  <li className="flex space-x-[169px] border-solid border-b-[1px] border-[black]">
                    <p>Segmen</p>
                    <p>Segmen C</p>
                  </li>
                  <li className="flex space-x-[169px] border-solid border-b-[1px] border-[black]">
                    <p>Segmen</p>
                    <p>Segmen C</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-[90px]">
              <Table
                data={checkCarPrice}
                dataset={state?.carReducer?.cars}
                isHomepage={true}
              />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Homepage;
