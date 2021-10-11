import React, { FC, useState } from "react";
import { useAppSelector } from "./../../store/hooks";
import { useAppDispatch } from "./../../store/hooks";
import { setDisplayColorPicker } from "./../../store/colorPickerSlice";
import "./cell-style.css";

const Cell: FC = () => {

  // state
  const [cellColor, setCellColor] = useState("#000000");
  const [isPainted, setIsPainted] = useState(false);
  const activeColor = useAppSelector((state) => state.colorPicker.activeColor);

  const dispatch = useAppDispatch();
  
  //events handles
  const handleClick = () => {
    if (isPainted) setIsPainted(false);
    else {
      setCellColor(activeColor);
      setIsPainted(true);
    }
  };

  const handleRightClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(setDisplayColorPicker(true));
  };

  //render
  return (
    <>
      <div
        className="cell"
        onContextMenu={handleRightClick}
        onClick={handleClick}
        style={{ backgroundColor: isPainted ? cellColor : "" }}
      ></div>
    </>
  );
};

export default Cell;
