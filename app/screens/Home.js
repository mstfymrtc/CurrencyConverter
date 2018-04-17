import React, { Component } from "react";
import PropTypes from "prop-types";
import { KeyboardAvoidingView, View, StatusBar } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "TRY";
const TEMP_BASE_PRICE = "1";
const TEMP_QUOTE_PRICE = "4.09";
const TEMP_CONVERSION_RATE = 0.409;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePressBaseCurrency = () => {
    console.log("press base currency");
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote currency");
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };
  handleChangeText = text => {
    console.log("text changing");
  };
  handleSwapCurrency = () => {
    console.log("swap currency pressed");
  };
  handleOptionsPress = () => {
    this.props.navigation.navigate("Options");
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          {/* //behavior="padding" */}
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            //buradaki propslar aynı zamanda
            //text inputa aktarılıyor.
          />

          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={TEMP_QUOTE_PRICE}
            value={TEMP_QUOTE_PRICE}
          />

          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />

          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
export default Home;
