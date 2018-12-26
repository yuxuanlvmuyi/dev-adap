import path from 'path'

// 系统配置
export let System = {
  API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
  API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
  API_server_port: '3001', // API服务器监听的端口号
  HTTP_server_type: 'http://', // HTTP服务器协议类型,包含"http://"或"https://"
  HTTP_server_host: 'www.XXX.com', // HTTP服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
  HTTP_server_port: '65534', // HTTP服务器端口号
  System_country: 'zh-cn', // 所在国家的国家代码
  System_plugin_path: path.join(__dirname, './plugins'), // 插件路径
  Session_Key: 'RESTfulAPI', // 生产环境务必随机设置一个值
  db_type: 'mysql' // 数据库类型
}

export let DB = {
  host: 'localhost', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'admin', // 数据库用户名
  password: 'admin888', // 数据库密码
  database: 'development', // 数据库名称
  prefix: 'api_' // 默认"api_"
}

export let SendEmail = {
  service: 'smtp.abcd.com', // SMTP服务提供商域名
  username: 'postmaster%40abcd.com', // 用户名/用户邮箱
  password: 'password', // 邮箱密码
  sender_address: '"XX平台 👥" <postmaster@abcd.com>'
}

export let smartContract = {
  developerAddress : 'TXsYEg41yPQKzpYBM1gwWNvpTEoGUtExTu', // 开发者账户地址
  developerPrivateKey : '8EBE01BA3E1E74ED6A0BCD4C3320D0B9D3EB20B173DB190563EB90AAD0405523', // 开发者私钥
  assistantAddress : 'TXsYEg41yPQKzpYBM1gwWNvpTEoGUtExTu', // assistant账户地址
  fullNodeUrl : 'http://47.90.240.201:8090',
  solidityNodeUrl : 'http://47.90.240.201:8091',
  eventServerUrl : 'http://47.90.240.201:8092',
  contractAddress : '41f04053ec8484e978e894c414b6caafc57917802f',
}