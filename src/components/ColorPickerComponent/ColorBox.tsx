import {ColorBoxProps} from './../../models/ColorBoxModel';
import { FC } from "react";
import { useAppDispatch } from "./../../store/hooks";
import { setActiveColor, setDisplayColorPicker } from "./../../store/colorPickerSlice";
import "./colorBox-style.css";


const ColorBox: FC<ColorBoxProps> = ({backgroundColor}) => {
  const dispatch = useAppDispatch();

  //handlers
  const clickHandler = (): void => {
    dispatch(setActiveColor(backgroundColor));
    dispatch(setDisplayColorPicker(false));
  }

  //render
  return <button className="color-box" onClick={clickHandler} style={{backgroundColor: backgroundColor}}></button>;
};

export default ColorBox;
