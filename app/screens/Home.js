import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { KeyboardAvoidingView, View, StatusBar } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from "../components/TextInput";
import { ClearButton } from "../components/Buttons";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";
import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

// const TEMP_BASE_CURRENCY = "USD";
// const TEMP_QUOTE_CURRENCY = "GBP";
// const TEMP_BASE_PRICE = "100";
// const TEMP_QUOTE_PRICE = "79.74";
const TEMP_CONVERSION_RATE = 0.79739;
// const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    LastConvertedDate: PropTypes.object
  };

  handlePressBaseCurrency = () => {
    console.log("press base currency");
    this.props.navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote currency");
    this.props.navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };
  //TODO: Make this actually work with this.props.dispatch.

  handleTextChange = amount => {
    // console.log(changeCurrencyAmount(amount));

    this.props.dispatch(changeCurrencyAmount(amount));
  };

  //TODO: Make this actually work with this.props.dispatch.
  handleSwapCurrency = () => {
    // console.log(swapCurrency());
    this.props.dispatch(swapCurrency());
  };
  handleOptionsPress = () => {
    this.props.navigation.navigate("Options");
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);

    if (this.props.isFetching) {
      quotePrice = "...";
    }

    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          {/* //behavior="padding" */}
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
            //buradaki propslar aynı zamanda
            //text inputa aktarılıyor.
          />

          <InputWithButton
            buttonText={this.props.quoteCurrency}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={quotePrice}
            value={quotePrice}
          />

          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.LastConvertedDate}
            conversionRate={this.props.conversionRate}
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

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    LastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date()
  };
};

export default connect(mapStateToProps)(Home);
