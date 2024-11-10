import { atom } from 'recoil';

export const oneYearDogsState = atom({
  key: 'oneYearDogsState',
  default: [], // 초기값은 빈 배열
});

export const longestDogsState = atom({
  key: 'longestDogsState',
  default: [], // 초기값은 빈 배열
});