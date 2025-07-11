import { addCollectionAndDocuments, getCategoriesAndDocuments } from './firebase.utils';
import SHOP_DATA from '../shop-data';

export const initializeFirebaseData = async () => {
  try {
    // Check if data already exists
    const existingCategories = await getCategoriesAndDocuments();
    
    // Only initialize if no categories exist and we're in development
    if ((!existingCategories || existingCategories.length === 0) && 
        process.env.NODE_ENV === 'development') {
      await addCollectionAndDocuments('categories', SHOP_DATA);
      console.log('Successfully initialized Firebase data');
    }
  } catch (error) {
    console.error('Error initializing Firebase data:', error);
  }
}; 