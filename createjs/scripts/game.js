/*var JY=(function(){
    document.body.addEventListener('touchmove', function(e) {
        e.stopPropagation();
        e.preventDefault();
    });

    //需加载的图片资源
    var resources=[
        {id: 'yzm_bg', src:'build/images/yzm_bg.jpg'},
        {id: 'erweima', src:'build/images/erweima.jpg'},
        {id: 'fail', src:'build/images/fail.png'},
        {id: 'handprint', src:'build/images/handprint.png'},
        {id: 'jian', src:'build/images/jian.png'},
        {id: 'loading_bg', src:'build/images/loading_bg.png'},
        {id: 'logo', src:'build/images/logo.jpg'},
        {id: 'share_img', src:'build/images/share_img.png'},
        {id: 'success', src:'build/images/success.png'},
        {id: 'success_bg', src:'build/images/success_bg.png'},
        {id: 'train', src:'build/images/train.png'},

        {id: 'swimming', src:'build/images/1/swimming.jpg'},
        {id: 'juhua', src:'build/images/2/juhua.jpg'},
        {id: 'title', src:'build/images/3/teacher.jpg'},
        {id: 'guo', src:'build/images/4/guo.jpg'},
        {id: 'youyu', src:'build/images/5/youyu.jpg'},
        {id: 'newzeland', src:'build/images/6/newzeland.jpg'},
        {id: 'buietyboy', src:'build/images/7/beautyboy.jpg'},
        {id: 'teacher', src:'build/images/8/title.png'},
        {id: 'hashiqi', src:'build/images/9/hashiqi.jpg'},
        {id: 'wanghammer', src:'build/images/10/wanghammer.jpg'},

        {id: 'yzm1', src:'build/images/1/yzm01.jpg'},
        {id: 'yzm2', src:'build/images/2/yzm02.jpg'},
        {id: 'yzm3', src:'build/images/3/yzm03.jpg'},
        {id: 'yzm4', src:'build/images/4/yzm04.jpg'},
        {id: 'yzm5', src:'build/images/5/yzm05.jpg'},
        {id: 'yzm6', src:'build/images/6/yzm06.jpg'},
        {id: 'yzm7', src:'build/images/7/yzm07.jpg'},
        {id: 'yzm8', src:'build/images/8/yzm08.jpg'},
        {id: 'yzm9', src:'build/images/9/yzm09.jpg'},
        {id: 'yzm10', src:'build/images/10/yzm10.jpg'},

    ];

    //提示层文案
    var tips = [
        '游泳池就是可以游泳的一个池子！！！这都要提示！小编的内心是崩溃的！！',

        '小编小知识：菊花是一种花，不是人体的某私密部位哦。',

        '神马苍井空、波多野结衣、泷泽萝拉的小编我是一个都不认识....',

        '传说郭敬明身高147cm...',

        '章鱼是圆脑袋...鱿鱼是尖脑袋...小编觉得你的脑袋空的...',

        '小编也搞错了好多次...澳大利亚、新西兰傻傻分不清楚....',

        'B站热播泰国神剧...《不一样的美男》...让你想吐的“美”男子....小编先去吐会....',

        '此题有三个C罩杯...小编小知识：C罩杯是指上下胸围之差（乳尖与乳房最下端的差值）为左右15cm的女性罩杯。传说国内明星中张柏芝、林志玲、林熙蕾均为C罩杯。',

        '哈士奇毛短...二逼....额头和眉间颜色分布三把火....',

        '最英俊潇洒玉树临风高大威猛的那一个...小编这么一说...是不是突然觉得右上角的那个特别帅...小编已被公司产品狗王帅锤绑架...PS:《万万没想到-西游篇》12.18全国公映！'
    ];

    //失败文案title
    var stepTitle = [
        '刷票这个事吧，还是术业有专攻的...还是让别人帮你刷吧...',
        '刷票吧你也不是不行...就是常识不太好...去多读书看报增长点知识...知音故事会神马的也是极好的...',
        '刷票吧你堪称达人...就是日本的爱情和动作电影研究不深...可能你都是看欧美的吧...',
        '刷票吧你也还要努力...也不要好高骛远...不低头看路...',
        '刷票吧你也还可以...就是山里的孩子海鲜吃得少...多吃点海鲜对身体好...',
        '刷票吧你也还及格...就是不关心国际关系...在火车上还能会遇到外国人的嘛...',
        '刷票吧你也还算优秀...就是相貌品味或性别取向比较独特...',
        '刷票吧你也还凑合...就是眼神不太好...刷之前多滴滴眼药水...',
        '刷票你堪称砖家...就是你不懂小编的痛...你帮小编刷刷票吧...',
        '刷票你堪称叫兽...就是你不认识我司产品狗...实在太像大锤了...'
    ];

    //失败文案主体
    var stepText = [
        '全国只有1%的人能通过10关！您通过了第0关，击败了全国0%的购票者，您已被12306归类为“最喜欢的用户”...',

        '全国只有1%的人能通过10关！您通过了第1关，击败了全国5%的购票者，您已被12306归类为“小学生用户”...',

        '全国只有1%的人能通过10关！您通过了第2关，击败了全国11%的购票者，您已被12306归类为“不放在眼里的用户”...',

        '全国只有1%的人能通过10关！您通过了第3关，击败了全国21%的购票者,您已被12306归类为“不脚踏实地的用户”...',

        '全国只有1%的人能通过10关！您通过了第4关，击败了全国30%的购票者，您已被12306归类为“营养不良的用户”...',

        '全国只有1%的人能通过10关！您通过了第5关，击败了全国41%的购票者，您已被12306归类为“没过英语4级的用户”...',

        '全国只有1%的人能通过10关！您通过了第6关，击败了全国66%的购票者，您已被12306归类为“品味独特的用户”...',

        '全国只有1%的人能通过10关！您通过了第7关，击败了全国83%的购票者，您已被12306归类为“欧美派用户”...',

        '全国只有1%的人能通过10关！您通过了第8关，击败了全国92%的购票者，您已被12306归类为“需要监控的用户”...',

        '全国只有1%的人能通过10关！您通过了第9关，击败了全国97%的购票者，您已被12306归类为“黄牛型的用户”...'
    ];

    //级别
    var classText = [ '幼儿园', '学前班', '小学生', '初中生', '高中生', '大学生', '研究生', '博士', '副叫兽', '叫兽'];

    var gameContainer = $('#gameContainer'),
        setion = gameContainer.find('.setion'),
        remindBtn = $('#remindBtn'),
        sureBtn=$('#sureBtn'),
        process = $('#process'),
        yzm = $('.yzm>ul>li'),
        conMsg = $('#conMsg'),
        winW = $(window).width();

    window.nowPIndex = 0;

    var queue = new createjs.LoadQueue(true);
    queue.on('complete', loadComplete, this);
    queue.on('progress', loadProgress, this);
    queue.loadManifest(resources);

    //加载成功
    function loadComplete(){
        $('#loading').hide();

        conMsg.show();
        $('.container').show('fast');
        bindTouchAction();
    }

    //加载中
    function loadProgress(e){
        loading(e.progress);
    }

    //加载进度条
    function loading(process){
        var width = winW * process;
        $('#loading>.loadingBar>span').html(Math.round(process*100)+' %');
        document.getElementById('loadingGif').style.webkitTransform = 'translate3d('+width+'px,0,0)';
        document.getElementById('loadingText').style.webkitTransform = 'translate3d('+width+'px,0,0)';
        $('#loading>.loadingBar>i').css('width',width+'px');
    }

    //绑定事件
    function bindTouchAction() {

        remindBtn.on('tap',function() {
            showTips();
        })

        sureBtn.on('tap',function() {
            if( !setion.find('li.current').length ) {
                return false;
            }
            checkResult();
        })

        //关闭弹窗
        $('.J-closeBtn').on('tap',function() {
            $('.q-tips-cover').hide();
            $(this).parents('.q-tips').removeClass('current bounceIn');
        })

        //重玩游戏
        $('.J-resetBtn').on('tap',function() {
            $('#yzm-loading').hide();
            var self = $(this);
            var h = self.parents('.q-tips').find('.q-failMain').height();
            $('#yzm-loading').css({
                height:h+'px',
                lineHeight : h+'px'
            }).show();

            setTimeout(function() {
                $('#yzm-loading').hide();
                $('.q-tips-cover').hide();
                self.parents('.q-tips').removeClass('current bounceIn');
                resetGame();
            },400)
            
        })

        //炫耀分享
        $('.J-shareBtn').on('tap',function() {
            $('.sharePanel').show();
        })

        //点击share容器关闭自身
        $('.sharePanel').on('tap',function() {
            $(this).hide();
        })

        //绑定验证码事件
        yzm.on('touchstart',function(e) {
            var self = $(this);
            var isAdded = self.hasClass('current');
            var e = e || window.event,
                target = e.target;
                touchX = e.touches[0].pageX,
                touchY = e.touches[0].pageY,
                offsetX = self.offset().left,
                offsetY = self.offset().top,
                liW = self.width(),
                imgW = 26;

            var left = touchX-offsetX > liW - imgW ? (liW-imgW)/2 : (touchX-offsetX);
            var top = touchY-offsetY > liW - imgW ? (liW-imgW)/2 : (touchY-offsetY);

            if( !isAdded ) {
                var train = '<div class="train" style="left:'+left+'px; top:'+top+'px"></div>';
                var answer = $(target).data('answer');
                self.append($(train));
                self.addClass('current'); 
            }else {
                self.removeClass('current');
                self.find('.train').remove();
            }
            
        })
    }

    //检查结果
    function checkResult() {
        var curPage = $('.setion.g-show'),
            curLi = curPage.find('ul>li'),
            rightTotal = parseInt(curPage.data('total')),
            curLilen = curPage.find('ul>li.current').length,
            len = curLi.length,
            numTotal = 0,
            i = 0,
            correct = false;

        for( ; i < len; i++ ) {
            correct = curLi.eq(i).hasClass('current') 
                        && curLi.eq(i).attr('data-answer') === '1';
            correct && numTotal ++ ;
        }

        if( numTotal === rightTotal && curLilen === rightTotal ){
            (window.nowPIndex + 1 === 10) ? successFunc() : goNext();
        }
        else {
            failFunc();
        }
    }

    //下一关
    function goNext() {
        setion.find('li').removeClass('current');
        setion.eq(window.nowPIndex).removeClass('g-show').next().addClass('g-show');
        window.nowPIndex++;
        setTitle();
    }

    //提示层
    function showTips() {
        var text = tips[window.nowPIndex];
        $('.q-tips-cover').show();
        $('.q-tips-remind').addClass('current bounceIn').find('.q-text').html(text);
    }

    //设置关数级别和恭喜文案
    function setTitle() {
        conMsg.html('恭喜您通过了第 <span class="bounceIn">'+window.nowPIndex+'</span> 关！');
        process.find('.step').html('第'+(window.nowPIndex+1)+'/10关');
        process.find('.class').html('级别：'+classText[window.nowPIndex]+'');
    }

    //成功
    function successFunc() {
        $('#conMsg').hide();
        $('.q-tips-cover').show();
        $('.q-tips-success').addClass('current bounceIn');
    }

    //失败
    function failFunc() {
        var title = stepTitle[window.nowPIndex];
        var text = stepText[window.nowPIndex];
        $('.q-tips-cover').show();
        $('.q-tips-fail').addClass('current bounceIn').find('.q-text').html('<div class="q-sponsor">'+title+'</div>'+text);
    }

    //重置游戏
    function resetGame() {
        window.nowPIndex = 0;
        conMsg.html('挑战最坑爹验证码');
        process.find('.step').html('第1/10关');
        process.find('.class').html('级别：幼儿园 ');
        setion.removeClass('g-show').eq(0).addClass('g-show');
        setion.find('li').removeClass('current').find('.train').remove();
    }

})();*/
var Game = (function() {

    var 
        queue,

        winW = window.innerWidth,

        all = {
            getEl : function(obj,bool) {
                return bool ? document.querySelector(obj)
                        : document.querySelectorAll(obj);
            }
        },

        resources=[
            {id: 'yzm_bg', src:'build/images/yzm_bg.jpg'},
            {id: 'erweima', src:'build/images/erweima.jpg'},
            {id: 'fail', src:'build/images/fail.png'},
            {id: 'handprint', src:'build/images/handprint.png'},
            {id: 'jian', src:'build/images/jian.png'},
            {id: 'loading_bg', src:'build/images/loading_bg.png'},
            {id: 'logo', src:'build/images/logo.jpg'},
            {id: 'share_img', src:'build/images/share_img.png'},
            {id: 'success', src:'build/images/success.png'},
            {id: 'success_bg', src:'build/images/success_bg.png'},
            {id: 'train', src:'build/images/train.png'},

            {id: 'swimming', src:'build/images/1/swimming.jpg'},
            {id: 'juhua', src:'build/images/2/juhua.jpg'},
            {id: 'title', src:'build/images/3/teacher.jpg'},
            {id: 'guo', src:'build/images/4/guo.jpg'},
            {id: 'youyu', src:'build/images/5/youyu.jpg'},
            {id: 'newzeland', src:'build/images/6/newzeland.jpg'},
            {id: 'buietyboy', src:'build/images/7/beautyboy.jpg'},
            {id: 'teacher', src:'build/images/8/title.png'},
            {id: 'hashiqi', src:'build/images/9/hashiqi.jpg'},
            {id: 'wanghammer', src:'build/images/10/wanghammer.jpg'},

            {id: 'yzm1', src:'build/images/1/yzm01.jpg'},
            {id: 'yzm2', src:'build/images/2/yzm02.jpg'},
            {id: 'yzm3', src:'build/images/3/yzm03.jpg'},
            {id: 'yzm4', src:'build/images/4/yzm04.jpg'},
            {id: 'yzm5', src:'build/images/5/yzm05.jpg'},
            {id: 'yzm6', src:'build/images/6/yzm06.jpg'},
            {id: 'yzm7', src:'build/images/7/yzm07.jpg'},
            {id: 'yzm8', src:'build/images/8/yzm08.jpg'},
            {id: 'yzm9', src:'build/images/9/yzm09.jpg'},
            {id: 'yzm10', src:'build/images/10/yzm10.jpg'}
        ];

    init();

    function init() {
        // console.log(createjs)
        removeDefault();
        loadResources();
    }

    function removeDefault() {
        document.body.addEventListener('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
        });
    }

    function loadResources() {
        queue = new createjs.LoadQueue(true);
        queue.on('complete', loadComplete, this);
        queue.on('progress', loadProgress, this);
        queue.loadManifest(resources);
    }

    //加载成功
    function loadComplete(){
        all.getEl('#loading')[0].style.display = 'none';

        // 游戏开始
        gameStart();
    }

    //加载中
    function loadProgress(e){
        loading(e.progress);
    }

    // 加载进度条
    function loading(process){
        var loading = all.getEl('#loading')[0],
            loadRate = all.getEl('#loadingText')[0],
            loadImg = getByClass(loading, 'loadingGif')[0],
            loadLine = getByClass(loading, 'loadingBar')[0].children[0],
            width = winW * process;

        loadRate.innerHTML = Math.round(process*100) + ' %';
        loadRate.style.webkitTransform = 'translate3d('+width+'px,0,0)';
        loadImg.style.webkitTransform = 'translate3d('+width+'px,0,0)';
        loadLine.style.width = width + 'px';
    }

    // 游戏开始
    function gameStart() {
        var stage = new createjs.Stage('captcha12306'),
            image = new createjs.Bitmap(getImg('swimming'));
        stage.addChild(image);
        createjs.Ticker.addEventListener('tick',handleTick);

        function handleTick() {
            image.x += 1;
            stage.update();    
        }
    }

    // 通过class获取对象
    function getByClass(obj,cls) {
        var child = obj.children,
            len = child.length,
            i = 0,
            arr = [];

        for(; i < len; i++) {
            if(child[i].className.indexOf(cls) >= 0) {
                arr.push(child[i]);
            }
        }

        return arr;
    }

    function getImg(id) {
        return queue.getResult(id);
    }


}());