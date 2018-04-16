import PropTypes from "prop-types";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from './styles';
import Icon from './Icon';

//import {Icon} yapınca çalışmıyor, neden?

const ListItem = ({ text, onPress, selected=false,checkMark=true,visible=true }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkMark={checkMark} visible={visible}/> : <Icon/>}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
  
};
export default ListItem;
