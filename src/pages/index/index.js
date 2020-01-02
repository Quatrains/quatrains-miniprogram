import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { preLogin, fetch } from "../../action/fetch";
import likeIcon from "../../assets/icons/like.png";
import "./index.less";

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const runner = async () => {
      await preLogin();
      const res = await fetch("/daily_poetry");
      setData(res);
    };
    runner();
  }, []);

  const handleLike = async () => {
    await fetch("/user/favorite", {
      method: "POST",
      body: {
        poetry_id: data.poetry.id
      }
    });
    Taro.showToast({ title: "收藏成功～", icon: "none" });
  };

  // TODO: 骨架屏
  if (!data) return <View>Loading...</View>;

  return (
    <View className="index">
      <View className="index-poetry">
        <View className="poetry-banner">
          <View className="poetry-title">{data.poetry.title}</View>
          <View className="poetry-author">{data.poetry.author}</View>
        </View>
        <View className="poetry-content">
          {data.poetry.content.map(c => (
            <View className="poetry-content-line" key={c}>
              {c}
            </View>
          ))}
        </View>
      </View>
      <View className="index-bottom">
        <Image
          className="index-bottom-like"
          src={likeIcon}
          onClick={handleLike}
        />
      </View>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "首页"
};

export default Index;
