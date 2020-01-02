import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.less";

const Index = () => {
  return <View className="about">关于我们</View>;
};

Index.config = {
  navigationBarTitleText: "关于我们"
};

export default Index;
