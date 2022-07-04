import dynamic from "next/dynamic";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "@redux/store";
import { useEffect } from "react";
import { getAllCars } from "@redux/actions/car";
import { carsDummy } from "@components/core/cards/dummy";

const Layout = dynamic(() => import("@containers/layout"));
const Filter = dynamic(() => import("@components/core/filter"));
const CarsCard = dynamic(() => import("@components/core/cards/cars"));
const Breadcrumbs = dynamic(() => import("@components/mui/breadcrumbs"));

const ListCarsPage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const state = selector((state: any) => state);

  useEffect(() => {
    if(!state.carReducer.isSuccess) {
      dispatch(getAllCars())
    }
  }, [dispatch, state.carReducer.isSuccess])
  
  return (
    <Layout>
      <div className="py-[64px] w-full max-w-[1192px] mx-auto flex space-x-7">
        <Filter />
        <div className="">
          <div className="pb-4">
            {/* <Breadcrumbs /> */}
          </div>
          <div className="grid grid-cols-4">
            {state?.carReducer?.cars?.map((car: any, index: any) => {
              return <CarsCard key={index} car={car} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListCarsPage;
