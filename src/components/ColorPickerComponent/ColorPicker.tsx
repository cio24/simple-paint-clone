import ColorBox from "./ColorBox";

const ColorPciker = () => {

  //state
  const baseColors: string[] = [
    "#000000",
    "#808080",
    "#ff0000",
    "#0000ff",
    "#ffff00",
  ];

  //render
  return (
    <>
      {baseColors.map((color, index) => (
        <ColorBox backgroundColor={color} key={index}></ColorBox>
      ))}
    </>
  );
};

export default ColorPciker;
