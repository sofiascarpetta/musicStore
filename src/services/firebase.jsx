import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDocs, collection, query, where, getDoc, doc, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMiWlshtVCxk2upf0qcdAGxbkmQOnbwjM",
  authDomain: "musicapp-ecommerce.firebaseapp.com",
  projectId: "musicapp-ecommerce",
  storageBucket: "musicapp-ecommerce.appspot.com",
  messagingSenderId: "322451655438",
  appId: "1:322451655438:web:84e6f4886f8058d845e55f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    const collectionRef = categoryId ? 
    query(collection(db,'products'), where('categoryId', '==', categoryId)) : 
    collection(db, 'products'); 

    getDocs(collectionRef).then(querySnapshot => {
      const products = querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
      });
      resolve(products);
    });
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    const docRef = doc(db, 'products', productId);
    getDoc(docRef).then(querySnapshot => {
      const product = {id: querySnapshot.id, ...querySnapshot.data()};
      resolve(product);
    });
  });
};

export const getCategories = () => {
  return new Promise((resolve) => {
    const collectionRef = collection(db, 'categories');
      getDocs(collectionRef).then(querySnapshot => {
        const categories = querySnapshot.docs.map(cat => {
          return {id: cat.id, ...cat.data()};
        });
        resolve(categories);
      });
  });
};

export const addOrder = (objOrder) => {
  return new Promise((resolve) => {
    addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
      resolve(id);
    });
  });
};