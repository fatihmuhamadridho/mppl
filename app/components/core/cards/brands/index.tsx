import Image from "next/image";
import { brandsDummy } from "../dummy";

const BrandsCard = () => {
  return (
    <div className="flex justify-center space-x-[64px]">
      {brandsDummy.map((brand: any) => {
        return (
          <div key={brand.id}>
            <Image src={brand.imageUrl} alt="" width={68} height={86} />
          </div>
        );
      })}
      <div>
        <Image src={"/images/icons/more.svg"} alt="" width={68} height={86} />
      </div>
    </div>
  );
};

export default BrandsCard;
