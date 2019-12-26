import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { preLogin, fetch } from "../../action/fetch";

const Index = () => {
  const [data, setData] = useState({
    title: "静夜思",
    author: "李白",
    content: ["床前明月光，", "疑是地上霜。", "举头望明月，", "低头思故乡。"]
  });

  useEffect(() => {
    const runner = async () => {
      // await preLogin();
      // const res = await fetch("/daily_poetry");
      // setData(res.poetry);
    };
    runner();
  }, []);

  // TODO: 骨架屏
  if (!data) return <View>Loading...</View>;

  return (
    <View className="index">
      <View className="index-poetry">
        <View className="poetry-banner">
          <View className="poetry-title">{data.title}</View>
          <View className="poetry-author">{data.author}</View>
        </View>
        <View className="poetry-content">
          {data.content.map(c => (
            <View className="poetry-content-line" key={c}>
              {c}
            </View>
          ))}
        </View>
      </View>
      <View className="index-bottom"></View>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
