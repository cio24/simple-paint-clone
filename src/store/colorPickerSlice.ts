import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorPickerState {
  activeColor: string;
  displayColorPicker: boolean;
  isMouseDown: boolean;
}

const initialState: ColorPickerState = {
  activeColor: "#000000",
  displayColorPicker: false,
  isMouseDown: false
};

export const colorPickerSlice = createSlice({
  name: "colorPicker",
  initialState,
  reducers: {
    setDisplayColorPicker: (state, action: PayloadAction<boolean>) => {
      state.displayColorPicker = action.payload;
    },
    setActiveColor: (state, action: PayloadAction<string>) => {
      state.activeColor = action.payload;
    },
    setIsMouseDown: (state, action: PayloadAction<boolean>) => {
      state.isMouseDown = action.payload;
    },
  },
});

export const { setDisplayColorPicker, setActiveColor, setIsMouseDown } =
  colorPickerSlice.actions;

export default colorPickerSlice.reducer;
