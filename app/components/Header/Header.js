import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {View,Image,TouchableOpacity} from 'react-native';


const Header=(props)=>(



<View style={styles.container}>

    <TouchableOpacity onPress={props.onPress} style={styles.button}>

        <Image resizeMode="contain" style={styles.icon} source={require('./images/gear.png')} />
        </TouchableOpacity>
    </View>




);
Header.propTypes={


    onPress:PropTypes.func,
}
export default Header;

