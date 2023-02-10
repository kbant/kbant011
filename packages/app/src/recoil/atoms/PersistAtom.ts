// TODO encrypted import EncryptedStorage from 'react-native-encrypted-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AtomEffect, DefaultValue } from 'recoil';
import { Platform } from 'react-native';

// const storage = Platform.OS === 'web' ? AsyncStorage : EncryptedStorage;
const storage = AsyncStorage;

export const persistAtom: AtomEffect<any> = ({ node, setSelf, onSet }) => {
  setSelf(
    storage.getItem(node.key).then(savedValue => (savedValue != null ? JSON.parse(savedValue) : new DefaultValue())),
  );
  onSet(newValue => {
    if (newValue instanceof DefaultValue) {
      storage.removeItem(node.key);
    } else {
      storage.setItem(node.key, JSON.stringify(newValue));
    }
  });
};
