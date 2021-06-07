import React from 'react';
import {View, StyleSheet} from 'react-native';
import CText from './CText';
import COLORS from '../Utilities/Colors';

const CopyRight = ({color}) => {
  return (
    <View style={styles.copyRight}>
      <CText
        style={{
          fontSize: 18,
          color: color === 'white' ? 'white' : COLORS.SECONDARY_COLOR,
        }}>
        Powered by
      </CText>
      <CText
        style={{
          fontSize: 18,
          color: color === 'white' ? 'white' : COLORS.SECONDARY_COLOR,
        }}>
        Monotech System Ltd.
      </CText>
    </View>
  );
};

export default CopyRight;

const styles = StyleSheet.create({
  copyRight: {
    flexDirection: 'column',
    width: '100%',
    zIndex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 50,
  },
});
