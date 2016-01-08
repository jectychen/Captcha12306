var Game = (function() {

    var resources,

        stage,

        gameCont,

        canW,

        pageIndex = 0,

        body = document.documentElement.body,

        winW = window.innerWidth,

        cjs = createjs,

        all = {
            getEl : function(obj,bool) {
                return bool ? document.querySelector(obj)
                        : document.querySelectorAll(obj);
            }
        },

        manifest = [
            {id: 'yzm_bg', src:'build/images/yzm_bg.jpg'},
            {id: 'game_bg', src:'build/images/game_bg.png'},
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
            {id: 'tipsBtn', src:'build/images/tips_btn.png'},
            {id: 'sureBtn', src:'build/images/sure_btn.png'},

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
        ],

        arr = ['swimming','juhua','title','guo','youyu','newzeland','buietyboy','teacher','hashiqi','wanghammer'];

    init();

    function init() {
        // console.log(createjs)
        removeDefault();
        loadmanifest();
        
    }

    function removeDefault() {
        document.body.addEventListener('touchmove', function(e) {
            e.stopPropagation();
            e.preventDefault();
        });
    }

    function loadmanifest() {
        resources = new cjs.LoadQueue(true);
        resources.on('complete', loadComplete, this);
        resources.on('progress', loadProgress, this);
        resources.loadManifest(manifest);
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
        stage = new cjs.Stage('captcha12306');
        var canvas = all.getEl('#captcha12306')[0],
            designW = 640,
            designH = 1136;
            winW = document.documentElement.clientWidth,
            winH = document.documentElement.clientHeight,
            scale = winW / designW;

        canvas.width = designW;
        canvas.height = winH / scale;
        canvas.style.width = winW + 'px';
        canvas.style.height = winH + 'px';

        canW = stage.canvas.width;

        drawIndex();
    }

    function drawIndex() {
        gameCont = new cjs.Container();
        var yzm_bg = new cjs.Bitmap(getImg('yzm_bg')),
            title = new cjs.Text('挑战最坑爹验证码', 'bold 36px Microsoft Yahei', '#ffb600'),
            stepTxt = new cjs.Text('第1/10关', 'bold 30px Microsoft Yahei', '#fff'),
            classTxt = new cjs.Text('级别:幼儿园', 'bold 30px Microsoft Yahei', '#fff'),
            gameBg = new cjs.Bitmap(getImg('game_bg')),
            tipsBtn = new cjs.Bitmap(getImg('tipsBtn')),
            sureBtn = new cjs.Bitmap(getImg('sureBtn'));

        title.textAlign = 'center';
        title.x = canW / 2;
        title.y = 95;

        stepTxt.setBounds(0, 0, 257, 30);
        classTxt.setBounds(0, 0, 257, 30);
        classTxt.x = 514;
        classTxt.textAlign = 'right';

        gameBg.y = 54;

        tipsBtn.x = 0;
        tipsBtn.y = 395;

        sureBtn.x = 274;
        sureBtn.y = 395;

        gameCont.addChild(stepTxt, classTxt, gameBg, tipsBtn, sureBtn);
        gameCont.setBounds(0, 0, 514, 486);
        gameCont.x = (canW - gameCont.getBounds().width) / 2;
        gameCont.y = 200;

        stage.addChild(yzm_bg, title, gameCont);
        setStep();
        stage.update(); 
    }

    function setStep() {
        var stepImg, stepTitle;
        stepTitle = new cjs.Bitmap(getImg(arr[pageIndex]));
        stepImg = new cjs.Bitmap(getImg('yzm'+(pageIndex+1)));

        stepTitle.x = 232;
        stepTitle.y = 62;
        stepImg.x = 34;
        stepImg.y = 127;
        gameCont.addChild(stepTitle, stepImg);
        stepImg.addEventListener('click', handleClick);
        // stage.update();
    }

    function handleClick(e) {
        console.log(e)
        var touchX = e.stageX,
            touchY = e.stageY;
        console.log(touchX,touchY);
    }

    // 通过class获取对象
    function getByClass(obj,cls) {
        obj = 'undefined' === typeof obj ? body : obj;
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
        return resources.getResult(id);
    }


}());