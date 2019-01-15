"use strict";
function searchXiaoJieJie(age) {
    return "\u627E\u5230\u4E86" + age + "\u5C81\u7684\u5C0F\u59D0\u59D0";
}
var age = 18;
var result = searchXiaoJieJie(age);
console.log(result);
function searchXiaoJieJie2(age, stature) {
    var yy = '';
    yy = "\u627E\u5230\u4E86" + age + "\u5C81";
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + "\u7684\u5C0F\u59D0\u59D0";
}
var result2 = searchXiaoJieJie2(22, '大长腿');
console.log(result2);
function searchXiaoJieJie3(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大胸'; }
    var yy = '';
    yy = "\u627E\u5230\u4E86" + age + "\u5C81";
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + "\u7684\u5C0F\u59D0\u59D0";
}
var result3 = searchXiaoJieJie3();
console.log(result3);
function searchXiaoJieJie4() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + "\u3001";
        }
    }
    yy = yy + "\u7684\u5C0F\u59D0\u59D0";
    return yy;
}
var result4 = searchXiaoJieJie4('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result4);
