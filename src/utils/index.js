import Taro from "@tarojs/taro";

export const getStorage = key => {
  return Taro.getStorageSync(key);
};

export const setStorage = (key, value) => {
  return Taro.setStorageSync(key, value);
};
