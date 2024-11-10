import { atom } from 'recoil';

export const oneYearDogsState = atom({
  key: 'oneYearDogsState',
  default: [],
});

export const longestDogsState = atom({
  key: 'longestDogsState',
  default: [],
});