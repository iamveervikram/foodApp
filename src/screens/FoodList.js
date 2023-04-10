import React,{useState} from 'react'
import { Text, View,FlatList,StyleSheet,TouchableOpacity } from 'react-native'
import Hamburger from '../svgJsx/Hamburger.js'
import Pizza from "../svgJsx/Pizza.js";
import Cake from '../svgJsx/Cake'
import Scorpion from '../svgJsx/Scorpion'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';


function switchFood(choice){

    switch(choice){
        case "Humberger":
            return <Hamburger/>
            break;
        case "Pizza":
            return <Pizza/>
            break;
        case "Cake":
            return <Cake/>
            break;
        case "Scorpion":
            return <Scorpion/>
            break;
        default:
            return <View></View>
    }
}


const FoodList=({name})=>{

    let [fontsLoaded] = useFonts({
        Inter_500Medium,
      });
    
      if (!fontsLoaded) {
        return null;
      }

      

    return(
        <View>
            <View style={{display:'flex',alignItems:'center',padding:5}}>
            {switchFood(name)}
            </View>
            <Text style={{fontFamily:'Inter_500Medium',fontSize:10,textAlign:'center',width:50,paddingTop:3}}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
  });

export default FoodList;
