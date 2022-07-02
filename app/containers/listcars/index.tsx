import dynamic from "next/dynamic";
import { carsDummy } from "@components/core/cards/dummy";

const Layout = dynamic(() => import("@containers/layout"));
const Filter = dynamic(() => import("@components/core/filter"));
const CarsCard = dynamic(() => import("@components/core/cards/cars"));
const Breadcrumbs = dynamic(() => import("@components/mui/breadcrumbs"));

const ListCarsPage = () => {
  return (
    <Layout>
      <div className="py-[64px] w-full max-w-[1192px] mx-auto flex space-x-7">
        <Filter />
        <div className="">
          <div className="pb-4">
            <Breadcrumbs />
          </div>
          <div className="grid grid-cols-4">
            {carsDummy.map((car: any, index: any) => {
              return <CarsCard key={index} car={car} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListCarsPage;
