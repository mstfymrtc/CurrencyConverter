import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, StatusBar } from "react-native";
import currencies from "../data/currencies";
import { connect } from "react-redux";
import { ListItem, Separator } from "../components/List";
import { StackNavigator } from "react-navigation";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

const TEMP_CURRENT_CURRENCY = "USD";

class CurrencyList extends Component {
  //     const {navigation}=this.props;
  // //this.props is rendered to => this.props.navigation.
  // //this.props.navigation dersen bu this.props.navigation.navigation olarak render edilir.
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string
  };

  handlePress(currency) {
    const { type } = this.props.navigation.state.params;
    if (type === "base") {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
    // this.props.navigation.goBack(null);
  }

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === "quote") {
      comparisonCurrency = this.props.quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          ItemSeparatorComponent={Separator}
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
              // checkMark={false}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor
  };
};

export default connect(mapStateToProps)(CurrencyList);
