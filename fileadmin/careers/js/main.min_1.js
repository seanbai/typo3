function _toConsumableArray(e) {
	if (Array.isArray(e)) {
		for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
		return n
	}
	return Array.from(e)
}
function FilterHandler(e) {
	this.form = null, this.list_holder = null, this.ajax = !1, this.inject_method = {
		"default": "load",
		filter: "load",
		paginate: "append"
	}, this.pagination = {}, this.pagination_state = {}, this.callbacks = {}, this.init(e), this.bind(e)
}
function StorageHandler(e) {
	"undefined" == typeof e && (e = localStorage), this.storageDevice = e
}
function InitApplyDetail() {
	function e(e, n, i) {
		return function(a) {
			window.linker = window.linker || new window.gaplugins.Linker(a), t.attr("src", window.linker.decorate(n, i)), t.remove(), e.prepend(t)
		}
	}
	var t = $(".js-iframe-apply");
	if (t.length) if (t.data("src")) {
		var n = !device.desktop && t.data("mobile_src") ? t.data("mobile_src") : t.data("src");
		ga(e(t.parent(), n))
	} else {
		var i = $(window).width();
		if (i < 769) {
			var a = t.data("mobile_src");
			if (a) {
				var r = t.parent();
				t.attr("src", a), t.remove(), r.prepend(t)
			}
		}
	}
	initApplyDetailPostMessage(), function(e) {
		pm.bind("scrollToTop", function(t) {
			t.doScroll && e("html").scrollTop(0)
		})
	}(jQuery)
}
function initApplyDetailPostMessage() {
	var e = {};
	!
	function(t, n, i) {
		if (!("console" in t)) {
			var a = t.console = {};
			a.log = a.warn = a.error = a.debug = function() {}
		}
		n === e && (n = {
			fn: {},
			extend: function() {
				for (var e = arguments[0], t = 1, n = arguments.length; t < n; t++) {
					var i = arguments[t];
					for (var a in i) e[a] = i[a]
				}
				return e
			}
		}), n.fn.pm = function() {
			return this
		}, n.pm = t.pm = function(e) {
			r.send(e)
		}, n.pm.bind = t.pm.bind = function(e, t, n, i, a) {
			r.bind(e, t, n, i, a === !0)
		}, n.pm.unbind = t.pm.unbind = function(e, t) {
			r.unbind(e, t)
		}, n.pm.origin = t.pm.origin = null, n.pm.poll = t.pm.poll = 200;
		var r = {
			send: function(e) {
				var t = n.extend({}, r.defaults, e),
					i = t.target;
				if (t.target && t.type) {
					var a = {
						data: t.data,
						type: t.type
					};
					t.success && (a.callback = r._callback(t.success)), t.error && (a.errback = r._callback(t.error)), "postMessage" in i && !t.hash ? (r._bind(), i.postMessage(JSON.stringify(a), t.origin || "*")) : (r.hash._bind(), r.hash.send(t, a))
				}
			},
			bind: function(e, t, n, i, a) {
				r._replyBind(e, t, n, i, a)
			},
			_replyBind: function(e, i, a, s, o) {
				"postMessage" in t && !s ? r._bind() : r.hash._bind();
				var l = r.data("listeners.postmessage");
				l || (l = {}, r.data("listeners.postmessage", l));
				var c = l[e];
				c || (c = [], l[e] = c), c.push({
					fn: i,
					callback: o,
					origin: a || n.pm.origin
				})
			},
			unbind: function(e, t) {
				var n = r.data("listeners.postmessage");
				if (n) if (e) if (t) {
					var i = n[e];
					if (i) {
						for (var a = [], s = 0, o = i.length; s < o; s++) {
							var l = i[s];
							l.fn !== t && a.push(l)
						}
						n[e] = a
					}
				} else delete n[e];
				else for (var s in n) delete n[s]
			},
			data: function(e, t) {
				return t === i ? r._data[e] : (r._data[e] = t, t)
			},
			_data: {},
			_CHARS: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
			_random: function() {
				for (var e = [], t = 0; t < 32; t++) e[t] = r._CHARS[0 | 32 * Math.random()];
				return e.join("")
			},
			_callback: function(e) {
				var t = r.data("callbacks.postmessage");
				t || (t = {}, r.data("callbacks.postmessage", t));
				var n = r._random();
				return t[n] = e, n
			},
			_bind: function() {
				r.data("listening.postmessage") || (t.addEventListener ? t.addEventListener("message", r._dispatch, !1) : t.attachEvent && t.attachEvent("onmessage", r._dispatch), r.data("listening.postmessage", 1))
			},
			_dispatch: function(e) {
				function t(t) {
					n.callback && r.send({
						target: e.source,
						data: t,
						type: n.callback
					})
				}
				try {
					var n = JSON.parse(e.data)
				} catch (i) {
					return
				}
				if (n.type) {
					var a = r.data("callbacks.postmessage") || {},
						s = a[n.type];
					if (s) s(n.data);
					else for (var o = r.data("listeners.postmessage") || {}, l = o[n.type] || [], c = 0, u = l.length; c < u; c++) {
						var d = l[c];
						if (d.origin && "*" !== d.origin && e.origin !== d.origin) {
							if (n.errback) {
								var p = {
									message: "postmessage origin mismatch",
									origin: [e.origin, d.origin]
								};
								r.send({
									target: e.source,
									data: p,
									type: n.errback
								})
							}
						} else try {
							d.callback ? d.fn(n.data, t, e) : t(d.fn(n.data, e))
						} catch (i) {
							if (!n.errback) throw i;
							r.send({
								target: e.source,
								data: i,
								type: n.errback
							})
						}
					}
				}
			}
		};
		r.hash = {
			send: function(e, n) {
				var i = e.target,
					a = e.url;
				if (a) {
					a = r.hash._url(a);
					var s, o = r.hash._url(t.location.href);
					if (t == i.parent) s = "parent";
					else try {
						for (var l = 0, c = parent.frames.length; l < c; l++) {
							var u = parent.frames[l];
							if (u == t) {
								s = l;
								break
							}
						}
					} catch (d) {
						s = t.name
					}
					if (null != s) {
						var p = {
							"x-requested-with": "postmessage",
							source: {
								name: s,
								url: o
							},
							postmessage: n
						},
							f = "#x-postmessage-id=" + r._random();
						i.location = a + f + encodeURIComponent(JSON.stringify(p))
					}
				}
			},
			_regex: /^\#x\-postmessage\-id\=(\w{32})/,
			_regex_len: "#x-postmessage-id=".length + 32,
			_bind: function() {
				r.data("polling.postmessage") || (setInterval(function() {
					var e = "" + t.location.hash,
						n = r.hash._regex.exec(e);
					if (n) {
						var i = n[1];
						r.hash._last !== i && (r.hash._last = i, r.hash._dispatch(e.substring(r.hash._regex_len)))
					}
				}, n.pm.poll || 200), r.data("polling.postmessage", 1))
			},
			_dispatch: function(e) {
				function n(t) {
					a.callback && r.send({
						target: l,
						data: t,
						type: a.callback,
						hash: !0,
						url: e.source.url
					})
				}
				if (e) {
					try {
						if (e = JSON.parse(decodeURIComponent(e)), !("postmessage" === e["x-requested-with"] && e.source && null != e.source.name && e.source.url && e.postmessage)) return
					} catch (i) {
						return
					}
					var a = e.postmessage,
						s = r.data("callbacks.postmessage") || {},
						o = s[a.type];
					if (o) o(a.data);
					else {
						var l;
						l = "parent" === e.source.name ? t.parent : t.frames[e.source.name];
						for (var c = r.data("listeners.postmessage") || {}, u = c[a.type] || [], d = 0, p = u.length; d < p; d++) {
							var f = u[d];
							if (f.origin) {
								var h = /https?\:\/\/[^\/]*/.exec(e.source.url)[0];
								if ("*" !== f.origin && h !== f.origin) {
									if (a.errback) {
										var m = {
											message: "postmessage origin mismatch",
											origin: [h, f.origin]
										};
										r.send({
											target: l,
											data: m,
											type: a.errback,
											hash: !0,
											url: e.source.url
										})
									}
									continue
								}
							}
							try {
								f.callback ? f.fn(a.data, n) : n(f.fn(a.data))
							} catch (i) {
								if (!a.errback) throw i;
								r.send({
									target: l,
									data: i,
									type: a.errback,
									hash: !0,
									url: e.source.url
								})
							}
						}
					}
				}
			},
			_url: function(e) {
				return ("" + e).replace(/#.*$/, "")
			}
		}, n.extend(r, {
			defaults: {
				target: null,
				url: null,
				type: null,
				data: null,
				success: null,
				error: null,
				origin: "*",
				hash: !1
			}
		})
	}(this, "undefined" == typeof jQuery ? e : jQuery)
}
function InitBlogs() {
	this.options = {
		list_holder: $("#list_holder"),
		pagination: {
			scroll: {
				enabled: !0,
				distance: 600
			},
			loader: $("#loader")
		},
		inject_method: {
			paginate: function(e) {
				var t = document.getElementById("list_holder"),
					n = $("<div/>").html(e).contents().toArray();
				salvattore.appendElements(t, n)
			}
		}
	}, this.filter = new FilterHandler(this.options)
}
function InitHomepage() {}
function setStyling() {
	$(".js-slider:not(.gn-js-styled)").addClass(".gn-js-styled").flexslider({
		animation: "slide",
		animationSpeed: 400,
		slideshow: !0,
		controlNav: !0,
		directionNav: !1
	}), $(".js-select-pri:not(.gn-js-styled)").addClass(".gn-js-styled").select()
}
function trackEvent(e, t, n, i, a) {
	if (!$("head").data("dev")) {
		var r = getDataAttribute(head, "compass-analytics-key");
		r && $.get("https://collect.cdlvr.net/event/custom?site=" + r + "&category=" + e + "&action=" + t + "&label=" + n), "function" == typeof ga ? void 0 === i ? ga("send", "event", e, t, n) : ga("send", "event", e, t, n, i, a) : "object" == typeof _gaq && "function" == typeof _gaq.push ? _gaq.push(["_trackEvent", e, t, n, i]) : "undefined" != typeof Raven && Raven.captureMessage("ga / _gaq not implemented!", {
			level: "warning"
		})
	}
}
function gaAdditions(e) {
	registerGaDimensions(e)
}
function registerGaDimensions(e) {
	var t = "gn-js-initialized",
		n = $(".js-tracking-ga-dimension:not(." + t + ")");
	0 !== n.length && n.each(function() {
		$(this).addClass(t);
		var n = {};
		$.each($(this).data(), function(t, i) {
			t.indexOf("trackingGa") !== -1 && (t = t.replace("trackingGa", "").replace(/([A-Z])/g, function(e) {
				return "-" + e.toLowerCase()
			}).toLowerCase().substr(1), n[t] = i, e("set", t, i))
		})
	})
}!
function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
	var t, n, i, a, r, s, o = "Close",
		l = "BeforeClose",
		c = "AfterClose",
		u = "BeforeAppend",
		d = "MarkupParse",
		p = "Open",
		f = "Change",
		h = "mfp",
		m = "." + h,
		g = "modal__ready",
		v = "modal__removing",
		y = "modal__prevent-close",
		b = function() {},
		w = !! window.jQuery,
		_ = e(window),
		C = function(e, n) {
			t.ev.on(h + e + m, n)
		},
		x = function(t, n, i, a) {
			var r = document.createElement("div");
			return r.className = "modal__" + t, i && (r.innerHTML = i), a ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
		},
		$ = function(n, i) {
			t.ev.triggerHandler(h + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
		},
		k = function(n) {
			return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
		},
		E = function() {
			e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
		},
		S = function() {
			var e = document.createElement("p").style,
				t = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== e.transition) return !0;
			for (; t.length;) if (t.pop() + "Transition" in e) return !0;
			return !1
		};
	b.prototype = {
		constructor: b,
		init: function() {
			var n = navigator.appVersion;
			t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {}
		},
		open: function(n) {
			var a;
			if (n.isObj === !1) {
				t.items = n.items.toArray(), t.index = 0;
				var s, o = n.items;
				for (a = 0; a < o.length; a++) if (s = o[a], s.parsed && (s = s.el[0]), s === n.el[0]) {
					t.index = a;
					break
				}
			} else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
			if (t.isOpen) return void t.updateItemHTML();
			t.types = [], r = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + m, function() {
				t.close()
			}), t.wrap = x("wrap").attr("tabindex", -1).on("click" + m, function(e) {
				t._checkIfClose(e.target) && t.close()
			}), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
			var l = e.magnificPopup.modules;
			for (a = 0; a < l.length; a++) {
				var c = l[a];
				c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
			}
			$("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (C(d, function(e, t, n, i) {
				n.close_replaceWith = k(i.type)
			}), r += " modal__close-btn-in") : t.wrap.append(k())), t.st.alignTop && (r += " modal__align-top"), t.wrap.css(t.fixedContentPos ? {
				overflow: t.st.overflowY,
				overflowX: "hidden",
				overflowY: t.st.overflowY
			} : {
				top: _.scrollTop(),
				position: "absolute"
			}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
				height: i.height(),
				position: "absolute"
			}), t.st.enableEscapeKey && i.on("keyup" + m, function(e) {
				27 === e.keyCode && t.close()
			}), _.on("resize" + m, function() {
				t.updateSize()
			}), t.st.closeOnContentClick || (r += " modal__auto-cursor"), r && t.wrap.addClass(r);
			var u = t.wH = _.height(),
				f = {};
			if (t.fixedContentPos && t._hasScrollBar(u)) {
				var h = t._getScrollbarSize();
				h && (f.marginRight = h)
			}
			t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : f.overflow = "hidden");
			var v = t.st.mainClass;
			return t.isIE7 && (v += " modal__ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), $("BuildControls"), e("html").css(f), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function() {
				t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), i.on("focusin" + m, t._onFocusIn)
			}, 16), t.isOpen = !0, t.updateSize(u), $(p), n
		},
		close: function() {
			t.isOpen && ($(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function() {
				t._close()
			}, t.st.removalDelay)) : t._close())
		},
		_close: function() {
			$(o);
			var n = v + " " + g + " ";
			if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
				var a = {
					marginRight: ""
				};
				t.isIE7 ? e("body, html").css("overflow", "") : a.overflow = "", e("html").css(a)
			}
			i.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "modal__wrap").removeAttr("style"), t.bgOverlay.attr("class", "modal__bg"), t.container.attr("class", "modal__container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, $(c)
		},
		updateSize: function(e) {
			if (t.isIOS) {
				var n = document.documentElement.clientWidth / window.innerWidth,
					i = window.innerHeight * n;
				t.wrap.css("height", i), t.wH = i
			} else t.wH = e || _.height();
			t.fixedContentPos || t.wrap.css("height", t.wH), $("Resize")
		},
		updateItemHTML: function() {
			var n = t.items[t.index];
			t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
			var i = n.type;
			if ($("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
				var r = !! t.st[i] && t.st[i].markup;
				$("FirstMarkupParse", r), t.currTemplate[i] = !r || e(r)
			}
			a && a !== n.type && t.container.removeClass("modal__" + a + "-holder");
			var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
			t.appendContent(s, i), n.preloaded = !0, $(f, n), a = n.type, t.container.prepend(t.contentContainer), $("AfterChange")
		},
		appendContent: function(e, n) {
			t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".modal__close").length || t.content.append(k()) : t.content = e : t.content = "", $(u), t.container.addClass("modal__" + n + "-holder"), t.contentContainer.append(t.content)
		},
		parseEl: function(n) {
			var i, a = t.items[n];
			if (a.tagName ? a = {
				el: e(a)
			} : (i = a.type, a = {
				data: a,
				src: a.src
			}), a.el) {
				for (var r = t.types, s = 0; s < r.length; s++) if (a.el.hasClass("modal__" + r[s])) {
					i = r[s];
					break
				}
				a.src = a.el.attr("data-modal__src"), a.src || (a.src = a.el.attr("href"))
			}
			return a.type = i || t.st.type || "inline", a.index = n, a.parsed = !0, t.items[n] = a, $("ElementParse", a), t.items[n]
		},
		addGroup: function(e, n) {
			var i = function(i) {
					i.mfpEl = this, t._openClick(i, e, n)
				};
			n || (n = {});
			var a = "click.magnificPopup";
			n.mainEl = e, n.items ? (n.isObj = !0, e.off(a).on(a, i)) : (n.isObj = !1, n.delegate ? e.off(a).on(a, n.delegate, i) : (n.items = e, e.off(a).on(a, i)))
		},
		_openClick: function(n, i, a) {
			var r = void 0 !== a.midClick ? a.midClick : e.magnificPopup.defaults.midClick;
			if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
				var s = void 0 !== a.disableOn ? a.disableOn : e.magnificPopup.defaults.disableOn;
				if (s) if (e.isFunction(s)) {
					if (!s.call(t)) return !0
				} else if (_.width() < s) return !0;
				n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), a.el = e(n.mfpEl), a.delegate && (a.items = i.find(a.delegate)), t.open(a)
			}
		},
		updateStatus: function(e, i) {
			if (t.preloader) {
				n !== e && t.container.removeClass("modal__s-" + n), i || "loading" !== e || (i = t.st.tLoading);
				var a = {
					status: e,
					text: i
				};
				$("UpdateStatus", a), e = a.status, i = a.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
					e.stopImmediatePropagation()
				}), t.container.addClass("modal__s-" + e), n = e
			}
		},
		_checkIfClose: function(n) {
			if (!e(n).hasClass(y)) {
				var i = t.st.closeOnContentClick,
					a = t.st.closeOnBgClick;
				if (i && a) return !0;
				if (!t.content || e(n).hasClass("modal__close") || t.preloader && n === t.preloader[0]) return !0;
				if (n === t.content[0] || e.contains(t.content[0], n)) {
					if (i) return !0
				} else if (a && e.contains(document, n)) return !0;
				return !1
			}
		},
		_addClassToMFP: function(e) {
			t.bgOverlay.addClass(e), t.wrap.addClass(e)
		},
		_removeClassFromMFP: function(e) {
			this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
		},
		_hasScrollBar: function(e) {
			return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || _.height())
		},
		_setFocus: function() {
			(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
		},
		_onFocusIn: function(n) {
			return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
		},
		_parseMarkup: function(t, n, i) {
			var a;
			i.data && (n = e.extend(i.data, n)), $(d, [t, n, i]), e.each(n, function(e, n) {
				if (void 0 === n || n === !1) return !0;
				if (a = e.split("_"), a.length > 1) {
					var i = t.find(m + "-" + a[0]);
					if (i.length > 0) {
						var r = a[1];
						"replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(a[1], n)
					}
				} else t.find(m + "-" + e).html(n)
			})
		},
		_getScrollbarSize: function() {
			if (void 0 === t.scrollbarSize) {
				var e = document.createElement("div");
				e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
			}
			return t.scrollbarSize
		}
	}, e.magnificPopup = {
		instance: null,
		proto: b.prototype,
		modules: [],
		open: function(t, n) {
			return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
		},
		close: function() {
			return e.magnificPopup.instance && e.magnificPopup.instance.close()
		},
		registerModule: function(t, n) {
			n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
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
			closeMarkup: '<button title="%title%" type="button" class="modal__close">&times;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	}, e.fn.magnificPopup = function(n) {
		E();
		var i = e(this);
		if ("string" == typeof n) if ("open" === n) {
			var a, r = w ? i.data("magnificPopup") : i[0].magnificPopup,
				s = parseInt(arguments[1], 10) || 0;
			r.items ? a = r.items[s] : (a = i, r.delegate && (a = a.find(r.delegate)), a = a.eq(s)), t._openClick({
				mfpEl: a
			}, i, r)
		} else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
		else n = e.extend(!0, {}, n), w ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
		return i
	};
	var F, T, P, j = "inline",
		I = function() {
			P && (T.after(P.addClass(F)).detach(), P = null)
		};
	e.magnificPopup.registerModule(j, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				t.types.push(j), C(o + "." + j, function() {
					I()
				})
			},
			getInline: function(n, i) {
				if (I(), n.src) {
					var a = t.st.inline,
						r = e(n.src);
					if (r.length) {
						var s = r[0].parentNode;
						s && s.tagName && (T || (F = a.hiddenClass, T = x(F), F = "modal__" + F), P = r.after(T).detach().removeClass(F)), t.updateStatus("ready")
					} else t.updateStatus("error", a.tNotFound), r = e("<div>");
					return n.inlineElement = r, r
				}
				return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
			}
		}
	});
	var M, A = "ajax",
		D = function() {
			M && e(document.body).removeClass(M)
		},
		N = function() {
			D(), t.req && t.req.abort()
		};
	e.magnificPopup.registerModule(A, {
		options: {
			settings: null,
			cursor: "modal__ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				t.types.push(A), M = t.st.ajax.cursor, C(o + "." + A, N), C("BeforeChange." + A, N)
			},
			getAjax: function(n) {
				M && e(document.body).addClass(M), t.updateStatus("loading");
				var i = e.extend({
					url: n.src,
					success: function(i, a, r) {
						var s = {
							data: i,
							xhr: r
						};
						$("ParseAjax", s), t.appendContent(e(s.data), A), n.finished = !0, D(), t._setFocus(), setTimeout(function() {
							t.wrap.addClass(g)
						}, 16), t.updateStatus("ready"), $("AjaxContentAdded")
					},
					error: function() {
						D(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
					}
				}, t.st.ajax.settings);
				return t.req = e.ajax(i), ""
			}
		}
	});
	var O, q = function(n) {
			if (n.data && void 0 !== n.data.title) return n.data.title;
			var i = t.st.image.titleSrc;
			if (i) {
				if (e.isFunction(i)) return i.call(t, n);
				if (n.el) return n.el.attr(i) || ""
			}
			return ""
		};
	e.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="modal__figure"><div class="modal__close"></div><figure><div class="modal__img"></div><figcaption><div class="modal__bottom-bar"><div class="modal__title"></div><div class="modal__counter"></div></div></figcaption></figure></div>',
			cursor: "modal__zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var n = t.st.image,
					i = ".image";
				t.types.push("image"), C(p + i, function() {
					"image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
				}), C(o + i, function() {
					n.cursor && e(document.body).removeClass(n.cursor), _.off("resize" + m)
				}), C("Resize" + i, t.resizeImage), t.isLowIE && C("AfterChange", t.resizeImage)
			},
			resizeImage: function() {
				var e = t.currItem;
				if (e && e.img && t.st.image.verticalFit) {
					var n = 0;
					t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
				}
			},
			_onImageHasSize: function(e) {
				e.img && (e.hasSize = !0, O && clearInterval(O), e.isCheckingImgSize = !1, $("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("modal__loading"), e.imgHidden = !1))
			},
			findImageSize: function(e) {
				var n = 0,
					i = e.img[0],
					a = function(r) {
						O && clearInterval(O), O = setInterval(function() {
							return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(O), n++, void(3 === n ? a(10) : 40 === n ? a(50) : 100 === n && a(500)))
						}, r)
					};
				a(1)
			},
			getImage: function(n, i) {
				var a = 0,
					r = function() {
						n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, $("ImageLoadComplete")) : (a++, 200 > a ? setTimeout(r, 100) : s()))
					},
					s = function() {
						n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", o.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
					},
					o = t.st.image,
					l = i.find(".modal__img");
				if (l.length) {
					var c = document.createElement("img");
					c.className = "modal__img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
				}
				return t._parseMarkup(i, {
					title: q(n),
					img_replaceWith: n.img
				}, n), t.resizeImage(), n.hasSize ? (O && clearInterval(O), n.loadError ? (i.addClass("modal__loading"), t.updateStatus("error", o.tError.replace("%url%", n.src))) : (i.removeClass("modal__loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("modal__loading"), t.findImageSize(n)), i)
			}
		}
	});
	var z, H = function() {
			return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform), z
		};
	e.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(e) {
				return e.is("img") ? e : e.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var e, n = t.st.zoom,
					i = ".zoom";
				if (n.enabled && t.supportsTransition) {
					var a, r, s = n.duration,
						c = function(e) {
							var t = e.clone().removeAttr("style").removeAttr("class").addClass("modal__animated-image"),
								i = "all " + n.duration / 1e3 + "s " + n.easing,
								a = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								r = "transition";
							return a["-webkit-" + r] = a["-moz-" + r] = a["-o-" + r] = a[r] = i, t.css(a), t
						},
						u = function() {
							t.content.css("visibility", "visible")
						};
					C("BuildControls" + i, function() {
						if (t._allowZoom()) {
							if (clearTimeout(a), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void u();
							r = c(e), r.css(t._getOffset()), t.wrap.append(r), a = setTimeout(function() {
								r.css(t._getOffset(!0)), a = setTimeout(function() {
									u(), setTimeout(function() {
										r.remove(), e = r = null, $("ZoomAnimationEnded")
									}, 16)
								}, s)
							}, 16)
						}
					}), C(l + i, function() {
						if (t._allowZoom()) {
							if (clearTimeout(a), t.st.removalDelay = s, !e) {
								if (e = t._getItemToZoom(), !e) return;
								r = c(e)
							}
							r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
								r.css(t._getOffset())
							}, 16)
						}
					}), C(o + i, function() {
						t._allowZoom() && (u(), r && r.remove(), e = null)
					})
				}
			},
			_allowZoom: function() {
				return "image" === t.currItem.type
			},
			_getItemToZoom: function() {
				return !!t.currItem.hasSize && t.currItem.img
			},
			_getOffset: function(n) {
				var i;
				i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
				var a = i.offset(),
					r = parseInt(i.css("padding-top"), 10),
					s = parseInt(i.css("padding-bottom"), 10);
				a.top -= e(window).scrollTop() - r;
				var o = {
					width: i.width(),
					height: (w ? i.innerHeight() : i[0].offsetHeight) - s - r
				};
				return H() ? o["-moz-transform"] = o.transform = "translate(" + a.left + "px," + a.top + "px)" : (o.left = a.left, o.top = a.top), o
			}
		}
	});
	var L = "iframe",
		R = "//about:blank",
		W = function(e) {
			if (t.currTemplate[L]) {
				var n = t.currTemplate[L].find("iframe");
				n.length && (e || (n[0].src = R), t.isIE8 && n.css("display", e ? "block" : "none"))
			}
		};
	e.magnificPopup.registerModule(L, {
		options: {
			markup: '<div class="modal__iframe-scaler"><div class="modal__close"></div><iframe class="modal__iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				t.types.push(L), C("BeforeChange", function(e, t, n) {
					t !== n && (t === L ? W() : n === L && W(!0))
				}), C(o + "." + L, function() {
					W()
				})
			},
			getIframe: function(n, i) {
				var a = n.src,
					r = t.st.iframe;
				e.each(r.patterns, function() {
					return a.indexOf(this.index) > -1 ? (this.id && (a = "string" == typeof this.id ? a.substr(a.lastIndexOf(this.id) + this.id.length, a.length) : this.id.call(this, a)), a = this.src.replace("%id%", a), !1) : void 0
				});
				var s = {};
				return r.srcAction && (s[r.srcAction] = a), t._parseMarkup(i, s, n), t.updateStatus("ready"), i
			}
		}
	});
	var V = function(e) {
			var n = t.items.length;
			return e > n - 1 ? e - n : 0 > e ? n + e : e
		},
		B = function(e, t, n) {
			return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
		};
	e.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="modal__arrow modal__arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var n = t.st.gallery,
					a = ".modal__gallery",
					s = Boolean(e.fn.mfpFastClick);
				return t.direction = !0, !(!n || !n.enabled) && (r += " modal__gallery", C(p + a, function() {
					n.navigateByImgClick && t.wrap.on("click" + a, ".modal__img", function() {
						return t.items.length > 1 ? (t.next(), !1) : void 0
					}), i.on("keydown" + a, function(e) {
						37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
					})
				}), C("UpdateStatus" + a, function(e, n) {
					n.text && (n.text = B(n.text, t.currItem.index, t.items.length))
				}), C(d + a, function(e, i, a, r) {
					var s = t.items.length;
					a.counter = s > 1 ? B(n.tCounter, r.index, s) : ""
				}), C("BuildControls" + a, function() {
					if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
						var i = n.arrowMarkup,
							a = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
							r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
							o = s ? "mfpFastClick" : "click";
						a[o](function() {
							t.prev()
						}), r[o](function() {
							t.next()
						}), t.isIE7 && (x("b", a[0], !1, !0), x("a", a[0], !1, !0), x("b", r[0], !1, !0), x("a", r[0], !1, !0)), t.container.append(a.add(r))
					}
				}), C(f + a, function() {
					t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
						t.preloadNearbyImages(), t._preloadTimeout = null
					}, 16)
				}), void C(o + a, function() {
					i.off(a), t.wrap.off("click" + a), t.arrowLeft && s && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
				}))
			},
			next: function() {
				t.direction = !0, t.index = V(t.index + 1), t.updateItemHTML()
			},
			prev: function() {
				t.direction = !1, t.index = V(t.index - 1), t.updateItemHTML()
			},
			goTo: function(e) {
				t.direction = e >= t.index, t.index = e, t.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var e, n = t.st.gallery.preload,
					i = Math.min(n[0], t.items.length),
					a = Math.min(n[1], t.items.length);
				for (e = 1; e <= (t.direction ? a : i); e++) t._preloadItem(t.index + e);
				for (e = 1; e <= (t.direction ? i : a); e++) t._preloadItem(t.index - e)
			},
			_preloadItem: function(n) {
				if (n = V(n), !t.items[n].preloaded) {
					var i = t.items[n];
					i.parsed || (i = t.parseEl(n)), $("LazyLoad", i), "image" === i.type && (i.img = e('<img class="modal__img" />').on("load.mfploader", function() {
						i.hasSize = !0
					}).on("error.mfploader", function() {
						i.hasSize = !0, i.loadError = !0, $("LazyLoadError", i)
					}).attr("src", i.src)), i.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	e.magnificPopup.registerModule(U, {
		options: {
			replaceSrc: function(e) {
				return e.src.replace(/\.\w+$/, function(e) {
					return "@2x" + e
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				if (window.devicePixelRatio > 1) {
					var e = t.st.retina,
						n = e.ratio;
					n = isNaN(n) ? n() : n, n > 1 && (C("ImageHasSize." + U, function(e, t) {
						t.img.css({
							"max-width": t.img[0].naturalWidth / n,
							width: "100%"
						})
					}), C("ElementParse." + U, function(t, i) {
						i.src = e.replaceSrc(i, n)
					}))
				}
			}
		}
	}), function() {
		var t = 1e3,
			n = "ontouchstart" in window,
			i = function() {
				_.off("touchmove" + r + " touchend" + r)
			},
			a = "mfpFastClick",
			r = "." + a;
		e.fn.mfpFastClick = function(a) {
			return e(this).each(function() {
				var s, o = e(this);
				if (n) {
					var l, c, u, d, p, f;
					o.on("touchstart" + r, function(e) {
						d = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, u = p.clientY, _.on("touchmove" + r, function(e) {
							p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (d = !0, i())
						}).on("touchend" + r, function(e) {
							i(), d || f > 1 || (s = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
								s = !1
							}, t), a())
						})
					})
				}
				o.on("click" + r, function() {
					s || a()
				})
			})
		}, e.fn.destroyMfpFastClick = function() {
			e(this).off("touchstart" + r + " click" + r), n && _.off("touchmove" + r + " touchend" + r)
		}
	}(), E()
}), function(e) {
	var t = !0;
	e.flexslider = function(n, i) {
		var a = e(n);
		a.vars = e.extend({}, e.flexslider.defaults, i);
		var r, s = a.vars.namespace,
			o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
			c = "click touchend MSPointerUp keyup",
			u = "",
			d = "vertical" === a.vars.direction,
			p = a.vars.reverse,
			f = a.vars.itemWidth > 0,
			h = "fade" === a.vars.animation,
			m = "" !== a.vars.asNavFor,
			g = {};
		e.data(n, "flexslider", a), g = {
			init: function() {
				a.animating = !1, a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10), isNaN(a.currentSlide) && (a.currentSlide = 0), a.animatingTo = a.currentSlide, a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last, a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" ")), a.slides = e(a.vars.selector, a), a.container = e(a.containerSelector, a), a.count = a.slides.length, a.syncExists = e(a.vars.sync).length > 0, "slide" === a.vars.animation && (a.vars.animation = "swing"), a.prop = d ? "top" : "marginLeft", a.args = {}, a.manualPause = !1, a.stopped = !1, a.started = !1, a.startTimeout = null, a.transitions = !a.vars.video && !h && a.vars.useCSS &&
				function() {
					var e = document.createElement("div"),
						t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for (var n in t) if (void 0 !== e.style[t[n]]) return a.pfx = t[n].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
					return !1
				}(), a.ensureAnimationEnd = "", "" !== a.vars.controlsContainer && (a.controlsContainer = e(a.vars.controlsContainer).length > 0 && e(a.vars.controlsContainer)), "" !== a.vars.manualControls && (a.manualControls = e(a.vars.manualControls).length > 0 && e(a.vars.manualControls)), "" !== a.vars.customDirectionNav && (a.customDirectionNav = 2 === e(a.vars.customDirectionNav).length && e(a.vars.customDirectionNav)), a.vars.randomize && (a.slides.sort(function() {
					return Math.round(Math.random()) - .5
				}), a.container.empty().append(a.slides)), a.doMath(), a.setup("init"), a.vars.controlNav && g.controlNav.setup(), a.vars.directionNav && g.directionNav.setup(), a.vars.keyboard && (1 === e(a.containerSelector).length || a.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
					var t = e.keyCode;
					if (!a.animating && (39 === t || 37 === t)) {
						var n = 39 === t ? a.getTarget("next") : 37 === t && a.getTarget("prev");
						a.flexAnimate(n, a.vars.pauseOnAction)
					}
				}), a.vars.mousewheel && a.bind("mousewheel", function(e, t, n, i) {
					e.preventDefault();
					var r = t < 0 ? a.getTarget("next") : a.getTarget("prev");
					a.flexAnimate(r, a.vars.pauseOnAction)
				}), a.vars.pausePlay && g.pausePlay.setup(), a.vars.slideshow && a.vars.pauseInvisible && g.pauseInvisible.init(), a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function() {
					a.manualPlay || a.manualPause || a.pause()
				}, function() {
					a.manualPause || a.manualPlay || a.stopped || a.play()
				}), a.vars.pauseInvisible && g.pauseInvisible.isHidden() || (a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play())), m && g.asNav.setup(), l && a.vars.touch && g.touch(), (!h || h && a.vars.smoothHeight) && e(window).bind("resize orientationchange focus", g.resize), a.find("img").attr("draggable", "false"), setTimeout(function() {
					a.vars.start(a)
				}, 200)
			},
			asNav: {
				setup: function() {
					a.asNav = !0, a.animatingTo = Math.floor(a.currentSlide / a.move), a.currentItem = a.currentSlide, a.slides.removeClass(s + "active-slide").eq(a.currentItem).addClass(s + "active-slide"), o ? (n._slider = a, a.slides.each(function() {
						var t = this;
						t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
							e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
						}, !1), t.addEventListener("MSGestureTap", function(t) {
							t.preventDefault();
							var n = e(this),
								i = n.index();
							e(a.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (a.direction = a.currentItem < i ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0))
						})
					})) : a.slides.on(c, function(t) {
						t.preventDefault();
						var n = e(this),
							i = n.index(),
							r = n.offset().left - e(a).scrollLeft();
						r <= 0 && n.hasClass(s + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : e(a.vars.asNavFor).data("flexslider").animating || n.hasClass(s + "active-slide") || (a.direction = a.currentItem < i ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction, !1, !0, !0))
					})
				}
			},
			controlNav: {
				setup: function() {
					a.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
				},
				setupPaging: function() {
					var t, n, i = "thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging",
						r = 1;
					if (a.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), a.pagingCount > 1) for (var o = 0; o < a.pagingCount; o++) {
						if (n = a.slides.eq(o), void 0 === n.attr("data-thumb-alt") && n.attr("data-thumb-alt", ""), altText = "" !== n.attr("data-thumb-alt") ? altText = ' alt="' + n.attr("data-thumb-alt") + '"' : "", t = "thumbnails" === a.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + r + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) {
							var l = n.attr("data-thumbcaption");
							"" !== l && void 0 !== l && (t += '<span class="' + s + 'caption">' + l + "</span>")
						}
						a.controlNavScaffold.append("<li>" + t + "</li>"), r++
					}
					a.controlsContainer ? e(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), a.controlNavScaffold.delegate("a, img", c, function(t) {
						if (t.preventDefault(), "" === u || u === t.type) {
							var n = e(this),
								i = a.controlNav.index(n);
							n.hasClass(s + "active") || (a.direction = i > a.currentSlide ? "next" : "prev", a.flexAnimate(i, a.vars.pauseOnAction))
						}
						"" === u && (u = t.type), g.setToClearWatchedEvent()
					})
				},
				setupManual: function() {
					a.controlNav = a.manualControls, g.controlNav.active(), a.controlNav.bind(c, function(t) {
						if (t.preventDefault(), "" === u || u === t.type) {
							var n = e(this),
								i = a.controlNav.index(n);
							n.hasClass(s + "active") || (i > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(i, a.vars.pauseOnAction))
						}
						"" === u && (u = t.type), g.setToClearWatchedEvent()
					})
				},
				set: function() {
					var t = "thumbnails" === a.vars.controlNav ? "img" : "a";
					a.controlNav = e("." + s + "control-nav li " + t, a.controlsContainer ? a.controlsContainer : a)
				},
				active: function() {
					a.controlNav.removeClass(s + "active").eq(a.animatingTo).addClass(s + "active")
				},
				update: function(t, n) {
					a.pagingCount > 1 && "add" === t ? a.controlNavScaffold.append(e('<li><a href="#">' + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(n).closest("li").remove(), g.controlNav.set(), a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(n, t) : g.controlNav.active()
				}
			},
			directionNav: {
				setup: function() {
					var t = e('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
					a.customDirectionNav ? a.directionNav = a.customDirectionNav : a.controlsContainer ? (e(a.controlsContainer).append(t), a.directionNav = e("." + s + "direction-nav li a", a.controlsContainer)) : (a.append(t), a.directionNav = e("." + s + "direction-nav li a", a)), g.directionNav.update(), a.directionNav.bind(c, function(t) {
						t.preventDefault();
						var n;
						"" !== u && u !== t.type || (n = e(this).hasClass(s + "next") ? a.getTarget("next") : a.getTarget("prev"), a.flexAnimate(n, a.vars.pauseOnAction)), "" === u && (u = t.type), g.setToClearWatchedEvent()
					})
				},
				update: function() {
					var e = s + "disabled";
					1 === a.pagingCount ? a.directionNav.addClass(e).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(e).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : a.directionNav.removeClass(e).removeAttr("tabindex")
				}
			},
			pausePlay: {
				setup: function() {
					var t = e('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
					a.controlsContainer ? (a.controlsContainer.append(t), a.pausePlay = e("." + s + "pauseplay a", a.controlsContainer)) : (a.append(t), a.pausePlay = e("." + s + "pauseplay a", a)), g.pausePlay.update(a.vars.slideshow ? s + "pause" : s + "play"), a.pausePlay.bind(c, function(t) {
						t.preventDefault(), "" !== u && u !== t.type || (e(this).hasClass(s + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())), "" === u && (u = t.type), g.setToClearWatchedEvent()
					})
				},
				update: function(e) {
					"play" === e ? a.pausePlay.removeClass(s + "pause").addClass(s + "play").html(a.vars.playText) : a.pausePlay.removeClass(s + "play").addClass(s + "pause").html(a.vars.pauseText)
				}
			},
			touch: function() {
				function e(e) {
					e.stopPropagation(), a.animating ? e.preventDefault() : (a.pause(), n._gesture.addPointer(e.pointerId), C = 0, c = d ? a.h : a.w, m = Number(new Date), l = f && p && a.animatingTo === a.last ? 0 : f && p ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : f && a.currentSlide === a.last ? a.limit : f ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : p ? (a.last - a.currentSlide + a.cloneOffset) * c : (a.currentSlide + a.cloneOffset) * c)
				}
				function t(e) {
					e.stopPropagation();
					var t = e.target._slider;
					if (t) {
						var i = -e.translationX,
							a = -e.translationY;
						return C += d ? a : i, u = C, b = d ? Math.abs(C) < Math.abs(-i) : Math.abs(C) < Math.abs(-a), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
							n._gesture.stop()
						}) : void((!b || Number(new Date) - m > 500) && (e.preventDefault(), !h && t.transitions && (t.vars.animationLoop || (u = C / (0 === t.currentSlide && C < 0 || t.currentSlide === t.last && C > 0 ? Math.abs(C) / c + 2 : 1)), t.setProps(l + u, "setTouch"))))
					}
				}
				function i(e) {
					e.stopPropagation();
					var t = e.target._slider;
					if (t) {
						if (t.animatingTo === t.currentSlide && !b && null !== u) {
							var n = p ? -u : u,
								i = n > 0 ? t.getTarget("next") : t.getTarget("prev");
							t.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(n) > 50 || Math.abs(n) > c / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : h || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
						}
						r = null, s = null, u = null, l = null, C = 0
					}
				}
				var r, s, l, c, u, m, g, v, y, b = !1,
					w = 0,
					_ = 0,
					C = 0;
				o ? (n.style.msTouchAction = "none", n._gesture = new MSGesture, n._gesture.target = n, n.addEventListener("MSPointerDown", e, !1), n._slider = a, n.addEventListener("MSGestureChange", t, !1), n.addEventListener("MSGestureEnd", i, !1)) : (g = function(e) {
					a.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (a.pause(), c = d ? a.h : a.w, m = Number(new Date), w = e.touches[0].pageX, _ = e.touches[0].pageY, l = f && p && a.animatingTo === a.last ? 0 : f && p ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : f && a.currentSlide === a.last ? a.limit : f ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : p ? (a.last - a.currentSlide + a.cloneOffset) * c : (a.currentSlide + a.cloneOffset) * c, r = d ? _ : w, s = d ? w : _, n.addEventListener("touchmove", v, !1), n.addEventListener("touchend", y, !1))
				}, v = function(e) {
					w = e.touches[0].pageX, _ = e.touches[0].pageY, u = d ? r - _ : r - w, b = d ? Math.abs(u) < Math.abs(w - s) : Math.abs(u) < Math.abs(_ - s);
					var t = 500;
					(!b || Number(new Date) - m > t) && (e.preventDefault(), !h && a.transitions && (a.vars.animationLoop || (u /= 0 === a.currentSlide && u < 0 || a.currentSlide === a.last && u > 0 ? Math.abs(u) / c + 2 : 1), a.setProps(l + u, "setTouch")))
				}, y = function(e) {
					if (n.removeEventListener("touchmove", v, !1), a.animatingTo === a.currentSlide && !b && null !== u) {
						var t = p ? -u : u,
							i = t > 0 ? a.getTarget("next") : a.getTarget("prev");
						a.canAdvance(i) && (Number(new Date) - m < 550 && Math.abs(t) > 50 || Math.abs(t) > c / 2) ? a.flexAnimate(i, a.vars.pauseOnAction) : h || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
					}
					n.removeEventListener("touchend", y, !1), r = null, s = null, u = null, l = null
				}, n.addEventListener("touchstart", g, !1))
			},
			resize: function() {
				!a.animating && a.is(":visible") && (f || a.doMath(), h ? g.smoothHeight() : f ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : d ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && g.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
			},
			smoothHeight: function(e) {
				if (!d || h) {
					var t = h ? a : a.viewport;
					e ? t.animate({
						height: a.slides.eq(a.animatingTo).height()
					}, e) : t.height(a.slides.eq(a.animatingTo).height())
				}
			},
			sync: function(t) {
				var n = e(a.vars.sync).data("flexslider"),
					i = a.animatingTo;
				switch (t) {
				case "animate":
					n.flexAnimate(i, a.vars.pauseOnAction, !1, !0);
					break;
				case "play":
					n.playing || n.asNav || n.play();
					break;
				case "pause":
					n.pause()
				}
			},
			uniqueID: function(t) {
				return t.filter("[id]").add(t.find("[id]")).each(function() {
					var t = e(this);
					t.attr("id", t.attr("id") + "_clone")
				}), t
			},
			pauseInvisible: {
				visProp: null,
				init: function() {
					var e = g.pauseInvisible.getHiddenProp();
					if (e) {
						var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(t, function() {
							g.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : a.vars.initDelay > 0 ? setTimeout(a.play, a.vars.initDelay) : a.play()
						})
					}
				},
				isHidden: function() {
					var e = g.pauseInvisible.getHiddenProp();
					return !!e && document[e]
				},
				getHiddenProp: function() {
					var e = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
					return null
				}
			},
			setToClearWatchedEvent: function() {
				clearTimeout(r), r = setTimeout(function() {
					u = ""
				}, 3e3)
			}
		}, a.flexAnimate = function(t, n, i, r, o) {
			if (a.vars.animationLoop || t === a.currentSlide || (a.direction = t > a.currentSlide ? "next" : "prev"), m && 1 === a.pagingCount && (a.direction = a.currentItem < t ? "next" : "prev"), !a.animating && (a.canAdvance(t, o) || i) && a.is(":visible")) {
				if (m && r) {
					var c = e(a.vars.asNavFor).data("flexslider");
					if (a.atEnd = 0 === t || t === a.count - 1, c.flexAnimate(t, !0, !1, !0, o), a.direction = a.currentItem < t ? "next" : "prev", c.direction = a.direction, Math.ceil((t + 1) / a.visible) - 1 === a.currentSlide || 0 === t) return a.currentItem = t, a.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
					a.currentItem = t, a.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / a.visible)
				}
				if (a.animating = !0, a.animatingTo = t, n && a.pause(), a.vars.before(a), a.syncExists && !o && g.sync("animate"), a.vars.controlNav && g.controlNav.active(), f || a.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), a.atEnd = 0 === t || t === a.last, a.vars.directionNav && g.directionNav.update(), t === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), h) l ? (a.slides.eq(a.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), a.slides.eq(t).css({
					opacity: 1,
					zIndex: 2
				}), a.wrapup(b)) : (a.slides.eq(a.currentSlide).css({
					zIndex: 1
				}).animate({
					opacity: 0
				}, a.vars.animationSpeed, a.vars.easing), a.slides.eq(t).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, a.vars.animationSpeed, a.vars.easing, a.wrapup));
				else {
					var u, v, y, b = d ? a.slides.filter(":first").height() : a.computedW;
					f ? (u = a.vars.itemMargin, y = (a.itemW + u) * a.move * a.animatingTo, v = y > a.limit && 1 !== a.visible ? a.limit : y) : v = 0 === a.currentSlide && t === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? p ? (a.count + a.cloneOffset) * b : 0 : a.currentSlide === a.last && 0 === t && a.vars.animationLoop && "prev" !== a.direction ? p ? 0 : (a.count + 1) * b : p ? (a.count - 1 - t + a.cloneOffset) * b : (t + a.cloneOffset) * b, a.setProps(v, "", a.vars.animationSpeed), a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function() {
						clearTimeout(a.ensureAnimationEnd), a.wrapup(b)
					}), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function() {
						a.wrapup(b)
					}, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() {
						a.wrapup(b)
					})
				}
				a.vars.smoothHeight && g.smoothHeight(a.vars.animationSpeed)
			}
		}, a.wrapup = function(e) {
			h || f || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(e, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(e, "jumpStart")), a.animating = !1, a.currentSlide = a.animatingTo, a.vars.after(a)
		}, a.animateSlides = function() {
			!a.animating && t && a.flexAnimate(a.getTarget("next"))
		}, a.pause = function() {
			clearInterval(a.animatedSlides), a.animatedSlides = null, a.playing = !1, a.vars.pausePlay && g.pausePlay.update("play"), a.syncExists && g.sync("pause")
		}, a.play = function() {
			a.playing && clearInterval(a.animatedSlides), a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed), a.started = a.playing = !0, a.vars.pausePlay && g.pausePlay.update("pause"), a.syncExists && g.sync("play")
		}, a.stop = function() {
			a.pause(), a.stopped = !0
		}, a.canAdvance = function(e, t) {
			var n = m ? a.pagingCount - 1 : a.last;
			return !!t || (!(!m || a.currentItem !== a.count - 1 || 0 !== e || "prev" !== a.direction) || (!m || 0 !== a.currentItem || e !== a.pagingCount - 1 || "next" === a.direction) && (!(e === a.currentSlide && !m) && ( !! a.vars.animationLoop || (!a.atEnd || 0 !== a.currentSlide || e !== n || "next" === a.direction) && (!a.atEnd || a.currentSlide !== n || 0 !== e || "next" !== a.direction))))
		}, a.getTarget = function(e) {
			return a.direction = e, "next" === e ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
		}, a.setProps = function(e, t, n) {
			var i = function() {
					var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo,
						i = function() {
							if (f) return "setTouch" === t ? e : p && a.animatingTo === a.last ? 0 : p ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n;
							switch (t) {
							case "setTotal":
								return p ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;
							case "setTouch":
								return p ? e : e;
							case "jumpEnd":
								return p ? e : a.count * e;
							case "jumpStart":
								return p ? a.count * e : e;
							default:
								return e
							}
						}();
					return i * -1 + "px"
				}();
			a.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", n), a.container.css("transition-duration", n)), a.args[a.prop] = i, (a.transitions || void 0 === n) && a.container.css(a.args), a.container.css("transform", i)
		}, a.setup = function(t) {
			if (h) a.slides.css({
				width: "100%",
				"float": "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === t && (l ? a.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease",
				zIndex: 1
			}).eq(a.currentSlide).css({
				opacity: 1,
				zIndex: 2
			}) : 0 == a.vars.fadeFirstSlide ? a.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(a.currentSlide).css({
				zIndex: 2
			}).css({
				opacity: 1
			}) : a.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(a.currentSlide).css({
				zIndex: 2
			}).animate({
				opacity: 1
			}, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && g.smoothHeight();
			else {
				var n, i;
				"init" === t && (a.viewport = e('<div class="' + s + 'viewport"></div>').css({
					overflow: "hidden",
					position: "relative"
				}).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, p && (i = e.makeArray(a.slides).reverse(), a.slides = e(i), a.container.empty().append(a.slides))), a.vars.animationLoop && !f && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== t && a.container.find(".clone").remove(), a.container.append(g.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), a.newSlides = e(a.vars.selector, a), n = p ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset, d && !f ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
					a.newSlides.css({
						display: "block"
					}), a.doMath(), a.viewport.height(a.h), a.setProps(n * a.h, "init")
				}, "init" === t ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(n * a.computedW, "init"), setTimeout(function() {
					a.doMath(), a.newSlides.css({
						width: a.computedW,
						marginRight: a.computedM,
						"float": "left",
						display: "block"
					}), a.vars.smoothHeight && g.smoothHeight()
				}, "init" === t ? 100 : 0))
			}
			f || a.slides.removeClass(s + "active-slide").eq(a.currentSlide).addClass(s + "active-slide"), a.vars.init(a)
		}, a.doMath = function() {
			var e = a.slides.first(),
				t = a.vars.itemMargin,
				n = a.vars.minItems,
				i = a.vars.maxItems;
			a.w = void 0 === a.viewport ? a.width() : a.viewport.width(), a.h = e.height(), a.boxPadding = e.outerWidth() - e.width(), f ? (a.itemT = a.vars.itemWidth + t, a.itemM = t, a.minW = n ? n * a.itemT : a.w, a.maxW = i ? i * a.itemT - t : a.w, a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t) : (a.itemW = a.w, a.itemM = t, a.pagingCount = a.count, a.last = a.count - 1), a.computedW = a.itemW - a.boxPadding, a.computedM = a.itemM
		}, a.update = function(e, t) {
			a.doMath(), f || (e < a.currentSlide ? a.currentSlide += 1 : e <= a.currentSlide && 0 !== e && (a.currentSlide -= 1), a.animatingTo = a.currentSlide), a.vars.controlNav && !a.manualControls && ("add" === t && !f || a.pagingCount > a.controlNav.length ? g.controlNav.update("add") : ("remove" === t && !f || a.pagingCount < a.controlNav.length) && (f && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), g.controlNav.update("remove", a.last))), a.vars.directionNav && g.directionNav.update()
		}, a.addSlide = function(t, n) {
			var i = e(t);
			a.count += 1, a.last = a.count - 1, d && p ? void 0 !== n ? a.slides.eq(a.count - n).after(i) : a.container.prepend(i) : void 0 !== n ? a.slides.eq(n).before(i) : a.container.append(i), a.update(n, "add"), a.slides = e(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.added(a)
		}, a.removeSlide = function(t) {
			var n = isNaN(t) ? a.slides.index(e(t)) : t;
			a.count -= 1, a.last = a.count - 1, isNaN(t) ? e(t, a.slides).remove() : d && p ? a.slides.eq(a.last).remove() : a.slides.eq(t).remove(), a.doMath(), a.update(n, "remove"), a.slides = e(a.vars.selector + ":not(.clone)", a), a.setup(), a.vars.removed(a)
		}, g.init()
	}, e(window).blur(function(e) {
		t = !1
	}).focus(function(e) {
		t = !0
	}), e.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		fadeFirstSlide: !0,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		customDirectionNav: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function() {},
		before: function() {},
		after: function() {},
		end: function() {},
		added: function() {},
		removed: function() {},
		init: function() {}
	}, e.fn.flexslider = function(t) {
		if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
			var n = e(this),
				i = t.selector ? t.selector : ".slides > li",
				a = n.find(i);
			1 === a.length && t.allowOneSlide === !0 || 0 === a.length ? (a.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
		});
		var n = e(this).data("flexslider");
		switch (t) {
		case "play":
			n.play();
			break;
		case "pause":
			n.pause();
			break;
		case "stop":
			n.stop();
			break;
		case "next":
			n.flexAnimate(n.getTarget("next"), !0);
			break;
		case "prev":
		case "previous":
			n.flexAnimate(n.getTarget("prev"), !0);
			break;
		default:
			"number" == typeof t && n.flexAnimate(t, !0)
		}
	}
}(jQuery), function(e) {
	var t = -1,
		n = -1,
		i = function(t) {
			var n = null,
				i = [];
			return e(t).each(function() {
				var t = e(this),
					r = t.offset().top - a(t.css("margin-top")),
					s = 0 < i.length ? i[i.length - 1] : null;
				null === s ? i.push(t) : 1 >= Math.floor(Math.abs(n - r)) ? i[i.length - 1] = s.add(t) : i.push(t), n = r
			}), i
		},
		a = function(e) {
			return parseFloat(e) || 0
		},
		r = function(t) {
			var n = {
				byRow: !0,
				remove: !1,
				property: "height"
			};
			return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
		},
		s = e.fn.matchHeight = function(t) {
			if (t = r(t), t.remove) {
				var n = this;
				return this.css(t.property, ""), e.each(s._groups, function(e, t) {
					t.elements = t.elements.not(n)
				}), this
			}
			return 1 >= this.length ? this : (s._groups.push({
				elements: this,
				options: t
			}), s._apply(this, t), this)
		};
	s._groups = [], s._throttle = 80, s._maintainScroll = !1, s._beforeUpdate = null, s._afterUpdate = null, s._apply = function(t, n) {
		var o = r(n),
			l = e(t),
			c = [l],
			u = e(window).scrollTop(),
			d = e("html").outerHeight(!0),
			p = l.parents().filter(":hidden");
		return p.each(function() {
			var t = e(this);
			t.data("style-cache", t.attr("style"))
		}), p.css("display", "block"), o.byRow && (l.each(function() {
			var t = e(this),
				n = "inline-block" === t.css("display") ? "inline-block" : "block";
			t.data("style-cache", t.attr("style")), t.css({
				display: n,
				"padding-top": "0",
				"padding-bottom": "0",
				"margin-top": "0",
				"margin-bottom": "0",
				"border-top-width": "0",
				"border-bottom-width": "0",
				height: "100px"
			})
		}), c = i(l), l.each(function() {
			var t = e(this);
			t.attr("style", t.data("style-cache") || "")
		})), e.each(c, function(t, n) {
			var i = e(n),
				r = 0;
			o.byRow && 1 >= i.length || (i.each(function() {
				var t = e(this),
					n = {
						display: "inline-block" === t.css("display") ? "inline-block" : "block"
					};
				n[o.property] = "", t.css(n), t.outerHeight(!1) > r && (r = t.outerHeight(!1)), t.css("display", "")
			}), i.each(function() {
				var t = e(this),
					n = 0;
				"border-box" !== t.css("box-sizing") && (n += a(t.css("border-top-width")) + a(t.css("border-bottom-width")), n += a(t.css("padding-top")) + a(t.css("padding-bottom"))), t.css(o.property, r - n)
			}))
		}), p.each(function() {
			var t = e(this);
			t.attr("style", t.data("style-cache") || null)
		}), s._maintainScroll && e(window).scrollTop(u / d * e("html").outerHeight(!0)), this
	}, s._applyDataApi = function() {
		var t = {};
		e("[data-match-height], [data-mh]").each(function() {
			var n = e(this),
				i = n.attr("data-match-height") || n.attr("data-mh");
			t[i] = i in t ? t[i].add(n) : n
		}), e.each(t, function() {
			this.matchHeight(!0)
		})
	};
	var o = function(t) {
			s._beforeUpdate && s._beforeUpdate(t, s._groups), e.each(s._groups, function() {
				s._apply(this.elements, this.options)
			}), s._afterUpdate && s._afterUpdate(t, s._groups)
		};
	s._update = function(i, a) {
		if (a && "resize" === a.type) {
			var r = e(window).width();
			if (r === t) return;
			t = r
		}
		i ? -1 === n && (n = setTimeout(function() {
			o(a), n = -1
		}, s._throttle)) : o(a)
	}, e(s._applyDataApi), e(window).bind("load", function(e) {
		s._update(!1, e)
	}), e(window).bind("resize orientationchange", function(e) {
		s._update(!0, e)
	})
}(jQuery), function(e, t) {
	var n = "select",
		i = ".form__select",
		a = {
			select: "form__customselect",
			text: "form__label",
			btn: "form__customselect__dropdown"
		};
	t.fn[n] = function() {
		return this.each(function() {
			var e = t(this);
			e.parent().addClass(a.select);
			if (e.css("opacity") >= .001) {
				var n = (e.prev().addClass(a.text), function() {
					return e[0].options[e[0].selectedIndex].text
				}),
					i = t("<span class='" + a.btn + "'>" + n() + "</span>");
				e.before(i).bind("change", function() {
					var t = n();
					i.html(t), e.val() ? i.addClass("is-filled") : i.removeClass("is-filled")
				}).bind("focus", function() {
					i.addClass("pulldown__focus")
				}).bind("blur", function() {
					i.removeClass("pulldown__focus")
				})
			} else e.css("opacity", "1")
		})
	}, t(function() {
		t(i)[n]()
	})
}(this, jQuery), !
function(e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
	var t = "waitForImages";
	e.waitForImages = {
		hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage", "cursor"],
		hasImageAttributes: ["srcset"]
	}, e.expr[":"]["has-src"] = function(t) {
		return e(t).is('img[src][src!=""]')
	}, e.expr[":"].uncached = function(t) {
		return !!e(t).is(":has-src") && !t.complete
	}, e.fn.waitForImages = function() {
		var n, i, a, r = 0,
			s = 0,
			o = e.Deferred();
		if (e.isPlainObject(arguments[0]) ? (a = arguments[0].waitForAll, i = arguments[0].each, n = arguments[0].finished) : 1 === arguments.length && "boolean" === e.type(arguments[0]) ? a = arguments[0] : (n = arguments[0], i = arguments[1], a = arguments[2]), n = n || e.noop, i = i || e.noop, a = !! a, !e.isFunction(n) || !e.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
		return this.each(function() {
			var l = e(this),
				c = [],
				u = e.waitForImages.hasImageProperties || [],
				d = e.waitForImages.hasImageAttributes || [],
				p = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
			a ? l.find("*").addBack().each(function() {
				var t = e(this);
				t.is("img:has-src") && c.push({
					src: t.attr("src"),
					element: t[0]
				}), e.each(u, function(e, n) {
					var i, a = t.css(n);
					if (!a) return !0;
					for (; i = p.exec(a);) c.push({
						src: i[2],
						element: t[0]
					})
				}), e.each(d, function(n, i) {
					var a, r = t.attr(i);
					return !r || (a = r.split(","), void e.each(a, function(n, i) {
						i = e.trim(i).split(" ")[0], c.push({
							src: i,
							element: t[0]
						})
					}))
				})
			}) : l.find("img:has-src").each(function() {
				c.push({
					src: this.src,
					element: this
				})
			}), r = c.length, s = 0, 0 === r && (n.call(l[0]), o.resolveWith(l[0])), e.each(c, function(a, c) {
				var u = new Image,
					d = "load." + t + " error." + t;
				e(u).one(d, function p(t) {
					var a = [s, r, "load" == t.type];
					return s++, i.apply(c.element, a), o.notifyWith(c.element, a), e(this).off(d, p), s == r ? (n.call(l[0]), o.resolveWith(l[0]), !1) : void 0
				}), u.src = c.src
			})
		}), o.promise()
	}
}), window.Modernizr = function(e, t, n) {
	function i(e) {
		y.cssText = e
	}
	function a(e, t) {
		return typeof e === t
	}
	function r(e, t) {
		return !!~ ("" + e).indexOf(t)
	}
	function s(e, t) {
		for (var i in e) {
			var a = e[i];
			if (!r(a, "-") && y[a] !== n) return "pfx" != t || a
		}
		return !1
	}
	function o(e, t, i) {
		for (var r in e) {
			var s = t[e[r]];
			if (s !== n) return i === !1 ? e[r] : a(s, "function") ? s.bind(i || t) : s
		}
		return !1
	}
	function l(e, t, n) {
		var i = e.charAt(0).toUpperCase() + e.slice(1),
			r = (e + " " + w.join(i + " ") + i).split(" ");
		return a(t, "string") || a(t, "undefined") ? s(r, t) : (r = (e + " " + _.join(i + " ") + i).split(" "), o(r, t, n))
	}
	var c, u, d, p = "2.8.3",
		f = {},
		h = !0,
		m = t.documentElement,
		g = "modernizr",
		v = t.createElement(g),
		y = v.style,
		b = ({}.toString, "Webkit Moz O ms"),
		w = b.split(" "),
		_ = b.toLowerCase().split(" "),
		C = {
			svg: "http://www.w3.org/2000/svg"
		},
		x = {},
		$ = [],
		k = $.slice,
		E = function(e, n, i, a) {
			var r, s, o, l, c = t.createElement("div"),
				u = t.body,
				d = u || t.createElement("body");
			if (parseInt(i, 10)) for (; i--;) o = t.createElement("div"), o.id = a ? a[i] : g + (i + 1), c.appendChild(o);
			return r = ["&#173;", '<style id="s', g, '">', e, "</style>"].join(""), c.id = g, (u ? c : d).innerHTML += r, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), s = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), m.style.overflow = l), !! s
		},
		S = function(t) {
			var n = e.matchMedia || e.msMatchMedia;
			if (n) return n(t) && n(t).matches || !1;
			var i;
			return E("@media " + t + " { #" + g + " { position: absolute; } }", function(t) {
				i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
			}), i
		},
		F = {}.hasOwnProperty;
	d = a(F, "undefined") || a(F.call, "undefined") ?
	function(e, t) {
		return t in e && a(e.constructor.prototype[t], "undefined")
	} : function(e, t) {
		return F.call(e, t)
	}, Function.prototype.bind || (Function.prototype.bind = function(e) {
		var t = this;
		if ("function" != typeof t) throw new TypeError;
		var n = k.call(arguments, 1),
			i = function() {
				if (this instanceof i) {
					var a = function() {};
					a.prototype = t.prototype;
					var r = new a,
						s = t.apply(r, n.concat(k.call(arguments)));
					return Object(s) === s ? s : r
				}
				return t.apply(e, n.concat(k.call(arguments)))
			};
		return i
	}), x.multiplebgs = function() {
		return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
	}, x.cssanimations = function() {
		return l("animationName")
	}, x.csstransitions = function() {
		return l("transition")
	}, x.svg = function() {
		return !!t.createElementNS && !! t.createElementNS(C.svg, "svg").createSVGRect
	};
	for (var T in x) d(x, T) && (u = T.toLowerCase(), f[u] = x[T](), $.push((f[u] ? "" : "no-") + u));
	return f.addTest = function(e, t) {
		if ("object" == typeof e) for (var i in e) d(e, i) && f.addTest(i, e[i]);
		else {
			if (e = e.toLowerCase(), f[e] !== n) return f;
			t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (m.className += " " + (t ? "" : "no-") + e), f[e] = t
		}
		return f
	}, i(""), v = c = null, function(e, t) {
		function n(e, t) {
			var n = e.createElement("p"),
				i = e.getElementsByTagName("head")[0] || e.documentElement;
			return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
		}
		function i() {
			var e = y.elements;
			return "string" == typeof e ? e.split(" ") : e
		}
		function a(e) {
			var t = v[e[m]];
			return t || (t = {}, g++, e[m] = g, v[g] = t), t
		}
		function r(e, n, i) {
			if (n || (n = t), u) return n.createElement(e);
			i || (i = a(n));
			var r;
			return r = i.cache[e] ? i.cache[e].cloneNode() : h.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !r.canHaveChildren || f.test(e) || r.tagUrn ? r : i.frag.appendChild(r)
		}
		function s(e, n) {
			if (e || (e = t), u) return e.createDocumentFragment();
			n = n || a(e);
			for (var r = n.frag.cloneNode(), s = 0, o = i(), l = o.length; s < l; s++) r.createElement(o[s]);
			return r
		}
		function o(e, t) {
			t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
				return y.shivMethods ? r(n, e, t) : t.createElem(n)
			}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
				return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
			}) + ");return n}")(y, t.frag)
		}
		function l(e) {
			e || (e = t);
			var i = a(e);
			return y.shivCSS && !c && !i.hasCSS && (i.hasCSS = !! n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || o(e, i), e
		}
		var c, u, d = "3.7.0",
			p = e.html5 || {},
			f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
			h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
			m = "_html5shiv",
			g = 0,
			v = {};
		!
		function() {
			try {
				var e = t.createElement("a");
				e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length ||
				function() {
					t.createElement("a");
					var e = t.createDocumentFragment();
					return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
				}()
			} catch (n) {
				c = !0, u = !0
			}
		}();
		var y = {
			elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
			version: d,
			shivCSS: p.shivCSS !== !1,
			supportsUnknownElements: u,
			shivMethods: p.shivMethods !== !1,
			type: "default",
			shivDocument: l,
			createElement: r,
			createDocumentFragment: s
		};
		e.html5 = y, l(t)
	}(this, t), f._version = p, f._domPrefixes = _, f._cssomPrefixes = w, f.mq = S, f.testProp = function(e) {
		return s([e])
	}, f.testAllProps = l, f.testStyles = E, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), f
}(this, this.document);
var _slice = Array.prototype.slice;
!
function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function(e) {
	"use strict";

	function t(e, t) {
		return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() {
			var n = Array.prototype.slice.call(arguments, 0);
			n.unshift(this), e.apply(t || j, n)
		}), e.parsleyAdaptedCallback
	}
	function n(e) {
		return 0 === e.lastIndexOf(M, 0) ? e.substr(M.length) : e
	}
	var i = 1,
		a = {},
		r = {
			attr: function(e, t, n) {
				var i, a, r, s = new RegExp("^" + t, "i");
				if ("undefined" == typeof n) n = {};
				else for (i in n) n.hasOwnProperty(i) && delete n[i];
				if ("undefined" == typeof e || "undefined" == typeof e[0]) return n;
				for (r = e[0].attributes, i = r.length; i--;) a = r[i], a && a.specified && s.test(a.name) && (n[this.camelize(a.name.slice(t.length))] = this.deserializeValue(a.value));
				return n
			},
			checkAttr: function(e, t, n) {
				return e.is("[" + t + n + "]")
			},
			setAttr: function(e, t, n, i) {
				e[0].setAttribute(this.dasherize(t + n), String(i))
			},
			generateID: function() {
				return "" + i++
			},
			deserializeValue: function(t) {
				var n;
				try {
					return t ? "true" == t || "false" != t && ("null" == t ? null : isNaN(n = Number(t)) ? /^[\[\{]/.test(t) ? e.parseJSON(t) : t : n) : t
				} catch (i) {
					return t
				}
			},
			camelize: function(e) {
				return e.replace(/-+(.)?/g, function(e, t) {
					return t ? t.toUpperCase() : ""
				})
			},
			dasherize: function(e) {
				return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			},
			warn: function() {
				var e;
				window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
			},
			warnOnce: function(e) {
				a[e] || (a[e] = !0, this.warn.apply(this, arguments))
			},
			_resetWarnings: function() {
				a = {}
			},
			trimString: function(e) {
				return e.replace(/^\s+|\s+$/g, "")
			},
			namespaceEvents: function(t, n) {
				return t = this.trimString(t || "").split(/\s+/), t[0] ? e.map(t, function(e) {
					return e + "." + n
				}).join(" ") : ""
			},
			objectCreate: Object.create ||
			function() {
				var e = function() {};
				return function(t) {
					if (arguments.length > 1) throw Error("Second argument not supported");
					if ("object" != typeof t) throw TypeError("Argument must be an object");
					e.prototype = t;
					var n = new e;
					return e.prototype = null, n
				}
			}()
		},
		s = r,
		o = {
			namespace: "data-parsley-",
			inputs: "input, textarea, select",
			excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
			priorityEnabled: !0,
			multiple: null,
			group: null,
			uiEnabled: !0,
			validationThreshold: 3,
			focus: "first",
			trigger: !1,
			triggerAfterFailure: "input",
			errorClass: "parsley-error",
			successClass: "parsley-success",
			classHandler: function(e) {},
			errorsContainer: function(e) {},
			errorsWrapper: '<ul class="parsley-errors-list"></ul>',
			errorTemplate: "<li></li>"
		},
		l = function() {};
	l.prototype = {
		asyncSupport: !0,
		actualizeOptions: function() {
			return s.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
		},
		_resetOptions: function(e) {
			this.domOptions = s.objectCreate(this.parent.options), this.options = s.objectCreate(this.domOptions);
			for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
			this.actualizeOptions()
		},
		_listeners: null,
		on: function(e, t) {
			this._listeners = this._listeners || {};
			var n = this._listeners[e] = this._listeners[e] || [];
			return n.push(t), this
		},
		subscribe: function(t, n) {
			e.listenTo(this, t.toLowerCase(), n)
		},
		off: function(e, t) {
			var n = this._listeners && this._listeners[e];
			if (n) if (t) for (var i = n.length; i--;) n[i] === t && n.splice(i, 1);
			else delete this._listeners[e];
			return this
		},
		unsubscribe: function(t, n) {
			e.unsubscribeTo(this, t.toLowerCase())
		},
		trigger: function(e, t, n) {
			t = t || this;
			var i, a = this._listeners && this._listeners[e];
			if (a) for (var r = a.length; r--;) if (i = a[r].call(t, t, n), i === !1) return i;
			return !this.parent || this.parent.trigger(e, t, n)
		},
		reset: function() {
			if ("ParsleyForm" !== this.__class__) return this._resetUI(), this._trigger("reset");
			for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
			this._trigger("reset")
		},
		destroy: function() {
			if (this._destroyUI(), "ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
			for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
			this.$element.removeData("Parsley"), this._trigger("destroy")
		},
		asyncIsValid: function(e, t) {
			return s.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
				group: e,
				force: t
			})
		},
		_findRelated: function() {
			return this.options.multiple ? this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]') : this.$element
		}
	};
	var c = {
		string: function(e) {
			return e
		},
		integer: function(e) {
			if (isNaN(e)) throw 'Requirement is not an integer: "' + e + '"';
			return parseInt(e, 10)
		},
		number: function(e) {
			if (isNaN(e)) throw 'Requirement is not a number: "' + e + '"';
			return parseFloat(e)
		},
		reference: function(t) {
			var n = e(t);
			if (0 === n.length) throw 'No such reference: "' + t + '"';
			return n
		},
		"boolean": function(e) {
			return "false" !== e
		},
		object: function(e) {
			return s.deserializeValue(e)
		},
		regexp: function(e) {
			var t = "";
			return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$", new RegExp(e, t)
		}
	},
		u = function(e, t) {
			var n = e.match(/^\s*\[(.*)\]\s*$/);
			if (!n) throw 'Requirement is not an array: "' + e + '"';
			var i = n[1].split(",").map(s.trimString);
			if (i.length !== t) throw "Requirement has " + i.length + " values when " + t + " are needed";
			return i
		},
		d = function(e, t) {
			var n = c[e || "string"];
			if (!n) throw 'Unknown requirement specification: "' + e + '"';
			return n(t)
		},
		p = function(e, t, n) {
			var i = null,
				a = {};
			for (var r in e) if (r) {
				var s = n(r);
				"string" == typeof s && (s = d(e[r], s)), a[r] = s
			} else i = d(e[r], t);
			return [i, a]
		},
		f = function(t) {
			e.extend(!0, this, t)
		};
	f.prototype = {
		validate: function(t, n) {
			if (this.fn) return arguments.length > 3 && (n = [].slice.call(arguments, 1, -1)), this.fn.call(this, t, n);
			if (e.isArray(t)) {
				if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
				return this.validateMultiple.apply(this, arguments)
			}
			if (this.validateNumber) return !isNaN(t) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
			if (this.validateString) return this.validateString.apply(this, arguments);
			throw "Validator `" + this.name + "` only handles multiple values"
		},
		parseRequirements: function(t, n) {
			if ("string" != typeof t) return e.isArray(t) ? t : [t];
			var i = this.requirementType;
			if (e.isArray(i)) {
				for (var a = u(t, i.length), r = 0; r < a.length; r++) a[r] = d(i[r], a[r]);
				return a
			}
			return e.isPlainObject(i) ? p(i, t, n) : [d(i, t)]
		},
		requirementType: "string",
		priority: 2
	};
	var h = function(e, t) {
			this.__class__ = "ParsleyValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
		},
		m = {
			email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
			number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
			integer: /^-?\d+$/,
			digits: /^\d+$/,
			alphanum: /^\w+$/i,
			url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
		};
	m.range = m.number;
	var g = function(e) {
			var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
			return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
		};
	h.prototype = {
		init: function(t, n) {
			this.catalog = n, this.validators = e.extend({}, this.validators);
			for (var i in t) this.addValidator(i, t[i].fn, t[i].priority);
			window.Parsley.trigger("parsley:validator:init")
		},
		setLocale: function(e) {
			if ("undefined" == typeof this.catalog[e]) throw new Error(e + " is not available in the catalog");
			return this.locale = e, this
		},
		addCatalog: function(e, t, n) {
			return "object" == typeof t && (this.catalog[e] = t), !0 === n ? this.setLocale(e) : this
		},
		addMessage: function(e, t, n) {
			return "undefined" == typeof this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = n, this
		},
		addMessages: function(e, t) {
			for (var n in t) this.addMessage(e, n, t[n]);
			return this
		},
		addValidator: function(e, t, n) {
			if (this.validators[e]) s.warn('Validator "' + e + '" is already defined.');
			else if (o.hasOwnProperty(e)) return void s.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
			return this._setValidator.apply(this, arguments)
		},
		updateValidator: function(e, t, n) {
			return this.validators[e] ? this._setValidator(this, arguments) : (s.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
		},
		removeValidator: function(e) {
			return this.validators[e] || s.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
		},
		_setValidator: function(e, t, n) {
			"object" != typeof t && (t = {
				fn: t,
				priority: n
			}), t.validate || (t = new f(t)), this.validators[e] = t;
			for (var i in t.messages || {}) this.addMessage(i, e, t.messages[i]);
			return this
		},
		getErrorMessage: function(e) {
			var t;
			if ("type" === e.name) {
				var n = this.catalog[this.locale][e.name] || {};
				t = n[e.requirements]
			} else t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
			return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
		},
		formatMessage: function(e, t) {
			if ("object" == typeof t) {
				for (var n in t) e = this.formatMessage(e, t[n]);
				return e
			}
			return "string" == typeof e ? e.replace(/%s/i, t) : ""
		},
		validators: {
			notblank: {
				validateString: function(e) {
					return /\S/.test(e)
				},
				priority: 2
			},
			required: {
				validateMultiple: function(e) {
					return e.length > 0
				},
				validateString: function(e) {
					return /\S/.test(e)
				},
				priority: 512
			},
			type: {
				validateString: function(e, t) {
					var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
						i = n.step,
						a = void 0 === i ? "1" : i,
						r = n.base,
						s = void 0 === r ? 0 : r,
						o = m[t];
					if (!o) throw new Error("validator type `" + t + "` is not supported");
					if (!o.test(e)) return !1;
					if ("number" === t && !/^any$/i.test(a || "")) {
						var l = Number(e),
							c = Math.max(g(a), g(s));
						if (g(l) > c) return !1;
						var u = function(e) {
								return Math.round(e * Math.pow(10, c))
							};
						if ((u(l) - u(s)) % u(a) != 0) return !1
					}
					return !0
				},
				requirementType: {
					"": "string",
					step: "string",
					base: "number"
				},
				priority: 256
			},
			pattern: {
				validateString: function(e, t) {
					return t.test(e)
				},
				requirementType: "regexp",
				priority: 64
			},
			minlength: {
				validateString: function(e, t) {
					return e.length >= t
				},
				requirementType: "integer",
				priority: 30
			},
			maxlength: {
				validateString: function(e, t) {
					return e.length <= t
				},
				requirementType: "integer",
				priority: 30
			},
			length: {
				validateString: function(e, t, n) {
					return e.length >= t && e.length <= n
				},
				requirementType: ["integer", "integer"],
				priority: 30
			},
			mincheck: {
				validateMultiple: function(e, t) {
					return e.length >= t
				},
				requirementType: "integer",
				priority: 30
			},
			maxcheck: {
				validateMultiple: function(e, t) {
					return e.length <= t
				},
				requirementType: "integer",
				priority: 30
			},
			check: {
				validateMultiple: function(e, t, n) {
					return e.length >= t && e.length <= n
				},
				requirementType: ["integer", "integer"],
				priority: 30
			},
			min: {
				validateNumber: function(e, t) {
					return e >= t
				},
				requirementType: "number",
				priority: 30
			},
			max: {
				validateNumber: function(e, t) {
					return e <= t
				},
				requirementType: "number",
				priority: 30
			},
			range: {
				validateNumber: function(e, t, n) {
					return e >= t && e <= n
				},
				requirementType: ["number", "number"],
				priority: 30
			},
			equalto: {
				validateString: function(t, n) {
					var i = e(n);
					return i.length ? t === i.val() : t === n
				},
				priority: 256
			}
		}
	};
	var v = {},
		y = function D(e, t, n) {
			for (var i = [], a = [], r = 0; r < e.length; r++) {
				for (var s = !1, o = 0; o < t.length; o++) if (e[r].assert.name === t[o].assert.name) {
					s = !0;
					break
				}
				s ? a.push(e[r]) : i.push(e[r])
			}
			return {
				kept: a,
				added: i,
				removed: n ? [] : D(t, e, !0).added
			}
		};
	v.Form = {
		_actualizeTriggers: function() {
			var e = this;
			this.$element.on("submit.Parsley", function(t) {
				e.onSubmitValidate(t)
			}), this.$element.on("click.Parsley", 'input[type="submit"], button[type="submit"]', function(t) {
				e.onSubmitButton(t)
			}), !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "")
		},
		focus: function() {
			if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
			for (var e = 0; e < this.fields.length; e++) {
				var t = this.fields[e];
				if (!0 !== t.validationResult && t.validationResult.length > 0 && "undefined" == typeof t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
			}
			return null === this._focusedField ? null : this._focusedField.focus()
		},
		_destroyUI: function() {
			this.$element.off(".Parsley")
		}
	}, v.Field = {
		_reflowUI: function() {
			if (this._buildUI(), this._ui) {
				var e = y(this.validationResult, this._ui.lastValidationResult);
				this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
			}
		},
		getErrorsMessages: function() {
			if (!0 === this.validationResult) return [];
			for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
			return e
		},
		addError: function(e) {
			var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
				n = t.message,
				i = t.assert,
				a = t.updateClass,
				r = void 0 === a || a;
			this._buildUI(), this._addError(e, {
				message: n,
				assert: i
			}), r && this._errorClass()
		},
		updateError: function(e) {
			var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
				n = t.message,
				i = t.assert,
				a = t.updateClass,
				r = void 0 === a || a;
			this._buildUI(), this._updateError(e, {
				message: n,
				assert: i
			}), r && this._errorClass()
		},
		removeError: function(e) {
			var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
				n = t.updateClass,
				i = void 0 === n || n;
			this._buildUI(), this._removeError(e), i && this._manageStatusClass()
		},
		_manageStatusClass: function() {
			this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
		},
		_manageErrorsMessages: function(t) {
			if ("undefined" == typeof this.options.errorsMessagesDisabled) {
				if ("undefined" != typeof this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
				for (var n = 0; n < t.removed.length; n++) this._removeError(t.removed[n].assert.name);
				for (n = 0; n < t.added.length; n++) this._addError(t.added[n].assert.name, {
					message: t.added[n].errorMessage,
					assert: t.added[n].assert
				});
				for (n = 0; n < t.kept.length; n++) this._updateError(t.kept[n].assert.name, {
					message: t.kept[n].errorMessage,
					assert: t.kept[n].assert
				})
			}
		},
		_addError: function(t, n) {
			var i = n.message,
				a = n.assert;
			this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(i || this._getErrorMessage(a)))
		},
		_updateError: function(e, t) {
			var n = t.message,
				i = t.assert;
			this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(n || this._getErrorMessage(i))
		},
		_removeError: function(e) {
			this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
		},
		_getErrorMessage: function(e) {
			var t = e.name + "Message";
			return "undefined" != typeof this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
		},
		_buildUI: function() {
			if (!this._ui && !1 !== this.options.uiEnabled) {
				var t = {};
				this.$element.attr(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t
			}
		},
		_manageClassHandler: function() {
			if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler);
			var t = this.options.classHandler.call(this, this);
			return "undefined" != typeof t && t.length ? t : !this.options.multiple || this.$element.is("select") ? this.$element : this.$element.parent()
		},
		_insertErrorWrapper: function() {
			var t;
			if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
			if ("string" == typeof this.options.errorsContainer) {
				if (e(this.options.errorsContainer).length) return e(this.options.errorsContainer).append(this._ui.$errorsWrapper);
				s.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM")
			} else "function" == typeof this.options.errorsContainer && (t = this.options.errorsContainer.call(this, this));
			if ("undefined" != typeof t && t.length) return t.append(this._ui.$errorsWrapper);
			var n = this.$element;
			return this.options.multiple && (n = n.parent()), n.after(this._ui.$errorsWrapper)
		},
		_actualizeTriggers: function() {
			var e = this,
				t = this._findRelated();
			t.off(".Parsley"), this._failedOnce ? t.on(s.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
				e.validate()
			}) : t.on(s.namespaceEvents(this.options.trigger, "Parsley"), function(t) {
				e._eventValidate(t)
			})
		},
		_eventValidate: function(e) {
			!(!/key|input/.test(e.type) || this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || this.validate()
		},
		_resetUI: function() {
			this._failedOnce = !1, this._actualizeTriggers(), "undefined" != typeof this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
		},
		_destroyUI: function() {
			this._resetUI(), "undefined" != typeof this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
		},
		_successClass: function() {
			this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
		},
		_errorClass: function() {
			this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
		},
		_resetClass: function() {
			this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
		}
	};
	var b = function(t, n, i) {
			this.__class__ = "ParsleyForm", this.__id__ = s.generateID(), this.$element = e(t), this.domOptions = n, this.options = i, this.parent = window.Parsley, this.fields = [], this.validationResult = null
		},
		w = {
			pending: null,
			resolved: !0,
			rejected: !1
		};
	b.prototype = {
		onSubmitValidate: function(e) {
			var t = this;
			if (!0 !== e.parsley) {
				var n = this._$submitSource || this.$element.find('input[type="submit"], button[type="submit"]').first();
				if (this._$submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !n.is("[formnovalidate]")) {
					var i = this.whenValidate({
						event: e
					});
					"resolved" === i.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === i.state() && i.done(function() {
						t._submit(n)
					}))
				}
			}
		},
		onSubmitButton: function(t) {
			this._$submitSource = e(t.target)
		},
		_submit: function(t) {
			if (!1 !== this._trigger("submit")) {
				if (t) {
					var n = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
					0 === n.length && (n = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), n.attr({
						name: t.attr("name"),
						value: t.attr("value")
					})
				}
				this.$element.trigger(e.extend(e.Event("submit"), {
					parsley: !0
				}))
			}
		},
		validate: function(t) {
			if (arguments.length >= 1 && !e.isPlainObject(t)) {
				s.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
				var n = _slice.call(arguments),
					i = n[0],
					a = n[1],
					r = n[2];
				t = {
					group: i,
					force: a,
					event: r
				}
			}
			return w[this.whenValidate(t).state()]
		},
		whenValidate: function() {
			var t = this,
				n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				i = n.group,
				a = n.force,
				r = n.event;
			this.submitEvent = r, r && (this.submitEvent = e.extend({}, r, {
				preventDefault: function() {
					s.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), t.validationResult = !1
				}
			})), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
			var o = this._withoutReactualizingFormOptions(function() {
				return e.map(t.fields, function(e) {
					return e.whenValidate({
						force: a,
						group: i
					})
				})
			}),
				l = function() {
					var n = e.Deferred();
					return !1 === t.validationResult && n.reject(), n.resolve().promise()
				};
			return e.when.apply(e, _toConsumableArray(o)).done(function() {
				t._trigger("success")
			}).fail(function() {
				t.validationResult = !1, t.focus(), t._trigger("error")
			}).always(function() {
				t._trigger("validated")
			}).pipe(l, l)
		},
		isValid: function(t) {
			if (arguments.length >= 1 && !e.isPlainObject(t)) {
				s.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
				var n = _slice.call(arguments),
					i = n[0],
					a = n[1];
				t = {
					group: i,
					force: a
				}
			}
			return w[this.whenValid(t).state()]
		},
		whenValid: function() {
			var t = this,
				n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				i = n.group,
				a = n.force;
			this._refreshFields();
			var r = this._withoutReactualizingFormOptions(function() {
				return e.map(t.fields, function(e) {
					return e.whenValid({
						group: i,
						force: a
					})
				})
			});
			return e.when.apply(e, _toConsumableArray(r))
		},
		_refreshFields: function() {
			return this.actualizeOptions()._bindFields()
		},
		_bindFields: function() {
			var t = this,
				n = this.fields;
			return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
				t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e, n) {
					var i = new window.Parsley.Factory(n, {}, t);
					"ParsleyField" !== i.__class__ && "ParsleyFieldMultiple" !== i.__class__ || !0 === i.options.excluded || "undefined" == typeof t.fieldsMappedById[i.__class__ + "-" + i.__id__] && (t.fieldsMappedById[i.__class__ + "-" + i.__id__] = i, t.fields.push(i))
				}), e(n).not(t.fields).each(function(e, t) {
					t._trigger("reset")
				})
			}), this
		},
		_withoutReactualizingFormOptions: function(e) {
			var t = this.actualizeOptions;
			this.actualizeOptions = function() {
				return this
			};
			var n = e();
			return this.actualizeOptions = t, n
		},
		_trigger: function(e) {
			return this.trigger("form:" + e)
		}
	};
	var _ = function(t, n, i, a, r) {
			if (!/ParsleyField/.test(t.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
			var s = window.Parsley._validatorRegistry.validators[n],
				o = new f(s);
			e.extend(this, {
				validator: o,
				name: n,
				requirements: i,
				priority: a || t.options[n + "Priority"] || o.priority,
				isDomConstraint: !0 === r
			}), this._parseRequirements(t.options)
		},
		C = function(e) {
			var t = e[0].toUpperCase();
			return t + e.slice(1)
		};
	_.prototype = {
		validate: function(e, t) {
			var n = this.requirementList.slice(0);
			return n.unshift(e), n.push(t), this.validator.validate.apply(this.validator, n)
		},
		_parseRequirements: function(e) {
			var t = this;
			this.requirementList = this.validator.parseRequirements(this.requirements, function(n) {
				return e[t.name + C(n)]
			})
		}
	};
	var x = function(t, n, i, a) {
			this.__class__ = "ParsleyField", this.__id__ = s.generateID(), this.$element = e(t), "undefined" != typeof a && (this.parent = a), this.options = i, this.domOptions = n, this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
		},
		$ = {
			pending: null,
			resolved: !0,
			rejected: !1
		};
	x.prototype = {
		validate: function(t) {
			arguments.length >= 1 && !e.isPlainObject(t) && (s.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = {
				options: t
			});
			var n = this.whenValidate(t);
			if (!n) return !0;
			switch (n.state()) {
			case "pending":
				return null;
			case "resolved":
				return !0;
			case "rejected":
				return this.validationResult
			}
		},
		whenValidate: function() {
			var e = this,
				t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				n = t.force,
				i = t.group;
			if (this.refreshConstraints(), !i || this._isInGroup(i)) return this.value = this.getValue(), this._trigger("validate"), this.whenValid({
				force: n,
				value: this.value,
				_refreshed: !0
			}).always(function() {
				e._reflowUI()
			}).done(function() {
				e._trigger("success")
			}).fail(function() {
				e._trigger("error")
			}).always(function() {
				e._trigger("validated")
			})
		},
		hasConstraints: function() {
			return 0 !== this.constraints.length
		},
		needsValidation: function(e) {
			return "undefined" == typeof e && (e = this.getValue()), !(!e.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty)
		},
		_isInGroup: function(t) {
			return e.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t
		},
		isValid: function(t) {
			if (arguments.length >= 1 && !e.isPlainObject(t)) {
				s.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
				var n = _slice.call(arguments),
					i = n[0],
					a = n[1];
				t = {
					force: i,
					value: a
				}
			}
			var r = this.whenValid(t);
			return !r || $[r.state()]
		},
		whenValid: function() {
			var t = this,
				n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				i = n.force,
				a = void 0 !== i && i,
				r = n.value,
				s = n.group,
				o = n._refreshed;
			if (o || this.refreshConstraints(), !s || this._isInGroup(s)) {
				if (this.validationResult = !0, !this.hasConstraints()) return e.when();
				if ("undefined" != typeof r && null !== r || (r = this.getValue()), !this.needsValidation(r) && !0 !== a) return e.when();
				var l = this._getGroupedConstraints(),
					c = [];
				return e.each(l, function(n, i) {
					var a = e.when.apply(e, _toConsumableArray(e.map(i, function(e) {
						return t._validateConstraint(r, e)
					})));
					if (c.push(a), "rejected" === a.state()) return !1
				}), e.when.apply(e, c)
			}
		},
		_validateConstraint: function(t, n) {
			var i = this,
				a = n.validate(t, this);
			return !1 === a && (a = e.Deferred().reject()), e.when(a).fail(function(e) {
				!0 === i.validationResult && (i.validationResult = []), i.validationResult.push({
					assert: n,
					errorMessage: "string" == typeof e && e
				})
			})
		},
		getValue: function() {
			var e;
			return e = "function" == typeof this.options.value ? this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof e || null === e ? "" : this._handleWhitespace(e)
		},
		refreshConstraints: function() {
			return this.actualizeOptions()._bindConstraints()
		},
		addConstraint: function(e, t, n, i) {
			if (window.Parsley._validatorRegistry.validators[e]) {
				var a = new _(this, e, t, n, i);
				"undefined" !== this.constraintsByName[a.name] && this.removeConstraint(a.name), this.constraints.push(a), this.constraintsByName[a.name] = a
			}
			return this
		},
		removeConstraint: function(e) {
			for (var t = 0; t < this.constraints.length; t++) if (e === this.constraints[t].name) {
				this.constraints.splice(t, 1);
				break
			}
			return delete this.constraintsByName[e], this
		},
		updateConstraint: function(e, t, n) {
			return this.removeConstraint(e).addConstraint(e, t, n)
		},
		_bindConstraints: function() {
			for (var e = [], t = {}, n = 0; n < this.constraints.length; n++)!1 === this.constraints[n].isDomConstraint && (e.push(this.constraints[n]), t[this.constraints[n].name] = this.constraints[n]);
			this.constraints = e, this.constraintsByName = t;
			for (var i in this.options) this.addConstraint(i, this.options[i], void 0, !0);
			return this._bindHtml5Constraints()
		},
		_bindHtml5Constraints: function() {
			(this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
			var e = this.$element.attr("type");
			return "undefined" == typeof e ? this : "number" === e ? this.addConstraint("type", ["number",
			{
				step: this.$element.attr("step"),
				base: this.$element.attr("min") || this.$element.attr("value")
			}], void 0, !0) : /^(email|url|range)$/i.test(e) ? this.addConstraint("type", e, void 0, !0) : this
		},
		_isRequired: function() {
			return "undefined" != typeof this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
		},
		_trigger: function(e) {
			return this.trigger("field:" + e)
		},
		_handleWhitespace: function(e) {
			return !0 === this.options.trimValue && s.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = s.trimString(e)), e
		},
		_getGroupedConstraints: function() {
			if (!1 === this.options.priorityEnabled) return [this.constraints];
			for (var e = [], t = {}, n = 0; n < this.constraints.length; n++) {
				var i = this.constraints[n].priority;
				t[i] || e.push(t[i] = []), t[i].push(this.constraints[n])
			}
			return e.sort(function(e, t) {
				return t[0].priority - e[0].priority
			}), e
		}
	};
	var k = x,
		E = function() {
			this.__class__ = "ParsleyFieldMultiple"
		};
	E.prototype = {
		addElement: function(e) {
			return this.$elements.push(e), this
		},
		refreshConstraints: function() {
			var t;
			if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
			for (var n = 0; n < this.$elements.length; n++) if (e("html").has(this.$elements[n]).length) {
				t = this.$elements[n].data("ParsleyFieldMultiple").refreshConstraints().constraints;
				for (var i = 0; i < t.length; i++) this.addConstraint(t[i].name, t[i].requirements, t[i].priority, t[i].isDomConstraint)
			} else this.$elements.splice(n, 1);
			return this
		},
		getValue: function() {
			if ("function" == typeof this.options.value) return this.options.value(this);
			if ("undefined" != typeof this.options.value) return this.options.value;
			if (this.$element.is("input[type=radio]")) return this._findRelated().filter(":checked").val() || "";
			if (this.$element.is("input[type=checkbox]")) {
				var t = [];
				return this._findRelated().filter(":checked").each(function() {
					t.push(e(this).val())
				}), t
			}
			return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
		},
		_init: function() {
			return this.$elements = [this.$element], this
		}
	};
	var S = function(t, n, i) {
			this.$element = e(t);
			var a = this.$element.data("Parsley");
			if (a) return "undefined" != typeof i && a.parent === window.Parsley && (a.parent = i, a._resetOptions(a.options)), a;
			if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
			if ("undefined" != typeof i && "ParsleyForm" !== i.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
			return this.parent = i || window.Parsley, this.init(n)
		};
	S.prototype = {
		init: function(e) {
			return this.__class__ = "Parsley", this.__version__ = "2.3.7", this.__id__ = s.generateID(), this._resetOptions(e), this.$element.is("form") || s.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
		},
		isMultiple: function() {
			return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
		},
		handleMultiple: function() {
			var t, n, i = this;
			if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = t = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
			if (!this.options.multiple) return s.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
			this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof t && e('input[name="' + t + '"]').each(function(t, n) {
				e(n).is("input[type=radio], input[type=checkbox]") && e(n).attr(i.options.namespace + "multiple", i.options.multiple)
			});
			for (var a = this._findRelated(), r = 0; r < a.length; r++) if (n = e(a.get(r)).data("Parsley"), "undefined" != typeof n) {
				this.$element.data("ParsleyFieldMultiple") || n.addElement(this.$element);
				break
			}
			return this.bind("parsleyField", !0), n || this.bind("parsleyFieldMultiple")
		},
		bind: function(t, n) {
			var i;
			switch (t) {
			case "parsleyForm":
				i = e.extend(new b(this.$element, this.domOptions, this.options), window.ParsleyExtend)._bindFields();
				break;
			case "parsleyField":
				i = e.extend(new k(this.$element, this.domOptions, this.options, this.parent), window.ParsleyExtend);
				break;
			case "parsleyFieldMultiple":
				i = e.extend(new k(this.$element, this.domOptions, this.options, this.parent), new E, window.ParsleyExtend)._init();
				break;
			default:
				throw new Error(t + "is not a supported Parsley type")
			}
			return this.options.multiple && s.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof n ? (this.$element.data("ParsleyFieldMultiple", i), i) : (this.$element.data("Parsley", i), i._actualizeTriggers(), i._trigger("init"), i)
		}
	};
	var F = e.fn.jquery.split(".");
	if (parseInt(F[0]) <= 1 && parseInt(F[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
	F.forEach || s.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
	var T = e.extend(new l, {
		$element: e(document),
		actualizeOptions: null,
		_resetOptions: null,
		Factory: S,
		version: "2.3.7"
	});
	e.extend(k.prototype, v.Field, l.prototype), e.extend(b.prototype, v.Form, l.prototype), e.extend(S.prototype, l.prototype), e.fn.parsley = e.fn.psly = function(t) {
		if (this.length > 1) {
			var n = [];
			return this.each(function() {
				n.push(e(this).parsley(t))
			}), n
		}
		return e(this).length ? new S(this, t) : void s.warn("You must bind Parsley on an existing element.")
	}, "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), T.options = e.extend(s.objectCreate(o), window.ParsleyConfig), window.ParsleyConfig = T.options, window.Parsley = window.psly = T, window.ParsleyUtils = s;
	var P = window.Parsley._validatorRegistry = new h(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
	window.ParsleyValidator = {}, e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function(t, n) {
		window.Parsley[n] = e.proxy(P, n), window.ParsleyValidator[n] = function() {
			var e;
			return s.warnOnce("Accessing the method '" + n + "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." + n + "(...)'"), (e = window.Parsley)[n].apply(e, arguments)
		}
	}), window.Parsley.UI = v, window.ParsleyUI = {
		removeError: function(e, t, n) {
			var i = !0 !== n;
			return s.warnOnce("Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
				updateClass: i
			})
		},
		getErrorsMessages: function(e) {
			return s.warnOnce("Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
		}
	}, e.each("addError updateError".split(" "), function(e, t) {
		window.ParsleyUI[t] = function(e, n, i, a, r) {
			var o = !0 !== r;
			return s.warnOnce("Accessing ParsleyUI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](n, {
				message: i,
				assert: a,
				updateClass: o
			})
		}
	}), /firefox|msie/i.test(navigator.userAgent) && e(document).on("change", "select", function(t) {
		e(t.target).trigger("input")
	}), !1 !== window.ParsleyConfig.autoBind && e(function() {
		e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
	});
	var j = e({}),
		I = function() {
			s.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
		},
		M = "parsley:";
	e.listen = function(e, i) {
		var a;
		if (I(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (a = arguments[1], i = arguments[2]), "function" != typeof i) throw new Error("Wrong parameters");
		window.Parsley.on(n(e), t(i, a))
	}, e.listenTo = function(e, i, a) {
		if (I(), !(e instanceof k || e instanceof b)) throw new Error("Must give Parsley instance");
		if ("string" != typeof i || "function" != typeof a) throw new Error("Wrong parameters");
		e.on(n(i), t(a))
	}, e.unsubscribe = function(e, t) {
		if (I(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
		window.Parsley.off(n(e), t.parsleyAdaptedCallback)
	}, e.unsubscribeTo = function(e, t) {
		if (I(), !(e instanceof k || e instanceof b)) throw new Error("Must give Parsley instance");
		e.off(n(t))
	}, e.unsubscribeAll = function(t) {
		I(), window.Parsley.off(n(t)), e("form,input,textarea,select").each(function() {
			var i = e(this).data("Parsley");
			i && i.off(n(t))
		})
	}, e.emit = function(e, t) {
		var i;
		I();
		var a = t instanceof k || t instanceof b,
			r = Array.prototype.slice.call(arguments, a ? 2 : 1);
		r.unshift(n(e)), a || (t = window.Parsley), (i = t).trigger.apply(i, _toConsumableArray(r))
	};
	e.extend(!0, T, {
		asyncValidators: {
			"default": {
				fn: function(e) {
					return e.status >= 200 && e.status < 300
				},
				url: !1
			},
			reverse: {
				fn: function(e) {
					return e.status < 200 || e.status >= 300
				},
				url: !1
			}
		},
		addAsyncValidator: function(e, t, n, i) {
			return T.asyncValidators[e] = {
				fn: t,
				url: n || !1,
				options: i || {}
			}, this
		}
	}), T.addValidator("remote", {
		requirementType: {
			"": "string",
			validator: "string",
			reverse: "boolean",
			options: "object"
		},
		validateString: function(t, n, i, a) {
			var r, s, o = {},
				l = i.validator || (!0 === i.reverse ? "reverse" : "default");
			if ("undefined" == typeof T.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
			n = T.asyncValidators[l].url || n, n.indexOf("{value}") > -1 ? n = n.replace("{value}", encodeURIComponent(t)) : o[a.$element.attr("name") || a.$element.attr("id")] = t;
			var c = e.extend(!0, i.options || {}, T.asyncValidators[l].options);
			r = e.extend(!0, {}, {
				url: n,
				data: o,
				type: "GET"
			}, c), a.trigger("field:ajaxoptions", a, r), s = e.param(r), "undefined" == typeof T._remoteCache && (T._remoteCache = {});
			var u = T._remoteCache[s] = T._remoteCache[s] || e.ajax(r),
				d = function() {
					var t = T.asyncValidators[l].fn.call(a, u, n, i);
					return t || (t = e.Deferred().reject()), e.when(t)
				};
			return u.then(d, d)
		},
		priority: -1
	}), T.on("form:submit", function() {
		T._remoteCache = {}
	}), window.ParsleyExtend.addAsyncValidator = function() {
		return ParsleyUtils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), T.addAsyncValidator.apply(T, arguments)
	}, T.addMessages("en", {
		defaultMessage: "This value seems to be invalid.",
		type: {
			email: "This value should be a valid email.",
			url: "This value should be a valid url.",
			number: "This value should be a valid number.",
			integer: "This value should be a valid integer.",
			digits: "This value should be digits.",
			alphanum: "This value should be alphanumeric."
		},
		notblank: "This value should not be blank.",
		required: "This value is required.",
		pattern: "This value seems to be invalid.",
		min: "This value should be greater than or equal to %s.",
		max: "This value should be lower than or equal to %s.",
		range: "This value should be between %s and %s.",
		minlength: "This value is too short. It should have %s characters or more.",
		maxlength: "This value is too long. It should have %s characters or fewer.",
		length: "This value length is invalid. It should be between %s and %s characters long.",
		mincheck: "You must select at least %s choices.",
		maxcheck: "You must select %s choices or fewer.",
		check: "You must select between %s and %s choices.",
		equalto: "This value should be the same."
	}), T.setLocale("en");
	var A = T;
	return A
}), function(e, t) {
	"function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.salvattore = t()
}(this, function() {
	window.matchMedia || (window.matchMedia = function() {
		"use strict";
		var e = window.styleMedia || window.media;
		if (!e) {
			var t = document.createElement("style"),
				n = document.getElementsByTagName("script")[0],
				i = null;
			t.type = "text/css", t.id = "matchmediajs-test", n.parentNode.insertBefore(t, n), i = "getComputedStyle" in window && window.getComputedStyle(t, null) || t.currentStyle, e = {
				matchMedium: function(e) {
					var n = "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
					return t.styleSheet ? t.styleSheet.cssText = n : t.textContent = n, "1px" === i.width
				}
			}
		}
		return function(t) {
			return {
				matches: e.matchMedium(t || "all"),
				media: t || "all"
			}
		}
	}()), function() {
		"use strict";
		if (window.matchMedia && window.matchMedia("all").addListener) return !1;
		var e = window.matchMedia,
			t = e("only all").matches,
			n = !1,
			i = 0,
			a = [],
			r = function(t) {
				clearTimeout(i), i = setTimeout(function() {
					for (var t = 0, n = a.length; t < n; t++) {
						var i = a[t].mql,
							r = a[t].listeners || [],
							s = e(i.media).matches;
						if (s !== i.matches) {
							i.matches = s;
							for (var o = 0, l = r.length; o < l; o++) r[o].call(window, i)
						}
					}
				}, 30)
			};
		window.matchMedia = function(i) {
			var s = e(i),
				o = [],
				l = 0;
			return s.addListener = function(e) {
				t && (n || (n = !0, window.addEventListener("resize", r, !0)), 0 === l && (l = a.push({
					mql: s,
					listeners: o
				})), o.push(e))
			}, s.removeListener = function(e) {
				for (var t = 0, n = o.length; t < n; t++) o[t] === e && o.splice(t, 1)
			}, s
		}
	}(), function() {
		"use strict";
		for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
		window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
			var i = (new Date).getTime(),
				a = Math.max(0, 16 - (i - e)),
				r = window.setTimeout(function() {
					t(i + a)
				}, a);
			return e = i + a, r
		}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
			clearTimeout(e)
		})
	}(), "function" != typeof window.CustomEvent && !
	function() {
		"use strict";

		function e(e, t) {
			t = t || {
				bubbles: !1,
				cancelable: !1,
				detail: void 0
			};
			var n = document.createEvent("CustomEvent");
			return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
		}
		e.prototype = window.Event.prototype, window.CustomEvent = e
	}();
	var e = function(e, t, n) {
			"use strict";
			var i = {},
				a = [],
				r = [],
				s = [],
				o = function(e, t, n) {
					e.dataset ? e.dataset[t] = n : e.setAttribute("data-" + t, n)
				};
			return i.obtainGridSettings = function(t) {
				var n = e.getComputedStyle(t, ":before"),
					i = n.getPropertyValue("content").slice(1, -1),
					a = i.match(/^\s*(\d+)(?:\s?\.(.+))?\s*$/),
					r = 1,
					s = [];
				return a ? (r = a[1], s = a[2], s = s ? s.split(".") : ["column"]) : (a = i.match(/^\s*\.(.+)\s+(\d+)\s*$/), a && (s = a[1], r = a[2], r && (r = r.split(".")))), {
					numberOfColumns: r,
					columnClasses: s
				}
			}, i.addColumns = function(e, n) {
				for (var a, r = i.obtainGridSettings(e), s = r.numberOfColumns, l = r.columnClasses, c = new Array((+s)), u = t.createDocumentFragment(), d = s; 0 !== d--;) a = "[data-columns] > *:nth-child(" + s + "n-" + d + ")", c.push(n.querySelectorAll(a));
				c.forEach(function(e) {
					var n = t.createElement("div"),
						i = t.createDocumentFragment();
					n.className = l.join(" "), Array.prototype.forEach.call(e, function(e) {
						i.appendChild(e)
					}), n.appendChild(i), u.appendChild(n)
				}), e.appendChild(u), o(e, "columns", s)
			}, i.removeColumns = function(n) {
				var i = t.createRange();
				i.selectNodeContents(n);
				var a = Array.prototype.filter.call(i.extractContents().childNodes, function(t) {
					return t instanceof e.HTMLElement
				}),
					r = a.length,
					s = a[0].childNodes.length,
					l = new Array(s * r);
				Array.prototype.forEach.call(a, function(e, t) {
					Array.prototype.forEach.call(e.children, function(e, n) {
						l[n * r + t] = e
					})
				});
				var c = t.createElement("div");
				return o(c, "columns", 0), l.filter(function(e) {
					return !!e
				}).forEach(function(e) {
					c.appendChild(e)
				}), c
			}, i.recreateColumns = function(t) {
				e.requestAnimationFrame(function() {
					i.addColumns(t, i.removeColumns(t));
					var e = new CustomEvent("columnsChange");
					t.dispatchEvent(e)
				})
			}, i.mediaQueryChange = function(e) {
				e.matches && Array.prototype.forEach.call(a, i.recreateColumns)
			}, i.getCSSRules = function(e) {
				var t;
				try {
					t = e.sheet.cssRules || e.sheet.rules
				} catch (n) {
					return []
				}
				return t || []
			}, i.getStylesheets = function() {
				var e = Array.prototype.slice.call(t.querySelectorAll("style"));
				return e.forEach(function(t, n) {
					"text/css" !== t.type && "" !== t.type && e.splice(n, 1)
				}), Array.prototype.concat.call(e, Array.prototype.slice.call(t.querySelectorAll("link[rel='stylesheet']")))
			}, i.mediaRuleHasColumnsSelector = function(e) {
				var t, n;
				try {
					t = e.length
				} catch (i) {
					t = 0
				}
				for (; t--;) if (n = e[t], n.selectorText && n.selectorText.match(/\[data-columns\](.*)::?before$/)) return !0;
				return !1
			}, i.scanMediaQueries = function() {
				var t = [];
				if (e.matchMedia) {
					i.getStylesheets().forEach(function(e) {
						Array.prototype.forEach.call(i.getCSSRules(e), function(e) {
							try {
								e.media && e.cssRules && i.mediaRuleHasColumnsSelector(e.cssRules) && t.push(e)
							} catch (n) {}
						})
					});
					var n = r.filter(function(e) {
						return t.indexOf(e) === -1
					});
					s.filter(function(e) {
						return n.indexOf(e.rule) !== -1
					}).forEach(function(e) {
						e.mql.removeListener(i.mediaQueryChange)
					}), s = s.filter(function(e) {
						return n.indexOf(e.rule) === -1
					}), t.filter(function(e) {
						return r.indexOf(e) == -1
					}).forEach(function(t) {
						var n = e.matchMedia(t.media.mediaText);
						n.addListener(i.mediaQueryChange), s.push({
							rule: t,
							mql: n
						})
					}), r.length = 0, r = t
				}
			}, i.rescanMediaQueries = function() {
				i.scanMediaQueries(), Array.prototype.forEach.call(a, i.recreateColumns)
			}, i.nextElementColumnIndex = function(e, t) {
				var n, i, a, r = e.children,
					s = r.length,
					o = 0,
					l = 0;
				for (a = 0; a < s; a++) n = r[a], i = n.children.length + (t[a].children || t[a].childNodes).length, 0 === o && (o = i), i < o && (l = a, o = i);
				return l
			}, i.createFragmentsList = function(e) {
				for (var n = new Array(e), i = 0; i !== e;) n[i] = t.createDocumentFragment(), i++;
				return n
			}, i.appendElements = function(e, t) {
				var n = e.children,
					a = n.length,
					r = i.createFragmentsList(a);
				Array.prototype.forEach.call(t, function(t) {
					var n = i.nextElementColumnIndex(e, r);
					r[n].appendChild(t)
				}), Array.prototype.forEach.call(n, function(e, t) {
					e.appendChild(r[t])
				})
			}, i.prependElements = function(e, n) {
				var a = e.children,
					r = a.length,
					s = i.createFragmentsList(r),
					o = r - 1;
				n.forEach(function(e) {
					var t = s[o];
					t.insertBefore(e, t.firstChild), 0 === o ? o = r - 1 : o--
				}), Array.prototype.forEach.call(a, function(e, t) {
					e.insertBefore(s[t], e.firstChild)
				});
				for (var l = t.createDocumentFragment(), c = n.length % r; 0 !== c--;) l.appendChild(e.lastChild);
				e.insertBefore(l, e.firstChild)
			}, i.registerGrid = function(n) {
				if ("none" !== e.getComputedStyle(n).display) {
					var r = t.createRange();
					r.selectNodeContents(n);
					var s = t.createElement("div");
					s.appendChild(r.extractContents()), o(s, "columns", 0), i.addColumns(n, s), a.push(n)
				}
			}, i.init = function() {
				var e = t.createElement("style");
				e.innerHTML = "[data-columns]::before{display:block;visibility:hidden;position:absolute;font-size:1px;}", t.head.appendChild(e);
				var n = t.querySelectorAll("[data-columns]");
				Array.prototype.forEach.call(n, i.registerGrid), i.scanMediaQueries()
			}, i.init(), {
				appendElements: i.appendElements,
				prependElements: i.prependElements,
				registerGrid: i.registerGrid,
				recreateColumns: i.recreateColumns,
				rescanMediaQueries: i.rescanMediaQueries,
				init: i.init,
				append_elements: i.appendElements,
				prepend_elements: i.prependElements,
				register_grid: i.registerGrid,
				recreate_columns: i.recreateColumns,
				rescan_media_queries: i.rescanMediaQueries
			}
		}(window, window.document);
	return e
}), FilterHandler.prototype.init = function(e) {
	this.form = e.form, this.list_holder = e.list_holder, this.ajax = !! e.ajax, this.inject_method = $.extend(this.inject_method, e.inject_method || {}), this.pagination = e.pagination || this.pagination, this.pagination_state = {
		page: 1,
		is_pagination: !1,
		all_loaded: !1,
		timer: null
	}, this.pagination_holder = this.pagination.holder || this.list_holder, this.callbacks = e.callbacks || this.callbacks
}, FilterHandler.prototype.bind = function(e) {
	var t = this;
	$(".js-filter-button").click(function(e) {
		e.preventDefault(), t.filter()
	}), e.live_search && this.form && (this.form.find(e.live_search).change(function() {
		t.filter(1)
	}), this.form.on("keydown", e.live_search, function(e) {
		var n = e.which || 0;
		13 === n && (e.preventDefault(), t.filter())
	})), this.pagination_holder.on("click", ".js-pagination", function(e) {
		e.preventDefault(), t.paginate($(this).data("page"))
	}), this.pagination.scroll && this.pagination.scroll.enabled && $(window).scroll(function() {
		t.scroll()
	}), this.callbacks.afterBind && this.callbacks.afterBind(this, e)
}, FilterHandler.prototype.filter = function() {
	var e = this,
		t = this.getFilter(),
		n = this.generateUrl(t);
	return this.callbacks.beforeFilter && this.callbacks.beforeFilter(this, n, t), this.ajax ? $.get(n, function(i) {
		e.requestedData(i, e.inject_method.filter), e.callbacks.afterFilter && e.callbacks.afterFilter(e, n, t, i)
	}) : void(window.location = n)
}, FilterHandler.prototype.paginate = function(e) {
	if (this.pagination_state.is_paginating) return null;
	this.pagination_state.is_paginating = !0;
	var t = this;
	e ? this.pagination_state.page = parseInt(e) : this.pagination_state.page++;
	var n = this.getFilter();
	n.params.page = this.pagination_state.page;
	var i = this.generateUrl(n);
	t.callbacks.beforePaginate && t.callbacks.beforePaginate(t, i, n);
	var a = $.get(i, function(e) {
		return e.length ? (t.requestedData(e, t.inject_method.paginate), void(t.callbacks.afterPaginate && t.callbacks.afterPaginate(t, i, n, e))) : (t.pagination_state.all_loaded = !0, void(t.callbacks.afterPaginateAllLoaded && t.callbacks.afterPaginateAllLoaded(t, i, n, e)))
	}),
		r = setTimeout(function() {
			t.pagination.loader && t.pagination.loader.show()
		}, 900);
	return a.always(function() {
		clearTimeout(r), t.pagination_state.is_paginating = !1, t.pagination.loader && t.pagination.loader.hide()
	}), a
}, FilterHandler.prototype.requestedData = function(e, t) {
	t = t || this.inject_method["default"], "append" === t ? this.list_holder.append(e) : "prepend" === t ? this.list_holder.prepend(e) : "load" === t ? this.list_holder.html(e) : "function" == typeof t && t(e), "function" == typeof applyJs && applyJs()
}, FilterHandler.prototype.getFilter = function() {
	var e = {
		slugs: {},
		params: {}
	};
	return this.form && this.form.find('input:not(input[type="radio"]):not(input[type="checkbox"]), select, input[type="radio"]:checked, input[type="checkbox"]:checked').each(function(t, n) {
		var i = $(n),
			a = $(this);
		if (i.prop("disabled") || a.hasClass("js-filter-ignore")) return !0;
		var r = a.attr("name");
		if (r && r.length) {
			var s = a.hasClass("js-filter-slug") ? "slugs" : "params",
				o = a.val();
			if ("slugs" === s && (o = a.data("slug") ? a.data("slug") : a.find(":selected, :checked").data("slug")), !o || !o.length) return !0;
			"[]" === r.substr(-2) ? (void 0 === e[s][r] && (e[s][r] = []), e[s][r].push(o)) : e[s][r] = o
		}
	}), this.callbacks.afterGetFilter && this.callbacks.afterGetFilter(this, e), e
}, FilterHandler.prototype.generateUrl = function(e) {
	var t = window.location.pathname;
	return this.form && this.form.data("base_url") && (t = this.form.data("base_url")), $.each(e.slugs, function(e, n) {
		$.isArray(n) ? $.each(n, function(e, n) {
			t += "/" + n
		}) : t += "/" + n
	}), $.isEmptyObject(e.params) || (t += (t.indexOf("?") === -1 ? "?" : "&") + $.param(e.params)), this.callbacks.afterGenerateUrl && this.callbacks.afterGenerateUrl(this, t, e), t
}, FilterHandler.prototype.scroll = function() {
	this.pagination_state.all_loaded || this.pagination_state.is_paginating || $(window).scrollTop() >= $(document).height() - $(window).height() - this.pagination.scroll.distance && this.paginate()
}, StorageHandler.prototype.getData = function(e, t) {
	"undefined" == typeof t && (t = 2700);
	var n = {};
	try {
		this.storageDevice && this.storageDevice[e] && (n = JSON.parse(this.storageDevice[e]), n.data && (n.data = JSON.parse(n.data)))
	} catch (i) {
		return {}
	}
	if (!n) return {};
	if (!n.timestamp) return {};
	var a = +new Date,
		r = (a - n.timestamp) / 1e3;
	return r >= t ? {} : n.data
}, StorageHandler.prototype.putData = function(e, t) {
	try {
		this.storageDevice.setItem("localStorage", 1), this.storageDevice.removeItem("localStorage")
	} catch (n) {
		return !1
	}
	return !!this.storageDevice && (t = {
		timestamp: +new Date,
		data: JSON.stringify(t)
	}, this.storageDevice[e] = JSON.stringify(t), !0)
}, StorageHandler.prototype.keyExists = function(e) {
	return !(!this.storageDevice || !this.storageDevice[e])
}, function(e) {
	e.fn.outerHTML = function() {
		return e(this).clone().wrap("<div></div>").parent().html()
	}
}(jQuery), $(function() {
	$(".js-modal").magnificPopup({
		type: "ajax",
		removalDelay: 300,
		closeOnBgClick: !1,
		mainClass: "modal-animate",
		callbacks: {
			ajaxContentAdded: function() {
				setStyling()
			}
		}
	}), $(".js-modal-inline").magnificPopup({
		type: "inline",
		removalDelay: 300,
		closeOnBgClick: !1,
		mainClass: "modal-animate",
		callbacks: {
			ajaxContentAdded: function() {
				setStyling()
			}
		}
	}), $(document).on("click", ".modal__container", function(e) {
		$(this).is($(e.target)) && $.magnificPopup.close()
	}), $(".js-eq-height").matchHeight(), $(window).on("resize", function() {
		var e = $(window).width(),
			t = $(".js-search-input").attr("data-placeholder_" + (e > 1023 ? "desktop" : "mobile"));
		$(".js-search-input").attr("placeholder", t)
	}).resize(), $(document).on("mouseenter", ".js-href-click", function(e) {
		$(this).addClass("is-hovered")
	}), $(document).on("mouseleave", ".js-href-click", function(e) {
		$(this).removeClass("is-hovered")
	}), $(document).on("click", ".js-accordion-toggle", function(e) {
		e.preventDefault();
		var t = ($(this), $(this).closest(".js-accordion")),
			n = t.find(".js-accordion-content");
		t.hasClass("is-open") ? (t.removeClass("is-open is-open-onload"), n.parent().removeAttr("style")) : (t.addClass("is-open"), n.parent().css("max-height", n.outerHeight()), setTimeout(function() {
			n.parent().css("max-height", "none")
		}, 500))
	}), $(".is-open-onload").length && $(".is-open-onload").each(function() {
		var e = ($(this), $(this).closest(".js-accordion")),
			t = e.find(".js-accordion-content");
		e.removeClass("is-open-onload").addClass("is-open"), t.parent().css("max-height", "none")
	}), $(".js-sticky").length && $(window).on("load resize scroll", function(e) {
		var t = position = $(".js-sticky-col").offset(),
			n = t.left + 40,
			i = t.top,
			a = $(window).width(),
			r = $(document).scrollTop();
		if (a > 1023) if (r > i - 140) {
			$(".js-sticky").addClass("is-sticky").css({
				left: n + "px",
				width: $(".js-sticky-col").width() + "px"
			});
			var s = (position = $(".js-sticky").closest(".section--pri").offset(), t.top),
				o = $(".js-sticky").closest(".section--pri").height(),
				l = s + o - $(".js-sticky").outerHeight() - 120;
			r > l ? $(".js-sticky").addClass("bottom-reached") : $(".js-sticky").removeClass("bottom-reached")
		} else $(".js-sticky").removeClass("is-sticky").removeClass("bottom-reached").removeAttr("style");
		else $(".js-sticky").removeClass("is-sticky").removeClass("bottom-reached").removeAttr("style")
	}).scroll(), $(window).on("load resize scroll", function(e) {
		var t = $(window).width();
		t < 1024 && $(".page-primary.js-eq-height, .page-secondary.js-eq-height").removeAttr("style")
	}), $(document).on("click", ".js-dropdown", function(e) {
		e.preventDefault(), $(this).parent().toggleClass("is-open")
	}), setStyling()
}), $(function() {
	function e() {
		var e = $(".js-career-list").html();
		$(".js-career-list").html(""), $(".js-career-list").html(e)
	}
	var t = $.magnificPopup.instance;
	$(document).on("click", ".js-filter a", function(e) {}), $(document).on("click", ".js-filter-location", function(n) {
		n.preventDefault(), $(".js-location-label").html($(this).attr("data-label")), t.close(), e()
	}), $(document).on("click", ".js-filter-jobarea", function(e) {});
	var n = $($(".js-jobmail").outerHTML());
	$(window).on("resize", function() {
		$(".js-jobmail").remove();
		var e = $(window).width();
		e > 1023 ? $(".js-jobmail-aside").append(n) : $(".js-jobmail-bottom").append(n)
	}).resize()
}), $(function() {
	$(".js-carousel").each(function(e, t) {
		var n = $(t).find(".js-carousel-slider");
		n.flexslider({
			animation: "fade",
			animationSpeed: 400,
			slideshow: !0,
			controlNav: !1,
			directionNav: !1,
			before: function(e) {
				$(".js-carousel-content").addClass("is-loading").removeClass("is-loaded")
			},
			after: function(e) {
				var t = e.currentSlide + 1,
					n = e.count;
				$(".js-carousel-current").html(t + "/" + n);
				var i = $(".js-carousel-slider ul li:eq(" + e.currentSlide + ") .js-carousel-slide-content").html();
				$(".js-carousel-content").html(i).removeClass("is-loading").addClass("is-loaded")
			}
		}), $(".js-carousel-current").html("1/" + $(".js-carousel-slider ul li").length);
		var i = $(".js-carousel-slider ul li:first .js-carousel-slide-content").html();
		$(".js-carousel-content").html(i), $(t).find(".js-carousel-nav a").click(function(e) {
			e.preventDefault();
			var t = $(this).attr("href");
			n.flexslider(t)
		})
	})
}), $(function() {
	$(".js-form-validate").length && ($(".js-form-validate").parsley({
		successClass: "is-succes",
		errorClass: "is-error",
		classHandler: function(e) {
			return e.$element.closest(".form__group")
		},
		errorsContainer: function(e) {
			return e.$element.closest(".form__group")
		},
		errorsWrapper: '<span class="form__error"></span>',
		errorTemplate: "<span></span>"
	}), $(".js-form-submit").on("click", function() {
		$(".js-form-validate").parsley().validate()
	})), $(".js-upload").change(function() {
		var e = $(this).val(),
			t = e.lastIndexOf("\\");
		t >= 0 && (e = e.substring(t + 1)), $(this).parent().find(".js-upload-filename").val(e)
	})
}), $(function() {
	$(window).scroll(function() {
		$(document).scrollTop() > 120 ? $("body").addClass("is-scrolled") : $("body").removeClass("is-scrolled")
	}).scroll(), $(document).on("click", ".js-nav-toggle", function(e) {
		e.preventDefault(), $("body").toggleClass("nav-is-visible")
	}), $(document).on("click", ".js-nav-sub-open", function(e) {
		var t = $(".page-header").width();
		if (t < 1024) {
			e.preventDefault();
			var n = $(this);
			$("body").addClass("subnav-is-visible"), $(".js-nav-sub").removeClass("is-active"), setTimeout(function() {
				n.next().addClass("is-active")
			}, 50)
		}
	}), $(document).on("click", ".js-search-open", function(e) {
		e.preventDefault(), $("body").addClass("search-is-open"), $(".js-search-content").addClass("is-active"), $(".js-search-input").focus()
	}), $(document).on("blur", ".js-search-input", function(e) {
		e.preventDefault(), $("body").removeClass("search-is-open"), $(".js-search-content").removeClass("is-active")
	}), $(document).on("click", ".js-search-close", function(e) {
		e.preventDefault(), $("body").removeClass("search-is-open"), $(".js-search-content").removeClass("is-active"), $(".js-search-input").blur()
	}), $(document).on("click", ".js-nav-sub-close", function(e) {
		e.preventDefault(), $("body").removeClass("subnav-is-visible"), $(".js-nav-sub").removeClass("is-active")
	})
}), $(function() {
	function e() {
		$.ajax({
			type: "GET",
			url: "/ajax/updates/",
			contentType: "application/json; charset=utf-8",
			data: {
				ajax: "true"
			},
			success: function(e) {
				var t = [],
					n = $(".js-updates-content"),
					i = "module-updates__item",
					a = '<div class="' + i + '">',
					r = e.split(a);
				$.each(r, function(e, n) {
					if (e > 0) {
						var a = document.createElement("div");
						a.innerHTML = n, a.className = i, t.push(a)
					}
				}), salvattore.append_elements(n[0], t)
			}
		})
	}
	$(document).on("click", ".js-updates-more", function(t) {
		t.preventDefault(), e()
	}), salvattore.rescanMediaQueries()
}), $(function() {
	function e() {
		var e = $("body");
		if ("undefined" != typeof e.attr("id")) {
			var t = e.attr("id"),
				n = t.replace(/(?:^|\s|\-|_)\w/g, function(e) {
					return e.toUpperCase()
				}).replace(/(\s|\-|_)*/g, "");
			$.isFunction(window["Init" + n]) && (window[n] = new window["Init" + n])
		}
	}
	function t() {
		$(document).on("click enter", ".js-href-click", function(e) {
			if ("A" !== $(e.target).prop("tagName") && !$(e.target).closest(".js-href").length && !$(e.target).closest("a").length) {
				var t = $(this).find(".js-href").length ? $(this).find(".js-href") : $(this).find("a");
				if (t.hasClass("js-modal") || t.hasClass("js-modal-ajax")) return void t.click();
				var n = t.attr("href");
				if (void 0 !== n && null !== n) {
					t.hasClass("js-track") && trackEvent(t.data("track-category"), t.data("track-action"), t.data("track-label")), t.hasClass("js-track-custom") && "function" == typeof trackCustom && trackCustom(t);
					var i = "_blank" === t.attr("target");
					i || e.ctrlKey || e.metaKey ? (window.open(n), e.shiftKey || self.focus()) : window.location = n, e.preventDefault()
				}
			}
		}).on("keypress", function(e) {
			13 === e.which && $(":focus").trigger("enter")
		}), $(".js-href-click:not(:has(a))").removeClass("js-href-click"), $("body").on("click", ".js-disabled", function(e) {
			return e.preventDefault(), e.stopPropagation(), !1
		}), $(".js-init-click").first().click()
	}
	function n() {
		$(document).on("change", ".js-option-init", function() {
			var e = $(this),
				t = e.val(),
				n = e.data("option-identifier") ? "-" + e.data("option-identifier") : "",
				i = e.closest(".js-option" + n + "-container");
			e.find("option:selected") && e.find("option:selected").data("slug") && (t = e.find("option:selected").data("slug")), i.find(".js-option" + n + "-group:not(.js-option-" + t + ")").slideUp(100), i.find(".js-option" + n + "-group.js-option-" + t).slideDown(100), i.find(".js-option" + n + "-group .js-add-required").prop("required", !1), i.find(".js-option" + n + "-group.js-option-" + t + " .js-add-required").prop("required", !0)
		}), $('select.js-option-init, input[type="radio"]:checked.js-option-init, input[type="checkbox"]:checked.js-option-init').each(function() {
			$(this).change()
		})
	}
	function i() {
		loadBackgroundImages(), e(), t(), n()
	}
	i()
});
var loadBackgroundImages = function() {
		var e = $(window).width();
		$(".js-load-bg-img").each(function(t, n) {
			var i = $(this),
				a = i.data("backgroundimage");
			e <= 400 && i.data("backgroundimage__mobile") ? a = i.data("backgroundimage__mobile") : e <= 768 && i.data("backgroundimage__tablet") && (a = i.data("backgroundimage__tablet")), i.css({
				"background-image": "url(" + a + ")"
			}), $(this).waitForImages(!0).done(function() {
				$(this).addClass("is-loaded"), $(this).closest(".js-item").addClass("bg-is-loaded")
			})
		})
	},
	scrollToElement = function(e, t, n, i) {
		n = "undefined" != typeof n ? n : 1e3, t = "undefined" != typeof t ? t : 0;
		var a = $(e),
			r = a.offset(),
			s = r.top - t;
		$("html, body").animate({
			scrollTop: s
		}, n, "swing", i)
	},
	debounce = function(e, t) {
		var n = void 0;
		return function() {
			var i = this,
				a = arguments;
			return clearTimeout(n), n = setTimeout(function() {
				return e.apply(i, a)
			}, t)
		}
	},
	throttle = function(e, t) {
		var n, i, a;
		return function() {
			var r = arguments;
			return n ? (clearTimeout(i), i = setTimeout(function() {
				e.apply(context, r), n = !1
			}, t)) : (e.apply(context, r), n = !0, a = setTimeout(function() {
				return n = !1
			}, t))
		}
	},
	throttleStored = function(e, t) {
		var n, i, a, r, s = [];
		return function() {
			var o = function() {
					var e;
					n = !0, e = 0, a = setInterval(function() {
						return s[e] ? (s[e].apply(), e++) : (n = !1, clearTimeout(a))
					}, t)
				};
			if (!n) return i ? (s.push(e), clearTimeout(a), a = setTimeout(function() {
				return i = !1, o()
			}, t)) : (e.apply(), i = !0, s = [], r = setTimeout(function() {
				return i = !1
			}, t))
		}
	},
	getDataAttribute = function(e, t) {
		return "function" == typeof e.getAttribute ? (t = t.replace(/([^\b])([A-Z])/g, "$1-$2").toLowerCase(), e.getAttribute("data-" + t)) : e.dataset ? e.dataset[t] : null
	},
	head = document.getElementsByTagName("HEAD")[0];
if (getDataAttribute(head, "googleId") && getDataAttribute(head, "googleId").length) {
	var style = getDataAttribute(head, "googleStyle");
	if ("old" === style) {
		!
		function() {
			ga = document.createElement("script"), ga.type = "text/javascript", ga.async = !1, ga.src = "https://ssl.google-analytics.com/ga.js";
			var e = document.getElementsByTagName("script")[0];
			e.parentNode.insertBefore(ga, e)
		}();
		var _gaq = _gaq || [],
			gaProperty = getDataAttribute(head, "googleId"),
			optout = "opt-out";
		_gaq.push(["_setAccount", gaProperty]), _gaq.push(["_setAllowLinker", !0]), _gaq.push(["_trackPageview"])
	} else {
		!
		function(e, t, n, i, a, r, s) {
			e.GoogleAnalyticsObject = a, e[a] = e[a] ||
			function() {
				(e[a].q = e[a].q || []).push(arguments)
			}, e[a].l = 1 * new Date, r = t.createElement(n), s = t.getElementsByTagName(n)[0], r.async = 1, r.src = i, s.parentNode.insertBefore(r, s)
		}(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
		var ga = "undefined" != typeof ga ? ga : function() {};
		if (ga("create", getDataAttribute(head, "googleId"), "auto"), gaAdditions(ga), ga("send", "pageview"), getDataAttribute(head, "googlePlugins")) {
			var plugins = getDataAttribute(head, "googlePlugins").split(",").map(function(e) {
				return e.trim()
			});
			$.each(plugins, function(e, t) {
				ga("require", t)
			})
		}
	}
}
getDataAttribute(head, "gtmId") && getDataAttribute(head, "gtmId").length && !
function(e, t, n, i, a) {
	e[i] = e[i] || [], e[i].push({
		"gtm.start": (new Date).getTime(),
		event: "gtm.js"
	});
	var r = t.getElementsByTagName(n)[0],
		s = t.createElement(n),
		o = "dataLayer" != i ? "&l=" + i : "";
	s.async = !0, s.src = "https://www.googletagmanager.com/gtm.js?id=" + a + o, r.parentNode.insertBefore(s, r)
}(window, document, "script", "dataLayer", getDataAttribute(head, "gtmId")), $(document).ready(function() {
	$("body").on("click", ".js-track", function(e) {
		var t = $(this);
		trackEvent(t.data("track-category"), t.data("track-action"), t.data("track-label"))
	}), $(document).on("click", 'a[href^="http"]:not([href^="' + window.location.origin + '"])', function(e) {
		trackEvent("External link", "Click", $(this).attr("href"))
	}), $(".js-track-onload").length && $(".js-track-onload").each(function(e, t) {
		var n = $(this);
		trackEvent(n.data("track-category"), n.data("track-action"), n.data("track-label"))
	});
	var e = getDataAttribute(head, "compass-analytics-key");
	e && $.get("https://collect.cdlvr.net/event/pageview?site=" + e + "&url=" + encodeURIComponent(window.location))
});