import React from 'react'
import { View,Text } from 'react-native'
import { useFonts, Inter_600SemiBold,Inter_300Light } from '@expo-google-fonts/inter';
import { MaterialCommunityIcons,Entypo,Foundation } from '@expo/vector-icons';

const SizeWisePrice=({choosen, price, sizeIs})=>{
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_300Light,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                {choosen===true?
                <MaterialCommunityIcons name="circle-slice-8" size={24} color="#fb6262" />
                :
                <Entypo name="circle" size={24} color="black" />
                }
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Foundation name="dollar" size={20} color="black" />
                <Text style={{fontFamily:'Inter_600SemiBold',fontSize:11}}>{price}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontFamily:'Inter_300Light',fontSize:14}}>{sizeIs} inch</Text>
            </View>
        </View>
    );
}

export default SizeWisePrice;