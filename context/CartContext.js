// // context/CartContext.js
// import { createContext, useContext, useState } from "react";
// import { collection, addDoc, updateDoc, doc, getDocs, query, where } from "firebase/firestore";
// import { db } from "@/firebase.config";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const addToCart = async (productId, quantity, userId) => {
//     try {
//       const cartCollection = collection(db, "cart");
//       const q = query(cartCollection, where("productId", "==", productId), where("userId", "==", userId));
//       const querySnapshot = await getDocs(q);

//       if (querySnapshot.empty) {
//         await addDoc(cartCollection, { productId, quantity, userId });
//       } else {
//         querySnapshot.forEach(async (document) => {
//           const cartItemDoc = doc(db, "Cart", document.id);
//           await updateDoc(cartItemDoc, { quantity: document.data().quantity + quantity });
//         });
//       }
//     } catch (error) {
//       console.error("Error adding to cart: ", error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, selectedProduct, setSelectedProduct }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
