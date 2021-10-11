import BootstrapModal from "./components/ColorPickerComponent/Modal";
import ColorPicker from "./components/ColorPickerComponent/ColorPicker";
import Grid from "./components/GridComponent/Grid";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Grid columnsAmount={100}></Grid>
        <BootstrapModal title="Pick a color">
          <ColorPicker></ColorPicker>
        </BootstrapModal>
      </Provider>
    </>
  );
}

export default App;
