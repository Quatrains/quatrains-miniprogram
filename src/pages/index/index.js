import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { preLogin, fetch } from "../../action/fetch";

const Index = () => {
  const [data, setData] = useState(123);

  useEffect(() => {
    const runner = async () => {
      // await preLogin();
      // const res = await fetch("/daily_poetry");
      // setData(res.poetry);
    };
    runner();
  }, []);

  if (!data) {
    Taro.showLoading();
  }

  return (
    <View className="index">
      <Text>{data}</Text>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
