import React, { Component, PropTypes } from 'react';
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../../constants/colorConstants';

const HeaderLeftButton = ({onBackPress}) => {
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={() => onBackPress()}>
            <Icon name="md-arrow-back" size={30} color={COLORS.white} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer:{
        marginLeft:10,
        padding:5,
    },
});

export default HeaderLeftButton;
