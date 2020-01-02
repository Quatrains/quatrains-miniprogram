import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import likeIcon from "../../assets/icons/like.png";
import { fetch } from "../../action/fetch";

import "./index.less";

const Index = () => {
  const [interests, setInterests] = useState([]);
  const [interestIds, setInterestIds] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/interests");
      setInterests(res.objects.map(o => ({ ...o, isActive: false })));
    })();
  }, []);

  const handleAddInterests = id => () => {
    setInterestIds([...interestIds, id]);
  };

  const handleSubmit = async () => {
    await fetch("/user/interests", {
      method: "POST",
      body: {
        interest_ids: interestIds
      }
    });
    Taro.redirectTo({ url: "/pages/mine/index" });
  };

  if (!interests || interests.length === 0) {
    return <View>Loading...</View>;
  }

  return (
    <View className="mine">
      <View className="mine-content">
        {interests.map(f => (
          <View
            className={
              f.isActive
                ? "mine-content-item active-item"
                : "mine-content-item "
            }
            key={f.id}
            onClick={handleAddInterests(f.id)}
          >
            <Image className="mine-content-item-image" src={likeIcon} />
            <Text className="mine-content-item-text">{f.text}</Text>
          </View>
        ))}
      </View>
      <Button className="submit-button" onClick={handleSubmit}>
        提交
      </Button>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: ""
};

export default Index;
