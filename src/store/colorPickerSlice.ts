import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorPickerState {
  activeColor: string;
  displayColorPicker: boolean;
}

const initialState: ColorPickerState = {
  activeColor: "#000000",
  displayColorPicker: false,
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
      console.log("color has been changed", action.payload);
    },
  },
});

export const { setDisplayColorPicker, setActiveColor } =
  colorPickerSlice.actions;

export default colorPickerSlice.reducer;
