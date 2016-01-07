var Game = (function() {

    var queue,

        winW = window.innerWidth,

        all = {
            getEl : function(obj,bool) {
                return bool ? document.querySelector(obj)
                        : document.querySelectorAll(obj);
            }
        },

        resources = [
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
            yzm_bg = new createjs.Bitmap(getImg('yzm_bg'));
            yzm1 = new createjs.Bitmap(getImg('yzm1'));

        console.log(yzm_bg)
        stage.addChild(yzm_bg, yzm1);
        stage.update(); 
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

    function setImgObj(image) {
        // var img = new createjs.Bitmap(getImg(image)),

    }


}());