import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import imagePath from '../Utilities/ImagePath';
import CText from './CText';
import COLORS from '../Utilities/Colors';
const win = Dimensions.get('window');

const CopyRight = ({color}) => {
  return (
    <View style={styles.copyRight}>
      <CText
        style={{
          fontSize: 16,
          color: color === 'white' ? 'white' : COLORS.SECONDARY_COLOR,
        }}>
        An initiative by
      </CText>
      <CText
        style={{
          fontSize: 16,
          color: color === 'white' ? 'white' : COLORS.SECONDARY_COLOR,
        }}>
        The Ministry of Industry
      </CText>
      <CText
        style={{
          fontSize: 16,
          color: color === 'white' ? 'white' : COLORS.SECONDARY_COLOR,
        }}>
        DRC
      </CText>
      <View style={{height:55,width:"100%",marginBottom:20}}>
        <Image
        style={{flex:1,height:undefined,width:undefined,resizeMode:"stretch"}}
        source={imagePath.FOOTER}>
          

        </Image>
     
    </View>
    </View>
  );
};

export default CopyRight;

const styles = StyleSheet.create({
  copyRight: {
    flexDirection: 'column',
    width: '100%',
    height: 50,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  image: {
      
    }
});
