import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions({ data }: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {data.map((data: any, index: any) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div className="flex items-center">
                <div className="w-[54px] h-[64px] bg-[#0A1D37] border-solid border-[1px] border-[black] flex items-center justify-center text-white font-bold">
                  <h1>{data}</h1>
                </div>
                <h1 className="px-3">{data}</h1>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full flex">
                <div className="w-[54px] h-[48px] bg-[#0A1D37]"></div>
                <div className="px-3">
                <h1 className="">Astom Martin</h1>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
