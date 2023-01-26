import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  backgroundStyle,
  isDarkMode,
} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSortAmountDown,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Deliveroo() {
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.band}>
            <View style={styles.flex}>
              <View style={styles.header}>
                <Image
                  style={styles.bike}
                  source={require('../assets/img/bike.jpeg')}
                />
                <Text style={styles.adress}> Rue Yves Toudic</Text>
              </View>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity style={styles.appButton}>
                <Text style={styles.appButtonText}>Livraison</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.appButtonTextTransparent}>A emporter</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.filter}>
              <TextInput value="Rechercher" style={styles.input} />
              <FontAwesomeIcon icon={faSortAmountDown} size={30} />
            </View>
          </View>
          <View style={styles.content}>
            <View>
              <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <ImageBackground
                  style={styles.imageFlex}
                  source={require('../assets/img/offers.png')}>
                  <Text style={styles.imageText}>Offre</Text>
                </ImageBackground>
                <ImageBackground
                  style={styles.imageFlex}
                  source={require('../assets/img/grocery.png')}>
                  <Text style={styles.imageText}>Courses</Text>
                </ImageBackground>
                <ImageBackground
                  style={styles.imageFlex}
                  source={require('../assets/img/dessert.png')}>
                  <Text style={styles.imageText}>Petit déj...</Text>
                </ImageBackground>
                <ImageBackground
                  style={styles.imageFlex}
                  source={require('../assets/img/food.png')}>
                  <Text style={styles.imageText}>Offre</Text>
                </ImageBackground>
              </ScrollView>
            </View>

            <View>
              <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Image
                  style={styles.imagePub}
                  source={require('../assets/img/pub3.jpeg')}
                />
                <Image
                  style={styles.imagePub}
                  source={require('../assets/img/pub2.jpeg')}
                />
              </ScrollView>
            </View>

            <View>
              <Text style={styles.title}>A la une</Text>
              <Text>Annonce payante de nos partenaires</Text>
              <ScrollView
                style={styles.scrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                  <Image
                    style={styles.plats}
                    source={require('../assets/img/subway.jpg')}
                  />
                  <Text style={styles.title}>Subway</Text>
                  <Text>Sandwichs Salades Sodexo </Text>
                </View>
                <View>
                  <Image
                    style={styles.plats}
                    source={require('../assets/img/plat1.png')}
                  />
                  <Text style={styles.title}>Subway</Text>
                  <Text>Sandwichs Salades Sodexo </Text>
                </View>
                <View>
                  <Image
                    style={styles.plats}
                    source={require('../assets/img/plat-2.png')}
                  />
                  <Text style={styles.title}>Subway</Text>
                  <Text>Sandwichs Salades Sodexo </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  band: {
    backgroundColor: '#05C6B7',
    padding: 10,
  },

  input: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    width: '90%',
  },
  content: {
    margin: 10,
  },

  filter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appButton: {
    backgroundColor: '#34D6C9',
    padding: 7,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 20,
  },

  imageText: {
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    top: 60,
    margin: 7,
    position: 'absolute',
    fontWeight: 'bold',
  },
  bike: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profil: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
  },
  imgFilter: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
  },
  adress: {
    fontWeight: 'bold',
  },

  btn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    textAlign: 'center',
  },

  appButtonText: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  appButtonTextTransparent: {
    fontWeight: 'bold',
    padding: 7,
    color: '#34D6C9',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 10,
  },

  imageFlex: {
    height: 100,
    width: 100,
    marginRight: 10,
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },

  plats: {
    height: 130,
    width: 190,
    borderRadius: 5,
    marginRight: 10,
  },

  imagePub: {
    height: 150,
    width: 290,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 5,
  },

  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    marginTop: 10,
  },
});
