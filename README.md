# epecim

## Project setup (install some plugs)
```
yarn add
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###当前版本不支持kepp-alive,应为牵扯到消息监听功能，如需添加该项功能，按需修改事件监听功能

###当前版本的vant使用的是2.3.0-beta.5版本，如之后出现样式错乱，请及时更新vant正式版本

###当前版本中loginPhone/userPhone为当前用户的openid(该openid为非必传，后台可从session中获取),targetPhone为IM对方的openid
