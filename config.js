// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的小欣",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第二个生日了哦",
        "两年前，我们还在拉拉扯扯",
        "那时的我，真以为你只是把我当成朋友",
        "但后来，我们终是坠入了爱河",
        "去年的生日",
        "我们在西安熬到了凌晨",
        "那时候的我敏感又任性",
        "动不动就和你吵架",
        "开心也好，吵闹也罢",
        "经过风风雨雨，我们一起走到了现在",
        "我有变得更懂事噢！",
        "也真的很感谢你一路上的包容",
        "以及一直给我的爱与温暖",
        "今年的生日没有办法陪在你身边",
        "但我还是希望能以这种方式",
        "给你送上祝福！",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小欣": "imgs/IMG_20230427_215628 - 复制 .jpg",
         "我们在西安熬到了凌晨": "imgs/IMG20240406081043 .jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
