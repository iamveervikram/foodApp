import React,{useState} from 'react'
import { StyleSheet, View,Text,Image,TouchableOpacity } from 'react-native'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';
import { MaterialCommunityIcons,Foundation,Entypo } from '@expo/vector-icons';
import { useDispatch,useSelector } from 'react-redux';
import {orderActions} from '../store/order-slice'


const PopularFoodList=({name,calorie,price,id})=>{
    const dispatch=useDispatch();
    const cartItems = useSelector(state=>state.ors.cartItems);
    const cartPPCtwelve = cartItems.find(item=>item.id==='PPC12')
    const cartPMCtwelve = cartItems.find(item=>item.id==='PMC12')

    const [itemQ,setItemQ]=useState(0)

    function addHandling(name,price,id){
        dispatch(orderActions.addItemToCart({id,foodName:name,size:'12',eachPrice:price}))
        // setItemQ(itemQ+1)
        console.log('dispatched')
    }


    let [fontsLoaded] = useFonts({
        Inter_500Medium,
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return(
        <View style={[styles.mainBox,{width:'45%'}]}>
            <View style={{flex:22,justifyContent:'center'}}>
                <View style={{justifyContent:'center'}}>
                    <Text style={{fontFamily:'Inter_500Medium',fontSize:14,textAlign:'center'}}>{name}</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <MaterialCommunityIcons name="fire" size={24} color="orange" /> 
                    <Text style={{fontFamily:'Inter_500Medium',fontSize:11,textAlign:'center',color:'#fb6262'}}> {calorie} calories</Text>
                </View>

            </View>

            <View style={{flex:55,justifyContent:'center',alignItems:'center'}}>
                {name === 'Melting Cheese'?
                <Image style={{resizeMode:'stretch'}} source={require('../../assets/mpizza.png')}/>
                :
                <Image style={{resizeMode:'stretch'}} source={require('../../assets/pizzaCapricon.png')}/>
                }

            </View>

            <View style={{flex:22}}>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Foundation name="dollar" size={24} color="#fb6262" />
                    <Text style={{fontFamily:'Inter_500Medium',fontSize:16,textAlign:'center'}}> {price}</Text>
                </View>
                <TouchableOpacity onPress={()=>addHandling(name,price,id)} style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <Entypo name="squared-minus" size={24} color="#fb6262" />
                <Text style={{fontFamily:'Inter_400Regular',fontSize:16}}> {id === 'PPC12'?cartPPCtwelve.quantity:cartPMCtwelve.quantity} </Text>
                <Entypo name="squared-plus" size={24} color="#fb6262" />

                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    mainBox:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#939598',
    //     shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.5,
    // shadowRadius: 13,
    // elevation: 1,

    },
});

export default PopularFoodList