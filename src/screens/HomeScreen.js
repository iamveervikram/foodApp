import React,{useState} from "react";
import { Text, StyleSheet,StatusBar, View, Dimensions, Image, TouchableOpacity,BackHandler } from "react-native";
import { Inter_500Medium,useFonts, Inter_600SemiBold,Inter_300Light, Inter_400Regular } from '@expo-google-fonts/inter';
import FoodList from "./FoodList.js";
import PopularFoodList from "./PopularFoodList.js";
import { useDispatch,useSelector } from 'react-redux';




const HomeScreen = ({navigation}) => {

  const [isPressed , setIsPressed] = useState(false);
  const [whatPressed, setWhatPressed] = useState('')

  function pressHandler(received){
    setIsPressed(true)
    setWhatPressed(received)
  }

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault(); 
        BackHandler.exitApp();

      }),
    [navigation]
  );




  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').Height;

  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
  <View style={styles.mainView}>
    <StatusBar
    barStyle='dark-content'
    backgroundColor="white"
    
    />
    <View style={{marginHorizontal:25,marginVertical:35,display:'flex',height:'100%'}}>
      <View style={{flex:3}}>
        <View style={{flex:3}}>
          <Text style={[styles.text,{fontFamily:'Inter_400Regular',fontSize:18}]}>Hi Veer,</Text>
          <Text style={[styles.text,{fontFamily:'Inter_600SemiBold',fontSize:21,color:'black'}]}>Find your Delicious Food</Text>
        </View>
        <View style={{flex:3,display:'flex',flexDirection:'row',height:'100%',width:'100%'}}>
          <View style={{flex:2,display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
              <TouchableOpacity onPress={()=>pressHandler('Pizza')} style={[isPressed && whatPressed === 'Pizza'?{borderWidth:3,borderColor:'#fb6262',borderRadius:5}:null, styles.foodBox]}>
                <FoodList name='Pizza'/>
              </TouchableOpacity>
            
              <TouchableOpacity onPress={()=>pressHandler('Humberger')} style={[isPressed && whatPressed === 'Humberger'?{borderWidth:3,borderColor:'#fb6262',borderRadius:5}:null, styles.foodBox]}>
                <FoodList name='Humberger'/>
              </TouchableOpacity>
            
              <TouchableOpacity onPress={()=>pressHandler('Cake')} style={[isPressed && whatPressed === 'Cake'?{borderWidth:3,borderColor:'#fb6262',borderRadius:5}:null, styles.foodBox]}>
                <FoodList name='Cake'/>
              </TouchableOpacity>
            
              <TouchableOpacity onPress={()=>pressHandler('Scorpion')} style={[isPressed && whatPressed === 'Scorpion'?{borderWidth:3,borderColor:'#fb6262',borderRadius:5}:null, styles.foodBox]}>
                <FoodList name='Scorpion'/>
              </TouchableOpacity>
            
            
              {/* <FoodList name='noone'/> */}
            
          </View>
        </View>

        <View style={{flex:3}}></View>

      </View>

      <View style={{flex:4}}>
        <View style={{flex:2}}>
          <Text style={[styles.text,{fontFamily:'Inter_600SemiBold',fontSize:21,color:'black'}]}>Popular</Text>
        </View>
        <View style={{flex:8,flexDirection:'row',justifyContent:'space-between'}}>
          <PopularFoodList name='Melting Cheese' id='PMC12' calorie={44} price='9.47' />
          <PopularFoodList name='Pizza Capricciosa' id='PPC12' calorie={54} price='12.55'/>
        </View>

      </View>

      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('ItemPage')} style={[styles.menu,{backgroundColor:'#fb6262'}]}>
            <Text style={{fontFamily:'Inter_500Medium',fontSize:19,color:'white' }}>Go To Cart </Text>
          </TouchableOpacity>
      </View>

    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color:'#fb6262',
  },
  mainView:{
    backgroundColor:'white',
    height:'100%'
  },
  menu:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    padding:30,
        // width: Dimensions.get('window').width * 0.5,
        // height: Dimensions.get('window').width * 0.5,
  },
  foodBox: {
    borderWidth:1,
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:5,
    marginHorizontal:5,
    height:80,
    width:70
},
});

export default HomeScreen;
