import dynamic from "next/dynamic";
import Image from "next/image";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "@redux/store";
import { getOneCars } from "@redux/actions/car";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Layout = dynamic(() => import("@containers/layout"));
const Breadcrumbs = dynamic(() => import("@components/mui/breadcrumbs"));
const Table = dynamic(() => import("@components/mui/table"));

const RegressionPage = () => {
  const router = useRouter();
  const { regression } = router.query;

  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const state = selector((state: any) => state);

  const date = new Date();

  const car_age_X = state?.carReducer?.car?.dataset
    ?.map((data: any) => Number(date.getFullYear()) - Number(data.created_year))
    .reduce((a: any, b: any) => a + b, 0);
  const car_price_Y = state?.carReducer?.car?.dataset
    ?.map((data: any) => data.price)
    .reduce((a: any, b: any) => a + b, 0);
  const XY = state?.carReducer?.car?.dataset
    ?.map(
      (data: any) =>
        (Number(date.getFullYear()) - Number(data.created_year)) *
        Number(data.price)
    )
    .reduce((a: any, b: any) => a + b, 0);
  const X2 = state?.carReducer?.car?.dataset
    ?.map(
      (data: any) =>
        (Number(date.getFullYear()) - Number(data.created_year)) *
        (Number(date.getFullYear()) - Number(data.created_year))
    )
    .reduce((a: any, b: any) => a + b, 0);
  const SXX =
    X2 - (car_age_X * car_age_X) / state?.carReducer?.car?.dataset?.length;
  const SXY =
    XY - (car_age_X * car_price_Y) / state?.carReducer?.car?.dataset?.length;
  const b1 = SXY / SXX;
  const b0 = 0.5 * (car_price_Y - b1 * car_age_X);

  const datasetPrice = state?.carReducer?.car?.dataset?.map(
    (data: any) => data?.price
  );
  const datasetYear = state?.carReducer?.car?.dataset?.map(
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
    if (
      state.carReducer.car === null ||
      Number(regression) !== Number(state.carReducer.car._id)
    ) {
      dispatch(getOneCars(regression));
    }
  }, [dispatch, regression, state.carReducer.car, state.carReducer.isSuccess]);

  // console.log("sumYear", car_age_X);
  // console.log("sumPrice", car_price_Y);
  // console.log("sumXY", XY);
  // console.log("sumX2", X2);
  // console.log("SXX", SXX);
  // console.log("SXY", SXY);
  // console.log("b1", b1/10 * minimumYear);
  // console.log("b0", b0);
  // console.log("min", minimumPrice);
  // console.log("max", maksimumPrice);
  // console.log("minYear", minimumYear);
  // console.log("maxYear", maksimumYear);

  return (
    <Layout>
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
            {state?.carReducer?.car?.brand_name +
              " " +
              state?.carReducer?.car?.type_car}
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
              {"Rp " +
                (minimumPrice / 1000000).toFixed(2).replace(/\./g, ",") +
                " - " +
                (maksimumPrice / 1000000).toFixed(2).replace(/\./g, ",") +
                " Juta"}
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
            data={state?.carReducer?.car}
            dataset={state?.carReducer?.car?.dataset}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RegressionPage;
