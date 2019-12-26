import Taro, { Component } from "@tarojs/taro";
import Index from "./pages/index/index";
import color from "./constants/color";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  config = {
    tabBar: {
      custom: false,
      color: "#999",
      selectedColor: "#cb4042",
      backgroundColor: "#fff",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "assets/icons/index.png",
          selectedIconPath: "assets/icons/index_selected.png",
          text: "首页"
        },
        {
          pagePath: "pages/find/index",
          iconPath: "assets/icons/find.png",
          selectedIconPath: "assets/icons/find_selected.png",
          text: "发现"
        },
        {
          pagePath: "pages/mine/index",
          iconPath: "assets/icons/mine.png",
          selectedIconPath: "assets/icons/mine_selected.png",
          text: "我的"
        }
      ]
    },
    pages: [
      "pages/index/index",
      "pages/login/index",
      "pages/find/index",
      "pages/mine/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));
