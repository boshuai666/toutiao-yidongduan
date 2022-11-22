module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      // 有没有更好的办法？
      //   如果是 Vant 的样式，就按照 37.5 来转换
      //   如果是 我们自己 的样式，就按照 75 来转换
      // 通过查阅文档，我们发现 rootValue 支持两种类型：
      //    数字：固定的数值
      //    函数：可以动态处理返回
      //          postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数
      //          它会把被处理的 CSS 文件相关的信息通过参数传递给该函数
      //    indexOf如果找到就返回对应的索引,如果找不到就返回-1
      //   !== -1说明找到了vant,当前处理的css文件是vant组件的css文件资源,就设置为37.5,反之其他的设置为75
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },

      // 配置要转换的 CSS 属性
      // * 表示所有
      propList: ['*']
    }
  }
}
