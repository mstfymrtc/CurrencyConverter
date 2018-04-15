import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {Text} from 'react-native';
import moment from 'moment';

const LastConverted=(props)=>(


<Text style={styles.smallText}>
1 {props.base} = {props.conversionRate} {props.quote} as of {moment(props.date).format('D MMMM, YYYY')}
    </Text>

);

LastConverted.propTypes={

    date:PropTypes.object,
    base:PropTypes.string,
    quote:PropTypes.string,
    conversionRate:PropTypes.number,
    
    };
export default LastConverted;