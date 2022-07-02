/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@containers/layout"));

const AboutPage = () => {
  return (
    <Layout>
      <div className="py-7 w-full max-w-[1250px] mx-auto">
        <h1 className="text-[24px] font-bold">Tentang Kami</h1>
      </div>
      <img
        className="absolute -z-50"
        src={"/images/banner2.png"}
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <div>
        <div className="p-8 w-full max-w-[1220px] mt-[150px] mb-[60px] mx-auto h-full bg-[white] border-solid border-[1px] border-[black]">
          <h1 className="font-bold text-[20px]">Tentang Kami</h1>
          <br />
          <p>
            Car Price Reduction adalah platfrom konten otomotif digital terpadu
            yang ditujukan untuk konsumen di Indonesia yang sedang berkembang
            pesat. Website kami dimiliki dan dioperasikan oleh team Car Price
            Reduction.
          </p>
          <br />
          <p>
            Dengan memanfaatkan konten berbasis data pasar kami dan struktur
            yang komplek, kami akan membantu anda menemukan, membandingkan, dan
            memperhitungkan harga mobil anda selanjutnya.
          </p>
          <br />
          <p>
            Berita, tinjauan dan konten lainnya di Car Price Recution dirancang
            untuk memenuhi kebutuhan semua kelompok konsumen. Dari pembeli biasa
            hingga petrolhead, dari konten pendek dan ringkas hingga deskripsi
            fitur yang sangat mendetail, kami memiliki sesuatu yang dapat
            diberikan untuk semua orang.
          </p>
          <br />
          <p>
            Daripada mengunjungi beberapa situs web dan membuka banyak tab pada
            browser desktop anda, website kami memungkinkan anda untun
            membandingkan harga sesuai tahun, menghitung secara akurat dengan
            metode Linear Regression atau ID3 Regression, menginformasikan diri
            anda dengan berita terbaru - semuanya dalam satu platform tunggal
            yang dapat dengan mudah diakases dari perangkat platform anda.
          </p>
          <br />
          <h1 className="font-bold text-[20px]">Misi Kami</h1>
          <br />
          <p>
            Membantu anda untuk mendapat perbandingan harga mobil dan
            mempermudah pengetahuan harga secara akurat.
          </p>
          <br />
          <h1 className="font-bold text-[20px]">Creator</h1>
          <br />
          <p>Fatih Muhamad Ridho - 1911500740</p>
          <p>Fadila Salsabila - 1911501797</p>
          <p>M Daffa Narendro Wicaksono - 1911500195</p>
          <p>Achmad Sultan Wijaya - 1911502274</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
