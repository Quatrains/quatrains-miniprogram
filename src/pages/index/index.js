import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { preLogin, fetch } from "../../action/fetch";
import TabBar from "../../components/tab-bar";

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

  if (!data) return <View>Loading...</View>;

  return (
    <View className="index">
      <Text>{data}</Text>
      {/* <TabBar /> */}
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
