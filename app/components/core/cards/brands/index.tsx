import Image from "next/image";
import { useRouter } from "next/router";
import { brandsDummy } from "../dummy";

const BrandsCard = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center space-x-[64px] cursor-pointer">
      {brandsDummy.map((brand: any) => {
        return (
          <div key={brand.id}>
            <Image src={brand.imageUrl} alt="" width={68} height={86} />
          </div>
        );
      })}
      <div>
        <Image src={"/images/icons/more.svg"} alt="" width={68} height={86} onClick={() => router.push("/list-mobil")} />
      </div>
    </div>
  );
};

export default BrandsCard;
