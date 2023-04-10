import * as React from 'react';
import HomeScreen from "./src/screens/HomeScreen";
import IntroScreen from './src/screens/IntroScreen'
import ItemPage from './src/screens/ItemPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity,Image, View,Text } from "react-native";
import { AntDesign,Feather,Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { useFonts, Inter_600SemiBold,Inter_300Light, Inter_400Regular } from '@expo-google-fonts/inter';
// import { useDispatch,useSelector } from 'react-redux';

import store from './src/store/DataCentre'
const Stack = createNativeStackNavigator();

function App() {
  // const cartItems = useSelector(state=>state.ors.cartItems);
  //   const cartPPCtwelve = cartItems.find(item=>item.id==='PPC12')
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Intro'>


          <Stack.Screen name="Intro"
          component={IntroScreen}
          options={{
            headerTitle:'hello',
            headerTintColor: '#fb6262',
            headerShadowVisible:false,
            headerStyle:{
              backgroundColor:'#fb6262',
            },
          }}
            />


          <Stack.Screen name="Home"
          component={HomeScreen}
          options={{
            headerTitle:'',
            headerTintColor: 'white',
            headerShadowVisible:false,
            headerLeft: () => (
              <TouchableOpacity>
                <Feather name="menu" size={30} color="black" />
              </TouchableOpacity>
              
            ),
            headerRight: () => (
              <TouchableOpacity>
                <View style={{backgroundColor:'#fb6262',borderRadius:200,padding:10}}>
                <Feather name="heart" size={24} color="white" />
                </View>
              </TouchableOpacity>
            ),
          }}
            />

            <Stack.Screen name="ItemPage"
          component={ItemPage}
          options={({ route, navigation })=>({
            headerTitle:'',
            headerTintColor: 'white',
            headerShadowVisible:false,
            headerLeft: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Ionicons name="chevron-back" size={24} color="black" />
              </TouchableOpacity>
              
            ),
            headerRight: () => (
              <TouchableOpacity>
                <View style={{padding:10}}>
                <Feather name="heart" size={24} color="black" />
                </View>
              </TouchableOpacity>
            ),
          })}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

