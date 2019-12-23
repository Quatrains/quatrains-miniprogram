import Taro, { useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

const Index = () => {
  useEffect(() => {}, []);

  return (
    <View className="index">
      <Text>我的</Text>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "我的"
};

export default Index;
