!(function (a) {
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : a(
              "object" == typeof exports
                  ? require("jquery")
                  : window.jQuery || window.Zepto
          );
})(function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function () {},
        u = !!window.jQuery,
        v = a(window),
        w = function (a, c) {
            b.ev.on(o + a + p, c);
        },
        x = function (b, c, d, e) {
            var f = document.createElement("div");
            return (
                (f.className = "mfp-" + b),
                d && (f.innerHTML = d),
                e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
                f
            );
        },
        y = function (c, d) {
            b.ev.triggerHandler(o + c, d),
                b.st.callbacks &&
                    ((c = c.charAt(0).toLowerCase() + c.slice(1)),
                    b.st.callbacks[c] &&
                        b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
        },
        z = function (c) {
            return (
                (c === g && b.currTemplate.closeBtn) ||
                    ((b.currTemplate.closeBtn = a(
                        b.st.closeMarkup.replace("%title%", b.st.tClose)
                    )),
                    (g = c)),
                b.currTemplate.closeBtn
            );
        },
        A = function () {
            a.magnificPopup.instance ||
                ((b = new t()), b.init(), (a.magnificPopup.instance = b));
        },
        B = function () {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
            return !1;
        };
    (t.prototype = {
        constructor: t,
        init: function () {
            var c = navigator.appVersion;
            (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
                (b.isAndroid = /android/gi.test(c)),
                (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
                (b.supportsTransition = B()),
                (b.probablyMobile =
                    b.isAndroid ||
                    b.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                        navigator.userAgent
                    )),
                (d = a(document)),
                (b.popupsCache = {});
        },
        open: function (c) {
            var e;
            if (c.isObj === !1) {
                (b.items = c.items.toArray()), (b.index = 0);
                var g,
                    h = c.items;
                for (e = 0; e < h.length; e++)
                    if (
                        ((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])
                    ) {
                        b.index = e;
                        break;
                    }
            } else
                (b.items = a.isArray(c.items) ? c.items : [c.items]),
                    (b.index = c.index || 0);
            if (b.isOpen) return void b.updateItemHTML();
            (b.types = []),
                (f = ""),
                c.mainEl && c.mainEl.length
                    ? (b.ev = c.mainEl.eq(0))
                    : (b.ev = d),
                c.key
                    ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
                      (b.currTemplate = b.popupsCache[c.key]))
                    : (b.currTemplate = {}),
                (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
                (b.fixedContentPos =
                    "auto" === b.st.fixedContentPos
                        ? !b.probablyMobile
                        : b.st.fixedContentPos),
                b.st.modal &&
                    ((b.st.closeOnContentClick = !1),
                    (b.st.closeOnBgClick = !1),
                    (b.st.showCloseBtn = !1),
                    (b.st.enableEscapeKey = !1)),
                b.bgOverlay ||
                    ((b.bgOverlay = x("bg").on("click" + p, function () {
                        b.close();
                    })),
                    (b.wrap = x("wrap")
                        .attr("tabindex", -1)
                        .on("click" + p, function (a) {
                            b._checkIfClose(a.target) && b.close();
                        })),
                    (b.container = x("container", b.wrap))),
                (b.contentContainer = x("content")),
                b.st.preloader &&
                    (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                (j = j.charAt(0).toUpperCase() + j.slice(1)),
                    b["init" + j].call(b);
            }
            y("BeforeOpen"),
                b.st.showCloseBtn &&
                    (b.st.closeBtnInside
                        ? (w(l, function (a, b, c, d) {
                              c.close_replaceWith = z(d.type);
                          }),
                          (f += " mfp-close-btn-in"))
                        : b.wrap.append(z())),
                b.st.alignTop && (f += " mfp-align-top"),
                b.fixedContentPos
                    ? b.wrap.css({
                          overflow: b.st.overflowY,
                          overflowX: "hidden",
                          overflowY: b.st.overflowY,
                      })
                    : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
                (b.st.fixedBgPos === !1 ||
                    ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
                    b.bgOverlay.css({
                        height: d.height(),
                        position: "absolute",
                    }),
                b.st.enableEscapeKey &&
                    d.on("keyup" + p, function (a) {
                        27 === a.keyCode && b.close();
                    }),
                v.on("resize" + p, function () {
                    b.updateSize();
                }),
                b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
                f && b.wrap.addClass(f);
            var k = (b.wH = v.height()),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o);
            }
            b.fixedContentPos &&
                (b.isIE7
                    ? a("body, html").css("overflow", "hidden")
                    : (n.overflow = "hidden"));
            var r = b.st.mainClass;
            return (
                b.isIE7 && (r += " mfp-ie7"),
                r && b._addClassToMFP(r),
                b.updateItemHTML(),
                y("BuildControls"),
                a("html").css(n),
                b.bgOverlay
                    .add(b.wrap)
                    .prependTo(b.st.prependTo || a(document.body)),
                (b._lastFocusedEl = document.activeElement),
                setTimeout(function () {
                    b.content
                        ? (b._addClassToMFP(q), b._setFocus())
                        : b.bgOverlay.addClass(q),
                        d.on("focusin" + p, b._onFocusIn);
                }, 16),
                (b.isOpen = !0),
                b.updateSize(k),
                y(m),
                c
            );
        },
        close: function () {
            b.isOpen &&
                (y(i),
                (b.isOpen = !1),
                b.st.removalDelay && !b.isLowIE && b.supportsTransition
                    ? (b._addClassToMFP(r),
                      setTimeout(function () {
                          b._close();
                      }, b.st.removalDelay))
                    : b._close());
        },
        _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (
                (b.bgOverlay.detach(),
                b.wrap.detach(),
                b.container.empty(),
                b.st.mainClass && (c += b.st.mainClass + " "),
                b._removeClassFromMFP(c),
                b.fixedContentPos)
            ) {
                var e = { marginRight: "" };
                b.isIE7
                    ? a("body, html").css("overflow", "")
                    : (e.overflow = ""),
                    a("html").css(e);
            }
            d.off("keyup" + p + " focusin" + p),
                b.ev.off(p),
                b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                b.bgOverlay.attr("class", "mfp-bg"),
                b.container.attr("class", "mfp-container"),
                !b.st.showCloseBtn ||
                    (b.st.closeBtnInside &&
                        b.currTemplate[b.currItem.type] !== !0) ||
                    (b.currTemplate.closeBtn &&
                        b.currTemplate.closeBtn.detach()),
                b.st.autoFocusLast &&
                    b._lastFocusedEl &&
                    a(b._lastFocusedEl).focus(),
                (b.currItem = null),
                (b.content = null),
                (b.currTemplate = null),
                (b.prevHeight = 0),
                y(j);
        },
        updateSize: function (a) {
            if (b.isIOS) {
                var c =
                        document.documentElement.clientWidth /
                        window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), (b.wH = d);
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
        },
        updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(),
                b.content && b.content.detach(),
                c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (
                (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
                (b.currItem = c),
                !b.currTemplate[d])
            ) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                    f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
            }
            e &&
                e !== c.type &&
                b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
                c,
                b.currTemplate[d]
            );
            b.appendContent(g, d),
                (c.preloaded = !0),
                y(n, c),
                (e = c.type),
                b.container.prepend(b.contentContainer),
                y("AfterChange");
        },
        appendContent: function (a, c) {
            (b.content = a),
                a
                    ? b.st.showCloseBtn &&
                      b.st.closeBtnInside &&
                      b.currTemplate[c] === !0
                        ? b.content.find(".mfp-close").length ||
                          b.content.append(z())
                        : (b.content = a)
                    : (b.content = ""),
                y(k),
                b.container.addClass("mfp-" + c + "-holder"),
                b.contentContainer.append(b.content);
        },
        parseEl: function (c) {
            var d,
                e = b.items[c];
            if (
                (e.tagName
                    ? (e = { el: a(e) })
                    : ((d = e.type), (e = { data: e, src: e.src })),
                e.el)
            ) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break;
                    }
                (e.src = e.el.attr("data-mfp-src")),
                    e.src || (e.src = e.el.attr("href"));
            }
            return (
                (e.type = d || b.st.type || "inline"),
                (e.index = c),
                (e.parsed = !0),
                (b.items[c] = e),
                y("ElementParse", e),
                b.items[c]
            );
        },
        addGroup: function (a, c) {
            var d = function (d) {
                (d.mfpEl = this), b._openClick(d, a, c);
            };
            c || (c = {});
            var e = "click.magnificPopup";
            (c.mainEl = a),
                c.items
                    ? ((c.isObj = !0), a.off(e).on(e, d))
                    : ((c.isObj = !1),
                      c.delegate
                          ? a.off(e).on(e, c.delegate, d)
                          : ((c.items = a), a.off(e).on(e, d)));
        },
        _openClick: function (c, d, e) {
            var f =
                void 0 !== e.midClick
                    ? e.midClick
                    : a.magnificPopup.defaults.midClick;
            if (
                f ||
                !(
                    2 === c.which ||
                    c.ctrlKey ||
                    c.metaKey ||
                    c.altKey ||
                    c.shiftKey
                )
            ) {
                var g =
                    void 0 !== e.disableOn
                        ? e.disableOn
                        : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0;
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
                    (e.el = a(c.mfpEl)),
                    e.delegate && (e.items = d.find(e.delegate)),
                    b.open(e);
            }
        },
        updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                    d || "loading" !== a || (d = b.st.tLoading);
                var e = { status: a, text: d };
                y("UpdateStatus", e),
                    (a = e.status),
                    (d = e.text),
                    b.preloader.html(d),
                    b.preloader.find("a").on("click", function (a) {
                        a.stopImmediatePropagation();
                    }),
                    b.container.addClass("mfp-s-" + a),
                    (c = a);
            }
        },
        _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (
                    !b.content ||
                    a(c).hasClass("mfp-close") ||
                    (b.preloader && c === b.preloader[0])
                )
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0;
                } else if (e && a.contains(document, c)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a);
        },
        _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
        },
        _hasScrollBar: function (a) {
            return (
                (b.isIE7 ? d.height() : document.body.scrollHeight) >
                (a || v.height())
            );
        },
        _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
        },
        _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
                ? void 0
                : (b._setFocus(), !1);
        },
        _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
                y(l, [b, c, d]),
                a.each(c, function (c, d) {
                    if (void 0 === d || d === !1) return !0;
                    if (((e = c.split("_")), e.length > 1)) {
                        var f = b.find(p + "-" + e[0]);
                        if (f.length > 0) {
                            var g = e[1];
                            "replaceWith" === g
                                ? f[0] !== d[0] && f.replaceWith(d)
                                : "img" === g
                                ? f.is("img")
                                    ? f.attr("src", d)
                                    : f.replaceWith(
                                          a("<img>")
                                              .attr("src", d)
                                              .attr("class", f.attr("class"))
                                      )
                                : f.attr(e[1], d);
                        }
                    } else b.find(p + "-" + c).html(d);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                (a.style.cssText =
                    "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                    document.body.appendChild(a),
                    (b.scrollbarSize = a.offsetWidth - a.clientWidth),
                    document.body.removeChild(a);
            }
            return b.scrollbarSize;
        },
    }),
        (a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function (b, c) {
                return (
                    A(),
                    (b = b ? a.extend(!0, {}, b) : {}),
                    (b.isObj = !0),
                    (b.index = c || 0),
                    this.instance.open(b)
                );
            },
            close: function () {
                return (
                    a.magnificPopup.instance && a.magnificPopup.instance.close()
                );
            },
            registerModule: function (b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options),
                    a.extend(this.proto, c.proto),
                    this.modules.push(b);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup:
                    '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (a.fn.magnificPopup = function (c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e,
                        f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items
                        ? (e = f.items[g])
                        : ((e = d),
                          f.delegate && (e = e.find(f.delegate)),
                          (e = e.eq(g))),
                        b._openClick({ mfpEl: e }, d, f);
                } else
                    b.isOpen &&
                        b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else
                (c = a.extend(!0, {}, c)),
                    u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
                    b.addGroup(d, c);
            return d;
        });
    var C,
        D,
        E,
        F = "inline",
        G = function () {
            E && (D.after(E.addClass(C)).detach(), (E = null));
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found",
        },
        proto: {
            initInline: function () {
                b.types.push(F),
                    w(h + "." + F, function () {
                        G();
                    });
            },
            getInline: function (c, d) {
                if ((G(), c.src)) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g &&
                            g.tagName &&
                            (D ||
                                ((C = e.hiddenClass),
                                (D = x(C)),
                                (C = "mfp-" + C)),
                            (E = f.after(D).detach().removeClass(C))),
                            b.updateStatus("ready");
                    } else
                        b.updateStatus("error", e.tNotFound), (f = a("<div>"));
                    return (c.inlineElement = f), f;
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
            },
        },
    });
    var H,
        I = "ajax",
        J = function () {
            H && a(document.body).removeClass(H);
        },
        K = function () {
            J(), b.req && b.req.abort();
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.',
        },
        proto: {
            initAjax: function () {
                b.types.push(I),
                    (H = b.st.ajax.cursor),
                    w(h + "." + I, K),
                    w("BeforeChange." + I, K);
            },
            getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend(
                    {
                        url: c.src,
                        success: function (d, e, f) {
                            var g = { data: d, xhr: f };
                            y("ParseAjax", g),
                                b.appendContent(a(g.data), I),
                                (c.finished = !0),
                                J(),
                                b._setFocus(),
                                setTimeout(function () {
                                    b.wrap.addClass(q);
                                }, 16),
                                b.updateStatus("ready"),
                                y("AjaxContentAdded");
                        },
                        error: function () {
                            J(),
                                (c.finished = c.loadError = !0),
                                b.updateStatus(
                                    "error",
                                    b.st.ajax.tError.replace("%url%", c.src)
                                );
                        },
                    },
                    b.st.ajax.settings
                );
                return (b.req = a.ajax(d)), "";
            },
        },
    });
    var L,
        M = function (c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || "";
            }
            return "";
        };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"),
                    w(m + d, function () {
                        "image" === b.currItem.type &&
                            c.cursor &&
                            a(document.body).addClass(c.cursor);
                    }),
                    w(h + d, function () {
                        c.cursor && a(document.body).removeClass(c.cursor),
                            v.off("resize" + p);
                    }),
                    w("Resize" + d, b.resizeImage),
                    b.isLowIE && w("AfterChange", b.resizeImage);
            },
            resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE &&
                        (c =
                            parseInt(a.img.css("padding-top"), 10) +
                            parseInt(a.img.css("padding-bottom"), 10)),
                        a.img.css("max-height", b.wH - c);
                }
            },
            _onImageHasSize: function (a) {
                a.img &&
                    ((a.hasSize = !0),
                    L && clearInterval(L),
                    (a.isCheckingImgSize = !1),
                    y("ImageHasSize", a),
                    a.imgHidden &&
                        (b.content && b.content.removeClass("mfp-loading"),
                        (a.imgHidden = !1)));
            },
            findImageSize: function (a) {
                var c = 0,
                    d = a.img[0],
                    e = function (f) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                return d.naturalWidth > 0
                                    ? void b._onImageHasSize(a)
                                    : (c > 200 && clearInterval(L),
                                      c++,
                                      void (3 === c
                                          ? e(10)
                                          : 40 === c
                                          ? e(50)
                                          : 100 === c && e(500)));
                            }, f));
                    };
                e(1);
            },
            getImage: function (c, d) {
                var e = 0,
                    f = function () {
                        c &&
                            (c.img[0].complete
                                ? (c.img.off(".mfploader"),
                                  c === b.currItem &&
                                      (b._onImageHasSize(c),
                                      b.updateStatus("ready")),
                                  (c.hasSize = !0),
                                  (c.loaded = !0),
                                  y("ImageLoadComplete"))
                                : (e++, 200 > e ? setTimeout(f, 100) : g()));
                    },
                    g = function () {
                        c &&
                            (c.img.off(".mfploader"),
                            c === b.currItem &&
                                (b._onImageHasSize(c),
                                b.updateStatus(
                                    "error",
                                    h.tError.replace("%url%", c.src)
                                )),
                            (c.hasSize = !0),
                            (c.loaded = !0),
                            (c.loadError = !0));
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    (j.className = "mfp-img"),
                        c.el &&
                            c.el.find("img").length &&
                            (j.alt = c.el.find("img").attr("alt")),
                        (c.img = a(j)
                            .on("load.mfploader", f)
                            .on("error.mfploader", g)),
                        (j.src = c.src),
                        i.is("img") && (c.img = c.img.clone()),
                        (j = c.img[0]),
                        j.naturalWidth > 0
                            ? (c.hasSize = !0)
                            : j.width || (c.hasSize = !1);
                }
                return (
                    b._parseMarkup(
                        d,
                        { title: M(c), img_replaceWith: c.img },
                        c
                    ),
                    b.resizeImage(),
                    c.hasSize
                        ? (L && clearInterval(L),
                          c.loadError
                              ? (d.addClass("mfp-loading"),
                                b.updateStatus(
                                    "error",
                                    h.tError.replace("%url%", c.src)
                                ))
                              : (d.removeClass("mfp-loading"),
                                b.updateStatus("ready")),
                          d)
                        : (b.updateStatus("loading"),
                          (c.loading = !0),
                          c.hasSize ||
                              ((c.imgHidden = !0),
                              d.addClass("mfp-loading"),
                              b.findImageSize(c)),
                          d)
                );
            },
        },
    });
    var N,
        O = function () {
            return (
                void 0 === N &&
                    (N =
                        void 0 !==
                        document.createElement("p").style.MozTransform),
                N
            );
        };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (a) {
                return a.is("img") ? a : a.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var a,
                    c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e,
                        f,
                        g = c.duration,
                        j = function (a) {
                            var b = a
                                    .clone()
                                    .removeAttr("style")
                                    .removeAttr("class")
                                    .addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden",
                                },
                                f = "transition";
                            return (
                                (e["-webkit-" + f] =
                                    e["-moz-" + f] =
                                    e["-o-" + f] =
                                    e[f] =
                                        d),
                                b.css(e),
                                b
                            );
                        },
                        k = function () {
                            b.content.css("visibility", "visible");
                        };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (
                                (clearTimeout(e),
                                b.content.css("visibility", "hidden"),
                                (a = b._getItemToZoom()),
                                !a)
                            )
                                return void k();
                            (f = j(a)),
                                f.css(b._getOffset()),
                                b.wrap.append(f),
                                (e = setTimeout(function () {
                                    f.css(b._getOffset(!0)),
                                        (e = setTimeout(function () {
                                            k(),
                                                setTimeout(function () {
                                                    f.remove(),
                                                        (a = f = null),
                                                        y("ZoomAnimationEnded");
                                                }, 16);
                                        }, g));
                                }, 16));
                        }
                    }),
                        w(i + d, function () {
                            if (b._allowZoom()) {
                                if (
                                    (clearTimeout(e),
                                    (b.st.removalDelay = g),
                                    !a)
                                ) {
                                    if (((a = b._getItemToZoom()), !a)) return;
                                    f = j(a);
                                }
                                f.css(b._getOffset(!0)),
                                    b.wrap.append(f),
                                    b.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        f.css(b._getOffset());
                                    }, 16);
                            }
                        }),
                        w(h + d, function () {
                            b._allowZoom() &&
                                (k(), f && f.remove(), (a = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === b.currItem.type;
            },
            _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1;
            },
            _getOffset: function (c) {
                var d;
                d = c
                    ? b.currItem.img
                    : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
                };
                return (
                    O()
                        ? (h["-moz-transform"] = h.transform =
                              "translate(" + e.left + "px," + e.top + "px)")
                        : ((h.left = e.left), (h.top = e.top)),
                    h
                );
            },
        },
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function (a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length &&
                    (a || (c[0].src = Q),
                    b.isIE8 && c.css("display", a ? "block" : "none"));
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1",
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1",
                },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                b.types.push(P),
                    w("BeforeChange", function (a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0));
                    }),
                    w(h + "." + P, function () {
                        R();
                    });
            },
            getIframe: function (c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1
                        ? (this.id &&
                              (e =
                                  "string" == typeof this.id
                                      ? e.substr(
                                            e.lastIndexOf(this.id) +
                                                this.id.length,
                                            e.length
                                        )
                                      : this.id.call(this, e)),
                          (e = this.src.replace("%id%", e)),
                          !1)
                        : void 0;
                });
                var g = {};
                return (
                    f.srcAction && (g[f.srcAction] = e),
                    b._parseMarkup(d, g, c),
                    b.updateStatus("ready"),
                    d
                );
            },
        },
    });
    var S = function (a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a;
        },
        T = function (a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup:
                '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return (
                    (b.direction = !0),
                    c && c.enabled
                        ? ((f += " mfp-gallery"),
                          w(m + e, function () {
                              c.navigateByImgClick &&
                                  b.wrap.on(
                                      "click" + e,
                                      ".mfp-img",
                                      function () {
                                          return b.items.length > 1
                                              ? (b.next(), !1)
                                              : void 0;
                                      }
                                  ),
                                  d.on("keydown" + e, function (a) {
                                      37 === a.keyCode
                                          ? b.prev()
                                          : 39 === a.keyCode && b.next();
                                  });
                          }),
                          w("UpdateStatus" + e, function (a, c) {
                              c.text &&
                                  (c.text = T(
                                      c.text,
                                      b.currItem.index,
                                      b.items.length
                                  ));
                          }),
                          w(l + e, function (a, d, e, f) {
                              var g = b.items.length;
                              e.counter =
                                  g > 1 ? T(c.tCounter, f.index, g) : "";
                          }),
                          w("BuildControls" + e, function () {
                              if (
                                  b.items.length > 1 &&
                                  c.arrows &&
                                  !b.arrowLeft
                              ) {
                                  var d = c.arrowMarkup,
                                      e = (b.arrowLeft = a(
                                          d
                                              .replace(/%title%/gi, c.tPrev)
                                              .replace(/%dir%/gi, "left")
                                      ).addClass(s)),
                                      f = (b.arrowRight = a(
                                          d
                                              .replace(/%title%/gi, c.tNext)
                                              .replace(/%dir%/gi, "right")
                                      ).addClass(s));
                                  e.click(function () {
                                      b.prev();
                                  }),
                                      f.click(function () {
                                          b.next();
                                      }),
                                      b.container.append(e.add(f));
                              }
                          }),
                          w(n + e, function () {
                              b._preloadTimeout &&
                                  clearTimeout(b._preloadTimeout),
                                  (b._preloadTimeout = setTimeout(function () {
                                      b.preloadNearbyImages(),
                                          (b._preloadTimeout = null);
                                  }, 16));
                          }),
                          void w(h + e, function () {
                              d.off(e),
                                  b.wrap.off("click" + e),
                                  (b.arrowRight = b.arrowLeft = null);
                          }))
                        : !1
                );
            },
            next: function () {
                (b.direction = !0),
                    (b.index = S(b.index + 1)),
                    b.updateItemHTML();
            },
            prev: function () {
                (b.direction = !1),
                    (b.index = S(b.index - 1)),
                    b.updateItemHTML();
            },
            goTo: function (a) {
                (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var a,
                    c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a);
            },
            _preloadItem: function (c) {
                if (((c = S(c)), !b.items[c].preloaded)) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                        y("LazyLoad", d),
                        "image" === d.type &&
                            (d.img = a('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    d.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (d.hasSize = !0),
                                        (d.loadError = !0),
                                        y("LazyLoadError", d);
                                })
                                .attr("src", d.src)),
                        (d.preloaded = !0);
                }
            },
        },
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return "@2x" + a;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    (c = isNaN(c) ? c() : c),
                        c > 1 &&
                            (w("ImageHasSize." + U, function (a, b) {
                                b.img.css({
                                    "max-width": b.img[0].naturalWidth / c,
                                    width: "100%",
                                });
                            }),
                            w("ElementParse." + U, function (b, d) {
                                d.src = a.replaceSrc(d, c);
                            }));
                }
            },
        },
    }),
        A();
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], a)
        : a(jQuery);
})(function (a) {
    "use strict";
    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g))
            return (
                String(a).match(/^[0-9]*$/) && (a = Number(a)),
                String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
                new Date(a)
            );
        throw new Error("Couldn't cast `" + a + "` to a date object.");
    }
    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b);
    }
    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    (h = h[2]),
                        i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
                        null !== m &&
                            ("!" === k && (m = e(l, m)),
                            "" === k && m < 10 && (m = "0" + m.toString()),
                            (b = b.replace(j, m.toString())));
                }
            return (b = b.replace(/%%/, "%"));
        };
    }
    function e(a, b) {
        var c = "s",
            d = "";
        return (
            a &&
                ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
                1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
            Math.abs(b) > 1 ? c : d
        );
    }
    var f = [],
        g = [],
        h = { precision: 100, elapse: !1, defer: !1 };
    g.push(/^[0-9]*$/.source),
        g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
        g.push(
            /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
        ),
        (g = new RegExp(g.join("|")));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds",
        },
        j = function (b, c, d) {
            (this.el = b),
                (this.$el = a(b)),
                (this.interval = null),
                (this.offset = {}),
                (this.options = a.extend({}, h)),
                (this.firstTick = !0),
                (this.instanceNumber = f.length),
                f.push(this),
                this.$el.data("countdown-instance", this.instanceNumber),
                d &&
                    ("function" == typeof d
                        ? (this.$el.on("update.countdown", d),
                          this.$el.on("stoped.countdown", d),
                          this.$el.on("finish.countdown", d))
                        : (this.options = a.extend({}, h, d))),
                this.setFinalDate(c),
                this.options.defer === !1 && this.start();
        };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
                (this.interval = setInterval(function () {
                    a.update.call(a);
                }, this.options.precision));
        },
        stop: function () {
            clearInterval(this.interval),
                (this.interval = null),
                this.dispatchEvent("stoped");
        },
        toggle: function () {
            this.interval ? this.stop() : this.start();
        },
        pause: function () {
            this.stop();
        },
        resume: function () {
            this.start();
        },
        remove: function () {
            this.stop.call(this),
                (f[this.instanceNumber] = null),
                delete this.$el.data().countdownInstance;
        },
        setFinalDate: function (a) {
            this.finalDate = b(a);
        },
        update: function () {
            if (0 === this.$el.closest("html").length)
                return void this.remove();
            var a,
                b = new Date();
            return (
                (a = this.finalDate.getTime() - b.getTime()),
                (a = Math.ceil(a / 1e3)),
                (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
                this.totalSecsLeft === a || this.firstTick
                    ? void (this.firstTick = !1)
                    : ((this.totalSecsLeft = a),
                      (this.elapsed = b >= this.finalDate),
                      (this.offset = {
                          seconds: this.totalSecsLeft % 60,
                          minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                          hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                          days:
                              Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                          daysToWeek:
                              Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                          daysToMonth: Math.floor(
                              (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
                          ),
                          weeks: Math.floor(
                              this.totalSecsLeft / 60 / 60 / 24 / 7
                          ),
                          weeksToMonth:
                              Math.floor(
                                  this.totalSecsLeft / 60 / 60 / 24 / 7
                              ) % 4,
                          months: Math.floor(
                              this.totalSecsLeft / 60 / 60 / 24 / 30.4368
                          ),
                          years: Math.abs(
                              this.finalDate.getFullYear() - b.getFullYear()
                          ),
                          totalDays: Math.floor(
                              this.totalSecsLeft / 60 / 60 / 24
                          ),
                          totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                          totalMinutes: Math.floor(this.totalSecsLeft / 60),
                          totalSeconds: this.totalSecsLeft,
                      }),
                      void (this.options.elapse || 0 !== this.totalSecsLeft
                          ? this.dispatchEvent("update")
                          : (this.stop(), this.dispatchEvent("finish"))))
            );
        },
        dispatchEvent: function (b) {
            var c = a.Event(b + ".countdown");
            (c.finalDate = this.finalDate),
                (c.elapsed = this.elapsed),
                (c.offset = a.extend({}, this.offset)),
                (c.strftime = d(this.offset)),
                this.$el.trigger(c);
        },
    }),
        (a.fn.countdown = function () {
            var b = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var c = a(this).data("countdown-instance");
                if (void 0 !== c) {
                    var d = f[c],
                        e = b[0];
                    j.prototype.hasOwnProperty(e)
                        ? d[e].apply(d, b.slice(1))
                        : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                        ? (d.setFinalDate.call(d, e), d.start())
                        : a.error(
                              "Method %s does not exist on jQuery.countdown".replace(
                                  /\%s/gi,
                                  e
                              )
                          );
                } else new j(this, b[0], b[1]);
            });
        });
});

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
    "use strict";
    function t(o) {
        if (!o) throw new Error("No options passed to Waypoint constructor");
        if (!o.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!o.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        (this.key = "waypoint-" + e),
            (this.options = t.Adapter.extend({}, t.defaults, o)),
            (this.element = this.options.element),
            (this.adapter = new t.Adapter(this.element)),
            (this.callback = o.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
            })),
            (this.context = t.Context.findOrCreateByElement(
                this.options.context
            )),
            t.offsetAliases[this.options.offset] &&
                (this.options.offset = t.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            (i[this.key] = this),
            (e += 1);
    }
    var e = 0,
        i = {};
    (t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t);
    }),
        (t.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (t.prototype.destroy = function () {
            this.context.remove(this),
                this.group.remove(this),
                delete i[this.key];
        }),
        (t.prototype.disable = function () {
            return (this.enabled = !1), this;
        }),
        (t.prototype.enable = function () {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (t.prototype.next = function () {
            return this.group.next(this);
        }),
        (t.prototype.previous = function () {
            return this.group.previous(this);
        }),
        (t.invokeAll = function (t) {
            var e = [];
            for (var o in i) e.push(i[o]);
            for (var n = 0, r = e.length; r > n; n++) e[n][t]();
        }),
        (t.destroyAll = function () {
            t.invokeAll("destroy");
        }),
        (t.disableAll = function () {
            t.invokeAll("disable");
        }),
        (t.enableAll = function () {
            t.Context.refreshAll();
            for (var e in i) i[e].enabled = !0;
            return this;
        }),
        (t.refreshAll = function () {
            t.Context.refreshAll();
        }),
        (t.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (t.viewportWidth = function () {
            return document.documentElement.clientWidth;
        }),
        (t.adapters = []),
        (t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0,
        }),
        (t.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = t);
})(),
    (function () {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }
        function e(t) {
            (this.element = t),
                (this.Adapter = n.Adapter),
                (this.adapter = new this.Adapter(t)),
                (this.key = "waypoint-context-" + i),
                (this.didScroll = !1),
                (this.didResize = !1),
                (this.oldScroll = {
                    x: this.adapter.scrollLeft(),
                    y: this.adapter.scrollTop(),
                }),
                (this.waypoints = { vertical: {}, horizontal: {} }),
                (t.waypointContextKey = this.key),
                (o[t.waypointContextKey] = this),
                (i += 1),
                n.windowContext ||
                    ((n.windowContext = !0), (n.windowContext = new e(window))),
                this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        (e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
            (e.prototype.checkEmpty = function () {
                var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                    e = this.Adapter.isEmptyObject(this.waypoints.vertical),
                    i = this.element == this.element.window;
                t &&
                    e &&
                    !i &&
                    (this.adapter.off(".waypoints"), delete o[this.key]);
            }),
            (e.prototype.createThrottledResizeHandler = function () {
                function t() {
                    e.handleResize(), (e.didResize = !1);
                }
                var e = this;
                this.adapter.on("resize.waypoints", function () {
                    e.didResize ||
                        ((e.didResize = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.createThrottledScrollHandler = function () {
                function t() {
                    e.handleScroll(), (e.didScroll = !1);
                }
                var e = this;
                this.adapter.on("scroll.waypoints", function () {
                    (!e.didScroll || n.isTouch) &&
                        ((e.didScroll = !0), n.requestAnimationFrame(t));
                });
            }),
            (e.prototype.handleResize = function () {
                n.Context.refreshAll();
            }),
            (e.prototype.handleScroll = function () {
                var t = {},
                    e = {
                        horizontal: {
                            newScroll: this.adapter.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                        },
                        vertical: {
                            newScroll: this.adapter.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                        },
                    };
                for (var i in e) {
                    var o = e[i],
                        n = o.newScroll > o.oldScroll,
                        r = n ? o.forward : o.backward;
                    for (var s in this.waypoints[i]) {
                        var a = this.waypoints[i][s];
                        if (null !== a.triggerPoint) {
                            var l = o.oldScroll < a.triggerPoint,
                                h = o.newScroll >= a.triggerPoint,
                                p = l && h,
                                u = !l && !h;
                            (p || u) &&
                                (a.queueTrigger(r), (t[a.group.id] = a.group));
                        }
                    }
                }
                for (var c in t) t[c].flushTriggers();
                this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll,
                };
            }),
            (e.prototype.innerHeight = function () {
                return this.element == this.element.window
                    ? n.viewportHeight()
                    : this.adapter.innerHeight();
            }),
            (e.prototype.remove = function (t) {
                delete this.waypoints[t.axis][t.key], this.checkEmpty();
            }),
            (e.prototype.innerWidth = function () {
                return this.element == this.element.window
                    ? n.viewportWidth()
                    : this.adapter.innerWidth();
            }),
            (e.prototype.destroy = function () {
                var t = [];
                for (var e in this.waypoints)
                    for (var i in this.waypoints[e])
                        t.push(this.waypoints[e][i]);
                for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
            }),
            (e.prototype.refresh = function () {
                var t,
                    e = this.element == this.element.window,
                    i = e ? void 0 : this.adapter.offset(),
                    o = {};
                this.handleScroll(),
                    (t = {
                        horizontal: {
                            contextOffset: e ? 0 : i.left,
                            contextScroll: e ? 0 : this.oldScroll.x,
                            contextDimension: this.innerWidth(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left",
                        },
                        vertical: {
                            contextOffset: e ? 0 : i.top,
                            contextScroll: e ? 0 : this.oldScroll.y,
                            contextDimension: this.innerHeight(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top",
                        },
                    });
                for (var r in t) {
                    var s = t[r];
                    for (var a in this.waypoints[r]) {
                        var l,
                            h,
                            p,
                            u,
                            c,
                            d = this.waypoints[r][a],
                            f = d.options.offset,
                            w = d.triggerPoint,
                            y = 0,
                            g = null == w;
                        d.element !== d.element.window &&
                            (y = d.adapter.offset()[s.offsetProp]),
                            "function" == typeof f
                                ? (f = f.apply(d))
                                : "string" == typeof f &&
                                  ((f = parseFloat(f)),
                                  d.options.offset.indexOf("%") > -1 &&
                                      (f = Math.ceil(
                                          (s.contextDimension * f) / 100
                                      ))),
                            (l = s.contextScroll - s.contextOffset),
                            (d.triggerPoint = Math.floor(y + l - f)),
                            (h = w < s.oldScroll),
                            (p = d.triggerPoint >= s.oldScroll),
                            (u = h && p),
                            (c = !h && !p),
                            !g && u
                                ? (d.queueTrigger(s.backward),
                                  (o[d.group.id] = d.group))
                                : !g && c
                                ? (d.queueTrigger(s.forward),
                                  (o[d.group.id] = d.group))
                                : g &&
                                  s.oldScroll >= d.triggerPoint &&
                                  (d.queueTrigger(s.forward),
                                  (o[d.group.id] = d.group));
                    }
                }
                return (
                    n.requestAnimationFrame(function () {
                        for (var t in o) o[t].flushTriggers();
                    }),
                    this
                );
            }),
            (e.findOrCreateByElement = function (t) {
                return e.findByElement(t) || new e(t);
            }),
            (e.refreshAll = function () {
                for (var t in o) o[t].refresh();
            }),
            (e.findByElement = function (t) {
                return o[t.waypointContextKey];
            }),
            (window.onload = function () {
                r && r(), e.refreshAll();
            }),
            (n.requestAnimationFrame = function (e) {
                var i =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    t;
                i.call(window, e);
            }),
            (n.Context = e);
    })(),
    (function () {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }
        function i(t) {
            (this.name = t.name),
                (this.axis = t.axis),
                (this.id = this.name + "-" + this.axis),
                (this.waypoints = []),
                this.clearTriggerQueues(),
                (o[this.axis][this.name] = this);
        }
        var o = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        (i.prototype.add = function (t) {
            this.waypoints.push(t);
        }),
            (i.prototype.clearTriggerQueues = function () {
                this.triggerQueues = { up: [], down: [], left: [], right: [] };
            }),
            (i.prototype.flushTriggers = function () {
                for (var i in this.triggerQueues) {
                    var o = this.triggerQueues[i],
                        n = "up" === i || "left" === i;
                    o.sort(n ? e : t);
                    for (var r = 0, s = o.length; s > r; r += 1) {
                        var a = o[r];
                        (a.options.continuous || r === o.length - 1) &&
                            a.trigger([i]);
                    }
                }
                this.clearTriggerQueues();
            }),
            (i.prototype.next = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints),
                    o = i === this.waypoints.length - 1;
                return o ? null : this.waypoints[i + 1];
            }),
            (i.prototype.previous = function (e) {
                this.waypoints.sort(t);
                var i = n.Adapter.inArray(e, this.waypoints);
                return i ? this.waypoints[i - 1] : null;
            }),
            (i.prototype.queueTrigger = function (t, e) {
                this.triggerQueues[e].push(t);
            }),
            (i.prototype.remove = function (t) {
                var e = n.Adapter.inArray(t, this.waypoints);
                e > -1 && this.waypoints.splice(e, 1);
            }),
            (i.prototype.first = function () {
                return this.waypoints[0];
            }),
            (i.prototype.last = function () {
                return this.waypoints[this.waypoints.length - 1];
            }),
            (i.findOrCreate = function (t) {
                return o[t.axis][t.name] || new i(t);
            }),
            (n.Group = i);
    })(),
    (function () {
        "use strict";
        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(
            [
                "innerHeight",
                "innerWidth",
                "off",
                "offset",
                "on",
                "outerHeight",
                "outerWidth",
                "scrollLeft",
                "scrollTop",
            ],
            function (e, i) {
                t.prototype[i] = function () {
                    var t = Array.prototype.slice.call(arguments);
                    return this.$element[i].apply(this.$element, t);
                };
            }
        ),
            e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
                t[o] = e[o];
            }),
            i.adapters.push({ name: "jquery", Adapter: t }),
            (i.Adapter = t);
    })(),
    (function () {
        "use strict";
        function t(t) {
            return function () {
                var i = [],
                    o = arguments[0];
                return (
                    t.isFunction(arguments[0]) &&
                        ((o = t.extend({}, arguments[1])),
                        (o.handler = arguments[0])),
                    this.each(function () {
                        var n = t.extend({}, o, { element: this });
                        "string" == typeof n.context &&
                            (n.context = t(this).closest(n.context)[0]),
                            i.push(new e(n));
                    }),
                    i
                );
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
            window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })();

/*!
 *
 * jquery.counterup.js
 * https://github.com/bfintal/Counter-Up
 * v1.0
 *
 */ (function ($) {
    "use strict";
    $.fn.counterUp = function (options) {
        var settings = $.extend(
                {
                    time: 400,
                    delay: 10,
                    offset: 100,
                    beginAt: 0,
                    formatter: false,
                    context: "window",
                    callback: function () {},
                },
                options
            ),
            s;
        return this.each(function () {
            var $this = $(this),
                counter = {
                    time: $(this).data("counterup-time") || settings.time,
                    delay: $(this).data("counterup-delay") || settings.delay,
                    offset: $(this).data("counterup-offset") || settings.offset,
                    beginAt:
                        $(this).data("counterup-beginat") || settings.beginAt,
                    context:
                        $(this).data("counterup-context") || settings.context,
                };
            var counterUpper = function () {
                var nums = [];
                var divisions = counter.time / counter.delay;
                var num = $(this).attr("data-num")
                    ? $(this).attr("data-num")
                    : $this.text();
                var isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, "");
                var decimalPlaces = (num.split(".")[1] || []).length;
                if (counter.beginAt > num) counter.beginAt = num;
                var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
                if (isTime) {
                    var times = num.split(":"),
                        m = 1;
                    s = 0;
                    while (times.length > 0) {
                        s += m * parseInt(times.pop(), 10);
                        m *= 60;
                    }
                }
                for (
                    var i = divisions;
                    i >= (counter.beginAt / num) * divisions;
                    i--
                ) {
                    var newNum = parseFloat((num / divisions) * i).toFixed(
                        decimalPlaces
                    );
                    if (isTime) {
                        newNum = parseInt((s / divisions) * i);
                        var hours = parseInt(newNum / 3600) % 24;
                        var minutes = parseInt(newNum / 60) % 60;
                        var seconds = parseInt(newNum % 60, 10);
                        newNum =
                            (hours < 10 ? "0" + hours : hours) +
                            ":" +
                            (minutes < 10 ? "0" + minutes : minutes) +
                            ":" +
                            (seconds < 10 ? "0" + seconds : seconds);
                    }
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum
                                .toString()
                                .replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
                        }
                    }
                    if (settings.formatter) {
                        newNum = settings.formatter.call(this, newNum);
                    }
                    nums.unshift(newNum);
                }
                $this.data("counterup-nums", nums);
                $this.text(counter.beginAt);
                var f = function () {
                    if (!$this.data("counterup-nums")) {
                        settings.callback.call(this);
                        return;
                    }
                    $this.html($this.data("counterup-nums").shift());
                    if ($this.data("counterup-nums").length) {
                        setTimeout($this.data("counterup-func"), counter.delay);
                    } else {
                        $this.data("counterup-nums", null);
                        $this.data("counterup-func", null);
                        settings.callback.call(this);
                    }
                };
                $this.data("counterup-func", f);
                setTimeout($this.data("counterup-func"), counter.delay);
            };
            $this.waypoint(
                function (direction) {
                    counterUpper();
                    this.destroy();
                },
                { offset: counter.offset + "%", context: counter.context }
            );
        });
    };
})(jQuery);

/*
 *
 * scrollup
 * Url: http://markgoodyear.com/labs/scrollup/
 * v2.4.1
 *
 */
!(function (l, o, e) {
    "use strict";
    (l.fn.scrollUp = function (o) {
        l.data(e.body, "scrollUp") ||
            (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
    }),
        (l.fn.scrollUp.init = function (r) {
            var s,
                t,
                c,
                i,
                n,
                a,
                d,
                p = (l.fn.scrollUp.settings = l.extend(
                    {},
                    l.fn.scrollUp.defaults,
                    r
                )),
                f = !1;
            switch (
                ((d = p.scrollTrigger
                    ? l(p.scrollTrigger)
                    : l("<a/>", { id: p.scrollName, href: "#top" })),
                p.scrollTitle && d.attr("title", p.scrollTitle),
                d.appendTo("body"),
                p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
                d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
                p.activeOverlay &&
                    l("<div/>", { id: p.scrollName + "-active" })
                        .css({
                            position: "absolute",
                            top: p.scrollDistance + "px",
                            width: "100%",
                            borderTop: "1px dotted" + p.activeOverlay,
                            zIndex: p.zIndex,
                        })
                        .appendTo("body"),
                p.animation)
            ) {
                case "fade":
                    (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
                    break;
                case "slide":
                    (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
                    break;
                default:
                    (s = "show"), (t = "hide"), (c = 0);
            }
            (i =
                "top" === p.scrollFrom
                    ? p.scrollDistance
                    : l(e).height() - l(o).height() - p.scrollDistance),
                (n = l(o).scroll(function () {
                    l(o).scrollTop() > i
                        ? f || (d[s](c), (f = !0))
                        : f && (d[t](c), (f = !1));
                })),
                p.scrollTarget
                    ? "number" == typeof p.scrollTarget
                        ? (a = p.scrollTarget)
                        : "string" == typeof p.scrollTarget &&
                          (a = Math.floor(l(p.scrollTarget).offset().top))
                    : (a = 0),
                d.click(function (o) {
                    o.preventDefault(),
                        l("html, body").animate(
                            { scrollTop: a },
                            p.scrollSpeed,
                            p.easingType
                        );
                });
        }),
        (l.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647,
        }),
        (l.fn.scrollUp.destroy = function (r) {
            l.removeData(e.body, "scrollUp"),
                l("#" + l.fn.scrollUp.settings.scrollName).remove(),
                l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
                l.fn.jquery.split(".")[1] >= 7
                    ? l(o).off("scroll", r)
                    : l(o).unbind("scroll", r);
        }),
        (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function (a, b, c, d) {
    function e(b, c) {
        (this.settings = null),
            (this.options = a.extend({}, e.Defaults, c)),
            (this.$element = a(b)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: { start: null, current: null },
                direction: null,
            }),
            (this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"],
                },
            }),
            a.each(
                ["onResize", "onThrottledResize"],
                a.proxy(function (b, c) {
                    this._handlers[c] = a.proxy(this[c], this);
                }, this)
            ),
            a.each(
                e.Plugins,
                a.proxy(function (a, b) {
                    this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] =
                        new b(this);
                }, this)
            ),
            a.each(
                e.Workers,
                a.proxy(function (b, c) {
                    this._pipe.push({
                        filter: c.filter,
                        run: a.proxy(c.run, this),
                    });
                }, this)
            ),
            this.setup(),
            this.initialize();
    }
    (e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
    }),
        (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (e.Type = { Event: "event", State: "state" }),
        (e.Plugins = {}),
        (e.Workers = [
            {
                filter: ["width", "settings"],
                run: function () {
                    this._width = this.$element.width();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    a.current =
                        this._items &&
                        this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    this.$stage.children(".cloned").remove();
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this.settings.margin || "",
                        c = !this.settings.autoWidth,
                        d = this.settings.rtl,
                        e = {
                            width: "auto",
                            "margin-left": d ? b : "",
                            "margin-right": d ? "" : b,
                        };
                    !c && this.$stage.children().css(e), (a.css = e);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b =
                            (this.width() / this.settings.items).toFixed(3) -
                            this.settings.margin,
                        c = null,
                        d = this._items.length,
                        e = !this.settings.autoWidth,
                        f = [];
                    for (a.items = { merge: !1, width: b }; d--; )
                        (c = this._mergers[d]),
                            (c =
                                (this.settings.mergeFit &&
                                    Math.min(c, this.settings.items)) ||
                                c),
                            (a.items.merge = c > 1 || a.items.merge),
                            (f[d] = e ? b * c : this._items[d].width());
                    this._widths = f;
                },
            },
            {
                filter: ["items", "settings"],
                run: function () {
                    var b = [],
                        c = this._items,
                        d = this.settings,
                        e = Math.max(2 * d.items, 4),
                        f = 2 * Math.ceil(c.length / 2),
                        g =
                            d.loop && c.length
                                ? d.rewind
                                    ? e
                                    : Math.max(e, f)
                                : 0,
                        h = "",
                        i = "";
                    for (g /= 2; g--; )
                        b.push(this.normalize(b.length / 2, !0)),
                            (h += c[b[b.length - 1]][0].outerHTML),
                            b.push(
                                this.normalize(
                                    c.length - 1 - (b.length - 1) / 2,
                                    !0
                                )
                            ),
                            (i = c[b[b.length - 1]][0].outerHTML + i);
                    (this._clones = b),
                        a(h).addClass("cloned").appendTo(this.$stage),
                        a(i).addClass("cloned").prependTo(this.$stage);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    for (
                        var a = this.settings.rtl ? 1 : -1,
                            b = this._clones.length + this._items.length,
                            c = -1,
                            d = 0,
                            e = 0,
                            f = [];
                        ++c < b;

                    )
                        (d = f[c - 1] || 0),
                            (e =
                                this._widths[this.relative(c)] +
                                this.settings.margin),
                            f.push(d + e * a);
                    this._coordinates = f;
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function () {
                    var a = this.settings.stagePadding,
                        b = this._coordinates,
                        c = {
                            width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                            "padding-left": a || "",
                            "padding-right": a || "",
                        };
                    this.$stage.css(c);
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    var b = this._coordinates.length,
                        c = !this.settings.autoWidth,
                        d = this.$stage.children();
                    if (c && a.items.merge)
                        for (; b--; )
                            (a.css.width = this._widths[this.relative(b)]),
                                d.eq(b).css(a.css);
                    else c && ((a.css.width = a.items.width), d.css(a.css));
                },
            },
            {
                filter: ["items"],
                run: function () {
                    this._coordinates.length < 1 &&
                        this.$stage.removeAttr("style");
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function (a) {
                    (a.current = a.current
                        ? this.$stage.children().index(a.current)
                        : 0),
                        (a.current = Math.max(
                            this.minimum(),
                            Math.min(this.maximum(), a.current)
                        )),
                        this.reset(a.current);
                },
            },
            {
                filter: ["position"],
                run: function () {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function () {
                    var a,
                        b,
                        c,
                        d,
                        e = this.settings.rtl ? 1 : -1,
                        f = 2 * this.settings.stagePadding,
                        g = this.coordinates(this.current()) + f,
                        h = g + this.width() * e,
                        i = [];
                    for (c = 0, d = this._coordinates.length; c < d; c++)
                        (a = this._coordinates[c - 1] || 0),
                            (b = Math.abs(this._coordinates[c]) + f * e),
                            ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                                i.push(c);
                    this.$stage.children(".active").removeClass("active"),
                        this.$stage
                            .children(":eq(" + i.join("), :eq(") + ")")
                            .addClass("active"),
                        this.settings.center &&
                            (this.$stage
                                .children(".center")
                                .removeClass("center"),
                            this.$stage
                                .children()
                                .eq(this.current())
                                .addClass("center"));
                },
            },
        ]),
        (e.prototype.initialize = function () {
            if (
                (this.enter("initializing"),
                this.trigger("initialize"),
                this.$element.toggleClass(
                    this.settings.rtlClass,
                    this.settings.rtl
                ),
                this.settings.autoWidth && !this.is("pre-loading"))
            ) {
                var b, c, e;
                (b = this.$element.find("img")),
                    (c = this.settings.nestedItemSelector
                        ? "." + this.settings.nestedItemSelector
                        : d),
                    (e = this.$element.children(c).width()),
                    b.length && e <= 0 && this.preloadAutoWidthImages(b);
            }
            this.$element.addClass(this.options.loadingClass),
                (this.$stage = a(
                    "<" +
                        this.settings.stageElement +
                        ' class="' +
                        this.settings.stageClass +
                        '"/>'
                ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
                this.$element.append(this.$stage.parent()),
                this.replace(
                    this.$element.children().not(this.$stage.parent())
                ),
                this.$element.is(":visible")
                    ? this.refresh()
                    : this.invalidate("width"),
                this.$element
                    .removeClass(this.options.loadingClass)
                    .addClass(this.options.loadedClass),
                this.registerEventHandlers(),
                this.leave("initializing"),
                this.trigger("initialized");
        }),
        (e.prototype.setup = function () {
            var b = this.viewport(),
                c = this.options.responsive,
                d = -1,
                e = null;
            c
                ? (a.each(c, function (a) {
                      a <= b && a > d && (d = Number(a));
                  }),
                  (e = a.extend({}, this.options, c[d])),
                  "function" == typeof e.stagePadding &&
                      (e.stagePadding = e.stagePadding()),
                  delete e.responsive,
                  e.responsiveClass &&
                      this.$element.attr(
                          "class",
                          this.$element
                              .attr("class")
                              .replace(
                                  new RegExp(
                                      "(" +
                                          this.options.responsiveClass +
                                          "-)\\S+\\s",
                                      "g"
                                  ),
                                  "$1" + d
                              )
                      ))
                : (e = a.extend({}, this.options)),
                this.trigger("change", {
                    property: { name: "settings", value: e },
                }),
                (this._breakpoint = d),
                (this.settings = e),
                this.invalidate("settings"),
                this.trigger("changed", {
                    property: { name: "settings", value: this.settings },
                });
        }),
        (e.prototype.optionsLogic = function () {
            this.settings.autoWidth &&
                ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (e.prototype.prepare = function (b) {
            var c = this.trigger("prepare", { content: b });
            return (
                c.data ||
                    (c.data = a("<" + this.settings.itemElement + "/>")
                        .addClass(this.options.itemClass)
                        .append(b)),
                this.trigger("prepared", { content: c.data }),
                c.data
            );
        }),
        (e.prototype.update = function () {
            for (
                var b = 0,
                    c = this._pipe.length,
                    d = a.proxy(function (a) {
                        return this[a];
                    }, this._invalidated),
                    e = {};
                b < c;

            )
                (this._invalidated.all ||
                    a.grep(this._pipe[b].filter, d).length > 0) &&
                    this._pipe[b].run(e),
                    b++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (e.prototype.width = function (a) {
            switch ((a = a || e.Width.Default)) {
                case e.Width.Inner:
                case e.Width.Outer:
                    return this._width;
                default:
                    return (
                        this._width -
                        2 * this.settings.stagePadding +
                        this.settings.margin
                    );
            }
        }),
        (e.prototype.refresh = function () {
            this.enter("refreshing"),
                this.trigger("refresh"),
                this.setup(),
                this.optionsLogic(),
                this.$element.addClass(this.options.refreshClass),
                this.update(),
                this.$element.removeClass(this.options.refreshClass),
                this.leave("refreshing"),
                this.trigger("refreshed");
        }),
        (e.prototype.onThrottledResize = function () {
            b.clearTimeout(this.resizeTimer),
                (this.resizeTimer = b.setTimeout(
                    this._handlers.onResize,
                    this.settings.responsiveRefreshRate
                ));
        }),
        (e.prototype.onResize = function () {
            return (
                !!this._items.length &&
                this._width !== this.$element.width() &&
                !!this.$element.is(":visible") &&
                (this.enter("resizing"),
                this.trigger("resize").isDefaultPrevented()
                    ? (this.leave("resizing"), !1)
                    : (this.invalidate("width"),
                      this.refresh(),
                      this.leave("resizing"),
                      void this.trigger("resized")))
            );
        }),
        (e.prototype.registerEventHandlers = function () {
            a.support.transition &&
                this.$stage.on(
                    a.support.transition.end + ".owl.core",
                    a.proxy(this.onTransitionEnd, this)
                ),
                this.settings.responsive !== !1 &&
                    this.on(b, "resize", this._handlers.onThrottledResize),
                this.settings.mouseDrag &&
                    (this.$element.addClass(this.options.dragClass),
                    this.$stage.on(
                        "mousedown.owl.core",
                        a.proxy(this.onDragStart, this)
                    ),
                    this.$stage.on(
                        "dragstart.owl.core selectstart.owl.core",
                        function () {
                            return !1;
                        }
                    )),
                this.settings.touchDrag &&
                    (this.$stage.on(
                        "touchstart.owl.core",
                        a.proxy(this.onDragStart, this)
                    ),
                    this.$stage.on(
                        "touchcancel.owl.core",
                        a.proxy(this.onDragEnd, this)
                    ));
        }),
        (e.prototype.onDragStart = function (b) {
            var d = null;
            3 !== b.which &&
                (a.support.transform
                    ? ((d = this.$stage
                          .css("transform")
                          .replace(/.*\(|\)| /g, "")
                          .split(",")),
                      (d = {
                          x: d[16 === d.length ? 12 : 4],
                          y: d[16 === d.length ? 13 : 5],
                      }))
                    : ((d = this.$stage.position()),
                      (d = {
                          x: this.settings.rtl
                              ? d.left +
                                this.$stage.width() -
                                this.width() +
                                this.settings.margin
                              : d.left,
                          y: d.top,
                      })),
                this.is("animating") &&
                    (a.support.transform
                        ? this.animate(d.x)
                        : this.$stage.stop(),
                    this.invalidate("position")),
                this.$element.toggleClass(
                    this.options.grabClass,
                    "mousedown" === b.type
                ),
                this.speed(0),
                (this._drag.time = new Date().getTime()),
                (this._drag.target = a(b.target)),
                (this._drag.stage.start = d),
                (this._drag.stage.current = d),
                (this._drag.pointer = this.pointer(b)),
                a(c).on(
                    "mouseup.owl.core touchend.owl.core",
                    a.proxy(this.onDragEnd, this)
                ),
                a(c).one(
                    "mousemove.owl.core touchmove.owl.core",
                    a.proxy(function (b) {
                        var d = this.difference(
                            this._drag.pointer,
                            this.pointer(b)
                        );
                        a(c).on(
                            "mousemove.owl.core touchmove.owl.core",
                            a.proxy(this.onDragMove, this)
                        ),
                            (Math.abs(d.x) < Math.abs(d.y) &&
                                this.is("valid")) ||
                                (b.preventDefault(),
                                this.enter("dragging"),
                                this.trigger("drag"));
                    }, this)
                ));
        }),
        (e.prototype.onDragMove = function (a) {
            var b = null,
                c = null,
                d = null,
                e = this.difference(this._drag.pointer, this.pointer(a)),
                f = this.difference(this._drag.stage.start, e);
            this.is("dragging") &&
                (a.preventDefault(),
                this.settings.loop
                    ? ((b = this.coordinates(this.minimum())),
                      (c = this.coordinates(this.maximum() + 1) - b),
                      (f.x = ((((f.x - b) % c) + c) % c) + b))
                    : ((b = this.settings.rtl
                          ? this.coordinates(this.maximum())
                          : this.coordinates(this.minimum())),
                      (c = this.settings.rtl
                          ? this.coordinates(this.minimum())
                          : this.coordinates(this.maximum())),
                      (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
                      (f.x = Math.max(Math.min(f.x, b + d), c + d))),
                (this._drag.stage.current = f),
                this.animate(f.x));
        }),
        (e.prototype.onDragEnd = function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b)),
                e = this._drag.stage.current,
                f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
                this.$element.removeClass(this.options.grabClass),
                ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
                    (this.speed(
                        this.settings.dragEndSpeed || this.settings.smartSpeed
                    ),
                    this.current(
                        this.closest(e.x, 0 !== d.x ? f : this._drag.direction)
                    ),
                    this.invalidate("position"),
                    this.update(),
                    (this._drag.direction = f),
                    (Math.abs(d.x) > 3 ||
                        new Date().getTime() - this._drag.time > 300) &&
                        this._drag.target.one("click.owl.core", function () {
                            return !1;
                        })),
                this.is("dragging") &&
                    (this.leave("dragging"), this.trigger("dragged"));
        }),
        (e.prototype.closest = function (b, c) {
            var d = -1,
                e = 30,
                f = this.width(),
                g = this.coordinates();
            return (
                this.settings.freeDrag ||
                    a.each(
                        g,
                        a.proxy(function (a, h) {
                            return (
                                "left" === c && b > h - e && b < h + e
                                    ? (d = a)
                                    : "right" === c &&
                                      b > h - f - e &&
                                      b < h - f + e
                                    ? (d = a + 1)
                                    : this.op(b, "<", h) &&
                                      this.op(b, ">", g[a + 1] || h - f) &&
                                      (d = "left" === c ? a + 1 : a),
                                d === -1
                            );
                        }, this)
                    ),
                this.settings.loop ||
                    (this.op(b, ">", g[this.minimum()])
                        ? (d = b = this.minimum())
                        : this.op(b, "<", g[this.maximum()]) &&
                          (d = b = this.maximum())),
                d
            );
        }),
        (e.prototype.animate = function (b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
                c && (this.enter("animating"), this.trigger("translate")),
                a.support.transform3d && a.support.transition
                    ? this.$stage.css({
                          transform: "translate3d(" + b + "px,0px,0px)",
                          transition: this.speed() / 1e3 + "s",
                      })
                    : c
                    ? this.$stage.animate(
                          { left: b + "px" },
                          this.speed(),
                          this.settings.fallbackEasing,
                          a.proxy(this.onTransitionEnd, this)
                      )
                    : this.$stage.css({ left: b + "px" });
        }),
        (e.prototype.is = function (a) {
            return this._states.current[a] && this._states.current[a] > 0;
        }),
        (e.prototype.current = function (a) {
            if (a === d) return this._current;
            if (0 === this._items.length) return d;
            if (((a = this.normalize(a)), this._current !== a)) {
                var b = this.trigger("change", {
                    property: { name: "position", value: a },
                });
                b.data !== d && (a = this.normalize(b.data)),
                    (this._current = a),
                    this.invalidate("position"),
                    this.trigger("changed", {
                        property: { name: "position", value: this._current },
                    });
            }
            return this._current;
        }),
        (e.prototype.invalidate = function (b) {
            return (
                "string" === a.type(b) &&
                    ((this._invalidated[b] = !0),
                    this.is("valid") && this.leave("valid")),
                a.map(this._invalidated, function (a, b) {
                    return b;
                })
            );
        }),
        (e.prototype.reset = function (a) {
            (a = this.normalize(a)),
                a !== d &&
                    ((this._speed = 0),
                    (this._current = a),
                    this.suppress(["translate", "translated"]),
                    this.animate(this.coordinates(a)),
                    this.release(["translate", "translated"]));
        }),
        (e.prototype.normalize = function (a, b) {
            var c = this._items.length,
                e = b ? 0 : this._clones.length;
            return (
                !this.isNumeric(a) || c < 1
                    ? (a = d)
                    : (a < 0 || a >= c + e) &&
                      (a = ((((a - e / 2) % c) + c) % c) + e / 2),
                a
            );
        }),
        (e.prototype.relative = function (a) {
            return (a -= this._clones.length / 2), this.normalize(a, !0);
        }),
        (e.prototype.maximum = function (a) {
            var b,
                c,
                d,
                e = this.settings,
                f = this._coordinates.length;
            if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (
                    b = this._items.length,
                        c = this._items[--b].width(),
                        d = this.$element.width();
                    b-- &&
                    ((c += this._items[b].width() + this.settings.margin),
                    !(c > d));

                );
                f = b + 1;
            } else
                f = e.center
                    ? this._items.length - 1
                    : this._items.length - e.items;
            return a && (f -= this._clones.length / 2), Math.max(f, 0);
        }),
        (e.prototype.minimum = function (a) {
            return a ? 0 : this._clones.length / 2;
        }),
        (e.prototype.items = function (a) {
            return a === d
                ? this._items.slice()
                : ((a = this.normalize(a, !0)), this._items[a]);
        }),
        (e.prototype.mergers = function (a) {
            return a === d
                ? this._mergers.slice()
                : ((a = this.normalize(a, !0)), this._mergers[a]);
        }),
        (e.prototype.clones = function (b) {
            var c = this._clones.length / 2,
                e = c + this._items.length,
                f = function (a) {
                    return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
                };
            return b === d
                ? a.map(this._clones, function (a, b) {
                      return f(b);
                  })
                : a.map(this._clones, function (a, c) {
                      return a === b ? f(c) : null;
                  });
        }),
        (e.prototype.speed = function (a) {
            return a !== d && (this._speed = a), this._speed;
        }),
        (e.prototype.coordinates = function (b) {
            var c,
                e = 1,
                f = b - 1;
            return b === d
                ? a.map(
                      this._coordinates,
                      a.proxy(function (a, b) {
                          return this.coordinates(b);
                      }, this)
                  )
                : (this.settings.center
                      ? (this.settings.rtl && ((e = -1), (f = b + 1)),
                        (c = this._coordinates[b]),
                        (c +=
                            ((this.width() - c + (this._coordinates[f] || 0)) /
                                2) *
                            e))
                      : (c = this._coordinates[f] || 0),
                  (c = Math.ceil(c)));
        }),
        (e.prototype.duration = function (a, b, c) {
            return 0 === c
                ? 0
                : Math.min(Math.max(Math.abs(b - a), 1), 6) *
                      Math.abs(c || this.settings.smartSpeed);
        }),
        (e.prototype.to = function (a, b) {
            var c = this.current(),
                d = null,
                e = a - this.relative(c),
                f = (e > 0) - (e < 0),
                g = this._items.length,
                h = this.minimum(),
                i = this.maximum();
            this.settings.loop
                ? (!this.settings.rewind &&
                      Math.abs(e) > g / 2 &&
                      (e += f * -1 * g),
                  (a = c + e),
                  (d = ((((a - h) % g) + g) % g) + h),
                  d !== a &&
                      d - e <= i &&
                      d - e > 0 &&
                      ((c = d - e), (a = d), this.reset(c)))
                : this.settings.rewind
                ? ((i += 1), (a = ((a % i) + i) % i))
                : (a = Math.max(h, Math.min(i, a))),
                this.speed(this.duration(c, a, b)),
                this.current(a),
                this.$element.is(":visible") && this.update();
        }),
        (e.prototype.next = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) + 1, a);
        }),
        (e.prototype.prev = function (a) {
            (a = a || !1), this.to(this.relative(this.current()) - 1, a);
        }),
        (e.prototype.onTransitionEnd = function (a) {
            if (
                a !== d &&
                (a.stopPropagation(),
                (a.target || a.srcElement || a.originalTarget) !==
                    this.$stage.get(0))
            )
                return !1;
            this.leave("animating"), this.trigger("translated");
        }),
        (e.prototype.viewport = function () {
            var d;
            return (
                this.options.responsiveBaseElement !== b
                    ? (d = a(this.options.responsiveBaseElement).width())
                    : b.innerWidth
                    ? (d = b.innerWidth)
                    : c.documentElement && c.documentElement.clientWidth
                    ? (d = c.documentElement.clientWidth)
                    : console.warn("Can not detect viewport width."),
                d
            );
        }),
        (e.prototype.replace = function (b) {
            this.$stage.empty(),
                (this._items = []),
                b && (b = b instanceof jQuery ? b : a(b)),
                this.settings.nestedItemSelector &&
                    (b = b.find("." + this.settings.nestedItemSelector)),
                b
                    .filter(function () {
                        return 1 === this.nodeType;
                    })
                    .each(
                        a.proxy(function (a, b) {
                            (b = this.prepare(b)),
                                this.$stage.append(b),
                                this._items.push(b),
                                this._mergers.push(
                                    1 *
                                        b
                                            .find("[data-merge]")
                                            .addBack("[data-merge]")
                                            .attr("data-merge") || 1
                                );
                        }, this)
                    ),
                this.reset(
                    this.isNumeric(this.settings.startPosition)
                        ? this.settings.startPosition
                        : 0
                ),
                this.invalidate("items");
        }),
        (e.prototype.add = function (b, c) {
            var e = this.relative(this._current);
            (c = c === d ? this._items.length : this.normalize(c, !0)),
                (b = b instanceof jQuery ? b : a(b)),
                this.trigger("add", { content: b, position: c }),
                (b = this.prepare(b)),
                0 === this._items.length || c === this._items.length
                    ? (0 === this._items.length && this.$stage.append(b),
                      0 !== this._items.length && this._items[c - 1].after(b),
                      this._items.push(b),
                      this._mergers.push(
                          1 *
                              b
                                  .find("[data-merge]")
                                  .addBack("[data-merge]")
                                  .attr("data-merge") || 1
                      ))
                    : (this._items[c].before(b),
                      this._items.splice(c, 0, b),
                      this._mergers.splice(
                          c,
                          0,
                          1 *
                              b
                                  .find("[data-merge]")
                                  .addBack("[data-merge]")
                                  .attr("data-merge") || 1
                      )),
                this._items[e] && this.reset(this._items[e].index()),
                this.invalidate("items"),
                this.trigger("added", { content: b, position: c });
        }),
        (e.prototype.remove = function (a) {
            (a = this.normalize(a, !0)),
                a !== d &&
                    (this.trigger("remove", {
                        content: this._items[a],
                        position: a,
                    }),
                    this._items[a].remove(),
                    this._items.splice(a, 1),
                    this._mergers.splice(a, 1),
                    this.invalidate("items"),
                    this.trigger("removed", { content: null, position: a }));
        }),
        (e.prototype.preloadAutoWidthImages = function (b) {
            b.each(
                a.proxy(function (b, c) {
                    this.enter("pre-loading"),
                        (c = a(c)),
                        a(new Image())
                            .one(
                                "load",
                                a.proxy(function (a) {
                                    c.attr("src", a.target.src),
                                        c.css("opacity", 1),
                                        this.leave("pre-loading"),
                                        !this.is("pre-loading") &&
                                            !this.is("initializing") &&
                                            this.refresh();
                                }, this)
                            )
                            .attr(
                                "src",
                                c.attr("src") ||
                                    c.attr("data-src") ||
                                    c.attr("data-src-retina")
                            );
                }, this)
            );
        }),
        (e.prototype.destroy = function () {
            this.$element.off(".owl.core"),
                this.$stage.off(".owl.core"),
                a(c).off(".owl.core"),
                this.settings.responsive !== !1 &&
                    (b.clearTimeout(this.resizeTimer),
                    this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins) this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
                this.$stage.unwrap(),
                this.$stage.children().contents().unwrap(),
                this.$stage.children().unwrap(),
                this.$element
                    .removeClass(this.options.refreshClass)
                    .removeClass(this.options.loadingClass)
                    .removeClass(this.options.loadedClass)
                    .removeClass(this.options.rtlClass)
                    .removeClass(this.options.dragClass)
                    .removeClass(this.options.grabClass)
                    .attr(
                        "class",
                        this.$element
                            .attr("class")
                            .replace(
                                new RegExp(
                                    this.options.responsiveClass + "-\\S+\\s",
                                    "g"
                                ),
                                ""
                            )
                    )
                    .removeData("owl.carousel");
        }),
        (e.prototype.op = function (a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
                case "<":
                    return d ? a > c : a < c;
                case ">":
                    return d ? a < c : a > c;
                case ">=":
                    return d ? a <= c : a >= c;
                case "<=":
                    return d ? a >= c : a <= c;
            }
        }),
        (e.prototype.on = function (a, b, c, d) {
            a.addEventListener
                ? a.addEventListener(b, c, d)
                : a.attachEvent && a.attachEvent("on" + b, c);
        }),
        (e.prototype.off = function (a, b, c, d) {
            a.removeEventListener
                ? a.removeEventListener(b, c, d)
                : a.detachEvent && a.detachEvent("on" + b, c);
        }),
        (e.prototype.trigger = function (b, c, d, f, g) {
            var h = {
                    item: { count: this._items.length, index: this.current() },
                },
                i = a.camelCase(
                    a
                        .grep(["on", b, d], function (a) {
                            return a;
                        })
                        .join("-")
                        .toLowerCase()
                ),
                j = a.Event(
                    [b, "owl", d || "carousel"].join(".").toLowerCase(),
                    a.extend({ relatedTarget: this }, h, c)
                );
            return (
                this._supress[b] ||
                    (a.each(this._plugins, function (a, b) {
                        b.onTrigger && b.onTrigger(j);
                    }),
                    this.register({ type: e.Type.Event, name: b }),
                    this.$element.trigger(j),
                    this.settings &&
                        "function" == typeof this.settings[i] &&
                        this.settings[i].call(this, j)),
                j
            );
        }),
        (e.prototype.enter = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b] === d &&
                        (this._states.current[b] = 0),
                        this._states.current[b]++;
                }, this)
            );
        }),
        (e.prototype.leave = function (b) {
            a.each(
                [b].concat(this._states.tags[b] || []),
                a.proxy(function (a, b) {
                    this._states.current[b]--;
                }, this)
            );
        }),
        (e.prototype.register = function (b) {
            if (b.type === e.Type.Event) {
                if (
                    (a.event.special[b.name] || (a.event.special[b.name] = {}),
                    !a.event.special[b.name].owl)
                ) {
                    var c = a.event.special[b.name]._default;
                    (a.event.special[b.name]._default = function (a) {
                        return !c ||
                            !c.apply ||
                            (a.namespace && a.namespace.indexOf("owl") !== -1)
                            ? a.namespace && a.namespace.indexOf("owl") > -1
                            : c.apply(this, arguments);
                    }),
                        (a.event.special[b.name].owl = !0);
                }
            } else
                b.type === e.Type.State &&
                    (this._states.tags[b.name]
                        ? (this._states.tags[b.name] = this._states.tags[
                              b.name
                          ].concat(b.tags))
                        : (this._states.tags[b.name] = b.tags),
                    (this._states.tags[b.name] = a.grep(
                        this._states.tags[b.name],
                        a.proxy(function (c, d) {
                            return (
                                a.inArray(c, this._states.tags[b.name]) === d
                            );
                        }, this)
                    )));
        }),
        (e.prototype.suppress = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    this._supress[b] = !0;
                }, this)
            );
        }),
        (e.prototype.release = function (b) {
            a.each(
                b,
                a.proxy(function (a, b) {
                    delete this._supress[b];
                }, this)
            );
        }),
        (e.prototype.pointer = function (a) {
            var c = { x: null, y: null };
            return (
                (a = a.originalEvent || a || b.event),
                (a =
                    a.touches && a.touches.length
                        ? a.touches[0]
                        : a.changedTouches && a.changedTouches.length
                        ? a.changedTouches[0]
                        : a),
                a.pageX
                    ? ((c.x = a.pageX), (c.y = a.pageY))
                    : ((c.x = a.clientX), (c.y = a.clientY)),
                c
            );
        }),
        (e.prototype.isNumeric = function (a) {
            return !isNaN(parseFloat(a));
        }),
        (e.prototype.difference = function (a, b) {
            return { x: a.x - b.x, y: a.y - b.y };
        }),
        (a.fn.owlCarousel = function (b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var d = a(this),
                    f = d.data("owl.carousel");
                f ||
                    ((f = new e(this, "object" == typeof b && b)),
                    d.data("owl.carousel", f),
                    a.each(
                        [
                            "next",
                            "prev",
                            "to",
                            "destroy",
                            "refresh",
                            "replace",
                            "add",
                            "remove",
                        ],
                        function (b, c) {
                            f.register({ type: e.Type.Event, name: c }),
                                f.$element.on(
                                    c + ".owl.carousel.core",
                                    a.proxy(function (a) {
                                        a.namespace &&
                                            a.relatedTarget !== this &&
                                            (this.suppress([c]),
                                            f[c].apply(
                                                this,
                                                [].slice.call(arguments, 1)
                                            ),
                                            this.release([c]));
                                    }, f)
                                );
                        }
                    )),
                    "string" == typeof b &&
                        "_" !== b.charAt(0) &&
                        f[b].apply(f, c);
            });
        }),
        (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._interval = null),
                (this._visible = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.autoRefresh &&
                            this.watch();
                    }, this),
                }),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                )),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
            (e.prototype.watch = function () {
                this._interval ||
                    ((this._visible = this._core.$element.is(":visible")),
                    (this._interval = b.setInterval(
                        a.proxy(this.refresh, this),
                        this._core.settings.autoRefreshInterval
                    )));
            }),
            (e.prototype.refresh = function () {
                this._core.$element.is(":visible") !== this._visible &&
                    ((this._visible = !this._visible),
                    this._core.$element.toggleClass(
                        "owl-hidden",
                        !this._visible
                    ),
                    this._visible &&
                        this._core.invalidate("width") &&
                        this._core.refresh());
            }),
            (e.prototype.destroy = function () {
                var a, c;
                b.clearInterval(this._interval);
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._loaded = []),
                (this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                        a.proxy(function (b) {
                            if (
                                b.namespace &&
                                this._core.settings &&
                                this._core.settings.lazyLoad &&
                                ((b.property &&
                                    "position" == b.property.name) ||
                                    "initialized" == b.type)
                            )
                                for (
                                    var c = this._core.settings,
                                        e =
                                            (c.center &&
                                                Math.ceil(c.items / 2)) ||
                                            c.items,
                                        f = (c.center && e * -1) || 0,
                                        g =
                                            (b.property &&
                                            b.property.value !== d
                                                ? b.property.value
                                                : this._core.current()) + f,
                                        h = this._core.clones().length,
                                        i = a.proxy(function (a, b) {
                                            this.load(b);
                                        }, this);
                                    f++ < e;

                                )
                                    this.load(h / 2 + this._core.relative(g)),
                                        h &&
                                            a.each(
                                                this._core.clones(
                                                    this._core.relative(g)
                                                ),
                                                i
                                            ),
                                        g++;
                        }, this),
                }),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                )),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { lazyLoad: !1 }),
            (e.prototype.load = function (c) {
                var d = this._core.$stage.children().eq(c),
                    e = d && d.find(".owl-lazy");
                !e ||
                    a.inArray(d.get(0), this._loaded) > -1 ||
                    (e.each(
                        a.proxy(function (c, d) {
                            var e,
                                f = a(d),
                                g =
                                    (b.devicePixelRatio > 1 &&
                                        f.attr("data-src-retina")) ||
                                    f.attr("data-src");
                            this._core.trigger(
                                "load",
                                { element: f, url: g },
                                "lazy"
                            ),
                                f.is("img")
                                    ? f
                                          .one(
                                              "load.owl.lazy",
                                              a.proxy(function () {
                                                  f.css("opacity", 1),
                                                      this._core.trigger(
                                                          "loaded",
                                                          {
                                                              element: f,
                                                              url: g,
                                                          },
                                                          "lazy"
                                                      );
                                              }, this)
                                          )
                                          .attr("src", g)
                                    : ((e = new Image()),
                                      (e.onload = a.proxy(function () {
                                          f.css({
                                              "background-image":
                                                  'url("' + g + '")',
                                              opacity: "1",
                                          }),
                                              this._core.trigger(
                                                  "loaded",
                                                  { element: f, url: g },
                                                  "lazy"
                                              );
                                      }, this)),
                                      (e.src = g));
                        }, this)
                    ),
                    this._loaded.push(d.get(0)));
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers)
                    this._core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": a.proxy(
                        function (a) {
                            a.namespace &&
                                this._core.settings.autoHeight &&
                                this.update();
                        },
                        this
                    ),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.autoHeight &&
                            "position" == a.property.name &&
                            this.update();
                    }, this),
                    "loaded.owl.lazy": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.autoHeight &&
                            a.element
                                .closest("." + this._core.settings.itemClass)
                                .index() === this._core.current() &&
                            this.update();
                    }, this),
                }),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                )),
                this._core.$element.on(this._handlers);
        };
        (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (e.prototype.update = function () {
                var b = this._core._current,
                    c = b + this._core.settings.items,
                    d = this._core.$stage.children().toArray().slice(b, c),
                    e = [],
                    f = 0;
                a.each(d, function (b, c) {
                    e.push(a(c).height());
                }),
                    (f = Math.max.apply(null, e)),
                    this._core.$stage
                        .parent()
                        .height(f)
                        .addClass(this._core.settings.autoHeightClass);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._videos = {}),
                (this._playing = null),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.register({
                                type: "state",
                                name: "playing",
                                tags: ["interacting"],
                            });
                    }, this),
                    "resize.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.video &&
                            this.isInFullScreen() &&
                            a.preventDefault();
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.is("resizing") &&
                            this._core.$stage
                                .find(".cloned .owl-video-frame")
                                .remove();
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            "position" === a.property.name &&
                            this._playing &&
                            this.stop();
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content).find(".owl-video");
                            c.length &&
                                (c.css("display", "none"),
                                this.fetch(c, a(b.content)));
                        }
                    }, this),
                }),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                )),
                this._core.$element.on(this._handlers),
                this._core.$element.on(
                    "click.owl.video",
                    ".owl-video-play-icon",
                    a.proxy(function (a) {
                        this.play(a);
                    }, this)
                );
        };
        (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (e.prototype.fetch = function (a, b) {
                var c = (function () {
                        return a.attr("data-vimeo-id")
                            ? "vimeo"
                            : a.attr("data-vzaar-id")
                            ? "vzaar"
                            : "youtube";
                    })(),
                    d =
                        a.attr("data-vimeo-id") ||
                        a.attr("data-youtube-id") ||
                        a.attr("data-vzaar-id"),
                    e = a.attr("data-width") || this._core.settings.videoWidth,
                    f =
                        a.attr("data-height") ||
                        this._core.settings.videoHeight,
                    g = a.attr("href");
                if (!g) throw new Error("Missing video URL.");
                if (
                    ((d = g.match(
                        /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                    )),
                    d[3].indexOf("youtu") > -1)
                )
                    c = "youtube";
                else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
                else {
                    if (!(d[3].indexOf("vzaar") > -1))
                        throw new Error("Video URL not supported.");
                    c = "vzaar";
                }
                (d = d[6]),
                    (this._videos[g] = { type: c, id: d, width: e, height: f }),
                    b.attr("data-video", g),
                    this.thumbnail(a, this._videos[g]);
            }),
            (e.prototype.thumbnail = function (b, c) {
                var d,
                    e,
                    f,
                    g =
                        c.width && c.height
                            ? 'style="width:' +
                              c.width +
                              "px;height:" +
                              c.height +
                              'px;"'
                            : "",
                    h = b.find("img"),
                    i = "src",
                    j = "",
                    k = this._core.settings,
                    l = function (a) {
                        (e = '<div class="owl-video-play-icon"></div>'),
                            (d = k.lazyLoad
                                ? '<div class="owl-video-tn ' +
                                  j +
                                  '" ' +
                                  i +
                                  '="' +
                                  a +
                                  '"></div>'
                                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                                  a +
                                  ')"></div>'),
                            b.after(d),
                            b.after(e);
                    };
                if (
                    (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
                    this._core.settings.lazyLoad &&
                        ((i = "data-src"), (j = "owl-lazy")),
                    h.length)
                )
                    return l(h.attr(i)), h.remove(), !1;
                "youtube" === c.type
                    ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"),
                      l(f))
                    : "vimeo" === c.type
                    ? a.ajax({
                          type: "GET",
                          url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a[0].thumbnail_large), l(f);
                          },
                      })
                    : "vzaar" === c.type &&
                      a.ajax({
                          type: "GET",
                          url: "//vzaar.com/api/videos/" + c.id + ".json",
                          jsonp: "callback",
                          dataType: "jsonp",
                          success: function (a) {
                              (f = a.framegrab_url), l(f);
                          },
                      });
            }),
            (e.prototype.stop = function () {
                this._core.trigger("stop", null, "video"),
                    this._playing.find(".owl-video-frame").remove(),
                    this._playing.removeClass("owl-video-playing"),
                    (this._playing = null),
                    this._core.leave("playing"),
                    this._core.trigger("stopped", null, "video");
            }),
            (e.prototype.play = function (b) {
                var c,
                    d = a(b.target),
                    e = d.closest("." + this._core.settings.itemClass),
                    f = this._videos[e.attr("data-video")],
                    g = f.width || "100%",
                    h = f.height || this._core.$stage.height();
                this._playing ||
                    (this._core.enter("playing"),
                    this._core.trigger("play", null, "video"),
                    (e = this._core.items(this._core.relative(e.index()))),
                    this._core.reset(e.index()),
                    "youtube" === f.type
                        ? (c =
                              '<iframe width="' +
                              g +
                              '" height="' +
                              h +
                              '" src="//www.youtube.com/embed/' +
                              f.id +
                              "?autoplay=1&rel=0&v=" +
                              f.id +
                              '" frameborder="0" allowfullscreen></iframe>')
                        : "vimeo" === f.type
                        ? (c =
                              '<iframe src="//player.vimeo.com/video/' +
                              f.id +
                              '?autoplay=1" width="' +
                              g +
                              '" height="' +
                              h +
                              '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
                        : "vzaar" === f.type &&
                          (c =
                              '<iframe frameborder="0"height="' +
                              h +
                              '"width="' +
                              g +
                              '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                              f.id +
                              '/player?autoplay=true"></iframe>'),
                    a(
                        '<div class="owl-video-frame">' + c + "</div>"
                    ).insertAfter(e.find(".owl-video")),
                    (this._playing = e.addClass("owl-video-playing")));
            }),
            (e.prototype.isInFullScreen = function () {
                var b =
                    c.fullscreenElement ||
                    c.mozFullScreenElement ||
                    c.webkitFullscreenElement;
                return b && a(b).parent().hasClass("owl-video-frame");
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this._core.$element.off("click.owl.video");
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Video = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this.core = b),
                (this.core.options = a.extend(
                    {},
                    e.Defaults,
                    this.core.options
                )),
                (this.swapping = !0),
                (this.previous = d),
                (this.next = d),
                (this.handlers = {
                    "change.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            "position" == a.property.name &&
                            ((this.previous = this.core.current()),
                            (this.next = a.property.value));
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                        a.proxy(function (a) {
                            a.namespace &&
                                (this.swapping = "translated" == a.type);
                        }, this),
                    "translate.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this.swapping &&
                            (this.core.options.animateOut ||
                                this.core.options.animateIn) &&
                            this.swap();
                    }, this),
                }),
                this.core.$element.on(this.handlers);
        };
        (e.Defaults = { animateOut: !1, animateIn: !1 }),
            (e.prototype.swap = function () {
                if (
                    1 === this.core.settings.items &&
                    a.support.animation &&
                    a.support.transition
                ) {
                    this.core.speed(0);
                    var b,
                        c = a.proxy(this.clear, this),
                        d = this.core.$stage.children().eq(this.previous),
                        e = this.core.$stage.children().eq(this.next),
                        f = this.core.settings.animateIn,
                        g = this.core.settings.animateOut;
                    this.core.current() !== this.previous &&
                        (g &&
                            ((b =
                                this.core.coordinates(this.previous) -
                                this.core.coordinates(this.next)),
                            d
                                .one(a.support.animation.end, c)
                                .css({ left: b + "px" })
                                .addClass("animated owl-animated-out")
                                .addClass(g)),
                        f &&
                            e
                                .one(a.support.animation.end, c)
                                .addClass("animated owl-animated-in")
                                .addClass(f));
                }
            }),
            (e.prototype.clear = function (b) {
                a(b.target)
                    .css({ left: "" })
                    .removeClass("animated owl-animated-out owl-animated-in")
                    .removeClass(this.core.settings.animateIn)
                    .removeClass(this.core.settings.animateOut),
                    this.core.onTransitionEnd();
            }),
            (e.prototype.destroy = function () {
                var a, b;
                for (a in this.handlers)
                    this.core.$element.off(a, this.handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        var e = function (b) {
            (this._core = b),
                (this._timeout = null),
                (this._paused = !1),
                (this._handlers = {
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace && "settings" === a.property.name
                            ? this._core.settings.autoplay
                                ? this.play()
                                : this.stop()
                            : a.namespace &&
                              "position" === a.property.name &&
                              this._core.settings.autoplay &&
                              this._setAutoPlayInterval();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.autoplay &&
                            this.play();
                    }, this),
                    "play.owl.autoplay": a.proxy(function (a, b, c) {
                        a.namespace && this.play(b, c);
                    }, this),
                    "stop.owl.autoplay": a.proxy(function (a) {
                        a.namespace && this.stop();
                    }, this),
                    "mouseover.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause &&
                            this._core.is("rotating") &&
                            this.pause();
                    }, this),
                    "mouseleave.owl.autoplay": a.proxy(function () {
                        this._core.settings.autoplayHoverPause &&
                            this._core.is("rotating") &&
                            this.play();
                    }, this),
                    "touchstart.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause &&
                            this._core.is("rotating") &&
                            this.pause();
                    }, this),
                    "touchend.owl.core": a.proxy(function () {
                        this._core.settings.autoplayHoverPause && this.play();
                    }, this),
                }),
                this._core.$element.on(this._handlers),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                ));
        };
        (e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
        }),
            (e.prototype.play = function (a, b) {
                (this._paused = !1),
                    this._core.is("rotating") ||
                        (this._core.enter("rotating"),
                        this._setAutoPlayInterval());
            }),
            (e.prototype._getNextTimeout = function (d, e) {
                return (
                    this._timeout && b.clearTimeout(this._timeout),
                    b.setTimeout(
                        a.proxy(function () {
                            this._paused ||
                                this._core.is("busy") ||
                                this._core.is("interacting") ||
                                c.hidden ||
                                this._core.next(
                                    e || this._core.settings.autoplaySpeed
                                );
                        }, this),
                        d || this._core.settings.autoplayTimeout
                    )
                );
            }),
            (e.prototype._setAutoPlayInterval = function () {
                this._timeout = this._getNextTimeout();
            }),
            (e.prototype.stop = function () {
                this._core.is("rotating") &&
                    (b.clearTimeout(this._timeout),
                    this._core.leave("rotating"));
            }),
            (e.prototype.pause = function () {
                this._core.is("rotating") && (this._paused = !0);
            }),
            (e.prototype.destroy = function () {
                var a, b;
                this.stop();
                for (a in this._handlers)
                    this._core.$element.off(a, this._handlers[a]);
                for (b in Object.getOwnPropertyNames(this))
                    "function" != typeof this[b] && (this[b] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (b) {
            (this._core = b),
                (this._initialized = !1),
                (this._pages = []),
                (this._controls = {}),
                (this._templates = []),
                (this.$element = this._core.$element),
                (this._overrides = {
                    next: this._core.next,
                    prev: this._core.prev,
                    to: this._core.to,
                }),
                (this._handlers = {
                    "prepared.owl.carousel": a.proxy(function (b) {
                        b.namespace &&
                            this._core.settings.dotsData &&
                            this._templates.push(
                                '<div class="' +
                                    this._core.settings.dotClass +
                                    '">' +
                                    a(b.content)
                                        .find("[data-dot]")
                                        .addBack("[data-dot]")
                                        .attr("data-dot") +
                                    "</div>"
                            );
                    }, this),
                    "added.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.dotsData &&
                            this._templates.splice(
                                a.position,
                                0,
                                this._templates.pop()
                            );
                    }, this),
                    "remove.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._core.settings.dotsData &&
                            this._templates.splice(a.position, 1);
                    }, this),
                    "changed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            "position" == a.property.name &&
                            this.draw();
                    }, this),
                    "initialized.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            !this._initialized &&
                            (this._core.trigger(
                                "initialize",
                                null,
                                "navigation"
                            ),
                            this.initialize(),
                            this.update(),
                            this.draw(),
                            (this._initialized = !0),
                            this._core.trigger(
                                "initialized",
                                null,
                                "navigation"
                            ));
                    }, this),
                    "refreshed.owl.carousel": a.proxy(function (a) {
                        a.namespace &&
                            this._initialized &&
                            (this._core.trigger("refresh", null, "navigation"),
                            this.update(),
                            this.draw(),
                            this._core.trigger(
                                "refreshed",
                                null,
                                "navigation"
                            ));
                    }, this),
                }),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                )),
                this.$element.on(this._handlers);
        };
        (e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
        }),
            (e.prototype.initialize = function () {
                var b,
                    c = this._core.settings;
                (this._controls.$relative = (
                    c.navContainer
                        ? a(c.navContainer)
                        : a("<div>")
                              .addClass(c.navContainerClass)
                              .appendTo(this.$element)
                ).addClass("disabled")),
                    (this._controls.$previous = a("<" + c.navElement + ">")
                        .addClass(c.navClass[0])
                        .html(c.navText[0])
                        .prependTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.prev(c.navSpeed);
                            }, this)
                        )),
                    (this._controls.$next = a("<" + c.navElement + ">")
                        .addClass(c.navClass[1])
                        .html(c.navText[1])
                        .appendTo(this._controls.$relative)
                        .on(
                            "click",
                            a.proxy(function (a) {
                                this.next(c.navSpeed);
                            }, this)
                        )),
                    c.dotsData ||
                        (this._templates = [
                            a("<div>")
                                .addClass(c.dotClass)
                                .append(a("<span>"))
                                .prop("outerHTML"),
                        ]),
                    (this._controls.$absolute = (
                        c.dotsContainer
                            ? a(c.dotsContainer)
                            : a("<div>")
                                  .addClass(c.dotsClass)
                                  .appendTo(this.$element)
                    ).addClass("disabled")),
                    this._controls.$absolute.on(
                        "click",
                        "div",
                        a.proxy(function (b) {
                            var d = a(b.target)
                                .parent()
                                .is(this._controls.$absolute)
                                ? a(b.target).index()
                                : a(b.target).parent().index();
                            b.preventDefault(), this.to(d, c.dotsSpeed);
                        }, this)
                    );
                for (b in this._overrides)
                    this._core[b] = a.proxy(this[b], this);
            }),
            (e.prototype.destroy = function () {
                var a, b, c, d;
                for (a in this._handlers)
                    this.$element.off(a, this._handlers[a]);
                for (b in this._controls) this._controls[b].remove();
                for (d in this.overides) this._core[d] = this._overrides[d];
                for (c in Object.getOwnPropertyNames(this))
                    "function" != typeof this[c] && (this[c] = null);
            }),
            (e.prototype.update = function () {
                var a,
                    b,
                    c,
                    d = this._core.clones().length / 2,
                    e = d + this._core.items().length,
                    f = this._core.maximum(!0),
                    g = this._core.settings,
                    h =
                        g.center || g.autoWidth || g.dotsData
                            ? 1
                            : g.dotsEach || g.items;
                if (
                    ("page" !== g.slideBy &&
                        (g.slideBy = Math.min(g.slideBy, g.items)),
                    g.dots || "page" == g.slideBy)
                )
                    for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                        if (b >= h || 0 === b) {
                            if (
                                (this._pages.push({
                                    start: Math.min(f, a - d),
                                    end: a - d + h - 1,
                                }),
                                Math.min(f, a - d) === f)
                            )
                                break;
                            (b = 0), ++c;
                        }
                        b += this._core.mergers(this._core.relative(a));
                    }
            }),
            (e.prototype.draw = function () {
                var b,
                    c = this._core.settings,
                    d = this._core.items().length <= c.items,
                    e = this._core.relative(this._core.current()),
                    f = c.loop || c.rewind;
                this._controls.$relative.toggleClass("disabled", !c.nav || d),
                    c.nav &&
                        (this._controls.$previous.toggleClass(
                            "disabled",
                            !f && e <= this._core.minimum(!0)
                        ),
                        this._controls.$next.toggleClass(
                            "disabled",
                            !f && e >= this._core.maximum(!0)
                        )),
                    this._controls.$absolute.toggleClass(
                        "disabled",
                        !c.dots || d
                    ),
                    c.dots &&
                        ((b =
                            this._pages.length -
                            this._controls.$absolute.children().length),
                        c.dotsData && 0 !== b
                            ? this._controls.$absolute.html(
                                  this._templates.join("")
                              )
                            : b > 0
                            ? this._controls.$absolute.append(
                                  new Array(b + 1).join(this._templates[0])
                              )
                            : b < 0 &&
                              this._controls.$absolute
                                  .children()
                                  .slice(b)
                                  .remove(),
                        this._controls.$absolute
                            .find(".active")
                            .removeClass("active"),
                        this._controls.$absolute
                            .children()
                            .eq(a.inArray(this.current(), this._pages))
                            .addClass("active"));
            }),
            (e.prototype.onTrigger = function (b) {
                var c = this._core.settings;
                b.page = {
                    index: a.inArray(this.current(), this._pages),
                    count: this._pages.length,
                    size:
                        c &&
                        (c.center || c.autoWidth || c.dotsData
                            ? 1
                            : c.dotsEach || c.items),
                };
            }),
            (e.prototype.current = function () {
                var b = this._core.relative(this._core.current());
                return a
                    .grep(
                        this._pages,
                        a.proxy(function (a, c) {
                            return a.start <= b && a.end >= b;
                        }, this)
                    )
                    .pop();
            }),
            (e.prototype.getPosition = function (b) {
                var c,
                    d,
                    e = this._core.settings;
                return (
                    "page" == e.slideBy
                        ? ((c = a.inArray(this.current(), this._pages)),
                          (d = this._pages.length),
                          b ? ++c : --c,
                          (c = this._pages[((c % d) + d) % d].start))
                        : ((c = this._core.relative(this._core.current())),
                          (d = this._core.items().length),
                          b ? (c += e.slideBy) : (c -= e.slideBy)),
                    c
                );
            }),
            (e.prototype.next = function (b) {
                a.proxy(this._overrides.to, this._core)(
                    this.getPosition(!0),
                    b
                );
            }),
            (e.prototype.prev = function (b) {
                a.proxy(this._overrides.to, this._core)(
                    this.getPosition(!1),
                    b
                );
            }),
            (e.prototype.to = function (b, c, d) {
                var e;
                !d && this._pages.length
                    ? ((e = this._pages.length),
                      a.proxy(this._overrides.to, this._core)(
                          this._pages[((b % e) + e) % e].start,
                          c
                      ))
                    : a.proxy(this._overrides.to, this._core)(b, c);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        "use strict";
        var e = function (c) {
            (this._core = c),
                (this._hashes = {}),
                (this.$element = this._core.$element),
                (this._handlers = {
                    "initialized.owl.carousel": a.proxy(function (c) {
                        c.namespace &&
                            "URLHash" === this._core.settings.startPosition &&
                            a(b).trigger("hashchange.owl.navigation");
                    }, this),
                    "prepared.owl.carousel": a.proxy(function (b) {
                        if (b.namespace) {
                            var c = a(b.content)
                                .find("[data-hash]")
                                .addBack("[data-hash]")
                                .attr("data-hash");
                            if (!c) return;
                            this._hashes[c] = b.content;
                        }
                    }, this),
                    "changed.owl.carousel": a.proxy(function (c) {
                        if (c.namespace && "position" === c.property.name) {
                            var d = this._core.items(
                                    this._core.relative(this._core.current())
                                ),
                                e = a
                                    .map(this._hashes, function (a, b) {
                                        return a === d ? b : null;
                                    })
                                    .join();
                            if (!e || b.location.hash.slice(1) === e) return;
                            b.location.hash = e;
                        }
                    }, this),
                }),
                (this._core.options = a.extend(
                    {},
                    e.Defaults,
                    this._core.options
                )),
                this.$element.on(this._handlers),
                a(b).on(
                    "hashchange.owl.navigation",
                    a.proxy(function (a) {
                        var c = b.location.hash.substring(1),
                            e = this._core.$stage.children(),
                            f = this._hashes[c] && e.index(this._hashes[c]);
                        f !== d &&
                            f !== this._core.current() &&
                            this._core.to(this._core.relative(f), !1, !0);
                    }, this)
                );
        };
        (e.Defaults = { URLhashListener: !1 }),
            (e.prototype.destroy = function () {
                var c, d;
                a(b).off("hashchange.owl.navigation");
                for (c in this._handlers)
                    this._core.$element.off(c, this._handlers[c]);
                for (d in Object.getOwnPropertyNames(this))
                    "function" != typeof this[d] && (this[d] = null);
            }),
            (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
    })(window.Zepto || window.jQuery, window, document),
    (function (a, b, c, d) {
        function e(b, c) {
            var e = !1,
                f = b.charAt(0).toUpperCase() + b.slice(1);
            return (
                a.each(
                    (b + " " + h.join(f + " ") + f).split(" "),
                    function (a, b) {
                        if (g[b] !== d) return (e = !c || b), !1;
                    }
                ),
                e
            );
        }
        function f(a) {
            return e(a, !0);
        }
        var g = a("<support>").get(0).style,
            h = "Webkit Moz O ms".split(" "),
            i = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend",
                    },
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend",
                    },
                },
            },
            j = {
                csstransforms: function () {
                    return !!e("transform");
                },
                csstransforms3d: function () {
                    return !!e("perspective");
                },
                csstransitions: function () {
                    return !!e("transition");
                },
                cssanimations: function () {
                    return !!e("animation");
                },
            };
        j.csstransitions() &&
            ((a.support.transition = new String(f("transition"))),
            (a.support.transition.end =
                i.transition.end[a.support.transition])),
            j.cssanimations() &&
                ((a.support.animation = new String(f("animation"))),
                (a.support.animation.end =
                    i.animation.end[a.support.animation])),
            j.csstransforms() &&
                ((a.support.transform = new String(f("transform"))),
                (a.support.transform3d = j.csstransforms3d()));
    })(window.Zepto || window.jQuery, window, document);

