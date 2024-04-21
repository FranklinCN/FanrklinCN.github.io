var posts=["2023/08/25/MSOMS我的世界服务器离线消息发送器/","2023/12/09/【预告】Aurora Minecarft Launcher即将发布/","2024/03/16/hello-world/","2023/08/23/Minecraft1.20.1优化整合包/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };