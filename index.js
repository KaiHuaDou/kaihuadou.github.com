const gitalk = new Gitalk({
    clientID: 'ba60ca5457edd408cc31',
    clientSecret: 'f65f2a9640fde08792705ec2dd3fd3c08f66e67c',
    repo: 'KaiHuaDou.github.com',
    owner: 'KaiHuaDou',
    admin: ['KaiHuaDou'],
    id: (location.pathname).split("/").pop().substring(0, 49),
    proxy: 'https://static.appgao.cate.fun/login/oauth/access_token',
    distractionFreeMode: false
});

gitalk.render('gitalk-container')