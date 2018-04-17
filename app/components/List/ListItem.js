import PropTypes from "prop-types";
import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from './styles';
import Icon from './Icon';

//import {Icon} yapınca çalışmıyor, neden?

const ListItem = ({ text, onPress, selected=false,checkMark=true,visible=true,customIcon=null,iconBackground }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkMark={checkMark} iconBackground={iconBackground} visible={visible}/> : <Icon/>}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon:PropTypes.element,
  iconBackground:PropTypes.string,
  
};
export default ListItem;
