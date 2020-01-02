import Taro, { useState, useDidShow, useEffect } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import snowmanIcon from "../../assets/icons/snowman.png";
import likeIcon from "../../assets/icons/like.png";
import aboutIcon from "../../assets/icons/about.png";
import calendarIcon from "../../assets/icons/calendar.png";
import { fetch } from "../../action/fetch";
import "./index.less";

const Index = () => {
  const [isAuthorized, setAuthorize] = useState(false);
  const [info, setInfo] = useState({ nickName: "", avatarUrl: "" });
  const [profile, setProfile] = useState({ have_interests: false });

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

  useEffect(() => {
    (async () => {
      const res = await fetch("/user/profile");
      setProfile(res);
    })();
  }, []);

  const handleNavigate = page => () => {
    Taro.navigateTo({ url: page });
  };

  if (!info.nickName || !info.avatarUrl || !profile) {
    return <View>Loading...</View>;
  }

  if (!profile.have_interests) {
    return Taro.redirectTo({ url: "/pages/interests/index" });
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
          <View className="mine-banner-days">
            {!isAuthorized
              ? "快来加入我们吧"
              : `已加入 ${profile.join_days} 天`}
          </View>
        </View>
        <Image className="mine-banner-image" src={info.avatarUrl} />
      </View>
      <View className="mine-content">
        <View
          className="mine-content-item"
          onClick={handleNavigate("/pages/favorite/index")}
        >
          <Image className="mine-content-item-image" src={likeIcon} />
          <Text className="mine-content-item-text">我的喜欢</Text>
        </View>
        <View
          className="mine-content-item"
          onClick={() =>
            Taro.showToast({ title: "功能还在开发中～", icon: "none" })
          }
        >
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
