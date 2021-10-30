import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}`;
}

export default function MintSlider(props: any) {
  const [value, setValue] = React.useState<number>(1);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      props.setMintCount(newValue);
    }
  };

  return (
    <div className="Mint-Slider">
      <Box className="boxbox">
        <Slider
          value={value}
          aria-label="Mint"
          defaultValue={1}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={15}
          onChange={handleChange}
        />
        <span>Amount: {valuetext(value)}</span>
      </Box>
    </div>
  );
}
