import React from 'react';
import {
  AppState,
  Image,
  View,
  StyleSheet,
  ScrollView,
  BackHandler,
} from 'react-native';
import imagePath from '../Utilities/ImagePath';
import CText from '../ReusableComponents/CText';
import HeaderTitle from '../ReusableComponents/HeaderTitle';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPressLogin',
      this.backButtonHandler,
    );
    this.state = {
      appState: AppState.currentState,
    };
  }

  backButtonHandler = () => {
    this.props.navigation.navigate('Home');
    return true;
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={false}>
        <View style={styles.homeContainer}>
          <HeaderTitle headerTitle="Information" />
          <View style={styles.contentContainer}>
            <View style={styles.topTextContainer}>
              <CText style={styles.textStyle}>
                Zala Mayele, Tala Na Bopeke! Is part of the Digital Tax Stamp
                Program, implemented by the Ministry of Industry. The aim of the
                program is to protect consumers against counterfeit products and
                to promote ‘Made in DRC’. You can now take matters in your own
                hands and use this application to verify that the product you
                are buying is genuine, simply by scanning the QR code on the tax
                stamp.
              </CText>
            </View>
            <View style={styles.topTextContainer}>
              <CText style={styles.headingTextStyle}>
                What are Tax Stamps?
              </CText>
              <CText style={styles.textStyle}>
                Tax stamps are paper based labels or markings with complex
                multilayered security features. The Ministry of Industry is
                implementing Digital Tax Stamps on all excise goods, starting
                with all alcoholic and non-alcoholic beverages that are locally
                manufacturer or imported in the DRC.
              </CText>
            </View>
            <View style={styles.topTextContainer}>
              <CText style={styles.headingTextStyle}>
                What do they look like?
              </CText>
              <CText style={styles.textStyle}>
                There are two types of stamps: a long stamp that will be placed
                over the neck of some alcoholic beverages and a round bottle top
                stamp.
              </CText>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={imagePath.INFORMATION_IMAGE_1}
                style={styles.informationImage}
              />
              <Image
                source={imagePath.INFORMATION_IMAGE_3}
                style={styles.informationImageRound}
              />
              <Image
                source={imagePath.INFORMATION_IMAGE_2}
                style={styles.informationImage}
              />

              <Image
                source={imagePath.INFORMATION_IMAGE_4}
                style={styles.informationImageRound}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Information;

const styles = StyleSheet.create({
  homeContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 40,
    padding: 15,
  },
  headingTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  informationImage: {
    marginTop: 15,
    width: '100%',
    height: 150,
  },
  informationImageRound: {
    marginTop: 15,
    width: '100%',
    height: 400,
  },
  topTextContainer: {
    marginTop: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
