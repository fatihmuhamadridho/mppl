import Image from "next/image";
import { carsDummy } from "../dummy";

const CarsCard = ({ car }: any) => {
  return (
    <div key={car.id}>
      <Image src={"/images/cars/toyota.svg"} alt="" width={202} height={86} />
      <div className="text-center">
        <p>{car.name}</p>
        <p>{car.price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR'
        })}</p>
      </div>
    </div>
  );
};

export default CarsCard;
