import Taro, { useState, useEffect } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.less";

const Index = () => {
  return (
    <View className="index">
      <Text>发现页</Text>
    </View>
  );
};

Index.config = {
  navigationBarTitleText: "发现"
};

export default Index;
