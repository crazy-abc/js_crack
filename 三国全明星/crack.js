var crypto = require('crypto');

var appID = "3bc977b32336c3f50d06784ea48c7242"
var secret = "7a27e0c6a52e569803038f44ce57cdd6"

function get_sign(e,time) {
    console.log(e)
    let t = [], i = "";
    e.appid = appID;
    e.appsecret = secret;
    e.time = new Date().getTime();
    // e.time = time;
    for (let i in e) {
        t.push(i)
    }
    t.sort(function (e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
    });
    t.forEach(t => {
        i += t + "=" + e[t] + "&";
    });
    delete e.appid;
    delete e.appsecret;
    // e.sign = Laya.Browser.window.md5(i);
    var result = crypto.createHash('md5').update(i).digest("hex")

    console.log({sign: result, time: e.time})

    return {sign: result, time: e.time}
}

function countRoles(roles) {
    //计算武将的离线经验
    var e = {};
    e.roles = roles;

    class _ {
        static makeOneImgBtn(e, t, i, s) {
            s && (e.on(U.MOUSE_DOWN, null, function () {
                R.to(e, {
                    scaleX: .93,
                    scaleY: .93
                }, _.t);
            }), e.on(U.MOUSE_UP, null, function () {
                R.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, _.t);
            }), e.on(U.MOUSE_OUT, null, function () {
                R.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, _.t);
            })), e.on(U.MOUSE_UP, t, i);
        }

        static horizontalAlign(e, t, i) {
            let s = 0;
            for (var a = 0; a < e.numChildren; a++) {
                let t = e.getChildAt(a);
                t.visible && (s += t.width);
            }
            s += (e.numChildren - 1) * i, e.width = s;
            for (a = 0; a < e.numChildren; a++) {
                let n;
                if ((n = e.getChildAt(a)).visible) if (n.y = 0, 0 == a) switch (t) {
                    case 0:
                        n.x = 0;
                        break;

                    case 1:
                        n.x = .5 * -s;
                        break;

                    case 2:
                        n.x = -s;
                } else for (let t = a - 1; t >= 0; t--) {
                    let s = e.getChildAt(t);
                    if (s.visible) {
                        n.x = s.x + s.width + i;
                        break;
                    }
                }
            }
        }

        static parentConvert(e, t) {
            let i = _.localToGlobal(e), s = _.localToGlobal(t);
            e.removeSelf(), e.pos(i.x - s.x, i.y - s.y), t.addChild(e);
        }

        static localToGlobal(e) {
            let t = new M(e.pivotX, e.pivotY);
            return e.localToGlobal(t);
        }

        static getMoney(t, i, s) {
            let a = 0;
            t > 30 ? (t -= 30, a = 30) : (a = t, t = 0), e.bigTemp2.setByShortString(a + ""),
                Ds.I.money.biggerOrEqual(new BigUInt().setByShortString("99000")) ? us.I.maxMoney.visible = !0 : (us.I.flyJb(e.bigTemp2, i, s, a),
                    us.I.maxMoney.visible = !1), t > 0 && Laya.timer.once(300, this, function () {
                _.getMoney(t, i, s);
            });
        }

        static getDigits(e) {
            let t = 1, i = String(e).indexOf(".") + 1;
            String(e).length;
            for (let e = 0; e < 3; e++) t *= 10;
            return t;
        }

        static dateToLocal(e) {
            let t = e.getFullYear(), i = e.getMonth() + 1;
            i = i < 10 ? "0" + i : i;
            let s = e.getDate();
            s = s < 10 ? "0" + s : s;
            let a = e.getHours();
            a = a < 10 ? "0" + a : a;
            let n = e.getMinutes();
            n = n < 10 ? "0" + n : n;
            let o = e.getSeconds();
            return t + "-" + i + "-" + s + " " + a + ":" + n + ":" + (o = o < 10 ? "0" + o : o);
        }

        static formatTime(e = 0, t = 3) {
            var i, s = Math.floor(e / 3600);
            i = 0 == s ? "00" : s < 10 ? "0" + s : "" + s;
            var a, n, o = Math.floor((e - 3600 * s) / 60), l = Math.floor((e - 3600 * s) % 60);
            return a = 0 == o ? "00" : o < 10 ? "0" + o : "" + o, n = 0 == l ? "00" : l < 10 ? "0" + l : "" + l,
                3 == t ? i + ":" + a + ":" + n : 2 == t ? a + ":" + n : n;
        }

        static isRealNum(e) {
            return "number" == typeof e && !isNaN(e);
        }

        static getRoleStarLevel(e) {
            return e.skills.length > 0 ? e.level < 10 ? e.skills[0].level : e.level >= 10 && e.level < 30 ? e.skills[0].level + e.skills[1].level : e.skills[0].level + e.skills[1].level + e.skills[2].level : 0;
        }

        static accAdd(e, t) {
            var i, s, a, n;
            isNaN(e) && (e = 0), isNaN(t) && (t = 0), e = Number(e), t = Number(t);
            try {
                i = e.toString().split(".")[1].length;
            } catch (e) {
                i = 0;
            }
            try {
                s = t.toString().split(".")[1].length;
            } catch (e) {
                s = 0;
            }
            if (n = Math.abs(i - s), a = Math.pow(10, Math.max(i, s)), n > 0) {
                var o = Math.pow(10, n);
                i > s ? (e = Number(e.toString().replace(".", "")), t = Number(t.toString().replace(".", "")) * o) : (e = Number(e.toString().replace(".", "")) * o,
                    t = Number(t.toString().replace(".", "")));
            } else e = Number(e.toString().replace(".", "")), t = Number(t.toString().replace(".", ""));
            return (e + t) / a;
        }

        static frameAni(e, t, i, s, a, n = 40, o = !1, l = 1) {
            let h = new Laya.Animation();
            h.interval = n;
            let r = [];
            for (var d = 1; d <= t; d++) r.push(e + d + ".png");
            h.loadImages(r), h.loop = o, i.addChild(h), h.x = s, h.y = a, h.scaleX = l, h.scaleY = l,
                h.pivot(h.width * h.scaleX / 2, h.height * h.scaleY / 2), h.on(Laya.Event.COMPLETE, null, () => {
                h.stop(), h.removeSelf();
            }), h.play(0, o);
        }

        static canGive(e) {
            return e.Quality >= 4 && "317" != e.ID && "318" != e.ID;
        }
    }
    for (let t = 0; t < e.roles.length; t++) {
        let i = e.roles[t];
        i.id ? "319" != i.id && "320" != i.id && "321" != i.id ? (i.skills || (i.skills = []),
        (!i.state || i.state > 2) && (i.state = 1), i.onLineExp || (i.onLineExp = 0), i.stateYB || (i.stateYB = 0),
        i.sitIndex || (i.sitIndex = -1),
        i.x && !_.isRealNum(i.x) && (i.x = 0),
        i.y && !_.isRealNum(i.y) && (i.y = 0),
        i.levelStar || (i.levelStar = 0),
            i.level ? _.isRealNum(i.level) || (i.level = Number(i.level)) : i.level = 1) : (e.roles.splice(t, 1),
            t--) : (e.roles.splice(t, 1), t--);
    }

    return e.roles;
}



module.exports = {
    get_sign,
    countRoles
}

// var param = {
//     data: JSON.stringify({"openid":"oVqw85Em8FtWGLze00_6uqi9IjWs"})
// }
// sign = get_sign(param,1624804726326)

roles = [
        {
            'id': '1', 'stateYB': -1,
            'skills': [{'id': '36', 'level': 4}, {'id': '31', 'level': 3},
                {'id': '24', 'level': 3}], 'sitIndex': 7, 'state': 1,
            'level': 250, 'levelStar': 0, 'x': 319, 'y': 1271,
            'onLineExp': '0'
        }
        ]
console.log(countRoles(roles))