import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

  return (
    <div className="py-2 px-9 bg-[#D1D1D1]">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <Image className="cursor-pointer" src={"/favicon.ico"} alt="" width={"100%"} height={"60px"} onClick={() => router.push("/")} />
        <div className="flex items-center space-x-[60px]">
          {/* <input className="rounded-[4px]" type="search" /> */}
          <ul className="flex items-center space-x-6">
            <li className="cursor-pointer" onClick={() => router.push("/")}>Beranda</li>
            <li className="cursor-pointer" onClick={() => router.push("/list-mobil")}>List Mobil</li>
            <li className="cursor-pointer" onClick={() => router.push("/about")}>About</li>
            <li className="cursor-pointer" onClick={() => router.push("/login")}>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
