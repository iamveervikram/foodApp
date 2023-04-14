import { createSlice } from "@reduxjs/toolkit";

const orderSlice=createSlice({
    name:'ors',
    initialState:{
        cartItems:[{id:'PMC12',foodName:'Melting Cheese',size:'12',eachPrice:'9.47',quantity:0},{id:'PPC12',foodName:'Pizza Capricciosa',size:'12',eachPrice:'12.55',quantity:0}],
        orderedItems:[],
    },
    reducers:{
        addItemToCart(state,action){
            const newItemOnCart=action.payload;
            const existing = state.cartItems.find(item=>item.id===newItemOnCart.id)
            // console.log(existing)
            if(!existing){

                state.cartItems.push({
                    id:newItemOnCart.id,
                    foodName:newItemOnCart.foodName,
                    size:newItemOnCart.size,
                    eachPrice:newItemOnCart.eachPrice,
                    quantity:1,
                    
                })
            }
            else{
                existing.quantity++;
            }

        },
        removeItemFromCart(state,action){
            const newItemOnCart=action.payload;
            const existing = state.cartItems.find(item=>item.id===newItemOnCart.id)
            if(existing.quantity > 0){
                existing.quantity--;
            }else{
                existing.quantity = 0;
            }

        },
        addItemAsOrdered(state,action){
            const newItemAsOrdered=action.payload;
            const existingOrder = state.orderedItems.find(item=>item.id===newItemAsOrdered.id)
            if(!existingOrder){

                state.cartItems.push({
                    id:newItemAsOrdered.id,
                    foodName:newItemAsOrdered.foodName,
                    size:newItemAsOrdered.size,
                    eachPrice:newItemAsOrdered.eachPrice,
                    quantity:newItemAsOrdered.quantity,
                    
                })
            }else{
                state.orderedItems.quantity=state.orderedItems.quantity+newItemAsOrdered.quantity;
            }

        },
    }
})

export const orderActions=orderSlice.actions;
export default orderSlice;