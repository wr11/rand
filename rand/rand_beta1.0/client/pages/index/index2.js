Page({
  data:{
    mytext:'Rand'
  },
  onLoad:function(opt){
    console.log("执行onLoad函数");
    this.anyfunction();
  },
  anyfunction:function(){
    console.log("执行anyfunction函数");
  },
  gotoorganizer:function(){
    wx.navigateTo({
      url: '../organizer/organizer',
    })
  },
gotoparticipant:function(){
  wx.navigateTo({
    url: '../participant/participant',
  })
}
})