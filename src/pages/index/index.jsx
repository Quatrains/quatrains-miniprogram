import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

const Index = () => {
  return (
    <View className='index'>
        <Text>Hello 绝句!</Text>
      </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页'
}

export default Index;
