import { addCollectionAndDocuments } from './firebase.utils';
import SHOP_DATA from '../shop-data';

export const initializeFirebaseData = async () => {
  try {
    await addCollectionAndDocuments('categories', SHOP_DATA);
    console.log('Successfully initialized Firebase data');
  } catch (error) {
    console.error('Error initializing Firebase data:', error);
  }
}; 