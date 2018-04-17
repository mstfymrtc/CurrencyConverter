import { StackNavigator } from "react-navigation";
import Home from "../screens/Home";
import CurrencyList from "../screens/CurrencyList";
import { StatusBar } from "react-native";
import Options from "../screens/Options";
import Themes from "../screens/Themes";

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        title: "Options"
      }
    },
    Themes: {
      screen: Themes,
      navigationOptions: {
        title: "Themes"
      }
    }
  },
  {
    headerMode: "screen"
    //navigation bar screen ile beraber gelir gidder
    //hep durmaz
  }
);

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
      //önceki ekrandan gelen parama erişmek için
    })
  }
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    },

    CurrencyList: {
      screen: CurrencyListStack
    }
  },

  {
    mode: "modal",
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "none"
  }
);