/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create &&
    (Object.create = function (d) {
        function h() {}
        h.prototype = d;
        return new h();
    });
(function (d, h, l, m) {
    var k = {
        init: function (b, a) {
            var c = this;
            c.elem = a;
            c.$elem = d(a);
            c.imageSrc = c.$elem.data("zoom-image")
                ? c.$elem.data("zoom-image")
                : c.$elem.attr("src");
            c.options = d.extend({}, d.fn.elevateZoom.options, b);
            c.options.tint &&
                ((c.options.lensColour = "none"),
                (c.options.lensOpacity = "1"));
            "inner" == c.options.zoomType && (c.options.showLens = !1);
            c.$elem.parent().removeAttr("title").removeAttr("alt");
            c.zoomImage = c.imageSrc;
            c.refresh(1);
            d("#" + c.options.gallery + " a").click(function (a) {
                c.options.galleryActiveClass &&
                    (d("#" + c.options.gallery + " a").removeClass(
                        c.options.galleryActiveClass
                    ),
                    d(this).addClass(c.options.galleryActiveClass));
                a.preventDefault();
                d(this).data("zoom-image")
                    ? (c.zoomImagePre = d(this).data("zoom-image"))
                    : (c.zoomImagePre = d(this).data("image"));
                c.swaptheimage(d(this).data("image"), c.zoomImagePre);
                return !1;
            });
        },
        refresh: function (b) {
            var a = this;
            setTimeout(function () {
                a.fetch(a.imageSrc);
            }, b || a.options.refresh);
        },
        fetch: function (b) {
            var a = this,
                c = new Image();
            c.onload = function () {
                a.largeWidth = c.width;
                a.largeHeight = c.height;
                a.startZoom();
                a.currentImage = a.imageSrc;
                a.options.onZoomedImageLoaded(a.$elem);
            };
            c.src = b;
        },
        startZoom: function () {
            var b = this;
            b.nzWidth = b.$elem.width();
            b.nzHeight = b.$elem.height();
            b.isWindowActive = !1;
            b.isLensActive = !1;
            b.isTintActive = !1;
            b.overWindow = !1;
            b.options.imageCrossfade &&
                ((b.zoomWrap = b.$elem.wrap(
                    '<div style="height:' +
                        b.nzHeight +
                        "px;width:" +
                        b.nzWidth +
                        'px;" class="zoomWrapper" />'
                )),
                b.$elem.css("position", "absolute"));
            b.zoomLock = 1;
            b.scrollingLock = !1;
            b.changeBgSize = !1;
            b.currentZoomLevel = b.options.zoomLevel;
            b.nzOffset = b.$elem.offset();
            b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
            b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
            "window" == b.options.zoomType &&
                (b.zoomWindowStyle =
                    "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
                    String(b.options.zoomWindowBgColour) +
                    ";width: " +
                    String(b.options.zoomWindowWidth) +
                    "px;height: " +
                    String(b.options.zoomWindowHeight) +
                    "px;float: left;background-size: " +
                    b.largeWidth / b.currentZoomLevel +
                    "px " +
                    b.largeHeight / b.currentZoomLevel +
                    "px;display: none;z-index:100;border: " +
                    String(b.options.borderSize) +
                    "px solid " +
                    b.options.borderColour +
                    ";background-repeat: no-repeat;position: absolute;");
            if ("inner" == b.options.zoomType) {
                var a = b.$elem.css("border-left-width");
                b.zoomWindowStyle =
                    "overflow: hidden;margin-left: " +
                    String(a) +
                    ";margin-top: " +
                    String(a) +
                    ";background-position: 0px 0px;width: " +
                    String(b.nzWidth) +
                    "px;height: " +
                    String(b.nzHeight) +
                    "px;float: left;display: none;cursor:" +
                    b.options.cursor +
                    ";px solid " +
                    b.options.borderColour +
                    ";background-repeat: no-repeat;position: absolute;";
            }
            "window" == b.options.zoomType &&
                ((lensHeight =
                    b.nzHeight < b.options.zoomWindowWidth / b.widthRatio
                        ? b.nzHeight
                        : String(b.options.zoomWindowHeight / b.heightRatio)),
                (lensWidth =
                    b.largeWidth < b.options.zoomWindowWidth
                        ? b.nzWidth
                        : b.options.zoomWindowWidth / b.widthRatio),
                (b.lensStyle =
                    "background-position: 0px 0px;width: " +
                    String(b.options.zoomWindowWidth / b.widthRatio) +
                    "px;height: " +
                    String(b.options.zoomWindowHeight / b.heightRatio) +
                    "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
                    b.options.lensOpacity +
                    ";filter: alpha(opacity = " +
                    100 * b.options.lensOpacity +
                    "); zoom:1;width:" +
                    lensWidth +
                    "px;height:" +
                    lensHeight +
                    "px;background-color:" +
                    b.options.lensColour +
                    ";cursor:" +
                    b.options.cursor +
                    ";border: " +
                    b.options.lensBorderSize +
                    "px solid " +
                    b.options.lensBorderColour +
                    ";background-repeat: no-repeat;position: absolute;"));
            b.tintStyle =
                "display: block;position: absolute;background-color: " +
                b.options.tintColour +
                ";filter:alpha(opacity=0);opacity: 0;width: " +
                b.nzWidth +
                "px;height: " +
                b.nzHeight +
                "px;";
            b.lensRound = "";
            "lens" == b.options.zoomType &&
                (b.lensStyle =
                    "background-position: 0px 0px;float: left;display: none;border: " +
                    String(b.options.borderSize) +
                    "px solid " +
                    b.options.borderColour +
                    ";width:" +
                    String(b.options.lensSize) +
                    "px;height:" +
                    String(b.options.lensSize) +
                    "px;background-repeat: no-repeat;position: absolute;");
            "round" == b.options.lensShape &&
                (b.lensRound =
                    "border-top-left-radius: " +
                    String(b.options.lensSize / 2 + b.options.borderSize) +
                    "px;border-top-right-radius: " +
                    String(b.options.lensSize / 2 + b.options.borderSize) +
                    "px;border-bottom-left-radius: " +
                    String(b.options.lensSize / 2 + b.options.borderSize) +
                    "px;border-bottom-right-radius: " +
                    String(b.options.lensSize / 2 + b.options.borderSize) +
                    "px;");
            b.zoomContainer = d(
                '<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
                    b.nzOffset.left +
                    "px;top:" +
                    b.nzOffset.top +
                    "px;height:" +
                    b.nzHeight +
                    "px;width:" +
                    b.nzWidth +
                    'px;"></div>'
            );
            d("body").append(b.zoomContainer);
            b.options.containLensZoom &&
                "lens" == b.options.zoomType &&
                b.zoomContainer.css("overflow", "hidden");
            "inner" != b.options.zoomType &&
                ((b.zoomLens = d(
                    "<div class='zoomLens' style='" +
                        b.lensStyle +
                        b.lensRound +
                        "'>&nbsp;</div>"
                )
                    .appendTo(b.zoomContainer)
                    .click(function () {
                        b.$elem.trigger("click");
                    })),
                b.options.tint &&
                    ((b.tintContainer = d("<div/>").addClass("tintContainer")),
                    (b.zoomTint = d(
                        "<div class='zoomTint' style='" +
                            b.tintStyle +
                            "'></div>"
                    )),
                    b.zoomLens.wrap(b.tintContainer),
                    (b.zoomTintcss = b.zoomLens.after(b.zoomTint)),
                    (b.zoomTintImage = d(
                        '<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
                            b.nzWidth +
                            "px; height: " +
                            b.nzHeight +
                            'px;" src="' +
                            b.imageSrc +
                            '">'
                    )
                        .appendTo(b.zoomLens)
                        .click(function () {
                            b.$elem.trigger("click");
                        }))));
            isNaN(b.options.zoomWindowPosition)
                ? (b.zoomWindow = d(
                      "<div style='z-index:999;left:" +
                          b.windowOffsetLeft +
                          "px;top:" +
                          b.windowOffsetTop +
                          "px;" +
                          b.zoomWindowStyle +
                          "' class='zoomWindow'>&nbsp;</div>"
                  )
                      .appendTo("body")
                      .click(function () {
                          b.$elem.trigger("click");
                      }))
                : (b.zoomWindow = d(
                      "<div style='z-index:999;left:" +
                          b.windowOffsetLeft +
                          "px;top:" +
                          b.windowOffsetTop +
                          "px;" +
                          b.zoomWindowStyle +
                          "' class='zoomWindow'>&nbsp;</div>"
                  )
                      .appendTo(b.zoomContainer)
                      .click(function () {
                          b.$elem.trigger("click");
                      }));
            b.zoomWindowContainer = d("<div/>")
                .addClass("zoomWindowContainer")
                .css("width", b.options.zoomWindowWidth);
            b.zoomWindow.wrap(b.zoomWindowContainer);
            "lens" == b.options.zoomType &&
                b.zoomLens.css({
                    backgroundImage: "url('" + b.imageSrc + "')",
                });
            "window" == b.options.zoomType &&
                b.zoomWindow.css({
                    backgroundImage: "url('" + b.imageSrc + "')",
                });
            "inner" == b.options.zoomType &&
                b.zoomWindow.css({
                    backgroundImage: "url('" + b.imageSrc + "')",
                });
            b.$elem.bind("touchmove", function (a) {
                a.preventDefault();
                b.setPosition(
                    a.originalEvent.touches[0] ||
                        a.originalEvent.changedTouches[0]
                );
            });
            b.zoomContainer.bind("touchmove", function (a) {
                "inner" == b.options.zoomType && b.showHideWindow("show");
                a.preventDefault();
                b.setPosition(
                    a.originalEvent.touches[0] ||
                        a.originalEvent.changedTouches[0]
                );
            });
            b.zoomContainer.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint &&
                    "inner" != b.options.zoomType &&
                    b.showHideTint("hide");
            });
            b.$elem.bind("touchend", function (a) {
                b.showHideWindow("hide");
                b.options.showLens && b.showHideLens("hide");
                b.options.tint &&
                    "inner" != b.options.zoomType &&
                    b.showHideTint("hide");
            });
            b.options.showLens &&
                (b.zoomLens.bind("touchmove", function (a) {
                    a.preventDefault();
                    b.setPosition(
                        a.originalEvent.touches[0] ||
                            a.originalEvent.changedTouches[0]
                    );
                }),
                b.zoomLens.bind("touchend", function (a) {
                    b.showHideWindow("hide");
                    b.options.showLens && b.showHideLens("hide");
                    b.options.tint &&
                        "inner" != b.options.zoomType &&
                        b.showHideTint("hide");
                }));
            b.$elem.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            b.zoomContainer.bind("mousemove", function (a) {
                !1 == b.overWindow && b.setElements("show");
                if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                    b.setPosition(a), (b.currentLoc = a);
                b.lastX = a.clientX;
                b.lastY = a.clientY;
            });
            "inner" != b.options.zoomType &&
                b.zoomLens.bind("mousemove", function (a) {
                    if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                        b.setPosition(a), (b.currentLoc = a);
                    b.lastX = a.clientX;
                    b.lastY = a.clientY;
                });
            b.options.tint &&
                "inner" != b.options.zoomType &&
                b.zoomTint.bind("mousemove", function (a) {
                    if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                        b.setPosition(a), (b.currentLoc = a);
                    b.lastX = a.clientX;
                    b.lastY = a.clientY;
                });
            "inner" == b.options.zoomType &&
                b.zoomWindow.bind("mousemove", function (a) {
                    if (b.lastX !== a.clientX || b.lastY !== a.clientY)
                        b.setPosition(a), (b.currentLoc = a);
                    b.lastX = a.clientX;
                    b.lastY = a.clientY;
                });
            b.zoomContainer
                .add(b.$elem)
                .mouseenter(function () {
                    !1 == b.overWindow && b.setElements("show");
                })
                .mouseleave(function () {
                    b.scrollLock || b.setElements("hide");
                });
            "inner" != b.options.zoomType &&
                b.zoomWindow
                    .mouseenter(function () {
                        b.overWindow = !0;
                        b.setElements("hide");
                    })
                    .mouseleave(function () {
                        b.overWindow = !1;
                    });
            b.minZoomLevel = b.options.minZoomLevel
                ? b.options.minZoomLevel
                : 2 * b.options.scrollZoomIncrement;
            b.options.scrollZoom &&
                b.zoomContainer
                    .add(b.$elem)
                    .bind(
                        "mousewheel DOMMouseScroll MozMousePixelScroll",
                        function (a) {
                            b.scrollLock = !0;
                            clearTimeout(d.data(this, "timer"));
                            d.data(
                                this,
                                "timer",
                                setTimeout(function () {
                                    b.scrollLock = !1;
                                }, 250)
                            );
                            var e =
                                a.originalEvent.wheelDelta ||
                                -1 * a.originalEvent.detail;
                            a.stopImmediatePropagation();
                            a.stopPropagation();
                            a.preventDefault();
                            0 < e / 120
                                ? b.currentZoomLevel >= b.minZoomLevel &&
                                  b.changeZoomLevel(
                                      b.currentZoomLevel -
                                          b.options.scrollZoomIncrement
                                  )
                                : b.options.maxZoomLevel
                                ? b.currentZoomLevel <=
                                      b.options.maxZoomLevel &&
                                  b.changeZoomLevel(
                                      parseFloat(b.currentZoomLevel) +
                                          b.options.scrollZoomIncrement
                                  )
                                : b.changeZoomLevel(
                                      parseFloat(b.currentZoomLevel) +
                                          b.options.scrollZoomIncrement
                                  );
                            return !1;
                        }
                    );
        },
        setElements: function (b) {
            if (!this.options.zoomEnabled) return !1;
            "show" == b &&
                this.isWindowSet &&
                ("inner" == this.options.zoomType &&
                    this.showHideWindow("show"),
                "window" == this.options.zoomType &&
                    this.showHideWindow("show"),
                this.options.showLens && this.showHideLens("show"),
                this.options.tint &&
                    "inner" != this.options.zoomType &&
                    this.showHideTint("show"));
            "hide" == b &&
                ("window" == this.options.zoomType &&
                    this.showHideWindow("hide"),
                this.options.tint || this.showHideWindow("hide"),
                this.options.showLens && this.showHideLens("hide"),
                this.options.tint && this.showHideTint("hide"));
        },
        setPosition: function (b) {
            if (!this.options.zoomEnabled) return !1;
            this.nzHeight = this.$elem.height();
            this.nzWidth = this.$elem.width();
            this.nzOffset = this.$elem.offset();
            this.options.tint &&
                "inner" != this.options.zoomType &&
                (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 }));
            this.options.responsive &&
                !this.options.scrollZoom &&
                this.options.showLens &&
                ((lensHeight =
                    this.nzHeight <
                    this.options.zoomWindowWidth / this.widthRatio
                        ? this.nzHeight
                        : String(
                              this.options.zoomWindowHeight / this.heightRatio
                          )),
                (lensWidth =
                    this.largeWidth < this.options.zoomWindowWidth
                        ? this.nzWidth
                        : this.options.zoomWindowWidth / this.widthRatio),
                (this.widthRatio = this.largeWidth / this.nzWidth),
                (this.heightRatio = this.largeHeight / this.nzHeight),
                "lens" != this.options.zoomType &&
                    ((lensHeight =
                        this.nzHeight <
                        this.options.zoomWindowWidth / this.widthRatio
                            ? this.nzHeight
                            : String(
                                  this.options.zoomWindowHeight /
                                      this.heightRatio
                              )),
                    (lensWidth =
                        this.options.zoomWindowWidth <
                        this.options.zoomWindowWidth
                            ? this.nzWidth
                            : this.options.zoomWindowWidth / this.widthRatio),
                    this.zoomLens.css("width", lensWidth),
                    this.zoomLens.css("height", lensHeight),
                    this.options.tint &&
                        (this.zoomTintImage.css("width", this.nzWidth),
                        this.zoomTintImage.css("height", this.nzHeight))),
                "lens" == this.options.zoomType &&
                    this.zoomLens.css({
                        width: String(this.options.lensSize) + "px",
                        height: String(this.options.lensSize) + "px",
                    }));
            this.zoomContainer.css({ top: this.nzOffset.top });
            this.zoomContainer.css({ left: this.nzOffset.left });
            this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
            this.mouseTop = parseInt(b.pageY - this.nzOffset.top);
            "window" == this.options.zoomType &&
                ((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
                (this.Eboppos =
                    this.mouseTop >
                    this.nzHeight -
                        this.zoomLens.height() / 2 -
                        2 * this.options.lensBorderSize),
                (this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
                (this.Eroppos =
                    this.mouseLeft >
                    this.nzWidth -
                        this.zoomLens.width() / 2 -
                        2 * this.options.lensBorderSize));
            "inner" == this.options.zoomType &&
                ((this.Etoppos =
                    this.mouseTop < this.nzHeight / 2 / this.heightRatio),
                (this.Eboppos =
                    this.mouseTop >
                    this.nzHeight - this.nzHeight / 2 / this.heightRatio),
                (this.Eloppos =
                    this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
                (this.Eroppos =
                    this.mouseLeft >
                    this.nzWidth -
                        this.nzWidth / 2 / this.widthRatio -
                        2 * this.options.lensBorderSize));
            0 >= this.mouseLeft ||
            0 > this.mouseTop ||
            this.mouseLeft > this.nzWidth ||
            this.mouseTop > this.nzHeight
                ? this.setElements("hide")
                : (this.options.showLens &&
                      ((this.lensLeftPos = String(
                          this.mouseLeft - this.zoomLens.width() / 2
                      )),
                      (this.lensTopPos = String(
                          this.mouseTop - this.zoomLens.height() / 2
                      ))),
                  this.Etoppos && (this.lensTopPos = 0),
                  this.Eloppos &&
                      (this.tintpos =
                          this.lensLeftPos =
                          this.windowLeftPos =
                              0),
                  "window" == this.options.zoomType &&
                      (this.Eboppos &&
                          (this.lensTopPos = Math.max(
                              this.nzHeight -
                                  this.zoomLens.height() -
                                  2 * this.options.lensBorderSize,
                              0
                          )),
                      this.Eroppos &&
                          (this.lensLeftPos =
                              this.nzWidth -
                              this.zoomLens.width() -
                              2 * this.options.lensBorderSize)),
                  "inner" == this.options.zoomType &&
                      (this.Eboppos &&
                          (this.lensTopPos = Math.max(
                              this.nzHeight - 2 * this.options.lensBorderSize,
                              0
                          )),
                      this.Eroppos &&
                          (this.lensLeftPos =
                              this.nzWidth -
                              this.nzWidth -
                              2 * this.options.lensBorderSize)),
                  "lens" == this.options.zoomType &&
                      ((this.windowLeftPos = String(
                          -1 *
                              ((b.pageX - this.nzOffset.left) *
                                  this.widthRatio -
                                  this.zoomLens.width() / 2)
                      )),
                      (this.windowTopPos = String(
                          -1 *
                              ((b.pageY - this.nzOffset.top) *
                                  this.heightRatio -
                                  this.zoomLens.height() / 2)
                      )),
                      this.zoomLens.css({
                          backgroundPosition:
                              this.windowLeftPos +
                              "px " +
                              this.windowTopPos +
                              "px",
                      }),
                      this.changeBgSize &&
                          (this.nzHeight > this.nzWidth
                              ? ("lens" == this.options.zoomType &&
                                    this.zoomLens.css({
                                        "background-size":
                                            this.largeWidth /
                                                this.newvalueheight +
                                            "px " +
                                            this.largeHeight /
                                                this.newvalueheight +
                                            "px",
                                    }),
                                this.zoomWindow.css({
                                    "background-size":
                                        this.largeWidth / this.newvalueheight +
                                        "px " +
                                        this.largeHeight / this.newvalueheight +
                                        "px",
                                }))
                              : ("lens" == this.options.zoomType &&
                                    this.zoomLens.css({
                                        "background-size":
                                            this.largeWidth /
                                                this.newvaluewidth +
                                            "px " +
                                            this.largeHeight /
                                                this.newvaluewidth +
                                            "px",
                                    }),
                                this.zoomWindow.css({
                                    "background-size":
                                        this.largeWidth / this.newvaluewidth +
                                        "px " +
                                        this.largeHeight / this.newvaluewidth +
                                        "px",
                                })),
                          (this.changeBgSize = !1)),
                      this.setWindowPostition(b)),
                  this.options.tint &&
                      "inner" != this.options.zoomType &&
                      this.setTintPosition(b),
                  "window" == this.options.zoomType &&
                      this.setWindowPostition(b),
                  "inner" == this.options.zoomType &&
                      this.setWindowPostition(b),
                  this.options.showLens &&
                      (this.fullwidth &&
                          "lens" != this.options.zoomType &&
                          (this.lensLeftPos = 0),
                      this.zoomLens.css({
                          left: this.lensLeftPos + "px",
                          top: this.lensTopPos + "px",
                      })));
        },
        showHideWindow: function (b) {
            "show" != b ||
                this.isWindowActive ||
                (this.options.zoomWindowFadeIn
                    ? this.zoomWindow
                          .stop(!0, !0, !1)
                          .fadeIn(this.options.zoomWindowFadeIn)
                    : this.zoomWindow.show(),
                (this.isWindowActive = !0));
            "hide" == b &&
                this.isWindowActive &&
                (this.options.zoomWindowFadeOut
                    ? this.zoomWindow
                          .stop(!0, !0)
                          .fadeOut(this.options.zoomWindowFadeOut)
                    : this.zoomWindow.hide(),
                (this.isWindowActive = !1));
        },
        showHideLens: function (b) {
            "show" != b ||
                this.isLensActive ||
                (this.options.lensFadeIn
                    ? this.zoomLens
                          .stop(!0, !0, !1)
                          .fadeIn(this.options.lensFadeIn)
                    : this.zoomLens.show(),
                (this.isLensActive = !0));
            "hide" == b &&
                this.isLensActive &&
                (this.options.lensFadeOut
                    ? this.zoomLens
                          .stop(!0, !0)
                          .fadeOut(this.options.lensFadeOut)
                    : this.zoomLens.hide(),
                (this.isLensActive = !1));
        },
        showHideTint: function (b) {
            "show" != b ||
                this.isTintActive ||
                (this.options.zoomTintFadeIn
                    ? this.zoomTint
                          .css({ opacity: this.options.tintOpacity })
                          .animate()
                          .stop(!0, !0)
                          .fadeIn("slow")
                    : (this.zoomTint
                          .css({ opacity: this.options.tintOpacity })
                          .animate(),
                      this.zoomTint.show()),
                (this.isTintActive = !0));
            "hide" == b &&
                this.isTintActive &&
                (this.options.zoomTintFadeOut
                    ? this.zoomTint
                          .stop(!0, !0)
                          .fadeOut(this.options.zoomTintFadeOut)
                    : this.zoomTint.hide(),
                (this.isTintActive = !1));
        },
        setLensPostition: function (b) {},
        setWindowPostition: function (b) {
            var a = this;
            if (isNaN(a.options.zoomWindowPosition))
                (a.externalContainer = d("#" + a.options.zoomWindowPosition)),
                    (a.externalContainerWidth = a.externalContainer.width()),
                    (a.externalContainerHeight = a.externalContainer.height()),
                    (a.externalContainerOffset = a.externalContainer.offset()),
                    (a.windowOffsetTop = a.externalContainerOffset.top),
                    (a.windowOffsetLeft = a.externalContainerOffset.left);
            else
                switch (a.options.zoomWindowPosition) {
                    case 1:
                        a.windowOffsetTop = a.options.zoomWindowOffety;
                        a.windowOffsetLeft = +a.nzWidth;
                        break;
                    case 2:
                        a.options.zoomWindowHeight > a.nzHeight &&
                            ((a.windowOffsetTop =
                                -1 *
                                (a.options.zoomWindowHeight / 2 -
                                    a.nzHeight / 2)),
                            (a.windowOffsetLeft = a.nzWidth));
                        break;
                    case 3:
                        a.windowOffsetTop =
                            a.nzHeight -
                            a.zoomWindow.height() -
                            2 * a.options.borderSize;
                        a.windowOffsetLeft = a.nzWidth;
                        break;
                    case 4:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft = a.nzWidth;
                        break;
                    case 5:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft =
                            a.nzWidth -
                            a.zoomWindow.width() -
                            2 * a.options.borderSize;
                        break;
                    case 6:
                        a.options.zoomWindowHeight > a.nzHeight &&
                            ((a.windowOffsetTop = a.nzHeight),
                            (a.windowOffsetLeft =
                                -1 *
                                (a.options.zoomWindowWidth / 2 -
                                    a.nzWidth / 2 +
                                    2 * a.options.borderSize)));
                        break;
                    case 7:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft = 0;
                        break;
                    case 8:
                        a.windowOffsetTop = a.nzHeight;
                        a.windowOffsetLeft =
                            -1 *
                            (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 9:
                        a.windowOffsetTop =
                            a.nzHeight -
                            a.zoomWindow.height() -
                            2 * a.options.borderSize;
                        a.windowOffsetLeft =
                            -1 *
                            (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 10:
                        a.options.zoomWindowHeight > a.nzHeight &&
                            ((a.windowOffsetTop =
                                -1 *
                                (a.options.zoomWindowHeight / 2 -
                                    a.nzHeight / 2)),
                            (a.windowOffsetLeft =
                                -1 *
                                (a.zoomWindow.width() +
                                    2 * a.options.borderSize)));
                        break;
                    case 11:
                        a.windowOffsetTop = a.options.zoomWindowOffety;
                        a.windowOffsetLeft =
                            -1 *
                            (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 12:
                        a.windowOffsetTop =
                            -1 *
                            (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft =
                            -1 *
                            (a.zoomWindow.width() + 2 * a.options.borderSize);
                        break;
                    case 13:
                        a.windowOffsetTop =
                            -1 *
                            (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft = 0;
                        break;
                    case 14:
                        a.options.zoomWindowHeight > a.nzHeight &&
                            ((a.windowOffsetTop =
                                -1 *
                                (a.zoomWindow.height() +
                                    2 * a.options.borderSize)),
                            (a.windowOffsetLeft =
                                -1 *
                                (a.options.zoomWindowWidth / 2 -
                                    a.nzWidth / 2 +
                                    2 * a.options.borderSize)));
                        break;
                    case 15:
                        a.windowOffsetTop =
                            -1 *
                            (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft =
                            a.nzWidth -
                            a.zoomWindow.width() -
                            2 * a.options.borderSize;
                        break;
                    case 16:
                        a.windowOffsetTop =
                            -1 *
                            (a.zoomWindow.height() + 2 * a.options.borderSize);
                        a.windowOffsetLeft = a.nzWidth;
                        break;
                    default:
                        (a.windowOffsetTop = a.options.zoomWindowOffety),
                            (a.windowOffsetLeft = a.nzWidth);
                }
            a.isWindowSet = !0;
            a.windowOffsetTop += a.options.zoomWindowOffety;
            a.windowOffsetLeft += a.options.zoomWindowOffetx;
            a.zoomWindow.css({ top: a.windowOffsetTop });
            a.zoomWindow.css({ left: a.windowOffsetLeft });
            "inner" == a.options.zoomType &&
                (a.zoomWindow.css({ top: 0 }), a.zoomWindow.css({ left: 0 }));
            a.windowLeftPos = String(
                -1 *
                    ((b.pageX - a.nzOffset.left) * a.widthRatio -
                        a.zoomWindow.width() / 2)
            );
            a.windowTopPos = String(
                -1 *
                    ((b.pageY - a.nzOffset.top) * a.heightRatio -
                        a.zoomWindow.height() / 2)
            );
            a.Etoppos && (a.windowTopPos = 0);
            a.Eloppos && (a.windowLeftPos = 0);
            a.Eboppos &&
                (a.windowTopPos =
                    -1 *
                    (a.largeHeight / a.currentZoomLevel -
                        a.zoomWindow.height()));
            a.Eroppos &&
                (a.windowLeftPos =
                    -1 *
                    (a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
            a.fullheight && (a.windowTopPos = 0);
            a.fullwidth && (a.windowLeftPos = 0);
            if ("window" == a.options.zoomType || "inner" == a.options.zoomType)
                1 == a.zoomLock &&
                    (1 >= a.widthRatio && (a.windowLeftPos = 0),
                    1 >= a.heightRatio && (a.windowTopPos = 0)),
                    a.largeHeight < a.options.zoomWindowHeight &&
                        (a.windowTopPos = 0),
                    a.largeWidth < a.options.zoomWindowWidth &&
                        (a.windowLeftPos = 0),
                    a.options.easing
                        ? (a.xp || (a.xp = 0),
                          a.yp || (a.yp = 0),
                          a.loop ||
                              (a.loop = setInterval(function () {
                                  a.xp +=
                                      (a.windowLeftPos - a.xp) /
                                      a.options.easingAmount;
                                  a.yp +=
                                      (a.windowTopPos - a.yp) /
                                      a.options.easingAmount;
                                  a.scrollingLock
                                      ? (clearInterval(a.loop),
                                        (a.xp = a.windowLeftPos),
                                        (a.yp = a.windowTopPos),
                                        (a.xp =
                                            -1 *
                                            ((b.pageX - a.nzOffset.left) *
                                                a.widthRatio -
                                                a.zoomWindow.width() / 2)),
                                        (a.yp =
                                            -1 *
                                            ((b.pageY - a.nzOffset.top) *
                                                a.heightRatio -
                                                a.zoomWindow.height() / 2)),
                                        a.changeBgSize &&
                                            (a.nzHeight > a.nzWidth
                                                ? ("lens" ==
                                                      a.options.zoomType &&
                                                      a.zoomLens.css({
                                                          "background-size":
                                                              a.largeWidth /
                                                                  a.newvalueheight +
                                                              "px " +
                                                              a.largeHeight /
                                                                  a.newvalueheight +
                                                              "px",
                                                      }),
                                                  a.zoomWindow.css({
                                                      "background-size":
                                                          a.largeWidth /
                                                              a.newvalueheight +
                                                          "px " +
                                                          a.largeHeight /
                                                              a.newvalueheight +
                                                          "px",
                                                  }))
                                                : ("lens" !=
                                                      a.options.zoomType &&
                                                      a.zoomLens.css({
                                                          "background-size":
                                                              a.largeWidth /
                                                                  a.newvaluewidth +
                                                              "px " +
                                                              a.largeHeight /
                                                                  a.newvalueheight +
                                                              "px",
                                                      }),
                                                  a.zoomWindow.css({
                                                      "background-size":
                                                          a.largeWidth /
                                                              a.newvaluewidth +
                                                          "px " +
                                                          a.largeHeight /
                                                              a.newvaluewidth +
                                                          "px",
                                                  })),
                                            (a.changeBgSize = !1)),
                                        a.zoomWindow.css({
                                            backgroundPosition:
                                                a.windowLeftPos +
                                                "px " +
                                                a.windowTopPos +
                                                "px",
                                        }),
                                        (a.scrollingLock = !1),
                                        (a.loop = !1))
                                      : (a.changeBgSize &&
                                            (a.nzHeight > a.nzWidth
                                                ? ("lens" ==
                                                      a.options.zoomType &&
                                                      a.zoomLens.css({
                                                          "background-size":
                                                              a.largeWidth /
                                                                  a.newvalueheight +
                                                              "px " +
                                                              a.largeHeight /
                                                                  a.newvalueheight +
                                                              "px",
                                                      }),
                                                  a.zoomWindow.css({
                                                      "background-size":
                                                          a.largeWidth /
                                                              a.newvalueheight +
                                                          "px " +
                                                          a.largeHeight /
                                                              a.newvalueheight +
                                                          "px",
                                                  }))
                                                : ("lens" !=
                                                      a.options.zoomType &&
                                                      a.zoomLens.css({
                                                          "background-size":
                                                              a.largeWidth /
                                                                  a.newvaluewidth +
                                                              "px " +
                                                              a.largeHeight /
                                                                  a.newvaluewidth +
                                                              "px",
                                                      }),
                                                  a.zoomWindow.css({
                                                      "background-size":
                                                          a.largeWidth /
                                                              a.newvaluewidth +
                                                          "px " +
                                                          a.largeHeight /
                                                              a.newvaluewidth +
                                                          "px",
                                                  })),
                                            (a.changeBgSize = !1)),
                                        a.zoomWindow.css({
                                            backgroundPosition:
                                                a.xp + "px " + a.yp + "px",
                                        }));
                              }, 16)))
                        : (a.changeBgSize &&
                              (a.nzHeight > a.nzWidth
                                  ? ("lens" == a.options.zoomType &&
                                        a.zoomLens.css({
                                            "background-size":
                                                a.largeWidth /
                                                    a.newvalueheight +
                                                "px " +
                                                a.largeHeight /
                                                    a.newvalueheight +
                                                "px",
                                        }),
                                    a.zoomWindow.css({
                                        "background-size":
                                            a.largeWidth / a.newvalueheight +
                                            "px " +
                                            a.largeHeight / a.newvalueheight +
                                            "px",
                                    }))
                                  : ("lens" == a.options.zoomType &&
                                        a.zoomLens.css({
                                            "background-size":
                                                a.largeWidth / a.newvaluewidth +
                                                "px " +
                                                a.largeHeight /
                                                    a.newvaluewidth +
                                                "px",
                                        }),
                                    a.largeHeight / a.newvaluewidth <
                                    a.options.zoomWindowHeight
                                        ? a.zoomWindow.css({
                                              "background-size":
                                                  a.largeWidth /
                                                      a.newvaluewidth +
                                                  "px " +
                                                  a.largeHeight /
                                                      a.newvaluewidth +
                                                  "px",
                                          })
                                        : a.zoomWindow.css({
                                              "background-size":
                                                  a.largeWidth /
                                                      a.newvalueheight +
                                                  "px " +
                                                  a.largeHeight /
                                                      a.newvalueheight +
                                                  "px",
                                          })),
                              (a.changeBgSize = !1)),
                          a.zoomWindow.css({
                              backgroundPosition:
                                  a.windowLeftPos +
                                  "px " +
                                  a.windowTopPos +
                                  "px",
                          }));
        },
        setTintPosition: function (b) {
            this.nzOffset = this.$elem.offset();
            this.tintpos = String(
                -1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2)
            );
            this.tintposy = String(
                -1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2)
            );
            this.Etoppos && (this.tintposy = 0);
            this.Eloppos && (this.tintpos = 0);
            this.Eboppos &&
                (this.tintposy =
                    -1 *
                    (this.nzHeight -
                        this.zoomLens.height() -
                        2 * this.options.lensBorderSize));
            this.Eroppos &&
                (this.tintpos =
                    -1 *
                    (this.nzWidth -
                        this.zoomLens.width() -
                        2 * this.options.lensBorderSize));
            this.options.tint &&
                (this.fullheight && (this.tintposy = 0),
                this.fullwidth && (this.tintpos = 0),
                this.zoomTintImage.css({ left: this.tintpos + "px" }),
                this.zoomTintImage.css({ top: this.tintposy + "px" }));
        },
        swaptheimage: function (b, a) {
            var c = this,
                e = new Image();
            c.options.loadingIcon &&
                ((c.spinner = d(
                    "<div style=\"background: url('" +
                        c.options.loadingIcon +
                        "') no-repeat center;height:" +
                        c.nzHeight +
                        "px;width:" +
                        c.nzWidth +
                        'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
                )),
                c.$elem.after(c.spinner));
            c.options.onImageSwap(c.$elem);
            e.onload = function () {
                c.largeWidth = e.width;
                c.largeHeight = e.height;
                c.zoomImage = a;
                c.zoomWindow.css({
                    "background-size":
                        c.largeWidth + "px " + c.largeHeight + "px",
                });
                c.zoomWindow.css({
                    "background-size":
                        c.largeWidth + "px " + c.largeHeight + "px",
                });
                c.swapAction(b, a);
            };
            e.src = a;
        },
        swapAction: function (b, a) {
            var c = this,
                e = new Image();
            e.onload = function () {
                c.nzHeight = e.height;
                c.nzWidth = e.width;
                c.options.onImageSwapComplete(c.$elem);
                c.doneCallback();
            };
            e.src = b;
            c.currentZoomLevel = c.options.zoomLevel;
            c.options.maxZoomLevel = !1;
            "lens" == c.options.zoomType &&
                c.zoomLens.css({ backgroundImage: "url('" + a + "')" });
            "window" == c.options.zoomType &&
                c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
            "inner" == c.options.zoomType &&
                c.zoomWindow.css({ backgroundImage: "url('" + a + "')" });
            c.currentImage = a;
            if (c.options.imageCrossfade) {
                var f = c.$elem,
                    g = f.clone();
                c.$elem.attr("src", b);
                c.$elem.after(g);
                g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                    d(this).remove();
                });
                c.$elem.width("auto").removeAttr("width");
                c.$elem.height("auto").removeAttr("height");
                f.fadeIn(c.options.imageCrossfade);
                c.options.tint &&
                    "inner" != c.options.zoomType &&
                    ((f = c.zoomTintImage),
                    (g = f.clone()),
                    c.zoomTintImage.attr("src", a),
                    c.zoomTintImage.after(g),
                    g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
                        d(this).remove();
                    }),
                    f.fadeIn(c.options.imageCrossfade),
                    c.zoomTint.css({ height: c.$elem.height() }),
                    c.zoomTint.css({ width: c.$elem.width() }));
                c.zoomContainer.css("height", c.$elem.height());
                c.zoomContainer.css("width", c.$elem.width());
                "inner" != c.options.zoomType ||
                    c.options.constrainType ||
                    (c.zoomWrap.parent().css("height", c.$elem.height()),
                    c.zoomWrap.parent().css("width", c.$elem.width()),
                    c.zoomWindow.css("height", c.$elem.height()),
                    c.zoomWindow.css("width", c.$elem.width()));
            } else
                c.$elem.attr("src", b),
                    c.options.tint &&
                        (c.zoomTintImage.attr("src", a),
                        c.zoomTintImage.attr("height", c.$elem.height()),
                        c.zoomTintImage.css({ height: c.$elem.height() }),
                        c.zoomTint.css({ height: c.$elem.height() })),
                    c.zoomContainer.css("height", c.$elem.height()),
                    c.zoomContainer.css("width", c.$elem.width());
            c.options.imageCrossfade &&
                (c.zoomWrap.css("height", c.$elem.height()),
                c.zoomWrap.css("width", c.$elem.width()));
            c.options.constrainType &&
                ("height" == c.options.constrainType &&
                    (c.zoomContainer.css("height", c.options.constrainSize),
                    c.zoomContainer.css("width", "auto"),
                    c.options.imageCrossfade
                        ? (c.zoomWrap.css("height", c.options.constrainSize),
                          c.zoomWrap.css("width", "auto"),
                          (c.constwidth = c.zoomWrap.width()))
                        : (c.$elem.css("height", c.options.constrainSize),
                          c.$elem.css("width", "auto"),
                          (c.constwidth = c.$elem.width())),
                    "inner" == c.options.zoomType &&
                        (c.zoomWrap
                            .parent()
                            .css("height", c.options.constrainSize),
                        c.zoomWrap.parent().css("width", c.constwidth),
                        c.zoomWindow.css("height", c.options.constrainSize),
                        c.zoomWindow.css("width", c.constwidth)),
                    c.options.tint &&
                        (c.tintContainer.css("height", c.options.constrainSize),
                        c.tintContainer.css("width", c.constwidth),
                        c.zoomTint.css("height", c.options.constrainSize),
                        c.zoomTint.css("width", c.constwidth),
                        c.zoomTintImage.css("height", c.options.constrainSize),
                        c.zoomTintImage.css("width", c.constwidth))),
                "width" == c.options.constrainType &&
                    (c.zoomContainer.css("height", "auto"),
                    c.zoomContainer.css("width", c.options.constrainSize),
                    c.options.imageCrossfade
                        ? (c.zoomWrap.css("height", "auto"),
                          c.zoomWrap.css("width", c.options.constrainSize),
                          (c.constheight = c.zoomWrap.height()))
                        : (c.$elem.css("height", "auto"),
                          c.$elem.css("width", c.options.constrainSize),
                          (c.constheight = c.$elem.height())),
                    "inner" == c.options.zoomType &&
                        (c.zoomWrap.parent().css("height", c.constheight),
                        c.zoomWrap
                            .parent()
                            .css("width", c.options.constrainSize),
                        c.zoomWindow.css("height", c.constheight),
                        c.zoomWindow.css("width", c.options.constrainSize)),
                    c.options.tint &&
                        (c.tintContainer.css("height", c.constheight),
                        c.tintContainer.css("width", c.options.constrainSize),
                        c.zoomTint.css("height", c.constheight),
                        c.zoomTint.css("width", c.options.constrainSize),
                        c.zoomTintImage.css("height", c.constheight),
                        c.zoomTintImage.css(
                            "width",
                            c.options.constrainSize
                        ))));
        },
        doneCallback: function () {
            this.options.loadingIcon && this.spinner.hide();
            this.nzOffset = this.$elem.offset();
            this.nzWidth = this.$elem.width();
            this.nzHeight = this.$elem.height();
            this.currentZoomLevel = this.options.zoomLevel;
            this.widthRatio = this.largeWidth / this.nzWidth;
            this.heightRatio = this.largeHeight / this.nzHeight;
            "window" == this.options.zoomType &&
                ((lensHeight =
                    this.nzHeight <
                    this.options.zoomWindowWidth / this.widthRatio
                        ? this.nzHeight
                        : String(
                              this.options.zoomWindowHeight / this.heightRatio
                          )),
                (lensWidth =
                    this.options.zoomWindowWidth < this.options.zoomWindowWidth
                        ? this.nzWidth
                        : this.options.zoomWindowWidth / this.widthRatio),
                this.zoomLens &&
                    (this.zoomLens.css("width", lensWidth),
                    this.zoomLens.css("height", lensHeight)));
        },
        getCurrentImage: function () {
            return this.zoomImage;
        },
        getGalleryList: function () {
            var b = this;
            b.gallerylist = [];
            b.options.gallery
                ? d("#" + b.options.gallery + " a").each(function () {
                      var a = "";
                      d(this).data("zoom-image")
                          ? (a = d(this).data("zoom-image"))
                          : d(this).data("image") &&
                            (a = d(this).data("image"));
                      a == b.zoomImage
                          ? b.gallerylist.unshift({
                                href: "" + a + "",
                                title: d(this).find("img").attr("title"),
                            })
                          : b.gallerylist.push({
                                href: "" + a + "",
                                title: d(this).find("img").attr("title"),
                            });
                  })
                : b.gallerylist.push({
                      href: "" + b.zoomImage + "",
                      title: d(this).find("img").attr("title"),
                  });
            return b.gallerylist;
        },
        changeZoomLevel: function (b) {
            this.scrollingLock = !0;
            this.newvalue = parseFloat(b).toFixed(2);
            newvalue = parseFloat(b).toFixed(2);
            maxheightnewvalue =
                this.largeHeight /
                ((this.options.zoomWindowHeight / this.nzHeight) *
                    this.nzHeight);
            maxwidthtnewvalue =
                this.largeWidth /
                ((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth);
            "inner" != this.options.zoomType &&
                (maxheightnewvalue <= newvalue
                    ? ((this.heightRatio =
                          this.largeHeight / maxheightnewvalue / this.nzHeight),
                      (this.newvalueheight = maxheightnewvalue),
                      (this.fullheight = !0))
                    : ((this.heightRatio =
                          this.largeHeight / newvalue / this.nzHeight),
                      (this.newvalueheight = newvalue),
                      (this.fullheight = !1)),
                maxwidthtnewvalue <= newvalue
                    ? ((this.widthRatio =
                          this.largeWidth / maxwidthtnewvalue / this.nzWidth),
                      (this.newvaluewidth = maxwidthtnewvalue),
                      (this.fullwidth = !0))
                    : ((this.widthRatio =
                          this.largeWidth / newvalue / this.nzWidth),
                      (this.newvaluewidth = newvalue),
                      (this.fullwidth = !1)),
                "lens" == this.options.zoomType &&
                    (maxheightnewvalue <= newvalue
                        ? ((this.fullwidth = !0),
                          (this.newvaluewidth = maxheightnewvalue))
                        : ((this.widthRatio =
                              this.largeWidth / newvalue / this.nzWidth),
                          (this.newvaluewidth = newvalue),
                          (this.fullwidth = !1))));
            "inner" == this.options.zoomType &&
                ((maxheightnewvalue = parseFloat(
                    this.largeHeight / this.nzHeight
                ).toFixed(2)),
                (maxwidthtnewvalue = parseFloat(
                    this.largeWidth / this.nzWidth
                ).toFixed(2)),
                newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
                newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
                maxheightnewvalue <= newvalue
                    ? ((this.heightRatio =
                          this.largeHeight / newvalue / this.nzHeight),
                      (this.newvalueheight =
                          newvalue > maxheightnewvalue
                              ? maxheightnewvalue
                              : newvalue),
                      (this.fullheight = !0))
                    : ((this.heightRatio =
                          this.largeHeight / newvalue / this.nzHeight),
                      (this.newvalueheight =
                          newvalue > maxheightnewvalue
                              ? maxheightnewvalue
                              : newvalue),
                      (this.fullheight = !1)),
                maxwidthtnewvalue <= newvalue
                    ? ((this.widthRatio =
                          this.largeWidth / newvalue / this.nzWidth),
                      (this.newvaluewidth =
                          newvalue > maxwidthtnewvalue
                              ? maxwidthtnewvalue
                              : newvalue),
                      (this.fullwidth = !0))
                    : ((this.widthRatio =
                          this.largeWidth / newvalue / this.nzWidth),
                      (this.newvaluewidth = newvalue),
                      (this.fullwidth = !1)));
            scrcontinue = !1;
            "inner" == this.options.zoomType &&
                (this.nzWidth > this.nzHeight &&
                    (this.newvaluewidth <= maxwidthtnewvalue
                        ? (scrcontinue = !0)
                        : ((scrcontinue = !1),
                          (this.fullwidth = this.fullheight = !0))),
                this.nzHeight > this.nzWidth &&
                    (this.newvaluewidth <= maxwidthtnewvalue
                        ? (scrcontinue = !0)
                        : ((scrcontinue = !1),
                          (this.fullwidth = this.fullheight = !0))));
            "inner" != this.options.zoomType && (scrcontinue = !0);
            scrcontinue &&
                ((this.zoomLock = 0),
                (this.changeZoom = !0),
                this.options.zoomWindowHeight / this.heightRatio <=
                    this.nzHeight &&
                    ((this.currentZoomLevel = this.newvalueheight),
                    "lens" != this.options.zoomType &&
                        "inner" != this.options.zoomType &&
                        ((this.changeBgSize = !0),
                        this.zoomLens.css({
                            height:
                                String(
                                    this.options.zoomWindowHeight /
                                        this.heightRatio
                                ) + "px",
                        })),
                    "lens" == this.options.zoomType ||
                        "inner" == this.options.zoomType) &&
                    (this.changeBgSize = !0),
                this.options.zoomWindowWidth / this.widthRatio <=
                    this.nzWidth &&
                    ("inner" != this.options.zoomType &&
                        this.newvaluewidth > this.newvalueheight &&
                        (this.currentZoomLevel = this.newvaluewidth),
                    "lens" != this.options.zoomType &&
                        "inner" != this.options.zoomType &&
                        ((this.changeBgSize = !0),
                        this.zoomLens.css({
                            width:
                                String(
                                    this.options.zoomWindowWidth /
                                        this.widthRatio
                                ) + "px",
                        })),
                    "lens" == this.options.zoomType ||
                        "inner" == this.options.zoomType) &&
                    (this.changeBgSize = !0),
                "inner" == this.options.zoomType &&
                    ((this.changeBgSize = !0),
                    this.nzWidth > this.nzHeight &&
                        (this.currentZoomLevel = this.newvaluewidth),
                    this.nzHeight > this.nzWidth &&
                        (this.currentZoomLevel = this.newvaluewidth)));
            this.setPosition(this.currentLoc);
        },
        closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide();
            self.zoomLens && self.zoomLens.hide();
            self.zoomTint && self.zoomTint.hide();
        },
        changeState: function (b) {
            "enable" == b && (this.options.zoomEnabled = !0);
            "disable" == b && (this.options.zoomEnabled = !1);
        },
    };
    d.fn.elevateZoom = function (b) {
        return this.each(function () {
            var a = Object.create(k);
            a.init(b, this);
            d.data(this, "elevateZoom", a);
        });
    };
    d.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: 0.1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: 0.4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: 0.4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: d.noop,
        onZoomedImageLoaded: function () {},
        onImageSwap: d.noop,
        onImageSwapComplete: d.noop,
    };
})(jQuery, window, document);

