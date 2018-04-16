import React, { Component } from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import currencies from '../data/currencies';
import { ListItem,Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'USD';


class CurrencyList extends Component {

    handlePress(){

        console.log('row pressed');
    }

    render() {


        return (


            <View style={{ flex: 1 }}>
                <StatusBar
                    translucent={false}
                    barStyle="default" />
                <FlatList
                     ItemSeparatorComponent={Separator}
                    data={currencies}
                    renderItem={
                        ({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                            // checkMark={false}
                            />)
                    }
                    keyExtractor={item => item}
                    />

            </View>

        );
    }
}

export default CurrencyList;