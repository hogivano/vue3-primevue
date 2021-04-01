import { openDB } from 'idb';

const idb = () => {
  if (!('indexedDB' in window)) {
    throw new Error('Browser does not support');
  }

  return openDB(process.env.INDEXEDDB_NAME || 'hjex', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
      if (db.objectStoreNames.contains('task')) {
        db.createObjectStore('task');
      }
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { idb };
