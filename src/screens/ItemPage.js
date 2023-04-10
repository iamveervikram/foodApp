import React from "react";
import { Text, StyleSheet,StatusBar, View, Image, TouchableOpacity,Alert } from "react-native";
import { Inter_500Medium,useFonts, Inter_600SemiBold,Inter_300Light, Inter_400Regular } from '@expo-google-fonts/inter';
import { Foundation,Entypo,AntDesign,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import SizeWisePrice from "./SizeWisePrice";
import { useDispatch,useSelector } from 'react-redux';


const ItemPage = ({navigation}) => {

  const cartItems = useSelector(state=>state.ors.cartItems);
  const cartPPCtwelve = cartItems.find(item=>item.id==='PPC12')
  const cartPMCtwelve = cartItems.find(item=>item.id==='PMC12')

  function alertHandler(received){
    Alert.alert('Order Confirmed', '', [
      {text: 'OK', onPress: () =>  navigation.navigate('Home')},
    ]);

  }

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

    <View style={{flex:4}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View>
          <Text style={{fontFamily:'Inter_600SemiBold',fontSize:21}}>Total Price</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Foundation name="dollar" size={24} color="#fb6262" />
          <Text style={{fontFamily:'Inter_500Medium',fontSize:21}}>{(cartPPCtwelve.quantity * cartPPCtwelve.eachPrice)+(cartPMCtwelve.quantity * cartPMCtwelve.eachPrice)}</Text>
        </View>
      </View>
      <View style={{flex:4}}>
        <Image style={{height:'100%',width:'100%'}} source={require('../../assets/food.png')} />
      </View>
      <View style={{flex:1}}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontFamily:'Inter_400Regular',fontSize:16}}>Total Quantity : {(cartPPCtwelve.quantity)+(cartPMCtwelve.quantity)} </Text>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        </View>
      </View>
    </View>

    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
      <SizeWisePrice choosen={false} price='not available' sizeIs={8}/>
      <SizeWisePrice choosen={true} price='9.47' sizeIs={12}/>
      <SizeWisePrice choosen={false} price='not available' sizeIs={16}/>
      
    </View>

    <View style={{flex:1.5}}>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <AntDesign name="star" size={24} color="orange" />
          <Text style={{fontFamily:'Inter_400Regular',fontSize:16}}> 4.9</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <MaterialCommunityIcons name="fire" size={24} color="orange" /> 
          <Text style={{fontFamily:'Inter_400Regular',fontSize:16}}> 44 Calories</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="ios-watch" size={24} color="#455b78" />
          <Text style={{fontFamily:'Inter_400Regular',fontSize:16}}> 20 - 30 min</Text>
        </View>
      </View>
      <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={alertHandler} style={{backgroundColor:'#fb6262',borderRadius:10,paddingHorizontal:82,paddingVertical:12}}>
            <Text style={{fontFamily:'Inter_600SemiBold',fontSize:22,color:'white' }}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign:'center',
    color:'#fb6262',
  },
  mainView:{
    backgroundColor:'white',
    height:'100%',
    // borderWidth:1,
    // borderRadius:20,
    // borderColor:'red',
    paddingHorizontal:25,
  }
});

export default ItemPage;
