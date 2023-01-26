/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import Deliveroo from './components/Deliveroo';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Deliveroo" component={Deliveroo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={styles.container}>
//           <View style={styles.band}>
//             <View style={styles.flex}>
//               <View style={styles.header}>
//                 <Image
//                   style={styles.bike}
//                   source={require('./assets/img/bike.jpeg')}
//                 />
//                 <Text style={styles.adress}> Rue Yves Toudic</Text>
//               </View>
//               <FontAwesomeIcon icon={faUserCircle} size={30} />
//             </View>

//             <View style={styles.btn}>
//               <TouchableOpacity style={styles.appButton}>
//                 <Text style={styles.appButtonText}>Livraison</Text>
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Text style={styles.appButtonTextTransparent}>A emporter</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.filter}>
//               <TextInput value="Rechercher" style={styles.input} />
//               <FontAwesomeIcon icon={faSortAmountDown} size={30} />
//             </View>
//           </View>
//           <View style={styles.content}>
//             <View>
//               <ScrollView
//                 style={styles.scrollView}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}>
//                 <ImageBackground
//                   style={styles.imageFlex}
//                   source={require('./assets/img/offers.png')}>
//                   <Text style={styles.imageText}>Offre</Text>
//                 </ImageBackground>
//                 <ImageBackground
//                   style={styles.imageFlex}
//                   source={require('./assets/img/grocery.png')}>
//                   <Text style={styles.imageText}>Courses</Text>
//                 </ImageBackground>
//                 <ImageBackground
//                   style={styles.imageFlex}
//                   source={require('./assets/img/dessert.png')}>
//                   <Text style={styles.imageText}>Petit déj...</Text>
//                 </ImageBackground>
//                 <ImageBackground
//                   style={styles.imageFlex}
//                   source={require('./assets/img/food.png')}>
//                   <Text style={styles.imageText}>Offre</Text>
//                 </ImageBackground>
//               </ScrollView>
//             </View>

//             <View>
//               <ScrollView
//                 style={styles.scrollView}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}>
//                 <Image
//                   style={styles.imagePub}
//                   source={require('./assets/img/pub3.jpeg')}
//                 />
//                 <Image
//                   style={styles.imagePub}
//                   source={require('./assets/img/pub2.jpeg')}
//                 />
//               </ScrollView>
//             </View>

//             <View>
//               <Text style={styles.title}>A la une</Text>
//               <Text>Annonce payante de nos partenaires</Text>
//               <ScrollView
//                 style={styles.scrollView}
//                 horizontal={true}
//                 showsHorizontalScrollIndicator={false}>
//                 <View>
//                   <Image
//                     style={styles.plats}
//                     source={require('./assets/img/subway.jpg')}
//                   />
//                   <Text style={styles.title}>Subway</Text>
//                   <Text>Sandwichs Salades Sodexo </Text>
//                 </View>
//                 <View>
//                   <Image
//                     style={styles.plats}
//                     source={require('./assets/img/plat1.png')}
//                   />
//                   <Text style={styles.title}>Subway</Text>
//                   <Text>Sandwichs Salades Sodexo </Text>
//                 </View>
//                 <View>
//                   <Image
//                     style={styles.plats}
//                     source={require('./assets/img/plat-2.png')}
//                   />
//                   <Text style={styles.title}>Subway</Text>
//                   <Text>Sandwichs Salades Sodexo </Text>
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//       <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//     </SafeAreaView>
//   );
// };

export default App;