/*! jQuery UI - v1.12.1 - 2021-06-24
 * http://jqueryui.com
 * Includes: widget.js, form-reset-mixin.js, keycode.js, labels.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

!(function (t) {
    "function" == typeof define && define.amd
        ? define(["jquery"], t)
        : t(jQuery);
})(function (u) {
    u.ui = u.ui || {};
    u.ui.version = "1.12.1";
    var n,
        i = 0,
        l = Array.prototype.slice;
    (u.cleanData =
        ((n = u.cleanData),
        function (t) {
            for (var e, i, s = 0; null != (i = t[s]); s++)
                try {
                    (e = u._data(i, "events")) &&
                        e.remove &&
                        u(i).triggerHandler("remove");
                } catch (t) {}
            n(t);
        })),
        (u.widget = function (t, i, e) {
            var s,
                n,
                o,
                a = {},
                l = t.split(".")[0],
                h = l + "-" + (t = t.split(".")[1]);
            return (
                e || ((e = i), (i = u.Widget)),
                u.isArray(e) && (e = u.extend.apply(null, [{}].concat(e))),
                (u.expr[":"][h.toLowerCase()] = function (t) {
                    return !!u.data(t, h);
                }),
                (u[l] = u[l] || {}),
                (s = u[l][t]),
                (n = u[l][t] =
                    function (t, e) {
                        if (!this._createWidget) return new n(t, e);
                        arguments.length && this._createWidget(t, e);
                    }),
                u.extend(n, s, {
                    version: e.version,
                    _proto: u.extend({}, e),
                    _childConstructors: [],
                }),
                ((o = new i()).options = u.widget.extend({}, o.options)),
                u.each(e, function (e, s) {
                    function n() {
                        return i.prototype[e].apply(this, arguments);
                    }
                    function o(t) {
                        return i.prototype[e].apply(this, t);
                    }
                    u.isFunction(s)
                        ? (a[e] = function () {
                              var t,
                                  e = this._super,
                                  i = this._superApply;
                              return (
                                  (this._super = n),
                                  (this._superApply = o),
                                  (t = s.apply(this, arguments)),
                                  (this._super = e),
                                  (this._superApply = i),
                                  t
                              );
                          })
                        : (a[e] = s);
                }),
                (n.prototype = u.widget.extend(
                    o,
                    { widgetEventPrefix: (s && o.widgetEventPrefix) || t },
                    a,
                    {
                        constructor: n,
                        namespace: l,
                        widgetName: t,
                        widgetFullName: h,
                    }
                )),
                s
                    ? (u.each(s._childConstructors, function (t, e) {
                          var i = e.prototype;
                          u.widget(
                              i.namespace + "." + i.widgetName,
                              n,
                              e._proto
                          );
                      }),
                      delete s._childConstructors)
                    : i._childConstructors.push(n),
                u.widget.bridge(t, n),
                n
            );
        }),
        (u.widget.extend = function (t) {
            for (
                var e, i, s = l.call(arguments, 1), n = 0, o = s.length;
                n < o;
                n++
            )
                for (e in s[n])
                    (i = s[n][e]),
                        s[n].hasOwnProperty(e) &&
                            void 0 !== i &&
                            (u.isPlainObject(i)
                                ? (t[e] = u.isPlainObject(t[e])
                                      ? u.widget.extend({}, t[e], i)
                                      : u.widget.extend({}, i))
                                : (t[e] = i));
            return t;
        }),
        (u.widget.bridge = function (o, e) {
            var a = e.prototype.widgetFullName || o;
            u.fn[o] = function (i) {
                var t = "string" == typeof i,
                    s = l.call(arguments, 1),
                    n = this;
                return (
                    t
                        ? this.length || "instance" !== i
                            ? this.each(function () {
                                  var t,
                                      e = u.data(this, a);
                                  return "instance" === i
                                      ? ((n = e), !1)
                                      : e
                                      ? u.isFunction(e[i]) &&
                                        "_" !== i.charAt(0)
                                          ? (t = e[i].apply(e, s)) !== e &&
                                            void 0 !== t
                                              ? ((n =
                                                    t && t.jquery
                                                        ? n.pushStack(t.get())
                                                        : t),
                                                !1)
                                              : void 0
                                          : u.error(
                                                "no such method '" +
                                                    i +
                                                    "' for " +
                                                    o +
                                                    " widget instance"
                                            )
                                      : u.error(
                                            "cannot call methods on " +
                                                o +
                                                " prior to initialization; attempted to call method '" +
                                                i +
                                                "'"
                                        );
                              })
                            : (n = void 0)
                        : (s.length &&
                              (i = u.widget.extend.apply(null, [i].concat(s))),
                          this.each(function () {
                              var t = u.data(this, a);
                              t
                                  ? (t.option(i || {}), t._init && t._init())
                                  : u.data(this, a, new e(i, this));
                          })),
                    n
                );
            };
        }),
        (u.Widget = function () {}),
        (u.Widget._childConstructors = []),
        (u.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function (t, e) {
                (e = u(e || this.defaultElement || this)[0]),
                    (this.element = u(e)),
                    (this.uuid = i++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = u()),
                    (this.hoverable = u()),
                    (this.focusable = u()),
                    (this.classesElementLookup = {}),
                    e !== this &&
                        (u.data(e, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (t) {
                                t.target === e && this.destroy();
                            },
                        }),
                        (this.document = u(
                            e.style ? e.ownerDocument : e.document || e
                        )),
                        (this.window = u(
                            this.document[0].defaultView ||
                                this.document[0].parentWindow
                        ))),
                    (this.options = u.widget.extend(
                        {},
                        this.options,
                        this._getCreateOptions(),
                        t
                    )),
                    this._create(),
                    this.options.disabled &&
                        this._setOptionDisabled(this.options.disabled),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: function () {
                return {};
            },
            _getCreateEventData: u.noop,
            _create: u.noop,
            _init: u.noop,
            destroy: function () {
                var i = this;
                this._destroy(),
                    u.each(this.classesElementLookup, function (t, e) {
                        i._removeClass(e, t);
                    }),
                    this.element
                        .off(this.eventNamespace)
                        .removeData(this.widgetFullName),
                    this.widget()
                        .off(this.eventNamespace)
                        .removeAttr("aria-disabled"),
                    this.bindings.off(this.eventNamespace);
            },
            _destroy: u.noop,
            widget: function () {
                return this.element;
            },
            option: function (t, e) {
                var i,
                    s,
                    n,
                    o = t;
                if (0 === arguments.length)
                    return u.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (
                        ((o = {}), (t = (i = t.split(".")).shift()), i.length)
                    ) {
                        for (
                            s = o[t] = u.widget.extend({}, this.options[t]),
                                n = 0;
                            n < i.length - 1;
                            n++
                        )
                            (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
                        if (((t = i.pop()), 1 === arguments.length))
                            return void 0 === s[t] ? null : s[t];
                        s[t] = e;
                    } else {
                        if (1 === arguments.length)
                            return void 0 === this.options[t]
                                ? null
                                : this.options[t];
                        o[t] = e;
                    }
                return this._setOptions(o), this;
            },
            _setOptions: function (t) {
                for (var e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function (t, e) {
                return (
                    "classes" === t && this._setOptionClasses(e),
                    (this.options[t] = e),
                    "disabled" === t && this._setOptionDisabled(e),
                    this
                );
            },
            _setOptionClasses: function (t) {
                var e, i, s;
                for (e in t)
                    (s = this.classesElementLookup[e]),
                        t[e] !== this.options.classes[e] &&
                            s &&
                            s.length &&
                            ((i = u(s.get())),
                            this._removeClass(s, e),
                            i.addClass(
                                this._classes({
                                    element: i,
                                    keys: e,
                                    classes: t,
                                    add: !0,
                                })
                            ));
            },
            _setOptionDisabled: function (t) {
                this._toggleClass(
                    this.widget(),
                    this.widgetFullName + "-disabled",
                    null,
                    !!t
                ),
                    t &&
                        (this._removeClass(
                            this.hoverable,
                            null,
                            "ui-state-hover"
                        ),
                        this._removeClass(
                            this.focusable,
                            null,
                            "ui-state-focus"
                        ));
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _classes: function (n) {
                var o = [],
                    a = this;
                function t(t, e) {
                    for (var i, s = 0; s < t.length; s++)
                        (i = a.classesElementLookup[t[s]] || u()),
                            (i = n.add
                                ? u(u.unique(i.get().concat(n.element.get())))
                                : u(i.not(n.element).get())),
                            (a.classesElementLookup[t[s]] = i),
                            o.push(t[s]),
                            e && n.classes[t[s]] && o.push(n.classes[t[s]]);
                }
                return (
                    (n = u.extend(
                        {
                            element: this.element,
                            classes: this.options.classes || {},
                        },
                        n
                    )),
                    this._on(n.element, { remove: "_untrackClassesElement" }),
                    n.keys && t(n.keys.match(/\S+/g) || [], !0),
                    n.extra && t(n.extra.match(/\S+/g) || []),
                    o.join(" ")
                );
            },
            _untrackClassesElement: function (i) {
                var s = this;
                u.each(s.classesElementLookup, function (t, e) {
                    -1 !== u.inArray(i.target, e) &&
                        (s.classesElementLookup[t] = u(e.not(i.target).get()));
                });
            },
            _removeClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !1);
            },
            _addClass: function (t, e, i) {
                return this._toggleClass(t, e, i, !0);
            },
            _toggleClass: function (t, e, i, s) {
                s = "boolean" == typeof s ? s : i;
                var n = "string" == typeof t || null === t,
                    t = {
                        extra: n ? e : i,
                        keys: n ? t : e,
                        element: n ? this.element : t,
                        add: s,
                    };
                return t.element.toggleClass(this._classes(t), s), this;
            },
            _on: function (n, o, t) {
                var a,
                    l = this;
                "boolean" != typeof n && ((t = o), (o = n), (n = !1)),
                    t
                        ? ((o = a = u(o)),
                          (this.bindings = this.bindings.add(o)))
                        : ((t = o), (o = this.element), (a = this.widget())),
                    u.each(t, function (t, e) {
                        function i() {
                            if (
                                n ||
                                (!0 !== l.options.disabled &&
                                    !u(this).hasClass("ui-state-disabled"))
                            )
                                return ("string" == typeof e ? l[e] : e).apply(
                                    l,
                                    arguments
                                );
                        }
                        "string" != typeof e &&
                            (i.guid = e.guid = e.guid || i.guid || u.guid++);
                        var s = t.match(/^([\w:-]*)\s*(.*)$/),
                            t = s[1] + l.eventNamespace,
                            s = s[2];
                        s ? a.on(t, s, i) : o.on(t, i);
                    });
            },
            _off: function (t, e) {
                (e =
                    (e || "").split(" ").join(this.eventNamespace + " ") +
                    this.eventNamespace),
                    t.off(e).off(e),
                    (this.bindings = u(this.bindings.not(t).get())),
                    (this.focusable = u(this.focusable.not(t).get())),
                    (this.hoverable = u(this.hoverable.not(t).get()));
            },
            _delay: function (t, e) {
                var i = this;
                return setTimeout(function () {
                    return ("string" == typeof t ? i[t] : t).apply(
                        i,
                        arguments
                    );
                }, e || 0);
            },
            _hoverable: function (t) {
                (this.hoverable = this.hoverable.add(t)),
                    this._on(t, {
                        mouseenter: function (t) {
                            this._addClass(
                                u(t.currentTarget),
                                null,
                                "ui-state-hover"
                            );
                        },
                        mouseleave: function (t) {
                            this._removeClass(
                                u(t.currentTarget),
                                null,
                                "ui-state-hover"
                            );
                        },
                    });
            },
            _focusable: function (t) {
                (this.focusable = this.focusable.add(t)),
                    this._on(t, {
                        focusin: function (t) {
                            this._addClass(
                                u(t.currentTarget),
                                null,
                                "ui-state-focus"
                            );
                        },
                        focusout: function (t) {
                            this._removeClass(
                                u(t.currentTarget),
                                null,
                                "ui-state-focus"
                            );
                        },
                    });
            },
            _trigger: function (t, e, i) {
                var s,
                    n,
                    o = this.options[t];
                if (
                    ((i = i || {}),
                    ((e = u.Event(e)).type = (
                        t === this.widgetEventPrefix
                            ? t
                            : this.widgetEventPrefix + t
                    ).toLowerCase()),
                    (e.target = this.element[0]),
                    (n = e.originalEvent))
                )
                    for (s in n) s in e || (e[s] = n[s]);
                return (
                    this.element.trigger(e, i),
                    !(
                        (u.isFunction(o) &&
                            !1 === o.apply(this.element[0], [e].concat(i))) ||
                        e.isDefaultPrevented()
                    )
                );
            },
        }),
        u.each({ show: "fadeIn", hide: "fadeOut" }, function (o, a) {
            u.Widget.prototype["_" + o] = function (e, t, i) {
                var s;
                "string" == typeof t && (t = { effect: t });
                var n = t
                    ? (!0 !== t && "number" != typeof t && t.effect) || a
                    : o;
                "number" == typeof (t = t || {}) && (t = { duration: t }),
                    (s = !u.isEmptyObject(t)),
                    (t.complete = i),
                    t.delay && e.delay(t.delay),
                    s && u.effects && u.effects.effect[n]
                        ? e[o](t)
                        : n !== o && e[n]
                        ? e[n](t.duration, t.easing, i)
                        : e.queue(function (t) {
                              u(this)[o](), i && i.call(e[0]), t();
                          });
            };
        });
    u.widget,
        (u.fn.form = function () {
            return "string" == typeof this[0].form
                ? this.closest("form")
                : u(this[0].form);
        }),
        (u.ui.formResetMixin = {
            _formResetHandler: function () {
                var e = u(this);
                setTimeout(function () {
                    var t = e.data("ui-form-reset-instances");
                    u.each(t, function () {
                        this.refresh();
                    });
                });
            },
            _bindFormResetHandler: function () {
                var t;
                (this.form = this.element.form()),
                    this.form.length &&
                        ((t = this.form.data("ui-form-reset-instances") || [])
                            .length ||
                            this.form.on(
                                "reset.ui-form-reset",
                                this._formResetHandler
                            ),
                        t.push(this),
                        this.form.data("ui-form-reset-instances", t));
            },
            _unbindFormResetHandler: function () {
                var t;
                this.form.length &&
                    ((t = this.form.data("ui-form-reset-instances")).splice(
                        u.inArray(this, t),
                        1
                    ),
                    t.length
                        ? this.form.data("ui-form-reset-instances", t)
                        : this.form
                              .removeData("ui-form-reset-instances")
                              .off("reset.ui-form-reset"));
            },
        }),
        (u.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38,
        }),
        (u.ui.escapeSelector =
            ((e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g),
            function (t) {
                return t.replace(e, "\\$1");
            })),
        (u.fn.labels = function () {
            var t, e, i;
            return this[0].labels && this[0].labels.length
                ? this.pushStack(this[0].labels)
                : ((e = this.eq(0).parents("label")),
                  (t = this.attr("id")) &&
                      ((i = (i = this.eq(0).parents().last()).add(
                          (i.length ? i : this).siblings()
                      )),
                      (t = "label[for='" + u.ui.escapeSelector(t) + "']"),
                      (e = e.add(i.find(t).addBack(t)))),
                  this.pushStack(e));
        });
    var e,
        o = /ui-corner-([a-z]){2,6}/g;
    u.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input",
            },
        },
        _create: function () {
            this._enhance();
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function () {
            this._callChildMethod("destroy"),
                this.childWidgets.removeData("ui-controlgroup-data"),
                this.element.removeAttr("role"),
                this.options.items.controlgroupLabel &&
                    this.element
                        .find(this.options.items.controlgroupLabel)
                        .find(".ui-controlgroup-label-contents")
                        .contents()
                        .unwrap();
        },
        _initWidgets: function () {
            var o = this,
                a = [];
            u.each(this.options.items, function (s, t) {
                var e,
                    n = {};
                if (t)
                    return "controlgroupLabel" === s
                        ? ((e = o.element.find(t)).each(function () {
                              var t = u(this);
                              t.children(".ui-controlgroup-label-contents")
                                  .length ||
                                  t
                                      .contents()
                                      .wrapAll(
                                          "<span class='ui-controlgroup-label-contents'></span>"
                                      );
                          }),
                          o._addClass(
                              e,
                              null,
                              "ui-widget ui-widget-content ui-state-default"
                          ),
                          void (a = a.concat(e.get())))
                        : void (
                              u.fn[s] &&
                              ((n = o["_" + s + "Options"]
                                  ? o["_" + s + "Options"]("middle")
                                  : { classes: {} }),
                              o.element.find(t).each(function () {
                                  var t = u(this),
                                      e = t[s]("instance"),
                                      i = u.widget.extend({}, n);
                                  ("button" === s &&
                                      t.parent(".ui-spinner").length) ||
                                      ((e = e || t[s]()[s]("instance")) &&
                                          (i.classes = o._resolveClassesValues(
                                              i.classes,
                                              e
                                          )),
                                      t[s](i),
                                      (i = t[s]("widget")),
                                      u.data(
                                          i[0],
                                          "ui-controlgroup-data",
                                          e || t[s]("instance")
                                      ),
                                      a.push(i[0]));
                              }))
                          );
            }),
                (this.childWidgets = u(u.unique(a))),
                this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function (e) {
            this.childWidgets.each(function () {
                var t = u(this).data("ui-controlgroup-data");
                t && t[e] && t[e]();
            });
        },
        _updateCornerClass: function (t, e) {
            e = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(
                t,
                null,
                "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
            ),
                this._addClass(t, null, e);
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction,
                s = { classes: {} };
            return (
                (s.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all",
                }[t]),
                s
            );
        },
        _spinnerOptions: function (t) {
            t = this._buildSimpleOptions(t, "ui-spinner");
            return (
                (t.classes["ui-spinner-up"] = ""),
                (t.classes["ui-spinner-down"] = ""),
                t
            );
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button");
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": "",
                    },
                    first: {
                        "ui-selectmenu-button-open":
                            "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed":
                            "ui-corner-" + (e ? "top" : "left"),
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed":
                            "ui-corner-" + (e ? "bottom" : "right"),
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all",
                    },
                }[t],
            };
        },
        _resolveClassesValues: function (i, s) {
            var n = {};
            return (
                u.each(i, function (t) {
                    var e = s.options.classes[t] || "",
                        e = u.trim(e.replace(o, ""));
                    n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
                }),
                n
            );
        },
        _setOption: function (t, e) {
            "direction" === t &&
                this._removeClass("ui-controlgroup-" + this.options.direction),
                this._super(t, e),
                "disabled" !== t
                    ? this.refresh()
                    : this._callChildMethod(e ? "disable" : "enable");
        },
        refresh: function () {
            var n,
                o = this;
            this._addClass(
                "ui-controlgroup ui-controlgroup-" + this.options.direction
            ),
                "horizontal" === this.options.direction &&
                    this._addClass(null, "ui-helper-clearfix"),
                this._initWidgets(),
                (n = this.childWidgets),
                this.options.onlyVisible && (n = n.filter(":visible")),
                n.length &&
                    (u.each(["first", "last"], function (t, e) {
                        var i,
                            s = n[e]().data("ui-controlgroup-data");
                        s && o["_" + s.widgetName + "Options"]
                            ? (((i = o["_" + s.widgetName + "Options"](
                                  1 === n.length ? "only" : e
                              )).classes = o._resolveClassesValues(
                                  i.classes,
                                  s
                              )),
                              s.element[s.widgetName](i))
                            : o._updateCornerClass(n[e](), e);
                    }),
                    this._callChildMethod("refresh"));
        },
    });
    u.widget("ui.checkboxradio", [
        u.ui.formResetMixin,
        {
            version: "1.12.1",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all",
                },
            },
            _getCreateOptions: function () {
                var t,
                    e = this,
                    i = this._super() || {};
                return (
                    this._readType(),
                    (t = this.element.labels()),
                    (this.label = u(t[t.length - 1])),
                    this.label.length ||
                        u.error("No label found for checkboxradio widget"),
                    (this.originalLabel = ""),
                    this.label
                        .contents()
                        .not(this.element[0])
                        .each(function () {
                            e.originalLabel +=
                                3 === this.nodeType
                                    ? u(this).text()
                                    : this.outerHTML;
                        }),
                    this.originalLabel && (i.label = this.originalLabel),
                    null != (t = this.element[0].disabled) && (i.disabled = t),
                    i
                );
            },
            _create: function () {
                var t = this.element[0].checked;
                this._bindFormResetHandler(),
                    null == this.options.disabled &&
                        (this.options.disabled = this.element[0].disabled),
                    this._setOption("disabled", this.options.disabled),
                    this._addClass(
                        "ui-checkboxradio",
                        "ui-helper-hidden-accessible"
                    ),
                    this._addClass(
                        this.label,
                        "ui-checkboxradio-label",
                        "ui-button ui-widget"
                    ),
                    "radio" === this.type &&
                        this._addClass(
                            this.label,
                            "ui-checkboxradio-radio-label"
                        ),
                    this.options.label &&
                    this.options.label !== this.originalLabel
                        ? this._updateLabel()
                        : this.originalLabel &&
                          (this.options.label = this.originalLabel),
                    this._enhance(),
                    t &&
                        (this._addClass(
                            this.label,
                            "ui-checkboxradio-checked",
                            "ui-state-active"
                        ),
                        this.icon &&
                            this._addClass(this.icon, null, "ui-state-hover")),
                    this._on({
                        change: "_toggleClasses",
                        focus: function () {
                            this._addClass(
                                this.label,
                                null,
                                "ui-state-focus ui-visual-focus"
                            );
                        },
                        blur: function () {
                            this._removeClass(
                                this.label,
                                null,
                                "ui-state-focus ui-visual-focus"
                            );
                        },
                    });
            },
            _readType: function () {
                var t = this.element[0].nodeName.toLowerCase();
                (this.type = this.element[0].type),
                    ("input" === t && /radio|checkbox/.test(this.type)) ||
                        u.error(
                            "Can't create checkboxradio on element.nodeName=" +
                                t +
                                " and element.type=" +
                                this.type
                        );
            },
            _enhance: function () {
                this._updateIcon(this.element[0].checked);
            },
            widget: function () {
                return this.label;
            },
            _getRadioGroup: function () {
                var t = this.element[0].name,
                    e = "input[name='" + u.ui.escapeSelector(t) + "']";
                return t
                    ? (this.form.length
                          ? u(this.form[0].elements).filter(e)
                          : u(e).filter(function () {
                                return 0 === u(this).form().length;
                            })
                      ).not(this.element)
                    : u([]);
            },
            _toggleClasses: function () {
                var t = this.element[0].checked;
                this._toggleClass(
                    this.label,
                    "ui-checkboxradio-checked",
                    "ui-state-active",
                    t
                ),
                    this.options.icon &&
                        "checkbox" === this.type &&
                        this._toggleClass(
                            this.icon,
                            null,
                            "ui-icon-check ui-state-checked",
                            t
                        )._toggleClass(this.icon, null, "ui-icon-blank", !t),
                    "radio" === this.type &&
                        this._getRadioGroup().each(function () {
                            var t = u(this).checkboxradio("instance");
                            t &&
                                t._removeClass(
                                    t.label,
                                    "ui-checkboxradio-checked",
                                    "ui-state-active"
                                );
                        });
            },
            _destroy: function () {
                this._unbindFormResetHandler(),
                    this.icon && (this.icon.remove(), this.iconSpace.remove());
            },
            _setOption: function (t, e) {
                if ("label" !== t || e) {
                    if ((this._super(t, e), "disabled" === t))
                        return (
                            this._toggleClass(
                                this.label,
                                null,
                                "ui-state-disabled",
                                e
                            ),
                            void (this.element[0].disabled = e)
                        );
                    this.refresh();
                }
            },
            _updateIcon: function (t) {
                var e = "ui-icon ui-icon-background ";
                this.options.icon
                    ? (this.icon ||
                          ((this.icon = u("<span>")),
                          (this.iconSpace = u("<span> </span>")),
                          this._addClass(
                              this.iconSpace,
                              "ui-checkboxradio-icon-space"
                          )),
                      "checkbox" === this.type
                          ? ((e += t
                                ? "ui-icon-check ui-state-checked"
                                : "ui-icon-blank"),
                            this._removeClass(
                                this.icon,
                                null,
                                t ? "ui-icon-blank" : "ui-icon-check"
                            ))
                          : (e += "ui-icon-blank"),
                      this._addClass(this.icon, "ui-checkboxradio-icon", e),
                      t ||
                          this._removeClass(
                              this.icon,
                              null,
                              "ui-icon-check ui-state-checked"
                          ),
                      this.icon.prependTo(this.label).after(this.iconSpace))
                    : void 0 !== this.icon &&
                      (this.icon.remove(),
                      this.iconSpace.remove(),
                      delete this.icon);
            },
            _updateLabel: function () {
                var t = this.label.contents().not(this.element[0]);
                this.icon && (t = t.not(this.icon[0])),
                    this.iconSpace && (t = t.not(this.iconSpace[0])),
                    t.remove(),
                    this.label.append(this.options.label);
            },
            refresh: function () {
                var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t),
                    this._toggleClass(
                        this.label,
                        "ui-checkboxradio-checked",
                        "ui-state-active",
                        t
                    ),
                    null !== this.options.label && this._updateLabel(),
                    e !== this.options.disabled &&
                        this._setOptions({ disabled: e });
            },
        },
    ]);
    var t;
    u.ui.checkboxradio;
    u.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: { "ui-button": "ui-corner-all" },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0,
        },
        _getCreateOptions: function () {
            var t,
                e = this._super() || {};
            return (
                (this.isInput = this.element.is("input")),
                null != (t = this.element[0].disabled) && (e.disabled = t),
                (this.originalLabel = this.isInput
                    ? this.element.val()
                    : this.element.html()),
                this.originalLabel && (e.label = this.originalLabel),
                e
            );
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon &&
                (this.options.showLabel = !0),
                null == this.options.disabled &&
                    (this.options.disabled = this.element[0].disabled || !1),
                (this.hasTitle = !!this.element.attr("title")),
                this.options.label &&
                    this.options.label !== this.originalLabel &&
                    (this.isInput
                        ? this.element.val(this.options.label)
                        : this.element.html(this.options.label)),
                this._addClass("ui-button", "ui-widget"),
                this._setOption("disabled", this.options.disabled),
                this._enhance(),
                this.element.is("a") &&
                    this._on({
                        keyup: function (t) {
                            t.keyCode === u.ui.keyCode.SPACE &&
                                (t.preventDefault(),
                                this.element[0].click
                                    ? this.element[0].click()
                                    : this.element.trigger("click"));
                        },
                    });
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"),
                this.options.icon &&
                    (this._updateIcon("icon", this.options.icon),
                    this._updateTooltip());
        },
        _updateTooltip: function () {
            (this.title = this.element.attr("title")),
                this.options.showLabel ||
                    this.title ||
                    this.element.attr("title", this.options.label);
        },
        _updateIcon: function (t, e) {
            var i = "iconPosition" !== t,
                s = i ? this.options.iconPosition : e,
                t = "top" === s || "bottom" === s;
            this.icon
                ? i && this._removeClass(this.icon, null, this.options.icon)
                : ((this.icon = u("<span>")),
                  this._addClass(this.icon, "ui-button-icon", "ui-icon"),
                  this.options.showLabel ||
                      this._addClass("ui-button-icon-only")),
                i && this._addClass(this.icon, null, e),
                this._attachIcon(s),
                t
                    ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
                      this.iconSpace && this.iconSpace.remove())
                    : (this.iconSpace ||
                          ((this.iconSpace = u("<span> </span>")),
                          this._addClass(
                              this.iconSpace,
                              "ui-button-icon-space"
                          )),
                      this._removeClass(this.icon, null, "ui-wiget-icon-block"),
                      this._attachIconSpace(s));
        },
        _destroy: function () {
            this.element.removeAttr("role"),
                this.icon && this.icon.remove(),
                this.iconSpace && this.iconSpace.remove(),
                this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
                this.iconSpace
            );
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
                this.icon
            );
        },
        _setOptions: function (t) {
            var e = (void 0 === t.showLabel ? this.options : t).showLabel,
                i = (void 0 === t.icon ? this.options : t).icon;
            e || i || (t.showLabel = !0), this._super(t);
        },
        _setOption: function (t, e) {
            "icon" === t &&
                (e
                    ? this._updateIcon(t, e)
                    : this.icon &&
                      (this.icon.remove(),
                      this.iconSpace && this.iconSpace.remove())),
                "iconPosition" === t && this._updateIcon(t, e),
                "showLabel" === t &&
                    (this._toggleClass("ui-button-icon-only", null, !e),
                    this._updateTooltip()),
                "label" === t &&
                    (this.isInput
                        ? this.element.val(e)
                        : (this.element.html(e),
                          this.icon &&
                              (this._attachIcon(this.options.iconPosition),
                              this._attachIconSpace(
                                  this.options.iconPosition
                              )))),
                this._super(t, e),
                "disabled" === t &&
                    (this._toggleClass(null, "ui-state-disabled", e),
                    (this.element[0].disabled = e) && this.element.blur());
        },
        refresh: function () {
            var t = this.element.is("input, button")
                ? this.element[0].disabled
                : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }),
                this._updateTooltip();
        },
    }),
        !1 !== u.uiBackCompat &&
            (u.widget("ui.button", u.ui.button, {
                options: {
                    text: !0,
                    icons: { primary: null, secondary: null },
                },
                _create: function () {
                    this.options.showLabel &&
                        !this.options.text &&
                        (this.options.showLabel = this.options.text),
                        !this.options.showLabel &&
                            this.options.text &&
                            (this.options.text = this.options.showLabel),
                        this.options.icon ||
                        (!this.options.icons.primary &&
                            !this.options.icons.secondary)
                            ? this.options.icon &&
                              (this.options.icons.primary = this.options.icon)
                            : this.options.icons.primary
                            ? (this.options.icon = this.options.icons.primary)
                            : ((this.options.icon =
                                  this.options.icons.secondary),
                              (this.options.iconPosition = "end")),
                        this._super();
                },
                _setOption: function (t, e) {
                    "text" !== t
                        ? ("showLabel" === t && (this.options.text = e),
                          "icon" === t && (this.options.icons.primary = e),
                          "icons" === t &&
                              (e.primary
                                  ? (this._super("icon", e.primary),
                                    this._super("iconPosition", "beginning"))
                                  : e.secondary &&
                                    (this._super("icon", e.secondary),
                                    this._super("iconPosition", "end"))),
                          this._superApply(arguments))
                        : this._super("showLabel", e);
                },
            }),
            (u.fn.button =
                ((t = u.fn.button),
                function () {
                    return !this.length ||
                        (this.length && "INPUT" !== this[0].tagName) ||
                        (this.length &&
                            "INPUT" === this[0].tagName &&
                            "checkbox" !== this.attr("type") &&
                            "radio" !== this.attr("type"))
                        ? t.apply(this, arguments)
                        : (u.ui.checkboxradio ||
                              u.error("Checkboxradio widget missing"),
                          0 === arguments.length
                              ? this.checkboxradio({ icon: !1 })
                              : this.checkboxradio.apply(this, arguments));
                })),
            (u.fn.buttonset = function () {
                return (
                    u.ui.controlgroup || u.error("Controlgroup widget missing"),
                    "option" === arguments[0] &&
                    "items" === arguments[1] &&
                    arguments[2]
                        ? this.controlgroup.apply(this, [
                              arguments[0],
                              "items.button",
                              arguments[2],
                          ])
                        : "option" === arguments[0] && "items" === arguments[1]
                        ? this.controlgroup.apply(this, [
                              arguments[0],
                              "items.button",
                          ])
                        : ("object" == typeof arguments[0] &&
                              arguments[0].items &&
                              (arguments[0].items = {
                                  button: arguments[0].items,
                              }),
                          this.controlgroup.apply(this, arguments))
                );
            }));
    u.ui.button,
        (u.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
    var a = !1;
    u(document).on("mouseup", function () {
        a = !1;
    });
    u.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0,
        },
        _mouseInit: function () {
            var e = this;
            this.element
                .on("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t);
                })
                .on("click." + this.widgetName, function (t) {
                    if (
                        !0 ===
                        u.data(t.target, e.widgetName + ".preventClickEvent")
                    )
                        return (
                            u.removeData(
                                t.target,
                                e.widgetName + ".preventClickEvent"
                            ),
                            t.stopImmediatePropagation(),
                            !1
                        );
                }),
                (this.started = !1);
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName),
                this._mouseMoveDelegate &&
                    this.document
                        .off(
                            "mousemove." + this.widgetName,
                            this._mouseMoveDelegate
                        )
                        .off(
                            "mouseup." + this.widgetName,
                            this._mouseUpDelegate
                        );
        },
        _mouseDown: function (t) {
            if (!a) {
                (this._mouseMoved = !1),
                    this._mouseStarted && this._mouseUp(t),
                    (this._mouseDownEvent = t);
                var e = this,
                    i = 1 === t.which,
                    s =
                        !(
                            "string" != typeof this.options.cancel ||
                            !t.target.nodeName
                        ) && u(t.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(t)
                    ? ((this.mouseDelayMet = !this.options.delay),
                      this.mouseDelayMet ||
                          (this._mouseDelayTimer = setTimeout(function () {
                              e.mouseDelayMet = !0;
                          }, this.options.delay)),
                      this._mouseDistanceMet(t) &&
                      this._mouseDelayMet(t) &&
                      ((this._mouseStarted = !1 !== this._mouseStart(t)),
                      !this._mouseStarted)
                          ? (t.preventDefault(), !0)
                          : (!0 ===
                                u.data(
                                    t.target,
                                    this.widgetName + ".preventClickEvent"
                                ) &&
                                u.removeData(
                                    t.target,
                                    this.widgetName + ".preventClickEvent"
                                ),
                            (this._mouseMoveDelegate = function (t) {
                                return e._mouseMove(t);
                            }),
                            (this._mouseUpDelegate = function (t) {
                                return e._mouseUp(t);
                            }),
                            this.document
                                .on(
                                    "mousemove." + this.widgetName,
                                    this._mouseMoveDelegate
                                )
                                .on(
                                    "mouseup." + this.widgetName,
                                    this._mouseUpDelegate
                                ),
                            t.preventDefault(),
                            (a = !0)))
                    : !0;
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (
                    u.ui.ie &&
                    (!document.documentMode || document.documentMode < 9) &&
                    !t.button
                )
                    return this._mouseUp(t);
                if (!t.which)
                    if (
                        t.originalEvent.altKey ||
                        t.originalEvent.ctrlKey ||
                        t.originalEvent.metaKey ||
                        t.originalEvent.shiftKey
                    )
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(t);
            }
            return (
                (t.which || t.button) && (this._mouseMoved = !0),
                this._mouseStarted
                    ? (this._mouseDrag(t), t.preventDefault())
                    : (this._mouseDistanceMet(t) &&
                          this._mouseDelayMet(t) &&
                          ((this._mouseStarted =
                              !1 !== this._mouseStart(this._mouseDownEvent, t)),
                          this._mouseStarted
                              ? this._mouseDrag(t)
                              : this._mouseUp(t)),
                      !this._mouseStarted)
            );
        },
        _mouseUp: function (t) {
            this.document
                .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .off("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted &&
                    ((this._mouseStarted = !1),
                    t.target === this._mouseDownEvent.target &&
                        u.data(
                            t.target,
                            this.widgetName + ".preventClickEvent",
                            !0
                        ),
                    this._mouseStop(t)),
                this._mouseDelayTimer &&
                    (clearTimeout(this._mouseDelayTimer),
                    delete this._mouseDelayTimer),
                (this.ignoreMissingWhich = !1),
                (a = !1),
                t.preventDefault();
        },
        _mouseDistanceMet: function (t) {
            return (
                Math.max(
                    Math.abs(this._mouseDownEvent.pageX - t.pageX),
                    Math.abs(this._mouseDownEvent.pageY - t.pageY)
                ) >= this.options.distance
            );
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0;
        },
    }),
        u.widget("ui.slider", u.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header",
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null,
            },
            numPages: 5,
            _create: function () {
                (this._keySliding = !1),
                    (this._mouseSliding = !1),
                    (this._animateOff = !0),
                    (this._handleIndex = null),
                    this._detectOrientation(),
                    this._mouseInit(),
                    this._calculateNewMax(),
                    this._addClass(
                        "ui-slider ui-slider-" + this.orientation,
                        "ui-widget ui-widget-content"
                    ),
                    this._refresh(),
                    (this._animateOff = !1);
            },
            _refresh: function () {
                this._createRange(),
                    this._createHandles(),
                    this._setupEvents(),
                    this._refreshValue();
            },
            _createHandles: function () {
                var t,
                    e = this.options,
                    i = this.element.find(".ui-slider-handle"),
                    s = [],
                    n = (e.values && e.values.length) || 1;
                for (
                    i.length > n && (i.slice(n).remove(), (i = i.slice(0, n))),
                        t = i.length;
                    t < n;
                    t++
                )
                    s.push("<span tabindex='0'></span>");
                (this.handles = i.add(u(s.join("")).appendTo(this.element))),
                    this._addClass(
                        this.handles,
                        "ui-slider-handle",
                        "ui-state-default"
                    ),
                    (this.handle = this.handles.eq(0)),
                    this.handles.each(function (t) {
                        u(this)
                            .data("ui-slider-handle-index", t)
                            .attr("tabIndex", 0);
                    });
            },
            _createRange: function () {
                var t = this.options;
                t.range
                    ? (!0 === t.range &&
                          (t.values
                              ? t.values.length && 2 !== t.values.length
                                  ? (t.values = [t.values[0], t.values[0]])
                                  : u.isArray(t.values) &&
                                    (t.values = t.values.slice(0))
                              : (t.values = [
                                    this._valueMin(),
                                    this._valueMin(),
                                ])),
                      this.range && this.range.length
                          ? (this._removeClass(
                                this.range,
                                "ui-slider-range-min ui-slider-range-max"
                            ),
                            this.range.css({ left: "", bottom: "" }))
                          : ((this.range = u("<div>").appendTo(this.element)),
                            this._addClass(this.range, "ui-slider-range")),
                      ("min" !== t.range && "max" !== t.range) ||
                          this._addClass(
                              this.range,
                              "ui-slider-range-" + t.range
                          ))
                    : (this.range && this.range.remove(), (this.range = null));
            },
            _setupEvents: function () {
                this._off(this.handles),
                    this._on(this.handles, this._handleEvents),
                    this._hoverable(this.handles),
                    this._focusable(this.handles);
            },
            _destroy: function () {
                this.handles.remove(),
                    this.range && this.range.remove(),
                    this._mouseDestroy();
            },
            _mouseCapture: function (t) {
                var i,
                    s,
                    n,
                    o,
                    e,
                    a,
                    l = this,
                    h = this.options;
                return (
                    !h.disabled &&
                    ((this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                    }),
                    (this.elementOffset = this.element.offset()),
                    (a = { x: t.pageX, y: t.pageY }),
                    (i = this._normValueFromMouse(a)),
                    (s = this._valueMax() - this._valueMin() + 1),
                    this.handles.each(function (t) {
                        var e = Math.abs(i - l.values(t));
                        (e < s ||
                            (s === e &&
                                (t === l._lastChangedValue ||
                                    l.values(t) === h.min))) &&
                            ((s = e), (n = u(this)), (o = t));
                    }),
                    !1 !== this._start(t, o) &&
                        ((this._mouseSliding = !0),
                        (this._handleIndex = o),
                        this._addClass(n, null, "ui-state-active"),
                        n.trigger("focus"),
                        (e = n.offset()),
                        (a = !u(t.target)
                            .parents()
                            .addBack()
                            .is(".ui-slider-handle")),
                        (this._clickOffset = a
                            ? { left: 0, top: 0 }
                            : {
                                  left: t.pageX - e.left - n.width() / 2,
                                  top:
                                      t.pageY -
                                      e.top -
                                      n.height() / 2 -
                                      (parseInt(n.css("borderTopWidth"), 10) ||
                                          0) -
                                      (parseInt(
                                          n.css("borderBottomWidth"),
                                          10
                                      ) || 0) +
                                      (parseInt(n.css("marginTop"), 10) || 0),
                              }),
                        this.handles.hasClass("ui-state-hover") ||
                            this._slide(t, o, i),
                        (this._animateOff = !0)))
                );
            },
            _mouseStart: function () {
                return !0;
            },
            _mouseDrag: function (t) {
                var e = { x: t.pageX, y: t.pageY },
                    e = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, e), !1;
            },
            _mouseStop: function (t) {
                return (
                    this._removeClass(this.handles, null, "ui-state-active"),
                    (this._mouseSliding = !1),
                    this._stop(t, this._handleIndex),
                    this._change(t, this._handleIndex),
                    (this._handleIndex = null),
                    (this._clickOffset = null),
                    (this._animateOff = !1)
                );
            },
            _detectOrientation: function () {
                this.orientation =
                    "vertical" === this.options.orientation
                        ? "vertical"
                        : "horizontal";
            },
            _normValueFromMouse: function (t) {
                var e,
                    t =
                        "horizontal" === this.orientation
                            ? ((e = this.elementSize.width),
                              t.x -
                                  this.elementOffset.left -
                                  (this._clickOffset
                                      ? this._clickOffset.left
                                      : 0))
                            : ((e = this.elementSize.height),
                              t.y -
                                  this.elementOffset.top -
                                  (this._clickOffset
                                      ? this._clickOffset.top
                                      : 0)),
                    t = t / e;
                return (
                    1 < t && (t = 1),
                    t < 0 && (t = 0),
                    "vertical" === this.orientation && (t = 1 - t),
                    (e = this._valueMax() - this._valueMin()),
                    (e = this._valueMin() + t * e),
                    this._trimAlignValue(e)
                );
            },
            _uiHash: function (t, e, i) {
                var s = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value(),
                };
                return (
                    this._hasMultipleValues() &&
                        ((s.value = void 0 !== e ? e : this.values(t)),
                        (s.values = i || this.values())),
                    s
                );
            },
            _hasMultipleValues: function () {
                return this.options.values && this.options.values.length;
            },
            _start: function (t, e) {
                return this._trigger("start", t, this._uiHash(e));
            },
            _slide: function (t, e, i) {
                var s,
                    n = this.value(),
                    o = this.values();
                this._hasMultipleValues() &&
                    ((s = this.values(e ? 0 : 1)),
                    (n = this.values(e)),
                    2 === this.options.values.length &&
                        !0 === this.options.range &&
                        (i = 0 === e ? Math.min(s, i) : Math.max(s, i)),
                    (o[e] = i)),
                    i !== n &&
                        !1 !==
                            this._trigger("slide", t, this._uiHash(e, i, o)) &&
                        (this._hasMultipleValues()
                            ? this.values(e, i)
                            : this.value(i));
            },
            _stop: function (t, e) {
                this._trigger("stop", t, this._uiHash(e));
            },
            _change: function (t, e) {
                this._keySliding ||
                    this._mouseSliding ||
                    ((this._lastChangedValue = e),
                    this._trigger("change", t, this._uiHash(e)));
            },
            value: function (t) {
                return arguments.length
                    ? ((this.options.value = this._trimAlignValue(t)),
                      this._refreshValue(),
                      void this._change(null, 0))
                    : this._value();
            },
            values: function (t, e) {
                var i, s, n;
                if (1 < arguments.length)
                    return (
                        (this.options.values[t] = this._trimAlignValue(e)),
                        this._refreshValue(),
                        void this._change(null, t)
                    );
                if (!arguments.length) return this._values();
                if (!u.isArray(t))
                    return this._hasMultipleValues()
                        ? this._values(t)
                        : this.value();
                for (
                    i = this.options.values, s = t, n = 0;
                    n < i.length;
                    n += 1
                )
                    (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
                this._refreshValue();
            },
            _setOption: function (t, e) {
                var i,
                    s = 0;
                switch (
                    ("range" === t &&
                        !0 === this.options.range &&
                        ("min" === e
                            ? ((this.options.value = this._values(0)),
                              (this.options.values = null))
                            : "max" === e &&
                              ((this.options.value = this._values(
                                  this.options.values.length - 1
                              )),
                              (this.options.values = null))),
                    u.isArray(this.options.values) &&
                        (s = this.options.values.length),
                    this._super(t, e),
                    t)
                ) {
                    case "orientation":
                        this._detectOrientation(),
                            this._removeClass(
                                "ui-slider-horizontal ui-slider-vertical"
                            )._addClass("ui-slider-" + this.orientation),
                            this._refreshValue(),
                            this.options.range && this._refreshRange(e),
                            this.handles.css(
                                "horizontal" === e ? "bottom" : "left",
                                ""
                            );
                        break;
                    case "value":
                        (this._animateOff = !0),
                            this._refreshValue(),
                            this._change(null, 0),
                            (this._animateOff = !1);
                        break;
                    case "values":
                        for (
                            this._animateOff = !0,
                                this._refreshValue(),
                                i = s - 1;
                            0 <= i;
                            i--
                        )
                            this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        (this._animateOff = !0),
                            this._calculateNewMax(),
                            this._refreshValue(),
                            (this._animateOff = !1);
                        break;
                    case "range":
                        (this._animateOff = !0),
                            this._refresh(),
                            (this._animateOff = !1);
                }
            },
            _setOptionDisabled: function (t) {
                this._super(t),
                    this._toggleClass(null, "ui-state-disabled", !!t);
            },
            _value: function () {
                var t = this.options.value;
                return (t = this._trimAlignValue(t));
            },
            _values: function (t) {
                var e, i, s;
                if (arguments.length)
                    return (
                        (e = this.options.values[t]), this._trimAlignValue(e)
                    );
                if (this._hasMultipleValues()) {
                    for (
                        i = this.options.values.slice(), s = 0;
                        s < i.length;
                        s += 1
                    )
                        i[s] = this._trimAlignValue(i[s]);
                    return i;
                }
                return [];
            },
            _trimAlignValue: function (t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = 0 < this.options.step ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    t = t - i;
                return (
                    2 * Math.abs(i) >= e && (t += 0 < i ? e : -e),
                    parseFloat(t.toFixed(5))
                );
            },
            _calculateNewMax: function () {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                (t = Math.round((t - e) / i) * i + e) > this.options.max &&
                    (t -= i),
                    (this.max = parseFloat(t.toFixed(this._precision())));
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return (
                    null !== this.options.min &&
                        (t = Math.max(t, this._precisionOf(this.options.min))),
                    t
                );
            },
            _precisionOf: function (t) {
                var e = t.toString(),
                    t = e.indexOf(".");
                return -1 === t ? 0 : e.length - t - 1;
            },
            _valueMin: function () {
                return this.options.min;
            },
            _valueMax: function () {
                return this.max;
            },
            _refreshRange: function (t) {
                "vertical" === t && this.range.css({ width: "", left: "" }),
                    "horizontal" === t &&
                        this.range.css({ height: "", bottom: "" });
            },
            _refreshValue: function () {
                var e,
                    i,
                    t,
                    s,
                    n,
                    o = this.options.range,
                    a = this.options,
                    l = this,
                    h = !this._animateOff && a.animate,
                    r = {};
                this._hasMultipleValues()
                    ? this.handles.each(function (t) {
                          (i =
                              ((l.values(t) - l._valueMin()) /
                                  (l._valueMax() - l._valueMin())) *
                              100),
                              (r[
                                  "horizontal" === l.orientation
                                      ? "left"
                                      : "bottom"
                              ] = i + "%"),
                              u(this)
                                  .stop(1, 1)
                                  [h ? "animate" : "css"](r, a.animate),
                              !0 === l.options.range &&
                                  ("horizontal" === l.orientation
                                      ? (0 === t &&
                                            l.range
                                                .stop(1, 1)
                                                [h ? "animate" : "css"](
                                                    { left: i + "%" },
                                                    a.animate
                                                ),
                                        1 === t &&
                                            l.range[h ? "animate" : "css"](
                                                { width: i - e + "%" },
                                                {
                                                    queue: !1,
                                                    duration: a.animate,
                                                }
                                            ))
                                      : (0 === t &&
                                            l.range
                                                .stop(1, 1)
                                                [h ? "animate" : "css"](
                                                    { bottom: i + "%" },
                                                    a.animate
                                                ),
                                        1 === t &&
                                            l.range[h ? "animate" : "css"](
                                                { height: i - e + "%" },
                                                {
                                                    queue: !1,
                                                    duration: a.animate,
                                                }
                                            ))),
                              (e = i);
                      })
                    : ((t = this.value()),
                      (s = this._valueMin()),
                      (n = this._valueMax()),
                      (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
                      (r[
                          "horizontal" === this.orientation ? "left" : "bottom"
                      ] = i + "%"),
                      this.handle
                          .stop(1, 1)
                          [h ? "animate" : "css"](r, a.animate),
                      "min" === o &&
                          "horizontal" === this.orientation &&
                          this.range
                              .stop(1, 1)
                              [h ? "animate" : "css"](
                                  { width: i + "%" },
                                  a.animate
                              ),
                      "max" === o &&
                          "horizontal" === this.orientation &&
                          this.range
                              .stop(1, 1)
                              [h ? "animate" : "css"](
                                  { width: 100 - i + "%" },
                                  a.animate
                              ),
                      "min" === o &&
                          "vertical" === this.orientation &&
                          this.range
                              .stop(1, 1)
                              [h ? "animate" : "css"](
                                  { height: i + "%" },
                                  a.animate
                              ),
                      "max" === o &&
                          "vertical" === this.orientation &&
                          this.range
                              .stop(1, 1)
                              [h ? "animate" : "css"](
                                  { height: 100 - i + "%" },
                                  a.animate
                              ));
            },
            _handleEvents: {
                keydown: function (t) {
                    var e,
                        i,
                        s,
                        n = u(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case u.ui.keyCode.HOME:
                        case u.ui.keyCode.END:
                        case u.ui.keyCode.PAGE_UP:
                        case u.ui.keyCode.PAGE_DOWN:
                        case u.ui.keyCode.UP:
                        case u.ui.keyCode.RIGHT:
                        case u.ui.keyCode.DOWN:
                        case u.ui.keyCode.LEFT:
                            if (
                                (t.preventDefault(),
                                !this._keySliding &&
                                    ((this._keySliding = !0),
                                    this._addClass(
                                        u(t.target),
                                        null,
                                        "ui-state-active"
                                    ),
                                    !1 === this._start(t, n)))
                            )
                                return;
                    }
                    switch (
                        ((s = this.options.step),
                        (e = i =
                            this._hasMultipleValues()
                                ? this.values(n)
                                : this.value()),
                        t.keyCode)
                    ) {
                        case u.ui.keyCode.HOME:
                            i = this._valueMin();
                            break;
                        case u.ui.keyCode.END:
                            i = this._valueMax();
                            break;
                        case u.ui.keyCode.PAGE_UP:
                            i = this._trimAlignValue(
                                e +
                                    (this._valueMax() - this._valueMin()) /
                                        this.numPages
                            );
                            break;
                        case u.ui.keyCode.PAGE_DOWN:
                            i = this._trimAlignValue(
                                e -
                                    (this._valueMax() - this._valueMin()) /
                                        this.numPages
                            );
                            break;
                        case u.ui.keyCode.UP:
                        case u.ui.keyCode.RIGHT:
                            if (e === this._valueMax()) return;
                            i = this._trimAlignValue(e + s);
                            break;
                        case u.ui.keyCode.DOWN:
                        case u.ui.keyCode.LEFT:
                            if (e === this._valueMin()) return;
                            i = this._trimAlignValue(e - s);
                    }
                    this._slide(t, n, i);
                },
                keyup: function (t) {
                    var e = u(t.target).data("ui-slider-handle-index");
                    this._keySliding &&
                        ((this._keySliding = !1),
                        this._stop(t, e),
                        this._change(t, e),
                        this._removeClass(
                            u(t.target),
                            null,
                            "ui-state-active"
                        ));
                },
            },
        });
});

/*
 Slick Slider
 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd
        ? define(["jquery"], i)
        : "undefined" != typeof exports
        ? (module.exports = i(require("jquery")))
        : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = "mozHidden"),
                      (n.visibilityChange = "mozvisibilitychange"))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = "webkitHidden"),
                      (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ("boolean" == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                            ? i(e).insertBefore(s.$slides.eq(t))
                            : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                        ? i(e).prependTo(s.$slideTrack)
                        : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              { left: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                        : s.$slideTrack.animate(
                              { top: e },
                              s.options.speed,
                              s.options.easing,
                              t
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                "translate(" + i + "px, 0px)"),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                "translate(0px," + i + "px)"),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                "translate3d(" + e + "px, 0px, 0px)")
                          : (o[s.animType] =
                                "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      " " +
                      e.options.speed +
                      "ms " +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    "slick-arrow"
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.$nextArrow
                          .removeClass("slick-hidden")
                          .removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass("slick-hidden")
                          .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                        t = i("<ul />").addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i("<li />").append(
                            o.options.customPaging.call(this, o, e)
                        )
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider)
                    .not("[src]")
                    .addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block",
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo
                    ? (n = a)
                    : "slider" === r.respondTo
                    ? (n = d)
                    : "min" === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s]
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                l.is("li") || (l = l.closest("li")),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off("click.slick", e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off(
                    "touchcancel.slick mouseleave.slick",
                    e.swipeHandler
                ),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr("style"),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass("slick-disabled slick-arrow slick-hidden")
                        .removeAttr("aria-hidden aria-disabled tabindex")
                        .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            "slick-slide slick-active slick-center slick-visible slick-current"
                        )
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr(
                                "style",
                                i(this).data("originalStyling")
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                  t.$slides
                      .eq(i)
                      .animate(
                          { opacity: 1 },
                          t.options.speed,
                          t.options.easing,
                          e
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          { opacity: 0, zIndex: e.options.zIndex - 2 },
                          e.options.speed,
                          e.options.easing
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children(".slick-slide").eq(i)
                            : n.$slideTrack
                                  .children(".slick-slide")
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children(".slick-slide").eq(i)
                                : n.$slideTrack
                                      .children(".slick-slide")
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr("data-slick-index") - o.currentSlide
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide(
                    { data: { message: "index", index: parseInt(i) } },
                    e
                );
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find(".slick-cloned"))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + e.instanceUid + t,
                                tabindex: -1,
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        "aria-describedby":
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                    });
                        }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({
                                        role: "tab",
                                        id:
                                            "slick-slide-control" +
                                            e.instanceUid +
                                            s,
                                        "aria-controls":
                                            "slick-slide" + e.instanceUid + n,
                                        "aria-label": s + 1 + " of " + t,
                                        "aria-selected": null,
                                        tabindex: "-1",
                                    });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                    i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i("li", e.$dots).on(
                    "click.slick",
                    { message: "index" },
                    e.changeSlide
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i("li", e.$dots)
                        .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                        .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick",
                    { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick",
                    { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick",
                    { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on(
                    "load.slick.slick-" + e.instanceUid,
                    e.setPosition
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "next" : "previous",
                          },
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? "previous" : "next",
                          },
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s =
                            i(this).attr("data-sizes") ||
                            n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e
                                    .attr("src", t)
                                    .animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr(
                                            "data-lazy data-srcset data-sizes"
                                        ).removeClass("slick-loading");
                                    }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1)
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find(".slick-slide"),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(0, n.options.slidesToShow)
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find(".slick-cloned")
                              .slice(-1 * n.options.slidesToShow)
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr("tabindex", 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t
                              .attr("src", o)
                              .removeAttr("data-lazy data-srcset data-sizes")
                              .removeClass("slick-loading"),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                            l.$slider.trigger("lazyLoadError", [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e ||
                    s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        "boolean" == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                            ? --i
                            : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                "translate(" + e + ", " + t + ")"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                "translate3d(" + e + ", " + t + ", 0px)"),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({
                          padding: i.options.centerPadding + " 0px",
                      })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children(".slick-slide").length
                          )
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: "relative",
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          })
                        : i(s).css({
                              position: "relative",
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = "multiple"))
                        : "string" === i.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          "responsive" === arguments[0] &&
                          "array" === i.type(arguments[1])
                              ? (n = "responsive")
                              : void 0 !== arguments[1] && (n = "single")),
                    "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint ===
                                    s[t].breakpoint &&
                                    r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp
                    ? i.$slider.addClass("slick-vertical")
                    : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ("number" == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                n.$slides.eq(i).addClass("slick-current"),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass("slick-center")
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide")
                    ? i(e.target)
                    : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [
                            a,
                            a.currentSlide,
                            s,
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick("getSlick"))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount()
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount()
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf("mouse"))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2
                            )
                        )
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2
                            )
                        )
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      "left" === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        "slick-slide slick-active slick-visible slick-current"
                    )
                    .attr("aria-hidden", "true")
                    .css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$nextArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass("slick-disabled")
                              .attr("aria-disabled", "true"),
                          i.$prevArrow
                              .removeClass("slick-disabled")
                              .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});

/**
 * sticky-sidebar - A JavaScript plugin for making smart and high performance.
 * @version v3.3.1
 * @link https://github.com/abouolia/sticky-sidebar
 * @author Ahmed Bouhuolia
 * @license The MIT License (MIT)
 **/
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : (t.StickySidebar = e());
})(this, function () {
    "use strict";
    "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self && self;
    function t(t) {
        return t &&
            t.__esModule &&
            Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
    }
    function e(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports;
    }
    var i = e(function (t, e) {
        (function (t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l,
                n,
                e = (function () {
                    function n(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                "value" in n && (n.writable = !0),
                                Object.defineProperty(t, n.key, n);
                        }
                    }
                    return function (t, e, i) {
                        return e && n(t.prototype, e), i && n(t, i), t;
                    };
                })(),
                i =
                    ((l = ".stickySidebar"),
                    (n = {
                        topSpacing: 0,
                        bottomSpacing: 0,
                        containerSelector: !1,
                        innerWrapperSelector: ".inner-wrapper-sticky",
                        stickyClass: "is-affixed",
                        resizeSensor: !0,
                        minWidth: !1,
                    }),
                    (function () {
                        function c(t) {
                            var e = this,
                                i =
                                    1 < arguments.length &&
                                    void 0 !== arguments[1]
                                        ? arguments[1]
                                        : {};
                            if (
                                ((function (t, e) {
                                    if (!(t instanceof e))
                                        throw new TypeError(
                                            "Cannot call a class as a function"
                                        );
                                })(this, c),
                                (this.options = c.extend(n, i)),
                                (this.sidebar =
                                    "string" == typeof t
                                        ? document.querySelector(t)
                                        : t),
                                void 0 === this.sidebar)
                            )
                                throw new Error(
                                    "There is no specific sidebar element."
                                );
                            (this.sidebarInner = !1),
                                (this.container = this.sidebar.parentElement),
                                (this.affixedType = "STATIC"),
                                (this.direction = "down"),
                                (this.support = {
                                    transform: !1,
                                    transform3d: !1,
                                }),
                                (this._initialized = !1),
                                (this._reStyle = !1),
                                (this._breakpoint = !1),
                                (this.dimensions = {
                                    translateY: 0,
                                    maxTranslateY: 0,
                                    topSpacing: 0,
                                    lastTopSpacing: 0,
                                    bottomSpacing: 0,
                                    lastBottomSpacing: 0,
                                    sidebarHeight: 0,
                                    sidebarWidth: 0,
                                    containerTop: 0,
                                    containerHeight: 0,
                                    viewportHeight: 0,
                                    viewportTop: 0,
                                    lastViewportTop: 0,
                                }),
                                ["handleEvent"].forEach(function (t) {
                                    e[t] = e[t].bind(e);
                                }),
                                this.initialize();
                        }
                        return (
                            e(
                                c,
                                [
                                    {
                                        key: "initialize",
                                        value: function () {
                                            var i = this;
                                            if (
                                                (this._setSupportFeatures(),
                                                this.options
                                                    .innerWrapperSelector &&
                                                    ((this.sidebarInner =
                                                        this.sidebar.querySelector(
                                                            this.options
                                                                .innerWrapperSelector
                                                        )),
                                                    null ===
                                                        this.sidebarInner &&
                                                        (this.sidebarInner =
                                                            !1)),
                                                !this.sidebarInner)
                                            ) {
                                                var t =
                                                    document.createElement(
                                                        "div"
                                                    );
                                                for (
                                                    t.setAttribute(
                                                        "class",
                                                        "inner-wrapper-sticky"
                                                    ),
                                                        this.sidebar.appendChild(
                                                            t
                                                        );
                                                    this.sidebar.firstChild !=
                                                    t;

                                                )
                                                    t.appendChild(
                                                        this.sidebar.firstChild
                                                    );
                                                this.sidebarInner =
                                                    this.sidebar.querySelector(
                                                        ".inner-wrapper-sticky"
                                                    );
                                            }
                                            if (
                                                this.options.containerSelector
                                            ) {
                                                var e =
                                                    document.querySelectorAll(
                                                        this.options
                                                            .containerSelector
                                                    );
                                                if (
                                                    ((e =
                                                        Array.prototype.slice.call(
                                                            e
                                                        )).forEach(function (
                                                        t,
                                                        e
                                                    ) {
                                                        t.contains(i.sidebar) &&
                                                            (i.container = t);
                                                    }),
                                                    !e.length)
                                                )
                                                    throw new Error(
                                                        "The container does not contains on the sidebar."
                                                    );
                                            }
                                            "function" !=
                                                typeof this.options
                                                    .topSpacing &&
                                                (this.options.topSpacing =
                                                    parseInt(
                                                        this.options.topSpacing
                                                    ) || 0),
                                                "function" !=
                                                    typeof this.options
                                                        .bottomSpacing &&
                                                    (this.options.bottomSpacing =
                                                        parseInt(
                                                            this.options
                                                                .bottomSpacing
                                                        ) || 0),
                                                this._widthBreakpoint(),
                                                this.calcDimensions(),
                                                this.stickyPosition(),
                                                this.bindEvents(),
                                                (this._initialized = !0);
                                        },
                                    },
                                    {
                                        key: "bindEvents",
                                        value: function () {
                                            window.addEventListener(
                                                "resize",
                                                this,
                                                { passive: !0, capture: !1 }
                                            ),
                                                window.addEventListener(
                                                    "scroll",
                                                    this,
                                                    { passive: !0, capture: !1 }
                                                ),
                                                this.sidebar.addEventListener(
                                                    "update" + l,
                                                    this
                                                ),
                                                this.options.resizeSensor &&
                                                    "undefined" !=
                                                        typeof ResizeSensor &&
                                                    (new ResizeSensor(
                                                        this.sidebarInner,
                                                        this.handleEvent
                                                    ),
                                                    new ResizeSensor(
                                                        this.container,
                                                        this.handleEvent
                                                    ));
                                        },
                                    },
                                    {
                                        key: "handleEvent",
                                        value: function (t) {
                                            this.updateSticky(t);
                                        },
                                    },
                                    {
                                        key: "calcDimensions",
                                        value: function () {
                                            if (!this._breakpoint) {
                                                var t = this.dimensions;
                                                (t.containerTop =
                                                    c.offsetRelative(
                                                        this.container
                                                    ).top),
                                                    (t.containerHeight =
                                                        this.container.clientHeight),
                                                    (t.containerBottom =
                                                        t.containerTop +
                                                        t.containerHeight),
                                                    (t.sidebarHeight =
                                                        this.sidebarInner.offsetHeight),
                                                    (t.sidebarWidth =
                                                        this.sidebarInner.offsetWidth),
                                                    (t.viewportHeight =
                                                        window.innerHeight),
                                                    (t.maxTranslateY =
                                                        t.containerHeight -
                                                        t.sidebarHeight),
                                                    this._calcDimensionsWithScroll();
                                            }
                                        },
                                    },
                                    {
                                        key: "_calcDimensionsWithScroll",
                                        value: function () {
                                            var t = this.dimensions;
                                            (t.sidebarLeft = c.offsetRelative(
                                                this.sidebar
                                            ).left),
                                                (t.viewportTop =
                                                    document.documentElement
                                                        .scrollTop ||
                                                    document.body.scrollTop),
                                                (t.viewportBottom =
                                                    t.viewportTop +
                                                    t.viewportHeight),
                                                (t.viewportLeft =
                                                    document.documentElement
                                                        .scrollLeft ||
                                                    document.body.scrollLeft),
                                                (t.topSpacing =
                                                    this.options.topSpacing),
                                                (t.bottomSpacing =
                                                    this.options.bottomSpacing),
                                                "function" ==
                                                    typeof t.topSpacing &&
                                                    (t.topSpacing =
                                                        parseInt(
                                                            t.topSpacing(
                                                                this.sidebar
                                                            )
                                                        ) || 0),
                                                "function" ==
                                                    typeof t.bottomSpacing &&
                                                    (t.bottomSpacing =
                                                        parseInt(
                                                            t.bottomSpacing(
                                                                this.sidebar
                                                            )
                                                        ) || 0),
                                                "VIEWPORT-TOP" ===
                                                this.affixedType
                                                    ? t.topSpacing <
                                                          t.lastTopSpacing &&
                                                      ((t.translateY +=
                                                          t.lastTopSpacing -
                                                          t.topSpacing),
                                                      (this._reStyle = !0))
                                                    : "VIEWPORT-BOTTOM" ===
                                                          this.affixedType &&
                                                      t.bottomSpacing <
                                                          t.lastBottomSpacing &&
                                                      ((t.translateY +=
                                                          t.lastBottomSpacing -
                                                          t.bottomSpacing),
                                                      (this._reStyle = !0)),
                                                (t.lastTopSpacing =
                                                    t.topSpacing),
                                                (t.lastBottomSpacing =
                                                    t.bottomSpacing);
                                        },
                                    },
                                    {
                                        key: "isSidebarFitsViewport",
                                        value: function () {
                                            var t = this.dimensions,
                                                e =
                                                    "down" ===
                                                    this.scrollDirection
                                                        ? t.lastBottomSpacing
                                                        : t.lastTopSpacing;
                                            return (
                                                this.dimensions.sidebarHeight +
                                                    e <
                                                this.dimensions.viewportHeight
                                            );
                                        },
                                    },
                                    {
                                        key: "observeScrollDir",
                                        value: function () {
                                            var t = this.dimensions;
                                            if (
                                                t.lastViewportTop !==
                                                t.viewportTop
                                            ) {
                                                var e =
                                                    "down" === this.direction
                                                        ? Math.min
                                                        : Math.max;
                                                t.viewportTop ===
                                                    e(
                                                        t.viewportTop,
                                                        t.lastViewportTop
                                                    ) &&
                                                    (this.direction =
                                                        "down" ===
                                                        this.direction
                                                            ? "up"
                                                            : "down");
                                            }
                                        },
                                    },
                                    {
                                        key: "getAffixType",
                                        value: function () {
                                            this._calcDimensionsWithScroll();
                                            var t = this.dimensions,
                                                e =
                                                    t.viewportTop +
                                                    t.topSpacing,
                                                i = this.affixedType;
                                            return (
                                                e <= t.containerTop ||
                                                t.containerHeight <=
                                                    t.sidebarHeight
                                                    ? ((t.translateY = 0),
                                                      (i = "STATIC"))
                                                    : (i =
                                                          "up" ===
                                                          this.direction
                                                              ? this._getAffixTypeScrollingUp()
                                                              : this._getAffixTypeScrollingDown()),
                                                (t.translateY = Math.max(
                                                    0,
                                                    t.translateY
                                                )),
                                                (t.translateY = Math.min(
                                                    t.containerHeight,
                                                    t.translateY
                                                )),
                                                (t.translateY = Math.round(
                                                    t.translateY
                                                )),
                                                (t.lastViewportTop =
                                                    t.viewportTop),
                                                i
                                            );
                                        },
                                    },
                                    {
                                        key: "_getAffixTypeScrollingDown",
                                        value: function () {
                                            var t = this.dimensions,
                                                e =
                                                    t.sidebarHeight +
                                                    t.containerTop,
                                                i =
                                                    t.viewportTop +
                                                    t.topSpacing,
                                                n =
                                                    t.viewportBottom -
                                                    t.bottomSpacing,
                                                o = this.affixedType;
                                            return (
                                                this.isSidebarFitsViewport()
                                                    ? t.sidebarHeight + i >=
                                                      t.containerBottom
                                                        ? ((t.translateY =
                                                              t.containerBottom -
                                                              e),
                                                          (o =
                                                              "CONTAINER-BOTTOM"))
                                                        : i >= t.containerTop &&
                                                          ((t.translateY =
                                                              i -
                                                              t.containerTop),
                                                          (o = "VIEWPORT-TOP"))
                                                    : t.containerBottom <= n
                                                    ? ((t.translateY =
                                                          t.containerBottom -
                                                          e),
                                                      (o = "CONTAINER-BOTTOM"))
                                                    : e + t.translateY <= n
                                                    ? ((t.translateY = n - e),
                                                      (o = "VIEWPORT-BOTTOM"))
                                                    : t.containerTop +
                                                          t.translateY <=
                                                          i &&
                                                      0 !== t.translateY &&
                                                      t.maxTranslateY !==
                                                          t.translateY &&
                                                      (o = "VIEWPORT-UNBOTTOM"),
                                                o
                                            );
                                        },
                                    },
                                    {
                                        key: "_getAffixTypeScrollingUp",
                                        value: function () {
                                            var t = this.dimensions,
                                                e =
                                                    t.sidebarHeight +
                                                    t.containerTop,
                                                i =
                                                    t.viewportTop +
                                                    t.topSpacing,
                                                n =
                                                    t.viewportBottom -
                                                    t.bottomSpacing,
                                                o = this.affixedType;
                                            return (
                                                i <=
                                                t.translateY + t.containerTop
                                                    ? ((t.translateY =
                                                          i - t.containerTop),
                                                      (o = "VIEWPORT-TOP"))
                                                    : t.containerBottom <= n
                                                    ? ((t.translateY =
                                                          t.containerBottom -
                                                          e),
                                                      (o = "CONTAINER-BOTTOM"))
                                                    : this.isSidebarFitsViewport() ||
                                                      (t.containerTop <= i &&
                                                          0 !== t.translateY &&
                                                          t.maxTranslateY !==
                                                              t.translateY &&
                                                          (o =
                                                              "VIEWPORT-UNBOTTOM")),
                                                o
                                            );
                                        },
                                    },
                                    {
                                        key: "_getStyle",
                                        value: function (t) {
                                            if (void 0 !== t) {
                                                var e = {
                                                        inner: {},
                                                        outer: {},
                                                    },
                                                    i = this.dimensions;
                                                switch (t) {
                                                    case "VIEWPORT-TOP":
                                                        e.inner = {
                                                            position: "fixed",
                                                            top: i.topSpacing,
                                                            left:
                                                                i.sidebarLeft -
                                                                i.viewportLeft,
                                                            width: i.sidebarWidth,
                                                        };
                                                        break;
                                                    case "VIEWPORT-BOTTOM":
                                                        e.inner = {
                                                            position: "fixed",
                                                            top: "auto",
                                                            left: i.sidebarLeft,
                                                            bottom: i.bottomSpacing,
                                                            width: i.sidebarWidth,
                                                        };
                                                        break;
                                                    case "CONTAINER-BOTTOM":
                                                    case "VIEWPORT-UNBOTTOM":
                                                        var n =
                                                            this._getTranslate(
                                                                0,
                                                                i.translateY +
                                                                    "px"
                                                            );
                                                        e.inner = n
                                                            ? { transform: n }
                                                            : {
                                                                  position:
                                                                      "absolute",
                                                                  top: i.translateY,
                                                                  width: i.sidebarWidth,
                                                              };
                                                }
                                                switch (t) {
                                                    case "VIEWPORT-TOP":
                                                    case "VIEWPORT-BOTTOM":
                                                    case "VIEWPORT-UNBOTTOM":
                                                    case "CONTAINER-BOTTOM":
                                                        e.outer = {
                                                            height: i.sidebarHeight,
                                                            position:
                                                                "relative",
                                                        };
                                                }
                                                return (
                                                    (e.outer = c.extend(
                                                        {
                                                            height: "",
                                                            position: "",
                                                        },
                                                        e.outer
                                                    )),
                                                    (e.inner = c.extend(
                                                        {
                                                            position:
                                                                "relative",
                                                            top: "",
                                                            left: "",
                                                            bottom: "",
                                                            width: "",
                                                            transform: "",
                                                        },
                                                        e.inner
                                                    )),
                                                    e
                                                );
                                            }
                                        },
                                    },
                                    {
                                        key: "stickyPosition",
                                        value: function (t) {
                                            if (!this._breakpoint) {
                                                (t = this._reStyle || t || !1),
                                                    this.options.topSpacing,
                                                    this.options.bottomSpacing;
                                                var e = this.getAffixType(),
                                                    i = this._getStyle(e);
                                                if (
                                                    (this.affixedType != e ||
                                                        t) &&
                                                    e
                                                ) {
                                                    var n =
                                                        "affix." +
                                                        e
                                                            .toLowerCase()
                                                            .replace(
                                                                "viewport-",
                                                                ""
                                                            ) +
                                                        l;
                                                    for (var o in (c.eventTrigger(
                                                        this.sidebar,
                                                        n
                                                    ),
                                                    "STATIC" === e
                                                        ? c.removeClass(
                                                              this.sidebar,
                                                              this.options
                                                                  .stickyClass
                                                          )
                                                        : c.addClass(
                                                              this.sidebar,
                                                              this.options
                                                                  .stickyClass
                                                          ),
                                                    i.outer)) {
                                                        var s =
                                                            "number" ==
                                                            typeof i.outer[o]
                                                                ? "px"
                                                                : "";
                                                        this.sidebar.style[o] =
                                                            i.outer[o] + s;
                                                    }
                                                    for (var r in i.inner) {
                                                        var a =
                                                            "number" ==
                                                            typeof i.inner[r]
                                                                ? "px"
                                                                : "";
                                                        this.sidebarInner.style[
                                                            r
                                                        ] = i.inner[r] + a;
                                                    }
                                                    var p =
                                                        "affixed." +
                                                        e
                                                            .toLowerCase()
                                                            .replace(
                                                                "viewport-",
                                                                ""
                                                            ) +
                                                        l;
                                                    c.eventTrigger(
                                                        this.sidebar,
                                                        p
                                                    );
                                                } else
                                                    this._initialized &&
                                                        (this.sidebarInner.style.left =
                                                            i.inner.left);
                                                this.affixedType = e;
                                            }
                                        },
                                    },
                                    {
                                        key: "_widthBreakpoint",
                                        value: function () {
                                            window.innerWidth <=
                                            this.options.minWidth
                                                ? ((this._breakpoint = !0),
                                                  (this.affixedType = "STATIC"),
                                                  this.sidebar.removeAttribute(
                                                      "style"
                                                  ),
                                                  c.removeClass(
                                                      this.sidebar,
                                                      this.options.stickyClass
                                                  ),
                                                  this.sidebarInner.removeAttribute(
                                                      "style"
                                                  ))
                                                : (this._breakpoint = !1);
                                        },
                                    },
                                    {
                                        key: "updateSticky",
                                        value: function () {
                                            var t,
                                                e = this,
                                                i =
                                                    0 < arguments.length &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : {};
                                            this._running ||
                                                ((this._running = !0),
                                                (t = i.type),
                                                requestAnimationFrame(
                                                    function () {
                                                        switch (t) {
                                                            case "scroll":
                                                                e._calcDimensionsWithScroll(),
                                                                    e.observeScrollDir(),
                                                                    e.stickyPosition();
                                                                break;
                                                            case "resize":
                                                            default:
                                                                e._widthBreakpoint(),
                                                                    e.calcDimensions(),
                                                                    e.stickyPosition(
                                                                        !0
                                                                    );
                                                        }
                                                        e._running = !1;
                                                    }
                                                ));
                                        },
                                    },
                                    {
                                        key: "_setSupportFeatures",
                                        value: function () {
                                            var t = this.support;
                                            (t.transform =
                                                c.supportTransform()),
                                                (t.transform3d =
                                                    c.supportTransform(!0));
                                        },
                                    },
                                    {
                                        key: "_getTranslate",
                                        value: function () {
                                            var t =
                                                    0 < arguments.length &&
                                                    void 0 !== arguments[0]
                                                        ? arguments[0]
                                                        : 0,
                                                e =
                                                    1 < arguments.length &&
                                                    void 0 !== arguments[1]
                                                        ? arguments[1]
                                                        : 0,
                                                i =
                                                    2 < arguments.length &&
                                                    void 0 !== arguments[2]
                                                        ? arguments[2]
                                                        : 0;
                                            return this.support.transform3d
                                                ? "translate3d(" +
                                                      t +
                                                      ", " +
                                                      e +
                                                      ", " +
                                                      i +
                                                      ")"
                                                : !!this.support.translate &&
                                                      "translate(" +
                                                          t +
                                                          ", " +
                                                          e +
                                                          ")";
                                        },
                                    },
                                    {
                                        key: "destroy",
                                        value: function () {
                                            window.removeEventListener(
                                                "resize",
                                                this,
                                                { capture: !1 }
                                            ),
                                                window.removeEventListener(
                                                    "scroll",
                                                    this,
                                                    { capture: !1 }
                                                ),
                                                this.sidebar.classList.remove(
                                                    this.options.stickyClass
                                                ),
                                                (this.sidebar.style.minHeight =
                                                    ""),
                                                this.sidebar.removeEventListener(
                                                    "update" + l,
                                                    this
                                                );
                                            var t = { inner: {}, outer: {} };
                                            for (var e in ((t.inner = {
                                                position: "",
                                                top: "",
                                                left: "",
                                                bottom: "",
                                                width: "",
                                                transform: "",
                                            }),
                                            (t.outer = {
                                                height: "",
                                                position: "",
                                            }),
                                            t.outer))
                                                this.sidebar.style[e] =
                                                    t.outer[e];
                                            for (var i in t.inner)
                                                this.sidebarInner.style[i] =
                                                    t.inner[i];
                                            this.options.resizeSensor &&
                                                "undefined" !=
                                                    typeof ResizeSensor &&
                                                (ResizeSensor.detach(
                                                    this.sidebarInner,
                                                    this.handleEvent
                                                ),
                                                ResizeSensor.detach(
                                                    this.container,
                                                    this.handleEvent
                                                ));
                                        },
                                    },
                                ],
                                [
                                    {
                                        key: "supportTransform",
                                        value: function (t) {
                                            var i = !1,
                                                e = t
                                                    ? "perspective"
                                                    : "transform",
                                                n =
                                                    e.charAt(0).toUpperCase() +
                                                    e.slice(1),
                                                o =
                                                    document.createElement(
                                                        "support"
                                                    ).style;
                                            return (
                                                (
                                                    e +
                                                    " " +
                                                    [
                                                        "Webkit",
                                                        "Moz",
                                                        "O",
                                                        "ms",
                                                    ].join(n + " ") +
                                                    n
                                                )
                                                    .split(" ")
                                                    .forEach(function (t, e) {
                                                        if (void 0 !== o[t])
                                                            return (i = t), !1;
                                                    }),
                                                i
                                            );
                                        },
                                    },
                                    {
                                        key: "eventTrigger",
                                        value: function (t, e, i) {
                                            try {
                                                var n = new CustomEvent(e, {
                                                    detail: i,
                                                });
                                            } catch (t) {
                                                (n =
                                                    document.createEvent(
                                                        "CustomEvent"
                                                    )).initCustomEvent(
                                                    e,
                                                    !0,
                                                    !0,
                                                    i
                                                );
                                            }
                                            t.dispatchEvent(n);
                                        },
                                    },
                                    {
                                        key: "extend",
                                        value: function (t, e) {
                                            var i = {};
                                            for (var n in t)
                                                void 0 !== e[n]
                                                    ? (i[n] = e[n])
                                                    : (i[n] = t[n]);
                                            return i;
                                        },
                                    },
                                    {
                                        key: "offsetRelative",
                                        value: function (t) {
                                            var e = { left: 0, top: 0 };
                                            do {
                                                var i = t.offsetTop,
                                                    n = t.offsetLeft;
                                                isNaN(i) || (e.top += i),
                                                    isNaN(n) || (e.left += n),
                                                    (t =
                                                        "BODY" === t.tagName
                                                            ? t.parentElement
                                                            : t.offsetParent);
                                            } while (t);
                                            return e;
                                        },
                                    },
                                    {
                                        key: "addClass",
                                        value: function (t, e) {
                                            c.hasClass(t, e) ||
                                                (t.classList
                                                    ? t.classList.add(e)
                                                    : (t.className += " " + e));
                                        },
                                    },
                                    {
                                        key: "removeClass",
                                        value: function (t, e) {
                                            c.hasClass(t, e) &&
                                                (t.classList
                                                    ? t.classList.remove(e)
                                                    : (t.className =
                                                          t.className.replace(
                                                              new RegExp(
                                                                  "(^|\\b)" +
                                                                      e
                                                                          .split(
                                                                              " "
                                                                          )
                                                                          .join(
                                                                              "|"
                                                                          ) +
                                                                      "(\\b|$)",
                                                                  "gi"
                                                              ),
                                                              " "
                                                          )));
                                        },
                                    },
                                    {
                                        key: "hasClass",
                                        value: function (t, e) {
                                            return t.classList
                                                ? t.classList.contains(e)
                                                : new RegExp(
                                                      "(^| )" + e + "( |$)",
                                                      "gi"
                                                  ).test(t.className);
                                        },
                                    },
                                    {
                                        key: "defaults",
                                        get: function () {
                                            return n;
                                        },
                                    },
                                ]
                            ),
                            c
                        );
                    })());
            (t.default = i), (window.StickySidebar = i);
        })(e);
    });
    return (
        t(i),
        t(
            e(function (t, e) {
                (function (t) {
                    var e,
                        s = (e = t) && e.__esModule ? e : { default: e };
                    !(function () {
                        if ("undefined" != typeof window) {
                            var n = window.$ || window.jQuery || window.Zepto,
                                o = "stickySidebar";
                            if (n) {
                                (n.fn.stickySidebar = function (i) {
                                    return this.each(function () {
                                        var t = n(this),
                                            e = n(this).data(o);
                                        if (
                                            (e ||
                                                ((e = new s.default(
                                                    this,
                                                    "object" == typeof i && i
                                                )),
                                                t.data(o, e)),
                                            "string" == typeof i)
                                        ) {
                                            if (
                                                void 0 === e[i] &&
                                                -1 ===
                                                    [
                                                        "destroy",
                                                        "updateSticky",
                                                    ].indexOf(i)
                                            )
                                                throw new Error(
                                                    'No method named "' +
                                                        i +
                                                        '"'
                                                );
                                            e[i]();
                                        }
                                    });
                                }),
                                    (n.fn.stickySidebar.Constructor =
                                        s.default);
                                var t = n.fn.stickySidebar;
                                n.fn.stickySidebar.noConflict = function () {
                                    return (n.fn.stickySidebar = t), this;
                                };
                            }
                        }
                    })();
                })(i);
            })
        )
    );
});

