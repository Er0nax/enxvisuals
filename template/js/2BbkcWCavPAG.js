/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var j_ = Object.create;
    var nn = Object.defineProperty;
    var z_ = Object.getOwnPropertyDescriptor;
    var K_ = Object.getOwnPropertyNames;
    var Y_ = Object.getPrototypeOf, $_ = Object.prototype.hasOwnProperty;
    var de = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports), Pe = (e, t) => {
        for (var r in t) nn(e, r, {get: t[r], enumerable: !0})
    }, Ss = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let i of K_(t)) !$_.call(e, i) && i !== r && nn(e, i, {get: () => t[i], enumerable: !(n = z_(t, i)) || n.enumerable});
        return e
    };
    var oe = (e, t, r) => (r = e != null ? j_(Y_(e)) : {}, Ss(t || !e || !e.__esModule ? nn(r, "default", {value: e, enumerable: !0}) : r, e)), et = e => Ss(nn({}, "__esModule", {value: !0}), e);
    var Cs = c(() => {
        "use strict";
        (function () {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./), t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function () {
                    return !1
                };
                return
            }
            let n = function (a) {
                let u = window.getComputedStyle(a, null), f = u.getPropertyValue("position"), h = u.getPropertyValue("overflow"), p = u.getPropertyValue("display");
                (!f || f === "static") && (a.style.position = "relative"), h !== "hidden" && (a.style.overflow = "hidden"), (!p || p === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
            }, i = function (a) {
                let u = window.getComputedStyle(a, null), f = {"max-width": "none", "max-height": "none", "min-width": "0px", "min-height": "0px", top: "auto", right: "auto", bottom: "auto", left: "auto", "margin-top": "0px", "margin-right": "0px", "margin-bottom": "0px", "margin-left": "0px"};
                for (let h in f) u.getPropertyValue(h) !== f[h] && (a.style[h] = f[h])
            }, o = function (a) {
                let u = a.parentNode;
                n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
            }, s = function (a) {
                if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]"); else if (a && a.nodeName) a = [a]; else if (typeof a == "object" && a.length && a[0].nodeName) a = a; else return !1;
                for (let u = 0; u < a.length; u++) {
                    if (!a[u].nodeName) continue;
                    let f = a[u].nodeName.toLowerCase();
                    if (f === "img") {
                        if (t) continue;
                        a[u].complete ? o(a[u]) : a[u].addEventListener("load", function () {
                            o(this)
                        })
                    } else f === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function () {
                        o(this)
                    }) : o(a[u])
                }
                return !0
            };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Rs = c(() => {
        "use strict";
        (function () {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function () {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function () {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function (i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function (i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }

            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function () {
                    $(this).parent().find(".w-background-video--control").each(function () {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function (i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget), s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s) if (s.paused) {
                        let a = s.play();
                        r(o), a && typeof a.catch == "function" && a.catch(() => {
                            t(o)
                        })
                    } else s.pause(), t(o)
                })
            })
        })()
    });
    var Ci = c(() => {
        "use strict";
        window.tram = function (e) {
            function t(l, b) {
                var O = new E.Bare;
                return O.init(l, b)
            }

            function r(l) {
                return l.replace(/[A-Z]/g, function (b) {
                    return "-" + b.toLowerCase()
                })
            }

            function n(l) {
                var b = parseInt(l.slice(1), 16), O = b >> 16 & 255, x = b >> 8 & 255, w = 255 & b;
                return [O, x, w]
            }

            function i(l, b, O) {
                return "#" + (1 << 24 | l << 16 | b << 8 | O).toString(16).slice(1)
            }

            function o() {
            }

            function s(l, b) {
                f("Type warning: Expected: [" + l + "] Got: [" + typeof b + "] " + b)
            }

            function a(l, b, O) {
                f("Units do not match [" + l + "]: " + b + ", " + O)
            }

            function u(l, b, O) {
                if (b !== void 0 && (O = b), l === void 0) return O;
                var x = O;
                return lt.test(l) || !Vt.test(l) ? x = parseInt(l, 10) : Vt.test(l) && (x = 1e3 * parseFloat(l)), 0 > x && (x = 0), x === x ? x : O
            }

            function f(l) {
                se.debug && window && window.console.warn(l)
            }

            function h(l) {
                for (var b = -1, O = l ? l.length : 0, x = []; ++b < O;) {
                    var w = l[b];
                    w && x.push(w)
                }
                return x
            }

            var p = function (l, b, O) {
                    function x(te) {
                        return typeof te == "object"
                    }

                    function w(te) {
                        return typeof te == "function"
                    }

                    function C() {
                    }

                    function K(te, le) {
                        function X() {
                            var Ae = new re;
                            return w(Ae.init) && Ae.init.apply(Ae, arguments), Ae
                        }

                        function re() {
                        }

                        le === O && (le = te, te = Object), X.Bare = re;
                        var ne, ye = C[l] = te[l], Je = re[l] = X[l] = new C;
                        return Je.constructor = X, X.mixin = function (Ae) {
                            return re[l] = X[l] = K(X, Ae)[l], X
                        }, X.open = function (Ae) {
                            if (ne = {}, w(Ae) ? ne = Ae.call(X, Je, ye, X, te) : x(Ae) && (ne = Ae), x(ne)) for (var Er in ne) b.call(ne, Er) && (Je[Er] = ne[Er]);
                            return w(Je.init) || (Je.init = te), X
                        }, X.open(le)
                    }

                    return K
                }("prototype", {}.hasOwnProperty), y = {
                    ease: ["ease", function (l, b, O, x) {
                        var w = (l /= x) * l, C = w * l;
                        return b + O * (-2.75 * C * w + 11 * w * w + -15.5 * C + 8 * w + .25 * l)
                    }], "ease-in": ["ease-in", function (l, b, O, x) {
                        var w = (l /= x) * l, C = w * l;
                        return b + O * (-1 * C * w + 3 * w * w + -3 * C + 2 * w)
                    }], "ease-out": ["ease-out", function (l, b, O, x) {
                        var w = (l /= x) * l, C = w * l;
                        return b + O * (.3 * C * w + -1.6 * w * w + 2.2 * C + -1.8 * w + 1.9 * l)
                    }], "ease-in-out": ["ease-in-out", function (l, b, O, x) {
                        var w = (l /= x) * l, C = w * l;
                        return b + O * (2 * C * w + -5 * w * w + 2 * C + 2 * w)
                    }], linear: ["linear", function (l, b, O, x) {
                        return O * l / x + b
                    }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (l, b, O, x) {
                        return O * (l /= x) * l + b
                    }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (l, b, O, x) {
                        return -O * (l /= x) * (l - 2) + b
                    }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (l, b, O, x) {
                        return (l /= x / 2) < 1 ? O / 2 * l * l + b : -O / 2 * (--l * (l - 2) - 1) + b
                    }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (l, b, O, x) {
                        return O * (l /= x) * l * l + b
                    }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (l, b, O, x) {
                        return O * ((l = l / x - 1) * l * l + 1) + b
                    }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (l, b, O, x) {
                        return (l /= x / 2) < 1 ? O / 2 * l * l * l + b : O / 2 * ((l -= 2) * l * l + 2) + b
                    }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (l, b, O, x) {
                        return O * (l /= x) * l * l * l + b
                    }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (l, b, O, x) {
                        return -O * ((l = l / x - 1) * l * l * l - 1) + b
                    }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (l, b, O, x) {
                        return (l /= x / 2) < 1 ? O / 2 * l * l * l * l + b : -O / 2 * ((l -= 2) * l * l * l - 2) + b
                    }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (l, b, O, x) {
                        return O * (l /= x) * l * l * l * l + b
                    }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (l, b, O, x) {
                        return O * ((l = l / x - 1) * l * l * l * l + 1) + b
                    }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (l, b, O, x) {
                        return (l /= x / 2) < 1 ? O / 2 * l * l * l * l * l + b : O / 2 * ((l -= 2) * l * l * l * l + 2) + b
                    }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (l, b, O, x) {
                        return -O * Math.cos(l / x * (Math.PI / 2)) + O + b
                    }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (l, b, O, x) {
                        return O * Math.sin(l / x * (Math.PI / 2)) + b
                    }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (l, b, O, x) {
                        return -O / 2 * (Math.cos(Math.PI * l / x) - 1) + b
                    }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (l, b, O, x) {
                        return l === 0 ? b : O * Math.pow(2, 10 * (l / x - 1)) + b
                    }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (l, b, O, x) {
                        return l === x ? b + O : O * (-Math.pow(2, -10 * l / x) + 1) + b
                    }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (l, b, O, x) {
                        return l === 0 ? b : l === x ? b + O : (l /= x / 2) < 1 ? O / 2 * Math.pow(2, 10 * (l - 1)) + b : O / 2 * (-Math.pow(2, -10 * --l) + 2) + b
                    }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (l, b, O, x) {
                        return -O * (Math.sqrt(1 - (l /= x) * l) - 1) + b
                    }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (l, b, O, x) {
                        return O * Math.sqrt(1 - (l = l / x - 1) * l) + b
                    }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (l, b, O, x) {
                        return (l /= x / 2) < 1 ? -O / 2 * (Math.sqrt(1 - l * l) - 1) + b : O / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + b
                    }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (l, b, O, x, w) {
                        return w === void 0 && (w = 1.70158), O * (l /= x) * l * ((w + 1) * l - w) + b
                    }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (l, b, O, x, w) {
                        return w === void 0 && (w = 1.70158), O * ((l = l / x - 1) * l * ((w + 1) * l + w) + 1) + b
                    }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (l, b, O, x, w) {
                        return w === void 0 && (w = 1.70158), (l /= x / 2) < 1 ? O / 2 * l * l * (((w *= 1.525) + 1) * l - w) + b : O / 2 * ((l -= 2) * l * (((w *= 1.525) + 1) * l + w) + 2) + b
                    }]
                }, T = {"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"}, _ = document, I = window, M = "bkwld-tram", S = /[\-\.0-9]/g, N = /[A-Z]/, A = "number", D = /^(rgb|#)/,
                q = /(em|cm|mm|in|pt|pc|px)$/, P = /(em|cm|mm|in|pt|pc|px|%)$/, H = /(deg|rad|turn)$/, B = "unitless", j = /(all|none) 0s ease 0s/, Q = /^(width|height)$/, U = " ", R = _.createElement("a"), g = ["Webkit", "Moz", "O", "ms"], L = ["-webkit-", "-moz-", "-o-", "-ms-"],
                F = function (l) {
                    if (l in R.style) return {dom: l, css: l};
                    var b, O, x = "", w = l.split("-");
                    for (b = 0; b < w.length; b++) x += w[b].charAt(0).toUpperCase() + w[b].slice(1);
                    for (b = 0; b < g.length; b++) if (O = g[b] + x, O in R.style) return {dom: O, css: L[b] + l}
                }, V = t.support = {bind: Function.prototype.bind, transform: F("transform"), transition: F("transition"), backface: F("backface-visibility"), timing: F("transition-timing-function")};
            if (V.transition) {
                var Z = V.timing.dom;
                if (R.style[Z] = y["ease-in-back"][0], !R.style[Z]) for (var J in T) y[J][0] = T[J]
            }
            var G = t.frame = function () {
                var l = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                return l && V.bind ? l.bind(I) : function (b) {
                    I.setTimeout(b, 16)
                }
            }(), W = t.now = function () {
                var l = I.performance, b = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return b && V.bind ? b.bind(l) : Date.now || function () {
                    return +new Date
                }
            }(), d = p(function (l) {
                function b(ee, ie) {
                    var ve = h(("" + ee).split(U)), ue = ve[0];
                    ie = ie || {};
                    var Se = Ze[ue];
                    if (!Se) return f("Unsupported property: " + ue);
                    if (!ie.weak || !this.props[ue]) {
                        var We = Se[0], Ne = this.props[ue];
                        return Ne || (Ne = this.props[ue] = new We.Bare), Ne.init(this.$el, ve, Se, ie), Ne
                    }
                }

                function O(ee, ie, ve) {
                    if (ee) {
                        var ue = typeof ee;
                        if (ie || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ue == "number" && ie) return this.timer = new ae({duration: ee, context: this, complete: C}), void (this.active = !0);
                        if (ue == "string" && ie) {
                            switch (ee) {
                                case"hide":
                                    X.call(this);
                                    break;
                                case"stop":
                                    K.call(this);
                                    break;
                                case"redraw":
                                    re.call(this);
                                    break;
                                default:
                                    b.call(this, ee, ve && ve[1])
                            }
                            return C.call(this)
                        }
                        if (ue == "function") return void ee.call(this, this);
                        if (ue == "object") {
                            var Se = 0;
                            Je.call(this, ee, function (Ee, B_) {
                                Ee.span > Se && (Se = Ee.span), Ee.stop(), Ee.animate(B_)
                            }, function (Ee) {
                                "wait" in Ee && (Se = u(Ee.wait, 0))
                            }), ye.call(this), Se > 0 && (this.timer = new ae({duration: Se, context: this}), this.active = !0, ie && (this.timer.complete = C));
                            var We = this, Ne = !1, rn = {};
                            G(function () {
                                Je.call(We, ee, function (Ee) {
                                    Ee.active && (Ne = !0, rn[Ee.name] = Ee.nextStyle)
                                }), Ne && We.$el.css(rn)
                            })
                        }
                    }
                }

                function x(ee) {
                    ee = u(ee, 0), this.active ? this.queue.push({options: ee}) : (this.timer = new ae({duration: ee, context: this, complete: C}), this.active = !0)
                }

                function w(ee) {
                    return this.active ? (this.queue.push({options: ee, args: arguments}), void (this.timer.complete = C)) : f("No active transition timer. Use start() or wait() before then().")
                }

                function C() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var ee = this.queue.shift();
                        O.call(this, ee.options, !0, ee.args)
                    }
                }

                function K(ee) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var ie;
                    typeof ee == "string" ? (ie = {}, ie[ee] = 1) : ie = typeof ee == "object" && ee != null ? ee : this.props, Je.call(this, ie, Ae), ye.call(this)
                }

                function te(ee) {
                    K.call(this, ee), Je.call(this, ee, Er, W_)
                }

                function le(ee) {
                    typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                }

                function X() {
                    K.call(this), this.el.style.display = "none"
                }

                function re() {
                    this.el.offsetHeight
                }

                function ne() {
                    K.call(this), e.removeData(this.el, M), this.$el = this.el = null
                }

                function ye() {
                    var ee, ie, ve = [];
                    this.upstream && ve.push(this.upstream);
                    for (ee in this.props) ie = this.props[ee], ie.active && ve.push(ie.string);
                    ve = ve.join(","), this.style !== ve && (this.style = ve, this.el.style[V.transition.dom] = ve)
                }

                function Je(ee, ie, ve) {
                    var ue, Se, We, Ne, rn = ie !== Ae, Ee = {};
                    for (ue in ee) We = ee[ue], ue in xe ? (Ee.transform || (Ee.transform = {}), Ee.transform[ue] = We) : (N.test(ue) && (ue = r(ue)), ue in Ze ? Ee[ue] = We : (Ne || (Ne = {}), Ne[ue] = We));
                    for (ue in Ee) {
                        if (We = Ee[ue], Se = this.props[ue], !Se) {
                            if (!rn) continue;
                            Se = b.call(this, ue)
                        }
                        ie.call(this, Se, We)
                    }
                    ve && Ne && ve.call(this, Ne)
                }

                function Ae(ee) {
                    ee.stop()
                }

                function Er(ee, ie) {
                    ee.set(ie)
                }

                function W_(ee) {
                    this.$el.css(ee)
                }

                function Xe(ee, ie) {
                    l[ee] = function () {
                        return this.children ? H_.call(this, ie, arguments) : (this.el && ie.apply(this, arguments), this)
                    }
                }

                function H_(ee, ie) {
                    var ve, ue = this.children.length;
                    for (ve = 0; ue > ve; ve++) ee.apply(this.children[ve], ie);
                    return this
                }

                l.init = function (ee) {
                    if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
                        var ie = Fe(this.el, "transition");
                        ie && !j.test(ie) && (this.upstream = ie)
                    }
                    V.backface && se.hideBackface && pe(this.el, V.backface.css, "hidden")
                }, Xe("add", b), Xe("start", O), Xe("wait", x), Xe("then", w), Xe("next", C), Xe("stop", K), Xe("set", te), Xe("show", le), Xe("hide", X), Xe("redraw", re), Xe("destroy", ne)
            }), E = p(d, function (l) {
                function b(O, x) {
                    var w = e.data(O, M) || e.data(O, M, new d.Bare);
                    return w.el || w.init(O), x ? w.start(x) : w
                }

                l.init = function (O, x) {
                    var w = e(O);
                    if (!w.length) return this;
                    if (w.length === 1) return b(w[0], x);
                    var C = [];
                    return w.each(function (K, te) {
                        C.push(b(te, x))
                    }), this.children = C, this
                }
            }), m = p(function (l) {
                function b() {
                    var C = this.get();
                    this.update("auto");
                    var K = this.get();
                    return this.update(C), K
                }

                function O(C, K, te) {
                    return K !== void 0 && (te = K), C in y ? C : te
                }

                function x(C) {
                    var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
                    return (K ? i(K[1], K[2], K[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }

                var w = {duration: 500, ease: "ease", delay: 0};
                l.init = function (C, K, te, le) {
                    this.$el = C, this.el = C[0];
                    var X = K[0];
                    te[2] && (X = te[2]), Ge[X] && (X = Ge[X]), this.name = X, this.type = te[1], this.duration = u(K[1], this.duration, w.duration), this.ease = O(K[2], this.ease, w.ease), this.delay = u(K[3], this.delay, w.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = le.unit || this.unit || se.defaultUnit, this.angle = le.angle || this.angle || se.defaultAngle, se.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + U + this.duration + "ms" + (this.ease != "ease" ? U + y[this.ease][0] : "") + (this.delay ? U + this.delay + "ms" : ""))
                }, l.set = function (C) {
                    C = this.convert(C, this.type), this.update(C), this.redraw()
                }, l.transition = function (C) {
                    this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = b.call(this))), this.nextStyle = C
                }, l.fallback = function (C) {
                    var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                    C = this.convert(C, this.type), this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)), C == "auto" && (C = b.call(this))), this.tween = new Y({from: K, to: C, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this})
                }, l.get = function () {
                    return Fe(this.el, this.name)
                }, l.update = function (C) {
                    pe(this.el, this.name, C)
                }, l.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, pe(this.el, this.name, this.get()));
                    var C = this.tween;
                    C && C.context && C.destroy()
                }, l.convert = function (C, K) {
                    if (C == "auto" && this.auto) return C;
                    var te, le = typeof C == "number", X = typeof C == "string";
                    switch (K) {
                        case A:
                            if (le) return C;
                            if (X && C.replace(S, "") === "") return +C;
                            te = "number(unitless)";
                            break;
                        case D:
                            if (X) {
                                if (C === "" && this.original) return this.original;
                                if (K.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : x(C)
                            }
                            te = "hex or rgb string";
                            break;
                        case q:
                            if (le) return C + this.unit;
                            if (X && K.test(C)) return C;
                            te = "number(px) or string(unit)";
                            break;
                        case P:
                            if (le) return C + this.unit;
                            if (X && K.test(C)) return C;
                            te = "number(px) or string(unit or %)";
                            break;
                        case H:
                            if (le) return C + this.angle;
                            if (X && K.test(C)) return C;
                            te = "number(deg) or string(angle)";
                            break;
                        case B:
                            if (le || X && P.test(C)) return C;
                            te = "number(unitless) or string(unit or %)"
                    }
                    return s(te, C), C
                }, l.redraw = function () {
                    this.el.offsetHeight
                }
            }), v = p(m, function (l, b) {
                l.init = function () {
                    b.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), D))
                }
            }), k = p(m, function (l, b) {
                l.init = function () {
                    b.init.apply(this, arguments), this.animate = this.fallback
                }, l.get = function () {
                    return this.$el[this.name]()
                }, l.update = function (O) {
                    this.$el[this.name](O)
                }
            }), z = p(m, function (l, b) {
                function O(x, w) {
                    var C, K, te, le, X;
                    for (C in x) le = xe[C], te = le[0], K = le[1] || C, X = this.convert(x[C], te), w.call(this, K, X, te)
                }

                l.init = function () {
                    b.init.apply(this, arguments), this.current || (this.current = {}, xe.perspective && se.perspective && (this.current.perspective = se.perspective, pe(this.el, this.name, this.style(this.current)), this.redraw()))
                }, l.set = function (x) {
                    O.call(this, x, function (w, C) {
                        this.current[w] = C
                    }), pe(this.el, this.name, this.style(this.current)), this.redraw()
                }, l.transition = function (x) {
                    var w = this.values(x);
                    this.tween = new be({current: this.current, values: w, duration: this.duration, delay: this.delay, ease: this.ease});
                    var C, K = {};
                    for (C in this.current) K[C] = C in w ? w[C] : this.current[C];
                    this.active = !0, this.nextStyle = this.style(K)
                }, l.fallback = function (x) {
                    var w = this.values(x);
                    this.tween = new be({current: this.current, values: w, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this})
                }, l.update = function () {
                    pe(this.el, this.name, this.style(this.current))
                }, l.style = function (x) {
                    var w, C = "";
                    for (w in x) C += w + "(" + x[w] + ") ";
                    return C
                }, l.values = function (x) {
                    var w, C = {};
                    return O.call(this, x, function (K, te, le) {
                        C[K] = te, this.current[K] === void 0 && (w = 0, ~K.indexOf("scale") && (w = 1), this.current[K] = this.convert(w, le))
                    }), C
                }
            }), Y = p(function (l) {
                function b(X) {
                    te.push(X) === 1 && G(O)
                }

                function O() {
                    var X, re, ne, ye = te.length;
                    if (ye) for (G(O), re = W(), X = ye; X--;) ne = te[X], ne && ne.render(re)
                }

                function x(X) {
                    var re, ne = e.inArray(X, te);
                    ne >= 0 && (re = te.slice(ne + 1), te.length = ne, re.length && (te = te.concat(re)))
                }

                function w(X) {
                    return Math.round(X * le) / le
                }

                function C(X, re, ne) {
                    return i(X[0] + ne * (re[0] - X[0]), X[1] + ne * (re[1] - X[1]), X[2] + ne * (re[2] - X[2]))
                }

                var K = {ease: y.ease[1], from: 0, to: 1};
                l.init = function (X) {
                    this.duration = X.duration || 0, this.delay = X.delay || 0;
                    var re = X.ease || K.ease;
                    y[re] && (re = y[re][1]), typeof re != "function" && (re = K.ease), this.ease = re, this.update = X.update || o, this.complete = X.complete || o, this.context = X.context || this, this.name = X.name;
                    var ne = X.from, ye = X.to;
                    ne === void 0 && (ne = K.from), ye === void 0 && (ye = K.to), this.unit = X.unit || "", typeof ne == "number" && typeof ye == "number" ? (this.begin = ne, this.change = ye - ne) : this.format(ye, ne), this.value = this.begin + this.unit, this.start = W(), X.autoplay !== !1 && this.play()
                }, l.play = function () {
                    this.active || (this.start || (this.start = W()), this.active = !0, b(this))
                }, l.stop = function () {
                    this.active && (this.active = !1, x(this))
                }, l.render = function (X) {
                    var re, ne = X - this.start;
                    if (this.delay) {
                        if (ne <= this.delay) return;
                        ne -= this.delay
                    }
                    if (ne < this.duration) {
                        var ye = this.ease(ne, 0, 1, this.duration);
                        return re = this.startRGB ? C(this.startRGB, this.endRGB, ye) : w(this.begin + ye * this.change), this.value = re + this.unit, void this.update.call(this.context, this.value)
                    }
                    re = this.endHex || this.begin + this.change, this.value = re + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, l.format = function (X, re) {
                    if (re += "", X += "", X.charAt(0) == "#") return this.startRGB = n(re), this.endRGB = n(X), this.endHex = X, this.begin = 0, void (this.change = 1);
                    if (!this.unit) {
                        var ne = re.replace(S, ""), ye = X.replace(S, "");
                        ne !== ye && a("tween", re, X), this.unit = ne
                    }
                    re = parseFloat(re), X = parseFloat(X), this.begin = this.value = re, this.change = X - re
                }, l.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = o
                };
                var te = [], le = 1e3
            }), ae = p(Y, function (l) {
                l.init = function (b) {
                    this.duration = b.duration || 0, this.complete = b.complete || o, this.context = b.context, this.play()
                }, l.render = function (b) {
                    var O = b - this.start;
                    O < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }), be = p(Y, function (l, b) {
                l.init = function (O) {
                    this.context = O.context, this.update = O.update, this.tweens = [], this.current = O.current;
                    var x, w;
                    for (x in O.values) w = O.values[x], this.current[x] !== w && this.tweens.push(new Y({name: x, from: this.current[x], to: w, duration: O.duration, delay: O.delay, ease: O.ease, autoplay: !1}));
                    this.play()
                }, l.render = function (O) {
                    var x, w, C = this.tweens.length, K = !1;
                    for (x = C; x--;) w = this.tweens[x], w.context && (w.render(O), this.current[w.name] = w.value, K = !0);
                    return K ? void (this.update && this.update.call(this.context)) : this.destroy()
                }, l.destroy = function () {
                    if (b.destroy.call(this), this.tweens) {
                        var O, x = this.tweens.length;
                        for (O = x; O--;) this.tweens[O].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }), se = t.config = {debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !V.transition, agentTests: []};
            t.fallback = function (l) {
                if (!V.transition) return se.fallback = !0;
                se.agentTests.push("(" + l + ")");
                var b = new RegExp(se.agentTests.join("|"), "i");
                se.fallback = b.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function (l) {
                return new Y(l)
            }, t.delay = function (l, b, O) {
                return new ae({complete: b, duration: l, context: O})
            }, e.fn.tram = function (l) {
                return t.call(null, this, l)
            };
            var pe = e.style, Fe = e.css, Ge = {transform: V.transform && V.transform.css}, Ze = {
                color: [v, D],
                background: [v, D, "background-color"],
                "outline-color": [v, D],
                "border-color": [v, D],
                "border-top-color": [v, D],
                "border-right-color": [v, D],
                "border-bottom-color": [v, D],
                "border-left-color": [v, D],
                "border-width": [m, q],
                "border-top-width": [m, q],
                "border-right-width": [m, q],
                "border-bottom-width": [m, q],
                "border-left-width": [m, q],
                "border-spacing": [m, q],
                "letter-spacing": [m, q],
                margin: [m, q],
                "margin-top": [m, q],
                "margin-right": [m, q],
                "margin-bottom": [m, q],
                "margin-left": [m, q],
                padding: [m, q],
                "padding-top": [m, q],
                "padding-right": [m, q],
                "padding-bottom": [m, q],
                "padding-left": [m, q],
                "outline-width": [m, q],
                opacity: [m, A],
                top: [m, P],
                right: [m, P],
                bottom: [m, P],
                left: [m, P],
                "font-size": [m, P],
                "text-indent": [m, P],
                "word-spacing": [m, P],
                width: [m, P],
                "min-width": [m, P],
                "max-width": [m, P],
                height: [m, P],
                "min-height": [m, P],
                "max-height": [m, P],
                "line-height": [m, B],
                "scroll-top": [k, A, "scrollTop"],
                "scroll-left": [k, A, "scrollLeft"]
            }, xe = {};
            V.transform && (Ze.transform = [z], xe = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [H],
                rotateX: [H],
                rotateY: [H],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [H],
                skewX: [H],
                skewY: [H]
            }), V.transform && V.backface && (xe.z = [P, "translateZ"], xe.rotateZ = [H], xe.scaleZ = [A], xe.perspective = [q]);
            var lt = /ms/, Vt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ns = c((Uk, Ls) => {
        "use strict";
        var Q_ = window.$, Z_ = Ci() && Q_.tram;
        Ls.exports = function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}, r = Array.prototype, n = Object.prototype, i = Function.prototype, o = r.push, s = r.slice, a = r.concat, u = n.toString, f = n.hasOwnProperty, h = r.forEach, p = r.map, y = r.reduce, T = r.reduceRight, _ = r.filter, I = r.every, M = r.some, S = r.indexOf, N = r.lastIndexOf,
                A = Array.isArray, D = Object.keys, q = i.bind, P = e.each = e.forEach = function (g, L, F) {
                    if (g == null) return g;
                    if (h && g.forEach === h) g.forEach(L, F); else if (g.length === +g.length) {
                        for (var V = 0, Z = g.length; V < Z; V++) if (L.call(F, g[V], V, g) === t) return
                    } else for (var J = e.keys(g), V = 0, Z = J.length; V < Z; V++) if (L.call(F, g[J[V]], J[V], g) === t) return;
                    return g
                };
            e.map = e.collect = function (g, L, F) {
                var V = [];
                return g == null ? V : p && g.map === p ? g.map(L, F) : (P(g, function (Z, J, G) {
                    V.push(L.call(F, Z, J, G))
                }), V)
            }, e.find = e.detect = function (g, L, F) {
                var V;
                return H(g, function (Z, J, G) {
                    if (L.call(F, Z, J, G)) return V = Z, !0
                }), V
            }, e.filter = e.select = function (g, L, F) {
                var V = [];
                return g == null ? V : _ && g.filter === _ ? g.filter(L, F) : (P(g, function (Z, J, G) {
                    L.call(F, Z, J, G) && V.push(Z)
                }), V)
            };
            var H = e.some = e.any = function (g, L, F) {
                L || (L = e.identity);
                var V = !1;
                return g == null ? V : M && g.some === M ? g.some(L, F) : (P(g, function (Z, J, G) {
                    if (V || (V = L.call(F, Z, J, G))) return t
                }), !!V)
            };
            e.contains = e.include = function (g, L) {
                return g == null ? !1 : S && g.indexOf === S ? g.indexOf(L) != -1 : H(g, function (F) {
                    return F === L
                })
            }, e.delay = function (g, L) {
                var F = s.call(arguments, 2);
                return setTimeout(function () {
                    return g.apply(null, F)
                }, L)
            }, e.defer = function (g) {
                return e.delay.apply(e, [g, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function (g) {
                var L, F, V;
                return function () {
                    L || (L = !0, F = arguments, V = this, Z_.frame(function () {
                        L = !1, g.apply(V, F)
                    }))
                }
            }, e.debounce = function (g, L, F) {
                var V, Z, J, G, W, d = function () {
                    var E = e.now() - G;
                    E < L ? V = setTimeout(d, L - E) : (V = null, F || (W = g.apply(J, Z), J = Z = null))
                };
                return function () {
                    J = this, Z = arguments, G = e.now();
                    var E = F && !V;
                    return V || (V = setTimeout(d, L)), E && (W = g.apply(J, Z), J = Z = null), W
                }
            }, e.defaults = function (g) {
                if (!e.isObject(g)) return g;
                for (var L = 1, F = arguments.length; L < F; L++) {
                    var V = arguments[L];
                    for (var Z in V) g[Z] === void 0 && (g[Z] = V[Z])
                }
                return g
            }, e.keys = function (g) {
                if (!e.isObject(g)) return [];
                if (D) return D(g);
                var L = [];
                for (var F in g) e.has(g, F) && L.push(F);
                return L
            }, e.has = function (g, L) {
                return f.call(g, L)
            }, e.isObject = function (g) {
                return g === Object(g)
            }, e.now = Date.now || function () {
                return new Date().getTime()
            }, e.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
            var B = /(.)^/, j = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"}, Q = /\\|'|\r|\n|\u2028|\u2029/g, U = function (g) {
                return "\\" + j[g]
            }, R = /^\s*(\w|\$)+\s*$/;
            return e.template = function (g, L, F) {
                !L && F && (L = F), L = e.defaults({}, L, e.templateSettings);
                var V = RegExp([(L.escape || B).source, (L.interpolate || B).source, (L.evaluate || B).source].join("|") + "|$", "g"), Z = 0, J = "__p+='";
                g.replace(V, function (E, m, v, k, z) {
                    return J += g.slice(Z, z).replace(Q, U), Z = z + E.length, m ? J += `'+
((__t=(` + m + `))==null?'':_.escape(__t))+
'` : v ? J += `'+
((__t=(` + v + `))==null?'':__t)+
'` : k && (J += `';
` + k + `
__p+='`), E
                }), J += `';
`;
                var G = L.variable;
                if (G) {
                    if (!R.test(G)) throw new Error("variable is not a bare identifier: " + G)
                } else J = `with(obj||{}){
` + J + `}
`, G = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var W;
                try {
                    W = new Function(L.variable || "obj", "_", J)
                } catch (E) {
                    throw E.source = J, E
                }
                var d = function (E) {
                    return W.call(this, E, e)
                };
                return d.source = "function(" + G + `){
` + J + "}", d
            }, e
        }()
    });
    var Ve = c((kk, Us) => {
        "use strict";
        var ce = {}, Ut = {}, kt = [], Li = window.Webflow || [], Et = window.jQuery, Be = Et(window), J_ = Et(document), tt = Et.isFunction, He = ce._ = Ns(), qs = ce.tram = Ci() && Et.tram, an = !1, Ni = !1;
        qs.config.hideBackface = !1;
        qs.config.keepInherited = !0;
        ce.define = function (e, t, r) {
            Ut[e] && Ds(Ut[e]);
            var n = Ut[e] = t(Et, He, r) || {};
            return Ms(n), n
        };
        ce.require = function (e) {
            return Ut[e]
        };

        function Ms(e) {
            ce.env() && (tt(e.design) && Be.on("__wf_design", e.design), tt(e.preview) && Be.on("__wf_preview", e.preview)), tt(e.destroy) && Be.on("__wf_destroy", e.destroy), e.ready && tt(e.ready) && eb(e)
        }

        function eb(e) {
            if (an) {
                e.ready();
                return
            }
            He.contains(kt, e.ready) || kt.push(e.ready)
        }

        function Ds(e) {
            tt(e.design) && Be.off("__wf_design", e.design), tt(e.preview) && Be.off("__wf_preview", e.preview), tt(e.destroy) && Be.off("__wf_destroy", e.destroy), e.ready && tt(e.ready) && tb(e)
        }

        function tb(e) {
            kt = He.filter(kt, function (t) {
                return t !== e.ready
            })
        }

        ce.push = function (e) {
            if (an) {
                tt(e) && e();
                return
            }
            Li.push(e)
        };
        ce.env = function (e) {
            var t = window.__wf_design, r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var on = navigator.userAgent.toLowerCase(), Fs = ce.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, rb = ce.env.chrome = /chrome/.test(on) && /Google/.test(navigator.vendor) && parseInt(on.match(/chrome\/(\d+)\./)[1], 10),
            nb = ce.env.ios = /(ipod|iphone|ipad)/.test(on);
        ce.env.safari = /safari/.test(on) && !rb && !nb;
        var Ri;
        Fs && J_.on("touchstart mousedown", function (e) {
            Ri = e.target
        });
        ce.validClick = Fs ? function (e) {
            return e === Ri || Et.contains(e, Ri)
        } : function () {
            return !0
        };
        var Gs = "resize.webflow orientationchange.webflow load.webflow", ib = "scroll.webflow " + Gs;
        ce.resize = Pi(Be, Gs);
        ce.scroll = Pi(Be, ib);
        ce.redraw = Pi();

        function Pi(e, t) {
            var r = [], n = {};
            return n.up = He.throttle(function (i) {
                He.each(r, function (o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function (i) {
                typeof i == "function" && (He.contains(r, i) || r.push(i))
            }, n.off = function (i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = He.filter(r, function (o) {
                    return o !== i
                })
            }, n
        }

        ce.location = function (e) {
            window.location = e
        };
        ce.env() && (ce.location = function () {
        });
        ce.ready = function () {
            an = !0, Ni ? ob() : He.each(kt, Ps), He.each(Li, Ps), ce.resize.up()
        };

        function Ps(e) {
            tt(e) && e()
        }

        function ob() {
            Ni = !1, He.each(Ut, Ms)
        }

        var St;
        ce.load = function (e) {
            St.then(e)
        };

        function Vs() {
            St && (St.reject(), Be.off("load", St.resolve)), St = new Et.Deferred, Be.on("load", St.resolve)
        }

        ce.destroy = function (e) {
            e = e || {}, Ni = !0, Be.triggerHandler("__wf_destroy"), e.domready != null && (an = e.domready), He.each(Ut, Ds), ce.resize.off(), ce.scroll.off(), ce.redraw.off(), kt = [], Li = [], St.state() === "pending" && Vs()
        };
        Et(ce.ready);
        Vs();
        Us.exports = window.Webflow = ce
    });
    var Ws = c((Xk, Xs) => {
        "use strict";
        var ks = Ve();
        ks.define("brand", Xs.exports = function (e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", s = window.location, a = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", f;
            t.ready = function () {
                var T = n.attr("data-wf-status"), _ = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(_) && s.hostname !== _ && (T = !0), T && !a && (f = f || p(), y(), setTimeout(y, 500), e(r).off(u, h).on(u, h))
            };

            function h() {
                var T = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(f).attr("style", T ? "display: none !important;" : "")
            }

            function p() {
                var T = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({marginRight: "4px", width: "26px"}),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return T.append(_, I), T[0]
            }

            function y() {
                var T = i.children(o), _ = T.length && T.get(0) === f, I = ks.env("editor");
                if (_) {
                    I && T.remove();
                    return
                }
                T.length && T.remove(), I || i.append(f)
            }

            return t
        })
    });
    var Bs = c((Wk, Hs) => {
        "use strict";
        var qi = Ve();
        qi.define("edit", Hs.exports = function (e, t, r) {
            if (r = r || {}, (qi.env("test") || qi.env("frame")) && !r.fixture && !ab()) return {exit: 1};
            var n = {}, i = e(window), o = e(document.documentElement), s = document.location, a = "hashchange", u, f = r.load || y, h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {
            }
            h ? f() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && f() : i.on(a, p).triggerHandler(a);

            function p() {
                u || /\?edit/.test(s.hash) && f()
            }

            function y() {
                u = !0, window.WebflowEditor = !0, i.off(a, p), N(function (D) {
                    e.ajax({url: S("https://editor-api.webflow.com/api/editor/view"), data: {siteId: o.attr("data-wf-site")}, xhrFields: {withCredentials: !0}, dataType: "json", crossDomain: !0, success: T(D)})
                })
            }

            function T(D) {
                return function (q) {
                    if (!q) {
                        console.error("Could not load editor data");
                        return
                    }
                    q.thirdPartyCookiesSupported = D, _(M(q.bugReporterScriptPath), function () {
                        _(M(q.scriptPath), function () {
                            window.WebflowEditor(q)
                        })
                    })
                }
            }

            function _(D, q) {
                e.ajax({type: "GET", url: D, dataType: "script", cache: !0}).then(q, I)
            }

            function I(D, q, P) {
                throw console.error("Could not load editor script: " + q), P
            }

            function M(D) {
                return D.indexOf("//") >= 0 ? D : S("https://editor-api.webflow.com" + D)
            }

            function S(D) {
                return D.replace(/([^:])\/\//g, "$1/")
            }

            function N(D) {
                var q = window.document.createElement("iframe");
                q.src = "https://webflow.com/site/third-party-cookie-check.html", q.style.display = "none", q.sandbox = "allow-scripts allow-same-origin";
                var P = function (H) {
                    H.data === "WF_third_party_cookies_unsupported" ? (A(q, P), D(!1)) : H.data === "WF_third_party_cookies_supported" && (A(q, P), D(!0))
                };
                q.onerror = function () {
                    A(q, P), D(!1)
                }, window.addEventListener("message", P, !1), window.document.body.appendChild(q)
            }

            function A(D, q) {
                window.removeEventListener("message", q, !1), D.remove()
            }

            return n
        });

        function ab() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var zs = c((Hk, js) => {
        "use strict";
        var sb = Ve();
        sb.define("focus-visible", js.exports = function () {
            function e(r) {
                var n = !0, i = !1, o = null, s = {text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0};

                function a(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function u(A) {
                    var D = A.type, q = A.tagName;
                    return !!(q === "INPUT" && s[D] && !A.readOnly || q === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function f(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function h(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function p(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (a(r.activeElement) && f(r.activeElement), n = !0)
                }

                function y() {
                    n = !1
                }

                function T(A) {
                    a(A.target) && (n || u(A.target)) && f(A.target)
                }

                function _(A) {
                    a(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function () {
                        i = !1
                    }, 100), h(A.target))
                }

                function I() {
                    document.visibilityState === "hidden" && (i && (n = !0), M())
                }

                function M() {
                    document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N)
                }

                function S() {
                    document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N)
                }

                function N(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1, S())
                }

                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", y, !0), document.addEventListener("pointerdown", y, !0), document.addEventListener("touchstart", y, !0), document.addEventListener("visibilitychange", I, !0), M(), r.addEventListener("focus", T, !0), r.addEventListener("blur", _, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }

            return {ready: t}
        })
    });
    var $s = c((Bk, Ys) => {
        "use strict";
        var Ks = Ve();
        Ks.define("focus", Ys.exports = function () {
            var e = [], t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target, u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ks.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }

            return {ready: o}
        })
    });
    var Js = c((jk, Zs) => {
        "use strict";
        var Mi = window.jQuery, rt = {}, sn = [], Qs = ".w-ix", un = {
            reset: function (e, t) {
                t.__wf_intro = null
            }, intro: function (e, t) {
                t.__wf_intro || (t.__wf_intro = !0, Mi(t).triggerHandler(rt.types.INTRO))
            }, outro: function (e, t) {
                t.__wf_intro && (t.__wf_intro = null, Mi(t).triggerHandler(rt.types.OUTRO))
            }
        };
        rt.triggers = {};
        rt.types = {INTRO: "w-ix-intro" + Qs, OUTRO: "w-ix-outro" + Qs};
        rt.init = function () {
            for (var e = sn.length, t = 0; t < e; t++) {
                var r = sn[t];
                r[0](0, r[1])
            }
            sn = [], Mi.extend(rt.triggers, un)
        };
        rt.async = function () {
            for (var e in un) {
                var t = un[e];
                un.hasOwnProperty(e) && (rt.triggers[e] = function (r, n) {
                    sn.push([t, n])
                })
            }
        };
        rt.async();
        Zs.exports = rt
    });
    var ln = c((zk, ru) => {
        "use strict";
        var Di = Js();

        function eu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }

        var ub = window.jQuery, cn = {}, tu = ".w-ix", cb = {
            reset: function (e, t) {
                Di.triggers.reset(e, t)
            }, intro: function (e, t) {
                Di.triggers.intro(e, t), eu(t, "COMPONENT_ACTIVE")
            }, outro: function (e, t) {
                Di.triggers.outro(e, t), eu(t, "COMPONENT_INACTIVE")
            }
        };
        cn.triggers = {};
        cn.types = {INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu};
        ub.extend(cn.triggers, cb);
        ru.exports = cn
    });
    var nu = c((Kk, ft) => {
        function Fi(e) {
            return ft.exports = Fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
                return typeof t
            } : function (t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ft.exports.__esModule = !0, ft.exports.default = ft.exports, Fi(e)
        }

        ft.exports = Fi, ft.exports.__esModule = !0, ft.exports.default = ft.exports
    });
    var fn = c((Yk, mr) => {
        var lb = nu().default;

        function iu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap, r = new WeakMap;
            return (iu = function (i) {
                return i ? r : t
            })(e)
        }

        function fb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || lb(e) !== "object" && typeof e != "function") return {default: e};
            var r = iu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
            }
            return n.default = e, r && r.set(e, n), n
        }

        mr.exports = fb, mr.exports.__esModule = !0, mr.exports.default = mr.exports
    });
    var ou = c(($k, _r) => {
        function db(e) {
            return e && e.__esModule ? e : {default: e}
        }

        _r.exports = db, _r.exports.__esModule = !0, _r.exports.default = _r.exports
    });
    var he = c((Qk, au) => {
        var dn = function (e) {
            return e && e.Math == Math && e
        };
        au.exports = dn(typeof globalThis == "object" && globalThis) || dn(typeof window == "object" && window) || dn(typeof self == "object" && self) || dn(typeof global == "object" && global) || function () {
            return this
        }() || Function("return this")()
    });
    var Xt = c((Zk, su) => {
        su.exports = function (e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ct = c((Jk, uu) => {
        var pb = Xt();
        uu.exports = !pb(function () {
            return Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1] != 7
        })
    });
    var pn = c((eX, cu) => {
        var br = Function.prototype.call;
        cu.exports = br.bind ? br.bind(br) : function () {
            return br.apply(br, arguments)
        }
    });
    var pu = c(du => {
        "use strict";
        var lu = {}.propertyIsEnumerable, fu = Object.getOwnPropertyDescriptor, hb = fu && !lu.call({1: 2}, 1);
        du.f = hb ? function (t) {
            var r = fu(this, t);
            return !!r && r.enumerable
        } : lu
    });
    var Gi = c((rX, hu) => {
        hu.exports = function (e, t) {
            return {enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: t}
        }
    });
    var je = c((nX, gu) => {
        var vu = Function.prototype, Vi = vu.bind, Ui = vu.call, vb = Vi && Vi.bind(Ui);
        gu.exports = Vi ? function (e) {
            return e && vb(Ui, e)
        } : function (e) {
            return e && function () {
                return Ui.apply(e, arguments)
            }
        }
    });
    var mu = c((iX, Eu) => {
        var yu = je(), gb = yu({}.toString), yb = yu("".slice);
        Eu.exports = function (e) {
            return yb(gb(e), 8, -1)
        }
    });
    var bu = c((oX, _u) => {
        var Eb = he(), mb = je(), _b = Xt(), bb = mu(), ki = Eb.Object, Tb = mb("".split);
        _u.exports = _b(function () {
            return !ki("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return bb(e) == "String" ? Tb(e, "") : ki(e)
        } : ki
    });
    var Xi = c((aX, Tu) => {
        var Ib = he(), wb = Ib.TypeError;
        Tu.exports = function (e) {
            if (e == null) throw wb("Can't call method on " + e);
            return e
        }
    });
    var Tr = c((sX, Iu) => {
        var Ob = bu(), xb = Xi();
        Iu.exports = function (e) {
            return Ob(xb(e))
        }
    });
    var nt = c((uX, wu) => {
        wu.exports = function (e) {
            return typeof e == "function"
        }
    });
    var Wt = c((cX, Ou) => {
        var Ab = nt();
        Ou.exports = function (e) {
            return typeof e == "object" ? e !== null : Ab(e)
        }
    });
    var Ir = c((lX, xu) => {
        var Wi = he(), Sb = nt(), Cb = function (e) {
            return Sb(e) ? e : void 0
        };
        xu.exports = function (e, t) {
            return arguments.length < 2 ? Cb(Wi[e]) : Wi[e] && Wi[e][t]
        }
    });
    var Su = c((fX, Au) => {
        var Rb = je();
        Au.exports = Rb({}.isPrototypeOf)
    });
    var Ru = c((dX, Cu) => {
        var Lb = Ir();
        Cu.exports = Lb("navigator", "userAgent") || ""
    });
    var Fu = c((pX, Du) => {
        var Mu = he(), Hi = Ru(), Lu = Mu.process, Nu = Mu.Deno, Pu = Lu && Lu.versions || Nu && Nu.version, qu = Pu && Pu.v8, ze, hn;
        qu && (ze = qu.split("."), hn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1]));
        !hn && Hi && (ze = Hi.match(/Edge\/(\d+)/), (!ze || ze[1] >= 74) && (ze = Hi.match(/Chrome\/(\d+)/), ze && (hn = +ze[1])));
        Du.exports = hn
    });
    var Bi = c((hX, Vu) => {
        var Gu = Fu(), Nb = Xt();
        Vu.exports = !!Object.getOwnPropertySymbols && !Nb(function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Gu && Gu < 41
        })
    });
    var ji = c((vX, Uu) => {
        var Pb = Bi();
        Uu.exports = Pb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var zi = c((gX, ku) => {
        var qb = he(), Mb = Ir(), Db = nt(), Fb = Su(), Gb = ji(), Vb = qb.Object;
        ku.exports = Gb ? function (e) {
            return typeof e == "symbol"
        } : function (e) {
            var t = Mb("Symbol");
            return Db(t) && Fb(t.prototype, Vb(e))
        }
    });
    var Wu = c((yX, Xu) => {
        var Ub = he(), kb = Ub.String;
        Xu.exports = function (e) {
            try {
                return kb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Bu = c((EX, Hu) => {
        var Xb = he(), Wb = nt(), Hb = Wu(), Bb = Xb.TypeError;
        Hu.exports = function (e) {
            if (Wb(e)) return e;
            throw Bb(Hb(e) + " is not a function")
        }
    });
    var zu = c((mX, ju) => {
        var jb = Bu();
        ju.exports = function (e, t) {
            var r = e[t];
            return r == null ? void 0 : jb(r)
        }
    });
    var Yu = c((_X, Ku) => {
        var zb = he(), Ki = pn(), Yi = nt(), $i = Wt(), Kb = zb.TypeError;
        Ku.exports = function (e, t) {
            var r, n;
            if (t === "string" && Yi(r = e.toString) && !$i(n = Ki(r, e)) || Yi(r = e.valueOf) && !$i(n = Ki(r, e)) || t !== "string" && Yi(r = e.toString) && !$i(n = Ki(r, e))) return n;
            throw Kb("Can't convert object to primitive value")
        }
    });
    var Qu = c((bX, $u) => {
        $u.exports = !1
    });
    var vn = c((TX, Ju) => {
        var Zu = he(), Yb = Object.defineProperty;
        Ju.exports = function (e, t) {
            try {
                Yb(Zu, e, {value: t, configurable: !0, writable: !0})
            } catch {
                Zu[e] = t
            }
            return t
        }
    });
    var gn = c((IX, tc) => {
        var $b = he(), Qb = vn(), ec = "__core-js_shared__", Zb = $b[ec] || Qb(ec, {});
        tc.exports = Zb
    });
    var Qi = c((wX, nc) => {
        var Jb = Qu(), rc = gn();
        (nc.exports = function (e, t) {
            return rc[e] || (rc[e] = t !== void 0 ? t : {})
        })("versions", []).push({version: "3.19.0", mode: Jb ? "pure" : "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"})
    });
    var oc = c((OX, ic) => {
        var eT = he(), tT = Xi(), rT = eT.Object;
        ic.exports = function (e) {
            return rT(tT(e))
        }
    });
    var mt = c((xX, ac) => {
        var nT = je(), iT = oc(), oT = nT({}.hasOwnProperty);
        ac.exports = Object.hasOwn || function (t, r) {
            return oT(iT(t), r)
        }
    });
    var Zi = c((AX, sc) => {
        var aT = je(), sT = 0, uT = Math.random(), cT = aT(1.toString);
        sc.exports = function (e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + cT(++sT + uT, 36)
        }
    });
    var Ji = c((SX, dc) => {
        var lT = he(), fT = Qi(), uc = mt(), dT = Zi(), cc = Bi(), fc = ji(), Ht = fT("wks"), Rt = lT.Symbol, lc = Rt && Rt.for, pT = fc ? Rt : Rt && Rt.withoutSetter || dT;
        dc.exports = function (e) {
            if (!uc(Ht, e) || !(cc || typeof Ht[e] == "string")) {
                var t = "Symbol." + e;
                cc && uc(Rt, e) ? Ht[e] = Rt[e] : fc && lc ? Ht[e] = lc(t) : Ht[e] = pT(t)
            }
            return Ht[e]
        }
    });
    var gc = c((CX, vc) => {
        var hT = he(), vT = pn(), pc = Wt(), hc = zi(), gT = zu(), yT = Yu(), ET = Ji(), mT = hT.TypeError, _T = ET("toPrimitive");
        vc.exports = function (e, t) {
            if (!pc(e) || hc(e)) return e;
            var r = gT(e, _T), n;
            if (r) {
                if (t === void 0 && (t = "default"), n = vT(r, e, t), !pc(n) || hc(n)) return n;
                throw mT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), yT(e, t)
        }
    });
    var eo = c((RX, yc) => {
        var bT = gc(), TT = zi();
        yc.exports = function (e) {
            var t = bT(e, "string");
            return TT(t) ? t : t + ""
        }
    });
    var ro = c((LX, mc) => {
        var IT = he(), Ec = Wt(), to = IT.document, wT = Ec(to) && Ec(to.createElement);
        mc.exports = function (e) {
            return wT ? to.createElement(e) : {}
        }
    });
    var no = c((NX, _c) => {
        var OT = Ct(), xT = Xt(), AT = ro();
        _c.exports = !OT && !xT(function () {
            return Object.defineProperty(AT("div"), "a", {
                get: function () {
                    return 7
                }
            }).a != 7
        })
    });
    var io = c(Tc => {
        var ST = Ct(), CT = pn(), RT = pu(), LT = Gi(), NT = Tr(), PT = eo(), qT = mt(), MT = no(), bc = Object.getOwnPropertyDescriptor;
        Tc.f = ST ? bc : function (t, r) {
            if (t = NT(t), r = PT(r), MT) try {
                return bc(t, r)
            } catch {
            }
            if (qT(t, r)) return LT(!CT(RT.f, t, r), t[r])
        }
    });
    var wr = c((qX, wc) => {
        var Ic = he(), DT = Wt(), FT = Ic.String, GT = Ic.TypeError;
        wc.exports = function (e) {
            if (DT(e)) return e;
            throw GT(FT(e) + " is not an object")
        }
    });
    var Or = c(Ac => {
        var VT = he(), UT = Ct(), kT = no(), Oc = wr(), XT = eo(), WT = VT.TypeError, xc = Object.defineProperty;
        Ac.f = UT ? xc : function (t, r, n) {
            if (Oc(t), r = XT(r), Oc(n), kT) try {
                return xc(t, r, n)
            } catch {
            }
            if ("get" in n || "set" in n) throw WT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var yn = c((DX, Sc) => {
        var HT = Ct(), BT = Or(), jT = Gi();
        Sc.exports = HT ? function (e, t, r) {
            return BT.f(e, t, jT(1, r))
        } : function (e, t, r) {
            return e[t] = r, e
        }
    });
    var ao = c((FX, Cc) => {
        var zT = je(), KT = nt(), oo = gn(), YT = zT(Function.toString);
        KT(oo.inspectSource) || (oo.inspectSource = function (e) {
            return YT(e)
        });
        Cc.exports = oo.inspectSource
    });
    var Nc = c((GX, Lc) => {
        var $T = he(), QT = nt(), ZT = ao(), Rc = $T.WeakMap;
        Lc.exports = QT(Rc) && /native code/.test(ZT(Rc))
    });
    var so = c((VX, qc) => {
        var JT = Qi(), eI = Zi(), Pc = JT("keys");
        qc.exports = function (e) {
            return Pc[e] || (Pc[e] = eI(e))
        }
    });
    var En = c((UX, Mc) => {
        Mc.exports = {}
    });
    var kc = c((kX, Uc) => {
        var tI = Nc(), Vc = he(), uo = je(), rI = Wt(), nI = yn(), co = mt(), lo = gn(), iI = so(), oI = En(), Dc = "Object already initialized", po = Vc.TypeError, aI = Vc.WeakMap, mn, xr, _n, sI = function (e) {
            return _n(e) ? xr(e) : mn(e, {})
        }, uI = function (e) {
            return function (t) {
                var r;
                if (!rI(t) || (r = xr(t)).type !== e) throw po("Incompatible receiver, " + e + " required");
                return r
            }
        };
        tI || lo.state ? (_t = lo.state || (lo.state = new aI), Fc = uo(_t.get), fo = uo(_t.has), Gc = uo(_t.set), mn = function (e, t) {
            if (fo(_t, e)) throw new po(Dc);
            return t.facade = e, Gc(_t, e, t), t
        }, xr = function (e) {
            return Fc(_t, e) || {}
        }, _n = function (e) {
            return fo(_t, e)
        }) : (Lt = iI("state"), oI[Lt] = !0, mn = function (e, t) {
            if (co(e, Lt)) throw new po(Dc);
            return t.facade = e, nI(e, Lt, t), t
        }, xr = function (e) {
            return co(e, Lt) ? e[Lt] : {}
        }, _n = function (e) {
            return co(e, Lt)
        });
        var _t, Fc, fo, Gc, Lt;
        Uc.exports = {set: mn, get: xr, has: _n, enforce: sI, getterFor: uI}
    });
    var Hc = c((XX, Wc) => {
        var ho = Ct(), cI = mt(), Xc = Function.prototype, lI = ho && Object.getOwnPropertyDescriptor, vo = cI(Xc, "name"), fI = vo && function () {
        }.name === "something", dI = vo && (!ho || ho && lI(Xc, "name").configurable);
        Wc.exports = {EXISTS: vo, PROPER: fI, CONFIGURABLE: dI}
    });
    var Yc = c((WX, Kc) => {
        var pI = he(), Bc = nt(), hI = mt(), jc = yn(), vI = vn(), gI = ao(), zc = kc(), yI = Hc().CONFIGURABLE, EI = zc.get, mI = zc.enforce, _I = String(String).split("String");
        (Kc.exports = function (e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, s = n ? !!n.noTargetGet : !1, a = n && n.name !== void 0 ? n.name : t, u;
            if (Bc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!hI(r, "name") || yI && r.name !== a) && jc(r, "name", a), u = mI(r), u.source || (u.source = _I.join(typeof a == "string" ? a : ""))), e === pI) {
                o ? e[t] = r : vI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : jc(e, t, r)
        })(Function.prototype, "toString", function () {
            return Bc(this) && EI(this).source || gI(this)
        })
    });
    var go = c((HX, $c) => {
        var bI = Math.ceil, TI = Math.floor;
        $c.exports = function (e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? TI : bI)(t)
        }
    });
    var Zc = c((BX, Qc) => {
        var II = go(), wI = Math.max, OI = Math.min;
        Qc.exports = function (e, t) {
            var r = II(e);
            return r < 0 ? wI(r + t, 0) : OI(r, t)
        }
    });
    var el = c((jX, Jc) => {
        var xI = go(), AI = Math.min;
        Jc.exports = function (e) {
            return e > 0 ? AI(xI(e), 9007199254740991) : 0
        }
    });
    var rl = c((zX, tl) => {
        var SI = el();
        tl.exports = function (e) {
            return SI(e.length)
        }
    });
    var yo = c((KX, il) => {
        var CI = Tr(), RI = Zc(), LI = rl(), nl = function (e) {
            return function (t, r, n) {
                var i = CI(t), o = LI(i), s = RI(n, o), a;
                if (e && r != r) {
                    for (; o > s;) if (a = i[s++], a != a) return !0
                } else for (; o > s; s++) if ((e || s in i) && i[s] === r) return e || s || 0;
                return !e && -1
            }
        };
        il.exports = {includes: nl(!0), indexOf: nl(!1)}
    });
    var mo = c((YX, al) => {
        var NI = je(), Eo = mt(), PI = Tr(), qI = yo().indexOf, MI = En(), ol = NI([].push);
        al.exports = function (e, t) {
            var r = PI(e), n = 0, i = [], o;
            for (o in r) !Eo(MI, o) && Eo(r, o) && ol(i, o);
            for (; t.length > n;) Eo(r, o = t[n++]) && (~qI(i, o) || ol(i, o));
            return i
        }
    });
    var bn = c(($X, sl) => {
        sl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var cl = c(ul => {
        var DI = mo(), FI = bn(), GI = FI.concat("length", "prototype");
        ul.f = Object.getOwnPropertyNames || function (t) {
            return DI(t, GI)
        }
    });
    var fl = c(ll => {
        ll.f = Object.getOwnPropertySymbols
    });
    var pl = c((JX, dl) => {
        var VI = Ir(), UI = je(), kI = cl(), XI = fl(), WI = wr(), HI = UI([].concat);
        dl.exports = VI("Reflect", "ownKeys") || function (t) {
            var r = kI.f(WI(t)), n = XI.f;
            return n ? HI(r, n(t)) : r
        }
    });
    var vl = c((eW, hl) => {
        var BI = mt(), jI = pl(), zI = io(), KI = Or();
        hl.exports = function (e, t) {
            for (var r = jI(t), n = KI.f, i = zI.f, o = 0; o < r.length; o++) {
                var s = r[o];
                BI(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var yl = c((tW, gl) => {
        var YI = Xt(), $I = nt(), QI = /#|\.prototype\./, Ar = function (e, t) {
            var r = JI[ZI(e)];
            return r == tw ? !0 : r == ew ? !1 : $I(t) ? YI(t) : !!t
        }, ZI = Ar.normalize = function (e) {
            return String(e).replace(QI, ".").toLowerCase()
        }, JI = Ar.data = {}, ew = Ar.NATIVE = "N", tw = Ar.POLYFILL = "P";
        gl.exports = Ar
    });
    var ml = c((rW, El) => {
        var _o = he(), rw = io().f, nw = yn(), iw = Yc(), ow = vn(), aw = vl(), sw = yl();
        El.exports = function (e, t) {
            var r = e.target, n = e.global, i = e.stat, o, s, a, u, f, h;
            if (n ? s = _o : i ? s = _o[r] || ow(r, {}) : s = (_o[r] || {}).prototype, s) for (a in t) {
                if (f = t[a], e.noTargetGet ? (h = rw(s, a), u = h && h.value) : u = s[a], o = sw(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                    if (typeof f == typeof u) continue;
                    aw(f, u)
                }
                (e.sham || u && u.sham) && nw(f, "sham", !0), iw(s, a, f, e)
            }
        }
    });
    var bl = c((nW, _l) => {
        var uw = mo(), cw = bn();
        _l.exports = Object.keys || function (t) {
            return uw(t, cw)
        }
    });
    var Il = c((iW, Tl) => {
        var lw = Ct(), fw = Or(), dw = wr(), pw = Tr(), hw = bl();
        Tl.exports = lw ? Object.defineProperties : function (t, r) {
            dw(t);
            for (var n = pw(r), i = hw(r), o = i.length, s = 0, a; o > s;) fw.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var Ol = c((oW, wl) => {
        var vw = Ir();
        wl.exports = vw("document", "documentElement")
    });
    var Pl = c((aW, Nl) => {
        var gw = wr(), yw = Il(), xl = bn(), Ew = En(), mw = Ol(), _w = ro(), bw = so(), Al = ">", Sl = "<", To = "prototype", Io = "script", Rl = bw("IE_PROTO"), bo = function () {
        }, Ll = function (e) {
            return Sl + Io + Al + e + Sl + "/" + Io + Al
        }, Cl = function (e) {
            e.write(Ll("")), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
        }, Tw = function () {
            var e = _w("iframe"), t = "java" + Io + ":", r;
            return e.style.display = "none", mw.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Ll("document.F=Object")), r.close(), r.F
        }, Tn, In = function () {
            try {
                Tn = new ActiveXObject("htmlfile")
            } catch {
            }
            In = typeof document < "u" ? document.domain && Tn ? Cl(Tn) : Tw() : Cl(Tn);
            for (var e = xl.length; e--;) delete In[To][xl[e]];
            return In()
        };
        Ew[Rl] = !0;
        Nl.exports = Object.create || function (t, r) {
            var n;
            return t !== null ? (bo[To] = gw(t), n = new bo, bo[To] = null, n[Rl] = t) : n = In(), r === void 0 ? n : yw(n, r)
        }
    });
    var Ml = c((sW, ql) => {
        var Iw = Ji(), ww = Pl(), Ow = Or(), wo = Iw("unscopables"), Oo = Array.prototype;
        Oo[wo] == null && Ow.f(Oo, wo, {configurable: !0, value: ww(null)});
        ql.exports = function (e) {
            Oo[wo][e] = !0
        }
    });
    var Dl = c(() => {
        "use strict";
        var xw = ml(), Aw = yo().includes, Sw = Ml();
        xw({target: "Array", proto: !0}, {
            includes: function (t) {
                return Aw(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Sw("includes")
    });
    var Gl = c((lW, Fl) => {
        var Cw = he(), Rw = je();
        Fl.exports = function (e, t) {
            return Rw(Cw[e].prototype[t])
        }
    });
    var Ul = c((fW, Vl) => {
        Dl();
        var Lw = Gl();
        Vl.exports = Lw("Array", "includes")
    });
    var Xl = c((dW, kl) => {
        var Nw = Ul();
        kl.exports = Nw
    });
    var Hl = c((pW, Wl) => {
        var Pw = Xl();
        Wl.exports = Pw
    });
    var xo = c((hW, Bl) => {
        var qw = typeof global == "object" && global && global.Object === Object && global;
        Bl.exports = qw
    });
    var Ke = c((vW, jl) => {
        var Mw = xo(), Dw = typeof self == "object" && self && self.Object === Object && self, Fw = Mw || Dw || Function("return this")();
        jl.exports = Fw
    });
    var Bt = c((gW, zl) => {
        var Gw = Ke(), Vw = Gw.Symbol;
        zl.exports = Vw
    });
    var Ql = c((yW, $l) => {
        var Kl = Bt(), Yl = Object.prototype, Uw = Yl.hasOwnProperty, kw = Yl.toString, Sr = Kl ? Kl.toStringTag : void 0;

        function Xw(e) {
            var t = Uw.call(e, Sr), r = e[Sr];
            try {
                e[Sr] = void 0;
                var n = !0
            } catch {
            }
            var i = kw.call(e);
            return n && (t ? e[Sr] = r : delete e[Sr]), i
        }

        $l.exports = Xw
    });
    var Jl = c((EW, Zl) => {
        var Ww = Object.prototype, Hw = Ww.toString;

        function Bw(e) {
            return Hw.call(e)
        }

        Zl.exports = Bw
    });
    var bt = c((mW, rf) => {
        var ef = Bt(), jw = Ql(), zw = Jl(), Kw = "[object Null]", Yw = "[object Undefined]", tf = ef ? ef.toStringTag : void 0;

        function $w(e) {
            return e == null ? e === void 0 ? Yw : Kw : tf && tf in Object(e) ? jw(e) : zw(e)
        }

        rf.exports = $w
    });
    var Ao = c((_W, nf) => {
        function Qw(e, t) {
            return function (r) {
                return e(t(r))
            }
        }

        nf.exports = Qw
    });
    var So = c((bW, of) => {
        var Zw = Ao(), Jw = Zw(Object.getPrototypeOf, Object);
        of.exports = Jw
    });
    var dt = c((TW, af) => {
        function eO(e) {
            return e != null && typeof e == "object"
        }

        af.exports = eO
    });
    var Co = c((IW, uf) => {
        var tO = bt(), rO = So(), nO = dt(), iO = "[object Object]", oO = Function.prototype, aO = Object.prototype, sf = oO.toString, sO = aO.hasOwnProperty, uO = sf.call(Object);

        function cO(e) {
            if (!nO(e) || tO(e) != iO) return !1;
            var t = rO(e);
            if (t === null) return !0;
            var r = sO.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && sf.call(r) == uO
        }

        uf.exports = cO
    });
    var cf = c(Ro => {
        "use strict";
        Object.defineProperty(Ro, "__esModule", {value: !0});
        Ro.default = lO;

        function lO(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var lf = c((No, Lo) => {
        "use strict";
        Object.defineProperty(No, "__esModule", {value: !0});
        var fO = cf(), dO = pO(fO);

        function pO(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var jt;
        typeof self < "u" ? jt = self : typeof window < "u" ? jt = window : typeof global < "u" ? jt = global : typeof Lo < "u" ? jt = Lo : jt = Function("return this")();
        var hO = (0, dO.default)(jt);
        No.default = hO
    });
    var Po = c(Cr => {
        "use strict";
        Cr.__esModule = !0;
        Cr.ActionTypes = void 0;
        Cr.default = hf;
        var vO = Co(), gO = pf(vO), yO = lf(), ff = pf(yO);

        function pf(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var df = Cr.ActionTypes = {INIT: "@@redux/INIT"};

        function hf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(hf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e, o = t, s = [], a = s, u = !1;

            function f() {
                a === s && (a = s.slice())
            }

            function h() {
                return o
            }

            function p(I) {
                if (typeof I != "function") throw new Error("Expected listener to be a function.");
                var M = !0;
                return f(), a.push(I), function () {
                    if (M) {
                        M = !1, f();
                        var N = a.indexOf(I);
                        a.splice(N, 1)
                    }
                }
            }

            function y(I) {
                if (!(0, gO.default)(I)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, I)
                } finally {
                    u = !1
                }
                for (var M = s = a, S = 0; S < M.length; S++) M[S]();
                return I
            }

            function T(I) {
                if (typeof I != "function") throw new Error("Expected the nextReducer to be a function.");
                i = I, y({type: df.INIT})
            }

            function _() {
                var I, M = p;
                return I = {
                    subscribe: function (N) {
                        if (typeof N != "object") throw new TypeError("Expected the observer to be an object.");

                        function A() {
                            N.next && N.next(h())
                        }

                        A();
                        var D = M(A);
                        return {unsubscribe: D}
                    }
                }, I[ff.default] = function () {
                    return this
                }, I
            }

            return y({type: df.INIT}), n = {dispatch: y, subscribe: p, getState: h, replaceReducer: T}, n[ff.default] = _, n
        }
    });
    var Mo = c(qo => {
        "use strict";
        qo.__esModule = !0;
        qo.default = EO;

        function EO(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {
            }
        }
    });
    var yf = c(Do => {
        "use strict";
        Do.__esModule = !0;
        Do.default = IO;
        var vf = Po(), mO = Co(), AW = gf(mO), _O = Mo(), SW = gf(_O);

        function gf(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function bO(e, t) {
            var r = t && t.type, n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function TO(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t], n = r(void 0, {type: vf.ActionTypes.INIT});
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {type: i}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + vf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function IO(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                TO(r)
            } catch (u) {
                a = u
            }
            return function () {
                var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0], h = arguments[1];
                if (a) throw a;
                if (!1) var p;
                for (var y = !1, T = {}, _ = 0; _ < o.length; _++) {
                    var I = o[_], M = r[I], S = f[I], N = M(S, h);
                    if (typeof N > "u") {
                        var A = bO(I, h);
                        throw new Error(A)
                    }
                    T[I] = N, y = y || N !== S
                }
                return y ? T : f
            }
        }
    });
    var mf = c(Fo => {
        "use strict";
        Fo.__esModule = !0;
        Fo.default = wO;

        function Ef(e, t) {
            return function () {
                return t(e.apply(void 0, arguments))
            }
        }

        function wO(e, t) {
            if (typeof e == "function") return Ef(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i], s = e[o];
                typeof s == "function" && (n[o] = Ef(s, t))
            }
            return n
        }
    });
    var Vo = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = OO;

        function OO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function (o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1], i = t.slice(0, -1);
            return function () {
                return i.reduceRight(function (o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var _f = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        var xO = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Uo.default = RO;
        var AO = Vo(), SO = CO(AO);

        function CO(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function RO() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function (n) {
                return function (i, o, s) {
                    var a = n(i, o, s), u = a.dispatch, f = [], h = {
                        getState: a.getState, dispatch: function (y) {
                            return u(y)
                        }
                    };
                    return f = t.map(function (p) {
                        return p(h)
                    }), u = SO.default.apply(void 0, f)(a.dispatch), xO({}, a, {dispatch: u})
                }
            }
        }
    });
    var ko = c(Ue => {
        "use strict";
        Ue.__esModule = !0;
        Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
        var LO = Po(), NO = zt(LO), PO = yf(), qO = zt(PO), MO = mf(), DO = zt(MO), FO = _f(), GO = zt(FO), VO = Vo(), UO = zt(VO), kO = Mo(), PW = zt(kO);

        function zt(e) {
            return e && e.__esModule ? e : {default: e}
        }

        Ue.createStore = NO.default;
        Ue.combineReducers = qO.default;
        Ue.bindActionCreators = DO.default;
        Ue.applyMiddleware = GO.default;
        Ue.compose = UO.default
    });
    var Ye, Xo, it, XO, WO, Wo, HO, bf = de(() => {
        "use strict";
        Ye = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Xo = {ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE"}, it = {ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT"}, XO = {X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS"}, WO = {CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"}, Wo = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, HO = {LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", TOP: "TOP", BOTTOM_LEFT: "BOTTOM_LEFT", BOTTOM_RIGHT: "BOTTOM_RIGHT", TOP_RIGHT: "TOP_RIGHT", TOP_LEFT: "TOP_LEFT", CLOCKWISE: "CLOCKWISE", COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"}
    });
    var ke, BO, Ho = de(() => {
        "use strict";
        ke = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, BO = {ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT"}
    });
    var jO, Tf = de(() => {
        "use strict";
        jO = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var zO, KO, YO, $O, QO, ZO, JO, Bo, If = de(() => {
        "use strict";
        Ho();
        ({TRANSFORM_MOVE: zO, TRANSFORM_SCALE: KO, TRANSFORM_ROTATE: YO, TRANSFORM_SKEW: $O, STYLE_SIZE: QO, STYLE_FILTER: ZO, STYLE_FONT_VARIATION: JO} = ke), Bo = {[zO]: !0, [KO]: !0, [YO]: !0, [$O]: !0, [QO]: !0, [ZO]: !0, [JO]: !0}
    });
    var me = {};
    Pe(me, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => gx,
        IX2_ANIMATION_FRAME_CHANGED: () => lx,
        IX2_CLEAR_REQUESTED: () => sx,
        IX2_ELEMENT_STATE_CHANGED: () => vx,
        IX2_EVENT_LISTENER_ADDED: () => ux,
        IX2_EVENT_STATE_CHANGED: () => cx,
        IX2_INSTANCE_ADDED: () => dx,
        IX2_INSTANCE_REMOVED: () => hx,
        IX2_INSTANCE_STARTED: () => px,
        IX2_MEDIA_QUERIES_DEFINED: () => Ex,
        IX2_PARAMETER_CHANGED: () => fx,
        IX2_PLAYBACK_REQUESTED: () => ox,
        IX2_PREVIEW_REQUESTED: () => ix,
        IX2_RAW_DATA_IMPORTED: () => ex,
        IX2_SESSION_INITIALIZED: () => tx,
        IX2_SESSION_STARTED: () => rx,
        IX2_SESSION_STOPPED: () => nx,
        IX2_STOP_REQUESTED: () => ax,
        IX2_TEST_FRAME_RENDERED: () => mx,
        IX2_VIEWPORT_WIDTH_CHANGED: () => yx
    });
    var ex, tx, rx, nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, px, hx, vx, gx, yx, Ex, mx, wf = de(() => {
        "use strict";
        ex = "IX2_RAW_DATA_IMPORTED", tx = "IX2_SESSION_INITIALIZED", rx = "IX2_SESSION_STARTED", nx = "IX2_SESSION_STOPPED", ix = "IX2_PREVIEW_REQUESTED", ox = "IX2_PLAYBACK_REQUESTED", ax = "IX2_STOP_REQUESTED", sx = "IX2_CLEAR_REQUESTED", ux = "IX2_EVENT_LISTENER_ADDED", cx = "IX2_EVENT_STATE_CHANGED", lx = "IX2_ANIMATION_FRAME_CHANGED", fx = "IX2_PARAMETER_CHANGED", dx = "IX2_INSTANCE_ADDED", px = "IX2_INSTANCE_STARTED", hx = "IX2_INSTANCE_REMOVED", vx = "IX2_ELEMENT_STATE_CHANGED", gx = "IX2_ACTION_LIST_PLAYBACK_CHANGED", yx = "IX2_VIEWPORT_WIDTH_CHANGED", Ex = "IX2_MEDIA_QUERIES_DEFINED", mx = "IX2_TEST_FRAME_RENDERED"
    });
    var Oe = {};
    Pe(Oe, {
        ABSTRACT_NODE: () => yA,
        AUTO: () => aA,
        BACKGROUND: () => eA,
        BACKGROUND_COLOR: () => Jx,
        BAR_DELIMITER: () => cA,
        BORDER_COLOR: () => tA,
        BOUNDARY_SELECTOR: () => wx,
        CHILDREN: () => lA,
        COLON_DELIMITER: () => uA,
        COLOR: () => rA,
        COMMA_DELIMITER: () => sA,
        CONFIG_UNIT: () => Nx,
        CONFIG_VALUE: () => Sx,
        CONFIG_X_UNIT: () => Cx,
        CONFIG_X_VALUE: () => Ox,
        CONFIG_Y_UNIT: () => Rx,
        CONFIG_Y_VALUE: () => xx,
        CONFIG_Z_UNIT: () => Lx,
        CONFIG_Z_VALUE: () => Ax,
        DISPLAY: () => nA,
        FILTER: () => Yx,
        FLEX: () => iA,
        FONT_VARIATION_SETTINGS: () => $x,
        HEIGHT: () => Zx,
        HTML_ELEMENT: () => vA,
        IMMEDIATE_CHILDREN: () => fA,
        IX2_ID_DELIMITER: () => _x,
        OPACITY: () => Kx,
        PARENT: () => pA,
        PLAIN_OBJECT: () => gA,
        PRESERVE_3D: () => hA,
        RENDER_GENERAL: () => mA,
        RENDER_PLUGIN: () => bA,
        RENDER_STYLE: () => _A,
        RENDER_TRANSFORM: () => EA,
        ROTATE_X: () => Xx,
        ROTATE_Y: () => Wx,
        ROTATE_Z: () => Hx,
        SCALE_3D: () => kx,
        SCALE_X: () => Gx,
        SCALE_Y: () => Vx,
        SCALE_Z: () => Ux,
        SIBLINGS: () => dA,
        SKEW: () => Bx,
        SKEW_X: () => jx,
        SKEW_Y: () => zx,
        TRANSFORM: () => Px,
        TRANSLATE_3D: () => Fx,
        TRANSLATE_X: () => qx,
        TRANSLATE_Y: () => Mx,
        TRANSLATE_Z: () => Dx,
        WF_PAGE: () => bx,
        WIDTH: () => Qx,
        WILL_CHANGE: () => oA,
        W_MOD_IX: () => Ix,
        W_MOD_JS: () => Tx
    });
    var _x, bx, Tx, Ix, wx, Ox, xx, Ax, Sx, Cx, Rx, Lx, Nx, Px, qx, Mx, Dx, Fx, Gx, Vx, Ux, kx, Xx, Wx, Hx, Bx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, hA, vA, gA, yA, EA, mA, _A, bA, Of = de(() => {
        "use strict";
        _x = "|", bx = "data-wf-page", Tx = "w-mod-js", Ix = "w-mod-ix", wx = ".w-dyn-item", Ox = "xValue", xx = "yValue", Ax = "zValue", Sx = "value", Cx = "xUnit", Rx = "yUnit", Lx = "zUnit", Nx = "unit", Px = "transform", qx = "translateX", Mx = "translateY", Dx = "translateZ", Fx = "translate3d", Gx = "scaleX", Vx = "scaleY", Ux = "scaleZ", kx = "scale3d", Xx = "rotateX", Wx = "rotateY", Hx = "rotateZ", Bx = "skew", jx = "skewX", zx = "skewY", Kx = "opacity", Yx = "filter", $x = "font-variation-settings", Qx = "width", Zx = "height", Jx = "backgroundColor", eA = "background", tA = "borderColor", rA = "color", nA = "display", iA = "flex", oA = "willChange", aA = "AUTO", sA = ",", uA = ":", cA = "|", lA = "CHILDREN", fA = "IMMEDIATE_CHILDREN", dA = "SIBLINGS", pA = "PARENT", hA = "preserve-3d", vA = "HTML_ELEMENT", gA = "PLAIN_OBJECT", yA = "ABSTRACT_NODE", EA = "RENDER_TRANSFORM", mA = "RENDER_GENERAL", _A = "RENDER_STYLE", bA = "RENDER_PLUGIN"
    });
    var xf = {};
    Pe(xf, {
        ActionAppliesTo: () => BO,
        ActionTypeConsts: () => ke,
        EventAppliesTo: () => Xo,
        EventBasedOn: () => it,
        EventContinuousMouseAxes: () => XO,
        EventLimitAffectedElements: () => WO,
        EventTypeConsts: () => Ye,
        IX2EngineActionTypes: () => me,
        IX2EngineConstants: () => Oe,
        InteractionTypeConsts: () => jO,
        QuickEffectDirectionConsts: () => HO,
        QuickEffectIds: () => Wo,
        ReducedMotionTypes: () => Bo
    });
    var qe = de(() => {
        "use strict";
        bf();
        Ho();
        Tf();
        If();
        wf();
        Of()
    });
    var TA, Af, Sf = de(() => {
        "use strict";
        qe();
        ({IX2_RAW_DATA_IMPORTED: TA} = me), Af = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case TA:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Kt = c(ge => {
        "use strict";
        Object.defineProperty(ge, "__esModule", {value: !0});
        var IA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e
        } : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ge.clone = On;
        ge.addLast = Lf;
        ge.addFirst = Nf;
        ge.removeLast = Pf;
        ge.removeFirst = qf;
        ge.insert = Mf;
        ge.removeAt = Df;
        ge.replaceAt = Ff;
        ge.getIn = xn;
        ge.set = An;
        ge.setIn = Sn;
        ge.update = Vf;
        ge.updateIn = Uf;
        ge.merge = kf;
        ge.mergeDeep = Xf;
        ge.mergeIn = Wf;
        ge.omit = Hf;
        ge.addDefaults = Bf;
        var Cf = "INVALID_ARGS";

        function Rf(e) {
            throw new Error(e)
        }

        function jo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }

        var wA = {}.hasOwnProperty;

        function On(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Me(e, t, r) {
            var n = r;
            n == null && Rf(Cf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var f = s[u];
                if (f != null) {
                    var h = jo(f);
                    if (h.length) for (var p = 0; p <= h.length; p++) {
                        var y = h[p];
                        if (!(e && n[y] !== void 0)) {
                            var T = f[y];
                            t && wn(n[y]) && wn(T) && (T = Me(e, t, n[y], T)), !(T === void 0 || T === n[y]) && (i || (i = !0, n = On(n)), n[y] = T)
                        }
                    }
                }
            }
            return n
        }

        function wn(e) {
            var t = typeof e > "u" ? "undefined" : IA(e);
            return e != null && (t === "object" || t === "function")
        }

        function Lf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Nf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Pf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function qf(e) {
            return e.length ? e.slice(1) : e
        }

        function Mf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Df(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Ff(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function xn(e, t) {
            if (!Array.isArray(t) && Rf(Cf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i], r === void 0) return r
                }
                return r
            }
        }

        function An(e, t, r) {
            var n = typeof t == "number" ? [] : {}, i = e ?? n;
            if (i[t] === r) return i;
            var o = On(i);
            return o[t] = r, o
        }

        function Gf(e, t, r, n) {
            var i = void 0, o = t[n];
            if (n === t.length - 1) i = r; else {
                var s = wn(e) && wn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Gf(s, t, r, n + 1)
            }
            return An(e, o, i)
        }

        function Sn(e, t, r) {
            return t.length ? Gf(e, t, r, 0) : r
        }

        function Vf(e, t, r) {
            var n = e?.[t], i = r(n);
            return An(e, t, i)
        }

        function Uf(e, t, r) {
            var n = xn(e, t), i = r(n);
            return Sn(e, t, i)
        }

        function kf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Me(!1, !1, e, t, r, n, i, o)
        }

        function Xf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Me(!1, !0, e, t, r, n, i, o)
        }

        function Wf(e, t, r, n, i, o, s) {
            var a = xn(e, t);
            a == null && (a = {});
            for (var u = void 0, f = arguments.length, h = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) h[p - 7] = arguments[p];
            return h.length ? u = Me.call.apply(Me, [null, !1, !1, a, r, n, i, o, s].concat(h)) : u = Me(!1, !1, a, r, n, i, o, s), Sn(e, t, u)
        }

        function Hf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++) if (wA.call(e, r[i])) {
                n = !0;
                break
            }
            if (!n) return e;
            for (var o = {}, s = jo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Bf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Me(!0, !1, e, t, r, n, i, o)
        }

        var OA = {clone: On, addLast: Lf, addFirst: Nf, removeLast: Pf, removeFirst: qf, insert: Mf, removeAt: Df, replaceAt: Ff, getIn: xn, set: An, setIn: Sn, update: Vf, updateIn: Uf, merge: kf, mergeDeep: Xf, mergeIn: Wf, omit: Hf, addDefaults: Bf};
        ge.default = OA
    });
    var zf, xA, AA, SA, CA, RA, jf, Kf, Yf = de(() => {
        "use strict";
        qe();
        zf = oe(Kt()), {IX2_PREVIEW_REQUESTED: xA, IX2_PLAYBACK_REQUESTED: AA, IX2_STOP_REQUESTED: SA, IX2_CLEAR_REQUESTED: CA} = me, RA = {preview: {}, playback: {}, stop: {}, clear: {}}, jf = Object.create(null, {
            [xA]: {value: "preview"},
            [AA]: {value: "playback"},
            [SA]: {value: "stop"},
            [CA]: {value: "clear"}
        }), Kf = (e = RA, t) => {
            if (t.type in jf) {
                let r = [jf[t.type]];
                return (0, zf.setIn)(e, [r], {...t.payload})
            }
            return e
        }
    });
    var Ce, LA, NA, PA, qA, MA, DA, FA, GA, VA, UA, $f, kA, Qf, Zf = de(() => {
        "use strict";
        qe();
        Ce = oe(Kt()), {
            IX2_SESSION_INITIALIZED: LA,
            IX2_SESSION_STARTED: NA,
            IX2_TEST_FRAME_RENDERED: PA,
            IX2_SESSION_STOPPED: qA,
            IX2_EVENT_LISTENER_ADDED: MA,
            IX2_EVENT_STATE_CHANGED: DA,
            IX2_ANIMATION_FRAME_CHANGED: FA,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: GA,
            IX2_VIEWPORT_WIDTH_CHANGED: VA,
            IX2_MEDIA_QUERIES_DEFINED: UA
        } = me, $f = {active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1, reducedMotion: !1}, kA = 20, Qf = (e = $f, t) => {
            switch (t.type) {
                case LA: {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0, Ce.merge)(e, {hasBoundaryNodes: r, reducedMotion: n})
                }
                case NA:
                    return (0, Ce.set)(e, "active", !0);
                case PA: {
                    let {payload: {step: r = kA}} = t;
                    return (0, Ce.set)(e, "tick", e.tick + r)
                }
                case qA:
                    return $f;
                case FA: {
                    let {payload: {now: r}} = t;
                    return (0, Ce.set)(e, "tick", r)
                }
                case MA: {
                    let r = (0, Ce.addLast)(e.eventListeners, t.payload);
                    return (0, Ce.set)(e, "eventListeners", r)
                }
                case DA: {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0, Ce.setIn)(e, ["eventState", r], n)
                }
                case GA: {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0, Ce.setIn)(e, ["playbackState", r], n)
                }
                case VA: {
                    let {width: r, mediaQueries: n} = t.payload, i = n.length, o = null;
                    for (let s = 0; s < i; s++) {
                        let {key: a, min: u, max: f} = n[s];
                        if (r >= u && r <= f) {
                            o = a;
                            break
                        }
                    }
                    return (0, Ce.merge)(e, {viewportWidth: r, mediaQueryKey: o})
                }
                case UA:
                    return (0, Ce.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var ed = c((QW, Jf) => {
        function XA() {
            this.__data__ = [], this.size = 0
        }

        Jf.exports = XA
    });
    var Cn = c((ZW, td) => {
        function WA(e, t) {
            return e === t || e !== e && t !== t
        }

        td.exports = WA
    });
    var Rr = c((JW, rd) => {
        var HA = Cn();

        function BA(e, t) {
            for (var r = e.length; r--;) if (HA(e[r][0], t)) return r;
            return -1
        }

        rd.exports = BA
    });
    var id = c((eH, nd) => {
        var jA = Rr(), zA = Array.prototype, KA = zA.splice;

        function YA(e) {
            var t = this.__data__, r = jA(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : KA.call(t, r, 1), --this.size, !0
        }

        nd.exports = YA
    });
    var ad = c((tH, od) => {
        var $A = Rr();

        function QA(e) {
            var t = this.__data__, r = $A(t, e);
            return r < 0 ? void 0 : t[r][1]
        }

        od.exports = QA
    });
    var ud = c((rH, sd) => {
        var ZA = Rr();

        function JA(e) {
            return ZA(this.__data__, e) > -1
        }

        sd.exports = JA
    });
    var ld = c((nH, cd) => {
        var eS = Rr();

        function tS(e, t) {
            var r = this.__data__, n = eS(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }

        cd.exports = tS
    });
    var Lr = c((iH, fd) => {
        var rS = ed(), nS = id(), iS = ad(), oS = ud(), aS = ld();

        function Yt(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        Yt.prototype.clear = rS;
        Yt.prototype.delete = nS;
        Yt.prototype.get = iS;
        Yt.prototype.has = oS;
        Yt.prototype.set = aS;
        fd.exports = Yt
    });
    var pd = c((oH, dd) => {
        var sS = Lr();

        function uS() {
            this.__data__ = new sS, this.size = 0
        }

        dd.exports = uS
    });
    var vd = c((aH, hd) => {
        function cS(e) {
            var t = this.__data__, r = t.delete(e);
            return this.size = t.size, r
        }

        hd.exports = cS
    });
    var yd = c((sH, gd) => {
        function lS(e) {
            return this.__data__.get(e)
        }

        gd.exports = lS
    });
    var md = c((uH, Ed) => {
        function fS(e) {
            return this.__data__.has(e)
        }

        Ed.exports = fS
    });
    var ot = c((cH, _d) => {
        function dS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }

        _d.exports = dS
    });
    var zo = c((lH, bd) => {
        var pS = bt(), hS = ot(), vS = "[object AsyncFunction]", gS = "[object Function]", yS = "[object GeneratorFunction]", ES = "[object Proxy]";

        function mS(e) {
            if (!hS(e)) return !1;
            var t = pS(e);
            return t == gS || t == yS || t == vS || t == ES
        }

        bd.exports = mS
    });
    var Id = c((fH, Td) => {
        var _S = Ke(), bS = _S["__core-js_shared__"];
        Td.exports = bS
    });
    var xd = c((dH, Od) => {
        var Ko = Id(), wd = function () {
            var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();

        function TS(e) {
            return !!wd && wd in e
        }

        Od.exports = TS
    });
    var Yo = c((pH, Ad) => {
        var IS = Function.prototype, wS = IS.toString;

        function OS(e) {
            if (e != null) {
                try {
                    return wS.call(e)
                } catch {
                }
                try {
                    return e + ""
                } catch {
                }
            }
            return ""
        }

        Ad.exports = OS
    });
    var Cd = c((hH, Sd) => {
        var xS = zo(), AS = xd(), SS = ot(), CS = Yo(), RS = /[\\^$.*+?()[\]{}|]/g, LS = /^\[object .+?Constructor\]$/, NS = Function.prototype, PS = Object.prototype, qS = NS.toString, MS = PS.hasOwnProperty,
            DS = RegExp("^" + qS.call(MS).replace(RS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function FS(e) {
            if (!SS(e) || AS(e)) return !1;
            var t = xS(e) ? DS : LS;
            return t.test(CS(e))
        }

        Sd.exports = FS
    });
    var Ld = c((vH, Rd) => {
        function GS(e, t) {
            return e?.[t]
        }

        Rd.exports = GS
    });
    var Tt = c((gH, Nd) => {
        var VS = Cd(), US = Ld();

        function kS(e, t) {
            var r = US(e, t);
            return VS(r) ? r : void 0
        }

        Nd.exports = kS
    });
    var Rn = c((yH, Pd) => {
        var XS = Tt(), WS = Ke(), HS = XS(WS, "Map");
        Pd.exports = HS
    });
    var Nr = c((EH, qd) => {
        var BS = Tt(), jS = BS(Object, "create");
        qd.exports = jS
    });
    var Fd = c((mH, Dd) => {
        var Md = Nr();

        function zS() {
            this.__data__ = Md ? Md(null) : {}, this.size = 0
        }

        Dd.exports = zS
    });
    var Vd = c((_H, Gd) => {
        function KS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }

        Gd.exports = KS
    });
    var kd = c((bH, Ud) => {
        var YS = Nr(), $S = "__lodash_hash_undefined__", QS = Object.prototype, ZS = QS.hasOwnProperty;

        function JS(e) {
            var t = this.__data__;
            if (YS) {
                var r = t[e];
                return r === $S ? void 0 : r
            }
            return ZS.call(t, e) ? t[e] : void 0
        }

        Ud.exports = JS
    });
    var Wd = c((TH, Xd) => {
        var e0 = Nr(), t0 = Object.prototype, r0 = t0.hasOwnProperty;

        function n0(e) {
            var t = this.__data__;
            return e0 ? t[e] !== void 0 : r0.call(t, e)
        }

        Xd.exports = n0
    });
    var Bd = c((IH, Hd) => {
        var i0 = Nr(), o0 = "__lodash_hash_undefined__";

        function a0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = i0 && t === void 0 ? o0 : t, this
        }

        Hd.exports = a0
    });
    var zd = c((wH, jd) => {
        var s0 = Fd(), u0 = Vd(), c0 = kd(), l0 = Wd(), f0 = Bd();

        function $t(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        $t.prototype.clear = s0;
        $t.prototype.delete = u0;
        $t.prototype.get = c0;
        $t.prototype.has = l0;
        $t.prototype.set = f0;
        jd.exports = $t
    });
    var $d = c((OH, Yd) => {
        var Kd = zd(), d0 = Lr(), p0 = Rn();

        function h0() {
            this.size = 0, this.__data__ = {hash: new Kd, map: new (p0 || d0), string: new Kd}
        }

        Yd.exports = h0
    });
    var Zd = c((xH, Qd) => {
        function v0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }

        Qd.exports = v0
    });
    var Pr = c((AH, Jd) => {
        var g0 = Zd();

        function y0(e, t) {
            var r = e.__data__;
            return g0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }

        Jd.exports = y0
    });
    var tp = c((SH, ep) => {
        var E0 = Pr();

        function m0(e) {
            var t = E0(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }

        ep.exports = m0
    });
    var np = c((CH, rp) => {
        var _0 = Pr();

        function b0(e) {
            return _0(this, e).get(e)
        }

        rp.exports = b0
    });
    var op = c((RH, ip) => {
        var T0 = Pr();

        function I0(e) {
            return T0(this, e).has(e)
        }

        ip.exports = I0
    });
    var sp = c((LH, ap) => {
        var w0 = Pr();

        function O0(e, t) {
            var r = w0(this, e), n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }

        ap.exports = O0
    });
    var Ln = c((NH, up) => {
        var x0 = $d(), A0 = tp(), S0 = np(), C0 = op(), R0 = sp();

        function Qt(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }

        Qt.prototype.clear = x0;
        Qt.prototype.delete = A0;
        Qt.prototype.get = S0;
        Qt.prototype.has = C0;
        Qt.prototype.set = R0;
        up.exports = Qt
    });
    var lp = c((PH, cp) => {
        var L0 = Lr(), N0 = Rn(), P0 = Ln(), q0 = 200;

        function M0(e, t) {
            var r = this.__data__;
            if (r instanceof L0) {
                var n = r.__data__;
                if (!N0 || n.length < q0 - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new P0(n)
            }
            return r.set(e, t), this.size = r.size, this
        }

        cp.exports = M0
    });
    var $o = c((qH, fp) => {
        var D0 = Lr(), F0 = pd(), G0 = vd(), V0 = yd(), U0 = md(), k0 = lp();

        function Zt(e) {
            var t = this.__data__ = new D0(e);
            this.size = t.size
        }

        Zt.prototype.clear = F0;
        Zt.prototype.delete = G0;
        Zt.prototype.get = V0;
        Zt.prototype.has = U0;
        Zt.prototype.set = k0;
        fp.exports = Zt
    });
    var pp = c((MH, dp) => {
        var X0 = "__lodash_hash_undefined__";

        function W0(e) {
            return this.__data__.set(e, X0), this
        }

        dp.exports = W0
    });
    var vp = c((DH, hp) => {
        function H0(e) {
            return this.__data__.has(e)
        }

        hp.exports = H0
    });
    var yp = c((FH, gp) => {
        var B0 = Ln(), j0 = pp(), z0 = vp();

        function Nn(e) {
            var t = -1, r = e == null ? 0 : e.length;
            for (this.__data__ = new B0; ++t < r;) this.add(e[t])
        }

        Nn.prototype.add = Nn.prototype.push = j0;
        Nn.prototype.has = z0;
        gp.exports = Nn
    });
    var mp = c((GH, Ep) => {
        function K0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) if (t(e[r], r, e)) return !0;
            return !1
        }

        Ep.exports = K0
    });
    var bp = c((VH, _p) => {
        function Y0(e, t) {
            return e.has(t)
        }

        _p.exports = Y0
    });
    var Qo = c((UH, Tp) => {
        var $0 = yp(), Q0 = mp(), Z0 = bp(), J0 = 1, eC = 2;

        function tC(e, t, r, n, i, o) {
            var s = r & J0, a = e.length, u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var f = o.get(e), h = o.get(t);
            if (f && h) return f == t && h == e;
            var p = -1, y = !0, T = r & eC ? new $0 : void 0;
            for (o.set(e, t), o.set(t, e); ++p < a;) {
                var _ = e[p], I = t[p];
                if (n) var M = s ? n(I, _, p, t, e, o) : n(_, I, p, e, t, o);
                if (M !== void 0) {
                    if (M) continue;
                    y = !1;
                    break
                }
                if (T) {
                    if (!Q0(t, function (S, N) {
                        if (!Z0(T, N) && (_ === S || i(_, S, r, n, o))) return T.push(N)
                    })) {
                        y = !1;
                        break
                    }
                } else if (!(_ === I || i(_, I, r, n, o))) {
                    y = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), y
        }

        Tp.exports = tC
    });
    var wp = c((kH, Ip) => {
        var rC = Ke(), nC = rC.Uint8Array;
        Ip.exports = nC
    });
    var xp = c((XH, Op) => {
        function iC(e) {
            var t = -1, r = Array(e.size);
            return e.forEach(function (n, i) {
                r[++t] = [i, n]
            }), r
        }

        Op.exports = iC
    });
    var Sp = c((WH, Ap) => {
        function oC(e) {
            var t = -1, r = Array(e.size);
            return e.forEach(function (n) {
                r[++t] = n
            }), r
        }

        Ap.exports = oC
    });
    var Pp = c((HH, Np) => {
        var Cp = Bt(), Rp = wp(), aC = Cn(), sC = Qo(), uC = xp(), cC = Sp(), lC = 1, fC = 2, dC = "[object Boolean]", pC = "[object Date]", hC = "[object Error]", vC = "[object Map]", gC = "[object Number]", yC = "[object RegExp]", EC = "[object Set]", mC = "[object String]",
            _C = "[object Symbol]", bC = "[object ArrayBuffer]", TC = "[object DataView]", Lp = Cp ? Cp.prototype : void 0, Zo = Lp ? Lp.valueOf : void 0;

        function IC(e, t, r, n, i, o, s) {
            switch (r) {
                case TC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case bC:
                    return !(e.byteLength != t.byteLength || !o(new Rp(e), new Rp(t)));
                case dC:
                case pC:
                case gC:
                    return aC(+e, +t);
                case hC:
                    return e.name == t.name && e.message == t.message;
                case yC:
                case mC:
                    return e == t + "";
                case vC:
                    var a = uC;
                case EC:
                    var u = n & lC;
                    if (a || (a = cC), e.size != t.size && !u) return !1;
                    var f = s.get(e);
                    if (f) return f == t;
                    n |= fC, s.set(e, t);
                    var h = sC(a(e), a(t), n, i, o, s);
                    return s.delete(e), h;
                case _C:
                    if (Zo) return Zo.call(e) == Zo.call(t)
            }
            return !1
        }

        Np.exports = IC
    });
    var Pn = c((BH, qp) => {
        function wC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }

        qp.exports = wC
    });
    var Te = c((jH, Mp) => {
        var OC = Array.isArray;
        Mp.exports = OC
    });
    var Jo = c((zH, Dp) => {
        var xC = Pn(), AC = Te();

        function SC(e, t, r) {
            var n = t(e);
            return AC(e) ? n : xC(n, r(e))
        }

        Dp.exports = SC
    });
    var Gp = c((KH, Fp) => {
        function CC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }

        Fp.exports = CC
    });
    var ea = c((YH, Vp) => {
        function RC() {
            return []
        }

        Vp.exports = RC
    });
    var ta = c(($H, kp) => {
        var LC = Gp(), NC = ea(), PC = Object.prototype, qC = PC.propertyIsEnumerable, Up = Object.getOwnPropertySymbols, MC = Up ? function (e) {
            return e == null ? [] : (e = Object(e), LC(Up(e), function (t) {
                return qC.call(e, t)
            }))
        } : NC;
        kp.exports = MC
    });
    var Wp = c((QH, Xp) => {
        function DC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }

        Xp.exports = DC
    });
    var Bp = c((ZH, Hp) => {
        var FC = bt(), GC = dt(), VC = "[object Arguments]";

        function UC(e) {
            return GC(e) && FC(e) == VC
        }

        Hp.exports = UC
    });
    var qr = c((JH, Kp) => {
        var jp = Bp(), kC = dt(), zp = Object.prototype, XC = zp.hasOwnProperty, WC = zp.propertyIsEnumerable, HC = jp(function () {
            return arguments
        }()) ? jp : function (e) {
            return kC(e) && XC.call(e, "callee") && !WC.call(e, "callee")
        };
        Kp.exports = HC
    });
    var $p = c((e5, Yp) => {
        function BC() {
            return !1
        }

        Yp.exports = BC
    });
    var qn = c((Mr, Jt) => {
        var jC = Ke(), zC = $p(), Jp = typeof Mr == "object" && Mr && !Mr.nodeType && Mr, Qp = Jp && typeof Jt == "object" && Jt && !Jt.nodeType && Jt, KC = Qp && Qp.exports === Jp, Zp = KC ? jC.Buffer : void 0, YC = Zp ? Zp.isBuffer : void 0, $C = YC || zC;
        Jt.exports = $C
    });
    var Mn = c((t5, eh) => {
        var QC = 9007199254740991, ZC = /^(?:0|[1-9]\d*)$/;

        function JC(e, t) {
            var r = typeof e;
            return t = t ?? QC, !!t && (r == "number" || r != "symbol" && ZC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        eh.exports = JC
    });
    var Dn = c((r5, th) => {
        var eR = 9007199254740991;

        function tR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= eR
        }

        th.exports = tR
    });
    var nh = c((n5, rh) => {
        var rR = bt(), nR = Dn(), iR = dt(), oR = "[object Arguments]", aR = "[object Array]", sR = "[object Boolean]", uR = "[object Date]", cR = "[object Error]", lR = "[object Function]", fR = "[object Map]", dR = "[object Number]", pR = "[object Object]", hR = "[object RegExp]",
            vR = "[object Set]", gR = "[object String]", yR = "[object WeakMap]", ER = "[object ArrayBuffer]", mR = "[object DataView]", _R = "[object Float32Array]", bR = "[object Float64Array]", TR = "[object Int8Array]", IR = "[object Int16Array]", wR = "[object Int32Array]",
            OR = "[object Uint8Array]", xR = "[object Uint8ClampedArray]", AR = "[object Uint16Array]", SR = "[object Uint32Array]", fe = {};
        fe[_R] = fe[bR] = fe[TR] = fe[IR] = fe[wR] = fe[OR] = fe[xR] = fe[AR] = fe[SR] = !0;
        fe[oR] = fe[aR] = fe[ER] = fe[sR] = fe[mR] = fe[uR] = fe[cR] = fe[lR] = fe[fR] = fe[dR] = fe[pR] = fe[hR] = fe[vR] = fe[gR] = fe[yR] = !1;

        function CR(e) {
            return iR(e) && nR(e.length) && !!fe[rR(e)]
        }

        rh.exports = CR
    });
    var oh = c((i5, ih) => {
        function RR(e) {
            return function (t) {
                return e(t)
            }
        }

        ih.exports = RR
    });
    var sh = c((Dr, er) => {
        var LR = xo(), ah = typeof Dr == "object" && Dr && !Dr.nodeType && Dr, Fr = ah && typeof er == "object" && er && !er.nodeType && er, NR = Fr && Fr.exports === ah, ra = NR && LR.process, PR = function () {
            try {
                var e = Fr && Fr.require && Fr.require("util").types;
                return e || ra && ra.binding && ra.binding("util")
            } catch {
            }
        }();
        er.exports = PR
    });
    var Fn = c((o5, lh) => {
        var qR = nh(), MR = oh(), uh = sh(), ch = uh && uh.isTypedArray, DR = ch ? MR(ch) : qR;
        lh.exports = DR
    });
    var na = c((a5, fh) => {
        var FR = Wp(), GR = qr(), VR = Te(), UR = qn(), kR = Mn(), XR = Fn(), WR = Object.prototype, HR = WR.hasOwnProperty;

        function BR(e, t) {
            var r = VR(e), n = !r && GR(e), i = !r && !n && UR(e), o = !r && !n && !i && XR(e), s = r || n || i || o, a = s ? FR(e.length, String) : [], u = a.length;
            for (var f in e) (t || HR.call(e, f)) && !(s && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || kR(f, u))) && a.push(f);
            return a
        }

        fh.exports = BR
    });
    var Gn = c((s5, dh) => {
        var jR = Object.prototype;

        function zR(e) {
            var t = e && e.constructor, r = typeof t == "function" && t.prototype || jR;
            return e === r
        }

        dh.exports = zR
    });
    var hh = c((u5, ph) => {
        var KR = Ao(), YR = KR(Object.keys, Object);
        ph.exports = YR
    });
    var Vn = c((c5, vh) => {
        var $R = Gn(), QR = hh(), ZR = Object.prototype, JR = ZR.hasOwnProperty;

        function eL(e) {
            if (!$R(e)) return QR(e);
            var t = [];
            for (var r in Object(e)) JR.call(e, r) && r != "constructor" && t.push(r);
            return t
        }

        vh.exports = eL
    });
    var Nt = c((l5, gh) => {
        var tL = zo(), rL = Dn();

        function nL(e) {
            return e != null && rL(e.length) && !tL(e)
        }

        gh.exports = nL
    });
    var Gr = c((f5, yh) => {
        var iL = na(), oL = Vn(), aL = Nt();

        function sL(e) {
            return aL(e) ? iL(e) : oL(e)
        }

        yh.exports = sL
    });
    var mh = c((d5, Eh) => {
        var uL = Jo(), cL = ta(), lL = Gr();

        function fL(e) {
            return uL(e, lL, cL)
        }

        Eh.exports = fL
    });
    var Th = c((p5, bh) => {
        var _h = mh(), dL = 1, pL = Object.prototype, hL = pL.hasOwnProperty;

        function vL(e, t, r, n, i, o) {
            var s = r & dL, a = _h(e), u = a.length, f = _h(t), h = f.length;
            if (u != h && !s) return !1;
            for (var p = u; p--;) {
                var y = a[p];
                if (!(s ? y in t : hL.call(t, y))) return !1
            }
            var T = o.get(e), _ = o.get(t);
            if (T && _) return T == t && _ == e;
            var I = !0;
            o.set(e, t), o.set(t, e);
            for (var M = s; ++p < u;) {
                y = a[p];
                var S = e[y], N = t[y];
                if (n) var A = s ? n(N, S, y, t, e, o) : n(S, N, y, e, t, o);
                if (!(A === void 0 ? S === N || i(S, N, r, n, o) : A)) {
                    I = !1;
                    break
                }
                M || (M = y == "constructor")
            }
            if (I && !M) {
                var D = e.constructor, q = t.constructor;
                D != q && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof q == "function" && q instanceof q) && (I = !1)
            }
            return o.delete(e), o.delete(t), I
        }

        bh.exports = vL
    });
    var wh = c((h5, Ih) => {
        var gL = Tt(), yL = Ke(), EL = gL(yL, "DataView");
        Ih.exports = EL
    });
    var xh = c((v5, Oh) => {
        var mL = Tt(), _L = Ke(), bL = mL(_L, "Promise");
        Oh.exports = bL
    });
    var Sh = c((g5, Ah) => {
        var TL = Tt(), IL = Ke(), wL = TL(IL, "Set");
        Ah.exports = wL
    });
    var ia = c((y5, Ch) => {
        var OL = Tt(), xL = Ke(), AL = OL(xL, "WeakMap");
        Ch.exports = AL
    });
    var Un = c((E5, Dh) => {
        var oa = wh(), aa = Rn(), sa = xh(), ua = Sh(), ca = ia(), Mh = bt(), tr = Yo(), Rh = "[object Map]", SL = "[object Object]", Lh = "[object Promise]", Nh = "[object Set]", Ph = "[object WeakMap]", qh = "[object DataView]", CL = tr(oa), RL = tr(aa), LL = tr(sa), NL = tr(ua), PL = tr(ca),
            Pt = Mh;
        (oa && Pt(new oa(new ArrayBuffer(1))) != qh || aa && Pt(new aa) != Rh || sa && Pt(sa.resolve()) != Lh || ua && Pt(new ua) != Nh || ca && Pt(new ca) != Ph) && (Pt = function (e) {
            var t = Mh(e), r = t == SL ? e.constructor : void 0, n = r ? tr(r) : "";
            if (n) switch (n) {
                case CL:
                    return qh;
                case RL:
                    return Rh;
                case LL:
                    return Lh;
                case NL:
                    return Nh;
                case PL:
                    return Ph
            }
            return t
        });
        Dh.exports = Pt
    });
    var Hh = c((m5, Wh) => {
        var la = $o(), qL = Qo(), ML = Pp(), DL = Th(), Fh = Un(), Gh = Te(), Vh = qn(), FL = Fn(), GL = 1, Uh = "[object Arguments]", kh = "[object Array]", kn = "[object Object]", VL = Object.prototype, Xh = VL.hasOwnProperty;

        function UL(e, t, r, n, i, o) {
            var s = Gh(e), a = Gh(t), u = s ? kh : Fh(e), f = a ? kh : Fh(t);
            u = u == Uh ? kn : u, f = f == Uh ? kn : f;
            var h = u == kn, p = f == kn, y = u == f;
            if (y && Vh(e)) {
                if (!Vh(t)) return !1;
                s = !0, h = !1
            }
            if (y && !h) return o || (o = new la), s || FL(e) ? qL(e, t, r, n, i, o) : ML(e, t, u, r, n, i, o);
            if (!(r & GL)) {
                var T = h && Xh.call(e, "__wrapped__"), _ = p && Xh.call(t, "__wrapped__");
                if (T || _) {
                    var I = T ? e.value() : e, M = _ ? t.value() : t;
                    return o || (o = new la), i(I, M, r, n, o)
                }
            }
            return y ? (o || (o = new la), DL(e, t, r, n, i, o)) : !1
        }

        Wh.exports = UL
    });
    var fa = c((_5, zh) => {
        var kL = Hh(), Bh = dt();

        function jh(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Bh(e) && !Bh(t) ? e !== e && t !== t : kL(e, t, r, n, jh, i)
        }

        zh.exports = jh
    });
    var Yh = c((b5, Kh) => {
        var XL = $o(), WL = fa(), HL = 1, BL = 2;

        function jL(e, t, r, n) {
            var i = r.length, o = i, s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0], f = e[u], h = a[1];
                if (s && a[2]) {
                    if (f === void 0 && !(u in e)) return !1
                } else {
                    var p = new XL;
                    if (n) var y = n(f, h, u, e, t, p);
                    if (!(y === void 0 ? WL(h, f, HL | BL, n, p) : y)) return !1
                }
            }
            return !0
        }

        Kh.exports = jL
    });
    var da = c((T5, $h) => {
        var zL = ot();

        function KL(e) {
            return e === e && !zL(e)
        }

        $h.exports = KL
    });
    var Zh = c((I5, Qh) => {
        var YL = da(), $L = Gr();

        function QL(e) {
            for (var t = $L(e), r = t.length; r--;) {
                var n = t[r], i = e[n];
                t[r] = [n, i, YL(i)]
            }
            return t
        }

        Qh.exports = QL
    });
    var pa = c((w5, Jh) => {
        function ZL(e, t) {
            return function (r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }

        Jh.exports = ZL
    });
    var tv = c((O5, ev) => {
        var JL = Yh(), eN = Zh(), tN = pa();

        function rN(e) {
            var t = eN(e);
            return t.length == 1 && t[0][2] ? tN(t[0][0], t[0][1]) : function (r) {
                return r === e || JL(r, e, t)
            }
        }

        ev.exports = rN
    });
    var Vr = c((x5, rv) => {
        var nN = bt(), iN = dt(), oN = "[object Symbol]";

        function aN(e) {
            return typeof e == "symbol" || iN(e) && nN(e) == oN
        }

        rv.exports = aN
    });
    var Xn = c((A5, nv) => {
        var sN = Te(), uN = Vr(), cN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lN = /^\w*$/;

        function fN(e, t) {
            if (sN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || uN(e) ? !0 : lN.test(e) || !cN.test(e) || t != null && e in Object(t)
        }

        nv.exports = fN
    });
    var av = c((S5, ov) => {
        var iv = Ln(), dN = "Expected a function";

        function ha(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(dN);
            var r = function () {
                var n = arguments, i = t ? t.apply(this, n) : n[0], o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new (ha.Cache || iv), r
        }

        ha.Cache = iv;
        ov.exports = ha
    });
    var uv = c((C5, sv) => {
        var pN = av(), hN = 500;

        function vN(e) {
            var t = pN(e, function (n) {
                return r.size === hN && r.clear(), n
            }), r = t.cache;
            return t
        }

        sv.exports = vN
    });
    var lv = c((R5, cv) => {
        var gN = uv(), yN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, EN = /\\(\\)?/g, mN = gN(function (e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(yN, function (r, n, i, o) {
                t.push(i ? o.replace(EN, "$1") : n || r)
            }), t
        });
        cv.exports = mN
    });
    var va = c((L5, fv) => {
        function _N(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }

        fv.exports = _N
    });
    var yv = c((N5, gv) => {
        var dv = Bt(), bN = va(), TN = Te(), IN = Vr(), wN = 1 / 0, pv = dv ? dv.prototype : void 0, hv = pv ? pv.toString : void 0;

        function vv(e) {
            if (typeof e == "string") return e;
            if (TN(e)) return bN(e, vv) + "";
            if (IN(e)) return hv ? hv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -wN ? "-0" : t
        }

        gv.exports = vv
    });
    var mv = c((P5, Ev) => {
        var ON = yv();

        function xN(e) {
            return e == null ? "" : ON(e)
        }

        Ev.exports = xN
    });
    var Ur = c((q5, _v) => {
        var AN = Te(), SN = Xn(), CN = lv(), RN = mv();

        function LN(e, t) {
            return AN(e) ? e : SN(e, t) ? [e] : CN(RN(e))
        }

        _v.exports = LN
    });
    var rr = c((M5, bv) => {
        var NN = Vr(), PN = 1 / 0;

        function qN(e) {
            if (typeof e == "string" || NN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -PN ? "-0" : t
        }

        bv.exports = qN
    });
    var Wn = c((D5, Tv) => {
        var MN = Ur(), DN = rr();

        function FN(e, t) {
            t = MN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[DN(t[r++])];
            return r && r == n ? e : void 0
        }

        Tv.exports = FN
    });
    var Hn = c((F5, Iv) => {
        var GN = Wn();

        function VN(e, t, r) {
            var n = e == null ? void 0 : GN(e, t);
            return n === void 0 ? r : n
        }

        Iv.exports = VN
    });
    var Ov = c((G5, wv) => {
        function UN(e, t) {
            return e != null && t in Object(e)
        }

        wv.exports = UN
    });
    var Av = c((V5, xv) => {
        var kN = Ur(), XN = qr(), WN = Te(), HN = Mn(), BN = Dn(), jN = rr();

        function zN(e, t, r) {
            t = kN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = jN(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && BN(i) && HN(s, i) && (WN(e) || XN(e)))
        }

        xv.exports = zN
    });
    var Cv = c((U5, Sv) => {
        var KN = Ov(), YN = Av();

        function $N(e, t) {
            return e != null && YN(e, t, KN)
        }

        Sv.exports = $N
    });
    var Lv = c((k5, Rv) => {
        var QN = fa(), ZN = Hn(), JN = Cv(), eP = Xn(), tP = da(), rP = pa(), nP = rr(), iP = 1, oP = 2;

        function aP(e, t) {
            return eP(e) && tP(t) ? rP(nP(e), t) : function (r) {
                var n = ZN(r, e);
                return n === void 0 && n === t ? JN(r, e) : QN(t, n, iP | oP)
            }
        }

        Rv.exports = aP
    });
    var Bn = c((X5, Nv) => {
        function sP(e) {
            return e
        }

        Nv.exports = sP
    });
    var ga = c((W5, Pv) => {
        function uP(e) {
            return function (t) {
                return t?.[e]
            }
        }

        Pv.exports = uP
    });
    var Mv = c((H5, qv) => {
        var cP = Wn();

        function lP(e) {
            return function (t) {
                return cP(t, e)
            }
        }

        qv.exports = lP
    });
    var Fv = c((B5, Dv) => {
        var fP = ga(), dP = Mv(), pP = Xn(), hP = rr();

        function vP(e) {
            return pP(e) ? fP(hP(e)) : dP(e)
        }

        Dv.exports = vP
    });
    var It = c((j5, Gv) => {
        var gP = tv(), yP = Lv(), EP = Bn(), mP = Te(), _P = Fv();

        function bP(e) {
            return typeof e == "function" ? e : e == null ? EP : typeof e == "object" ? mP(e) ? yP(e[0], e[1]) : gP(e) : _P(e)
        }

        Gv.exports = bP
    });
    var ya = c((z5, Vv) => {
        var TP = It(), IP = Nt(), wP = Gr();

        function OP(e) {
            return function (t, r, n) {
                var i = Object(t);
                if (!IP(t)) {
                    var o = TP(r, 3);
                    t = wP(t), r = function (a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }

        Vv.exports = OP
    });
    var Ea = c((K5, Uv) => {
        function xP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;) if (t(e[o], o, e)) return o;
            return -1
        }

        Uv.exports = xP
    });
    var Xv = c((Y5, kv) => {
        var AP = /\s/;

        function SP(e) {
            for (var t = e.length; t-- && AP.test(e.charAt(t));) ;
            return t
        }

        kv.exports = SP
    });
    var Hv = c(($5, Wv) => {
        var CP = Xv(), RP = /^\s+/;

        function LP(e) {
            return e && e.slice(0, CP(e) + 1).replace(RP, "")
        }

        Wv.exports = LP
    });
    var jn = c((Q5, zv) => {
        var NP = Hv(), Bv = ot(), PP = Vr(), jv = 0 / 0, qP = /^[-+]0x[0-9a-f]+$/i, MP = /^0b[01]+$/i, DP = /^0o[0-7]+$/i, FP = parseInt;

        function GP(e) {
            if (typeof e == "number") return e;
            if (PP(e)) return jv;
            if (Bv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Bv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = NP(e);
            var r = MP.test(e);
            return r || DP.test(e) ? FP(e.slice(2), r ? 2 : 8) : qP.test(e) ? jv : +e
        }

        zv.exports = GP
    });
    var $v = c((Z5, Yv) => {
        var VP = jn(), Kv = 1 / 0, UP = 17976931348623157e292;

        function kP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = VP(e), e === Kv || e === -Kv) {
                var t = e < 0 ? -1 : 1;
                return t * UP
            }
            return e === e ? e : 0
        }

        Yv.exports = kP
    });
    var ma = c((J5, Qv) => {
        var XP = $v();

        function WP(e) {
            var t = XP(e), r = t % 1;
            return t === t ? r ? t - r : t : 0
        }

        Qv.exports = WP
    });
    var Jv = c((eB, Zv) => {
        var HP = Ea(), BP = It(), jP = ma(), zP = Math.max;

        function KP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : jP(r);
            return i < 0 && (i = zP(n + i, 0)), HP(e, BP(t, 3), i)
        }

        Zv.exports = KP
    });
    var _a = c((tB, eg) => {
        var YP = ya(), $P = Jv(), QP = YP($P);
        eg.exports = QP
    });
    var ng = {};
    Pe(ng, {ELEMENT_MATCHES: () => ZP, FLEX_PREFIXED: () => ba, IS_BROWSER_ENV: () => $e, TRANSFORM_PREFIXED: () => wt, TRANSFORM_STYLE_PREFIXED: () => Kn, withBrowser: () => zn});
    var rg, $e, zn, ZP, ba, wt, tg, Kn, Yn = de(() => {
        "use strict";
        rg = oe(_a()), $e = typeof window < "u", zn = (e, t) => $e ? e() : t, ZP = zn(() => (0, rg.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), ba = zn(() => {
            let e = document.createElement("i"), t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"], r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), wt = zn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"], r = "Transform", {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), tg = wt.split("transform")[0], Kn = tg ? tg + "TransformStyle" : "transformStyle"
    });
    var Ta = c((rB, ug) => {
        var JP = 4, eq = .001, tq = 1e-7, rq = 10, kr = 11, $n = 1 / (kr - 1), nq = typeof Float32Array == "function";

        function ig(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function og(e, t) {
            return 3 * t - 6 * e
        }

        function ag(e) {
            return 3 * e
        }

        function Qn(e, t, r) {
            return ((ig(t, r) * e + og(t, r)) * e + ag(t)) * e
        }

        function sg(e, t, r) {
            return 3 * ig(t, r) * e * e + 2 * og(t, r) * e + ag(t)
        }

        function iq(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = Qn(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > tq && ++a < rq);
            return s
        }

        function oq(e, t, r, n) {
            for (var i = 0; i < JP; ++i) {
                var o = sg(t, r, n);
                if (o === 0) return t;
                var s = Qn(t, r, n) - e;
                t -= s / o
            }
            return t
        }

        ug.exports = function (t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = nq ? new Float32Array(kr) : new Array(kr);
            if (t !== r || n !== i) for (var s = 0; s < kr; ++s) o[s] = Qn(s * $n, t, n);

            function a(u) {
                for (var f = 0, h = 1, p = kr - 1; h !== p && o[h] <= u; ++h) f += $n;
                --h;
                var y = (u - o[h]) / (o[h + 1] - o[h]), T = f + y * $n, _ = sg(T, t, n);
                return _ >= eq ? oq(u, T, t, n) : _ === 0 ? T : iq(u, f, f + $n, t, n)
            }

            return function (f) {
                return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : Qn(a(f), r, i)
            }
        }
    });
    var Wr = {};
    Pe(Wr, {
        bounce: () => kq,
        bouncePast: () => Xq,
        ease: () => aq,
        easeIn: () => sq,
        easeInOut: () => cq,
        easeOut: () => uq,
        inBack: () => Nq,
        inCirc: () => Sq,
        inCubic: () => pq,
        inElastic: () => Mq,
        inExpo: () => Oq,
        inOutBack: () => qq,
        inOutCirc: () => Rq,
        inOutCubic: () => vq,
        inOutElastic: () => Fq,
        inOutExpo: () => Aq,
        inOutQuad: () => dq,
        inOutQuart: () => Eq,
        inOutQuint: () => bq,
        inOutSine: () => wq,
        inQuad: () => lq,
        inQuart: () => gq,
        inQuint: () => mq,
        inSine: () => Tq,
        outBack: () => Pq,
        outBounce: () => Lq,
        outCirc: () => Cq,
        outCubic: () => hq,
        outElastic: () => Dq,
        outExpo: () => xq,
        outQuad: () => fq,
        outQuart: () => yq,
        outQuint: () => _q,
        outSine: () => Iq,
        swingFrom: () => Vq,
        swingFromTo: () => Gq,
        swingTo: () => Uq
    });

    function lq(e) {
        return Math.pow(e, 2)
    }

    function fq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function dq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function pq(e) {
        return Math.pow(e, 3)
    }

    function hq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function vq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function gq(e) {
        return Math.pow(e, 4)
    }

    function yq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function mq(e) {
        return Math.pow(e, 5)
    }

    function _q(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function bq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Tq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Iq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function wq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Oq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function xq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Aq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Sq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Cq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Rq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function Lq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Nq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Pq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function qq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Mq(e) {
        let t = pt, r = 0, n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Dq(e) {
        let t = pt, r = 0, n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Fq(e) {
        let t = pt, r = 0, n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Gq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Vq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Uq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Xq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }

    var Xr, pt, aq, sq, uq, cq, Ia = de(() => {
        "use strict";
        Xr = oe(Ta()), pt = 1.70158, aq = (0, Xr.default)(.25, .1, .25, 1), sq = (0, Xr.default)(.42, 0, 1, 1), uq = (0, Xr.default)(0, 0, .58, 1), cq = (0, Xr.default)(.42, 0, .58, 1)
    });
    var lg = {};
    Pe(lg, {applyEasing: () => Hq, createBezierEasing: () => Wq, optimizeFloat: () => Hr});

    function Hr(e, t = 5, r = 10) {
        let n = Math.pow(r, t), i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function Wq(e) {
        return (0, cg.default)(...e)
    }

    function Hq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Hr(r ? t > 0 ? r(t) : t : t > 0 && e && Wr[e] ? Wr[e](t) : t)
    }

    var cg, wa = de(() => {
        "use strict";
        Ia();
        cg = oe(Ta())
    });
    var pg = {};
    Pe(pg, {createElementState: () => dg, ixElements: () => iM, mergeActionState: () => Oa});

    function dg(e, t, r, n, i) {
        let o = r === Bq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, nr.mergeIn)(e, [n], {id: n, ref: t, refId: o, refType: r})
    }

    function Oa(e, t, r, n, i) {
        let o = aM(i);
        return (0, nr.mergeIn)(e, [t, nM, r], n, o)
    }

    function aM(e) {
        let {config: t} = e;
        return oM.reduce((r, n) => {
            let i = n[0], o = n[1], s = t[i], a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }

    var nr, iB, Bq, oB, jq, zq, Kq, Yq, $q, Qq, Zq, Jq, eM, tM, rM, fg, nM, iM, oM, hg = de(() => {
        "use strict";
        nr = oe(Kt());
        qe();
        ({HTML_ELEMENT: iB, PLAIN_OBJECT: Bq, ABSTRACT_NODE: oB, CONFIG_X_VALUE: jq, CONFIG_Y_VALUE: zq, CONFIG_Z_VALUE: Kq, CONFIG_VALUE: Yq, CONFIG_X_UNIT: $q, CONFIG_Y_UNIT: Qq, CONFIG_Z_UNIT: Zq, CONFIG_UNIT: Jq} = Oe), {
            IX2_SESSION_STOPPED: eM,
            IX2_INSTANCE_ADDED: tM,
            IX2_ELEMENT_STATE_CHANGED: rM
        } = me, fg = {}, nM = "refState", iM = (e = fg, t = {}) => {
            switch (t.type) {
                case eM:
                    return fg;
                case tM: {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: s} = t.payload, {actionTypeId: a} = o, u = e;
                    return (0, nr.getIn)(u, [r, n]) !== n && (u = dg(u, n, s, r, o)), Oa(u, r, a, i, o)
                }
                case rM: {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Oa(e, r, n, i, o)
                }
                default:
                    return e
            }
        };
        oM = [[jq, $q], [zq, Qq], [Kq, Zq], [Yq, Jq]]
    });
    var vg = c(Ie => {
        "use strict";
        Object.defineProperty(Ie, "__esModule", {value: !0});
        Ie.renderPlugin = Ie.getPluginOrigin = Ie.getPluginDuration = Ie.getPluginDestination = Ie.getPluginConfig = Ie.createPluginInstance = Ie.clearPlugin = void 0;
        var sM = e => e.value;
        Ie.getPluginConfig = sM;
        var uM = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Ie.getPluginDuration = uM;
        var cM = e => e || {value: 0};
        Ie.getPluginOrigin = cM;
        var lM = e => ({value: e.value});
        Ie.getPluginDestination = lM;
        var fM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Ie.createPluginInstance = fM;
        var dM = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Ie.renderPlugin = dM;
        var pM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Ie.clearPlugin = pM
    });
    var yg = c(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {value: !0});
        we.renderPlugin = we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        var hM = e => document.querySelector(`[data-w-id="${e}"]`), vM = () => window.Webflow.require("spline"), gM = (e, t) => e.filter(r => !t.includes(r)), yM = (e, t) => e.value[t];
        we.getPluginConfig = yM;
        var EM = () => null;
        we.getPluginDuration = EM;
        var gg = Object.freeze({positionX: 0, positionY: 0, positionZ: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scaleX: 1, scaleY: 1, scaleZ: 1}), mM = (e, t) => {
            let r = t.config.value, n = Object.keys(r);
            if (e) {
                let o = Object.keys(e), s = gM(n, o);
                return s.length ? s.reduce((u, f) => (u[f] = gg[f], u), e) : e
            }
            return n.reduce((o, s) => (o[s] = gg[s], o), {})
        };
        we.getPluginOrigin = mM;
        var _M = e => e.value;
        we.getPluginDestination = _M;
        var bM = (e, t) => {
            var r, n;
            let i = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return i ? hM(i) : null
        };
        we.createPluginInstance = bM;
        var TM = (e, t, r) => {
            let n = vM(), i = n.getInstance(e), o = r.config.target.objectId, s = a => {
                if (!a) throw new Error("Invalid spline app passed to renderSpline");
                let u = o && a.findObjectById(o);
                if (!u) return;
                let {PLUGIN_SPLINE: f} = t;
                f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
            };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        we.renderPlugin = TM;
        var IM = () => null;
        we.clearPlugin = IM
    });
    var mg = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {value: !0});
        _e.getPluginOrigin = _e.getPluginDuration = _e.getPluginDestination = _e.getPluginConfig = _e.createPluginInstance = _e.clearPlugin = void 0;
        _e.normalizeColor = Eg;
        _e.renderPlugin = void 0;

        function Eg(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase();
            if (o.startsWith("#")) {
                let s = o.substring(1);
                s.length === 3 ? (t = parseInt(s[0] + s[0], 16), r = parseInt(s[1] + s[1], 16), n = parseInt(s[2] + s[2], 16)) : s.length === 6 && (t = parseInt(s.substring(0, 2), 16), r = parseInt(s.substring(2, 4), 16), n = parseInt(s.substring(4, 6), 16))
            } else if (o.startsWith("rgba")) {
                let s = o.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10), i = parseFloat(s[3])
            } else if (o.startsWith("rgb")) {
                let s = o.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(s[0], 10), r = parseInt(s[1], 10), n = parseInt(s[2], 10)
            } else if (o.startsWith("hsla")) {
                let s = o.match(/hsla\(([^)]+)\)/)[1].split(","), a = parseFloat(s[0]), u = parseFloat(s[1].replace("%", "")) / 100, f = parseFloat(s[2].replace("%", "")) / 100;
                i = parseFloat(s[3]);
                let h = (1 - Math.abs(2 * f - 1)) * u, p = h * (1 - Math.abs(a / 60 % 2 - 1)), y = f - h / 2, T, _, I;
                a >= 0 && a < 60 ? (T = h, _ = p, I = 0) : a >= 60 && a < 120 ? (T = p, _ = h, I = 0) : a >= 120 && a < 180 ? (T = 0, _ = h, I = p) : a >= 180 && a < 240 ? (T = 0, _ = p, I = h) : a >= 240 && a < 300 ? (T = p, _ = 0, I = h) : (T = h, _ = 0, I = p), t = Math.round((T + y) * 255), r = Math.round((_ + y) * 255), n = Math.round((I + y) * 255)
            } else if (o.startsWith("hsl")) {
                let s = o.match(/hsl\(([^)]+)\)/)[1].split(","), a = parseFloat(s[0]), u = parseFloat(s[1].replace("%", "")) / 100, f = parseFloat(s[2].replace("%", "")) / 100, h = (1 - Math.abs(2 * f - 1)) * u, p = h * (1 - Math.abs(a / 60 % 2 - 1)), y = f - h / 2, T, _, I;
                a >= 0 && a < 60 ? (T = h, _ = p, I = 0) : a >= 60 && a < 120 ? (T = p, _ = h, I = 0) : a >= 120 && a < 180 ? (T = 0, _ = h, I = p) : a >= 180 && a < 240 ? (T = 0, _ = p, I = h) : a >= 240 && a < 300 ? (T = p, _ = 0, I = h) : (T = h, _ = 0, I = p), t = Math.round((T + y) * 255), r = Math.round((_ + y) * 255), n = Math.round((I + y) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`, {red: t, green: r, blue: n, alpha: i}
        }

        var wM = (e, t) => e.value[t];
        _e.getPluginConfig = wM;
        var OM = () => null;
        _e.getPluginDuration = OM;
        var xM = (e, t) => {
            if (e) return e;
            let r = t.config.value, n = t.config.target.objectId, i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {size: parseInt(i, 10)};
            if (r.red != null && r.green != null && r.blue != null) return Eg(i)
        };
        _e.getPluginOrigin = xM;
        var AM = e => e.value;
        _e.getPluginDestination = AM;
        var SM = () => null;
        _e.createPluginInstance = SM;
        var CM = (e, t, r) => {
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: s, red: a, green: u, blue: f, alpha: h} = o, p;
            s != null && (p = s + i), a != null && f != null && u != null && h != null && (p = `rgba(${a}, ${u}, ${f}, ${h})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        _e.renderPlugin = CM;
        var RM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        _e.clearPlugin = RM
    });
    var _g = c(Zn => {
        "use strict";
        var Aa = fn().default;
        Object.defineProperty(Zn, "__esModule", {value: !0});
        Zn.pluginMethodMap = void 0;
        var xa = (qe(), et(xf)), LM = Aa(vg()), NM = Aa(yg()), PM = Aa(mg()), cB = Zn.pluginMethodMap = new Map([[xa.ActionTypeConsts.PLUGIN_LOTTIE, {...LM}], [xa.ActionTypeConsts.PLUGIN_SPLINE, {...NM}], [xa.ActionTypeConsts.PLUGIN_VARIABLE, {...PM}]])
    });
    var bg = {};
    Pe(bg, {clearPlugin: () => Pa, createPluginInstance: () => MM, getPluginConfig: () => Ca, getPluginDestination: () => La, getPluginDuration: () => qM, getPluginOrigin: () => Ra, isPluginType: () => qt, renderPlugin: () => Na});

    function qt(e) {
        return Sa.pluginMethodMap.has(e)
    }

    var Sa, Mt, Ca, Ra, qM, La, MM, Na, Pa, qa = de(() => {
        "use strict";
        Yn();
        Sa = oe(_g());
        Mt = e => t => {
            if (!$e) return () => null;
            let r = Sa.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Ca = Mt("getPluginConfig"), Ra = Mt("getPluginOrigin"), qM = Mt("getPluginDuration"), La = Mt("getPluginDestination"), MM = Mt("createPluginInstance"), Na = Mt("renderPlugin"), Pa = Mt("clearPlugin")
    });
    var Ig = c((dB, Tg) => {
        function DM(e, t) {
            return e == null || e !== e ? t : e
        }

        Tg.exports = DM
    });
    var Og = c((pB, wg) => {
        function FM(e, t, r, n) {
            var i = -1, o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }

        wg.exports = FM
    });
    var Ag = c((hB, xg) => {
        function GM(e) {
            return function (t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }

        xg.exports = GM
    });
    var Cg = c((vB, Sg) => {
        var VM = Ag(), UM = VM();
        Sg.exports = UM
    });
    var Ma = c((gB, Rg) => {
        var kM = Cg(), XM = Gr();

        function WM(e, t) {
            return e && kM(e, t, XM)
        }

        Rg.exports = WM
    });
    var Ng = c((yB, Lg) => {
        var HM = Nt();

        function BM(e, t) {
            return function (r, n) {
                if (r == null) return r;
                if (!HM(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r); (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;) ;
                return r
            }
        }

        Lg.exports = BM
    });
    var Da = c((EB, Pg) => {
        var jM = Ma(), zM = Ng(), KM = zM(jM);
        Pg.exports = KM
    });
    var Mg = c((mB, qg) => {
        function YM(e, t, r, n, i) {
            return i(e, function (o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }

        qg.exports = YM
    });
    var Fg = c((_B, Dg) => {
        var $M = Og(), QM = Da(), ZM = It(), JM = Mg(), e1 = Te();

        function t1(e, t, r) {
            var n = e1(e) ? $M : JM, i = arguments.length < 3;
            return n(e, ZM(t, 4), r, i, QM)
        }

        Dg.exports = t1
    });
    var Vg = c((bB, Gg) => {
        var r1 = Ea(), n1 = It(), i1 = ma(), o1 = Math.max, a1 = Math.min;

        function s1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = i1(r), i = r < 0 ? o1(n + i, 0) : a1(i, n - 1)), r1(e, n1(t, 3), i, !0)
        }

        Gg.exports = s1
    });
    var kg = c((TB, Ug) => {
        var u1 = ya(), c1 = Vg(), l1 = u1(c1);
        Ug.exports = l1
    });

    function Xg(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function d1(e, t) {
        if (Xg(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e), n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++) if (!f1.call(t, r[i]) || !Xg(e[r[i]], t[r[i]])) return !1;
        return !0
    }

    var f1, Fa, Wg = de(() => {
        "use strict";
        f1 = Object.prototype.hasOwnProperty;
        Fa = d1
    });
    var ay = {};
    Pe(ay, {
        cleanupHTMLElement: () => cD,
        clearAllStyles: () => uD,
        clearObjectCache: () => C1,
        getActionListProgress: () => fD,
        getAffectedElements: () => Xa,
        getComputedStyle: () => F1,
        getDestinationValues: () => H1,
        getElementId: () => P1,
        getInstanceId: () => L1,
        getInstanceOrigin: () => U1,
        getItemConfigByKey: () => W1,
        getMaxDurationItemIndex: () => oy,
        getNamespacedParameterId: () => hD,
        getRenderType: () => ry,
        getStyleProp: () => B1,
        mediaQueriesEqual: () => gD,
        observeStore: () => D1,
        reduceListToGroup: () => dD,
        reifyState: () => q1,
        renderHTMLElement: () => j1,
        shallowEqual: () => Fa,
        shouldAllowMediaQuery: () => vD,
        shouldNamespaceEventParameter: () => pD,
        stringifyTarget: () => yD
    });

    function C1() {
        Jn.clear()
    }

    function L1() {
        return "i" + R1++
    }

    function P1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + N1++
    }

    function q1({events: e, actionLists: t, site: r} = {}) {
        let n = (0, ni.default)(e, (s, a) => {
            let {eventTypeId: u} = a;
            return s[u] || (s[u] = {}), s[u][a.id] = a, s
        }, {}), i = r && r.mediaQueries, o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {ixData: {events: e, actionLists: t, eventTypeMap: n, mediaQueries: i, mediaQueryKeys: o}}
    }

    function D1({store: e, select: t, onChange: r, comparator: n = M1}) {
        let {getState: i, subscribe: o} = e, s = o(u), a = t(i());

        function u() {
            let f = t(i());
            if (f == null) {
                s();
                return
            }
            n(f, a) || (a = f, r(a, e))
        }

        return s
    }

    function jg(e) {
        let t = typeof e;
        if (t === "string") return {id: e};
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: s, useEventTarget: a} = e;
            return {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: s, useEventTarget: a}
        }
        return {}
    }

    function Xa({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((R, g) => R.concat(Xa({config: {target: g}, event: t, eventTarget: r, elementRoot: n, elementApi: i})), []);
        let {getValidDocument: s, getQuerySelector: a, queryDocument: u, getChildElements: f, getSiblingElements: h, matchSelector: p, elementContains: y, isSiblingNode: T} = i, {target: _} = e;
        if (!_) return [];
        let {id: I, objectId: M, selector: S, selectorGuids: N, appliesTo: A, useEventTarget: D} = jg(_);
        if (M) return [Jn.has(M) ? Jn.get(M) : Jn.set(M, {}).get(M)];
        if (A === Xo.PAGE) {
            let R = s(I);
            return R ? [R] : []
        }
        let P = (t?.action?.config?.affectedElements ?? {})[I || S] || {}, H = !!(P.id || P.selector), B, j, Q, U = t && a(jg(t.target));
        if (H ? (B = P.limitAffectedElements, j = U, Q = a(P)) : j = Q = a({id: I, selector: S, selectorGuids: N}), t && D) {
            let R = r && (Q || D === !0) ? [r] : u(U);
            if (Q) {
                if (D === x1) return u(Q).filter(g => R.some(L => y(g, L)));
                if (D === Hg) return u(Q).filter(g => R.some(L => y(L, g)));
                if (D === Bg) return u(Q).filter(g => R.some(L => T(L, g)))
            }
            return R
        }
        return j == null || Q == null ? [] : $e && n ? u(Q).filter(R => n.contains(R)) : B === Hg ? u(j, Q) : B === O1 ? f(u(j)).filter(p(Q)) : B === Bg ? h(u(j)).filter(p(Q)) : u(Q)
    }

    function F1({element: e, actionItem: t}) {
        if (!$e) return {};
        let {actionTypeId: r} = t;
        switch (r) {
            case ur:
            case cr:
            case lr:
            case fr:
            case oi:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function U1(e, t = {}, r = {}, n, i) {
        let {getStyle: o} = i, {actionTypeId: s} = n;
        if (qt(s)) return Ra(s)(t[s], n);
        switch (n.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr:
                return t[n.actionTypeId] || Wa[n.actionTypeId];
            case Yr:
                return G1(t[n.actionTypeId], n.config.filters);
            case $r:
                return V1(t[n.actionTypeId], n.config.fontVariations);
            case Jg:
                return {value: (0, ht.default)(parseFloat(o(e, ti)), 1)};
            case ur: {
                let a = o(e, at), u = o(e, st), f, h;
                return n.config.widthUnit === Ot ? f = zg.test(a) ? parseFloat(a) : parseFloat(r.width) : f = (0, ht.default)(parseFloat(a), parseFloat(r.width)), n.config.heightUnit === Ot ? h = zg.test(u) ? parseFloat(u) : parseFloat(r.height) : h = (0, ht.default)(parseFloat(u), parseFloat(r.height)), {
                    widthValue: f,
                    heightValue: h
                }
            }
            case cr:
            case lr:
            case fr:
                return oD({element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: o});
            case oi:
                return {value: (0, ht.default)(o(e, ri), r.display)};
            case S1:
                return t[n.actionTypeId] || {value: 0};
            default:
                return
        }
    }

    function H1({element: e, actionItem: t, elementApi: r}) {
        if (qt(t.actionTypeId)) return La(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr: {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {xValue: n, yValue: i, zValue: o}
            }
            case ur: {
                let {getStyle: n, setStyle: i, getProperty: o} = r, {widthUnit: s, heightUnit: a} = t.config, {widthValue: u, heightValue: f} = t.config;
                if (!$e) return {widthValue: u, heightValue: f};
                if (s === Ot) {
                    let h = n(e, at);
                    i(e, at, ""), u = o(e, "offsetWidth"), i(e, at, h)
                }
                if (a === Ot) {
                    let h = n(e, st);
                    i(e, st, ""), f = o(e, "offsetHeight"), i(e, st, h)
                }
                return {widthValue: u, heightValue: f}
            }
            case cr:
            case lr:
            case fr: {
                let {rValue: n, gValue: i, bValue: o, aValue: s} = t.config;
                return {rValue: n, gValue: i, bValue: o, aValue: s}
            }
            case Yr:
                return t.config.filters.reduce(k1, {});
            case $r:
                return t.config.fontVariations.reduce(X1, {});
            default: {
                let {value: n} = t.config;
                return {value: n}
            }
        }
    }

    function ry(e) {
        if (/^TRANSFORM_/.test(e)) return Qg;
        if (/^STYLE_/.test(e)) return Ua;
        if (/^GENERAL_/.test(e)) return Va;
        if (/^PLUGIN_/.test(e)) return Zg
    }

    function B1(e, t) {
        return e === Ua ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function j1(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case Qg:
                return Q1(e, t, r, i, s);
            case Ua:
                return aD(e, t, r, i, o, s);
            case Va:
                return sD(e, i, s);
            case Zg: {
                let {actionTypeId: f} = i;
                if (qt(f)) return Na(f)(u, t, i)
            }
        }
    }

    function Q1(e, t, r, n, i) {
        let o = $1.map(a => {
            let u = Wa[a], {xValue: f = u.xValue, yValue: h = u.yValue, zValue: p = u.zValue, xUnit: y = "", yUnit: T = "", zUnit: _ = ""} = t[a] || {};
            switch (a) {
                case or:
                    return `${v1}(${f}${y}, ${h}${T}, ${p}${_})`;
                case ar:
                    return `${g1}(${f}${y}, ${h}${T}, ${p}${_})`;
                case sr:
                    return `${y1}(${f}${y}) ${E1}(${h}${T}) ${m1}(${p}${_})`;
                case Kr:
                    return `${_1}(${f}${y}, ${h}${T})`;
                default:
                    return ""
            }
        }).join(" "), {setStyle: s} = i;
        Dt(e, wt, i), s(e, wt, o), eD(n, r) && s(e, Kn, b1)
    }

    function Z1(e, t, r, n) {
        let i = (0, ni.default)(t, (s, a, u) => `${s} ${u}(${a}${Y1(u, r)})`, ""), {setStyle: o} = n;
        Dt(e, Br, n), o(e, Br, i)
    }

    function J1(e, t, r, n) {
        let i = (0, ni.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "), {setStyle: o} = n;
        Dt(e, jr, n), o(e, jr, i)
    }

    function eD({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === or && n !== void 0 || e === ar && n !== void 0 || e === sr && (t !== void 0 || r !== void 0)
    }

    function iD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function oD({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = ka[t], o = n(e, i), s = rD.test(o) ? o : r[i], a = iD(nD, s).split(zr);
        return {rValue: (0, ht.default)(parseInt(a[0], 10), 255), gValue: (0, ht.default)(parseInt(a[1], 10), 255), bValue: (0, ht.default)(parseInt(a[2], 10), 255), aValue: (0, ht.default)(parseFloat(a[3]), 1)}
    }

    function aD(e, t, r, n, i, o) {
        let {setStyle: s} = o;
        switch (n.actionTypeId) {
            case ur: {
                let {widthUnit: a = "", heightUnit: u = ""} = n.config, {widthValue: f, heightValue: h} = r;
                f !== void 0 && (a === Ot && (a = "px"), Dt(e, at, o), s(e, at, f + a)), h !== void 0 && (u === Ot && (u = "px"), Dt(e, st, o), s(e, st, h + u));
                break
            }
            case Yr: {
                Z1(e, r, n.config, o);
                break
            }
            case $r: {
                J1(e, r, n.config, o);
                break
            }
            case cr:
            case lr:
            case fr: {
                let a = ka[n.actionTypeId], u = Math.round(r.rValue), f = Math.round(r.gValue), h = Math.round(r.bValue), p = r.aValue;
                Dt(e, a, o), s(e, a, p >= 1 ? `rgb(${u},${f},${h})` : `rgba(${u},${f},${h},${p})`);
                break
            }
            default: {
                let {unit: a = ""} = n.config;
                Dt(e, i, o), s(e, i, r.value + a);
                break
            }
        }
    }

    function sD(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
            case oi: {
                let {value: i} = t.config;
                i === T1 && $e ? n(e, ri, ba) : n(e, ri, i);
                return
            }
        }
    }

    function Dt(e, t, r) {
        if (!$e) return;
        let n = ty[t];
        if (!n) return;
        let {getStyle: i, setStyle: o} = r, s = i(e, ir);
        if (!s) {
            o(e, ir, n);
            return
        }
        let a = s.split(zr).map(ey);
        a.indexOf(n) === -1 && o(e, ir, a.concat(n).join(zr))
    }

    function ny(e, t, r) {
        if (!$e) return;
        let n = ty[t];
        if (!n) return;
        let {getStyle: i, setStyle: o} = r, s = i(e, ir);
        !s || s.indexOf(n) === -1 || o(e, ir, s.split(zr).map(ey).filter(a => a !== n).join(zr))
    }

    function uD({store: e, elementApi: t}) {
        let {ixData: r} = e.getState(), {events: n = {}, actionLists: i = {}} = r;
        Object.keys(n).forEach(o => {
            let s = n[o], {config: a} = s.action, {actionListId: u} = a, f = i[u];
            f && Kg({actionList: f, event: s, elementApi: t})
        }), Object.keys(i).forEach(o => {
            Kg({actionList: i[o], elementApi: t})
        })
    }

    function Kg({actionList: e = {}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o => {
            Yg({actionGroup: o, event: t, elementApi: r})
        }), i && i.forEach(o => {
            let {continuousActionGroups: s} = o;
            s.forEach(a => {
                Yg({actionGroup: a, event: t, elementApi: r})
            })
        })
    }

    function Yg({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i => {
            let {actionTypeId: o, config: s} = i, a;
            qt(o) ? a = u => Pa(o)(u, i) : a = iy({effect: lD, actionTypeId: o, elementApi: r}), Xa({config: s, event: t, elementApi: r}).forEach(a)
        })
    }

    function cD(e, t, r) {
        let {setStyle: n, getStyle: i} = r, {actionTypeId: o} = t;
        if (o === ur) {
            let {config: s} = t;
            s.widthUnit === Ot && n(e, at, ""), s.heightUnit === Ot && n(e, st, "")
        }
        i(e, ir) && iy({effect: ny, actionTypeId: o, elementApi: r})(e)
    }

    function lD(e, t, r) {
        let {setStyle: n} = r;
        ny(e, t, r), n(e, t, ""), t === wt && n(e, Kn, "")
    }

    function oy(e) {
        let t = 0, r = 0;
        return e.forEach((n, i) => {
            let {config: o} = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function fD(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e, {actionItem: i, verboseTimeElapsed: o = 0} = t, s = 0, a = 0;
        return r.forEach((u, f) => {
            if (n && f === 0) return;
            let {actionItems: h} = u, p = h[oy(h)], {config: y, actionTypeId: T} = p;
            i.id === p.id && (a = s + o);
            let _ = ry(T) === Va ? 0 : y.duration;
            s += y.delay + _
        }), s > 0 ? Hr(a / s) : 0
    }

    function dD({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e, o = [], s = a => (o.push((0, ii.mergeIn)(a, ["config"], {delay: 0, duration: 0})), a.id === t);
        return n && n.some(({actionItems: a}) => a.some(s)), i && i.some(a => {
            let {continuousActionGroups: u} = a;
            return u.some(({actionItems: f}) => f.some(s))
        }), (0, ii.setIn)(r, ["actionLists"], {[e.id]: {id: e.id, actionItemGroups: [{actionItems: o}]}})
    }

    function pD(e, {basedOn: t}) {
        return e === Ye.SCROLLING_IN_VIEW && (t === it.ELEMENT || t == null) || e === Ye.MOUSE_MOVE && t === it.ELEMENT
    }

    function hD(e, t) {
        return e + A1 + t
    }

    function vD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function gD(e, t) {
        return Fa(e && e.sort(), t && t.sort())
    }

    function yD(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ga + e.objectId;
        if (e.objectId) return e.objectId;
        let {id: t = "", selector: r = "", useEventTarget: n = ""} = e;
        return t + Ga + r + Ga + n
    }

    var ht, ni, ei, ii, p1, h1, v1, g1, y1, E1, m1, _1, b1, T1, ti, Br, jr, at, st, $g, I1, w1, Hg, O1, Bg, x1, ri, ir, Ot, zr, A1, Ga, Qg, Va, Ua, Zg, or, ar, sr, Kr, Jg, Yr, $r, ur, cr, lr, fr, oi, S1, ey, ka, ty, Jn, R1, N1, M1, zg, G1, V1, k1, X1, W1, Wa, z1, K1, Y1, $1, tD, rD, nD, iy,
        sy = de(() => {
            "use strict";
            ht = oe(Ig()), ni = oe(Fg()), ei = oe(kg()), ii = oe(Kt());
            qe();
            Wg();
            wa();
            qa();
            Yn();
            ({
                BACKGROUND: p1,
                TRANSFORM: h1,
                TRANSLATE_3D: v1,
                SCALE_3D: g1,
                ROTATE_X: y1,
                ROTATE_Y: E1,
                ROTATE_Z: m1,
                SKEW: _1,
                PRESERVE_3D: b1,
                FLEX: T1,
                OPACITY: ti,
                FILTER: Br,
                FONT_VARIATION_SETTINGS: jr,
                WIDTH: at,
                HEIGHT: st,
                BACKGROUND_COLOR: $g,
                BORDER_COLOR: I1,
                COLOR: w1,
                CHILDREN: Hg,
                IMMEDIATE_CHILDREN: O1,
                SIBLINGS: Bg,
                PARENT: x1,
                DISPLAY: ri,
                WILL_CHANGE: ir,
                AUTO: Ot,
                COMMA_DELIMITER: zr,
                COLON_DELIMITER: A1,
                BAR_DELIMITER: Ga,
                RENDER_TRANSFORM: Qg,
                RENDER_GENERAL: Va,
                RENDER_STYLE: Ua,
                RENDER_PLUGIN: Zg
            } = Oe), {
                TRANSFORM_MOVE: or,
                TRANSFORM_SCALE: ar,
                TRANSFORM_ROTATE: sr,
                TRANSFORM_SKEW: Kr,
                STYLE_OPACITY: Jg,
                STYLE_FILTER: Yr,
                STYLE_FONT_VARIATION: $r,
                STYLE_SIZE: ur,
                STYLE_BACKGROUND_COLOR: cr,
                STYLE_BORDER: lr,
                STYLE_TEXT_COLOR: fr,
                GENERAL_DISPLAY: oi,
                OBJECT_VALUE: S1
            } = ke, ey = e => e.trim(), ka = Object.freeze({[cr]: $g, [lr]: I1, [fr]: w1}), ty = Object.freeze({[wt]: h1, [$g]: p1, [ti]: ti, [Br]: Br, [at]: at, [st]: st, [jr]: jr}), Jn = new Map;
            R1 = 1;
            N1 = 1;
            M1 = (e, t) => e === t;
            zg = /px/, G1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = z1[n.type]), r), e || {}), V1 = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = K1[n.type] || n.defaultValue || 0), r), e || {});
            k1 = (e, t) => (t && (e[t.type] = t.value || 0), e), X1 = (e, t) => (t && (e[t.type] = t.value || 0), e), W1 = (e, t, r) => {
                if (qt(e)) return Ca(e)(r, t);
                switch (e) {
                    case Yr: {
                        let n = (0, ei.default)(r.filters, ({type: i}) => i === t);
                        return n ? n.value : 0
                    }
                    case $r: {
                        let n = (0, ei.default)(r.fontVariations, ({type: i}) => i === t);
                        return n ? n.value : 0
                    }
                    default:
                        return r[t]
                }
            };
            Wa = {[or]: Object.freeze({xValue: 0, yValue: 0, zValue: 0}), [ar]: Object.freeze({xValue: 1, yValue: 1, zValue: 1}), [sr]: Object.freeze({xValue: 0, yValue: 0, zValue: 0}), [Kr]: Object.freeze({xValue: 0, yValue: 0})}, z1 = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100
            }), K1 = Object.freeze({wght: 0, opsz: 0, wdth: 0, slnt: 0}), Y1 = (e, t) => {
                let r = (0, ei.default)(t.filters, ({type: n}) => n === e);
                if (r && r.unit) return r.unit;
                switch (e) {
                    case"blur":
                        return "px";
                    case"hue-rotate":
                        return "deg";
                    default:
                        return "%"
                }
            }, $1 = Object.keys(Wa);
            tD = "\\(([^)]+)\\)", rD = /^rgb/, nD = RegExp(`rgba?${tD}`);
            iy = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
                switch (t) {
                    case or:
                    case ar:
                    case sr:
                    case Kr:
                        e(n, wt, r);
                        break;
                    case Yr:
                        e(n, Br, r);
                        break;
                    case $r:
                        e(n, jr, r);
                        break;
                    case Jg:
                        e(n, ti, r);
                        break;
                    case ur:
                        e(n, at, r), e(n, st, r);
                        break;
                    case cr:
                    case lr:
                    case fr:
                        e(n, ka[t], r);
                        break;
                    case oi:
                        e(n, ri, r);
                        break
                }
            }
        });
    var Ft = c(Re => {
        "use strict";
        var dr = fn().default;
        Object.defineProperty(Re, "__esModule", {value: !0});
        Re.IX2VanillaUtils = Re.IX2VanillaPlugins = Re.IX2ElementsReducer = Re.IX2Easings = Re.IX2EasingUtils = Re.IX2BrowserSupport = void 0;
        var ED = dr((Yn(), et(ng)));
        Re.IX2BrowserSupport = ED;
        var mD = dr((Ia(), et(Wr)));
        Re.IX2Easings = mD;
        var _D = dr((wa(), et(lg)));
        Re.IX2EasingUtils = _D;
        var bD = dr((hg(), et(pg)));
        Re.IX2ElementsReducer = bD;
        var TD = dr((qa(), et(bg)));
        Re.IX2VanillaPlugins = TD;
        var ID = dr((sy(), et(ay)));
        Re.IX2VanillaUtils = ID
    });
    var si, vt, wD, OD, xD, AD, SD, CD, ai, uy, RD, LD, Ha, ND, PD, qD, MD, cy, ly = de(() => {
        "use strict";
        qe();
        si = oe(Ft()), vt = oe(Kt()), {IX2_RAW_DATA_IMPORTED: wD, IX2_SESSION_STOPPED: OD, IX2_INSTANCE_ADDED: xD, IX2_INSTANCE_STARTED: AD, IX2_INSTANCE_REMOVED: SD, IX2_ANIMATION_FRAME_CHANGED: CD} = me, {
            optimizeFloat: ai,
            applyEasing: uy,
            createBezierEasing: RD
        } = si.IX2EasingUtils, {RENDER_GENERAL: LD} = Oe, {getItemConfigByKey: Ha, getRenderType: ND, getStyleProp: PD} = si.IX2VanillaUtils, qD = (e, t) => {
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: s, restingValue: a, actionTypeId: u, customEasingFn: f, skipMotion: h, skipToValue: p} = e, {parameters: y} = t.payload, T = Math.max(1 - s, .01), _ = y[n];
            _ == null && (T = 1, _ = a);
            let I = Math.max(_, 0) || 0, M = ai(I - r), S = h ? p : ai(r + M * T), N = S * 100;
            if (S === r && e.current) return e;
            let A, D, q, P;
            for (let B = 0, {length: j} = i; B < j; B++) {
                let {keyframe: Q, actionItems: U} = i[B];
                if (B === 0 && (A = U[0]), N >= Q) {
                    A = U[0];
                    let R = i[B + 1], g = R && N !== Q;
                    D = g ? R.actionItems[0] : null, g && (q = Q / 100, P = (R.keyframe - Q) / 100)
                }
            }
            let H = {};
            if (A && !D) for (let B = 0, {length: j} = o; B < j; B++) {
                let Q = o[B];
                H[Q] = Ha(u, Q, A.config)
            } else if (A && D && q !== void 0 && P !== void 0) {
                let B = (S - q) / P, j = A.config.easing, Q = uy(j, B, f);
                for (let U = 0, {length: R} = o; U < R; U++) {
                    let g = o[U], L = Ha(u, g, A.config), Z = (Ha(u, g, D.config) - L) * Q + L;
                    H[g] = Z
                }
            }
            return (0, vt.merge)(e, {position: S, current: H})
        }, MD = (e, t) => {
            let {active: r, origin: n, start: i, immediate: o, renderType: s, verbose: a, actionItem: u, destination: f, destinationKeys: h, pluginDuration: p, instanceDelay: y, customEasingFn: T, skipMotion: _} = e, I = u.config.easing, {duration: M, delay: S} = u.config;
            p != null && (M = p), S = y ?? S, s === LD ? M = 0 : (o || _) && (M = S = 0);
            let {now: N} = t.payload;
            if (r && n) {
                let A = N - (i + S);
                if (a) {
                    let B = N - i, j = M + S, Q = ai(Math.min(Math.max(0, B / j), 1));
                    e = (0, vt.set)(e, "verboseTimeElapsed", j * Q)
                }
                if (A < 0) return e;
                let D = ai(Math.min(Math.max(0, A / M), 1)), q = uy(I, D, T), P = {}, H = null;
                return h.length && (H = h.reduce((B, j) => {
                    let Q = f[j], U = parseFloat(n[j]) || 0, g = (parseFloat(Q) - U) * q + U;
                    return B[j] = g, B
                }, {})), P.current = H, P.position = D, D === 1 && (P.active = !1, P.complete = !0), (0, vt.merge)(e, P)
            }
            return e
        }, cy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case wD:
                    return t.payload.ixInstances || Object.freeze({});
                case OD:
                    return Object.freeze({});
                case xD: {
                    let {
                        instanceId: r,
                        elementId: n,
                        actionItem: i,
                        eventId: o,
                        eventTarget: s,
                        eventStateKey: a,
                        actionListId: u,
                        groupIndex: f,
                        isCarrier: h,
                        origin: p,
                        destination: y,
                        immediate: T,
                        verbose: _,
                        continuous: I,
                        parameterId: M,
                        actionGroups: S,
                        smoothing: N,
                        restingValue: A,
                        pluginInstance: D,
                        pluginDuration: q,
                        instanceDelay: P,
                        skipMotion: H,
                        skipToValue: B
                    } = t.payload, {actionTypeId: j} = i, Q = ND(j), U = PD(Q, j), R = Object.keys(y).filter(L => y[L] != null && typeof y[L] != "string"), {easing: g} = i.config;
                    return (0, vt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: y,
                        destinationKeys: R,
                        immediate: T,
                        verbose: _,
                        current: null,
                        actionItem: i,
                        actionTypeId: j,
                        eventId: o,
                        eventTarget: s,
                        eventStateKey: a,
                        actionListId: u,
                        groupIndex: f,
                        renderType: Q,
                        isCarrier: h,
                        styleProp: U,
                        continuous: I,
                        parameterId: M,
                        actionGroups: S,
                        smoothing: N,
                        restingValue: A,
                        pluginInstance: D,
                        pluginDuration: q,
                        instanceDelay: P,
                        skipMotion: H,
                        skipToValue: B,
                        customEasingFn: Array.isArray(g) && g.length === 4 ? RD(g) : void 0
                    })
                }
                case AD: {
                    let {instanceId: r, time: n} = t.payload;
                    return (0, vt.mergeIn)(e, [r], {active: !0, complete: !1, start: n})
                }
                case SD: {
                    let {instanceId: r} = t.payload;
                    if (!e[r]) return e;
                    let n = {}, i = Object.keys(e), {length: o} = i;
                    for (let s = 0; s < o; s++) {
                        let a = i[s];
                        a !== r && (n[a] = e[a])
                    }
                    return n
                }
                case CD: {
                    let r = e, n = Object.keys(e), {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let s = n[o], a = e[s], u = a.continuous ? qD : MD;
                        r = (0, vt.set)(r, s, u(a, t))
                    }
                    return r
                }
                default:
                    return e
            }
        }
    });
    var DD, FD, GD, fy, dy = de(() => {
        "use strict";
        qe();
        ({IX2_RAW_DATA_IMPORTED: DD, IX2_SESSION_STOPPED: FD, IX2_PARAMETER_CHANGED: GD} = me), fy = (e = {}, t) => {
            switch (t.type) {
                case DD:
                    return t.payload.ixParameters || {};
                case FD:
                    return {};
                case GD: {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n, e
                }
                default:
                    return e
            }
        }
    });
    var vy = {};
    Pe(vy, {default: () => UD});
    var py, hy, VD, UD, gy = de(() => {
        "use strict";
        py = oe(ko());
        Sf();
        Yf();
        Zf();
        hy = oe(Ft());
        ly();
        dy();
        ({ixElements: VD} = hy.IX2ElementsReducer), UD = (0, py.combineReducers)({ixData: Af, ixRequest: Kf, ixSession: Qf, ixElements: VD, ixInstances: cy, ixParameters: fy})
    });
    var Ey = c((VB, yy) => {
        var kD = bt(), XD = Te(), WD = dt(), HD = "[object String]";

        function BD(e) {
            return typeof e == "string" || !XD(e) && WD(e) && kD(e) == HD
        }

        yy.exports = BD
    });
    var _y = c((UB, my) => {
        var jD = ga(), zD = jD("length");
        my.exports = zD
    });
    var Ty = c((kB, by) => {
        var KD = "\\ud800-\\udfff", YD = "\\u0300-\\u036f", $D = "\\ufe20-\\ufe2f", QD = "\\u20d0-\\u20ff", ZD = YD + $D + QD, JD = "\\ufe0e\\ufe0f", eF = "\\u200d", tF = RegExp("[" + eF + KD + ZD + JD + "]");

        function rF(e) {
            return tF.test(e)
        }

        by.exports = rF
    });
    var Ly = c((XB, Ry) => {
        var wy = "\\ud800-\\udfff", nF = "\\u0300-\\u036f", iF = "\\ufe20-\\ufe2f", oF = "\\u20d0-\\u20ff", aF = nF + iF + oF, sF = "\\ufe0e\\ufe0f", uF = "[" + wy + "]", Ba = "[" + aF + "]", ja = "\\ud83c[\\udffb-\\udfff]", cF = "(?:" + Ba + "|" + ja + ")", Oy = "[^" + wy + "]",
            xy = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ay = "[\\ud800-\\udbff][\\udc00-\\udfff]", lF = "\\u200d", Sy = cF + "?", Cy = "[" + sF + "]?", fF = "(?:" + lF + "(?:" + [Oy, xy, Ay].join("|") + ")" + Cy + Sy + ")*", dF = Cy + Sy + fF,
            pF = "(?:" + [Oy + Ba + "?", Ba, xy, Ay, uF].join("|") + ")", Iy = RegExp(ja + "(?=" + ja + ")|" + pF + dF, "g");

        function hF(e) {
            for (var t = Iy.lastIndex = 0; Iy.test(e);) ++t;
            return t
        }

        Ry.exports = hF
    });
    var Py = c((WB, Ny) => {
        var vF = _y(), gF = Ty(), yF = Ly();

        function EF(e) {
            return gF(e) ? yF(e) : vF(e)
        }

        Ny.exports = EF
    });
    var My = c((HB, qy) => {
        var mF = Vn(), _F = Un(), bF = Nt(), TF = Ey(), IF = Py(), wF = "[object Map]", OF = "[object Set]";

        function xF(e) {
            if (e == null) return 0;
            if (bF(e)) return TF(e) ? IF(e) : e.length;
            var t = _F(e);
            return t == wF || t == OF ? e.size : mF(e).length
        }

        qy.exports = xF
    });
    var Fy = c((BB, Dy) => {
        var AF = "Expected a function";

        function SF(e) {
            if (typeof e != "function") throw new TypeError(AF);
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }

        Dy.exports = SF
    });
    var za = c((jB, Gy) => {
        var CF = Tt(), RF = function () {
            try {
                var e = CF(Object, "defineProperty");
                return e({}, "", {}), e
            } catch {
            }
        }();
        Gy.exports = RF
    });
    var Ka = c((zB, Uy) => {
        var Vy = za();

        function LF(e, t, r) {
            t == "__proto__" && Vy ? Vy(e, t, {configurable: !0, enumerable: !0, value: r, writable: !0}) : e[t] = r
        }

        Uy.exports = LF
    });
    var Xy = c((KB, ky) => {
        var NF = Ka(), PF = Cn(), qF = Object.prototype, MF = qF.hasOwnProperty;

        function DF(e, t, r) {
            var n = e[t];
            (!(MF.call(e, t) && PF(n, r)) || r === void 0 && !(t in e)) && NF(e, t, r)
        }

        ky.exports = DF
    });
    var By = c((YB, Hy) => {
        var FF = Xy(), GF = Ur(), VF = Mn(), Wy = ot(), UF = rr();

        function kF(e, t, r, n) {
            if (!Wy(e)) return e;
            t = GF(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = UF(t[i]), f = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var h = a[u];
                    f = n ? n(h, u, a) : void 0, f === void 0 && (f = Wy(h) ? h : VF(t[i + 1]) ? [] : {})
                }
                FF(a, u, f), a = a[u]
            }
            return e
        }

        Hy.exports = kF
    });
    var zy = c(($B, jy) => {
        var XF = Wn(), WF = By(), HF = Ur();

        function BF(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n], a = XF(e, s);
                r(a, s) && WF(o, HF(s, e), a)
            }
            return o
        }

        jy.exports = BF
    });
    var Yy = c((QB, Ky) => {
        var jF = Pn(), zF = So(), KF = ta(), YF = ea(), $F = Object.getOwnPropertySymbols, QF = $F ? function (e) {
            for (var t = []; e;) jF(t, KF(e)), e = zF(e);
            return t
        } : YF;
        Ky.exports = QF
    });
    var Qy = c((ZB, $y) => {
        function ZF(e) {
            var t = [];
            if (e != null) for (var r in Object(e)) t.push(r);
            return t
        }

        $y.exports = ZF
    });
    var Jy = c((JB, Zy) => {
        var JF = ot(), e2 = Gn(), t2 = Qy(), r2 = Object.prototype, n2 = r2.hasOwnProperty;

        function i2(e) {
            if (!JF(e)) return t2(e);
            var t = e2(e), r = [];
            for (var n in e) n == "constructor" && (t || !n2.call(e, n)) || r.push(n);
            return r
        }

        Zy.exports = i2
    });
    var tE = c((ej, eE) => {
        var o2 = na(), a2 = Jy(), s2 = Nt();

        function u2(e) {
            return s2(e) ? o2(e, !0) : a2(e)
        }

        eE.exports = u2
    });
    var nE = c((tj, rE) => {
        var c2 = Jo(), l2 = Yy(), f2 = tE();

        function d2(e) {
            return c2(e, f2, l2)
        }

        rE.exports = d2
    });
    var oE = c((rj, iE) => {
        var p2 = va(), h2 = It(), v2 = zy(), g2 = nE();

        function y2(e, t) {
            if (e == null) return {};
            var r = p2(g2(e), function (n) {
                return [n]
            });
            return t = h2(t), v2(e, r, function (n, i) {
                return t(n, i[0])
            })
        }

        iE.exports = y2
    });
    var sE = c((nj, aE) => {
        var E2 = It(), m2 = Fy(), _2 = oE();

        function b2(e, t) {
            return _2(e, m2(E2(t)))
        }

        aE.exports = b2
    });
    var cE = c((ij, uE) => {
        var T2 = Vn(), I2 = Un(), w2 = qr(), O2 = Te(), x2 = Nt(), A2 = qn(), S2 = Gn(), C2 = Fn(), R2 = "[object Map]", L2 = "[object Set]", N2 = Object.prototype, P2 = N2.hasOwnProperty;

        function q2(e) {
            if (e == null) return !0;
            if (x2(e) && (O2(e) || typeof e == "string" || typeof e.splice == "function" || A2(e) || C2(e) || w2(e))) return !e.length;
            var t = I2(e);
            if (t == R2 || t == L2) return !e.size;
            if (S2(e)) return !T2(e).length;
            for (var r in e) if (P2.call(e, r)) return !1;
            return !0
        }

        uE.exports = q2
    });
    var fE = c((oj, lE) => {
        var M2 = Ka(), D2 = Ma(), F2 = It();

        function G2(e, t) {
            var r = {};
            return t = F2(t, 3), D2(e, function (n, i, o) {
                M2(r, i, t(n, i, o))
            }), r
        }

        lE.exports = G2
    });
    var pE = c((aj, dE) => {
        function V2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;) ;
            return e
        }

        dE.exports = V2
    });
    var vE = c((sj, hE) => {
        var U2 = Bn();

        function k2(e) {
            return typeof e == "function" ? e : U2
        }

        hE.exports = k2
    });
    var yE = c((uj, gE) => {
        var X2 = pE(), W2 = Da(), H2 = vE(), B2 = Te();

        function j2(e, t) {
            var r = B2(e) ? X2 : W2;
            return r(e, H2(t))
        }

        gE.exports = j2
    });
    var mE = c((cj, EE) => {
        var z2 = Ke(), K2 = function () {
            return z2.Date.now()
        };
        EE.exports = K2
    });
    var TE = c((lj, bE) => {
        var Y2 = ot(), Ya = mE(), _E = jn(), $2 = "Expected a function", Q2 = Math.max, Z2 = Math.min;

        function J2(e, t, r) {
            var n, i, o, s, a, u, f = 0, h = !1, p = !1, y = !0;
            if (typeof e != "function") throw new TypeError($2);
            t = _E(t) || 0, Y2(r) && (h = !!r.leading, p = "maxWait" in r, o = p ? Q2(_E(r.maxWait) || 0, t) : o, y = "trailing" in r ? !!r.trailing : y);

            function T(P) {
                var H = n, B = i;
                return n = i = void 0, f = P, s = e.apply(B, H), s
            }

            function _(P) {
                return f = P, a = setTimeout(S, t), h ? T(P) : s
            }

            function I(P) {
                var H = P - u, B = P - f, j = t - H;
                return p ? Z2(j, o - B) : j
            }

            function M(P) {
                var H = P - u, B = P - f;
                return u === void 0 || H >= t || H < 0 || p && B >= o
            }

            function S() {
                var P = Ya();
                if (M(P)) return N(P);
                a = setTimeout(S, I(P))
            }

            function N(P) {
                return a = void 0, y && n ? T(P) : (n = i = void 0, s)
            }

            function A() {
                a !== void 0 && clearTimeout(a), f = 0, n = u = i = a = void 0
            }

            function D() {
                return a === void 0 ? s : N(Ya())
            }

            function q() {
                var P = Ya(), H = M(P);
                if (n = arguments, i = this, u = P, H) {
                    if (a === void 0) return _(u);
                    if (p) return clearTimeout(a), a = setTimeout(S, t), T(u)
                }
                return a === void 0 && (a = setTimeout(S, t)), s
            }

            return q.cancel = A, q.flush = D, q
        }

        bE.exports = J2
    });
    var wE = c((fj, IE) => {
        var eG = TE(), tG = ot(), rG = "Expected a function";

        function nG(e, t, r) {
            var n = !0, i = !0;
            if (typeof e != "function") throw new TypeError(rG);
            return tG(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), eG(e, t, {leading: n, maxWait: t, trailing: i})
        }

        IE.exports = nG
    });
    var xE = {};
    Pe(xE, {
        actionListPlaybackChanged: () => hr,
        animationFrameChanged: () => ci,
        clearRequested: () => SG,
        elementStateChanged: () => ns,
        eventListenerAdded: () => ui,
        eventStateChanged: () => es,
        instanceAdded: () => ts,
        instanceRemoved: () => rs,
        instanceStarted: () => li,
        mediaQueriesDefined: () => os,
        parameterChanged: () => pr,
        playbackRequested: () => xG,
        previewRequested: () => OG,
        rawDataImported: () => $a,
        sessionInitialized: () => Qa,
        sessionStarted: () => Za,
        sessionStopped: () => Ja,
        stopRequested: () => AG,
        testFrameRendered: () => CG,
        viewportWidthChanged: () => is
    });
    var OE, iG, oG, aG, sG, uG, cG, lG, fG, dG, pG, hG, vG, gG, yG, EG, mG, _G, bG, TG, IG, wG, $a, Qa, Za, Ja, OG, xG, AG, SG, ui, CG, es, ci, pr, ts, li, rs, ns, hr, is, os, fi = de(() => {
        "use strict";
        qe();
        OE = oe(Ft()), {
            IX2_RAW_DATA_IMPORTED: iG,
            IX2_SESSION_INITIALIZED: oG,
            IX2_SESSION_STARTED: aG,
            IX2_SESSION_STOPPED: sG,
            IX2_PREVIEW_REQUESTED: uG,
            IX2_PLAYBACK_REQUESTED: cG,
            IX2_STOP_REQUESTED: lG,
            IX2_CLEAR_REQUESTED: fG,
            IX2_EVENT_LISTENER_ADDED: dG,
            IX2_TEST_FRAME_RENDERED: pG,
            IX2_EVENT_STATE_CHANGED: hG,
            IX2_ANIMATION_FRAME_CHANGED: vG,
            IX2_PARAMETER_CHANGED: gG,
            IX2_INSTANCE_ADDED: yG,
            IX2_INSTANCE_STARTED: EG,
            IX2_INSTANCE_REMOVED: mG,
            IX2_ELEMENT_STATE_CHANGED: _G,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: bG,
            IX2_VIEWPORT_WIDTH_CHANGED: TG,
            IX2_MEDIA_QUERIES_DEFINED: IG
        } = me, {reifyState: wG} = OE.IX2VanillaUtils, $a = e => ({type: iG, payload: {...wG(e)}}), Qa = ({hasBoundaryNodes: e, reducedMotion: t}) => ({type: oG, payload: {hasBoundaryNodes: e, reducedMotion: t}}), Za = () => ({type: aG}), Ja = () => ({type: sG}), OG = ({
                                                                                                                                                                                                                                                                                  rawData: e,
                                                                                                                                                                                                                                                                                  defer: t
                                                                                                                                                                                                                                                                              }) => ({
            type: uG,
            payload: {defer: t, rawData: e}
        }), xG = ({actionTypeId: e = ke.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: s, verbose: a, rawData: u}) => ({
            type: cG,
            payload: {actionTypeId: e, actionListId: t, actionItemId: r, testManual: s, eventId: n, allowEvents: i, immediate: o, verbose: a, rawData: u}
        }), AG = e => ({type: lG, payload: {actionListId: e}}), SG = () => ({type: fG}), ui = (e, t) => ({type: dG, payload: {target: e, listenerParams: t}}), CG = (e = 1) => ({type: pG, payload: {step: e}}), es = (e, t) => ({
            type: hG,
            payload: {stateKey: e, newState: t}
        }), ci = (e, t) => ({type: vG, payload: {now: e, parameters: t}}), pr = (e, t) => ({type: gG, payload: {key: e, value: t}}), ts = e => ({type: yG, payload: {...e}}), li = (e, t) => ({type: EG, payload: {instanceId: e, time: t}}), rs = e => ({
            type: mG,
            payload: {instanceId: e}
        }), ns = (e, t, r, n) => ({type: _G, payload: {elementId: e, actionTypeId: t, current: r, actionItem: n}}), hr = ({actionListId: e, isPlaying: t}) => ({type: bG, payload: {actionListId: e, isPlaying: t}}), is = ({width: e, mediaQueries: t}) => ({
            type: TG,
            payload: {width: e, mediaQueries: t}
        }), os = () => ({type: IG})
    });
    var Le = {};
    Pe(Le, {
        elementContains: () => us,
        getChildElements: () => VG,
        getClosestElement: () => Qr,
        getProperty: () => qG,
        getQuerySelector: () => ss,
        getRefType: () => cs,
        getSiblingElements: () => UG,
        getStyle: () => PG,
        getValidDocument: () => DG,
        isSiblingNode: () => GG,
        matchSelector: () => MG,
        queryDocument: () => FG,
        setStyle: () => NG
    });

    function NG(e, t, r) {
        e.style[t] = r
    }

    function PG(e, t) {
        return e.style[t]
    }

    function qG(e, t) {
        return e[t]
    }

    function MG(e) {
        return t => t[as](e)
    }

    function ss({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(AE) !== -1) {
                let n = e.split(AE), i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(CE)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function DG(e) {
        return e == null || e === document.documentElement.getAttribute(CE) ? document : null
    }

    function FG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function us(e, t) {
        return e.contains(t)
    }

    function GG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function VG(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r], {length: o} = i;
            if (o) for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function UG(e = []) {
        let t = [], r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function cs(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? RG : LG : null
    }

    var SE, as, AE, RG, LG, CE, Qr, RE = de(() => {
        "use strict";
        SE = oe(Ft());
        qe();
        ({ELEMENT_MATCHES: as} = SE.IX2BrowserSupport), {IX2_ID_DELIMITER: AE, HTML_ELEMENT: RG, PLAIN_OBJECT: LG, WF_PAGE: CE} = Oe;
        Qr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[as] && r[as](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ls = c((hj, NE) => {
        var kG = ot(), LE = Object.create, XG = function () {
            function e() {
            }

            return function (t) {
                if (!kG(t)) return {};
                if (LE) return LE(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0, r
            }
        }();
        NE.exports = XG
    });
    var di = c((vj, PE) => {
        function WG() {
        }

        PE.exports = WG
    });
    var hi = c((gj, qE) => {
        var HG = ls(), BG = di();

        function pi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }

        pi.prototype = HG(BG.prototype);
        pi.prototype.constructor = pi;
        qE.exports = pi
    });
    var GE = c((yj, FE) => {
        var ME = Bt(), jG = qr(), zG = Te(), DE = ME ? ME.isConcatSpreadable : void 0;

        function KG(e) {
            return zG(e) || jG(e) || !!(DE && e && e[DE])
        }

        FE.exports = KG
    });
    var kE = c((Ej, UE) => {
        var YG = Pn(), $G = GE();

        function VE(e, t, r, n, i) {
            var o = -1, s = e.length;
            for (r || (r = $G), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? VE(a, t - 1, r, n, i) : YG(i, a) : n || (i[i.length] = a)
            }
            return i
        }

        UE.exports = VE
    });
    var WE = c((mj, XE) => {
        var QG = kE();

        function ZG(e) {
            var t = e == null ? 0 : e.length;
            return t ? QG(e, 1) : []
        }

        XE.exports = ZG
    });
    var BE = c((_j, HE) => {
        function JG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }

        HE.exports = JG
    });
    var KE = c((bj, zE) => {
        var eV = BE(), jE = Math.max;

        function tV(e, t, r) {
            return t = jE(t === void 0 ? e.length - 1 : t, 0), function () {
                for (var n = arguments, i = -1, o = jE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                i = -1;
                for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                return a[t] = r(s), eV(e, this, a)
            }
        }

        zE.exports = tV
    });
    var $E = c((Tj, YE) => {
        function rV(e) {
            return function () {
                return e
            }
        }

        YE.exports = rV
    });
    var JE = c((Ij, ZE) => {
        var nV = $E(), QE = za(), iV = Bn(), oV = QE ? function (e, t) {
            return QE(e, "toString", {configurable: !0, enumerable: !1, value: nV(t), writable: !0})
        } : iV;
        ZE.exports = oV
    });
    var tm = c((wj, em) => {
        var aV = 800, sV = 16, uV = Date.now;

        function cV(e) {
            var t = 0, r = 0;
            return function () {
                var n = uV(), i = sV - (n - r);
                if (r = n, i > 0) {
                    if (++t >= aV) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }

        em.exports = cV
    });
    var nm = c((Oj, rm) => {
        var lV = JE(), fV = tm(), dV = fV(lV);
        rm.exports = dV
    });
    var om = c((xj, im) => {
        var pV = WE(), hV = KE(), vV = nm();

        function gV(e) {
            return vV(hV(e, void 0, pV), e + "")
        }

        im.exports = gV
    });
    var um = c((Aj, sm) => {
        var am = ia(), yV = am && new am;
        sm.exports = yV
    });
    var lm = c((Sj, cm) => {
        function EV() {
        }

        cm.exports = EV
    });
    var fs = c((Cj, dm) => {
        var fm = um(), mV = lm(), _V = fm ? function (e) {
            return fm.get(e)
        } : mV;
        dm.exports = _V
    });
    var hm = c((Rj, pm) => {
        var bV = {};
        pm.exports = bV
    });
    var ds = c((Lj, gm) => {
        var vm = hm(), TV = Object.prototype, IV = TV.hasOwnProperty;

        function wV(e) {
            for (var t = e.name + "", r = vm[t], n = IV.call(vm, t) ? r.length : 0; n--;) {
                var i = r[n], o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }

        gm.exports = wV
    });
    var gi = c((Nj, ym) => {
        var OV = ls(), xV = di(), AV = 4294967295;

        function vi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = AV, this.__views__ = []
        }

        vi.prototype = OV(xV.prototype);
        vi.prototype.constructor = vi;
        ym.exports = vi
    });
    var mm = c((Pj, Em) => {
        function SV(e, t) {
            var r = -1, n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }

        Em.exports = SV
    });
    var bm = c((qj, _m) => {
        var CV = gi(), RV = hi(), LV = mm();

        function NV(e) {
            if (e instanceof CV) return e.clone();
            var t = new RV(e.__wrapped__, e.__chain__);
            return t.__actions__ = LV(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }

        _m.exports = NV
    });
    var wm = c((Mj, Im) => {
        var PV = gi(), Tm = hi(), qV = di(), MV = Te(), DV = dt(), FV = bm(), GV = Object.prototype, VV = GV.hasOwnProperty;

        function yi(e) {
            if (DV(e) && !MV(e) && !(e instanceof PV)) {
                if (e instanceof Tm) return e;
                if (VV.call(e, "__wrapped__")) return FV(e)
            }
            return new Tm(e)
        }

        yi.prototype = qV.prototype;
        yi.prototype.constructor = yi;
        Im.exports = yi
    });
    var xm = c((Dj, Om) => {
        var UV = gi(), kV = fs(), XV = ds(), WV = wm();

        function HV(e) {
            var t = XV(e), r = WV[t];
            if (typeof r != "function" || !(t in UV.prototype)) return !1;
            if (e === r) return !0;
            var n = kV(r);
            return !!n && e === n[0]
        }

        Om.exports = HV
    });
    var Rm = c((Fj, Cm) => {
        var Am = hi(), BV = om(), jV = fs(), ps = ds(), zV = Te(), Sm = xm(), KV = "Expected a function", YV = 8, $V = 32, QV = 128, ZV = 256;

        function JV(e) {
            return BV(function (t) {
                var r = t.length, n = r, i = Am.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(KV);
                    if (i && !s && ps(o) == "wrapper") var s = new Am([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = ps(o), u = a == "wrapper" ? jV(o) : void 0;
                    u && Sm(u[0]) && u[1] == (QV | YV | $V | ZV) && !u[4].length && u[9] == 1 ? s = s[ps(u[0])].apply(s, u[3]) : s = o.length == 1 && Sm(o) ? s[a]() : s.thru(o)
                }
                return function () {
                    var f = arguments, h = f[0];
                    if (s && f.length == 1 && zV(h)) return s.plant(h).value();
                    for (var p = 0, y = r ? t[p].apply(this, f) : h; ++p < r;) y = t[p].call(this, y);
                    return y
                }
            })
        }

        Cm.exports = JV
    });
    var Nm = c((Gj, Lm) => {
        var eU = Rm(), tU = eU();
        Lm.exports = tU
    });
    var qm = c((Vj, Pm) => {
        function rU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }

        Pm.exports = rU
    });
    var Dm = c((Uj, Mm) => {
        var nU = qm(), hs = jn();

        function iU(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = hs(r), r = r === r ? r : 0), t !== void 0 && (t = hs(t), t = t === t ? t : 0), nU(hs(e), t, r)
        }

        Mm.exports = iU
    });
    var Bm, jm, zm, Km, oU, aU, sU, uU, cU, lU, fU, dU, pU, hU, vU, gU, yU, EU, mU, Ym, $m, _U, bU, TU, Qm, IU, wU, Zm, OU, vs, Jm, Fm, Gm, e_, Jr, xU, ut, t_, AU, De, Qe, en, r_, gs, Vm, ys, SU, Zr, CU, RU, LU, n_, Um, NU, km, PU, qU, MU, Xm, Ei, mi, Wm, Hm, i_, o_ = de(() => {
        "use strict";
        Bm = oe(Nm()), jm = oe(Hn()), zm = oe(Dm());
        qe();
        Es();
        fi();
        Km = oe(Ft()), {
            MOUSE_CLICK: oU,
            MOUSE_SECOND_CLICK: aU,
            MOUSE_DOWN: sU,
            MOUSE_UP: uU,
            MOUSE_OVER: cU,
            MOUSE_OUT: lU,
            DROPDOWN_CLOSE: fU,
            DROPDOWN_OPEN: dU,
            SLIDER_ACTIVE: pU,
            SLIDER_INACTIVE: hU,
            TAB_ACTIVE: vU,
            TAB_INACTIVE: gU,
            NAVBAR_CLOSE: yU,
            NAVBAR_OPEN: EU,
            MOUSE_MOVE: mU,
            PAGE_SCROLL_DOWN: Ym,
            SCROLL_INTO_VIEW: $m,
            SCROLL_OUT_OF_VIEW: _U,
            PAGE_SCROLL_UP: bU,
            SCROLLING_IN_VIEW: TU,
            PAGE_FINISH: Qm,
            ECOMMERCE_CART_CLOSE: IU,
            ECOMMERCE_CART_OPEN: wU,
            PAGE_START: Zm,
            PAGE_SCROLL: OU
        } = Ye, vs = "COMPONENT_ACTIVE", Jm = "COMPONENT_INACTIVE", {COLON_DELIMITER: Fm} = Oe, {getNamespacedParameterId: Gm} = Km.IX2VanillaUtils, e_ = e => t => typeof t == "object" && e(t) ? !0 : t, Jr = e_(({element: e, nativeEvent: t}) => e === t.target), xU = e_(({
                                                                                                                                                                                                                                                                                   element: e,
                                                                                                                                                                                                                                                                                   nativeEvent: t
                                                                                                                                                                                                                                                                               }) => e.contains(t.target)), ut = (0, Bm.default)([Jr, xU]), t_ = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState(), {events: n} = r, i = n[t];
                if (i && !SU[i.eventTypeId]) return i
            }
            return null
        }, AU = ({store: e, event: t}) => {
            let {action: r} = t, {autoStopEventId: n} = r.config;
            return !!t_(e, n)
        }, De = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
            let {action: o, id: s} = t, {actionListId: a, autoStopEventId: u} = o.config, f = t_(e, u);
            return f && vr({store: e, eventId: u, eventTarget: r, eventStateKey: u + Fm + n.split(Fm)[1], actionListId: (0, jm.default)(f, "action.config.actionListId")}), vr({store: e, eventId: s, eventTarget: r, eventStateKey: n, actionListId: a}), tn({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, Qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, en = {handler: Qe(ut, De)}, r_ = {...en, types: [vs, Jm].join(" ")}, gs = [{target: window, types: "resize orientationchange", throttle: !0}, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Vm = "mouseover mouseout", ys = {types: gs}, SU = {PAGE_START: Zm, PAGE_FINISH: Qm}, Zr = (() => {
            let e = window.pageXOffset !== void 0, r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, zm.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), CU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), RU = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: i} = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, LU = e => {
            let {element: t, event: {config: r}} = e, {clientWidth: n, clientHeight: i} = Zr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return CU(t.getBoundingClientRect(), {left: 0, top: u, right: n, bottom: i - u})
        }, n_ = e => (t, r) => {
            let {type: n} = t.nativeEvent, i = [vs, Jm].indexOf(n) !== -1 ? n === vs : r.isActive, o = {...r, isActive: i};
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Um = e => (t, r) => {
            let n = {elementHovered: RU(t)};
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, NU = e => (t, r) => {
            let n = {...r, elementVisible: LU(t)};
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, km = e => (t, r = {}) => {
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = Zr(), {event: {config: s, eventTypeId: a}} = t, {scrollOffsetValue: u, scrollOffsetUnit: f} = s, h = f === "PX", p = i - o, y = Number((n / p).toFixed(2));
            if (r && r.percentTop === y) return r;
            let T = (h ? u : o * (u || 0) / 100) / p, _, I, M = 0;
            r && (_ = y > r.percentTop, I = r.scrollingDown !== _, M = I ? y : r.anchorTop);
            let S = a === Ym ? y >= M + T : y <= M - T, N = {...r, percentTop: y, inBounds: S, anchorTop: M, scrollingDown: _};
            return r && S && (I || N.inBounds !== r.inBounds) && e(t, N) || N
        }, PU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, qU = e => (t, r) => {
            let n = {finished: document.readyState === "complete"};
            return n.finished && !(r && r.finshed) && e(t), n
        }, MU = e => (t, r) => {
            let n = {started: !0};
            return r || e(t), n
        }, Xm = e => (t, r = {clickCount: 0}) => {
            let n = {clickCount: r.clickCount % 2 + 1};
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, Ei = (e = !0) => ({...r_, handler: Qe(e ? ut : Jr, n_((t, r) => r.isActive ? en.handler(t, r) : r))}), mi = (e = !0) => ({...r_, handler: Qe(e ? ut : Jr, n_((t, r) => r.isActive ? r : en.handler(t, r)))}), Wm = {
            ...ys, handler: NU((e, t) => {
                let {elementVisible: r} = t, {event: n, store: i} = e, {ixData: o} = i.getState(), {events: s} = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === $m === r ? (De(e), {...t, triggered: !0}) : t
            })
        }, Hm = .05, i_ = {
            [pU]: Ei(), [hU]: mi(), [dU]: Ei(), [fU]: mi(), [EU]: Ei(!1), [yU]: mi(!1), [vU]: Ei(), [gU]: mi(), [wU]: {types: "ecommerce-cart-open", handler: Qe(ut, De)}, [IU]: {types: "ecommerce-cart-close", handler: Qe(ut, De)}, [oU]: {
                types: "click", handler: Qe(ut, Xm((e, {clickCount: t}) => {
                    AU(e) ? t === 1 && De(e) : De(e)
                }))
            }, [aU]: {
                types: "click", handler: Qe(ut, Xm((e, {clickCount: t}) => {
                    t === 2 && De(e)
                }))
            }, [sU]: {...en, types: "mousedown"}, [uU]: {...en, types: "mouseup"}, [cU]: {
                types: Vm, handler: Qe(ut, Um((e, t) => {
                    t.elementHovered && De(e)
                }))
            }, [lU]: {
                types: Vm, handler: Qe(ut, Um((e, t) => {
                    t.elementHovered || De(e)
                }))
            }, [mU]: {
                types: "mousemove mouseout scroll", handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o = {clientX: 0, clientY: 0, pageX: 0, pageY: 0}) => {
                    let {basedOn: s, selectedAxis: a, continuousParameterGroupId: u, reverse: f, restingState: h = 0} = r, {clientX: p = o.clientX, clientY: y = o.clientY, pageX: T = o.pageX, pageY: _ = o.pageY} = n, I = a === "X_AXIS", M = n.type === "mouseout", S = h / 100, N = u, A = !1;
                    switch (s) {
                        case it.VIEWPORT: {
                            S = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(y, window.innerHeight) / window.innerHeight;
                            break
                        }
                        case it.PAGE: {
                            let {scrollLeft: D, scrollTop: q, scrollWidth: P, scrollHeight: H} = Zr();
                            S = I ? Math.min(D + T, P) / P : Math.min(q + _, H) / H;
                            break
                        }
                        case it.ELEMENT:
                        default: {
                            N = Gm(i, u);
                            let D = n.type.indexOf("mouse") === 0;
                            if (D && ut({element: t, nativeEvent: n}) !== !0) break;
                            let q = t.getBoundingClientRect(), {left: P, top: H, width: B, height: j} = q;
                            if (!D && !PU({left: p, top: y}, q)) break;
                            A = !0, S = I ? (p - P) / B : (y - H) / j;
                            break
                        }
                    }
                    return M && (S > 1 - Hm || S < Hm) && (S = Math.round(S)), (s !== it.ELEMENT || A || A !== o.elementHovered) && (S = f ? 1 - S : S, e.dispatch(pr(N, S))), {elementHovered: A, clientX: p, clientY: y, pageX: T, pageY: _}
                }
            }, [OU]: {
                types: gs, handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t, {scrollTop: i, scrollHeight: o, clientHeight: s} = Zr(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(pr(r, a))
                }
            }, [TU]: {
                types: gs, handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i = {scrollPercent: 0}) => {
                    let {scrollLeft: o, scrollTop: s, scrollWidth: a, scrollHeight: u, clientHeight: f} = Zr(), {basedOn: h, selectedAxis: p, continuousParameterGroupId: y, startsEntering: T, startsExiting: _, addEndOffset: I, addStartOffset: M, addOffsetValue: S = 0, endOffsetValue: N = 0} = r,
                        A = p === "X_AXIS";
                    if (h === it.VIEWPORT) {
                        let D = A ? o / a : s / u;
                        return D !== i.scrollPercent && t.dispatch(pr(y, D)), {scrollPercent: D}
                    } else {
                        let D = Gm(n, y), q = e.getBoundingClientRect(), P = (M ? S : 0) / 100, H = (I ? N : 0) / 100;
                        P = T ? P : 1 - P, H = _ ? H : 1 - H;
                        let B = q.top + Math.min(q.height * P, f), Q = q.top + q.height * H - B, U = Math.min(f + Q, u), g = Math.min(Math.max(0, f - B), U) / U;
                        return g !== i.scrollPercent && t.dispatch(pr(D, g)), {scrollPercent: g}
                    }
                }
            }, [$m]: Wm, [_U]: Wm, [Ym]: {
                ...ys, handler: km((e, t) => {
                    t.scrollingDown && De(e)
                })
            }, [bU]: {
                ...ys, handler: km((e, t) => {
                    t.scrollingDown || De(e)
                })
            }, [Qm]: {types: "readystatechange IX2_PAGE_UPDATE", handler: Qe(Jr, qU(De))}, [Zm]: {types: "readystatechange IX2_PAGE_UPDATE", handler: Qe(Jr, MU(De))}
        }
    });
    var T_ = {};
    Pe(T_, {observeRequests: () => tk, startActionGroup: () => tn, startEngine: () => Oi, stopActionGroup: () => vr, stopAllActionGroups: () => m_, stopEngine: () => xi});

    function tk(e) {
        Gt({store: e, select: ({ixRequest: t}) => t.preview, onChange: ik}), Gt({store: e, select: ({ixRequest: t}) => t.playback, onChange: ok}), Gt({store: e, select: ({ixRequest: t}) => t.stop, onChange: ak}), Gt({store: e, select: ({ixRequest: t}) => t.clear, onChange: sk})
    }

    function rk(e) {
        Gt({
            store: e, select: ({ixSession: t}) => t.mediaQueryKey, onChange: () => {
                xi(e), v_({store: e, elementApi: Le}), Oi({store: e, allowEvents: !0}), g_()
            }
        })
    }

    function nk(e, t) {
        let r = Gt({
            store: e, select: ({ixSession: n}) => n.tick, onChange: n => {
                t(n), r()
            }
        })
    }

    function ik({rawData: e, defer: t}, r) {
        let n = () => {
            Oi({store: r, rawData: e, allowEvents: !0}), g_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function g_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function ok(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: s, immediate: a, testManual: u, verbose: f = !0} = e, {rawData: h} = e;
        if (n && i && h && a) {
            let p = h.actionLists[n];
            p && (h = HU({actionList: p, actionItemId: i, rawData: h}))
        }
        if (Oi({store: t, rawData: h, allowEvents: s, testManual: u}), n && r === ke.GENERAL_START_ACTION || ms(r)) {
            vr({store: t, actionListId: n}), E_({store: t, actionListId: n, eventId: o});
            let p = tn({store: t, eventId: o, actionListId: n, immediate: a, verbose: f});
            f && p && t.dispatch(hr({actionListId: n, isPlaying: !a}))
        }
    }

    function ak({actionListId: e}, t) {
        e ? vr({store: t, actionListId: e}) : m_({store: t}), xi(t)
    }

    function sk(e, t) {
        xi(t), v_({store: t, elementApi: Le})
    }

    function Oi({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch($a(t)), i.active || (e.dispatch(Qa({
            hasBoundaryNodes: !!document.querySelector(bi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (pk(e), uk(), e.getState().ixSession.hasDefinedMediaQueries && rk(e)), e.dispatch(Za()), ck(e, n))
    }

    function uk() {
        let {documentElement: e} = document;
        e.className.indexOf(a_) === -1 && (e.className += ` ${a_}`)
    }

    function ck(e, t) {
        let r = n => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(ci(n, o)), t ? nk(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function xi(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(lk), KU(), e.dispatch(Ja())
        }
    }

    function lk({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }

    function fk({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: s, smoothing: a, restingValue: u}) {
        let {ixData: f, ixSession: h} = e.getState(), {events: p} = f, y = p[n], {eventTypeId: T} = y, _ = {}, I = {}, M = [], {continuousActionGroups: S} = s, {id: N} = s;
        BU(T, i) && (N = jU(t, N));
        let A = h.hasBoundaryNodes && r ? Qr(r, bi) : null;
        S.forEach(D => {
            let {keyframe: q, actionItems: P} = D;
            P.forEach(H => {
                let {actionTypeId: B} = H, {target: j} = H.config;
                if (!j) return;
                let Q = j.boundaryMode ? A : null, U = YU(j) + _s + B;
                if (I[U] = dk(I[U], q, H), !_[U]) {
                    _[U] = !0;
                    let {config: R} = H;
                    Ti({config: R, event: y, eventTarget: r, elementRoot: Q, elementApi: Le}).forEach(g => {
                        M.push({element: g, key: U})
                    })
                }
            })
        }), M.forEach(({element: D, key: q}) => {
            let P = I[q], H = (0, gt.default)(P, "[0].actionItems[0]", {}), {actionTypeId: B} = H, j = wi(B) ? Ts(B)(D, H) : null, Q = bs({element: D, actionItem: H, elementApi: Le}, j);
            Is({store: e, element: D, eventId: n, actionListId: o, actionItem: H, destination: Q, continuous: !0, parameterId: N, actionGroups: P, smoothing: a, restingValue: u, pluginInstance: j})
        })
    }

    function dk(e = [], t, r) {
        let n = [...e], i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({keyframe: t, actionItems: []})), n[i].actionItems.push(r), n
    }

    function pk(e) {
        let {ixData: t} = e.getState(), {eventTypeMap: r} = t;
        y_(e), (0, gr.default)(r, (i, o) => {
            let s = i_[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            mk({logic: s, store: e, events: i})
        });
        let {ixSession: n} = e.getState();
        n.eventListeners.length && vk(e)
    }

    function vk(e) {
        let t = () => {
            y_(e)
        };
        hk.forEach(r => {
            window.addEventListener(r, t), e.dispatch(ui(window, [r, t]))
        }), t()
    }

    function y_(e) {
        let {ixSession: t, ixData: r} = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(is({width: n, mediaQueries: i}))
        }
    }

    function mk({logic: e, store: t, events: r}) {
        _k(r);
        let {types: n, handler: i} = e, {ixData: o} = t.getState(), {actionLists: s} = o, a = gk(r, Ek);
        if (!(0, c_.default)(a)) return;
        (0, gr.default)(a, (p, y) => {
            let T = r[y], {action: _, id: I, mediaQueries: M = o.mediaQueryKeys} = T, {actionListId: S} = _.config;
            $U(M, o.mediaQueryKeys) || t.dispatch(os()), _.actionTypeId === ke.GENERAL_CONTINUOUS_ACTION && (Array.isArray(T.config) ? T.config : [T.config]).forEach(A => {
                let {continuousParameterGroupId: D} = A, q = (0, gt.default)(s, `${S}.continuousParameterGroups`, []), P = (0, u_.default)(q, ({id: j}) => j === D), H = (A.smoothing || 0) / 100, B = (A.restingState || 0) / 100;
                P && p.forEach((j, Q) => {
                    let U = I + _s + Q;
                    fk({store: t, eventStateKey: U, eventTarget: j, eventId: I, eventConfig: A, actionListId: S, parameterGroup: P, smoothing: H, restingValue: B})
                })
            }), (_.actionTypeId === ke.GENERAL_START_ACTION || ms(_.actionTypeId)) && E_({store: t, actionListId: S, eventId: I})
        });
        let u = p => {
            let {ixSession: y} = t.getState();
            yk(a, (T, _, I) => {
                let M = r[_], S = y.eventState[I], {action: N, mediaQueries: A = o.mediaQueryKeys} = M;
                if (!Ii(A, y.mediaQueryKey)) return;
                let D = (q = {}) => {
                    let P = i({store: t, element: T, event: M, eventConfig: q, nativeEvent: p, eventStateKey: I}, S);
                    QU(P, S) || t.dispatch(es(I, P))
                };
                N.actionTypeId === ke.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(M.config) ? M.config : [M.config]).forEach(D) : D()
            })
        }, f = (0, p_.default)(u, ek), h = ({target: p = document, types: y, throttle: T}) => {
            y.split(" ").filter(Boolean).forEach(_ => {
                let I = T ? f : u;
                p.addEventListener(_, I), t.dispatch(ui(p, [_, I]))
            })
        };
        Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
    }

    function _k(e) {
        if (!JU) return;
        let t = {}, r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n], s = ss(o);
            t[s] || (i === Ye.MOUSE_CLICK || i === Ye.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function E_({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState(), {actionLists: o, events: s} = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let f = (0, gt.default)(u, "actionItemGroups[0].actionItems", []), h = (0, gt.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Ii(h, i.mediaQueryKey)) return;
            f.forEach(p => {
                let {config: y, actionTypeId: T} = p, _ = y?.target?.useEventTarget === !0 && y?.target?.objectId == null ? {target: a.target, targets: a.targets} : y, I = Ti({config: _, event: a, elementApi: Le}), M = wi(T);
                I.forEach(S => {
                    let N = M ? Ts(T)(S, p) : null;
                    Is({destination: bs({element: S, actionItem: p, elementApi: Le}, N), immediate: !0, store: e, element: S, eventId: r, actionItem: p, actionListId: t, pluginInstance: N})
                })
            })
        }
    }

    function m_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0, gr.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                ws(r, e), i && e.dispatch(hr({actionListId: n, isPlaying: !1}))
            }
        })
    }

    function vr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: s} = e.getState(), a = s.hasBoundaryNodes && r ? Qr(r, bi) : null;
        (0, gr.default)(o, u => {
            let f = (0, gt.default)(u, "actionItem.config.target.boundaryMode"), h = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && h) {
                if (a && f && !us(a, u.element)) return;
                ws(u, e), u.verbose && e.dispatch(hr({actionListId: i, isPlaying: !1}))
            }
        })
    }

    function tn({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o = 0, immediate: s, verbose: a}) {
        let {ixData: u, ixSession: f} = e.getState(), {events: h} = u, p = h[t] || {}, {mediaQueries: y = u.mediaQueryKeys} = p, T = (0, gt.default)(u, `actionLists.${i}`, {}), {actionItemGroups: _, useFirstGroupAsInitialState: I} = T;
        if (!_ || !_.length) return !1;
        o >= _.length && (0, gt.default)(p, "config.loop") && (o = 0), o === 0 && I && o++;
        let S = (o === 0 || o === 1 && I) && ms(p.action?.actionTypeId) ? p.config.delay : void 0, N = (0, gt.default)(_, [o, "actionItems"], []);
        if (!N.length || !Ii(y, f.mediaQueryKey)) return !1;
        let A = f.hasBoundaryNodes && r ? Qr(r, bi) : null, D = kU(N), q = !1;
        return N.forEach((P, H) => {
            let {config: B, actionTypeId: j} = P, Q = wi(j), {target: U} = B;
            if (!U) return;
            let R = U.boundaryMode ? A : null;
            Ti({config: B, event: p, eventTarget: r, elementRoot: R, elementApi: Le}).forEach((L, F) => {
                let V = Q ? Ts(j)(L, P) : null, Z = Q ? ZU(j)(L, P) : null;
                q = !0;
                let J = D === H && F === 0, G = XU({element: L, actionItem: P}), W = bs({element: L, actionItem: P, elementApi: Le}, V);
                Is({store: e, element: L, actionItem: P, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o, isCarrier: J, computedStyle: G, destination: W, immediate: s, verbose: a, pluginInstance: V, pluginDuration: Z, instanceDelay: S})
            })
        }), q
    }

    function Is(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: s, pluginInstance: a, continuous: u, restingValue: f, eventId: h} = n, p = !u, y = VU(), {ixElements: T, ixSession: _, ixData: I} = t.getState(), M = GU(T, i), {refState: S} = T[M] || {}, N = cs(i),
            A = _.reducedMotion && Bo[o.actionTypeId], D;
        if (A && u) switch (I.events[h]?.eventTypeId) {
            case Ye.MOUSE_MOVE:
            case Ye.MOUSE_MOVE_IN_VIEWPORT:
                D = f;
                break;
            default:
                D = .5;
                break
        }
        let q = WU(i, S, r, o, Le, a);
        if (t.dispatch(ts({instanceId: y, elementId: M, origin: q, refType: N, skipMotion: A, skipToValue: D, ...n})), __(document.body, "ix2-animation-started", y), s) {
            bk(t, y);
            return
        }
        Gt({store: t, select: ({ixInstances: P}) => P[y], onChange: b_}), p && t.dispatch(li(y, _.tick))
    }

    function ws(e, t) {
        __(document.body, "ix2-animation-stopping", {instanceId: e.id, state: t.getState()});
        let {elementId: r, actionItem: n} = e, {ixElements: i} = t.getState(), {ref: o, refType: s} = i[r] || {};
        s === h_ && zU(o, n, Le), t.dispatch(rs(e.id))
    }

    function __(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function bk(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(li(t, 0)), e.dispatch(ci(performance.now(), r));
        let {ixInstances: n} = e.getState();
        b_(n[t], e)
    }

    function b_(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: s, actionTypeId: a, renderType: u, current: f, groupIndex: h, eventId: p, eventTarget: y, eventStateKey: T, actionListId: _, isCarrier: I, styleProp: M, verbose: S, pluginInstance: N} = e, {
            ixData: A,
            ixSession: D
        } = t.getState(), {events: q} = A, P = q[p] || {}, {mediaQueries: H = A.mediaQueryKeys} = P;
        if (Ii(H, D.mediaQueryKey) && (n || r || i)) {
            if (f || u === FU && i) {
                t.dispatch(ns(o, a, f, s));
                let {ixElements: B} = t.getState(), {ref: j, refType: Q, refState: U} = B[o] || {}, R = U && U[a];
                (Q === h_ || wi(a)) && UU(j, U, R, p, s, M, Le, u, N)
            }
            if (i) {
                if (I) {
                    let B = tn({store: t, eventId: p, eventTarget: y, eventStateKey: T, actionListId: _, groupIndex: h + 1, verbose: S});
                    S && !B && t.dispatch(hr({actionListId: _, isPlaying: !1}))
                }
                ws(e, t)
            }
        }
    }

    var u_, gt, c_, l_, f_, d_, gr, p_, _i, DU, ms, _s, bi, h_, FU, a_, Ti, GU, bs, Gt, VU, UU, v_, kU, XU, WU, HU, BU, jU, Ii, zU, KU, YU, $U, QU, wi, Ts, ZU, s_, JU, ek, hk, gk, yk, Ek, Es = de(() => {
        "use strict";
        u_ = oe(_a()), gt = oe(Hn()), c_ = oe(My()), l_ = oe(sE()), f_ = oe(cE()), d_ = oe(fE()), gr = oe(yE()), p_ = oe(wE());
        qe();
        _i = oe(Ft());
        fi();
        RE();
        o_();
        DU = Object.keys(Wo), ms = e => DU.includes(e), {COLON_DELIMITER: _s, BOUNDARY_SELECTOR: bi, HTML_ELEMENT: h_, RENDER_GENERAL: FU, W_MOD_IX: a_} = Oe, {
            getAffectedElements: Ti,
            getElementId: GU,
            getDestinationValues: bs,
            observeStore: Gt,
            getInstanceId: VU,
            renderHTMLElement: UU,
            clearAllStyles: v_,
            getMaxDurationItemIndex: kU,
            getComputedStyle: XU,
            getInstanceOrigin: WU,
            reduceListToGroup: HU,
            shouldNamespaceEventParameter: BU,
            getNamespacedParameterId: jU,
            shouldAllowMediaQuery: Ii,
            cleanupHTMLElement: zU,
            clearObjectCache: KU,
            stringifyTarget: YU,
            mediaQueriesEqual: $U,
            shallowEqual: QU
        } = _i.IX2VanillaUtils, {isPluginType: wi, createPluginInstance: Ts, getPluginDuration: ZU} = _i.IX2VanillaPlugins, s_ = navigator.userAgent, JU = s_.match(/iPad/i) || s_.match(/iPhone/), ek = 12;
        hk = ["resize", "orientationchange"];
        gk = (e, t) => (0, l_.default)((0, d_.default)(e, t), f_.default), yk = (e, t) => {
            (0, gr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + _s + o;
                    t(i, n, s)
                })
            })
        }, Ek = e => {
            let t = {target: e.target, targets: e.targets};
            return Ti({config: t, elementApi: Le})
        }
    });
    var w_ = c(yt => {
        "use strict";
        var Tk = fn().default, Ik = ou().default;
        Object.defineProperty(yt, "__esModule", {value: !0});
        yt.actions = void 0;
        yt.destroy = I_;
        yt.init = Sk;
        yt.setEnv = Ak;
        yt.store = void 0;
        Hl();
        var wk = ko(), Ok = Ik((gy(), et(vy))), Os = (Es(), et(T_)), xk = Tk((fi(), et(xE)));
        yt.actions = xk;
        var xs = yt.store = (0, wk.createStore)(Ok.default);

        function Ak(e) {
            e() && (0, Os.observeRequests)(xs)
        }

        function Sk(e) {
            I_(), (0, Os.startEngine)({store: xs, rawData: e, allowEvents: !0})
        }

        function I_() {
            (0, Os.stopEngine)(xs)
        }
    });
    var S_ = c((Yj, A_) => {
        "use strict";
        var O_ = Ve(), x_ = w_();
        x_.setEnv(O_.env);
        O_.define("ix2", A_.exports = function () {
            return x_
        })
    });
    var R_ = c(($j, C_) => {
        "use strict";
        var yr = Ve();
        yr.define("links", C_.exports = function (e, t) {
            var r = {}, n = e(window), i, o = yr.env(), s = window.location, a = document.createElement("a"), u = "w--current", f = /index\.(html|php)$/, h = /\/$/, p, y;
            r.ready = r.design = r.preview = T;

            function T() {
                i = o && yr.env("design"), y = yr.env("slug") || s.pathname || "", yr.scroll.off(I), p = [];
                for (var S = document.links, N = 0; N < S.length; ++N) _(S[N]);
                p.length && (yr.scroll.on(I), I())
            }

            function _(S) {
                var N = i && S.getAttribute("href-disabled") || S.getAttribute("href");
                if (a.href = N, !(N.indexOf(":") >= 0)) {
                    var A = e(S);
                    if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                        var D = e(a.hash);
                        D.length && p.push({link: A, sec: D, active: !1});
                        return
                    }
                    if (!(N === "#" || N === "")) {
                        var q = a.href === s.href || N === y || f.test(N) && h.test(y);
                        M(A, u, q)
                    }
                }
            }

            function I() {
                var S = n.scrollTop(), N = n.height();
                t.each(p, function (A) {
                    var D = A.link, q = A.sec, P = q.offset().top, H = q.outerHeight(), B = N * .5, j = q.is(":visible") && P + H - B >= S && P + B <= S + N;
                    A.active !== j && (A.active = j, M(D, u, j))
                })
            }

            function M(S, N, A) {
                var D = S.hasClass(N);
                A && D || !A && !D || (A ? S.addClass(N) : S.removeClass(N))
            }

            return r
        })
    });
    var N_ = c((Qj, L_) => {
        "use strict";
        var Ai = Ve();
        Ai.define("scroll", L_.exports = function (e) {
            var t = {WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll"}, r = window.location, n = _() ? null : window.history, i = e(window), o = e(document), s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (R) {
                    window.setTimeout(R, 15)
                }, u = Ai.env("editor") ? ".w-editor-body" : "body", f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])", h = 'a[href="#"]', p = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")", y = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                T = document.createElement("style");
            T.appendChild(document.createTextNode(y));

            function _() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }

            var I = /^#[a-zA-Z0-9][\w:.-]*$/;

            function M(R) {
                return I.test(R.hash) && R.host + R.pathname === r.host + r.pathname
            }

            let S = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function N() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || S.matches
            }

            function A(R, g) {
                var L;
                switch (g) {
                    case"add":
                        L = R.attr("tabindex"), L ? R.attr("data-wf-tabindex-swap", L) : R.attr("tabindex", "-1");
                        break;
                    case"remove":
                        L = R.attr("data-wf-tabindex-swap"), L ? (R.attr("tabindex", L), R.removeAttr("data-wf-tabindex-swap")) : R.removeAttr("tabindex");
                        break
                }
                R.toggleClass("wf-force-outline-none", g === "add")
            }

            function D(R) {
                var g = R.currentTarget;
                if (!(Ai.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(g.className))) {
                    var L = M(g) ? g.hash : "";
                    if (L !== "") {
                        var F = e(L);
                        F.length && (R && (R.preventDefault(), R.stopPropagation()), q(L, R), window.setTimeout(function () {
                            P(F, function () {
                                A(F, "add"), F.get(0).focus({preventScroll: !0}), A(F, "remove")
                            })
                        }, R ? 0 : 300))
                    }
                }
            }

            function q(R) {
                if (r.hash !== R && n && n.pushState && !(Ai.env.chrome && r.protocol === "file:")) {
                    var g = n.state && n.state.hash;
                    g !== R && n.pushState({hash: R}, "", R)
                }
            }

            function P(R, g) {
                var L = i.scrollTop(), F = H(R);
                if (L !== F) {
                    var V = B(R, L, F), Z = Date.now(), J = function () {
                        var G = Date.now() - Z;
                        window.scroll(0, j(L, F, G, V)), G <= V ? a(J) : typeof g == "function" && g()
                    };
                    a(J)
                }
            }

            function H(R) {
                var g = e(f), L = g.css("position") === "fixed" ? g.outerHeight() : 0, F = R.offset().top - L;
                if (R.data("scroll") === "mid") {
                    var V = i.height() - L, Z = R.outerHeight();
                    Z < V && (F -= Math.round((V - Z) / 2))
                }
                return F
            }

            function B(R, g, L) {
                if (N()) return 0;
                var F = 1;
                return s.add(R).each(function (V, Z) {
                    var J = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (F = J)
                }), (472.143 * Math.log(Math.abs(g - L) + 125) - 2e3) * F
            }

            function j(R, g, L, F) {
                return L > F ? g : R + (g - R) * Q(L / F)
            }

            function Q(R) {
                return R < .5 ? 4 * R * R * R : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1
            }

            function U() {
                var {WF_CLICK_EMPTY: R, WF_CLICK_SCROLL: g} = t;
                o.on(g, p, D), o.on(R, h, function (L) {
                    L.preventDefault()
                }), document.head.insertBefore(T, document.head.firstChild)
            }

            return {ready: U}
        })
    });
    var q_ = c((Zj, P_) => {
        "use strict";
        var Ck = Ve();
        Ck.define("touch", P_.exports = function (e) {
            var t = {}, r = window.getSelection;
            e.event.special.tap = {bindType: "click", delegateType: "click"}, t.init = function (o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1, a = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), f, h;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", y, !1), o.addEventListener("touchend", T, !1), o.addEventListener("touchcancel", _, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", y, !1), o.addEventListener("mouseup", T, !1), o.addEventListener("mouseout", _, !1);

                function p(M) {
                    var S = M.touches;
                    S && S.length > 1 || (s = !0, S ? (a = !0, f = S[0].clientX) : f = M.clientX, h = f)
                }

                function y(M) {
                    if (s) {
                        if (a && M.type === "mousemove") {
                            M.preventDefault(), M.stopPropagation();
                            return
                        }
                        var S = M.touches, N = S ? S[0].clientX : M.clientX, A = N - h;
                        h = N, Math.abs(A) > u && r && String(r()) === "" && (i("swipe", M, {direction: A > 0 ? "right" : "left"}), _())
                    }
                }

                function T(M) {
                    if (s && (s = !1, a && M.type === "mouseup")) {
                        M.preventDefault(), M.stopPropagation(), a = !1;
                        return
                    }
                }

                function _() {
                    s = !1
                }

                function I() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", y, !1), o.removeEventListener("touchend", T, !1), o.removeEventListener("touchcancel", _, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", y, !1), o.removeEventListener("mouseup", T, !1), o.removeEventListener("mouseout", _, !1), o = null
                }

                this.destroy = I
            }

            function i(o, s, a) {
                var u = e.Event(o, {originalEvent: s});
                e(s.target).trigger(u, a)
            }

            return t.instance = t.init(document), t
        })
    });
    var M_ = c(As => {
        "use strict";
        Object.defineProperty(As, "__esModule", {value: !0});
        As.default = Rk;

        function Rk(e, t, r, n, i, o, s, a, u, f, h, p, y) {
            return function (T) {
                e(T);
                var _ = T.form, I = {
                    name: _.attr("data-name") || _.attr("name") || "Untitled Form",
                    pageId: _.attr("data-wf-page-id") || "",
                    elementId: _.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(_.html()),
                    trackingCookies: n()
                };
                let M = _.attr("data-wf-flow");
                M && (I.wfFlow = M), i(T);
                var S = o(_, I.fields);
                if (S) return s(S);
                if (I.fileUploads = a(_), u(T), !f) {
                    h(T);
                    return
                }
                p.ajax({url: y, type: "POST", data: I, dataType: "json", crossDomain: !0}).done(function (N) {
                    N && N.code === 200 && (T.success = !0), h(T)
                }).fail(function () {
                    h(T)
                })
            }
        }
    });
    var F_ = c((ez, D_) => {
        "use strict";
        var Si = Ve();
        Si.define("forms", D_.exports = function (e, t) {
            var r = {}, n = e(document), i, o = window.location, s = window.XDomainRequest && !window.atob, a = ".w-form", u, f = /e(-)?mail/i, h = /^\S+@\S+$/, p = window.alert, y = Si.env(), T, _, I, M = /list-manage[1-9]?.com/i, S = t.debounce(function () {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function () {
                N(), !y && !T && D()
            };

            function N() {
                u = e("html").attr("data-wf-site"), _ = "https://webflow.com/api/v1/form/" + u, s && _.indexOf("https://webflow.com") >= 0 && (_ = _.replace("https://webflow.com", "https://formdata.webflow.com")), I = `${_}/signFile`, i = e(a + " form"), i.length && i.each(A)
            }

            function A(G, W) {
                var d = e(W), E = e.data(W, a);
                E || (E = e.data(W, a, {form: d})), q(E);
                var m = d.closest("div.w-form");
                E.done = m.find("> .w-form-done"), E.fail = m.find("> .w-form-fail"), E.fileUploads = m.find(".w-file-upload"), E.fileUploads.each(function (z) {
                    V(z, E)
                });
                var v = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
                E.done.attr("aria-label") || E.form.attr("aria-label", v), E.done.attr("tabindex", "-1"), E.done.attr("role", "region"), E.done.attr("aria-label") || E.done.attr("aria-label", v + " success"), E.fail.attr("tabindex", "-1"), E.fail.attr("role", "region"), E.fail.attr("aria-label") || E.fail.attr("aria-label", v + " failure");
                var k = E.action = d.attr("action");
                if (E.handler = null, E.redirect = d.attr("data-redirect"), M.test(k)) {
                    E.handler = g;
                    return
                }
                if (!k) {
                    if (u) {
                        E.handler = (() => {
                            let z = M_().default;
                            return z(q, o, Si, Q, F, H, p, B, P, u, L, e, _)
                        })();
                        return
                    }
                    S()
                }
            }

            function D() {
                T = !0, n.on("submit", a + " form", function (z) {
                    var Y = e.data(this, a);
                    Y.handler && (Y.evt = z, Y.handler(Y))
                });
                let G = ".w-checkbox-input", W = ".w-radio-input", d = "w--redirected-checked", E = "w--redirected-focus", m = "w--redirected-focus-visible", v = ":focus-visible, [data-wf-focus-visible]", k = [["checkbox", G], ["radio", W]];
                n.on("change", a + ' form input[type="checkbox"]:not(' + G + ")", z => {
                    e(z.target).siblings(G).toggleClass(d)
                }), n.on("change", a + ' form input[type="radio"]', z => {
                    e(`input[name="${z.target.name}"]:not(${G})`).map((ae, be) => e(be).siblings(W).removeClass(d));
                    let Y = e(z.target);
                    Y.hasClass("w-radio-input") || Y.siblings(W).addClass(d)
                }), k.forEach(([z, Y]) => {
                    n.on("focus", a + ` form input[type="${z}"]:not(` + Y + ")", ae => {
                        e(ae.target).siblings(Y).addClass(E), e(ae.target).filter(v).siblings(Y).addClass(m)
                    }), n.on("blur", a + ` form input[type="${z}"]:not(` + Y + ")", ae => {
                        e(ae.target).siblings(Y).removeClass(`${E} ${m}`)
                    })
                })
            }

            function q(G) {
                var W = G.btn = G.form.find(':input[type="submit"]');
                G.wait = G.btn.attr("data-wait") || null, G.success = !1, W.prop("disabled", !1), G.label && W.val(G.label)
            }

            function P(G) {
                var W = G.btn, d = G.wait;
                W.prop("disabled", !0), d && (G.label = W.val(), W.val(d))
            }

            function H(G, W) {
                var d = null;
                return W = W || {}, G.find(':input:not([type="submit"]):not([type="file"])').each(function (E, m) {
                    var v = e(m), k = v.attr("type"), z = v.attr("data-name") || v.attr("name") || "Field " + (E + 1), Y = v.val();
                    if (k === "checkbox") Y = v.is(":checked"); else if (k === "radio") {
                        if (W[z] === null || typeof W[z] == "string") return;
                        Y = G.find('input[name="' + v.attr("name") + '"]:checked').val() || null
                    }
                    typeof Y == "string" && (Y = e.trim(Y)), W[z] = Y, d = d || U(v, k, z, Y)
                }), d
            }

            function B(G) {
                var W = {};
                return G.find(':input[type="file"]').each(function (d, E) {
                    var m = e(E), v = m.attr("data-name") || m.attr("name") || "File " + (d + 1), k = m.attr("data-value");
                    typeof k == "string" && (k = e.trim(k)), W[v] = k
                }), W
            }

            let j = {_mkto_trk: "marketo"};

            function Q() {
                return document.cookie.split("; ").reduce(function (W, d) {
                    let E = d.split("="), m = E[0];
                    if (m in j) {
                        let v = j[m], k = E.slice(1).join("=");
                        W[v] = k
                    }
                    return W
                }, {})
            }

            function U(G, W, d, E) {
                var m = null;
                return W === "password" ? m = "Passwords cannot be submitted." : G.attr("required") ? E ? f.test(G.attr("type")) && (h.test(E) || (m = "Please enter a valid email address for: " + d)) : m = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !E && (m = "Please confirm you\u2019re not a robot."), m
            }

            function R(G) {
                F(G), L(G)
            }

            function g(G) {
                q(G);
                var W = G.form, d = {};
                if (/^https/.test(o.href) && !/^https/.test(G.action)) {
                    W.attr("method", "post");
                    return
                }
                F(G);
                var E = H(W, d);
                if (E) return p(E);
                P(G);
                var m;
                t.each(d, function (Y, ae) {
                    f.test(ae) && (d.EMAIL = Y), /^((full[ _-]?)?name)$/i.test(ae) && (m = Y), /^(first[ _-]?name)$/i.test(ae) && (d.FNAME = Y), /^(last[ _-]?name)$/i.test(ae) && (d.LNAME = Y)
                }), m && !d.FNAME && (m = m.split(" "), d.FNAME = m[0], d.LNAME = d.LNAME || m[1]);
                var v = G.action.replace("/post?", "/post-json?") + "&c=?", k = v.indexOf("u=") + 2;
                k = v.substring(k, v.indexOf("&", k));
                var z = v.indexOf("id=") + 3;
                z = v.substring(z, v.indexOf("&", z)), d["b_" + k + "_" + z] = "", e.ajax({url: v, data: d, dataType: "jsonp"}).done(function (Y) {
                    G.success = Y.result === "success" || /already/.test(Y.msg), G.success || console.info("MailChimp error: " + Y.msg), L(G)
                }).fail(function () {
                    L(G)
                })
            }

            function L(G) {
                var W = G.form, d = G.redirect, E = G.success;
                if (E && d) {
                    Si.location(d);
                    return
                }
                G.done.toggle(E), G.fail.toggle(!E), E ? G.done.focus() : G.fail.focus(), W.toggle(!E), q(G)
            }

            function F(G) {
                G.evt && G.evt.preventDefault(), G.evt = null
            }

            function V(G, W) {
                if (!W.fileUploads || !W.fileUploads[G]) return;
                var d, E = e(W.fileUploads[G]), m = E.find("> .w-file-upload-default"), v = E.find("> .w-file-upload-uploading"), k = E.find("> .w-file-upload-success"), z = E.find("> .w-file-upload-error"), Y = m.find(".w-file-upload-input"), ae = m.find(".w-file-upload-label"), be = ae.children(),
                    se = z.find(".w-file-upload-error-msg"), pe = k.find(".w-file-upload-file"), Fe = k.find(".w-file-remove-link"), Ge = pe.find(".w-file-upload-file-name"), Ze = se.attr("data-w-size-error"), xe = se.attr("data-w-type-error"), lt = se.attr("data-w-generic-error");
                if (y || ae.on("click keydown", function (w) {
                    w.type === "keydown" && w.which !== 13 && w.which !== 32 || (w.preventDefault(), Y.click())
                }), ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), Fe.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), y) Y.on("click", function (w) {
                    w.preventDefault()
                }), ae.on("click", function (w) {
                    w.preventDefault()
                }), be.on("click", function (w) {
                    w.preventDefault()
                }); else {
                    Fe.on("click keydown", function (w) {
                        if (w.type === "keydown") {
                            if (w.which !== 13 && w.which !== 32) return;
                            w.preventDefault()
                        }
                        Y.removeAttr("data-value"), Y.val(""), Ge.html(""), m.toggle(!0), k.toggle(!1), ae.focus()
                    }), Y.on("change", function (w) {
                        d = w.target && w.target.files && w.target.files[0], d && (m.toggle(!1), z.toggle(!1), v.toggle(!0), v.focus(), Ge.text(d.name), x() || P(W), W.fileUploads[G].uploading = !0, Z(d, b))
                    });
                    var Vt = ae.outerHeight();
                    Y.height(Vt), Y.width(1)
                }

                function l(w) {
                    var C = w.responseJSON && w.responseJSON.msg, K = lt;
                    typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0 ? K = xe : typeof C == "string" && C.indexOf("MaxFileSizeError") === 0 && (K = Ze), se.text(K), Y.removeAttr("data-value"), Y.val(""), v.toggle(!1), m.toggle(!0), z.toggle(!0), z.focus(), W.fileUploads[G].uploading = !1, x() || q(W)
                }

                function b(w, C) {
                    if (w) return l(w);
                    var K = C.fileName, te = C.postData, le = C.fileId, X = C.s3Url;
                    Y.attr("data-value", le), J(X, te, d, K, O)
                }

                function O(w) {
                    if (w) return l(w);
                    v.toggle(!1), k.css("display", "inline-block"), k.focus(), W.fileUploads[G].uploading = !1, x() || q(W)
                }

                function x() {
                    var w = W.fileUploads && W.fileUploads.toArray() || [];
                    return w.some(function (C) {
                        return C.uploading
                    })
                }
            }

            function Z(G, W) {
                var d = new URLSearchParams({name: G.name, size: G.size});
                e.ajax({type: "GET", url: `${I}?${d}`, crossDomain: !0}).done(function (E) {
                    W(null, E)
                }).fail(function (E) {
                    W(E)
                })
            }

            function J(G, W, d, E, m) {
                var v = new FormData;
                for (var k in W) v.append(k, W[k]);
                v.append("file", d, E), e.ajax({type: "POST", url: G, data: v, processData: !1, contentType: !1}).done(function () {
                    m(null)
                }).fail(function (z) {
                    m(z)
                })
            }

            return r
        })
    });
    var U_ = c((tz, V_) => {
        "use strict";
        var xt = Ve(), Lk = ln(), ct = {ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35}, G_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        xt.define("slider", V_.exports = function (e, t) {
            var r = {}, n = e.tram, i = e(document), o, s, a = xt.env(), u = ".w-slider", f = '<div class="w-slider-dot" data-wf-ignore />', h = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', p = "w-slider-force-show", y = Lk.triggers, T, _ = !1;
            r.ready = function () {
                s = xt.env("design"), I()
            }, r.design = function () {
                s = !0, setTimeout(I, 1e3)
            }, r.preview = function () {
                s = !1, I()
            }, r.redraw = function () {
                _ = !0, I(), _ = !1
            }, r.destroy = M;

            function I() {
                o = i.find(u), o.length && (o.each(A), !T && (M(), S()))
            }

            function M() {
                xt.resize.off(N), xt.redraw.off(r.redraw)
            }

            function S() {
                xt.resize.on(N), xt.redraw.on(r.redraw)
            }

            function N() {
                o.filter(":visible").each(V)
            }

            function A(d, E) {
                var m = e(E), v = e.data(E, u);
                v || (v = e.data(E, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {keyboard: !1, mouse: !1},
                    el: m,
                    config: {}
                })), v.mask = m.children(".w-slider-mask"), v.left = m.children(".w-slider-arrow-left"), v.right = m.children(".w-slider-arrow-right"), v.nav = m.children(".w-slider-nav"), v.slides = v.mask.children(".w-slide"), v.slides.each(y.reset), _ && (v.maskWidth = 0), m.attr("role") === void 0 && m.attr("role", "region"), m.attr("aria-label") === void 0 && m.attr("aria-label", "carousel");
                var k = v.mask.attr("id");
                if (k || (k = "w-slider-mask-" + d, v.mask.attr("id", k)), !s && !v.ariaLiveLabel && (v.ariaLiveLabel = e(h).appendTo(v.mask)), v.left.attr("role", "button"), v.left.attr("tabindex", "0"), v.left.attr("aria-controls", k), v.left.attr("aria-label") === void 0 && v.left.attr("aria-label", "previous slide"), v.right.attr("role", "button"), v.right.attr("tabindex", "0"), v.right.attr("aria-controls", k), v.right.attr("aria-label") === void 0 && v.right.attr("aria-label", "next slide"), !n.support.transform) {
                    v.left.hide(), v.right.hide(), v.nav.hide(), T = !0;
                    return
                }
                v.el.off(u), v.left.off(u), v.right.off(u), v.nav.off(u), D(v), s ? (v.el.on("setting" + u, g(v)), R(v), v.hasTimer = !1) : (v.el.on("swipe" + u, g(v)), v.left.on("click" + u, B(v)), v.right.on("click" + u, j(v)), v.left.on("keydown" + u, H(v, B)), v.right.on("keydown" + u, H(v, j)), v.nav.on("keydown" + u, "> div", g(v)), v.config.autoplay && !v.hasTimer && (v.hasTimer = !0, v.timerCount = 1, U(v)), v.el.on("mouseenter" + u, P(v, !0, "mouse")), v.el.on("focusin" + u, P(v, !0, "keyboard")), v.el.on("mouseleave" + u, P(v, !1, "mouse")), v.el.on("focusout" + u, P(v, !1, "keyboard"))), v.nav.on("click" + u, "> div", g(v)), a || v.mask.contents().filter(function () {
                    return this.nodeType === 3
                }).remove();
                var z = m.filter(":hidden");
                z.addClass(p);
                var Y = m.parents(":hidden");
                Y.addClass(p), _ || V(d, E), z.removeClass(p), Y.removeClass(p)
            }

            function D(d) {
                var E = {};
                E.crossOver = 0, E.animation = d.el.attr("data-animation") || "slide", E.animation === "outin" && (E.animation = "cross", E.crossOver = .5), E.easing = d.el.attr("data-easing") || "ease";
                var m = d.el.attr("data-duration");
                if (E.duration = m != null ? parseInt(m, 10) : 500, q(d.el.attr("data-infinite")) && (E.infinite = !0), q(d.el.attr("data-disable-swipe")) && (E.disableSwipe = !0), q(d.el.attr("data-hide-arrows")) ? E.hideArrows = !0 : d.config.hideArrows && (d.left.show(), d.right.show()), q(d.el.attr("data-autoplay"))) {
                    E.autoplay = !0, E.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3, E.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var v = "mousedown" + u + " touchstart" + u;
                    s || d.el.off(v).one(v, function () {
                        R(d)
                    })
                }
                var k = d.right.width();
                E.edge = k ? k + 40 : 100, d.config = E
            }

            function q(d) {
                return d === "1" || d === "true"
            }

            function P(d, E, m) {
                return function (v) {
                    if (E) d.hasFocus[m] = E; else if (e.contains(d.el.get(0), v.relatedTarget) || (d.hasFocus[m] = E, d.hasFocus.mouse && m === "keyboard" || d.hasFocus.keyboard && m === "mouse")) return;
                    E ? (d.ariaLiveLabel.attr("aria-live", "polite"), d.hasTimer && R(d)) : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && U(d))
                }
            }

            function H(d, E) {
                return function (m) {
                    switch (m.keyCode) {
                        case ct.SPACE:
                        case ct.ENTER:
                            return E(d)(), m.preventDefault(), m.stopPropagation()
                    }
                }
            }

            function B(d) {
                return function () {
                    F(d, {index: d.index - 1, vector: -1})
                }
            }

            function j(d) {
                return function () {
                    F(d, {index: d.index + 1, vector: 1})
                }
            }

            function Q(d, E) {
                var m = null;
                E === d.slides.length && (I(), Z(d)), t.each(d.anchors, function (v, k) {
                    e(v.els).each(function (z, Y) {
                        e(Y).index() === E && (m = k)
                    })
                }), m != null && F(d, {index: m, immediate: !0})
            }

            function U(d) {
                R(d);
                var E = d.config, m = E.timerMax;
                m && d.timerCount++ > m || (d.timerId = window.setTimeout(function () {
                    d.timerId == null || s || (j(d)(), U(d))
                }, E.delay))
            }

            function R(d) {
                window.clearTimeout(d.timerId), d.timerId = null
            }

            function g(d) {
                return function (E, m) {
                    m = m || {};
                    var v = d.config;
                    if (s && E.type === "setting") {
                        if (m.select === "prev") return B(d)();
                        if (m.select === "next") return j(d)();
                        if (D(d), Z(d), m.select == null) return;
                        Q(d, m.select);
                        return
                    }
                    if (E.type === "swipe") return v.disableSwipe || xt.env("editor") ? void 0 : m.direction === "left" ? j(d)() : m.direction === "right" ? B(d)() : void 0;
                    if (d.nav.has(E.target).length) {
                        var k = e(E.target).index();
                        if (E.type === "click" && F(d, {index: k}), E.type === "keydown") switch (E.keyCode) {
                            case ct.ENTER:
                            case ct.SPACE: {
                                F(d, {index: k}), E.preventDefault();
                                break
                            }
                            case ct.ARROW_LEFT:
                            case ct.ARROW_UP: {
                                L(d.nav, Math.max(k - 1, 0)), E.preventDefault();
                                break
                            }
                            case ct.ARROW_RIGHT:
                            case ct.ARROW_DOWN: {
                                L(d.nav, Math.min(k + 1, d.pages)), E.preventDefault();
                                break
                            }
                            case ct.HOME: {
                                L(d.nav, 0), E.preventDefault();
                                break
                            }
                            case ct.END: {
                                L(d.nav, d.pages), E.preventDefault();
                                break
                            }
                            default:
                                return
                        }
                    }
                }
            }

            function L(d, E) {
                var m = d.children().eq(E).focus();
                d.children().not(m)
            }

            function F(d, E) {
                E = E || {};
                var m = d.config, v = d.anchors;
                d.previous = d.index;
                var k = E.index, z = {};
                k < 0 ? (k = v.length - 1, m.infinite && (z.x = -d.endX, z.from = 0, z.to = v[0].width)) : k >= v.length && (k = 0, m.infinite && (z.x = v[v.length - 1].width, z.from = -v[v.length - 1].x, z.to = z.from - z.x)), d.index = k;
                var Y = d.nav.children().eq(k).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(Y).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), m.hideArrows && (d.index === v.length - 1 ? d.right.hide() : d.right.show(), d.index === 0 ? d.left.hide() : d.left.show());
                var ae = d.offsetX || 0, be = d.offsetX = -v[d.index].x, se = {x: be, opacity: 1, visibility: ""}, pe = e(v[d.index].els), Fe = e(v[d.previous] && v[d.previous].els), Ge = d.slides.not(pe), Ze = m.animation, xe = m.easing, lt = Math.round(m.duration),
                    Vt = E.vector || (d.index > d.previous ? 1 : -1), l = "opacity " + lt + "ms " + xe, b = "transform " + lt + "ms " + xe;
                if (pe.find(G_).removeAttr("tabindex"), pe.removeAttr("aria-hidden"), pe.find("*").removeAttr("aria-hidden"), Ge.find(G_).attr("tabindex", "-1"), Ge.attr("aria-hidden", "true"), Ge.find("*").attr("aria-hidden", "true"), s || (pe.each(y.intro), Ge.each(y.outro)), E.immediate && !_) {
                    n(pe).set(se), w();
                    return
                }
                if (d.index === d.previous) return;
                if (s || d.ariaLiveLabel.text(`Slide ${k + 1} of ${v.length}.`), Ze === "cross") {
                    var O = Math.round(lt - lt * m.crossOver), x = Math.round(lt - O);
                    l = "opacity " + O + "ms " + xe, n(Fe).set({visibility: ""}).add(l).start({opacity: 0}), n(pe).set({visibility: "", x: be, opacity: 0, zIndex: d.depth++}).add(l).wait(x).then({opacity: 1}).then(w);
                    return
                }
                if (Ze === "fade") {
                    n(Fe).set({visibility: ""}).stop(), n(pe).set({visibility: "", x: be, opacity: 0, zIndex: d.depth++}).add(l).start({opacity: 1}).then(w);
                    return
                }
                if (Ze === "over") {
                    se = {x: d.endX}, n(Fe).set({visibility: ""}).stop(), n(pe).set({visibility: "", zIndex: d.depth++, x: be + v[d.index].width * Vt}).add(b).start({x: be}).then(w);
                    return
                }
                m.infinite && z.x ? (n(d.slides.not(Fe)).set({visibility: "", x: z.x}).add(b).start({x: be}), n(Fe).set({visibility: "", x: z.from}).add(b).start({x: z.to}), d.shifted = Fe) : (m.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: ae
                }), d.shifted = null), n(d.slides).set({visibility: ""}).add(b).start({x: be}));

                function w() {
                    pe = e(v[d.index].els), Ge = d.slides.not(pe), Ze !== "slide" && (se.visibility = "hidden"), n(Ge).set(se)
                }
            }

            function V(d, E) {
                var m = e.data(E, u);
                if (m) {
                    if (G(m)) return Z(m);
                    s && W(m) && Z(m)
                }
            }

            function Z(d) {
                var E = 1, m = 0, v = 0, k = 0, z = d.maskWidth, Y = z - d.config.edge;
                Y < 0 && (Y = 0), d.anchors = [{els: [], x: 0, width: 0}], d.slides.each(function (be, se) {
                    v - m > Y && (E++, m += z, d.anchors[E - 1] = {els: [], x: v, width: 0}), k = e(se).outerWidth(!0), v += k, d.anchors[E - 1].width += k, d.anchors[E - 1].els.push(se);
                    var pe = be + 1 + " of " + d.slides.length;
                    e(se).attr("aria-label", pe), e(se).attr("role", "group")
                }), d.endX = v, s && (d.pages = null), d.nav.length && d.pages !== E && (d.pages = E, J(d));
                var ae = d.index;
                ae >= E && (ae = E - 1), F(d, {immediate: !0, index: ae})
            }

            function J(d) {
                var E = [], m, v = d.el.attr("data-nav-spacing");
                v && (v = parseFloat(v) + "px");
                for (var k = 0, z = d.pages; k < z; k++) m = e(f), m.attr("aria-label", "Show slide " + (k + 1) + " of " + z).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), d.nav.hasClass("w-num") && m.text(k + 1), v != null && m.css({
                    "margin-left": v,
                    "margin-right": v
                }), E.push(m);
                d.nav.empty().append(E)
            }

            function G(d) {
                var E = d.mask.width();
                return d.maskWidth !== E ? (d.maskWidth = E, !0) : !1
            }

            function W(d) {
                var E = 0;
                return d.slides.each(function (m, v) {
                    E += e(v).outerWidth(!0)
                }), d.slidesWidth !== E ? (d.slidesWidth = E, !0) : !1
            }

            return r
        })
    });
    var X_ = c((rz, k_) => {
        "use strict";
        var At = Ve(), Nk = ln();
        At.define("tabs", k_.exports = function (e) {
            var t = {}, r = e.tram, n = e(document), i, o, s = At.env, a = s.safari, u = s(), f = "data-w-tab", h = "data-w-pane", p = ".w-tabs", y = "w--current", T = "w--tab-active", _ = Nk.triggers, I = !1;
            t.ready = t.design = t.preview = M, t.redraw = function () {
                I = !0, M(), I = !1
            }, t.destroy = function () {
                i = n.find(p), i.length && (i.each(A), S())
            };

            function M() {
                o = u && At.env("design"), i = n.find(p), i.length && (i.each(D), At.env("preview") && !I && i.each(A), S(), N())
            }

            function S() {
                At.redraw.off(t.redraw)
            }

            function N() {
                At.redraw.on(t.redraw)
            }

            function A(U, R) {
                var g = e.data(R, p);
                g && (g.links && g.links.each(_.reset), g.panes && g.panes.each(_.reset))
            }

            function D(U, R) {
                var g = p.substr(1) + "-" + U, L = e(R), F = e.data(R, p);
                if (F || (F = e.data(R, p, {
                    el: L,
                    config: {}
                })), F.current = null, F.tabIdentifier = g + "-" + f, F.paneIdentifier = g + "-" + h, F.menu = L.children(".w-tab-menu"), F.links = F.menu.children(".w-tab-link"), F.content = L.children(".w-tab-content"), F.panes = F.content.children(".w-tab-pane"), F.el.off(p), F.links.off(p), F.menu.attr("role", "tablist"), F.links.attr("tabindex", "-1"), q(F), !o) {
                    F.links.on("click" + p, H(F)), F.links.on("keydown" + p, B(F));
                    var V = F.links.filter("." + y), Z = V.attr(f);
                    Z && j(F, {tab: Z, immediate: !0})
                }
            }

            function q(U) {
                var R = {};
                R.easing = U.el.attr("data-easing") || "ease";
                var g = parseInt(U.el.attr("data-duration-in"), 10);
                g = R.intro = g === g ? g : 0;
                var L = parseInt(U.el.attr("data-duration-out"), 10);
                L = R.outro = L === L ? L : 0, R.immediate = !g && !L, U.config = R
            }

            function P(U) {
                var R = U.current;
                return Array.prototype.findIndex.call(U.links, g => g.getAttribute(f) === R, null)
            }

            function H(U) {
                return function (R) {
                    R.preventDefault();
                    var g = R.currentTarget.getAttribute(f);
                    g && j(U, {tab: g})
                }
            }

            function B(U) {
                return function (R) {
                    var g = P(U), L = R.key, F = {ArrowLeft: g - 1, ArrowUp: g - 1, ArrowRight: g + 1, ArrowDown: g + 1, End: U.links.length - 1, Home: 0};
                    if (L in F) {
                        R.preventDefault();
                        var V = F[L];
                        V === -1 && (V = U.links.length - 1), V === U.links.length && (V = 0);
                        var Z = U.links[V], J = Z.getAttribute(f);
                        J && j(U, {tab: J})
                    }
                }
            }

            function j(U, R) {
                R = R || {};
                var g = U.config, L = g.easing, F = R.tab;
                if (F !== U.current) {
                    U.current = F;
                    var V;
                    U.links.each(function (m, v) {
                        var k = e(v);
                        if (R.immediate || g.immediate) {
                            var z = U.panes[m];
                            v.id || (v.id = U.tabIdentifier + "-" + m), z.id || (z.id = U.paneIdentifier + "-" + m), v.href = "#" + z.id, v.setAttribute("role", "tab"), v.setAttribute("aria-controls", z.id), v.setAttribute("aria-selected", "false"), z.setAttribute("role", "tabpanel"), z.setAttribute("aria-labelledby", v.id)
                        }
                        v.getAttribute(f) === F ? (V = v, k.addClass(y).removeAttr("tabindex").attr({"aria-selected": "true"}).each(_.intro)) : k.hasClass(y) && k.removeClass(y).attr({tabindex: "-1", "aria-selected": "false"}).each(_.outro)
                    });
                    var Z = [], J = [];
                    U.panes.each(function (m, v) {
                        var k = e(v);
                        v.getAttribute(f) === F ? Z.push(v) : k.hasClass(T) && J.push(v)
                    });
                    var G = e(Z), W = e(J);
                    if (R.immediate || g.immediate) {
                        G.addClass(T).each(_.intro), W.removeClass(T), I || At.redraw.up();
                        return
                    } else {
                        var d = window.scrollX, E = window.scrollY;
                        V.focus(), window.scrollTo(d, E)
                    }
                    W.length && g.outro ? (W.each(_.outro), r(W).add("opacity " + g.outro + "ms " + L, {fallback: a}).start({opacity: 0}).then(() => Q(g, W, G))) : Q(g, W, G)
                }
            }

            function Q(U, R, g) {
                if (R.removeClass(T).css({opacity: "", transition: "", transform: "", width: "", height: ""}), g.addClass(T).each(_.intro), At.redraw.up(), !U.intro) return r(g).set({opacity: 1});
                r(g).set({opacity: 0}).redraw().add("opacity " + U.intro + "ms " + U.easing, {fallback: a}).start({opacity: 1})
            }

            return t
        })
    });
    Cs();
    Rs();
    Ws();
    Bs();
    zs();
    $s();
    ln();
    S_();
    R_();
    N_();
    q_();
    F_();
    U_();
    X_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init(
    {
        "events": {
            "e": {
                "id": "e",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-6", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-2"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".home-hero-section", "originalId": "655b3d9644c731751d03fd2d|2d6f2012-fb07-721e-5d2e-cc1abedc7422", "appliesTo": "CLASS"},
                "targets": [{"id": "655b3d9644c731751d03fd2d|2d6f2012-fb07-721e-5d2e-cc1abedc7422", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700491235566
            },
            "e-3": {
                "id": "e-3",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_MOVE",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-7", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main"],
                "target": {"id": "655b3d9644c731751d03fd2d|139cbf05-fb9a-3e08-4bab-4c14185d0cf3", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "655b3d9644c731751d03fd2d|139cbf05-fb9a-3e08-4bab-4c14185d0cf3", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": [{"continuousParameterGroupId": "a-7-p", "selectedAxis": "X_AXIS", "basedOn": "ELEMENT", "reverse": false, "smoothing": 90, "restingState": 50}, {
                    "continuousParameterGroupId": "a-7-p-2",
                    "selectedAxis": "Y_AXIS",
                    "basedOn": "ELEMENT",
                    "reverse": false,
                    "smoothing": 90,
                    "restingState": 50
                }],
                "createdOn": 1700651336589
            },
            "e-4": {
                "id": "e-4",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-8", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-5"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".work-item-link", "originalId": "655b3d9644c731751d03fd2d|07b913a2-892a-bd6e-371a-a0d53d719d61", "appliesTo": "CLASS"},
                "targets": [{"selector": ".work-item-link", "originalId": "655b3d9644c731751d03fd2d|07b913a2-892a-bd6e-371a-a0d53d719d61", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700658393890
            },
            "e-5": {
                "id": "e-5",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OUT",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-9", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-4"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".work-item-link", "originalId": "655b3d9644c731751d03fd2d|07b913a2-892a-bd6e-371a-a0d53d719d61", "appliesTo": "CLASS"},
                "targets": [{"selector": ".work-item-link", "originalId": "655b3d9644c731751d03fd2d|07b913a2-892a-bd6e-371a-a0d53d719d61", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700658393890
            },
            "e-9": {
                "id": "e-9",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLLING_IN_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-16", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main", "medium"],
                "target": {"id": "8c3589e1-b747-5f8f-73ad-ab548a4d295c", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "8c3589e1-b747-5f8f-73ad-ab548a4d295c", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": [{"continuousParameterGroupId": "a-16-p", "smoothing": 50, "startsEntering": false, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50}],
                "createdOn": 1700745432979
            },
            "e-10": {
                "id": "e-10",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLLING_IN_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-16", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "8c3589e1-b747-5f8f-73ad-ab548a4d2960", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "8c3589e1-b747-5f8f-73ad-ab548a4d2960", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": [{"continuousParameterGroupId": "a-16-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50}],
                "createdOn": 1700746399163
            },
            "e-11": {
                "id": "e-11",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-17", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-12"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".menu-link", "originalId": "3628c81d-de61-4c7d-9e66-d7d85fd68242", "appliesTo": "CLASS"},
                "targets": [{"selector": ".menu-link", "originalId": "3628c81d-de61-4c7d-9e66-d7d85fd68242", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700747551183
            },
            "e-12": {
                "id": "e-12",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OUT",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-18", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-11"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".menu-link", "originalId": "3628c81d-de61-4c7d-9e66-d7d85fd68242", "appliesTo": "CLASS"},
                "targets": [{"selector": ".menu-link", "originalId": "3628c81d-de61-4c7d-9e66-d7d85fd68242", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700747551183
            },
            "e-13": {
                "id": "e-13",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-19", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-14"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "3628c81d-de61-4c7d-9e66-d7d85fd68238", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "3628c81d-de61-4c7d-9e66-d7d85fd68238", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700747973297
            },
            "e-14": {
                "id": "e-14",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_SECOND_CLICK",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-20", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-13"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "3628c81d-de61-4c7d-9e66-d7d85fd68238", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "3628c81d-de61-4c7d-9e66-d7d85fd68238", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700747973298
            },
            "e-15": {
                "id": "e-15",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-21", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-16"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "3628c81d-de61-4c7d-9e66-d7d85fd68233", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "3628c81d-de61-4c7d-9e66-d7d85fd68233", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1700749439835
            },
            "e-19": {
                "id": "e-19",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-22", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-20"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".footer-callout-link", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c71d", "appliesTo": "CLASS"},
                "targets": [{"selector": ".footer-callout-link", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c71d", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701089523151
            },
            "e-20": {
                "id": "e-20",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OUT",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-23", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-19"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".footer-callout-link", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c71d", "appliesTo": "CLASS"},
                "targets": [{"selector": ".footer-callout-link", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c71d", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701089523151
            },
            "e-21": {
                "id": "e-21",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "PAGE_SCROLL_UP",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-24", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-22"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655b3d9644c731751d03fd2d", "appliesTo": "PAGE", "styleBlockIds": []},
                "targets": [{"id": "655b3d9644c731751d03fd2d", "appliesTo": "PAGE", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701091030438
            },
            "e-22": {
                "id": "e-22",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "PAGE_SCROLL_DOWN",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-21"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655b3d9644c731751d03fd2d", "appliesTo": "PAGE", "styleBlockIds": []},
                "targets": [{"id": "655b3d9644c731751d03fd2d", "appliesTo": "PAGE", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701091030439
            },
            "e-23": {
                "id": "e-23",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLLING_IN_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-26", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".footer-component", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c6f0", "appliesTo": "CLASS"},
                "targets": [{"selector": ".footer-component", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c6f0", "appliesTo": "CLASS"}],
                "config": [{"continuousParameterGroupId": "a-26-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50}],
                "createdOn": 1701091207065
            },
            "e-24": {
                "id": "e-24",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-27", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-25"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".footer-component", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c6f0", "appliesTo": "CLASS"},
                "targets": [{"selector": ".footer-component", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c6f0", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701091348900
            },
            "e-25": {
                "id": "e-25",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_OUT_OF_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-28", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-24"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".footer-component", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c6f0", "appliesTo": "CLASS"},
                "targets": [{"selector": ".footer-component", "originalId": "59f26e96-4d79-b720-d10c-bfae8cd6c6f0", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701091348900
            },
            "e-26": {
                "id": "e-26",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-27"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655b3d9644c731751d03fd2d|2aab24f2-af52-9179-b666-f16745f4a245", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "655b3d9644c731751d03fd2d|2aab24f2-af52-9179-b666-f16745f4a245", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701098330522
            },
            "e-28": {
                "id": "e-28",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_CLICK",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-29"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655b3d9644c731751d03fd2d|27ad4538-40ac-356c-9029-2293805c0981", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "655b3d9644c731751d03fd2d|27ad4538-40ac-356c-9029-2293805c0981", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701098480898
            },
            "e-30": {
                "id": "e-30",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-31", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-31"}},
                "mediaQueries": ["small", "tiny"],
                "target": {"selector": ".home-hero-section", "originalId": "655b3d9644c731751d03fd2d|2d6f2012-fb07-721e-5d2e-cc1abedc7422", "appliesTo": "CLASS"},
                "targets": [{"selector": ".home-hero-section", "originalId": "655b3d9644c731751d03fd2d|2d6f2012-fb07-721e-5d2e-cc1abedc7422", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701102001809
            },
            "e-32": {
                "id": "e-32",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-33"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".work-item-list", "originalId": "6565c157182c5abc88339475|fd8c6e0e-5e1c-5122-06d2-0bba277bb0e1", "appliesTo": "CLASS"},
                "targets": [{"selector": ".work-item-list", "originalId": "6565c157182c5abc88339475|fd8c6e0e-5e1c-5122-06d2-0bba277bb0e1", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701279211320
            },
            "e-33": {
                "id": "e-33",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OUT",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-35", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-32"}},
                "mediaQueries": ["main", "medium"],
                "target": {"selector": ".work-item-list", "originalId": "6565c157182c5abc88339475|fd8c6e0e-5e1c-5122-06d2-0bba277bb0e1", "appliesTo": "CLASS"},
                "targets": [{"selector": ".work-item-list", "originalId": "6565c157182c5abc88339475|fd8c6e0e-5e1c-5122-06d2-0bba277bb0e1", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701279211321
            },
            "e-34": {
                "id": "e-34",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-36", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-35"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "6565c157182c5abc88339475|541d9ef2-6153-9aea-600b-8b33fd2901d6", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "6565c157182c5abc88339475|541d9ef2-6153-9aea-600b-8b33fd2901d6", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": -10000, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701281150190
            },
            "e-36": {
                "id": "e-36",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-37", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-37"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "e39efb05-b89b-27a2-2a44-e61d4d74f4c3", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "e39efb05-b89b-27a2-2a44-e61d4d74f4c3", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701355823766
            },
            "e-37": {
                "id": "e-37",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OUT",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-38", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-36"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "e39efb05-b89b-27a2-2a44-e61d4d74f4c3", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "e39efb05-b89b-27a2-2a44-e61d4d74f4c3", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701355823767
            },
            "e-38": {
                "id": "e-38",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OVER",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-39", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-39"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".gallery-item", "originalId": "65689c732623c1b3526f1cb6|719dacbc-05ce-01fe-f619-c1a7aa7ee387", "appliesTo": "CLASS"},
                "targets": [{"selector": ".gallery-item", "originalId": "65689c732623c1b3526f1cb6|719dacbc-05ce-01fe-f619-c1a7aa7ee387", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701357123750
            },
            "e-39": {
                "id": "e-39",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "MOUSE_OUT",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-40", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-38"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".gallery-item", "originalId": "65689c732623c1b3526f1cb6|719dacbc-05ce-01fe-f619-c1a7aa7ee387", "appliesTo": "CLASS"},
                "targets": [{"selector": ".gallery-item", "originalId": "65689c732623c1b3526f1cb6|719dacbc-05ce-01fe-f619-c1a7aa7ee387", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701357123750
            },
            "e-40": {
                "id": "e-40",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLLING_IN_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-41", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "65689c732623c1b3526f1cb6|07e52ca2-cf86-1914-1965-52b9d392af1c", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "65689c732623c1b3526f1cb6|07e52ca2-cf86-1914-1965-52b9d392af1c", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": [{"continuousParameterGroupId": "a-41-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50}],
                "createdOn": 1701357334156
            },
            "e-41": {
                "id": "e-41",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-42", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-42"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".row-item", "originalId": "65689c732623c1b3526f1cb6|c8acf93e-8816-0a6b-ff8a-f8e524528ef5", "appliesTo": "CLASS"},
                "targets": [{"selector": ".row-item", "originalId": "65689c732623c1b3526f1cb6|c8acf93e-8816-0a6b-ff8a-f8e524528ef5", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 15, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701359039633
            },
            "e-43": {
                "id": "e-43",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "PAGE_SCROLL_UP",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-24", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-44"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "65689c732623c1b3526f1cb6", "appliesTo": "PAGE", "styleBlockIds": []},
                "targets": [{"id": "65689c732623c1b3526f1cb6", "appliesTo": "PAGE", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701364469463
            },
            "e-44": {
                "id": "e-44",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "PAGE_SCROLL_DOWN",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-43"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "65689c732623c1b3526f1cb6", "appliesTo": "PAGE", "styleBlockIds": []},
                "targets": [{"id": "65689c732623c1b3526f1cb6", "appliesTo": "PAGE", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701364469464
            },
            "e-45": {
                "id": "e-45",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-43", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-46"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "65689c732623c1b3526f1cb6|40e151f1-377f-d50c-20fb-efe591632f9a", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "65689c732623c1b3526f1cb6|40e151f1-377f-d50c-20fb-efe591632f9a", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": -1000, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701364966004
            },
            "e-47": {
                "id": "e-47",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLLING_IN_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-44", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655df483588482136d94dd6a|7c55d374-fbe7-3811-56fe-fa0c74f5060d", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "655df483588482136d94dd6a|7c55d374-fbe7-3811-56fe-fa0c74f5060d", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": [{"continuousParameterGroupId": "a-44-p", "smoothing": 50, "startsEntering": false, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50}],
                "createdOn": 1701427663719
            },
            "e-48": {
                "id": "e-48",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLLING_IN_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": {"actionListId": "a-45", "affectedElements": {}, "duration": 0}},
                "mediaQueries": ["main", "medium"],
                "target": {"id": "655df483588482136d94dd6a|4ce2541f-5751-d08a-08eb-ec96e41f1bfe", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "655df483588482136d94dd6a|4ce2541f-5751-d08a-08eb-ec96e41f1bfe", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": [{"continuousParameterGroupId": "a-45-p", "smoothing": 50, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50}],
                "createdOn": 1701436124707
            },
            "e-49": {
                "id": "e-49",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-46", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-50"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655df483588482136d94dd6a|7c55d374-fbe7-3811-56fe-fa0c74f5060d", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "655df483588482136d94dd6a|7c55d374-fbe7-3811-56fe-fa0c74f5060d", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": -1000, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701438846489
            },
            "e-51": {
                "id": "e-51",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "PAGE_SCROLL_UP",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-24", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-52"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655df483588482136d94dd6a", "appliesTo": "PAGE", "styleBlockIds": []},
                "targets": [{"id": "655df483588482136d94dd6a", "appliesTo": "PAGE", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701439688898
            },
            "e-52": {
                "id": "e-52",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "PAGE_SCROLL_DOWN",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-25", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-51"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "655df483588482136d94dd6a", "appliesTo": "PAGE", "styleBlockIds": []},
                "targets": [{"id": "655df483588482136d94dd6a", "appliesTo": "PAGE", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701439688899
            },
            "e-53": {
                "id": "e-53",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-47", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-54"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"id": "6569f1e7fc28d471d67f9bfd|00c8cd0f-9906-512b-c417-e44929526742", "appliesTo": "ELEMENT", "styleBlockIds": []},
                "targets": [{"id": "6569f1e7fc28d471d67f9bfd|00c8cd0f-9906-512b-c417-e44929526742", "appliesTo": "ELEMENT", "styleBlockIds": []}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701448727490
            },
            "e-55": {
                "id": "e-55",
                "name": "",
                "animationType": "custom",
                "eventTypeId": "SCROLL_INTO_VIEW",
                "action": {"id": "", "actionTypeId": "GENERAL_START_ACTION", "config": {"delay": 0, "easing": "", "duration": 0, "actionListId": "a-2", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-56"}},
                "mediaQueries": ["main", "medium", "small", "tiny"],
                "target": {"selector": ".bio-span-img", "originalId": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4", "appliesTo": "CLASS"},
                "targets": [{"selector": ".bio-span-img", "originalId": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4", "appliesTo": "CLASS"}],
                "config": {"loop": false, "playInReverse": false, "scrollOffsetValue": 10, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null},
                "createdOn": 1701682678807
            }
        }, "actionLists": {
            "a-6": {
                "id": "a-6", "title": "Home Hero Desktop - In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".home-hero-right-heading-wrap", "selectorGuids": ["44d7fe05-cdda-2b64-b841-97dc90bb3fd2"]}, "xValue": -55, "xUnit": "%", "yUnit": "PX", "zUnit": "PX"}
                    }, {
                        "id": "a-6-n-17",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute.hero", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2", "95f92118-e4d4-e624-ac9b-8de50e1aba4d"]},
                            "xValue": 1.25,
                            "yValue": 1.25,
                            "locked": true
                        }
                    }, {
                        "id": "a-6-n-13",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".home-hero-img-wrap", "selectorGuids": ["fc240d0f-3799-c5a7-409b-25864d7cca0c"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-6-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-24",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-6-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-28",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]}, "value": 0, "unit": ""}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 300,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 500,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 600,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 1100,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".home-hero-right-heading-wrap", "selectorGuids": ["44d7fe05-cdda-2b64-b841-97dc90bb3fd2"]},
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 1500,
                            "easing": "outCubic",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-14",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 1500, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".home-hero-img-wrap", "selectorGuids": ["fc240d0f-3799-c5a7-409b-25864d7cca0c"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-6-n-18",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 1500,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute.hero", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2", "95f92118-e4d4-e624-ac9b-8de50e1aba4d"]},
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-6-n-26",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 1500, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-6-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 1600,
                            "easing": "outCubic",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-30",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 1600, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]}, "value": 1, "unit": ""}
                    }]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1700491241834
            },
            "a-7": {
                "id": "a-7", "title": "Showreel Magnetic Button", "continuousParameterGroups": [{
                    "id": "a-7-p",
                    "type": "MOUSE_X",
                    "parameterLabel": "Mouse X",
                    "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-7-n",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".showreel-play-btn-trigger", "selectorGuids": ["34045c65-5a73-3b96-934f-c3afed366f9e"]}, "xValue": -20, "yValue": null, "xUnit": "em", "yUnit": "em", "zUnit": "PX"}
                        }, {
                            "id": "a-7-n-5",
                            "actionTypeId": "TRANSFORM_ROTATE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".showreel-play-btn-trigger", "selectorGuids": ["34045c65-5a73-3b96-934f-c3afed366f9e"]}, "zValue": -8, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg"}
                        }]
                    }, {
                        "keyframe": 100,
                        "actionItems": [{
                            "id": "a-7-n-2",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".showreel-play-btn-trigger", "selectorGuids": ["34045c65-5a73-3b96-934f-c3afed366f9e"]}, "xValue": 20, "xUnit": "em", "yUnit": "PX", "zUnit": "PX"}
                        }, {
                            "id": "a-7-n-6",
                            "actionTypeId": "TRANSFORM_ROTATE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".showreel-play-btn-trigger", "selectorGuids": ["34045c65-5a73-3b96-934f-c3afed366f9e"]}, "zValue": 8, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg"}
                        }]
                    }]
                }, {
                    "id": "a-7-p-2",
                    "type": "MOUSE_Y",
                    "parameterLabel": "Mouse Y",
                    "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-7-n-3",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".showreel-play-btn-trigger", "selectorGuids": ["34045c65-5a73-3b96-934f-c3afed366f9e"]}, "xValue": null, "yValue": -20, "xUnit": "em", "yUnit": "em", "zUnit": "PX"}
                        }]
                    }, {
                        "keyframe": 100,
                        "actionItems": [{
                            "id": "a-7-n-4",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".showreel-play-btn-trigger", "selectorGuids": ["34045c65-5a73-3b96-934f-c3afed366f9e"]}, "xValue": null, "yValue": 20, "xUnit": "em", "yUnit": "em", "zUnit": "PX"}
                        }]
                    }]
                }], "createdOn": 1700651339077
            },
            "a-8": {
                "id": "a-8",
                "title": "Work Card - Hover In",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-8-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-icon-absolute", "selectorGuids": ["f4129983-3a83-9a46-a58d-a6980049f727"]}, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX"}
                    }, {"id": "a-8-n-4", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-icon-absolute", "selectorGuids": ["f4129983-3a83-9a46-a58d-a6980049f727"]}, "value": 0, "unit": ""}}]
                }, {
                    "actionItems": [{
                        "id": "a-8-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1200, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1.1, "yValue": 1.1, "locked": true}
                    }, {
                        "id": "a-8-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1200, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-services-grid", "selectorGuids": ["3a4d9af4-60fd-1d4d-a22e-bc16edafb3c8"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-8-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 400, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-icon-absolute", "selectorGuids": ["f4129983-3a83-9a46-a58d-a6980049f727"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-8-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1200, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-icon-absolute", "selectorGuids": ["f4129983-3a83-9a46-a58d-a6980049f727"]}, "xValue": -1.5, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX"}
                    }, {
                        "id": "a-8-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1200, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-services-grid", "selectorGuids": ["3a4d9af4-60fd-1d4d-a22e-bc16edafb3c8"]}, "xValue": 1.5, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX"}
                    }, {
                        "id": "a-8-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outExpo",
                            "duration": 1200,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-size-large.text-all-caps", "selectorGuids": ["aba24b2b-b383-c8e3-4324-de1cc706df1a", "e5c08131-d368-a9c9-be68-bea98d906056"]},
                            "xValue": 1.5,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1700658396331
            },
            "a-9": {
                "id": "a-9", "title": "Work Card - Hover Out", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-9-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1, "yValue": 1, "locked": true}
                    }, {
                        "id": "a-9-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-services-grid", "selectorGuids": ["3a4d9af4-60fd-1d4d-a22e-bc16edafb3c8"]}, "value": 0.6, "unit": ""}
                    }, {
                        "id": "a-9-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 400, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-icon-absolute", "selectorGuids": ["f4129983-3a83-9a46-a58d-a6980049f727"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-9-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-icon-absolute", "selectorGuids": ["f4129983-3a83-9a46-a58d-a6980049f727"]}, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX"}
                    }, {
                        "id": "a-9-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-services-grid", "selectorGuids": ["3a4d9af4-60fd-1d4d-a22e-bc16edafb3c8"]}, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX"}
                    }, {
                        "id": "a-9-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outExpo",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-size-large.text-all-caps", "selectorGuids": ["aba24b2b-b383-c8e3-4324-de1cc706df1a", "e5c08131-d368-a9c9-be68-bea98d906056"]},
                            "xValue": 0,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }], "useFirstGroupAsInitialState": false, "createdOn": 1700658396331
            },
            "a-16": {
                "id": "a-16", "title": "Service List - Section Scroll", "continuousParameterGroups": [{
                    "id": "a-16-p",
                    "type": "SCROLL_PROGRESS",
                    "parameterLabel": "Scroll",
                    "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-16-n-7",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._1", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "db778a6a-b561-c362-84b1-e66f472762b6"]}, "xValue": 1, "yValue": 1, "locked": true}
                        }, {
                            "id": "a-16-n-8",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._2", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "9805397d-117f-bfd5-ea51-7e36c9597d52"]}, "xValue": 1, "yValue": 1, "locked": true}
                        }, {
                            "id": "a-16-n-9",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._3", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "a673a59c-da43-e2f6-9695-f57124a9d5fb"]}, "xValue": 1, "yValue": 1, "locked": true}
                        }]
                    }, {
                        "keyframe": 20,
                        "actionItems": [{
                            "id": "a-16-n",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._1", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "db778a6a-b561-c362-84b1-e66f472762b6"]}, "xValue": 1, "yValue": 1, "locked": true}
                        }]
                    }, {
                        "keyframe": 40,
                        "actionItems": [{
                            "id": "a-16-n-3",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._2", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "9805397d-117f-bfd5-ea51-7e36c9597d52"]}, "xValue": 1, "yValue": 1, "locked": true}
                        }]
                    }, {
                        "keyframe": 60,
                        "actionItems": [{
                            "id": "a-16-n-5",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._3", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "a673a59c-da43-e2f6-9695-f57124a9d5fb"]}, "xValue": 1, "yValue": 1, "locked": true}
                        }]
                    }, {
                        "keyframe": 80,
                        "actionItems": [{
                            "id": "a-16-n-2",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._1", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "db778a6a-b561-c362-84b1-e66f472762b6"]},
                                "xValue": 0.88,
                                "yValue": 0.88,
                                "locked": true
                            }
                        }, {
                            "id": "a-16-n-4",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._2", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "9805397d-117f-bfd5-ea51-7e36c9597d52"]},
                                "xValue": 0.92,
                                "yValue": 0.92,
                                "locked": true
                            }
                        }, {
                            "id": "a-16-n-6",
                            "actionTypeId": "TRANSFORM_SCALE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"useEventTarget": "CHILDREN", "selector": ".service-item._3", "selectorGuids": ["164eb5ba-c759-d167-bca3-568c296028c0", "a673a59c-da43-e2f6-9695-f57124a9d5fb"]},
                                "xValue": 0.96,
                                "yValue": 0.96,
                                "locked": true
                            }
                        }]
                    }]
                }], "createdOn": 1700745439854
            },
            "a-17": {
                "id": "a-17",
                "title": "Menu Link  - Hover In",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-absolute", "selectorGuids": ["10a6bb1d-4153-fd80-6a34-da3f5536c1ec"]}, "yValue": 100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-17-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-link-bg", "selectorGuids": ["3d172ec3-9d6e-048b-a444-02a3c2aa9be0"]}, "yValue": 0, "locked": false}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-absolute", "selectorGuids": ["10a6bb1d-4153-fd80-6a34-da3f5536c1ec"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-17-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-link-bg", "selectorGuids": ["3d172ec3-9d6e-048b-a444-02a3c2aa9be0"]}, "yValue": 1, "locked": false}
                    }, {
                        "id": "a-17-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {"delay": 0, "easing": "", "duration": 600, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-wrap", "selectorGuids": ["134fd4ef-f6be-212e-0e0c-3c957bffe881"]}, "globalSwatchId": "", "rValue": 26, "bValue": 26, "gValue": 26, "aValue": 1}
                    }, {
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-relative", "selectorGuids": ["563dbfbc-8eb1-51be-3558-6060c2493e51"]}, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1700747553635
            },
            "a-18": {
                "id": "a-18", "title": "Menu Link  - Hover Out", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-18-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-absolute", "selectorGuids": ["10a6bb1d-4153-fd80-6a34-da3f5536c1ec"]}, "yValue": 100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-18-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-link-bg", "selectorGuids": ["3d172ec3-9d6e-048b-a444-02a3c2aa9be0"]}, "yValue": 0, "locked": false}
                    }, {
                        "id": "a-18-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {"delay": 0, "easing": "", "duration": 600, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-wrap", "selectorGuids": ["134fd4ef-f6be-212e-0e0c-3c957bffe881"]}, "globalSwatchId": "", "rValue": 252, "bValue": 244, "gValue": 255, "aValue": 1}
                    }, {
                        "id": "a-18-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.731, 0.012, 0.105, 0.901], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-label-relative", "selectorGuids": ["563dbfbc-8eb1-51be-3558-6060c2493e51"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }], "useFirstGroupAsInitialState": false, "createdOn": 1700747553635
            },
            "a-19": {
                "id": "a-19",
                "title": "Menu - Opens",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-19-n-7",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"selector": ".menu-btm-wrap", "selectorGuids": ["9339fbc7-1e41-5b83-ef0f-33a9cd067555"]}, "heightValue": 0, "widthUnit": "PX", "heightUnit": "px", "locked": false}
                    }]
                }, {"actionItems": [{"id": "a-19-n-8", "actionTypeId": "GENERAL_DISPLAY", "config": {"delay": 0, "easing": "", "duration": 0, "target": {"selector": ".menu-btm-wrap", "selectorGuids": ["9339fbc7-1e41-5b83-ef0f-33a9cd067555"]}, "value": "block"}}]}, {
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.top", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "9a76f472-8041-effa-e39e-15644ba0d8e7"]},
                            "yValue": 0.15,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {"delay": 0, "easing": "inOutQuart", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-icon", "selectorGuids": ["21ef4b3c-52cd-5b12-bea3-2a2a5ecf2212"]}, "zValue": 180, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg"}
                    }, {
                        "id": "a-19-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.btm", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "e3256e23-e8c4-e4e8-44c4-51e4554edc30"]},
                            "yValue": -0.15,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-19-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 100,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.top", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "9a76f472-8041-effa-e39e-15644ba0d8e7"]},
                            "zValue": -45,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-19-n-3",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 100,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.btm", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "e3256e23-e8c4-e4e8-44c4-51e4554edc30"]},
                            "zValue": 45,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {"id": "a-19-n-6", "actionTypeId": "STYLE_SIZE", "config": {"delay": 100, "easing": "inOutQuart", "duration": 800, "target": {"selector": ".menu-btm-wrap", "selectorGuids": ["9339fbc7-1e41-5b83-ef0f-33a9cd067555"]}, "widthUnit": "PX", "heightUnit": "AUTO", "locked": false}}]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1700747975572
            },
            "a-20": {
                "id": "a-20",
                "title": "Menu - Close",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-20-n-8",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {"delay": 0, "easing": "inOutQuart", "duration": 800, "target": {"selector": ".menu-btm-wrap", "selectorGuids": ["9339fbc7-1e41-5b83-ef0f-33a9cd067555"]}, "heightValue": 0, "widthUnit": "PX", "heightUnit": "px", "locked": false}
                    }, {
                        "id": "a-20-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.top", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "9a76f472-8041-effa-e39e-15644ba0d8e7"]},
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-20-n-7",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.btm", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "e3256e23-e8c4-e4e8-44c4-51e4554edc30"]},
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "deg"
                        }
                    }, {
                        "id": "a-20-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.btm", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "e3256e23-e8c4-e4e8-44c4-51e4554edc30"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": "inOutQuart",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-line.top", "selectorGuids": ["54b5c862-d16d-5750-59a0-ae44f93dddca", "9a76f472-8041-effa-e39e-15644ba0d8e7"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "em",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-20-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {"delay": 100, "easing": "inOutQuart", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".menu-burger-icon", "selectorGuids": ["21ef4b3c-52cd-5b12-bea3-2a2a5ecf2212"]}, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg"}
                    }]
                }, {"actionItems": [{"id": "a-20-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": {"delay": 0, "easing": "", "duration": 0, "target": {"selector": ".menu-btm-wrap", "selectorGuids": ["9339fbc7-1e41-5b83-ef0f-33a9cd067555"]}, "value": "none"}}]}],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1700747975572
            },
            "a-21": {
                "id": "a-21",
                "title": "Menu - In",
                "actionItemGroups": [{
                    "actionItems": [{"id": "a-21-n", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": true, "id": "3628c81d-de61-4c7d-9e66-d7d85fd68233"}, "value": 0, "unit": ""}}, {
                        "id": "a-21-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": true, "id": "3628c81d-de61-4c7d-9e66-d7d85fd68233"}, "xValue": 0.75, "yValue": 0.75, "locked": true}
                    }]
                }, {
                    "actionItems": [{"id": "a-21-n-3", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "inOutQuart", "duration": 800, "target": {"useEventTarget": true, "id": "3628c81d-de61-4c7d-9e66-d7d85fd68233"}, "value": 1, "unit": ""}}, {
                        "id": "a-21-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "inOutQuart", "duration": 800, "target": {"useEventTarget": true, "id": "3628c81d-de61-4c7d-9e66-d7d85fd68233"}, "xValue": 1, "yValue": 1, "locked": true}
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1700749442649
            },
            "a-22": {
                "id": "a-22", "title": "Footer Callout Link - Hover In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".footer-callout-line-absolute", "selectorGuids": ["e2656993-ed99-3dae-81d5-806180abcc89"]}, "xValue": -100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX"}
                    }, {
                        "id": "a-22-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".footer-callout-line-absolute", "selectorGuids": ["e2656993-ed99-3dae-81d5-806180abcc89"]}, "xValue": 1, "locked": false}
                    }, {
                        "id": "a-22-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._4", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "46ec4955-58cc-150c-e8d5-60fe0d55e5be"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._5", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "c0efbc32-89c4-d1f7-25b3-8824ca0c4c03"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._6", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "7ef165fe-6f6f-3e9f-04b0-b1fbb4690f13"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-22-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1100,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-callout-line-absolute", "selectorGuids": ["e2656993-ed99-3dae-81d5-806180abcc89"]},
                            "xValue": 1000,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1100, "target": {"useEventTarget": "CHILDREN", "selector": ".footer-callout-line-absolute", "selectorGuids": ["e2656993-ed99-3dae-81d5-806180abcc89"]}, "xValue": 2, "locked": false}
                    }, {
                        "id": "a-22-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._4", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "46ec4955-58cc-150c-e8d5-60fe0d55e5be"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._1", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "af23b887-c3d9-c56e-2ab4-292b435acf40"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 50,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._5", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "c0efbc32-89c4-d1f7-25b3-8824ca0c4c03"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 50,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._2", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "c823b549-a908-6c3a-e166-ce3d5624a3c4"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._3", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "f2a9a97d-c814-af5d-3dd7-07e0cad2cabd"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._6", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "7ef165fe-6f6f-3e9f-04b0-b1fbb4690f13"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1701089525880
            },
            "a-23": {
                "id": "a-23", "title": "Footer Callout Link - Hover Out", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-23-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-callout-line-absolute", "selectorGuids": ["e2656993-ed99-3dae-81d5-806180abcc89"]},
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-7",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 0, "target": {"useEventTarget": "CHILDREN", "selector": ".footer-callout-line-absolute", "selectorGuids": ["e2656993-ed99-3dae-81d5-806180abcc89"]}, "xValue": 1, "locked": false}
                    }, {
                        "id": "a-23-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuint",
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._4", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "46ec4955-58cc-150c-e8d5-60fe0d55e5be"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuint",
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._5", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "c0efbc32-89c4-d1f7-25b3-8824ca0c4c03"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuint",
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._6", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "7ef165fe-6f6f-3e9f-04b0-b1fbb4690f13"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuint",
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._2", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "c823b549-a908-6c3a-e166-ce3d5624a3c4"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuint",
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._3", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "f2a9a97d-c814-af5d-3dd7-07e0cad2cabd"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-23-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "outQuint",
                            "duration": 0,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".footer-span-word._1", "selectorGuids": ["e123a799-c6d6-8709-6440-b084f5275ba5", "af23b887-c3d9-c56e-2ab4-292b435acf40"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }], "useFirstGroupAsInitialState": false, "createdOn": 1701089525880
            },
            "a-24": {
                "id": "a-24",
                "title": "Menu - Scroll Up",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-24-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "ease", "duration": 300, "target": {"selector": ".menu", "selectorGuids": ["d078fac0-a3d0-f533-bae2-2f2f1b7d1842"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701091033584
            },
            "a-25": {
                "id": "a-25",
                "title": "Menu - Scroll Down",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-25-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "ease", "duration": 300, "target": {"selector": ".menu", "selectorGuids": ["d078fac0-a3d0-f533-bae2-2f2f1b7d1842"]}, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701091033584
            },
            "a-26": {
                "id": "a-26", "title": "Footer Reveal", "continuousParameterGroups": [{
                    "id": "a-26-p",
                    "type": "SCROLL_PROGRESS",
                    "parameterLabel": "Scroll",
                    "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-26-n",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".footer", "selectorGuids": ["d4f64637-80bf-13c8-562f-22e070162298"]}, "yValue": 50, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                        }, {"id": "a-26-n-3", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".footer", "selectorGuids": ["d4f64637-80bf-13c8-562f-22e070162298"]}, "value": 0.25, "unit": ""}}]
                    }, {
                        "keyframe": 50,
                        "actionItems": [{
                            "id": "a-26-n-2",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".footer", "selectorGuids": ["d4f64637-80bf-13c8-562f-22e070162298"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                        }, {"id": "a-26-n-4", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".footer", "selectorGuids": ["d4f64637-80bf-13c8-562f-22e070162298"]}, "value": 1, "unit": ""}}]
                    }]
                }], "createdOn": 1701091209588
            },
            "a-27": {
                "id": "a-27",
                "title": "Footer - In View",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-27-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 300, "target": {"selector": ".menu", "selectorGuids": ["d078fac0-a3d0-f533-bae2-2f2f1b7d1842"]}, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701091351821
            },
            "a-28": {
                "id": "a-28",
                "title": "Footer - Out of View",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-28-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "ease", "duration": 300, "target": {"selector": ".menu", "selectorGuids": ["d078fac0-a3d0-f533-bae2-2f2f1b7d1842"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701091351821
            },
            "a-29": {
                "id": "a-29",
                "title": "Showreel Pop-up - Opens",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-29-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"selector": ".showreel-video-popup", "selectorGuids": ["258a839e-0805-6433-9fe9-eaf3c458dd58"]}, "value": 0, "unit": ""}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-29-n",
                        "actionTypeId": "GENERAL_DISPLAY",
                        "config": {"delay": 0, "easing": "", "duration": 0, "target": {"selector": ".showreel-video-popup", "selectorGuids": ["258a839e-0805-6433-9fe9-eaf3c458dd58"]}, "value": "flex"}
                    }]
                }, {"actionItems": [{"id": "a-29-n-3", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "ease", "duration": 600, "target": {"selector": ".showreel-video-popup", "selectorGuids": ["258a839e-0805-6433-9fe9-eaf3c458dd58"]}, "value": 1, "unit": ""}}]}],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1701098333111
            },
            "a-30": {
                "id": "a-30",
                "title": "Showreel Pop-up - Close",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-30-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "ease", "duration": 600, "target": {"selector": ".showreel-video-popup", "selectorGuids": ["258a839e-0805-6433-9fe9-eaf3c458dd58"]}, "value": 0, "unit": ""}
                    }]
                }, {"actionItems": [{"id": "a-30-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": {"delay": 0, "easing": "", "duration": 0, "target": {"selector": ".showreel-video-popup", "selectorGuids": ["258a839e-0805-6433-9fe9-eaf3c458dd58"]}, "value": "none"}}]}],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701098333111
            },
            "a-31": {
                "id": "a-31", "title": "Home Hero Mobile - In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-31-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-3",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute.hero", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2", "95f92118-e4d4-e624-ac9b-8de50e1aba4d"]},
                            "xValue": 1.25,
                            "yValue": 1.25,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".home-hero-img-wrap", "selectorGuids": ["fc240d0f-3799-c5a7-409b-25864d7cca0c"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-31-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-31-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-31-n-23",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-31-n-24",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-31-n-25",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-31-n-26",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]}, "value": 0, "unit": ""}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-31-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 300,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-27",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 300,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-31-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-28",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-31-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 500,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-29",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 500,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-31-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 600,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-30",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 600,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-31-n-18",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 900, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".home-hero-img-wrap", "selectorGuids": ["fc240d0f-3799-c5a7-409b-25864d7cca0c"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-31-n-19",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 900,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute.hero", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2", "95f92118-e4d4-e624-ac9b-8de50e1aba4d"]},
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-31-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 1200,
                            "easing": "outCubic",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-31-n-20",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 1200, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-31-n-22",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 1300, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-31-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 1300,
                            "easing": "outCubic",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1700491241834
            },
            "a-34": {
                "id": "a-34", "title": "Work List Item - Hover In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-34-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-bg", "selectorGuids": ["762700d1-6fc7-aeee-c708-9022e22d2b3c"]}, "xValue": null, "yValue": 0, "locked": false}
                    }, {
                        "id": "a-34-n-8",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1.4, "yValue": 1.4, "locked": true}
                    }, {
                        "id": "a-34-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-34-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-img-wrap", "selectorGuids": ["67181977-6a5b-06f3-d25f-b4041dbe9430"]}, "xValue": null, "yValue": 100, "xUnit": "%", "yUnit": "%", "zUnit": "PX"}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-34-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.7, 0.04, 0.2, 0.9], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-bg", "selectorGuids": ["762700d1-6fc7-aeee-c708-9022e22d2b3c"]}, "xValue": null, "yValue": 1, "locked": false}
                    }, {
                        "id": "a-34-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-img-wrap", "selectorGuids": ["67181977-6a5b-06f3-d25f-b4041dbe9430"]},
                            "xValue": null,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 700,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-name-wrap", "selectorGuids": ["1d27f3c2-acaa-1939-d55e-00fcb7826de3"]},
                            "xValue": 12,
                            "yValue": null,
                            "xUnit": "em",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 50,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 700,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-services-grid", "selectorGuids": ["c9053be0-8c9a-e0bd-da0e-0b967d076ab1"]},
                            "xValue": 12,
                            "yValue": null,
                            "xUnit": "em",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 50,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 700,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-weight-bold.text-all-caps.div-relative", "selectorGuids": ["b59eb309-475f-fd78-4c51-060f2b2ea149", "96608f8d-6016-a1d9-05bd-3ae730713d74", "14555920-2cc0-d36b-0e33-8ae923a6b8a0"]},
                            "xValue": -2,
                            "yValue": null,
                            "xUnit": "em",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-34-n-10",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 200, "easing": "outExpo", "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-34-n-9",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 200, "easing": "outExpo", "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1, "yValue": 1, "locked": true}
                    }]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1701279213829
            },
            "a-35": {
                "id": "a-35", "title": "Work List Item - Hover Out", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-35-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": [0.7, 0.04, 0.2, 0.9], "duration": 700, "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-bg", "selectorGuids": ["762700d1-6fc7-aeee-c708-9022e22d2b3c"]}, "xValue": null, "yValue": 0, "locked": false}
                    }, {
                        "id": "a-35-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 700,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-img-wrap", "selectorGuids": ["67181977-6a5b-06f3-d25f-b4041dbe9430"]},
                            "xValue": null,
                            "yValue": 100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 50,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-name-wrap", "selectorGuids": ["1d27f3c2-acaa-1939-d55e-00fcb7826de3"]},
                            "xValue": 0,
                            "yValue": null,
                            "xUnit": "em",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-weight-bold.text-all-caps.div-relative", "selectorGuids": ["b59eb309-475f-fd78-4c51-060f2b2ea149", "96608f8d-6016-a1d9-05bd-3ae730713d74", "14555920-2cc0-d36b-0e33-8ae923a6b8a0"]},
                            "xValue": 0,
                            "yValue": null,
                            "xUnit": "em",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".work-item-list-services-grid", "selectorGuids": ["c9053be0-8c9a-e0bd-da0e-0b967d076ab1"]},
                            "xValue": 0,
                            "yValue": null,
                            "xUnit": "em",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 0, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1.4, "yValue": 1.4, "locked": true}
                    }, {"id": "a-35-n-3", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 0, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "value": 0, "unit": ""}}]
                }], "useFirstGroupAsInitialState": false, "createdOn": 1701279213829
            },
            "a-36": {
                "id": "a-36", "title": "Works Hero - In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".title-xsmall", "selectorGuids": ["a05194a8-50b3-3934-16b3-d1d56b89c71c"]}, "yValue": 105, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-36-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".div-flex.center", "selectorGuids": ["1bc1970a-3e93-538f-9a61-fec5a8526db5", "c9c957ca-b559-c7b6-4cd5-49b672ecabad"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".div-flex.center", "selectorGuids": ["1bc1970a-3e93-538f-9a61-fec5a8526db5", "c9c957ca-b559-c7b6-4cd5-49b672ecabad"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-36-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._2", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "6f44adfa-26c6-923e-5ca1-f3b535091e62"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-36-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"selector": ".tabs-menu", "selectorGuids": ["970bf72d-48f4-0819-caa6-dd7b74a771f0"]}, "yValue": 3, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {"id": "a-36-n-22", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"selector": ".tabs-menu", "selectorGuids": ["970bf72d-48f4-0819-caa6-dd7b74a771f0"]}, "value": 0, "unit": ""}}, {
                        "id": "a-36-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"selector": ".tabs-content", "selectorGuids": ["2cc2501b-c475-b20d-62e3-0597f4f74162"]}, "yValue": 8, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {"id": "a-36-n-28", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"selector": ".tabs-content", "selectorGuids": ["2cc2501b-c475-b20d-62e3-0597f4f74162"]}, "value": 0, "unit": ""}}]
                }, {
                    "actionItems": [{
                        "id": "a-36-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 300,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 500, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".title-xsmall", "selectorGuids": ["a05194a8-50b3-3934-16b3-d1d56b89c71c"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-36-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 500,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".div-flex.center", "selectorGuids": ["1bc1970a-3e93-538f-9a61-fec5a8526db5", "c9c957ca-b559-c7b6-4cd5-49b672ecabad"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-36-n-20",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 500,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".div-flex.center", "selectorGuids": ["1bc1970a-3e93-538f-9a61-fec5a8526db5", "c9c957ca-b559-c7b6-4cd5-49b672ecabad"]},
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-36-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 600, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"selector": ".tabs-menu", "selectorGuids": ["970bf72d-48f4-0819-caa6-dd7b74a771f0"]}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {"id": "a-36-n-26", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 600, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"selector": ".tabs-menu", "selectorGuids": ["970bf72d-48f4-0819-caa6-dd7b74a771f0"]}, "value": 1, "unit": ""}}, {
                        "id": "a-36-n-24",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 700, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"selector": ".tabs-content", "selectorGuids": ["2cc2501b-c475-b20d-62e3-0597f4f74162"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-36-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 700, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"selector": ".tabs-content", "selectorGuids": ["2cc2501b-c475-b20d-62e3-0597f4f74162"]}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1700491241834
            },
            "a-37": {
                "id": "a-37",
                "title": "Button Text - Hover In",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-37-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".button-icon-absolute-wrap", "selectorGuids": ["b1636f15-325a-6757-8527-d24565d7fcd3"]}, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-37-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.7, 0.04, 0.2, 0.9], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".button-icon-absolute-wrap", "selectorGuids": ["b1636f15-325a-6757-8527-d24565d7fcd3"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-37-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.7, 0.04, 0.2, 0.9], "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".div-relative", "selectorGuids": ["7d6c4a1d-0064-7b81-4b87-dbcfc91498de"]}, "yValue": 100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1701355826573
            },
            "a-38": {
                "id": "a-38",
                "title": "Button Text - Hover Out",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-38-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.7, 0.04, 0.2, 0.9], "duration": 600, "target": {"useEventTarget": "CHILDREN", "selector": ".button-icon-absolute-wrap", "selectorGuids": ["b1636f15-325a-6757-8527-d24565d7fcd3"]}, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-38-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.7, 0.04, 0.2, 0.9], "duration": 600, "target": {"useEventTarget": "CHILDREN", "selector": ".div-relative", "selectorGuids": ["7d6c4a1d-0064-7b81-4b87-dbcfc91498de"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701355826573
            },
            "a-39": {
                "id": "a-39",
                "title": "Gallery Card - Hover In",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._1", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "0b826487-1f27-b8bf-cbf8-7d06f03eb3a7"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._2", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "f7472db0-7e1f-0a7a-a3ac-8087d5a1c258"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-39-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 600,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._1", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "0b826487-1f27-b8bf-cbf8-7d06f03eb3a7"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 600,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._2", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "f7472db0-7e1f-0a7a-a3ac-8087d5a1c258"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1701357126258
            },
            "a-40": {
                "id": "a-40",
                "title": "Gallery Card - Hover Out",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-40-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 600,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._2", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "f7472db0-7e1f-0a7a-a3ac-8087d5a1c258"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-40-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.7, 0.04, 0.2, 0.9],
                            "duration": 600,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._1", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "0b826487-1f27-b8bf-cbf8-7d06f03eb3a7"]},
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }],
                "useFirstGroupAsInitialState": false,
                "createdOn": 1701357126258
            },
            "a-41": {
                "id": "a-41",
                "title": "About Gallery Moves Horizontal",
                "continuousParameterGroups": [{
                    "id": "a-41-p",
                    "type": "SCROLL_PROGRESS",
                    "parameterLabel": "Scroll",
                    "continuousActionGroups": [{
                        "keyframe": 10,
                        "actionItems": [{
                            "id": "a-41-n",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".about-gallery-wrap", "selectorGuids": ["b5c28447-b9a6-d81d-170e-bc70c3728dbb"]}, "xValue": 8, "xUnit": "%", "yUnit": "PX", "zUnit": "PX"}
                        }]
                    }, {
                        "keyframe": 100,
                        "actionItems": [{
                            "id": "a-41-n-2",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".about-gallery-wrap", "selectorGuids": ["b5c28447-b9a6-d81d-170e-bc70c3728dbb"]}, "xValue": -56, "xUnit": "%", "yUnit": "PX", "zUnit": "PX"}
                        }]
                    }]
                }],
                "createdOn": 1701357341701
            },
            "a-42": {
                "id": "a-42",
                "title": "Row Item - In View",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-42-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".experience-item-divider", "selectorGuids": ["f017373d-53de-e655-6c7d-76a0ebbc2e94"]}, "xValue": 0, "locked": false}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-42-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1200, "target": {"useEventTarget": "CHILDREN", "selector": ".experience-item-divider", "selectorGuids": ["f017373d-53de-e655-6c7d-76a0ebbc2e94"]}, "xValue": 1, "locked": false}
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1701359054832
            },
            "a-43": {
                "id": "a-43", "title": "About Hero - In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-43-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-27",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".about-hero-span-img", "selectorGuids": ["0f9323d2-c088-1ab4-2ae9-4b04a4f4a3d9"]}, "xValue": 0.75, "yValue": 0.75, "locked": true}
                    }, {
                        "id": "a-43-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".about-hero-span-img", "selectorGuids": ["0f9323d2-c088-1ab4-2ae9-4b04a4f4a3d9"]}, "yValue": 120, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-43-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._1", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "2b02176f-e55d-aaae-e9c4-7cc5cfc5f4a2"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".title-xlarge._2", "selectorGuids": ["5bdf9cf3-6285-708d-a556-530ed1e74ff2", "b259ee4c-91d6-558d-97da-2219cded0471"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 3,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-43-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["452856b5-3228-f535-d295-b1faa5a9ac8f"]}, "yValue": 3, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {
                        "id": "a-43-n-11",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["452856b5-3228-f535-d295-b1faa5a9ac8f"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-43-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._3", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "232be670-cf11-dd4b-e19c-39d1a48d93b8"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".about-gallery", "selectorGuids": ["6d997de2-5525-bf52-1f9e-24b9ebcf76e2"]}, "yValue": 3, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {"id": "a-43-n-30", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".about-gallery", "selectorGuids": ["6d997de2-5525-bf52-1f9e-24b9ebcf76e2"]}, "value": 0, "unit": ""}}]
                }, {
                    "actionItems": [{
                        "id": "a-43-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 100,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._1", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "30ca5682-9f1d-e9e3-1de1-2d002193d8c0"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 200, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".about-hero-span-img", "selectorGuids": ["0f9323d2-c088-1ab4-2ae9-4b04a4f4a3d9"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-43-n-28",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 200, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".about-hero-span-img", "selectorGuids": ["0f9323d2-c088-1ab4-2ae9-4b04a4f4a3d9"]}, "xValue": 1, "yValue": 1, "locked": true}
                    }, {
                        "id": "a-43-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 300,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._2", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "d276b0cb-913c-5230-d9a3-6aa05b104689"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".heading-span._3", "selectorGuids": ["b4b54646-60c2-a63f-4a19-fd26e12f75d0", "232be670-cf11-dd4b-e19c-39d1a48d93b8"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-20",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 800, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-43-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 800,
                            "easing": "outCubic",
                            "duration": 800,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "rem",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-43-n-22",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 900, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["452856b5-3228-f535-d295-b1faa5a9ac8f"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-43-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 900, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["452856b5-3228-f535-d295-b1faa5a9ac8f"]}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {
                        "id": "a-43-n-31",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 1000, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".about-gallery", "selectorGuids": ["6d997de2-5525-bf52-1f9e-24b9ebcf76e2"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-43-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 1000, "easing": "outCubic", "duration": 800, "target": {"useEventTarget": "CHILDREN", "selector": ".about-gallery", "selectorGuids": ["6d997de2-5525-bf52-1f9e-24b9ebcf76e2"]}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1700491241834
            },
            "a-44": {
                "id": "a-44",
                "title": "Work Hero Img Parallax",
                "continuousParameterGroups": [{
                    "id": "a-44-p",
                    "type": "SCROLL_PROGRESS",
                    "parameterLabel": "Scroll",
                    "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-44-n",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-hero-bg-img", "selectorGuids": ["76ac399c-ded0-082b-059d-f85f89655a9b"]}, "yValue": -10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                        }]
                    }, {
                        "keyframe": 100,
                        "actionItems": [{
                            "id": "a-44-n-2",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-hero-bg-img", "selectorGuids": ["76ac399c-ded0-082b-059d-f85f89655a9b"]}, "yValue": 10, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                        }]
                    }]
                }],
                "createdOn": 1701427670253
            },
            "a-45": {
                "id": "a-45",
                "title": "Work Grid Images Moves",
                "continuousParameterGroups": [{
                    "id": "a-45-p",
                    "type": "SCROLL_PROGRESS",
                    "parameterLabel": "Scroll",
                    "continuousActionGroups": [{
                        "keyframe": 0,
                        "actionItems": [{
                            "id": "a-45-n",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"useEventTarget": "CHILDREN", "selector": ".work-img-wrap.moving", "selectorGuids": ["3bf9d2f4-6d7a-cc9e-e084-d344c516b001", "db1b0975-2117-62ac-5924-a0fcb188e9e8"]},
                                "yValue": 30,
                                "xUnit": "PX",
                                "yUnit": "%",
                                "zUnit": "PX"
                            }
                        }]
                    }, {
                        "keyframe": 36,
                        "actionItems": [{
                            "id": "a-45-n-2",
                            "actionTypeId": "TRANSFORM_MOVE",
                            "config": {
                                "delay": 0,
                                "easing": "",
                                "duration": 500,
                                "target": {"useEventTarget": "CHILDREN", "selector": ".work-img-wrap.moving", "selectorGuids": ["3bf9d2f4-6d7a-cc9e-e084-d344c516b001", "db1b0975-2117-62ac-5924-a0fcb188e9e8"]},
                                "yValue": 0,
                                "xUnit": "PX",
                                "yUnit": "%",
                                "zUnit": "PX"
                            }
                        }]
                    }]
                }],
                "createdOn": 1701436129921
            },
            "a-46": {
                "id": "a-46", "title": "Work CMS Hero - In", "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".text-align-center", "selectorGuids": ["d12d406a-05bb-2162-f970-030baaa05765"]}, "yValue": 100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-46-n-36",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "yValue": 120, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-46-n-25",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1.4, "yValue": 1.4, "locked": true}
                    }, {
                        "id": "a-46-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._1", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "0b826487-1f27-b8bf-cbf8-7d06f03eb3a7"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._3", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "c7c66010-715d-452d-7d40-9477170e9af7"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._2", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "f7472db0-7e1f-0a7a-a3ac-8087d5a1c258"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-29",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".work-bg-wrap", "selectorGuids": ["13727af1-3e17-09d2-bdde-7752b4a1a28c"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-46-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-33",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 0, "unit": ""}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-46-n-28",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1400, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "xValue": 1, "yValue": 1, "locked": true}
                    }, {
                        "id": "a-46-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1400, "target": {"useEventTarget": "CHILDREN", "selector": ".text-align-center", "selectorGuids": ["d12d406a-05bb-2162-f970-030baaa05765"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-46-n-37",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outExpo", "duration": 1600, "target": {"useEventTarget": "CHILDREN", "selector": ".img-cover-absolute", "selectorGuids": ["3521a134-f663-4405-056d-3970827acbf2"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-46-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._1", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "0b826487-1f27-b8bf-cbf8-7d06f03eb3a7"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 300,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._2", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "f7472db0-7e1f-0a7a-a3ac-8087d5a1c258"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".text-all-caps._3", "selectorGuids": ["b7f02598-3b25-2fe9-1701-6091ecaa7f96", "c7c66010-715d-452d-7d40-9477170e9af7"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-46-n-35",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 400, "easing": "", "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]}, "value": 1, "unit": ""}
                    }, {
                        "id": "a-46-n-34",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 400,
                            "easing": [0.69, 0.042, 0.199, 0.901],
                            "duration": 1000,
                            "target": {"useEventTarget": "CHILDREN", "selector": ".element-trigger._1", "selectorGuids": ["a549afb6-c4c5-fcb5-fa28-7bdc93a96546", "480c6f53-7e86-9b28-7385-e0ae7d9171ec"]},
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {"id": "a-46-n-31", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 400, "easing": "ease", "duration": 1400, "target": {"useEventTarget": "CHILDREN", "selector": ".work-bg-wrap", "selectorGuids": ["13727af1-3e17-09d2-bdde-7752b4a1a28c"]}, "value": 1, "unit": ""}}]
                }], "useFirstGroupAsInitialState": true, "createdOn": 1700491241834
            },
            "a-47": {
                "id": "a-47",
                "title": "Contact Hero - In",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-47-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".contact-form-wrap", "selectorGuids": ["8927b3ef-cc12-8fc9-04d2-043cf19d653e"]}, "yValue": 5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {
                        "id": "a-47-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".contact-form-wrap", "selectorGuids": ["8927b3ef-cc12-8fc9-04d2-043cf19d653e"]}, "value": 0, "unit": ""}
                    }, {
                        "id": "a-47-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": "CHILDREN", "selector": ".text-align-center", "selectorGuids": ["d12d406a-05bb-2162-f970-030baaa05765"]}, "yValue": 100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }]
                }, {
                    "actionItems": [{
                        "id": "a-47-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".text-align-center", "selectorGuids": ["d12d406a-05bb-2162-f970-030baaa05765"]}, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX"}
                    }, {
                        "id": "a-47-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 100, "easing": [0.69, 0.042, 0.199, 0.901], "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".contact-form-wrap", "selectorGuids": ["8927b3ef-cc12-8fc9-04d2-043cf19d653e"]}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {"id": "a-47-n-16", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 100, "easing": "", "duration": 1000, "target": {"useEventTarget": "CHILDREN", "selector": ".contact-form-wrap", "selectorGuids": ["8927b3ef-cc12-8fc9-04d2-043cf19d653e"]}, "value": 1, "unit": ""}}]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1700491241834
            },
            "a-2": {
                "id": "a-2",
                "title": "Fade in - Small",
                "actionItemGroups": [{
                    "actionItems": [{
                        "id": "a-2-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": true, "id": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4"}, "yValue": 3, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {
                        "id": "a-2-n-5",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": true, "id": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4"}, "xValue": 0.5, "yValue": 0.5, "locked": true}
                    }, {"id": "a-2-n-2", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "", "duration": 500, "target": {"useEventTarget": true, "id": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4"}, "value": 0, "unit": ""}}]
                }, {
                    "actionItems": [{
                        "id": "a-2-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {"delay": 0, "easing": "outQuart", "duration": 600, "target": {"useEventTarget": true, "id": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4"}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX"}
                    }, {"id": "a-2-n-4", "actionTypeId": "STYLE_OPACITY", "config": {"delay": 0, "easing": "ease", "duration": 600, "target": {"useEventTarget": true, "id": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4"}, "value": 1, "unit": ""}}, {
                        "id": "a-2-n-6",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {"delay": 0, "easing": "ease", "duration": 500, "target": {"useEventTarget": true, "id": "655b3d9644c731751d03fd2d|4c2db261-fc53-77f4-0adb-b7f386733df4"}, "xValue": 1, "yValue": 1, "locked": true}
                    }]
                }],
                "useFirstGroupAsInitialState": true,
                "createdOn": 1645878315623
            }
        }, "site": {"mediaQueries": [{"key": "main", "min": 992, "max": 10000}, {"key": "medium", "min": 768, "max": 991}, {"key": "small", "min": 480, "max": 767}, {"key": "tiny", "min": 0, "max": 479}]}
    }
);
