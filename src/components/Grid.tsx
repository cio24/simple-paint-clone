import { FC, useState } from "react";
import { gridProps, ScreenDimensions } from "../models/GridModel";
import "./grid-style.css";

const getScreenDimensions = (): ScreenDimensions => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const Grid: FC<gridProps> = ({ columnsAmount }) => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>(
    getScreenDimensions()
  );

  window.onresize = () => {
    setScreenDimensions(getScreenDimensions());
  };

  const renderCells = () => {
    const cellWidth = screenDimensions.width / columnsAmount;
    const rowsAmount = Math.floor(screenDimensions.height / cellWidth);

    return Array.from({ length: columnsAmount * rowsAmount }, (_, index) => (
      <div className="item" key={index}></div>
    ));
  };

  return (
    <>
      <section
        id="grid"
        style={{ gridTemplateColumns: `repeat(${columnsAmount},1fr)` }}
      >
        {renderCells()}
      </section>
    </>
  );
};

export default Grid;
