import { filterAlphabetDummy } from "./dummy";
import Image from "next/image";
import dynamic from "next/dynamic";

const Accordion = dynamic(() => import("@components/mui/accordion"));
const ControlledAccordions = dynamic(() => import("@components/mui/accordion/controlled"));

const Filter = () => {
  return (
    <div className="py-[20px] px-4 w-full max-w-[274px] bg-[#EEEEEE] space-y-9">
      <h1 className="text-[24px] font-bold">Filter</h1>
      <div className="max-h-[864px] flex flex-col bg-white overflow-y-scroll">
        <ControlledAccordions data={filterAlphabetDummy} />
      </div>
    </div>
  );
};

export default Filter;