// Generated by CoffeeScript 1.9.3 - instafeed
(function () {
    var e;
    (e = (function () {
        function e(e, t) {
            var n, r;
            this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "none",
                links: !0,
                mock: !1,
                useHttp: !1,
            };
            if (typeof e == "object")
                for (n in e) (r = e[n]), (this.options[n] = r);
            (this.context = t != null ? t : this),
                (this.unique = this._genKey());
        }
        return (
            (e.prototype.hasNext = function () {
                return (
                    typeof this.context.nextUrl == "string" &&
                    this.context.nextUrl.length > 0
                );
            }),
            (e.prototype.next = function () {
                return this.hasNext() ? this.run(this.context.nextUrl) : !1;
            }),
            (e.prototype.run = function (t) {
                var n, r, i;
                if (
                    typeof this.options.clientId != "string" &&
                    typeof this.options.accessToken != "string"
                )
                    throw new Error("Missing clientId or accessToken.");
                if (
                    typeof this.options.accessToken != "string" &&
                    typeof this.options.clientId != "string"
                )
                    throw new Error("Missing clientId or accessToken.");
                return (
                    this.options.before != null &&
                        typeof this.options.before == "function" &&
                        this.options.before.call(this),
                    typeof document != "undefined" &&
                        document !== null &&
                        ((i = document.createElement("script")),
                        (i.id = "instafeed-fetcher"),
                        (i.src = t || this._buildUrl()),
                        (n = document.getElementsByTagName("head")),
                        n[0].appendChild(i),
                        (r = "instafeedCache" + this.unique),
                        (window[r] = new e(this.options, this)),
                        (window[r].unique = this.unique)),
                    !0
                );
            }),
            (e.prototype.parse = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l,
                    c,
                    h,
                    p,
                    d,
                    v,
                    m,
                    g,
                    y,
                    b,
                    w,
                    E,
                    S,
                    x,
                    T,
                    N,
                    C,
                    k,
                    L,
                    A,
                    O,
                    M,
                    _,
                    D;
                if (typeof e != "object") {
                    if (
                        this.options.error != null &&
                        typeof this.options.error == "function"
                    )
                        return (
                            this.options.error.call(this, "Invalid JSON data"),
                            !1
                        );
                    throw new Error("Invalid JSON response");
                }
                if (e.meta.code !== 200) {
                    if (
                        this.options.error != null &&
                        typeof this.options.error == "function"
                    )
                        return (
                            this.options.error.call(this, e.meta.error_message),
                            !1
                        );
                    throw new Error(
                        "Error from Instagram: " + e.meta.error_message
                    );
                }
                if (e.data.length === 0) {
                    if (
                        this.options.error != null &&
                        typeof this.options.error == "function"
                    )
                        return (
                            this.options.error.call(
                                this,
                                "No images were returned from Instagram"
                            ),
                            !1
                        );
                    throw new Error("No images were returned from Instagram");
                }
                this.options.success != null &&
                    typeof this.options.success == "function" &&
                    this.options.success.call(this, e),
                    (this.context.nextUrl = ""),
                    e.pagination != null &&
                        (this.context.nextUrl = e.pagination.next_url);
                if (this.options.sortBy !== "none") {
                    this.options.sortBy === "random"
                        ? (M = ["", "random"])
                        : (M = this.options.sortBy.split("-")),
                        (O = M[0] === "least" ? !0 : !1);
                    switch (M[1]) {
                        case "random":
                            e.data.sort(function () {
                                return 0.5 - Math.random();
                            });
                            break;
                        case "recent":
                            e.data = this._sortBy(e.data, "created_time", O);
                            break;
                        case "liked":
                            e.data = this._sortBy(e.data, "likes.count", O);
                            break;
                        case "commented":
                            e.data = this._sortBy(e.data, "comments.count", O);
                            break;
                        default:
                            throw new Error(
                                "Invalid option for sortBy: '" +
                                    this.options.sortBy +
                                    "'."
                            );
                    }
                }
                if (
                    typeof document != "undefined" &&
                    document !== null &&
                    this.options.mock === !1
                ) {
                    (m = e.data),
                        (A = parseInt(this.options.limit, 10)),
                        this.options.limit != null &&
                            m.length > A &&
                            (m = m.slice(0, A)),
                        (u = document.createDocumentFragment()),
                        this.options.filter != null &&
                            typeof this.options.filter == "function" &&
                            (m = this._filter(m, this.options.filter));
                    if (
                        this.options.template != null &&
                        typeof this.options.template == "string"
                    ) {
                        (f = ""),
                            (d = ""),
                            (w = ""),
                            (D = document.createElement("div"));
                        for (c = 0, N = m.length; c < N; c++) {
                            (h = m[c]), (p = h.images[this.options.resolution]);
                            if (typeof p != "object")
                                throw (
                                    ((o =
                                        "No image found for resolution: " +
                                        this.options.resolution +
                                        "."),
                                    new Error(o))
                                );
                            (E = p.width),
                                (y = p.height),
                                (b = "square"),
                                E > y && (b = "landscape"),
                                E < y && (b = "portrait"),
                                (v = p.url),
                                (l =
                                    window.location.protocol.indexOf("http") >=
                                    0),
                                l &&
                                    !this.options.useHttp &&
                                    (v = v.replace(/https?:\/\//, "//")),
                                (d = this._makeTemplate(this.options.template, {
                                    model: h,
                                    id: h.id,
                                    link: h.link,
                                    type: h.type,
                                    image: v,
                                    width: E,
                                    height: y,
                                    orientation: b,
                                    caption: this._getObjectProperty(
                                        h,
                                        "caption.text"
                                    ),
                                    likes: h.likes.count,
                                    comments: h.comments.count,
                                    location: this._getObjectProperty(
                                        h,
                                        "location.name"
                                    ),
                                })),
                                (f += d);
                        }
                        (D.innerHTML = f),
                            (i = []),
                            (r = 0),
                            (n = D.childNodes.length);
                        while (r < n) i.push(D.childNodes[r]), (r += 1);
                        for (x = 0, C = i.length; x < C; x++)
                            (L = i[x]), u.appendChild(L);
                    } else
                        for (T = 0, k = m.length; T < k; T++) {
                            (h = m[T]),
                                (g = document.createElement("img")),
                                (p = h.images[this.options.resolution]);
                            if (typeof p != "object")
                                throw (
                                    ((o =
                                        "No image found for resolution: " +
                                        this.options.resolution +
                                        "."),
                                    new Error(o))
                                );
                            (v = p.url),
                                (l =
                                    window.location.protocol.indexOf("http") >=
                                    0),
                                l &&
                                    !this.options.useHttp &&
                                    (v = v.replace(/https?:\/\//, "//")),
                                (g.src = v),
                                this.options.links === !0
                                    ? ((t = document.createElement("a")),
                                      (t.href = h.link),
                                      t.appendChild(g),
                                      u.appendChild(t))
                                    : u.appendChild(g);
                        }
                    (_ = this.options.target),
                        typeof _ == "string" &&
                            (_ = document.getElementById(_));
                    if (_ == null)
                        throw (
                            ((o =
                                'No element with id="' +
                                this.options.target +
                                '" on page.'),
                            new Error(o))
                        );
                    _.appendChild(u),
                        (a = document.getElementsByTagName("head")[0]),
                        a.removeChild(
                            document.getElementById("instafeed-fetcher")
                        ),
                        (S = "instafeedCache" + this.unique),
                        (window[S] = void 0);
                    try {
                        delete window[S];
                    } catch (P) {
                        s = P;
                    }
                }
                return (
                    this.options.after != null &&
                        typeof this.options.after == "function" &&
                        this.options.after.call(this),
                    !0
                );
            }),
            (e.prototype._buildUrl = function () {
                var e, t, n;
                e = "https://api.instagram.com/v1";
                switch (this.options.get) {
                    case "popular":
                        t = "media/popular";
                        break;
                    case "tagged":
                        if (!this.options.tagName)
                            throw new Error(
                                "No tag name specified. Use the 'tagName' option."
                            );
                        t = "tags/" + this.options.tagName + "/media/recent";
                        break;
                    case "location":
                        if (!this.options.locationId)
                            throw new Error(
                                "No location specified. Use the 'locationId' option."
                            );
                        t =
                            "locations/" +
                            this.options.locationId +
                            "/media/recent";
                        break;
                    case "user":
                        if (!this.options.userId)
                            throw new Error(
                                "No user specified. Use the 'userId' option."
                            );
                        t = "users/" + this.options.userId + "/media/recent";
                        break;
                    default:
                        throw new Error(
                            "Invalid option for get: '" +
                                this.options.get +
                                "'."
                        );
                }
                return (
                    (n = e + "/" + t),
                    this.options.accessToken != null
                        ? (n += "?access_token=" + this.options.accessToken)
                        : (n += "?client_id=" + this.options.clientId),
                    this.options.limit != null &&
                        (n += "&count=" + this.options.limit),
                    (n += "&callback=instafeedCache" + this.unique + ".parse"),
                    n
                );
            }),
            (e.prototype._genKey = function () {
                var e;
                return (
                    (e = function () {
                        return (((1 + Math.random()) * 65536) | 0)
                            .toString(16)
                            .substring(1);
                    }),
                    "" + e() + e() + e() + e()
                );
            }),
            (e.prototype._makeTemplate = function (e, t) {
                var n, r, i, s, o;
                (r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/), (n = e);
                while (r.test(n))
                    (s = n.match(r)[1]),
                        (o =
                            (i = this._getObjectProperty(t, s)) != null
                                ? i
                                : ""),
                        (n = n.replace(r, function () {
                            return "" + o;
                        }));
                return n;
            }),
            (e.prototype._getObjectProperty = function (e, t) {
                var n, r;
                (t = t.replace(/\[(\w+)\]/g, ".$1")), (r = t.split("."));
                while (r.length) {
                    n = r.shift();
                    if (!(e != null && n in e)) return null;
                    e = e[n];
                }
                return e;
            }),
            (e.prototype._sortBy = function (e, t, n) {
                var r;
                return (
                    (r = function (e, r) {
                        var i, s;
                        return (
                            (i = this._getObjectProperty(e, t)),
                            (s = this._getObjectProperty(r, t)),
                            n ? (i > s ? 1 : -1) : i < s ? 1 : -1
                        );
                    }),
                    e.sort(r.bind(this)),
                    e
                );
            }),
            (e.prototype._filter = function (e, t) {
                var n, r, i, s, o;
                (n = []),
                    (r = function (e) {
                        if (t(e)) return n.push(e);
                    });
                for (i = 0, o = e.length; i < o; i++) (s = e[i]), r(s);
                return n;
            }),
            e
        );
    })()),
        (function (e, t) {
            return typeof define == "function" && define.amd
                ? define([], t)
                : typeof module == "object" && module.exports
                ? (module.exports = t())
                : (e.Instafeed = t());
        })(this, function () {
            return e;
        });
}.call(this));

/*-----------------------------
  08. Scrollreveal.min.js
-------------------------------*/

!(function () {
    "use strict";
    function e(n) {
        return "undefined" == typeof this ||
            Object.getPrototypeOf(this) !== e.prototype
            ? new e(n)
            : ((O = this),
              (O.version = "3.3.2"),
              (O.tools = new E()),
              O.isSupported()
                  ? (O.tools.extend(O.defaults, n || {}),
                    (O.defaults.container = t(O.defaults)),
                    (O.store = { elements: {}, containers: [] }),
                    (O.sequences = {}),
                    (O.history = []),
                    (O.uid = 0),
                    (O.initialized = !1))
                  : "undefined" != typeof console && null !== console,
              O);
    }
    function t(e) {
        if (e && e.container) {
            if ("string" == typeof e.container)
                return window.document.documentElement.querySelector(
                    e.container
                );
            if (O.tools.isNode(e.container)) return e.container;
        }
        return O.defaults.container;
    }
    function n(e, t) {
        return "string" == typeof e
            ? Array.prototype.slice.call(t.querySelectorAll(e))
            : O.tools.isNode(e)
            ? [e]
            : O.tools.isNodeList(e)
            ? Array.prototype.slice.call(e)
            : [];
    }
    function i() {
        return ++O.uid;
    }
    function o(e, t, n) {
        t.container && (t.container = n),
            e.config
                ? (e.config = O.tools.extendClone(e.config, t))
                : (e.config = O.tools.extendClone(O.defaults, t)),
            "top" === e.config.origin || "bottom" === e.config.origin
                ? (e.config.axis = "Y")
                : (e.config.axis = "X");
    }
    function r(e) {
        var t = window.getComputedStyle(e.domEl);
        e.styles ||
            ((e.styles = { transition: {}, transform: {}, computed: {} }),
            (e.styles.inline = e.domEl.getAttribute("style") || ""),
            (e.styles.inline += "; visibility: visible; "),
            (e.styles.computed.opacity = t.opacity),
            t.transition && "all 0s ease 0s" !== t.transition
                ? (e.styles.computed.transition = t.transition + ", ")
                : (e.styles.computed.transition = "")),
            (e.styles.transition.instant = s(e, 0)),
            (e.styles.transition.delayed = s(e, e.config.delay)),
            (e.styles.transform.initial = " -webkit-transform:"),
            (e.styles.transform.target = " -webkit-transform:"),
            a(e),
            (e.styles.transform.initial += "transform:"),
            (e.styles.transform.target += "transform:"),
            a(e);
    }
    function s(e, t) {
        var n = e.config;
        return (
            "-webkit-transition: " +
            e.styles.computed.transition +
            "-webkit-transform " +
            n.duration / 1e3 +
            "s " +
            n.easing +
            " " +
            t / 1e3 +
            "s, opacity " +
            n.duration / 1e3 +
            "s " +
            n.easing +
            " " +
            t / 1e3 +
            "s; transition: " +
            e.styles.computed.transition +
            "transform " +
            n.duration / 1e3 +
            "s " +
            n.easing +
            " " +
            t / 1e3 +
            "s, opacity " +
            n.duration / 1e3 +
            "s " +
            n.easing +
            " " +
            t / 1e3 +
            "s; "
        );
    }
    function a(e) {
        var t,
            n = e.config,
            i = e.styles.transform;
        (t =
            "top" === n.origin || "left" === n.origin
                ? /^-/.test(n.distance)
                    ? n.distance.substr(1)
                    : "-" + n.distance
                : n.distance),
            parseInt(n.distance) &&
                ((i.initial += " translate" + n.axis + "(" + t + ")"),
                (i.target += " translate" + n.axis + "(0)")),
            n.scale &&
                ((i.initial += " scale(" + n.scale + ")"),
                (i.target += " scale(1)")),
            n.rotate.x &&
                ((i.initial += " rotateX(" + n.rotate.x + "deg)"),
                (i.target += " rotateX(0)")),
            n.rotate.y &&
                ((i.initial += " rotateY(" + n.rotate.y + "deg)"),
                (i.target += " rotateY(0)")),
            n.rotate.z &&
                ((i.initial += " rotateZ(" + n.rotate.z + "deg)"),
                (i.target += " rotateZ(0)")),
            (i.initial += "; opacity: " + n.opacity + ";"),
            (i.target += "; opacity: " + e.styles.computed.opacity + ";");
    }
    function l(e) {
        var t = e.config.container;
        t &&
            O.store.containers.indexOf(t) === -1 &&
            O.store.containers.push(e.config.container),
            (O.store.elements[e.id] = e);
    }
    function c(e, t, n) {
        var i = { target: e, config: t, interval: n };
        O.history.push(i);
    }
    function f() {
        if (O.isSupported()) {
            y();
            for (var e = 0; e < O.store.containers.length; e++)
                O.store.containers[e].addEventListener("scroll", d),
                    O.store.containers[e].addEventListener("resize", d);
            O.initialized ||
                (window.addEventListener("scroll", d),
                window.addEventListener("resize", d),
                (O.initialized = !0));
        }
        return O;
    }
    function d() {
        T(y);
    }
    function u() {
        var e, t, n, i;
        O.tools.forOwn(O.sequences, function (o) {
            (i = O.sequences[o]), (e = !1);
            for (var r = 0; r < i.elemIds.length; r++)
                (n = i.elemIds[r]),
                    (t = O.store.elements[n]),
                    q(t) && !e && (e = !0);
            i.active = e;
        });
    }
    function y() {
        var e, t;
        u(),
            O.tools.forOwn(O.store.elements, function (n) {
                (t = O.store.elements[n]),
                    (e = w(t)),
                    g(t)
                        ? (t.config.beforeReveal(t.domEl),
                          e
                              ? t.domEl.setAttribute(
                                    "style",
                                    t.styles.inline +
                                        t.styles.transform.target +
                                        t.styles.transition.delayed
                                )
                              : t.domEl.setAttribute(
                                    "style",
                                    t.styles.inline +
                                        t.styles.transform.target +
                                        t.styles.transition.instant
                                ),
                          p("reveal", t, e),
                          (t.revealing = !0),
                          (t.seen = !0),
                          t.sequence && m(t, e))
                        : v(t) &&
                          (t.config.beforeReset(t.domEl),
                          t.domEl.setAttribute(
                              "style",
                              t.styles.inline +
                                  t.styles.transform.initial +
                                  t.styles.transition.instant
                          ),
                          p("reset", t),
                          (t.revealing = !1));
            });
    }
    function m(e, t) {
        var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        (o.blocked = !0),
            t && "onload" === e.config.useDelay && (i = e.config.delay),
            e.sequence.timer &&
                ((n = Math.abs(e.sequence.timer.started - new Date())),
                window.clearTimeout(e.sequence.timer)),
            (e.sequence.timer = { started: new Date() }),
            (e.sequence.timer.clock = window.setTimeout(function () {
                (o.blocked = !1), (e.sequence.timer = null), d();
            }, Math.abs(o.interval) + i - n));
    }
    function p(e, t, n) {
        var i = 0,
            o = 0,
            r = "after";
        switch (e) {
            case "reveal":
                (o = t.config.duration),
                    n && (o += t.config.delay),
                    (r += "Reveal");
                break;
            case "reset":
                (o = t.config.duration), (r += "Reset");
        }
        t.timer &&
            ((i = Math.abs(t.timer.started - new Date())),
            window.clearTimeout(t.timer.clock)),
            (t.timer = { started: new Date() }),
            (t.timer.clock = window.setTimeout(function () {
                t.config[r](t.domEl), (t.timer = null);
            }, o - i));
    }
    function g(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return t.active && !t.blocked && !e.revealing && !e.disabled;
        }
        return q(e) && !e.revealing && !e.disabled;
    }
    function w(e) {
        var t = e.config.useDelay;
        return (
            "always" === t ||
            ("onload" === t && !O.initialized) ||
            ("once" === t && !e.seen)
        );
    }
    function v(e) {
        if (e.sequence) {
            var t = O.sequences[e.sequence.id];
            return !t.active && e.config.reset && e.revealing && !e.disabled;
        }
        return !q(e) && e.config.reset && e.revealing && !e.disabled;
    }
    function b(e) {
        return { width: e.clientWidth, height: e.clientHeight };
    }
    function h(e) {
        if (e && e !== window.document.documentElement) {
            var t = x(e);
            return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top };
        }
        return { x: window.pageXOffset, y: window.pageYOffset };
    }
    function x(e) {
        var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do
            isNaN(e.offsetTop) || (t += e.offsetTop),
                isNaN(e.offsetLeft) || (n += e.offsetLeft),
                (e = e.offsetParent);
        while (e);
        return { top: t, left: n, height: i, width: o };
    }
    function q(e) {
        function t() {
            var t = c + a * s,
                n = f + l * s,
                i = d - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width;
            return t < g && i > m && n > p && y < w;
        }
        function n() {
            return "fixed" === window.getComputedStyle(e.domEl).position;
        }
        var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            f = i.left,
            d = c + a,
            u = f + l;
        return t() || n();
    }
    function E() {}
    var O, T;
    (e.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 0.9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: 0.2,
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
        beforeReveal: function (e) {},
        beforeReset: function (e) {},
        afterReveal: function (e) {},
        afterReset: function (e) {},
    }),
        (e.prototype.isSupported = function () {
            var e = document.documentElement.style;
            return (
                ("WebkitTransition" in e && "WebkitTransform" in e) ||
                ("transition" in e && "transform" in e)
            );
        }),
        (e.prototype.reveal = function (e, s, a, d) {
            var u, y, m, p, g, w;
            if (
                (void 0 !== s && "number" == typeof s
                    ? ((a = s), (s = {}))
                    : (void 0 !== s && null !== s) || (s = {}),
                (u = t(s)),
                (y = n(e, u)),
                !y.length)
            )
                return O;
            a &&
                "number" == typeof a &&
                ((w = i()),
                (g = O.sequences[w] =
                    { id: w, interval: a, elemIds: [], active: !1 }));
            for (var v = 0; v < y.length; v++)
                (p = y[v].getAttribute("data-sr-id")),
                    p
                        ? (m = O.store.elements[p])
                        : ((m = {
                              id: i(),
                              domEl: y[v],
                              seen: !1,
                              revealing: !1,
                          }),
                          m.domEl.setAttribute("data-sr-id", m.id)),
                    g &&
                        ((m.sequence = { id: g.id, index: g.elemIds.length }),
                        g.elemIds.push(m.id)),
                    o(m, s, u),
                    r(m),
                    l(m),
                    (O.tools.isMobile() && !m.config.mobile) || !O.isSupported()
                        ? (m.domEl.setAttribute("style", m.styles.inline),
                          (m.disabled = !0))
                        : m.revealing ||
                          m.domEl.setAttribute(
                              "style",
                              m.styles.inline + m.styles.transform.initial
                          );
            return (
                !d &&
                    O.isSupported() &&
                    (c(e, s, a),
                    O.initTimeout && window.clearTimeout(O.initTimeout),
                    (O.initTimeout = window.setTimeout(f, 0))),
                O
            );
        }),
        (e.prototype.sync = function () {
            if (O.history.length && O.isSupported()) {
                for (var e = 0; e < O.history.length; e++) {
                    var t = O.history[e];
                    O.reveal(t.target, t.config, t.interval, !0);
                }
                f();
            }
            return O;
        }),
        (E.prototype.isObject = function (e) {
            return (
                null !== e && "object" == typeof e && e.constructor === Object
            );
        }),
        (E.prototype.isNode = function (e) {
            return "object" == typeof window.Node
                ? e instanceof window.Node
                : e &&
                      "object" == typeof e &&
                      "number" == typeof e.nodeType &&
                      "string" == typeof e.nodeName;
        }),
        (E.prototype.isNodeList = function (e) {
            var t = Object.prototype.toString.call(e),
                n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
            return "object" == typeof window.NodeList
                ? e instanceof window.NodeList
                : e &&
                      "object" == typeof e &&
                      n.test(t) &&
                      "number" == typeof e.length &&
                      (0 === e.length || this.isNode(e[0]));
        }),
        (E.prototype.forOwn = function (e, t) {
            if (!this.isObject(e))
                throw new TypeError(
                    'Expected "object", but received "' + typeof e + '".'
                );
            for (var n in e) e.hasOwnProperty(n) && t(n);
        }),
        (E.prototype.extend = function (e, t) {
            return (
                this.forOwn(
                    t,
                    function (n) {
                        this.isObject(t[n])
                            ? ((e[n] && this.isObject(e[n])) || (e[n] = {}),
                              this.extend(e[n], t[n]))
                            : (e[n] = t[n]);
                    }.bind(this)
                ),
                e
            );
        }),
        (E.prototype.extendClone = function (e, t) {
            return this.extend(this.extend({}, e), t);
        }),
        (E.prototype.isMobile = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
        }),
        (T =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (e) {
                window.setTimeout(e, 1e3 / 60);
            }),
        "function" == typeof define &&
        "object" == typeof define.amd &&
        define.amd
            ? define(function () {
                  return e;
              })
            : "undefined" != typeof module && module.exports
            ? (module.exports = e)
            : (window.ScrollReveal = e);
})();
