import React, { FC, useState } from "react";
import { useAppSelector } from "./../../store/hooks";
import { useAppDispatch } from "./../../store/hooks";
import {
  setDisplayColorPicker,
  setIsMouseDown,
} from "./../../store/colorPickerSlice";
import "./cell-style.css";

const Cell: FC = () => {
  // state
  const [cellColor, setCellColor] = useState("#000000");
  const [isPainted, setIsPainted] = useState(false);
  const activeColor = useAppSelector((state) => state.colorPicker.activeColor);
  const isMouseDown = useAppSelector((state) => state.colorPicker.isMouseDown);

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

  const mouseDownHandler = () => {
    dispatch(setIsMouseDown(true));
  };

  const mouseUpHandler = () => {
    dispatch(setIsMouseDown(false));
  };

  const focusHandler = () => {
    setCellColor(activeColor);
    setIsPainted(true);
  };

  //render
  return (
    <>
      <div
        className="cell"
        onContextMenu={handleRightClick}
        onClick={handleClick}
        onMouseEnter={isMouseDown ? focusHandler : undefined}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        style={{ backgroundColor: isPainted ? cellColor : "" }}
      ></div>
    </>
  );
};

export default Cell;
