import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';
import color from 'color';

const InputWithButton = (props) => {

    // eğer direkt return etmek isteseydim () koyardım,
    // içeri bir şeyler yazıp sonra manuel return etmek istediğimde
    // süslü parantez kullandım => dan sonra.


    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
        styles.$buttonBackgroundColorModifier,
    );
    const containerStyles = [styles.container];
    //styles.container içindeki her birini array'e dönüştürdük


    if (props.editable === false) {

        containerStyles.push(styles.containerDisabled);
        //styles.container e yeni eleman ekleme
    }
    return (

        <View style={containerStyles}>
            <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={props.onPress}>
                <Text style={styles.buttonText}>{props.buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    );

};

InputWithButton.propTypes = {

    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,


};

export default InputWithButton;