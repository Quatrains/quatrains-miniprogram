import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import likeIcon from "../../assets/icons/like.png";
import { fetch } from "../../action/fetch";
import "./index.less";

const Index = () => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("/user/favorite");
      setFavorite(res.objects);
    })();
  }, []);

  if (!favorite) {
    return <View>Loading...</View>;
  }

  return (
    <View className="mine">
      <View className="mine-banner">
        <View className="mine-content">
          {favorite.map(f => (
            <View className="mine-content-item" key={f.id}>
              <Image className="mine-content-item-image" src={likeIcon} />
              <Text className="mine-content-item-text">
                {f.title} - {f.author}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "我的喜欢"
};

export default Index;
