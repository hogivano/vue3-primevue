import { idb } from './idb';

const checkStore = async (storeName: any) => {
  try {
    const db = await idb();
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    return new Promise((resolve) => resolve(store.get(storeName)));
  } catch (err) {
    return new Promise((reject) => reject(err));
  }
};

const saveStore = async (storeName: string, data: any) => {
  try {
    const db = await idb();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(data);
    store.put(data, storeName);
  } catch (error: any) {
    console.log('error', error);
  }
};

export default {
  checkStore,
  saveStore,
};
