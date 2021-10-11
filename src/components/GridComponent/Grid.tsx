import Cell from "../CellComponent/Cell";
import { FC, useState } from "react";
import { gridProps, ScreenDimensions } from "../../models/GridModel";
import "./grid-style.css";

const getScreenDimensions = (): ScreenDimensions => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const Grid: FC<gridProps> = ({ columnsAmount }) => {
  //state
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>(
    getScreenDimensions()
  );

  //handlers
  window.onresize = () => {
    setScreenDimensions(getScreenDimensions());
  };

  //render
  const renderCells = () => {
    const cellWidth = screenDimensions.width / columnsAmount;
    const rowsAmount = Math.floor(screenDimensions.height / cellWidth);

    return Array.from({ length: columnsAmount * rowsAmount }, (_, index) => (
      <Cell key={index}></Cell>
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
