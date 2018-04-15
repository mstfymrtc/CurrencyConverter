import React, { Component } from "react";
import { View, Text, ImageBackground, Image, Keyboard } from "react-native";
import styles from "./styles";

// const Logo = () => (

//     <View style={styles.container}>
//         <ImageBackground resizeMode="contain" style={styles.containerImage} source={require('./images/background.png')}>
//            {/* contain the image with the area its actually given to */}
//            {/* yani resmi kırpmadan sığdırmayı sağlıyor  */}
//             <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')}/>
//         </ImageBackground>
//         <Text style={styles.text}>Currency Converter</Text>
//     </View>

// );

class Logo extends Component {
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardShow
    );
    this.KeyboardHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardHide
    );
  }

  componentWillUnMount() {}

  keyboardShow = () => {
    console.log("keyboard did show");
  };
  keyboardHide = () => {
    console.log("keyboard did hide");
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.containerImage}
          source={require("./images/background.png")}
        >
          {/* contain the image with the area its actually given to */}
          {/* yani resmi kırpmadan sığdırmayı sağlıyor  */}
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("./images/logo.png")}
          />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
