import dynamic from "next/dynamic";
import Image from "next/image";

const Layout = dynamic(() => import("@containers/layout"));
const Breadcrumbs = dynamic(() => import("@components/mui/breadcrumbs"));
const Table = dynamic(() => import("@components/mui/table"));

const RegressionPage = () => {
  return (
    <Layout>
      <div className="w-full max-w-[1192px] mx-auto">
        <div className="pt-[44px] pb-4">
          <Breadcrumbs />
        </div>
        <div className="pb-[8px] flex items-center">
          <Image
            src={"/images/brands/toyota.svg"}
            alt=""
            width={45}
            height={45}
          />
          <h1 className="text-[32px] font-bold">Totoya Camry 2.5</h1>
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
            <h1 className="text-[36px] font-bold">Rp 206,20 - 264,40 Juta</h1>
            <p className="text-[#000000]/[0.5]">
              Harga Toyota Avanza 2022 di Indonesia
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
          <Table />
        </div>
      </div>
    </Layout>
  );
};

export default RegressionPage;
