import Image from "next/image";
import { useRouter } from "next/router";
import { carsDummy } from "../dummy";

const CarsCard = ({ car }: any) => {
  const router = useRouter();

  return (
    <div className="cursor-pointer" key={car.id} onClick={() => router.push(`/car/${Number(car._id)}`)}>
      <Image src={"/images/cars/toyota.svg"} alt="" width={202} height={86} />
      <div className="text-center">
        <p>{car.brand_name + " " + (car?.type_car?.length > 20 ? car?.type_car?.substring(0,20) : car?.type_car)}</p>
        <p>Tahun {car.created_year}</p>
        <p>{car.price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR'
        })}</p>
      </div>
    </div>
  );
};

export default CarsCard;
