import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "react-native";

export default EStyleSheet.create({
  container: {
    position: "absolute",
    //içindekinin yüksekliği kadar yükseklik alacak
    left: 0,
    right: 0,
    top: 0,
    "@media ios": { paddingTop: 20 },
  },

  button: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 20
    //en sol üst köşedeydi
  },
  icon: {
    width: 18
  }
});
