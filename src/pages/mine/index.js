import Taro, { useState, useDidShow } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import snowmanIcon from "../../assets/icons/snowman.png";
import likeIcon from "../../assets/icons/like.png";
import aboutIcon from "../../assets/icons/about.png";
import calendarIcon from "../../assets/icons/calendar.png";
import "./index.less";

const Index = () => {
  const [isAuthorized, setAuthorize] = useState(false);
  const [info, setInfo] = useState({ nickName: "", avatarUrl: "" });

  useDidShow(() => {
    (async () => {
      const { authSetting } = await Taro.getSetting();
      if (authSetting["scope.userInfo"]) {
        setAuthorize(true);
        const { userInfo } = await Taro.getUserInfo();
        setInfo(userInfo);
      } else {
        setAuthorize(false);
        setInfo({ nickName: "登入", avatarUrl: snowmanIcon });
      }
    })();
  }, []);

  if (!info.nickName || !info.avatarUrl) {
    return null;
  }

  return (
    <View className="mine">
      <View className="mine-banner">
        <View className="mine-banner-info">
          <View
            className="mine-banner-nickname"
            onClick={() => {
              !isAuthorized
                ? Taro.navigateTo({ url: "/pages/login/index" })
                : null;
            }}
          >
            {info.nickName}
          </View>
          <View className="mine-banner-days">已加入 61 天</View>
        </View>
        <Image className="mine-banner-image" src={info.avatarUrl} />
      </View>
      <View className="mine-content">
        <View className="mine-content-item">
          <Image className="mine-content-item-image" src={likeIcon} />
          <Text className="mine-content-item-text">我的喜欢</Text>
        </View>
        <View className="mine-content-item">
          <Image className="mine-content-item-image" src={calendarIcon} />
          <Text className="mine-content-item-text">诗词日历</Text>
        </View>
        <View className="mine-content-item">
          <Image className="mine-content-item-image" src={aboutIcon} />
          <Text className="mine-content-item-text">关于我们</Text>
        </View>
      </View>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: ""
};

export default Index;
