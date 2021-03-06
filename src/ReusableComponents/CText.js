/**
 * Custom Text.
 * @author Laveena Chaturvedi
 * @returns {*}
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet} from 'react-native';
import Fonts from '../Styles/fonts';
import Sizes from '../Styles/fonts';
import LineHeights from '../Styles/fonts';

const CText = (props) => {
  const {
    ref,
    style,
    children,
    medium,
    light,
    bold,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h0,
    h0Style,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    h6Style,
    h7Style,
    colorSecondary,
    colorThird,
    primary,
    secondary,
    third,
    ...rest
  } = props;

  return (
    <Text
      ref={ref}
      style={StyleSheet.flatten([
        styles.text,
        StyleSheet.flatten([primary, style]),
        colorSecondary && secondary,
        colorThird && third,
        h0 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h0,
              lineHeight: LineHeights.h0,
            },
            h0Style,
          ]),
        h1 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h1,
              lineHeight: LineHeights.h1,
            },
            h1Style,
          ]),
        h2 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h2,
              lineHeight: LineHeights.h2,
            },
            h2Style,
          ]),
        h3 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h3,
              lineHeight: LineHeights.h3,
            },
            h3Style,
          ]),
        h4 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h4,
              lineHeight: LineHeights.h4,
            },
            h4Style,
          ]),
        h5 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h5,
              lineHeight: LineHeights.h5,
            },
            h5Style,
          ]),
        h6 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h6,
              lineHeight: LineHeights.h6,
            },
            h6Style,
          ]),
        h7 &&
          StyleSheet.flatten([
            {
              fontSize: Sizes.h7,
              lineHeight: LineHeights.h7,
            },
            h7Style,
          ]),
        light && styles.light,
        medium && styles.medium,
        bold && styles.bold,
      ])}
      {...rest}>
      {children}
    </Text>
  );
};

CText.propTypes = {
  style: Text.propTypes.style,
  medium: PropTypes.bool,
  light: PropTypes.bool,
  bold: PropTypes.bool,
  h0: PropTypes.bool,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  h7: PropTypes.bool,
  colorSecondary: PropTypes.bool,
  colorThird: PropTypes.bool,
  h0Style: Text.propTypes.style,
  h1Style: Text.propTypes.style,
  h2Style: Text.propTypes.style,
  h3Style: Text.propTypes.style,
  h4Style: Text.propTypes.style,
  h5Style: Text.propTypes.style,
  h6Style: Text.propTypes.style,
  h7Style: Text.propTypes.style,
  primary: Text.propTypes.style,
  secondary: Text.propTypes.style,
  third: Text.propTypes.style,
  children: PropTypes.node,
};

CText.defaultProps = {
  medium: false,
  light: false,
  bold: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  colorSecondary: false,
  colorThird: false,
  style: {},
  h0Style: {},
  h1Style: {},
  h2Style: {},
  h3Style: {},
  h4Style: {},
  h5Style: {},
  h6Style: {},
  h7Style: {},
  children: '',
};
const styles = StyleSheet.create({
  text: {
    fontSize: Sizes.base,
    ...Fonts.regular,
    textAlign: 'left',
  },
  light: {
    ...Fonts.light,
  },
  medium: {
    ...Fonts.medium,
  },
  bold: {
    ...Fonts.bold,
  },
});
export default CText;
