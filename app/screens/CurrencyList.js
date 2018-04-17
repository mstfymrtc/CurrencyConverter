import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, StatusBar } from "react-native";
import currencies from "../data/currencies";
import { ListItem, Separator } from "../components/List";
import { StackNavigator } from "react-navigation";

const TEMP_CURRENT_CURRENCY = "USD";

class CurrencyList extends Component {
  //     const {navigation}=this.props;
  // //this.props is rendered to => this.props.navigation.
  // //this.props.navigation dersen bu this.props.navigation.navigation olarak render edilir.
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePress() {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          ItemSeparatorComponent={Separator}
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() => this.handlePress()}
              // checkMark={false}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

export default CurrencyList;
