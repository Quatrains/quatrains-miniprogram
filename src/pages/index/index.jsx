import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const runner = async () => {
      const { data: res } = await Taro.request({
        url: `http://localhost:8888/user/login`
      });
      setData(res);
    };
    runner();
  }, []);

  if (!data) return <View>Loading...</View>;

  return (
    <View className="index">
      <Text>{data.res}</Text>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
