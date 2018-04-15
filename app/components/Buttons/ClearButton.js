import React from 'react';
import styles from "./styles";
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View, Text } from 'react-native';


const ClearButton = (props) => (

    <TouchableOpacity style={styles.container} onPress={props.onPress}>

        <View style={styles.wrapper}>

            <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')} />
            <Text style={styles.text}>{props.text}</Text>    
        </View>
    </TouchableOpacity>



);

ClearButton.propTypes={

text:PropTypes.string,
onPress:PropTypes.func,


};


export default ClearButton;