import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
// import CurrencyList from './screens/CurrencyList';
// import Options from './screens/Options';
// import Home from './screens/Home';
import { AlertProvider } from "./components/Alert";
import Navigator from "./config/routes";
import { Provider } from "react-redux";
import store from "./config/store";
// import "./reducers";
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
  <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
  </Provider>
);
// export default ()=> <Options/>;
// export default () => <Home />;
// export default () => <CurrencyList/>;

//TODO:
/*
1. ACTIONLARI TANIMLADIK
2. ACTIONLARI REDUCER'A BAĞLADIK VE ACTIONLARIN NE İŞ YAPTIĞINI TANIMLADIK
3. REDUCERI STORE'A BAĞLADIK
4. INDEX.JS'E PROVIDER SAĞLADIK
5. HOME.JS'E MAP FONKSIYONUNU TANIMLADIK VE BUNU HOME'A BAĞLADIK.
6. ARTIK VERİLERE STATE.PROPS ÜZERİNDEN ERİŞEBİLİYORUZ
7. BÖYLELİKLE BUNU UI'A BAĞLADIK.

*/
