import Taro from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import "./index.less";

// 授权功能
const Index = () => {
  const getUserInfo = async ({ detail }) => {
    console.log(detail);
  };

  return (
    <View className="index">
      <Button openType="getUserInfo" onGetUserInfo={getUserInfo}>
        进入小程序
      </Button>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "登录页"
};

export default Index;
