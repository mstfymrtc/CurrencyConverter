import React, { Component } from "react";
import { View, Text, ImageBackground, Image, Keyboard } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
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
  static propTypes = {
    tintColor: PropTypes.string
  };
  // componentDidMount() {
  //   this.keyboardShowListener = Keyboard.addListener(
  //     "keyboardWillShow",
  //     this.keyboardShow
  //   );
  //   this.KeyboardHideListener = Keyboard.addListener(
  //     "keyboardWillHide",
  //     this.keyboardHide
  //   );
  // }

  // keyboardShow = () => {
  //   console.log("keyboard did show");
  // };
  // keyboardHide = () => {
  //   console.log("keyboard did hide");
  // };

  render() {
    const imageStyle = [
      styles.image,
      this.props.tintColor ? { tintColor: this.props.tintColor } : null
    ];
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
            style={imageStyle}
            source={require("./images/logo.png")}
          />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
