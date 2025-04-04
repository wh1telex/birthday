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
        "直到后来",
        "相册里的你越来越多",
        "才发现我满眼是你",
        "发现我已经坠入爱河",
        "去年的今天",
        "我们在西安熬到了凌晨",
        "那时候的我敏感又任性",
        "动不动就和你吵架",
        "开心也好，吵闹也罢",
        "经过风风雨雨，我们一起走到了现在",
        "我有变得更懂事噢！",
        "也真的很感谢你一路上的包容",
        "以及一直给我的爱与温暖",
        "你送的礼物我都很喜欢",
        "(每次读这封信都还是会很想哭)",
        "今年的生日没有办法陪在你身边",
        "但我还是希望能以这种方式",
        "给你送上祝福！",
        "  ",
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
        "心爱的小欣": "imgs/lunar.jpg",
        "今天是你的生日": "imgs/before.jpg",
        "两年前，我们还在拉拉扯扯": "imgs/Amay.jpg",
        "那时的我，真以为你只是把我当成朋友": "imgs/road.jpg",
        "直到后来": "imgs/IMG20230505161658.jpg",
        "相册里的你越来越多": "imgs/pic.jpg",
        "才发现我满眼是你": "imgs/eyes.jpg",
        "发现我已经坠入爱河": "imgs/river.jpg",
        "我们在西安熬到了凌晨": "imgs/train.jpg",
        "动不动就和你吵架": "imgs/argue.jpg",
        "开心也好，吵闹也罢":"imgs/IMG20240116164935.jpg",
        "经过风风雨雨，我们一起走到了现在": "imgs/IMG20230801194031.jpg",
        "以及一直给我的爱与温暖": "imgs/hug.jpg",
        "你送的礼物我都很喜欢": "imgs/gift.jpg",
        "(每次读这封信都还是会很想哭)": "imgs/IMG20231128230238.jpg",
     //   "今天是你的生日": "imgs/大一生日.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "灯怎么关了？",
        play: "好安静呀",
        bannar_coming: "开始吧！",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "一封赛博信件",
    }
};
