import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../Utilities/Colors';
import Fonts, {sizes} from '../Styles/fonts';
import CText from './CText';
import COLORS from '../Utilities/Colors';

const Header = ({headerTitle}) => {
  return (
    <View style={styles.titleContainer}>
      <CText style={styles.titleText}>{headerTitle}</CText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    backgroundColor: COLORS.TRANSPARENT,
  },
  titleText: {
    color: Colors.SECONDARY_COLOR,
    textTransform: 'uppercase',
    textAlign: 'center',
    ...Fonts.medium,
    fontSize: sizes.h1,
    fontWeight: 'bold',
  },
});
