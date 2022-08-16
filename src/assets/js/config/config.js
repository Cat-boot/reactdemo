let devUrl = "/api/"; //开发环境
let prodUrl = "//127.0.0.1:3001/mock/19/api/"; //生产环境

//左侧分类导航
let devUrls = "/sapi/"; //开发环境
let prodUrls = "//mgr-portal.services.dev.ofc/"; //生产环境

//github
let devUrlw = "/wapi/"; //开发环境
let prodUrlw = "//gitee.com/"; //生产环境


let token = " ";
let path = "/";
let config = {
    baseUrl: process.env.NODE_ENV === "production" ? prodUrl : devUrl,
    baseUrls: process.env.NODE_ENV === "production" ? prodUrls : devUrls,
    baseUrlw: process.env.NODE_ENV === "production" ? prodUrlw : devUrlw,
    path: path,
    token: token,
    //gitee OAuth单点登录配置
    oauth_uri: 'https://gitee.com/',
    redirect_uri: process.env.NODE_ENV === "production"?'http://www.guanaitong.com':"http://localhost:3000/personal",
    client_id: process.env.NODE_ENV === "production" ? 'e2f80e6172e9d753db7780c3205a86e935ba41fecce18b2c29d9a9d65d626cdd':'e2f80e6172e9d753db7780c3205a86e935ba41fecce18b2c29d9a9d65d626cdd',
    client_secret: process.env.NODE_ENV === "production" ? '5f827383cbaf6865fdc0090f705b652ce09231b4d46924db84cfcde5f659a02c':'5f827383cbaf6865fdc0090f705b652ce09231b4d46924db84cfcde5f659a02c',

};
export default config;
