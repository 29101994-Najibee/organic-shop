// export const useCart =()=>{
// const [cartItems , setCartItems] = useSatet([])

// const handelIncreaseItem = (itemId) => {
//     setCartItems((cartItems) => {
//         const item = cartItems.find((item) => item.id === itemId);
//         if (item) {
//             return cartItems.map((item) =>
//                 item.id === itemId ? { ...item, count: item.count + 1 } : item
//             );
//         } else {
//             return [...cartItems, { id: itemId, count: 1 }];
//         }
//     });
// };

// const handelDecreaseItem =(itemId)=>{
//     setCartItems(cartItems.map((i)=>{
//         if(i.id === itemId)
//             return{...i, count: Math.max(i.count - 1, 0)}
//         else return i;
        

//     }))
    
// }
// const handelRemoveItems=(itemId)=>{
//     setCartItems((item)=>
//         item.filter((item)=>item.id !== itemId)
//         );
//     }
//     return{cartItems , handelDecreaseItem ,handelIncreaseItem,handelRemoveItems}
// }