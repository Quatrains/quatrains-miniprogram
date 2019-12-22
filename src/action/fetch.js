import Taro from "@tarojs/taro";
import { getStorage, setStorage } from "../utils";

const API_PREFIX = "http://localhost:8888";

const STORAGE_KEY_COOKIE = "cookie";

// TODO: 错误处理
const preLogin = async () => {
  // 1. 从微信获取code
  const { code } = await Taro.login();
  // 2. 将code发送给服务端，获取cookie
  const { cookies } = await Taro.request({
    url: `${API_PREFIX}/user/login`,
    method: "POST",
    data: {
      code
    }
  });
  // 3. 将cookie存入storage
  setStorage(STORAGE_KEY_COOKIE, cookies[0]);
  // 4. 返回cookie
  return cookies[0];
};

const fetch = async (url, options) => {
  // 1. 组装config
  const config = { ...options, header: {} };
  config.url = `${API_PREFIX}${url}`;
  config.header.Cookie = getStorage(STORAGE_KEY_COOKIE);

  // 2. 发送请求
  const res = await Taro.request(config);

  // 3. 组装返回值
  // 1) 处理请求失败
  // TODO: 请求错误处理
  if (res.errMsg !== "request:ok") {
    // TODO: request:fail
    Taro.showToast({ title: "request:fail", icon: "none" });
    return {
      msg: res.errMsg,
      data: {}
    };
  }

  // 2) 将cookie存入storage TODO: 待优化
  const cookie = res.header["set-cookie"] || res.header["Set-Cookie"] || "";
  if (cookie) {
    setStorage(STORAGE_KEY_COOKIE);
  }

  // 3) 处理状态码
  if (res.statusCode === 200) {
    return res.data;
  }
  // TODO: 401 & 401的fallback
  if (res.statusCode === 401) {
    Taro.showToast({ title: "未认证", icon: "none" });
  }

  // TODO: 其他错误
  Taro.showToast({ title: "出错啦", icon: "none" });
};

export { preLogin, fetch };
