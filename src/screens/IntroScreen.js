import React from "react";
import { Text, StyleSheet, View, Image,StatusBar, Dimensions,TouchableOpacity } from "react-native";
import { useFonts, Inter_600SemiBold,Inter_300Light, Inter_400Regular } from '@expo-google-fonts/inter';


const IntroScreen = ({navigation}) => {

  const screenData = Dimensions.get('window').width;

  

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.mainView}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor="#fb6262"
      
      />
      <View style={{alignItems:'center'}}>
        <View style={{flex:3}}>
          <Image
            style={{width:screenData}}
            source={require('../../assets/delivery-man.png')}
          />
        </View>
        <View style={[styles.textBox,{width:screenData * 0.8}]}>
          <View style={{alignItems:'center',}}>
            <Text style={{fontFamily:'Inter_600SemiBold',fontSize:31}}>Quick Delivery at </Text>
            <Text style={{fontFamily:'Inter_600SemiBold',fontSize:31}}>your <Text style={{color:'#fb6262'}}>Doorstep</Text></Text>
          </View>

          <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:'Inter_300Light',fontSize:13}}>Home delivery and onlione reservation </Text>
            <Text style={{fontFamily:'Inter_300Light',fontSize:13}}>system for retaurants and cafe</Text>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{backgroundColor:'#fb6262',borderRadius:30,paddingHorizontal:22,paddingVertical:15}}>
            <Text style={{fontFamily:'Inter_600SemiBold',fontSize:24,color:'white' }}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:0.2}} ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView:{
    height:'100%',
    backgroundColor:'#fb6262',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  textBox:{
    backgroundColor:'white',
    borderRadius:30,
    flex:1.2,
    alignItems:'center',
    padding:27,
    justifyContent:'space-between',
  },
});

export default IntroScreen;
