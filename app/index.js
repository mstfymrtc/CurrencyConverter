import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
// import CurrencyList from './screens/CurrencyList';
// import Options from './screens/Options';
// import Home from './screens/Home';
import { AlertProvider } from "./components/Alert";
import Navigator from "./config/routes";
EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#FFFFFF",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $lightGray: "#F0F0F0",
  $darkText: "#343434"

  // $outline:1,
});
export default () => (
  <AlertProvider>
    <Navigator />
  </AlertProvider>
);
// export default ()=> <Options/>;
// export default () => <Home />;
// export default () => <CurrencyList/>;
