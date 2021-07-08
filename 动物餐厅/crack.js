const jsdom = require("jsdom");
const md5 = require('md5-node');
const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
window = dom.window;
navigator = window.navigator;

window.__require = function e(t, i, n) {
    function a(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + s + "'");
                }
            }
            var h = i[s] = {
                exports: {}
            };
            t[s][0].call(h.exports, function (e) {
                return a(t[s][1][e] || e);
            }, h, h.exports, e, t, i, n);
        }
        return i[s].exports;
    }

    for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) a(n[s]);
    return a;
}({
    // CryptoJS: [ function(e, t, i) {
    //     "use strict";
    //     // cc._RF.push(t, "1201elX57dFfonDf7YGLdFO", "CryptoJS");
    //     var n = n || function(e, t) {
    //         var i = {}, n = i.lib = {}, a = function() {}, o = n.Base = {
    //             extend: function(e) {
    //                 a.prototype = this;
    //                 var t = new a();
    //                 return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
    //                     t.$super.init.apply(this, arguments);
    //                 }), t.init.prototype = t, t.$super = this, t;
    //             },
    //             create: function() {
    //                 var e = this.extend();
    //                 return e.init.apply(e, arguments), e;
    //             },
    //             init: function() {},
    //             mixIn: function(e) {
    //                 for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
    //                 e.hasOwnProperty("toString") && (this.toString = e.toString);
    //             },
    //             clone: function() {
    //                 return this.init.prototype.extend(this);
    //             }
    //         }, s = n.WordArray = o.extend({
    //             init: function(e, t) {
    //                 e = this.words = e || [], this.sigBytes = void 0 != t ? t : 4 * e.length;
    //             },
    //             toString: function(e) {
    //                 return (e || c).stringify(this);
    //             },
    //             concat: function(e) {
    //                 var t = this.words, i = e.words, n = this.sigBytes;
    //                 if (e = e.sigBytes, this.clamp(), n % 4) for (var a = 0; a < e; a++) t[n + a >>> 2] |= (i[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 24 - (n + a) % 4 * 8; else if (65535 < i.length) for (a = 0; a < e; a += 4) t[n + a >>> 2] = i[a >>> 2]; else t.push.apply(t, i);
    //                 return this.sigBytes += e, this;
    //             },
    //             clamp: function() {
    //                 var t = this.words, i = this.sigBytes;
    //                 t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8, t.length = e.ceil(i / 4);
    //             },
    //             clone: function() {
    //                 var e = o.clone.call(this);
    //                 return e.words = this.words.slice(0), e;
    //             },
    //             random: function(t) {
    //                 for (var i = [], n = 0; n < t; n += 4) i.push(4294967296 * e.random() | 0);
    //                 return new s.init(i, t);
    //             }
    //         }), r = i.enc = {}, c = r.Hex = {
    //             stringify: function(e) {
    //                 var t = e.words;
    //                 e = e.sigBytes;
    //                 for (var i = [], n = 0; n < e; n++) {
    //                     var a = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
    //                     i.push((a >>> 4).toString(16)), i.push((15 & a).toString(16));
    //                 }
    //                 return i.join("");
    //             },
    //             parse: function(e) {
    //                 for (var t = e.length, i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
    //                 return new s.init(i, t / 2);
    //             }
    //         }, l = r.Latin1 = {
    //             stringify: function(e) {
    //                 var t = e.words;
    //                 e = e.sigBytes;
    //                 for (var i = [], n = 0; n < e; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
    //                 return i.join("");
    //             },
    //             parse: function(e) {
    //                 for (var t = e.length, i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
    //                 return new s.init(i, t);
    //             }
    //         }, h = r.Utf8 = {
    //             stringify: function(e) {
    //                 try {
    //                     return decodeURIComponent(escape(l.stringify(e)));
    //                 } catch (e) {
    //                     throw Error("Malformed UTF-8 data");
    //                 }
    //             },
    //             parse: function(e) {
    //                 return l.parse(unescape(encodeURIComponent(e)));
    //             }
    //         }, u = n.BufferedBlockAlgorithm = o.extend({
    //             reset: function() {
    //                 this._data = new s.init(), this._nDataBytes = 0;
    //             },
    //             _append: function(e) {
    //                 "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
    //             },
    //             _process: function(t) {
    //                 var i = this._data, n = i.words, a = i.sigBytes, o = this.blockSize, r = a / (4 * o);
    //                 if (t = (r = t ? e.ceil(r) : e.max((0 | r) - this._minBufferSize, 0)) * o, a = e.min(4 * t, a),
    //                 t) {
    //                     for (var c = 0; c < t; c += o) this._doProcessBlock(n, c);
    //                     c = n.splice(0, t), i.sigBytes -= a;
    //                 }
    //                 return new s.init(c, a);
    //             },
    //             clone: function() {
    //                 var e = o.clone.call(this);
    //                 return e._data = this._data.clone(), e;
    //             },
    //             _minBufferSize: 0
    //         });
    //         n.Hasher = u.extend({
    //             cfg: o.extend(),
    //             init: function(e) {
    //                 this.cfg = this.cfg.extend(e), this.reset();
    //             },
    //             reset: function() {
    //                 u.reset.call(this), this._doReset();
    //             },
    //             update: function(e) {
    //                 return this._append(e), this._process(), this;
    //             },
    //             finalize: function(e) {
    //                 return e && this._append(e), this._doFinalize();
    //             },
    //             blockSize: 16,
    //             _createHelper: function(e) {
    //                 return function(t, i) {
    //                     return new e.init(i).finalize(t);
    //                 };
    //             },
    //             _createHmacHelper: function(e) {
    //                 return function(t, i) {
    //                     return new d.HMAC.init(e, i).finalize(t);
    //                 };
    //             }
    //         });
    //         var d = i.algo = {};
    //         return i;
    //     }(Math);
    //     (function() {
    //         var e = n, t = e.lib.WordArray;
    //         e.enc.Base64 = {
    //             stringify: function(e) {
    //                 var t = e.words, i = e.sigBytes, n = this._map;
    //                 e.clamp(), e = [];
    //                 for (var a = 0; a < i; a += 3) for (var o = (t[a >>> 2] >>> 24 - a % 4 * 8 & 255) << 16 | (t[a + 1 >>> 2] >>> 24 - (a + 1) % 4 * 8 & 255) << 8 | t[a + 2 >>> 2] >>> 24 - (a + 2) % 4 * 8 & 255, s = 0; 4 > s && a + .75 * s < i; s++) e.push(n.charAt(o >>> 6 * (3 - s) & 63));
    //                 if (t = n.charAt(64)) for (;e.length % 4; ) e.push(t);
    //                 return e.join("");
    //             },
    //             parse: function(e) {
    //                 var i = e.length, n = this._map;
    //                 (a = n.charAt(64)) && (-1 != (a = e.indexOf(a)) && (i = a));
    //                 for (var a = [], o = 0, s = 0; s < i; s++) if (s % 4) {
    //                     var r = n.indexOf(e.charAt(s - 1)) << s % 4 * 2, c = n.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
    //                     a[o >>> 2] |= (r | c) << 24 - o % 4 * 8, o++;
    //                 }
    //                 return t.create(a, o);
    //             },
    //             _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    //         };
    //     })(), function(e) {
    //         function t(e, t, i, n, a, o, s) {
    //             return ((e = e + (t & i | ~t & n) + a + s) << o | e >>> 32 - o) + t;
    //         }
    //         function i(e, t, i, n, a, o, s) {
    //             return ((e = e + (t & n | i & ~n) + a + s) << o | e >>> 32 - o) + t;
    //         }
    //         function a(e, t, i, n, a, o, s) {
    //             return ((e = e + (t ^ i ^ n) + a + s) << o | e >>> 32 - o) + t;
    //         }
    //         function o(e, t, i, n, a, o, s) {
    //             return ((e = e + (i ^ (t | ~n)) + a + s) << o | e >>> 32 - o) + t;
    //         }
    //         for (var s = n, r = (l = s.lib).WordArray, c = l.Hasher, l = s.algo, h = [], u = 0; 64 > u; u++) h[u] = 4294967296 * e.abs(e.sin(u + 1)) | 0;
    //         l = l.MD5 = c.extend({
    //             _doReset: function() {
    //                 this._hash = new r.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
    //             },
    //             _doProcessBlock: function(e, n) {
    //                 for (var s = 0; 16 > s; s++) {
    //                     var r = e[u = n + s];
    //                     e[u] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
    //                 }
    //                 s = this._hash.words;
    //                 var c, l, u = e[n + 0], d = (r = e[n + 1], e[n + 2]), f = e[n + 3], g = e[n + 4], p = e[n + 5], m = e[n + 6], y = e[n + 7], v = e[n + 8], b = e[n + 9], _ = e[n + 10], w = e[n + 11], S = e[n + 12], T = e[n + 13], k = e[n + 14], D = e[n + 15], x = s[0], I = o(I = o(I = o(I = o(I = a(I = a(I = a(I = a(I = i(I = i(I = i(I = i(I = t(I = t(I = t(I = t(I = s[1], l = t(l = s[2], c = t(c = s[3], x = t(x, I, l, c, u, 7, h[0]), I, l, r, 12, h[1]), x, I, d, 17, h[2]), c, x, f, 22, h[3]), l = t(l, c = t(c, x = t(x, I, l, c, g, 7, h[4]), I, l, p, 12, h[5]), x, I, m, 17, h[6]), c, x, y, 22, h[7]), l = t(l, c = t(c, x = t(x, I, l, c, v, 7, h[8]), I, l, b, 12, h[9]), x, I, _, 17, h[10]), c, x, w, 22, h[11]), l = t(l, c = t(c, x = t(x, I, l, c, S, 7, h[12]), I, l, T, 12, h[13]), x, I, k, 17, h[14]), c, x, D, 22, h[15]), l = i(l, c = i(c, x = i(x, I, l, c, r, 5, h[16]), I, l, m, 9, h[17]), x, I, w, 14, h[18]), c, x, u, 20, h[19]), l = i(l, c = i(c, x = i(x, I, l, c, p, 5, h[20]), I, l, _, 9, h[21]), x, I, D, 14, h[22]), c, x, g, 20, h[23]), l = i(l, c = i(c, x = i(x, I, l, c, b, 5, h[24]), I, l, k, 9, h[25]), x, I, f, 14, h[26]), c, x, v, 20, h[27]), l = i(l, c = i(c, x = i(x, I, l, c, T, 5, h[28]), I, l, d, 9, h[29]), x, I, y, 14, h[30]), c, x, S, 20, h[31]), l = a(l, c = a(c, x = a(x, I, l, c, p, 4, h[32]), I, l, v, 11, h[33]), x, I, w, 16, h[34]), c, x, k, 23, h[35]), l = a(l, c = a(c, x = a(x, I, l, c, r, 4, h[36]), I, l, g, 11, h[37]), x, I, y, 16, h[38]), c, x, _, 23, h[39]), l = a(l, c = a(c, x = a(x, I, l, c, T, 4, h[40]), I, l, u, 11, h[41]), x, I, f, 16, h[42]), c, x, m, 23, h[43]), l = a(l, c = a(c, x = a(x, I, l, c, b, 4, h[44]), I, l, S, 11, h[45]), x, I, D, 16, h[46]), c, x, d, 23, h[47]), l = o(l, c = o(c, x = o(x, I, l, c, u, 6, h[48]), I, l, y, 10, h[49]), x, I, k, 15, h[50]), c, x, p, 21, h[51]), l = o(l, c = o(c, x = o(x, I, l, c, S, 6, h[52]), I, l, f, 10, h[53]), x, I, _, 15, h[54]), c, x, r, 21, h[55]), l = o(l, c = o(c, x = o(x, I, l, c, v, 6, h[56]), I, l, D, 10, h[57]), x, I, m, 15, h[58]), c, x, T, 21, h[59]), l = o(l, c = o(c, x = o(x, I, l, c, g, 6, h[60]), I, l, w, 10, h[61]), x, I, d, 15, h[62]), c, x, b, 21, h[63]);
    //                 s[0] = s[0] + x | 0, s[1] = s[1] + I | 0, s[2] = s[2] + l | 0, s[3] = s[3] + c | 0;
    //             },
    //             _doFinalize: function() {
    //                 var t = this._data, i = t.words, n = 8 * this._nDataBytes, a = 8 * t.sigBytes;
    //                 i[a >>> 5] |= 128 << 24 - a % 32;
    //                 var o = e.floor(n / 4294967296);
    //                 for (i[15 + (a + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
    //                 i[14 + (a + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
    //                 t.sigBytes = 4 * (i.length + 1), this._process(), i = (t = this._hash).words, n = 0; 4 > n; n++) a = i[n],
    //                 i[n] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
    //                 return t;
    //             },
    //             clone: function() {
    //                 var e = c.clone.call(this);
    //                 return e._hash = this._hash.clone(), e;
    //             }
    //         }), s.MD5 = c._createHelper(l), s.HmacMD5 = c._createHmacHelper(l);
    //     }(Math), function() {
    //         var e, t = n, i = (e = t.lib).Base, a = e.WordArray, o = (e = t.algo).EvpKDF = i.extend({
    //             cfg: i.extend({
    //                 keySize: 4,
    //                 hasher: e.MD5,
    //                 iterations: 1
    //             }),
    //             init: function(e) {
    //                 this.cfg = this.cfg.extend(e);
    //             },
    //             compute: function(e, t) {
    //                 for (var i = (r = this.cfg).hasher.create(), n = a.create(), o = n.words, s = r.keySize, r = r.iterations; o.length < s; ) {
    //                     c && i.update(c);
    //                     var c = i.update(e).finalize(t);
    //                     i.reset();
    //                     for (var l = 1; l < r; l++) c = i.finalize(c), i.reset();
    //                     n.concat(c);
    //                 }
    //                 return n.sigBytes = 4 * s, n;
    //             }
    //         });
    //         t.EvpKDF = function(e, t, i) {
    //             return o.create(i).compute(e, t);
    //         };
    //     }(), n.lib.Cipher || function(e) {
    //         var t = (g = n).lib, i = t.Base, a = t.WordArray, o = t.BufferedBlockAlgorithm, s = g.enc.Base64, r = g.algo.EvpKDF, c = t.Cipher = o.extend({
    //             cfg: i.extend(),
    //             createEncryptor: function(e, t) {
    //                 return this.create(this._ENC_XFORM_MODE, e, t);
    //             },
    //             createDecryptor: function(e, t) {
    //                 return this.create(this._DEC_XFORM_MODE, e, t);
    //             },
    //             init: function(e, t, i) {
    //                 this.cfg = this.cfg.extend(i), this._xformMode = e, this._key = t, this.reset();
    //             },
    //             reset: function() {
    //                 o.reset.call(this), this._doReset();
    //             },
    //             process: function(e) {
    //                 return this._append(e), this._process();
    //             },
    //             finalize: function(e) {
    //                 return e && this._append(e), this._doFinalize();
    //             },
    //             keySize: 4,
    //             ivSize: 4,
    //             _ENC_XFORM_MODE: 1,
    //             _DEC_XFORM_MODE: 2,
    //             _createHelper: function(e) {
    //                 return {
    //                     encrypt: function(t, i, n) {
    //                         return ("string" == typeof i ? p : f).encrypt(e, t, i, n);
    //                     },
    //                     decrypt: function(t, i, n) {
    //                         return ("string" == typeof i ? p : f).decrypt(e, t, i, n);
    //                     }
    //                 };
    //             }
    //         });
    //         t.StreamCipher = c.extend({
    //             _doFinalize: function() {
    //                 return this._process(!0);
    //             },
    //             blockSize: 1
    //         });
    //         var l = g.mode = {}, h = function(e, t, i) {
    //             var n = this._iv;
    //             n ? this._iv = void 0 : n = this._prevBlock;
    //             for (var a = 0; a < i; a++) e[t + a] ^= n[a];
    //         }, u = (t.BlockCipherMode = i.extend({
    //             createEncryptor: function(e, t) {
    //                 return this.Encryptor.create(e, t);
    //             },
    //             createDecryptor: function(e, t) {
    //                 return this.Decryptor.create(e, t);
    //             },
    //             init: function(e, t) {
    //                 this._cipher = e, this._iv = t;
    //             }
    //         })).extend();
    //         u.Encryptor = u.extend({
    //             processBlock: function(e, t) {
    //                 var i = this._cipher, n = i.blockSize;
    //                 h.call(this, e, t, n), i.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n);
    //             }
    //         }), u.Decryptor = u.extend({
    //             processBlock: function(e, t) {
    //                 var i = this._cipher, n = i.blockSize, a = e.slice(t, t + n);
    //                 i.decryptBlock(e, t), h.call(this, e, t, n), this._prevBlock = a;
    //             }
    //         }), l = l.CBC = u, u = (g.pad = {}).Pkcs7 = {
    //             pad: function(e, t) {
    //                 for (var i, n = (i = (i = 4 * t) - e.sigBytes % i) << 24 | i << 16 | i << 8 | i, o = [], s = 0; s < i; s += 4) o.push(n);
    //                 i = a.create(o, i), e.concat(i);
    //             },
    //             unpad: function(e) {
    //                 e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
    //             }
    //         }, t.BlockCipher = c.extend({
    //             cfg: c.cfg.extend({
    //                 mode: l,
    //                 padding: u
    //             }),
    //             reset: function() {
    //                 c.reset.call(this);
    //                 var e = (t = this.cfg).iv, t = t.mode;
    //                 if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor; else i = t.createDecryptor,
    //                 this._minBufferSize = 1;
    //                 this._mode = i.call(t, this, e && e.words);
    //             },
    //             _doProcessBlock: function(e, t) {
    //                 this._mode.processBlock(e, t);
    //             },
    //             _doFinalize: function() {
    //                 var e = this.cfg.padding;
    //                 if (this._xformMode == this._ENC_XFORM_MODE) {
    //                     e.pad(this._data, this.blockSize);
    //                     var t = this._process(!0);
    //                 } else t = this._process(!0), e.unpad(t);
    //                 return t;
    //             },
    //             blockSize: 4
    //         });
    //         var d = t.CipherParams = i.extend({
    //             init: function(e) {
    //                 this.mixIn(e);
    //             },
    //             toString: function(e) {
    //                 return (e || this.formatter).stringify(this);
    //             }
    //         }), f = (l = (g.format = {}).OpenSSL = {
    //             stringify: function(e) {
    //                 var t = e.ciphertext;
    //                 return ((e = e.salt) ? a.create([ 1398893684, 1701076831 ]).concat(e).concat(t) : t).toString(s);
    //             },
    //             parse: function(e) {
    //                 var t = (e = s.parse(e)).words;
    //                 if (1398893684 == t[0] && 1701076831 == t[1]) {
    //                     var i = a.create(t.slice(2, 4));
    //                     t.splice(0, 4), e.sigBytes -= 16;
    //                 }
    //                 return d.create({
    //                     ciphertext: e,
    //                     salt: i
    //                 });
    //             }
    //         }, t.SerializableCipher = i.extend({
    //             cfg: i.extend({
    //                 format: l
    //             }),
    //             encrypt: function(e, t, i, n) {
    //                 n = this.cfg.extend(n);
    //                 var a = e.createEncryptor(i, n);
    //                 return t = a.finalize(t), a = a.cfg, d.create({
    //                     ciphertext: t,
    //                     key: i,
    //                     iv: a.iv,
    //                     algorithm: e,
    //                     mode: a.mode,
    //                     padding: a.padding,
    //                     blockSize: e.blockSize,
    //                     formatter: n.format
    //                 });
    //             },
    //             decrypt: function(e, t, i, n) {
    //                 return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(i, n).finalize(t.ciphertext);
    //             },
    //             _parse: function(e, t) {
    //                 return "string" == typeof e ? t.parse(e, this) : e;
    //             }
    //         })), g = (g.kdf = {}).OpenSSL = {
    //             execute: function(e, t, i, n) {
    //                 return n || (n = a.random(8)), e = r.create({
    //                     keySize: t + i
    //                 }).compute(e, n), i = a.create(e.words.slice(t), 4 * i), e.sigBytes = 4 * t, d.create({
    //                     key: e,
    //                     iv: i,
    //                     salt: n
    //                 });
    //             }
    //         }, p = t.PasswordBasedCipher = f.extend({
    //             cfg: f.cfg.extend({
    //                 kdf: g
    //             }),
    //             encrypt: function(e, t, i, n) {
    //                 return i = (n = this.cfg.extend(n)).kdf.execute(i, e.keySize, e.ivSize), n.iv = i.iv,
    //                 (e = f.encrypt.call(this, e, t, i.key, n)).mixIn(i), e;
    //             },
    //             decrypt: function(e, t, i, n) {
    //                 return n = this.cfg.extend(n), t = this._parse(t, n.format), i = n.kdf.execute(i, e.keySize, e.ivSize, t.salt),
    //                 n.iv = i.iv, f.decrypt.call(this, e, t, i.key, n);
    //             }
    //         });
    //     }(), function() {
    //         for (var e = n, t = e.lib.BlockCipher, i = e.algo, a = [], o = [], s = [], r = [], c = [], l = [], h = [], u = [], d = [], f = [], g = [], p = 0; 256 > p; p++) g[p] = 128 > p ? p << 1 : p << 1 ^ 283;
    //         var m = 0, y = 0;
    //         for (p = 0; 256 > p; p++) {
    //             var v = (v = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4) >>> 8 ^ 255 & v ^ 99;
    //             a[m] = v, o[v] = m;
    //             var b = g[m], _ = g[b], w = g[_], S = 257 * g[v] ^ 16843008 * v;
    //             s[m] = S << 24 | S >>> 8, r[m] = S << 16 | S >>> 16, c[m] = S << 8 | S >>> 24, l[m] = S,
    //             S = 16843009 * w ^ 65537 * _ ^ 257 * b ^ 16843008 * m, h[v] = S << 24 | S >>> 8,
    //             u[v] = S << 16 | S >>> 16, d[v] = S << 8 | S >>> 24, f[v] = S, m ? (m = b ^ g[g[g[w ^ b]]],
    //             y ^= g[g[y]]) : m = y = 1;
    //         }
    //         var T = [ 0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54 ];
    //         i = i.AES = t.extend({
    //             _doReset: function() {
    //                 for (var e = (i = this._key).words, t = i.sigBytes / 4, i = 4 * ((this._nRounds = t + 6) + 1), n = this._keySchedule = [], o = 0; o < i; o++) if (o < t) n[o] = e[o]; else {
    //                     var s = n[o - 1];
    //                     o % t ? 6 < t && 4 == o % t && (s = a[s >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & s]) : (s = a[(s = s << 8 | s >>> 24) >>> 24] << 24 | a[s >>> 16 & 255] << 16 | a[s >>> 8 & 255] << 8 | a[255 & s],
    //                     s ^= T[o / t | 0] << 24), n[o] = n[o - t] ^ s;
    //                 }
    //                 for (e = this._invKeySchedule = [], t = 0; t < i; t++) o = i - t, s = t % 4 ? n[o] : n[o - 4],
    //                 e[t] = 4 > t || 4 >= o ? s : h[a[s >>> 24]] ^ u[a[s >>> 16 & 255]] ^ d[a[s >>> 8 & 255]] ^ f[a[255 & s]];
    //             },
    //             encryptBlock: function(e, t) {
    //                 this._doCryptBlock(e, t, this._keySchedule, s, r, c, l, a);
    //             },
    //             decryptBlock: function(e, t) {
    //                 var i = e[t + 1];
    //                 e[t + 1] = e[t + 3], e[t + 3] = i, this._doCryptBlock(e, t, this._invKeySchedule, h, u, d, f, o),
    //                 i = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = i;
    //             },
    //             _doCryptBlock: function(e, t, i, n, a, o, s, r) {
    //                 for (var c = this._nRounds, l = e[t] ^ i[0], h = e[t + 1] ^ i[1], u = e[t + 2] ^ i[2], d = e[t + 3] ^ i[3], f = 4, g = 1; g < c; g++) {
    //                     var p = n[l >>> 24] ^ a[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & d] ^ i[f++], m = n[h >>> 24] ^ a[u >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[255 & l] ^ i[f++], y = n[u >>> 24] ^ a[d >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & h] ^ i[f++];
    //                     d = n[d >>> 24] ^ a[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & u] ^ i[f++], l = p,
    //                     h = m, u = y;
    //                 }
    //                 p = (r[l >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[u >>> 8 & 255] << 8 | r[255 & d]) ^ i[f++],
    //                 m = (r[h >>> 24] << 24 | r[u >>> 16 & 255] << 16 | r[d >>> 8 & 255] << 8 | r[255 & l]) ^ i[f++],
    //                 y = (r[u >>> 24] << 24 | r[d >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & h]) ^ i[f++],
    //                 d = (r[d >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & u]) ^ i[f++],
    //                 e[t] = p, e[t + 1] = m, e[t + 2] = y, e[t + 3] = d;
    //             },
    //             keySize: 8
    //         });
    //         e.AES = t._createHelper(i);
    //     }(), n.pad.ZeroPadding = {
    //         pad: function(e, t) {
    //             var i = 4 * t;
    //             e.clamp(), e.sigBytes += i - (e.sigBytes % i || i);
    //         },
    //         unpad: function(e) {
    //             for (var t = e.words, i = e.sigBytes - 1; !(t[i >>> 2] >>> 24 - i % 4 * 8 & 255); ) i--;
    //             e.sigBytes = i + 1;
    //         }
    //     }, t.exports = n
    //         // cc._RF.pop()
    //     ;
    // }, {} ],
    jsencrypt: [function (e, t, i) {
        "use strict";
        // cc._RF.push(t, "69d44s9YvhOC6BkdgWkxgms", "jsencrypt");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        (function (e, a) {
            "object" === (void 0 === i ? "undefined" : n(i)) && void 0 !== t ? a(i) : "function" == typeof define && define.amd ? define(["exports"], a) : a(e.JSEncrypt = {});
        })(void 0, function (e) {
            var t = "0123456789abcdefghijklmnopqrstuvwxyz";

            function i(e) {
                return t.charAt(e);
            }

            function n(e, t) {
                return e & t;
            }

            function a(e, t) {
                return e | t;
            }

            function o(e, t) {
                return e ^ t;
            }

            function s(e, t) {
                return e & ~t;
            }

            function r(e) {
                if (0 == e) return -1;
                var t = 0;
                return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8),
                0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t,
                    t;
            }

            function c(e) {
                for (var t = 0; 0 != e;) e &= e - 1, ++t;
                return t;
            }

            var l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = "=";

            function u(e) {
                var t, i, n = "";
                for (t = 0; t + 3 <= e.length; t += 3) i = parseInt(e.substring(t, t + 3), 16),
                    n += l.charAt(i >> 6) + l.charAt(63 & i);
                for (t + 1 == e.length ? (i = parseInt(e.substring(t, t + 1), 16), n += l.charAt(i << 2)) : t + 2 == e.length && (i = parseInt(e.substring(t, t + 2), 16),
                    n += l.charAt(i >> 2) + l.charAt((3 & i) << 4)); (3 & n.length) > 0;) n += h;
                return n;
            }

            function d(e) {
                var t, n = "", a = 0, o = 0;
                for (t = 0; t < e.length && e.charAt(t) != h; ++t) {
                    var s = l.indexOf(e.charAt(t));
                    s < 0 || (0 == a ? (n += i(s >> 2), o = 3 & s, a = 1) : 1 == a ? (n += i(o << 2 | s >> 4),
                        o = 15 & s, a = 2) : 2 == a ? (n += i(o), n += i(s >> 2), o = 3 & s, a = 3) : (n += i(o << 2 | s >> 4),
                        n += i(15 & s), a = 0));
                }
                return 1 == a && (n += i(o << 2)), n;
            }

            var f, g = function (e, t) {
                return (g = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, t) {
                    e.__proto__ = t;
                } || function (e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                })(e, t);
            };

            function p(e, t) {
                function i() {
                    this.constructor = e;
                }

                g(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype,
                    new i());
            }

            var m, y = function (e) {
                    var t;
                    if (void 0 === f) {
                        var i = "0123456789ABCDEF", n = " \f\n\r\t \u2028\u2029";
                        for (f = {}, t = 0; t < 16; ++t) f[i.charAt(t)] = t;
                        for (i = i.toLowerCase(), t = 10; t < 16; ++t) f[i.charAt(t)] = t;
                        for (t = 0; t < n.length; ++t) f[n.charAt(t)] = -1;
                    }
                    var a = [], o = 0, s = 0;
                    for (t = 0; t < e.length; ++t) {
                        var r = e.charAt(t);
                        if ("=" == r) break;
                        if (-1 != (r = f[r])) {
                            if (void 0 === r) throw new Error("Illegal character at offset " + t);
                            o |= r, ++s >= 2 ? (a[a.length] = o, o = 0, s = 0) : o <<= 4;
                        }
                    }
                    if (s) throw new Error("Hex encoding incomplete: 4 bits missing");
                    return a;
                }, v = {
                    decode: function (e) {
                        var t;
                        if (void 0 === m) {
                            var i = "= \f\n\r\t \u2028\u2029";
                            for (m = Object.create(null), t = 0; t < 64; ++t) m["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)] = t;
                            for (t = 0; t < i.length; ++t) m[i.charAt(t)] = -1;
                        }
                        var n = [], a = 0, o = 0;
                        for (t = 0; t < e.length; ++t) {
                            var s = e.charAt(t);
                            if ("=" == s) break;
                            if (-1 != (s = m[s])) {
                                if (void 0 === s) throw new Error("Illegal character at offset " + t);
                                a |= s, ++o >= 4 ? (n[n.length] = a >> 16, n[n.length] = a >> 8 & 255, n[n.length] = 255 & a,
                                    a = 0, o = 0) : a <<= 6;
                            }
                        }
                        switch (o) {
                            case 1:
                                throw new Error("Base64 encoding incomplete: at least 2 bits missing");

                            case 2:
                                n[n.length] = a >> 10;
                                break;

                            case 3:
                                n[n.length] = a >> 16, n[n.length] = a >> 8 & 255;
                        }
                        return n;
                    },
                    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                    unarmor: function (e) {
                        var t = v.re.exec(e);
                        if (t) if (t[1]) e = t[1]; else {
                            if (!t[2]) throw new Error("RegExp out of sync");
                            e = t[2];
                        }
                        return v.decode(e);
                    }
                }, b = function () {
                    function e(e) {
                        this.buf = [+e || 0];
                    }

                    return e.prototype.mulAdd = function (e, t) {
                        var i, n, a = this.buf, o = a.length;
                        for (i = 0; i < o; ++i) (n = a[i] * e + t) < 1e13 ? t = 0 : n -= 1e13 * (t = 0 | n / 1e13),
                            a[i] = n;
                        t > 0 && (a[i] = t);
                    }, e.prototype.sub = function (e) {
                        var t, i, n = this.buf, a = n.length;
                        for (t = 0; t < a; ++t) (i = n[t] - e) < 0 ? (i += 1e13, e = 1) : e = 0, n[t] = i;
                        for (; 0 === n[n.length - 1];) n.pop();
                    }, e.prototype.toString = function (e) {
                        if (10 != (e || 10)) throw new Error("only base 10 is supported");
                        for (var t = this.buf, i = t[t.length - 1].toString(), n = t.length - 2; n >= 0; --n) i += (1e13 + t[n]).toString().substring(1);
                        return i;
                    }, e.prototype.valueOf = function () {
                        for (var e = this.buf, t = 0, i = e.length - 1; i >= 0; --i) t = 1e13 * t + e[i];
                        return t;
                    }, e.prototype.simplify = function () {
                        var e = this.buf;
                        return 1 == e.length ? e[0] : this;
                    }, e;
                }(), _ = "…",
                w = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                S = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

            function T(e, t) {
                return e.length > t && (e = e.substring(0, t) + _), e;
            }

            var k, D = function () {
                    function e(t, i) {
                        this.hexDigits = "0123456789ABCDEF", t instanceof e ? (this.enc = t.enc, this.pos = t.pos) : (this.enc = t,
                            this.pos = i);
                    }

                    return e.prototype.get = function (e) {
                        if (void 0 === e && (e = this.pos++), e >= this.enc.length) throw new Error("Requesting byte offset " + e + " on a stream of length " + this.enc.length);
                        return "string" == typeof this.enc ? this.enc.charCodeAt(e) : this.enc[e];
                    }, e.prototype.hexByte = function (e) {
                        return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e);
                    }, e.prototype.hexDump = function (e, t, i) {
                        for (var n = "", a = e; a < t; ++a) if (n += this.hexByte(this.get(a)), !0 !== i) switch (15 & a) {
                            case 7:
                                n += "  ";
                                break;

                            case 15:
                                n += "\n";
                                break;

                            default:
                                n += " ";
                        }
                        return n;
                    }, e.prototype.isASCII = function (e, t) {
                        for (var i = e; i < t; ++i) {
                            var n = this.get(i);
                            if (n < 32 || n > 176) return !1;
                        }
                        return !0;
                    }, e.prototype.parseStringISO = function (e, t) {
                        for (var i = "", n = e; n < t; ++n) i += String.fromCharCode(this.get(n));
                        return i;
                    }, e.prototype.parseStringUTF = function (e, t) {
                        for (var i = "", n = e; n < t;) {
                            var a = this.get(n++);
                            i += a < 128 ? String.fromCharCode(a) : a > 191 && a < 224 ? String.fromCharCode((31 & a) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & a) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++));
                        }
                        return i;
                    }, e.prototype.parseStringBMP = function (e, t) {
                        for (var i, n, a = "", o = e; o < t;) i = this.get(o++), n = this.get(o++), a += String.fromCharCode(i << 8 | n);
                        return a;
                    }, e.prototype.parseTime = function (e, t, i) {
                        var n = this.parseStringISO(e, t), a = (i ? w : S).exec(n);
                        return a ? (i && (a[1] = +a[1], a[1] += +a[1] < 70 ? 2e3 : 1900), n = a[1] + "-" + a[2] + "-" + a[3] + " " + a[4],
                        a[5] && (n += ":" + a[5], a[6] && (n += ":" + a[6], a[7] && (n += "." + a[7]))),
                        a[8] && (n += " UTC", "Z" != a[8] && (n += a[8], a[9] && (n += ":" + a[9]))), n) : "Unrecognized time: " + n;
                    }, e.prototype.parseInteger = function (e, t) {
                        for (var i, n = this.get(e), a = n > 127, o = a ? 255 : 0, s = ""; n == o && ++e < t;) n = this.get(e);
                        if (0 === (i = t - e)) return a ? -1 : 0;
                        if (i > 4) {
                            for (s = n, i <<= 3; 0 == (128 & (+s ^ o));) s = +s << 1, --i;
                            s = "(" + i + " bit)\n";
                        }
                        a && (n -= 256);
                        for (var r = new b(n), c = e + 1; c < t; ++c) r.mulAdd(256, this.get(c));
                        return s + r.toString();
                    }, e.prototype.parseBitString = function (e, t, i) {
                        for (var n = this.get(e), a = "(" + ((t - e - 1 << 3) - n) + " bit)\n", o = "", s = e + 1; s < t; ++s) {
                            for (var r = this.get(s), c = s == t - 1 ? n : 0, l = 7; l >= c; --l) o += r >> l & 1 ? "1" : "0";
                            if (o.length > i) return a + T(o, i);
                        }
                        return a + o;
                    }, e.prototype.parseOctetString = function (e, t, i) {
                        if (this.isASCII(e, t)) return T(this.parseStringISO(e, t), i);
                        var n = t - e, a = "(" + n + " byte)\n";
                        n > (i /= 2) && (t = e + i);
                        for (var o = e; o < t; ++o) a += this.hexByte(this.get(o));
                        return n > i && (a += _), a;
                    }, e.prototype.parseOID = function (e, t, i) {
                        for (var n = "", a = new b(), o = 0, s = e; s < t; ++s) {
                            var r = this.get(s);
                            if (a.mulAdd(128, 127 & r), o += 7, !(128 & r)) {
                                if ("" === n) if ((a = a.simplify()) instanceof b) a.sub(80), n = "2." + a.toString(); else {
                                    var c = a < 80 ? a < 40 ? 0 : 1 : 2;
                                    n = c + "." + (a - 40 * c);
                                } else n += "." + a.toString();
                                if (n.length > i) return T(n, i);
                                a = new b(), o = 0;
                            }
                        }
                        return o > 0 && (n += ".incomplete"), n;
                    }, e;
                }(), x = function () {
                    function e(e, t, i, n, a) {
                        if (!(n instanceof I)) throw new Error("Invalid tag value.");
                        this.stream = e, this.header = t, this.length = i, this.tag = n, this.sub = a;
                    }

                    return e.prototype.typeName = function () {
                        switch (this.tag.tagClass) {
                            case 0:
                                switch (this.tag.tagNumber) {
                                    case 0:
                                        return "EOC";

                                    case 1:
                                        return "BOOLEAN";

                                    case 2:
                                        return "INTEGER";

                                    case 3:
                                        return "BIT_STRING";

                                    case 4:
                                        return "OCTET_STRING";

                                    case 5:
                                        return "NULL";

                                    case 6:
                                        return "OBJECT_IDENTIFIER";

                                    case 7:
                                        return "ObjectDescriptor";

                                    case 8:
                                        return "EXTERNAL";

                                    case 9:
                                        return "REAL";

                                    case 10:
                                        return "ENUMERATED";

                                    case 11:
                                        return "EMBEDDED_PDV";

                                    case 12:
                                        return "UTF8String";

                                    case 16:
                                        return "SEQUENCE";

                                    case 17:
                                        return "SET";

                                    case 18:
                                        return "NumericString";

                                    case 19:
                                        return "PrintableString";

                                    case 20:
                                        return "TeletexString";

                                    case 21:
                                        return "VideotexString";

                                    case 22:
                                        return "IA5String";

                                    case 23:
                                        return "UTCTime";

                                    case 24:
                                        return "GeneralizedTime";

                                    case 25:
                                        return "GraphicString";

                                    case 26:
                                        return "VisibleString";

                                    case 27:
                                        return "GeneralString";

                                    case 28:
                                        return "UniversalString";

                                    case 30:
                                        return "BMPString";
                                }
                                return "Universal_" + this.tag.tagNumber.toString();

                            case 1:
                                return "Application_" + this.tag.tagNumber.toString();

                            case 2:
                                return "[" + this.tag.tagNumber.toString() + "]";

                            case 3:
                                return "Private_" + this.tag.tagNumber.toString();
                        }
                    }, e.prototype.content = function (e) {
                        if (void 0 === this.tag) return null;
                        void 0 === e && (e = 1 / 0);
                        var t = this.posContent(), i = Math.abs(this.length);
                        if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + i, e);
                        switch (this.tag.tagNumber) {
                            case 1:
                                return 0 === this.stream.get(t) ? "false" : "true";

                            case 2:
                                return this.stream.parseInteger(t, t + i);

                            case 3:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(t, t + i, e);

                            case 4:
                                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + i, e);

                            case 6:
                                return this.stream.parseOID(t, t + i, e);

                            case 16:
                            case 17:
                                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";

                            case 12:
                                return T(this.stream.parseStringUTF(t, t + i), e);

                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 26:
                                return T(this.stream.parseStringISO(t, t + i), e);

                            case 30:
                                return T(this.stream.parseStringBMP(t, t + i), e);

                            case 23:
                            case 24:
                                return this.stream.parseTime(t, t + i, 23 == this.tag.tagNumber);
                        }
                        return null;
                    }, e.prototype.toString = function () {
                        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]";
                    }, e.prototype.toPrettyString = function (e) {
                        void 0 === e && (e = "");
                        var t = e + this.typeName() + " @" + this.stream.pos;
                        if (this.length >= 0 && (t += "+"), t += this.length, this.tag.tagConstructed ? t += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (t += " (encapsulates)"),
                            t += "\n", null !== this.sub) {
                            e += "  ";
                            for (var i = 0, n = this.sub.length; i < n; ++i) t += this.sub[i].toPrettyString(e);
                        }
                        return t;
                    }, e.prototype.posStart = function () {
                        return this.stream.pos;
                    }, e.prototype.posContent = function () {
                        return this.stream.pos + this.header;
                    }, e.prototype.posEnd = function () {
                        return this.stream.pos + this.header + Math.abs(this.length);
                    }, e.prototype.toHexString = function () {
                        return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
                    }, e.decodeLength = function (e) {
                        var t = e.get(), i = 127 & t;
                        if (i == t) return i;
                        if (i > 6) throw new Error("Length over 48 bits not supported at position " + (e.pos - 1));
                        if (0 === i) return null;
                        t = 0;
                        for (var n = 0; n < i; ++n) t = 256 * t + e.get();
                        return t;
                    }, e.prototype.getHexStringValue = function () {
                        var e = this.toHexString(), t = 2 * this.header, i = 2 * this.length;
                        return e.substr(t, i);
                    }, e.decode = function (t) {
                        var i;
                        i = t instanceof D ? t : new D(t, 0);
                        var n = new D(i), a = new I(i), o = e.decodeLength(i), s = i.pos, r = s - n.pos, c = null,
                            l = function () {
                                var t = [];
                                if (null !== o) {
                                    for (var n = s + o; i.pos < n;) t[t.length] = e.decode(i);
                                    if (i.pos != n) throw new Error("Content size is not correct for container starting at offset " + s);
                                } else try {
                                    for (; ;) {
                                        var a = e.decode(i);
                                        if (a.tag.isEOC()) break;
                                        t[t.length] = a;
                                    }
                                    o = s - i.pos;
                                } catch (e) {
                                    throw new Error("Exception while decoding undefined length content: " + e);
                                }
                                return t;
                            };
                        if (a.tagConstructed) c = l(); else if (a.isUniversal() && (3 == a.tagNumber || 4 == a.tagNumber)) try {
                            if (3 == a.tagNumber && 0 != i.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                            c = l();
                            for (var h = 0; h < c.length; ++h) if (c[h].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.");
                        } catch (e) {
                            c = null;
                        }
                        if (null === c) {
                            if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                            i.pos = s + Math.abs(o);
                        }
                        return new e(n, r, o, a, c);
                    }, e;
                }(), I = function () {
                    function e(e) {
                        var t = e.get();
                        if (this.tagClass = t >> 6, this.tagConstructed = 0 != (32 & t), this.tagNumber = 31 & t,
                        31 == this.tagNumber) {
                            var i = new b();
                            do {
                                t = e.get(), i.mulAdd(128, 127 & t);
                            } while (128 & t);
                            this.tagNumber = i.simplify();
                        }
                    }

                    return e.prototype.isUniversal = function () {
                        return 0 === this.tagClass;
                    }, e.prototype.isEOC = function () {
                        return 0 === this.tagClass && 0 === this.tagNumber;
                    }, e;
                }(),
                M = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                C = (1 << 26) / M[M.length - 1], A = function () {
                    function e(e, t, i) {
                        null != e && ("number" == typeof e ? this.fromNumber(e, t, i) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t));
                    }

                    return e.prototype.toString = function (e) {
                        if (this.s < 0) return "-" + this.negate().toString(e);
                        var t;
                        if (16 == e) t = 4; else if (8 == e) t = 3; else if (2 == e) t = 1; else if (32 == e) t = 5; else {
                            if (4 != e) return this.toRadix(e);
                            t = 2;
                        }
                        var n, a = (1 << t) - 1, o = !1, s = "", r = this.t, c = this.DB - r * this.DB % t;
                        if (r-- > 0) for (c < this.DB && (n = this[r] >> c) > 0 && (o = !0, s = i(n)); r >= 0;) c < t ? (n = (this[r] & (1 << c) - 1) << t - c,
                            n |= this[--r] >> (c += this.DB - t)) : (n = this[r] >> (c -= t) & a, c <= 0 && (c += this.DB,
                            --r)), n > 0 && (o = !0), o && (s += i(n));
                        return o ? s : "0";
                    }, e.prototype.negate = function () {
                        var t = P();
                        return e.ZERO.subTo(this, t), t;
                    }, e.prototype.abs = function () {
                        return this.s < 0 ? this.negate() : this;
                    }, e.prototype.compareTo = function (e) {
                        var t = this.s - e.s;
                        if (0 != t) return t;
                        var i = this.t;
                        if (0 != (t = i - e.t)) return this.s < 0 ? -t : t;
                        for (; --i >= 0;) if (0 != (t = this[i] - e[i])) return t;
                        return 0;
                    }, e.prototype.bitLength = function () {
                        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + G(this[this.t - 1] ^ this.s & this.DM);
                    }, e.prototype.mod = function (t) {
                        var i = P();
                        return this.abs().divRemTo(t, null, i), this.s < 0 && i.compareTo(e.ZERO) > 0 && t.subTo(i, i),
                            i;
                    }, e.prototype.modPowInt = function (e, t) {
                        var i;
                        return i = e < 256 || t.isEven() ? new B(t) : new W(t), this.exp(e, i);
                    }, e.prototype.clone = function () {
                        var e = P();
                        return this.copyTo(e), e;
                    }, e.prototype.intValue = function () {
                        if (this.s < 0) {
                            if (1 == this.t) return this[0] - this.DV;
                            if (0 == this.t) return -1;
                        } else {
                            if (1 == this.t) return this[0];
                            if (0 == this.t) return 0;
                        }
                        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
                    }, e.prototype.byteValue = function () {
                        return 0 == this.t ? this.s : this[0] << 24 >> 24;
                    }, e.prototype.shortValue = function () {
                        return 0 == this.t ? this.s : this[0] << 16 >> 16;
                    }, e.prototype.signum = function () {
                        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
                    }, e.prototype.toByteArray = function () {
                        var e = this.t, t = [];
                        t[0] = this.s;
                        var i, n = this.DB - e * this.DB % 8, a = 0;
                        if (e-- > 0) for (n < this.DB && (i = this[e] >> n) != (this.s & this.DM) >> n && (t[a++] = i | this.s << this.DB - n); e >= 0;) n < 8 ? (i = (this[e] & (1 << n) - 1) << 8 - n,
                            i |= this[--e] >> (n += this.DB - 8)) : (i = this[e] >> (n -= 8) & 255, n <= 0 && (n += this.DB,
                            --e)), 0 != (128 & i) && (i |= -256), 0 == a && (128 & this.s) != (128 & i) && ++a,
                        (a > 0 || i != this.s) && (t[a++] = i);
                        return t;
                    }, e.prototype.equals = function (e) {
                        return 0 == this.compareTo(e);
                    }, e.prototype.min = function (e) {
                        return this.compareTo(e) < 0 ? this : e;
                    }, e.prototype.max = function (e) {
                        return this.compareTo(e) > 0 ? this : e;
                    }, e.prototype.and = function (e) {
                        var t = P();
                        return this.bitwiseTo(e, n, t), t;
                    }, e.prototype.or = function (e) {
                        var t = P();
                        return this.bitwiseTo(e, a, t), t;
                    }, e.prototype.xor = function (e) {
                        var t = P();
                        return this.bitwiseTo(e, o, t), t;
                    }, e.prototype.andNot = function (e) {
                        var t = P();
                        return this.bitwiseTo(e, s, t), t;
                    }, e.prototype.not = function () {
                        for (var e = P(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                        return e.t = this.t, e.s = ~this.s, e;
                    }, e.prototype.shiftLeft = function (e) {
                        var t = P();
                        return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
                    }, e.prototype.shiftRight = function (e) {
                        var t = P();
                        return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
                    }, e.prototype.getLowestSetBit = function () {
                        for (var e = 0; e < this.t; ++e) if (0 != this[e]) return e * this.DB + r(this[e]);
                        return this.s < 0 ? this.t * this.DB : -1;
                    }, e.prototype.bitCount = function () {
                        for (var e = 0, t = this.s & this.DM, i = 0; i < this.t; ++i) e += c(this[i] ^ t);
                        return e;
                    }, e.prototype.testBit = function (e) {
                        var t = Math.floor(e / this.DB);
                        return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB);
                    }, e.prototype.setBit = function (e) {
                        return this.changeBit(e, a);
                    }, e.prototype.clearBit = function (e) {
                        return this.changeBit(e, s);
                    }, e.prototype.flipBit = function (e) {
                        return this.changeBit(e, o);
                    }, e.prototype.add = function (e) {
                        var t = P();
                        return this.addTo(e, t), t;
                    }, e.prototype.subtract = function (e) {
                        var t = P();
                        return this.subTo(e, t), t;
                    }, e.prototype.multiply = function (e) {
                        var t = P();
                        return this.multiplyTo(e, t), t;
                    }, e.prototype.divide = function (e) {
                        var t = P();
                        return this.divRemTo(e, t, null), t;
                    }, e.prototype.remainder = function (e) {
                        var t = P();
                        return this.divRemTo(e, null, t), t;
                    }, e.prototype.divideAndRemainder = function (e) {
                        var t = P(), i = P();
                        return this.divRemTo(e, t, i), [t, i];
                    }, e.prototype.modPow = function (e, t) {
                        var i, n, a = e.bitLength(), o = V(1);
                        if (a <= 0) return o;
                        i = a < 18 ? 1 : a < 48 ? 3 : a < 144 ? 4 : a < 768 ? 5 : 6, n = a < 8 ? new B(t) : t.isEven() ? new O(t) : new W(t);
                        var s = [], r = 3, c = i - 1, l = (1 << i) - 1;
                        if (s[1] = n.convert(this), i > 1) {
                            var h = P();
                            for (n.sqrTo(s[1], h); r <= l;) s[r] = P(), n.mulTo(h, s[r - 2], s[r]), r += 2;
                        }
                        var u, d, f = e.t - 1, g = !0, p = P();
                        for (a = G(e[f]) - 1; f >= 0;) {
                            for (a >= c ? u = e[f] >> a - c & l : (u = (e[f] & (1 << a + 1) - 1) << c - a, f > 0 && (u |= e[f - 1] >> this.DB + a - c)),
                                     r = i; 0 == (1 & u);) u >>= 1, --r;
                            if ((a -= r) < 0 && (a += this.DB, --f), g) s[u].copyTo(o), g = !1; else {
                                for (; r > 1;) n.sqrTo(o, p), n.sqrTo(p, o), r -= 2;
                                r > 0 ? n.sqrTo(o, p) : (d = o, o = p, p = d), n.mulTo(p, s[u], o);
                            }
                            for (; f >= 0 && 0 == (e[f] & 1 << a);) n.sqrTo(o, p), d = o, o = p, p = d, --a < 0 && (a = this.DB - 1,
                                --f);
                        }
                        return n.revert(o);
                    }, e.prototype.modInverse = function (t) {
                        var i = t.isEven();
                        if (this.isEven() && i || 0 == t.signum()) return e.ZERO;
                        for (var n = t.clone(), a = this.clone(), o = V(1), s = V(0), r = V(0), c = V(1); 0 != n.signum();) {
                            for (; n.isEven();) n.rShiftTo(1, n), i ? (o.isEven() && s.isEven() || (o.addTo(this, o),
                                s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                            for (; a.isEven();) a.rShiftTo(1, a), i ? (r.isEven() && c.isEven() || (r.addTo(this, r),
                                c.subTo(t, c)), r.rShiftTo(1, r)) : c.isEven() || c.subTo(t, c), c.rShiftTo(1, c);
                            n.compareTo(a) >= 0 ? (n.subTo(a, n), i && o.subTo(r, o), s.subTo(c, s)) : (a.subTo(n, a),
                            i && r.subTo(o, r), c.subTo(s, c));
                        }
                        return 0 != a.compareTo(e.ONE) ? e.ZERO : c.compareTo(t) >= 0 ? c.subtract(t) : c.signum() < 0 ? (c.addTo(t, c),
                            c.signum() < 0 ? c.add(t) : c) : c;
                    }, e.prototype.pow = function (e) {
                        return this.exp(e, new R());
                    }, e.prototype.gcd = function (e) {
                        var t = this.s < 0 ? this.negate() : this.clone(), i = e.s < 0 ? e.negate() : e.clone();
                        if (t.compareTo(i) < 0) {
                            var n = t;
                            t = i, i = n;
                        }
                        var a = t.getLowestSetBit(), o = i.getLowestSetBit();
                        if (o < 0) return t;
                        for (a < o && (o = a), o > 0 && (t.rShiftTo(o, t), i.rShiftTo(o, i)); t.signum() > 0;) (a = t.getLowestSetBit()) > 0 && t.rShiftTo(a, t),
                        (a = i.getLowestSetBit()) > 0 && i.rShiftTo(a, i), t.compareTo(i) >= 0 ? (t.subTo(i, t),
                            t.rShiftTo(1, t)) : (i.subTo(t, i), i.rShiftTo(1, i));
                        return o > 0 && i.lShiftTo(o, i), i;
                    }, e.prototype.isProbablePrime = function (e) {
                        var t, i = this.abs();
                        if (1 == i.t && i[0] <= M[M.length - 1]) {
                            for (t = 0; t < M.length; ++t) if (i[0] == M[t]) return !0;
                            return !1;
                        }
                        if (i.isEven()) return !1;
                        for (t = 1; t < M.length;) {
                            for (var n = M[t], a = t + 1; a < M.length && n < C;) n *= M[a++];
                            for (n = i.modInt(n); t < a;) if (n % M[t++] == 0) return !1;
                        }
                        return i.millerRabin(e);
                    }, e.prototype.copyTo = function (e) {
                        for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
                        e.t = this.t, e.s = this.s;
                    }, e.prototype.fromInt = function (e) {
                        this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0;
                    }, e.prototype.fromString = function (t, i) {
                        var n;
                        if (16 == i) n = 4; else if (8 == i) n = 3; else if (256 == i) n = 8; else if (2 == i) n = 1; else if (32 == i) n = 5; else {
                            if (4 != i) return void this.fromRadix(t, i);
                            n = 2;
                        }
                        this.t = 0, this.s = 0;
                        for (var a = t.length, o = !1, s = 0; --a >= 0;) {
                            var r = 8 == n ? 255 & +t[a] : U(t, a);
                            r < 0 ? "-" == t.charAt(a) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = r : s + n > this.DB ? (this[this.t - 1] |= (r & (1 << this.DB - s) - 1) << s,
                                this[this.t++] = r >> this.DB - s) : this[this.t - 1] |= r << s, (s += n) >= this.DB && (s -= this.DB));
                        }
                        8 == n && 0 != (128 & +t[0]) && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                            this.clamp(), o && e.ZERO.subTo(this, this);
                    }, e.prototype.clamp = function () {
                        for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;) --this.t;
                    }, e.prototype.dlShiftTo = function (e, t) {
                        var i;
                        for (i = this.t - 1; i >= 0; --i) t[i + e] = this[i];
                        for (i = e - 1; i >= 0; --i) t[i] = 0;
                        t.t = this.t + e, t.s = this.s;
                    }, e.prototype.drShiftTo = function (e, t) {
                        for (var i = e; i < this.t; ++i) t[i - e] = this[i];
                        t.t = Math.max(this.t - e, 0), t.s = this.s;
                    }, e.prototype.lShiftTo = function (e, t) {
                        for (var i = e % this.DB, n = this.DB - i, a = (1 << n) - 1, o = Math.floor(e / this.DB), s = this.s << i & this.DM, r = this.t - 1; r >= 0; --r) t[r + o + 1] = this[r] >> n | s,
                            s = (this[r] & a) << i;
                        for (r = o - 1; r >= 0; --r) t[r] = 0;
                        t[o] = s, t.t = this.t + o + 1, t.s = this.s, t.clamp();
                    }, e.prototype.rShiftTo = function (e, t) {
                        t.s = this.s;
                        var i = Math.floor(e / this.DB);
                        if (i >= this.t) t.t = 0; else {
                            var n = e % this.DB, a = this.DB - n, o = (1 << n) - 1;
                            t[0] = this[i] >> n;
                            for (var s = i + 1; s < this.t; ++s) t[s - i - 1] |= (this[s] & o) << a, t[s - i] = this[s] >> n;
                            n > 0 && (t[this.t - i - 1] |= (this.s & o) << a), t.t = this.t - i, t.clamp();
                        }
                    }, e.prototype.subTo = function (e, t) {
                        for (var i = 0, n = 0, a = Math.min(e.t, this.t); i < a;) n += this[i] - e[i],
                            t[i++] = n & this.DM, n >>= this.DB;
                        if (e.t < this.t) {
                            for (n -= e.s; i < this.t;) n += this[i], t[i++] = n & this.DM, n >>= this.DB;
                            n += this.s;
                        } else {
                            for (n += this.s; i < e.t;) n -= e[i], t[i++] = n & this.DM, n >>= this.DB;
                            n -= e.s;
                        }
                        t.s = n < 0 ? -1 : 0, n < -1 ? t[i++] = this.DV + n : n > 0 && (t[i++] = n), t.t = i,
                            t.clamp();
                    }, e.prototype.multiplyTo = function (t, i) {
                        var n = this.abs(), a = t.abs(), o = n.t;
                        for (i.t = o + a.t; --o >= 0;) i[o] = 0;
                        for (o = 0; o < a.t; ++o) i[o + n.t] = n.am(0, a[o], i, o, 0, n.t);
                        i.s = 0, i.clamp(), this.s != t.s && e.ZERO.subTo(i, i);
                    }, e.prototype.squareTo = function (e) {
                        for (var t = this.abs(), i = e.t = 2 * t.t; --i >= 0;) e[i] = 0;
                        for (i = 0; i < t.t - 1; ++i) {
                            var n = t.am(i, t[i], e, 2 * i, 0, 1);
                            (e[i + t.t] += t.am(i + 1, 2 * t[i], e, 2 * i + 1, n, t.t - i - 1)) >= t.DV && (e[i + t.t] -= t.DV,
                                e[i + t.t + 1] = 1);
                        }
                        e.t > 0 && (e[e.t - 1] += t.am(i, t[i], e, 2 * i, 0, 1)), e.s = 0, e.clamp();
                    }, e.prototype.divRemTo = function (t, i, n) {
                        var a = t.abs();
                        if (!(a.t <= 0)) {
                            var o = this.abs();
                            if (o.t < a.t) return null != i && i.fromInt(0), void (null != n && this.copyTo(n));
                            null == n && (n = P());
                            var s = P(), r = this.s, c = t.s, l = this.DB - G(a[a.t - 1]);
                            l > 0 ? (a.lShiftTo(l, s), o.lShiftTo(l, n)) : (a.copyTo(s), o.copyTo(n));
                            var h = s.t, u = s[h - 1];
                            if (0 != u) {
                                var d = u * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0), f = this.FV / d,
                                    g = (1 << this.F1) / d, p = 1 << this.F2, m = n.t, y = m - h, v = null == i ? P() : i;
                                for (s.dlShiftTo(y, v), n.compareTo(v) >= 0 && (n[n.t++] = 1, n.subTo(v, n)), e.ONE.dlShiftTo(h, v),
                                         v.subTo(s, s); s.t < h;) s[s.t++] = 0;
                                for (; --y >= 0;) {
                                    var b = n[--m] == u ? this.DM : Math.floor(n[m] * f + (n[m - 1] + p) * g);
                                    if ((n[m] += s.am(0, b, n, y, 0, h)) < b) for (s.dlShiftTo(y, v), n.subTo(v, n); n[m] < --b;) n.subTo(v, n);
                                }
                                null != i && (n.drShiftTo(h, i), r != c && e.ZERO.subTo(i, i)), n.t = h, n.clamp(),
                                l > 0 && n.rShiftTo(l, n), r < 0 && e.ZERO.subTo(n, n);
                            }
                        }
                    }, e.prototype.invDigit = function () {
                        if (this.t < 1) return 0;
                        var e = this[0];
                        if (0 == (1 & e)) return 0;
                        var t = 3 & e;
                        return (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) > 0 ? this.DV - t : -t;
                    }, e.prototype.isEven = function () {
                        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
                    }, e.prototype.exp = function (t, i) {
                        if (t > 4294967295 || t < 1) return e.ONE;
                        var n = P(), a = P(), o = i.convert(this), s = G(t) - 1;
                        for (o.copyTo(n); --s >= 0;) if (i.sqrTo(n, a), (t & 1 << s) > 0) i.mulTo(a, o, n); else {
                            var r = n;
                            n = a, a = r;
                        }
                        return i.revert(n);
                    }, e.prototype.chunkSize = function (e) {
                        return Math.floor(Math.LN2 * this.DB / Math.log(e));
                    }, e.prototype.toRadix = function (e) {
                        if (null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36) return "0";
                        var t = this.chunkSize(e), i = Math.pow(e, t), n = V(i), a = P(), o = P(), s = "";
                        for (this.divRemTo(n, a, o); a.signum() > 0;) s = (i + o.intValue()).toString(e).substr(1) + s,
                            a.divRemTo(n, a, o);
                        return o.intValue().toString(e) + s;
                    }, e.prototype.fromRadix = function (t, i) {
                        this.fromInt(0), null == i && (i = 10);
                        for (var n = this.chunkSize(i), a = Math.pow(i, n), o = !1, s = 0, r = 0, c = 0; c < t.length; ++c) {
                            var l = U(t, c);
                            l < 0 ? "-" == t.charAt(c) && 0 == this.signum() && (o = !0) : (r = i * r + l, ++s >= n && (this.dMultiply(a),
                                this.dAddOffset(r, 0), s = 0, r = 0));
                        }
                        s > 0 && (this.dMultiply(Math.pow(i, s)), this.dAddOffset(r, 0)), o && e.ZERO.subTo(this, this);
                    }, e.prototype.fromNumber = function (t, i, n) {
                        if ("number" == typeof i) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, n),
                                                                                        this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), a, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);) this.dAddOffset(2, 0),
                        this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this); else {
                            var o = [], s = 7 & t;
                            o.length = 1 + (t >> 3), i.nextBytes(o), s > 0 ? o[0] &= (1 << s) - 1 : o[0] = 0,
                                this.fromString(o, 256);
                        }
                    }, e.prototype.bitwiseTo = function (e, t, i) {
                        var n, a, o = Math.min(e.t, this.t);
                        for (n = 0; n < o; ++n) i[n] = t(this[n], e[n]);
                        if (e.t < this.t) {
                            for (a = e.s & this.DM, n = o; n < this.t; ++n) i[n] = t(this[n], a);
                            i.t = this.t;
                        } else {
                            for (a = this.s & this.DM, n = o; n < e.t; ++n) i[n] = t(a, e[n]);
                            i.t = e.t;
                        }
                        i.s = t(this.s, e.s), i.clamp();
                    }, e.prototype.changeBit = function (t, i) {
                        var n = e.ONE.shiftLeft(t);
                        return this.bitwiseTo(n, i, n), n;
                    }, e.prototype.addTo = function (e, t) {
                        for (var i = 0, n = 0, a = Math.min(e.t, this.t); i < a;) n += this[i] + e[i],
                            t[i++] = n & this.DM, n >>= this.DB;
                        if (e.t < this.t) {
                            for (n += e.s; i < this.t;) n += this[i], t[i++] = n & this.DM, n >>= this.DB;
                            n += this.s;
                        } else {
                            for (n += this.s; i < e.t;) n += e[i], t[i++] = n & this.DM, n >>= this.DB;
                            n += e.s;
                        }
                        t.s = n < 0 ? -1 : 0, n > 0 ? t[i++] = n : n < -1 && (t[i++] = this.DV + n), t.t = i,
                            t.clamp();
                    }, e.prototype.dMultiply = function (e) {
                        this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp();
                    }, e.prototype.dAddOffset = function (e, t) {
                        if (0 != e) {
                            for (; this.t <= t;) this[this.t++] = 0;
                            for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0),
                                ++this[t];
                        }
                    }, e.prototype.multiplyLowerTo = function (e, t, i) {
                        var n = Math.min(this.t + e.t, t);
                        for (i.s = 0, i.t = n; n > 0;) i[--n] = 0;
                        for (var a = i.t - this.t; n < a; ++n) i[n + this.t] = this.am(0, e[n], i, n, 0, this.t);
                        for (a = Math.min(e.t, t); n < a; ++n) this.am(0, e[n], i, n, 0, t - n);
                        i.clamp();
                    }, e.prototype.multiplyUpperTo = function (e, t, i) {
                        --t;
                        var n = i.t = this.t + e.t - t;
                        for (i.s = 0; --n >= 0;) i[n] = 0;
                        for (n = Math.max(t - this.t, 0); n < e.t; ++n) i[this.t + n - t] = this.am(t - n, e[n], i, 0, 0, this.t + n - t);
                        i.clamp(), i.drShiftTo(1, i);
                    }, e.prototype.modInt = function (e) {
                        if (e <= 0) return 0;
                        var t = this.DV % e, i = this.s < 0 ? e - 1 : 0;
                        if (this.t > 0) if (0 == t) i = this[0] % e; else for (var n = this.t - 1; n >= 0; --n) i = (t * i + this[n]) % e;
                        return i;
                    }, e.prototype.millerRabin = function (t) {
                        var i = this.subtract(e.ONE), n = i.getLowestSetBit();
                        if (n <= 0) return !1;
                        var a = i.shiftRight(n);
                        (t = t + 1 >> 1) > M.length && (t = M.length);
                        for (var o = P(), s = 0; s < t; ++s) {
                            o.fromInt(M[Math.floor(Math.random() * M.length)]);
                            var r = o.modPow(a, this);
                            if (0 != r.compareTo(e.ONE) && 0 != r.compareTo(i)) {
                                for (var c = 1; c++ < n && 0 != r.compareTo(i);) if (0 == (r = r.modPowInt(2, this)).compareTo(e.ONE)) return !1;
                                if (0 != r.compareTo(i)) return !1;
                            }
                        }
                        return !0;
                    }, e.prototype.square = function () {
                        var e = P();
                        return this.squareTo(e), e;
                    }, e.prototype.gcda = function (e, t) {
                        var i = this.s < 0 ? this.negate() : this.clone(), n = e.s < 0 ? e.negate() : e.clone();
                        if (i.compareTo(n) < 0) {
                            var a = i;
                            i = n, n = a;
                        }
                        var o = i.getLowestSetBit(), s = n.getLowestSetBit();
                        if (s < 0) t(i); else {
                            o < s && (s = o), s > 0 && (i.rShiftTo(s, i), n.rShiftTo(s, n));
                            setTimeout(function e() {
                                (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i), (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                                    i.compareTo(n) >= 0 ? (i.subTo(n, i), i.rShiftTo(1, i)) : (n.subTo(i, n), n.rShiftTo(1, n)),
                                    i.signum() > 0 ? setTimeout(e, 0) : (s > 0 && n.lShiftTo(s, n), setTimeout(function () {
                                        t(n);
                                    }, 0));
                            }, 10);
                        }
                    }, e.prototype.fromNumberAsync = function (t, i, n, o) {
                        if ("number" == typeof i) if (t < 2) this.fromInt(1); else {
                            this.fromNumber(t, n), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), a, this),
                            this.isEven() && this.dAddOffset(1, 0);
                            var s = this;
                            setTimeout(function n() {
                                s.dAddOffset(2, 0), s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s), s.isProbablePrime(i) ? setTimeout(function () {
                                    o();
                                }, 0) : setTimeout(n, 0);
                            }, 0);
                        } else {
                            var r = [], c = 7 & t;
                            r.length = 1 + (t >> 3), i.nextBytes(r), c > 0 ? r[0] &= (1 << c) - 1 : r[0] = 0,
                                this.fromString(r, 256);
                        }
                    }, e;
                }(), R = function () {
                    function e() {
                    }

                    return e.prototype.convert = function (e) {
                        return e;
                    }, e.prototype.revert = function (e) {
                        return e;
                    }, e.prototype.mulTo = function (e, t, i) {
                        e.multiplyTo(t, i);
                    }, e.prototype.sqrTo = function (e, t) {
                        e.squareTo(t);
                    }, e;
                }(), B = function () {
                    function e(e) {
                        this.m = e;
                    }

                    return e.prototype.convert = function (e) {
                        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
                    }, e.prototype.revert = function (e) {
                        return e;
                    }, e.prototype.reduce = function (e) {
                        e.divRemTo(this.m, null, e);
                    }, e.prototype.mulTo = function (e, t, i) {
                        e.multiplyTo(t, i), this.reduce(i);
                    }, e.prototype.sqrTo = function (e, t) {
                        e.squareTo(t), this.reduce(t);
                    }, e;
                }(), W = function () {
                    function e(e) {
                        this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15,
                            this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t;
                    }

                    return e.prototype.convert = function (e) {
                        var t = P();
                        return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(A.ZERO) > 0 && this.m.subTo(t, t),
                            t;
                    }, e.prototype.revert = function (e) {
                        var t = P();
                        return e.copyTo(t), this.reduce(t), t;
                    }, e.prototype.reduce = function (e) {
                        for (; e.t <= this.mt2;) e[e.t++] = 0;
                        for (var t = 0; t < this.m.t; ++t) {
                            var i = 32767 & e[t],
                                n = i * this.mpl + ((i * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                            for (e[i = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[i] >= e.DV;) e[i] -= e.DV,
                                e[++i]++;
                        }
                        e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
                    }, e.prototype.mulTo = function (e, t, i) {
                        e.multiplyTo(t, i), this.reduce(i);
                    }, e.prototype.sqrTo = function (e, t) {
                        e.squareTo(t), this.reduce(t);
                    }, e;
                }(), O = function () {
                    function e(e) {
                        this.m = e, this.r2 = P(), this.q3 = P(), A.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e);
                    }

                    return e.prototype.convert = function (e) {
                        if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                        if (e.compareTo(this.m) < 0) return e;
                        var t = P();
                        return e.copyTo(t), this.reduce(t), t;
                    }, e.prototype.revert = function (e) {
                        return e;
                    }, e.prototype.reduce = function (e) {
                        for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1,
                            e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
                        for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;) e.subTo(this.m, e);
                    }, e.prototype.mulTo = function (e, t, i) {
                        e.multiplyTo(t, i), this.reduce(i);
                    }, e.prototype.sqrTo = function (e, t) {
                        e.squareTo(t), this.reduce(t);
                    }, e;
                }();

            function P() {
                return new A(null);
            }

            function N(e, t) {
                return new A(e, t);
            }

            "Microsoft Internet Explorer" == navigator.appName ? (A.prototype.am = function (e, t, i, n, a, o) {
                for (var s = 32767 & t, r = t >> 15; --o >= 0;) {
                    var c = 32767 & this[e], l = this[e++] >> 15, h = r * c + l * s;
                    a = ((c = s * c + ((32767 & h) << 15) + i[n] + (1073741823 & a)) >>> 30) + (h >>> 15) + r * l + (a >>> 30),
                        i[n++] = 1073741823 & c;
                }
                return a;
            }, k = 30) : "Netscape" != navigator.appName ? (A.prototype.am = function (e, t, i, n, a, o) {
                for (; --o >= 0;) {
                    var s = t * this[e++] + i[n] + a;
                    a = Math.floor(s / 67108864), i[n++] = 67108863 & s;
                }
                return a;
            }, k = 26) : (A.prototype.am = function (e, t, i, n, a, o) {
                for (var s = 16383 & t, r = t >> 14; --o >= 0;) {
                    var c = 16383 & this[e], l = this[e++] >> 14, h = r * c + l * s;
                    a = ((c = s * c + ((16383 & h) << 14) + i[n] + a) >> 28) + (h >> 14) + r * l, i[n++] = 268435455 & c;
                }
                return a;
            }, k = 28), A.prototype.DB = k, A.prototype.DM = (1 << k) - 1, A.prototype.DV = 1 << k;
            A.prototype.FV = Math.pow(2, 52), A.prototype.F1 = 52 - k, A.prototype.F2 = 2 * k - 52;
            var F, L, E = [];
            for (F = "0".charCodeAt(0), L = 0; L <= 9; ++L) E[F++] = L;
            for (F = "a".charCodeAt(0), L = 10; L < 36; ++L) E[F++] = L;
            for (F = "A".charCodeAt(0), L = 10; L < 36; ++L) E[F++] = L;

            function U(e, t) {
                var i = E[e.charCodeAt(t)];
                return null == i ? -1 : i;
            }

            function V(e) {
                var t = P();
                return t.fromInt(e), t;
            }

            function G(e) {
                var t, i = 1;
                return 0 != (t = e >>> 16) && (e = t, i += 16), 0 != (t = e >> 8) && (e = t, i += 8),
                0 != (t = e >> 4) && (e = t, i += 4), 0 != (t = e >> 2) && (e = t, i += 2), 0 != (t = e >> 1) && (e = t,
                    i += 1), i;
            }

            A.ZERO = V(0), A.ONE = V(1);
            var j = function () {
                function e() {
                    this.i = 0, this.j = 0, this.S = [];
                }

                return e.prototype.init = function (e) {
                    var t, i, n;
                    for (t = 0; t < 256; ++t) this.S[t] = t;
                    for (i = 0, t = 0; t < 256; ++t) i = i + this.S[t] + e[t % e.length] & 255, n = this.S[t],
                        this.S[t] = this.S[i], this.S[i] = n;
                    this.i = 0, this.j = 0;
                }, e.prototype.next = function () {
                    var e;
                    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i],
                        this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
                }, e;
            }();
            var q, z, K = 256, H = null, J = 0;
            if (null == H) {
                H = [], z = 0;
                var Y = void 0;
                if (window.crypto && window.crypto.getRandomValues) {
                    var Q = new Uint32Array(256);
                    for (window.crypto.getRandomValues(Q), Y = 0; Y < Q.length; ++Y) H[z++] = 255 & Q[Y];
                }
                var X = function e(t) {
                    if (J >= 256 || z >= K) window.removeEventListener ? window.removeEventListener("mousemove", e, !1) : window.detachEvent && window.detachEvent("onmousemove", e); else try {
                        var i = t.x + t.y;
                        H[z++] = 255 & i, J += 1;
                    } catch (e) {
                    }
                };
                window.addEventListener ? window.addEventListener("mousemove", X, !1) : window.attachEvent && window.attachEvent("onmousemove", X);
            }

            function Z() {
                if (null == q) {
                    for (q = new j(); z < K;) {
                        var e = Math.floor(65536 * Math.random());
                        H[z++] = 255 & e;
                    }
                    for (q.init(H), z = 0; z < H.length; ++z) H[z] = 0;
                    z = 0;
                }
                return q.next();
            }

            var $ = function () {
                function e() {
                }

                return e.prototype.nextBytes = function (e) {
                    for (var t = 0; t < e.length; ++t) e[t] = Z();
                }, e;
            }();

            function ee(e, t) {
                if (t < e.length + 22) return console.error("Message too long for RSA"), null;
                for (var i = t - e.length - 6, n = "", a = 0; a < i; a += 2) n += "ff";
                return N("0001" + n + "00" + e, 16);
            }

            function te(e, t) {
                if (t < e.length + 11) return console.error("Message too long for RSA"), null;
                for (var i = [], n = e.length - 1; n >= 0 && t > 0;) {
                    var a = e.charCodeAt(n--);
                    a < 128 ? i[--t] = a : a > 127 && a < 2048 ? (i[--t] = 63 & a | 128, i[--t] = a >> 6 | 192) : (i[--t] = 63 & a | 128,
                        i[--t] = a >> 6 & 63 | 128, i[--t] = a >> 12 | 224);
                }
                i[--t] = 0;
                for (var o = new $(), s = []; t > 2;) {
                    for (s[0] = 0; 0 == s[0];) o.nextBytes(s);
                    i[--t] = s[0];
                }
                return i[--t] = 2, i[--t] = 0, new A(i);
            }

            var ie = function () {
                function e() {
                    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null,
                        this.dmq1 = null, this.coeff = null;
                }

                return e.prototype.doPublic = function (e) {
                    return e.modPowInt(this.e, this.n);
                }, e.prototype.doPrivate = function (e) {
                    if (null == this.p || null == this.q) return e.modPow(this.d, this.n);
                    for (var t = e.mod(this.p).modPow(this.dmp1, this.p), i = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(i) < 0;) t = t.add(this.p);
                    return t.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i);
                }, e.prototype.setPublic = function (e, t) {
                    null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = N(e, 16), this.e = parseInt(t, 16)) : console.error("Invalid RSA public key");
                }, e.prototype.encrypt = function (e) {
                    var t = te(e, this.n.bitLength() + 7 >> 3);
                    if (null == t) return null;
                    var i = this.doPublic(t);
                    if (null == i) return null;
                    var n = i.toString(16);
                    return 0 == (1 & n.length) ? n : "0" + n;
                }, e.prototype.setPrivate = function (e, t, i) {
                    null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = N(e, 16), this.e = parseInt(t, 16),
                        this.d = N(i, 16)) : console.error("Invalid RSA private key");
                }, e.prototype.setPrivateEx = function (e, t, i, n, a, o, s, r) {
                    null != e && null != t && e.length > 0 && t.length > 0 ? (this.n = N(e, 16), this.e = parseInt(t, 16),
                        this.d = N(i, 16), this.p = N(n, 16), this.q = N(a, 16), this.dmp1 = N(o, 16), this.dmq1 = N(s, 16),
                        this.coeff = N(r, 16)) : console.error("Invalid RSA private key");
                }, e.prototype.generate = function (e, t) {
                    var i = new $(), n = e >> 1;
                    this.e = parseInt(t, 16);
                    for (var a = new A(t, 16); ;) {
                        for (; this.p = new A(e - n, 1, i), 0 != this.p.subtract(A.ONE).gcd(a).compareTo(A.ONE) || !this.p.isProbablePrime(10);) ;
                        for (; this.q = new A(n, 1, i), 0 != this.q.subtract(A.ONE).gcd(a).compareTo(A.ONE) || !this.q.isProbablePrime(10);) ;
                        if (this.p.compareTo(this.q) <= 0) {
                            var o = this.p;
                            this.p = this.q, this.q = o;
                        }
                        var s = this.p.subtract(A.ONE), r = this.q.subtract(A.ONE), c = s.multiply(r);
                        if (0 == c.gcd(a).compareTo(A.ONE)) {
                            this.n = this.p.multiply(this.q), this.d = a.modInverse(c), this.dmp1 = this.d.mod(s),
                                this.dmq1 = this.d.mod(r), this.coeff = this.q.modInverse(this.p);
                            break;
                        }
                    }
                }, e.prototype.decrypt = function (e) {
                    var t = N(e, 16), i = this.doPrivate(t);
                    return null == i ? null : ne(i, this.n.bitLength() + 7 >> 3);
                }, e.prototype.generateAsync = function (e, t, i) {
                    var n = new $(), a = e >> 1;
                    this.e = parseInt(t, 16);
                    var o = new A(t, 16), s = this;
                    setTimeout(function t() {
                        var r = function () {
                            if (s.p.compareTo(s.q) <= 0) {
                                var e = s.p;
                                s.p = s.q, s.q = e;
                            }
                            var n = s.p.subtract(A.ONE), a = s.q.subtract(A.ONE), r = n.multiply(a);
                            0 == r.gcd(o).compareTo(A.ONE) ? (s.n = s.p.multiply(s.q), s.d = o.modInverse(r),
                                s.dmp1 = s.d.mod(n), s.dmq1 = s.d.mod(a), s.coeff = s.q.modInverse(s.p), setTimeout(function () {
                                i();
                            }, 0)) : setTimeout(t, 0);
                        }, c = function e() {
                            s.q = P(), s.q.fromNumberAsync(a, 1, n, function () {
                                s.q.subtract(A.ONE).gcda(o, function (t) {
                                    0 == t.compareTo(A.ONE) && s.q.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(e, 0);
                                });
                            });
                        };
                        setTimeout(function t() {
                            s.p = P(), s.p.fromNumberAsync(e - a, 1, n, function () {
                                s.p.subtract(A.ONE).gcda(o, function (e) {
                                    0 == e.compareTo(A.ONE) && s.p.isProbablePrime(10) ? setTimeout(c, 0) : setTimeout(t, 0);
                                });
                            });
                        }, 0);
                    }, 0);
                }, e.prototype.sign = function (e, t, i) {
                    var n = ee(oe(i) + t(e).toString(), this.n.bitLength() / 4);
                    if (null == n) return null;
                    var a = this.doPrivate(n);
                    if (null == a) return null;
                    var o = a.toString(16);
                    return 0 == (1 & o.length) ? o : "0" + o;
                }, e.prototype.verify = function (e, t, i) {
                    var n = N(t, 16), a = this.doPublic(n);
                    return null == a ? null : se(a.toString(16).replace(/^1f+00/, "")) == i(e).toString();
                }, e;
            }();

            function ne(e, t) {
                for (var i = e.toByteArray(), n = 0; n < i.length && 0 == i[n];) ++n;
                if (i.length - n != t - 1 || 2 != i[n]) return null;
                for (++n; 0 != i[n];) if (++n >= i.length) return null;
                for (var a = ""; ++n < i.length;) {
                    var o = 255 & i[n];
                    o < 128 ? a += String.fromCharCode(o) : o > 191 && o < 224 ? (a += String.fromCharCode((31 & o) << 6 | 63 & i[n + 1]),
                        ++n) : (a += String.fromCharCode((15 & o) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]),
                        n += 2);
                }
                return a;
            }

            var ae = {
                md2: "3020300c06082a864886f70d020205000410",
                md5: "3020300c06082a864886f70d020505000410",
                sha1: "3021300906052b0e03021a05000414",
                sha224: "302d300d06096086480165030402040500041c",
                sha256: "3031300d060960864801650304020105000420",
                sha384: "3041300d060960864801650304020205000430",
                sha512: "3051300d060960864801650304020305000440",
                ripemd160: "3021300906052b2403020105000414"
            };

            function oe(e) {
                return ae[e] || "";
            }

            function se(e) {
                for (var t in ae) if (ae.hasOwnProperty(t)) {
                    var i = ae[t], n = i.length;
                    if (e.substr(0, n) == i) return e.substr(n);
                }
                return e;
            }

            var re = {};
            re.lang = {
                extend: function (e, t, i) {
                    if (!t || !e) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                    var n = function () {
                    };
                    if (n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e,
                        e.superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t),
                        i) {
                        var a;
                        for (a in i) e.prototype[a] = i[a];
                        var o = function () {
                        }, s = ["toString", "valueOf"];
                        try {
                            /MSIE/.test(navigator.userAgent) && (o = function (e, t) {
                                for (a = 0; a < s.length; a += 1) {
                                    var i = s[a], n = t[i];
                                    "function" == typeof n && n != Object.prototype[i] && (e[i] = n);
                                }
                            });
                        } catch (e) {
                        }
                        o(e.prototype, i);
                    }
                }
            };
            var ce = {};
            void 0 !== ce.asn1 && ce.asn1 || (ce.asn1 = {}), ce.asn1.ASN1Util = new function () {
                this.integerToByteHex = function (e) {
                    var t = e.toString(16);
                    return t.length % 2 == 1 && (t = "0" + t), t;
                }, this.bigIntToMinTwosComplementsHex = function (e) {
                    var t = e.toString(16);
                    if ("-" != t.substr(0, 1)) t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t); else {
                        var i = t.substr(1).length;
                        i % 2 == 1 ? i += 1 : t.match(/^[0-7]/) || (i += 2);
                        for (var n = "", a = 0; a < i; a++) n += "f";
                        t = new A(n, 16).xor(e).add(A.ONE).toString(16).replace(/^-/, "");
                    }
                    return t;
                }, this.getPEMStringFromHex = function (e, t) {
                    return hextopem(e, t);
                }, this.newObject = function (e) {
                    var t = ce.asn1, i = t.DERBoolean, n = t.DERInteger, a = t.DERBitString, o = t.DEROctetString,
                        s = t.DERNull, r = t.DERObjectIdentifier, c = t.DEREnumerated, l = t.DERUTF8String,
                        h = t.DERNumericString, u = t.DERPrintableString, d = t.DERTeletexString, f = t.DERIA5String,
                        g = t.DERUTCTime, p = t.DERGeneralizedTime, m = t.DERSequence, y = t.DERSet,
                        v = t.DERTaggedObject, b = t.ASN1Util.newObject, _ = Object.keys(e);
                    if (1 != _.length) throw "key of param shall be only one.";
                    var w = _[0];
                    if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + w + ":")) throw "undefined key: " + w;
                    if ("bool" == w) return new i(e[w]);
                    if ("int" == w) return new n(e[w]);
                    if ("bitstr" == w) return new a(e[w]);
                    if ("octstr" == w) return new o(e[w]);
                    if ("null" == w) return new s(e[w]);
                    if ("oid" == w) return new r(e[w]);
                    if ("enum" == w) return new c(e[w]);
                    if ("utf8str" == w) return new l(e[w]);
                    if ("numstr" == w) return new h(e[w]);
                    if ("prnstr" == w) return new u(e[w]);
                    if ("telstr" == w) return new d(e[w]);
                    if ("ia5str" == w) return new f(e[w]);
                    if ("utctime" == w) return new g(e[w]);
                    if ("gentime" == w) return new p(e[w]);
                    if ("seq" == w) {
                        for (var S = e[w], T = [], k = 0; k < S.length; k++) {
                            var D = b(S[k]);
                            T.push(D);
                        }
                        return new m({
                            array: T
                        });
                    }
                    if ("set" == w) {
                        for (S = e[w], T = [], k = 0; k < S.length; k++) {
                            D = b(S[k]);
                            T.push(D);
                        }
                        return new y({
                            array: T
                        });
                    }
                    if ("tag" == w) {
                        var x = e[w];
                        if ("[object Array]" === Object.prototype.toString.call(x) && 3 == x.length) {
                            var I = b(x[2]);
                            return new v({
                                tag: x[0],
                                explicit: x[1],
                                obj: I
                            });
                        }
                        var M = {};
                        if (void 0 !== x.explicit && (M.explicit = x.explicit), void 0 !== x.tag && (M.tag = x.tag),
                        void 0 === x.obj) throw "obj shall be specified for 'tag'.";
                        return M.obj = b(x.obj), new v(M);
                    }
                }, this.jsonToASN1HEX = function (e) {
                    return this.newObject(e).getEncodedHex();
                };
            }(), ce.asn1.ASN1Util.oidHexToInt = function (e) {
                for (var t = "", i = parseInt(e.substr(0, 2), 16), n = (t = Math.floor(i / 40) + "." + i % 40,
                    ""), a = 2; a < e.length; a += 2) {
                    var o = ("00000000" + parseInt(e.substr(a, 2), 16).toString(2)).slice(-8);
                    if (n += o.substr(1, 7), "0" == o.substr(0, 1)) t = t + "." + new A(n, 2).toString(10),
                        n = "";
                }
                return t;
            }, ce.asn1.ASN1Util.oidIntToHex = function (e) {
                var t = function (e) {
                    var t = e.toString(16);
                    return 1 == t.length && (t = "0" + t), t;
                }, i = function (e) {
                    var i = "", n = new A(e, 10).toString(2), a = 7 - n.length % 7;
                    7 == a && (a = 0);
                    for (var o = "", s = 0; s < a; s++) o += "0";
                    n = o + n;
                    for (s = 0; s < n.length - 1; s += 7) {
                        var r = n.substr(s, 7);
                        s != n.length - 7 && (r = "1" + r), i += t(parseInt(r, 2));
                    }
                    return i;
                };
                if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                var n = "", a = e.split("."), o = 40 * parseInt(a[0]) + parseInt(a[1]);
                n += t(o), a.splice(0, 2);
                for (var s = 0; s < a.length; s++) n += i(a[s]);
                return n;
            }, ce.asn1.ASN1Object = function () {
                this.getLengthHexFromValue = function () {
                    if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                    if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                    var e = this.hV.length / 2, t = e.toString(16);
                    if (t.length % 2 == 1 && (t = "0" + t), e < 128) return t;
                    var i = t.length / 2;
                    if (i > 15) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                    return (128 + i).toString(16) + t;
                }, this.getEncodedHex = function () {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1), this.hTLV;
                }, this.getValueHex = function () {
                    return this.getEncodedHex(), this.hV;
                }, this.getFreshValueHex = function () {
                    return "";
                };
            }, ce.asn1.DERAbstractString = function (e) {
                ce.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function () {
                    return this.s;
                }, this.setString = function (e) {
                    this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(this.s);
                }, this.setStringHex = function (e) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
                }, this.getFreshValueHex = function () {
                    return this.hV;
                }, void 0 !== e && ("string" == typeof e ? this.setString(e) : void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex && this.setStringHex(e.hex));
            }, re.lang.extend(ce.asn1.DERAbstractString, ce.asn1.ASN1Object), ce.asn1.DERAbstractTime = function (e) {
                ce.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function (e) {
                    return utc = e.getTime() + 6e4 * e.getTimezoneOffset(), new Date(utc);
                }, this.formatDate = function (e, t, i) {
                    var n = this.zeroPadding, a = this.localDateToUTC(e), o = String(a.getFullYear());
                    "utc" == t && (o = o.substr(2, 2));
                    var s = o + n(String(a.getMonth() + 1), 2) + n(String(a.getDate()), 2) + n(String(a.getHours()), 2) + n(String(a.getMinutes()), 2) + n(String(a.getSeconds()), 2);
                    if (!0 === i) {
                        var r = a.getMilliseconds();
                        if (0 != r) {
                            var c = n(String(r), 3);
                            s = s + "." + (c = c.replace(/[0]+$/, ""));
                        }
                    }
                    return s + "Z";
                }, this.zeroPadding = function (e, t) {
                    return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e;
                }, this.getString = function () {
                    return this.s;
                }, this.setString = function (e) {
                    this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(e);
                }, this.setByDateValue = function (e, t, i, n, a, o) {
                    var s = new Date(Date.UTC(e, t - 1, i, n, a, o, 0));
                    this.setByDate(s);
                }, this.getFreshValueHex = function () {
                    return this.hV;
                };
            }, re.lang.extend(ce.asn1.DERAbstractTime, ce.asn1.ASN1Object), ce.asn1.DERAbstractStructured = function (e) {
                ce.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function (e) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array = e;
                }, this.appendASN1Object = function (e) {
                    this.hTLV = null, this.isModified = !0, this.asn1Array.push(e);
                }, this.asn1Array = new Array(), void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array);
            }, re.lang.extend(ce.asn1.DERAbstractStructured, ce.asn1.ASN1Object), ce.asn1.DERBoolean = function () {
                ce.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff";
            }, re.lang.extend(ce.asn1.DERBoolean, ce.asn1.ASN1Object), ce.asn1.DERInteger = function (e) {
                ce.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function (e) {
                    this.hTLV = null, this.isModified = !0, this.hV = ce.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
                }, this.setByInteger = function (e) {
                    var t = new A(String(e), 10);
                    this.setByBigInteger(t);
                }, this.setValueHex = function (e) {
                    this.hV = e;
                }, this.getFreshValueHex = function () {
                    return this.hV;
                }, void 0 !== e && (void 0 !== e.bigint ? this.setByBigInteger(e.bigint) : void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex));
            }, re.lang.extend(ce.asn1.DERInteger, ce.asn1.ASN1Object), ce.asn1.DERBitString = function (e) {
                if (void 0 !== e && void 0 !== e.obj) {
                    var t = ce.asn1.ASN1Util.newObject(e.obj);
                    e.hex = "00" + t.getEncodedHex();
                }
                ce.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function (e) {
                    this.hTLV = null, this.isModified = !0, this.hV = e;
                }, this.setUnusedBitsAndHexValue = function (e, t) {
                    if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
                    var i = "0" + e;
                    this.hTLV = null, this.isModified = !0, this.hV = i + t;
                }, this.setByBinaryString = function (e) {
                    var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
                    8 == t && (t = 0);
                    for (var i = 0; i <= t; i++) e += "0";
                    var n = "";
                    for (i = 0; i < e.length - 1; i += 8) {
                        var a = e.substr(i, 8), o = parseInt(a, 2).toString(16);
                        1 == o.length && (o = "0" + o), n += o;
                    }
                    this.hTLV = null, this.isModified = !0, this.hV = "0" + t + n;
                }, this.setByBooleanArray = function (e) {
                    for (var t = "", i = 0; i < e.length; i++) 1 == e[i] ? t += "1" : t += "0";
                    this.setByBinaryString(t);
                }, this.newFalseArray = function (e) {
                    for (var t = new Array(e), i = 0; i < e; i++) t[i] = !1;
                    return t;
                }, this.getFreshValueHex = function () {
                    return this.hV;
                }, void 0 !== e && ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : void 0 !== e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : void 0 !== e.bin ? this.setByBinaryString(e.bin) : void 0 !== e.array && this.setByBooleanArray(e.array));
            }, re.lang.extend(ce.asn1.DERBitString, ce.asn1.ASN1Object), ce.asn1.DEROctetString = function (e) {
                if (void 0 !== e && void 0 !== e.obj) {
                    var t = ce.asn1.ASN1Util.newObject(e.obj);
                    e.hex = t.getEncodedHex();
                }
                ce.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04";
            }, re.lang.extend(ce.asn1.DEROctetString, ce.asn1.DERAbstractString), ce.asn1.DERNull = function () {
                ce.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500";
            }, re.lang.extend(ce.asn1.DERNull, ce.asn1.ASN1Object), ce.asn1.DERObjectIdentifier = function (e) {
                var t = function (e) {
                    var t = e.toString(16);
                    return 1 == t.length && (t = "0" + t), t;
                }, i = function (e) {
                    var i = "", n = new A(e, 10).toString(2), a = 7 - n.length % 7;
                    7 == a && (a = 0);
                    for (var o = "", s = 0; s < a; s++) o += "0";
                    n = o + n;
                    for (s = 0; s < n.length - 1; s += 7) {
                        var r = n.substr(s, 7);
                        s != n.length - 7 && (r = "1" + r), i += t(parseInt(r, 2));
                    }
                    return i;
                };
                ce.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function (e) {
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e;
                }, this.setValueOidString = function (e) {
                    if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                    var n = "", a = e.split("."), o = 40 * parseInt(a[0]) + parseInt(a[1]);
                    n += t(o), a.splice(0, 2);
                    for (var s = 0; s < a.length; s++) n += i(a[s]);
                    this.hTLV = null, this.isModified = !0, this.s = null, this.hV = n;
                }, this.setValueName = function (e) {
                    var t = ce.asn1.x509.OID.name2oid(e);
                    if ("" === t) throw "DERObjectIdentifier oidName undefined: " + e;
                    this.setValueOidString(t);
                }, this.getFreshValueHex = function () {
                    return this.hV;
                }, void 0 !== e && ("string" == typeof e ? e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e) : void 0 !== e.oid ? this.setValueOidString(e.oid) : void 0 !== e.hex ? this.setValueHex(e.hex) : void 0 !== e.name && this.setValueName(e.name));
            }, re.lang.extend(ce.asn1.DERObjectIdentifier, ce.asn1.ASN1Object), ce.asn1.DEREnumerated = function (e) {
                ce.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function (e) {
                    this.hTLV = null, this.isModified = !0, this.hV = ce.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
                }, this.setByInteger = function (e) {
                    var t = new A(String(e), 10);
                    this.setByBigInteger(t);
                }, this.setValueHex = function (e) {
                    this.hV = e;
                }, this.getFreshValueHex = function () {
                    return this.hV;
                }, void 0 !== e && (void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex));
            }, re.lang.extend(ce.asn1.DEREnumerated, ce.asn1.ASN1Object), ce.asn1.DERUTF8String = function (e) {
                ce.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c";
            }, re.lang.extend(ce.asn1.DERUTF8String, ce.asn1.DERAbstractString), ce.asn1.DERNumericString = function (e) {
                ce.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12";
            }, re.lang.extend(ce.asn1.DERNumericString, ce.asn1.DERAbstractString), ce.asn1.DERPrintableString = function (e) {
                ce.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13";
            }, re.lang.extend(ce.asn1.DERPrintableString, ce.asn1.DERAbstractString), ce.asn1.DERTeletexString = function (e) {
                ce.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14";
            }, re.lang.extend(ce.asn1.DERTeletexString, ce.asn1.DERAbstractString), ce.asn1.DERIA5String = function (e) {
                ce.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16";
            }, re.lang.extend(ce.asn1.DERIA5String, ce.asn1.DERAbstractString), ce.asn1.DERUTCTime = function (e) {
                ce.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.setByDate = function (e) {
                    this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s);
                }, this.getFreshValueHex = function () {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "utc"),
                        this.hV = stohex(this.s)), this.hV;
                }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date));
            }, re.lang.extend(ce.asn1.DERUTCTime, ce.asn1.DERAbstractTime), ce.asn1.DERGeneralizedTime = function (e) {
                ce.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18",
                    this.withMillis = !1, this.setByDate = function (e) {
                    this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s);
                }, this.getFreshValueHex = function () {
                    return void 0 === this.date && void 0 === this.s && (this.date = new Date(), this.s = this.formatDate(this.date, "gen", this.withMillis),
                        this.hV = stohex(this.s)), this.hV;
                }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date),
                !0 === e.millis && (this.withMillis = !0));
            }, re.lang.extend(ce.asn1.DERGeneralizedTime, ce.asn1.DERAbstractTime), ce.asn1.DERSequence = function (e) {
                ce.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function () {
                    for (var e = "", t = 0; t < this.asn1Array.length; t++) {
                        e += this.asn1Array[t].getEncodedHex();
                    }
                    return this.hV = e, this.hV;
                };
            }, re.lang.extend(ce.asn1.DERSequence, ce.asn1.DERAbstractStructured), ce.asn1.DERSet = function (e) {
                ce.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0,
                    this.getFreshValueHex = function () {
                        for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
                            var i = this.asn1Array[t];
                            e.push(i.getEncodedHex());
                        }
                        return 1 == this.sortFlag && e.sort(), this.hV = e.join(""), this.hV;
                    }, void 0 !== e && void 0 !== e.sortflag && 0 == e.sortflag && (this.sortFlag = !1);
            }, re.lang.extend(ce.asn1.DERSet, ce.asn1.DERAbstractStructured), ce.asn1.DERTaggedObject = function (e) {
                ce.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "",
                    this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function (e, t, i) {
                    this.hT = t, this.isExplicit = e, this.asn1Object = i, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                        this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = i.getEncodedHex(),
                        this.hTLV = this.hTLV.replace(/^../, t), this.isModified = !1);
                }, this.getFreshValueHex = function () {
                    return this.hV;
                }, void 0 !== e && (void 0 !== e.tag && (this.hT = e.tag), void 0 !== e.explicit && (this.isExplicit = e.explicit),
                void 0 !== e.obj && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
            }, re.lang.extend(ce.asn1.DERTaggedObject, ce.asn1.ASN1Object);
            var le = function (e) {
                function t(i) {
                    var n = e.call(this) || this;
                    return i && ("string" == typeof i ? n.parseKey(i) : (t.hasPrivateKeyProperty(i) || t.hasPublicKeyProperty(i)) && n.parsePropertiesFrom(i)),
                        n;
                }

                return p(t, e), t.prototype.parseKey = function (e) {
                    try {
                        var t = 0, i = 0, n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e) ? y(e) : v.unarmor(e),
                            a = x.decode(n);
                        if (3 === a.sub.length && (a = a.sub[2].sub[0]), 9 === a.sub.length) {
                            t = a.sub[1].getHexStringValue(), this.n = N(t, 16), i = a.sub[2].getHexStringValue(),
                                this.e = parseInt(i, 16);
                            var o = a.sub[3].getHexStringValue();
                            this.d = N(o, 16);
                            var s = a.sub[4].getHexStringValue();
                            this.p = N(s, 16);
                            var r = a.sub[5].getHexStringValue();
                            this.q = N(r, 16);
                            var c = a.sub[6].getHexStringValue();
                            this.dmp1 = N(c, 16);
                            var l = a.sub[7].getHexStringValue();
                            this.dmq1 = N(l, 16);
                            var h = a.sub[8].getHexStringValue();
                            this.coeff = N(h, 16);
                        } else {
                            if (2 !== a.sub.length) return !1;
                            var u = a.sub[1].sub[0];
                            t = u.sub[0].getHexStringValue(), this.n = N(t, 16), i = u.sub[1].getHexStringValue(),
                                this.e = parseInt(i, 16);
                        }
                        return !0;
                    } catch (e) {
                        return !1;
                    }
                }, t.prototype.getPrivateBaseKey = function () {
                    var e = {
                        array: [new ce.asn1.DERInteger({
                            int: 0
                        }), new ce.asn1.DERInteger({
                            bigint: this.n
                        }), new ce.asn1.DERInteger({
                            int: this.e
                        }), new ce.asn1.DERInteger({
                            bigint: this.d
                        }), new ce.asn1.DERInteger({
                            bigint: this.p
                        }), new ce.asn1.DERInteger({
                            bigint: this.q
                        }), new ce.asn1.DERInteger({
                            bigint: this.dmp1
                        }), new ce.asn1.DERInteger({
                            bigint: this.dmq1
                        }), new ce.asn1.DERInteger({
                            bigint: this.coeff
                        })]
                    };
                    return new ce.asn1.DERSequence(e).getEncodedHex();
                }, t.prototype.getPrivateBaseKeyB64 = function () {
                    return u(this.getPrivateBaseKey());
                }, t.prototype.getPublicBaseKey = function () {
                    var e = new ce.asn1.DERSequence({
                        array: [new ce.asn1.DERObjectIdentifier({
                            oid: "1.2.840.113549.1.1.1"
                        }), new ce.asn1.DERNull()]
                    }), t = new ce.asn1.DERSequence({
                        array: [new ce.asn1.DERInteger({
                            bigint: this.n
                        }), new ce.asn1.DERInteger({
                            int: this.e
                        })]
                    }), i = new ce.asn1.DERBitString({
                        hex: "00" + t.getEncodedHex()
                    });
                    return new ce.asn1.DERSequence({
                        array: [e, i]
                    }).getEncodedHex();
                }, t.prototype.getPublicBaseKeyB64 = function () {
                    return u(this.getPublicBaseKey());
                }, t.wordwrap = function (e, t) {
                    if (t = t || 64, !e) return e;
                    var i = "(.{1," + t + "})( +|$\n?)|(.{1," + t + "})";
                    return e.match(RegExp(i, "g")).join("\n");
                }, t.prototype.getPrivateKey = function () {
                    var e = "-----BEGIN RSA PRIVATE KEY-----\n";
                    return e += t.wordwrap(this.getPrivateBaseKeyB64()) + "\n", e += "-----END RSA PRIVATE KEY-----";
                }, t.prototype.getPublicKey = function () {
                    var e = "-----BEGIN PUBLIC KEY-----\n";
                    return e += t.wordwrap(this.getPublicBaseKeyB64()) + "\n", e += "-----END PUBLIC KEY-----";
                }, t.hasPublicKeyProperty = function (e) {
                    return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e");
                }, t.hasPrivateKeyProperty = function (e) {
                    return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff");
                }, t.prototype.parsePropertiesFrom = function (e) {
                    this.n = e.n, this.e = e.e, e.hasOwnProperty("d") && (this.d = e.d, this.p = e.p,
                        this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff);
                }, t;
            }(ie), he = function () {
                function e(e) {
                    e = e || {}, this.default_key_size = parseInt(e.default_key_size, 10) || 1024, this.default_public_exponent = e.default_public_exponent || "010001",
                        this.log = e.log || !1, this.key = null;
                }

                return e.prototype.setKey = function (e) {
                    this.log && this.key && console.warn("A key was already set, overriding existing."),
                        this.key = new le(e);
                }, e.prototype.setPrivateKey = function (e) {
                    this.setKey(e);
                }, e.prototype.setPublicKey = function (e) {
                    this.setKey(e);
                }, e.prototype.decrypt = function (e) {
                    try {
                        return this.getKey().decrypt(d(e));
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.encrypt = function (e) {
                    try {
                        return u(this.getKey().encrypt(e));
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.sign = function (e, t, i) {
                    try {
                        return u(this.getKey().sign(e, t, i));
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.verify = function (e, t, i) {
                    try {
                        return this.getKey().verify(e, d(t), i);
                    } catch (e) {
                        return !1;
                    }
                }, e.prototype.getKey = function (e) {
                    if (!this.key) {
                        if (this.key = new le(), e && "[object Function]" === {}.toString.call(e)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                        this.key.generate(this.default_key_size, this.default_public_exponent);
                    }
                    return this.key;
                }, e.prototype.getPrivateKey = function () {
                    return this.getKey().getPrivateKey();
                }, e.prototype.getPrivateKeyB64 = function () {
                    return this.getKey().getPrivateBaseKeyB64();
                }, e.prototype.getPublicKey = function () {
                    return this.getKey().getPublicKey();
                }, e.prototype.getPublicKeyB64 = function () {
                    return this.getKey().getPublicBaseKeyB64();
                }, e.version = "3.0.0-rc.1", e;
            }();
            window.JSEncrypt = he, e.JSEncrypt = he, e.default = he, Object.defineProperty(e, "__esModule", {
                value: !0
            });
        });
    }, {}],
}, {}, [
    // "CryptoJS",
    "jsencrypt"
]);

function get_openid(openid) {
    // var openid = "oe6z64s0Dw11mIGZ3yy0xNrxW5CA";
    var e = new window.JSEncrypt();
    var u = "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMZ0MINl1LEgBMZ+TL9I1CkEyb4dSsiW/afzX/6miJz+X1jf0yEgwW2Gk4HS2xqOolOEUm1NptTpTb3246qVQjcCAwEAAQ==-----END PUBLIC KEY-----";
    e.setPublicKey(u)
    return e.encrypt(openid, "base64")
}

function get_checkSign2(record, openid) {


    var i = md5("32roiFEI" + JSON.stringify(record) + openid).toString();
    var checkSign2 = i.charAt(8) + i.charAt(3) + i.charAt(21) + i.charAt(10) + i.charAt(16) + i.charAt(9) + i.charAt(11) + i.charAt(23);

    return checkSign2
}

function get_code() {
    // type为native时的code
    var code = 100 + Math.floor(900 * Math.random()) + "d42fe" + Math.floor(10 * Math.random());
    console.log(code);
    return code;
}


module.exports = {
    get_openid,
    get_code,
    get_checkSign2
}


var openid = "oe6z64s0Dw11mIGZ3yy0xNrxW5CA";
var record = {
    "barrage_13": "t48f905411",
    "cookbook_unlock_food_50": "t0c6012401",
    "xiariBagNum": "t24a863622",
    "refreshBagTime": "t3d38d2161625238063945",
    "cumulative_food_food_49": "tfb6b37045",
    "freeAdCount": "t777ff9831",
    "noticeRedDotTime": "{\"noticeRedDotTime\":\"2021-6-16-0\"}",
    "npcInitStep": "t1e2433481",
    "muteEffect": "t24c895951",
    "Band": "{\"InviteCard\":{\"refreshTime\":1625232223289,\"aDTimes\":0,\"buyTimes\":0,\"cardsNum\":0,\"daily\":{}},\"CallCard\":{\"refreshTime\":1625232223292,\"aDTimes\":0,\"buyTimes\":0,\"cardsNum\":1,\"daily\":{}},\"BandTips\":{\"customers\":[],\"film\":0,\"money\":0,\"lastTime\":0},\"BandUnlockState\":{},\"ShowTime\":{},\"Fans\":{}}",
    "ornaments": "{\"ornamentsMap\":{}}",
    "customer_unlock_npc_3": "ta29a82881",
    "xinshouBagStartTime": "t66fae6071625232201942",
    "pondFree": "{\"times\":0}",
    "freeFishTimes": "taf0ac8510",
    "cumulative_money": "teb23a7834280",
    "theme_theme_diningRoom_group": "t018172882",
    "theme_theme_kitchRoom_group": "t83d447662",
    "tutorials_progress_two": "t8d9159884",
    "tutorials_progress": "t32e886306",
    "um_cache_60306983425ec25f10f8a49e": "{\"imprint\":\"eyJpbnN0YWxsX2NhbXBhaWduIjoidW5rbm93biIsImluc3RhbGxfc2NlbmUiOiJ3eF8xMDg5Iiwi\\r\\naW5zdGFsbF9jaGFubmVsIjoidW5rbm93biIsImluc3RhbGxfZGF0ZXRpbWUiOiIyMDIxLTA2LTMw\\r\\nIDIzOjE1OjI0In0=\",\"current_session\":{\"id\":\"ErvpyJeMtj1625238019920\",\"start_time\":1625238019920,\"options\":{\"scene\":\"wx_1089\"},\"end_time\":1625238059460,\"duration\":39542},\"requests\":[]}",
    "shareTimes": "tc1ba46290",
    "building_lv_building_24_group": "te1b909002",
    "resetTimestamp": "t734764331625232201737",
    "fixDlg_courtyard": "t2810a1901",
    "playTime": "tacd3e245240549.00000000012",
    "openid": "{\"openid\":\"oe6z64s0Dw11mIGZ3yy0xNrxW5CA\",\"serverId\":275}",
    "dailyIncome": "{\"lastTime\":1625232216287}",
    "noSuitAdCount": "t4c6041780",
    "muteBgm": "te082d2271",
    "lastTimeRecord": "tb64827281578965954705",
    "building_lv_building_3_group": "t7a3ac6412",
    "customer_unlock_customer_54": "tafcd64481",
    "lastCreateNpcTime": "t6daae1371625238085960",
    "barrage_8": "tdc10b8021",
    "first_watch_ad": "t6bcd99441",
    "recommendAppVersion": "t2821d7001",
    "customerComingCount": "tcfa5440514",
    "PondUserDataKey": "[{\"boothID\":1,\"owner\":-1,\"state\":1,\"constructionEndTime\":-1,\"hiringStartTime\":-1,\"hiringEndTime\":-1,\"hiringOutputTimes\":[],\"caseReadyFishTag\":-1,\"caseReadyFishID\":-1,\"rentingEndTime\":-1,\"rentingResult\":null,\"rentingLifeLeftTime\":-1,\"rentingFishID\":-1,\"offlineOutputTimes\":-1,\"offlineOwner\":-1},{\"boothID\":2,\"owner\":-1,\"state\":1,\"constructionEndTime\":-1,\"hiringStartTime\":-1,\"hiringEndTime\":-1,\"hiringOutputTimes\":[],\"caseReadyFishTag\":-1,\"caseReadyFishID\":-1,\"rentingEndTime\":-1,\"rentingResult\":null,\"rentingLifeLeftTime\":-1,\"rentingFishID\":-1,\"offlineOutputTimes\":-1,\"offlineOwner\":-1},{\"boothID\":3,\"owner\":-1,\"state\":1,\"constructionEndTime\":-1,\"hiringStartTime\":-1,\"hiringEndTime\":-1,\"hiringOutputTimes\":[],\"caseReadyFishTag\":-1,\"caseReadyFishID\":-1,\"rentingEndTime\":-1,\"rentingResult\":null,\"rentingLifeLeftTime\":-1,\"rentingFishID\":-1,\"offlineOutputTimes\":-1,\"offlineOwner\":-1},{\"boothID\":4,\"owner\":-1,\"state\":1,\"constructionEndTime\":-1,\"hiringStartTime\":-1,\"hiringEndTime\":-1,\"hiringOutputTimes\":[],\"caseReadyFishTag\":-1,\"caseReadyFishID\":-1,\"rentingEndTime\":-1,\"rentingResult\":null,\"rentingLifeLeftTime\":-1,\"rentingFishID\":-1,\"offlineOutputTimes\":-1,\"offlineOwner\":-1},{\"boothID\":5,\"owner\":-1,\"state\":1,\"constructionEndTime\":-1,\"hiringStartTime\":-1,\"hiringEndTime\":-1,\"hiringOutputTimes\":[],\"caseReadyFishTag\":-1,\"caseReadyFishID\":-1,\"rentingEndTime\":-1,\"rentingResult\":null,\"rentingLifeLeftTime\":-1,\"rentingFishID\":-1,\"offlineOutputTimes\":-1,\"offlineOwner\":-1},{\"boothID\":6,\"owner\":-1,\"state\":1,\"constructionEndTime\":-1,\"hiringStartTime\":-1,\"hiringEndTime\":-1,\"hiringOutputTimes\":[],\"caseReadyFishTag\":-1,\"caseReadyFishID\":-1,\"rentingEndTime\":-1,\"rentingResult\":null,\"rentingLifeLeftTime\":-1,\"rentingFishID\":-1,\"offlineOutputTimes\":-1,\"offlineOwner\":-1}]",
    "gid": "tf30d54741",
    "garbage_time": "t450028831578966062888",
    "um_unid": "ocONN1GlbcOhm0lDsiES5cuFx4JA",
    "theme_theme_outdoor_group": "t5b8b71888",
    "cumulative_customer": "tb854f31018",
    "freeRewardTimestamp": "td7a493651625238064176",
    "tipTimestamp": "tf9f402011625238085817",
    "CourtyardPosters": "{\"poster_7\":{\"status\":1,\"timestamp\":1625232223302,\"new\":true,\"shared\":false}}",
    "building_lv_building_2_group": "tf0e627652",
    "building_lv_booth_zhaozu": "t1ba605522",
    "building_lv_building_1_group": "taf5ff4842",
    "customer_unlock_customer_2": "t0fc3a1931",
    "fixDlg_p2": "t9db4b5631",
    "signupTime": "tf69cb9811578412942481",
    "advertiseAdCount": "td42be9530",
    "cumulative_customer_customer_40": "t284d09141",
    "cumulative_food_food_10": "tf1a8792712",
    "customer_unlock_customer_40": "t21a6b6591",
    "richangBagNum": "t8fd475432",
    "money": "t72b873272780",
    "cumulative_customer_customer_2": "t7d16576812",
    "customer_michael_end": "t79b803991",
    "version": "t30d8183734",
    "um_od": "oe6z64s0Dw11mIGZ3yy0xNrxW5CA",
    "theme_theme_buffetRoom_group": "tc0df02502",
    "cookbook_unlock_food_49": "t9ff0c6011",
    "recordItemBag": "{\"coin\":{\"building_1_group\":{\"incomeSum\":120,\"nodesCount\":1,\"endPos\":{\"x\":-140.13840793143083,\"y\":167.24163637083353}},\"building_2_group\":{\"incomeSum\":960,\"nodesCount\":8,\"endPos\":{\"x\":178.57103938011713,\"y\":143.94549651972176}},\"building_3_group\":{\"incomeSum\":100,\"nodesCount\":1,\"endPos\":{\"x\":526.7632666989832,\"y\":118.28415516297592}}},\"checkSign\":\"fc48d\"}",
    "capsuleFreeTimes": "t2f9b63060",
    "cookbook_unlock_food_10": "t32b434931",
    "cumulative_customer_customer_54": "tca6b66704",
    "recordCustomer": "[{\"cid\":\"customer_40\",\"adIndex\":4},{\"cid\":\"customer_2\",\"adIndex\":4},{\"cid\":\"customer_2\",\"adIndex\":4},{\"cid\":\"customer_40\",\"adIndex\":4},{\"cid\":\"customer_40\",\"adIndex\":4},{\"cid\":\"customer_54\",\"adIndex\":4},{\"cid\":\"customer_40\"}]",
    "um_uuid": "GBwEmZztwN16252321722623QuviDCud",
    "lastServerId": "t911a81711",
    "reportUserId": "dcA8663568D8E11E0C",
    "lastServerId_1": "td02de5211"
}



console.log(get_checkSign2(record, openid))