//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

    //首页导航数据
    navList:[],
    //被点击导航的菜单的索引
    currentIndexNav:0,
    //轮播图数据
    swiperList:[],
    //视频列表数据
    videosList:[]
  },
  //点击首页导航按钮
  activeNav(e){
    //console.log(123);
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  //获取首页导航数据
  getNavList(){
    let that=this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
      success(res){
        //console.log(res)
        if(res.data.code ===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  //获取轮播图数据
  getSwiperList(){
    let that=this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/swiper',
      success(res){
        if(res.data.code ===0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  //获取视频数据列表
  getvideoList(){
    let that=this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/videoList',
      success(res){
        //console.log(res);
        if(res.statusCode===200){
          
          that.setData({
            videosList:res.data
            
          })
        }
      }
    })
  },
 
  onLoad: function () {
   //获取首页导航数据
   this.getNavList();
   //获取轮播图数据
   this.getSwiperList();
   //获取视频数据列表
   this.getvideoList();
  },
  
})
