! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function i(e) {
		var t = "length" in e && e.length,
			i = ne.type(e);
		return "function" !== i && !ne.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
	}

	function s(e, t, i) {
		if (ne.isFunction(t)) return ne.grep(e, function(e, s) {
			return !!t.call(e, s, e) !== i
		});
		if (t.nodeType) return ne.grep(e, function(e) {
			return e === t !== i
		});
		if ("string" == typeof t) {
			if (ue.test(t)) return ne.filter(t, e, i);
			t = ne.filter(t, e)
		}
		return ne.grep(e, function(e) {
			return ne.inArray(e, t) >= 0 !== i
		})
	}

	function n(e, t) {
		do {
			e = e[t]
		} while (e && 1 !== e.nodeType);
		return e
	}

	function a(e) {
		var t = be[e] = {};
		return ne.each(e.match(ye) || [], function(e, i) {
			t[i] = !0
		}), t
	}

	function r() {
		fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", o, !1), e.removeEventListener("load", o, !1)) : (fe.detachEvent("onreadystatechange", o), e.detachEvent("onload", o))
	}

	function o() {
		(fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (r(), ne.ready())
	}

	function l(e, t, i) {
		if (void 0 === i && 1 === e.nodeType) {
			var s = "data-" + t.replace(Ee, "-$1").toLowerCase();
			if ("string" == typeof(i = e.getAttribute(s))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Se.test(i) ? ne.parseJSON(i) : i)
				} catch (e) {}
				ne.data(e, t, i)
			} else i = void 0
		}
		return i
	}

	function d(e) {
		var t;
		for (t in e)
			if (("data" !== t || !ne.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}

	function h(e, t, i, s) {
		if (ne.acceptData(e)) {
			var n, a, r = ne.expando,
				o = e.nodeType,
				l = o ? ne.cache : e,
				d = o ? e[r] : e[r] && r;
			if (d && l[d] && (s || l[d].data) || void 0 !== i || "string" != typeof t) return d || (d = o ? e[r] = G.pop() || ne.guid++ : r), l[d] || (l[d] = o ? {} : {
				toJSON: ne.noop
			}), ("object" == typeof t || "function" == typeof t) && (s ? l[d] = ne.extend(l[d], t) : l[d].data = ne.extend(l[d].data, t)), a = l[d], s || (a.data || (a.data = {}), a = a.data), void 0 !== i && (a[ne.camelCase(t)] = i), "string" == typeof t ? null == (n = a[t]) && (n = a[ne.camelCase(t)]) : n = a, n
		}
	}

	function c(e, t, i) {
		if (ne.acceptData(e)) {
			var s, n, a = e.nodeType,
				r = a ? ne.cache : e,
				o = a ? e[ne.expando] : ne.expando;
			if (r[o]) {
				if (t && (s = i ? r[o] : r[o].data)) {
					ne.isArray(t) ? t = t.concat(ne.map(t, ne.camelCase)) : t in s ? t = [t] : (t = ne.camelCase(t), t = t in s ? [t] : t.split(" ")), n = t.length;
					for (; n--;) delete s[t[n]];
					if (i ? !d(s) : !ne.isEmptyObject(s)) return
				}(i || (delete r[o].data, d(r[o]))) && (a ? ne.cleanData([e], !0) : ie.deleteExpando || r != r.window ? delete r[o] : r[o] = null)
			}
		}
	}

	function u() {
		return !0
	}

	function p() {
		return !1
	}

	function f() {
		try {
			return fe.activeElement
		} catch (e) {}
	}

	function v(e) {
		var t = Ne.split("|"),
			i = e.createDocumentFragment();
		if (i.createElement)
			for (; t.length;) i.createElement(t.pop());
		return i
	}

	function m(e, t) {
		var i, s, n = 0,
			a = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
		if (!a)
			for (a = [], i = e.childNodes || e; null != (s = i[n]); n++) !t || ne.nodeName(s, t) ? a.push(s) : ne.merge(a, m(s, t));
		return void 0 === t || t && ne.nodeName(e, t) ? ne.merge([e], a) : a
	}

	function g(e) {
		ze.test(e.type) && (e.defaultChecked = e.checked)
	}

	function y(e, t) {
		return ne.nodeName(e, "table") && ne.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function b(e) {
		return e.type = (null !== ne.find.attr(e, "type")) + "/" + e.type, e
	}

	function w(e) {
		var t = Ye.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function x(e, t) {
		for (var i, s = 0; null != (i = e[s]); s++) ne._data(i, "globalEval", !t || ne._data(t[s], "globalEval"))
	}

	function T(e, t) {
		if (1 === t.nodeType && ne.hasData(e)) {
			var i, s, n, a = ne._data(e),
				r = ne._data(t, a),
				o = a.events;
			if (o) {
				delete r.handle, r.events = {};
				for (i in o)
					for (s = 0, n = o[i].length; n > s; s++) ne.event.add(t, i, o[i][s])
			}
			r.data && (r.data = ne.extend({}, r.data))
		}
	}

	function S(e, t) {
		var i, s, n;
		if (1 === t.nodeType) {
			if (i = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[ne.expando]) {
				n = ne._data(t);
				for (s in n.events) ne.removeEvent(t, s, n.handle);
				t.removeAttribute(ne.expando)
			}
			"script" === i && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !ne.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
		}
	}

	function E(t, i) {
		var s, n = ne(i.createElement(t)).appendTo(i.body),
			a = e.getDefaultComputedStyle && (s = e.getDefaultComputedStyle(n[0])) ? s.display : ne.css(n[0], "display");
		return n.detach(), a
	}

	function C(e) {
		var t = fe,
			i = Je[e];
		return i || (i = E(e, t), "none" !== i && i || (Ke = (Ke || ne("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), i = E(e, t), Ke.detach()), Je[e] = i), i
	}

	function k(e, t) {
		return {
			get: function() {
				var i = e();
				if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function A(e, t) {
		if (t in e) return t;
		for (var i = t.charAt(0).toUpperCase() + t.slice(1), s = t, n = ct.length; n--;)
			if ((t = ct[n] + i) in e) return t;
		return s
	}

	function M(e, t) {
		for (var i, s, n, a = [], r = 0, o = e.length; o > r; r++) s = e[r], s.style && (a[r] = ne._data(s, "olddisplay"), i = s.style.display, t ? (a[r] || "none" !== i || (s.style.display = ""), "" === s.style.display && Ae(s) && (a[r] = ne._data(s, "olddisplay", C(s.nodeName)))) : (n = Ae(s), (i && "none" !== i || !n) && ne._data(s, "olddisplay", n ? i : ne.css(s, "display"))));
		for (r = 0; o > r; r++) s = e[r], s.style && (t && "none" !== s.style.display && "" !== s.style.display || (s.style.display = t ? a[r] || "" : "none"));
		return e
	}

	function z(e, t, i) {
		var s = ot.exec(t);
		return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : t
	}

	function $(e, t, i, s, n) {
		for (var a = i === (s ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > a; a += 2) "margin" === i && (r += ne.css(e, i + ke[a], !0, n)), s ? ("content" === i && (r -= ne.css(e, "padding" + ke[a], !0, n)), "margin" !== i && (r -= ne.css(e, "border" + ke[a] + "Width", !0, n))) : (r += ne.css(e, "padding" + ke[a], !0, n), "padding" !== i && (r += ne.css(e, "border" + ke[a] + "Width", !0, n)));
		return r
	}

	function L(e, t, i) {
		var s = !0,
			n = "width" === t ? e.offsetWidth : e.offsetHeight,
			a = Ze(e),
			r = ie.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, a);
		if (0 >= n || null == n) {
			if (n = et(e, t, a), (0 > n || null == n) && (n = e.style[t]), it.test(n)) return n;
			s = r && (ie.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
		}
		return n + $(e, t, i || (r ? "border" : "content"), s, a) + "px"
	}

	function P(e, t, i, s, n) {
		return new P.prototype.init(e, t, i, s, n)
	}

	function I() {
		return setTimeout(function() {
			ut = void 0
		}), ut = ne.now()
	}

	function D(e, t) {
		var i, s = {
				height: e
			},
			n = 0;
		for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = ke[n], s["margin" + i] = s["padding" + i] = e;
		return t && (s.opacity = s.width = e), s
	}

	function N(e, t, i) {
		for (var s, n = (yt[t] || []).concat(yt["*"]), a = 0, r = n.length; r > a; a++)
			if (s = n[a].call(i, t, e)) return s
	}

	function O(e, t, i) {
		var s, n, a, r, o, l, d, h = this,
			c = {},
			u = e.style,
			p = e.nodeType && Ae(e),
			f = ne._data(e, "fxshow");
		i.queue || (o = ne._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
			o.unqueued || l()
		}), o.unqueued++, h.always(function() {
			h.always(function() {
				o.unqueued--, ne.queue(e, "fx").length || o.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], d = ne.css(e, "display"), "inline" === ("none" === d ? ne._data(e, "olddisplay") || C(e.nodeName) : d) && "none" === ne.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? u.zoom = 1 : u.display = "inline-block")), i.overflow && (u.overflow = "hidden", ie.shrinkWrapBlocks() || h.always(function() {
			u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
		}));
		for (s in t)
			if (n = t[s], ft.exec(n)) {
				if (delete t[s], a = a || "toggle" === n, n === (p ? "hide" : "show")) {
					if ("show" !== n || !f || void 0 === f[s]) continue;
					p = !0
				}
				c[s] = f && f[s] || ne.style(e, s)
			} else d = void 0;
		if (ne.isEmptyObject(c)) "inline" === ("none" === d ? C(e.nodeName) : d) && (u.display = d);
		else {
			f ? "hidden" in f && (p = f.hidden) : f = ne._data(e, "fxshow", {}), a && (f.hidden = !p), p ? ne(e).show() : h.done(function() {
				ne(e).hide()
			}), h.done(function() {
				var t;
				ne._removeData(e, "fxshow");
				for (t in c) ne.style(e, t, c[t])
			});
			for (s in c) r = N(p ? f[s] : 0, s, h), s in f || (f[s] = r.start, p && (r.end = r.start, r.start = "width" === s || "height" === s ? 1 : 0))
		}
	}

	function H(e, t) {
		var i, s, n, a, r;
		for (i in e)
			if (s = ne.camelCase(i), n = t[s], a = e[i], ne.isArray(a) && (n = a[1], a = e[i] = a[0]), i !== s && (e[s] = a, delete e[i]), (r = ne.cssHooks[s]) && "expand" in r) {
				a = r.expand(a), delete e[s];
				for (i in a) i in e || (e[i] = a[i], t[i] = n)
			} else t[s] = n
	}

	function B(e, t, i) {
		var s, n, a = 0,
			r = gt.length,
			o = ne.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (n) return !1;
				for (var t = ut || I(), i = Math.max(0, d.startTime + d.duration - t), s = i / d.duration || 0, a = 1 - s, r = 0, l = d.tweens.length; l > r; r++) d.tweens[r].run(a);
				return o.notifyWith(e, [d, a, i]), 1 > a && l ? i : (o.resolveWith(e, [d]), !1)
			},
			d = o.promise({
				elem: e,
				props: ne.extend({}, t),
				opts: ne.extend(!0, {
					specialEasing: {}
				}, i),
				originalProperties: t,
				originalOptions: i,
				startTime: ut || I(),
				duration: i.duration,
				tweens: [],
				createTween: function(t, i) {
					var s = ne.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
					return d.tweens.push(s), s
				},
				stop: function(t) {
					var i = 0,
						s = t ? d.tweens.length : 0;
					if (n) return this;
					for (n = !0; s > i; i++) d.tweens[i].run(1);
					return t ? o.resolveWith(e, [d, t]) : o.rejectWith(e, [d, t]), this
				}
			}),
			h = d.props;
		for (H(h, d.opts.specialEasing); r > a; a++)
			if (s = gt[a].call(d, e, h, d.opts)) return s;
		return ne.map(h, N, d), ne.isFunction(d.opts.start) && d.opts.start.call(e, d), ne.fx.timer(ne.extend(l, {
			elem: e,
			anim: d,
			queue: d.opts.queue
		})), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
	}

	function j(e) {
		return function(t, i) {
			"string" != typeof t && (i = t, t = "*");
			var s, n = 0,
				a = t.toLowerCase().match(ye) || [];
			if (ne.isFunction(i))
				for (; s = a[n++];) "+" === s.charAt(0) ? (s = s.slice(1) || "*", (e[s] = e[s] || []).unshift(i)) : (e[s] = e[s] || []).push(i)
		}
	}

	function F(e, t, i, s) {
		function n(o) {
			var l;
			return a[o] = !0, ne.each(e[o] || [], function(e, o) {
				var d = o(t, i, s);
				return "string" != typeof d || r || a[d] ? r ? !(l = d) : void 0 : (t.dataTypes.unshift(d), n(d), !1)
			}), l
		}
		var a = {},
			r = e === Rt;
		return n(t.dataTypes[0]) || !a["*"] && n("*")
	}

	function q(e, t) {
		var i, s, n = ne.ajaxSettings.flatOptions || {};
		for (s in t) void 0 !== t[s] && ((n[s] ? e : i || (i = {}))[s] = t[s]);
		return i && ne.extend(!0, e, i), e
	}

	function R(e, t, i) {
		for (var s, n, a, r, o = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
		if (n)
			for (r in o)
				if (o[r] && o[r].test(n)) {
					l.unshift(r);
					break
				}
		if (l[0] in i) a = l[0];
		else {
			for (r in i) {
				if (!l[0] || e.converters[r + " " + l[0]]) {
					a = r;
					break
				}
				s || (s = r)
			}
			a = a || s
		}
		return a ? (a !== l[0] && l.unshift(a), i[a]) : void 0
	}

	function W(e, t, i, s) {
		var n, a, r, o, l, d = {},
			h = e.dataTypes.slice();
		if (h[1])
			for (r in e.converters) d[r.toLowerCase()] = e.converters[r];
		for (a = h.shift(); a;)
			if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && s && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = h.shift())
				if ("*" === a) a = l;
				else if ("*" !== l && l !== a) {
			if (!(r = d[l + " " + a] || d["* " + a]))
				for (n in d)
					if (o = n.split(" "), o[1] === a && (r = d[l + " " + o[0]] || d["* " + o[0]])) {
						!0 === r ? r = d[n] : !0 !== d[n] && (a = o[0], h.unshift(o[1]));
						break
					}
			if (!0 !== r)
				if (r && e.throws) t = r(t);
				else try {
					t = r(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: r ? e : "No conversion from " + l + " to " + a
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function _(e, t, i, s) {
		var n;
		if (ne.isArray(t)) ne.each(t, function(t, n) {
			i || Xt.test(e) ? s(e, n) : _(e + "[" + ("object" == typeof n ? t : "") + "]", n, i, s)
		});
		else if (i || "object" !== ne.type(t)) s(e, t);
		else
			for (n in t) _(e + "[" + n + "]", t[n], i, s)
	}

	function X() {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	}

	function Y() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}

	function V(e) {
		return ne.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	var G = [],
		U = G.slice,
		Q = G.concat,
		K = G.push,
		J = G.indexOf,
		Z = {},
		ee = Z.toString,
		te = Z.hasOwnProperty,
		ie = {},
		se = "1.11.3",
		ne = function(e, t) {
			return new ne.fn.init(e, t)
		},
		ae = /^[\s﻿\xA0]+|[\s﻿\xA0]+$/g,
		re = /^-ms-/,
		oe = /-([\da-z])/gi,
		le = function(e, t) {
			return t.toUpperCase()
		};
	ne.fn = ne.prototype = {
		jquery: se,
		constructor: ne,
		selector: "",
		length: 0,
		toArray: function() {
			return U.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
		},
		pushStack: function(e) {
			var t = ne.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return ne.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(ne.map(this, function(t, i) {
				return e.call(t, i, t)
			}))
		},
		slice: function() {
			return this.pushStack(U.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				i = +e + (0 > e ? t : 0);
			return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: K,
		sort: G.sort,
		splice: G.splice
	}, ne.extend = ne.fn.extend = function() {
		var e, t, i, s, n, a, r = arguments[0] || {},
			o = 1,
			l = arguments.length,
			d = !1;
		for ("boolean" == typeof r && (d = r, r = arguments[o] || {}, o++), "object" == typeof r || ne.isFunction(r) || (r = {}), o === l && (r = this, o--); l > o; o++)
			if (null != (n = arguments[o]))
				for (s in n) e = r[s], i = n[s], r !== i && (d && i && (ne.isPlainObject(i) || (t = ne.isArray(i))) ? (t ? (t = !1, a = e && ne.isArray(e) ? e : []) : a = e && ne.isPlainObject(e) ? e : {}, r[s] = ne.extend(d, a, i)) : void 0 !== i && (r[s] = i));
		return r
	}, ne.extend({
		expando: "jQuery" + (se + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === ne.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === ne.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !ne.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			var t;
			if (!e || "object" !== ne.type(e) || e.nodeType || ne.isWindow(e)) return !1;
			try {
				if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (e) {
				return !1
			}
			if (ie.ownLast)
				for (t in e) return te.call(e, t);
			for (t in e);
			return void 0 === t || te.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
		},
		globalEval: function(t) {
			t && ne.trim(t) && (e.execScript || function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(re, "ms-").replace(oe, le)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, s) {
			var n = 0,
				a = e.length,
				r = i(e);
			if (s) {
				if (r)
					for (; a > n && !1 !== t.apply(e[n], s); n++);
				else
					for (n in e)
						if (!1 === t.apply(e[n], s)) break
			} else if (r)
				for (; a > n && !1 !== t.call(e[n], n, e[n]); n++);
			else
				for (n in e)
					if (!1 === t.call(e[n], n, e[n])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ae, "")
		},
		makeArray: function(e, t) {
			var s = t || [];
			return null != e && (i(Object(e)) ? ne.merge(s, "string" == typeof e ? [e] : e) : K.call(s, e)), s
		},
		inArray: function(e, t, i) {
			var s;
			if (t) {
				if (J) return J.call(t, e, i);
				for (s = t.length, i = i ? 0 > i ? Math.max(0, s + i) : i : 0; s > i; i++)
					if (i in t && t[i] === e) return i
			}
			return -1
		},
		merge: function(e, t) {
			for (var i = +t.length, s = 0, n = e.length; i > s;) e[n++] = t[s++];
			if (i !== i)
				for (; void 0 !== t[s];) e[n++] = t[s++];
			return e.length = n, e
		},
		grep: function(e, t, i) {
			for (var s = [], n = 0, a = e.length, r = !i; a > n; n++) !t(e[n], n) !== r && s.push(e[n]);
			return s
		},
		map: function(e, t, s) {
			var n, a = 0,
				r = e.length,
				o = i(e),
				l = [];
			if (o)
				for (; r > a; a++) null != (n = t(e[a], a, s)) && l.push(n);
			else
				for (a in e) null != (n = t(e[a], a, s)) && l.push(n);
			return Q.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var i, s, n;
			return "string" == typeof t && (n = e[t], t = e, e = n), ne.isFunction(e) ? (i = U.call(arguments, 2), s = function() {
				return e.apply(t || this, i.concat(U.call(arguments)))
			}, s.guid = e.guid = e.guid || ne.guid++, s) : void 0
		},
		now: function() {
			return +new Date
		},
		support: ie
	}), ne.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		Z["[object " + t + "]"] = t.toLowerCase()
	});
	var de = function(e) {
		function t(e, t, i, s) {
			var n, a, r, o, d, c, u, p, f, v;
			if ((t ? t.ownerDocument || t : B) !== $ && z(t), t = t || $, i = i || [], o = t.nodeType, "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o) return i;
			if (!s && P) {
				if (11 !== o && (n = me.exec(e)))
					if (r = n[1]) {
						if (9 === o) {
							if (!(a = t.getElementById(r)) || !a.parentNode) return i;
							if (a.id === r) return i.push(a), i
						} else if (t.ownerDocument && (a = t.ownerDocument.getElementById(r)) && O(t, a) && a.id === r) return i.push(a), i
					} else {
						if (n[2]) return Q.apply(i, t.getElementsByTagName(e)), i;
						if ((r = n[3]) && b.getElementsByClassName) return Q.apply(i, t.getElementsByClassName(r)), i
					}
				if (b.qsa && (!I || !I.test(e))) {
					if (p = u = H, f = t, v = 1 !== o && e, 1 === o && "object" !== t.nodeName.toLowerCase()) {
						for (c = S(e), (u = t.getAttribute("id")) ? p = u.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", d = c.length; d--;) c[d] = p + h(c[d]);
						f = ge.test(e) && l(t.parentNode) || t, v = c.join(",")
					}
					if (v) try {
						return Q.apply(i, f.querySelectorAll(v)), i
					} catch (e) {} finally {
						u || t.removeAttribute("id")
					}
				}
			}
			return C(e.replace(re, "$1"), t, i, s)
		}

		function i() {
			function e(i, s) {
				return t.push(i + " ") > w.cacheLength && delete e[t.shift()], e[i + " "] = s
			}
			var t = [];
			return e
		}

		function s(e) {
			return e[H] = !0, e
		}

		function n(e) {
			var t = $.createElement("div");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function a(e, t) {
			for (var i = e.split("|"), s = e.length; s--;) w.attrHandle[i[s]] = t
		}

		function r(e, t) {
			var i = t && e,
				s = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
			if (s) return s;
			if (i)
				for (; i = i.nextSibling;)
					if (i === t) return -1;
			return e ? 1 : -1
		}

		function o(e) {
			return s(function(t) {
				return t = +t, s(function(i, s) {
					for (var n, a = e([], i.length, t), r = a.length; r--;) i[n = a[r]] && (i[n] = !(s[n] = i[n]))
				})
			})
		}

		function l(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}

		function d() {}

		function h(e) {
			for (var t = 0, i = e.length, s = ""; i > t; t++) s += e[t].value;
			return s
		}

		function c(e, t, i) {
			var s = t.dir,
				n = i && "parentNode" === s,
				a = F++;
			return t.first ? function(t, i, a) {
				for (; t = t[s];)
					if (1 === t.nodeType || n) return e(t, i, a)
			} : function(t, i, r) {
				var o, l, d = [j, a];
				if (r) {
					for (; t = t[s];)
						if ((1 === t.nodeType || n) && e(t, i, r)) return !0
				} else
					for (; t = t[s];)
						if (1 === t.nodeType || n) {
							if (l = t[H] || (t[H] = {}), (o = l[s]) && o[0] === j && o[1] === a) return d[2] = o[2];
							if (l[s] = d, d[2] = e(t, i, r)) return !0
						}
			}
		}

		function u(e) {
			return e.length > 1 ? function(t, i, s) {
				for (var n = e.length; n--;)
					if (!e[n](t, i, s)) return !1;
				return !0
			} : e[0]
		}

		function p(e, i, s) {
			for (var n = 0, a = i.length; a > n; n++) t(e, i[n], s);
			return s
		}

		function f(e, t, i, s, n) {
			for (var a, r = [], o = 0, l = e.length, d = null != t; l > o; o++)(a = e[o]) && (!i || i(a, s, n)) && (r.push(a), d && t.push(o));
			return r
		}

		function v(e, t, i, n, a, r) {
			return n && !n[H] && (n = v(n)), a && !a[H] && (a = v(a, r)), s(function(s, r, o, l) {
				var d, h, c, u = [],
					v = [],
					m = r.length,
					g = s || p(t || "*", o.nodeType ? [o] : o, []),
					y = !e || !s && t ? g : f(g, u, e, o, l),
					b = i ? a || (s ? e : m || n) ? [] : r : y;
				if (i && i(y, b, o, l), n)
					for (d = f(b, v), n(d, [], o, l), h = d.length; h--;)(c = d[h]) && (b[v[h]] = !(y[v[h]] = c));
				if (s) {
					if (a || e) {
						if (a) {
							for (d = [], h = b.length; h--;)(c = b[h]) && d.push(y[h] = c);
							a(null, b = [], d, l)
						}
						for (h = b.length; h--;)(c = b[h]) && (d = a ? J(s, c) : u[h]) > -1 && (s[d] = !(r[d] = c))
					}
				} else b = f(b === r ? b.splice(m, b.length) : b), a ? a(null, r, b, l) : Q.apply(r, b)
			})
		}

		function m(e) {
			for (var t, i, s, n = e.length, a = w.relative[e[0].type], r = a || w.relative[" "], o = a ? 1 : 0, l = c(function(e) {
					return e === t
				}, r, !0), d = c(function(e) {
					return J(t, e) > -1
				}, r, !0), p = [function(e, i, s) {
					var n = !a && (s || i !== k) || ((t = i).nodeType ? l(e, i, s) : d(e, i, s));
					return t = null, n
				}]; n > o; o++)
				if (i = w.relative[e[o].type]) p = [c(u(p), i)];
				else {
					if (i = w.filter[e[o].type].apply(null, e[o].matches), i[H]) {
						for (s = ++o; n > s && !w.relative[e[s].type]; s++);
						return v(o > 1 && u(p), o > 1 && h(e.slice(0, o - 1).concat({
							value: " " === e[o - 2].type ? "*" : ""
						})).replace(re, "$1"), i, s > o && m(e.slice(o, s)), n > s && m(e = e.slice(s)), n > s && h(e))
					}
					p.push(i)
				}
			return u(p)
		}

		function g(e, i) {
			var n = i.length > 0,
				a = e.length > 0,
				r = function(s, r, o, l, d) {
					var h, c, u, p = 0,
						v = "0",
						m = s && [],
						g = [],
						y = k,
						b = s || a && w.find.TAG("*", d),
						x = j += null == y ? 1 : Math.random() || .1,
						T = b.length;
					for (d && (k = r !== $ && r); v !== T && null != (h = b[v]); v++) {
						if (a && h) {
							for (c = 0; u = e[c++];)
								if (u(h, r, o)) {
									l.push(h);
									break
								}
							d && (j = x)
						}
						n && ((h = !u && h) && p--, s && m.push(h))
					}
					if (p += v, n && v !== p) {
						for (c = 0; u = i[c++];) u(m, g, r, o);
						if (s) {
							if (p > 0)
								for (; v--;) m[v] || g[v] || (g[v] = G.call(l));
							g = f(g)
						}
						Q.apply(l, g), d && !s && g.length > 0 && p + i.length > 1 && t.uniqueSort(l)
					}
					return d && (j = x, k = y), m
				};
			return n ? s(r) : r
		}
		var y, b, w, x, T, S, E, C, k, A, M, z, $, L, P, I, D, N, O, H = "sizzle" + 1 * new Date,
			B = e.document,
			j = 0,
			F = 0,
			q = i(),
			R = i(),
			W = i(),
			_ = function(e, t) {
				return e === t && (M = !0), 0
			},
			X = 1 << 31,
			Y = {}.hasOwnProperty,
			V = [],
			G = V.pop,
			U = V.push,
			Q = V.push,
			K = V.slice,
			J = function(e, t) {
				for (var i = 0, s = e.length; s > i; i++)
					if (e[i] === t) return i;
				return -1
			},
			Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ee = "[\\x20\\t\\r\\n\\f]",
			te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ie = te.replace("w", "w#"),
			se = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ee + "*\\]",
			ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)",
			ae = new RegExp(ee + "+", "g"),
			re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
			oe = new RegExp("^" + ee + "*," + ee + "*"),
			le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
			de = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
			he = new RegExp(ne),
			ce = new RegExp("^" + ie + "$"),
			ue = {
				ID: new RegExp("^#(" + te + ")"),
				CLASS: new RegExp("^\\.(" + te + ")"),
				TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + se),
				PSEUDO: new RegExp("^" + ne),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + Z + ")$", "i"),
				needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
			},
			pe = /^(?:input|select|textarea|button)$/i,
			fe = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ge = /[+~]/,
			ye = /'|\\/g,
			be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
			we = function(e, t, i) {
				var s = "0x" + t - 65536;
				return s !== s || i ? t : 0 > s ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
			},
			xe = function() {
				z()
			};
		try {
			Q.apply(V = K.call(B.childNodes), B.childNodes), V[B.childNodes.length].nodeType
		} catch (e) {
			Q = {
				apply: V.length ? function(e, t) {
					U.apply(e, K.call(t))
				} : function(e, t) {
					for (var i = e.length, s = 0; e[i++] = t[s++];);
					e.length = i - 1
				}
			}
		}
		b = t.support = {}, T = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, z = t.setDocument = function(e) {
			var t, i, s = e ? e.ownerDocument || e : B;
			return s !== $ && 9 === s.nodeType && s.documentElement ? ($ = s, L = s.documentElement, i = s.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)), P = !T(s), b.attributes = n(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), b.getElementsByTagName = n(function(e) {
				return e.appendChild(s.createComment("")), !e.getElementsByTagName("*").length
			}), b.getElementsByClassName = ve.test(s.getElementsByClassName), b.getById = n(function(e) {
				return L.appendChild(e).id = H, !s.getElementsByName || !s.getElementsByName(H).length
			}), b.getById ? (w.find.ID = function(e, t) {
				if (void 0 !== t.getElementById && P) {
					var i = t.getElementById(e);
					return i && i.parentNode ? [i] : []
				}
			}, w.filter.ID = function(e) {
				var t = e.replace(be, we);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete w.find.ID, w.filter.ID = function(e) {
				var t = e.replace(be, we);
				return function(e) {
					var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
					return i && i.value === t
				}
			}), w.find.TAG = b.getElementsByTagName ? function(e, t) {
				return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var i, s = [],
					n = 0,
					a = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; i = a[n++];) 1 === i.nodeType && s.push(i);
					return s
				}
				return a
			}, w.find.CLASS = b.getElementsByClassName && function(e, t) {
				return P ? t.getElementsByClassName(e) : void 0
			}, D = [], I = [], (b.qsa = ve.test(s.querySelectorAll)) && (n(function(e) {
				L.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + H + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || I.push(".#.+[+~]")
			}), n(function(e) {
				var t = s.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
			})), (b.matchesSelector = ve.test(N = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && n(function(e) {
				b.disconnectedMatch = N.call(e, "div"), N.call(e, "[s!='']:x"), D.push("!=", ne)
			}), I = I.length && new RegExp(I.join("|")), D = D.length && new RegExp(D.join("|")), t = ve.test(L.compareDocumentPosition), O = t || ve.test(L.contains) ? function(e, t) {
				var i = 9 === e.nodeType ? e.documentElement : e,
					s = t && t.parentNode;
				return e === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(s)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, _ = t ? function(e, t) {
				if (e === t) return M = !0, 0;
				var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === s || e.ownerDocument === B && O(B, e) ? -1 : t === s || t.ownerDocument === B && O(B, t) ? 1 : A ? J(A, e) - J(A, t) : 0 : 4 & i ? -1 : 1)
			} : function(e, t) {
				if (e === t) return M = !0, 0;
				var i, n = 0,
					a = e.parentNode,
					o = t.parentNode,
					l = [e],
					d = [t];
				if (!a || !o) return e === s ? -1 : t === s ? 1 : a ? -1 : o ? 1 : A ? J(A, e) - J(A, t) : 0;
				if (a === o) return r(e, t);
				for (i = e; i = i.parentNode;) l.unshift(i);
				for (i = t; i = i.parentNode;) d.unshift(i);
				for (; l[n] === d[n];) n++;
				return n ? r(l[n], d[n]) : l[n] === B ? -1 : d[n] === B ? 1 : 0
			}, s) : $
		}, t.matches = function(e, i) {
			return t(e, null, null, i)
		}, t.matchesSelector = function(e, i) {
			if ((e.ownerDocument || e) !== $ && z(e), i = i.replace(de, "='$1']"), !(!b.matchesSelector || !P || D && D.test(i) || I && I.test(i))) try {
				var s = N.call(e, i);
				if (s || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return s
			} catch (e) {}
			return t(i, $, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== $ && z(e), O(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== $ && z(e);
			var i = w.attrHandle[t.toLowerCase()],
				s = i && Y.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !P) : void 0;
			return void 0 !== s ? s : b.attributes || !P ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, i = [],
				s = 0,
				n = 0;
			if (M = !b.detectDuplicates, A = !b.sortStable && e.slice(0), e.sort(_), M) {
				for (; t = e[n++];) t === e[n] && (s = i.push(n));
				for (; s--;) e.splice(i[s], 1)
			}
			return A = null, e
		}, x = t.getText = function(e) {
			var t, i = "",
				s = 0,
				n = e.nodeType;
			if (n) {
				if (1 === n || 9 === n || 11 === n) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) i += x(e)
				} else if (3 === n || 4 === n) return e.nodeValue
			} else
				for (; t = e[s++];) i += x(t);
			return i
		}, w = t.selectors = {
			cacheLength: 50,
			createPseudo: s,
			match: ue,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, i = !e[6] && e[2];
					return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && he.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(be, we).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = q[e + " "];
					return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && q(e, function(e) {
						return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, i, s) {
					return function(n) {
						var a = t.attr(n, e);
						return null == a ? "!=" === i : !i || (a += "", "=" === i ? a === s : "!=" === i ? a !== s : "^=" === i ? s && 0 === a.indexOf(s) : "*=" === i ? s && a.indexOf(s) > -1 : "$=" === i ? s && a.slice(-s.length) === s : "~=" === i ? (" " + a.replace(ae, " ") + " ").indexOf(s) > -1 : "|=" === i && (a === s || a.slice(0, s.length + 1) === s + "-"))
					}
				},
				CHILD: function(e, t, i, s, n) {
					var a = "nth" !== e.slice(0, 3),
						r = "last" !== e.slice(-4),
						o = "of-type" === t;
					return 1 === s && 0 === n ? function(e) {
						return !!e.parentNode
					} : function(t, i, l) {
						var d, h, c, u, p, f, v = a !== r ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							g = o && t.nodeName.toLowerCase(),
							y = !l && !o;
						if (m) {
							if (a) {
								for (; v;) {
									for (c = t; c = c[v];)
										if (o ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
									f = v = "only" === e && !f && "nextSibling"
								}
								return !0
							}
							if (f = [r ? m.firstChild : m.lastChild], r && y) {
								for (h = m[H] || (m[H] = {}), d = h[e] || [], p = d[0] === j && d[1], u = d[0] === j && d[2], c = p && m.childNodes[p]; c = ++p && c && c[v] || (u = p = 0) || f.pop();)
									if (1 === c.nodeType && ++u && c === t) {
										h[e] = [j, p, u];
										break
									}
							} else if (y && (d = (t[H] || (t[H] = {}))[e]) && d[0] === j) u = d[1];
							else
								for (;
									(c = ++p && c && c[v] || (u = p = 0) || f.pop()) && ((o ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++u || (y && ((c[H] || (c[H] = {}))[e] = [j, u]), c !== t)););
							return (u -= n) === s || u % s == 0 && u / s >= 0
						}
					}
				},
				PSEUDO: function(e, i) {
					var n, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return a[H] ? a(i) : a.length > 1 ? (n = [e, e, "", i], w.setFilters.hasOwnProperty(e.toLowerCase()) ? s(function(e, t) {
						for (var s, n = a(e, i), r = n.length; r--;) s = J(e, n[r]), e[s] = !(t[s] = n[r])
					}) : function(e) {
						return a(e, 0, n)
					}) : a
				}
			},
			pseudos: {
				not: s(function(e) {
					var t = [],
						i = [],
						n = E(e.replace(re, "$1"));
					return n[H] ? s(function(e, t, i, s) {
						for (var a, r = n(e, null, s, []), o = e.length; o--;)(a = r[o]) && (e[o] = !(t[o] = a))
					}) : function(e, s, a) {
						return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop()
					}
				}),
				has: s(function(e) {
					return function(i) {
						return t(e, i).length > 0
					}
				}),
				contains: s(function(e) {
					return e = e.replace(be, we),
						function(t) {
							return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
						}
				}),
				lang: s(function(e) {
					return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
						function(t) {
							var i;
							do {
								if (i = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var i = e.location && e.location.hash;
					return i && i.slice(1) === t.id
				},
				root: function(e) {
					return e === L
				},
				focus: function(e) {
					return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return !1 === e.disabled
				},
				disabled: function(e) {
					return !0 === e.disabled
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !w.pseudos.empty(e)
				},
				header: function(e) {
					return fe.test(e.nodeName)
				},
				input: function(e) {
					return pe.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: o(function() {
					return [0]
				}),
				last: o(function(e, t) {
					return [t - 1]
				}),
				eq: o(function(e, t, i) {
					return [0 > i ? i + t : i]
				}),
				even: o(function(e, t) {
					for (var i = 0; t > i; i += 2) e.push(i);
					return e
				}),
				odd: o(function(e, t) {
					for (var i = 1; t > i; i += 2) e.push(i);
					return e
				}),
				lt: o(function(e, t, i) {
					for (var s = 0 > i ? i + t : i; --s >= 0;) e.push(s);
					return e
				}),
				gt: o(function(e, t, i) {
					for (var s = 0 > i ? i + t : i; ++s < t;) e.push(s);
					return e
				})
			}
		}, w.pseudos.nth = w.pseudos.eq;
		for (y in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[y] = function(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}(y);
		for (y in {
				submit: !0,
				reset: !0
			}) w.pseudos[y] = function(e) {
			return function(t) {
				var i = t.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && t.type === e
			}
		}(y);
		return d.prototype = w.filters = w.pseudos, w.setFilters = new d, S = t.tokenize = function(e, i) {
			var s, n, a, r, o, l, d, h = R[e + " "];
			if (h) return i ? 0 : h.slice(0);
			for (o = e, l = [], d = w.preFilter; o;) {
				(!s || (n = oe.exec(o))) && (n && (o = o.slice(n[0].length) || o), l.push(a = [])), s = !1, (n = le.exec(o)) && (s = n.shift(), a.push({
					value: s,
					type: n[0].replace(re, " ")
				}), o = o.slice(s.length));
				for (r in w.filter) !(n = ue[r].exec(o)) || d[r] && !(n = d[r](n)) || (s = n.shift(), a.push({
					value: s,
					type: r,
					matches: n
				}), o = o.slice(s.length));
				if (!s) break
			}
			return i ? o.length : o ? t.error(e) : R(e, l).slice(0)
		}, E = t.compile = function(e, t) {
			var i, s = [],
				n = [],
				a = W[e + " "];
			if (!a) {
				for (t || (t = S(e)), i = t.length; i--;) a = m(t[i]), a[H] ? s.push(a) : n.push(a);
				a = W(e, g(n, s)), a.selector = e
			}
			return a
		}, C = t.select = function(e, t, i, s) {
			var n, a, r, o, d, c = "function" == typeof e && e,
				u = !s && S(e = c.selector || e);
			if (i = i || [], 1 === u.length) {
				if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (r = a[0]).type && b.getById && 9 === t.nodeType && P && w.relative[a[1].type]) {
					if (!(t = (w.find.ID(r.matches[0].replace(be, we), t) || [])[0])) return i;
					c && (t = t.parentNode), e = e.slice(a.shift().value.length)
				}
				for (n = ue.needsContext.test(e) ? 0 : a.length; n-- && (r = a[n], !w.relative[o = r.type]);)
					if ((d = w.find[o]) && (s = d(r.matches[0].replace(be, we), ge.test(a[0].type) && l(t.parentNode) || t))) {
						if (a.splice(n, 1), !(e = s.length && h(a))) return Q.apply(i, s), i;
						break
					}
			}
			return (c || E(e, u))(s, t, !P, i, ge.test(e) && l(t.parentNode) || t), i
		}, b.sortStable = H.split("").sort(_).join("") === H, b.detectDuplicates = !!M, z(), b.sortDetached = n(function(e) {
			return 1 & e.compareDocumentPosition($.createElement("div"))
		}), n(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || a("type|href|height|width", function(e, t, i) {
			return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), b.attributes && n(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || a("value", function(e, t, i) {
			return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), n(function(e) {
			return null == e.getAttribute("disabled")
		}) || a(Z, function(e, t, i) {
			var s;
			return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
		}), t
	}(e);
	ne.find = de, ne.expr = de.selectors, ne.expr[":"] = ne.expr.pseudos, ne.unique = de.uniqueSort, ne.text = de.getText, ne.isXMLDoc = de.isXML, ne.contains = de.contains;
	var he = ne.expr.match.needsContext,
		ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ue = /^.[^:#\[\.,]*$/;
	ne.filter = function(e, t, i) {
		var s = t[0];
		return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === s.nodeType ? ne.find.matchesSelector(s, e) ? [s] : [] : ne.find.matches(e, ne.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, ne.fn.extend({
		find: function(e) {
			var t, i = [],
				s = this,
				n = s.length;
			if ("string" != typeof e) return this.pushStack(ne(e).filter(function() {
				for (t = 0; n > t; t++)
					if (ne.contains(s[t], this)) return !0
			}));
			for (t = 0; n > t; t++) ne.find(e, s[t], i);
			return i = this.pushStack(n > 1 ? ne.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
		},
		filter: function(e) {
			return this.pushStack(s(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(s(this, e || [], !0))
		},
		is: function(e) {
			return !!s(this, "string" == typeof e && he.test(e) ? ne(e) : e || [], !1).length
		}
	});
	var pe, fe = e.document,
		ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(ne.fn.init = function(e, t) {
		var i, s;
		if (!e) return this;
		if ("string" == typeof e) {
			if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof ne ? t[0] : t, ne.merge(this, ne.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), ce.test(i[1]) && ne.isPlainObject(t))
					for (i in t) ne.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			if ((s = fe.getElementById(i[2])) && s.parentNode) {
				if (s.id !== i[2]) return pe.find(e);
				this.length = 1, this[0] = s
			}
			return this.context = fe, this.selector = e, this
		}
		return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ne.isFunction(e) ? void 0 !== pe.ready ? pe.ready(e) : e(ne) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ne.makeArray(e, this))
	}).prototype = ne.fn, pe = ne(fe);
	var me = /^(?:parents|prev(?:Until|All))/,
		ge = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	ne.extend({
		dir: function(e, t, i) {
			for (var s = [], n = e[t]; n && 9 !== n.nodeType && (void 0 === i || 1 !== n.nodeType || !ne(n).is(i));) 1 === n.nodeType && s.push(n), n = n[t];
			return s
		},
		sibling: function(e, t) {
			for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
			return i
		}
	}), ne.fn.extend({
		has: function(e) {
			var t, i = ne(e, this),
				s = i.length;
			return this.filter(function() {
				for (t = 0; s > t; t++)
					if (ne.contains(this, i[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var i, s = 0, n = this.length, a = [], r = he.test(e) || "string" != typeof e ? ne(e, t || this.context) : 0; n > s; s++)
				for (i = this[s]; i && i !== t; i = i.parentNode)
					if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && ne.find.matchesSelector(i, e))) {
						a.push(i);
						break
					}
			return this.pushStack(a.length > 1 ? ne.unique(a) : a)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ne.inArray(this[0], ne(e)) : ne.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(ne.unique(ne.merge(this.get(), ne(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), ne.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ne.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, i) {
			return ne.dir(e, "parentNode", i)
		},
		next: function(e) {
			return n(e, "nextSibling")
		},
		prev: function(e) {
			return n(e, "previousSibling")
		},
		nextAll: function(e) {
			return ne.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ne.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, i) {
			return ne.dir(e, "nextSibling", i)
		},
		prevUntil: function(e, t, i) {
			return ne.dir(e, "previousSibling", i)
		},
		siblings: function(e) {
			return ne.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ne.sibling(e.firstChild)
		},
		contents: function(e) {
			return ne.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ne.merge([], e.childNodes)
		}
	}, function(e, t) {
		ne.fn[e] = function(i, s) {
			var n = ne.map(this, t, i);
			return "Until" !== e.slice(-5) && (s = i), s && "string" == typeof s && (n = ne.filter(s, n)), this.length > 1 && (ge[e] || (n = ne.unique(n)), me.test(e) && (n = n.reverse())), this.pushStack(n)
		}
	});
	var ye = /\S+/g,
		be = {};
	ne.Callbacks = function(e) {
		e = "string" == typeof e ? be[e] || a(e) : ne.extend({}, e);
		var t, i, s, n, r, o, l = [],
			d = !e.once && [],
			h = function(a) {
				for (i = e.memory && a, s = !0, r = o || 0, o = 0, n = l.length, t = !0; l && n > r; r++)
					if (!1 === l[r].apply(a[0], a[1]) && e.stopOnFalse) {
						i = !1;
						break
					}
				t = !1, l && (d ? d.length && h(d.shift()) : i ? l = [] : c.disable())
			},
			c = {
				add: function() {
					if (l) {
						var s = l.length;
						! function t(i) {
							ne.each(i, function(i, s) {
								var n = ne.type(s);
								"function" === n ? e.unique && c.has(s) || l.push(s) : s && s.length && "string" !== n && t(s)
							})
						}(arguments), t ? n = l.length : i && (o = s, h(i))
					}
					return this
				},
				remove: function() {
					return l && ne.each(arguments, function(e, i) {
						for (var s;
							(s = ne.inArray(i, l, s)) > -1;) l.splice(s, 1), t && (n >= s && n--, r >= s && r--)
					}), this
				},
				has: function(e) {
					return e ? ne.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], n = 0, this
				},
				disable: function() {
					return l = d = i = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return d = void 0, i || c.disable(), this
				},
				locked: function() {
					return !d
				},
				fireWith: function(e, i) {
					return !l || s && !d || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? d.push(i) : h(i)), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!s
				}
			};
		return c
	}, ne.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", ne.Callbacks("once memory"), "resolved"],
					["reject", "fail", ne.Callbacks("once memory"), "rejected"],
					["notify", "progress", ne.Callbacks("memory")]
				],
				i = "pending",
				s = {
					state: function() {
						return i
					},
					always: function() {
						return n.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return ne.Deferred(function(i) {
							ne.each(t, function(t, a) {
								var r = ne.isFunction(e[t]) && e[t];
								n[a[1]](function() {
									var e = r && r.apply(this, arguments);
									e && ne.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === s ? i.promise() : this, r ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? ne.extend(e, s) : s
					}
				},
				n = {};
			return s.pipe = s.then, ne.each(t, function(e, a) {
				var r = a[2],
					o = a[3];
				s[a[1]] = r.add, o && r.add(function() {
					i = o
				}, t[1 ^ e][2].disable, t[2][2].lock), n[a[0]] = function() {
					return n[a[0] + "With"](this === n ? s : this, arguments), this
				}, n[a[0] + "With"] = r.fireWith
			}), s.promise(n), e && e.call(n, n), n
		},
		when: function(e) {
			var t, i, s, n = 0,
				a = U.call(arguments),
				r = a.length,
				o = 1 !== r || e && ne.isFunction(e.promise) ? r : 0,
				l = 1 === o ? e : ne.Deferred(),
				d = function(e, i, s) {
					return function(n) {
						i[e] = this, s[e] = arguments.length > 1 ? U.call(arguments) : n, s === t ? l.notifyWith(i, s) : --o || l.resolveWith(i, s)
					}
				};
			if (r > 1)
				for (t = new Array(r), i = new Array(r), s = new Array(r); r > n; n++) a[n] && ne.isFunction(a[n].promise) ? a[n].promise().done(d(n, s, a)).fail(l.reject).progress(d(n, i, t)) : --o;
			return o || l.resolveWith(s, a), l.promise()
		}
	});
	var we;
	ne.fn.ready = function(e) {
		return ne.ready.promise().done(e), this
	}, ne.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? ne.readyWait++ : ne.ready(!0)
		},
		ready: function(e) {
			if (!0 === e ? !--ne.readyWait : !ne.isReady) {
				if (!fe.body) return setTimeout(ne.ready);
				ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || (we.resolveWith(fe, [ne]), ne.fn.triggerHandler && (ne(fe).triggerHandler("ready"), ne(fe).off("ready")))
			}
		}
	}), ne.ready.promise = function(t) {
		if (!we)
			if (we = ne.Deferred(), "complete" === fe.readyState) setTimeout(ne.ready);
			else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", o, !1), e.addEventListener("load", o, !1);
		else {
			fe.attachEvent("onreadystatechange", o), e.attachEvent("onload", o);
			var i = !1;
			try {
				i = null == e.frameElement && fe.documentElement
			} catch (e) {}
			i && i.doScroll && function e() {
				if (!ne.isReady) {
					try {
						i.doScroll("left")
					} catch (t) {
						return setTimeout(e, 50)
					}
					r(), ne.ready()
				}
			}()
		}
		return we.promise(t)
	};
	var xe, Te = "undefined";
	for (xe in ne(ie)) break;
	ie.ownLast = "0" !== xe, ie.inlineBlockNeedsLayout = !1, ne(function() {
			var e, t, i, s;
			(i = fe.getElementsByTagName("body")[0]) && i.style && (t = fe.createElement("div"), s = fe.createElement("div"), s.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(s).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(s))
		}),
		function() {
			var e = fe.createElement("div");
			if (null == ie.deleteExpando) {
				ie.deleteExpando = !0;
				try {
					delete e.test
				} catch (e) {
					ie.deleteExpando = !1
				}
			}
			e = null
		}(), ne.acceptData = function(e) {
			var t = ne.noData[(e.nodeName + " ").toLowerCase()],
				i = +e.nodeType || 1;
			return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
		};
	var Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ee = /([A-Z])/g;
	ne.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return !!(e = e.nodeType ? ne.cache[e[ne.expando]] : e[ne.expando]) && !d(e)
		},
		data: function(e, t, i) {
			return h(e, t, i)
		},
		removeData: function(e, t) {
			return c(e, t)
		},
		_data: function(e, t, i) {
			return h(e, t, i, !0)
		},
		_removeData: function(e, t) {
			return c(e, t, !0)
		}
	}), ne.fn.extend({
		data: function(e, t) {
			var i, s, n, a = this[0],
				r = a && a.attributes;
			if (void 0 === e) {
				if (this.length && (n = ne.data(a), 1 === a.nodeType && !ne._data(a, "parsedAttrs"))) {
					for (i = r.length; i--;) r[i] && (s = r[i].name, 0 === s.indexOf("data-") && (s = ne.camelCase(s.slice(5)), l(a, s, n[s])));
					ne._data(a, "parsedAttrs", !0)
				}
				return n
			}
			return "object" == typeof e ? this.each(function() {
				ne.data(this, e)
			}) : arguments.length > 1 ? this.each(function() {
				ne.data(this, e, t)
			}) : a ? l(a, e, ne.data(a, e)) : void 0
		},
		removeData: function(e) {
			return this.each(function() {
				ne.removeData(this, e)
			})
		}
	}), ne.extend({
		queue: function(e, t, i) {
			var s;
			return e ? (t = (t || "fx") + "queue", s = ne._data(e, t), i && (!s || ne.isArray(i) ? s = ne._data(e, t, ne.makeArray(i)) : s.push(i)), s || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var i = ne.queue(e, t),
				s = i.length,
				n = i.shift(),
				a = ne._queueHooks(e, t),
				r = function() {
					ne.dequeue(e, t)
				};
			"inprogress" === n && (n = i.shift(), s--), n && ("fx" === t && i.unshift("inprogress"), delete a.stop, n.call(e, r, a)), !s && a && a.empty.fire()
		},
		_queueHooks: function(e, t) {
			var i = t + "queueHooks";
			return ne._data(e, i) || ne._data(e, i, {
				empty: ne.Callbacks("once memory").add(function() {
					ne._removeData(e, t + "queue"), ne._removeData(e, i)
				})
			})
		}
	}), ne.fn.extend({
		queue: function(e, t) {
			var i = 2;
			return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? ne.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var i = ne.queue(this, e, t);
				ne._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && ne.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ne.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var i, s = 1,
				n = ne.Deferred(),
				a = this,
				r = this.length,
				o = function() {
					--s || n.resolveWith(a, [a])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = ne._data(a[r], e + "queueHooks")) && i.empty && (s++, i.empty.add(o));
			return o(), n.promise(t)
		}
	});
	var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ke = ["Top", "Right", "Bottom", "Left"],
		Ae = function(e, t) {
			return e = t || e, "none" === ne.css(e, "display") || !ne.contains(e.ownerDocument, e)
		},
		Me = ne.access = function(e, t, i, s, n, a, r) {
			var o = 0,
				l = e.length,
				d = null == i;
			if ("object" === ne.type(i)) {
				n = !0;
				for (o in i) ne.access(e, t, o, i[o], !0, a, r)
			} else if (void 0 !== s && (n = !0, ne.isFunction(s) || (r = !0), d && (r ? (t.call(e, s), t = null) : (d = t, t = function(e, t, i) {
					return d.call(ne(e), i)
				})), t))
				for (; l > o; o++) t(e[o], i, r ? s : s.call(e[o], o, t(e[o], i)));
			return n ? e : d ? t.call(e) : l ? t(e[0], i) : a
		},
		ze = /^(?:checkbox|radio)$/i;
	! function() {
		var e = fe.createElement("input"),
			t = fe.createElement("div"),
			i = fe.createDocumentFragment();
		if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), ie.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
				ie.noCloneEvent = !1
			}), t.cloneNode(!0).click()), null == ie.deleteExpando) {
			ie.deleteExpando = !0;
			try {
				delete t.test
			} catch (e) {
				ie.deleteExpando = !1
			}
		}
	}(),
	function() {
		var t, i, s = fe.createElement("div");
		for (t in {
				submit: !0,
				change: !0,
				focusin: !0
			}) i = "on" + t, (ie[t + "Bubbles"] = i in e) || (s.setAttribute(i, "t"), ie[t + "Bubbles"] = !1 === s.attributes[i].expando);
		s = null
	}();
	var $e = /^(?:input|select|textarea)$/i,
		Le = /^key/,
		Pe = /^(?:mouse|pointer|contextmenu)|click/,
		Ie = /^(?:focusinfocus|focusoutblur)$/,
		De = /^([^.]*)(?:\.(.+)|)$/;
	ne.event = {
		global: {},
		add: function(e, t, i, s, n) {
			var a, r, o, l, d, h, c, u, p, f, v, m = ne._data(e);
			if (m) {
				for (i.handler && (l = i, i = l.handler, n = l.selector), i.guid || (i.guid = ne.guid++), (r = m.events) || (r = m.events = {}), (h = m.handle) || (h = m.handle = function(e) {
						return typeof ne === Te || e && ne.event.triggered === e.type ? void 0 : ne.event.dispatch.apply(h.elem, arguments)
					}, h.elem = e), t = (t || "").match(ye) || [""], o = t.length; o--;) a = De.exec(t[o]) || [], p = v = a[1], f = (a[2] || "").split(".").sort(), p && (d = ne.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, d = ne.event.special[p] || {}, c = ne.extend({
					type: p,
					origType: v,
					data: s,
					handler: i,
					guid: i.guid,
					selector: n,
					needsContext: n && ne.expr.match.needsContext.test(n),
					namespace: f.join(".")
				}, l), (u = r[p]) || (u = r[p] = [], u.delegateCount = 0, d.setup && !1 !== d.setup.call(e, s, f, h) || (e.addEventListener ? e.addEventListener(p, h, !1) : e.attachEvent && e.attachEvent("on" + p, h))), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), n ? u.splice(u.delegateCount++, 0, c) : u.push(c), ne.event.global[p] = !0);
				e = null
			}
		},
		remove: function(e, t, i, s, n) {
			var a, r, o, l, d, h, c, u, p, f, v, m = ne.hasData(e) && ne._data(e);
			if (m && (h = m.events)) {
				for (t = (t || "").match(ye) || [""], d = t.length; d--;)
					if (o = De.exec(t[d]) || [], p = v = o[1], f = (o[2] || "").split(".").sort(), p) {
						for (c = ne.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, u = h[p] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = u.length; a--;) r = u[a], !n && v !== r.origType || i && i.guid !== r.guid || o && !o.test(r.namespace) || s && s !== r.selector && ("**" !== s || !r.selector) || (u.splice(a, 1), r.selector && u.delegateCount--, c.remove && c.remove.call(e, r));
						l && !u.length && (c.teardown && !1 !== c.teardown.call(e, f, m.handle) || ne.removeEvent(e, p, m.handle), delete h[p])
					} else
						for (p in h) ne.event.remove(e, p + t[d], i, s, !0);
				ne.isEmptyObject(h) && (delete m.handle, ne._removeData(e, "events"))
			}
		},
		trigger: function(t, i, s, n) {
			var a, r, o, l, d, h, c, u = [s || fe],
				p = te.call(t, "type") ? t.type : t,
				f = te.call(t, "namespace") ? t.namespace.split(".") : [];
			if (o = h = s = s || fe, 3 !== s.nodeType && 8 !== s.nodeType && !Ie.test(p + ne.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, t = t[ne.expando] ? t : new ne.Event(p, "object" == typeof t && t), t.isTrigger = n ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = s), i = null == i ? [t] : ne.makeArray(i, [t]), d = ne.event.special[p] || {}, n || !d.trigger || !1 !== d.trigger.apply(s, i))) {
				if (!n && !d.noBubble && !ne.isWindow(s)) {
					for (l = d.delegateType || p, Ie.test(l + p) || (o = o.parentNode); o; o = o.parentNode) u.push(o), h = o;
					h === (s.ownerDocument || fe) && u.push(h.defaultView || h.parentWindow || e)
				}
				for (c = 0;
					(o = u[c++]) && !t.isPropagationStopped();) t.type = c > 1 ? l : d.bindType || p, a = (ne._data(o, "events") || {})[t.type] && ne._data(o, "handle"), a && a.apply(o, i), (a = r && o[r]) && a.apply && ne.acceptData(o) && (t.result = a.apply(o, i), !1 === t.result && t.preventDefault());
				if (t.type = p, !n && !t.isDefaultPrevented() && (!d._default || !1 === d._default.apply(u.pop(), i)) && ne.acceptData(s) && r && s[p] && !ne.isWindow(s)) {
					h = s[r], h && (s[r] = null), ne.event.triggered = p;
					try {
						s[p]()
					} catch (e) {}
					ne.event.triggered = void 0, h && (s[r] = h)
				}
				return t.result
			}
		},
		dispatch: function(e) {
			e = ne.event.fix(e);
			var t, i, s, n, a, r = [],
				o = U.call(arguments),
				l = (ne._data(this, "events") || {})[e.type] || [],
				d = ne.event.special[e.type] || {};
			if (o[0] = e, e.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
				for (r = ne.event.handlers.call(this, e, l), t = 0;
					(n = r[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = n.elem, a = 0;
						(s = n.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, void 0 !== (i = ((ne.event.special[s.origType] || {}).handle || s.handler).apply(n.elem, o)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
				return d.postDispatch && d.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var i, s, n, a, r = [],
				o = t.delegateCount,
				l = e.target;
			if (o && l.nodeType && (!e.button || "click" !== e.type))
				for (; l != this; l = l.parentNode || this)
					if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
						for (n = [], a = 0; o > a; a++) s = t[a], i = s.selector + " ", void 0 === n[i] && (n[i] = s.needsContext ? ne(i, this).index(l) >= 0 : ne.find(i, this, null, [l]).length), n[i] && n.push(s);
						n.length && r.push({
							elem: l,
							handlers: n
						})
					}
			return o < t.length && r.push({
				elem: this,
				handlers: t.slice(o)
			}), r
		},
		fix: function(e) {
			if (e[ne.expando]) return e;
			var t, i, s, n = e.type,
				a = e,
				r = this.fixHooks[n];
			for (r || (this.fixHooks[n] = r = Pe.test(n) ? this.mouseHooks : Le.test(n) ? this.keyHooks : {}), s = r.props ? this.props.concat(r.props) : this.props, e = new ne.Event(a), t = s.length; t--;) i = s[t], e[i] = a[i];
			return e.target || (e.target = a.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, a) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var i, s, n, a = t.button,
					r = t.fromElement;
				return null == e.pageX && null != t.clientX && (s = e.target.ownerDocument || fe, n = s.documentElement, i = s.body, e.pageX = t.clientX + (n && n.scrollLeft || i && i.scrollLeft || 0) - (n && n.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || i && i.scrollTop || 0) - (n && n.clientTop || i && i.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== f() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return ne.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return ne.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, i, s) {
			var n = ne.extend(new ne.Event, i, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			s ? ne.event.trigger(n, null, t) : ne.event.dispatch.call(t, n), n.isDefaultPrevented() && i.preventDefault()
		}
	}, ne.removeEvent = fe.removeEventListener ? function(e, t, i) {
		e.removeEventListener && e.removeEventListener(t, i, !1)
	} : function(e, t, i) {
		var s = "on" + t;
		e.detachEvent && (typeof e[s] === Te && (e[s] = null), e.detachEvent(s, i))
	}, ne.Event = function(e, t) {
		return this instanceof ne.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? u : p) : this.type = e, t && ne.extend(this, t), this.timeStamp = e && e.timeStamp || ne.now(), void(this[ne.expando] = !0)) : new ne.Event(e, t)
	}, ne.Event.prototype = {
		isDefaultPrevented: p,
		isPropagationStopped: p,
		isImmediatePropagationStopped: p,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, ne.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		ne.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var i, s = this,
					n = e.relatedTarget,
					a = e.handleObj;
				return (!n || n !== s && !ne.contains(s, n)) && (e.type = a.origType, i = a.handler.apply(this, arguments), e.type = t), i
			}
		}
	}), ie.submitBubbles || (ne.event.special.submit = {
		setup: function() {
			return !ne.nodeName(this, "form") && void ne.event.add(this, "click._submit keypress._submit", function(e) {
				var t = e.target,
					i = ne.nodeName(t, "input") || ne.nodeName(t, "button") ? t.form : void 0;
				i && !ne._data(i, "submitBubbles") && (ne.event.add(i, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), ne._data(i, "submitBubbles", !0))
			})
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ne.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return !ne.nodeName(this, "form") && void ne.event.remove(this, "._submit")
		}
	}), ie.changeBubbles || (ne.event.special.change = {
		setup: function() {
			return $e.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ne.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ne.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), ne.event.simulate("change", this, e, !0)
			})), !1) : void ne.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				$e.test(t.nodeName) && !ne._data(t, "changeBubbles") && (ne.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || ne.event.simulate("change", this.parentNode, e, !0)
				}), ne._data(t, "changeBubbles", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return ne.event.remove(this, "._change"), !$e.test(this.nodeName)
		}
	}), ie.focusinBubbles || ne.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var i = function(e) {
			ne.event.simulate(t, e.target, ne.event.fix(e), !0)
		};
		ne.event.special[t] = {
			setup: function() {
				var s = this.ownerDocument || this,
					n = ne._data(s, t);
				n || s.addEventListener(e, i, !0), ne._data(s, t, (n || 0) + 1)
			},
			teardown: function() {
				var s = this.ownerDocument || this,
					n = ne._data(s, t) - 1;
				n ? ne._data(s, t, n) : (s.removeEventListener(e, i, !0), ne._removeData(s, t))
			}
		}
	}), ne.fn.extend({
		on: function(e, t, i, s, n) {
			var a, r;
			if ("object" == typeof e) {
				"string" != typeof t && (i = i || t, t = void 0);
				for (a in e) this.on(a, t, i, e[a], n);
				return this
			}
			if (null == i && null == s ? (s = t, i = t = void 0) : null == s && ("string" == typeof t ? (s = i, i = void 0) : (s = i, i = t, t = void 0)), !1 === s) s = p;
			else if (!s) return this;
			return 1 === n && (r = s, s = function(e) {
				return ne().off(e), r.apply(this, arguments)
			}, s.guid = r.guid || (r.guid = ne.guid++)), this.each(function() {
				ne.event.add(this, e, s, i, t)
			})
		},
		one: function(e, t, i, s) {
			return this.on(e, t, i, s, 1)
		},
		off: function(e, t, i) {
			var s, n;
			if (e && e.preventDefault && e.handleObj) return s = e.handleObj, ne(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
			if ("object" == typeof e) {
				for (n in e) this.off(n, t, e[n]);
				return this
			}
			return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = p), this.each(function() {
				ne.event.remove(this, e, i, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				ne.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var i = this[0];
			return i ? ne.event.trigger(e, t, i, !0) : void 0
		}
	});
	var Ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Oe = / jQuery\d+="(?:null|\d+)"/g,
		He = new RegExp("<(?:" + Ne + ")[\\s/>]", "i"),
		Be = /^\s+/,
		je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Fe = /<([\w:]+)/,
		qe = /<tbody/i,
		Re = /<|&#?\w+;/,
		We = /<(?:script|style|link)/i,
		_e = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Xe = /^$|\/(?:java|ecma)script/i,
		Ye = /^true\/(.*)/,
		Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ge = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		Ue = v(fe),
		Qe = Ue.appendChild(fe.createElement("div"));
	Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, ne.extend({
		clone: function(e, t, i) {
			var s, n, a, r, o, l = ne.contains(e.ownerDocument, e);
			if (ie.html5Clone || ne.isXMLDoc(e) || !He.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, Qe.removeChild(a = Qe.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e)))
				for (s = m(a), o = m(e), r = 0; null != (n = o[r]); ++r) s[r] && S(n, s[r]);
			if (t)
				if (i)
					for (o = o || m(e), s = s || m(a), r = 0; null != (n = o[r]); r++) T(n, s[r]);
				else T(e, a);
			return s = m(a, "script"), s.length > 0 && x(s, !l && m(e, "script")), s = o = n = null, a
		},
		buildFragment: function(e, t, i, s) {
			for (var n, a, r, o, l, d, h, c = e.length, u = v(t), p = [], f = 0; c > f; f++)
				if ((a = e[f]) || 0 === a)
					if ("object" === ne.type(a)) ne.merge(p, a.nodeType ? [a] : a);
					else if (Re.test(a)) {
				for (o = o || u.appendChild(t.createElement("div")), l = (Fe.exec(a) || ["", ""])[1].toLowerCase(), h = Ge[l] || Ge._default, o.innerHTML = h[1] + a.replace(je, "<$1></$2>") + h[2], n = h[0]; n--;) o = o.lastChild;
				if (!ie.leadingWhitespace && Be.test(a) && p.push(t.createTextNode(Be.exec(a)[0])), !ie.tbody)
					for (a = "table" !== l || qe.test(a) ? "<table>" !== h[1] || qe.test(a) ? 0 : o : o.firstChild, n = a && a.childNodes.length; n--;) ne.nodeName(d = a.childNodes[n], "tbody") && !d.childNodes.length && a.removeChild(d);
				for (ne.merge(p, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
				o = u.lastChild
			} else p.push(t.createTextNode(a));
			for (o && u.removeChild(o), ie.appendChecked || ne.grep(m(p, "input"), g), f = 0; a = p[f++];)
				if ((!s || -1 === ne.inArray(a, s)) && (r = ne.contains(a.ownerDocument, a), o = m(u.appendChild(a), "script"), r && x(o), i))
					for (n = 0; a = o[n++];) Xe.test(a.type || "") && i.push(a);
			return o = null, u
		},
		cleanData: function(e, t) {
			for (var i, s, n, a, r = 0, o = ne.expando, l = ne.cache, d = ie.deleteExpando, h = ne.event.special; null != (i = e[r]); r++)
				if ((t || ne.acceptData(i)) && (n = i[o], a = n && l[n])) {
					if (a.events)
						for (s in a.events) h[s] ? ne.event.remove(i, s) : ne.removeEvent(i, s, a.handle);
					l[n] && (delete l[n], d ? delete i[o] : typeof i.removeAttribute !== Te ? i.removeAttribute(o) : i[o] = null, G.push(n))
				}
		}
	}), ne.fn.extend({
		text: function(e) {
			return Me(this, function(e) {
				return void 0 === e ? ne.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					y(this, e).appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = y(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var i, s = e ? ne.filter(e, this) : this, n = 0; null != (i = s[n]); n++) t || 1 !== i.nodeType || ne.cleanData(m(i)), i.parentNode && (t && ne.contains(i.ownerDocument, i) && x(m(i, "script")), i.parentNode.removeChild(i));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ne.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ne.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return ne.clone(this, e, t)
			})
		},
		html: function(e) {
			return Me(this, function(e) {
				var t = this[0] || {},
					i = 0,
					s = this.length;
				if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") : void 0;
				if (!("string" != typeof e || We.test(e) || !ie.htmlSerialize && He.test(e) || !ie.leadingWhitespace && Be.test(e) || Ge[(Fe.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(je, "<$1></$2>");
					try {
						for (; s > i; i++) t = this[i] || {}, 1 === t.nodeType && (ne.cleanData(m(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, ne.cleanData(m(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = Q.apply([], e);
			var i, s, n, a, r, o, l = 0,
				d = this.length,
				h = this,
				c = d - 1,
				u = e[0],
				p = ne.isFunction(u);
			if (p || d > 1 && "string" == typeof u && !ie.checkClone && _e.test(u)) return this.each(function(i) {
				var s = h.eq(i);
				p && (e[0] = u.call(this, i, s.html())), s.domManip(e, t)
			});
			if (d && (o = ne.buildFragment(e, this[0].ownerDocument, !1, this), i = o.firstChild, 1 === o.childNodes.length && (o = i), i)) {
				for (a = ne.map(m(o, "script"), b), n = a.length; d > l; l++) s = o, l !== c && (s = ne.clone(s, !0, !0), n && ne.merge(a, m(s, "script"))), t.call(this[l], s, l);
				if (n)
					for (r = a[a.length - 1].ownerDocument, ne.map(a, w), l = 0; n > l; l++) s = a[l], Xe.test(s.type || "") && !ne._data(s, "globalEval") && ne.contains(r, s) && (s.src ? ne._evalUrl && ne._evalUrl(s.src) : ne.globalEval((s.text || s.textContent || s.innerHTML || "").replace(Ve, "")));
				o = i = null
			}
			return this
		}
	}), ne.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		ne.fn[e] = function(e) {
			for (var i, s = 0, n = [], a = ne(e), r = a.length - 1; r >= s; s++) i = s === r ? this : this.clone(!0), ne(a[s])[t](i), K.apply(n, i.get());
			return this.pushStack(n)
		}
	});
	var Ke, Je = {};
	! function() {
		var e;
		ie.shrinkWrapBlocks = function() {
			if (null != e) return e;
			e = !1;
			var t, i, s;
			return i = fe.getElementsByTagName("body")[0], i && i.style ? (t = fe.createElement("div"), s = fe.createElement("div"), s.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(s).appendChild(t), typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(s), e) : void 0
		}
	}();
	var Ze, et, tt = /^margin/,
		it = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
		st = /^(top|right|bottom|left)$/;
	e.getComputedStyle ? (Ze = function(t) {
		return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
	}, et = function(e, t, i) {
		var s, n, a, r, o = e.style;
		return i = i || Ze(e), r = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== r || ne.contains(e.ownerDocument, e) || (r = ne.style(e, t)), it.test(r) && tt.test(t) && (s = o.width, n = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = s, o.minWidth = n,
			o.maxWidth = a)), void 0 === r ? r : r + ""
	}) : fe.documentElement.currentStyle && (Ze = function(e) {
		return e.currentStyle
	}, et = function(e, t, i) {
		var s, n, a, r, o = e.style;
		return i = i || Ze(e), r = i ? i[t] : void 0, null == r && o && o[t] && (r = o[t]), it.test(r) && !st.test(t) && (s = o.left, n = e.runtimeStyle, a = n && n.left, a && (n.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = s, a && (n.left = a)), void 0 === r ? r : r + "" || "auto"
	}), ! function() {
		function t() {
			var t, i, s, n;
			(i = fe.getElementsByTagName("body")[0]) && i.style && (t = fe.createElement("div"), s = fe.createElement("div"), s.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(s).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = r = !1, l = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {
				width: "4px"
			}).width, n = t.appendChild(fe.createElement("div")), n.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight), t.removeChild(n)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", n = t.getElementsByTagName("td"), n[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === n[0].offsetHeight, o && (n[0].style.display = "", n[1].style.display = "none", o = 0 === n[0].offsetHeight), i.removeChild(s))
		}
		var i, s, n, a, r, o, l;
		i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = i.getElementsByTagName("a")[0], (s = n && n.style) && (s.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === s.opacity, ie.cssFloat = !!s.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === s.boxSizing || "" === s.MozBoxSizing || "" === s.WebkitBoxSizing, ne.extend(ie, {
			reliableHiddenOffsets: function() {
				return null == o && t(), o
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			pixelPosition: function() {
				return null == a && t(), a
			},
			reliableMarginRight: function() {
				return null == l && t(), l
			}
		}))
	}(), ne.swap = function(e, t, i, s) {
		var n, a, r = {};
		for (a in t) r[a] = e.style[a], e.style[a] = t[a];
		n = i.apply(e, s || []);
		for (a in t) e.style[a] = r[a];
		return n
	};
	var nt = /alpha\([^)]*\)/i,
		at = /opacity\s*=\s*([^)]*)/,
		rt = /^(none|table(?!-c[ea]).+)/,
		ot = new RegExp("^(" + Ce + ")(.*)$", "i"),
		lt = new RegExp("^([+-])=(" + Ce + ")", "i"),
		dt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ht = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		ct = ["Webkit", "O", "Moz", "ms"];
	ne.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var i = et(e, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: ie.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, i, s) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var n, a, r, o = ne.camelCase(t),
					l = e.style;
				if (t = ne.cssProps[o] || (ne.cssProps[o] = A(l, o)), r = ne.cssHooks[t] || ne.cssHooks[o], void 0 === i) return r && "get" in r && void 0 !== (n = r.get(e, !1, s)) ? n : l[t];
				if (a = typeof i, "string" === a && (n = lt.exec(i)) && (i = (n[1] + 1) * n[2] + parseFloat(ne.css(e, t)), a = "number"), null != i && i === i && ("number" !== a || ne.cssNumber[o] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && void 0 === (i = r.set(e, i, s))))) try {
					l[t] = i
				} catch (e) {}
			}
		},
		css: function(e, t, i, s) {
			var n, a, r, o = ne.camelCase(t);
			return t = ne.cssProps[o] || (ne.cssProps[o] = A(e.style, o)), r = ne.cssHooks[t] || ne.cssHooks[o], r && "get" in r && (a = r.get(e, !0, i)), void 0 === a && (a = et(e, t, s)), "normal" === a && t in ht && (a = ht[t]), "" === i || i ? (n = parseFloat(a), !0 === i || ne.isNumeric(n) ? n || 0 : a) : a
		}
	}), ne.each(["height", "width"], function(e, t) {
		ne.cssHooks[t] = {
			get: function(e, i, s) {
				return i ? rt.test(ne.css(e, "display")) && 0 === e.offsetWidth ? ne.swap(e, dt, function() {
					return L(e, t, s)
				}) : L(e, t, s) : void 0
			},
			set: function(e, i, s) {
				var n = s && Ze(e);
				return z(e, i, s ? $(e, t, s, ie.boxSizing && "border-box" === ne.css(e, "boxSizing", !1, n), n) : 0)
			}
		}
	}), ie.opacity || (ne.cssHooks.opacity = {
		get: function(e, t) {
			return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var i = e.style,
				s = e.currentStyle,
				n = ne.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				a = s && s.filter || i.filter || "";
			i.zoom = 1, (t >= 1 || "" === t) && "" === ne.trim(a.replace(nt, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || s && !s.filter) || (i.filter = nt.test(a) ? a.replace(nt, n) : a + " " + n)
		}
	}), ne.cssHooks.marginRight = k(ie.reliableMarginRight, function(e, t) {
		return t ? ne.swap(e, {
			display: "inline-block"
		}, et, [e, "marginRight"]) : void 0
	}), ne.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		ne.cssHooks[e + t] = {
			expand: function(i) {
				for (var s = 0, n = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) n[e + ke[s] + t] = a[s] || a[s - 2] || a[0];
				return n
			}
		}, tt.test(e) || (ne.cssHooks[e + t].set = z)
	}), ne.fn.extend({
		css: function(e, t) {
			return Me(this, function(e, t, i) {
				var s, n, a = {},
					r = 0;
				if (ne.isArray(t)) {
					for (s = Ze(e), n = t.length; n > r; r++) a[t[r]] = ne.css(e, t[r], !1, s);
					return a
				}
				return void 0 !== i ? ne.style(e, t, i) : ne.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return M(this, !0)
		},
		hide: function() {
			return M(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ae(this) ? ne(this).show() : ne(this).hide()
			})
		}
	}), ne.Tween = P, P.prototype = {
		constructor: P,
		init: function(e, t, i, s, n, a) {
			this.elem = e, this.prop = i, this.easing = n || "swing", this.options = t, this.start = this.now = this.cur(), this.end = s, this.unit = a || (ne.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var e = P.propHooks[this.prop];
			return e && e.get ? e.get(this) : P.propHooks._default.get(this)
		},
		run: function(e) {
			var t, i = P.propHooks[this.prop];
			return this.options.duration ? this.pos = t = ne.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this
		}
	}, P.prototype.init.prototype = P.prototype, P.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ne.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				ne.fx.step[e.prop] ? ne.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ne.cssProps[e.prop]] || ne.cssHooks[e.prop]) ? ne.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, ne.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, ne.fx = P.prototype.init, ne.fx.step = {};
	var ut, pt, ft = /^(?:toggle|show|hide)$/,
		vt = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
		mt = /queueHooks$/,
		gt = [O],
		yt = {
			"*": [function(e, t) {
				var i = this.createTween(e, t),
					s = i.cur(),
					n = vt.exec(t),
					a = n && n[3] || (ne.cssNumber[e] ? "" : "px"),
					r = (ne.cssNumber[e] || "px" !== a && +s) && vt.exec(ne.css(i.elem, e)),
					o = 1,
					l = 20;
				if (r && r[3] !== a) {
					a = a || r[3], n = n || [], r = +s || 1;
					do {
						o = o || ".5", r /= o, ne.style(i.elem, e, r + a)
					} while (o !== (o = i.cur() / s) && 1 !== o && --l)
				}
				return n && (r = i.start = +r || +s || 0, i.unit = a, i.end = n[1] ? r + (n[1] + 1) * n[2] : +n[2]), i
			}]
		};
	ne.Animation = ne.extend(B, {
			tweener: function(e, t) {
				ne.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var i, s = 0, n = e.length; n > s; s++) i = e[s], yt[i] = yt[i] || [], yt[i].unshift(t)
			},
			prefilter: function(e, t) {
				t ? gt.unshift(e) : gt.push(e)
			}
		}), ne.speed = function(e, t, i) {
			var s = e && "object" == typeof e ? ne.extend({}, e) : {
				complete: i || !i && t || ne.isFunction(e) && e,
				duration: e,
				easing: i && t || t && !ne.isFunction(t) && t
			};
			return s.duration = ne.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in ne.fx.speeds ? ne.fx.speeds[s.duration] : ne.fx.speeds._default, (null == s.queue || !0 === s.queue) && (s.queue = "fx"), s.old = s.complete, s.complete = function() {
				ne.isFunction(s.old) && s.old.call(this), s.queue && ne.dequeue(this, s.queue)
			}, s
		}, ne.fn.extend({
			fadeTo: function(e, t, i, s) {
				return this.filter(Ae).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, i, s)
			},
			animate: function(e, t, i, s) {
				var n = ne.isEmptyObject(e),
					a = ne.speed(t, i, s),
					r = function() {
						var t = B(this, ne.extend({}, e), a);
						(n || ne._data(this, "finish")) && t.stop(!0)
					};
				return r.finish = r, n || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
			},
			stop: function(e, t, i) {
				var s = function(e) {
					var t = e.stop;
					delete e.stop, t(i)
				};
				return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						n = null != e && e + "queueHooks",
						a = ne.timers,
						r = ne._data(this);
					if (n) r[n] && r[n].stop && s(r[n]);
					else
						for (n in r) r[n] && r[n].stop && mt.test(n) && s(r[n]);
					for (n = a.length; n--;) a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(i), t = !1, a.splice(n, 1));
					(t || !i) && ne.dequeue(this, e)
				})
			},
			finish: function(e) {
				return !1 !== e && (e = e || "fx"), this.each(function() {
					var t, i = ne._data(this),
						s = i[e + "queue"],
						n = i[e + "queueHooks"],
						a = ne.timers,
						r = s ? s.length : 0;
					for (i.finish = !0, ne.queue(this, e, []), n && n.stop && n.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
					for (t = 0; r > t; t++) s[t] && s[t].finish && s[t].finish.call(this);
					delete i.finish
				})
			}
		}), ne.each(["toggle", "show", "hide"], function(e, t) {
			var i = ne.fn[t];
			ne.fn[t] = function(e, s, n) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(D(t, !0), e, s, n)
			}
		}), ne.each({
			slideDown: D("show"),
			slideUp: D("hide"),
			slideToggle: D("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			ne.fn[e] = function(e, i, s) {
				return this.animate(t, e, i, s)
			}
		}), ne.timers = [], ne.fx.tick = function() {
			var e, t = ne.timers,
				i = 0;
			for (ut = ne.now(); i < t.length; i++)(e = t[i])() || t[i] !== e || t.splice(i--, 1);
			t.length || ne.fx.stop(), ut = void 0
		}, ne.fx.timer = function(e) {
			ne.timers.push(e), e() ? ne.fx.start() : ne.timers.pop()
		}, ne.fx.interval = 13, ne.fx.start = function() {
			pt || (pt = setInterval(ne.fx.tick, ne.fx.interval))
		}, ne.fx.stop = function() {
			clearInterval(pt), pt = null
		}, ne.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, ne.fn.delay = function(e, t) {
			return e = ne.fx ? ne.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
				var s = setTimeout(t, e);
				i.stop = function() {
					clearTimeout(s)
				}
			})
		},
		function() {
			var e, t, i, s, n;
			t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = t.getElementsByTagName("a")[0], i = fe.createElement("select"), n = i.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], s.style.cssText = "top:1px", ie.getSetAttribute = "t" !== t.className, ie.style = /top/.test(s.getAttribute("style")), ie.hrefNormalized = "/a" === s.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = n.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !n.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value
		}();
	var bt = /\r/g;
	ne.fn.extend({
		val: function(e) {
			var t, i, s, n = this[0];
			return arguments.length ? (s = ne.isFunction(e), this.each(function(i) {
				var n;
				1 === this.nodeType && (n = s ? e.call(this, i, ne(this).val()) : e, null == n ? n = "" : "number" == typeof n ? n += "" : ne.isArray(n) && (n = ne.map(n, function(e) {
					return null == e ? "" : e + ""
				})), (t = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, n, "value") || (this.value = n))
			})) : n ? (t = ne.valHooks[n.type] || ne.valHooks[n.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(n, "value")) ? i : (i = n.value, "string" == typeof i ? i.replace(bt, "") : null == i ? "" : i)) : void 0
		}
	}), ne.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = ne.find.attr(e, "value");
					return null != t ? t : ne.trim(ne.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, i, s = e.options, n = e.selectedIndex, a = "select-one" === e.type || 0 > n, r = a ? null : [], o = a ? n + 1 : s.length, l = 0 > n ? o : a ? n : 0; o > l; l++)
						if (i = s[l], !(!i.selected && l !== n || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ne.nodeName(i.parentNode, "optgroup"))) {
							if (t = ne(i).val(), a) return t;
							r.push(t)
						}
					return r
				},
				set: function(e, t) {
					for (var i, s, n = e.options, a = ne.makeArray(t), r = n.length; r--;)
						if (s = n[r], ne.inArray(ne.valHooks.option.get(s), a) >= 0) try {
							s.selected = i = !0
						} catch (e) {
							s.scrollHeight
						} else s.selected = !1;
					return i || (e.selectedIndex = -1), n
				}
			}
		}
	}), ne.each(["radio", "checkbox"], function() {
		ne.valHooks[this] = {
			set: function(e, t) {
				return ne.isArray(t) ? e.checked = ne.inArray(ne(e).val(), t) >= 0 : void 0
			}
		}, ie.checkOn || (ne.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var wt, xt, Tt = ne.expr.attrHandle,
		St = /^(?:checked|selected)$/i,
		Et = ie.getSetAttribute,
		Ct = ie.input;
	ne.fn.extend({
		attr: function(e, t) {
			return Me(this, ne.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ne.removeAttr(this, e)
			})
		}
	}), ne.extend({
		attr: function(e, t, i) {
			var s, n, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Te ? ne.prop(e, t, i) : (1 === a && ne.isXMLDoc(e) || (t = t.toLowerCase(), s = ne.attrHooks[t] || (ne.expr.match.bool.test(t) ? xt : wt)), void 0 === i ? s && "get" in s && null !== (n = s.get(e, t)) ? n : (n = ne.find.attr(e, t), null == n ? void 0 : n) : null !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : void ne.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var i, s, n = 0,
				a = t && t.match(ye);
			if (a && 1 === e.nodeType)
				for (; i = a[n++];) s = ne.propFix[i] || i, ne.expr.match.bool.test(i) ? Ct && Et || !St.test(i) ? e[s] = !1 : e[ne.camelCase("default-" + i)] = e[s] = !1 : ne.attr(e, i, ""), e.removeAttribute(Et ? i : s)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ie.radioValue && "radio" === t && ne.nodeName(e, "input")) {
						var i = e.value;
						return e.setAttribute("type", t), i && (e.value = i), t
					}
				}
			}
		}
	}), xt = {
		set: function(e, t, i) {
			return !1 === t ? ne.removeAttr(e, i) : Ct && Et || !St.test(i) ? e.setAttribute(!Et && ne.propFix[i] || i, i) : e[ne.camelCase("default-" + i)] = e[i] = !0, i
		}
	}, ne.each(ne.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var i = Tt[t] || ne.find.attr;
		Tt[t] = Ct && Et || !St.test(t) ? function(e, t, s) {
			var n, a;
			return s || (a = Tt[t], Tt[t] = n, n = null != i(e, t, s) ? t.toLowerCase() : null, Tt[t] = a), n
		} : function(e, t, i) {
			return i ? void 0 : e[ne.camelCase("default-" + t)] ? t.toLowerCase() : null
		}
	}), Ct && Et || (ne.attrHooks.value = {
		set: function(e, t, i) {
			return ne.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, i)
		}
	}), Et || (wt = {
		set: function(e, t, i) {
			var s = e.getAttributeNode(i);
			return s || e.setAttributeNode(s = e.ownerDocument.createAttribute(i)), s.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
		}
	}, Tt.id = Tt.name = Tt.coords = function(e, t, i) {
		var s;
		return i ? void 0 : (s = e.getAttributeNode(t)) && "" !== s.value ? s.value : null
	}, ne.valHooks.button = {
		get: function(e, t) {
			var i = e.getAttributeNode(t);
			return i && i.specified ? i.value : void 0
		},
		set: wt.set
	}, ne.attrHooks.contenteditable = {
		set: function(e, t, i) {
			wt.set(e, "" !== t && t, i)
		}
	}, ne.each(["width", "height"], function(e, t) {
		ne.attrHooks[t] = {
			set: function(e, i) {
				return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
			}
		}
	})), ie.style || (ne.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || void 0
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	});
	var kt = /^(?:input|select|textarea|button|object)$/i,
		At = /^(?:a|area)$/i;
	ne.fn.extend({
		prop: function(e, t) {
			return Me(this, ne.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ne.propFix[e] || e, this.each(function() {
				try {
					this[e] = void 0, delete this[e]
				} catch (e) {}
			})
		}
	}), ne.extend({
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function(e, t, i) {
			var s, n, a, r = e.nodeType;
			if (e && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !ne.isXMLDoc(e), a && (t = ne.propFix[t] || t, n = ne.propHooks[t]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(e, i, t)) ? s : e[t] = i : n && "get" in n && null !== (s = n.get(e, t)) ? s : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = ne.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : kt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		}
	}), ie.hrefNormalized || ne.each(["href", "src"], function(e, t) {
		ne.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	}), ie.optSelected || (ne.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	}), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		ne.propFix[this.toLowerCase()] = this
	}), ie.enctype || (ne.propFix.enctype = "encoding");
	var Mt = /[\t\r\n\f]/g;
	ne.fn.extend({
		addClass: function(e) {
			var t, i, s, n, a, r, o = 0,
				l = this.length,
				d = "string" == typeof e && e;
			if (ne.isFunction(e)) return this.each(function(t) {
				ne(this).addClass(e.call(this, t, this.className))
			});
			if (d)
				for (t = (e || "").match(ye) || []; l > o; o++)
					if (i = this[o], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mt, " ") : " ")) {
						for (a = 0; n = t[a++];) s.indexOf(" " + n + " ") < 0 && (s += n + " ");
						r = ne.trim(s), i.className !== r && (i.className = r)
					}
			return this
		},
		removeClass: function(e) {
			var t, i, s, n, a, r, o = 0,
				l = this.length,
				d = 0 === arguments.length || "string" == typeof e && e;
			if (ne.isFunction(e)) return this.each(function(t) {
				ne(this).removeClass(e.call(this, t, this.className))
			});
			if (d)
				for (t = (e || "").match(ye) || []; l > o; o++)
					if (i = this[o], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mt, " ") : "")) {
						for (a = 0; n = t[a++];)
							for (; s.indexOf(" " + n + " ") >= 0;) s = s.replace(" " + n + " ", " ");
						r = e ? ne.trim(s) : "", i.className !== r && (i.className = r)
					}
			return this
		},
		toggleClass: function(e, t) {
			var i = typeof e;
			return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(ne.isFunction(e) ? function(i) {
				ne(this).toggleClass(e.call(this, i, this.className, t), t)
			} : function() {
				if ("string" === i)
					for (var t, s = 0, n = ne(this), a = e.match(ye) || []; t = a[s++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
				else(i === Te || "boolean" === i) && (this.className && ne._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ne._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", i = 0, s = this.length; s > i; i++)
				if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Mt, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	}), ne.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		ne.fn[t] = function(e, i) {
			return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
		}
	}), ne.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, i) {
			return this.on(e, null, t, i)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, i, s) {
			return this.on(t, e, i, s)
		},
		undelegate: function(e, t, i) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
		}
	});
	var zt = ne.now(),
		$t = /\?/,
		Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\%u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	ne.parseJSON = function(t) {
		if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
		var i, s = null,
			n = ne.trim(t + "");
		return n && !ne.trim(n.replace(Lt, function(e, t, n, a) {
			return i && t && (s = 0), 0 === s ? e : (i = n || t, s += !a - !n, "")
		})) ? Function("return " + n)() : ne.error("Invalid JSON: " + t)
	}, ne.parseXML = function(t) {
		var i, s;
		if (!t || "string" != typeof t) return null;
		try {
			e.DOMParser ? (s = new DOMParser, i = s.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
		} catch (e) {
			i = void 0
		}
		return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ne.error("Invalid XML: " + t), i
	};
	var Pt, It, Dt = /#.*$/,
		Nt = /([?&])_=[^&]*/,
		Ot = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Bt = /^(?:GET|HEAD)$/,
		jt = /^\/\//,
		Ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		qt = {},
		Rt = {},
		Wt = "*/".concat("*");
	try {
		It = location.href
	} catch (e) {
		It = fe.createElement("a"), It.href = "", It = It.href
	}
	Pt = Ft.exec(It.toLowerCase()) || [], ne.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: It,
			type: "GET",
			isLocal: Ht.test(Pt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Wt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": ne.parseJSON,
				"text xml": ne.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? q(q(e, ne.ajaxSettings), t) : q(ne.ajaxSettings, e)
		},
		ajaxPrefilter: j(qt),
		ajaxTransport: j(Rt),
		ajax: function(e, t) {
			function i(e, t, i, s) {
				var n, h, g, y, w, T = t;
				2 !== b && (b = 2, o && clearTimeout(o), d = void 0, r = s || "", x.readyState = e > 0 ? 4 : 0, n = e >= 200 && 300 > e || 304 === e, i && (y = R(c, x, i)), y = W(c, y, x, n), n ? (c.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ne.lastModified[a] = w), (w = x.getResponseHeader("etag")) && (ne.etag[a] = w)), 204 === e || "HEAD" === c.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, h = y.data, g = y.error, n = !g)) : (g = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || T) + "", n ? f.resolveWith(u, [h, T, x]) : f.rejectWith(u, [x, T, g]), x.statusCode(m), m = void 0, l && p.trigger(n ? "ajaxSuccess" : "ajaxError", [x, c, n ? h : g]), v.fireWith(u, [x, T]), l && (p.trigger("ajaxComplete", [x, c]), --ne.active || ne.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var s, n, a, r, o, l, d, h, c = ne.ajaxSetup({}, t),
				u = c.context || c,
				p = c.context && (u.nodeType || u.jquery) ? ne(u) : ne.event,
				f = ne.Deferred(),
				v = ne.Callbacks("once memory"),
				m = c.statusCode || {},
				g = {},
				y = {},
				b = 0,
				w = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!h)
								for (h = {}; t = Ot.exec(r);) h[t[1].toLowerCase()] = t[2];
							t = h[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? r : null
					},
					setRequestHeader: function(e, t) {
						var i = e.toLowerCase();
						return b || (e = y[i] = y[i] || e, g[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (c.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) m[t] = [m[t], e[t]];
							else x.always(e[x.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return d && d.abort(t), i(0, t), this
					}
				};
			if (f.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || It) + "").replace(Dt, "").replace(jt, Pt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = ne.trim(c.dataType || "*").toLowerCase().match(ye) || [""], null == c.crossDomain && (s = Ft.exec(c.url.toLowerCase()), c.crossDomain = !(!s || s[1] === Pt[1] && s[2] === Pt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = ne.param(c.data, c.traditional)), F(qt, c, t, x), 2 === b) return x;
			l = ne.event && c.global, l && 0 == ne.active++ && ne.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Bt.test(c.type), a = c.url, c.hasContent || (c.data && (a = c.url += ($t.test(a) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = Nt.test(a) ? a.replace(Nt, "$1_=" + zt++) : a + ($t.test(a) ? "&" : "?") + "_=" + zt++)), c.ifModified && (ne.lastModified[a] && x.setRequestHeader("If-Modified-Since", ne.lastModified[a]), ne.etag[a] && x.setRequestHeader("If-None-Match", ne.etag[a])), (c.data && c.hasContent && !1 !== c.contentType || t.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : c.accepts["*"]);
			for (n in c.headers) x.setRequestHeader(n, c.headers[n]);
			if (c.beforeSend && (!1 === c.beforeSend.call(u, x, c) || 2 === b)) return x.abort();
			w = "abort";
			for (n in {
					success: 1,
					error: 1,
					complete: 1
				}) x[n](c[n]);
			if (d = F(Rt, c, t, x)) {
				x.readyState = 1, l && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (o = setTimeout(function() {
					x.abort("timeout")
				}, c.timeout));
				try {
					b = 1, d.send(g, i)
				} catch (e) {
					if (!(2 > b)) throw e;
					i(-1, e)
				}
			} else i(-1, "No Transport");
			return x
		},
		getJSON: function(e, t, i) {
			return ne.get(e, t, i, "json")
		},
		getScript: function(e, t) {
			return ne.get(e, void 0, t, "script")
		}
	}), ne.each(["get", "post"], function(e, t) {
		ne[t] = function(e, i, s, n) {
			return ne.isFunction(i) && (n = n || s, s = i, i = void 0), ne.ajax({
				url: e,
				type: t,
				dataType: n,
				data: i,
				success: s
			})
		}
	}), ne._evalUrl = function(e) {
		return ne.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, ne.fn.extend({
		wrapAll: function(e) {
			if (ne.isFunction(e)) return this.each(function(t) {
				ne(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ne(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return this.each(ne.isFunction(e) ? function(t) {
				ne(this).wrapInner(e.call(this, t))
			} : function() {
				var t = ne(this),
					i = t.contents();
				i.length ? i.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ne.isFunction(e);
			return this.each(function(i) {
				ne(this).wrapAll(t ? e.call(this, i) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ne.nodeName(this, "body") || ne(this).replaceWith(this.childNodes)
			}).end()
		}
	}), ne.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ne.css(e, "display"))
	}, ne.expr.filters.visible = function(e) {
		return !ne.expr.filters.hidden(e)
	};
	var _t = / /g,
		Xt = /\[\]$/,
		Yt = /\r?\n/g,
		Vt = /^(?:submit|button|image|reset|file)$/i,
		Gt = /^(?:input|select|textarea|keygen)/i;
	ne.param = function(e, t) {
		var i, s = [],
			n = function(e, t) {
				t = ne.isFunction(t) ? t() : null == t ? "" : t, s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = ne.ajaxSettings && ne.ajaxSettings.traditional), ne.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function() {
			n(this.name, this.value)
		});
		else
			for (i in e) _(i, e[i], t, n);
		return s.join("&").replace(_t, "+")
	}, ne.fn.extend({
		serialize: function() {
			return ne.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ne.prop(this, "elements");
				return e ? ne.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ne(this).is(":disabled") && Gt.test(this.nodeName) && !Vt.test(e) && (this.checked || !ze.test(e))
			}).map(function(e, t) {
				var i = ne(this).val();
				return null == i ? null : ne.isArray(i) ? ne.map(i, function(e) {
					return {
						name: t.name,
						value: e.replace(Yt, "\r\n")
					}
				}) : {
					name: t.name,
					value: i.replace(Yt, "\r\n")
				}
			}).get()
		}
	}), ne.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
		return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && X() || Y()
	} : X;
	var Ut = 0,
		Qt = {},
		Kt = ne.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Qt) Qt[e](void 0, !0)
	}), ie.cors = !!Kt && "withCredentials" in Kt, (Kt = ie.ajax = !!Kt) && ne.ajaxTransport(function(e) {
		if (!e.crossDomain || ie.cors) {
			var t;
			return {
				send: function(i, s) {
					var n, a = e.xhr(),
						r = ++Ut;
					if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (n in e.xhrFields) a[n] = e.xhrFields[n];
					e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					for (n in i) void 0 !== i[n] && a.setRequestHeader(n, i[n] + "");
					a.send(e.hasContent && e.data || null), t = function(i, n) {
						var o, l, d;
						if (t && (n || 4 === a.readyState))
							if (delete Qt[r], t = void 0, a.onreadystatechange = ne.noop, n) 4 !== a.readyState && a.abort();
							else {
								d = {}, o = a.status, "string" == typeof a.responseText && (d.text = a.responseText);
								try {
									l = a.statusText
								} catch (e) {
									l = ""
								}
								o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = d.text ? 200 : 404
							}
						d && s(o, l, d, a.getAllResponseHeaders())
					}, e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Qt[r] = t : t()
				},
				abort: function() {
					t && t(void 0, !0)
				}
			}
		}
	}), ne.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ne.globalEval(e), e
			}
		}
	}), ne.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), ne.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, i = fe.head || ne("head")[0] || fe.documentElement;
			return {
				send: function(s, n) {
					t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
						(i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || n(200, "success"))
					}, i.insertBefore(t, i.firstChild)
				},
				abort: function() {
					t && t.onload(void 0, !0)
				}
			}
		}
	});
	var Jt = [],
		Zt = /(=)\?(?=&|$)|\?\?/;
	ne.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Jt.pop() || ne.expando + "_" + zt++;
			return this[e] = !0, e
		}
	}), ne.ajaxPrefilter("json jsonp", function(t, i, s) {
		var n, a, r, o = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data");
		return o || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = ne.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Zt, "$1" + n) : !1 !== t.jsonp && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
			return r || ne.error(n + " was not called"), r[0]
		}, t.dataTypes[0] = "json", a = e[n], e[n] = function() {
			r = arguments
		}, s.always(function() {
			e[n] = a, t[n] && (t.jsonpCallback = i.jsonpCallback, Jt.push(n)), r && ne.isFunction(a) && a(r[0]), r = a = void 0
		}), "script") : void 0
	}), ne.parseHTML = function(e, t, i) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (i = t, t = !1), t = t || fe;
		var s = ce.exec(e),
			n = !i && [];
		return s ? [t.createElement(s[1])] : (s = ne.buildFragment([e], t, n), n && n.length && ne(n).remove(), ne.merge([], s.childNodes))
	};
	var ei = ne.fn.load;
	ne.fn.load = function(e, t, i) {
		if ("string" != typeof e && ei) return ei.apply(this, arguments);
		var s, n, a, r = this,
			o = e.indexOf(" ");
		return o >= 0 && (s = ne.trim(e.slice(o, e.length)), e = e.slice(0, o)), ne.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (a = "POST"), r.length > 0 && ne.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: t
		}).done(function(e) {
			n = arguments, r.html(s ? ne("<div>").append(ne.parseHTML(e)).find(s) : e)
		}).complete(i && function(e, t) {
			r.each(i, n || [e.responseText, t, e])
		}), this
	}, ne.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		ne.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), ne.expr.filters.animated = function(e) {
		return ne.grep(ne.timers, function(t) {
			return e === t.elem
		}).length
	};
	var ti = e.document.documentElement;
	ne.offset = {
		setOffset: function(e, t, i) {
			var s, n, a, r, o, l, d, h = ne.css(e, "position"),
				c = ne(e),
				u = {};
			"static" === h && (e.style.position = "relative"), o = c.offset(), a = ne.css(e, "top"), l = ne.css(e, "left"), d = ("absolute" === h || "fixed" === h) && ne.inArray("auto", [a, l]) > -1, d ? (s = c.position(), r = s.top, n = s.left) : (r = parseFloat(a) || 0, n = parseFloat(l) || 0), ne.isFunction(t) && (t = t.call(e, i, o)), null != t.top && (u.top = t.top - o.top + r), null != t.left && (u.left = t.left - o.left + n), "using" in t ? t.using.call(e, u) : c.css(u)
		}
	}, ne.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				ne.offset.setOffset(this, e, t)
			});
			var t, i, s = {
					top: 0,
					left: 0
				},
				n = this[0],
				a = n && n.ownerDocument;
			return a ? (t = a.documentElement, ne.contains(t, n) ? (typeof n.getBoundingClientRect !== Te && (s = n.getBoundingClientRect()), i = V(a), {
				top: s.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
				left: s.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
			}) : s) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, i = {
						top: 0,
						left: 0
					},
					s = this[0];
				return "fixed" === ne.css(s, "position") ? t = s.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ne.nodeName(e[0], "html") || (i = e.offset()), i.top += ne.css(e[0], "borderTopWidth", !0), i.left += ne.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - i.top - ne.css(s, "marginTop", !0),
					left: t.left - i.left - ne.css(s, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || ti; e && !ne.nodeName(e, "html") && "static" === ne.css(e, "position");) e = e.offsetParent;
				return e || ti
			})
		}
	}), ne.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var i = /Y/.test(t);
		ne.fn[e] = function(s) {
			return Me(this, function(e, s, n) {
				var a = V(e);
				return void 0 === n ? a ? t in a ? a[t] : a.document.documentElement[s] : e[s] : void(a ? a.scrollTo(i ? ne(a).scrollLeft() : n, i ? n : ne(a).scrollTop()) : e[s] = n)
			}, e, s, arguments.length, null)
		}
	}), ne.each(["top", "left"], function(e, t) {
		ne.cssHooks[t] = k(ie.pixelPosition, function(e, i) {
			return i ? (i = et(e, t), it.test(i) ? ne(e).position()[t] + "px" : i) : void 0
		})
	}), ne.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		ne.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(i, s) {
			ne.fn[s] = function(s, n) {
				var a = arguments.length && (i || "boolean" != typeof s),
					r = i || (!0 === s || !0 === n ? "margin" : "border");
				return Me(this, function(t, i, s) {
					var n;
					return ne.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + e], n["scroll" + e], t.body["offset" + e], n["offset" + e], n["client" + e])) : void 0 === s ? ne.css(t, i, r) : ne.style(t, i, s, r)
				}, t, a ? s : void 0, a, null)
			}
		})
	}), ne.fn.size = function() {
		return this.length
	}, ne.fn.andSelf = ne.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return ne
	});
	var ii = e.jQuery,
		si = e.$;
	return ne.noConflict = function(t) {
		return e.$ === ne && (e.$ = si), t && e.jQuery === ne && (e.jQuery = ii), ne
	}, typeof t === Te && (e.jQuery = e.$ = ne), ne
}),
function(e, t, i, s) {
	var n = e(t);
	e.fn.lazyload = function(s) {
		function a() {
			var t = 0;
			o.each(function() {
				var i = e(this);
				if (!l.skip_invisible || i.is(":visible"))
					if (e.abovethetop(this, l) || e.leftofbegin(this, l));
					else if (e.belowthefold(this, l) || e.rightoffold(this, l)) {
					if (++t > l.failure_limit) return !1
				} else i.trigger("appear"), t = 0
			})
		}
		var r, o = this,
			l = {
				threshold: 0,
				failure_limit: 0,
				event: "scroll",
				effect: "show",
				container: t,
				data_attribute: "original",
				skip_invisible: !1,
				appear: null,
				load: null,
				placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
			};
		return s && (void 0 !== s.failurelimit && (s.failure_limit = s.failurelimit, delete s.failurelimit), void 0 !== s.effectspeed && (s.effect_speed = s.effectspeed, delete s.effectspeed), e.extend(l, s)), r = void 0 === l.container || l.container === t ? n : e(l.container), 0 === l.event.indexOf("scroll") && r.bind(l.event, function() {
			return a()
		}), this.each(function() {
			var t = this,
				i = e(t);
			t.loaded = !1, void 0 !== i.attr("src") && !1 !== i.attr("src") || i.is("img") && i.attr("src", l.placeholder), i.one("appear", function() {
				if (!this.loaded) {
					if (l.appear) {
						var s = o.length;
						l.appear.call(t, s, l)
					}
					e("<img />").bind("load", function() {
						var s = i.attr("data-" + l.data_attribute);
						i.hide(), i.is("img") ? i.attr("src", s) : i.css("background-image", "url('" + s + "')"), i[l.effect](l.effect_speed), t.loaded = !0;
						var n = e.grep(o, function(e) {
							return !e.loaded
						});
						if (o = e(n), l.load) {
							var a = o.length;
							l.load.call(t, a, l)
						}
					}).attr("src", i.attr("data-" + l.data_attribute))
				}
			}), 0 !== l.event.indexOf("scroll") && i.bind(l.event, function() {
				t.loaded || i.trigger("appear")
			})
		}), n.bind("resize", function() {
			a()
		}), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && n.bind("pageshow", function(t) {
			t.originalEvent && t.originalEvent.persisted && o.each(function() {
				e(this).trigger("appear")
			})
		}), e(i).ready(function() {
			a()
		}), this
	}, e.belowthefold = function(i, s) {
		return (void 0 === s.container || s.container === t ? (t.innerHeight ? t.innerHeight : n.height()) + n.scrollTop() : e(s.container).offset().top + e(s.container).height()) <= e(i).offset().top - s.threshold
	}, e.rightoffold = function(i, s) {
		return (void 0 === s.container || s.container === t ? n.width() + n.scrollLeft() : e(s.container).offset().left + e(s.container).width()) <= e(i).offset().left - s.threshold
	}, e.abovethetop = function(i, s) {
		return (void 0 === s.container || s.container === t ? n.scrollTop() : e(s.container).offset().top) >= e(i).offset().top + s.threshold + e(i).height()
	}, e.leftofbegin = function(i, s) {
		return (void 0 === s.container || s.container === t ? n.scrollLeft() : e(s.container).offset().left) >= e(i).offset().left + s.threshold + e(i).width()
	}, e.inviewport = function(t, i) {
		return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
	}, e.extend(e.expr[":"], {
		"below-the-fold": function(t) {
			return e.belowthefold(t, {
				threshold: 0
			})
		},
		"above-the-top": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-screen": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-screen": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		},
		"in-viewport": function(t) {
			return e.inviewport(t, {
				threshold: 0
			})
		},
		"above-the-fold": function(t) {
			return !e.belowthefold(t, {
				threshold: 0
			})
		},
		"right-of-fold": function(t) {
			return e.rightoffold(t, {
				threshold: 0
			})
		},
		"left-of-fold": function(t) {
			return !e.rightoffold(t, {
				threshold: 0
			})
		}
	})
}(jQuery, window, document), define("lazyload", ["jquery"], function() {}),
	function(e) {
		"use strict";
		"function" == typeof define && define.amd ? define("slick", ["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
	}(function(e) {
		"use strict";
		var t = window.Slick || {};
		(t = function() {
			var t = 0;
			return function(i, s) {
				var n, a = this;
				a.defaults = {
					accessibility: !0,
					adaptiveHeight: !1,
					appendArrows: e(i),
					appendDots: e(i),
					arrows: !0,
					asNavFor: null,
					prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
					nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
					autoplay: !1,
					autoplaySpeed: 3e3,
					centerMode: !1,
					centerPadding: "50px",
					cssEase: "ease",
					customPaging: function(t, i) {
						return e('<button type="button" />').text(i + 1)
					},
					dots: !1,
					dotsClass: "slick-dots",
					draggable: !0,
					easing: "linear",
					edgeFriction: .35,
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
					zIndex: 1e3
				}, a.initials = {
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
					unslicked: !1
				}, e.extend(a, a.initials), a.activeBreakpoint = null, a.animType = null, a.animProp = null, a.breakpoints = [], a.breakpointSettings = [], a.cssTransitions = !1, a.focussed = !1, a.interrupted = !1, a.hidden = "hidden", a.paused = !0, a.positionProp = null, a.respondTo = null, a.rowCount = 1, a.shouldClick = !0, a.$slider = e(i), a.$slidesCache = null, a.transformType = null, a.transitionType = null, a.visibilityChange = "visibilitychange", a.windowWidth = 0, a.windowTimer = null, n = e(i).data("slick") || {}, a.options = e.extend({}, a.defaults, s, n), a.currentSlide = a.options.initialSlide, a.originalSettings = a.options, void 0 !== document.mozHidden ? (a.hidden = "mozHidden", a.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (a.hidden = "webkitHidden", a.visibilityChange = "webkitvisibilitychange"), a.autoPlay = e.proxy(a.autoPlay, a), a.autoPlayClear = e.proxy(a.autoPlayClear, a), a.autoPlayIterator = e.proxy(a.autoPlayIterator, a), a.changeSlide = e.proxy(a.changeSlide, a), a.clickHandler = e.proxy(a.clickHandler, a), a.selectHandler = e.proxy(a.selectHandler, a), a.setPosition = e.proxy(a.setPosition, a), a.swipeHandler = e.proxy(a.swipeHandler, a), a.dragHandler = e.proxy(a.dragHandler, a), a.keyHandler = e.proxy(a.keyHandler, a), a.instanceUid = t++, a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, a.registerBreakpoints(), a.init(!0)
			}
		}()).prototype.activateADA = function() {
			this.$slideTrack.find(".slick-active").attr({
				"aria-hidden": "false"
			}).find("a, input, button, select").attr({
				tabindex: "0"
			})
		}, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, s) {
			var n = this;
			if ("boolean" == typeof i) s = i, i = null;
			else if (i < 0 || i >= n.slideCount) return !1;
			n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : s ? e(t).insertBefore(n.$slides.eq(i)) : e(t).insertAfter(n.$slides.eq(i)) : !0 === s ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, i) {
				e(i).attr("data-slick-index", t)
			}), n.$slidesCache = n.$slides, n.reinit()
		}, t.prototype.animateHeight = function() {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.animate({
					height: t
				}, e.options.speed)
			}
		}, t.prototype.animateSlide = function(t, i) {
			var s = {},
				n = this;
			n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
				left: t
			}, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
				top: t
			}, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), e({
				animStart: n.currentLeft
			}).animate({
				animStart: t
			}, {
				duration: n.options.speed,
				easing: n.options.easing,
				step: function(e) {
					e = Math.ceil(e), !1 === n.options.vertical ? (s[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(s))
				},
				complete: function() {
					i && i.call()
				}
			})) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function() {
				n.disableTransition(), i.call()
			}, n.options.speed))
		}, t.prototype.getNavTarget = function() {
			var t = this,
				i = t.options.asNavFor;
			return i && null !== i && (i = e(i).not(t.$slider)), i
		}, t.prototype.asNavFor = function(t) {
			var i = this.getNavTarget();
			null !== i && "object" == typeof i && i.each(function() {
				var i = e(this).slick("getSlick");
				i.unslicked || i.slideHandler(t, !0)
			})
		}, t.prototype.applyTransition = function(e) {
			var t = this,
				i = {};
			!1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
		}, t.prototype.autoPlay = function() {
			var e = this;
			e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
		}, t.prototype.autoPlayClear = function() {
			var e = this;
			e.autoPlayTimer && clearInterval(e.autoPlayTimer)
		}, t.prototype.autoPlayIterator = function() {
			var e = this,
				t = e.currentSlide + e.options.slidesToScroll;
			e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
		}, t.prototype.buildArrows = function() {
			var t = this;
			!0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
				"aria-disabled": "true",
				tabindex: "-1"
			}))
		}, t.prototype.buildDots = function() {
			var t, i, s = this;
			if (!0 === s.options.dots) {
				for (s.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(s.options.dotsClass), t = 0; t <= s.getDotCount(); t += 1) i.append(e("<li />").append(s.options.customPaging.call(this, s, t)));
				s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
			}
		}, t.prototype.buildOut = function() {
			var t = this;
			t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
				e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
			}), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
		}, t.prototype.buildRows = function() {
			var e, t, i, s, n, a, r, o = this;
			if (s = document.createDocumentFragment(), a = o.$slider.children(), o.options.rows > 1) {
				for (r = o.options.slidesPerRow * o.options.rows, n = Math.ceil(a.length / r), e = 0; e < n; e++) {
					var l = document.createElement("div");
					for (t = 0; t < o.options.rows; t++) {
						var d = document.createElement("div");
						for (i = 0; i < o.options.slidesPerRow; i++) {
							var h = e * r + (t * o.options.slidesPerRow + i);
							a.get(h) && d.appendChild(a.get(h))
						}
						l.appendChild(d)
					}
					s.appendChild(l)
				}
				o.$slider.empty().append(s), o.$slider.children().children().children().css({
					width: 100 / o.options.slidesPerRow + "%",
					display: "inline-block"
				})
			}
		}, t.prototype.checkResponsive = function(t, i) {
			var s, n, a, r = this,
				o = !1,
				l = r.$slider.width(),
				d = window.innerWidth || e(window).width();
			if ("window" === r.respondTo ? a = d : "slider" === r.respondTo ? a = l : "min" === r.respondTo && (a = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
				n = null;
				for (s in r.breakpoints) r.breakpoints.hasOwnProperty(s) && (!1 === r.originalSettings.mobileFirst ? a < r.breakpoints[s] && (n = r.breakpoints[s]) : a > r.breakpoints[s] && (n = r.breakpoints[s]));
				null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = n), t || !1 === o || r.$slider.trigger("breakpoint", [r, o])
			}
		}, t.prototype.changeSlide = function(t, i) {
			var s, n, a, r = this,
				o = e(t.currentTarget);
			switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), a = r.slideCount % r.options.slidesToScroll != 0, s = a ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
				case "previous":
					n = 0 === s ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
					break;
				case "next":
					n = 0 === s ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
					break;
				case "index":
					var l = 0 === t.data.index ? 0 : t.data.index || o.index() * r.options.slidesToScroll;
					r.slideHandler(r.checkNavigable(l), !1, i), o.children().trigger("focus");
					break;
				default:
					return
			}
		}, t.prototype.checkNavigable = function(e) {
			var t, i;
			if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
			else
				for (var s in t) {
					if (e < t[s]) {
						e = i;
						break
					}
					i = t[s]
				}
			return e
		}, t.prototype.cleanUpEvents = function() {
			var t = this;
			t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
		}, t.prototype.cleanUpSlideEvents = function() {
			var t = this;
			t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
		}, t.prototype.cleanUpRows = function() {
			var e, t = this;
			t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
		}, t.prototype.clickHandler = function(e) {
			!1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
		}, t.prototype.destroy = function(t) {
			var i = this;
			i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
				e(this).attr("style", e(this).data("originalStyling"))
			}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
		}, t.prototype.disableTransition = function(e) {
			var t = this,
				i = {};
			i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
		}, t.prototype.fadeSlide = function(e, t) {
			var i = this;
			!1 === i.cssTransitions ? (i.$slides.eq(e).css({
				zIndex: i.options.zIndex
			}), i.$slides.eq(e).animate({
				opacity: 1
			}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
				opacity: 1,
				zIndex: i.options.zIndex
			}), t && setTimeout(function() {
				i.disableTransition(e), t.call()
			}, i.options.speed))
		}, t.prototype.fadeSlideOut = function(e) {
			var t = this;
			!1 === t.cssTransitions ? t.$slides.eq(e).animate({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
				opacity: 0,
				zIndex: t.options.zIndex - 2
			}))
		}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
			var t = this;
			null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
		}, t.prototype.focusHandler = function() {
			var t = this;
			t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
				i.stopImmediatePropagation();
				var s = e(this);
				setTimeout(function() {
					t.options.pauseOnFocus && (t.focussed = s.is(":focus"), t.autoPlay())
				}, 0)
			})
		}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
			return this.currentSlide
		}, t.prototype.getDotCount = function() {
			var e = this,
				t = 0,
				i = 0,
				s = 0;
			if (!0 === e.options.infinite)
				if (e.slideCount <= e.options.slidesToShow) ++s;
				else
					for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else if (!0 === e.options.centerMode) s = e.slideCount;
			else if (e.options.asNavFor)
				for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
			else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
			return s - 1
		}, t.prototype.getLeft = function(e) {
			var t, i, s, n, a = this,
				r = 0;
			return a.slideOffset = 0, i = a.$slides.first().outerHeight(!0), !0 === a.options.infinite ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1, n = -1, !0 === a.options.vertical && !0 === a.options.centerMode && (2 === a.options.slidesToShow ? n = -1.5 : 1 === a.options.slidesToShow && (n = -2)), r = i * a.options.slidesToShow * n), a.slideCount % a.options.slidesToScroll != 0 && e + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (e > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (e - a.slideCount)) * a.slideWidth * -1, r = (a.options.slidesToShow - (e - a.slideCount)) * i * -1) : (a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1, r = a.slideCount % a.options.slidesToScroll * i * -1))) : e + a.options.slidesToShow > a.slideCount && (a.slideOffset = (e + a.options.slidesToShow - a.slideCount) * a.slideWidth, r = (e + a.options.slidesToShow - a.slideCount) * i), a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0, r = 0), !0 === a.options.centerMode && a.slideCount <= a.options.slidesToShow ? a.slideOffset = a.slideWidth * Math.floor(a.options.slidesToShow) / 2 - a.slideWidth * a.slideCount / 2 : !0 === a.options.centerMode && !0 === a.options.infinite ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth : !0 === a.options.centerMode && (a.slideOffset = 0, a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)), t = !1 === a.options.vertical ? e * a.slideWidth * -1 + a.slideOffset : e * i * -1 + r, !0 === a.options.variableWidth && (s = a.slideCount <= a.options.slidesToShow || !1 === a.options.infinite ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow), t = !0 === a.options.rtl ? s[0] ? -1 * (a.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === a.options.centerMode && (s = a.slideCount <= a.options.slidesToShow || !1 === a.options.infinite ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow + 1), t = !0 === a.options.rtl ? s[0] ? -1 * (a.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, t += (a.$list.width() - s.outerWidth()) / 2)), t
		}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
			return this.options[e]
		}, t.prototype.getNavigableIndexes = function() {
			var e, t = this,
				i = 0,
				s = 0,
				n = [];
			for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, s = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) n.push(i), i = s + t.options.slidesToScroll, s += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
			return n
		}, t.prototype.getSlick = function() {
			return this
		}, t.prototype.getSlideCount = function() {
			var t, i, s = this;
			return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(n, a) {
				if (a.offsetLeft - i + e(a).outerWidth() / 2 > -1 * s.swipeLeft) return t = a, !1
			}), Math.abs(e(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
		}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
			this.changeSlide({
				data: {
					message: "index",
					index: parseInt(e)
				}
			}, t)
		}, t.prototype.init = function(t) {
			var i = this;
			e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
		}, t.prototype.initADA = function() {
			var t = this,
				i = Math.ceil(t.slideCount / t.options.slidesToShow),
				s = t.getNavigableIndexes().filter(function(e) {
					return e >= 0 && e < t.slideCount
				});
			t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
				"aria-hidden": "true",
				tabindex: "-1"
			}).find("a, input, button, select").attr({
				tabindex: "-1"
			}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
				var n = s.indexOf(i);
				e(this).attr({
					role: "tabpanel",
					id: "slick-slide" + t.instanceUid + i,
					tabindex: -1
				}), -1 !== n && e(this).attr({
					"aria-describedby": "slick-slide-control" + t.instanceUid + n
				})
			}), t.$dots.attr("role", "tablist").find("li").each(function(n) {
				var a = s[n];
				e(this).attr({
					role: "presentation"
				}), e(this).find("button").first().attr({
					role: "tab",
					id: "slick-slide-control" + t.instanceUid + n,
					"aria-controls": "slick-slide" + t.instanceUid + a,
					"aria-label": n + 1 + " of " + i,
					"aria-selected": null,
					tabindex: "-1"
				})
			}).eq(t.currentSlide).find("button").attr({
				"aria-selected": "true",
				tabindex: "0"
			}).end());
			for (var n = t.currentSlide, a = n + t.options.slidesToShow; n < a; n++) t.$slides.eq(n).attr("tabindex", 0);
			t.activateADA()
		}, t.prototype.initArrowEvents = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
				message: "previous"
			}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
				message: "next"
			}, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
		}, t.prototype.initDotEvents = function() {
			var t = this;
			!0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
				message: "index"
			}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
		}, t.prototype.initSlideEvents = function() {
			var t = this;
			t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
		}, t.prototype.initializeEvents = function() {
			var t = this;
			t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
				action: "start"
			}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
				action: "move"
			}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
				action: "end"
			}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
		}, t.prototype.initUI = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
		}, t.prototype.keyHandler = function(e) {
			var t = this;
			e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "next" : "previous"
				}
			}) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
				data: {
					message: !0 === t.options.rtl ? "previous" : "next"
				}
			}))
		}, t.prototype.lazyLoad = function() {
			function t(t) {
				e("img[data-lazy]", t).each(function() {
					var t = e(this),
						i = e(this).attr("data-lazy"),
						s = e(this).attr("data-srcset"),
						n = e(this).attr("data-sizes") || a.$slider.attr("data-sizes"),
						r = document.createElement("img");
					r.onload = function() {
						t.animate({
							opacity: 0
						}, 100, function() {
							s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", i).animate({
								opacity: 1
							}, 200, function() {
								t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
							}), a.$slider.trigger("lazyLoaded", [a, t, i])
						})
					}, r.onerror = function() {
						t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, t, i])
					}, r.src = i
				})
			}
			var i, s, n, a = this;
			if (!0 === a.options.centerMode ? !0 === a.options.infinite ? n = (s = a.currentSlide + (a.options.slidesToShow / 2 + 1)) + a.options.slidesToShow + 2 : (s = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), n = a.options.slidesToShow / 2 + 1 + 2 + a.currentSlide) : (s = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, n = Math.ceil(s + a.options.slidesToShow), !0 === a.options.fade && (s > 0 && s--, n <= a.slideCount && n++)), i = a.$slider.find(".slick-slide").slice(s, n), "anticipated" === a.options.lazyLoad)
				for (var r = s - 1, o = n, l = a.$slider.find(".slick-slide"), d = 0; d < a.options.slidesToScroll; d++) r < 0 && (r = a.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(o)), r--, o++;
			t(i), a.slideCount <= a.options.slidesToShow ? t(a.$slider.find(".slick-slide")) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? t(a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow)) : 0 === a.currentSlide && t(a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow))
		}, t.prototype.loadSlider = function() {
			var e = this;
			e.setPosition(), e.$slideTrack.css({
				opacity: 1
			}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
		}, t.prototype.next = t.prototype.slickNext = function() {
			this.changeSlide({
				data: {
					message: "next"
				}
			})
		}, t.prototype.orientationChange = function() {
			var e = this;
			e.checkResponsive(), e.setPosition()
		}, t.prototype.pause = t.prototype.slickPause = function() {
			var e = this;
			e.autoPlayClear(), e.paused = !0
		}, t.prototype.play = t.prototype.slickPlay = function() {
			var e = this;
			e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
		}, t.prototype.postSlide = function(t) {
			var i = this;
			i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
		}, t.prototype.prev = t.prototype.slickPrev = function() {
			this.changeSlide({
				data: {
					message: "previous"
				}
			})
		}, t.prototype.preventDefault = function(e) {
			e.preventDefault()
		}, t.prototype.progressiveLazyLoad = function(t) {
			t = t || 1;
			var i, s, n, a, r, o = this,
				l = e("img[data-lazy]", o.$slider);
			l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), a = i.attr("data-sizes") || o.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
				n && (i.attr("srcset", n), a && i.attr("sizes", a)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, s]), o.progressiveLazyLoad()
			}, r.onerror = function() {
				t < 3 ? setTimeout(function() {
					o.progressiveLazyLoad(t + 1)
				}, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, s]), o.progressiveLazyLoad())
			}, r.src = s) : o.$slider.trigger("allImagesLoaded", [o])
		}, t.prototype.refresh = function(t) {
			var i, s, n = this;
			s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
				currentSlide: i
			}), n.init(), t || n.changeSlide({
				data: {
					message: "index",
					index: i
				}
			}, !1)
		}, t.prototype.registerBreakpoints = function() {
			var t, i, s, n = this,
				a = n.options.responsive || null;
			if ("array" === e.type(a) && a.length) {
				n.respondTo = n.options.respondTo || "window";
				for (t in a)
					if (s = n.breakpoints.length - 1, a.hasOwnProperty(t)) {
						for (i = a[t].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
						n.breakpoints.push(i), n.breakpointSettings[i] = a[t].settings
					}
				n.breakpoints.sort(function(e, t) {
					return n.options.mobileFirst ? e - t : t - e
				})
			}
		}, t.prototype.reinit = function() {
			var t = this;
			t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
		}, t.prototype.resize = function() {
			var t = this;
			e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
				t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
			}, 50))
		}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
			var s = this;
			if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : s.slideCount - 1 : !0 === t ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
			s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
		}, t.prototype.setCSS = function(e) {
			var t, i, s = this,
				n = {};
			!0 === s.options.rtl && (e = -e), t = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", n[s.positionProp] = e, !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {}, !1 === s.cssTransitions ? (n[s.animType] = "translate(" + t + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + t + ", " + i + ", 0px)", s.$slideTrack.css(n)))
		}, t.prototype.setDimensions = function() {
			var e = this;
			!1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
				padding: "0px " + e.options.centerPadding
			}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
				padding: e.options.centerPadding + " 0px"
			})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
			var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
			!1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
		}, t.prototype.setFade = function() {
			var t, i = this;
			i.$slides.each(function(s, n) {
				t = i.slideWidth * s * -1, !0 === i.options.rtl ? e(n).css({
					position: "relative",
					right: t,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				}) : e(n).css({
					position: "relative",
					left: t,
					top: 0,
					zIndex: i.options.zIndex - 2,
					opacity: 0
				})
			}), i.$slides.eq(i.currentSlide).css({
				zIndex: i.options.zIndex - 1,
				opacity: 1
			})
		}, t.prototype.setHeight = function() {
			var e = this;
			if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
				var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
				e.$list.css("height", t)
			}
		}, t.prototype.setOption = t.prototype.slickSetOption = function() {
			var t, i, s, n, a, r = this,
				o = !1;
			if ("object" === e.type(arguments[0]) ? (s = arguments[0], o = arguments[1], a = "multiple") : "string" === e.type(arguments[0]) && (s = arguments[0], n = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? a = "responsive" : void 0 !== arguments[1] && (a = "single")), "single" === a) r.options[s] = n;
			else if ("multiple" === a) e.each(s, function(e, t) {
				r.options[e] = t
			});
			else if ("responsive" === a)
				for (i in n)
					if ("array" !== e.type(r.options.responsive)) r.options.responsive = [n[i]];
					else {
						for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === n[i].breakpoint && r.options.responsive.splice(t, 1), t--;
						r.options.responsive.push(n[i])
					}
			o && (r.unload(), r.reinit())
		}, t.prototype.setPosition = function() {
			var e = this;
			e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
		}, t.prototype.setProps = function() {
			var e = this,
				t = document.body.style;
			e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
		}, t.prototype.setSlideClasses = function(e) {
			var t, i, s, n, a = this;
			if (i = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), a.$slides.eq(e).addClass("slick-current"), !0 === a.options.centerMode) {
				var r = a.options.slidesToShow % 2 == 0 ? 1 : 0;
				t = Math.floor(a.options.slidesToShow / 2), !0 === a.options.infinite && (e >= t && e <= a.slideCount - 1 - t ? a.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = a.options.slidesToShow + e, i.slice(s - t + 1 + r, s + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - a.options.slidesToShow).addClass("slick-center") : e === a.slideCount - 1 && i.eq(a.options.slidesToShow).addClass("slick-center")), a.$slides.eq(e).addClass("slick-center")
			} else e >= 0 && e <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(e, e + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= a.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = a.slideCount % a.options.slidesToShow, s = !0 === a.options.infinite ? a.options.slidesToShow + e : e, a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - e < a.options.slidesToShow ? i.slice(s - (a.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
			"ondemand" !== a.options.lazyLoad && "anticipated" !== a.options.lazyLoad || a.lazyLoad()
		}, t.prototype.setupInfinite = function() {
			var t, i, s, n = this;
			if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
				for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - s; t -= 1) i = t - 1, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
				for (t = 0; t < s + n.slideCount; t += 1) i = t, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
				n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
					e(this).attr("id", "")
				})
			}
		}, t.prototype.interrupt = function(e) {
			var t = this;
			e || t.autoPlay(), t.interrupted = e
		}, t.prototype.selectHandler = function(t) {
			var i = this,
				s = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
				n = parseInt(s.attr("data-slick-index"));
			n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
		}, t.prototype.slideHandler = function(e, t, i) {
			var s, n, a, r, o, l = null,
				d = this;
			if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
				if (!1 === t && d.asNavFor(e), s = e, l = d.getLeft(s), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
					d.postSlide(s)
				}) : d.postSlide(s));
				else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
				d.postSlide(s)
			}) : d.postSlide(s));
			else {
				if (d.options.autoplay && clearInterval(d.autoPlayTimer), n = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), a = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (o = (o = d.getNavTarget()).slick("getSlick")).slideCount <= o.options.slidesToShow && o.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(a), d.fadeSlide(n, function() {
					d.postSlide(n)
				})) : d.postSlide(n), void d.animateHeight();
				!0 !== i ? d.animateSlide(l, function() {
					d.postSlide(n)
				}) : d.postSlide(n)
			}
		}, t.prototype.startLoad = function() {
			var e = this;
			!0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
		}, t.prototype.swipeDirection = function() {
			var e, t, i, s, n = this;
			return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === n.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
		}, t.prototype.swipeEnd = function(e) {
			var t, i, s = this;
			if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
			if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
			if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
				switch (i = s.swipeDirection()) {
					case "left":
					case "down":
						t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
						break;
					case "right":
					case "up":
						t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
				}
				"vertical" != i && (s.slideHandler(t), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
			} else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
		}, t.prototype.swipeHandler = function(e) {
			var t = this;
			if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
				case "start":
					t.swipeStart(e);
					break;
				case "move":
					t.swipeMove(e);
					break;
				case "end":
					t.swipeEnd(e)
			}
		}, t.prototype.swipeMove = function(e) {
			var t, i, s, n, a, r, o = this;
			return a = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!o.dragging || o.scrolling || a && 1 !== a.length) && (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX, o.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))), !o.options.verticalSwiping && !o.swiping && r > 4 ? (o.scrolling = !0, !1) : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = r), i = o.swipeDirection(), void 0 !== e.originalEvent && o.touchObject.swipeLength > 4 && (o.swiping = !0, e.preventDefault()), n = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (n = o.touchObject.curY > o.touchObject.startY ? 1 : -1), s = o.touchObject.swipeLength, o.touchObject.edgeHit = !1, !1 === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (s = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = t + s * n : o.swipeLeft = t + s * (o.$list.height() / o.listWidth) * n, !0 === o.options.verticalSwiping && (o.swipeLeft = t + s * n), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))))
		}, t.prototype.swipeStart = function(e) {
			var t, i = this;
			if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
			void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
		}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
			var e = this;
			null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
		}, t.prototype.unload = function() {
			var t = this;
			e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
		}, t.prototype.unslick = function(e) {
			var t = this;
			t.$slider.trigger("unslick", [t, e]), t.destroy()
		}, t.prototype.updateArrows = function() {
			var e = this;
			Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
		}, t.prototype.updateDots = function() {
			var e = this;
			null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
		}, t.prototype.visibility = function() {
			var e = this;
			e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
		}, e.fn.slick = function() {
			var e, i, s = this,
				n = arguments[0],
				a = Array.prototype.slice.call(arguments, 1),
				r = s.length;
			for (e = 0; e < r; e++)
				if ("object" == typeof n || void 0 === n ? s[e].slick = new t(s[e], n) : i = s[e].slick[n].apply(s[e].slick, a), void 0 !== i) return i;
			return s
		}
	}),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("swiper", t) : e.Swiper = t()
	}(this, function() {
		"use strict";

		function e(e, t) {
			var i = [],
				r = 0;
			if (e && !t && e instanceof a) return e;
			if (e)
				if ("string" == typeof e) {
					var o, l, d = e.trim();
					if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
						var h = "div";
						for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = s.createElement(h)).innerHTML = d, r = 0; r < l.childNodes.length; r += 1) i.push(l.childNodes[r])
					} else
						for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || s).querySelectorAll(e.trim()) : [s.getElementById(e.trim().split("#")[1])], r = 0; r < o.length; r += 1) o[r] && i.push(o[r])
				} else if (e.nodeType || e === n || e === s) i.push(e);
			else if (e.length > 0 && e[0].nodeType)
				for (r = 0; r < e.length; r += 1) i.push(e[r]);
			return new a(i)
		}

		function t(e) {
			for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
			return t
		}

		function i() {
			var e = this.params,
				t = this.el;
			if (!t || 0 !== t.offsetWidth) {
				e.breakpoints && this.setBreakpoint();
				var i = this.allowSlideNext,
					s = this.allowSlidePrev;
				if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
					var n = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
					this.setTranslate(n), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
				} else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
				this.allowSlidePrev = s, this.allowSlideNext = i
			}
		}
		var s = "undefined" == typeof document ? {
				body: {},
				addEventListener: function() {},
				removeEventListener: function() {},
				activeElement: {
					blur: function() {},
					nodeName: ""
				},
				querySelector: function() {
					return null
				},
				querySelectorAll: function() {
					return []
				},
				getElementById: function() {
					return null
				},
				createEvent: function() {
					return {
						initEvent: function() {}
					}
				},
				createElement: function() {
					return {
						children: [],
						childNodes: [],
						style: {},
						setAttribute: function() {},
						getElementsByTagName: function() {
							return []
						}
					}
				},
				location: {
					hash: ""
				}
			} : document,
			n = "undefined" == typeof window ? {
				document: s,
				navigator: {
					userAgent: ""
				},
				location: {},
				history: {},
				CustomEvent: function() {
					return this
				},
				addEventListener: function() {},
				removeEventListener: function() {},
				getComputedStyle: function() {
					return {
						getPropertyValue: function() {
							return ""
						}
					}
				},
				Image: function() {},
				Date: function() {},
				screen: {},
				setTimeout: function() {},
				clearTimeout: function() {}
			} : window,
			a = function(e) {
				for (var t = 0; t < e.length; t += 1) this[t] = e[t];
				return this.length = e.length, this
			};
		e.fn = a.prototype, e.Class = a, e.Dom7 = a;
		var r = {
			addClass: function(e) {
				if (void 0 === e) return this;
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
				return this
			},
			removeClass: function(e) {
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
				return this
			},
			hasClass: function(e) {
				return !!this[0] && this[0].classList.contains(e)
			},
			toggleClass: function(e) {
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
				return this
			},
			attr: function(e, t) {
				var i = arguments;
				if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
				for (var s = 0; s < this.length; s += 1)
					if (2 === i.length) this[s].setAttribute(e, t);
					else
						for (var n in e) this[s][n] = e[n], this[s].setAttribute(n, e[n]);
				return this
			},
			removeAttr: function(e) {
				for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
				return this
			},
			data: function(e, t) {
				var i;
				if (void 0 !== t) {
					for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
					return this
				}
				if (i = this[0]) {
					if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
					return i.getAttribute("data-" + e) || void 0
				}
			},
			transform: function(e) {
				for (var t = 0; t < this.length; t += 1) {
					var i = this[t].style;
					i.webkitTransform = e, i.transform = e
				}
				return this
			},
			transition: function(e) {
				"string" != typeof e && (e += "ms");
				for (var t = 0; t < this.length; t += 1) {
					var i = this[t].style;
					i.webkitTransitionDuration = e, i.transitionDuration = e
				}
				return this
			},
			on: function() {
				function t(t) {
					var i = t.target;
					if (i) {
						var s = t.target.dom7EventData || [];
						if (s.unshift(t), e(i).is(o)) l.apply(i, s);
						else
							for (var n = e(i).parents(), a = 0; a < n.length; a += 1) e(n[a]).is(o) && l.apply(n[a], s)
					}
				}

				function i(e) {
					var t = e && e.target ? e.target.dom7EventData || [] : [];
					t.unshift(e), l.apply(this, t)
				}
				for (var s, n = [], a = arguments.length; a--;) n[a] = arguments[a];
				var r = n[0],
					o = n[1],
					l = n[2],
					d = n[3];
				"function" == typeof n[1] && (r = (s = n)[0], l = s[1], d = s[2], o = void 0), d || (d = !1);
				for (var h, c = r.split(" "), u = 0; u < this.length; u += 1) {
					var p = this[u];
					if (o)
						for (h = 0; h < c.length; h += 1) p.dom7LiveListeners || (p.dom7LiveListeners = []), p.dom7LiveListeners.push({
							type: r,
							listener: l,
							proxyListener: t
						}), p.addEventListener(c[h], t, d);
					else
						for (h = 0; h < c.length; h += 1) p.dom7Listeners || (p.dom7Listeners = []), p.dom7Listeners.push({
							type: r,
							listener: l,
							proxyListener: i
						}), p.addEventListener(c[h], i, d)
				}
				return this
			},
			off: function() {
				for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
				var s = t[0],
					n = t[1],
					a = t[2],
					r = t[3];
				"function" == typeof t[1] && (s = (e = t)[0], a = e[1], r = e[2], n = void 0), r || (r = !1);
				for (var o = s.split(" "), l = 0; l < o.length; l += 1)
					for (var d = 0; d < this.length; d += 1) {
						var h = this[d];
						if (n) {
							if (h.dom7LiveListeners)
								for (var c = 0; c < h.dom7LiveListeners.length; c += 1) a ? h.dom7LiveListeners[c].listener === a && h.removeEventListener(o[l], h.dom7LiveListeners[c].proxyListener, r) : h.dom7LiveListeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[c].proxyListener, r)
						} else if (h.dom7Listeners)
							for (var u = 0; u < h.dom7Listeners.length; u += 1) a ? h.dom7Listeners[u].listener === a && h.removeEventListener(o[l], h.dom7Listeners[u].proxyListener, r) : h.dom7Listeners[u].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[u].proxyListener, r)
					}
				return this
			},
			trigger: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var i = e[0].split(" "), a = e[1], r = 0; r < i.length; r += 1)
					for (var o = 0; o < this.length; o += 1) {
						var l = void 0;
						try {
							l = new n.CustomEvent(i[r], {
								detail: a,
								bubbles: !0,
								cancelable: !0
							})
						} catch (e) {
							(l = s.createEvent("Event")).initEvent(i[r], !0, !0), l.detail = a
						}
						this[o].dom7EventData = e.filter(function(e, t) {
							return t > 0
						}), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
					}
				return this
			},
			transitionEnd: function(e) {
				function t(a) {
					if (a.target === this)
						for (e.call(this, a), i = 0; i < s.length; i += 1) n.off(s[i], t)
				}
				var i, s = ["webkitTransitionEnd", "transitionend"],
					n = this;
				if (e)
					for (i = 0; i < s.length; i += 1) n.on(s[i], t);
				return this
			},
			outerWidth: function(e) {
				if (this.length > 0) {
					if (e) {
						var t = this.styles();
						return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
					}
					return this[0].offsetWidth
				}
				return null
			},
			outerHeight: function(e) {
				if (this.length > 0) {
					if (e) {
						var t = this.styles();
						return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
					}
					return this[0].offsetHeight
				}
				return null
			},
			offset: function() {
				if (this.length > 0) {
					var e = this[0],
						t = e.getBoundingClientRect(),
						i = s.body,
						a = e.clientTop || i.clientTop || 0,
						r = e.clientLeft || i.clientLeft || 0,
						o = e === n ? n.scrollY : e.scrollTop,
						l = e === n ? n.scrollX : e.scrollLeft;
					return {
						top: t.top + o - a,
						left: t.left + l - r
					}
				}
				return null
			},
			css: function(e, t) {
				var i;
				if (1 === arguments.length) {
					if ("string" != typeof e) {
						for (i = 0; i < this.length; i += 1)
							for (var s in e) this[i].style[s] = e[s];
						return this
					}
					if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
				}
				if (2 === arguments.length && "string" == typeof e) {
					for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
					return this
				}
				return this
			},
			each: function(e) {
				if (!e) return this;
				for (var t = 0; t < this.length; t += 1)
					if (!1 === e.call(this[t], t, this[t])) return this;
				return this
			},
			html: function(e) {
				if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
				for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
				return this
			},
			text: function(e) {
				if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
				for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
				return this
			},
			is: function(t) {
				var i, r, o = this[0];
				if (!o || void 0 === t) return !1;
				if ("string" == typeof t) {
					if (o.matches) return o.matches(t);
					if (o.webkitMatchesSelector) return o.webkitMatchesSelector(t);
					if (o.msMatchesSelector) return o.msMatchesSelector(t);
					for (i = e(t), r = 0; r < i.length; r += 1)
						if (i[r] === o) return !0;
					return !1
				}
				if (t === s) return o === s;
				if (t === n) return o === n;
				if (t.nodeType || t instanceof a) {
					for (i = t.nodeType ? [t] : t, r = 0; r < i.length; r += 1)
						if (i[r] === o) return !0;
					return !1
				}
				return !1
			},
			index: function() {
				var e, t = this[0];
				if (t) {
					for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
					return e
				}
			},
			eq: function(e) {
				if (void 0 === e) return this;
				var t, i = this.length;
				return new a(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
			},
			append: function() {
				for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
				for (var n = 0; n < t.length; n += 1) {
					e = t[n];
					for (var r = 0; r < this.length; r += 1)
						if ("string" == typeof e) {
							var o = s.createElement("div");
							for (o.innerHTML = e; o.firstChild;) this[r].appendChild(o.firstChild)
						} else if (e instanceof a)
						for (var l = 0; l < e.length; l += 1) this[r].appendChild(e[l]);
					else this[r].appendChild(e)
				}
				return this
			},
			prepend: function(e) {
				var t, i;
				for (t = 0; t < this.length; t += 1)
					if ("string" == typeof e) {
						var n = s.createElement("div");
						for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
					} else if (e instanceof a)
					for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
				else this[t].insertBefore(e, this[t].childNodes[0]);
				return this
			},
			next: function(t) {
				return new a(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
			},
			nextAll: function(t) {
				var i = [],
					s = this[0];
				if (!s) return new a([]);
				for (; s.nextElementSibling;) {
					var n = s.nextElementSibling;
					t ? e(n).is(t) && i.push(n) : i.push(n), s = n
				}
				return new a(i)
			},
			prev: function(t) {
				if (this.length > 0) {
					var i = this[0];
					return new a(t ? i.previousElementSibling && e(i.previousElementSibling).is(t) ? [i.previousElementSibling] : [] : i.previousElementSibling ? [i.previousElementSibling] : [])
				}
				return new a([])
			},
			prevAll: function(t) {
				var i = [],
					s = this[0];
				if (!s) return new a([]);
				for (; s.previousElementSibling;) {
					var n = s.previousElementSibling;
					t ? e(n).is(t) && i.push(n) : i.push(n), s = n
				}
				return new a(i)
			},
			parent: function(i) {
				for (var s = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (i ? e(this[n].parentNode).is(i) && s.push(this[n].parentNode) : s.push(this[n].parentNode));
				return e(t(s))
			},
			parents: function(i) {
				for (var s = [], n = 0; n < this.length; n += 1)
					for (var a = this[n].parentNode; a;) i ? e(a).is(i) && s.push(a) : s.push(a), a = a.parentNode;
				return e(t(s))
			},
			closest: function(e) {
				var t = this;
				return void 0 === e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
			},
			find: function(e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					for (var s = this[i].querySelectorAll(e), n = 0; n < s.length; n += 1) t.push(s[n]);
				return new a(t)
			},
			children: function(i) {
				for (var s = [], n = 0; n < this.length; n += 1)
					for (var r = this[n].childNodes, o = 0; o < r.length; o += 1) i ? 1 === r[o].nodeType && e(r[o]).is(i) && s.push(r[o]) : 1 === r[o].nodeType && s.push(r[o]);
				return new a(t(s))
			},
			remove: function() {
				for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
				return this
			},
			add: function() {
				for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
				var s, n;
				for (s = 0; s < t.length; s += 1) {
					var a = e(t[s]);
					for (n = 0; n < a.length; n += 1) this[this.length] = a[n], this.length += 1
				}
				return this
			},
			styles: function() {
				return this[0] ? n.getComputedStyle(this[0], null) : {}
			}
		};
		Object.keys(r).forEach(function(t) {
			e.fn[t] = r[t]
		});
		var o, l, d, h = {
				deleteProps: function(e) {
					var t = e;
					Object.keys(t).forEach(function(e) {
						try {
							t[e] = null
						} catch (e) {}
						try {
							delete t[e]
						} catch (e) {}
					})
				},
				nextTick: function(e, t) {
					return void 0 === t && (t = 0), setTimeout(e, t)
				},
				now: function() {
					return Date.now()
				},
				getTranslate: function(e, t) {
					var i, s, a;
					void 0 === t && (t = "x");
					var r = n.getComputedStyle(e, null);
					return n.WebKitCSSMatrix ? ((s = r.transform || r.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function(e) {
						return e.replace(",", ".")
					}).join(", ")), a = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
				},
				parseUrlQuery: function(e) {
					var t, i, s, a, r = {},
						o = e || n.location.href;
					if ("string" == typeof o && o.length)
						for (a = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
								return "" !== e
							})).length, t = 0; t < a; t += 1) s = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
					return r
				},
				isObject: function(e) {
					return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
				},
				extend: function() {
					for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
					for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
						var n = e[s];
						if (void 0 !== n && null !== n)
							for (var a = Object.keys(Object(n)), r = 0, o = a.length; r < o; r += 1) {
								var l = a[r],
									d = Object.getOwnPropertyDescriptor(n, l);
								void 0 !== d && d.enumerable && (h.isObject(i[l]) && h.isObject(n[l]) ? h.extend(i[l], n[l]) : !h.isObject(i[l]) && h.isObject(n[l]) ? (i[l] = {}, h.extend(i[l], n[l])) : i[l] = n[l])
							}
					}
					return i
				}
			},
			c = (d = s.createElement("div"), {
				touch: n.Modernizr && !0 === n.Modernizr.touch || !!("ontouchstart" in n || n.DocumentTouch && s instanceof n.DocumentTouch),
				pointerEvents: !(!n.navigator.pointerEnabled && !n.PointerEvent),
				prefixedPointerEvents: !!n.navigator.msPointerEnabled,
				transition: "transition" in (l = d.style) || "webkitTransition" in l || "MozTransition" in l,
				transforms3d: n.Modernizr && !0 === n.Modernizr.csstransforms3d || "webkitPerspective" in (o = d.style) || "MozPerspective" in o || "OPerspective" in o || "MsPerspective" in o || "perspective" in o,
				flexbox: function() {
					for (var e = d.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
						if (t[i] in e) return !0;
					return !1
				}(),
				observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
				passiveListener: function() {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function() {
								e = !0
							}
						});
						n.addEventListener("testPassiveListener", null, t)
					} catch (e) {}
					return e
				}(),
				gestures: "ongesturestart" in n
			}),
			u = function(e) {
				void 0 === e && (e = {});
				var t = this;
				t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
					t.on(e, t.params.on[e])
				})
			},
			p = {
				components: {
					configurable: !0
				}
			};
		u.prototype.on = function(e, t, i) {
			var s = this;
			if ("function" != typeof t) return s;
			var n = i ? "unshift" : "push";
			return e.split(" ").forEach(function(e) {
				s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
			}), s
		}, u.prototype.once = function(e, t, i) {
			var s = this;
			return "function" != typeof t ? s : s.on(e, function i() {
				for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
				t.apply(s, n), s.off(e, i)
			}, i)
		}, u.prototype.off = function(e, t) {
			var i = this;
			return e.split(" ").forEach(function(e) {
				void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, n) {
					s === t && i.eventsListeners[e].splice(n, 1)
				})
			}), i
		}, u.prototype.emit = function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, s, n, a = this;
			return a.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = a) : (i = e[0].events, s = e[0].data, n = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
				if (a.eventsListeners[e]) {
					var t = [];
					a.eventsListeners[e].forEach(function(e) {
						t.push(e)
					}), t.forEach(function(e) {
						e.apply(n, s)
					})
				}
			}), a) : a
		}, u.prototype.useModulesParams = function(e) {
			var t = this;
			t.modules && Object.keys(t.modules).forEach(function(i) {
				var s = t.modules[i];
				s.params && h.extend(e, s.params)
			})
		}, u.prototype.useModules = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.modules && Object.keys(t.modules).forEach(function(i) {
				var s = t.modules[i],
					n = e[i] || {};
				s.instance && Object.keys(s.instance).forEach(function(e) {
					var i = s.instance[e];
					t[e] = "function" == typeof i ? i.bind(t) : i
				}), s.on && t.on && Object.keys(s.on).forEach(function(e) {
					t.on(e, s.on[e])
				}), s.create && s.create.bind(t)(n)
			})
		}, p.components.set = function(e) {
			this.use && this.use(e)
		}, u.installModule = function(e) {
			for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
			var s = this;
			s.prototype.modules || (s.prototype.modules = {});
			var n = e.name || Object.keys(s.prototype.modules).length + "_" + h.now();
			return s.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
				s.prototype[t] = e.proto[t]
			}), e.static && Object.keys(e.static).forEach(function(t) {
				s[t] = e.static[t]
			}), e.install && e.install.apply(s, t), s
		}, u.use = function(e) {
			for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
			var s = this;
			return Array.isArray(e) ? (e.forEach(function(e) {
				return s.installModule(e)
			}), s) : s.installModule.apply(s, [e].concat(t))
		}, Object.defineProperties(u, p);
		var f = {
				updateSize: function() {
					var e, t, i = this.$el;
					e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10),
						t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), h.extend(this, {
							width: e,
							height: t,
							size: this.isHorizontal() ? e : t
						}))
				},
				updateSlides: function() {
					var e = this.params,
						t = this.$wrapperEl,
						i = this.size,
						s = this.rtlTranslate,
						a = this.wrongRTL,
						r = t.children("." + this.params.slideClass),
						o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
						l = [],
						d = [],
						u = [],
						p = e.slidesOffsetBefore;
					"function" == typeof p && (p = e.slidesOffsetBefore.call(this));
					var f = e.slidesOffsetAfter;
					"function" == typeof f && (f = e.slidesOffsetAfter.call(this));
					var v = o,
						m = this.snapGrid.length,
						g = this.snapGrid.length,
						y = e.spaceBetween,
						b = -p,
						w = 0,
						x = 0;
					if (void 0 !== i) {
						var T, S;
						"string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * i), this.virtualSize = -y, s ? r.css({
							marginLeft: "",
							marginTop: ""
						}) : r.css({
							marginRight: "",
							marginBottom: ""
						}), e.slidesPerColumn > 1 && (T = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
						for (var E, C = e.slidesPerColumn, k = T / C, A = k - (e.slidesPerColumn * k - o), M = 0; M < o; M += 1) {
							S = 0;
							var z = r.eq(M);
							if (e.slidesPerColumn > 1) {
								var $ = void 0,
									L = void 0,
									P = void 0;
								"column" === e.slidesPerColumnFill ? (P = M - (L = Math.floor(M / C)) * C, (L > A || L === A && P === C - 1) && (P += 1) >= C && (P = 0, L += 1), $ = L + P * T / C, z.css({
									"-webkit-box-ordinal-group": $,
									"-moz-box-ordinal-group": $,
									"-ms-flex-order": $,
									"-webkit-order": $,
									order: $
								})) : L = M - (P = Math.floor(M / k)) * k, z.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== P && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", P)
							}
							if ("none" !== z.css("display")) {
								if ("auto" === e.slidesPerView) {
									var I = n.getComputedStyle(z[0], null);
									S = this.isHorizontal() ? z[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : z[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), e.roundLengths && (S = Math.floor(S))
								} else S = (i - (e.slidesPerView - 1) * y) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), r[M] && (this.isHorizontal() ? r[M].style.width = S + "px" : r[M].style.height = S + "px");
								r[M] && (r[M].swiperSlideSize = S), u.push(S), e.centeredSlides ? (b = b + S / 2 + w / 2 + y, 0 === w && 0 !== M && (b = b - i / 2 - y), 0 === M && (b = b - i / 2 - y), Math.abs(b) < .001 && (b = 0), x % e.slidesPerGroup == 0 && l.push(b), d.push(b)) : (x % e.slidesPerGroup == 0 && l.push(b), d.push(b), b = b + S + y), this.virtualSize += S + y, w = S, x += 1
							}
						}
						if (this.virtualSize = Math.max(this.virtualSize, i) + f, s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
								width: this.virtualSize + e.spaceBetween + "px"
							}), c.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
								width: this.virtualSize + e.spaceBetween + "px"
							}) : t.css({
								height: this.virtualSize + e.spaceBetween + "px"
							})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
								width: this.virtualSize + e.spaceBetween + "px"
							}) : t.css({
								height: this.virtualSize + e.spaceBetween + "px"
							}), e.centeredSlides)) {
							E = [];
							for (var D = 0; D < l.length; D += 1) l[D] < this.virtualSize + l[0] && E.push(l[D]);
							l = E
						}
						if (!e.centeredSlides) {
							E = [];
							for (var N = 0; N < l.length; N += 1) l[N] <= this.virtualSize - i && E.push(l[N]);
							l = E, Math.floor(this.virtualSize - i) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - i)
						}
						0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? r.css({
							marginLeft: y + "px"
						}) : r.css({
							marginRight: y + "px"
						}) : r.css({
							marginBottom: y + "px"
						})), h.extend(this, {
							slides: r,
							snapGrid: l,
							slidesGrid: d,
							slidesSizesGrid: u
						}), o !== v && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), d.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
					}
				},
				updateAutoHeight: function(e) {
					var t, i = [],
						s = 0;
					if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
						for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
							var n = this.activeIndex + t;
							if (n > this.slides.length) break;
							i.push(this.slides.eq(n)[0])
						} else i.push(this.slides.eq(this.activeIndex)[0]);
					for (t = 0; t < i.length; t += 1)
						if (void 0 !== i[t]) {
							var a = i[t].offsetHeight;
							s = a > s ? a : s
						}
					s && this.$wrapperEl.css("height", s + "px")
				},
				updateSlidesOffset: function() {
					for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
				},
				updateSlidesProgress: function(e) {
					void 0 === e && (e = this.translate || 0);
					var t = this.params,
						i = this.slides,
						s = this.rtlTranslate;
					if (0 !== i.length) {
						void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
						var n = -e;
						s && (n = e), i.removeClass(t.slideVisibleClass);
						for (var a = 0; a < i.length; a += 1) {
							var r = i[a],
								o = (n + (t.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + t.spaceBetween);
							if (t.watchSlidesVisibility) {
								var l = -(n - r.swiperSlideOffset),
									d = l + this.slidesSizesGrid[a];
								(l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(a).addClass(t.slideVisibleClass)
							}
							r.progress = s ? -o : o
						}
					}
				},
				updateProgress: function(e) {
					void 0 === e && (e = this.translate || 0);
					var t = this.params,
						i = this.maxTranslate() - this.minTranslate(),
						s = this.progress,
						n = this.isBeginning,
						a = this.isEnd,
						r = n,
						o = a;
					0 === i ? (s = 0, n = !0, a = !0) : (n = (s = (e - this.minTranslate()) / i) <= 0, a = s >= 1), h.extend(this, {
						progress: s,
						isBeginning: n,
						isEnd: a
					}), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), n && !r && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (r && !n || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
				},
				updateSlidesClasses: function() {
					var e, t = this.slides,
						i = this.params,
						s = this.$wrapperEl,
						n = this.activeIndex,
						a = this.realIndex,
						r = this.virtual && i.virtual.enabled;
					t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]') : t.eq(n)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
					var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
					i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
					var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
					i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
				},
				updateActiveIndex: function(e) {
					var t, i = this.rtlTranslate ? this.translate : -this.translate,
						s = this.slidesGrid,
						n = this.snapGrid,
						a = this.params,
						r = this.activeIndex,
						o = this.realIndex,
						l = this.snapIndex,
						d = e;
					if (void 0 === d) {
						for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? d = c : i >= s[c] && i < s[c + 1] && (d = c + 1) : i >= s[c] && (d = c);
						a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
					}
					if ((t = n.indexOf(i) >= 0 ? n.indexOf(i) : Math.floor(d / a.slidesPerGroup)) >= n.length && (t = n.length - 1), d !== r) {
						var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
						h.extend(this, {
							snapIndex: t,
							realIndex: u,
							previousIndex: r,
							activeIndex: d
						}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), this.emit("slideChange")
					} else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
				},
				updateClickedSlide: function(t) {
					var i = this.params,
						s = e(t.target).closest("." + i.slideClass)[0],
						n = !1;
					if (s)
						for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === s && (n = !0);
					if (!s || !n) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
					this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
				}
			},
			v = {
				getTranslate: function(e) {
					void 0 === e && (e = this.isHorizontal() ? "x" : "y");
					var t = this.params,
						i = this.rtlTranslate,
						s = this.translate,
						n = this.$wrapperEl;
					if (t.virtualTranslate) return i ? -s : s;
					var a = h.getTranslate(n[0], e);
					return i && (a = -a), a || 0
				},
				setTranslate: function(e, t) {
					var i = this.rtlTranslate,
						s = this.params,
						n = this.$wrapperEl,
						a = this.progress,
						r = 0,
						o = 0;
					this.isHorizontal() ? r = i ? -e : e : o = e, s.roundLengths && (r = Math.floor(r), o = Math.floor(o)), s.virtualTranslate || (c.transforms3d ? n.transform("translate3d(" + r + "px, " + o + "px, 0px)") : n.transform("translate(" + r + "px, " + o + "px)")), this.translate = this.isHorizontal() ? r : o;
					var l = this.maxTranslate() - this.minTranslate();
					(0 === l ? 0 : (e - this.minTranslate()) / l) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
				},
				minTranslate: function() {
					return -this.snapGrid[0]
				},
				maxTranslate: function() {
					return -this.snapGrid[this.snapGrid.length - 1]
				}
			},
			m = {
				setTransition: function(e, t) {
					this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
				},
				transitionStart: function(e, t) {
					void 0 === e && (e = !0);
					var i = this.activeIndex,
						s = this.params,
						n = this.previousIndex;
					s.autoHeight && this.updateAutoHeight();
					var a = t;
					if (a || (a = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionStart"), e && i !== n) {
						if ("reset" === a) return void this.emit("slideResetTransitionStart");
						this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
					}
				},
				transitionEnd: function(e, t) {
					void 0 === e && (e = !0);
					var i = this.activeIndex,
						s = this.previousIndex;
					this.animating = !1, this.setTransition(0);
					var n = t;
					if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
						if ("reset" === n) return void this.emit("slideResetTransitionEnd");
						this.emit("slideChangeTransitionEnd"), "next" === n ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
					}
				}
			},
			g = {
				slideTo: function(e, t, i, s) {
					void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
					var n = this,
						a = e;
					a < 0 && (a = 0);
					var r = n.params,
						o = n.snapGrid,
						l = n.slidesGrid,
						d = n.previousIndex,
						h = n.activeIndex,
						u = n.rtlTranslate,
						p = n.$wrapperEl;
					if (n.animating && r.preventIntercationOnTransition) return !1;
					var f = Math.floor(a / r.slidesPerGroup);
					f >= o.length && (f = o.length - 1), (h || r.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
					var v, m = -o[f];
					if (n.updateProgress(m), r.normalizeSlideIndex)
						for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (a = g);
					if (n.initialized && a !== h) {
						if (!n.allowSlideNext && m < n.translate && m < n.minTranslate()) return !1;
						if (!n.allowSlidePrev && m > n.translate && m > n.maxTranslate() && (h || 0) !== a) return !1
					}
					return v = a > h ? "next" : a < h ? "prev" : "reset", u && -m === n.translate || !u && m === n.translate ? (n.updateActiveIndex(a), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== r.effect && n.setTranslate(m), "reset" !== v && (n.transitionStart(i, v), n.transitionEnd(i, v)), !1) : (0 !== t && c.transition ? (n.setTransition(t), n.setTranslate(m), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, v), n.animating || (n.animating = !0, p.transitionEnd(function() {
						n && !n.destroyed && n.transitionEnd(i, v)
					}))) : (n.setTransition(0), n.setTranslate(m), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, v), n.transitionEnd(i, v)), !0)
				},
				slideToLoop: function(e, t, i, s) {
					void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
					var n = e;
					return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
				},
				slideNext: function(e, t, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var s = this.params,
						n = this.animating;
					return s.loop ? !n && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
				},
				slidePrev: function(e, t, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var s = this.params,
						n = this.animating;
					return s.loop ? !n && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
				},
				slideReset: function(e, t, i) {
					return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
				},
				slideToClosest: function(e, t, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var s = this.activeIndex,
						n = Math.floor(s / this.params.slidesPerGroup);
					if (n < this.snapGrid.length - 1) {
						var a = this.rtlTranslate ? this.translate : -this.translate,
							r = this.snapGrid[n];
						a - r > (this.snapGrid[n + 1] - r) / 2 && (s = this.params.slidesPerGroup)
					}
					return this.slideTo(s, e, t, i)
				},
				slideToClickedSlide: function() {
					var t, i = this,
						s = i.params,
						n = i.$wrapperEl,
						a = "auto" === s.slidesPerView ? i.slidesPerViewDynamic() : s.slidesPerView,
						r = i.clickedIndex;
					if (s.loop) {
						if (i.animating) return;
						t = parseInt(e(i.clickedSlide).attr("data-swiper-slide-index"), 10), s.centeredSlides ? r < i.loopedSlides - a / 2 || r > i.slides.length - i.loopedSlides + a / 2 ? (i.loopFix(), r = n.children("." + s.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), h.nextTick(function() {
							i.slideTo(r)
						})) : i.slideTo(r) : r > i.slides.length - a ? (i.loopFix(), r = n.children("." + s.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), h.nextTick(function() {
							i.slideTo(r)
						})) : i.slideTo(r)
					} else i.slideTo(r)
				}
			},
			y = {
				loopCreate: function() {
					var t = this,
						i = t.params,
						n = t.$wrapperEl;
					n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
					var a = n.children("." + i.slideClass);
					if (i.loopFillGroupWithBlank) {
						var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
						if (r !== i.slidesPerGroup) {
							for (var o = 0; o < r; o += 1) {
								var l = e(s.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
								n.append(l)
							}
							a = n.children("." + i.slideClass)
						}
					}
					"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
					var d = [],
						h = [];
					a.each(function(i, s) {
						var n = e(s);
						i < t.loopedSlides && h.push(s), i < a.length && i >= a.length - t.loopedSlides && d.push(s), n.attr("data-swiper-slide-index", i)
					});
					for (var c = 0; c < h.length; c += 1) n.append(e(h[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
					for (var u = d.length - 1; u >= 0; u -= 1) n.prepend(e(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
				},
				loopFix: function() {
					var e, t = this.params,
						i = this.activeIndex,
						s = this.slides,
						n = this.loopedSlides,
						a = this.allowSlidePrev,
						r = this.allowSlideNext,
						o = this.snapGrid,
						l = this.rtlTranslate;
					this.allowSlidePrev = !0, this.allowSlideNext = !0;
					var d = -o[i] - this.getTranslate();
					i < n ? (e = s.length - 3 * n + i, e += n, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * n || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + n, e += n, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)), this.allowSlidePrev = a, this.allowSlideNext = r
				},
				loopDestroy: function() {
					var e = this.$wrapperEl,
						t = this.params,
						i = this.slides;
					e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
				}
			},
			b = {
				setGrabCursor: function(e) {
					if (!c.touch && this.params.simulateTouch) {
						var t = this.el;
						t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
					}
				},
				unsetGrabCursor: function() {
					c.touch || (this.el.style.cursor = "")
				}
			},
			w = {
				appendSlide: function(e) {
					var t = this.$wrapperEl,
						i = this.params;
					if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
						for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
					else t.append(e);
					i.loop && this.loopCreate(), i.observer && c.observer || this.update()
				},
				prependSlide: function(e) {
					var t = this.params,
						i = this.$wrapperEl,
						s = this.activeIndex;
					t.loop && this.loopDestroy();
					var n = s + 1;
					if ("object" == typeof e && "length" in e) {
						for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
						n = s + e.length
					} else i.prepend(e);
					t.loop && this.loopCreate(), t.observer && c.observer || this.update(), this.slideTo(n, 0, !1)
				},
				removeSlide: function(e) {
					var t = this.params,
						i = this.$wrapperEl,
						s = this.activeIndex;
					t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
					var n, a = s;
					if ("object" == typeof e && "length" in e) {
						for (var r = 0; r < e.length; r += 1) n = e[r], this.slides[n] && this.slides.eq(n).remove(), n < a && (a -= 1);
						a = Math.max(a, 0)
					} else n = e, this.slides[n] && this.slides.eq(n).remove(), n < a && (a -= 1), a = Math.max(a, 0);
					t.loop && this.loopCreate(), t.observer && c.observer || this.update(), t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
				},
				removeAllSlides: function() {
					for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
					this.removeSlide(e)
				}
			},
			x = function() {
				var e = n.navigator.userAgent,
					t = {
						ios: !1,
						android: !1,
						androidChrome: !1,
						desktop: !1,
						windows: !1,
						iphone: !1,
						ipod: !1,
						ipad: !1,
						cordova: n.cordova || n.phonegap,
						phonegap: n.cordova || n.phonegap
					},
					i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
					a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
					r = e.match(/(iPad).*OS\s([\d_]+)/),
					o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
					l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
				if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), a && !i && (t.os = "android", t.osVersion = a[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
					var d = t.osVersion.split("."),
						h = s.querySelector('meta[name="viewport"]');
					t.minimalUi = !t.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
				}
				return t.pixelRatio = n.devicePixelRatio || 1, t
			}(),
			T = {
				attachEvents: function() {
					var t = this.params,
						a = this.touchEvents,
						r = this.el,
						o = this.wrapperEl;
					this.onTouchStart = function(t) {
						var i = this.touchEventsData,
							a = this.params,
							r = this.touches;
						if (!this.animating || !a.preventIntercationOnTransition) {
							var o = t;
							if (o.originalEvent && (o = o.originalEvent), i.isTouchEvent = "touchstart" === o.type, (i.isTouchEvent || !("which" in o) || 3 !== o.which) && (!i.isTouched || !i.isMoved))
								if (a.noSwiping && e(o.target).closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
								else if (!a.swipeHandler || e(o).closest(a.swipeHandler)[0]) {
								r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
								var l = r.currentX,
									d = r.currentY;
								if (!(x.ios && !x.cordova && a.iOSEdgeSwipeDetection && l <= a.iOSEdgeSwipeThreshold && l >= n.screen.width - a.iOSEdgeSwipeThreshold)) {
									if (h.extend(i, {
											isTouched: !0,
											isMoved: !1,
											allowTouchCallbacks: !0,
											isScrolling: void 0,
											startMoving: void 0
										}), r.startX = l, r.startY = d, i.touchStartTime = h.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== o.type) {
										var c = !0;
										e(o.target).is(i.formElements) && (c = !1), s.activeElement && e(s.activeElement).is(i.formElements) && s.activeElement !== o.target && s.activeElement.blur(), c && this.allowTouchMove && o.preventDefault()
									}
									this.emit("touchStart", o)
								}
							}
						}
					}.bind(this), this.onTouchMove = function(t) {
						var i = this.touchEventsData,
							n = this.params,
							a = this.touches,
							r = this.rtlTranslate,
							o = t;
						if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
							if (!i.isTouchEvent || "mousemove" !== o.type) {
								var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
									d = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
								if (o.preventedByNestedSwiper) return a.startX = l, void(a.startY = d);
								if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (h.extend(a, {
									startX: l,
									startY: d,
									currentX: l,
									currentY: d
								}), i.touchStartTime = h.now()));
								if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
									if (this.isVertical()) {
										if (d < a.startY && this.translate <= this.maxTranslate() || d > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
									} else if (l < a.startX && this.translate <= this.maxTranslate() || l > a.startX && this.translate >= this.minTranslate()) return;
								if (i.isTouchEvent && s.activeElement && o.target === s.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
								if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
									a.currentX = l, a.currentY = d;
									var c, u = a.currentX - a.startX,
										p = a.currentY - a.startY;
									if (void 0 === i.isScrolling && (this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : u * u + p * p >= 25 && (c = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > n.touchAngle : 90 - c > n.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
									else if (i.startMoving) {
										this.allowClick = !1, o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), i.isMoved || (n.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
										var f = this.isHorizontal() ? u : p;
										a.diff = f, f *= n.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
										var v = !0,
											m = n.resistanceRatio;
										if (n.touchReleaseOnEdges && (m = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, m))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, m))), v && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
											if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
											if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
										}
										n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
											position: a[this.isHorizontal() ? "startX" : "startY"],
											time: i.touchStartTime
										}), i.velocities.push({
											position: a[this.isHorizontal() ? "currentX" : "currentY"],
											time: h.now()
										})), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
									}
								}
							}
						} else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
					}.bind(this), this.onTouchEnd = function(e) {
						var t = this,
							i = t.touchEventsData,
							s = t.params,
							n = t.touches,
							a = t.rtlTranslate,
							r = t.$wrapperEl,
							o = t.slidesGrid,
							l = t.snapGrid,
							d = e;
						if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
						s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
						var c, u = h.now(),
							p = u - i.touchStartTime;
						if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), p < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = h.nextTick(function() {
								t && !t.destroyed && t.emit("click", d)
							}, 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = h.now(), h.nextTick(function() {
								t.destroyed || (t.allowClick = !0)
							}), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
						if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
							if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
							if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
							if (s.freeModeMomentum) {
								if (i.velocities.length > 1) {
									var f = i.velocities.pop(),
										v = i.velocities.pop(),
										m = f.position - v.position,
										g = f.time - v.time;
									t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || h.now() - f.time > 300) && (t.velocity = 0)
								} else t.velocity = 0;
								t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
								var y = 1e3 * s.freeModeMomentumRatio,
									b = t.velocity * y,
									w = t.translate + b;
								a && (w = -w);
								var x, T = !1,
									S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
								if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate();
								else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.minTranslate();
								else if (s.freeModeSticky) {
									for (var E, C = 0; C < l.length; C += 1)
										if (l[C] > -w) {
											E = C;
											break
										}
									w = -(w = Math.abs(l[E] - w) < Math.abs(l[E - 1] - w) || "next" === t.swipeDirection ? l[E] : l[E - 1])
								}
								if (0 !== t.velocity) y = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
								else if (s.freeModeSticky) return void t.slideToClosest();
								s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() {
									t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), r.transitionEnd(function() {
										t && !t.destroyed && t.transitionEnd()
									}))
								})) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() {
									t && !t.destroyed && t.transitionEnd()
								}))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
							} else if (s.freeModeSticky) return void t.slideToClosest();
							(!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
						} else {
							for (var k = 0, A = t.slidesSizesGrid[0], M = 0; M < o.length; M += s.slidesPerGroup) void 0 !== o[M + s.slidesPerGroup] ? c >= o[M] && c < o[M + s.slidesPerGroup] && (k = M, A = o[M + s.slidesPerGroup] - o[M]) : c >= o[M] && (k = M, A = o[o.length - 1] - o[o.length - 2]);
							var z = (c - o[k]) / A;
							if (p > s.longSwipesMs) {
								if (!s.longSwipes) return void t.slideTo(t.activeIndex);
								"next" === t.swipeDirection && (z >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (z > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k))
							} else {
								if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
								"next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
							}
						}
					}.bind(this), this.onClick = function(e) {
						this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
					}.bind(this);
					var l = "container" === t.touchEventsTarget ? r : o,
						d = !!t.nested;
					if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
						if (c.touch) {
							var u = !("touchstart" !== a.start || !c.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							l.addEventListener(a.start, this.onTouchStart, u), l.addEventListener(a.move, this.onTouchMove, c.passiveListener ? {
								passive: !1,
								capture: d
							} : d), l.addEventListener(a.end, this.onTouchEnd, u)
						}(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !c.touch && x.ios) && (l.addEventListener("mousedown", this.onTouchStart, !1), s.addEventListener("mousemove", this.onTouchMove, d), s.addEventListener("mouseup", this.onTouchEnd, !1))
					} else l.addEventListener(a.start, this.onTouchStart, !1), s.addEventListener(a.move, this.onTouchMove, d), s.addEventListener(a.end, this.onTouchEnd, !1);
					(t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", i, !0)
				},
				detachEvents: function() {
					var e = this.params,
						t = this.touchEvents,
						n = this.el,
						a = this.wrapperEl,
						r = "container" === e.touchEventsTarget ? n : a,
						o = !!e.nested;
					if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
						if (c.touch) {
							var l = !("onTouchStart" !== t.start || !c.passiveListener || !e.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							r.removeEventListener(t.start, this.onTouchStart, l), r.removeEventListener(t.move, this.onTouchMove, o), r.removeEventListener(t.end, this.onTouchEnd, l)
						}(e.simulateTouch && !x.ios && !x.android || e.simulateTouch && !c.touch && x.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), s.removeEventListener("mousemove", this.onTouchMove, o), s.removeEventListener("mouseup", this.onTouchEnd, !1))
					} else r.removeEventListener(t.start, this.onTouchStart, !1), s.removeEventListener(t.move, this.onTouchMove, o), s.removeEventListener(t.end, this.onTouchEnd, !1);
					(e.preventClicks || e.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", i)
				}
			},
			S = {
				setBreakpoint: function() {
					var e = this.activeIndex,
						t = this.loopedSlides;
					void 0 === t && (t = 0);
					var i = this.params,
						s = i.breakpoints;
					if (s && (!s || 0 !== Object.keys(s).length)) {
						var n = this.getBreakpoint(s);
						if (n && this.currentBreakpoint !== n) {
							var a = n in s ? s[n] : this.originalParams,
								r = i.loop && a.slidesPerView !== i.slidesPerView;
							h.extend(this.params, a), h.extend(this, {
								allowTouchMove: this.params.allowTouchMove,
								allowSlideNext: this.params.allowSlideNext,
								allowSlidePrev: this.params.allowSlidePrev
							}), this.currentBreakpoint = n, r && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", a)
						}
					}
				},
				getBreakpoint: function(e) {
					if (e) {
						var t = !1,
							i = [];
						Object.keys(e).forEach(function(e) {
							i.push(e)
						}), i.sort(function(e, t) {
							return parseInt(e, 10) - parseInt(t, 10)
						});
						for (var s = 0; s < i.length; s += 1) {
							var a = i[s];
							a >= n.innerWidth && !t && (t = a)
						}
						return t || "max"
					}
				}
			},
			E = function() {
				return {
					isIE: !!n.navigator.userAgent.match(/Trident/g) || !!n.navigator.userAgent.match(/MSIE/g),
					isSafari: (e = n.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
					isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
				};
				var e
			}(),
			C = {
				init: !0,
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				preventIntercationOnTransition: !1,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeMomentumVelocityRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				breakpoints: void 0,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				watchOverflow: !1,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 0,
				touchMoveStopPropagation: !0,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: .85,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				loopFillGroupWithBlank: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				noSwipingSelector: null,
				passiveListeners: !0,
				containerModifierClass: "swiper-container-",
				slideClass: "swiper-slide",
				slideBlankClass: "swiper-slide-invisible-blank",
				slideActiveClass: "swiper-slide-active",
				slideDuplicateActiveClass: "swiper-slide-duplicate-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slideDuplicateNextClass: "swiper-slide-duplicate-next",
				slidePrevClass: "swiper-slide-prev",
				slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
				wrapperClass: "swiper-wrapper",
				runCallbacksOnInit: !0
			},
			k = {
				update: f,
				translate: v,
				transition: m,
				slide: g,
				loop: y,
				grabCursor: b,
				manipulation: w,
				events: T,
				breakpoints: S,
				checkOverflow: {
					checkOverflow: function() {
						var e = this.isLocked;
						this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
					}
				},
				classes: {
					addClasses: function() {
						var e = this.classNames,
							t = this.params,
							i = this.rtl,
							s = this.$el,
							n = [];
						n.push(t.direction), t.freeMode && n.push("free-mode"), c.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && n.push("multirow"), x.android && n.push("android"), x.ios && n.push("ios"), E.isIE && (c.pointerEvents || c.prefixedPointerEvents) && n.push("wp8-" + t.direction), n.forEach(function(i) {
							e.push(t.containerModifierClass + i)
						}), s.addClass(e.join(" "))
					},
					removeClasses: function() {
						var e = this.$el,
							t = this.classNames;
						e.removeClass(t.join(" "))
					}
				},
				images: {
					loadImage: function(e, t, i, s, a, r) {
						function o() {
							r && r()
						}
						var l;
						e.complete && a ? o() : t ? ((l = new n.Image).onload = o, l.onerror = o, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : o()
					},
					preloadImages: function() {
						function e() {
							void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
						}
						var t = this;
						t.imagesToLoad = t.$el.find("img");
						for (var i = 0; i < t.imagesToLoad.length; i += 1) {
							var s = t.imagesToLoad[i];
							t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e)
						}
					}
				}
			},
			A = {},
			M = function(t) {
				function i() {
					for (var s, n, a, r = [], o = arguments.length; o--;) r[o] = arguments[o];
					1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (n = (s = r)[0], a = s[1]), a || (a = {}), a = h.extend({}, a), n && !a.el && (a.el = n), t.call(this, a), Object.keys(k).forEach(function(e) {
						Object.keys(k[e]).forEach(function(t) {
							i.prototype[t] || (i.prototype[t] = k[e][t])
						})
					});
					var l = this;
					void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
						var t = l.modules[e];
						if (t.params) {
							var i = Object.keys(t.params)[0],
								s = t.params[i];
							if ("object" != typeof s) return;
							if (!(i in a && "enabled" in s)) return;
							!0 === a[i] && (a[i] = {
								enabled: !0
							}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
								enabled: !1
							})
						}
					});
					var d = h.extend({}, C);
					l.useModulesParams(d), l.params = h.extend({}, d, A, a), l.originalParams = h.extend({}, l.params), l.passedParams = h.extend({}, a), l.$ = e;
					var u = e(l.params.el);
					if (n = u[0]) {
						if (u.length > 1) {
							var p = [];
							return u.each(function(e, t) {
								var s = h.extend({}, a, {
									el: t
								});
								p.push(new i(s))
							}), p
						}
						n.swiper = l, u.data("swiper", l);
						var f, v, m = u.children("." + l.params.wrapperClass);
						return h.extend(l, {
							$el: u,
							el: n,
							$wrapperEl: m,
							wrapperEl: m[0],
							classNames: [],
							slides: e(),
							slidesGrid: [],
							snapGrid: [],
							slidesSizesGrid: [],
							isHorizontal: function() {
								return "horizontal" === l.params.direction
							},
							isVertical: function() {
								return "vertical" === l.params.direction
							},
							rtl: "rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction"),
							rtlTranslate: "horizontal" === l.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction")),
							wrongRTL: "-webkit-box" === m.css("display"),
							activeIndex: 0,
							realIndex: 0,
							isBeginning: !0,
							isEnd: !1,
							translate: 0,
							progress: 0,
							velocity: 0,
							animating: !1,
							allowSlideNext: l.params.allowSlideNext,
							allowSlidePrev: l.params.allowSlidePrev,
							touchEvents: (f = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], c.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
								start: f[0],
								move: f[1],
								end: f[2]
							}, l.touchEventsDesktop = {
								start: v[0],
								move: v[1],
								end: v[2]
							}, c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
							touchEventsData: {
								isTouched: void 0,
								isMoved: void 0,
								allowTouchCallbacks: void 0,
								touchStartTime: void 0,
								isScrolling: void 0,
								currentTranslate: void 0,
								startTranslate: void 0,
								allowThresholdMove: void 0,
								formElements: "input, select, option, textarea, button, video",
								lastClickTime: h.now(),
								clickTimeout: void 0,
								velocities: [],
								allowMomentumBounce: void 0,
								isTouchEvent: void 0,
								startMoving: void 0
							},
							allowClick: !0,
							allowTouchMove: l.params.allowTouchMove,
							touches: {
								startX: 0,
								startY: 0,
								currentX: 0,
								currentY: 0,
								diff: 0
							},
							imagesToLoad: [],
							imagesLoaded: 0
						}), l.useModules(), l.params.init && l.init(), l
					}
				}
				t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
				var s = {
					extendedDefaults: {
						configurable: !0
					},
					defaults: {
						configurable: !0
					},
					Class: {
						configurable: !0
					},
					$: {
						configurable: !0
					}
				};
				return i.prototype.slidesPerViewDynamic = function() {
					var e = this.params,
						t = this.slides,
						i = this.slidesGrid,
						s = this.size,
						n = this.activeIndex,
						a = 1;
					if (e.centeredSlides) {
						for (var r, o = t[n].swiperSlideSize, l = n + 1; l < t.length; l += 1) t[l] && !r && (a += 1, (o += t[l].swiperSlideSize) > s && (r = !0));
						for (var d = n - 1; d >= 0; d -= 1) t[d] && !r && (a += 1, (o += t[d].swiperSlideSize) > s && (r = !0))
					} else
						for (var h = n + 1; h < t.length; h += 1) i[h] - i[n] < s && (a += 1);
					return a
				}, i.prototype.update = function() {
					function e() {
						var e = t.rtlTranslate ? -1 * t.translate : t.translate,
							i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
						t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
					}
					var t = this;
					t && !t.destroyed && (t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update"))
				}, i.prototype.init = function() {
					this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
				}, i.prototype.destroy = function(e, t) {
					void 0 === e && (e = !0), void 0 === t && (t = !0);
					var i = this,
						s = i.params,
						n = i.$el,
						a = i.$wrapperEl,
						r = i.slides;
					i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
						i.off(e)
					}), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), h.deleteProps(i)), i.destroyed = !0
				}, i.extendDefaults = function(e) {
					h.extend(A, e)
				}, s.extendedDefaults.get = function() {
					return A
				}, s.defaults.get = function() {
					return C
				}, s.Class.get = function() {
					return t
				}, s.$.get = function() {
					return e
				}, Object.defineProperties(i, s), i
			}(u),
			z = {
				name: "device",
				proto: {
					device: x
				},
				static: {
					device: x
				}
			},
			$ = {
				name: "support",
				proto: {
					support: c
				},
				static: {
					support: c
				}
			},
			L = {
				name: "browser",
				proto: {
					browser: E
				},
				static: {
					browser: E
				}
			},
			P = {
				name: "resize",
				create: function() {
					var e = this;
					h.extend(e, {
						resize: {
							resizeHandler: function() {
								e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
							},
							orientationChangeHandler: function() {
								e && !e.destroyed && e.initialized && e.emit("orientationchange")
							}
						}
					})
				},
				on: {
					init: function() {
						n.addEventListener("resize", this.resize.resizeHandler), n.addEventListener("orientationchange", this.resize.orientationChangeHandler)
					},
					destroy: function() {
						n.removeEventListener("resize", this.resize.resizeHandler), n.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
					}
				}
			},
			I = {
				func: n.MutationObserver || n.WebkitMutationObserver,
				attach: function(e, t) {
					void 0 === t && (t = {});
					var i = this,
						s = new(0, I.func)(function(e) {
							e.forEach(function(e) {
								i.emit("observerUpdate", e)
							})
						});
					s.observe(e, {
						attributes: void 0 === t.attributes || t.attributes,
						childList: void 0 === t.childList || t.childList,
						characterData: void 0 === t.characterData || t.characterData
					}), i.observer.observers.push(s)
				},
				init: function() {
					if (c.observer && this.params.observer) {
						if (this.params.observeParents)
							for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
						this.observer.attach(this.$el[0], {
							childList: !1
						}), this.observer.attach(this.$wrapperEl[0], {
							attributes: !1
						})
					}
				},
				destroy: function() {
					this.observer.observers.forEach(function(e) {
						e.disconnect()
					}), this.observer.observers = []
				}
			},
			D = {
				name: "observer",
				params: {
					observer: !1,
					observeParents: !1
				},
				create: function() {
					h.extend(this, {
						observer: {
							init: I.init.bind(this),
							attach: I.attach.bind(this),
							destroy: I.destroy.bind(this),
							observers: []
						}
					})
				},
				on: {
					init: function() {
						this.observer.init()
					},
					destroy: function() {
						this.observer.destroy()
					}
				}
			},
			N = {
				update: function(e) {
					function t() {
						i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
					}
					var i = this,
						s = i.params,
						n = s.slidesPerView,
						a = s.slidesPerGroup,
						r = s.centeredSlides,
						o = i.virtual,
						l = o.from,
						d = o.to,
						c = o.slides,
						u = o.slidesGrid,
						p = o.renderSlide,
						f = o.offset;
					i.updateActiveIndex();
					var v, m, g, y = i.activeIndex || 0;
					v = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (m = Math.floor(n / 2) + a, g = Math.floor(n / 2) + a) : (m = n + (a - 1), g = a);
					var b = Math.max((y || 0) - g, 0),
						w = Math.min((y || 0) + m, c.length - 1),
						x = (i.slidesGrid[b] || 0) - (i.slidesGrid[0] || 0);
					if (h.extend(i.virtual, {
							from: b,
							to: w,
							offset: x,
							slidesGrid: i.slidesGrid
						}), l === b && d === w && !e) return i.slidesGrid !== u && x !== f && i.slides.css(v, x + "px"), void i.updateProgress();
					if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
						offset: x,
						from: b,
						to: w,
						slides: function() {
							for (var e = [], t = b; t <= w; t += 1) e.push(c[t]);
							return e
						}()
					}), void t();
					var T = [],
						S = [];
					if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
					else
						for (var E = l; E <= d; E += 1)(E < b || E > w) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + E + '"]').remove();
					for (var C = 0; C < c.length; C += 1) C >= b && C <= w && (void 0 === d || e ? S.push(C) : (C > d && S.push(C), C < l && T.push(C)));
					S.forEach(function(e) {
						i.$wrapperEl.append(p(c[e], e))
					}), T.sort(function(e, t) {
						return e < t
					}).forEach(function(e) {
						i.$wrapperEl.prepend(p(c[e], e))
					}), i.$wrapperEl.children(".swiper-slide").css(v, x + "px"), t()
				},
				renderSlide: function(t, i) {
					var s = this.params.virtual;
					if (s.cache && this.virtual.cache[i]) return this.virtual.cache[i];
					var n = e(s.renderSlide ? s.renderSlide.call(this, t, i) : '<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + "</div>");
					return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", i), s.cache && (this.virtual.cache[i] = n), n
				},
				appendSlide: function(e) {
					this.virtual.slides.push(e), this.virtual.update(!0)
				},
				prependSlide: function(e) {
					if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
						var t = this.virtual.cache,
							i = {};
						Object.keys(t).forEach(function(e) {
							i[e + 1] = t[e]
						}), this.virtual.cache = i
					}
					this.virtual.update(!0), this.slideNext(0)
				}
			},
			O = {
				name: "virtual",
				params: {
					virtual: {
						enabled: !1,
						slides: [],
						cache: !0,
						renderSlide: null,
						renderExternal: null
					}
				},
				create: function() {
					h.extend(this, {
						virtual: {
							update: N.update.bind(this),
							appendSlide: N.appendSlide.bind(this),
							prependSlide: N.prependSlide.bind(this),
							renderSlide: N.renderSlide.bind(this),
							slides: this.params.virtual.slides,
							cache: {}
						}
					})
				},
				on: {
					beforeInit: function() {
						if (this.params.virtual.enabled) {
							this.classNames.push(this.params.containerModifierClass + "virtual");
							var e = {
								watchSlidesProgress: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e), this.virtual.update()
						}
					},
					setTranslate: function() {
						this.params.virtual.enabled && this.virtual.update()
					}
				}
			},
			H = {
				handle: function(e) {
					var t = this.rtlTranslate,
						i = e;
					i.originalEvent && (i = i.originalEvent);
					var a = i.keyCode || i.charCode;
					if (!this.allowSlideNext && (this.isHorizontal() && 39 === a || this.isVertical() && 40 === a)) return !1;
					if (!this.allowSlidePrev && (this.isHorizontal() && 37 === a || this.isVertical() && 38 === a)) return !1;
					if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || s.activeElement && s.activeElement.nodeName && ("input" === s.activeElement.nodeName.toLowerCase() || "textarea" === s.activeElement.nodeName.toLowerCase()))) {
						if (this.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
							var r = !1;
							if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
							var o = n.innerWidth,
								l = n.innerHeight,
								d = this.$el.offset();
							t && (d.left -= this.$el[0].scrollLeft);
							for (var h = [
									[d.left, d.top],
									[d.left + this.width, d.top],
									[d.left, d.top + this.height],
									[d.left + this.width, d.top + this.height]
								], c = 0; c < h.length; c += 1) {
								var u = h[c];
								u[0] >= 0 && u[0] <= o && u[1] >= 0 && u[1] <= l && (r = !0)
							}
							if (!r) return
						}
						this.isHorizontal() ? (37 !== a && 39 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === a && !t || 37 === a && t) && this.slideNext(), (37 === a && !t || 39 === a && t) && this.slidePrev()) : (38 !== a && 40 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === a && this.slideNext(), 38 === a && this.slidePrev()), this.emit("keyPress", a)
					}
				},
				enable: function() {
					this.keyboard.enabled || (e(s).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
				},
				disable: function() {
					this.keyboard.enabled && (e(s).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
				}
			},
			B = {
				name: "keyboard",
				params: {
					keyboard: {
						enabled: !1,
						onlyInViewport: !0
					}
				},
				create: function() {
					h.extend(this, {
						keyboard: {
							enabled: !1,
							enable: H.enable.bind(this),
							disable: H.disable.bind(this),
							handle: H.handle.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.keyboard.enabled && this.keyboard.enable()
					},
					destroy: function() {
						this.keyboard.enabled && this.keyboard.disable()
					}
				}
			},
			j = {
				lastScrollTime: h.now(),
				event: n.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
					var e = "onwheel" in s;
					if (!e) {
						var t = s.createElement("div");
						t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
					}
					return !e && s.implementation && s.implementation.hasFeature && !0 !== s.implementation.hasFeature("", "") && (e = s.implementation.hasFeature("Events.wheel", "3.0")), e
				}() ? "wheel" : "mousewheel",
				normalize: function(e) {
					var t = 0,
						i = 0,
						s = 0,
						n = 0;
					return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
						spinX: t,
						spinY: i,
						pixelX: s,
						pixelY: n
					}
				},
				handleMouseEnter: function() {
					this.mouseEntered = !0
				},
				handleMouseLeave: function() {
					this.mouseEntered = !1
				},
				handle: function(e) {
					var t = e,
						i = this,
						s = i.params.mousewheel;
					if (!i.mouseEntered && !s.releaseOnEdges) return !0;
					t.originalEvent && (t = t.originalEvent);
					var a = 0,
						r = i.rtlTranslate ? -1 : 1,
						o = j.normalize(t);
					if (s.forceToAxis)
						if (i.isHorizontal()) {
							if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
							a = o.pixelX * r
						} else {
							if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
							a = o.pixelY
						}
					else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
					if (0 === a) return !0;
					if (s.invert && (a = -a), i.params.freeMode) {
						var l = i.getTranslate() + a * s.sensitivity,
							d = i.isBeginning,
							c = i.isEnd;
						if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!d && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = h.nextTick(function() {
								i.slideToClosest()
							}, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), l === i.minTranslate() || l === i.maxTranslate()) return !0
					} else {
						if (h.now() - i.mousewheel.lastScrollTime > 60)
							if (a < 0)
								if (i.isEnd && !i.params.loop || i.animating) {
									if (s.releaseOnEdges) return !0
								} else i.slideNext(), i.emit("scroll", t);
						else if (i.isBeginning && !i.params.loop || i.animating) {
							if (s.releaseOnEdges) return !0
						} else i.slidePrev(), i.emit("scroll", t);
						i.mousewheel.lastScrollTime = (new n.Date).getTime()
					}
					return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
				},
				enable: function() {
					if (!j.event) return !1;
					if (this.mousewheel.enabled) return !1;
					var t = this.$el;
					return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(j.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
				},
				disable: function() {
					if (!j.event) return !1;
					if (!this.mousewheel.enabled) return !1;
					var t = this.$el;
					return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.off(j.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
				}
			},
			F = {
				update: function() {
					var e = this.params.navigation;
					if (!this.params.loop) {
						var t = this.navigation,
							i = t.$nextEl,
							s = t.$prevEl;
						s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
					}
				},
				init: function() {
					var t, i, s = this,
						n = s.params.navigation;
					(n.nextEl || n.prevEl) && (n.nextEl && (t = e(n.nextEl), s.params.uniqueNavElements && "string" == typeof n.nextEl && t.length > 1 && 1 === s.$el.find(n.nextEl).length && (t = s.$el.find(n.nextEl))), n.prevEl && (i = e(n.prevEl), s.params.uniqueNavElements && "string" == typeof n.prevEl && i.length > 1 && 1 === s.$el.find(n.prevEl).length && (i = s.$el.find(n.prevEl))), t && t.length > 0 && t.on("click", function(e) {
						e.preventDefault(), s.isEnd && !s.params.loop || s.slideNext()
					}), i && i.length > 0 && i.on("click", function(e) {
						e.preventDefault(), s.isBeginning && !s.params.loop || s.slidePrev()
					}), h.extend(s.navigation, {
						$nextEl: t,
						nextEl: t && t[0],
						$prevEl: i,
						prevEl: i && i[0]
					}))
				},
				destroy: function() {
					var e = this.navigation,
						t = e.$nextEl,
						i = e.$prevEl;
					t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
				}
			},
			q = {
				update: function() {
					var t = this.rtl,
						i = this.params.pagination;
					if (i.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
						var s, n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
							a = this.pagination.$el,
							r = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
						if (this.params.loop ? ((s = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (s -= n - 2 * this.loopedSlides), s > r - 1 && (s -= r), s < 0 && "bullets" !== this.params.paginationType && (s = r + s)) : s = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === i.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
							var o, l, d, h = this.pagination.bullets;
							if (i.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += s - this.previousIndex, this.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = s - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, i.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), a.length > 1) h.each(function(t, n) {
								var a = e(n),
									r = a.index();
								r === s && a.addClass(i.bulletActiveClass), i.dynamicBullets && (r >= o && r <= l && a.addClass(i.bulletActiveClass + "-main"), r === o && a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
							});
							else if (h.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets) {
								for (var c = h.eq(o), u = h.eq(l), p = o; p <= l; p += 1) h.eq(p).addClass(i.bulletActiveClass + "-main");
								c.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), u.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
							}
							if (i.dynamicBullets) {
								var f = Math.min(h.length, i.dynamicMainBullets + 4),
									v = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
									m = t ? "right" : "left";
								h.css(this.isHorizontal() ? m : "top", v + "px")
							}
						}
						if ("fraction" === i.type && (a.find("." + i.currentClass).text(s + 1), a.find("." + i.totalClass).text(r)), "progressbar" === i.type) {
							var g = (s + 1) / r,
								y = g,
								b = 1;
							this.isHorizontal() || (b = g, y = 1), a.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + y + ") scaleY(" + b + ")").transition(this.params.speed)
						}
						"custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(this, s + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)
					}
				},
				render: function() {
					var e = this.params.pagination;
					if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
						var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
							i = this.pagination.$el,
							s = "";
						if ("bullets" === e.type) {
							for (var n = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < n; a += 1) e.renderBullet ? s += e.renderBullet.call(this, a, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
							i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
						}
						"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
					}
				},
				init: function() {
					var t = this,
						i = t.params.pagination;
					if (i.el) {
						var s = e(i.el);
						0 !== s.length && (t.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.$el.find(i.el).length && (s = t.$el.find(i.el)), "bullets" === i.type && i.clickable && s.addClass(i.clickableClass), s.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (s.addClass("" + i.modifierClass + i.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), i.clickable && s.on("click", "." + i.bulletClass, function(i) {
							i.preventDefault();
							var s = e(this).index() * t.params.slidesPerGroup;
							t.params.loop && (s += t.loopedSlides), t.slideTo(s)
						}), h.extend(t.pagination, {
							$el: s,
							el: s[0]
						}))
					}
				},
				destroy: function() {
					var e = this.params.pagination;
					if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
						var t = this.pagination.$el;
						t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
					}
				}
			},
			R = {
				setTranslate: function() {
					if (this.params.scrollbar.el && this.scrollbar.el) {
						var e = this.scrollbar,
							t = this.rtlTranslate,
							i = this.progress,
							s = e.dragSize,
							n = e.trackSize,
							a = e.$dragEl,
							r = e.$el,
							o = this.params.scrollbar,
							l = s,
							d = (n - s) * i;
						t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > n && (l = n + d) : d < 0 ? (l = s + d, d = 0) : d + s > n && (l = n - d), this.isHorizontal() ? (c.transforms3d ? a.transform("translate3d(" + d + "px, 0, 0)") : a.transform("translateX(" + d + "px)"), a[0].style.width = l + "px") : (c.transforms3d ? a.transform("translate3d(0px, " + d + "px, 0)") : a.transform("translateY(" + d + "px)"), a[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
							r[0].style.opacity = 0, r.transition(400)
						}, 1e3))
					}
				},
				setTransition: function(e) {
					this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
				},
				updateSize: function() {
					if (this.params.scrollbar.el && this.scrollbar.el) {
						var e = this.scrollbar,
							t = e.$dragEl,
							i = e.$el;
						t[0].style.width = "", t[0].style.height = "";
						var s, n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
							a = this.size / this.virtualSize,
							r = a * (n / this.size);
						s = "auto" === this.params.scrollbar.dragSize ? n * a : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = a >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), h.extend(e, {
							trackSize: n,
							divider: a,
							moveDivider: r,
							dragSize: s
						}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
					}
				},
				setDragPosition: function(e) {
					var t, i = this.scrollbar,
						s = this.rtlTranslate,
						n = i.$el,
						a = i.dragSize,
						r = i.trackSize;
					t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (r - a), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
					var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
					this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
				},
				onDragStart: function(e) {
					var t = this.params.scrollbar,
						i = this.scrollbar,
						s = this.$wrapperEl,
						n = i.$el,
						a = i.$dragEl;
					this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), n.transition(0), t.hide && n.css("opacity", 1), this.emit("scrollbarDragStart", e)
				},
				onDragMove: function(e) {
					var t = this.scrollbar,
						i = this.$wrapperEl,
						s = t.$el,
						n = t.$dragEl;
					this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), n.transition(0), this.emit("scrollbarDragMove", e))
				},
				onDragEnd: function(e) {
					var t = this.params.scrollbar,
						i = this.scrollbar.$el;
					this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = h.nextTick(function() {
						i.css("opacity", 0), i.transition(400)
					}, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
				},
				enableDraggable: function() {
					if (this.params.scrollbar.el) {
						var e = this.scrollbar,
							t = this.touchEvents,
							i = this.touchEventsDesktop,
							n = this.params,
							a = e.$el[0],
							r = !(!c.passiveListener || !n.passiveListener) && {
								passive: !1,
								capture: !1
							},
							o = !(!c.passiveListener || !n.passiveListener) && {
								passive: !0,
								capture: !1
							};
						c.touch || !c.pointerEvents && !c.prefixedPointerEvents ? (c.touch && (a.addEventListener(t.start, this.scrollbar.onDragStart, r), a.addEventListener(t.move, this.scrollbar.onDragMove, r), a.addEventListener(t.end, this.scrollbar.onDragEnd, o)), (n.simulateTouch && !x.ios && !x.android || n.simulateTouch && !c.touch && x.ios) && (a.addEventListener("mousedown", this.scrollbar.onDragStart, r), s.addEventListener("mousemove", this.scrollbar.onDragMove, r), s.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (a.addEventListener(i.start, this.scrollbar.onDragStart, r), s.addEventListener(i.move, this.scrollbar.onDragMove, r), s.addEventListener(i.end, this.scrollbar.onDragEnd, o))
					}
				},
				disableDraggable: function() {
					if (this.params.scrollbar.el) {
						var e = this.scrollbar,
							t = this.touchEvents,
							i = this.touchEventsDesktop,
							n = this.params,
							a = e.$el[0],
							r = !(!c.passiveListener || !n.passiveListener) && {
								passive: !1,
								capture: !1
							},
							o = !(!c.passiveListener || !n.passiveListener) && {
								passive: !0,
								capture: !1
							};
						c.touch || !c.pointerEvents && !c.prefixedPointerEvents ? (c.touch && (a.removeEventListener(t.start, this.scrollbar.onDragStart, r), a.removeEventListener(t.move, this.scrollbar.onDragMove, r), a.removeEventListener(t.end, this.scrollbar.onDragEnd, o)), (n.simulateTouch && !x.ios && !x.android || n.simulateTouch && !c.touch && x.ios) && (a.removeEventListener("mousedown", this.scrollbar.onDragStart, r), s.removeEventListener("mousemove", this.scrollbar.onDragMove, r), s.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (a.removeEventListener(i.start, this.scrollbar.onDragStart, r), s.removeEventListener(i.move, this.scrollbar.onDragMove, r), s.removeEventListener(i.end, this.scrollbar.onDragEnd, o))
					}
				},
				init: function() {
					if (this.params.scrollbar.el) {
						var t = this.scrollbar,
							i = this.$el,
							s = this.params.scrollbar,
							n = e(s.el);
						this.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el));
						var a = n.find("." + this.params.scrollbar.dragClass);
						0 === a.length && (a = e('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(a)), h.extend(t, {
							$el: n,
							el: n[0],
							$dragEl: a,
							dragEl: a[0]
						}), s.draggable && t.enableDraggable()
					}
				},
				destroy: function() {
					this.scrollbar.disableDraggable()
				}
			},
			W = {
				setTransform: function(t, i) {
					var s = this.rtl,
						n = e(t),
						a = s ? -1 : 1,
						r = n.attr("data-swiper-parallax") || "0",
						o = n.attr("data-swiper-parallax-x"),
						l = n.attr("data-swiper-parallax-y"),
						d = n.attr("data-swiper-parallax-scale"),
						h = n.attr("data-swiper-parallax-opacity");
					if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * a + "%" : o * i * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", void 0 !== h && null !== h) {
						var c = h - (h - 1) * (1 - Math.abs(i));
						n[0].style.opacity = c
					}
					if (void 0 === d || null === d) n.transform("translate3d(" + o + ", " + l + ", 0px)");
					else {
						var u = d - (d - 1) * (1 - Math.abs(i));
						n.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
					}
				},
				setTranslate: function() {
					var t = this,
						i = t.$el,
						s = t.slides,
						n = t.progress,
						a = t.snapGrid;
					i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
						t.parallax.setTransform(i, n)
					}), s.each(function(i, s) {
						var r = s.progress;
						t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (r += Math.ceil(i / 2) - n * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), e(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
							t.parallax.setTransform(i, r)
						})
					})
				},
				setTransition: function(t) {
					void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(i, s) {
						var n = e(s),
							a = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
						0 === t && (a = 0), n.transition(a)
					})
				}
			},
			_ = {
				getDistanceBetweenTouches: function(e) {
					if (e.targetTouches.length < 2) return 1;
					var t = e.targetTouches[0].pageX,
						i = e.targetTouches[0].pageY,
						s = e.targetTouches[1].pageX,
						n = e.targetTouches[1].pageY;
					return Math.sqrt(Math.pow(s - t, 2) + Math.pow(n - i, 2))
				},
				onGestureStart: function(t) {
					var i = this.params.zoom,
						s = this.zoom,
						n = s.gesture;
					if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !c.gestures) {
						if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
						s.fakeGestureTouched = !0, n.scaleStart = _.getDistanceBetweenTouches(t)
					}
					n.$slideEl && n.$slideEl.length || (n.$slideEl = e(t.target).closest(".swiper-slide"), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
				},
				onGestureChange: function(e) {
					var t = this.params.zoom,
						i = this.zoom,
						s = i.gesture;
					if (!c.gestures) {
						if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
						i.fakeGestureMoved = !0, s.scaleMove = _.getDistanceBetweenTouches(e)
					}
					s.$imageEl && 0 !== s.$imageEl.length && (c.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
				},
				onGestureEnd: function(e) {
					var t = this.params.zoom,
						i = this.zoom,
						s = i.gesture;
					if (!c.gestures) {
						if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
						if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
						i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
					}
					s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
				},
				onTouchStart: function(e) {
					var t = this.zoom,
						i = t.gesture,
						s = t.image;
					i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (x.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
				},
				onTouchMove: function(e) {
					var t = this.zoom,
						i = t.gesture,
						s = t.image,
						n = t.velocity;
					if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
						s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = h.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = h.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
						var a = s.width * t.scale,
							r = s.height * t.scale;
						if (!(a < i.slideWidth && r < i.slideHeight)) {
							if (s.minX = Math.min(i.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - r / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
								if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
								if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
							}
							e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
						}
					}
				},
				onTouchEnd: function() {
					var e = this.zoom,
						t = e.gesture,
						i = e.image,
						s = e.velocity;
					if (t.$imageEl && 0 !== t.$imageEl.length) {
						if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
						i.isTouched = !1, i.isMoved = !1;
						var n = 300,
							a = 300,
							r = s.x * n,
							o = i.currentX + r,
							l = s.y * a,
							d = i.currentY + l;
						0 !== s.x && (n = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (a = Math.abs((d - i.currentY) / s.y));
						var h = Math.max(n, a);
						i.currentX = o, i.currentY = d;
						var c = i.width * e.scale,
							u = i.height * e.scale;
						i.minX = Math.min(t.slideWidth / 2 - c / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
					}
				},
				onTransitionEnd: function() {
					var e = this.zoom,
						t = e.gesture;
					t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
				},
				toggle: function(e) {
					var t = this.zoom;
					t.scale && 1 !== t.scale ? t.out() : t.in(e)
				},
				in: function(t) {
					var i, s, n, a, r, o, l, d, h, c, u, p, f, v, m, g, y = this.zoom,
						b = this.params.zoom,
						w = y.gesture,
						x = y.image;
					w.$slideEl || (w.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = x.touchesStart.x, s = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, t ? (m = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, n = w.$slideEl.offset().left + m / 2 - i, a = w.$slideEl.offset().top + g / 2 - s, l = w.$imageEl[0].offsetWidth, d = w.$imageEl[0].offsetHeight, h = l * y.scale, c = d * y.scale, f = -(u = Math.min(m / 2 - h / 2, 0)), v = -(p = Math.min(g / 2 - c / 2, 0)), r = n * y.scale, o = a * y.scale, r < u && (r = u), r > f && (r = f), o < p && (o = p), o > v && (o = v)) : (r = 0, o = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
				},
				out: function() {
					var t = this.zoom,
						i = this.params.zoom,
						s = t.gesture;
					s.$slideEl || (s.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (t.scale = 1, t.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
				},
				enable: function() {
					var e = this.zoom;
					if (!e.enabled) {
						e.enabled = !0;
						var t = !("touchstart" !== this.touchEvents.start || !c.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						c.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
					}
				},
				disable: function() {
					var e = this.zoom;
					if (e.enabled) {
						this.zoom.enabled = !1;
						var t = !("touchstart" !== this.touchEvents.start || !c.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						c.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
					}
				}
			},
			X = {
				loadInSlide: function(t, i) {
					void 0 === i && (i = !0);
					var s = this,
						n = s.params.lazy;
					if (void 0 !== t && 0 !== s.slides.length) {
						var a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children("." + s.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : s.slides.eq(t),
							r = a.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
						!a.hasClass(n.elementClass) || a.hasClass(n.loadedClass) || a.hasClass(n.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each(function(t, r) {
							var o = e(r);
							o.addClass(n.loadingClass);
							var l = o.attr("data-background"),
								d = o.attr("data-src"),
								h = o.attr("data-srcset"),
								c = o.attr("data-sizes");
							s.loadImage(o[0], d || l, h, c, !1, function() {
								if (void 0 !== s && null !== s && s && (!s || s.params) && !s.destroyed) {
									if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), a.find("." + n.preloaderClass).remove(), s.params.loop && i) {
										var e = a.attr("data-swiper-slide-index");
										if (a.hasClass(s.params.slideDuplicateClass)) {
											var t = s.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + s.params.slideDuplicateClass + ")");
											s.lazy.loadInSlide(t.index(), !1)
										} else {
											var r = s.$wrapperEl.children("." + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
											s.lazy.loadInSlide(r.index(), !1)
										}
									}
									s.emit("lazyImageReady", a[0], o[0])
								}
							}), s.emit("lazyImageLoad", a[0], o[0])
						})
					}
				},
				load: function() {
					function t(e) {
						if (l) {
							if (n.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
						} else if (r[e]) return !0;
						return !1
					}

					function i(t) {
						return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
					}
					var s = this,
						n = s.$wrapperEl,
						a = s.params,
						r = s.slides,
						o = s.activeIndex,
						l = s.virtual && a.virtual.enabled,
						d = a.lazy,
						h = a.slidesPerView;
					if ("auto" === h && (h = 0), s.lazy.initialImageLoaded || (s.lazy.initialImageLoaded = !0), s.params.watchSlidesVisibility) n.children("." + a.slideVisibleClass).each(function(t, i) {
						var n = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
						s.lazy.loadInSlide(n)
					});
					else if (h > 1)
						for (var c = o; c < o + h; c += 1) t(c) && s.lazy.loadInSlide(c);
					else s.lazy.loadInSlide(o);
					if (d.loadPrevNext)
						if (h > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
							for (var u = d.loadPrevNextAmount, p = h, f = Math.min(o + p + Math.max(u, p), r.length), v = Math.max(o - Math.max(p, u), 0), m = o + h; m < f; m += 1) t(m) && s.lazy.loadInSlide(m);
							for (var g = v; g < o; g += 1) t(g) && s.lazy.loadInSlide(g)
						} else {
							var y = n.children("." + a.slideNextClass);
							y.length > 0 && s.lazy.loadInSlide(i(y));
							var b = n.children("." + a.slidePrevClass);
							b.length > 0 && s.lazy.loadInSlide(i(b))
						}
				}
			},
			Y = {
				LinearSpline: function(e, t) {
					var i, s, n, a, r, o = function(e, t) {
						for (s = -1, i = e.length; i - s > 1;) e[n = i + s >> 1] <= t ? s = n : i = n;
						return i
					};
					return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
						return e ? (r = o(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
					}, this
				},
				getInterpolateFunction: function(e) {
					this.controller.spline || (this.controller.spline = this.params.loop ? new Y.LinearSpline(this.slidesGrid, e.slidesGrid) : new Y.LinearSpline(this.snapGrid, e.snapGrid))
				},
				setTranslate: function(e, t) {
					function i(e) {
						var t = a.rtlTranslate ? -a.translate : a.translate;
						"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), n = -a.controller.spline.interpolate(-t)), n && "container" !== a.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), n = (t - a.minTranslate()) * s + e.minTranslate()), a.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, a), e.updateActiveIndex(), e.updateSlidesClasses()
					}
					var s, n, a = this,
						r = a.controller.control;
					if (Array.isArray(r))
						for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof M && i(r[o]);
					else r instanceof M && t !== r && i(r)
				},
				setTransition: function(e, t) {
					function i(t) {
						t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
							a && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
						}))
					}
					var s, n = this,
						a = n.controller.control;
					if (Array.isArray(a))
						for (s = 0; s < a.length; s += 1) a[s] !== t && a[s] instanceof M && i(a[s]);
					else a instanceof M && t !== a && i(a)
				}
			},
			V = {
				makeElFocusable: function(e) {
					return e.attr("tabIndex", "0"), e
				},
				addElRole: function(e, t) {
					return e.attr("role", t), e
				},
				addElLabel: function(e, t) {
					return e.attr("aria-label", t), e
				},
				disableEl: function(e) {
					return e.attr("aria-disabled", !0), e
				},
				enableEl: function(e) {
					return e.attr("aria-disabled", !1), e
				},
				onEnterKey: function(t) {
					var i = this.params.a11y;
					if (13 === t.keyCode) {
						var s = e(t.target);
						this.navigation && this.navigation.$nextEl && s.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)), this.navigation && this.navigation.$prevEl && s.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)), this.pagination && s.is("." + this.params.pagination.bulletClass) && s[0].click()
					}
				},
				notify: function(e) {
					var t = this.a11y.liveRegion;
					0 !== t.length && (t.html(""), t.html(e))
				},
				updateNavigation: function() {
					if (!this.params.loop) {
						var e = this.navigation,
							t = e.$nextEl,
							i = e.$prevEl;
						i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
					}
				},
				updatePagination: function() {
					var t = this,
						i = t.params.a11y;
					t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(s, n) {
						var a = e(n);
						t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, i.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
					})
				},
				init: function() {
					this.$el.append(this.a11y.liveRegion);
					var e, t, i = this.params.a11y;
					this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
				},
				destroy: function() {
					var e, t;
					this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
				}
			},
			G = {
				init: function() {
					if (this.params.history) {
						if (!n.history || !n.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
						var e = this.history;
						e.initialized = !0, e.paths = G.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || n.addEventListener("popstate", this.history.setHistoryPopState))
					}
				},
				destroy: function() {
					this.params.history.replaceState || n.removeEventListener("popstate", this.history.setHistoryPopState)
				},
				setHistoryPopState: function() {
					this.history.paths = G.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
				},
				getPathValues: function() {
					var e = n.location.pathname.slice(1).split("/").filter(function(e) {
							return "" !== e
						}),
						t = e.length;
					return {
						key: e[t - 2],
						value: e[t - 1]
					}
				},
				setHistory: function(e, t) {
					if (this.history.initialized && this.params.history.enabled) {
						var i = this.slides.eq(t),
							s = G.slugify(i.attr("data-history"));
						n.location.pathname.includes(e) || (s = e + "/" + s);
						var a = n.history.state;
						a && a.value === s || (this.params.history.replaceState ? n.history.replaceState({
							value: s
						}, null, s) : n.history.pushState({
							value: s
						}, null, s))
					}
				},
				slugify: function(e) {
					return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
				},
				scrollToSlide: function(e, t, i) {
					if (t)
						for (var s = 0, n = this.slides.length; s < n; s += 1) {
							var a = this.slides.eq(s);
							if (G.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
								var r = a.index();
								this.slideTo(r, e, i)
							}
						} else this.slideTo(0, e, i)
				}
			},
			U = {
				onHashCange: function() {
					var e = s.location.hash.replace("#", "");
					e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
				},
				setHash: function() {
					if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
						if (this.params.hashNavigation.replaceState && n.history && n.history.replaceState) n.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
						else {
							var e = this.slides.eq(this.activeIndex),
								t = e.attr("data-hash") || e.attr("data-history");
							s.location.hash = t || ""
						}
				},
				init: function() {
					if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
						this.hashNavigation.initialized = !0;
						var t = s.location.hash.replace("#", "");
						if (t)
							for (var i = 0, a = this.slides.length; i < a; i += 1) {
								var r = this.slides.eq(i);
								if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
									var o = r.index();
									this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
								}
							}
						this.params.hashNavigation.watchState && e(n).on("hashchange", this.hashNavigation.onHashCange)
					}
				},
				destroy: function() {
					this.params.hashNavigation.watchState && e(n).off("hashchange", this.hashNavigation.onHashCange)
				}
			},
			Q = {
				run: function() {
					var e = this,
						t = e.slides.eq(e.activeIndex),
						i = e.params.autoplay.delay;
					t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = h.nextTick(function() {
						e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
					}, i)
				},
				start: function() {
					return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
				},
				stop: function() {
					return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
				},
				pause: function(e) {
					var t = this;
					t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
						t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
					}) : (t.autoplay.paused = !1, t.autoplay.run())))
				}
			},
			K = {
				setTranslate: function() {
					for (var e = this.slides, t = 0; t < e.length; t += 1) {
						var i = this.slides.eq(t),
							s = -i[0].swiperSlideOffset;
						this.params.virtualTranslate || (s -= this.translate);
						var n = 0;
						this.isHorizontal() || (n = s, s = 0);
						var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
						i.css({
							opacity: a
						}).transform("translate3d(" + s + "px, " + n + "px, 0px)")
					}
				},
				setTransition: function(e) {
					var t = this,
						i = t.slides,
						s = t.$wrapperEl;
					if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
						var n = !1;
						i.transitionEnd(function() {
							if (!n && t && !t.destroyed) {
								n = !0, t.animating = !1;
								for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
							}
						})
					}
				}
			},
			J = {
				setTranslate: function() {
					var t, i = this.$el,
						s = this.$wrapperEl,
						n = this.slides,
						a = this.width,
						r = this.height,
						o = this.rtlTranslate,
						l = this.size,
						d = this.params.cubeEffect,
						h = this.isHorizontal(),
						c = this.virtual && this.params.virtual.enabled,
						u = 0;
					d.shadow && (h ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({
						height: a + "px"
					})) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
					for (var p = 0; p < n.length; p += 1) {
						var f = n.eq(p),
							v = p;
						c && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
						var m = 90 * v,
							g = Math.floor(m / 360);
						o && (m = -m, g = Math.floor(-m / 360));
						var y = Math.max(Math.min(f[0].progress, 1), -1),
							b = 0,
							w = 0,
							x = 0;
						v % 4 == 0 ? (b = 4 * -g * l, x = 0) : (v - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (v - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (v - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g), o && (b = -b), h || (w = b, b = 0);
						var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
						if (y <= 1 && y > -1 && (u = 90 * v + 90 * y, o && (u = 90 * -v - 90 * y)), f.transform(T), d.slideShadows) {
							var S = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
								C = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
							0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = Math.max(-y, 0)), C.length && (C[0].style.opacity = Math.max(y, 0))
						}
					}
					if (s.css({
							"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
							"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
							"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
							"transform-origin": "50% 50% -" + l / 2 + "px"
						}), d.shadow)
						if (h) t.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
						else {
							var k = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
								A = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
								M = d.shadowScale,
								z = d.shadowScale / A,
								$ = d.shadowOffset;
							t.transform("scale3d(" + M + ", 1, " + z + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
						}
					var L = E.isSafari || E.isUiWebView ? -l / 2 : 0;
					s.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
				},
				setTransition: function(e) {
					var t = this.$el;
					this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
				}
			},
			Z = {
				setTranslate: function() {
					for (var t = this.slides, i = this.rtlTranslate, s = 0; s < t.length; s += 1) {
						var n = t.eq(s),
							a = n[0].progress;
						this.params.flipEffect.limitRotation && (a = Math.max(Math.min(n[0].progress, 1), -1));
						var r = -180 * a,
							o = 0,
							l = -n[0].swiperSlideOffset,
							d = 0;
						if (this.isHorizontal() ? i && (r = -r) : (d = l, l = 0, o = -r, r = 0), n[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, this.params.flipEffect.slideShadows) {
							var h = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
								c = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
							0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(h)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(c)), h.length && (h[0].style.opacity = Math.max(-a, 0)), c.length && (c[0].style.opacity = Math.max(a, 0))
						}
						n.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
					}
				},
				setTransition: function(e) {
					var t = this,
						i = t.slides,
						s = t.activeIndex,
						n = t.$wrapperEl;
					if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
						var a = !1;
						i.eq(s).transitionEnd(function() {
							if (!a && t && !t.destroyed) {
								a = !0, t.animating = !1;
								for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
							}
						})
					}
				}
			},
			ee = {
				setTranslate: function() {
					for (var t = this.width, i = this.height, s = this.slides, n = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? t / 2 - l : i / 2 - l, h = o ? r.rotate : -r.rotate, u = r.depth, p = 0, f = s.length; p < f; p += 1) {
						var v = s.eq(p),
							m = a[p],
							g = (d - v[0].swiperSlideOffset - m / 2) / m * r.modifier,
							y = o ? h * g : 0,
							b = o ? 0 : h * g,
							w = -u * Math.abs(g),
							x = o ? 0 : r.stretch * g,
							T = o ? r.stretch * g : 0;
						Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
						var S = "translate3d(" + T + "px," + x + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
						if (v.transform(S), v[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
							var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
								C = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
							0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(C)), E.length && (E[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
						}
					}(c.pointerEvents || c.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = d + "px 50%")
				},
				setTransition: function(e) {
					this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
				}
			},
			te = [z, $, L, P, D, O, B, {
				name: "mousewheel",
				params: {
					mousewheel: {
						enabled: !1,
						releaseOnEdges: !1,
						invert: !1,
						forceToAxis: !1,
						sensitivity: 1,
						eventsTarged: "container"
					}
				},
				create: function() {
					h.extend(this, {
						mousewheel: {
							enabled: !1,
							enable: j.enable.bind(this),
							disable: j.disable.bind(this),
							handle: j.handle.bind(this),
							handleMouseEnter: j.handleMouseEnter.bind(this),
							handleMouseLeave: j.handleMouseLeave.bind(this),
							lastScrollTime: h.now()
						}
					})
				},
				on: {
					init: function() {
						this.params.mousewheel.enabled && this.mousewheel.enable()
					},
					destroy: function() {
						this.mousewheel.enabled && this.mousewheel.disable()
					}
				}
			}, {
				name: "navigation",
				params: {
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock"
					}
				},
				create: function() {
					h.extend(this, {
						navigation: {
							init: F.init.bind(this),
							update: F.update.bind(this),
							destroy: F.destroy.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.navigation.init(), this.navigation.update()
					},
					toEdge: function() {
						this.navigation.update()
					},
					fromEdge: function() {
						this.navigation.update()
					},
					destroy: function() {
						this.navigation.destroy()
					},
					click: function(t) {
						var i = this.navigation,
							s = i.$nextEl,
							n = i.$prevEl;
						!this.params.navigation.hideOnClick || e(t.target).is(n) || e(t.target).is(s) || (s && s.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
					}
				}
			}, {
				name: "pagination",
				params: {
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						modifierClass: "swiper-pagination-",
						currentClass: "swiper-pagination-current",
						totalClass: "swiper-pagination-total",
						hiddenClass: "swiper-pagination-hidden",
						progressbarFillClass: "swiper-pagination-progressbar-fill",
						clickableClass: "swiper-pagination-clickable",
						lockClass: "swiper-pagination-lock"
					}
				},
				create: function() {
					h.extend(this, {
						pagination: {
							init: q.init.bind(this),
							render: q.render.bind(this),
							update: q.update.bind(this),
							destroy: q.destroy.bind(this),
							dynamicBulletIndex: 0
						}
					})
				},
				on: {
					init: function() {
						this.pagination.init(), this.pagination.render(), this.pagination.update()
					},
					activeIndexChange: function() {
						this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
					},
					snapIndexChange: function() {
						this.params.loop || this.pagination.update()
					},
					slidesLengthChange: function() {
						this.params.loop && (this.pagination.render(), this.pagination.update())
					},
					snapGridLengthChange: function() {
						this.params.loop || (this.pagination.render(), this.pagination.update())
					},
					destroy: function() {
						this.pagination.destroy()
					},
					click: function(t) {
						this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !e(t.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
					}
				}
			}, {
				name: "scrollbar",
				params: {
					scrollbar: {
						el: null,
						dragSize: "auto",
						hide: !1,
						draggable: !1,
						snapOnRelease: !0,
						lockClass: "swiper-scrollbar-lock",
						dragClass: "swiper-scrollbar-drag"
					}
				},
				create: function() {
					h.extend(this, {
						scrollbar: {
							init: R.init.bind(this),
							destroy: R.destroy.bind(this),
							updateSize: R.updateSize.bind(this),
							setTranslate: R.setTranslate.bind(this),
							setTransition: R.setTransition.bind(this),
							enableDraggable: R.enableDraggable.bind(this),
							disableDraggable: R.disableDraggable.bind(this),
							setDragPosition: R.setDragPosition.bind(this),
							onDragStart: R.onDragStart.bind(this),
							onDragMove: R.onDragMove.bind(this),
							onDragEnd: R.onDragEnd.bind(this),
							isTouched: !1,
							timeout: null,
							dragTimeout: null
						}
					})
				},
				on: {
					init: function() {
						this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
					},
					update: function() {
						this.scrollbar.updateSize()
					},
					resize: function() {
						this.scrollbar.updateSize()
					},
					observerUpdate: function() {
						this.scrollbar.updateSize()
					},
					setTranslate: function() {
						this.scrollbar.setTranslate()
					},
					setTransition: function(e) {
						this.scrollbar.setTransition(e)
					},
					destroy: function() {
						this.scrollbar.destroy()
					}
				}
			}, {
				name: "parallax",
				params: {
					parallax: {
						enabled: !1
					}
				},
				create: function() {
					h.extend(this, {
						parallax: {
							setTransform: W.setTransform.bind(this),
							setTranslate: W.setTranslate.bind(this),
							setTransition: W.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
					},
					init: function() {
						this.params.parallax && this.parallax.setTranslate()
					},
					setTranslate: function() {
						this.params.parallax && this.parallax.setTranslate()
					},
					setTransition: function(e) {
						this.params.parallax && this.parallax.setTransition(e)
					}
				}
			}, {
				name: "zoom",
				params: {
					zoom: {
						enabled: !1,
						maxRatio: 3,
						minRatio: 1,
						toggle: !0,
						containerClass: "swiper-zoom-container",
						zoomedSlideClass: "swiper-slide-zoomed"
					}
				},
				create: function() {
					var e = this,
						t = {
							enabled: !1,
							scale: 1,
							currentScale: 1,
							isScaling: !1,
							gesture: {
								$slideEl: void 0,
								slideWidth: void 0,
								slideHeight: void 0,
								$imageEl: void 0,
								$imageWrapEl: void 0,
								maxRatio: 3
							},
							image: {
								isTouched: void 0,
								isMoved: void 0,
								currentX: void 0,
								currentY: void 0,
								minX: void 0,
								minY: void 0,
								maxX: void 0,
								maxY: void 0,
								width: void 0,
								height: void 0,
								startX: void 0,
								startY: void 0,
								touchesStart: {},
								touchesCurrent: {}
							},
							velocity: {
								x: void 0,
								y: void 0,
								prevPositionX: void 0,
								prevPositionY: void 0,
								prevTime: void 0
							}
						};
					"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
						t[i] = _[i].bind(e)
					}), h.extend(e, {
						zoom: t
					})
				},
				on: {
					init: function() {
						this.params.zoom.enabled && this.zoom.enable()
					},
					destroy: function() {
						this.zoom.disable()
					},
					touchStart: function(e) {
						this.zoom.enabled && this.zoom.onTouchStart(e)
					},
					touchEnd: function(e) {
						this.zoom.enabled && this.zoom.onTouchEnd(e)
					},
					doubleTap: function(e) {
						this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
					},
					transitionEnd: function() {
						this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
					}
				}
			}, {
				name: "lazy",
				params: {
					lazy: {
						enabled: !1,
						loadPrevNext: !1,
						loadPrevNextAmount: 1,
						loadOnTransitionStart: !1,
						elementClass: "swiper-lazy",
						loadingClass: "swiper-lazy-loading",
						loadedClass: "swiper-lazy-loaded",
						preloaderClass: "swiper-lazy-preloader"
					}
				},
				create: function() {
					h.extend(this, {
						lazy: {
							initialImageLoaded: !1,
							load: X.load.bind(this),
							loadInSlide: X.loadInSlide.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
					},
					init: function() {
						this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
					},
					scroll: function() {
						this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
					},
					resize: function() {
						this.params.lazy.enabled && this.lazy.load()
					},
					scrollbarDragMove: function() {
						this.params.lazy.enabled && this.lazy.load()
					},
					transitionStart: function() {
						this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
					},
					transitionEnd: function() {
						this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
					}
				}
			}, {
				name: "controller",
				params: {
					controller: {
						control: void 0,
						inverse: !1,
						by: "slide"
					}
				},
				create: function() {
					h.extend(this, {
						controller: {
							control: this.params.controller.control,
							getInterpolateFunction: Y.getInterpolateFunction.bind(this),
							setTranslate: Y.setTranslate.bind(this),
							setTransition: Y.setTransition.bind(this)
						}
					})
				},
				on: {
					update: function() {
						this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
					},
					resize: function() {
						this.controller.control && this.controller.spline && (this.controller.spline = void 0,
							delete this.controller.spline)
					},
					observerUpdate: function() {
						this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
					},
					setTranslate: function(e, t) {
						this.controller.control && this.controller.setTranslate(e, t)
					},
					setTransition: function(e, t) {
						this.controller.control && this.controller.setTransition(e, t)
					}
				}
			}, {
				name: "a11y",
				params: {
					a11y: {
						enabled: !0,
						notificationClass: "swiper-notification",
						prevSlideMessage: "Previous slide",
						nextSlideMessage: "Next slide",
						firstSlideMessage: "This is the first slide",
						lastSlideMessage: "This is the last slide",
						paginationBulletMessage: "Go to slide {{index}}"
					}
				},
				create: function() {
					var t = this;
					h.extend(t, {
						a11y: {
							liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
						}
					}), Object.keys(V).forEach(function(e) {
						t.a11y[e] = V[e].bind(t)
					})
				},
				on: {
					init: function() {
						this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
					},
					toEdge: function() {
						this.params.a11y.enabled && this.a11y.updateNavigation()
					},
					fromEdge: function() {
						this.params.a11y.enabled && this.a11y.updateNavigation()
					},
					paginationUpdate: function() {
						this.params.a11y.enabled && this.a11y.updatePagination()
					},
					destroy: function() {
						this.params.a11y.enabled && this.a11y.destroy()
					}
				}
			}, {
				name: "history",
				params: {
					history: {
						enabled: !1,
						replaceState: !1,
						key: "slides"
					}
				},
				create: function() {
					h.extend(this, {
						history: {
							init: G.init.bind(this),
							setHistory: G.setHistory.bind(this),
							setHistoryPopState: G.setHistoryPopState.bind(this),
							scrollToSlide: G.scrollToSlide.bind(this),
							destroy: G.destroy.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.history.enabled && this.history.init()
					},
					destroy: function() {
						this.params.history.enabled && this.history.destroy()
					},
					transitionEnd: function() {
						this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
					}
				}
			}, {
				name: "hash-navigation",
				params: {
					hashNavigation: {
						enabled: !1,
						replaceState: !1,
						watchState: !1
					}
				},
				create: function() {
					h.extend(this, {
						hashNavigation: {
							initialized: !1,
							init: U.init.bind(this),
							destroy: U.destroy.bind(this),
							setHash: U.setHash.bind(this),
							onHashCange: U.onHashCange.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.hashNavigation.enabled && this.hashNavigation.init()
					},
					destroy: function() {
						this.params.hashNavigation.enabled && this.hashNavigation.destroy()
					},
					transitionEnd: function() {
						this.hashNavigation.initialized && this.hashNavigation.setHash()
					}
				}
			}, {
				name: "autoplay",
				params: {
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1
					}
				},
				create: function() {
					h.extend(this, {
						autoplay: {
							running: !1,
							paused: !1,
							run: Q.run.bind(this),
							start: Q.start.bind(this),
							stop: Q.stop.bind(this),
							pause: Q.pause.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.autoplay.enabled && this.autoplay.start()
					},
					beforeTransitionStart: function(e, t) {
						this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
					},
					sliderFirstMove: function() {
						this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
					},
					destroy: function() {
						this.autoplay.running && this.autoplay.stop()
					}
				}
			}, {
				name: "effect-fade",
				params: {
					fadeEffect: {
						crossFade: !1
					}
				},
				create: function() {
					h.extend(this, {
						fadeEffect: {
							setTranslate: K.setTranslate.bind(this),
							setTransition: K.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						if ("fade" === this.params.effect) {
							this.classNames.push(this.params.containerModifierClass + "fade");
							var e = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e)
						}
					},
					setTranslate: function() {
						"fade" === this.params.effect && this.fadeEffect.setTranslate()
					},
					setTransition: function(e) {
						"fade" === this.params.effect && this.fadeEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-cube",
				params: {
					cubeEffect: {
						slideShadows: !0,
						shadow: !0,
						shadowOffset: 20,
						shadowScale: .94
					}
				},
				create: function() {
					h.extend(this, {
						cubeEffect: {
							setTranslate: J.setTranslate.bind(this),
							setTransition: J.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						if ("cube" === this.params.effect) {
							this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
							var e = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								resistanceRatio: 0,
								spaceBetween: 0,
								centeredSlides: !1,
								virtualTranslate: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e)
						}
					},
					setTranslate: function() {
						"cube" === this.params.effect && this.cubeEffect.setTranslate()
					},
					setTransition: function(e) {
						"cube" === this.params.effect && this.cubeEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-flip",
				params: {
					flipEffect: {
						slideShadows: !0,
						limitRotation: !0
					}
				},
				create: function() {
					h.extend(this, {
						flipEffect: {
							setTranslate: Z.setTranslate.bind(this),
							setTransition: Z.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						if ("flip" === this.params.effect) {
							this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
							var e = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e)
						}
					},
					setTranslate: function() {
						"flip" === this.params.effect && this.flipEffect.setTranslate()
					},
					setTransition: function(e) {
						"flip" === this.params.effect && this.flipEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-coverflow",
				params: {
					coverflowEffect: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: !0
					}
				},
				create: function() {
					h.extend(this, {
						coverflowEffect: {
							setTranslate: ee.setTranslate.bind(this),
							setTransition: ee.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						"coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
					},
					setTranslate: function() {
						"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
					},
					setTransition: function(e) {
						"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
					}
				}
			}];
		return void 0 === M.use && (M.use = M.Class.use, M.installModule = M.Class.installModule), M.use(te), M
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("countUp", t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.CountUp = t()
	}(this, function(e, t, i) {
		return function(e, t, i, s, n, a) {
			function r(e) {
				var t, i, s, n, a, r, o = e < 0;
				if (e = Math.abs(e).toFixed(d.decimals), e += "", t = e.split("."), i = t[0], s = t.length > 1 ? d.options.decimal + t[1] : "", d.options.useGrouping) {
					for (n = "", a = 0, r = i.length; a < r; ++a) 0 !== a && a % 3 == 0 && (n = d.options.separator + n), n = i[r - a - 1] + n;
					i = n
				}
				return d.options.numerals.length && (i = i.replace(/[0-9]/g, function(e) {
					return d.options.numerals[+e]
				}), s = s.replace(/[0-9]/g, function(e) {
					return d.options.numerals[+e]
				})), (o ? "-" : "") + d.options.prefix + i + s + d.options.suffix
			}

			function o(e, t, i, s) {
				return i * (1 - Math.pow(2, -10 * e / s)) * 1024 / 1023 + t
			}

			function l(e) {
				return "number" == typeof e && !isNaN(e)
			}
			var d = this;
			if (d.version = function() {
					return "1.9.3"
				}, d.options = {
					useEasing: !0,
					useGrouping: !0,
					separator: ",",
					decimal: ".",
					easingFn: o,
					formattingFn: r,
					prefix: "",
					suffix: "",
					numerals: []
				}, a && "object" == typeof a)
				for (var h in d.options) a.hasOwnProperty(h) && null !== a[h] && (d.options[h] = a[h]);
			"" === d.options.separator ? d.options.useGrouping = !1 : d.options.separator = "" + d.options.separator;
			for (var c = 0, u = ["webkit", "moz", "ms", "o"], p = 0; p < u.length && !window.requestAnimationFrame; ++p) window.requestAnimationFrame = window[u[p] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[u[p] + "CancelAnimationFrame"] || window[u[p] + "CancelRequestAnimationFrame"];
			window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
				var i = (new Date).getTime(),
					s = Math.max(0, 16 - (i - c)),
					n = window.setTimeout(function() {
						e(i + s)
					}, s);
				return c = i + s, n
			}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
				clearTimeout(e)
			}), d.initialize = function() {
				return !(!d.initialized && (d.error = "", d.d = "string" == typeof e ? document.getElementById(e) : e, d.d ? (d.startVal = Number(t), d.endVal = Number(i), l(d.startVal) && l(d.endVal) ? (d.decimals = Math.max(0, s || 0), d.dec = Math.pow(10, d.decimals), d.duration = 1e3 * Number(n) || 2e3, d.countDown = d.startVal > d.endVal, d.frameVal = d.startVal, d.initialized = !0, 0) : (d.error = "[CountUp] startVal (" + t + ") or endVal (" + i + ") is not a number", 1)) : (d.error = "[CountUp] target is null or undefined", 1)))
			}, d.printValue = function(e) {
				var t = d.options.formattingFn(e);
				"INPUT" === d.d.tagName ? this.d.value = t : "text" === d.d.tagName || "tspan" === d.d.tagName ? this.d.textContent = t : this.d.innerHTML = t
			}, d.count = function(e) {
				d.startTime || (d.startTime = e), d.timestamp = e;
				var t = e - d.startTime;
				d.remaining = d.duration - t, d.options.useEasing ? d.countDown ? d.frameVal = d.startVal - d.options.easingFn(t, 0, d.startVal - d.endVal, d.duration) : d.frameVal = d.options.easingFn(t, d.startVal, d.endVal - d.startVal, d.duration) : d.countDown ? d.frameVal = d.startVal - (d.startVal - d.endVal) * (t / d.duration) : d.frameVal = d.startVal + (d.endVal - d.startVal) * (t / d.duration), d.countDown ? d.frameVal = d.frameVal < d.endVal ? d.endVal : d.frameVal : d.frameVal = d.frameVal > d.endVal ? d.endVal : d.frameVal, d.frameVal = Math.round(d.frameVal * d.dec) / d.dec, d.printValue(d.frameVal), t < d.duration ? d.rAF = requestAnimationFrame(d.count) : d.callback && d.callback()
			}, d.start = function(e) {
				d.initialize() && (d.callback = e, d.rAF = requestAnimationFrame(d.count))
			}, d.pauseResume = function() {
				d.paused ? (d.paused = !1, delete d.startTime, d.duration = d.remaining, d.startVal = d.frameVal, requestAnimationFrame(d.count)) : (d.paused = !0, cancelAnimationFrame(d.rAF))
			}, d.reset = function() {
				d.paused = !1, delete d.startTime, d.initialized = !1, d.initialize() && (cancelAnimationFrame(d.rAF), d.printValue(d.startVal))
			}, d.update = function(e) {
				if (d.initialize()) {
					if (e = Number(e), !l(e)) return void(d.error = "[CountUp] update() - new endVal is not a number: " + e);
					d.error = "", e !== d.frameVal && (cancelAnimationFrame(d.rAF), d.paused = !1, delete d.startTime, d.startVal = d.frameVal, d.endVal = e, d.countDown = d.startVal > d.endVal, d.rAF = requestAnimationFrame(d.count))
				}
			}, d.initialize() && d.printValue(d.startVal)
		}
	}), define("utils", [], function() {
		return {
			name: "utils",
			email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
			ismobile: !!/Mobile|iP(hone|od|pad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent),
			isRetina: function() {
				return window.devicePixelRatio > 1
			},
			winWidth: function() {
				return $(window).width()
			},
			winHeight: $(window).height()
		}
	}),
	function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pjax", t) : e.Swiper = t()
	}(this, function() {
		"use strict";

		function e(e, t) {
			var i = [],
				r = 0;
			if (e && !t && e instanceof a) return e;
			if (e)
				if ("string" == typeof e) {
					var o, l, d = e.trim();
					if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
						var h = "div";
						for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = s.createElement(h)).innerHTML = d, r = 0; r < l.childNodes.length; r += 1) i.push(l.childNodes[r])
					} else
						for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || s).querySelectorAll(e.trim()) : [s.getElementById(e.trim().split("#")[1])], r = 0; r < o.length; r += 1) o[r] && i.push(o[r])
				} else if (e.nodeType || e === n || e === s) i.push(e);
			else if (e.length > 0 && e[0].nodeType)
				for (r = 0; r < e.length; r += 1) i.push(e[r]);
			return new a(i)
		}

		function t(e) {
			for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
			return t
		}

		function i() {
			var e = this.params,
				t = this.el;
			if (!t || 0 !== t.offsetWidth) {
				e.breakpoints && this.setBreakpoint();
				var i = this.allowSlideNext,
					s = this.allowSlidePrev;
				if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
					var n = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
					this.setTranslate(n), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
				} else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
				this.allowSlidePrev = s, this.allowSlideNext = i
			}
		}
		var s = "undefined" == typeof document ? {
				body: {},
				addEventListener: function() {},
				removeEventListener: function() {},
				activeElement: {
					blur: function() {},
					nodeName: ""
				},
				querySelector: function() {
					return null
				},
				querySelectorAll: function() {
					return []
				},
				getElementById: function() {
					return null
				},
				createEvent: function() {
					return {
						initEvent: function() {}
					}
				},
				createElement: function() {
					return {
						children: [],
						childNodes: [],
						style: {},
						setAttribute: function() {},
						getElementsByTagName: function() {
							return []
						}
					}
				},
				location: {
					hash: ""
				}
			} : document,
			n = "undefined" == typeof window ? {
				document: s,
				navigator: {
					userAgent: ""
				},
				location: {},
				history: {},
				CustomEvent: function() {
					return this
				},
				addEventListener: function() {},
				removeEventListener: function() {},
				getComputedStyle: function() {
					return {
						getPropertyValue: function() {
							return ""
						}
					}
				},
				Image: function() {},
				Date: function() {},
				screen: {},
				setTimeout: function() {},
				clearTimeout: function() {}
			} : window,
			a = function(e) {
				for (var t = 0; t < e.length; t += 1) this[t] = e[t];
				return this.length = e.length, this
			};
		e.fn = a.prototype, e.Class = a, e.Dom7 = a;
		var r = {
			addClass: function(e) {
				if (void 0 === e) return this;
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
				return this
			},
			removeClass: function(e) {
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
				return this
			},
			hasClass: function(e) {
				return !!this[0] && this[0].classList.contains(e)
			},
			toggleClass: function(e) {
				for (var t = e.split(" "), i = 0; i < t.length; i += 1)
					for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
				return this
			},
			attr: function(e, t) {
				var i = arguments;
				if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
				for (var s = 0; s < this.length; s += 1)
					if (2 === i.length) this[s].setAttribute(e, t);
					else
						for (var n in e) this[s][n] = e[n], this[s].setAttribute(n, e[n]);
				return this
			},
			removeAttr: function(e) {
				for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
				return this
			},
			data: function(e, t) {
				var i;
				if (void 0 !== t) {
					for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
					return this
				}
				if (i = this[0]) {
					if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
					return i.getAttribute("data-" + e) || void 0
				}
			},
			transform: function(e) {
				for (var t = 0; t < this.length; t += 1) {
					var i = this[t].style;
					i.webkitTransform = e, i.transform = e
				}
				return this
			},
			transition: function(e) {
				"string" != typeof e && (e += "ms");
				for (var t = 0; t < this.length; t += 1) {
					var i = this[t].style;
					i.webkitTransitionDuration = e, i.transitionDuration = e
				}
				return this
			},
			on: function() {
				function t(t) {
					var i = t.target;
					if (i) {
						var s = t.target.dom7EventData || [];
						if (s.unshift(t), e(i).is(o)) l.apply(i, s);
						else
							for (var n = e(i).parents(), a = 0; a < n.length; a += 1) e(n[a]).is(o) && l.apply(n[a], s)
					}
				}

				function i(e) {
					var t = e && e.target ? e.target.dom7EventData || [] : [];
					t.unshift(e), l.apply(this, t)
				}
				for (var s, n = [], a = arguments.length; a--;) n[a] = arguments[a];
				var r = n[0],
					o = n[1],
					l = n[2],
					d = n[3];
				"function" == typeof n[1] && (r = (s = n)[0], l = s[1], d = s[2], o = void 0), d || (d = !1);
				for (var h, c = r.split(" "), u = 0; u < this.length; u += 1) {
					var p = this[u];
					if (o)
						for (h = 0; h < c.length; h += 1) p.dom7LiveListeners || (p.dom7LiveListeners = []), p.dom7LiveListeners.push({
							type: r,
							listener: l,
							proxyListener: t
						}), p.addEventListener(c[h], t, d);
					else
						for (h = 0; h < c.length; h += 1) p.dom7Listeners || (p.dom7Listeners = []), p.dom7Listeners.push({
							type: r,
							listener: l,
							proxyListener: i
						}), p.addEventListener(c[h], i, d)
				}
				return this
			},
			off: function() {
				for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
				var s = t[0],
					n = t[1],
					a = t[2],
					r = t[3];
				"function" == typeof t[1] && (s = (e = t)[0], a = e[1], r = e[2], n = void 0), r || (r = !1);
				for (var o = s.split(" "), l = 0; l < o.length; l += 1)
					for (var d = 0; d < this.length; d += 1) {
						var h = this[d];
						if (n) {
							if (h.dom7LiveListeners)
								for (var c = 0; c < h.dom7LiveListeners.length; c += 1) a ? h.dom7LiveListeners[c].listener === a && h.removeEventListener(o[l], h.dom7LiveListeners[c].proxyListener, r) : h.dom7LiveListeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[c].proxyListener, r)
						} else if (h.dom7Listeners)
							for (var u = 0; u < h.dom7Listeners.length; u += 1) a ? h.dom7Listeners[u].listener === a && h.removeEventListener(o[l], h.dom7Listeners[u].proxyListener, r) : h.dom7Listeners[u].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[u].proxyListener, r)
					}
				return this
			},
			trigger: function() {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var i = e[0].split(" "), a = e[1], r = 0; r < i.length; r += 1)
					for (var o = 0; o < this.length; o += 1) {
						var l = void 0;
						try {
							l = new n.CustomEvent(i[r], {
								detail: a,
								bubbles: !0,
								cancelable: !0
							})
						} catch (e) {
							(l = s.createEvent("Event")).initEvent(i[r], !0, !0), l.detail = a
						}
						this[o].dom7EventData = e.filter(function(e, t) {
							return t > 0
						}), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
					}
				return this
			},
			transitionEnd: function(e) {
				function t(a) {
					if (a.target === this)
						for (e.call(this, a), i = 0; i < s.length; i += 1) n.off(s[i], t)
				}
				var i, s = ["webkitTransitionEnd", "transitionend"],
					n = this;
				if (e)
					for (i = 0; i < s.length; i += 1) n.on(s[i], t);
				return this
			},
			outerWidth: function(e) {
				if (this.length > 0) {
					if (e) {
						var t = this.styles();
						return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
					}
					return this[0].offsetWidth
				}
				return null
			},
			outerHeight: function(e) {
				if (this.length > 0) {
					if (e) {
						var t = this.styles();
						return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
					}
					return this[0].offsetHeight
				}
				return null
			},
			offset: function() {
				if (this.length > 0) {
					var e = this[0],
						t = e.getBoundingClientRect(),
						i = s.body,
						a = e.clientTop || i.clientTop || 0,
						r = e.clientLeft || i.clientLeft || 0,
						o = e === n ? n.scrollY : e.scrollTop,
						l = e === n ? n.scrollX : e.scrollLeft;
					return {
						top: t.top + o - a,
						left: t.left + l - r
					}
				}
				return null
			},
			css: function(e, t) {
				var i;
				if (1 === arguments.length) {
					if ("string" != typeof e) {
						for (i = 0; i < this.length; i += 1)
							for (var s in e) this[i].style[s] = e[s];
						return this
					}
					if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
				}
				if (2 === arguments.length && "string" == typeof e) {
					for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
					return this
				}
				return this
			},
			each: function(e) {
				if (!e) return this;
				for (var t = 0; t < this.length; t += 1)
					if (!1 === e.call(this[t], t, this[t])) return this;
				return this
			},
			html: function(e) {
				if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
				for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
				return this
			},
			text: function(e) {
				if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
				for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
				return this
			},
			is: function(t) {
				var i, r, o = this[0];
				if (!o || void 0 === t) return !1;
				if ("string" == typeof t) {
					if (o.matches) return o.matches(t);
					if (o.webkitMatchesSelector) return o.webkitMatchesSelector(t);
					if (o.msMatchesSelector) return o.msMatchesSelector(t);
					for (i = e(t), r = 0; r < i.length; r += 1)
						if (i[r] === o) return !0;
					return !1
				}
				if (t === s) return o === s;
				if (t === n) return o === n;
				if (t.nodeType || t instanceof a) {
					for (i = t.nodeType ? [t] : t, r = 0; r < i.length; r += 1)
						if (i[r] === o) return !0;
					return !1
				}
				return !1
			},
			index: function() {
				var e, t = this[0];
				if (t) {
					for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
					return e
				}
			},
			eq: function(e) {
				if (void 0 === e) return this;
				var t, i = this.length;
				return new a(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
			},
			append: function() {
				for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
				for (var n = 0; n < t.length; n += 1) {
					e = t[n];
					for (var r = 0; r < this.length; r += 1)
						if ("string" == typeof e) {
							var o = s.createElement("div");
							for (o.innerHTML = e; o.firstChild;) this[r].appendChild(o.firstChild)
						} else if (e instanceof a)
						for (var l = 0; l < e.length; l += 1) this[r].appendChild(e[l]);
					else this[r].appendChild(e)
				}
				return this
			},
			prepend: function(e) {
				var t, i;
				for (t = 0; t < this.length; t += 1)
					if ("string" == typeof e) {
						var n = s.createElement("div");
						for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
					} else if (e instanceof a)
					for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
				else this[t].insertBefore(e, this[t].childNodes[0]);
				return this
			},
			next: function(t) {
				return new a(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
			},
			nextAll: function(t) {
				var i = [],
					s = this[0];
				if (!s) return new a([]);
				for (; s.nextElementSibling;) {
					var n = s.nextElementSibling;
					t ? e(n).is(t) && i.push(n) : i.push(n), s = n
				}
				return new a(i)
			},
			prev: function(t) {
				if (this.length > 0) {
					var i = this[0];
					return new a(t ? i.previousElementSibling && e(i.previousElementSibling).is(t) ? [i.previousElementSibling] : [] : i.previousElementSibling ? [i.previousElementSibling] : [])
				}
				return new a([])
			},
			prevAll: function(t) {
				var i = [],
					s = this[0];
				if (!s) return new a([]);
				for (; s.previousElementSibling;) {
					var n = s.previousElementSibling;
					t ? e(n).is(t) && i.push(n) : i.push(n), s = n
				}
				return new a(i)
			},
			parent: function(i) {
				for (var s = [], n = 0; n < this.length; n += 1) null !== this[n].parentNode && (i ? e(this[n].parentNode).is(i) && s.push(this[n].parentNode) : s.push(this[n].parentNode));
				return e(t(s))
			},
			parents: function(i) {
				for (var s = [], n = 0; n < this.length; n += 1)
					for (var a = this[n].parentNode; a;) i ? e(a).is(i) && s.push(a) : s.push(a), a = a.parentNode;
				return e(t(s))
			},
			closest: function(e) {
				var t = this;
				return void 0 === e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
			},
			find: function(e) {
				for (var t = [], i = 0; i < this.length; i += 1)
					for (var s = this[i].querySelectorAll(e), n = 0; n < s.length; n += 1) t.push(s[n]);
				return new a(t)
			},
			children: function(i) {
				for (var s = [], n = 0; n < this.length; n += 1)
					for (var r = this[n].childNodes, o = 0; o < r.length; o += 1) i ? 1 === r[o].nodeType && e(r[o]).is(i) && s.push(r[o]) : 1 === r[o].nodeType && s.push(r[o]);
				return new a(t(s))
			},
			remove: function() {
				for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
				return this
			},
			add: function() {
				for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
				var s, n;
				for (s = 0; s < t.length; s += 1) {
					var a = e(t[s]);
					for (n = 0; n < a.length; n += 1) this[this.length] = a[n], this.length += 1
				}
				return this
			},
			styles: function() {
				return this[0] ? n.getComputedStyle(this[0], null) : {}
			}
		};
		Object.keys(r).forEach(function(t) {
			e.fn[t] = r[t]
		});
		var o, l, d, h = {
				deleteProps: function(e) {
					var t = e;
					Object.keys(t).forEach(function(e) {
						try {
							t[e] = null
						} catch (e) {}
						try {
							delete t[e]
						} catch (e) {}
					})
				},
				nextTick: function(e, t) {
					return void 0 === t && (t = 0), setTimeout(e, t)
				},
				now: function() {
					return Date.now()
				},
				getTranslate: function(e, t) {
					var i, s, a;
					void 0 === t && (t = "x");
					var r = n.getComputedStyle(e, null);
					return n.WebKitCSSMatrix ? ((s = r.transform || r.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function(e) {
						return e.replace(",", ".")
					}).join(", ")), a = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
				},
				parseUrlQuery: function(e) {
					var t, i, s, a, r = {},
						o = e || n.location.href;
					if ("string" == typeof o && o.length)
						for (a = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
								return "" !== e
							})).length, t = 0; t < a; t += 1) s = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
					return r
				},
				isObject: function(e) {
					return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
				},
				extend: function() {
					for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
					for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
						var n = e[s];
						if (void 0 !== n && null !== n)
							for (var a = Object.keys(Object(n)), r = 0, o = a.length; r < o; r += 1) {
								var l = a[r],
									d = Object.getOwnPropertyDescriptor(n, l);
								void 0 !== d && d.enumerable && (h.isObject(i[l]) && h.isObject(n[l]) ? h.extend(i[l], n[l]) : !h.isObject(i[l]) && h.isObject(n[l]) ? (i[l] = {}, h.extend(i[l], n[l])) : i[l] = n[l])
							}
					}
					return i
				}
			},
			c = (d = s.createElement("div"), {
				touch: n.Modernizr && !0 === n.Modernizr.touch || !!("ontouchstart" in n || n.DocumentTouch && s instanceof n.DocumentTouch),
				pointerEvents: !(!n.navigator.pointerEnabled && !n.PointerEvent),
				prefixedPointerEvents: !!n.navigator.msPointerEnabled,
				transition: "transition" in (l = d.style) || "webkitTransition" in l || "MozTransition" in l,
				transforms3d: n.Modernizr && !0 === n.Modernizr.csstransforms3d || "webkitPerspective" in (o = d.style) || "MozPerspective" in o || "OPerspective" in o || "MsPerspective" in o || "perspective" in o,
				flexbox: function() {
					for (var e = d.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
						if (t[i] in e) return !0;
					return !1
				}(),
				observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
				passiveListener: function() {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function() {
								e = !0
							}
						});
						n.addEventListener("testPassiveListener", null, t)
					} catch (e) {}
					return e
				}(),
				gestures: "ongesturestart" in n
			}),
			u = function(e) {
				void 0 === e && (e = {});
				var t = this;
				t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
					t.on(e, t.params.on[e])
				})
			},
			p = {
				components: {
					configurable: !0
				}
			};
		u.prototype.on = function(e, t, i) {
			var s = this;
			if ("function" != typeof t) return s;
			var n = i ? "unshift" : "push";
			return e.split(" ").forEach(function(e) {
				s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
			}), s
		}, u.prototype.once = function(e, t, i) {
			var s = this;
			return "function" != typeof t ? s : s.on(e, function i() {
				for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
				t.apply(s, n), s.off(e, i)
			}, i)
		}, u.prototype.off = function(e, t) {
			var i = this;
			return e.split(" ").forEach(function(e) {
				void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, n) {
					s === t && i.eventsListeners[e].splice(n, 1)
				})
			}), i
		}, u.prototype.emit = function() {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			var i, s, n, a = this;
			return a.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = a) : (i = e[0].events, s = e[0].data, n = e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
				if (a.eventsListeners[e]) {
					var t = [];
					a.eventsListeners[e].forEach(function(e) {
						t.push(e)
					}), t.forEach(function(e) {
						e.apply(n, s)
					})
				}
			}), a) : a
		}, u.prototype.useModulesParams = function(e) {
			var t = this;
			t.modules && Object.keys(t.modules).forEach(function(i) {
				var s = t.modules[i];
				s.params && h.extend(e, s.params)
			})
		}, u.prototype.useModules = function(e) {
			void 0 === e && (e = {});
			var t = this;
			t.modules && Object.keys(t.modules).forEach(function(i) {
				var s = t.modules[i],
					n = e[i] || {};
				s.instance && Object.keys(s.instance).forEach(function(e) {
					var i = s.instance[e];
					t[e] = "function" == typeof i ? i.bind(t) : i
				}), s.on && t.on && Object.keys(s.on).forEach(function(e) {
					t.on(e, s.on[e])
				}), s.create && s.create.bind(t)(n)
			})
		}, p.components.set = function(e) {
			this.use && this.use(e)
		}, u.installModule = function(e) {
			for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
			var s = this;
			s.prototype.modules || (s.prototype.modules = {});
			var n = e.name || Object.keys(s.prototype.modules).length + "_" + h.now();
			return s.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
				s.prototype[t] = e.proto[t]
			}), e.static && Object.keys(e.static).forEach(function(t) {
				s[t] = e.static[t]
			}), e.install && e.install.apply(s, t), s
		}, u.use = function(e) {
			for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
			var s = this;
			return Array.isArray(e) ? (e.forEach(function(e) {
				return s.installModule(e)
			}), s) : s.installModule.apply(s, [e].concat(t))
		}, Object.defineProperties(u, p);
		var f = {
				updateSize: function() {
					var e, t, i = this.$el;
					e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), h.extend(this, {
						width: e,
						height: t,
						size: this.isHorizontal() ? e : t
					}))
				},
				updateSlides: function() {
					var e = this.params,
						t = this.$wrapperEl,
						i = this.size,
						s = this.rtlTranslate,
						a = this.wrongRTL,
						r = t.children("." + this.params.slideClass),
						o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
						l = [],
						d = [],
						u = [],
						p = e.slidesOffsetBefore;
					"function" == typeof p && (p = e.slidesOffsetBefore.call(this));
					var f = e.slidesOffsetAfter;
					"function" == typeof f && (f = e.slidesOffsetAfter.call(this));
					var v = o,
						m = this.snapGrid.length,
						g = this.snapGrid.length,
						y = e.spaceBetween,
						b = -p,
						w = 0,
						x = 0;
					if (void 0 !== i) {
						var T, S;
						"string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * i), this.virtualSize = -y, s ? r.css({
							marginLeft: "",
							marginTop: ""
						}) : r.css({
							marginRight: "",
							marginBottom: ""
						}), e.slidesPerColumn > 1 && (T = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
						for (var E, C = e.slidesPerColumn, k = T / C, A = k - (e.slidesPerColumn * k - o), M = 0; M < o; M += 1) {
							S = 0;
							var z = r.eq(M);
							if (e.slidesPerColumn > 1) {
								var $ = void 0,
									L = void 0,
									P = void 0;
								"column" === e.slidesPerColumnFill ? (P = M - (L = Math.floor(M / C)) * C, (L > A || L === A && P === C - 1) && (P += 1) >= C && (P = 0, L += 1), $ = L + P * T / C, z.css({
									"-webkit-box-ordinal-group": $,
									"-moz-box-ordinal-group": $,
									"-ms-flex-order": $,
									"-webkit-order": $,
									order: $
								})) : L = M - (P = Math.floor(M / k)) * k, z.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== P && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", P)
							}
							if ("none" !== z.css("display")) {
								if ("auto" === e.slidesPerView) {
									var I = n.getComputedStyle(z[0], null);
									S = this.isHorizontal() ? z[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : z[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), e.roundLengths && (S = Math.floor(S))
								} else S = (i - (e.slidesPerView - 1) * y) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), r[M] && (this.isHorizontal() ? r[M].style.width = S + "px" : r[M].style.height = S + "px");
								r[M] && (r[M].swiperSlideSize = S), u.push(S), e.centeredSlides ? (b = b + S / 2 + w / 2 + y, 0 === w && 0 !== M && (b = b - i / 2 - y), 0 === M && (b = b - i / 2 - y), Math.abs(b) < .001 && (b = 0), x % e.slidesPerGroup == 0 && l.push(b), d.push(b)) : (x % e.slidesPerGroup == 0 && l.push(b), d.push(b), b = b + S + y), this.virtualSize += S + y, w = S, x += 1
							}
						}
						if (this.virtualSize = Math.max(this.virtualSize, i) + f, s && a && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
								width: this.virtualSize + e.spaceBetween + "px"
							}), c.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({
								width: this.virtualSize + e.spaceBetween + "px"
							}) : t.css({
								height: this.virtualSize + e.spaceBetween + "px"
							})), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
								width: this.virtualSize + e.spaceBetween + "px"
							}) : t.css({
								height: this.virtualSize + e.spaceBetween + "px"
							}), e.centeredSlides)) {
							E = [];
							for (var D = 0; D < l.length; D += 1) l[D] < this.virtualSize + l[0] && E.push(l[D]);
							l = E
						}
						if (!e.centeredSlides) {
							E = [];
							for (var N = 0; N < l.length; N += 1) l[N] <= this.virtualSize - i && E.push(l[N]);
							l = E, Math.floor(this.virtualSize - i) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - i)
						}
						0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? r.css({
							marginLeft: y + "px"
						}) : r.css({
							marginRight: y + "px"
						}) : r.css({
							marginBottom: y + "px"
						})), h.extend(this, {
							slides: r,
							snapGrid: l,
							slidesGrid: d,
							slidesSizesGrid: u
						}), o !== v && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), d.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
					}
				},
				updateAutoHeight: function(e) {
					var t, i = [],
						s = 0;
					if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
						for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
							var n = this.activeIndex + t;
							if (n > this.slides.length) break;
							i.push(this.slides.eq(n)[0])
						} else i.push(this.slides.eq(this.activeIndex)[0]);
					for (t = 0; t < i.length; t += 1)
						if (void 0 !== i[t]) {
							var a = i[t].offsetHeight;
							s = a > s ? a : s
						}
					s && this.$wrapperEl.css("height", s + "px")
				},
				updateSlidesOffset: function() {
					for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
				},
				updateSlidesProgress: function(e) {
					void 0 === e && (e = this.translate || 0);
					var t = this.params,
						i = this.slides,
						s = this.rtlTranslate;
					if (0 !== i.length) {
						void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
						var n = -e;
						s && (n = e), i.removeClass(t.slideVisibleClass);
						for (var a = 0; a < i.length; a += 1) {
							var r = i[a],
								o = (n + (t.centeredSlides ? this.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + t.spaceBetween);
							if (t.watchSlidesVisibility) {
								var l = -(n - r.swiperSlideOffset),
									d = l + this.slidesSizesGrid[a];
								(l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(a).addClass(t.slideVisibleClass)
							}
							r.progress = s ? -o : o
						}
					}
				},
				updateProgress: function(e) {
					void 0 === e && (e = this.translate || 0);
					var t = this.params,
						i = this.maxTranslate() - this.minTranslate(),
						s = this.progress,
						n = this.isBeginning,
						a = this.isEnd,
						r = n,
						o = a;
					0 === i ? (s = 0, n = !0, a = !0) : (n = (s = (e - this.minTranslate()) / i) <= 0, a = s >= 1), h.extend(this, {
						progress: s,
						isBeginning: n,
						isEnd: a
					}), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), n && !r && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (r && !n || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
				},
				updateSlidesClasses: function() {
					var e, t = this.slides,
						i = this.params,
						s = this.$wrapperEl,
						n = this.activeIndex,
						a = this.realIndex,
						r = this.virtual && i.virtual.enabled;
					t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = r ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]') : t.eq(n)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
					var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
					i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
					var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
					i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
				},
				updateActiveIndex: function(e) {
					var t, i = this.rtlTranslate ? this.translate : -this.translate,
						s = this.slidesGrid,
						n = this.snapGrid,
						a = this.params,
						r = this.activeIndex,
						o = this.realIndex,
						l = this.snapIndex,
						d = e;
					if (void 0 === d) {
						for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? d = c : i >= s[c] && i < s[c + 1] && (d = c + 1) : i >= s[c] && (d = c);
						a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
					}
					if ((t = n.indexOf(i) >= 0 ? n.indexOf(i) : Math.floor(d / a.slidesPerGroup)) >= n.length && (t = n.length - 1), d !== r) {
						var u = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
						h.extend(this, {
							snapIndex: t,
							realIndex: u,
							previousIndex: r,
							activeIndex: d
						}), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), this.emit("slideChange")
					} else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
				},
				updateClickedSlide: function(t) {
					var i = this.params,
						s = e(t.target).closest("." + i.slideClass)[0],
						n = !1;
					if (s)
						for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === s && (n = !0);
					if (!s || !n) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
					this.clickedSlide = s, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10) : this.clickedIndex = e(s).index(), i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
				}
			},
			v = {
				getTranslate: function(e) {
					void 0 === e && (e = this.isHorizontal() ? "x" : "y");
					var t = this.params,
						i = this.rtlTranslate,
						s = this.translate,
						n = this.$wrapperEl;
					if (t.virtualTranslate) return i ? -s : s;
					var a = h.getTranslate(n[0], e);
					return i && (a = -a), a || 0
				},
				setTranslate: function(e, t) {
					var i = this.rtlTranslate,
						s = this.params,
						n = this.$wrapperEl,
						a = this.progress,
						r = 0,
						o = 0;
					this.isHorizontal() ? r = i ? -e : e : o = e, s.roundLengths && (r = Math.floor(r), o = Math.floor(o)), s.virtualTranslate || (c.transforms3d ? n.transform("translate3d(" + r + "px, " + o + "px, 0px)") : n.transform("translate(" + r + "px, " + o + "px)")), this.translate = this.isHorizontal() ? r : o;
					var l = this.maxTranslate() - this.minTranslate();
					(0 === l ? 0 : (e - this.minTranslate()) / l) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
				},
				minTranslate: function() {
					return -this.snapGrid[0]
				},
				maxTranslate: function() {
					return -this.snapGrid[this.snapGrid.length - 1]
				}
			},
			m = {
				setTransition: function(e, t) {
					this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
				},
				transitionStart: function(e, t) {
					void 0 === e && (e = !0);
					var i = this.activeIndex,
						s = this.params,
						n = this.previousIndex;
					s.autoHeight && this.updateAutoHeight();
					var a = t;
					if (a || (a = i > n ? "next" : i < n ? "prev" : "reset"), this.emit("transitionStart"), e && i !== n) {
						if ("reset" === a) return void this.emit("slideResetTransitionStart");
						this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
					}
				},
				transitionEnd: function(e, t) {
					void 0 === e && (e = !0);
					var i = this.activeIndex,
						s = this.previousIndex;
					this.animating = !1, this.setTransition(0);
					var n = t;
					if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
						if ("reset" === n) return void this.emit("slideResetTransitionEnd");
						this.emit("slideChangeTransitionEnd"), "next" === n ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
					}
				}
			},
			g = {
				slideTo: function(e, t, i, s) {
					void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
					var n = this,
						a = e;
					a < 0 && (a = 0);
					var r = n.params,
						o = n.snapGrid,
						l = n.slidesGrid,
						d = n.previousIndex,
						h = n.activeIndex,
						u = n.rtlTranslate,
						p = n.$wrapperEl;
					if (n.animating && r.preventIntercationOnTransition) return !1;
					var f = Math.floor(a / r.slidesPerGroup);
					f >= o.length && (f = o.length - 1), (h || r.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
					var v, m = -o[f];
					if (n.updateProgress(m), r.normalizeSlideIndex)
						for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (a = g);
					if (n.initialized && a !== h) {
						if (!n.allowSlideNext && m < n.translate && m < n.minTranslate()) return !1;
						if (!n.allowSlidePrev && m > n.translate && m > n.maxTranslate() && (h || 0) !== a) return !1
					}
					return v = a > h ? "next" : a < h ? "prev" : "reset", u && -m === n.translate || !u && m === n.translate ? (n.updateActiveIndex(a), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== r.effect && n.setTranslate(m), "reset" !== v && (n.transitionStart(i, v), n.transitionEnd(i, v)), !1) : (0 !== t && c.transition ? (n.setTransition(t), n.setTranslate(m), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, v), n.animating || (n.animating = !0, p.transitionEnd(function() {
						n && !n.destroyed && n.transitionEnd(i, v)
					}))) : (n.setTransition(0), n.setTranslate(m), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, v), n.transitionEnd(i, v)), !0)
				},
				slideToLoop: function(e, t, i, s) {
					void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
					var n = e;
					return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
				},
				slideNext: function(e, t, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var s = this.params,
						n = this.animating;
					return s.loop ? !n && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
				},
				slidePrev: function(e, t, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var s = this.params,
						n = this.animating;
					return s.loop ? !n && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
				},
				slideReset: function(e, t, i) {
					return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
				},
				slideToClosest: function(e, t, i) {
					void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
					var s = this.activeIndex,
						n = Math.floor(s / this.params.slidesPerGroup);
					if (n < this.snapGrid.length - 1) {
						var a = this.rtlTranslate ? this.translate : -this.translate,
							r = this.snapGrid[n];
						a - r > (this.snapGrid[n + 1] - r) / 2 && (s = this.params.slidesPerGroup)
					}
					return this.slideTo(s, e, t, i)
				},
				slideToClickedSlide: function() {
					var t, i = this,
						s = i.params,
						n = i.$wrapperEl,
						a = "auto" === s.slidesPerView ? i.slidesPerViewDynamic() : s.slidesPerView,
						r = i.clickedIndex;
					if (s.loop) {
						if (i.animating) return;
						t = parseInt(e(i.clickedSlide).attr("data-swiper-slide-index"), 10), s.centeredSlides ? r < i.loopedSlides - a / 2 || r > i.slides.length - i.loopedSlides + a / 2 ? (i.loopFix(), r = n.children("." + s.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), h.nextTick(function() {
							i.slideTo(r)
						})) : i.slideTo(r) : r > i.slides.length - a ? (i.loopFix(), r = n.children("." + s.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(), h.nextTick(function() {
							i.slideTo(r)
						})) : i.slideTo(r)
					} else i.slideTo(r)
				}
			},
			y = {
				loopCreate: function() {
					var t = this,
						i = t.params,
						n = t.$wrapperEl;
					n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
					var a = n.children("." + i.slideClass);
					if (i.loopFillGroupWithBlank) {
						var r = i.slidesPerGroup - a.length % i.slidesPerGroup;
						if (r !== i.slidesPerGroup) {
							for (var o = 0; o < r; o += 1) {
								var l = e(s.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
								n.append(l)
							}
							a = n.children("." + i.slideClass)
						}
					}
					"auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
					var d = [],
						h = [];
					a.each(function(i, s) {
						var n = e(s);
						i < t.loopedSlides && h.push(s), i < a.length && i >= a.length - t.loopedSlides && d.push(s), n.attr("data-swiper-slide-index", i)
					});
					for (var c = 0; c < h.length; c += 1) n.append(e(h[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
					for (var u = d.length - 1; u >= 0; u -= 1) n.prepend(e(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass))
				},
				loopFix: function() {
					var e, t = this.params,
						i = this.activeIndex,
						s = this.slides,
						n = this.loopedSlides,
						a = this.allowSlidePrev,
						r = this.allowSlideNext,
						o = this.snapGrid,
						l = this.rtlTranslate;
					this.allowSlidePrev = !0, this.allowSlideNext = !0;
					var d = -o[i] - this.getTranslate();
					i < n ? (e = s.length - 3 * n + i, e += n, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * n || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + n, e += n, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)), this.allowSlidePrev = a, this.allowSlideNext = r
				},
				loopDestroy: function() {
					var e = this.$wrapperEl,
						t = this.params,
						i = this.slides;
					e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
				}
			},
			b = {
				setGrabCursor: function(e) {
					if (!c.touch && this.params.simulateTouch) {
						var t = this.el;
						t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
					}
				},
				unsetGrabCursor: function() {
					c.touch || (this.el.style.cursor = "")
				}
			},
			w = {
				appendSlide: function(e) {
					var t = this.$wrapperEl,
						i = this.params;
					if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
						for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
					else t.append(e);
					i.loop && this.loopCreate(), i.observer && c.observer || this.update()
				},
				prependSlide: function(e) {
					var t = this.params,
						i = this.$wrapperEl,
						s = this.activeIndex;
					t.loop && this.loopDestroy();
					var n = s + 1;
					if ("object" == typeof e && "length" in e) {
						for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
						n = s + e.length
					} else i.prepend(e);
					t.loop && this.loopCreate(), t.observer && c.observer || this.update(), this.slideTo(n, 0, !1)
				},
				removeSlide: function(e) {
					var t = this.params,
						i = this.$wrapperEl,
						s = this.activeIndex;
					t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
					var n, a = s;
					if ("object" == typeof e && "length" in e) {
						for (var r = 0; r < e.length; r += 1) n = e[r], this.slides[n] && this.slides.eq(n).remove(), n < a && (a -= 1);
						a = Math.max(a, 0)
					} else n = e, this.slides[n] && this.slides.eq(n).remove(), n < a && (a -= 1), a = Math.max(a, 0);
					t.loop && this.loopCreate(), t.observer && c.observer || this.update(), t.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1)
				},
				removeAllSlides: function() {
					for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
					this.removeSlide(e)
				}
			},
			x = function() {
				var e = n.navigator.userAgent,
					t = {
						ios: !1,
						android: !1,
						androidChrome: !1,
						desktop: !1,
						windows: !1,
						iphone: !1,
						ipod: !1,
						ipad: !1,
						cordova: n.cordova || n.phonegap,
						phonegap: n.cordova || n.phonegap
					},
					i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
					a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
					r = e.match(/(iPad).*OS\s([\d_]+)/),
					o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
					l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
				if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), a && !i && (t.os = "android", t.osVersion = a[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
					var d = t.osVersion.split("."),
						h = s.querySelector('meta[name="viewport"]');
					t.minimalUi = !t.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
				}
				return t.pixelRatio = n.devicePixelRatio || 1, t
			}(),
			T = {
				attachEvents: function() {
					var t = this.params,
						a = this.touchEvents,
						r = this.el,
						o = this.wrapperEl;
					this.onTouchStart = function(t) {
						var i = this.touchEventsData,
							a = this.params,
							r = this.touches;
						if (!this.animating || !a.preventIntercationOnTransition) {
							var o = t;
							if (o.originalEvent && (o = o.originalEvent), i.isTouchEvent = "touchstart" === o.type, (i.isTouchEvent || !("which" in o) || 3 !== o.which) && (!i.isTouched || !i.isMoved))
								if (a.noSwiping && e(o.target).closest(a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass)[0]) this.allowClick = !0;
								else if (!a.swipeHandler || e(o).closest(a.swipeHandler)[0]) {
								r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
								var l = r.currentX,
									d = r.currentY;
								if (!(x.ios && !x.cordova && a.iOSEdgeSwipeDetection && l <= a.iOSEdgeSwipeThreshold && l >= n.screen.width - a.iOSEdgeSwipeThreshold)) {
									if (h.extend(i, {
											isTouched: !0,
											isMoved: !1,
											allowTouchCallbacks: !0,
											isScrolling: void 0,
											startMoving: void 0
										}), r.startX = l, r.startY = d, i.touchStartTime = h.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== o.type) {
										var c = !0;
										e(o.target).is(i.formElements) && (c = !1), s.activeElement && e(s.activeElement).is(i.formElements) && s.activeElement !== o.target && s.activeElement.blur(), c && this.allowTouchMove && o.preventDefault()
									}
									this.emit("touchStart", o)
								}
							}
						}
					}.bind(this), this.onTouchMove = function(t) {
						var i = this.touchEventsData,
							n = this.params,
							a = this.touches,
							r = this.rtlTranslate,
							o = t;
						if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
							if (!i.isTouchEvent || "mousemove" !== o.type) {
								var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
									d = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
								if (o.preventedByNestedSwiper) return a.startX = l, void(a.startY = d);
								if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (h.extend(a, {
									startX: l,
									startY: d,
									currentX: l,
									currentY: d
								}), i.touchStartTime = h.now()));
								if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
									if (this.isVertical()) {
										if (d < a.startY && this.translate <= this.maxTranslate() || d > a.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
									} else if (l < a.startX && this.translate <= this.maxTranslate() || l > a.startX && this.translate >= this.minTranslate()) return;
								if (i.isTouchEvent && s.activeElement && o.target === s.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
								if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
									a.currentX = l, a.currentY = d;
									var c, u = a.currentX - a.startX,
										p = a.currentY - a.startY;
									if (void 0 === i.isScrolling && (this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : u * u + p * p >= 25 && (c = 180 * Math.atan2(Math.abs(p), Math.abs(u)) / Math.PI, i.isScrolling = this.isHorizontal() ? c > n.touchAngle : 90 - c > n.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
									else if (i.startMoving) {
										this.allowClick = !1, o.preventDefault(), n.touchMoveStopPropagation && !n.nested && o.stopPropagation(), i.isMoved || (n.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
										var f = this.isHorizontal() ? u : p;
										a.diff = f, f *= n.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
										var v = !0,
											m = n.resistanceRatio;
										if (n.touchReleaseOnEdges && (m = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (v = !1, n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, m))) : f < 0 && i.currentTranslate < this.maxTranslate() && (v = !1, n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, m))), v && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
											if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
											if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
										}
										n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
											position: a[this.isHorizontal() ? "startX" : "startY"],
											time: i.touchStartTime
										}), i.velocities.push({
											position: a[this.isHorizontal() ? "currentX" : "currentY"],
											time: h.now()
										})), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
									}
								}
							}
						} else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
					}.bind(this), this.onTouchEnd = function(e) {
						var t = this,
							i = t.touchEventsData,
							s = t.params,
							n = t.touches,
							a = t.rtlTranslate,
							r = t.$wrapperEl,
							o = t.slidesGrid,
							l = t.snapGrid,
							d = e;
						if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
						s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
						var c, u = h.now(),
							p = u - i.touchStartTime;
						if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), p < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = h.nextTick(function() {
								t && !t.destroyed && t.emit("click", d)
							}, 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = h.now(), h.nextTick(function() {
								t.destroyed || (t.allowClick = !0)
							}), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
						if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
							if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
							if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
							if (s.freeModeMomentum) {
								if (i.velocities.length > 1) {
									var f = i.velocities.pop(),
										v = i.velocities.pop(),
										m = f.position - v.position,
										g = f.time - v.time;
									t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || h.now() - f.time > 300) && (t.velocity = 0)
								} else t.velocity = 0;
								t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
								var y = 1e3 * s.freeModeMomentumRatio,
									b = t.velocity * y,
									w = t.translate + b;
								a && (w = -w);
								var x, T = !1,
									S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
								if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate();
								else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.minTranslate();
								else if (s.freeModeSticky) {
									for (var E, C = 0; C < l.length; C += 1)
										if (l[C] > -w) {
											E = C;
											break
										}
									w = -(w = Math.abs(l[E] - w) < Math.abs(l[E - 1] - w) || "next" === t.swipeDirection ? l[E] : l[E - 1])
								}
								if (0 !== t.velocity) y = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
								else if (s.freeModeSticky) return void t.slideToClosest();
								s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function() {
									t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), r.transitionEnd(function() {
										t && !t.destroyed && t.transitionEnd()
									}))
								})) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function() {
									t && !t.destroyed && t.transitionEnd()
								}))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
							} else if (s.freeModeSticky) return void t.slideToClosest();
							(!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
						} else {
							for (var k = 0, A = t.slidesSizesGrid[0], M = 0; M < o.length; M += s.slidesPerGroup) void 0 !== o[M + s.slidesPerGroup] ? c >= o[M] && c < o[M + s.slidesPerGroup] && (k = M, A = o[M + s.slidesPerGroup] - o[M]) : c >= o[M] && (k = M, A = o[o.length - 1] - o[o.length - 2]);
							var z = (c - o[k]) / A;
							if (p > s.longSwipesMs) {
								if (!s.longSwipes) return void t.slideTo(t.activeIndex);
								"next" === t.swipeDirection && (z >= s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k)), "prev" === t.swipeDirection && (z > 1 - s.longSwipesRatio ? t.slideTo(k + s.slidesPerGroup) : t.slideTo(k))
							} else {
								if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
								"next" === t.swipeDirection && t.slideTo(k + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(k)
							}
						}
					}.bind(this), this.onClick = function(e) {
						this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
					}.bind(this);
					var l = "container" === t.touchEventsTarget ? r : o,
						d = !!t.nested;
					if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
						if (c.touch) {
							var u = !("touchstart" !== a.start || !c.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							l.addEventListener(a.start, this.onTouchStart, u), l.addEventListener(a.move, this.onTouchMove, c.passiveListener ? {
								passive: !1,
								capture: d
							} : d), l.addEventListener(a.end, this.onTouchEnd, u)
						}(t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !c.touch && x.ios) && (l.addEventListener("mousedown", this.onTouchStart, !1), s.addEventListener("mousemove", this.onTouchMove, d), s.addEventListener("mouseup", this.onTouchEnd, !1))
					} else l.addEventListener(a.start, this.onTouchStart, !1), s.addEventListener(a.move, this.onTouchMove, d), s.addEventListener(a.end, this.onTouchEnd, !1);
					(t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", i, !0)
				},
				detachEvents: function() {
					var e = this.params,
						t = this.touchEvents,
						n = this.el,
						a = this.wrapperEl,
						r = "container" === e.touchEventsTarget ? n : a,
						o = !!e.nested;
					if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
						if (c.touch) {
							var l = !("onTouchStart" !== t.start || !c.passiveListener || !e.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							r.removeEventListener(t.start, this.onTouchStart, l), r.removeEventListener(t.move, this.onTouchMove, o), r.removeEventListener(t.end, this.onTouchEnd, l)
						}(e.simulateTouch && !x.ios && !x.android || e.simulateTouch && !c.touch && x.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), s.removeEventListener("mousemove", this.onTouchMove, o), s.removeEventListener("mouseup", this.onTouchEnd, !1))
					} else r.removeEventListener(t.start, this.onTouchStart, !1), s.removeEventListener(t.move, this.onTouchMove, o), s.removeEventListener(t.end, this.onTouchEnd, !1);
					(e.preventClicks || e.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", i)
				}
			},
			S = {
				setBreakpoint: function() {
					var e = this.activeIndex,
						t = this.loopedSlides;
					void 0 === t && (t = 0);
					var i = this.params,
						s = i.breakpoints;
					if (s && (!s || 0 !== Object.keys(s).length)) {
						var n = this.getBreakpoint(s);
						if (n && this.currentBreakpoint !== n) {
							var a = n in s ? s[n] : this.originalParams,
								r = i.loop && a.slidesPerView !== i.slidesPerView;
							h.extend(this.params, a), h.extend(this, {
								allowTouchMove: this.params.allowTouchMove,
								allowSlideNext: this.params.allowSlideNext,
								allowSlidePrev: this.params.allowSlidePrev
							}), this.currentBreakpoint = n, r && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", a)
						}
					}
				},
				getBreakpoint: function(e) {
					if (e) {
						var t = !1,
							i = [];
						Object.keys(e).forEach(function(e) {
							i.push(e)
						}), i.sort(function(e, t) {
							return parseInt(e, 10) - parseInt(t, 10)
						});
						for (var s = 0; s < i.length; s += 1) {
							var a = i[s];
							a >= n.innerWidth && !t && (t = a)
						}
						return t || "max"
					}
				}
			},
			E = function() {
				return {
					isIE: !!n.navigator.userAgent.match(/Trident/g) || !!n.navigator.userAgent.match(/MSIE/g),
					isSafari: (e = n.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
					isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
				};
				var e
			}(),
			C = {
				init: !0,
				direction: "horizontal",
				touchEventsTarget: "container",
				initialSlide: 0,
				speed: 300,
				preventIntercationOnTransition: !1,
				iOSEdgeSwipeDetection: !1,
				iOSEdgeSwipeThreshold: 20,
				freeMode: !1,
				freeModeMomentum: !0,
				freeModeMomentumRatio: 1,
				freeModeMomentumBounce: !0,
				freeModeMomentumBounceRatio: 1,
				freeModeMomentumVelocityRatio: 1,
				freeModeSticky: !1,
				freeModeMinimumVelocity: .02,
				autoHeight: !1,
				setWrapperSize: !1,
				virtualTranslate: !1,
				effect: "slide",
				breakpoints: void 0,
				spaceBetween: 0,
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerColumnFill: "column",
				slidesPerGroup: 1,
				centeredSlides: !1,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				normalizeSlideIndex: !0,
				watchOverflow: !1,
				roundLengths: !1,
				touchRatio: 1,
				touchAngle: 45,
				simulateTouch: !0,
				shortSwipes: !0,
				longSwipes: !0,
				longSwipesRatio: .5,
				longSwipesMs: 300,
				followFinger: !0,
				allowTouchMove: !0,
				threshold: 0,
				touchMoveStopPropagation: !0,
				touchReleaseOnEdges: !1,
				uniqueNavElements: !0,
				resistance: !0,
				resistanceRatio: .85,
				watchSlidesProgress: !1,
				watchSlidesVisibility: !1,
				grabCursor: !1,
				preventClicks: !0,
				preventClicksPropagation: !0,
				slideToClickedSlide: !1,
				preloadImages: !0,
				updateOnImagesReady: !0,
				loop: !1,
				loopAdditionalSlides: 0,
				loopedSlides: null,
				loopFillGroupWithBlank: !1,
				allowSlidePrev: !0,
				allowSlideNext: !0,
				swipeHandler: null,
				noSwiping: !0,
				noSwipingClass: "swiper-no-swiping",
				noSwipingSelector: null,
				passiveListeners: !0,
				containerModifierClass: "swiper-container-",
				slideClass: "swiper-slide",
				slideBlankClass: "swiper-slide-invisible-blank",
				slideActiveClass: "swiper-slide-active",
				slideDuplicateActiveClass: "swiper-slide-duplicate-active",
				slideVisibleClass: "swiper-slide-visible",
				slideDuplicateClass: "swiper-slide-duplicate",
				slideNextClass: "swiper-slide-next",
				slideDuplicateNextClass: "swiper-slide-duplicate-next",
				slidePrevClass: "swiper-slide-prev",
				slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
				wrapperClass: "swiper-wrapper",
				runCallbacksOnInit: !0
			},
			k = {
				update: f,
				translate: v,
				transition: m,
				slide: g,
				loop: y,
				grabCursor: b,
				manipulation: w,
				events: T,
				breakpoints: S,
				checkOverflow: {
					checkOverflow: function() {
						var e = this.isLocked;
						this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
					}
				},
				classes: {
					addClasses: function() {
						var e = this.classNames,
							t = this.params,
							i = this.rtl,
							s = this.$el,
							n = [];
						n.push(t.direction), t.freeMode && n.push("free-mode"), c.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && n.push("multirow"), x.android && n.push("android"), x.ios && n.push("ios"), E.isIE && (c.pointerEvents || c.prefixedPointerEvents) && n.push("wp8-" + t.direction), n.forEach(function(i) {
							e.push(t.containerModifierClass + i)
						}), s.addClass(e.join(" "))
					},
					removeClasses: function() {
						var e = this.$el,
							t = this.classNames;
						e.removeClass(t.join(" "))
					}
				},
				images: {
					loadImage: function(e, t, i, s, a, r) {
						function o() {
							r && r()
						}
						var l;
						e.complete && a ? o() : t ? ((l = new n.Image).onload = o, l.onerror = o, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : o()
					},
					preloadImages: function() {
						function e() {
							void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
						}
						var t = this;
						t.imagesToLoad = t.$el.find("img");
						for (var i = 0; i < t.imagesToLoad.length; i += 1) {
							var s = t.imagesToLoad[i];
							t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e)
						}
					}
				}
			},
			A = {},
			M = function(t) {
				function i() {
					for (var s, n, a, r = [], o = arguments.length; o--;) r[o] = arguments[o];
					1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (n = (s = r)[0], a = s[1]), a || (a = {}), a = h.extend({}, a), n && !a.el && (a.el = n), t.call(this, a), Object.keys(k).forEach(function(e) {
						Object.keys(k[e]).forEach(function(t) {
							i.prototype[t] || (i.prototype[t] = k[e][t])
						})
					});
					var l = this;
					void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
						var t = l.modules[e];
						if (t.params) {
							var i = Object.keys(t.params)[0],
								s = t.params[i];
							if ("object" != typeof s) return;
							if (!(i in a && "enabled" in s)) return;
							!0 === a[i] && (a[i] = {
								enabled: !0
							}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
								enabled: !1
							})
						}
					});
					var d = h.extend({}, C);
					l.useModulesParams(d), l.params = h.extend({}, d, A, a), l.originalParams = h.extend({}, l.params), l.passedParams = h.extend({}, a), l.$ = e;
					var u = e(l.params.el);
					if (n = u[0]) {
						if (u.length > 1) {
							var p = [];
							return u.each(function(e, t) {
								var s = h.extend({}, a, {
									el: t
								});
								p.push(new i(s))
							}), p
						}
						n.swiper = l, u.data("swiper", l);
						var f, v, m = u.children("." + l.params.wrapperClass);
						return h.extend(l, {
								$el: u,
								el: n,
								$wrapperEl: m,
								wrapperEl: m[0],
								classNames: [],
								slides: e(),
								slidesGrid: [],
								snapGrid: [],
								slidesSizesGrid: [],
								isHorizontal: function() {
									return "horizontal" === l.params.direction
								},
								isVertical: function() {
									return "vertical" === l.params.direction
								},
								rtl: "rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction"),
								rtlTranslate: "horizontal" === l.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === u.css("direction")),
								wrongRTL: "-webkit-box" === m.css("display"),
								activeIndex: 0,
								realIndex: 0,
								isBeginning: !0,
								isEnd: !1,
								translate: 0,
								progress: 0,
								velocity: 0,
								animating: !1,
								allowSlideNext: l.params.allowSlideNext,
								allowSlidePrev: l.params.allowSlidePrev,
								touchEvents: (f = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], c.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
									start: f[0],
									move: f[1],
									end: f[2]
								}, l.touchEventsDesktop = {
									start: v[0],
									move: v[1],
									end: v[2]
								}, c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
								touchEventsData: {
									isTouched: void 0,
									isMoved: void 0,
									allowTouchCallbacks: void 0,
									touchStartTime: void 0,
									isScrolling: void 0,
									currentTranslate: void 0,
									startTranslate: void 0,
									allowThresholdMove: void 0,
									formElements: "input, select, option, textarea, button, video",
									lastClickTime: h.now(),
									clickTimeout: void 0,
									velocities: [],
									allowMomentumBounce: void 0,
									isTouchEvent: void 0,
									startMoving: void 0
								},
								allowClick: !0,
								allowTouchMove: l.params.allowTouchMove,
								touches: {
									startX: 0,
									startY: 0,
									currentX: 0,
									currentY: 0,
									diff: 0
								},
								imagesToLoad: [],
								imagesLoaded: 0
							}), l.useModules(),
							l.params.init && l.init(), l
					}
				}
				t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
				var s = {
					extendedDefaults: {
						configurable: !0
					},
					defaults: {
						configurable: !0
					},
					Class: {
						configurable: !0
					},
					$: {
						configurable: !0
					}
				};
				return i.prototype.slidesPerViewDynamic = function() {
					var e = this.params,
						t = this.slides,
						i = this.slidesGrid,
						s = this.size,
						n = this.activeIndex,
						a = 1;
					if (e.centeredSlides) {
						for (var r, o = t[n].swiperSlideSize, l = n + 1; l < t.length; l += 1) t[l] && !r && (a += 1, (o += t[l].swiperSlideSize) > s && (r = !0));
						for (var d = n - 1; d >= 0; d -= 1) t[d] && !r && (a += 1, (o += t[d].swiperSlideSize) > s && (r = !0))
					} else
						for (var h = n + 1; h < t.length; h += 1) i[h] - i[n] < s && (a += 1);
					return a
				}, i.prototype.update = function() {
					function e() {
						var e = t.rtlTranslate ? -1 * t.translate : t.translate,
							i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
						t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
					}
					var t = this;
					t && !t.destroyed && (t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update"))
				}, i.prototype.init = function() {
					this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
				}, i.prototype.destroy = function(e, t) {
					void 0 === e && (e = !0), void 0 === t && (t = !0);
					var i = this,
						s = i.params,
						n = i.$el,
						a = i.$wrapperEl,
						r = i.slides;
					i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
						i.off(e)
					}), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), h.deleteProps(i)), i.destroyed = !0
				}, i.extendDefaults = function(e) {
					h.extend(A, e)
				}, s.extendedDefaults.get = function() {
					return A
				}, s.defaults.get = function() {
					return C
				}, s.Class.get = function() {
					return t
				}, s.$.get = function() {
					return e
				}, Object.defineProperties(i, s), i
			}(u),
			z = {
				name: "device",
				proto: {
					device: x
				},
				static: {
					device: x
				}
			},
			$ = {
				name: "support",
				proto: {
					support: c
				},
				static: {
					support: c
				}
			},
			L = {
				name: "browser",
				proto: {
					browser: E
				},
				static: {
					browser: E
				}
			},
			P = {
				name: "resize",
				create: function() {
					var e = this;
					h.extend(e, {
						resize: {
							resizeHandler: function() {
								e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
							},
							orientationChangeHandler: function() {
								e && !e.destroyed && e.initialized && e.emit("orientationchange")
							}
						}
					})
				},
				on: {
					init: function() {
						n.addEventListener("resize", this.resize.resizeHandler), n.addEventListener("orientationchange", this.resize.orientationChangeHandler)
					},
					destroy: function() {
						n.removeEventListener("resize", this.resize.resizeHandler), n.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
					}
				}
			},
			I = {
				func: n.MutationObserver || n.WebkitMutationObserver,
				attach: function(e, t) {
					void 0 === t && (t = {});
					var i = this,
						s = new(0, I.func)(function(e) {
							e.forEach(function(e) {
								i.emit("observerUpdate", e)
							})
						});
					s.observe(e, {
						attributes: void 0 === t.attributes || t.attributes,
						childList: void 0 === t.childList || t.childList,
						characterData: void 0 === t.characterData || t.characterData
					}), i.observer.observers.push(s)
				},
				init: function() {
					if (c.observer && this.params.observer) {
						if (this.params.observeParents)
							for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
						this.observer.attach(this.$el[0], {
							childList: !1
						}), this.observer.attach(this.$wrapperEl[0], {
							attributes: !1
						})
					}
				},
				destroy: function() {
					this.observer.observers.forEach(function(e) {
						e.disconnect()
					}), this.observer.observers = []
				}
			},
			D = {
				name: "observer",
				params: {
					observer: !1,
					observeParents: !1
				},
				create: function() {
					h.extend(this, {
						observer: {
							init: I.init.bind(this),
							attach: I.attach.bind(this),
							destroy: I.destroy.bind(this),
							observers: []
						}
					})
				},
				on: {
					init: function() {
						this.observer.init()
					},
					destroy: function() {
						this.observer.destroy()
					}
				}
			},
			N = {
				update: function(e) {
					function t() {
						i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
					}
					var i = this,
						s = i.params,
						n = s.slidesPerView,
						a = s.slidesPerGroup,
						r = s.centeredSlides,
						o = i.virtual,
						l = o.from,
						d = o.to,
						c = o.slides,
						u = o.slidesGrid,
						p = o.renderSlide,
						f = o.offset;
					i.updateActiveIndex();
					var v, m, g, y = i.activeIndex || 0;
					v = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", r ? (m = Math.floor(n / 2) + a, g = Math.floor(n / 2) + a) : (m = n + (a - 1), g = a);
					var b = Math.max((y || 0) - g, 0),
						w = Math.min((y || 0) + m, c.length - 1),
						x = (i.slidesGrid[b] || 0) - (i.slidesGrid[0] || 0);
					if (h.extend(i.virtual, {
							from: b,
							to: w,
							offset: x,
							slidesGrid: i.slidesGrid
						}), l === b && d === w && !e) return i.slidesGrid !== u && x !== f && i.slides.css(v, x + "px"), void i.updateProgress();
					if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
						offset: x,
						from: b,
						to: w,
						slides: function() {
							for (var e = [], t = b; t <= w; t += 1) e.push(c[t]);
							return e
						}()
					}), void t();
					var T = [],
						S = [];
					if (e) i.$wrapperEl.find("." + i.params.slideClass).remove();
					else
						for (var E = l; E <= d; E += 1)(E < b || E > w) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + E + '"]').remove();
					for (var C = 0; C < c.length; C += 1) C >= b && C <= w && (void 0 === d || e ? S.push(C) : (C > d && S.push(C), C < l && T.push(C)));
					S.forEach(function(e) {
						i.$wrapperEl.append(p(c[e], e))
					}), T.sort(function(e, t) {
						return e < t
					}).forEach(function(e) {
						i.$wrapperEl.prepend(p(c[e], e))
					}), i.$wrapperEl.children(".swiper-slide").css(v, x + "px"), t()
				},
				renderSlide: function(t, i) {
					var s = this.params.virtual;
					if (s.cache && this.virtual.cache[i]) return this.virtual.cache[i];
					var n = e(s.renderSlide ? s.renderSlide.call(this, t, i) : '<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + "</div>");
					return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", i), s.cache && (this.virtual.cache[i] = n), n
				},
				appendSlide: function(e) {
					this.virtual.slides.push(e), this.virtual.update(!0)
				},
				prependSlide: function(e) {
					if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
						var t = this.virtual.cache,
							i = {};
						Object.keys(t).forEach(function(e) {
							i[e + 1] = t[e]
						}), this.virtual.cache = i
					}
					this.virtual.update(!0), this.slideNext(0)
				}
			},
			O = {
				name: "virtual",
				params: {
					virtual: {
						enabled: !1,
						slides: [],
						cache: !0,
						renderSlide: null,
						renderExternal: null
					}
				},
				create: function() {
					h.extend(this, {
						virtual: {
							update: N.update.bind(this),
							appendSlide: N.appendSlide.bind(this),
							prependSlide: N.prependSlide.bind(this),
							renderSlide: N.renderSlide.bind(this),
							slides: this.params.virtual.slides,
							cache: {}
						}
					})
				},
				on: {
					beforeInit: function() {
						if (this.params.virtual.enabled) {
							this.classNames.push(this.params.containerModifierClass + "virtual");
							var e = {
								watchSlidesProgress: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e), this.virtual.update()
						}
					},
					setTranslate: function() {
						this.params.virtual.enabled && this.virtual.update()
					}
				}
			},
			H = {
				handle: function(e) {
					var t = this.rtlTranslate,
						i = e;
					i.originalEvent && (i = i.originalEvent);
					var a = i.keyCode || i.charCode;
					if (!this.allowSlideNext && (this.isHorizontal() && 39 === a || this.isVertical() && 40 === a)) return !1;
					if (!this.allowSlidePrev && (this.isHorizontal() && 37 === a || this.isVertical() && 38 === a)) return !1;
					if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || s.activeElement && s.activeElement.nodeName && ("input" === s.activeElement.nodeName.toLowerCase() || "textarea" === s.activeElement.nodeName.toLowerCase()))) {
						if (this.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
							var r = !1;
							if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
							var o = n.innerWidth,
								l = n.innerHeight,
								d = this.$el.offset();
							t && (d.left -= this.$el[0].scrollLeft);
							for (var h = [
									[d.left, d.top],
									[d.left + this.width, d.top],
									[d.left, d.top + this.height],
									[d.left + this.width, d.top + this.height]
								], c = 0; c < h.length; c += 1) {
								var u = h[c];
								u[0] >= 0 && u[0] <= o && u[1] >= 0 && u[1] <= l && (r = !0)
							}
							if (!r) return
						}
						this.isHorizontal() ? (37 !== a && 39 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === a && !t || 37 === a && t) && this.slideNext(), (37 === a && !t || 39 === a && t) && this.slidePrev()) : (38 !== a && 40 !== a || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === a && this.slideNext(), 38 === a && this.slidePrev()), this.emit("keyPress", a)
					}
				},
				enable: function() {
					this.keyboard.enabled || (e(s).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
				},
				disable: function() {
					this.keyboard.enabled && (e(s).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
				}
			},
			B = {
				name: "keyboard",
				params: {
					keyboard: {
						enabled: !1,
						onlyInViewport: !0
					}
				},
				create: function() {
					h.extend(this, {
						keyboard: {
							enabled: !1,
							enable: H.enable.bind(this),
							disable: H.disable.bind(this),
							handle: H.handle.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.keyboard.enabled && this.keyboard.enable()
					},
					destroy: function() {
						this.keyboard.enabled && this.keyboard.disable()
					}
				}
			},
			j = {
				lastScrollTime: h.now(),
				event: n.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
					var e = "onwheel" in s;
					if (!e) {
						var t = s.createElement("div");
						t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
					}
					return !e && s.implementation && s.implementation.hasFeature && !0 !== s.implementation.hasFeature("", "") && (e = s.implementation.hasFeature("Events.wheel", "3.0")), e
				}() ? "wheel" : "mousewheel",
				normalize: function(e) {
					var t = 0,
						i = 0,
						s = 0,
						n = 0;
					return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
						spinX: t,
						spinY: i,
						pixelX: s,
						pixelY: n
					}
				},
				handleMouseEnter: function() {
					this.mouseEntered = !0
				},
				handleMouseLeave: function() {
					this.mouseEntered = !1
				},
				handle: function(e) {
					var t = e,
						i = this,
						s = i.params.mousewheel;
					if (!i.mouseEntered && !s.releaseOnEdges) return !0;
					t.originalEvent && (t = t.originalEvent);
					var a = 0,
						r = i.rtlTranslate ? -1 : 1,
						o = j.normalize(t);
					if (s.forceToAxis)
						if (i.isHorizontal()) {
							if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
							a = o.pixelX * r
						} else {
							if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
							a = o.pixelY
						}
					else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
					if (0 === a) return !0;
					if (s.invert && (a = -a), i.params.freeMode) {
						var l = i.getTranslate() + a * s.sensitivity,
							d = i.isBeginning,
							c = i.isEnd;
						if (l >= i.minTranslate() && (l = i.minTranslate()), l <= i.maxTranslate() && (l = i.maxTranslate()), i.setTransition(0), i.setTranslate(l), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!d && i.isBeginning || !c && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = h.nextTick(function() {
								i.slideToClosest()
							}, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), l === i.minTranslate() || l === i.maxTranslate()) return !0
					} else {
						if (h.now() - i.mousewheel.lastScrollTime > 60)
							if (a < 0)
								if (i.isEnd && !i.params.loop || i.animating) {
									if (s.releaseOnEdges) return !0
								} else i.slideNext(), i.emit("scroll", t);
						else if (i.isBeginning && !i.params.loop || i.animating) {
							if (s.releaseOnEdges) return !0
						} else i.slidePrev(), i.emit("scroll", t);
						i.mousewheel.lastScrollTime = (new n.Date).getTime()
					}
					return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
				},
				enable: function() {
					if (!j.event) return !1;
					if (this.mousewheel.enabled) return !1;
					var t = this.$el;
					return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(j.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
				},
				disable: function() {
					if (!j.event) return !1;
					if (!this.mousewheel.enabled) return !1;
					var t = this.$el;
					return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.off(j.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
				}
			},
			F = {
				update: function() {
					var e = this.params.navigation;
					if (!this.params.loop) {
						var t = this.navigation,
							i = t.$nextEl,
							s = t.$prevEl;
						s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
					}
				},
				init: function() {
					var t, i, s = this,
						n = s.params.navigation;
					(n.nextEl || n.prevEl) && (n.nextEl && (t = e(n.nextEl), s.params.uniqueNavElements && "string" == typeof n.nextEl && t.length > 1 && 1 === s.$el.find(n.nextEl).length && (t = s.$el.find(n.nextEl))), n.prevEl && (i = e(n.prevEl), s.params.uniqueNavElements && "string" == typeof n.prevEl && i.length > 1 && 1 === s.$el.find(n.prevEl).length && (i = s.$el.find(n.prevEl))), t && t.length > 0 && t.on("click", function(e) {
						e.preventDefault(), s.isEnd && !s.params.loop || s.slideNext()
					}), i && i.length > 0 && i.on("click", function(e) {
						e.preventDefault(), s.isBeginning && !s.params.loop || s.slidePrev()
					}), h.extend(s.navigation, {
						$nextEl: t,
						nextEl: t && t[0],
						$prevEl: i,
						prevEl: i && i[0]
					}))
				},
				destroy: function() {
					var e = this.navigation,
						t = e.$nextEl,
						i = e.$prevEl;
					t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
				}
			},
			q = {
				update: function() {
					var t = this.rtl,
						i = this.params.pagination;
					if (i.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
						var s, n = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
							a = this.pagination.$el,
							r = this.params.loop ? Math.ceil((n - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
						if (this.params.loop ? ((s = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > n - 1 - 2 * this.loopedSlides && (s -= n - 2 * this.loopedSlides), s > r - 1 && (s -= r), s < 0 && "bullets" !== this.params.paginationType && (s = r + s)) : s = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === i.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
							var o, l, d, h = this.pagination.bullets;
							if (i.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += s - this.previousIndex, this.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = s - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, i.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), a.length > 1) h.each(function(t, n) {
								var a = e(n),
									r = a.index();
								r === s && a.addClass(i.bulletActiveClass), i.dynamicBullets && (r >= o && r <= l && a.addClass(i.bulletActiveClass + "-main"), r === o && a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
							});
							else if (h.eq(s).addClass(i.bulletActiveClass), i.dynamicBullets) {
								for (var c = h.eq(o), u = h.eq(l), p = o; p <= l; p += 1) h.eq(p).addClass(i.bulletActiveClass + "-main");
								c.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), u.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
							}
							if (i.dynamicBullets) {
								var f = Math.min(h.length, i.dynamicMainBullets + 4),
									v = (this.pagination.bulletSize * f - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
									m = t ? "right" : "left";
								h.css(this.isHorizontal() ? m : "top", v + "px")
							}
						}
						if ("fraction" === i.type && (a.find("." + i.currentClass).text(s + 1), a.find("." + i.totalClass).text(r)), "progressbar" === i.type) {
							var g = (s + 1) / r,
								y = g,
								b = 1;
							this.isHorizontal() || (b = g, y = 1), a.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + y + ") scaleY(" + b + ")").transition(this.params.speed)
						}
						"custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(this, s + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)
					}
				},
				render: function() {
					var e = this.params.pagination;
					if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
						var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
							i = this.pagination.$el,
							s = "";
						if ("bullets" === e.type) {
							for (var n = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < n; a += 1) e.renderBullet ? s += e.renderBullet.call(this, a, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
							i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
						}
						"fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
					}
				},
				init: function() {
					var t = this,
						i = t.params.pagination;
					if (i.el) {
						var s = e(i.el);
						0 !== s.length && (t.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.$el.find(i.el).length && (s = t.$el.find(i.el)), "bullets" === i.type && i.clickable && s.addClass(i.clickableClass), s.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (s.addClass("" + i.modifierClass + i.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), i.clickable && s.on("click", "." + i.bulletClass, function(i) {
							i.preventDefault();
							var s = e(this).index() * t.params.slidesPerGroup;
							t.params.loop && (s += t.loopedSlides), t.slideTo(s)
						}), h.extend(t.pagination, {
							$el: s,
							el: s[0]
						}))
					}
				},
				destroy: function() {
					var e = this.params.pagination;
					if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
						var t = this.pagination.$el;
						t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
					}
				}
			},
			R = {
				setTranslate: function() {
					if (this.params.scrollbar.el && this.scrollbar.el) {
						var e = this.scrollbar,
							t = this.rtlTranslate,
							i = this.progress,
							s = e.dragSize,
							n = e.trackSize,
							a = e.$dragEl,
							r = e.$el,
							o = this.params.scrollbar,
							l = s,
							d = (n - s) * i;
						t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > n && (l = n + d) : d < 0 ? (l = s + d, d = 0) : d + s > n && (l = n - d), this.isHorizontal() ? (c.transforms3d ? a.transform("translate3d(" + d + "px, 0, 0)") : a.transform("translateX(" + d + "px)"), a[0].style.width = l + "px") : (c.transforms3d ? a.transform("translate3d(0px, " + d + "px, 0)") : a.transform("translateY(" + d + "px)"), a[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
							r[0].style.opacity = 0, r.transition(400)
						}, 1e3))
					}
				},
				setTransition: function(e) {
					this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
				},
				updateSize: function() {
					if (this.params.scrollbar.el && this.scrollbar.el) {
						var e = this.scrollbar,
							t = e.$dragEl,
							i = e.$el;
						t[0].style.width = "", t[0].style.height = "";
						var s, n = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
							a = this.size / this.virtualSize,
							r = a * (n / this.size);
						s = "auto" === this.params.scrollbar.dragSize ? n * a : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = a >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), h.extend(e, {
							trackSize: n,
							divider: a,
							moveDivider: r,
							dragSize: s
						}), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
					}
				},
				setDragPosition: function(e) {
					var t, i = this.scrollbar,
						s = this.rtlTranslate,
						n = i.$el,
						a = i.dragSize,
						r = i.trackSize;
					t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (r - a), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
					var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
					this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
				},
				onDragStart: function(e) {
					var t = this.params.scrollbar,
						i = this.scrollbar,
						s = this.$wrapperEl,
						n = i.$el,
						a = i.$dragEl;
					this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), n.transition(0), t.hide && n.css("opacity", 1), this.emit("scrollbarDragStart", e)
				},
				onDragMove: function(e) {
					var t = this.scrollbar,
						i = this.$wrapperEl,
						s = t.$el,
						n = t.$dragEl;
					this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), n.transition(0), this.emit("scrollbarDragMove", e))
				},
				onDragEnd: function(e) {
					var t = this.params.scrollbar,
						i = this.scrollbar.$el;
					this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = h.nextTick(function() {
						i.css("opacity", 0), i.transition(400)
					}, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
				},
				enableDraggable: function() {
					if (this.params.scrollbar.el) {
						var e = this.scrollbar,
							t = this.touchEvents,
							i = this.touchEventsDesktop,
							n = this.params,
							a = e.$el[0],
							r = !(!c.passiveListener || !n.passiveListener) && {
								passive: !1,
								capture: !1
							},
							o = !(!c.passiveListener || !n.passiveListener) && {
								passive: !0,
								capture: !1
							};
						c.touch || !c.pointerEvents && !c.prefixedPointerEvents ? (c.touch && (a.addEventListener(t.start, this.scrollbar.onDragStart, r), a.addEventListener(t.move, this.scrollbar.onDragMove, r), a.addEventListener(t.end, this.scrollbar.onDragEnd, o)), (n.simulateTouch && !x.ios && !x.android || n.simulateTouch && !c.touch && x.ios) && (a.addEventListener("mousedown", this.scrollbar.onDragStart, r), s.addEventListener("mousemove", this.scrollbar.onDragMove, r), s.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (a.addEventListener(i.start, this.scrollbar.onDragStart, r), s.addEventListener(i.move, this.scrollbar.onDragMove, r), s.addEventListener(i.end, this.scrollbar.onDragEnd, o))
					}
				},
				disableDraggable: function() {
					if (this.params.scrollbar.el) {
						var e = this.scrollbar,
							t = this.touchEvents,
							i = this.touchEventsDesktop,
							n = this.params,
							a = e.$el[0],
							r = !(!c.passiveListener || !n.passiveListener) && {
								passive: !1,
								capture: !1
							},
							o = !(!c.passiveListener || !n.passiveListener) && {
								passive: !0,
								capture: !1
							};
						c.touch || !c.pointerEvents && !c.prefixedPointerEvents ? (c.touch && (a.removeEventListener(t.start, this.scrollbar.onDragStart, r), a.removeEventListener(t.move, this.scrollbar.onDragMove, r), a.removeEventListener(t.end, this.scrollbar.onDragEnd, o)), (n.simulateTouch && !x.ios && !x.android || n.simulateTouch && !c.touch && x.ios) && (a.removeEventListener("mousedown", this.scrollbar.onDragStart, r), s.removeEventListener("mousemove", this.scrollbar.onDragMove, r), s.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (a.removeEventListener(i.start, this.scrollbar.onDragStart, r), s.removeEventListener(i.move, this.scrollbar.onDragMove, r), s.removeEventListener(i.end, this.scrollbar.onDragEnd, o))
					}
				},
				init: function() {
					if (this.params.scrollbar.el) {
						var t = this.scrollbar,
							i = this.$el,
							s = this.params.scrollbar,
							n = e(s.el);
						this.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el));
						var a = n.find("." + this.params.scrollbar.dragClass);
						0 === a.length && (a = e('<div class="' + this.params.scrollbar.dragClass + '"></div>'), n.append(a)), h.extend(t, {
							$el: n,
							el: n[0],
							$dragEl: a,
							dragEl: a[0]
						}), s.draggable && t.enableDraggable()
					}
				},
				destroy: function() {
					this.scrollbar.disableDraggable()
				}
			},
			W = {
				setTransform: function(t, i) {
					var s = this.rtl,
						n = e(t),
						a = s ? -1 : 1,
						r = n.attr("data-swiper-parallax") || "0",
						o = n.attr("data-swiper-parallax-x"),
						l = n.attr("data-swiper-parallax-y"),
						d = n.attr("data-swiper-parallax-scale"),
						h = n.attr("data-swiper-parallax-opacity");
					if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * a + "%" : o * i * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", void 0 !== h && null !== h) {
						var c = h - (h - 1) * (1 - Math.abs(i));
						n[0].style.opacity = c
					}
					if (void 0 === d || null === d) n.transform("translate3d(" + o + ", " + l + ", 0px)");
					else {
						var u = d - (d - 1) * (1 - Math.abs(i));
						n.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + u + ")")
					}
				},
				setTranslate: function() {
					var t = this,
						i = t.$el,
						s = t.slides,
						n = t.progress,
						a = t.snapGrid;
					i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
						t.parallax.setTransform(i, n)
					}), s.each(function(i, s) {
						var r = s.progress;
						t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (r += Math.ceil(i / 2) - n * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), e(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
							t.parallax.setTransform(i, r)
						})
					})
				},
				setTransition: function(t) {
					void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(i, s) {
						var n = e(s),
							a = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
						0 === t && (a = 0), n.transition(a)
					})
				}
			},
			_ = {
				getDistanceBetweenTouches: function(e) {
					if (e.targetTouches.length < 2) return 1;
					var t = e.targetTouches[0].pageX,
						i = e.targetTouches[0].pageY,
						s = e.targetTouches[1].pageX,
						n = e.targetTouches[1].pageY;
					return Math.sqrt(Math.pow(s - t, 2) + Math.pow(n - i, 2))
				},
				onGestureStart: function(t) {
					var i = this.params.zoom,
						s = this.zoom,
						n = s.gesture;
					if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !c.gestures) {
						if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
						s.fakeGestureTouched = !0, n.scaleStart = _.getDistanceBetweenTouches(t)
					}
					n.$slideEl && n.$slideEl.length || (n.$slideEl = e(t.target).closest(".swiper-slide"), 0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), this.zoom.isScaling = !0) : n.$imageEl = void 0
				},
				onGestureChange: function(e) {
					var t = this.params.zoom,
						i = this.zoom,
						s = i.gesture;
					if (!c.gestures) {
						if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
						i.fakeGestureMoved = !0, s.scaleMove = _.getDistanceBetweenTouches(e)
					}
					s.$imageEl && 0 !== s.$imageEl.length && (c.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
				},
				onGestureEnd: function(e) {
					var t = this.params.zoom,
						i = this.zoom,
						s = i.gesture;
					if (!c.gestures) {
						if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
						if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
						i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
					}
					s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
				},
				onTouchStart: function(e) {
					var t = this.zoom,
						i = t.gesture,
						s = t.image;
					i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (x.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
				},
				onTouchMove: function(e) {
					var t = this.zoom,
						i = t.gesture,
						s = t.image,
						n = t.velocity;
					if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
						s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = h.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = h.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
						var a = s.width * t.scale,
							r = s.height * t.scale;
						if (!(a < i.slideWidth && r < i.slideHeight)) {
							if (s.minX = Math.min(i.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - r / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
								if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
								if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
							}
							e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
						}
					}
				},
				onTouchEnd: function() {
					var e = this.zoom,
						t = e.gesture,
						i = e.image,
						s = e.velocity;
					if (t.$imageEl && 0 !== t.$imageEl.length) {
						if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
						i.isTouched = !1, i.isMoved = !1;
						var n = 300,
							a = 300,
							r = s.x * n,
							o = i.currentX + r,
							l = s.y * a,
							d = i.currentY + l;
						0 !== s.x && (n = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (a = Math.abs((d - i.currentY) / s.y));
						var h = Math.max(n, a);
						i.currentX = o, i.currentY = d;
						var c = i.width * e.scale,
							u = i.height * e.scale;
						i.minX = Math.min(t.slideWidth / 2 - c / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
					}
				},
				onTransitionEnd: function() {
					var e = this.zoom,
						t = e.gesture;
					t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
				},
				toggle: function(e) {
					var t = this.zoom;
					t.scale && 1 !== t.scale ? t.out() : t.in(e)
				},
				in: function(t) {
					var i, s, n, a, r, o, l, d, h, c, u, p, f, v, m, g, y = this.zoom,
						b = this.params.zoom,
						w = y.gesture,
						x = y.image;
					w.$slideEl || (w.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === x.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = x.touchesStart.x, s = x.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio,
						y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, t ? (m = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, n = w.$slideEl.offset().left + m / 2 - i, a = w.$slideEl.offset().top + g / 2 - s, l = w.$imageEl[0].offsetWidth, d = w.$imageEl[0].offsetHeight, h = l * y.scale, c = d * y.scale, f = -(u = Math.min(m / 2 - h / 2, 0)), v = -(p = Math.min(g / 2 - c / 2, 0)), r = n * y.scale, o = a * y.scale, r < u && (r = u), r > f && (r = f), o < p && (o = p), o > v && (o = v)) : (r = 0, o = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
				},
				out: function() {
					var t = this.zoom,
						i = this.params.zoom,
						s = t.gesture;
					s.$slideEl || (s.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (t.scale = 1, t.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
				},
				enable: function() {
					var e = this.zoom;
					if (!e.enabled) {
						e.enabled = !0;
						var t = !("touchstart" !== this.touchEvents.start || !c.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						c.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
					}
				},
				disable: function() {
					var e = this.zoom;
					if (e.enabled) {
						this.zoom.enabled = !1;
						var t = !("touchstart" !== this.touchEvents.start || !c.passiveListener || !this.params.passiveListeners) && {
							passive: !0,
							capture: !1
						};
						c.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
					}
				}
			},
			X = {
				loadInSlide: function(t, i) {
					void 0 === i && (i = !0);
					var s = this,
						n = s.params.lazy;
					if (void 0 !== t && 0 !== s.slides.length) {
						var a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children("." + s.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : s.slides.eq(t),
							r = a.find("." + n.elementClass + ":not(." + n.loadedClass + "):not(." + n.loadingClass + ")");
						!a.hasClass(n.elementClass) || a.hasClass(n.loadedClass) || a.hasClass(n.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each(function(t, r) {
							var o = e(r);
							o.addClass(n.loadingClass);
							var l = o.attr("data-background"),
								d = o.attr("data-src"),
								h = o.attr("data-srcset"),
								c = o.attr("data-sizes");
							s.loadImage(o[0], d || l, h, c, !1, function() {
								if (void 0 !== s && null !== s && s && (!s || s.params) && !s.destroyed) {
									if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), a.find("." + n.preloaderClass).remove(), s.params.loop && i) {
										var e = a.attr("data-swiper-slide-index");
										if (a.hasClass(s.params.slideDuplicateClass)) {
											var t = s.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + s.params.slideDuplicateClass + ")");
											s.lazy.loadInSlide(t.index(), !1)
										} else {
											var r = s.$wrapperEl.children("." + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
											s.lazy.loadInSlide(r.index(), !1)
										}
									}
									s.emit("lazyImageReady", a[0], o[0])
								}
							}), s.emit("lazyImageLoad", a[0], o[0])
						})
					}
				},
				load: function() {
					function t(e) {
						if (l) {
							if (n.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
						} else if (r[e]) return !0;
						return !1
					}

					function i(t) {
						return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
					}
					var s = this,
						n = s.$wrapperEl,
						a = s.params,
						r = s.slides,
						o = s.activeIndex,
						l = s.virtual && a.virtual.enabled,
						d = a.lazy,
						h = a.slidesPerView;
					if ("auto" === h && (h = 0), s.lazy.initialImageLoaded || (s.lazy.initialImageLoaded = !0), s.params.watchSlidesVisibility) n.children("." + a.slideVisibleClass).each(function(t, i) {
						var n = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
						s.lazy.loadInSlide(n)
					});
					else if (h > 1)
						for (var c = o; c < o + h; c += 1) t(c) && s.lazy.loadInSlide(c);
					else s.lazy.loadInSlide(o);
					if (d.loadPrevNext)
						if (h > 1 || d.loadPrevNextAmount && d.loadPrevNextAmount > 1) {
							for (var u = d.loadPrevNextAmount, p = h, f = Math.min(o + p + Math.max(u, p), r.length), v = Math.max(o - Math.max(p, u), 0), m = o + h; m < f; m += 1) t(m) && s.lazy.loadInSlide(m);
							for (var g = v; g < o; g += 1) t(g) && s.lazy.loadInSlide(g)
						} else {
							var y = n.children("." + a.slideNextClass);
							y.length > 0 && s.lazy.loadInSlide(i(y));
							var b = n.children("." + a.slidePrevClass);
							b.length > 0 && s.lazy.loadInSlide(i(b))
						}
				}
			},
			Y = {
				LinearSpline: function(e, t) {
					var i, s, n, a, r, o = function(e, t) {
						for (s = -1, i = e.length; i - s > 1;) e[n = i + s >> 1] <= t ? s = n : i = n;
						return i
					};
					return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
						return e ? (r = o(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
					}, this
				},
				getInterpolateFunction: function(e) {
					this.controller.spline || (this.controller.spline = this.params.loop ? new Y.LinearSpline(this.slidesGrid, e.slidesGrid) : new Y.LinearSpline(this.snapGrid, e.snapGrid))
				},
				setTranslate: function(e, t) {
					function i(e) {
						var t = a.rtlTranslate ? -a.translate : a.translate;
						"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), n = -a.controller.spline.interpolate(-t)), n && "container" !== a.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), n = (t - a.minTranslate()) * s + e.minTranslate()), a.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, a), e.updateActiveIndex(), e.updateSlidesClasses()
					}
					var s, n, a = this,
						r = a.controller.control;
					if (Array.isArray(r))
						for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof M && i(r[o]);
					else r instanceof M && t !== r && i(r)
				},
				setTransition: function(e, t) {
					function i(t) {
						t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
							a && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
						}))
					}
					var s, n = this,
						a = n.controller.control;
					if (Array.isArray(a))
						for (s = 0; s < a.length; s += 1) a[s] !== t && a[s] instanceof M && i(a[s]);
					else a instanceof M && t !== a && i(a)
				}
			},
			V = {
				makeElFocusable: function(e) {
					return e.attr("tabIndex", "0"), e
				},
				addElRole: function(e, t) {
					return e.attr("role", t), e
				},
				addElLabel: function(e, t) {
					return e.attr("aria-label", t), e
				},
				disableEl: function(e) {
					return e.attr("aria-disabled", !0), e
				},
				enableEl: function(e) {
					return e.attr("aria-disabled", !1), e
				},
				onEnterKey: function(t) {
					var i = this.params.a11y;
					if (13 === t.keyCode) {
						var s = e(t.target);
						this.navigation && this.navigation.$nextEl && s.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)), this.navigation && this.navigation.$prevEl && s.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)), this.pagination && s.is("." + this.params.pagination.bulletClass) && s[0].click()
					}
				},
				notify: function(e) {
					var t = this.a11y.liveRegion;
					0 !== t.length && (t.html(""), t.html(e))
				},
				updateNavigation: function() {
					if (!this.params.loop) {
						var e = this.navigation,
							t = e.$nextEl,
							i = e.$prevEl;
						i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
					}
				},
				updatePagination: function() {
					var t = this,
						i = t.params.a11y;
					t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(s, n) {
						var a = e(n);
						t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, i.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
					})
				},
				init: function() {
					this.$el.append(this.a11y.liveRegion);
					var e, t, i = this.params.a11y;
					this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
				},
				destroy: function() {
					var e, t;
					this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
				}
			},
			G = {
				init: function() {
					if (this.params.history) {
						if (!n.history || !n.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
						var e = this.history;
						e.initialized = !0, e.paths = G.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || n.addEventListener("popstate", this.history.setHistoryPopState))
					}
				},
				destroy: function() {
					this.params.history.replaceState || n.removeEventListener("popstate", this.history.setHistoryPopState)
				},
				setHistoryPopState: function() {
					this.history.paths = G.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
				},
				getPathValues: function() {
					var e = n.location.pathname.slice(1).split("/").filter(function(e) {
							return "" !== e
						}),
						t = e.length;
					return {
						key: e[t - 2],
						value: e[t - 1]
					}
				},
				setHistory: function(e, t) {
					if (this.history.initialized && this.params.history.enabled) {
						var i = this.slides.eq(t),
							s = G.slugify(i.attr("data-history"));
						n.location.pathname.includes(e) || (s = e + "/" + s);
						var a = n.history.state;
						a && a.value === s || (this.params.history.replaceState ? n.history.replaceState({
							value: s
						}, null, s) : n.history.pushState({
							value: s
						}, null, s))
					}
				},
				slugify: function(e) {
					return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
				},
				scrollToSlide: function(e, t, i) {
					if (t)
						for (var s = 0, n = this.slides.length; s < n; s += 1) {
							var a = this.slides.eq(s);
							if (G.slugify(a.attr("data-history")) === t && !a.hasClass(this.params.slideDuplicateClass)) {
								var r = a.index();
								this.slideTo(r, e, i)
							}
						} else this.slideTo(0, e, i)
				}
			},
			U = {
				onHashCange: function() {
					var e = s.location.hash.replace("#", "");
					e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
				},
				setHash: function() {
					if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
						if (this.params.hashNavigation.replaceState && n.history && n.history.replaceState) n.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
						else {
							var e = this.slides.eq(this.activeIndex),
								t = e.attr("data-hash") || e.attr("data-history");
							s.location.hash = t || ""
						}
				},
				init: function() {
					if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
						this.hashNavigation.initialized = !0;
						var t = s.location.hash.replace("#", "");
						if (t)
							for (var i = 0, a = this.slides.length; i < a; i += 1) {
								var r = this.slides.eq(i);
								if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
									var o = r.index();
									this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
								}
							}
						this.params.hashNavigation.watchState && e(n).on("hashchange", this.hashNavigation.onHashCange)
					}
				},
				destroy: function() {
					this.params.hashNavigation.watchState && e(n).off("hashchange", this.hashNavigation.onHashCange)
				}
			},
			Q = {
				run: function() {
					var e = this,
						t = e.slides.eq(e.activeIndex),
						i = e.params.autoplay.delay;
					t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = h.nextTick(function() {
						e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
					}, i)
				},
				start: function() {
					return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
				},
				stop: function() {
					return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
				},
				pause: function(e) {
					var t = this;
					t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
						t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
					}) : (t.autoplay.paused = !1, t.autoplay.run())))
				}
			},
			K = {
				setTranslate: function() {
					for (var e = this.slides, t = 0; t < e.length; t += 1) {
						var i = this.slides.eq(t),
							s = -i[0].swiperSlideOffset;
						this.params.virtualTranslate || (s -= this.translate);
						var n = 0;
						this.isHorizontal() || (n = s, s = 0);
						var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
						i.css({
							opacity: a
						}).transform("translate3d(" + s + "px, " + n + "px, 0px)")
					}
				},
				setTransition: function(e) {
					var t = this,
						i = t.slides,
						s = t.$wrapperEl;
					if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
						var n = !1;
						i.transitionEnd(function() {
							if (!n && t && !t.destroyed) {
								n = !0, t.animating = !1;
								for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
							}
						})
					}
				}
			},
			J = {
				setTranslate: function() {
					var t, i = this.$el,
						s = this.$wrapperEl,
						n = this.slides,
						a = this.width,
						r = this.height,
						o = this.rtlTranslate,
						l = this.size,
						d = this.params.cubeEffect,
						h = this.isHorizontal(),
						c = this.virtual && this.params.virtual.enabled,
						u = 0;
					d.shadow && (h ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), s.append(t)), t.css({
						height: a + "px"
					})) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
					for (var p = 0; p < n.length; p += 1) {
						var f = n.eq(p),
							v = p;
						c && (v = parseInt(f.attr("data-swiper-slide-index"), 10));
						var m = 90 * v,
							g = Math.floor(m / 360);
						o && (m = -m, g = Math.floor(-m / 360));
						var y = Math.max(Math.min(f[0].progress, 1), -1),
							b = 0,
							w = 0,
							x = 0;
						v % 4 == 0 ? (b = 4 * -g * l, x = 0) : (v - 1) % 4 == 0 ? (b = 0, x = 4 * -g * l) : (v - 2) % 4 == 0 ? (b = l + 4 * g * l, x = l) : (v - 3) % 4 == 0 && (b = -l, x = 3 * l + 4 * l * g), o && (b = -b), h || (w = b, b = 0);
						var T = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
						if (y <= 1 && y > -1 && (u = 90 * v + 90 * y, o && (u = 90 * -v - 90 * y)), f.transform(T), d.slideShadows) {
							var S = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
								C = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
							0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = Math.max(-y, 0)), C.length && (C[0].style.opacity = Math.max(y, 0))
						}
					}
					if (s.css({
							"-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
							"-moz-transform-origin": "50% 50% -" + l / 2 + "px",
							"-ms-transform-origin": "50% 50% -" + l / 2 + "px",
							"transform-origin": "50% 50% -" + l / 2 + "px"
						}), d.shadow)
						if (h) t.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
						else {
							var k = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
								A = 1.5 - (Math.sin(2 * k * Math.PI / 360) / 2 + Math.cos(2 * k * Math.PI / 360) / 2),
								M = d.shadowScale,
								z = d.shadowScale / A,
								$ = d.shadowOffset;
							t.transform("scale3d(" + M + ", 1, " + z + ") translate3d(0px, " + (r / 2 + $) + "px, " + -r / 2 / z + "px) rotateX(-90deg)")
						}
					var L = E.isSafari || E.isUiWebView ? -l / 2 : 0;
					s.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
				},
				setTransition: function(e) {
					var t = this.$el;
					this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
				}
			},
			Z = {
				setTranslate: function() {
					for (var t = this.slides, i = this.rtlTranslate, s = 0; s < t.length; s += 1) {
						var n = t.eq(s),
							a = n[0].progress;
						this.params.flipEffect.limitRotation && (a = Math.max(Math.min(n[0].progress, 1), -1));
						var r = -180 * a,
							o = 0,
							l = -n[0].swiperSlideOffset,
							d = 0;
						if (this.isHorizontal() ? i && (r = -r) : (d = l, l = 0, o = -r, r = 0), n[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, this.params.flipEffect.slideShadows) {
							var h = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
								c = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
							0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(h)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(c)), h.length && (h[0].style.opacity = Math.max(-a, 0)), c.length && (c[0].style.opacity = Math.max(a, 0))
						}
						n.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)")
					}
				},
				setTransition: function(e) {
					var t = this,
						i = t.slides,
						s = t.activeIndex,
						n = t.$wrapperEl;
					if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
						var a = !1;
						i.eq(s).transitionEnd(function() {
							if (!a && t && !t.destroyed) {
								a = !0, t.animating = !1;
								for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
							}
						})
					}
				}
			},
			ee = {
				setTranslate: function() {
					for (var t = this.width, i = this.height, s = this.slides, n = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? t / 2 - l : i / 2 - l, h = o ? r.rotate : -r.rotate, u = r.depth, p = 0, f = s.length; p < f; p += 1) {
						var v = s.eq(p),
							m = a[p],
							g = (d - v[0].swiperSlideOffset - m / 2) / m * r.modifier,
							y = o ? h * g : 0,
							b = o ? 0 : h * g,
							w = -u * Math.abs(g),
							x = o ? 0 : r.stretch * g,
							T = o ? r.stretch * g : 0;
						Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
						var S = "translate3d(" + T + "px," + x + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
						if (v.transform(S), v[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
							var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
								C = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
							0 === E.length && (E = e('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(C)), E.length && (E[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
						}
					}(c.pointerEvents || c.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = d + "px 50%")
				},
				setTransition: function(e) {
					this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
				}
			},
			te = [z, $, L, P, D, O, B, {
				name: "mousewheel",
				params: {
					mousewheel: {
						enabled: !1,
						releaseOnEdges: !1,
						invert: !1,
						forceToAxis: !1,
						sensitivity: 1,
						eventsTarged: "container"
					}
				},
				create: function() {
					h.extend(this, {
						mousewheel: {
							enabled: !1,
							enable: j.enable.bind(this),
							disable: j.disable.bind(this),
							handle: j.handle.bind(this),
							handleMouseEnter: j.handleMouseEnter.bind(this),
							handleMouseLeave: j.handleMouseLeave.bind(this),
							lastScrollTime: h.now()
						}
					})
				},
				on: {
					init: function() {
						this.params.mousewheel.enabled && this.mousewheel.enable()
					},
					destroy: function() {
						this.mousewheel.enabled && this.mousewheel.disable()
					}
				}
			}, {
				name: "navigation",
				params: {
					navigation: {
						nextEl: null,
						prevEl: null,
						hideOnClick: !1,
						disabledClass: "swiper-button-disabled",
						hiddenClass: "swiper-button-hidden",
						lockClass: "swiper-button-lock"
					}
				},
				create: function() {
					h.extend(this, {
						navigation: {
							init: F.init.bind(this),
							update: F.update.bind(this),
							destroy: F.destroy.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.navigation.init(), this.navigation.update()
					},
					toEdge: function() {
						this.navigation.update()
					},
					fromEdge: function() {
						this.navigation.update()
					},
					destroy: function() {
						this.navigation.destroy()
					},
					click: function(t) {
						var i = this.navigation,
							s = i.$nextEl,
							n = i.$prevEl;
						!this.params.navigation.hideOnClick || e(t.target).is(n) || e(t.target).is(s) || (s && s.toggleClass(this.params.navigation.hiddenClass), n && n.toggleClass(this.params.navigation.hiddenClass))
					}
				}
			}, {
				name: "pagination",
				params: {
					pagination: {
						el: null,
						bulletElement: "span",
						clickable: !1,
						hideOnClick: !1,
						renderBullet: null,
						renderProgressbar: null,
						renderFraction: null,
						renderCustom: null,
						type: "bullets",
						dynamicBullets: !1,
						dynamicMainBullets: 1,
						bulletClass: "swiper-pagination-bullet",
						bulletActiveClass: "swiper-pagination-bullet-active",
						modifierClass: "swiper-pagination-",
						currentClass: "swiper-pagination-current",
						totalClass: "swiper-pagination-total",
						hiddenClass: "swiper-pagination-hidden",
						progressbarFillClass: "swiper-pagination-progressbar-fill",
						clickableClass: "swiper-pagination-clickable",
						lockClass: "swiper-pagination-lock"
					}
				},
				create: function() {
					h.extend(this, {
						pagination: {
							init: q.init.bind(this),
							render: q.render.bind(this),
							update: q.update.bind(this),
							destroy: q.destroy.bind(this),
							dynamicBulletIndex: 0
						}
					})
				},
				on: {
					init: function() {
						this.pagination.init(), this.pagination.render(), this.pagination.update()
					},
					activeIndexChange: function() {
						this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
					},
					snapIndexChange: function() {
						this.params.loop || this.pagination.update()
					},
					slidesLengthChange: function() {
						this.params.loop && (this.pagination.render(), this.pagination.update())
					},
					snapGridLengthChange: function() {
						this.params.loop || (this.pagination.render(), this.pagination.update())
					},
					destroy: function() {
						this.pagination.destroy()
					},
					click: function(t) {
						this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !e(t.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
					}
				}
			}, {
				name: "scrollbar",
				params: {
					scrollbar: {
						el: null,
						dragSize: "auto",
						hide: !1,
						draggable: !1,
						snapOnRelease: !0,
						lockClass: "swiper-scrollbar-lock",
						dragClass: "swiper-scrollbar-drag"
					}
				},
				create: function() {
					h.extend(this, {
						scrollbar: {
							init: R.init.bind(this),
							destroy: R.destroy.bind(this),
							updateSize: R.updateSize.bind(this),
							setTranslate: R.setTranslate.bind(this),
							setTransition: R.setTransition.bind(this),
							enableDraggable: R.enableDraggable.bind(this),
							disableDraggable: R.disableDraggable.bind(this),
							setDragPosition: R.setDragPosition.bind(this),
							onDragStart: R.onDragStart.bind(this),
							onDragMove: R.onDragMove.bind(this),
							onDragEnd: R.onDragEnd.bind(this),
							isTouched: !1,
							timeout: null,
							dragTimeout: null
						}
					})
				},
				on: {
					init: function() {
						this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
					},
					update: function() {
						this.scrollbar.updateSize()
					},
					resize: function() {
						this.scrollbar.updateSize()
					},
					observerUpdate: function() {
						this.scrollbar.updateSize()
					},
					setTranslate: function() {
						this.scrollbar.setTranslate()
					},
					setTransition: function(e) {
						this.scrollbar.setTransition(e)
					},
					destroy: function() {
						this.scrollbar.destroy()
					}
				}
			}, {
				name: "parallax",
				params: {
					parallax: {
						enabled: !1
					}
				},
				create: function() {
					h.extend(this, {
						parallax: {
							setTransform: W.setTransform.bind(this),
							setTranslate: W.setTranslate.bind(this),
							setTransition: W.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
					},
					init: function() {
						this.params.parallax && this.parallax.setTranslate()
					},
					setTranslate: function() {
						this.params.parallax && this.parallax.setTranslate()
					},
					setTransition: function(e) {
						this.params.parallax && this.parallax.setTransition(e)
					}
				}
			}, {
				name: "zoom",
				params: {
					zoom: {
						enabled: !1,
						maxRatio: 3,
						minRatio: 1,
						toggle: !0,
						containerClass: "swiper-zoom-container",
						zoomedSlideClass: "swiper-slide-zoomed"
					}
				},
				create: function() {
					var e = this,
						t = {
							enabled: !1,
							scale: 1,
							currentScale: 1,
							isScaling: !1,
							gesture: {
								$slideEl: void 0,
								slideWidth: void 0,
								slideHeight: void 0,
								$imageEl: void 0,
								$imageWrapEl: void 0,
								maxRatio: 3
							},
							image: {
								isTouched: void 0,
								isMoved: void 0,
								currentX: void 0,
								currentY: void 0,
								minX: void 0,
								minY: void 0,
								maxX: void 0,
								maxY: void 0,
								width: void 0,
								height: void 0,
								startX: void 0,
								startY: void 0,
								touchesStart: {},
								touchesCurrent: {}
							},
							velocity: {
								x: void 0,
								y: void 0,
								prevPositionX: void 0,
								prevPositionY: void 0,
								prevTime: void 0
							}
						};
					"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
						t[i] = _[i].bind(e)
					}), h.extend(e, {
						zoom: t
					})
				},
				on: {
					init: function() {
						this.params.zoom.enabled && this.zoom.enable()
					},
					destroy: function() {
						this.zoom.disable()
					},
					touchStart: function(e) {
						this.zoom.enabled && this.zoom.onTouchStart(e)
					},
					touchEnd: function(e) {
						this.zoom.enabled && this.zoom.onTouchEnd(e)
					},
					doubleTap: function(e) {
						this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
					},
					transitionEnd: function() {
						this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
					}
				}
			}, {
				name: "lazy",
				params: {
					lazy: {
						enabled: !1,
						loadPrevNext: !1,
						loadPrevNextAmount: 1,
						loadOnTransitionStart: !1,
						elementClass: "swiper-lazy",
						loadingClass: "swiper-lazy-loading",
						loadedClass: "swiper-lazy-loaded",
						preloaderClass: "swiper-lazy-preloader"
					}
				},
				create: function() {
					h.extend(this, {
						lazy: {
							initialImageLoaded: !1,
							load: X.load.bind(this),
							loadInSlide: X.loadInSlide.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
					},
					init: function() {
						this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
					},
					scroll: function() {
						this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
					},
					resize: function() {
						this.params.lazy.enabled && this.lazy.load()
					},
					scrollbarDragMove: function() {
						this.params.lazy.enabled && this.lazy.load()
					},
					transitionStart: function() {
						this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
					},
					transitionEnd: function() {
						this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
					}
				}
			}, {
				name: "controller",
				params: {
					controller: {
						control: void 0,
						inverse: !1,
						by: "slide"
					}
				},
				create: function() {
					h.extend(this, {
						controller: {
							control: this.params.controller.control,
							getInterpolateFunction: Y.getInterpolateFunction.bind(this),
							setTranslate: Y.setTranslate.bind(this),
							setTransition: Y.setTransition.bind(this)
						}
					})
				},
				on: {
					update: function() {
						this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
					},
					resize: function() {
						this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
					},
					observerUpdate: function() {
						this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
					},
					setTranslate: function(e, t) {
						this.controller.control && this.controller.setTranslate(e, t)
					},
					setTransition: function(e, t) {
						this.controller.control && this.controller.setTransition(e, t)
					}
				}
			}, {
				name: "a11y",
				params: {
					a11y: {
						enabled: !0,
						notificationClass: "swiper-notification",
						prevSlideMessage: "Previous slide",
						nextSlideMessage: "Next slide",
						firstSlideMessage: "This is the first slide",
						lastSlideMessage: "This is the last slide",
						paginationBulletMessage: "Go to slide {{index}}"
					}
				},
				create: function() {
					var t = this;
					h.extend(t, {
						a11y: {
							liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
						}
					}), Object.keys(V).forEach(function(e) {
						t.a11y[e] = V[e].bind(t)
					})
				},
				on: {
					init: function() {
						this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
					},
					toEdge: function() {
						this.params.a11y.enabled && this.a11y.updateNavigation()
					},
					fromEdge: function() {
						this.params.a11y.enabled && this.a11y.updateNavigation()
					},
					paginationUpdate: function() {
						this.params.a11y.enabled && this.a11y.updatePagination()
					},
					destroy: function() {
						this.params.a11y.enabled && this.a11y.destroy()
					}
				}
			}, {
				name: "history",
				params: {
					history: {
						enabled: !1,
						replaceState: !1,
						key: "slides"
					}
				},
				create: function() {
					h.extend(this, {
						history: {
							init: G.init.bind(this),
							setHistory: G.setHistory.bind(this),
							setHistoryPopState: G.setHistoryPopState.bind(this),
							scrollToSlide: G.scrollToSlide.bind(this),
							destroy: G.destroy.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.history.enabled && this.history.init()
					},
					destroy: function() {
						this.params.history.enabled && this.history.destroy()
					},
					transitionEnd: function() {
						this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
					}
				}
			}, {
				name: "hash-navigation",
				params: {
					hashNavigation: {
						enabled: !1,
						replaceState: !1,
						watchState: !1
					}
				},
				create: function() {
					h.extend(this, {
						hashNavigation: {
							initialized: !1,
							init: U.init.bind(this),
							destroy: U.destroy.bind(this),
							setHash: U.setHash.bind(this),
							onHashCange: U.onHashCange.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.hashNavigation.enabled && this.hashNavigation.init()
					},
					destroy: function() {
						this.params.hashNavigation.enabled && this.hashNavigation.destroy()
					},
					transitionEnd: function() {
						this.hashNavigation.initialized && this.hashNavigation.setHash()
					}
				}
			}, {
				name: "autoplay",
				params: {
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1
					}
				},
				create: function() {
					h.extend(this, {
						autoplay: {
							running: !1,
							paused: !1,
							run: Q.run.bind(this),
							start: Q.start.bind(this),
							stop: Q.stop.bind(this),
							pause: Q.pause.bind(this)
						}
					})
				},
				on: {
					init: function() {
						this.params.autoplay.enabled && this.autoplay.start()
					},
					beforeTransitionStart: function(e, t) {
						this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
					},
					sliderFirstMove: function() {
						this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
					},
					destroy: function() {
						this.autoplay.running && this.autoplay.stop()
					}
				}
			}, {
				name: "effect-fade",
				params: {
					fadeEffect: {
						crossFade: !1
					}
				},
				create: function() {
					h.extend(this, {
						fadeEffect: {
							setTranslate: K.setTranslate.bind(this),
							setTransition: K.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						if ("fade" === this.params.effect) {
							this.classNames.push(this.params.containerModifierClass + "fade");
							var e = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e)
						}
					},
					setTranslate: function() {
						"fade" === this.params.effect && this.fadeEffect.setTranslate()
					},
					setTransition: function(e) {
						"fade" === this.params.effect && this.fadeEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-cube",
				params: {
					cubeEffect: {
						slideShadows: !0,
						shadow: !0,
						shadowOffset: 20,
						shadowScale: .94
					}
				},
				create: function() {
					h.extend(this, {
						cubeEffect: {
							setTranslate: J.setTranslate.bind(this),
							setTransition: J.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						if ("cube" === this.params.effect) {
							this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
							var e = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								resistanceRatio: 0,
								spaceBetween: 0,
								centeredSlides: !1,
								virtualTranslate: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e)
						}
					},
					setTranslate: function() {
						"cube" === this.params.effect && this.cubeEffect.setTranslate()
					},
					setTransition: function(e) {
						"cube" === this.params.effect && this.cubeEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-flip",
				params: {
					flipEffect: {
						slideShadows: !0,
						limitRotation: !0
					}
				},
				create: function() {
					h.extend(this, {
						flipEffect: {
							setTranslate: Z.setTranslate.bind(this),
							setTransition: Z.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						if ("flip" === this.params.effect) {
							this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
							var e = {
								slidesPerView: 1,
								slidesPerColumn: 1,
								slidesPerGroup: 1,
								watchSlidesProgress: !0,
								spaceBetween: 0,
								virtualTranslate: !0
							};
							h.extend(this.params, e), h.extend(this.originalParams, e)
						}
					},
					setTranslate: function() {
						"flip" === this.params.effect && this.flipEffect.setTranslate()
					},
					setTransition: function(e) {
						"flip" === this.params.effect && this.flipEffect.setTransition(e)
					}
				}
			}, {
				name: "effect-coverflow",
				params: {
					coverflowEffect: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: !0
					}
				},
				create: function() {
					h.extend(this, {
						coverflowEffect: {
							setTranslate: ee.setTranslate.bind(this),
							setTransition: ee.setTransition.bind(this)
						}
					})
				},
				on: {
					beforeInit: function() {
						"coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
					},
					setTranslate: function() {
						"coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
					},
					setTransition: function(e) {
						"coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
					}
				}
			}];
		return void 0 === M.use && (M.use = M.Class.use, M.installModule = M.Class.installModule), M.use(te), M
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("nprogress", t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
	}(this, function() {
		function e(e, t, i) {
			return t > e ? t : e > i ? i : e
		}

		function t(e) {
			return 100 * (-1 + e)
		}

		function i(e, i, s) {
			var n;
			return n = "translate3d" === d.positionUsing ? {
				transform: "translate3d(" + t(e) + "%,0,0)"
			} : "translate" === d.positionUsing ? {
				transform: "translate(" + t(e) + "%,0)"
			} : {
				"margin-left": t(e) + "%"
			}, n.transition = "all " + i + "ms " + s, n
		}

		function s(e, t) {
			return ("string" == typeof e ? e : r(e)).indexOf(" " + t + " ") >= 0
		}

		function n(e, t) {
			var i = r(e),
				n = i + t;
			s(i, t) || (e.className = n.substring(1))
		}

		function a(e, t) {
			var i, n = r(e);
			s(e, t) && (i = n.replace(" " + t + " ", " "), e.className = i.substring(1, i.length - 1))
		}

		function r(e) {
			return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
		}

		function o(e) {
			e && e.parentNode && e.parentNode.removeChild(e)
		}
		var l = {};
		l.version = "0.2.0";
		var d = l.settings = {
			minimum: .08,
			easing: "ease",
			positionUsing: "",
			speed: 200,
			trickle: !0,
			trickleRate: .02,
			trickleSpeed: 800,
			showSpinner: !0,
			barSelector: '[role="bar"]',
			spinnerSelector: '[role="spinner"]',
			parent: "body",
			template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
		};
		l.configure = function(e) {
				var t, i;
				for (t in e) void 0 !== (i = e[t]) && e.hasOwnProperty(t) && (d[t] = i);
				return this
			}, l.status = null, l.set = function(t) {
				var s = l.isStarted();
				t = e(t, d.minimum, 1), l.status = 1 === t ? null : t;
				var n = l.render(!s),
					a = n.querySelector(d.barSelector),
					r = d.speed,
					o = d.easing;
				return n.offsetWidth, h(function(e) {
					"" === d.positionUsing && (d.positionUsing = l.getPositioningCSS()), c(a, i(t, r, o)), 1 === t ? (c(n, {
						transition: "none",
						opacity: 1
					}), n.offsetWidth, setTimeout(function() {
						c(n, {
							transition: "all " + r + "ms linear",
							opacity: 0
						}), setTimeout(function() {
							l.remove(), e()
						}, r)
					}, r)) : setTimeout(e, r)
				}), this
			}, l.isStarted = function() {
				return "number" == typeof l.status
			}, l.start = function() {
				l.status || l.set(0);
				var e = function() {
					setTimeout(function() {
						l.status && (l.trickle(), e())
					}, d.trickleSpeed)
				};
				return d.trickle && e(), this
			}, l.done = function(e) {
				return e || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
			}, l.inc = function(t) {
				var i = l.status;
				return i ? ("number" != typeof t && (t = (1 - i) * e(Math.random() * i, .1, .95)), i = e(i + t, 0, .994), l.set(i)) : l.start()
			}, l.trickle = function() {
				return l.inc(Math.random() * d.trickleRate)
			},
			function() {
				var e = 0,
					t = 0;
				l.promise = function(i) {
					return i && "resolved" !== i.state() ? (0 === t && l.start(), e++, t++, i.always(function() {
						t--, 0 === t ? (e = 0, l.done()) : l.set((e - t) / e)
					}), this) : this
				}
			}(), l.render = function(e) {
				if (l.isRendered()) return document.getElementById("nprogress");
				n(document.documentElement, "nprogress-busy");
				var i = document.createElement("div");
				i.id = "nprogress", i.innerHTML = d.template;
				var s, a = i.querySelector(d.barSelector),
					r = e ? "-100" : t(l.status || 0),
					h = document.querySelector(d.parent);
				return c(a, {
					transition: "all 0 linear",
					transform: "translate3d(" + r + "%,0,0)"
				}), d.showSpinner || (s = i.querySelector(d.spinnerSelector)) && o(s), h != document.body && n(h, "nprogress-custom-parent"), h.appendChild(i), i
			}, l.remove = function() {
				a(document.documentElement, "nprogress-busy"), a(document.querySelector(d.parent), "nprogress-custom-parent");
				var e = document.getElementById("nprogress");
				e && o(e)
			}, l.isRendered = function() {
				return !!document.getElementById("nprogress")
			}, l.getPositioningCSS = function() {
				var e = document.body.style,
					t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
				return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
			};
		var h = function() {
				function e() {
					var i = t.shift();
					i && i(e)
				}
				var t = [];
				return function(i) {
					t.push(i), 1 == t.length && e()
				}
			}(),
			c = function() {
				function e(e) {
					return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
						return t.toUpperCase()
					})
				}

				function t(e) {
					var t = document.body.style;
					if (e in t) return e;
					for (var i, s = n.length, a = e.charAt(0).toUpperCase() + e.slice(1); s--;)
						if ((i = n[s] + a) in t) return i;
					return e
				}

				function i(i) {
					return i = e(i), a[i] || (a[i] = t(i))
				}

				function s(e, t, s) {
					t = i(t), e.style[t] = s
				}
				var n = ["Webkit", "O", "Moz", "ms"],
					a = {};
				return function(e, t) {
					var i, n, a = arguments;
					if (2 == a.length)
						for (i in t) void 0 !== (n = t[i]) && t.hasOwnProperty(i) && s(e, i, n);
					else s(e, a[1], a[2])
				}
			}();
		return l
	});
var ScrollReveal = function() {
	"use strict";

	function e(s) {
		for (var n = [], a = arguments.length - 1; a-- > 0;) n[a] = arguments[a + 1];
		if (t(s)) return i(n, function(n) {
			i(n, function(i, n) {
				t(i) ? (s[n] && t(s[n]) || (s[n] = {}), e(s[n], i)) : s[n] = i
			})
		}), s;
		throw new TypeError("Expected an object literal.")
	}

	function t(e) {
		return null !== e && "object" == typeof e && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e))
	}

	function i(e, i) {
		if (t(e))
			for (var s = Object.keys(e), n = 0; n < s.length; n++) i(e[s[n]], s[n], e);
		else {
			if (!Array.isArray(e)) throw new TypeError("Expected either an array or object literal.");
			for (var a = 0; a < e.length; a++) i(e[a], a, e)
		}
	}

	function s() {
		var e = this;
		i(this.store.elements, function(e) {
			e.node.setAttribute("style", e.styles.inline), e.node.removeAttribute("data-sr-id")
		}), i(this.store.containers, function(t) {
			t.node === document.documentElement ? (window.removeEventListener("scroll", e.delegate), window.removeEventListener("resize", e.delegate)) : (t.node.removeEventListener("scroll", e.delegate), t.node.removeEventListener("resize", e.delegate))
		}), this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		}
	}

	function n(e) {
		if (e.constructor !== Array) throw new TypeError("Expected array.");
		if (16 === e.length) return e;
		if (6 === e.length) {
			var t = a();
			return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t
		}
		throw new RangeError("Expected array with either 6 or 16 values.")
	}

	function a() {
		for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
		return e
	}

	function r(e, t) {
		if (16 !== e.length || 16 !== t.length) throw new RangeError("Expected arrays with 16 values.");
		for (var i = [], s = 0; s < 4; s++)
			for (var n = [e[s], e[s + 4], e[s + 8], e[s + 12]], a = 0; a < 4; a++) {
				var r = 4 * a,
					o = [t[r], t[r + 1], t[r + 2], t[r + 3]],
					l = n[0] * o[0] + n[1] * o[1] + n[2] * o[2] + n[3] * o[3];
				i[s + r] = parseFloat(l.toPrecision(6))
			}
		return i
	}

	function o(e) {
		var t = Math.PI / 180 * e,
			i = a();
		return i[5] = i[10] = Math.cos(t), i[6] = i[9] = Math.sin(t), i[9] *= -1, i
	}

	function l(e) {
		var t = Math.PI / 180 * e,
			i = a();
		return i[0] = i[10] = Math.cos(t), i[2] = i[8] = Math.sin(t), i[2] *= -1, i
	}

	function d(e) {
		var t = Math.PI / 180 * e,
			i = a();
		return i[0] = i[5] = Math.cos(t), i[1] = i[4] = Math.sin(t), i[4] *= -1, i
	}

	function h(e) {
		var t = a();
		return t[0] = t[5] = e, t
	}

	function c(e) {
		var t = a();
		return t[12] = e, t
	}

	function u(e) {
		var t = a();
		return t[13] = e, t
	}

	function p(e) {
		return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e)
	}

	function f(e) {
		return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
	}

	function v(e) {
		var t = Object.prototype.toString.call(e),
			i = /^\[object (HTMLCollection|NodeList|Object)\]$/;
		return "object" == typeof window.NodeList ? e instanceof window.NodeList : "object" == typeof e && "number" == typeof e.length && i.test(t) && (0 === e.length || f(e[0]))
	}

	function m() {
		var e = document.documentElement.style;
		return "transform" in e || "WebkitTransform" in e
	}

	function g() {
		var e = document.documentElement.style;
		return "transition" in e || "WebkitTransition" in e
	}

	function y(e) {
		var t = window.getComputedStyle(e.node),
			i = t.position,
			s = e.config,
			c = /.+[^;]/g,
			u = e.node.getAttribute("style") || "",
			p = c.exec(u),
			f = p ? p[0] + ";" : ""; - 1 === f.indexOf("visibility: visible") && (f += f.length ? " " : "", f += "visibility: visible;");
		var v = parseFloat(t.opacity),
			m = isNaN(parseFloat(s.opacity)) ? v : parseFloat(s.opacity),
			g = {
				computed: v !== m ? "opacity: " + v + "; " : null,
				generated: v !== m ? "opacity: " + m + "; " : null
			},
			y = [];
		if (parseFloat(s.distance)) {
			var b = "top" === s.origin || "bottom" === s.origin ? "Y" : "X",
				w = s.distance;
			"top" !== s.origin && "left" !== s.origin || (w = /^-/.test(w) ? w.substr(1) : "-" + w);
			var x = w.match(/(^-?\d+\.?\d?)|(em$|px$|\%$)/g),
				T = x[0];
			switch (x[1]) {
				case "em":
					w = parseInt(t.fontSize) * T;
					break;
				case "px":
					w = T;
					break;
				case "%":
					w = "Y" === b ? e.node.getBoundingClientRect().height * T / 100 : e.node.getBoundingClientRect().width * T / 100;
					break;
				default:
					throw new RangeError("Unrecognized or missing distance unit.")
			}
			y.push(D["translate" + b](w))
		}
		s.rotate.x && y.push(o(s.rotate.x)), s.rotate.y && y.push(l(s.rotate.y)), s.rotate.z && y.push(d(s.rotate.z)), 1 !== s.scale && y.push(h(s.scale));
		var S;
		if (y.length) {
			var E = N("transform");
			if (S = {
					computed: {
						raw: t[E]
					},
					property: E
				}, "none" === S.computed.raw) S.computed.matrix = a();
			else {
				var C = S.computed.raw.match(/\(([^)]+)\)/);
				if (!C) throw new RangeError("Unrecognized computed transform property value.");
				var k = C[1].split(", ").map(function(e) {
					return parseFloat(e)
				});
				S.computed.matrix = n(k)
			}
			y.unshift(S.computed.matrix);
			var A = y.reduce(function(e, t) {
				return r(e, t)
			});
			S.generated = {
				initial: S.property + ": matrix3d(" + A.join(", ") + ");",
				final: S.property + ": matrix3d(" + S.computed.matrix.join(", ") + ");"
			}
		}
		var M;
		if (g.generated || S.generated) {
			var z = N("transition");
			M = {
				computed: t[z],
				fragments: [],
				property: z
			};
			var $ = s.delay,
				L = s.duration,
				P = s.easing;
			g.generated && M.fragments.push({
				delayed: "opacity " + L / 1e3 + "s " + P + " " + $ / 1e3 + "s",
				instant: "opacity " + L / 1e3 + "s " + P + " 0s"
			}), S.generated && M.fragments.push({
				delayed: S.property + " " + L / 1e3 + "s " + P + " " + $ / 1e3 + "s",
				instant: S.property + " " + L / 1e3 + "s " + P + " 0s"
			}), M.computed && !M.computed.match(/all 0s/) && M.fragments.unshift({
				delayed: M.computed,
				instant: M.computed
			});
			var I = M.fragments.reduce(function(e, t, i) {
				return e.delayed += 0 === i ? t.delayed : ", " + t.delayed, e.instant += 0 === i ? t.instant : ", " + t.instant, e
			}, {
				delayed: "",
				instant: ""
			});
			M.generated = {
				delayed: M.property + ": " + I.delayed + ";",
				instant: M.property + ": " + I.instant + ";"
			}
		}
		return {
			inline: f,
			opacity: g,
			position: i,
			transform: S,
			transition: M
		}
	}

	function b() {
		var e = this,
			t = [],
			s = [];
		i(this.store.elements, function(e) {
			-1 === t.indexOf(e.containerId) && t.push(e.containerId), e.sequence && -1 === s.indexOf(e.sequence.id) && s.push(e.sequence.id);
			var i = [e.styles.inline];
			e.visible ? (i.push(e.styles.opacity.computed), i.push(e.styles.transform.generated.final)) : (i.push(e.styles.opacity.generated), i.push(e.styles.transform.generated.initial)), e.node.setAttribute("style", i.join(" "))
		}), i(this.store.sequences, function(t) {
			-1 === s.indexOf(t.id) && delete e.store.sequences[t.id]
		}), i(this.store.containers, function(i) {
			-1 === t.indexOf(i.id) ? (i.node.removeEventListener("scroll", e.delegate), i.node.removeEventListener("resize", e.delegate), delete e.store.containers[i.id]) : i.node === document.documentElement ? (window.addEventListener("scroll", e.delegate), window.addEventListener("resize", e.delegate)) : (i.node.addEventListener("scroll", e.delegate), i.node.addEventListener("resize", e.delegate))
		}), this.delegate(), this.initTimeout = null
	}

	function w(e) {
		var t = this.store.containers[e.containerId],
			i = e.config.viewFactor,
			s = e.config.viewOffset,
			n = {
				top: e.geometry.bounds.top + e.geometry.height * i,
				right: e.geometry.bounds.right - e.geometry.width * i,
				bottom: e.geometry.bounds.bottom - e.geometry.height * i,
				left: e.geometry.bounds.left + e.geometry.width * i
			},
			a = {
				top: t.geometry.bounds.top + t.scroll.top + s.top,
				right: t.geometry.bounds.right + t.scroll.left + s.right,
				bottom: t.geometry.bounds.bottom + t.scroll.top + s.bottom,
				left: t.geometry.bounds.left + t.scroll.left + s.left
			};
		return n.top < a.bottom && n.right > a.left && n.bottom > a.top && n.left < a.right || "fixed" === e.styles.position
	}

	function x(e, t) {
		var i = t ? e.node.clientHeight : e.node.offsetHeight,
			s = t ? e.node.clientWidth : e.node.offsetWidth,
			n = 0,
			a = 0,
			r = e.node;
		do {
			isNaN(r.offsetTop) || (n += r.offsetTop), isNaN(r.offsetLeft) || (a += r.offsetLeft), r = r.offsetParent
		} while (r);
		return {
			bounds: {
				top: n,
				right: a + s,
				bottom: n + i,
				left: a
			},
			height: i,
			width: s
		}
	}

	function T(e, t) {
		void 0 === t && (t = document);
		var i = null;
		if ("string" == typeof e) try {
			i = t.querySelector(e)
		} catch (e) {}
		return f(e) ? e : i
	}

	function S(e, t) {
		if (void 0 === t && (t = document), f(e)) return [e];
		if (v(e)) return Array.prototype.slice.call(e);
		if ("string" == typeof e) try {
			var i = t.querySelectorAll(e),
				s = Array.prototype.slice.call(i);
			if (s.length) return s
		} catch (e) {}
		return []
	}

	function E(e) {
		return e.node === document.documentElement ? {
			top: window.pageYOffset,
			left: window.pageXOffset
		} : {
			top: e.node.scrollTop,
			left: e.node.scrollLeft
		}
	}

	function C(t, s, n, a) {
		var r = this;
		"number" == typeof s ? (n = Math.abs(parseInt(s)), s = {}) : (n = Math.abs(parseInt(n)), s = s || {});
		var o = e({}, this.defaults, s),
			l = this.store.containers,
			d = T(o.container),
			h = S(t, d);
		if (h.length && (o.mobile || !p()) && (o.desktop || p())) {
			var c;
			if (n) {
				if (!(n >= 16)) return;
				var u = I();
				c = {
					elementIds: [],
					head: {
						index: null,
						blocked: !1
					},
					tail: {
						index: null,
						blocked: !1
					},
					id: u,
					interval: Math.abs(n)
				}
			}
			var f;
			i(l, function(e) {
				f || e.node !== d || (f = e.id)
			}), isNaN(f) && (f = I());
			try {
				i(h.map(function(t) {
					var i = {},
						s = t.getAttribute("data-sr-id");
					return s ? (e(i, r.store.elements[s]), i.node.setAttribute("style", i.styles.inline)) : (i.id = I(), i.node = t, i.seen = !1, i.visible = !1), i.config = o, i.containerId = f, i.styles = y(i), c && (i.sequence = {
						id: c.id,
						index: c.elementIds.length
					}, c.elementIds.push(i.id)), i
				}), function(e) {
					r.store.elements[e.id] = e, e.node.setAttribute("data-sr-id", e.id)
				})
			} catch (e) {
				return
			}
			l[f] = l[f] || {
				id: f,
				node: d
			}, c && (this.store.sequences[c.id] = c), a || (this.store.history.push({
				target: t,
				options: s,
				interval: n
			}), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(b.bind(this), 0))
		}
	}

	function k() {
		var e = this;
		i(this.store.history, function(t) {
			C.call(e, t.target, t.options, t.interval, !0)
		}), b.call(this)
	}

	function A(e) {
		var t = this,
			i = "always" === e.config.useDelay || "onload" === e.config.useDelay && this.pristine || "once" === e.config.useDelay && !e.seen,
			s = e.sequence ? this.store.sequences[e.sequence.id] : null,
			n = [e.styles.inline];
		if (w.call(this, e) && !e.visible) {
			if (s) {
				if (null === s.head.index && null === s.tail.index) s.head.index = s.tail.index = e.sequence.index, s.head.blocked = s.tail.blocked = !0;
				else if (s.head.index - 1 !== e.sequence.index || s.head.blocked) {
					if (s.tail.index + 1 !== e.sequence.index || s.tail.blocked) return;
					s.tail.index++, s.tail.blocked = !0
				} else s.head.index--, s.head.blocked = !0;
				window.setTimeout(function() {
					s.head.blocked = s.tail.blocked = !1, t.delegate()
				}, s.interval)
			}
			n.push(e.styles.opacity.computed), n.push(e.styles.transform.generated.final), i ? n.push(e.styles.transition.generated.delayed) : n.push(e.styles.transition.generated.instant), e.seen = !0, e.visible = !0, M(e, i), e.node.setAttribute("style", n.join(" "))
		} else if (!w.call(this, e) && e.visible && e.config.reset) {
			if (s)
				if (s.head.index === e.sequence.index) s.head.index++;
				else {
					if (s.tail.index !== e.sequence.index) return;
					s.tail.index--
				}
			n.push(e.styles.opacity.generated), n.push(e.styles.transform.generated.initial), n.push(e.styles.transition.generated.instant), e.visible = !1, M(e), e.node.setAttribute("style", n.join(" "))
		}
	}

	function M(e, t) {
		var i, s = t ? e.config.duration + e.config.delay : e.config.duration;
		e.visible ? (e.config.beforeReveal(e.node), i = e.config.afterReveal) : (e.config.beforeReset(e.node), i = e.config.afterReset);
		var n = 0;
		e.callbackTimer && (n = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), e.callbackTimer = {
			start: Date.now(),
			clock: window.setTimeout(function() {
				i(e.node), e.callbackTimer = null
			}, s - n)
		}
	}

	function z(e) {
		var t = this;
		void 0 === e && (e = {}), H(function() {
			var s = t.store.containers,
				n = t.store.elements;
			switch (e.type) {
				case "scroll":
					i(s, function(e) {
						return e.scroll = E.call(t, e)
					}), i(n, function(e) {
						return A.call(t, e)
					});
					break;
				case "resize":
				default:
					i(s, function(e) {
						e.geometry = x.call(t, e, !0), e.scroll = E.call(t, e)
					}), i(n, function(e) {
						e.geometry = x.call(t, e), A.call(t, e)
					})
			}
			t.pristine = !1
		})
	}

	function $(t) {
		if (void 0 === t && (t = {}), void 0 === this || Object.getPrototypeOf(this) !== $.prototype) return new $(t);
		if (!$.isSupported()) return P;
		try {
			Object.defineProperty(this, "defaults", {
				get: function() {
					var i = {};
					return e(i, L, t),
						function() {
							return i
						}
				}()
			})
		} catch (e) {
			return P
		}
		return T(this.defaults.container) ? (document.documentElement.classList.add("sr"), this.store = {
			containers: {},
			elements: {},
			history: [],
			sequences: {}
		}, this.pristine = !0, this.delegate = z.bind(this), void Object.defineProperty(this, "version", {
			get: function() {
				return B
			}
		})) : P
	}
	var L = {
			origin: "bottom",
			distance: "0",
			duration: 300,
			delay: 0,
			rotate: {
				x: 0,
				y: 0,
				z: 0
			},
			opacity: 0,
			scale: 1,
			easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
			container: document.documentElement,
			desktop: !0,
			mobile: !0,
			reset: !1,
			useDelay: "always",
			viewFactor: 0,
			viewOffset: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			},
			beforeReveal: function() {},
			beforeReset: function() {},
			afterReveal: function() {},
			afterReset: function() {}
		},
		P = {
			noop: !0,
			destroy: function() {},
			reveal: function() {},
			sync: function() {}
		},
		I = function() {
			var e = 0;
			return function() {
				return e++
			}
		}(),
		D = Object.freeze({
			format: n,
			identity: a,
			multiply: r,
			rotateX: o,
			rotateY: l,
			rotateZ: d,
			scale: h,
			translateX: c,
			translateY: u
		}),
		N = function() {
			function e(e, s) {
				if (void 0 === s && (s = i), e && "string" == typeof e) {
					if (t[e]) return t[e];
					if ("string" == typeof s[e]) return t[e] = e;
					if ("string" == typeof s["-webkit-" + e]) return t[e] = "-webkit-" + e;
					throw new RangeError('Unable to find "' + e + '" style property.')
				}
				throw new TypeError("Expected a string.")
			}
			var t = {},
				i = document.documentElement.style;
			return e.clearCache = function() {
				return t = {}
			}, e
		}(),
		O = function() {
			var e = Date.now();
			return function(t) {
				var i = Date.now();
				i - e > 16 ? (e = i, t(i)) : setTimeout(function() {
					return O(t)
				}, 0)
			}
		}(),
		H = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || O,
		B = "4.0.0-beta";
	return $.isSupported = function() {
		return m() && g()
	}, $.prototype.destroy = s, $.prototype.reveal = C, $.prototype.sync = k, $
}();
define("scrollreveal", function() {}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
	}("undefined" != typeof window ? window : this, function() {
		function e() {}
		var t = e.prototype;
		return t.on = function(e, t) {
			if (e && t) {
				var i = this._events = this._events || {},
					s = i[e] = i[e] || [];
				return -1 == s.indexOf(t) && s.push(t), this
			}
		}, t.once = function(e, t) {
			if (e && t) {
				this.on(e, t);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[e] = i[e] || {})[t] = !0, this
			}
		}, t.off = function(e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var s = i.indexOf(t);
				return -1 != s && i.splice(s, 1), this
			}
		}, t.emitEvent = function(e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var s = 0,
					n = i[s];
				t = t || [];
				for (var a = this._onceEvents && this._onceEvents[e]; n;) {
					var r = a && a[n];
					r && (this.off(e, n), delete a[n]), n.apply(this, t), s += r ? 0 : 1, n = i[s]
				}
				return this
			}
		}, e
	}),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
			return t(e, i)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
	}(window, function(e, t) {
		function i(e, t) {
			for (var i in t) e[i] = t[i];
			return e
		}

		function s(e) {
			var t = [];
			if (Array.isArray(e)) t = e;
			else if ("number" == typeof e.length)
				for (var i = 0; i < e.length; i++) t.push(e[i]);
			else t.push(e);
			return t
		}

		function n(e, t, a) {
			return this instanceof n ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? a = t : i(this.options, t), a && this.on("always", a), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(function() {
				this.check()
			}.bind(this))) : new n(e, t, a)
		}

		function a(e) {
			this.img = e
		}

		function r(e, t) {
			this.url = e, this.element = t, this.img = new Image
		}
		var o = e.jQuery,
			l = e.console;
		n.prototype = Object.create(t.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
			this.images = [], this.elements.forEach(this.addElementImages, this)
		}, n.prototype.addElementImages = function(e) {
			"IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
			var t = e.nodeType;
			if (t && d[t]) {
				for (var i = e.querySelectorAll("img"), s = 0; s < i.length; s++) {
					var n = i[s];
					this.addImage(n)
				}
				if ("string" == typeof this.options.background) {
					var a = e.querySelectorAll(this.options.background);
					for (s = 0; s < a.length; s++) {
						var r = a[s];
						this.addElementBackgroundImages(r)
					}
				}
			}
		};
		var d = {
			1: !0,
			9: !0,
			11: !0
		};
		return n.prototype.addElementBackgroundImages = function(e) {
			var t = getComputedStyle(e);
			if (t)
				for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(t.backgroundImage); null !== s;) {
					var n = s && s[2];
					n && this.addBackground(n, e), s = i.exec(t.backgroundImage)
				}
		}, n.prototype.addImage = function(e) {
			var t = new a(e);
			this.images.push(t)
		}, n.prototype.addBackground = function(e, t) {
			var i = new r(e, t);
			this.images.push(i)
		}, n.prototype.check = function() {
			function e(e, i, s) {
				setTimeout(function() {
					t.progress(e, i, s)
				})
			}
			var t = this;
			return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
				t.once("progress", e), t.check()
			}) : void this.complete()
		}, n.prototype.progress = function(e, t, i) {
			this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
		}, n.prototype.complete = function() {
			var e = this.hasAnyBroken ? "fail" : "done";
			if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
				var t = this.hasAnyBroken ? "reject" : "resolve";
				this.jqDeferred[t](this)
			}
		}, a.prototype = Object.create(t.prototype), a.prototype.check = function() {
			return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
		}, a.prototype.getIsImageComplete = function() {
			return this.img.complete && void 0 !== this.img.naturalWidth
		}, a.prototype.confirm = function(e, t) {
			this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
		}, a.prototype.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, a.prototype.onload = function() {
			this.confirm(!0, "onload"), this.unbindEvents()
		}, a.prototype.onerror = function() {
			this.confirm(!1, "onerror"), this.unbindEvents()
		}, a.prototype.unbindEvents = function() {
			this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, r.prototype = Object.create(a.prototype), r.prototype.check = function() {
			this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
		}, r.prototype.unbindEvents = function() {
			this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
		}, r.prototype.confirm = function(e, t) {
			this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
		}, n.makeJQueryPlugin = function(t) {
			(t = t || e.jQuery) && (o = t, o.fn.imagesLoaded = function(e, t) {
				return new n(this, e, t).jqDeferred.promise(o(this))
			})
		}, n.makeJQueryPlugin(), n
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
			return t(e, i)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
	}(window, function(e, t) {
		"use strict";

		function i(i, a, o) {
			function l(e, t, s) {
				var n, a = "$()." + i + '("' + t + '")';
				return e.each(function(e, l) {
					var d = o.data(l, i);
					if (!d) return void r(i + " not initialized. Cannot call methods, i.e. " + a);
					var h = d[t];
					if (!h || "_" == t.charAt(0)) return void r(a + " is not a valid method");
					var c = h.apply(d, s);
					n = void 0 === n ? c : n
				}), void 0 !== n ? n : e
			}

			function d(e, t) {
				e.each(function(e, s) {
					var n = o.data(s, i);
					n ? (n.option(t), n._init()) : (n = new a(s, t), o.data(s, i, n))
				})
			}(o = o || t || e.jQuery) && (a.prototype.option || (a.prototype.option = function(e) {
				o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e))
			}), o.fn[i] = function(e) {
				if ("string" == typeof e) {
					return l(this, e, n.call(arguments, 1))
				}
				return d(this, e), this
			}, s(o))
		}

		function s(e) {
			!e || e && e.bridget || (e.bridget = i)
		}
		var n = Array.prototype.slice,
			a = e.console,
			r = void 0 === a ? function() {} : function(e) {
				a.error(e)
			};
		return s(t || e.jQuery), i
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
	}("undefined" != typeof window ? window : this, function() {
		function e() {}
		var t = e.prototype;
		return t.on = function(e, t) {
			if (e && t) {
				var i = this._events = this._events || {},
					s = i[e] = i[e] || [];
				return -1 == s.indexOf(t) && s.push(t), this
			}
		}, t.once = function(e, t) {
			if (e && t) {
				this.on(e, t);
				var i = this._onceEvents = this._onceEvents || {};
				return (i[e] = i[e] || {})[t] = !0, this
			}
		}, t.off = function(e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var s = i.indexOf(t);
				return -1 != s && i.splice(s, 1), this
			}
		}, t.emitEvent = function(e, t) {
			var i = this._events && this._events[e];
			if (i && i.length) {
				var s = 0,
					n = i[s];
				t = t || [];
				for (var a = this._onceEvents && this._onceEvents[e]; n;) {
					var r = a && a[n];
					r && (this.off(e, n), delete a[n]), n.apply(this, t), s += r ? 0 : 1, n = i[s]
				}
				return this
			}
		}, e
	}),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
			return t()
		}) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
	}(window, function() {
		"use strict";

		function e(e) {
			var t = parseFloat(e);
			return -1 == e.indexOf("%") && !isNaN(t) && t
		}

		function t() {}

		function i() {
			for (var e = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, t = 0; d > t; t++) {
				e[l[t]] = 0
			}
			return e
		}

		function s(e) {
			var t = getComputedStyle(e);
			return t || o("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
		}

		function n() {
			if (!h) {
				h = !0;
				var t = document.createElement("div");
				t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
				var i = document.body || document.documentElement;
				i.appendChild(t);
				var n = s(t);
				a.isBoxSizeOuter = r = 200 == e(n.width), i.removeChild(t)
			}
		}

		function a(t) {
			if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var a = s(t);
				if ("none" == a.display) return i();
				var o = {};
				o.width = t.offsetWidth, o.height = t.offsetHeight;
				for (var h = o.isBorderBox = "border-box" == a.boxSizing, c = 0; d > c; c++) {
					var u = l[c],
						p = a[u],
						f = parseFloat(p);
					o[u] = isNaN(f) ? 0 : f
				}
				var v = o.paddingLeft + o.paddingRight,
					m = o.paddingTop + o.paddingBottom,
					g = o.marginLeft + o.marginRight,
					y = o.marginTop + o.marginBottom,
					b = o.borderLeftWidth + o.borderRightWidth,
					w = o.borderTopWidth + o.borderBottomWidth,
					x = h && r,
					T = e(a.width);
				!1 !== T && (o.width = T + (x ? 0 : v + b));
				var S = e(a.height);
				return !1 !== S && (o.height = S + (x ? 0 : m + w)), o.innerWidth = o.width - (v + b), o.innerHeight = o.height - (m + w), o.outerWidth = o.width + g, o.outerHeight = o.height + y, o
			}
		}
		var r, o = "undefined" == typeof console ? t : function(e) {
				console.error(e)
			},
			l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
			d = l.length,
			h = !1;
		return a
	}),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
	}(window, function() {
		"use strict";
		var e = function() {
			var e = Element.prototype;
			if (e.matches) return "matches";
			if (e.matchesSelector) return "matchesSelector";
			for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
				var s = t[i],
					n = s + "MatchesSelector";
				if (e[n]) return n
			}
		}();
		return function(t, i) {
			return t[e](i)
		}
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
			return t(e, i)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
	}(window, function(e, t) {
		var i = {};
		i.extend = function(e, t) {
			for (var i in t) e[i] = t[i];
			return e
		}, i.modulo = function(e, t) {
			return (e % t + t) % t
		}, i.makeArray = function(e) {
			var t = [];
			if (Array.isArray(e)) t = e;
			else if (e && "number" == typeof e.length)
				for (var i = 0; i < e.length; i++) t.push(e[i]);
			else t.push(e);
			return t
		}, i.removeFrom = function(e, t) {
			var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
		}, i.getParent = function(e, i) {
			for (; e != document.body;)
				if (e = e.parentNode, t(e, i)) return e
		}, i.getQueryElement = function(e) {
			return "string" == typeof e ? document.querySelector(e) : e
		}, i.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, i.filterFindElements = function(e, s) {
			e = i.makeArray(e);
			var n = [];
			return e.forEach(function(e) {
				if (e instanceof HTMLElement) {
					if (!s) return void n.push(e);
					t(e, s) && n.push(e);
					for (var i = e.querySelectorAll(s), a = 0; a < i.length; a++) n.push(i[a])
				}
			}), n
		}, i.debounceMethod = function(e, t, i) {
			var s = e.prototype[t],
				n = t + "Timeout";
			e.prototype[t] = function() {
				var e = this[n];
				e && clearTimeout(e);
				var t = arguments,
					a = this;
				this[n] = setTimeout(function() {
					s.apply(a, t), delete a[n]
				}, i || 100)
			}
		}, i.docReady = function(e) {
			var t = document.readyState;
			"complete" == t || "interactive" == t ? e() : document.addEventListener("DOMContentLoaded", e)
		}, i.toDashed = function(e) {
			return e.replace(/(.)([A-Z])/g, function(e, t, i) {
				return t + "-" + i
			}).toLowerCase()
		};
		var s = e.console;
		return i.htmlInit = function(t, n) {
			i.docReady(function() {
				var a = i.toDashed(n),
					r = "data-" + a,
					o = document.querySelectorAll("[" + r + "]"),
					l = document.querySelectorAll(".js-" + a),
					d = i.makeArray(o).concat(i.makeArray(l)),
					h = r + "-options",
					c = e.jQuery;
				d.forEach(function(e) {
					var i, a = e.getAttribute(r) || e.getAttribute(h);
					try {
						i = a && JSON.parse(a)
					} catch (t) {
						return void(s && s.error("Error parsing " + r + " on " + e.className + ": " + t))
					}
					var o = new t(e, i);
					c && c.data(e, n, o)
				})
			})
		}, i
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
	}(window, function(e, t) {
		"use strict";

		function i(e) {
			for (var t in e) return !1;
			return null, !0
		}

		function s(e, t) {
			e && (this.element = e, this.layout = t, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var n = document.documentElement.style,
			a = "string" == typeof n.transition ? "transition" : "WebkitTransition",
			r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
			o = {
				WebkitTransition: "webkitTransitionEnd",
				transition: "transitionend"
			}[a],
			l = {
				transform: r,
				transition: a,
				transitionDuration: a + "Duration",
				transitionProperty: a + "Property",
				transitionDelay: a + "Delay"
			},
			d = s.prototype = Object.create(e.prototype);
		d.constructor = s, d._create = function() {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, d.handleEvent = function(e) {
			var t = "on" + e.type;
			this[t] && this[t](e)
		}, d.getSize = function() {
			this.size = t(this.element)
		}, d.css = function(e) {
			var t = this.element.style;
			for (var i in e) {
				t[l[i] || i] = e[i]
			}
		}, d.getPosition = function() {
			var e = getComputedStyle(this.element),
				t = this.layout._getOption("originLeft"),
				i = this.layout._getOption("originTop"),
				s = e[t ? "left" : "right"],
				n = e[i ? "top" : "bottom"],
				a = this.layout.size,
				r = -1 != s.indexOf("%") ? parseFloat(s) / 100 * a.width : parseInt(s, 10),
				o = -1 != n.indexOf("%") ? parseFloat(n) / 100 * a.height : parseInt(n, 10);
			r = isNaN(r) ? 0 : r, o = isNaN(o) ? 0 : o, r -= t ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = o
		}, d.layoutPosition = function() {
			var e = this.layout.size,
				t = {},
				i = this.layout._getOption("originLeft"),
				s = this.layout._getOption("originTop"),
				n = i ? "paddingLeft" : "paddingRight",
				a = i ? "left" : "right",
				r = i ? "right" : "left",
				o = this.position.x + e[n];
			t[a] = this.getXValue(o), t[r] = "";
			var l = s ? "paddingTop" : "paddingBottom",
				d = s ? "top" : "bottom",
				h = s ? "bottom" : "top",
				c = this.position.y + e[l];
			t[d] = this.getYValue(c), t[h] = "", this.css(t), this.emitEvent("layout", [this])
		}, d.getXValue = function(e) {
			var t = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
		}, d.getYValue = function(e) {
			var t = this.layout._getOption("horizontal");
			return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
		}, d._transitionTo = function(e, t) {
			this.getPosition();
			var i = this.position.x,
				s = this.position.y,
				n = parseInt(e, 10),
				a = parseInt(t, 10),
				r = n === this.position.x && a === this.position.y;
			if (this.setPosition(e, t), r && !this.isTransitioning) return void this.layoutPosition();
			var o = e - i,
				l = t - s,
				d = {};
			d.transform = this.getTranslate(o, l), this.transition({
				to: d,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, d.getTranslate = function(e, t) {
			var i = this.layout._getOption("originLeft"),
				s = this.layout._getOption("originTop");
			return e = i ? e : -e, t = s ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
		}, d.goTo = function(e, t) {
			this.setPosition(e, t), this.layoutPosition()
		}, d.moveTo = d._transitionTo, d.setPosition = function(e, t) {
			this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
		}, d._nonTransition = function(e) {
			this.css(e.to), e.isCleaning && this._removeStyles(e.to);
			for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
		}, d.transition = function(e) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
			var t = this._transn;
			for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
			for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
			if (e.from) {
				this.css(e.from);
				this.element.offsetHeight;
				null
			}
			this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
		};
		var h = "opacity," + function(e) {
			return e.replace(/([A-Z])/g, function(e) {
				return "-" + e.toLowerCase()
			})
		}(r);
		d.enableTransition = function() {
			if (!this.isTransitioning) {
				var e = this.layout.options.transitionDuration;
				e = "number" == typeof e ? e + "ms" : e, this.css({
					transitionProperty: h,
					transitionDuration: e,
					transitionDelay: this.staggerDelay || 0
				}), this.element.addEventListener(o, this, !1)
			}
		}, d.onwebkitTransitionEnd = function(e) {
			this.ontransitionend(e)
		}, d.onotransitionend = function(e) {
			this.ontransitionend(e)
		};
		var c = {
			"-webkit-transform": "transform"
		};
		d.ontransitionend = function(e) {
			if (e.target === this.element) {
				var t = this._transn,
					s = c[e.propertyName] || e.propertyName;
				if (delete t.ingProperties[s], i(t.ingProperties) && this.disableTransition(), s in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[s]), s in t.onEnd) {
					t.onEnd[s].call(this), delete t.onEnd[s]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, d.disableTransition = function() {
			this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
		}, d._removeStyles = function(e) {
			var t = {};
			for (var i in e) t[i] = "";
			this.css(t)
		};
		var u = {
			transitionProperty: "",
			transitionDuration: "",
			transitionDelay: ""
		};
		return d.removeTransitionStyles = function() {
			this.css(u)
		}, d.stagger = function(e) {
			e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
		}, d.removeElem = function() {
			this.element.parentNode.removeChild(this.element), this.css({
				display: ""
			}), this.emitEvent("remove", [this])
		}, d.remove = function() {
			return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
				this.removeElem()
			}), void this.hide()) : void this.removeElem()
		}, d.reveal = function() {
			delete this.isHidden, this.css({
				display: ""
			});
			var e = this.layout.options,
				t = {};
			t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
				from: e.hiddenStyle,
				to: e.visibleStyle,
				isCleaning: !0,
				onTransitionEnd: t
			})
		}, d.onRevealTransitionEnd = function() {
			this.isHidden || this.emitEvent("reveal")
		}, d.getHideRevealTransitionEndProperty = function(e) {
			var t = this.layout.options[e];
			if (t.opacity) return "opacity";
			for (var i in t) return i
		}, d.hide = function() {
			this.isHidden = !0, this.css({
				display: ""
			});
			var e = this.layout.options,
				t = {};
			t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
				from: e.visibleStyle,
				to: e.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: t
			})
		}, d.onHideTransitionEnd = function() {
			this.isHidden && (this.css({
				display: "none"
			}), this.emitEvent("hide"))
		}, d.destroy = function() {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, s
	}),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, s, n, a) {
			return t(e, i, s, n, a)
		}) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
	}(window, function(e, t, i, s, n) {
		"use strict";

		function a(e, t) {
			var i = s.getQueryElement(e);
			if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
			this.element = i, d && (this.$element = d(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t);
			var n = ++c;
			this.element.outlayerGUID = n, u[n] = this, this._create(), this._getOption("initLayout") && this.layout()
		}

		function r(e) {
			function t() {
				e.apply(this, arguments)
			}
			return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
		}

		function o(e) {
			if ("number" == typeof e) return e;
			var t = e.match(/(^\d*\.?\d*)(\w*)/),
				i = t && t[1],
				s = t && t[2];
			return i.length ? (i = parseFloat(i)) * (f[s] || 1) : 0
		}
		var l = e.console,
			d = e.jQuery,
			h = function() {},
			c = 0,
			u = {};
		a.namespace = "outlayer", a.Item = n, a.defaults = {
			containerStyle: {
				position: "relative"
			},
			initLayout: !0,
			originLeft: !0,
			originTop: !0,
			resize: !0,
			resizeContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		};
		var p = a.prototype;
		s.extend(p, t.prototype), p.option = function(e) {
			s.extend(this.options, e)
		}, p._getOption = function(e) {
			var t = this.constructor.compatOptions[e];
			return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
		}, a.compatOptions = {
			initLayout: "isInitLayout",
			horizontal: "isHorizontal",
			layoutInstant: "isLayoutInstant",
			originLeft: "isOriginLeft",
			originTop: "isOriginTop",
			resize: "isResizeBound",
			resizeContainer: "isResizingContainer"
		}, p._create = function() {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
		}, p.reloadItems = function() {
			this.items = this._itemize(this.element.children)
		}, p._itemize = function(e) {
			for (var t = this._filterFindItemElements(e), i = this.constructor.Item, s = [], n = 0; n < t.length; n++) {
				var a = t[n],
					r = new i(a, this);
				s.push(r)
			}
			return s
		}, p._filterFindItemElements = function(e) {
			return s.filterFindElements(e, this.options.itemSelector)
		}, p.getItemElements = function() {
			return this.items.map(function(e) {
				return e.element
			})
		}, p.layout = function() {
			this._resetLayout(), this._manageStamps();
			var e = this._getOption("layoutInstant"),
				t = void 0 !== e ? e : !this._isLayoutInited;
			this.layoutItems(this.items, t), this._isLayoutInited = !0
		}, p._init = p.layout, p._resetLayout = function() {
			this.getSize()
		}, p.getSize = function() {
			this.size = i(this.element)
		}, p._getMeasurement = function(e, t) {
			var s, n = this.options[e];
			n ? ("string" == typeof n ? s = this.element.querySelector(n) : n instanceof HTMLElement && (s = n), this[e] = s ? i(s)[t] : n) : this[e] = 0
		}, p.layoutItems = function(e, t) {
			e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
		}, p._getItemsForLayout = function(e) {
			return e.filter(function(e) {
				return !e.isIgnored
			})
		}, p._layoutItems = function(e, t) {
			if (this._emitCompleteOnItems("layout", e), e && e.length) {
				var i = [];
				e.forEach(function(e) {
					var s = this._getItemLayoutPosition(e);
					s.item = e, s.isInstant = t || e.isLayoutInstant, i.push(s)
				}, this), this._processLayoutQueue(i)
			}
		}, p._getItemLayoutPosition = function() {
			return {
				x: 0,
				y: 0
			}
		}, p._processLayoutQueue = function(e) {
			this.updateStagger(), e.forEach(function(e, t) {
				this._positionItem(e.item, e.x, e.y, e.isInstant, t)
			}, this)
		}, p.updateStagger = function() {
			var e = this.options.stagger;
			return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = o(e), this.stagger)
		}, p._positionItem = function(e, t, i, s, n) {
			s ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i))
		}, p._postLayout = function() {
			this.resizeContainer()
		}, p.resizeContainer = function() {
			if (this._getOption("resizeContainer")) {
				var e = this._getContainerSize();
				e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
			}
		}, p._getContainerSize = h, p._setContainerMeasure = function(e, t) {
			if (void 0 !== e) {
				var i = this.size;
				i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
			}
		}, p._emitCompleteOnItems = function(e, t) {
			function i() {
				n.dispatchEvent(e + "Complete", null, [t])
			}

			function s() {
				++r == a && i()
			}
			var n = this,
				a = t.length;
			if (!t || !a) return void i();
			var r = 0;
			t.forEach(function(t) {
				t.once(e, s)
			})
		}, p.dispatchEvent = function(e, t, i) {
			var s = t ? [t].concat(i) : i;
			if (this.emitEvent(e, s), d)
				if (this.$element = this.$element || d(this.element), t) {
					var n = d.Event(t);
					n.type = e, this.$element.trigger(n, i)
				} else this.$element.trigger(e, i)
		}, p.ignore = function(e) {
			var t = this.getItem(e);
			t && (t.isIgnored = !0)
		}, p.unignore = function(e) {
			var t = this.getItem(e);
			t && delete t.isIgnored
		}, p.stamp = function(e) {
			(e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
		}, p.unstamp = function(e) {
			(e = this._find(e)) && e.forEach(function(e) {
				s.removeFrom(this.stamps, e), this.unignore(e)
			}, this)
		}, p._find = function(e) {
			return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = s.makeArray(e)) : void 0
		}, p._manageStamps = function() {
			this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
		}, p._getBoundingRect = function() {
			var e = this.element.getBoundingClientRect(),
				t = this.size;
			this._boundingRect = {
				left: e.left + t.paddingLeft + t.borderLeftWidth,
				top: e.top + t.paddingTop + t.borderTopWidth,
				right: e.right - (t.paddingRight + t.borderRightWidth),
				bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
			}
		}, p._manageStamp = h, p._getElementOffset = function(e) {
			var t = e.getBoundingClientRect(),
				s = this._boundingRect,
				n = i(e);
			return {
				left: t.left - s.left - n.marginLeft,
				top: t.top - s.top - n.marginTop,
				right: s.right - t.right - n.marginRight,
				bottom: s.bottom - t.bottom - n.marginBottom
			}
		}, p.handleEvent = s.handleEvent, p.bindResize = function() {
			e.addEventListener("resize", this), this.isResizeBound = !0
		}, p.unbindResize = function() {
			e.removeEventListener("resize", this), this.isResizeBound = !1
		}, p.onresize = function() {
			this.resize()
		}, s.debounceMethod(a, "onresize", 100), p.resize = function() {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, p.needsResizeLayout = function() {
			var e = i(this.element);
			return this.size && e && e.innerWidth !== this.size.innerWidth
		}, p.addItems = function(e) {
			var t = this._itemize(e);
			return t.length && (this.items = this.items.concat(t)), t
		}, p.appended = function(e) {
			var t = this.addItems(e);
			t.length && (this.layoutItems(t, !0), this.reveal(t))
		}, p.prepended = function(e) {
			var t = this._itemize(e);
			if (t.length) {
				var i = this.items.slice(0);
				this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
			}
		}, p.reveal = function(e) {
			if (this._emitCompleteOnItems("reveal", e), e && e.length) {
				var t = this.updateStagger();
				e.forEach(function(e, i) {
					e.stagger(i * t), e.reveal()
				})
			}
		}, p.hide = function(e) {
			if (this._emitCompleteOnItems("hide", e), e && e.length) {
				var t = this.updateStagger();
				e.forEach(function(e, i) {
					e.stagger(i * t), e.hide()
				})
			}
		}, p.revealItemElements = function(e) {
			var t = this.getItems(e);
			this.reveal(t)
		}, p.hideItemElements = function(e) {
			var t = this.getItems(e);
			this.hide(t)
		}, p.getItem = function(e) {
			for (var t = 0; t < this.items.length; t++) {
				var i = this.items[t];
				if (i.element == e) return i
			}
		}, p.getItems = function(e) {
			e = s.makeArray(e);
			var t = [];
			return e.forEach(function(e) {
				var i = this.getItem(e);
				i && t.push(i)
			}, this), t
		}, p.remove = function(e) {
			var t = this.getItems(e);
			this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
				e.remove(), s.removeFrom(this.items, e)
			}, this)
		}, p.destroy = function() {
			var e = this.element.style;
			e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
				e.destroy()
			}), this.unbindResize();
			var t = this.element.outlayerGUID;
			delete u[t], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace)
		}, a.data = function(e) {
			e = s.getQueryElement(e);
			var t = e && e.outlayerGUID;
			return t && u[t]
		}, a.create = function(e, t) {
			var i = r(a);
			return i.defaults = s.extend({}, a.defaults), s.extend(i.defaults, t), i.compatOptions = s.extend({}, a.compatOptions), i.namespace = e, i.data = a.data, i.Item = r(n), s.htmlInit(i, e), d && d.bridget && d.bridget(e, i), i
		};
		var f = {
			ms: 1,
			s: 1e3
		};
		return a.Item = n, a
	}),
	function(e, t) {
		"function" == typeof define && define.amd ? define("masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
	}(window, function(e, t) {
		var i = e.create("masonry");
		return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
			for (var e = 0; e < this.cols; e++) this.colYs.push(0);
			this.maxY = 0
		}, i.prototype.measureColumns = function() {
			if (this.getContainerWidth(), !this.columnWidth) {
				var e = this.items[0],
					i = e && e.element;
				this.columnWidth = i && t(i).outerWidth || this.containerWidth
			}
			var s = this.columnWidth += this.gutter,
				n = this.containerWidth + this.gutter,
				a = n / s,
				r = s - n % s,
				o = r && 1 > r ? "round" : "floor";
			a = Math[o](a), this.cols = Math.max(a, 1)
		}, i.prototype.getContainerWidth = function() {
			var e = this._getOption("fitWidth"),
				i = e ? this.element.parentNode : this.element,
				s = t(i);
			this.containerWidth = s && s.innerWidth
		}, i.prototype._getItemLayoutPosition = function(e) {
			e.getSize();
			var t = e.size.outerWidth % this.columnWidth,
				i = t && 1 > t ? "round" : "ceil",
				s = Math[i](e.size.outerWidth / this.columnWidth);
			s = Math.min(s, this.cols);
			for (var n = this._getColGroup(s), a = Math.min.apply(Math, n), r = n.indexOf(a), o = {
					x: this.columnWidth * r,
					y: a
				}, l = a + e.size.outerHeight, d = this.cols + 1 - n.length, h = 0; d > h; h++) this.colYs[r + h] = l;
			return o
		}, i.prototype._getColGroup = function(e) {
			if (2 > e) return this.colYs;
			for (var t = [], i = this.cols + 1 - e, s = 0; i > s; s++) {
				var n = this.colYs.slice(s, s + e);
				t[s] = Math.max.apply(Math, n)
			}
			return t
		}, i.prototype._manageStamp = function(e) {
			var i = t(e),
				s = this._getElementOffset(e),
				n = this._getOption("originLeft"),
				a = n ? s.left : s.right,
				r = a + i.outerWidth,
				o = Math.floor(a / this.columnWidth);
			o = Math.max(0, o);
			var l = Math.floor(r / this.columnWidth);
			l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
			for (var d = this._getOption("originTop"), h = (d ? s.top : s.bottom) + i.outerHeight, c = o; l >= c; c++) this.colYs[c] = Math.max(h, this.colYs[c])
		}, i.prototype._getContainerSize = function() {
			this.maxY = Math.max.apply(Math, this.colYs);
			var e = {
				height: this.maxY
			};
			return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
		}, i.prototype._getContainerFitWidth = function() {
			for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
			return (this.cols - e) * this.columnWidth - this.gutter
		}, i.prototype.needsResizeLayout = function() {
			var e = this.containerWidth;
			return this.getContainerWidth(), e != this.containerWidth
		}, i
	});
var IASCallbacks = function(e) {
	return this.list = [], this.fireStack = [], this.isFiring = !1, this.isDisabled = !1, this.Deferred = e.Deferred, this.fire = function(e) {
		var t = e[0],
			i = e[1],
			s = e[2];
		this.isFiring = !0;
		for (var n = 0, a = this.list.length; a > n; n++)
			if (void 0 != this.list[n] && !1 === this.list[n].fn.apply(t, s)) {
				i.reject();
				break
			}
		this.isFiring = !1, i.resolve(), this.fireStack.length && this.fire(this.fireStack.shift())
	}, this.inList = function(e, t) {
		t = t || 0;
		for (var i = t, s = this.list.length; s > i; i++)
			if (this.list[i].fn === e || e.guid && this.list[i].fn.guid && e.guid === this.list[i].fn.guid) return i;
		return -1
	}, this
};
IASCallbacks.prototype = {
		add: function(e, t) {
			var i = {
				fn: e,
				priority: t
			};
			t = t || 0;
			for (var s = 0, n = this.list.length; n > s; s++)
				if (t > this.list[s].priority) return this.list.splice(s, 0, i), this;
			return this.list.push(i), this
		},
		remove: function(e) {
			for (var t = 0;
				(t = this.inList(e, t)) > -1;) this.list.splice(t, 1);
			return this
		},
		has: function(e) {
			return this.inList(e) > -1
		},
		fireWith: function(e, t) {
			var i = this.Deferred();
			return this.isDisabled ? i.reject() : (t = t || [], t = [e, i, t.slice ? t.slice() : t], this.isFiring ? this.fireStack.push(t) : this.fire(t), i)
		},
		disable: function() {
			this.isDisabled = !0
		},
		enable: function() {
			this.isDisabled = !1
		}
	},
	function(e) {
		"use strict";
		var t = function(t, i) {
			return this.itemsContainerSelector = i.container, this.itemSelector = i.item, this.nextSelector = i.next, this.paginationSelector = i.pagination, this.$scrollContainer = t, this.$container = window === t.get(0) ? e(document) : t, this.defaultDelay = i.delay, this.negativeMargin = i.negativeMargin, this.nextUrl = null, this.isBound = !1, this.isPaused = !1, this.isInitialized = !1, this.jsXhr = !1, this.listeners = {
				next: new IASCallbacks(e),
				load: new IASCallbacks(e),
				loaded: new IASCallbacks(e),
				render: new IASCallbacks(e),
				rendered: new IASCallbacks(e),
				scroll: new IASCallbacks(e),
				noneLeft: new IASCallbacks(e),
				ready: new IASCallbacks(e)
			}, this.extensions = [], this.scrollHandler = function() {
				if (this.isBound && !this.isPaused) {
					var e = this.getCurrentScrollOffset(this.$scrollContainer),
						t = this.getScrollThreshold(); - 1 != t && (this.fire("scroll", [e, t]), e >= t && this.next())
				}
			}, this.getItemsContainer = function() {
				return e(this.itemsContainerSelector, this.$container)
			}, this.getLastItem = function() {
				return e(this.itemSelector, this.getItemsContainer().get(0)).last()
			}, this.getFirstItem = function() {
				return e(this.itemSelector, this.getItemsContainer().get(0)).first()
			}, this.getScrollThreshold = function(e) {
				var t;
				return e = e || this.negativeMargin, e = e >= 0 ? -1 * e : e, t = this.getLastItem(), 0 === t.length ? -1 : t.offset().top + t.height() + e
			}, this.getCurrentScrollOffset = function(e) {
				var t = 0,
					i = e.height();
				return t = window === e.get(0) ? e.scrollTop() : e.offset().top, (-1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod")) && (i += 80), t + i
			}, this.getNextUrl = function(t) {
				return t = t || this.$container, e(this.nextSelector, t).last().attr("href")
			}, this.load = function(t, i, s) {
				function n(t) {
					a = e(this.itemsContainerSelector, t).eq(0), 0 === a.length && (a = e(t).filter(this.itemsContainerSelector).eq(0)), a && a.find(this.itemSelector).each(function() {
						l.push(this)
					}), o.fire("loaded", [t, l]), i && (r = +new Date - d, s > r ? setTimeout(function() {
						i.call(o, t, l)
					}, s - r) : i.call(o, t, l))
				}
				var a, r, o = this,
					l = [],
					d = +new Date;
				s = s || this.defaultDelay;
				var h = {
					url: t,
					ajaxOptions: {
						dataType: "html"
					}
				};
				return o.fire("load", [h]), this.jsXhr = e.ajax(h.url, h.ajaxOptions).done(e.proxy(n, o)), this.jsXhr
			}, this.render = function(t, i) {
				var s = this,
					n = this.getLastItem(),
					a = 0,
					r = this.fire("render", [t]);
				r.done(function() {
					e(t).hide(), n.after(t), e(t).fadeIn(400, function() {
						++a < t.length || (s.fire("rendered", [t]), i && i())
					})
				}), r.fail(function() {
					i && i()
				})
			}, this.hidePagination = function() {
				this.paginationSelector && e(this.paginationSelector, this.$container).hide()
			}, this.restorePagination = function() {
				this.paginationSelector && e(this.paginationSelector, this.$container).show()
			}, this.throttle = function(t, i) {
				var s, n, a = 0;
				return s = function() {
					function e() {
						a = +new Date, t.apply(s, r)
					}
					var s = this,
						r = arguments,
						o = +new Date - a;
					n ? clearTimeout(n) : e(), o > i ? e() : n = setTimeout(e, i)
				}, e.guid && (s.guid = t.guid = t.guid || e.guid++), s
			}, this.fire = function(e, t) {
				return this.listeners[e].fireWith(this, t)
			}, this.pause = function() {
				this.isPaused = !0
			}, this.resume = function() {
				this.isPaused = !1
			}, this
		};
		t.prototype.initialize = function() {
			if (this.isInitialized) return !1;
			var e = !!("onscroll" in this.$scrollContainer.get(0)),
				t = this.getCurrentScrollOffset(this.$scrollContainer),
				i = this.getScrollThreshold();
			return !!e && (this.hidePagination(), this.bind(), this.nextUrl = this.getNextUrl(), this.nextUrl || this.fire("noneLeft", [this.getLastItem()]), this.nextUrl && t >= i ? (this.next(), this.one("rendered", function() {
				this.isInitialized = !0, this.fire("ready")
			})) : (this.isInitialized = !0, this.fire("ready")), this)
		}, t.prototype.reinitialize = function() {
			this.isInitialized = !1, this.unbind(), this.initialize()
		}, t.prototype.bind = function() {
			if (!this.isBound) {
				this.$scrollContainer.on("scroll", e.proxy(this.throttle(this.scrollHandler, 150), this));
				for (var t = 0, i = this.extensions.length; i > t; t++) this.extensions[t].bind(this);
				this.isBound = !0, this.resume()
			}
		}, t.prototype.unbind = function() {
			if (this.isBound) {
				this.$scrollContainer.off("scroll", this.scrollHandler);
				for (var e = 0, t = this.extensions.length; t > e; e++) void 0 !== this.extensions[e].unbind && this.extensions[e].unbind(this);
				this.isBound = !1
			}
		}, t.prototype.destroy = function() {
			try {
				this.jsXhr.abort()
			} catch (e) {}
			this.unbind(), this.$scrollContainer.data("ias", null)
		}, t.prototype.on = function(t, i, s) {
			if (void 0 === this.listeners[t]) throw new Error('There is no event called "' + t + '"');
			return s = s || 0, this.listeners[t].add(e.proxy(i, this), s), this.isInitialized && ("ready" === t ? e.proxy(i, this)() : "noneLeft" !== t || this.nextUrl || e.proxy(i, this)()), this
		}, t.prototype.one = function(e, t) {
			var i = this,
				s = function() {
					i.off(e, t), i.off(e, s)
				};
			return this.on(e, t), this.on(e, s), this
		}, t.prototype.off = function(e, t) {
			if (void 0 === this.listeners[e]) throw new Error('There is no event called "' + e + '"');
			return this.listeners[e].remove(t), this
		}, t.prototype.next = function() {
			var e = this.nextUrl,
				t = this;
			if (!e) return !1;
			this.pause();
			var i = this.fire("next", [e]);
			return i.done(function() {
				t.load(e, function(e, i) {
					t.render(i, function() {
						t.nextUrl = t.getNextUrl(e), t.nextUrl || t.fire("noneLeft", [t.getLastItem()]), t.resume()
					})
				})
			}), i.fail(function() {
				t.resume()
			}), !0
		}, t.prototype.extension = function(e) {
			if (void 0 === e.bind) throw new Error('Extension doesn\'t have required method "bind"');
			return void 0 !== e.initialize && e.initialize(this), this.extensions.push(e), this.isBound && this.reinitialize(), this
		}, e.ias = function(t) {
			var i = e(window);
			return i.ias.apply(i, arguments)
		}, e.fn.ias = function(i) {
			var s = Array.prototype.slice.call(arguments),
				n = this;
			return this.each(function() {
				var a = e(this),
					r = a.data("ias"),
					o = e.extend({}, e.fn.ias.defaults, a.data(), "object" == typeof i && i);
				if (r || (a.data("ias", r = new t(a, o)), o.initialize && e(document).ready(e.proxy(r.initialize, r))), "string" == typeof i) {
					if ("function" != typeof r[i]) throw new Error('There is no method called "' + i + '"');
					s.shift(), r[i].apply(r, s)
				}
				n = r
			}), n
		}, e.fn.ias.defaults = {
			item: ".item",
			container: ".listing",
			next: ".next",
			pagination: !1,
			delay: 600,
			negativeMargin: 10,
			initialize: !0
		}
	}(jQuery);
var IASHistoryExtension = function(e) {
	return e = jQuery.extend({}, this.defaults, e), this.ias = null, this.prevSelector = e.prev, this.prevUrl = null, this.listeners = {
		prev: new IASCallbacks(jQuery)
	}, this.onPageChange = function(e, t, i) {
		if (window.history && window.history.replaceState) {
			var s = history.state;
			history.replaceState(s, document.title, i)
		}
	}, this.onScroll = function(e, t) {
		var i = this.getScrollThresholdFirstItem();
		this.prevUrl && (e -= this.ias.$scrollContainer.height(), i >= e && this.prev())
	}, this.onReady = function() {
		var e = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer),
			t = this.getScrollThresholdFirstItem();
		e -= this.ias.$scrollContainer.height(), t >= e && this.prev()
	}, this.getPrevUrl = function(e) {
		return e || (e = this.ias.$container), jQuery(this.prevSelector, e).last().attr("href")
	}, this.getScrollThresholdFirstItem = function() {
		var e;
		return e = this.ias.getFirstItem(), 0 === e.length ? -1 : e.offset().top
	}, this.renderBefore = function(e, t) {
		var i = this.ias,
			s = i.getFirstItem(),
			n = 0;
		i.fire("render", [e]), jQuery(e).hide(), s.before(e), jQuery(e).fadeIn(400, function() {
			++n < e.length || (i.fire("rendered", [e]), t && t())
		})
	}, this
};
IASHistoryExtension.prototype.initialize = function(e) {
	var t = this;
	this.ias = e, jQuery.extend(e.listeners, this.listeners), e.prev = function() {
		return t.prev()
	}, this.prevUrl = this.getPrevUrl()
}, IASHistoryExtension.prototype.bind = function(e) {
	e.on("pageChange", jQuery.proxy(this.onPageChange, this)), e.on("scroll", jQuery.proxy(this.onScroll, this)), e.on("ready", jQuery.proxy(this.onReady, this))
}, IASHistoryExtension.prototype.unbind = function(e) {
	e.off("pageChange", this.onPageChange), e.off("scroll", this.onScroll), e.off("ready", this.onReady)
}, IASHistoryExtension.prototype.prev = function() {
	var e = this.prevUrl,
		t = this,
		i = this.ias;
	if (!e) return !1;
	i.pause();
	var s = i.fire("prev", [e]);
	return s.done(function() {
		i.load(e, function(e, s) {
			t.renderBefore(s, function() {
				t.prevUrl = t.getPrevUrl(e), i.resume(), t.prevUrl && t.prev()
			})
		})
	}), s.fail(function() {
		i.resume()
	}), !0
}, IASHistoryExtension.prototype.defaults = {
	prev: ".prev"
};
var IASNoneLeftExtension = function(e) {
	return e = jQuery.extend({}, this.defaults, e), this.ias = null, this.uid = (new Date).getTime(), this.html = e.html.replace("{text}", e.text), this.showNoneLeft = function() {
		var e = jQuery(this.html).attr("id", "ias_noneleft_" + this.uid);
		this.ias.getLastItem().after(e), e.fadeIn()
	}, this
};
IASNoneLeftExtension.prototype.bind = function(e) {
	this.ias = e, e.on("noneLeft", jQuery.proxy(this.showNoneLeft, this))
}, IASNoneLeftExtension.prototype.unbind = function(e) {
	e.off("noneLeft", this.showNoneLeft)
}, IASNoneLeftExtension.prototype.defaults = {
	text: "You reached the end.",
	html: '<div class="ias-noneleft" style="text-align: center;">{text}</div>'
};
var IASPagingExtension = function() {
	return this.ias = null, this.pagebreaks = [
		[0, document.location.toString()]
	], this.lastPageNum = 1, this.enabled = !0, this.listeners = {
		pageChange: new IASCallbacks(jQuery)
	}, this.onScroll = function(e, t) {
		if (this.enabled) {
			var i, s = this.ias,
				n = this.getCurrentPageNum(e),
				a = this.getCurrentPagebreak(e);
			this.lastPageNum !== n && (i = a[1], s.fire("pageChange", [n, e, i])), this.lastPageNum = n
		}
	}, this.onNext = function(e) {
		var t = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);
		this.pagebreaks.push([t, e]);
		var i = this.getCurrentPageNum(t) + 1;
		this.ias.fire("pageChange", [i, t, e]), this.lastPageNum = i
	}, this.onPrev = function(e) {
		var t = this,
			i = t.ias,
			s = i.getCurrentScrollOffset(i.$scrollContainer),
			n = s - i.$scrollContainer.height(),
			a = i.getFirstItem();
		this.enabled = !1, this.pagebreaks.unshift([0, e]), i.one("rendered", function() {
			for (var s = 1, r = t.pagebreaks.length; r > s; s++) t.pagebreaks[s][0] = t.pagebreaks[s][0] + a.offset().top;
			var o = t.getCurrentPageNum(n) + 1;
			i.fire("pageChange", [o, n, e]), t.lastPageNum = o, t.enabled = !0
		})
	}, this
};
IASPagingExtension.prototype.initialize = function(e) {
	this.ias = e, jQuery.extend(e.listeners, this.listeners)
}, IASPagingExtension.prototype.bind = function(e) {
	try {
		e.on("prev", jQuery.proxy(this.onPrev, this), this.priority)
	} catch (e) {}
	e.on("next", jQuery.proxy(this.onNext, this), this.priority), e.on("scroll", jQuery.proxy(this.onScroll, this), this.priority)
}, IASPagingExtension.prototype.unbind = function(e) {
	try {
		e.off("prev", this.onPrev)
	} catch (e) {}
	e.off("next", this.onNext), e.off("scroll", this.onScroll)
}, IASPagingExtension.prototype.getCurrentPageNum = function(e) {
	for (var t = this.pagebreaks.length - 1; t > 0; t--)
		if (e > this.pagebreaks[t][0]) return t + 1;
	return 1
}, IASPagingExtension.prototype.getCurrentPagebreak = function(e) {
	for (var t = this.pagebreaks.length - 1; t >= 0; t--)
		if (e > this.pagebreaks[t][0]) return this.pagebreaks[t];
	return null
}, IASPagingExtension.prototype.priority = 500;
var IASSpinnerExtension = function(e) {
	return e = jQuery.extend({}, this.defaults, e), this.ias = null, this.uid = (new Date).getTime(), this.src = e.src, this.html = e.html.replace("{src}", this.src), this.showSpinner = function() {
		var e = this.getSpinner() || this.createSpinner();
		this.ias.getLastItem().after(e), e.fadeIn()
	}, this.showSpinnerBefore = function() {
		var e = this.getSpinner() || this.createSpinner();
		this.ias.getFirstItem().before(e), e.fadeIn()
	}, this.removeSpinner = function() {
		this.hasSpinner() && this.getSpinner().remove()
	}, this.getSpinner = function() {
		var e = jQuery("#ias_spinner_" + this.uid);
		return e.length > 0 && e
	}, this.hasSpinner = function() {
		return jQuery("#ias_spinner_" + this.uid).length > 0
	}, this.createSpinner = function() {
		var e = jQuery(this.html).attr("id", "ias_spinner_" + this.uid);
		return e.hide(), e
	}, this
};
IASSpinnerExtension.prototype.bind = function(e) {
	this.ias = e, e.on("next", jQuery.proxy(this.showSpinner, this)), e.on("render", jQuery.proxy(this.removeSpinner, this));
	try {
		e.on("prev", jQuery.proxy(this.showSpinnerBefore, this))
	} catch (e) {}
}, IASSpinnerExtension.prototype.unbind = function(e) {
	e.off("next", this.showSpinner), e.off("render", this.removeSpinner);
	try {
		e.off("prev", this.showSpinnerBefore)
	} catch (e) {}
}, IASSpinnerExtension.prototype.defaults = {
	src: "data:image/gif;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==",
	html: '<div class="ias-spinner" style="text-align: center;"><img src="{src}"/></div>'
};
var IASTriggerExtension = function(e) {
	return e = jQuery.extend({}, this.defaults, e), this.ias = null, this.html = e.html.replace("{text}", e.text), this.htmlPrev = e.htmlPrev.replace("{text}", e.textPrev), this.enabled = !0, this.count = 0, this.offset = e.offset, this.$triggerNext = null, this.$triggerPrev = null, this.showTriggerNext = function() {
		if (!this.enabled) return !0;
		if (!1 === this.offset || ++this.count < this.offset) return !0;
		var e = this.$triggerNext || (this.$triggerNext = this.createTrigger(this.next, this.html));
		return this.ias.getLastItem().after(e), e.fadeIn(), !1
	}, this.showTriggerPrev = function() {
		if (!this.enabled) return !0;
		var e = this.$triggerPrev || (this.$triggerPrev = this.createTrigger(this.prev, this.htmlPrev));
		return this.ias.getFirstItem().before(e), e.fadeIn(), !1
	}, this.onRendered = function() {
		this.enabled = !0
	}, this.createTrigger = function(e, t) {
		var i, s = (new Date).getTime();
		return t = t || this.html, i = jQuery(t).attr("id", "ias_trigger_" + s), i.hide(), i.on("click", jQuery.proxy(e, this)), i
	}, this
};
IASTriggerExtension.prototype.bind = function(e) {
	this.ias = e, e.on("next", jQuery.proxy(this.showTriggerNext, this), this.priority), e.on("rendered", jQuery.proxy(this.onRendered, this), this.priority);
	try {
		e.on("prev", jQuery.proxy(this.showTriggerPrev, this), this.priority)
	} catch (e) {}
}, IASTriggerExtension.prototype.unbind = function(e) {
	e.off("next", this.showTriggerNext), e.off("rendered", this.onRendered);
	try {
		e.off("prev", this.showTriggerPrev)
	} catch (e) {}
}, IASTriggerExtension.prototype.next = function() {
	this.enabled = !1, this.ias.pause(), this.$triggerNext && (this.$triggerNext.remove(), this.$triggerNext = null), this.ias.next()
}, IASTriggerExtension.prototype.prev = function() {
	this.enabled = !1, this.ias.pause(), this.$triggerPrev && (this.$triggerPrev.remove(), this.$triggerPrev = null),
		this.ias.prev()
}, IASTriggerExtension.prototype.defaults = {
	text: "Load more items",
	html: '<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
	textPrev: "Load previous items",
	htmlPrev: '<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
	offset: 0
}, IASTriggerExtension.prototype.priority = 1e3, define("ias", function() {}), require(["jquery", "lazyload", "slick", "swiper", "countUp", "utils", "pjax", "nprogress", "scrollreveal"], function(e, t, i, s, n, a, r, o, l) {
	o.configure({
		showSpinner: !1
	}), e(document).on("pjax:start", o.start()).on("pjax:end", o.done()).on("pjax:timeout", function(e) {
		e.preventDefault()
	});
	var d, d = [],
		h = {
			element: e(".itel-wrapper"),
			isopen: !1,
			_bindClick: function() {
				this.navMenu.click(function(e) {
					h.isopen = !h.isopen, h.isopen ? (h.target.addClass("open-menu"), h.root.addClass("no-scroll")) : (h.target.removeClass("open-menu"), h.root.removeClass("no-scroll"), h._closeNavpopup()), e.preventDefault()
				}), this.element.on("click", ".itel-menustate", function(t) {
					t.preventDefault(), h._submenu(e(this))
				}), this.specsSection.length && this.element.on("click", ".menu-link", function(t) {
					t.preventDefault();
					var i = e(this);
					i.hasClass("menu-spec") ? h._jumpScroll(i, "spec") : i.hasClass("menu-overview") && h._jumpScroll(i, "overview"), t.stopPropagation()
				})
			},
			_submenu: function(e) {
				var t = e.parent().parent(".itel-ln-menu");
				t.hasClass("active") ? t.removeClass("active") : t.addClass("active")
			},
			submenuClose: function() {
				this.element.find(".itel-ln-menu").removeClass("active")
			},
			_unbind: function() {
				this.navItem.off(".validator")
			},
			_bindTouch: function() {
				this.navItem.on("click.validator", function() {
					var t = e(this);
					t.find(".itel-navpopup-products").length && !t.hasClass("active") ? t.addClass("active") : t.removeClass("active")
				})
			},
			_bindMouse: function() {
				this.navItem.on("mouseenter.validator", function() {
					u.element && u.element.slick("slickPause"), e(this).find(".itel-navpopup-products").length && h.target.addClass("show-subnav")
				}), this.navItem.on("mouseleave.validator", function() {
					u.element && u.element.slick("slickPlay"), e(this).find(".itel-navpopup-products").length && h.target.removeClass("show-subnav")
				})
			},
			_closeNavpopup: function() {
				this.navItem.removeClass("active")
			},
			_bind: function() {
				a.winWidth() > 768 ? this._bindMouse() : this._bindTouch()
			},
			resize: function() {
				this._unbind(), a.winWidth() > 768 ? (h.isopen = !1, e(".itel-header").removeClass("open-menu"), this._bindMouse(), this._closeNavpopup()) : this._bindTouch()
			},
			sticky: function() {
				if (this.stickyNav.length && e(document).height() > a.winHeight + 200) {
					var t = e(".itel-localnav.nav-bar-hidden");
					e(window).scrollTop() > 140 ? t.addClass("nav-sticky") : t.removeClass("nav-sticky")
				}
			},
			_jumpScroll: function(t, i) {
				var s;
				"spec" == i ? s = "#specs-overview" : "overview" == i && (s = ".itel-classic");
				var n = e(s).offset().top - 60;
				e(".menu-link").removeClass("current"), e(".menu-" + i).addClass("current"), e("html, body").stop(!0, !0).animate({
					scrollTop: n
				}, {
					duration: 800,
					easing: "swing"
				})
			},
			_cloneLocalNav: function() {
				this.stickyNav.length && this.stickyNav.after('<nav class="itel-localnav nav-bar-hidden">' + this.stickyNav.html() + "</nav>")
			},
			initialize: function() {
				this.target = e("#itel-header"), this.root = e("html"), this.navMenu = this.element.find(".nav-menu"), this.stickyNav = e(".itel-localnav"), this.subMenuNav = e(".itel-menustate"), this.specsSection = e("#specs-overview"), this.productSection = e("#product-specs"), this.expandtinyBtn = this.stickyNav.find(".itel-menustate"), this.specsLink = this.stickyNav.find(".menu-spec"), this.menuLink = this.stickyNav.find(".menu-link"), this.navItem = this.target.find(".itel-nav-item"), this._cloneLocalNav(), h._bindClick(), h._bind()
			}
		};
	h.initialize();
	var c = {
		navElement: e(".itel-gf-directory .itel-gf-item"),
		_bindClick: function() {
			this.target.click(function(t) {
				var i = e(this).parent("dl");
				i.hasClass("active") ? i.removeClass("active") : i.addClass("active")
			})
		},
		initialize: function() {
			this.target = this.navElement.find("dt"), c._bindClick()
		}
	};
	c.initialize();
	var u = {
		element: e(".index-banner-slick"),
		isInit: !1,
		carousel: function() {},
		slick: function() {
			d = e("#itel-index-banner .item"), this.element.on("init", function(t, i) {
				a.ismobile && e(".itel-index-banner").css({
					height: a.winHeight
				}), e("#itel-index-banner").css({
					opacity: 1
				}), e("#itel-header").removeClass().addClass("itel-header ih-theme-" + e(i.$slides[0]).data("theme"))
			}), this.element.slick({
				dots: !0,
				draggable: !1,
				arrows: !1,
				autoplay: !0,
				pauseOnFocus: !1,
				touchThreshold: 10,
				cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
				lazyLoad: "progressive",
				customPaging: function(e, t) {
					return ""
				}
			});
			this.element.on("beforeChange", function(t, i, s, n) {
				e("#itel-header").removeClass().addClass("itel-header ih-theme-" + e(i.$slides[n]).data("theme") + (h.isopen ? " open-menu" : ""));
				for (var a = function(e, t, i) {
						e.css({
							transform: t,
							transition: i
						})
					}; s < n;) {
					var r = i.listWidth * (1 - .1 * (n - s));
					r *= -1, a(i.$slides.eq(--n), "perspective(0) translate3d(" + r + "px, 0, 0)", "transform " + i.options.speed + "ms " + i.options.cssEase)
				}
				for (; s > n;) {
					var o = .025 * i.options.speed * (n - n - 1),
						l = i.options.speed - o;
					a(i.$slides.eq(n++), "perspective(0) translate3d(0, 0, 0)", "transform " + l + "ms " + i.options.cssEase + " " + o + "ms")
				}
			})
		},
		initialize: function() {
			this.element.length && this.slick()
		}
	};
	u.initialize(), e(".index-banner-dot .dot").click(function(t) {
		var i = e(this).index();
		owl.trigger("to.owl.carousel", [i]), e(".itel-header").removeAttr("class").addClass("theme-" + e(d[i]).data("theme"))
	});
	var p = {
		element: e(".itel-link-search"),
		_close: function() {
			e("html").removeClass("no-scroll"), this.target.removeClass("active")
		},
		_eventClick: function() {
			e("html").addClass("no-scroll"), this.target.addClass("active")
		},
		_tabNav: function(t) {
			var i = e(t).index();
			if ("0" == e(t).find(".itel-badge").text()) return !1;
			e(t).addClass("current").siblings("li").removeClass("current"), e(".search-details").eq(i).removeClass("hide").siblings().addClass("hide")
		},
		initialize: function() {
			this.tabnav = e(".search-tabnav"), this.target = e(".modal-canvas"), this.closeBtn = e(".modal-canvas .closed"), this.clientHeight = e(window).height(), this.element.click(function() {
				p._eventClick()
			}), this.closeBtn.click(function() {
				p._close()
			}), this.tabnav.find("li").click(function(e) {
				p._tabNav(this)
			})
		}
	};
	p.initialize(), e(function() {
		e("img.lazy").lazyload({
			placeholder: "fileadmin/assets/img/logo.png",
			effect: "fadeIn"
		})
	});
	var f = {
		element: e("#form-email"),
		isBool: !0,
		_handle: function() {
			var t = this;
			if (this.value = e.trim(this.input.val()), !f._validate() || !t.isBool) return this.input.addClass("error"), !1;
			e.ajax({
				type: "POST",
				url: f.url,
				dataType: "json",
				async: !0,
				data: {
					data: f.value
				},
				beforeSend: function() {
					t.isBool = !1
				},
				complete: function() {
					t.isBool = !0
				},
				success: function(e) {}
			}).error(function() {})
		},
		_validate: function() {
			return a.email.test(this.value)
		},
		_click: function() {
			this.btn.click(function() {
				f._handle()
			})
		},
		_keyup: function() {
			var t = this.input;
			t.on("keyup", function(i) {
				e.trim(t.val()) || t.removeClass("error")
			})
		},
		_submit: function() {
			this.element.submit(function(e) {
				e.preventDefault(), f._handle()
			})
		},
		initialize: function() {
			this.btn = this.element.find(".email-submit"), this.input = this.element.find('input[type="email"]'), this.url = e("#email-link").val(), this._click(), this._submit(), this._keyup()
		}
	};
	f.initialize();
	var v = {
		element: e(".goods-list-wrap"),
		url: "",
		currentpage: 2,
		isBool: !0,
		result: "",
		_ajax: function() {
			var t = this;
			e.ajax({
				url: t.url,
				type: "POST",
				data: {
					currentpage: t.currentpage
				},
				dataType: "html",
				async: !0,
				context: this,
				beforeSend: function() {
					v.pulldown.removeClass("hide")
				},
				complete: function() {
					v.pulldown.addClass("hide")
				},
				success: function(i) {
					t.result = e(i).find(".goods-list-wrap").html(), t.element.append(t.result), t.isBool = !0, t.currentpage++, e("img.lazy").lazyload({
						placeholder: "fileadmin/assets/img/logo.png",
						effect: "fadeIn"
					})
				}
			}).error(function() {})
		},
		load: function() {
			var t = parseFloat(e(window).height()) + parseFloat(e(window).scrollTop());
			e(".itel-wrapper .goods-section").length && e(document).height() - e(".itel-globalfooter").height() <= t && 1 == this.isBool && (this.isBool = !1, this.currentpage <= v.total ? this._ajax() : this.pulldown.addClass("hide"))
		},
		initialize: function() {
			e(".itel-wrapper .goods-section").length && (this.total = parseInt(e("#total").attr("value")), this.url = e("#ajaxProduct").attr("url"), this.pulldown = e('<div class="itel-pulldown hide"><img src="/fileadmin/assets/img/pub/loading.svg"></div>'), this.element.after(this.pulldown))
		}
	};
	v.initialize();
	var m = {
		element: e("[data-itel-animate]"),
		countArr: [],
		countUpInit: function() {
			var t = e(".about-global");
			if (t.length) {
				var i = {
					useEasing: !0,
					useGrouping: !0,
					separator: ",",
					decimal: "."
				};
				t.find("h4").each(function(t, s) {
					m.countArr.push(new n(e(this).get(0), 0, parseInt(e(this).text()), 0, 2.5, i))
				})
			}
		},
		countUp: function() {
			if (this.countArr.length)
				for (var e = this.countArr.length - 1; e >= 0; e--) {
					var t = this.countArr[e];
					t.error ? console.error(t.error) : t.start()
				}
		},
		scroll: function(t) {
			var i = e(t).scrollTop();
			m.element.each(function() {
				var t = e(this);
				t.offset().top <= e(window).height() / 2 + i && (t.addClass("scroll-in"), t.hasClass("about-global") && m.countUp())
			})
		},
		layout: function() {
			var t = e(".product-detail-wrapper"),
				i = a.winWidth();
			if (a.winWidth() < 576) {
				var s = i / 360;
				t.each(function(t, i) {
					var n = e(this);
					n.hasClass("product-reverse") || n.parent().css({
						height: this.getBoundingClientRect().height
					}).end().css({
						transform: "scale(" + s + ")"
					})
				})
			} else t.each(function(t, i) {
				var s = e(this);
				s.hasClass("product-reverse") || s.parent().attr("style") && s.parent().removeAttr("style").end().removeAttr("style")
			})
		},
		initialize: function() {
			this.countUpInit(), e(window).load(function() {
				m.layout()
			})
		}
	};
	m.initialize();
	var g = {
		element: e(".rpstyle"),
		breakpoints: {
			sm: "min-width: 576px",
			md: "min-width: 768px",
			lg: "min-width: 992px",
			xl: "min-width: 1200px"
		},
		options: {
			delay: 0,
			easing: "ease-in-sine",
			duration: 400,
			disable: !1,
			once: !1
		},
		_handleCss: function(e, t) {
			return t.xs && t.sm && t.xl ? e + " {" + t.xs + "}\n@media(" + this.breakpoints.sm + ") {\n\t" + e + " {" + t.sm + "}\n}\n@media(" + this.breakpoints.xl + ") {\n\t" + e + " {" + t.xl + "}\n}\n" : ""
		},
		createCss: function(e) {
			var t = document.createElement("style");
			t.type = "text/css", t.innerHTML = e, document.querySelector("head").appendChild(t)
		},
		_animateDOM: function(t) {
			var i = e(window).scrollTop();
			t.forEach(function(t, s) {
				t.position <= e(window).height() + i ? t.node.classList.add("itel-animate") : t.node.getAttribute("data-itel-once") || t.node.classList.remove("itel-animate")
			})
		},
		animate: function() {
			if (this.element.length) {
				e("body").attr({
					"data-itel-easing": this.options.easing,
					"data-itel-duration": this.options.duration,
					"data-itel-delay": this.options.delay
				});
				var t = [];
				e("[data-itel-anim]").each(function(i, s) {
					var n = e(this);
					t.push({
						node: n.get(0),
						position: parseInt(n.offset().top)
					})
				}), e(function() {
					g._animateDOM(t)
				}), e(window).resize(function(e) {
					g._animateDOM(t)
				}), e(window).scroll(function(e) {
					g._animateDOM(t)
				})
			}
		},
		stylesheet: function() {
			if (this.element.length) {
				var t = "";
				this.element.each(function(i, s) {
					var n = e(this),
						a = "rp-element-" + i,
						r = "." + a;
					n.addClass(a);
					var o = n.data();
					t += g._handleCss(r, o)
				}), this.createCss(t)
			}
		},
		initialize: function() {
			this.stylesheet(), this.animate()
		}
	};
	g.initialize();
	var y = {
		element: e(".spec-swiper"),
		swiper: function() {
			this.element.length && new s(".spec-swiper", {
				pagination: {
					el: ".swiper-pagination",
					clickable: !0,
					renderBullet: function(e, t) {
						var i = y.element.find(".swiper-slide").eq(e).data("color");
						return '<div class="' + t + '"><div class="dot-wrap"><i class="dot-block" style="background-color:' + i + '"></i><i class="dot-circle" style="border-color:' + i + '"></i></div><p>' + y.element.find(".swiper-slide").eq(e).data("title") + "</p></div>"
					}
				},
				effect: "fade"
			})
		},
		initialize: function() {
			this.swiper()
		}
	};
	y.initialize(), e(window).scroll(function() {
		h.sticky(), h.submenuClose(), v.load(), m.scroll(this)
	}), e(window).resize(function(e) {
		h.resize(), m.layout()
	})
}), require(["jquery", "slick"], function(e, t) {
	var i = {
		slide: function() {
			e("#owl-profile").slick({
				dots: !0,
				autoplay: !1,
				slidesToShow: 1,
				infinite: !0,
				slidesToScroll: 1,
				responsive: [{
					breakpoint: 768,
					settings: {
						dots: !1
					}
				}]
			})
		},
		initialize: function() {
			this.slide()
		}
	};
	e(function() {
		i.initialize()
	})
}), require(["jquery", "imagesloaded", "masonry", "ias"], function(e, t, i, s) {
	({
		element: document.querySelector(".grid"),
		url: "/itel/about-itel/press-room/page/",
		initialize: function() {
			var s = this.element;
			if (s) {
				var n = new i(s, {
					itemSelector: ".grid__item",
					columnWidth: ".grid__sizer",
					percentPosition: !0,
					horizontalOrder: !0,
					transitionDuration: "0.8s",
					visibleStyle: {
						transform: "translateY(0)",
						opacity: 1
					},
					hiddenStyle: {
						transform: "translateY(40px)",
						opacity: 0
					}
				});
				t(s).on("progress", function() {
					e(s).removeClass("grid-images-unloaded"), n.layout()
				});
				var a = e.ias({
					container: ".grid",
					item: ".grid__item",
					pagination: "#pagination",
					next: ".next a",
					delay: 1200
				});
				a.on("render", function(t) {
					e(t).css({
						opacity: 0
					})
				}), a.on("rendered", function(e) {
					n.appended(e)
				}), a.extension(new IASSpinnerExtension({
					html: '<div class="itel-pulldown"><svg width="50px"  height="50px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-ellipsis" style="background: none;">\x3c!--circle(cx="16",cy="50",r="10")--\x3e<circle cx="84" cy="50" r="3.58754" fill="#d62e2e"><animate attributeName="r" values="10;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate><animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate></circle><circle cx="71.8024" cy="50" r="10" fill="#ff0000"><animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-1s"></animate><animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-1s"></animate></circle><circle cx="37.8024" cy="50" r="10" fill="#fc5c5c"><animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate><animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate></circle><circle cx="16" cy="50" r="6.41246" fill="#d62e2e"><animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate><animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate></circle><circle cx="16" cy="50" r="0" fill="#d62e2e"><animate attributeName="r" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate><animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s" repeatCount="indefinite" begin="0s"></animate></circle></svg></div>'
				}))
			}
		}
	}).initialize()
}), define("itel", function() {});