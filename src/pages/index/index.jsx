import Taro, { useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

const Index = () => {
  useEffect(() => {
    Taro.request({ url: `http://localhost:8888/user/login` }).then(res => {
      console.log(res.json);
    });
  }, []);

  return (
    <View className="index">
      <Text>Hello 绝句!</Text>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
