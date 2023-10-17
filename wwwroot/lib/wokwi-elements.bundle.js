﻿var elements = (function (exports) {
    'use strict';

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$4 = Symbol(), n$4 = new Map; class s$2 { constructor(t, n) { if (this._$cssResult$ = !0, n !== e$4) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead."); this.cssText = t; } get styleSheet() { let e = n$4.get(this.cssText); return t$2 && void 0 === e && (n$4.set(this.cssText, e = new CSSStyleSheet), e.replaceSync(this.cssText)), e } toString() { return this.cssText } } const o$5 = t => new s$2("string" == typeof t ? t : t + "", e$4), r$3 = (t, ...n) => { const o = 1 === t.length ? t[0] : n.reduce(((e, n, s) => e + (t => { if (!0 === t._$cssResult$) return t.cssText; if ("number" == typeof t) return t; throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.") })(n) + t[s + 1]), t[0]); return new s$2(o, e$4) }, i$5 = (e, n) => { t$2 ? e.adoptedStyleSheets = n.map((t => t instanceof CSSStyleSheet ? t : t.styleSheet)) : n.forEach((t => { const n = document.createElement("style"), s = window.litNonce; void 0 !== s && n.setAttribute("nonce", s), n.textContent = t.cssText, e.appendChild(n); })); }, S$1 = t$2 ? t => t : t => t instanceof CSSStyleSheet ? (t => { let e = ""; for (const n of t.cssRules) e += n.cssText; return o$5(e) })(t) : t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$1, e$3; const r$2 = { toAttribute(t, i) { switch (i) { case Boolean: t = t ? "" : null; break; case Object: case Array: t = null == t ? t : JSON.stringify(t); }return t }, fromAttribute(t, i) { let s = t; switch (i) { case Boolean: s = null !== t; break; case Number: s = null === t ? null : Number(t); break; case Object: case Array: try { s = JSON.parse(t); } catch (t) { s = null; } }return s } }, h$1 = (t, i) => i !== t && (i == i || t == t), o$4 = { attribute: !0, type: String, converter: r$2, reflect: !1, hasChanged: h$1 }; class n$3 extends HTMLElement { constructor() { super(), this._$Et = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Ei = null, this.o(); } static addInitializer(t) { var i; null !== (i = this.l) && void 0 !== i || (this.l = []), this.l.push(t); } static get observedAttributes() { this.finalize(); const t = []; return this.elementProperties.forEach(((i, s) => { const e = this._$Eh(s, i); void 0 !== e && (this._$Eu.set(e, s), t.push(e)); })), t } static createProperty(t, i = o$4) { if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) { const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i); void 0 !== e && Object.defineProperty(this.prototype, t, e); } } static getPropertyDescriptor(t, i, s) { return { get() { return this[i] }, set(e) { const r = this[t]; this[i] = e, this.requestUpdate(t, r, s); }, configurable: !0, enumerable: !0 } } static getPropertyOptions(t) { return this.elementProperties.get(t) || o$4 } static finalize() { if (this.hasOwnProperty("finalized")) return !1; this.finalized = !0; const t = Object.getPrototypeOf(this); if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this._$Eu = new Map, this.hasOwnProperty("properties")) { const t = this.properties, i = [...Object.getOwnPropertyNames(t), ...Object.getOwnPropertySymbols(t)]; for (const s of i) this.createProperty(s, t[s]); } return this.elementStyles = this.finalizeStyles(this.styles), !0 } static finalizeStyles(i) { const s = []; if (Array.isArray(i)) { const e = new Set(i.flat(1 / 0).reverse()); for (const i of e) s.unshift(S$1(i)); } else void 0 !== i && s.push(S$1(i)); return s } static _$Eh(t, i) { const s = i.attribute; return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0 } o() { var t; this._$Ev = new Promise((t => this.enableUpdating = t)), this._$AL = new Map, this._$Ep(), this.requestUpdate(), null === (t = this.constructor.l) || void 0 === t || t.forEach((t => t(this))); } addController(t) { var i, s; (null !== (i = this._$Em) && void 0 !== i ? i : this._$Em = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t)); } removeController(t) { var i; null === (i = this._$Em) || void 0 === i || i.splice(this._$Em.indexOf(t) >>> 0, 1); } _$Ep() { this.constructor.elementProperties.forEach(((t, i) => { this.hasOwnProperty(i) && (this._$Et.set(i, this[i]), delete this[i]); })); } createRenderRoot() { var t; const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions); return i$5(s, this.constructor.elementStyles), s } connectedCallback() { var t; void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$Em) || void 0 === t || t.forEach((t => { var i; return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t) })); } enableUpdating(t) { } disconnectedCallback() { var t; null === (t = this._$Em) || void 0 === t || t.forEach((t => { var i; return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t) })); } attributeChangedCallback(t, i, s) { this._$AK(t, s); } _$Eg(t, i, s = o$4) { var e, h; const n = this.constructor._$Eh(t, s); if (void 0 !== n && !0 === s.reflect) { const o = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : r$2.toAttribute)(i, s.type); this._$Ei = t, null == o ? this.removeAttribute(n) : this.setAttribute(n, o), this._$Ei = null; } } _$AK(t, i) { var s, e, h; const o = this.constructor, n = o._$Eu.get(t); if (void 0 !== n && this._$Ei !== n) { const t = o.getPropertyOptions(n), l = t.converter, a = null !== (h = null !== (e = null === (s = l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof l ? l : null) && void 0 !== h ? h : r$2.fromAttribute; this._$Ei = n, this[n] = a(i, t.type), this._$Ei = null; } } requestUpdate(t, i, s) { let e = !0; void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || h$1)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$Ei !== t && (void 0 === this._$ES && (this._$ES = new Map), this._$ES.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$Ev = this._$EC()); } async _$EC() { this.isUpdatePending = !0; try { await this._$Ev; } catch (t) { Promise.reject(t); } const t = this.scheduleUpdate(); return null != t && await t, !this.isUpdatePending } scheduleUpdate() { return this.performUpdate() } performUpdate() { var t; if (!this.isUpdatePending) return; this.hasUpdated, this._$Et && (this._$Et.forEach(((t, i) => this[i] = t)), this._$Et = void 0); let i = !1; const s = this._$AL; try { i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$Em) || void 0 === t || t.forEach((t => { var i; return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t) })), this.update(s)) : this._$ET(); } catch (t) { throw i = !1, this._$ET(), t } i && this._$AE(s); } willUpdate(t) { } _$AE(t) { var i; null === (i = this._$Em) || void 0 === i || i.forEach((t => { var i; return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t) })), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t); } _$ET() { this._$AL = new Map, this.isUpdatePending = !1; } get updateComplete() { return this.getUpdateComplete() } getUpdateComplete() { return this._$Ev } shouldUpdate(t) { return !0 } update(t) { void 0 !== this._$ES && (this._$ES.forEach(((t, i) => this._$Eg(i, this[i], t))), this._$ES = void 0), this._$ET(); } updated(t) { } firstUpdated(t) { } } n$3.finalized = !0, n$3.elementProperties = new Map, n$3.elementStyles = [], n$3.shadowRootOptions = { mode: "open" }, null === (s$1 = globalThis.reactiveElementPolyfillSupport) || void 0 === s$1 || s$1.call(globalThis, { ReactiveElement: n$3 }), (null !== (e$3 = globalThis.reactiveElementVersions) && void 0 !== e$3 ? e$3 : globalThis.reactiveElementVersions = []).push("1.0.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$1, i$4; const s = globalThis.trustedTypes, e$2 = s ? s.createPolicy("lit-html", { createHTML: t => t }) : void 0, o$3 = `lit$${(Math.random() + "").slice(9)}$`, n$2 = "?" + o$3, l$1 = `<${n$2}>`, h = document, r$1 = (t = "") => h.createComment(t), d = t => null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, v = t => { var i; return u(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]) }, c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, g = /'/g, m = /"/g, $ = /^(?:script|style|textarea)$/i, p = t => (i, ...s) => ({ _$litType$: t, strings: i, values: s }), y = p(1), b = p(2), T = Symbol.for("lit-noChange"), x = Symbol.for("lit-nothing"), w = new WeakMap, A = (t, i, s) => { var e, o; const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i; let l = n._$litPart$; if (void 0 === l) { const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null; n._$litPart$ = l = new S(i.insertBefore(r$1(), t), t, void 0, null != s ? s : {}); } return l._$AI(t), l }, C = h.createTreeWalker(h, 129, null, !1), P = (t, i) => { const s = t.length - 1, n = []; let h, r = 2 === i ? "<svg>" : "", d = c; for (let i = 0; i < s; i++) { const s = t[i]; let e, u, v = -1, p = 0; for (; p < s.length && (d.lastIndex = p, u = d.exec(s), null !== u);)p = d.lastIndex, d === c ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : c, v = -1) : void 0 === u[1] ? v = -2 : (v = d.lastIndex - u[2].length, e = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? m : g) : d === m || d === g ? d = _ : d === a || d === f ? d = c : (d = _, h = void 0); const y = d === _ && t[i + 1].startsWith("/>") ? " " : ""; r += d === c ? s + l$1 : v >= 0 ? (n.push(e), s.slice(0, v) + "$lit$" + s.slice(v) + o$3 + y) : s + o$3 + (-2 === v ? (n.push(void 0), i) : y); } const u = r + (t[s] || "<?>") + (2 === i ? "</svg>" : ""); return [void 0 !== e$2 ? e$2.createHTML(u) : u, n] }; class V { constructor({ strings: t, _$litType$: i }, e) { let l; this.parts = []; let h = 0, d = 0; const u = t.length - 1, v = this.parts, [c, a] = P(t, i); if (this.el = V.createElement(c, e), C.currentNode = this.el.content, 2 === i) { const t = this.el.content, i = t.firstChild; i.remove(), t.append(...i.childNodes); } for (; null !== (l = C.nextNode()) && v.length < u;) { if (1 === l.nodeType) { if (l.hasAttributes()) { const t = []; for (const i of l.getAttributeNames()) if (i.endsWith("$lit$") || i.startsWith(o$3)) { const s = a[d++]; if (t.push(i), void 0 !== s) { const t = l.getAttribute(s.toLowerCase() + "$lit$").split(o$3), i = /([.?@])?(.*)/.exec(s); v.push({ type: 1, index: h, name: i[2], strings: t, ctor: "." === i[1] ? k : "?" === i[1] ? H : "@" === i[1] ? I : M }); } else v.push({ type: 6, index: h }); } for (const i of t) l.removeAttribute(i); } if ($.test(l.tagName)) { const t = l.textContent.split(o$3), i = t.length - 1; if (i > 0) { l.textContent = s ? s.emptyScript : ""; for (let s = 0; s < i; s++)l.append(t[s], r$1()), C.nextNode(), v.push({ type: 2, index: ++h }); l.append(t[i], r$1()); } } } else if (8 === l.nodeType) if (l.data === n$2) v.push({ type: 2, index: h }); else { let t = -1; for (; -1 !== (t = l.data.indexOf(o$3, t + 1));)v.push({ type: 7, index: h }), t += o$3.length - 1; } h++; } } static createElement(t, i) { const s = h.createElement("template"); return s.innerHTML = t, s } } function E(t, i, s = t, e) { var o, n, l, h; if (i === T) return i; let r = void 0 !== e ? null === (o = s._$Cl) || void 0 === o ? void 0 : o[e] : s._$Cu; const u = d(i) ? void 0 : i._$litDirective$; return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Cl) && void 0 !== l ? l : h._$Cl = [])[e] = r : s._$Cu = r), void 0 !== r && (i = E(t, r._$AS(t, i.values), r, e)), i } class N { constructor(t, i) { this.v = [], this._$AN = void 0, this._$AD = t, this._$AM = i; } get parentNode() { return this._$AM.parentNode } get _$AU() { return this._$AM._$AU } p(t) { var i; const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h).importNode(s, !0); C.currentNode = o; let n = C.nextNode(), l = 0, r = 0, d = e[0]; for (; void 0 !== d;) { if (l === d.index) { let i; 2 === d.type ? i = new S(n, n.nextSibling, this, t) : 1 === d.type ? i = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i = new L(n, this, t)), this.v.push(i), d = e[++r]; } l !== (null == d ? void 0 : d.index) && (n = C.nextNode(), l++); } return o } m(t) { let i = 0; for (const s of this.v) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++; } } class S { constructor(t, i, s, e) { var o; this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cg = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o; } get _$AU() { var t, i; return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cg } get parentNode() { let t = this._$AA.parentNode; const i = this._$AM; return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t } get startNode() { return this._$AA } get endNode() { return this._$AB } _$AI(t, i = this) { t = E(this, t, i), d(t) ? t === x || null == t || "" === t ? (this._$AH !== x && this._$AR(), this._$AH = x) : t !== this._$AH && t !== T && this.$(t) : void 0 !== t._$litType$ ? this.T(t) : void 0 !== t.nodeType ? this.S(t) : v(t) ? this.M(t) : this.$(t); } A(t, i = this._$AB) { return this._$AA.parentNode.insertBefore(t, i) } S(t) { this._$AH !== t && (this._$AR(), this._$AH = this.A(t)); } $(t) { this._$AH !== x && d(this._$AH) ? this._$AA.nextSibling.data = t : this.S(h.createTextNode(t)), this._$AH = t; } T(t) { var i; const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = V.createElement(e.h, this.options)), e); if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.m(s); else { const t = new N(o, this), i = t.p(this.options); t.m(s), this.S(i), this._$AH = t; } } _$AC(t) { let i = w.get(t.strings); return void 0 === i && w.set(t.strings, i = new V(t)), i } M(t) { u(this._$AH) || (this._$AH = [], this._$AR()); const i = this._$AH; let s, e = 0; for (const o of t) e === i.length ? i.push(s = new S(this.A(r$1()), this.A(r$1()), this, this.options)) : s = i[e], s._$AI(o), e++; e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e); } _$AR(t = this._$AA.nextSibling, i) { var s; for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) { const i = t.nextSibling; t.remove(), t = i; } } setConnected(t) { var i; void 0 === this._$AM && (this._$Cg = t, null === (i = this._$AP) || void 0 === i || i.call(this, t)); } } class M { constructor(t, i, s, e, o) { this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = x; } get tagName() { return this.element.tagName } get _$AU() { return this._$AM._$AU } _$AI(t, i = this, s, e) { const o = this.strings; let n = !1; if (void 0 === o) t = E(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t); else { const e = t; let l, h; for (t = o[0], l = 0; l < o.length - 1; l++)h = E(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === x ? t = x : t !== x && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h; } n && !e && this.k(t); } k(t) { t === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : ""); } } class k extends M { constructor() { super(...arguments), this.type = 3; } k(t) { this.element[this.name] = t === x ? void 0 : t; } } class H extends M { constructor() { super(...arguments), this.type = 4; } k(t) { t && t !== x ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name); } } class I extends M { constructor(t, i, s, e, o) { super(t, i, s, e, o), this.type = 5; } _$AI(t, i = this) { var s; if ((t = null !== (s = E(this, t, i, 0)) && void 0 !== s ? s : x) === T) return; const e = this._$AH, o = t === x && e !== x || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== x && (e === x || o); o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t; } handleEvent(t) { var i, s; "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t); } } class L { constructor(t, i, s) { this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s; } get _$AU() { return this._$AM._$AU } _$AI(t) { E(this, t); } } null === (t$1 = globalThis.litHtmlPolyfillSupport) || void 0 === t$1 || t$1.call(globalThis, V, S), (null !== (i$4 = globalThis.litHtmlVersions) && void 0 !== i$4 ? i$4 : globalThis.litHtmlVersions = []).push("2.0.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l, o$2, r; class n$1 extends n$3 { constructor() { super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0; } createRenderRoot() { var t, e; const i = super.createRenderRoot(); return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i } update(t) { const i = this.render(); this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Dt = A(i, this.renderRoot, this.renderOptions); } connectedCallback() { var t; super.connectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!0); } disconnectedCallback() { var t; super.disconnectedCallback(), null === (t = this._$Dt) || void 0 === t || t.setConnected(!1); } render() { return T } } n$1.finalized = !0, n$1._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, { LitElement: n$1 }), null === (o$2 = globalThis.litElementPolyfillSupport) || void 0 === o$2 || o$2.call(globalThis, { LitElement: n$1 }); (null !== (r = globalThis.litElementVersions) && void 0 !== r ? r : globalThis.litElementVersions = []).push("3.0.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n = n => e => "function" == typeof e ? ((n, e) => (window.customElements.define(n, e), e))(n, e) : ((n, e) => { const { kind: t, elements: i } = e; return { kind: t, elements: i, finisher(e) { window.customElements.define(n, e); } } })(n, e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i$3 = (i, e) => "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? { ...e, finisher(n) { n.createProperty(e.key, i); } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e.key, initializer() { "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this)); }, finisher(n) { n.createProperty(e.key, i); } }; function e$1(e) { return (n, t) => void 0 !== t ? ((i, e, n) => { e.constructor.createProperty(n, i); })(e, n, t) : i$3(e, n) }

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const o$1 = ({ finisher: e, descriptor: t }) => (o, n) => { var r; if (void 0 === n) { const n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key, i = null != t ? { kind: "method", placement: "prototype", key: n, descriptor: t(o.key) } : { ...o, key: n }; return null != e && (i.finisher = function (t) { e(t, n); }), i } { const r = o.constructor; void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(r, n); } };

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function i$2(i, n) { return o$1({ descriptor: o => { const t = { get() { var o, n; return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null }, enumerable: !0, configurable: !0 }; if (n) { const n = "symbol" == typeof o ? Symbol() : "__" + o; t.get = function () { var o, t; return void 0 === this[n] && (this[n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[n] }; } return t } }) }

    const mmToPix = 3.78;

    var __decorate$M = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.SevenSegmentElement = class SevenSegmentElement extends n$1 {
        constructor() {
            super(...arguments);
            /** The color of a lit segment */
            this.color = 'red';
            /** The color of an unlit segment */
            this.offColor = '#444';
            /** The background color of the 7-segment display */
            this.background = 'black';
            /** Number of digits to display (1, 2 or 4 are common values) */
            this.digits = 1;
            /** Whether to show a colon (clock mode) */
            this.colon = false;
            /** Whether the colon is lit or not */
            this.colonValue = false;
            /**
             * Pin format. `top` to draw pins on top of the segment display panel,
             * `extend` to extend them to the sides of the panel, and `none` to
             * disable drawing the pins.
             */
            this.pins = 'top';
            /**
             * The values for the individual segments. Each digit has 8
             * segment values in the following order: A, B, C, D, E, F, G, DP
             *
             * The values are 1 for a lit segment, and 0 for an unlit segment.
             */
            this.values = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        get pinInfo() {
            const pinXY = (n) => {
                const { startX, cols, bottomY } = this.pinPositions;
                const col = (n - 1) % cols;
                const row = 1 - Math.floor((n - 1) / cols);
                const xOffset = 1.27;
                const x = startX + xOffset + (row ? col : cols - col - 1) * 2.54;
                const y = this.pins === 'top' ? (row ? bottomY + 1 : 1) : row ? bottomY + 2 : 0;
                return { number: n, x: x * mmToPix, y: y * mmToPix };
            };
            switch (this.digits) {
                case 4:
                    // Pinout based on KW4-56NALB model
                    return [
                        Object.assign(Object.assign({ name: 'A' }, pinXY(13)), { signals: [], description: 'Segment A' }),
                        Object.assign(Object.assign({ name: 'B' }, pinXY(9)), { signals: [], description: 'Segment B' }),
                        Object.assign(Object.assign({ name: 'C' }, pinXY(4)), { signals: [], description: 'Segment C' }),
                        Object.assign(Object.assign({ name: 'D' }, pinXY(2)), { signals: [], description: 'Segment D' }),
                        Object.assign(Object.assign({ name: 'E' }, pinXY(1)), { signals: [], description: 'Segment E' }),
                        Object.assign(Object.assign({ name: 'F' }, pinXY(12)), { signals: [], description: 'Segment F' }),
                        Object.assign(Object.assign({ name: 'G' }, pinXY(5)), { signals: [], description: 'Segment G' }),
                        Object.assign(Object.assign({ name: 'DP' }, pinXY(3)), { signals: [], description: 'Decimal Point' }),
                        Object.assign(Object.assign({ name: 'DIG1' }, pinXY(14)), { signals: [], description: 'Digit 1 Common' }),
                        Object.assign(Object.assign({ name: 'DIG2' }, pinXY(11)), { signals: [], description: 'Digit 2 Common' }),
                        Object.assign(Object.assign({ name: 'DIG3' }, pinXY(10)), { signals: [], description: 'Digit 3 Common' }),
                        Object.assign(Object.assign({ name: 'DIG4' }, pinXY(6)), { signals: [], description: 'Digit 4 Common' }),
                        Object.assign(Object.assign({ name: 'COM' }, pinXY(7)), { signals: [], description: 'Common pin' }),
                        Object.assign(Object.assign({ name: 'CLN' }, pinXY(8)), { signals: [], description: 'Colon' }),
                    ];
                case 3:
                    // Pinout based on SP420281N model
                    return [
                        Object.assign(Object.assign({ name: 'A' }, pinXY(11)), { signals: [], description: 'Segment A' }),
                        Object.assign(Object.assign({ name: 'B' }, pinXY(7)), { signals: [], description: 'Segment B' }),
                        Object.assign(Object.assign({ name: 'C' }, pinXY(4)), { signals: [], description: 'Segment C' }),
                        Object.assign(Object.assign({ name: 'D' }, pinXY(2)), { signals: [], description: 'Segment D' }),
                        Object.assign(Object.assign({ name: 'E' }, pinXY(1)), { signals: [], description: 'Segment E' }),
                        Object.assign(Object.assign({ name: 'F' }, pinXY(10)), { signals: [], description: 'Segment F' }),
                        Object.assign(Object.assign({ name: 'G' }, pinXY(5)), { signals: [], description: 'Segment G' }),
                        Object.assign(Object.assign({ name: 'DP' }, pinXY(3)), { signals: [], description: 'Decimal Point' }),
                        Object.assign(Object.assign({ name: 'DIG1' }, pinXY(12)), { signals: [], description: 'Digit 1 Common' }),
                        Object.assign(Object.assign({ name: 'DIG2' }, pinXY(9)), { signals: [], description: 'Digit 2 Common' }),
                        Object.assign(Object.assign({ name: 'DIG3' }, pinXY(8)), { signals: [], description: 'Digit 3 Common' }),
                    ];
                case 2:
                    // Pinout based on CL5621C model
                    return [
                        Object.assign(Object.assign({ name: 'DIG1' }, pinXY(8)), { signals: [], description: 'Digit 1 Common' }),
                        Object.assign(Object.assign({ name: 'DIG2' }, pinXY(7)), { signals: [], description: 'Digit 2 Common' }),
                        Object.assign(Object.assign({ name: 'A' }, pinXY(10)), { signals: [], description: 'Segment A' }),
                        Object.assign(Object.assign({ name: 'B' }, pinXY(9)), { signals: [], description: 'Segment B' }),
                        Object.assign(Object.assign({ name: 'C' }, pinXY(1)), { signals: [], description: 'Segment C' }),
                        Object.assign(Object.assign({ name: 'D' }, pinXY(4)), { signals: [], description: 'Segment D' }),
                        Object.assign(Object.assign({ name: 'E' }, pinXY(3)), { signals: [], description: 'Segment E' }),
                        Object.assign(Object.assign({ name: 'F' }, pinXY(6)), { signals: [], description: 'Segment F' }),
                        Object.assign(Object.assign({ name: 'G' }, pinXY(5)), { signals: [], description: 'Segment G' }),
                        Object.assign(Object.assign({ name: 'DP' }, pinXY(2)), { signals: [], description: 'Decimal Point' }),
                    ];
                case 1:
                default:
                    // Pinout based on 5611BH model
                    return [
                        Object.assign(Object.assign({ name: 'COM.1' }, pinXY(3)), { signals: [], description: 'Common' }),
                        Object.assign(Object.assign({ name: 'COM.2' }, pinXY(8)), { signals: [], description: 'Common' }),
                        Object.assign(Object.assign({ name: 'A' }, pinXY(7)), { signals: [], description: 'Segment A' }),
                        Object.assign(Object.assign({ name: 'B' }, pinXY(6)), { signals: [], description: 'Segment B' }),
                        Object.assign(Object.assign({ name: 'C' }, pinXY(4)), { signals: [], description: 'Segment C' }),
                        Object.assign(Object.assign({ name: 'D' }, pinXY(2)), { signals: [], description: 'Segment D' }),
                        Object.assign(Object.assign({ name: 'E' }, pinXY(1)), { signals: [], description: 'Segment E' }),
                        Object.assign(Object.assign({ name: 'F' }, pinXY(9)), { signals: [], description: 'Segment F' }),
                        Object.assign(Object.assign({ name: 'G' }, pinXY(10)), { signals: [], description: 'Segment G' }),
                        Object.assign(Object.assign({ name: 'DP' }, pinXY(5)), { signals: [], description: 'Decimal Point' }),
                    ];
            }
        }
        static get styles() {
            return r$3`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `;
        }
        get pinPositions() {
            const { digits } = this;
            const numPins = digits === 4 ? 14 : digits === 3 ? 12 : 10;
            const cols = Math.ceil(numPins / 2);
            return {
                startX: (12.55 * digits - cols * 2.54) / 2,
                bottomY: this.pins === 'extend' ? 21 : 18,
                cols,
            };
        }
        get yOffset() {
            return this.pins === 'extend' ? 2 : 0;
        }
        update(changedProperties) {
            if (changedProperties.has('digits') || changedProperties.has('pins')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        renderDigit(x, startIndex) {
            const fill = (index) => (this.values[startIndex + index] ? this.color : this.offColor);
            return b`
      <g transform="skewX(-8) translate(${x}, ${this.yOffset + 2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${fill(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${fill(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${fill(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${fill(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${fill(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${fill(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${fill(6)} />
      </g>
      <circle cx="${x + 7.4}" cy="${this.yOffset + 16}" r="0.89" fill="${fill(7)}" />
    `;
        }
        renderColon() {
            const { yOffset } = this;
            const colonPosition = 1.5 + 12.7 * Math.round(this.digits / 2);
            const colonFill = this.colonValue ? this.color : this.offColor;
            return b`
      <g transform="skewX(-8)"  fill="${colonFill}">
        <circle cx="${colonPosition}" cy="${yOffset + 5.75}" r="0.89" />
        <circle cx="${colonPosition}" cy="${yOffset + 13.25}" r="0.89" />
      </g>
    `;
        }
        renderPins() {
            const { cols, bottomY, startX: x } = this.pinPositions;
            return b`
      <g fill="url(#pin-pattern)" transform="translate(${x}, 0)">
        <rect height="2" width=${cols * 2.54} />
        <rect height="2" width=${cols * 2.54} transform="translate(0, ${bottomY})" />
      </g>
    `;
        }
        render() {
            const { digits, colon, pins, yOffset } = this;
            const width = 12.55 * digits;
            const height = pins === 'extend' ? 23 : 22;
            const digitShapes = [];
            for (let i = 0; i < digits; i++) {
                digitShapes.push(this.renderDigit(3.5 + i * 12.7, i * 8));
            }
            return y`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${pins === 'extend'
                    ? b`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`
                    : b`<circle cx="1.27" cy="1" r=0.5 fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${yOffset}" width="${width}" height="20.5" />
        ${digitShapes}<!-- -->
        ${colon ? this.renderColon() : null}<!-- -->
        ${pins !== 'none' ? this.renderPins() : null}
      </svg>
    `;
        }
    };
    __decorate$M([
        e$1()
    ], exports.SevenSegmentElement.prototype, "color", void 0);
    __decorate$M([
        e$1()
    ], exports.SevenSegmentElement.prototype, "offColor", void 0);
    __decorate$M([
        e$1()
    ], exports.SevenSegmentElement.prototype, "background", void 0);
    __decorate$M([
        e$1({ type: Number })
    ], exports.SevenSegmentElement.prototype, "digits", void 0);
    __decorate$M([
        e$1({ type: Boolean })
    ], exports.SevenSegmentElement.prototype, "colon", void 0);
    __decorate$M([
        e$1({ type: Boolean })
    ], exports.SevenSegmentElement.prototype, "colonValue", void 0);
    __decorate$M([
        e$1()
    ], exports.SevenSegmentElement.prototype, "pins", void 0);
    __decorate$M([
        e$1({ type: Array })
    ], exports.SevenSegmentElement.prototype, "values", void 0);
    exports.SevenSegmentElement = __decorate$M([
        n('wokwi-7segment')
    ], exports.SevenSegmentElement);

    const pinsFemalePattern = b`
  <pattern id="pins-female" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
    <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
    <path
      transform="translate(1.079, 1.658) rotate(180 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.25"
    ></path>
    <path
      transform="translate(1.841, 1.658) rotate(90 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.3; fill: #fff"
    ></path>
    <path
      transform="translate(1.841, 0.896)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.15; fill: #fff"
    ></path>
    <path
      transform="translate(1.079, 0.896) rotate(270 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.35"
    ></path>
  </pattern>
`;

    /** Helper function for creating PinSignalInfo objects */
    const analog = (channel) => ({ type: 'analog', channel });
    const i2c = (signal, bus = 0) => ({
        type: 'i2c',
        signal,
        bus,
    });
    const spi = (signal, bus = 0) => ({
        type: 'spi',
        signal,
        bus,
    });
    const usart = (signal, bus = 0) => ({
        type: 'usart',
        signal,
        bus,
    });
    const GND = () => ({ type: 'power', signal: 'GND' });
    const VCC = (voltage) => ({ type: 'power', signal: 'VCC', voltage });

    const SPACE_KEYS = [' ', 'Spacebar'];
    function getUserAgent() {
        return typeof navigator === 'object' ? navigator.userAgent : '';
    }
    function isMac() {
        return getUserAgent().indexOf('Macintosh') >= 0;
    }
    function ctrlCmdPressed(e) {
        return isMac() ? e.metaKey : e.ctrlKey;
    }

    var __decorate$L = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.ArduinoUnoElement = class ArduinoUnoElement extends n$1 {
        constructor() {
            super(...arguments);
            this.led13 = false;
            this.ledRX = false;
            this.ledTX = false;
            this.ledPower = false;
            this.resetPressed = false;
            this.pinInfo = [
                { name: 'A5.2', x: 87, y: 9, signals: [analog(5), i2c('SCL')] },
                { name: 'A4.2', x: 97, y: 9, signals: [analog(4), i2c('SDA')] },
                { name: 'AREF', x: 106, y: 9, signals: [] },
                { name: 'GND.1', x: 115.5, y: 9, signals: [{ type: 'power', signal: 'GND' }] },
                { name: '13', x: 125, y: 9, signals: [spi('SCK')] },
                { name: '12', x: 134.5, y: 9, signals: [spi('MISO')] },
                { name: '11', x: 144, y: 9, signals: [spi('MOSI'), { type: 'pwm' }] },
                { name: '10', x: 153.5, y: 9, signals: [spi('SS'), { type: 'pwm' }] },
                { name: '9', x: 163, y: 9, signals: [{ type: 'pwm' }] },
                { name: '8', x: 173, y: 9, signals: [] },
                { name: '7', x: 189, y: 9, signals: [] },
                { name: '6', x: 198.5, y: 9, signals: [{ type: 'pwm' }] },
                { name: '5', x: 208, y: 9, signals: [{ type: 'pwm' }] },
                { name: '4', x: 217.5, y: 9, signals: [] },
                { name: '3', x: 227, y: 9, signals: [{ type: 'pwm' }] },
                { name: '2', x: 236.5, y: 9, signals: [] },
                { name: '1', x: 246, y: 9, signals: [usart('TX')] },
                { name: '0', x: 255.5, y: 9, signals: [usart('RX')] },
                { name: 'IOREF', x: 131, y: 191.5, signals: [] },
                { name: 'RESET', x: 140.5, y: 191.5, signals: [] },
                { name: '3.3V', x: 150, y: 191.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
                { name: '5V', x: 160, y: 191.5, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: 'GND.2', x: 169.5, y: 191.5, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'GND.3', x: 179, y: 191.5, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'VIN', x: 188.5, y: 191.5, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'A0', x: 208, y: 191.5, signals: [analog(0)] },
                { name: 'A1', x: 217.5, y: 191.5, signals: [analog(1)] },
                { name: 'A2', x: 227, y: 191.5, signals: [analog(2)] },
                { name: 'A3', x: 236.5, y: 191.5, signals: [analog(3)] },
                { name: 'A4', x: 246, y: 191.5, signals: [analog(4), i2c('SDA')] },
                { name: 'A5', x: 255.5, y: 191.5, signals: [analog(5), i2c('SCL')] },
            ];
        }
        static get styles() {
            return r$3`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `;
        }
        render() {
            const { ledPower, led13, ledRX, ledTX } = this;
            return y`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${pinsFemalePattern}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- reset button -->
        <rect x="3.816" y="1.4125" width="6.2151" height="6.0268" fill="#9b9b9b" />
        <g fill="#e6e6e6">
          <rect x="2.1368" y="1.954" width="1.695" height=".84994" />
          <rect x="2.121" y="3.8362" width="1.695" height=".84994" />
          <rect x="2.0974" y="5.8608" width="1.695" height=".84994" />
          <rect x="10.031" y="6.0256" width="1.695" height=".84994" />
          <rect x="10.008" y="1.9528" width="1.695" height=".84994" />
        </g>
        <circle
          id="reset-button"
          cx="6.9619"
          cy="4.5279"
          r="1.5405"
          fill="#960000"
          stroke="#777"
          stroke-width="0.15"
          tabindex="0"
          @mousedown=${() => this.down()}
          @touchstart=${() => this.down()}
          @mouseup=${() => this.up()}
          @mouseleave=${() => this.leave()}
          @touchend=${() => this.leave()}
          @keydown=${(e) => SPACE_KEYS.includes(e.key) && this.down()}
          @keyup=${(e) => SPACE_KEYS.includes(e.key) && this.up()}
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${0.38 + 2.54 * 10}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${0.38 + 2.54 * 6}" height="2.54" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <g fill="#252728">
            <circle cx="33.269" cy="36.847" r="1" />
            <circle cx="59.939" cy="36.847" r="1" />
            <path d="M65 38.05a1.13 1.13 0 010-2.26v2.27z" />
          </g>
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${ledPower &&
                b`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${led13 &&
                b`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${ledTX &&
                b`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${ledRX &&
                b`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">UNO</text>
      </svg>
    `;
        }
        down() {
            if (this.resetPressed) {
                return;
            }
            this.resetPressed = true;
            this.resetButton.style.stroke = '#333';
            this.dispatchEvent(new CustomEvent('button-press', {
                detail: 'reset',
            }));
        }
        up() {
            if (!this.resetPressed) {
                return;
            }
            this.resetPressed = false;
            this.resetButton.style.stroke = '';
            this.dispatchEvent(new CustomEvent('button-release', {
                detail: 'reset',
            }));
        }
        leave() {
            this.resetButton.blur();
            this.up();
        }
    };
    __decorate$L([
        e$1()
    ], exports.ArduinoUnoElement.prototype, "led13", void 0);
    __decorate$L([
        e$1()
    ], exports.ArduinoUnoElement.prototype, "ledRX", void 0);
    __decorate$L([
        e$1()
    ], exports.ArduinoUnoElement.prototype, "ledTX", void 0);
    __decorate$L([
        e$1()
    ], exports.ArduinoUnoElement.prototype, "ledPower", void 0);
    __decorate$L([
        e$1()
    ], exports.ArduinoUnoElement.prototype, "resetPressed", void 0);
    __decorate$L([
        i$2('#reset-button')
    ], exports.ArduinoUnoElement.prototype, "resetButton", void 0);
    exports.ArduinoUnoElement = __decorate$L([
        n('wokwi-arduino-uno')
    ], exports.ArduinoUnoElement);

    // Font rasterized from datasheet: https://www.sparkfun.com/datasheets/LCD/HD44780.pdf
    // prettier-ignore
    const fontA00 = new Uint8Array([
        /* 0 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 1 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 2 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 3 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 4 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 5 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 6 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 7 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 8 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 9 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 10 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 11 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 12 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 13 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 14 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 15 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 16 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 17 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 18 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 19 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 20 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 21 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 22 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 23 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 24 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 25 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 26 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 27 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 28 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 29 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 30 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 31 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 32 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 33 */ 4, 4, 4, 4, 0, 0, 4, 0,
        /* 34 */ 10, 10, 10, 0, 0, 0, 0, 0,
        /* 35 */ 10, 10, 31, 10, 31, 10, 10, 0,
        /* 36 */ 4, 30, 5, 14, 20, 15, 4, 0,
        /* 37 */ 3, 19, 8, 4, 2, 25, 24, 0,
        /* 38 */ 6, 9, 5, 2, 21, 9, 22, 0,
        /* 39 */ 6, 4, 2, 0, 0, 0, 0, 0,
        /* 40 */ 8, 4, 2, 2, 2, 4, 8, 0,
        /* 41 */ 2, 4, 8, 8, 8, 4, 2, 0,
        /* 42 */ 0, 4, 21, 14, 21, 4, 0, 0,
        /* 43 */ 0, 4, 4, 31, 4, 4, 0, 0,
        /* 44 */ 0, 0, 0, 0, 6, 4, 2, 0,
        /* 45 */ 0, 0, 0, 31, 0, 0, 0, 0,
        /* 46 */ 0, 0, 0, 0, 0, 6, 6, 0,
        /* 47 */ 0, 16, 8, 4, 2, 1, 0, 0,
        /* 48 */ 14, 17, 25, 21, 19, 17, 14, 0,
        /* 49 */ 4, 6, 4, 4, 4, 4, 14, 0,
        /* 50 */ 14, 17, 16, 8, 4, 2, 31, 0,
        /* 51 */ 31, 8, 4, 8, 16, 17, 14, 0,
        /* 52 */ 8, 12, 10, 9, 31, 8, 8, 0,
        /* 53 */ 31, 1, 15, 16, 16, 17, 14, 0,
        /* 54 */ 12, 2, 1, 15, 17, 17, 14, 0,
        /* 55 */ 31, 17, 16, 8, 4, 4, 4, 0,
        /* 56 */ 14, 17, 17, 14, 17, 17, 14, 0,
        /* 57 */ 14, 17, 17, 30, 16, 8, 6, 0,
        /* 58 */ 0, 6, 6, 0, 6, 6, 0, 0,
        /* 59 */ 0, 6, 6, 0, 6, 4, 2, 0,
        /* 60 */ 8, 4, 2, 1, 2, 4, 8, 0,
        /* 61 */ 0, 0, 31, 0, 31, 0, 0, 0,
        /* 62 */ 2, 4, 8, 16, 8, 4, 2, 0,
        /* 63 */ 14, 17, 16, 8, 4, 0, 4, 0,
        /* 64 */ 14, 17, 16, 22, 21, 21, 14, 0,
        /* 65 */ 14, 17, 17, 17, 31, 17, 17, 0,
        /* 66 */ 15, 17, 17, 15, 17, 17, 15, 0,
        /* 67 */ 14, 17, 1, 1, 1, 17, 14, 0,
        /* 68 */ 7, 9, 17, 17, 17, 9, 7, 0,
        /* 69 */ 31, 1, 1, 15, 1, 1, 31, 0,
        /* 70 */ 31, 1, 1, 15, 1, 1, 1, 0,
        /* 71 */ 14, 17, 1, 29, 17, 17, 30, 0,
        /* 72 */ 17, 17, 17, 31, 17, 17, 17, 0,
        /* 73 */ 14, 4, 4, 4, 4, 4, 14, 0,
        /* 74 */ 28, 8, 8, 8, 8, 9, 6, 0,
        /* 75 */ 17, 9, 5, 3, 5, 9, 17, 0,
        /* 76 */ 1, 1, 1, 1, 1, 1, 31, 0,
        /* 77 */ 17, 27, 21, 21, 17, 17, 17, 0,
        /* 78 */ 17, 17, 19, 21, 25, 17, 17, 0,
        /* 79 */ 14, 17, 17, 17, 17, 17, 14, 0,
        /* 80 */ 15, 17, 17, 15, 1, 1, 1, 0,
        /* 81 */ 14, 17, 17, 17, 21, 9, 22, 0,
        /* 82 */ 15, 17, 17, 15, 5, 9, 17, 0,
        /* 83 */ 30, 1, 1, 14, 16, 16, 15, 0,
        /* 84 */ 31, 4, 4, 4, 4, 4, 4, 0,
        /* 85 */ 17, 17, 17, 17, 17, 17, 14, 0,
        /* 86 */ 17, 17, 17, 17, 17, 10, 4, 0,
        /* 87 */ 17, 17, 17, 21, 21, 21, 10, 0,
        /* 88 */ 17, 17, 10, 4, 10, 17, 17, 0,
        /* 89 */ 17, 17, 17, 10, 4, 4, 4, 0,
        /* 90 */ 31, 16, 8, 4, 2, 1, 31, 0,
        /* 91 */ 7, 1, 1, 1, 1, 1, 7, 0,
        /* 92 */ 17, 10, 31, 4, 31, 4, 4, 0,
        /* 93 */ 14, 8, 8, 8, 8, 8, 14, 0,
        /* 94 */ 4, 10, 17, 0, 0, 0, 0, 0,
        /* 95 */ 0, 0, 0, 0, 0, 0, 31, 0,
        /* 96 */ 2, 4, 8, 0, 0, 0, 0, 0,
        /* 97 */ 0, 0, 14, 16, 30, 17, 30, 0,
        /* 98 */ 1, 1, 13, 19, 17, 17, 15, 0,
        /* 99 */ 0, 0, 14, 1, 1, 17, 14, 0,
        /* 100 */ 16, 16, 22, 25, 17, 17, 30, 0,
        /* 101 */ 0, 0, 14, 17, 31, 1, 14, 0,
        /* 102 */ 12, 18, 2, 7, 2, 2, 2, 0,
        /* 103 */ 0, 30, 17, 17, 30, 16, 14, 0,
        /* 104 */ 1, 1, 13, 19, 17, 17, 17, 0,
        /* 105 */ 4, 0, 6, 4, 4, 4, 14, 0,
        /* 106 */ 8, 0, 12, 8, 8, 9, 6, 0,
        /* 107 */ 1, 1, 9, 5, 3, 5, 9, 0,
        /* 108 */ 6, 4, 4, 4, 4, 4, 14, 0,
        /* 109 */ 0, 0, 11, 21, 21, 17, 17, 0,
        /* 110 */ 0, 0, 13, 19, 17, 17, 17, 0,
        /* 111 */ 0, 0, 14, 17, 17, 17, 14, 0,
        /* 112 */ 0, 0, 15, 17, 15, 1, 1, 0,
        /* 113 */ 0, 0, 22, 25, 30, 16, 16, 0,
        /* 114 */ 0, 0, 13, 19, 1, 1, 1, 0,
        /* 115 */ 0, 0, 14, 1, 14, 16, 15, 0,
        /* 116 */ 2, 2, 7, 2, 2, 18, 12, 0,
        /* 117 */ 0, 0, 17, 17, 17, 25, 22, 0,
        /* 118 */ 0, 0, 17, 17, 17, 10, 4, 0,
        /* 119 */ 0, 0, 17, 21, 21, 21, 10, 0,
        /* 120 */ 0, 0, 17, 10, 4, 10, 17, 0,
        /* 121 */ 0, 0, 17, 17, 30, 16, 14, 0,
        /* 122 */ 0, 0, 31, 8, 4, 2, 31, 0,
        /* 123 */ 8, 4, 4, 2, 4, 4, 8, 0,
        /* 124 */ 4, 4, 4, 4, 4, 4, 4, 0,
        /* 125 */ 2, 4, 4, 8, 4, 4, 2, 0,
        /* 126 */ 0, 4, 8, 31, 8, 4, 0, 0,
        /* 127 */ 0, 4, 2, 31, 2, 4, 0, 0,
        /* 128 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 129 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 130 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 131 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 132 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 133 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 134 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 135 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 136 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 137 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 138 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 139 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 140 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 141 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 142 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 143 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 144 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 145 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 146 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 147 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 148 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 149 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 150 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 151 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 152 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 153 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 154 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 155 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 156 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 157 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 158 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 159 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 160 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 161 */ 0, 0, 0, 0, 7, 5, 7, 0,
        /* 162 */ 28, 4, 4, 4, 0, 0, 0, 0,
        /* 163 */ 0, 0, 0, 4, 4, 4, 7, 0,
        /* 164 */ 0, 0, 0, 0, 1, 2, 4, 0,
        /* 165 */ 0, 0, 0, 6, 6, 0, 0, 0,
        /* 166 */ 0, 31, 16, 31, 16, 8, 4, 0,
        /* 167 */ 0, 0, 31, 16, 12, 4, 2, 0,
        /* 168 */ 0, 0, 8, 4, 6, 5, 4, 0,
        /* 169 */ 0, 0, 4, 31, 17, 16, 12, 0,
        /* 170 */ 0, 0, 31, 4, 4, 4, 31, 0,
        /* 171 */ 0, 0, 8, 31, 12, 10, 9, 0,
        /* 172 */ 0, 0, 2, 31, 18, 10, 2, 0,
        /* 173 */ 0, 0, 0, 14, 8, 8, 31, 0,
        /* 174 */ 0, 0, 15, 8, 15, 8, 15, 0,
        /* 175 */ 0, 0, 0, 21, 21, 16, 12, 0,
        /* 176 */ 0, 0, 0, 31, 0, 0, 0, 0,
        /* 177 */ 31, 16, 20, 12, 4, 4, 2, 0,
        /* 178 */ 16, 8, 4, 6, 5, 4, 4, 0,
        /* 179 */ 4, 31, 17, 17, 16, 8, 4, 0,
        /* 180 */ 0, 31, 4, 4, 4, 4, 31, 0,
        /* 181 */ 8, 31, 8, 12, 10, 9, 8, 0,
        /* 182 */ 2, 31, 18, 18, 18, 18, 9, 0,
        /* 183 */ 4, 31, 4, 31, 4, 4, 4, 0,
        /* 184 */ 0, 30, 18, 17, 16, 8, 6, 0,
        /* 185 */ 2, 30, 9, 8, 8, 8, 4, 0,
        /* 186 */ 0, 31, 16, 16, 16, 16, 31, 0,
        /* 187 */ 10, 31, 10, 10, 8, 4, 2, 0,
        /* 188 */ 0, 3, 16, 19, 16, 8, 7, 0,
        /* 189 */ 0, 31, 16, 8, 4, 10, 17, 0,
        /* 190 */ 2, 31, 18, 10, 2, 2, 28, 0,
        /* 191 */ 0, 17, 17, 18, 16, 8, 6, 0,
        /* 192 */ 0, 30, 18, 21, 24, 8, 6, 0,
        /* 193 */ 8, 7, 4, 31, 4, 4, 2, 0,
        /* 194 */ 0, 21, 21, 21, 16, 8, 4, 0,
        /* 195 */ 14, 0, 31, 4, 4, 4, 2, 0,
        /* 196 */ 2, 2, 2, 6, 10, 2, 2, 0,
        /* 197 */ 4, 4, 31, 4, 4, 2, 1, 0,
        /* 198 */ 0, 14, 0, 0, 0, 0, 31, 0,
        /* 199 */ 0, 31, 16, 10, 4, 10, 1, 0,
        /* 200 */ 4, 31, 8, 4, 14, 21, 4, 0,
        /* 201 */ 8, 8, 8, 8, 8, 4, 2, 0,
        /* 202 */ 0, 4, 8, 17, 17, 17, 17, 0,
        /* 203 */ 1, 1, 31, 1, 1, 1, 30, 0,
        /* 204 */ 0, 31, 16, 16, 16, 8, 6, 0,
        /* 205 */ 0, 2, 5, 8, 16, 16, 0, 0,
        /* 206 */ 4, 31, 4, 4, 21, 21, 4, 0,
        /* 207 */ 0, 31, 16, 16, 10, 4, 8, 0,
        /* 208 */ 0, 14, 0, 14, 0, 14, 16, 0,
        /* 209 */ 0, 4, 2, 1, 17, 31, 16, 0,
        /* 210 */ 0, 16, 16, 10, 4, 10, 1, 0,
        /* 211 */ 0, 31, 2, 31, 2, 2, 28, 0,
        /* 212 */ 2, 2, 31, 18, 10, 2, 2, 0,
        /* 213 */ 0, 14, 8, 8, 8, 8, 31, 0,
        /* 214 */ 0, 31, 16, 31, 16, 16, 31, 0,
        /* 215 */ 14, 0, 31, 16, 16, 8, 4, 0,
        /* 216 */ 9, 9, 9, 9, 8, 4, 2, 0,
        /* 217 */ 0, 4, 5, 5, 21, 21, 13, 0,
        /* 218 */ 0, 1, 1, 17, 9, 5, 3, 0,
        /* 219 */ 0, 31, 17, 17, 17, 17, 31, 0,
        /* 220 */ 0, 31, 17, 17, 16, 8, 4, 0,
        /* 221 */ 0, 3, 0, 16, 16, 8, 7, 0,
        /* 222 */ 4, 9, 2, 0, 0, 0, 0, 0,
        /* 223 */ 7, 5, 7, 0, 0, 0, 0, 0,
        /* 224 */ 0, 0, 18, 21, 9, 9, 22, 0,
        /* 225 */ 10, 0, 14, 16, 30, 17, 30, 0,
        /* 226 */ 0, 0, 14, 17, 15, 17, 15, 1,
        /* 227 */ 0, 0, 14, 1, 6, 17, 14, 0,
        /* 228 */ 0, 0, 17, 17, 17, 25, 23, 1,
        /* 229 */ 0, 0, 30, 5, 9, 17, 14, 0,
        /* 230 */ 0, 0, 12, 18, 17, 17, 15, 1,
        /* 231 */ 0, 0, 30, 17, 17, 17, 30, 16,
        /* 232 */ 0, 0, 28, 4, 4, 5, 2, 0,
        /* 233 */ 0, 8, 11, 8, 0, 0, 0, 0,
        /* 234 */ 8, 0, 12, 8, 8, 8, 8, 8,
        /* 235 */ 0, 5, 2, 5, 0, 0, 0, 0,
        /* 236 */ 0, 4, 14, 5, 21, 14, 4, 0,
        /* 237 */ 2, 2, 7, 2, 7, 2, 30, 0,
        /* 238 */ 14, 0, 13, 19, 17, 17, 17, 0,
        /* 239 */ 10, 0, 14, 17, 17, 17, 14, 0,
        /* 240 */ 0, 0, 13, 19, 17, 17, 15, 1,
        /* 241 */ 0, 0, 22, 25, 17, 17, 30, 16,
        /* 242 */ 0, 14, 17, 31, 17, 17, 14, 0,
        /* 243 */ 0, 0, 0, 26, 21, 11, 0, 0,
        /* 244 */ 0, 0, 14, 17, 17, 10, 27, 0,
        /* 245 */ 10, 0, 17, 17, 17, 17, 25, 22,
        /* 246 */ 31, 1, 2, 4, 2, 1, 31, 0,
        /* 247 */ 0, 0, 31, 10, 10, 10, 25, 0,
        /* 248 */ 31, 0, 17, 10, 4, 10, 17, 0,
        /* 249 */ 0, 0, 17, 17, 17, 17, 30, 16,
        /* 250 */ 0, 16, 15, 4, 31, 4, 4, 0,
        /* 251 */ 0, 0, 31, 2, 30, 18, 17, 0,
        /* 252 */ 0, 0, 31, 21, 31, 17, 17, 0,
        /* 253 */ 0, 4, 0, 31, 0, 4, 0, 0,
        /* 254 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 255 */ 31, 31, 31, 31, 31, 31, 31, 31,
    ]);

    var __decorate$K = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const charXSpacing = 3.55;
    const charYSpacing = 5.95;
    const backgroundColors = {
        green: '#6cb201',
        blue: '#000eff',
    };
    exports.LCD1602Element = class LCD1602Element extends n$1 {
        constructor() {
            super(...arguments);
            this.color = 'black';
            this.background = 'green';
            this.characters = new Uint8Array(32);
            this.font = fontA00;
            this.cursor = false;
            this.blink = false;
            this.cursorX = 0;
            this.cursorY = 0;
            this.backlight = true;
            this.pins = 'full';
            this.numCols = 16;
            this.numRows = 2;
        }
        get text() {
            return Array.from(this.characters)
                .map((c) => String.fromCharCode(c))
                .join('');
        }
        set text(value) {
            this.characters = new Uint8Array(value.split('').map((char) => char.charCodeAt(0)));
        }
        static get styles() {
            return r$3`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `;
        }
        get panelHeight() {
            return this.rows * 5.75;
        }
        get pinInfo() {
            const { panelHeight } = this;
            const y = 87.5 + panelHeight * mmToPix;
            switch (this.pins) {
                case 'i2c':
                    return [
                        { name: 'GND', x: 4, y: 32, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
                        { name: 'VCC', x: 4, y: 41.5, number: 2, signals: [{ type: 'power', signal: 'VCC' }] },
                        { name: 'SDA', x: 4, y: 51, number: 3, signals: [i2c('SDA')] },
                        { name: 'SCL', x: 4, y: 60.5, number: 4, signals: [i2c('SCL')] },
                    ];
                case 'full':
                default:
                    return [
                        { name: 'VSS', x: 32, y, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
                        { name: 'VDD', x: 41.5, y, number: 2, signals: [{ type: 'power', signal: 'VCC' }] },
                        { name: 'V0', x: 51.5, y, number: 3, signals: [] },
                        { name: 'RS', x: 60.5, y, number: 4, signals: [] },
                        { name: 'RW', x: 70.5, y, number: 5, signals: [] },
                        { name: 'E', x: 80, y, number: 6, signals: [] },
                        { name: 'D0', x: 89.5, y, number: 7, signals: [] },
                        { name: 'D1', x: 99.5, y, number: 8, signals: [] },
                        { name: 'D2', x: 109, y, number: 9, signals: [] },
                        { name: 'D3', x: 118.5, y, number: 10, signals: [] },
                        { name: 'D4', x: 128, y, number: 11, signals: [] },
                        { name: 'D5', x: 137.5, y, number: 12, signals: [] },
                        { name: 'D6', x: 147, y, number: 13, signals: [] },
                        { name: 'D7', x: 156.5, y, number: 14, signals: [] },
                        { name: 'A', x: 166.5, y, number: 15, signals: [] },
                        { name: 'K', x: 176, y, number: 16, signals: [] },
                    ];
            }
        }
        get cols() {
            return this.numCols;
        }
        get rows() {
            return this.numRows;
        }
        update(changedProperties) {
            if (changedProperties.has('pins')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        path(characters) {
            const xSpacing = 0.6;
            const ySpacing = 0.7;
            const result = [];
            const { cols } = this;
            for (let i = 0; i < characters.length; i++) {
                const charX = (i % cols) * charXSpacing;
                const charY = Math.floor(i / cols) * charYSpacing;
                for (let py = 0; py < 8; py++) {
                    const row = this.font[characters[i] * 8 + py];
                    for (let px = 0; px < 5; px++) {
                        if (row & (1 << px)) {
                            const x = (charX + px * xSpacing).toFixed(2);
                            const y = (charY + py * ySpacing).toFixed(2);
                            result.push(`M ${x} ${y}h0.55v0.65h-0.55Z`);
                        }
                    }
                }
            }
            return result.join(' ');
        }
        renderCursor() {
            const { cols, rows, cursor, cursorX, cursorY, blink, color } = this;
            const xOffset = 12.45 + cursorX * charXSpacing;
            const yOffset = 12.55 + cursorY * charYSpacing;
            if (cursorX < 0 || cursorX >= cols || cursorY < 0 || cursorY >= rows) {
                return null;
            }
            const result = [];
            if (blink) {
                result.push(b`
        <rect x="${xOffset}" y="${yOffset}" width="2.95" height="5.55" fill="${color}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `);
            }
            if (cursor) {
                const y = yOffset + 0.7 * 7;
                result.push(b`<rect x="${xOffset}" y="${y}" width="2.95" height="0.65" fill="${color}" />`);
            }
            return result;
        }
        renderI2CPins() {
            return b`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text fill="white" font-size="1.5px" font-family= "monospace">
      <tspan y="6.8" x="0.7" fill="white">1</tspan>
      <tspan y="8.9" x="2.3" fill="white">GND</tspan>
      <tspan y="11.4" x="2.3" fill="white">VCC</tspan>
      <tspan y="14" x="2.3" fill="white">SDA</tspan>
      <tspan y="16.6" x="2.3" fill="white">SCL</tspan>
      </text>
    `;
        }
        renderPins(panelHeight) {
            const y = panelHeight + 21.1;
            return b`
      <g transform="translate(0, ${y})">
        <rect x="7.55" y="1" height="2.5" width="40.64" fill="url(#pins)" />
        <text fill="white" font-size="1.5px" font-family= "monospace">
          <tspan x="6" y="2.7">1</tspan>
          <tspan x="7.2" y="0.7">VSS</tspan>
          <tspan x="9.9" y="0.7">VDD</tspan>
          <tspan x="12.7" y="0.7">V0</tspan>
          <tspan x="15.2" y="0.7">RS</tspan>
          <tspan x="17.8" y="0.7">RW</tspan>
          <tspan x="20.8" y="0.7">E</tspan>
          <tspan x="22.7" y="0.7">D0</tspan>
          <tspan x="25.3" y="0.7">D1</tspan>
          <tspan x="27.9" y="0.7">D2</tspan>
          <tspan x="30.4" y="0.7">D3</tspan>
          <tspan x="33" y="0.7">D4</tspan>
          <tspan x="35.6" y="0.7">D5</tspan>
          <tspan x="38.2" y="0.7">D6</tspan>
          <tspan x="40.8" y="0.7">D7</tspan>
          <tspan x="43.6" y="0.7">A</tspan>
          <tspan x="46.2" y="0.7">K</tspan>
          <tspan x="48" y="2.7">16</tspan>
        </text>
      </g>
    `;
        }
        render() {
            const { color, characters, background, pins, panelHeight, cols } = this;
            const darken = this.backlight ? 0 : 0.5;
            const actualBgColor = background in backgroundColors ? backgroundColors[background] : backgroundColors;
            const panelWidth = cols * 3.5125;
            const width = panelWidth + 23.8;
            const height = panelHeight + 24.5;
            // Dimensions according to:
            // https://www.winstar.com.tw/products/character-lcd-display-module/16x2-lcd.html
            return y`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="${width}" height="${height}" fill="#087f45" />
        <rect x="4.95" y="5.7" width="${panelWidth + 15}" height="${panelHeight + 13.7}" />
        <rect
          x="7.55"
          y="10.3"
          width="${panelWidth + 9.8}"
          height="${panelHeight + 4.5}"
          rx="1.5"
          ry="1.5"
          fill="${actualBgColor}"
        />
        <rect
          x="7.55"
          y="10.3"
          width="${panelWidth + 9.8}"
          height="${panelHeight + 4.5}"
          rx="1.5"
          ry="1.5"
          opacity="${darken}"
        />
        ${pins === 'i2c' ? this.renderI2CPins() : null}
        ${pins === 'full' ? this.renderPins(panelHeight) : null}
        <rect
          x="12.45"
          y="12.55"
          width="${panelWidth}"
          height="${panelHeight}"
          fill="url(#characters)"
        />
        <path d="${this.path(characters)}" transform="translate(12.45, 12.55)" fill="${color}" />
        ${this.renderCursor()}
      </svg>
    `;
        }
    };
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "color", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "background", void 0);
    __decorate$K([
        e$1({ type: Array })
    ], exports.LCD1602Element.prototype, "characters", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "font", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "cursor", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "blink", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "cursorX", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "cursorY", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "backlight", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "pins", void 0);
    __decorate$K([
        e$1()
    ], exports.LCD1602Element.prototype, "text", null);
    exports.LCD1602Element = __decorate$K([
        n('wokwi-lcd1602')
    ], exports.LCD1602Element);

    // Font rasterized from datasheet: https://www.sparkfun.com/datasheets/LCD/HD44780.pdf
    // prettier-ignore
    const fontA02 = new Uint8Array([
        /* 0 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 1 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 2 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 3 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 4 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 5 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 6 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 7 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 8 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 9 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 10 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 11 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 12 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 13 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 14 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 15 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 32 */ 0, 2, 6, 14, 30, 14, 6, 2,
        /* 33 */ 0, 8, 12, 14, 15, 14, 12, 8,
        /* 34 */ 0, 18, 9, 27, 0, 0, 0, 0,
        /* 35 */ 0, 27, 18, 9, 0, 0, 0, 0,
        /* 36 */ 0, 4, 14, 31, 0, 4, 14, 31,
        /* 37 */ 0, 31, 14, 4, 0, 31, 14, 4,
        /* 38 */ 0, 0, 14, 31, 31, 31, 14, 0,
        /* 39 */ 0, 16, 16, 20, 18, 31, 2, 4,
        /* 40 */ 0, 4, 14, 21, 4, 4, 4, 4,
        /* 41 */ 0, 4, 4, 4, 4, 21, 14, 4,
        /* 42 */ 0, 0, 4, 8, 31, 8, 4, 0,
        /* 43 */ 0, 0, 4, 2, 31, 2, 4, 0,
        /* 44 */ 0, 8, 4, 2, 4, 8, 0, 31,
        /* 45 */ 0, 2, 4, 8, 4, 2, 0, 31,
        /* 46 */ 0, 0, 4, 4, 14, 14, 31, 0,
        /* 47 */ 0, 0, 31, 14, 14, 4, 4, 0,
        /* 48 */ 0, 0, 0, 0, 0, 0, 0, 0,
        /* 49 */ 0, 4, 4, 4, 4, 0, 0, 4,
        /* 50 */ 0, 10, 10, 10, 0, 0, 0, 0,
        /* 51 */ 0, 10, 10, 31, 10, 31, 10, 10,
        /* 52 */ 0, 4, 30, 5, 14, 20, 15, 4,
        /* 53 */ 0, 3, 19, 8, 4, 2, 25, 24,
        /* 54 */ 0, 6, 9, 5, 2, 21, 9, 22,
        /* 55 */ 0, 6, 4, 2, 0, 0, 0, 0,
        /* 56 */ 0, 8, 4, 2, 2, 2, 4, 8,
        /* 57 */ 0, 2, 4, 8, 8, 8, 4, 2,
        /* 58 */ 0, 0, 4, 21, 14, 21, 4, 0,
        /* 59 */ 0, 0, 4, 4, 31, 4, 4, 0,
        /* 60 */ 0, 0, 0, 0, 0, 6, 4, 2,
        /* 61 */ 0, 0, 0, 0, 31, 0, 0, 0,
        /* 62 */ 0, 0, 0, 0, 0, 0, 6, 6,
        /* 63 */ 0, 0, 16, 8, 4, 2, 1, 0,
        /* 64 */ 0, 14, 17, 25, 21, 19, 17, 14,
        /* 65 */ 0, 4, 6, 4, 4, 4, 4, 14,
        /* 66 */ 0, 14, 17, 16, 8, 4, 2, 31,
        /* 67 */ 0, 31, 8, 4, 8, 16, 17, 14,
        /* 68 */ 0, 8, 12, 10, 9, 31, 8, 8,
        /* 69 */ 0, 31, 1, 15, 16, 16, 17, 14,
        /* 70 */ 0, 12, 2, 1, 15, 17, 17, 14,
        /* 71 */ 0, 31, 17, 16, 8, 4, 4, 4,
        /* 72 */ 0, 14, 17, 17, 14, 17, 17, 14,
        /* 73 */ 0, 14, 17, 17, 30, 16, 8, 6,
        /* 74 */ 0, 0, 6, 6, 0, 6, 6, 0,
        /* 75 */ 0, 0, 6, 6, 0, 6, 4, 2,
        /* 76 */ 0, 8, 4, 2, 1, 2, 4, 8,
        /* 77 */ 0, 0, 0, 31, 0, 31, 0, 0,
        /* 78 */ 0, 2, 4, 8, 16, 8, 4, 2,
        /* 79 */ 0, 14, 17, 16, 8, 4, 0, 4,
        /* 80 */ 0, 14, 17, 16, 22, 21, 21, 14,
        /* 81 */ 0, 4, 10, 17, 17, 31, 17, 17,
        /* 82 */ 0, 15, 17, 17, 15, 17, 17, 15,
        /* 83 */ 0, 14, 17, 1, 1, 1, 17, 14,
        /* 84 */ 0, 7, 9, 17, 17, 17, 9, 7,
        /* 85 */ 0, 31, 1, 1, 15, 1, 1, 31,
        /* 86 */ 0, 31, 1, 1, 15, 1, 1, 1,
        /* 87 */ 0, 14, 17, 1, 29, 17, 17, 30,
        /* 88 */ 0, 17, 17, 17, 31, 17, 17, 17,
        /* 89 */ 0, 14, 4, 4, 4, 4, 4, 14,
        /* 90 */ 0, 28, 8, 8, 8, 8, 9, 6,
        /* 91 */ 0, 17, 9, 5, 3, 5, 9, 17,
        /* 92 */ 0, 1, 1, 1, 1, 1, 1, 31,
        /* 93 */ 0, 17, 27, 21, 21, 17, 17, 17,
        /* 94 */ 0, 17, 17, 19, 21, 25, 17, 17,
        /* 95 */ 0, 14, 17, 17, 17, 17, 17, 14,
        /* 96 */ 0, 15, 17, 17, 15, 1, 1, 1,
        /* 97 */ 0, 14, 17, 17, 17, 21, 9, 22,
        /* 98 */ 0, 15, 17, 17, 15, 5, 9, 17,
        /* 99 */ 0, 14, 17, 1, 14, 16, 17, 14,
        /* 100 */ 0, 31, 4, 4, 4, 4, 4, 4,
        /* 101 */ 0, 17, 17, 17, 17, 17, 17, 14,
        /* 102 */ 0, 17, 17, 17, 17, 17, 10, 4,
        /* 103 */ 0, 17, 17, 17, 21, 21, 21, 10,
        /* 104 */ 0, 17, 17, 10, 4, 10, 17, 17,
        /* 105 */ 0, 17, 17, 17, 10, 4, 4, 4,
        /* 106 */ 0, 31, 16, 8, 4, 2, 1, 31,
        /* 107 */ 0, 14, 2, 2, 2, 2, 2, 14,
        /* 108 */ 0, 0, 1, 2, 4, 8, 16, 0,
        /* 109 */ 0, 14, 8, 8, 8, 8, 8, 14,
        /* 110 */ 0, 4, 10, 17, 0, 0, 0, 0,
        /* 111 */ 0, 0, 0, 0, 0, 0, 0, 31,
        /* 112 */ 0, 2, 4, 8, 0, 0, 0, 0,
        /* 113 */ 0, 0, 0, 14, 16, 30, 17, 30,
        /* 114 */ 0, 1, 1, 13, 19, 17, 17, 15,
        /* 115 */ 0, 0, 0, 14, 1, 1, 17, 14,
        /* 116 */ 0, 16, 16, 22, 25, 17, 17, 30,
        /* 117 */ 0, 0, 0, 14, 17, 31, 1, 14,
        /* 118 */ 0, 12, 18, 2, 7, 2, 2, 2,
        /* 119 */ 0, 0, 0, 30, 17, 30, 16, 14,
        /* 120 */ 0, 1, 1, 13, 19, 17, 17, 17,
        /* 121 */ 0, 4, 0, 4, 6, 4, 4, 14,
        /* 122 */ 0, 8, 0, 12, 8, 8, 9, 6,
        /* 123 */ 0, 1, 1, 9, 5, 3, 5, 9,
        /* 124 */ 0, 6, 4, 4, 4, 4, 4, 14,
        /* 125 */ 0, 0, 0, 11, 21, 21, 21, 21,
        /* 126 */ 0, 0, 0, 13, 19, 17, 17, 17,
        /* 127 */ 0, 0, 0, 14, 17, 17, 17, 14,
        /* 128 */ 0, 0, 0, 15, 17, 15, 1, 1,
        /* 129 */ 0, 0, 0, 22, 25, 30, 16, 16,
        /* 130 */ 0, 0, 0, 13, 19, 1, 1, 1,
        /* 131 */ 0, 0, 0, 14, 1, 14, 16, 15,
        /* 132 */ 0, 2, 2, 7, 2, 2, 18, 12,
        /* 133 */ 0, 0, 0, 17, 17, 17, 25, 22,
        /* 134 */ 0, 0, 0, 17, 17, 17, 10, 4,
        /* 135 */ 0, 0, 0, 17, 17, 21, 21, 10,
        /* 136 */ 0, 0, 0, 17, 10, 4, 10, 17,
        /* 137 */ 0, 0, 0, 17, 17, 30, 16, 14,
        /* 138 */ 0, 0, 0, 31, 8, 4, 2, 31,
        /* 139 */ 0, 8, 4, 4, 2, 4, 4, 8,
        /* 140 */ 0, 4, 4, 4, 4, 4, 4, 4,
        /* 141 */ 0, 2, 4, 4, 8, 4, 4, 2,
        /* 142 */ 0, 0, 0, 0, 22, 9, 0, 0,
        /* 143 */ 0, 4, 10, 17, 17, 17, 31, 0,
        /* 144 */ 0, 31, 17, 1, 15, 17, 17, 15,
        /* 145 */ 30, 20, 20, 18, 17, 31, 17, 17,
        /* 146 */ 0, 21, 21, 21, 14, 21, 21, 21,
        /* 147 */ 0, 15, 16, 16, 12, 16, 16, 15,
        /* 148 */ 0, 17, 17, 25, 21, 19, 17, 17,
        /* 149 */ 10, 4, 17, 17, 25, 21, 19, 17,
        /* 150 */ 0, 30, 20, 20, 20, 20, 21, 18,
        /* 151 */ 0, 31, 17, 17, 17, 17, 17, 17,
        /* 152 */ 0, 17, 17, 17, 10, 4, 2, 1,
        /* 153 */ 0, 17, 17, 17, 17, 17, 31, 16,
        /* 154 */ 0, 17, 17, 17, 30, 16, 16, 16,
        /* 155 */ 0, 0, 21, 21, 21, 21, 21, 31,
        /* 156 */ 0, 21, 21, 21, 21, 21, 31, 16,
        /* 157 */ 0, 3, 2, 2, 14, 18, 18, 14,
        /* 158 */ 0, 17, 17, 17, 19, 21, 21, 19,
        /* 159 */ 0, 14, 17, 20, 26, 16, 17, 14,
        /* 160 */ 0, 0, 0, 18, 21, 9, 9, 22,
        /* 161 */ 0, 4, 12, 20, 20, 4, 7, 7,
        /* 162 */ 0, 31, 17, 1, 1, 1, 1, 1,
        /* 163 */ 0, 0, 0, 31, 10, 10, 10, 25,
        /* 164 */ 0, 31, 1, 2, 4, 2, 1, 31,
        /* 165 */ 0, 0, 0, 30, 9, 9, 9, 6,
        /* 166 */ 12, 20, 28, 20, 20, 23, 27, 24,
        /* 167 */ 0, 0, 16, 14, 5, 4, 4, 8,
        /* 168 */ 0, 4, 14, 14, 14, 31, 4, 0,
        /* 169 */ 0, 14, 17, 17, 31, 17, 17, 14,
        /* 170 */ 0, 0, 14, 17, 17, 17, 10, 27,
        /* 171 */ 0, 12, 18, 4, 10, 17, 17, 14,
        /* 172 */ 0, 0, 0, 26, 21, 11, 0, 0,
        /* 173 */ 0, 0, 10, 31, 31, 31, 14, 4,
        /* 174 */ 0, 0, 0, 14, 1, 6, 17, 14,
        /* 175 */ 0, 14, 17, 17, 17, 17, 17, 17,
        /* 176 */ 0, 27, 27, 27, 27, 27, 27, 27,
        /* 177 */ 0, 4, 0, 0, 4, 4, 4, 4,
        /* 178 */ 0, 4, 14, 5, 5, 21, 14, 4,
        /* 179 */ 0, 12, 2, 2, 7, 2, 18, 13,
        /* 180 */ 0, 0, 17, 14, 10, 14, 17, 0,
        /* 181 */ 0, 17, 10, 31, 4, 31, 4, 4,
        /* 182 */ 0, 4, 4, 4, 0, 4, 4, 4,
        /* 183 */ 0, 12, 18, 4, 10, 4, 9, 6,
        /* 184 */ 0, 8, 20, 4, 31, 4, 5, 2,
        /* 185 */ 0, 31, 17, 21, 29, 21, 17, 31,
        /* 186 */ 0, 14, 16, 30, 17, 30, 0, 31,
        /* 187 */ 0, 0, 20, 10, 5, 10, 20, 0,
        /* 188 */ 0, 9, 21, 21, 23, 21, 21, 9,
        /* 189 */ 0, 30, 17, 17, 30, 20, 18, 17,
        /* 190 */ 0, 31, 17, 21, 17, 25, 21, 31,
        /* 191 */ 0, 4, 2, 6, 0, 0, 0, 0,
        /* 192 */ 6, 9, 9, 9, 6, 0, 0, 0,
        /* 193 */ 0, 4, 4, 31, 4, 4, 0, 31,
        /* 194 */ 6, 9, 4, 2, 15, 0, 0, 0,
        /* 195 */ 7, 8, 6, 8, 7, 0, 0, 0,
        /* 196 */ 7, 9, 7, 1, 9, 29, 9, 24,
        /* 197 */ 0, 17, 17, 17, 25, 23, 1, 1,
        /* 198 */ 0, 30, 25, 25, 30, 24, 24, 24,
        /* 199 */ 0, 0, 0, 0, 6, 6, 0, 0,
        /* 200 */ 0, 0, 0, 10, 17, 21, 21, 10,
        /* 201 */ 2, 3, 2, 2, 7, 0, 0, 0,
        /* 202 */ 0, 14, 17, 17, 17, 14, 0, 31,
        /* 203 */ 0, 0, 5, 10, 20, 10, 5, 0,
        /* 204 */ 17, 9, 5, 10, 13, 10, 30, 8,
        /* 205 */ 17, 9, 5, 10, 21, 16, 8, 28,
        /* 206 */ 3, 2, 3, 18, 27, 20, 28, 16,
        /* 207 */ 0, 4, 0, 4, 2, 1, 17, 14,
        /* 208 */ 2, 4, 4, 10, 17, 31, 17, 17,
        /* 209 */ 8, 4, 4, 10, 17, 31, 17, 17,
        /* 210 */ 4, 10, 0, 14, 17, 31, 17, 17,
        /* 211 */ 22, 9, 0, 14, 17, 31, 17, 17,
        /* 212 */ 10, 0, 4, 10, 17, 31, 17, 17,
        /* 213 */ 4, 10, 4, 14, 17, 31, 17, 17,
        /* 214 */ 0, 28, 6, 5, 29, 7, 5, 29,
        /* 215 */ 14, 17, 1, 1, 17, 14, 8, 12,
        /* 216 */ 2, 4, 0, 31, 1, 15, 1, 31,
        /* 217 */ 8, 4, 0, 31, 1, 15, 1, 31,
        /* 218 */ 4, 10, 0, 31, 1, 15, 1, 31,
        /* 219 */ 0, 10, 0, 31, 1, 15, 1, 31,
        /* 220 */ 2, 4, 0, 14, 4, 4, 4, 14,
        /* 221 */ 8, 4, 0, 14, 4, 4, 4, 14,
        /* 222 */ 4, 10, 0, 14, 4, 4, 4, 14,
        /* 223 */ 0, 10, 0, 14, 4, 4, 4, 14,
        /* 224 */ 0, 14, 18, 18, 23, 18, 18, 14,
        /* 225 */ 22, 9, 0, 17, 19, 21, 25, 17,
        /* 226 */ 2, 4, 14, 17, 17, 17, 17, 14,
        /* 227 */ 8, 4, 14, 17, 17, 17, 17, 14,
        /* 228 */ 4, 10, 0, 14, 17, 17, 17, 14,
        /* 229 */ 22, 9, 0, 14, 17, 17, 17, 14,
        /* 230 */ 10, 0, 14, 17, 17, 17, 17, 14,
        /* 231 */ 0, 0, 17, 10, 4, 10, 17, 0,
        /* 232 */ 0, 14, 4, 14, 21, 14, 4, 14,
        /* 233 */ 2, 4, 17, 17, 17, 17, 17, 14,
        /* 234 */ 8, 4, 17, 17, 17, 17, 17, 14,
        /* 235 */ 4, 10, 0, 17, 17, 17, 17, 14,
        /* 236 */ 10, 0, 17, 17, 17, 17, 17, 14,
        /* 237 */ 8, 4, 17, 10, 4, 4, 4, 4,
        /* 238 */ 3, 2, 14, 18, 18, 14, 2, 7,
        /* 239 */ 0, 12, 18, 18, 14, 18, 18, 13,
        /* 240 */ 2, 4, 0, 14, 16, 30, 17, 30,
        /* 241 */ 8, 4, 0, 14, 16, 30, 17, 30,
        /* 242 */ 4, 10, 0, 14, 16, 30, 17, 30,
        /* 243 */ 22, 9, 0, 14, 16, 30, 17, 30,
        /* 244 */ 0, 10, 0, 14, 16, 30, 17, 30,
        /* 245 */ 4, 10, 4, 14, 16, 30, 17, 30,
        /* 246 */ 0, 0, 11, 20, 30, 5, 21, 10,
        /* 247 */ 0, 0, 14, 1, 17, 14, 4, 6,
        /* 248 */ 2, 4, 0, 14, 17, 31, 1, 14,
        /* 249 */ 8, 4, 0, 14, 17, 31, 1, 14,
        /* 250 */ 4, 10, 0, 14, 17, 31, 1, 14,
        /* 251 */ 0, 10, 0, 14, 17, 31, 1, 14,
        /* 252 */ 2, 4, 0, 4, 6, 4, 4, 14,
        /* 253 */ 8, 4, 0, 4, 6, 4, 4, 14,
        /* 254 */ 4, 10, 0, 4, 6, 4, 4, 14,
        /* 255 */ 0, 10, 0, 4, 6, 4, 4, 14,
        /* 256 */ 0, 5, 2, 5, 8, 30, 17, 14,
        /* 257 */ 22, 9, 0, 13, 19, 17, 17, 17,
        /* 258 */ 2, 4, 0, 14, 17, 17, 17, 14,
        /* 259 */ 8, 4, 0, 14, 17, 17, 17, 14,
        /* 260 */ 0, 4, 10, 0, 14, 17, 17, 14,
        /* 261 */ 0, 22, 9, 0, 14, 17, 17, 14,
        /* 262 */ 0, 10, 0, 14, 17, 17, 17, 14,
        /* 263 */ 0, 0, 4, 0, 31, 0, 4, 0,
        /* 264 */ 0, 8, 4, 14, 21, 14, 4, 2,
        /* 265 */ 2, 4, 0, 17, 17, 17, 25, 22,
        /* 266 */ 8, 4, 0, 17, 17, 17, 25, 22,
        /* 267 */ 4, 10, 0, 17, 17, 17, 25, 22,
        /* 268 */ 0, 10, 0, 17, 17, 17, 25, 22,
        /* 269 */ 0, 8, 4, 17, 17, 30, 16, 14,
        /* 270 */ 0, 6, 4, 12, 20, 12, 4, 14,
        /* 271 */ 0, 10, 0, 17, 17, 30, 16, 14,
    ]);

    var __decorate$J = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const lightColors = {
        red: '#ff8080',
        green: '#80ff80',
        blue: '#8080ff',
        yellow: '#ffff80',
        orange: '#ffcf80',
        white: '#ffffff',
        purple: '#ff80ff',
    };
    exports.LEDElement = class LEDElement extends n$1 {
        constructor() {
            super(...arguments);
            this.value = false;
            this.brightness = 1.0;
            this.color = 'red';
            this.lightColor = null;
            this.label = '';
            this.flip = false;
        }
        get pinInfo() {
            const anodeX = this.flip ? 15 : 25;
            const cathodeX = this.flip ? 25 : 15;
            return [
                { name: 'A', x: anodeX, y: 42, signals: [], description: 'Anode' },
                { name: 'C', x: cathodeX, y: 42, signals: [], description: 'Cathode' },
            ];
        }
        static get styles() {
            return r$3`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `;
        }
        update(changedProperties) {
            if (changedProperties.has('flip')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        render() {
            const { color, lightColor, flip } = this;
            const lightColorActual = lightColor || lightColors[color === null || color === void 0 ? void 0 : color.toLowerCase()] || color;
            const opacity = this.brightness ? 0.3 + this.brightness * 0.7 : 0;
            const lightOn = this.value && this.brightness > Number.EPSILON;
            const xScale = flip ? -1 : 1;
            return y`
      <div class="led-container">
        <svg
          width="40"
          height="50"
          transform="scale(${xScale} 1)"
          version="1.2"
          viewBox="-10 -5 35.456 39.618"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <rect x="2.5099" y="20.382" width="2.1514" height="9.8273" fill="#8c8c8c" />
          <path
            d="m12.977 30.269c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
            fill="#8c8c8c"
          />

          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            opacity=".3"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="#e6e6e6"
            opacity=".5"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            fill="#d1d1d1"
            opacity=".9"
          />
          <g>
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
              opacity=".7"
            />
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
              opacity=".25"
            />
            <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
          </g>
          <polygon
            points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
            fill="#666666"
          />
          <polygon
            points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
            fill="#666666"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="${color}"
            opacity=".65"
          />
          <g fill="#ffffff">
            <path
              d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
              opacity=".5"
            />
            <path
              d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
              opacity=".5"
            />
            <path
              d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
              opacity=".5"
            />
          </g>
          <g class="light" style="display: ${lightOn ? '' : 'none'}">
            <ellipse
              cx="8"
              cy="10"
              rx="10"
              ry="10"
              fill="${lightColorActual}"
              filter="url(#light2)"
              style="opacity: ${opacity}"
            ></ellipse>
            <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
            <ellipse
              cx="8"
              cy="10"
              rx="3"
              ry="3"
              fill="white"
              filter="url(#light1)"
              style="opacity: ${opacity}"
            ></ellipse>
          </g>
        </svg>
        <span class="led-label">${this.label}</span>
      </div>
    `;
        }
    };
    __decorate$J([
        e$1()
    ], exports.LEDElement.prototype, "value", void 0);
    __decorate$J([
        e$1()
    ], exports.LEDElement.prototype, "brightness", void 0);
    __decorate$J([
        e$1()
    ], exports.LEDElement.prototype, "color", void 0);
    __decorate$J([
        e$1()
    ], exports.LEDElement.prototype, "lightColor", void 0);
    __decorate$J([
        e$1()
    ], exports.LEDElement.prototype, "label", void 0);
    __decorate$J([
        e$1({ type: Boolean })
    ], exports.LEDElement.prototype, "flip", void 0);
    exports.LEDElement = __decorate$J([
        n('wokwi-led')
    ], exports.LEDElement);

    var __decorate$I = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.NeoPixelElement = class NeoPixelElement extends n$1 {
        constructor() {
            super(...arguments);
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.pinInfo = [
                { name: 'VDD', y: 3.5, x: 1, number: 1, signals: [VCC()] },
                { name: 'DOUT', y: 14, x: 1, number: 2, signals: [] },
                { name: 'VSS', y: 14, x: 21, number: 3, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'DIN', y: 3.5, x: 21, number: 4, signals: [GND()] },
            ];
        }
        render() {
            const { r, g, b } = this;
            const spotOpacity = (value) => (value > 0.001 ? 0.7 + value * 0.3 : 0);
            const maxOpacity = Math.max(r, g, b);
            const minOpacity = Math.min(r, g, b);
            const opacityDelta = maxOpacity - minOpacity;
            const multiplier = Math.max(1, 2 - opacityDelta * 20);
            const glowBase = 0.1 + Math.max(maxOpacity * 2 - opacityDelta * 5, 0);
            const glowColor = (value) => (value > 0.005 ? 0.1 + value * 0.9 : 0);
            const glowOpacity = (value) => (value > 0.005 ? glowBase + value * (1 - glowBase) : 0);
            const cssVal = (value) => maxOpacity ? Math.floor(Math.min(glowColor(value / maxOpacity) * multiplier, 1) * 255) : 255;
            const cssColor = `rgb(${cssVal(r)}, ${cssVal(g)}, ${cssVal(b)})`;
            const bkgWhite = 242 -
                (maxOpacity > 0.1 && opacityDelta < 0.2
                    ? Math.floor(maxOpacity * 50 * (1 - opacityDelta / 0.2))
                    : 0);
            const background = `rgb(${bkgWhite}, ${bkgWhite}, ${bkgWhite})`;
            return y`
      <svg
        width="5.6631mm"
        height="5mm"
        version="1.1"
        viewBox="0 0 5.6631 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="light1" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="${Math.max(0.1, maxOpacity)}" />
        </filter>
        <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <rect x=".33308" y="0" width="5" height="5" fill="${background}" />
        <rect x="0" y=".5" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="0" y="3.1" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="5.3" y="3.1" width=".35" height=".9" fill="#c3c2c3" />
        <rect x="5.3" y=".5" width=".35" height=".9" fill="#c3c2c3" />
        <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
        <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
        <g fill="#bfbfbf">
          <path
            d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
          />
          <path
            d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
          />
          <path
            d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
          />
          <path
            d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
          />
        </g>
        <path
          d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
          fill="#666"
        />
        <ellipse
          cx="2.5"
          cy="2.3"
          rx="0.3"
          ry="0.3"
          fill="red"
          opacity=${spotOpacity(r)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.5"
          cy="3.2"
          rx="0.3"
          ry="0.3"
          fill="green"
          opacity=${spotOpacity(g)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.3"
          cy="1.45"
          rx="0.3"
          ry="0.3"
          fill="blue"
          opacity=${spotOpacity(b)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3"
          cy="2.5"
          rx="2.2"
          ry="2.2"
          opacity="${glowOpacity(maxOpacity)}"
          fill="${cssColor}"
          filter="url(#light2)"
        ></ellipse>
      </svg>
    `;
        }
    };
    __decorate$I([
        e$1()
    ], exports.NeoPixelElement.prototype, "r", void 0);
    __decorate$I([
        e$1()
    ], exports.NeoPixelElement.prototype, "g", void 0);
    __decorate$I([
        e$1()
    ], exports.NeoPixelElement.prototype, "b", void 0);
    exports.NeoPixelElement = __decorate$I([
        n('wokwi-neopixel')
    ], exports.NeoPixelElement);

    var __decorate$H = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var PushbuttonElement_1;
    exports.PushbuttonElement = PushbuttonElement_1 = class PushbuttonElement extends n$1 {
        constructor() {
            super();
            this.color = 'red';
            this.pressed = false;
            this.label = '';
            this.pinInfo = [
                { name: '1.l', x: 0, y: 13, signals: [] },
                { name: '2.l', x: 0, y: 32, signals: [] },
                { name: '1.r', x: 67, y: 13, signals: [] },
                { name: '2.r', x: 67, y: 32, signals: [] },
            ];
            this.uniqueId = 'pushbutton' + PushbuttonElement_1.pushbuttonCounter++;
        }
        static get styles() {
            return r$3`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      .button-active-circle {
        opacity: 0;
      }

      button:active .button-active-circle {
        opacity: 1;
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `;
        }
        render() {
            const { color, label, uniqueId } = this;
            const buttonFill = this.pressed ? `url(#grad-down-${uniqueId})` : `url(#grad-up-${uniqueId})`;
            return y`
      <button
        aria-label="${label} ${color} pushbutton"
        @mousedown=${this.down}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchend=${this.up}
        @pointerleave=${this.up}
        @keydown=${(e) => SPACE_KEYS.includes(e.key) && this.down()}
        @keyup=${(e) => SPACE_KEYS.includes(e.key) && this.up(e)}
      >
        <svg
          width="17.802mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="grad-up-${uniqueId}" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${color}" offset="0.3" />
              <stop stop-color="${color}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient id="grad-down-${uniqueId}" x1="1" x2="0" y1="1" y2="0">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${color}" offset="0.3" />
              <stop stop-color="${color}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
          <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
          <g fill="#1b1b1">
            <circle cx="1.767" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="10.197" r=".37" />
            <circle cx="1.767" cy="10.197" r=".37" />
          </g>
          <g fill="#999" stroke-width="1.0154">
            <path
              d="m12.365 2.426c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
            />
            <path
              d="m12.365 7.5c0.06012 0 0.10849 0.0469 0.1085 0.10522v0.38698h2.2173c0.12023 0 0.217 0.0938 0.217 0.21045v0.50721c0 0.1166-0.09677 0.21045-0.217 0.21045h-2.2173v0.40101c0 0.0583-0.0484 0.10528-0.1085 0.10528h-0.36835v-1.9266z"
            />
            <path
              d="m-0.35085 4.3526c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
            />
            <path
              d="m-0.35085 9.4266c-0.06012 0-0.10849-0.0469-0.1085-0.10522v-0.38698h-2.2173c-0.12023 0-0.217-0.0938-0.217-0.21045v-0.50721c0-0.1166 0.09677-0.21045 0.217-0.21045h2.2173v-0.40101c0-0.0583 0.0484-0.10528 0.1085-0.10528h0.36835v1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle cx="6" cy="6" r="3.822" fill="${buttonFill}" />
            <circle
              class="button-active-circle"
              cx="6"
              cy="6"
              r="3.822"
              fill="url(#grad-down-${uniqueId})"
            />
            <circle
              cx="6"
              cy="6"
              r="2.9"
              fill="${color}"
              stroke="#2f2f2f"
              stroke-opacity=".47"
              stroke-width=".08"
            />
          </g>
        </svg>
      </button>
      <span class="label">${this.label}</span>
    `;
        }
        down() {
            if (!this.pressed) {
                this.pressed = true;
                this.dispatchEvent(new Event('button-press'));
            }
        }
        up(e) {
            if (this.pressed && !ctrlCmdPressed(e)) {
                this.pressed = false;
                this.dispatchEvent(new Event('button-release'));
            }
        }
    };
    exports.PushbuttonElement.pushbuttonCounter = 0;
    __decorate$H([
        e$1()
    ], exports.PushbuttonElement.prototype, "color", void 0);
    __decorate$H([
        e$1()
    ], exports.PushbuttonElement.prototype, "pressed", void 0);
    __decorate$H([
        e$1()
    ], exports.PushbuttonElement.prototype, "label", void 0);
    exports.PushbuttonElement = PushbuttonElement_1 = __decorate$H([
        n('wokwi-pushbutton')
    ], exports.PushbuttonElement);

    var __decorate$G = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const bandColors = {
        [-2]: '#C3C7C0',
        [-1]: '#F1D863',
        0: '#000000',
        1: '#8F4814',
        2: '#FB0000',
        3: '#FC9700',
        4: '#FCF800',
        5: '#00B800',
        6: '#0000FF',
        7: '#A803D6',
        8: '#808080',
        9: '#FCFCFC', // White
    };
    /**
     * Renders an axial-lead resistor with 4 color bands.
     */
    exports.ResistorElement = class ResistorElement extends n$1 {
        constructor() {
            super(...arguments);
            /**
             * Resitance value, in ohms. The value is reflected in the color of the bands, according to
             * standard [electronic color code](https://en.wikipedia.org/wiki/Electronic_color_code#Resistors).
             */
            this.value = '1000';
            this.pinInfo = [
                { name: '1', x: 0, y: 5.65, signals: [] },
                { name: '2', x: 58.8, y: 5.65, signals: [] },
            ];
        }
        static get styles() {
            return r$3`
      :host {
        display: flex;
      }
    `;
        }
        breakValue(value) {
            const exponent = value >= 1e10
                ? 9
                : value >= 1e9
                    ? 8
                    : value >= 1e8
                        ? 7
                        : value >= 1e7
                            ? 6
                            : value >= 1e6
                                ? 5
                                : value >= 1e5
                                    ? 4
                                    : value >= 1e4
                                        ? 3
                                        : value >= 1e3
                                            ? 2
                                            : value >= 1e2
                                                ? 1
                                                : value >= 1e1
                                                    ? 0
                                                    : value >= 1
                                                        ? -1
                                                        : -2;
            const base = Math.round(value / 10 ** exponent);
            if (value === 0) {
                return [0, 0];
            }
            return [Math.round(base % 100), exponent];
        }
        render() {
            const { value } = this;
            const numValue = parseFloat(value);
            const [base, exponent] = this.breakValue(numValue);
            const band1Color = bandColors[Math.floor(base / 10)];
            const band2Color = bandColors[base % 10];
            const band3Color = bandColors[exponent];
            return y`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.558" height=".63826" fill="#aaa" />
        <g stroke-width=".14479" fill="#d5b597">
          <path
            id="body"
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
          />
          <use xlink:href="#body" fill="url(#a)" opacity=".44886" />
          <rect x="4" y="0" width="1" height="3" fill="${band1Color}" clip-path="url(#g)" />

          <path d="m6 0.29411v2.4117h0.96v-2.4117z" fill="${band2Color}" />
          <path d="m7.8 0.29411v2.4117h0.96v-2.4117z" fill="${band3Color}" />

          <rect x="10.69" y="0" width="1" height="3" fill="#F1D863" clip-path="url(#g)" />
          <clippath id="g">
            <use xlink:href="#body" />
          </clippath>
        </g>
      </svg>
    `;
        }
    };
    __decorate$G([
        e$1()
    ], exports.ResistorElement.prototype, "value", void 0);
    exports.ResistorElement = __decorate$G([
        n('wokwi-resistor')
    ], exports.ResistorElement);

    var __decorate$F = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const rowPositions = [10.7, 25, 39.3, 53.6];
    const columnPositions = [7, 22, 37, 52];
    function isNumeric(text) {
        return !isNaN(parseFloat(text));
    }
    exports.MembraneKeypadElement = class MembraneKeypadElement extends n$1 {
        constructor() {
            super(...arguments);
            /**
             * Number of columns (3 or 4)
             */
            this.columns = '4';
            /**
             * Whether to display a connector beneath the keypad
             */
            this.connector = false;
            // prettier-ignore
            /**
             * Key labels
             */
            this.keys = [
                '1', '2', '3', 'A',
                '4', '5', '6', 'B',
                '7', '8', '9', 'C',
                '*', '0', '#', 'D',
            ];
            this.pressedKeys = new Set();
        }
        get pinInfo() {
            switch (this.columns) {
                case '3':
                    return [
                        { name: 'R1', x: 76.5, y: 338, signals: [] },
                        { name: 'R2', x: 86, y: 338, signals: [] },
                        { name: 'R3', x: 95.75, y: 338, signals: [] },
                        { name: 'R4', x: 105.25, y: 338, signals: [] },
                        { name: 'C1', x: 115, y: 338, signals: [] },
                        { name: 'C2', x: 124.5, y: 338, signals: [] },
                        { name: 'C3', x: 134, y: 338, signals: [] },
                    ];
                default:
                    return [
                        { name: 'R1', x: 100, y: 338, signals: [] },
                        { name: 'R2', x: 110, y: 338, signals: [] },
                        { name: 'R3', x: 119.5, y: 338, signals: [] },
                        { name: 'R4', x: 129, y: 338, signals: [] },
                        { name: 'C1', x: 138.5, y: 338, signals: [] },
                        { name: 'C2', x: 148, y: 338, signals: [] },
                        { name: 'C3', x: 157.75, y: 338, signals: [] },
                        { name: 'C4', x: 167.5, y: 338, signals: [] },
                    ];
            }
        }
        update(changedProperties) {
            if (changedProperties.has('columns')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        renderKey(row, column) {
            var _a;
            const text = (_a = this.keys[row * 4 + column]) !== null && _a !== void 0 ? _a : '';
            const keyClass = isNumeric(text) ? 'blue-key' : 'red-key';
            const keyName = text.toUpperCase();
            return b`<g
      transform="translate(${columnPositions[column]} ${rowPositions[row]})"
      tabindex="0"
      class=${keyClass}
      data-key-name=${keyName}
      @blur=${(e) => {
                    this.up(text, e.currentTarget);
                }}
      @mousedown=${() => this.down(text)}
      @mouseup=${() => this.up(text)}
      @touchstart=${() => this.down(text)}
      @touchend=${() => this.up(text)}
      @keydown=${(e) => SPACE_KEYS.includes(e.key) && this.down(text, e.currentTarget)}
      @keyup=${(e) => SPACE_KEYS.includes(e.key) && this.up(text, e.currentTarget)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${text}</text>
    </g>`;
        }
        render() {
            const { connector } = this;
            const fourColumns = this.columns === '4';
            const columnWidth = 15;
            const pinWidth = 2.54;
            const width = fourColumns ? 70.336 : 70.336 - columnWidth;
            const connectorWidth = fourColumns ? pinWidth * 8 : pinWidth * 7;
            const height = 76 + (connector ? 15 : 0);
            return y`
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }

        g[tabindex] {
          cursor: pointer;
        }

        g[tabindex]:focus,
        g[tabindex]:active {
          stroke: white;
          outline: none;
        }

        .blue-key:focus,
        .red-key:focus {
          filter: url(#shadow);
        }

        .blue-key:active,
        .blue-key.pressed {
          fill: #4e50d7;
        }

        .red-key:active,
        .red-key.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text,
        .blue-key.pressed text,
        .red-key.pressed text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${(e) => this.keyStrokeDown(e.key)}
        @keyup=${(e) => this.keyStrokeUp(e.key)}
      >
        <defs>
          <rect
            id="key"
            width="11.2"
            height="11"
            rx="1.4"
            ry="1.4"
            stroke="#b1b5b9"
            stroke-width=".75"
          />
          <pattern id="wires" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect width="2.54" height="8" fill="#eee" />
            <rect x="0.77" width="1" height="6" fill="#d9d5bc" />
            <circle cx="1.27" cy="6" r="0.75" fill="#d9d5bc" />
            <rect x="0.52" y="6" width="1.5" height="2" fill="#d9d5bc" />
          </pattern>
          <pattern id="wires-marks" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect x="0.52" y="6" width="1.5" height="2" fill="#746d41" />
          </pattern>
          ${pinsFemalePattern}
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${width}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${fourColumns ? 65 : 65 - columnWidth}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Connector -->
        ${connector
                    ? b`
            <g transform="translate(${(width - connectorWidth) / 2}, 76)">
              <rect width="${connectorWidth}" height="8" fill="url(#wires)" />
              <rect width="10.16" height="8" fill="url(#wires-marks)" />
              <rect y="8" width="${connectorWidth}" height="7" fill="#333" />
              <rect transform="translate(0, 12)" width="${connectorWidth}" height="2.54" fill="url(#pins-female)" />
            </g>
          `
                    : null}

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey(0, 0)}</g>
          <g>${this.renderKey(0, 1)}</g>
          <g>${this.renderKey(0, 2)}</g>
          <g>${this.renderKey(1, 0)}</g>
          <g>${this.renderKey(1, 1)}</g>
          <g>${this.renderKey(1, 2)}</g>
          <g>${this.renderKey(2, 0)}</g>
          <g>${this.renderKey(2, 1)}</g>
          <g>${this.renderKey(2, 2)}</g>
          <g>${this.renderKey(3, 1)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey(3, 0)}</g>
          <g>${this.renderKey(3, 2)}</g>
          ${fourColumns &&
                b`
              <g>${this.renderKey(0, 3)}</g>
              <g>${this.renderKey(1, 3)}</g>
              <g>${this.renderKey(2, 3)}</g>
              <g>${this.renderKey(3, 3)}</g>
          `}
        </g>
      </svg>
    `;
        }
        keyIndex(key) {
            const index = this.keys.indexOf(key);
            return { row: Math.floor(index / 4), column: index % 4 };
        }
        down(key, element) {
            if (!this.pressedKeys.has(key)) {
                if (element) {
                    element.classList.add('pressed');
                }
                this.pressedKeys.add(key);
                this.dispatchEvent(new CustomEvent('button-press', {
                    detail: Object.assign({ key }, this.keyIndex(key)),
                }));
            }
        }
        up(key, element) {
            if (this.pressedKeys.has(key)) {
                if (element) {
                    element.classList.remove('pressed');
                }
                this.pressedKeys.delete(key);
                this.dispatchEvent(new CustomEvent('button-release', {
                    detail: Object.assign({ key }, this.keyIndex(key)),
                }));
            }
        }
        keyStrokeDown(key) {
            var _a;
            const text = key.toUpperCase();
            const selectedKey = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-key-name="${text}"]`);
            if (selectedKey) {
                this.down(text, selectedKey);
            }
        }
        keyStrokeUp(key) {
            var _a, _b;
            const text = key.toUpperCase();
            const selectedKey = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`[data-key-name="${text}"]`);
            const pressedKeys = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('.pressed');
            if (key === 'Shift') {
                pressedKeys === null || pressedKeys === void 0 ? void 0 : pressedKeys.forEach((pressedKey) => {
                    const pressedText = pressedKey.dataset.keyName;
                    if (pressedText) {
                        this.up(pressedText, pressedKey);
                    }
                });
            }
            if (selectedKey) {
                this.up(text, selectedKey);
            }
        }
    };
    __decorate$F([
        e$1()
    ], exports.MembraneKeypadElement.prototype, "columns", void 0);
    __decorate$F([
        e$1()
    ], exports.MembraneKeypadElement.prototype, "connector", void 0);
    __decorate$F([
        e$1({ type: Array })
    ], exports.MembraneKeypadElement.prototype, "keys", void 0);
    exports.MembraneKeypadElement = __decorate$F([
        n('wokwi-membrane-keypad')
    ], exports.MembraneKeypadElement);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e = t => (...e) => ({ _$litDirective$: t, values: e }); class i$1 { constructor(t) { } get _$AU() { return this._$AM._$AU } _$AT(t, e, i) { this._$Ct = t, this._$AM = e, this._$Ci = i; } _$AS(t, e) { return this.update(t, e) } update(t, e) { return this.render(...e) } }

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const i = e(class extends i$1 { constructor(t$1) { var e; if (super(t$1), t$1.type !== t.ATTRIBUTE || "style" !== t$1.name || (null === (e = t$1.strings) || void 0 === e ? void 0 : e.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.") } render(t) { return Object.keys(t).reduce(((e, r) => { const s = t[r]; return null == s ? e : e + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};` }), "") } update(e, [r]) { const { style: s } = e.element; if (void 0 === this.ut) { this.ut = new Set; for (const t in r) this.ut.add(t); return this.render(r) } this.ut.forEach((t => { null == r[t] && (this.ut.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = ""); })); for (const t in r) { const e = r[t]; null != e && (this.ut.add(t), t.includes("-") ? s.setProperty(t, e) : s[t] = e); } return T } });

    const clamp = (min, max, value) => {
        const clampedValue = Math.min(value, max);
        return Math.max(clampedValue, min);
    };

    function calculateBoundingRect(rect, transform) {
        const topLeft = transform.transformPoint({ x: rect.left, y: rect.top });
        const topRight = transform.transformPoint({ x: rect.right, y: rect.top });
        const bottomLeft = transform.transformPoint({ x: rect.left, y: rect.bottom });
        const bottomRight = transform.transformPoint({ x: rect.right, y: rect.bottom });
        const minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
        const minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
        const maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
        const maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
        return new DOMRect(minX, minY, maxX - minX, maxY - minY);
    }

    function getScreenCTM(target, workaroundElement, workaroundRect) {
        var _a, _b;
        const { userAgent } = navigator;
        const workaroundNeeded = userAgent.indexOf('Firefox') >= 0 || userAgent.indexOf('Epiphany') >= 0;
        if (workaroundNeeded) {
            // Firefox's getScreenCTM() is broken: https://bugzilla.mozilla.org/show_bug.cgi?id=1610093
            const targetCTM = target.getCTM();
            const workaroundCTM = workaroundElement === null || workaroundElement === void 0 ? void 0 : workaroundElement.getCTM();
            const boundingRect = workaroundElement === null || workaroundElement === void 0 ? void 0 : workaroundElement.getBoundingClientRect();
            const svgRect = (_a = workaroundElement === null || workaroundElement === void 0 ? void 0 : workaroundElement.ownerSVGElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (!boundingRect || !svgRect || !workaroundCTM || !targetCTM) {
                return null;
            }
            const centerX = svgRect.x + svgRect.width / 2;
            const centerY = svgRect.y + svgRect.height / 2;
            const deltaX = centerX - (boundingRect.x + boundingRect.width / 2);
            const deltaY = centerY - (boundingRect.y + boundingRect.height / 2);
            const angle = (Math.atan2(deltaY, deltaX) / Math.PI) * 180;
            const rotation = new DOMMatrix().rotate(angle);
            const rotatedRect = calculateBoundingRect(workaroundRect, rotation);
            const scaleX = rotatedRect.width / boundingRect.width;
            const scaleY = rotatedRect.height / boundingRect.height;
            const localCTM = workaroundCTM.inverse().multiply(targetCTM);
            return rotation
                .inverse()
                .translate(rotatedRect.left, rotatedRect.top)
                .multiply(localCTM.inverse())
                .scale(scaleX, scaleY)
                .translate(-boundingRect.left, -boundingRect.top);
        }
        else {
            return ((_b = target.getScreenCTM()) === null || _b === void 0 ? void 0 : _b.inverse()) || null;
        }
    }

    var __decorate$E = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const knobCenter = {
        x: 9.91,
        y: 8.18,
    };
    /** The potentiometer SVG is taken from https://freesvg.org/potentiometer and some of the
        functions are taken from https://github.com/vitaliy-bobrov/js-rocks knob component */
    exports.PotentiometerElement = class PotentiometerElement extends n$1 {
        constructor() {
            super(...arguments);
            this.min = 0;
            this.max = 1023;
            this.value = 0;
            this.step = 1;
            this.startDegree = -135;
            this.endDegree = 135;
            this.pressed = false;
            this.pageToKnobMatrix = null;
            this.pinInfo = [
                { name: 'GND', x: 29, y: 68.5, number: 1, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'SIG', x: 39, y: 68.5, number: 2, signals: [analog(0)] },
                { name: 'VCC', x: 49, y: 68.5, number: 3, signals: [{ type: 'power', signal: 'VCC' }] },
            ];
        }
        static get styles() {
            return r$3`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `;
        }
        mapToMinMax(value, min, max) {
            return value * (max - min) + min;
        }
        percentFromMinMax(value, min, max) {
            return (value - min) / (max - min);
        }
        render() {
            const percent = clamp(0, 1, this.percentFromMinMax(this.value, this.min, this.max));
            const knobDeg = (this.endDegree - this.startDegree) * percent + this.startDegree;
            return y`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg
        role="slider"
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="${this.focusInput}"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
        style=${i({
                '--knob-angle': knobDeg + 'deg',
            })}
      >
        <defs>
          <filter id="outline">
            <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
          </filter>
        </defs>
        <rect
          x=".15"
          y=".15"
          width="19.5"
          height="19.5"
          ry="1.23"
          fill="#045881"
          stroke="#045881"
          stroke-width=".30"
        />
        <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
        <ellipse
          id="knob"
          cx=${knobCenter.x}
          cy=${knobCenter.y}
          rx="7.27"
          ry="7.43"
          fill="#e4e8eb"
          stroke-width=".15"
        />
        <rect x="6" y="17" width="8" height="2" fill-opacity="0" stroke="#fff" stroke-width=".30" />
        <g stroke-width=".15">
          <text x="6.21" y="16.6">GND</text>
          <text x="9.2" y="16.63">SIG</text>
          <text x="11.5" y="16.59">VCC</text>
        </g>
        <g fill="#fff" stroke-width=".15">
          <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
          <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
          <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
          <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
        </g>
        <g fill="#b3b1b0" stroke-width=".15">
          <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
          <ellipse cx="10.22" cy="18" rx=".61" ry=".63" />
          <ellipse cx="12.76" cy="18" rx=".61" ry=".63" />
        </g>
        <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
        <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
        <rect x="0" y="9.5" width="1" height="1" fill="none" id="firefox-workaround" />
      </svg>
    `;
        }
        focusInput() {
            var _a;
            const inputEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.hide-input');
            inputEl === null || inputEl === void 0 ? void 0 : inputEl.focus();
        }
        onValueChange(event) {
            const target = event.target;
            this.updateValue(parseFloat(target.value));
        }
        down(event) {
            if (event.button === 0 || window.navigator.maxTouchPoints) {
                this.pressed = true;
                event.stopPropagation();
                event.preventDefault();
                this.updateKnobMatrix();
            }
        }
        move(event) {
            const { pressed } = this;
            if (pressed) {
                this.rotateHandler(event);
            }
        }
        up() {
            this.pressed = false;
        }
        updateKnobMatrix() {
            var _a, _b;
            const knob = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#knob');
            const workaroundElement = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#firefox-workaround');
            this.pageToKnobMatrix =
                knob && workaroundElement
                    ? getScreenCTM(knob, workaroundElement, new DOMRect(0, 9.5, 1, 1))
                    : null;
        }
        rotateHandler(event) {
            event.stopPropagation();
            event.preventDefault();
            if (!this.pageToKnobMatrix) {
                return;
            }
            const isTouch = event.type === 'touchmove';
            const pageX = isTouch ? event.touches[0].pageX : event.pageX;
            const pageY = isTouch ? event.touches[0].pageY : event.pageY;
            const localPosition = new DOMPointReadOnly(pageX, pageY).matrixTransform(this.pageToKnobMatrix);
            const x = knobCenter.x - localPosition.x;
            const y = knobCenter.y - localPosition.y;
            let deg = Math.round((Math.atan2(y, x) * 180) / Math.PI);
            if (deg < 0) {
                deg += 360;
            }
            deg -= 90;
            if (x > 0 && y <= 0 && deg > 0) {
                deg -= 360;
            }
            deg = clamp(this.startDegree, this.endDegree, deg);
            const percent = this.percentFromMinMax(deg, this.startDegree, this.endDegree);
            const value = this.mapToMinMax(percent, this.min, this.max);
            this.updateValue(value);
        }
        updateValue(value) {
            const clamped = clamp(this.min, this.max, value);
            const updated = Math.round(clamped / this.step) * this.step;
            this.value = Math.round(updated * 100) / 100;
            this.dispatchEvent(new InputEvent('input', { detail: this.value }));
        }
    };
    __decorate$E([
        e$1({ type: Number })
    ], exports.PotentiometerElement.prototype, "min", void 0);
    __decorate$E([
        e$1({ type: Number })
    ], exports.PotentiometerElement.prototype, "max", void 0);
    __decorate$E([
        e$1()
    ], exports.PotentiometerElement.prototype, "value", void 0);
    __decorate$E([
        e$1()
    ], exports.PotentiometerElement.prototype, "step", void 0);
    __decorate$E([
        e$1()
    ], exports.PotentiometerElement.prototype, "startDegree", void 0);
    __decorate$E([
        e$1()
    ], exports.PotentiometerElement.prototype, "endDegree", void 0);
    exports.PotentiometerElement = __decorate$E([
        n('wokwi-potentiometer')
    ], exports.PotentiometerElement);

    var __decorate$D = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const pixelWidth = 5.66;
    const pixelHeight = 5;
    /**
     * Renders a matrix of NeoPixels (smart RGB LEDs).
     * Optimized for displaying large matrices (up to thousands of elements).
     *
     * The color of individual pixels can be set by calling `setPixel(row, col, { r, g, b })`
     * on this element, e.g. `element.setPixel(0, 0, { r: 1, g: 0, b: 0 })` to set the leftmost
     * pixel to red.
     */
    exports.NeopixelMatrixElement = class NeopixelMatrixElement extends n$1 {
        constructor() {
            super(...arguments);
            /**
             * Number of rows in the matrix
             */
            this.rows = 8;
            /**
             * Number of columns in the matrix
             */
            this.cols = 8;
            /**
             * The spacing between two adjacent rows, in mm
             */
            this.rowSpacing = 1;
            /**
             * The spacing between two adjacent columns, in mm
             */
            this.colSpacing = 1;
            /**
             * Whether to apply blur to the light. Blurring the light
             * creates a bit more realistic look, but negatively impacts
             * performance. It's recommended to leave this off for large
             * matrices.
             */
            this.blurLight = false;
            /**
             * Animate the LEDs in the matrix. Used primarily for testing in Storybook.
             * The animation sequence is not guaranteed and may change in future releases of
             * this element.
             */
            this.animation = false;
            this.pixelElements = null;
            this.animationFrame = null;
            this.animateStep = () => {
                const time = new Date().getTime();
                const { rows, cols } = this;
                const pixelValue = (n) => (n % 2000 > 1000 ? 1 - (n % 1000) / 1000 : (n % 1000) / 1000);
                for (let row = 0; row < rows; row++) {
                    for (let col = 0; col < cols; col++) {
                        const radius = Math.sqrt((row - rows / 2 + 0.5) ** 2 + (col - cols / 2 + 0.5) ** 2);
                        this.setPixel(row, col, {
                            r: pixelValue(radius * 100 + time),
                            g: pixelValue(radius * 100 + time + 200),
                            b: pixelValue(radius * 100 + time + 400),
                        });
                    }
                }
                this.animationFrame = requestAnimationFrame(this.animateStep);
            };
        }
        get pinInfo() {
            const { cols, rows, rowSpacing, colSpacing } = this;
            const pinSpacing = 2.54;
            const p = pinSpacing * mmToPix;
            const cx = ((cols * (colSpacing + pixelWidth)) / 2) * mmToPix;
            const y = rows * (rowSpacing + pixelHeight) * mmToPix;
            return [
                {
                    name: 'GND',
                    x: cx - 1.5 * p,
                    y,
                    signals: [GND()],
                },
                { name: 'VCC', x: cx - 0.5 * p, y, signals: [VCC()] },
                { name: 'DIN', x: cx + 0.5 * p, y, signals: [] },
                { name: 'DOUT', x: cx + 1.5 * p, y, signals: [] },
            ];
        }
        static get styles() {
            return r$3`
      :host {
        display: flex;
      }
    `;
        }
        getPixelElements() {
            if (!this.shadowRoot) {
                return null;
            }
            if (!this.pixelElements) {
                this.pixelElements = Array.from(this.shadowRoot.querySelectorAll('g.pixel')).map((e) => Array.from(e.querySelectorAll('ellipse')));
            }
            return this.pixelElements;
        }
        /**
         * Resets all the pixels to off state (r=0, g=0, b=0).
         */
        reset() {
            const pixelElements = this.getPixelElements();
            if (!pixelElements) {
                return;
            }
            for (const [rElement, gElement, bElement, colorElement] of pixelElements) {
                rElement.style.opacity = '0';
                gElement.style.opacity = '0';
                bElement.style.opacity = '0';
                colorElement.style.opacity = '0';
            }
        }
        /**
         * Sets the color of a single neopixel in the matrix
         * @param row Row number of the pixel to set
         * @param col Column number of the pixel to set
         * @param rgb An object containing the {r, g, b} values for the pixel
         */
        setPixel(row, col, rgb) {
            const pixelElements = this.getPixelElements();
            if (row < 0 || col < 0 || row >= this.rows || col >= this.cols || !pixelElements) {
                return null;
            }
            const { r, g, b } = rgb;
            const spotOpacity = (value) => (value > 0.001 ? 0.7 + value * 0.3 : 0);
            const maxOpacity = Math.max(r, g, b);
            const minOpacity = Math.min(r, g, b);
            const opacityDelta = maxOpacity - minOpacity;
            const multiplier = Math.max(1, 2 - opacityDelta * 20);
            const glowBase = 0.1 + Math.max(maxOpacity * 2 - opacityDelta * 5, 0);
            const glowColor = (value) => (value > 0.005 ? 0.1 + value * 0.9 : 0);
            const glowOpacity = (value) => (value > 0.005 ? glowBase + value * (1 - glowBase) : 0);
            const cssVal = (value) => maxOpacity ? Math.floor(Math.min(glowColor(value / maxOpacity) * multiplier, 1) * 255) : 255;
            const cssColor = `rgb(${cssVal(r)}, ${cssVal(g)}, ${cssVal(b)})`;
            const pixelElement = pixelElements[row * this.cols + col];
            const [rElement, gElement, bElement, colorElement] = pixelElement;
            rElement.style.opacity = spotOpacity(r).toFixed(2);
            gElement.style.opacity = spotOpacity(g).toFixed(2);
            bElement.style.opacity = spotOpacity(b).toFixed(2);
            colorElement.style.opacity = glowOpacity(maxOpacity).toFixed(2);
            colorElement.style.fill = cssColor;
        }
        update(changedProperties) {
            if (changedProperties.has('rows') ||
                changedProperties.has('cols') ||
                changedProperties.has('rowSpacing') ||
                changedProperties.has('colSpacing')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        updated() {
            if (this.animation && !this.animationFrame) {
                this.animationFrame = requestAnimationFrame(this.animateStep);
            }
            else if (!this.animation && this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
            }
        }
        renderPixels() {
            const result = [];
            const { cols, rows, colSpacing, rowSpacing } = this;
            const patWidth = pixelWidth + colSpacing;
            const patHeight = pixelHeight + rowSpacing;
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    result.push(b`
        <g transform="translate(${patWidth * col}, ${patHeight * row})" class="pixel">
          <ellipse cx="2.5" cy="2.3" rx="0.3" ry="0.3" fill="red" opacity="0" />
          <ellipse cx="3.5" cy="3.2" rx="0.3" ry="0.3" fill="green" opacity="0" />
          <ellipse cx="3.3" cy="1.45" rx="0.3" ry="0.3" fill="blue" opacity="0" />
          <ellipse cx="3" cy="2.5" rx="2.2" ry="2.2" opacity="0" />
        </g>`);
                }
            }
            this.pixelElements = null;
            return result;
        }
        render() {
            const { cols, rows, rowSpacing, colSpacing, blurLight } = this;
            const patWidth = pixelWidth + colSpacing;
            const patHeight = pixelHeight + rowSpacing;
            const width = pixelWidth * cols + colSpacing * (cols - 1);
            const height = pixelHeight * rows + rowSpacing * (rows - 1);
            return y`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blurLight" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <pattern id="pixel" width="${patWidth}" height="${patHeight}" patternUnits="userSpaceOnUse">
          <rect x=".33308" y="0" width="5" height="5" fill="#fff" />
          <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
          <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
          <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
          <g fill="#bfbfbf">
            <path
              d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
            />
            <path
              d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
            />
            <path
              d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
            />
            <path
              d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
            />
          </g>
          <path
            d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
            fill="#666"
          />
        </pattern>
        <rect width="${width}" height="${height}" fill="url(#pixel)"></rect>
        <g style="${blurLight ? 'filter: url(#blurLight)' : ''}">${this.renderPixels()}</g>
      </svg>
    `;
        }
    };
    __decorate$D([
        e$1()
    ], exports.NeopixelMatrixElement.prototype, "rows", void 0);
    __decorate$D([
        e$1()
    ], exports.NeopixelMatrixElement.prototype, "cols", void 0);
    __decorate$D([
        e$1({ attribute: 'rowspacing' })
    ], exports.NeopixelMatrixElement.prototype, "rowSpacing", void 0);
    __decorate$D([
        e$1({ attribute: 'colspacing' })
    ], exports.NeopixelMatrixElement.prototype, "colSpacing", void 0);
    __decorate$D([
        e$1()
    ], exports.NeopixelMatrixElement.prototype, "blurLight", void 0);
    __decorate$D([
        e$1()
    ], exports.NeopixelMatrixElement.prototype, "animation", void 0);
    exports.NeopixelMatrixElement = __decorate$D([
        n('wokwi-neopixel-matrix')
    ], exports.NeopixelMatrixElement);

    var __decorate$C = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.SSD1306Element = class SSD1306Element extends n$1 {
        constructor() {
            super();
            this.width = 150;
            this.height = 116;
            this.screenWidth = 128;
            this.screenHeight = 64;
            this.canvas = void 0;
            this.ctx = null;
            this.pinInfo = [
                { name: 'DATA', x: 36.5, y: 12.5, signals: [i2c('SDA')] },
                { name: 'CLK', x: 45.5, y: 12.5, signals: [i2c('SCL')] },
                { name: 'DC', x: 54.5, y: 12.5, signals: [] },
                { name: 'RST', x: 64.5, y: 12.5, signals: [] },
                { name: 'CS', x: 74.5, y: 12.5, signals: [] },
                { name: '3V3', x: 83.5, y: 12.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
                { name: 'VIN', x: 93.5, y: 12.5, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'GND', x: 103.5, y: 12, signals: [{ type: 'power', signal: 'GND' }] },
            ];
            this.imageData = new ImageData(this.screenWidth, this.screenHeight);
        }
        static get styles() {
            return r$3`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 11.5px;
        top: 27px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `;
        }
        /**
         * Used for initiating update of an imageData data which its reference wasn't changed
         */
        redraw() {
            var _a;
            (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.putImageData(this.imageData, 0, 0);
        }
        initContext() {
            var _a, _b;
            this.canvas = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('canvas');
            // No need to clear canvas rect - all images will have full opacity
            this.ctx = (_b = this.canvas) === null || _b === void 0 ? void 0 : _b.getContext('2d');
        }
        firstUpdated() {
            var _a;
            this.initContext();
            (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.putImageData(this.imageData, 0, 0);
        }
        updated() {
            if (this.imageData) {
                this.redraw();
            }
        }
        render() {
            const { width, height, screenWidth, screenHeight } = this;
            return y` <div class="container">
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <!-- 128 x 64 screen -->
        <rect x="11.4" y="26" fill="#1A1A1A" width="${screenWidth}" height="${screenHeight}" />

        <!-- All texts -->
        <text
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="monospace"
        >
          <tspan x="37" y="8">Data</tspan>
          <tspan x="56" y="8">SA0</tspan>
          <tspan x="78" y="8">CS</tspan>
          <tspan x="97" y="8">Vin</tspan>
          <tspan x="41" y="23">C1k</tspan>
          <tspan x="53" y="23">DC</tspan>
          <tspan x="64" y="23">Rst</tspan>
          <tspan x="80" y="23">3v3</tspan>
          <tspan x="99" y="23">Gnd</tspan>
        </text>

        <!-- Star -->
        <path
          fill="#FFF"
          d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
          stroke="#FFF"
        />

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="41.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="31.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="21.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="12.5" cy="3.5" r="3.5" />
          <circle stroke="#E7DBDB" cx="3.5" cy="3.5" r="3.5" />
        </g>
      </svg>
      <canvas width="${screenWidth}" height="${screenHeight}" class="pixelated"></canvas>
    </div>`;
        }
    };
    __decorate$C([
        e$1()
    ], exports.SSD1306Element.prototype, "imageData", void 0);
    exports.SSD1306Element = __decorate$C([
        n('wokwi-ssd1306')
    ], exports.SSD1306Element);

    var __decorate$B = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * Renders a piezo electric buzzer.
     */
    exports.BuzzerElement = class BuzzerElement extends n$1 {
        constructor() {
            super(...arguments);
            /**
             * Boolean representing if an electric signal is coming in the buzzer
             * If true a music note will be displayed on top of the buzzer
             */
            this.hasSignal = false;
            this.pinInfo = [
                { name: '1', x: 27, y: 84, signals: [] },
                { name: '2', x: 37, y: 84, signals: [] },
            ];
        }
        static get styles() {
            return r$3`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `;
        }
        render() {
            const buzzerOn = this.hasSignal;
            return y`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${buzzerOn ? '' : 'hidden'}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>

        <svg
          width="17mm"
          height="20mm"
          version="1.1"
          viewBox="0 0 17 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m7.23 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
          <path d="m9.77 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
          <g stroke="#000">
            <g>
              <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
              <circle
                cx="8.5"
                cy="8.5"
                r="6.3472"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="4.3488"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
            </g>
            <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
          </g>
        </svg>
      </div>
    `;
        }
    };
    __decorate$B([
        e$1()
    ], exports.BuzzerElement.prototype, "hasSignal", void 0);
    exports.BuzzerElement = __decorate$B([
        n('wokwi-buzzer')
    ], exports.BuzzerElement);

    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const o = e(class extends i$1 { constructor(t$1) { var i; if (super(t$1), t$1.type !== t.ATTRIBUTE || "class" !== t$1.name || (null === (i = t$1.strings) || void 0 === i ? void 0 : i.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.") } render(t) { return " " + Object.keys(t).filter((i => t[i])).join(" ") + " " } update(i, [s]) { var r, o; if (void 0 === this.st) { this.st = new Set, void 0 !== i.strings && (this.et = new Set(i.strings.join(" ").split(/\s/).filter((t => "" !== t)))); for (const t in s) s[t] && !(null === (r = this.et) || void 0 === r ? void 0 : r.has(t)) && this.st.add(t); return this.render(s) } const e = i.element.classList; this.st.forEach((t => { t in s || (e.remove(t), this.st.delete(t)); })); for (const t in s) { const i = !!s[t]; i === this.st.has(t) || (null === (o = this.et) || void 0 === o ? void 0 : o.has(t)) || (i ? (e.add(t), this.st.add(t)) : (e.remove(t), this.st.delete(t))); } return T } });

    var __decorate$A = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.RotaryDialerElement = class RotaryDialerElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'GND', x: 122, y: 286, signals: [GND()] },
                { name: 'DIAL', x: 131.6, y: 286, signals: [] },
                { name: 'PULSE', x: 141.2, y: 286, signals: [] },
            ];
            this.digit = '';
            this.stylesMapping = {};
            this.classes = { 'rotate-path': true };
            this.degrees = [320, 56, 87, 115, 143, 173, 204, 232, 260, 290];
        }
        static get styles() {
            return r$3`
      .text {
        cursor: grab;
        user-select: none;
      }
      input:focus + svg #container {
        stroke: #4e50d7;
        stroke-width: 3;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      .rotate-path {
        transform-origin: 133px 133px;
        transition: transform 1000ms ease-in;
      }
      .dialer-anim {
        transform: rotate(var(--angle));
      }
    `;
        }
        removeDialerAnim() {
            this.classes = Object.assign(Object.assign({}, this.classes), { 'dialer-anim': false });
            this.stylesMapping = { '--angle': 0 };
            this.requestUpdate();
        }
        /**
         * Exposed lazy dial by applying dial method with a given argument of number from 0-9
         * @param digit
         */
        dial(digit) {
            this.digit = digit;
            this.addDialerAnim(digit);
        }
        onValueChange(event) {
            const target = event.target;
            this.digit = parseInt(target.value);
            this.dial(this.digit);
            target.value = '';
        }
        addDialerAnim(digit) {
            requestAnimationFrame(() => {
                this.dispatchEvent(new CustomEvent('dial-start', { detail: { digit: this.digit } }));
                // When you click on a digit, the circle-hole of that digit
                // should go all the way until the finger stop.
                this.classes = Object.assign(Object.assign({}, this.classes), { 'dialer-anim': true });
                const deg = this.degrees[digit];
                this.stylesMapping = { '--angle': deg + 'deg' };
                this.requestUpdate();
            });
        }
        focusInput() {
            var _a;
            const inputEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.hide-input');
            inputEl === null || inputEl === void 0 ? void 0 : inputEl.focus();
        }
        render() {
            return y`
      <input
        tabindex="0"
        type="number"
        class="hide-input"
        value="${this.digit}"
        @input="${this.onValueChange}"
      />
      <svg width="266" height="286" @click="${this.focusInput}" xmlns="http://www.w3.org/2000/svg">
        <!-- Pins -->
        <g fill="#9f9f9f" stroke-width=".987">
          <path
            d="m123.4 266c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m133 266c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m142.6 266c0-0.377-0.15-0.739-0.417-1.01s-0.629-0.417-1.01-0.417c-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.419 0.419h2.01c0.231 0 0.419-0.188 0.419-0.419v-25.8z"
          />
        </g>
        <g transform="translate(1 1)">
          <circle stroke="#979797" stroke-width="3" fill="#1F1F1F" cx="133" cy="133" r="131" />
          <circle stroke="#fff" stroke-width="2" fill="#D8D8D8" cx="133" cy="133" r="72" />
          <path
            class=${o(this.classes)}
            @transitionstart="${() => {
                    if (!this.classes['dialer-anim']) {
                        this.dispatchEvent(new CustomEvent('dial', { detail: { digit: this.digit } }));
                    }
                }}"
            @transitionend="${() => {
                    if (!this.classes['dialer-anim']) {
                        this.dispatchEvent(new CustomEvent('dial-end', { detail: { digit: this.digit } }));
                    }
                    this.removeDialerAnim();
                }}"
            d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,197 C96.4786916,197 107,207.521308 107,220.5 C107,233.478692 96.4786916,244 83.5,244 C70.5213084,244 60,233.478692 60,220.5 C60,207.521308 70.5213084,197 83.5,197 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M32.5,114 C45.4786916,114 56,124.521308 56,137.5 C56,150.478692 45.4786916,161 32.5,161 C19.5213084,161 9,150.478692 9,137.5 C9,124.521308 19.5213084,114 32.5,114 Z M234.5,93 C247.478692,93 258,103.521308 258,116.5 C258,129.478692 247.478692,140 234.5,140 C221.521308,140 211,129.478692 211,116.5 C211,103.521308 221.521308,93 234.5,93 Z M41.5,64 C54.4786916,64 65,74.5213084 65,87.5 C65,100.478692 54.4786916,111 41.5,111 C28.5213084,111 18,100.478692 18,87.5 C18,74.5213084 28.5213084,64 41.5,64 Z M214.5,46 C227.478692,46 238,56.5213084 238,69.5 C238,82.4786916 227.478692,93 214.5,93 C201.521308,93 191,82.4786916 191,69.5 C191,56.5213084 201.521308,46 214.5,46 Z M76.5,26 C89.4786916,26 100,36.5213084 100,49.5 C100,62.4786916 89.4786916,73 76.5,73 C63.5213084,73 53,62.4786916 53,49.5 C53,36.5213084 63.5213084,26 76.5,26 Z M173.5,15 C186.478692,15 197,25.5213084 197,38.5 C197,51.4786916 186.478692,62 173.5,62 C160.521308,62 150,51.4786916 150,38.5 C150,25.5213084 160.521308,15 173.5,15 Z M123.5,7 C136.478692,7 147,17.5213084 147,30.5 C147,43.4786916 136.478692,54 123.5,54 C110.521308,54 100,43.4786916 100,30.5 C100,17.5213084 110.521308,7 123.5,7 Z"
            id="slots"
            stroke="#fff"
            fill-opacity="0.5"
            fill="#D8D8D8"
            style=${i(this.stylesMapping)}
          ></path>
        </g>
        <circle id="container" fill-opacity=".5" fill="#070707" cx="132.5" cy="132.5" r="132.5" />
        <g class="text" font-family="Marker Felt, monospace" font-size="21" fill="#FFF">
          <text @mouseup=${() => this.dial(0)} x="129" y="243">0</text>
          <text @mouseup=${() => this.dial(9)} x="78" y="230">9</text>
          <text @mouseup=${() => this.dial(8)} x="40" y="194">8</text>
          <text @mouseup=${() => this.dial(7)} x="28" y="145">7</text>
          <text @mouseup=${() => this.dial(6)} x="35" y="97">6</text>
          <text @mouseup=${() => this.dial(5)} x="72" y="58">5</text>
          <text @mouseup=${() => this.dial(4)} x="117" y="41">4</text>
          <text @mouseup=${() => this.dial(3)} x="168" y="47">3</text>
          <text @mouseup=${() => this.dial(2)} x="210" y="79">2</text>
          <text @mouseup=${() => this.dial(1)} x="230" y="126">1</text>
        </g>
        <path
          d="M182.738529,211.096297 L177.320119,238.659185 L174.670528,252.137377 L188.487742,252.137377 L182.738529,211.096297 Z"
          stroke="#979797"
          fill="#D8D8D8"
          transform="translate(181.562666, 230.360231) rotate(-22.000000) translate(-181.562666, -230.360231)"
        ></path>
      </svg>
    `;
        }
    };
    exports.RotaryDialerElement = __decorate$A([
        n('wokwi-rotary-dialer')
    ], exports.RotaryDialerElement);

    var __decorate$z = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.ServoElement = class ServoElement extends n$1 {
        constructor() {
            super(...arguments);
            /**
             * The angle of the servo's horn
             */
            this.angle = 0;
            /**
             * Servo horn (arm) type. The horn is attached to the
             * servo's output shaft, and they rotate together.
             */
            this.horn = 'single';
            /** Servo horn color (as an HTML color) */
            this.hornColor = '#ccc';
            this.pinInfo = [
                { name: 'GND', x: 0, y: 50, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'V+', x: 0, y: 59.5, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'PWM', x: 0, y: 69, signals: [{ type: 'pwm' }] },
            ];
        }
        hornPath() {
            switch (this.horn) {
                case 'cross':
                    return 'm119.54 50.354h-18.653v-18.653a8.4427 8.4427 0 0 0-8.4427-8.4427h-1.9537a8.4427 8.4427 0 0 0-8.4427 8.4427v18.653h-18.653a8.4427 8.4427 0 0 0-8.4427 8.4427v1.9537a8.4427 8.4427 0 0 0 8.4427 8.4427h18.653v18.653a8.4427 8.4427 0 0 0 8.4427 8.4427h1.9537a8.4427 8.4427 0 0 0 8.4427-8.4427v-18.653h18.653a8.4427 8.4427 0 0 0 8.4426-8.4427v-1.9537a8.4427 8.4427 0 0 0-8.4426-8.4427zm-57.447 12.136a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm20.621-34.813a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 8.7543a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 55.438a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm0-8.7543a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm5.9215-17.42a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843zm14.704-3.205a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165z';
                case 'double':
                    return 'm101.63 57.808c-0.0768-0.48377-0.16978-0.8838-0.23258-1.1629l-4.112-51.454c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.1004 51.447c-0.07443 0.28607-0.16746 0.69774-0.24421 1.1629a12.473 12.473 0 0 0 0 3.9306c0.07675 0.48377 0.16978 0.8838 0.24421 1.1629l4.1004 51.461c0 2.8654 2.6026 5.1912 5.8145 5.1912s5.8145-2.3258 5.8145-5.1912l4.1004-51.447c0.0744-0.28607 0.16746-0.69774 0.23258-1.1629a12.473 12.473 0 0 0 0.0116-3.9376zm-4.2376 7.8868a8.3426 8.3426 0 0 1-3.5375 2.1072c-0.25816 0.07443-0.52098 0.13955-0.7838 0.19072a8.7217 8.7217 0 0 1-1.1978 0.1442c-0.26747 0.01163-0.53726 0.01163-0.80473 0a8.7217 8.7217 0 0 1-1.1978-0.1442c-0.26282-0.05117-0.52563-0.11629-0.78379-0.19072a8.3729 8.3729 0 0 1 0-16.048c0.25816-0.07675 0.52098-0.13955 0.78379-0.19072a8.7217 8.7217 0 0 1 1.1978-0.1442c0.26747-0.01163 0.53726-0.01163 0.80473 0a8.7217 8.7217 0 0 1 1.1978 0.1442c0.26282 0.05117 0.52563 0.11396 0.7838 0.19072a8.3729 8.3729 0 0 1 3.5375 13.955zm-5.9215-54.996a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 72.565a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.3729a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791z';
                case 'single':
                default:
                    return 'm101.6 59.589-4.3167-54.166c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.3167 54.166a8.3264 8.3264 0 0 0-0.10234 1.2792c0 5.047 4.5818 9.1381 10.234 9.1381s10.234-4.0911 10.234-9.1381a8.3264 8.3264 0 0 0-0.10233-1.2792zm-10.131-48.658a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm5.9215 29.412a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843z';
            }
        }
        render() {
            var _a;
            return y`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45mm"
        height="31.63mm"
        version="1.1"
        viewBox="0 0 170.08 119.55"
      >
        <defs>
          <g id="pin">
            <rect x="0" y="-1.91" width="3.72" height="3.71" />
            <path d="m2.026 -1.91h13.532l-13.425 0.51865z" />
            <path d="m2.026 1.80h13.532l-13.425-0.50702z" />
            <rect fill="#ccc" x="0.33" y="-1.23" width="3.04" height="2.46" rx=".15" />
          </g>
        </defs>
        <g stroke-width="2.7" fill="none">
          <path
            stroke="#b44200"
            d="m 83.32,56.6 c0,0 -32.99,0.96 -43.32,0 -6.20,-0.58 -10.60,-6.20 -14.87,-6.31"
          />
          <path stroke="#ff2300" d="m83.326 59.6h-62.971" />
          <path
            stroke="#f47b00"
            d="m 83.32,62.6 c0,0 -32.60,-0.61 -43.33,-0.15 -6.87,0.29 -12.01,6.82 -14.77,6.73"
          />
        </g>
        <rect fill="#666" y="45.5" width="25.71" height="28" rx="1.14" />
        <use xlink:href="#pin" x="4.7" y="50.06" />
        <use xlink:href="#pin" x="4.7" y="59.66" />
        <use xlink:href="#pin" x="4.7" y="69.26" />
        <path
          fill="#4d4d4d"
          d="m163.92 66.867a7.09 7.09 0 1 1 5.8145-11.136 0.18 0.18 0 0 0 0.33-0.10234v-14.346h-17.664v36.98h17.676v-14.346a0.18 0.18 0 0 0-0.333-0.107 7.08 7.08 0 0 1-5.83 3.06z"
        />
        <path
          fill="#4d4d4d"
          d="m55.068 66.75a7.09 7.09 0 1 0-5.8261-11.136 0.18 0.18 0 0 1-0.33-0.10234v-14.346h17.676v36.98h-17.676v-14.346a0.18 0.18 0 0 1 0.333-0.107 7.08 7.08 0 0 0 5.83 3.06z"
        />
        <rect fill="#666" x="64.255" y="37.911" width="90.241" height="43.725" rx="5.3331" />
        <path fill="gray" d="m110.07 50.005h-14.42v19.537h14.42a9.7684 9.7684 0 0 0 0-19.537z" />
        <circle fill="#999" cx="91.467" cy="59.773" r="18.606" />
        <path
          fill=${this.hornColor}
          transform="translate(91.467 59.773) rotate(${(_a = this.angle) !== null && _a !== void 0 ? _a : 0}) translate(-91.467 -59.773)"
          d="${this.hornPath()}"
        />
        <circle fill="gray" cx="91.467" cy="59.773" r="8.3729" />
        <circle fill="#ccc" cx="91.467" cy="59.773" r="6.2494" />
        <path
          fill="#666"
          d="m94.911 62.543-2.3839-2.4165a0.42562 0.42562 0 0 1 0-0.60471l2.4281-2.3863a0.64657 0.64657 0 0 0 0.06512-0.8652 0.62797 0.62797 0 0 0-0.93032-0.05117l-2.4351 2.4049a0.4326 0.4326 0 0 1-0.60703 0l-2.3863-2.4165a0.6489 0.6489 0 0 0-0.8652-0.06512 0.63262 0.63262 0 0 0-0.05117 0.93032l2.4049 2.4328a0.42795 0.42795 0 0 1 0 0.60703l-2.4142 2.3863a0.65122 0.65122 0 0 0-0.06745 0.8652 0.63029 0.63029 0 0 0 0.93032 0.05117l2.4351-2.4049a0.42562 0.42562 0 0 1 0.60471 0l2.3863 2.4398a0.63262 0.63262 0 0 0 0.93032-0.04186 0.64657 0.64657 0 0 0-0.04419-0.8652z"
        />
      </svg>
    `;
        }
    };
    __decorate$z([
        e$1()
    ], exports.ServoElement.prototype, "angle", void 0);
    __decorate$z([
        e$1()
    ], exports.ServoElement.prototype, "horn", void 0);
    __decorate$z([
        e$1()
    ], exports.ServoElement.prototype, "hornColor", void 0);
    exports.ServoElement = __decorate$z([
        n('wokwi-servo')
    ], exports.ServoElement);

    var __decorate$y = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.Dht22Element = class DHT22Element extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'VCC', x: 15, y: 114.9, signals: [{ type: 'power', signal: 'VCC' }], number: 1 },
                { name: 'SDA', x: 24.5, y: 114.9, signals: [], number: 2 },
                { name: 'NC', x: 34.1, y: 114.9, signals: [], number: 3 },
                { name: 'GND', x: 43.8, y: 114.9, signals: [{ type: 'power', signal: 'GND' }], number: 4 },
            ];
        }
        render() {
            return y`
      <svg
        width="15.1mm"
        height="30.885mm"
        version="1.1"
        viewBox="0 0 15.1 30.885"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="3.57" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="6.11" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="8.65" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="11.19" y="23.885" width=".75" height="7" rx=".2" />
        </g>
        <path
          d="M15.05 23.995V5.033m0 0c0-.107-1.069-4.962-2.662-4.96L2.803.09C1.193.09.05 4.926.05 5.033v18.962c0 .107.086.192.192.192h14.616a.192.192 0 00.192-.192M7.615.948h.004c1.08 0 1.956.847 1.956 1.892s-.876 1.892-1.956 1.892-1.956-.847-1.956-1.892c0-1.044.873-1.89 1.952-1.892zM4.967 8.66H5.9a.21.21 0 01.211.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.212-.21V8.87a.21.21 0 01.212-.211zm2.168 0h.934a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm2.152 0h.935a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm5.757 0v1.356m0 0h-3.217a.553.553 0 01-.554-.554v-.249a.55.55 0 01.554-.553h3.217M.05 8.66h3.282c.307 0 .554.247.554.553v.25a.552.552 0 01-.554.553H.05m0 1.054h3.282c.307 0 .554.247.554.554v.249a.552.552 0 01-.554.554H.05m4.917-1.357H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.212-.21v-.935a.21.21 0 01.212-.21zm2.168 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.211.211h-.934a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.153 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.539 0h3.217v1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553zM.05 13.547h3.282c.307 0 .553.247.553.554v.249a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.169 0h.933a.21.21 0 01.212.211v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm5.757 1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553h3.217m0 3.791h-3.218a.553.553 0 01-.553-.554v-.249c0-.306.247-.553.553-.553h3.218m-14.994 0h3.282c.307 0 .553.247.553.553v.25a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zm2.169 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.21h-.934a.21.21 0 01-.211-.21v-.934a.21.21 0 01.211-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zM.05 18.362h3.282c.307 0 .553.247.553.554v.25a.552.552 0 01-.553.552H.05m4.916-1.355H5.9a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm2.169 0h.933a.21.21 0 01.212.21v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.934a.21.21 0 01.21-.211zm2.152 0h.934a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm5.757 1.355h-3.218a.552.552 0 01-.553-.553v-.25c0-.306.247-.552.553-.552h3.218M10.49 5.056V7.31a.192.192 0 01-.193.193h-.85a.192.192 0 01-.193-.193V5.056H8.23v2.286a.192.192 0 01-.192.192h-.851a.192.192 0 01-.193-.192V5.056H5.94v2.286a.192.192 0 01-.193.192h-.85a.192.192 0 01-.193-.192V5.056C.033 5.025.05 5.033.05 5.033m15 0l-4.56.023v0"
          fill="#f2f2f2"
          stroke="#000"
          stroke-linecap="round"
          stroke-width=".1"
        />
        <text
          x="3.7415893"
          y="22.863354"
          fill="#000000"
          font-family="sans-serif"
          font-size="2.2px"
          stroke-width=".05"
          style="line-height:1.25"
        >
          DHT22
        </text>
      </svg>
    `;
        }
    };
    exports.Dht22Element = __decorate$y([
        n('wokwi-dht22')
    ], exports.Dht22Element);

    var __decorate$x = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.ArduinoMegaElement = class ArduinoMegaElement extends n$1 {
        constructor() {
            super(...arguments);
            this.led13 = false;
            this.ledRX = false;
            this.ledTX = false;
            this.ledPower = false;
            this.resetPressed = false;
            this.pinInfo = [
                { name: 'SCL', x: 90, y: 9, signals: [i2c('SCL')] },
                { name: 'SDA', x: 100, y: 9, signals: [i2c('SDA')] },
                { name: 'AREF', x: 109, y: 9, signals: [] },
                { name: 'GND.1', x: 119, y: 9, signals: [{ type: 'power', signal: 'GND' }] },
                { name: '13', x: 129, y: 9, signals: [{ type: 'pwm' }] },
                { name: '12', x: 138, y: 9, signals: [{ type: 'pwm' }] },
                { name: '11', x: 148, y: 9, signals: [{ type: 'pwm' }] },
                { name: '10', x: 157.5, y: 9, signals: [{ type: 'pwm' }] },
                { name: '9', x: 167.5, y: 9, signals: [{ type: 'pwm' }] },
                { name: '8', x: 177, y: 9, signals: [{ type: 'pwm' }] },
                { name: '7', x: 190, y: 9, signals: [{ type: 'pwm' }] },
                { name: '6', x: 200, y: 9, signals: [{ type: 'pwm' }] },
                { name: '5', x: 209.5, y: 9, signals: [{ type: 'pwm' }] },
                { name: '4', x: 219, y: 9, signals: [{ type: 'pwm' }] },
                { name: '3', x: 228.5, y: 9, signals: [{ type: 'pwm' }] },
                { name: '2', x: 238, y: 9, signals: [{ type: 'pwm' }] },
                { name: '1', x: 247.5, y: 9, signals: [usart('TX')] },
                { name: '0', x: 257.5, y: 9, signals: [usart('RX')] },
                { name: '14', x: 270.5, y: 9, signals: [usart('TX', 3)] },
                { name: '15', x: 280, y: 9, signals: [usart('RX', 3)] },
                { name: '16', x: 289.5, y: 9, signals: [usart('TX', 2)] },
                { name: '17', x: 299, y: 9, signals: [usart('RX', 2)] },
                { name: '18', x: 308.5, y: 9, signals: [usart('TX', 1)] },
                { name: '19', x: 318.5, y: 9, signals: [usart('RX', 1)] },
                { name: '20', x: 328, y: 9, signals: [i2c('SDA')] },
                { name: '21', x: 337.5, y: 9, signals: [i2c('SCL')] },
                { name: '5V.1', x: 361, y: 8, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: '5V.2', x: 371, y: 8, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: '22', x: 361, y: 17.5, signals: [] },
                { name: '23', x: 371, y: 17.5, signals: [] },
                { name: '24', x: 361, y: 27.25, signals: [] },
                { name: '25', x: 371, y: 27.25, signals: [] },
                { name: '26', x: 361, y: 36.75, signals: [] },
                { name: '27', x: 371, y: 36.75, signals: [] },
                { name: '28', x: 361, y: 46.25, signals: [] },
                { name: '29', x: 371, y: 46.25, signals: [] },
                { name: '30', x: 361, y: 56, signals: [] },
                { name: '31', x: 371, y: 56, signals: [] },
                { name: '32', x: 361, y: 65.5, signals: [] },
                { name: '33', x: 371, y: 65.5, signals: [] },
                { name: '34', x: 361, y: 75, signals: [] },
                { name: '35', x: 371, y: 75, signals: [] },
                { name: '36', x: 361, y: 84.5, signals: [] },
                { name: '37', x: 371, y: 84.5, signals: [] },
                { name: '38', x: 361, y: 94.25, signals: [] },
                { name: '39', x: 371, y: 94.25, signals: [] },
                { name: '40', x: 361, y: 103.75, signals: [] },
                { name: '41', x: 371, y: 103.75, signals: [] },
                { name: '42', x: 361, y: 113.5, signals: [] },
                { name: '43', x: 371, y: 113.5, signals: [] },
                { name: '44', x: 361, y: 123, signals: [{ type: 'pwm' }] },
                { name: '45', x: 371, y: 123, signals: [{ type: 'pwm' }] },
                { name: '46', x: 361, y: 132.75, signals: [{ type: 'pwm' }] },
                { name: '47', x: 371, y: 132.75, signals: [] },
                { name: '48', x: 361, y: 142.25, signals: [] },
                { name: '49', x: 371, y: 142.25, signals: [] },
                { name: '50', x: 361, y: 152, signals: [spi('MISO')] },
                { name: '51', x: 371, y: 152, signals: [spi('MOSI')] },
                { name: '52', x: 361, y: 161.5, signals: [spi('SCK')] },
                { name: '53', x: 371, y: 161.5, signals: [spi('SS')] },
                { name: 'GND.4', x: 361, y: 171.25, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'GND.5', x: 371, y: 171.25, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'IOREF', x: 136, y: 184.5, signals: [] },
                { name: 'RESET', x: 145.5, y: 184.5, signals: [] },
                { name: '3.3V', x: 155, y: 184.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
                { name: '5V', x: 164.5, y: 184.5, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: 'GND.2', x: 174.25, y: 184.5, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'GND.3', x: 183.75, y: 184.5, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'VIN', x: 193.5, y: 184.5, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'A0', x: 208.5, y: 184.5, signals: [analog(0)] },
                { name: 'A1', x: 218, y: 184.5, signals: [analog(1)] },
                { name: 'A2', x: 227.5, y: 184.5, signals: [analog(2)] },
                { name: 'A3', x: 237.25, y: 184.5, signals: [analog(3)] },
                { name: 'A4', x: 246.75, y: 184.5, signals: [analog(4)] },
                { name: 'A5', x: 256.25, y: 184.5, signals: [analog(5)] },
                { name: 'A6', x: 266, y: 184.5, signals: [analog(6)] },
                { name: 'A7', x: 275.5, y: 184.5, signals: [analog(7)] },
                { name: 'A8', x: 290.25, y: 184.5, signals: [analog(8)] },
                { name: 'A9', x: 300, y: 184.5, signals: [analog(9)] },
                { name: 'A10', x: 309.5, y: 184.5, signals: [analog(10)] },
                { name: 'A11', x: 319.25, y: 184.5, signals: [analog(11)] },
                { name: 'A12', x: 328.75, y: 184.5, signals: [analog(12)] },
                { name: 'A13', x: 338.5, y: 184.5, signals: [analog(13)] },
                { name: 'A14', x: 348, y: 184.5, signals: [analog(14)] },
                { name: 'A15', x: 357.75, y: 184.5, signals: [analog(15)] },
            ];
        }
        static get styles() {
            return r$3`
      text {
        font-size: 2px;
        font-family: monospace;
      }
      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `;
        }
        render() {
            const { ledPower, led13, ledRX, ledTX } = this;
            return y`
      <svg
        width="102.66mm"
        height="50.80mm"
        version="1.1"
        viewBox="-4 0 102.66 50.80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${pinsFemalePattern}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <!-- PCB -->
        <path
          d="M2.105.075v50.653h94.068v-1.206l2.412-2.412V14.548l-2.412-2.413V2.487L93.785.075zm14.443.907a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.505 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0116.548.982zm71.154 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.505 1.505 1.505 0 01-1.505 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0187.702.982zM64.818 15.454a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm0 26.532a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm-49.476 4.825a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.504 1.505 1.505 0 01-1.506 1.506 1.505 1.505 0 01-1.505-1.506 1.505 1.505 0 011.476-1.504zm78.39 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.504 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506 1.505 1.505 0 011.476-1.504z"
          fill="#2b6b99"
        />

        <!-- reset button -->
        <rect
          transform="rotate(269.81)"
          x="-28.046"
          y="68.977"
          width="6.2151"
          height="6.0268"
          fill="#9b9b9b"
        />
        <g fill="#e6e6e6">
          <rect transform="rotate(269.81)" x="-29.725" y="69.518" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-29.741" y="71.4" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-29.764" y="73.425" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-21.831" y="73.59" width="1.695" height=".84994" />
          <rect transform="rotate(269.81)" x="-21.854" y="69.517" width="1.695" height=".84994" />
        </g>
        <circle
          id="reset-button"
          transform="rotate(269.81)"
          cx="-24.9"
          cy="72.092"
          r="1.5405"
          fill="#960000"
          stroke="#777"
          stroke-width="0.15"
          tabindex="0"
          @mousedown=${() => this.down()}
          @touchstart=${() => this.down()}
          @mouseup=${() => this.up()}
          @mouseleave=${() => this.leave()}
          @touchend=${() => this.leave()}
          @keydown=${(e) => SPACE_KEYS.includes(e.key) && this.down()}
          @keyup=${(e) => SPACE_KEYS.includes(e.key) && this.up()}
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black" transform="translate(0 -4)">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(18.4 1.07)">
          <rect width="${0.38 + 2.54 * 10}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.81 1.07)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(66 1.07)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(27.93 47.5)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.63 47.5)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(71.34 47.5)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(90.1 0.8)">
          <rect width="${0.38 + 2.54 * 2}" height="${2.54 * 18}" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <rect x="43" y="17.55" fill="#000" width="13.5" height="13.5" rx="0.5" />

        <!-- Programming Headers -->
        <g transform="translate(61.5 21.09)">
          <rect width="4.80" height="7" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(72.20 15.58)">
          <use xlink:href="#led-body" />
          ${ledPower &&
                b`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="68" y="16.75">PWR</tspan>
        </text>

        <g transform="translate(26 13.86)">
          <use xlink:href="#led-body" />
          ${led13 &&
                b`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 18.52)">
          <use xlink:href="#led-body" />
          ${ledTX &&
                b`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 20.75)">
          <use xlink:href="#led-body" />
          ${ledRX &&
                b`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="29.4" y="15">L</tspan>
          <tspan x="29.4" y="19.8">TX</tspan>
          <tspan x="29.4" y="22">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="7.6" width="31.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.8">PWM</tspan>
        </text>

        <rect x="60.5" y="11.8" width="25.4" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="65" y="14.2">COMMUNICATION</tspan>
        </text>

        <text
          transform="translate(22.6 3.4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">11</tspan>
          <tspan x="0" dy="2.54">10</tspan>
          <tspan x="0" dy="2.54">9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">6</tspan>
          <tspan x="0" dy="2.54">5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→ 1</tspan>
          <tspan x="0" dy="2.54">RX← 0</tspan>
          <tspan x="0" dy="3.34">TX3 14</tspan>
          <tspan x="0" dy="2.54">RX3 15</tspan>
          <tspan x="0" dy="2.54">TX2 16</tspan>
          <tspan x="0" dy="2.54">RX2 17</tspan>
          <tspan x="0" dy="2.54">TX1 18</tspan>
          <tspan x="0" dy="2.54">RX1 19</tspan>
          <tspan x="0" dy="2.54">SDA 20</tspan>
          <tspan x="0" dy="2.54">SCL 21</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="36" y="41.46" width="12.44" height="0.16" fill="#fff"></rect>
        <rect x="50" y="41.46" width="39" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="39" y="40.96">POWER</tspan>
          <tspan x="65" y="40.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(30.19 47) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="3.74">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">A6</tspan>
          <tspan x="0" dy="2.54">A7</tspan>
          <tspan x="0" dy="3.74">A8</tspan>
          <tspan x="0" dy="2.54">A9</tspan>
          <tspan x="0" dy="2.54">A10</tspan>
          <tspan x="0" dy="2.54">A11</tspan>
          <tspan x="0" dy="2.54">A12</tspan>
          <tspan x="0" dy="2.54">A13</tspan>
          <tspan x="0" dy="1.84">A14</tspan>
          <tspan x="0" dy="1.84">A15</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <text x="51.85" y="36" style="font-size:4px;font-weight:bold;line-height:1.25;fill:#fff">
          Arduino MEGA
        </text>
      </svg>
    `;
        }
        down() {
            if (this.resetPressed) {
                return;
            }
            this.resetPressed = true;
            this.resetButton.style.stroke = '#333';
            this.dispatchEvent(new CustomEvent('button-press', {
                detail: 'reset',
            }));
        }
        up() {
            if (!this.resetPressed) {
                return;
            }
            this.resetPressed = false;
            this.resetButton.style.stroke = '';
            this.dispatchEvent(new CustomEvent('button-release', {
                detail: 'reset',
            }));
        }
        leave() {
            this.resetButton.blur();
            this.up();
        }
    };
    __decorate$x([
        e$1()
    ], exports.ArduinoMegaElement.prototype, "led13", void 0);
    __decorate$x([
        e$1()
    ], exports.ArduinoMegaElement.prototype, "ledRX", void 0);
    __decorate$x([
        e$1()
    ], exports.ArduinoMegaElement.prototype, "ledTX", void 0);
    __decorate$x([
        e$1()
    ], exports.ArduinoMegaElement.prototype, "ledPower", void 0);
    __decorate$x([
        e$1()
    ], exports.ArduinoMegaElement.prototype, "resetPressed", void 0);
    __decorate$x([
        i$2('#reset-button')
    ], exports.ArduinoMegaElement.prototype, "resetButton", void 0);
    exports.ArduinoMegaElement = __decorate$x([
        n('wokwi-arduino-mega')
    ], exports.ArduinoMegaElement);

    var __decorate$w = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.ArduinoNanoElement = class ArduinoNanoElement extends n$1 {
        constructor() {
            super(...arguments);
            this.led13 = false;
            this.ledRX = false;
            this.ledTX = false;
            this.ledPower = false;
            this.resetPressed = false;
            this.pinInfo = [
                { name: '12', x: 19.7, y: 4.8, signals: [spi('MISO')] },
                { name: '11', x: 29.3, y: 4.8, signals: [spi('MOSI'), { type: 'pwm' }] },
                { name: '10', x: 38.9, y: 4.8, signals: [spi('SS'), { type: 'pwm' }] },
                { name: '9', x: 48.5, y: 4.8, signals: [{ type: 'pwm' }] },
                { name: '8', x: 58.1, y: 4.8, signals: [] },
                { name: '7', x: 67.7, y: 4.8, signals: [] },
                { name: '6', x: 77.3, y: 4.8, signals: [{ type: 'pwm' }] },
                { name: '5', x: 86.9, y: 4.8, signals: [{ type: 'pwm' }] },
                { name: '4', x: 96.5, y: 4.8, signals: [] },
                { name: '3', x: 106.1, y: 4.8, signals: [{ type: 'pwm' }] },
                { name: '2', x: 115.7, y: 4.8, signals: [] },
                { name: 'GND.2', x: 125.3, y: 4.8, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'RESET.2', x: 134.9, y: 4.8, signals: [] },
                { name: '0', x: 144.5, y: 4.8, signals: [usart('TX')] },
                { name: '1', x: 154.1, y: 4.8, signals: [usart('RX')] },
                { name: '13', x: 19.7, y: 62.4, signals: [spi('SCK')] },
                { name: '3.3V', x: 29.3, y: 62.4, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
                { name: 'AREF', x: 38.9, y: 62.4, signals: [] },
                { name: 'A0', x: 48.5, y: 62.4, signals: [analog(0)] },
                { name: 'A1', x: 58.1, y: 62.4, signals: [analog(1)] },
                { name: 'A2', x: 67.7, y: 62.4, signals: [analog(2)] },
                { name: 'A3', x: 77.3, y: 62.4, signals: [analog(3)] },
                { name: 'A4', x: 86.9, y: 62.4, signals: [analog(4), i2c('SDA')] },
                { name: 'A5', x: 96.5, y: 62.4, signals: [analog(5), i2c('SCL')] },
                { name: 'A6', x: 106.1, y: 62.4, signals: [analog(6)] },
                { name: 'A7', x: 115.7, y: 62.4, signals: [analog(7)] },
                { name: '5V', x: 125.3, y: 62.4, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: 'RESET', x: 134.9, y: 62.4, signals: [] },
                { name: 'GND.1', x: 144.5, y: 62.4, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'VIN', x: 154.1, y: 62.4, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: '12.2', x: 163.7, y: 43.2, signals: [spi('MISO')], noBreadboard: true },
                {
                    name: '5V.2',
                    x: 154.1,
                    y: 43.2,
                    signals: [{ type: 'power', signal: 'VCC', voltage: 5 }],
                    noBreadboard: true,
                },
                { name: '13.2', x: 163.7, y: 33.6, signals: [spi('SCK')], noBreadboard: true },
                {
                    name: '11.2',
                    x: 154.1,
                    y: 33.6,
                    signals: [spi('MOSI'), { type: 'pwm' }],
                    noBreadboard: true,
                },
                { name: 'RESET.3', x: 163.7, y: 24, signals: [], noBreadboard: true },
                {
                    name: 'GND.3',
                    x: 154.1,
                    y: 24,
                    signals: [{ type: 'power', signal: 'GND' }],
                    noBreadboard: true,
                },
            ];
        }
        static get styles() {
            return r$3`
      text {
        font-size: 1px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `;
        }
        render() {
            const { ledPower, led13, ledRX, ledTX } = this;
            return y`
      <svg
        width="44.9mm"
        height="17.8mm"
        viewBox="-1.4 0 44.9 17.8"
        font-weight="bold"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="solderPlate" style="color-interpolation-filters:sRGB;">
            <feTurbulence result="r0" type="fractalNoise" baseFrequency="1" numOctaves="1" />
            <feComposite
              result="r1"
              in="r0"
              in2="SourceGraphic"
              operator="arithmetic"
              k1=".6"
              k2=".6"
              k3="1.2"
              k4=".25"
            />
            <feBlend result="r2" in="r1" in2="SourceGraphic" mode="luminosity" />
            <feComposite result="r3" in="r2" in2="SourceGraphic" operator="in" />
          </filter>
          <pattern id="pins-tqfp-0.5mm" width="1" height=".5" patternUnits="userSpaceOnUse">
            <rect fill="#333" width="1" height=".2" y=".17" />
          </pattern>
          <pattern id="pins-pth-0.75" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".375" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <pattern id="pins-pth-1.00" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".5" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#333" filter="url(#solderPlate)" />
            <rect x=".6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width=".05" />
          </g>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation=".5" />
          </filter>
        </defs>

        <!-- PCB -->
        <g id="pcb" fill="#fff">
          <rect width="43.5" height="17.8" x="0" y="0" fill="#1b7e84" />
          <circle cx="1" cy="1" r=".889" />
          <circle cx="42.42" cy="1" r=".889" />
          <circle cx="42.42" cy="16.6" r=".889" />
          <circle cx="1" cy="16.6" r=".889" />
        </g>

        <!-- silkscreen -->
        <g id="silkscreen" fill="#eee" text-anchor="middle">
          <rect x="30.48" y="0" width="2.54" height="3.2" />
          <rect x="35.56" y="14.6" width="2.54" height="3.2" />
          <g fill="#1b7e84" transform="translate(1.27 1.27)">
            <circle r=".85" cx="30.48" />
            <circle r=".85" cx="35.56" cy="15.24" />
          </g>
          <g transform="translate(1.27 3)">
            <text x="2.54">D12</text>
            <text x="5.08">D11</text>
            <text x="7.62">D10</text>
            <text x="10.16">D9</text>
            <text x="12.7">D8</text>
            <text x="15.24">D7</text>
            <text x="17.78">D6</text>
            <text x="20.32">D5</text>
            <text x="22.86">D4</text>
            <text x="25.4">D3</text>
            <text x="27.94">D2</text>
            <text x="30.48" fill="#1b7e84">GND</text>
            <text x="33.02">RST</text>
            <text x="35.56" font-size="200%">↓</text>
            <text x="35.56" y="1">RX0</text>
            <text x="38.1" font-size="200%">↑</text>
            <text x="38.1" y="1">TX1</text>
          </g>
          <g transform="translate(1.27 15.5)">
            <text x="2.54">D13</text>
            <text x="5.08">3V3</text>
            <text x="7.62">AREF</text>
            <text x="10.16">A0</text>
            <text x="12.7">A1</text>
            <text x="15.24">A2</text>
            <text x="17.78">A3</text>
            <text x="20.32">A4</text>
            <text x="22.86">A5</text>
            <text x="25.4">A6</text>
            <text x="27.94">A7</text>
            <text x="30.48">5V</text>
            <text x="33.02">RST</text>
            <text x="35.56" fill="#1b7e84">GND</text>
            <text x="38.1">VIN</text>
          </g>
          <g transform="rotate(90)">
            <text x="8.7" y="-22.5">RESET</text>
            <text x="5.6" y="-32.2">TX</text>
            <text x="5.6" y="-30.7" font-size="200%">↓</text>
            <text x="7.6" y="-32.2">RX</text>
            <text x="7.6" y="-30.7" font-size="200%">↑</text>
            <text x="9.6" y="-30.7">ON</text>
            <text x="11.6" y="-30.7">L</text>
          </g>
        </g>

        <!-- MCU -->
        <g id="mcu" transform="rotate(45 -2.978 23.39)">
          <g fill="url(#pins-tqfp-0.5mm)" filter="url(#solderPlate)">
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" />
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" transform="rotate(90)" />
          </g>
          <rect x="-2.275" y="-2.275" width="4.55" height="4.55" fill="#444" />
          <circle transform="rotate(45)" cx=".012" cy="-2.5" r=".35" fill="#222" />
        </g>

        <!-- pins -->
        <g id="pins" fill="url(#pins-pth-0.75)">
          <g id="pins-pin1" fill="#333" filter="url(#solderPlate)">
            <rect x="${15.5 * 2.54 - 0.875}" y="${0.5 * 2.54 - 0.875}" width="1.75" height="1.75" />
            <rect x="${15.5 * 2.54 - 0.875}" y="${6.5 * 2.54 - 0.875}" width="1.75" height="1.75" />
          </g>
          <rect x="2.54" width="${15 * 2.54}" height="2.54" />
          <rect x="2.54" y="${6 * 2.54}" width="${15 * 2.54}" height="2.54" />
        </g>

        <!-- programming header -->
        <g id="pgm-header" fill="url(#pins-pth-1.00)" stroke="#eee" stroke-width=".1">
          <g id="pgm-pin1" stroke="none" fill="#333" filter="url(#solderPlate)">
            <rect x="${16.5 * 2.54 - 0.875}" y="${4.5 * 2.54 - 0.875}" width="1.75" height="1.75" />
          </g>
          <rect x="${15 * 2.54}" y="${2 * 2.54}" width="${2 * 2.54}" height="${3 * 2.54}" />
        </g>

        <!-- USB mini type B -->
        <g id="usb-mini-b" stroke-width=".1" paint-order="stroke fill">
          <g fill="#333" filter="url(#solderPlate)">
            <rect x=".3" y="3.8" width="1.6" height="9.8" />
            <rect x="5.5" y="3.8" width="1.6" height="9.8" />
            <rect x="7.3" y="7.07" width="1.1" height=".48" />
            <rect x="7.3" y="7.82" width="1.1" height=".48" />
            <rect x="7.3" y="8.58" width="1.1" height=".48" />
            <rect x="7.3" y="9.36" width="1.1" height=".48" />
            <rect x="7.3" y="10.16" width="1.1" height=".48" />
          </g>
          <rect x="-1.4" y="4.8" width="8.9" height="7.8" fill="#999" stroke-width=".26" />
          <rect x="-1.25" y="5" width="8.6" height="7.4" fill="#ccc" stroke="#bbb" />
          <g fill="none" stroke="#333" stroke-width=".26" stroke-linecap="round">
            <path d="m2.6 5.9h-3.3v0.9h3.3m0 3.7h-3.3v0.9h3.3M-0.6 7.6l4.3 0.3v1.5l-4.3 0.3" />
            <path d="m3.3 7.9v1.5" stroke-width="1" stroke-linecap="butt" />
            <path d="m6 6.4v4.5" stroke-width=".35" />
          </g>
        </g>

        <!-- LEDs -->
        <g transform="translate(27.7 5)">
          <use xlink:href="#led-body" />
          ${ledTX &&
                b`<circle cx="1.3" cy=".55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 7)">
          <use xlink:href="#led-body" />
          ${ledRX &&
                b`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 9)">
          <use xlink:href="#led-body" />
          ${ledPower &&
                b`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 11)">
          <use xlink:href="#led-body" />
          ${led13 &&
                b`<circle cx="1.3" cy=".55" r="1.3" fill="#ffff80" filter="url(#ledFilter)" />`}
        </g>

        <!-- reset button -->
        <g stroke-width=".1" paint-order="fill stroke">
          <rect x="24.3" y="6.3" width="1" height="4.8" filter="url(#solderPlate)" fill="#333" />
          <rect x="23.54" y="6.8" width="2.54" height="3.8" fill="#ccc" stroke="#888" />
          <circle
            id="reset-button"
            cx="24.8"
            cy="8.7"
            r="1"
            fill="#eeb"
            stroke="#777"
            tabindex="0"
            @mousedown=${() => this.down()}
            @touchstart=${() => this.down()}
            @mouseup=${() => this.up()}
            @mouseleave=${() => this.leave()}
            @touchend=${() => this.leave()}
            @keydown=${(e) => SPACE_KEYS.includes(e.key) && this.down()}
            @keyup=${(e) => SPACE_KEYS.includes(e.key) && this.up()}
          />
        </g>
      </svg>
    `;
        }
        down() {
            if (this.resetPressed) {
                return;
            }
            this.resetPressed = true;
            this.resetButton.style.stroke = '#333';
            this.dispatchEvent(new CustomEvent('button-press', {
                detail: 'reset',
            }));
        }
        up() {
            if (!this.resetPressed) {
                return;
            }
            this.resetPressed = false;
            this.resetButton.style.stroke = '';
            this.dispatchEvent(new CustomEvent('button-release', {
                detail: 'reset',
            }));
        }
        leave() {
            this.resetButton.blur();
            this.up();
        }
    };
    __decorate$w([
        e$1()
    ], exports.ArduinoNanoElement.prototype, "led13", void 0);
    __decorate$w([
        e$1()
    ], exports.ArduinoNanoElement.prototype, "ledRX", void 0);
    __decorate$w([
        e$1()
    ], exports.ArduinoNanoElement.prototype, "ledTX", void 0);
    __decorate$w([
        e$1()
    ], exports.ArduinoNanoElement.prototype, "ledPower", void 0);
    __decorate$w([
        e$1()
    ], exports.ArduinoNanoElement.prototype, "resetPressed", void 0);
    __decorate$w([
        i$2('#reset-button')
    ], exports.ArduinoNanoElement.prototype, "resetButton", void 0);
    exports.ArduinoNanoElement = __decorate$w([
        n('wokwi-arduino-nano')
    ], exports.ArduinoNanoElement);

    var __decorate$v = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.Ds1307Element = class Ds1307Element extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'GND', y: 15, x: 9.5, number: 1, signals: [GND()] },
                { name: '5V', y: 25, x: 9.5, number: 2, signals: [VCC(5)] },
                { name: 'SDA', y: 34.5, x: 9.5, number: 3, signals: [i2c('SDA')] },
                { name: 'SCL', y: 44, x: 9.5, number: 4, signals: [i2c('SCL')] },
                { name: 'SQW', y: 54, x: 9.5, number: 5, signals: [] },
            ];
        }
        render() {
            return y`
      <svg
        width="25.8mm"
        height="22.212mm"
        version="1.1"
        viewBox="0 0 25.8 22.212"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2.961 0c-1.6405 0-2.961 1.3207-2.961 2.9611v16.29c0 1.6405 1.3206 2.961 2.961 2.961h19.878c1.6405 0 2.961-1.3206 2.961-2.961v-2.1407c-2.4623-2.4996-2.4864-1.3794-2.4996-5.5588-0.01319-4.1794 0.11192-2.4623 2.4996-5.5961v-2.9945c0-1.6405-1.3206-2.9611-2.961-2.9611zm20.214 1.5792h1.04e-4c3e-3 -1.1e-5 0.0061-1.1e-5 0.0091 0 0.67598-1.6e-5 1.224 0.54798 1.224 1.224 1.5e-5 0.67598-0.54798 1.224-1.224 1.224-0.67598 1.5e-5 -1.224-0.54798-1.224-1.224-3.4e-5 -0.67241 0.54238-1.2189 1.2148-1.224zm-20.564 1.9405c0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291 2.4e-5 0.29985-0.24306 0.54294-0.54291 0.54291-0.29985 2.4e-5 -0.54294-0.24306-0.54291-0.54291-2.4e-5 -0.29985 0.24306-0.54294 0.54291-0.54291zm-0.02958 2.5853c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54283-0.54291 0.54281-0.29977-3.2e-5 -0.54278-0.24304-0.54281-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm0.02632 2.5062h1.04e-4c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54284-0.54291 0.54281-0.29981 2.4e-5 -0.54288-0.243-0.54291-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm0.02652 2.5853c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29977 3.2e-5 0.54278 0.24304 0.54281 0.54281 2.4e-5 0.29981-0.243 0.54288-0.54281 0.54291-0.29985 2.4e-5 -0.54294-0.24306-0.54291-0.54291 2.7e-5 -0.29858 0.24117-0.5411 0.53975-0.54281zm-0.02652 2.5325h1.04e-4c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54284-0.54291 0.54281-0.29981 2.4e-5 -0.54288-0.243-0.54291-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm-0.02663 4.4895c3e-3 -1.1e-5 0.0061-1.1e-5 0.0091 0 0.6759 4.2e-5 1.2238 0.54795 1.2238 1.2238 1.5e-5 0.67594-0.54791 1.2239-1.2238 1.224-0.67598 1.5e-5 -1.224-0.54798-1.224-1.224 2.2e-5 -0.67241 0.54248-1.2189 1.2149-1.2238z"
          fill="#015abe"
        />
        <g fill="#ffe680">
          <path
            d="m2.6116 3.0997a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.5853 5.685a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.6116 8.1911a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.638 10.776a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.6116 13.309a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
        </g>
        <text transform="rotate(90)" font-size="1.3px" fill="#e6e6e6">
          <tspan x="0.78" y="-3.81">GND</tspan>
          <tspan x="5.75" y="-0.43">5V</tspan>
          <tspan x="7.89" y="-3.81">SDA</tspan>
          <tspan x="10.45" y="-0.49">SCL</tspan>
          <tspan x="13" y="-3.97">SQW</tspan>
        </text>
        <g fill="#999">
          <rect x="6.5174" y="9.8" width=".62" height="1.971" rx=".2" ry=".2" />
          <rect x="6.5174" y="4.29" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="7.8138" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="7.8138" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="9.0674" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="10.321" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="9.0674" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="10.321" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="8.8304" y="13" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="5.0064" y="18.56" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="5.0064" y="13.02" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="8.8118" y="18.57" width="1.38" height="1.43" rx=".2" ry=".2" />
        </g>
        <rect x="6.2656" y="6.1049" width="5.1111" height="3.8244" fill="#1a1a1a" />
        <rect x="5.9653" y="12.746" width="3.173" height="7.7357" fill="#1a1a1a" />
        <text fill="#e6e6e6">
          <tspan x="10.5" y="19.8" font-size="2.1px">RTC</tspan>
          <tspan x="10.1" y="21.5" font-size="1.38px">DS1307</tspan>
        </text>
        <path
          d="m23.105 6.4546-0.093544 11.038h-7.6239l-1.4032-2.666-0.14032-7.2965 1.1514-1.1171z"
          fill="#e7d652"
        />
        <path
          transform="scale(.26458)"
          d="m65.771 8.0801c-0.74122-0.056466-0.96289 0.40508-0.96289 0.99805v10.564h-7.7773l-11.018 11.018v26.67l11.191 11.193 7.0625-0.029297v11.404c0.030992 0.86246 0.40014 1.3613 1.3613 1.3613h9.8711c0.79548 0 1.1738-0.34656 1.1738-1.0801v-10.686h7.377s-0.091892-1.0897 0.49805-1.2539c4.3436-1.2091 5.1203-2.5601 5.7949-4.0449 2.0727-4.5618-6.7065-7.6884-6.1094-21.266 0.5971-13.577 7.9939-12.227 6.2988-18.801-0.48161-1.8679-2.1495-3.113-5.6328-3.3926-0.48254-0.038702-0.44922-0.99414-0.44922-0.99414h-7.5781v-10.717c0.00373-0.74652-0.24336-0.94531-1.0918-0.94531h-10.01zm-1.5918 16.668a7.937 7.937 0 0 1 0.14844 0 7.937 7.937 0 0 1 7.9375 7.9355 7.937 7.937 0 0 1-7.9375 7.9375 7.937 7.937 0 0 1-7.9355-7.9375 7.937 7.937 0 0 1 7.7871-7.9355zm0 24.707a7.937 7.937 0 0 1 0.14844 0 7.937 7.937 0 0 1 7.9375 7.9355 7.937 7.937 0 0 1-7.9375 7.9375 7.937 7.937 0 0 1-7.9355-7.9375 7.937 7.937 0 0 1 7.7871-7.9355z"
          fill="#e6e6e6"
        />
        <path
          d="m2.5877 17.819a1.6229 1.6229 0 0 0-1.6198 1.6229 1.6229 1.6229 0 0 0 1.6228 1.6228 1.6229 1.6229 0 0 0 1.6229-1.6228 1.6229 1.6229 0 0 0-1.6229-1.6229 1.6229 1.6229 0 0 0-0.0031 0zm0.0031 0.43845a1.1471 1.1471 0 0 1 1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471-1.1471 1.1471 1.1471 0 0 1 1.1471-1.1471z"
          fill="#e7e3c4"
        />
        <path
          d="m23.181 1.1802a1.6229 1.6229 0 0 0-1.6198 1.6229 1.6229 1.6229 0 0 0 1.6228 1.6228 1.6229 1.6229 0 0 0 1.6229-1.6228 1.6229 1.6229 0 0 0-1.6229-1.6229 1.6229 1.6229 0 0 0-0.0031 0zm0.0031 0.43845a1.1471 1.1471 0 0 1 1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471-1.1471 1.1471 1.1471 0 0 1 1.1471-1.1471z"
          fill="#e7e3c4"
        />
        <path
          d="m15.049 3.0132c-0.14489 0.02316-0.26986-0.0058-0.27922-0.06459-0.0094-0.05874 0.1005-0.1251 0.24541-0.1481 0.14481-0.023 0.26976 0.0058 0.27913 0.06451 0.0094 0.05874-0.1004 0.12518-0.24531 0.14818m-0.1376 0.60509c-0.05307 0.027-0.1501-0.05691-0.21671-0.18746-0.06668-0.13072-0.07782-0.2587-0.02468-0.2857 0.0529-0.02693 0.14978 0.05697 0.21654 0.18761 0.06668 0.13054 0.0779 0.25845 0.02485 0.28555m-0.57077-0.24323c-0.10363 0.10379-0.22167 0.1538-0.26376 0.11171-0.04214-0.04199 0.0078-0.16022 0.1114-0.26399 0.10354-0.10394 0.22158-0.15395 0.26384-0.11189 0.04206 0.04201-0.0078 0.1603-0.11148 0.26416m-0.39663-0.72272c0.02685-0.05307 0.15476-0.04201 0.2853 0.02443 0.13079 0.06645 0.21504 0.16341 0.18802 0.21638-0.027 0.05289-0.15476 0.04209-0.28545-0.02435-0.13072-0.06643-0.21487-0.16341-0.18786-0.21646m0.75238-0.38413c0.05882 0.0091 0.0879 0.13424 0.06492 0.27913-0.0227 0.14491-0.08873 0.25478-0.14762 0.24556-0.05866-0.0093-0.08784-0.13425-0.06509-0.27905 0.02285-0.14491 0.08896-0.25485 0.1478-0.24564m1.8552 0.39655c-0.01218-0.07703-0.05401-0.09906-0.15492-0.13127-0.07663-0.02462-0.58986-0.18811-0.58986-0.18811s-0.35776-0.1352-0.62286 0.05595c-0.03575 0.02579-0.07278 0.05512-0.10988 0.08638 0.03118-0.03718 0.06051-0.07413 0.08625-0.10987 0.19057-0.26551 0.05482-0.62311 0.05482-0.62311s-0.16438-0.51284-0.18915-0.5896c-0.03245-0.10067-0.05449-0.14251-0.1316-0.15445-0.07724-0.01225-0.1109 0.0207-0.17278 0.1066-0.04713 0.06524-0.36128 0.5029-0.36128 0.5029s-0.23885 0.29846-0.13922 0.6098c0.01352 0.04176 0.02998 0.08607 0.04834 0.13112-0.02582-0.0412-0.05193-0.08053-0.07798-0.11598-0.19371-0.26314-0.5755-0.24479-0.5755-0.24479s-0.53864-0.0021-0.61911-0.0022c-0.10594-3.55e-4 -0.15243 0.0079-0.18784 0.07734-0.03543 0.06949-0.01451 0.11194 0.04809 0.19723 0.04751 0.06501 0.3668 0.4989 0.3668 0.4989s0.20998 0.3196 0.53673 0.32088c0.04391 2.18e-4 0.09096-0.0018 0.13928-0.0053a1.9307 1.9307 0 0 0-0.13406 0.03824c-0.31025 0.1029-0.4105 0.47187-0.4105 0.47187s-0.16847 0.51163-0.19363 0.58824c-0.03285 0.1005-0.03951 0.14722 0.01563 0.20228 0.0552 0.0553 0.10202 0.04847 0.20252 0.01532 0.07653-0.02508 0.58791-0.19459 0.58791-0.19459s0.36858-0.10106 0.47076-0.41146c0.01388-0.04166 0.02645-0.08704 0.03816-0.13383-0.0035 0.04824-0.0053 0.09521-0.0049 0.13912 0.0018 0.32683 0.32169 0.53625 0.32169 0.53625s0.43436 0.31815 0.49943 0.36576c0.08559 0.06228 0.12791 0.08319 0.19748 0.0477 0.0694-0.03543 0.07751-0.08192 0.07701-0.18786-1.97e-4 -0.08048-0.0035-0.61911-0.0035-0.61911s0.01794-0.38188-0.24564-0.5751c-0.03543-0.02596-0.07463-0.05201-0.11579-0.07765 0.04495 0.0181 0.08902 0.03454 0.13102 0.04768 0.31134 0.09929 0.60947-0.14018 0.60947-0.14018s0.43694-0.31486 0.50226-0.36199c0.08575-0.06203 0.11852-0.09609 0.10634-0.17311"
          fill="#fff"
        />
        <text fill="#fff" font-size="2.5px" font-weight="bold">
          <tspan x="12.6" y="12.7">+</tspan>
        </text>
      </svg>
    `;
        }
    };
    exports.Ds1307Element = __decorate$v([
        n('wokwi-ds1307')
    ], exports.Ds1307Element);

    var __decorate$u = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const pinHeight = 3;
    const pcbWidth = 6;
    exports.LEDRingElement = class LEDRingElement extends n$1 {
        constructor() {
            super(...arguments);
            /**
             * Number of pixels to in the LED ring
             */
            this.pixels = 16;
            /**
             * Space between pixels (in mm)
             */
            this.pixelSpacing = 0;
            /**
             * Background (PCB) color
             */
            this.background = '#363';
            /**
             * Animate the LEDs in the matrix. Used primarily for testing in Storybook.
             * The animation sequence is not guaranteed and may change in future releases of
             * this element.
             */
            this.animation = false;
            this.pixelElements = null;
            this.animationFrame = null;
            this.animateStep = () => {
                const time = new Date().getTime();
                const { pixels } = this;
                const pixelValue = (n) => (n % 2000 > 1000 ? 1 - (n % 1000) / 1000 : (n % 1000) / 1000);
                for (let pixel = 0; pixel < pixels; pixel++) {
                    this.setPixel(pixel, {
                        r: pixelValue(pixel * 100 + time),
                        g: pixelValue(pixel * 100 + time + 200),
                        b: pixelValue(pixel * 100 + time + 400),
                    });
                }
                this.animationFrame = requestAnimationFrame(this.animateStep);
            };
        }
        get radius() {
            return ((this.pixelSpacing + 5) * this.pixels) / 2 / Math.PI + pcbWidth;
        }
        get pinInfo() {
            const { radius } = this;
            const pinSpacing = 2.54;
            const y = (radius * 2 + pinHeight) * mmToPix;
            const cx = radius * mmToPix;
            const p = pinSpacing * mmToPix;
            return [
                {
                    name: 'GND',
                    x: cx - 1.5 * p,
                    y,
                    signals: [{ type: 'power', signal: 'GND' }],
                },
                { name: 'VCC', x: cx - 0.5 * p, y, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'DIN', x: cx + 0.5 * p, y, signals: [] },
                { name: 'DOUT', x: cx + 1.5 * p, y, signals: [] },
            ];
        }
        getPixelElements() {
            if (!this.shadowRoot) {
                return null;
            }
            if (!this.pixelElements) {
                this.pixelElements = Array.from(this.shadowRoot.querySelectorAll('rect.pixel'));
            }
            return this.pixelElements;
        }
        setPixel(pixel, { r, g, b }) {
            const pixelElements = this.getPixelElements();
            if (!pixelElements) {
                return;
            }
            if (pixel < 0 || pixel >= pixelElements.length) {
                return;
            }
            pixelElements[pixel].style.fill = `rgb(${r * 255},${g * 255},${b * 255})`;
        }
        /**
         * Resets all the pixels to off state (r=0, g=0, b=0).
         */
        reset() {
            const pixelElements = this.getPixelElements();
            for (const element of pixelElements !== null && pixelElements !== void 0 ? pixelElements : []) {
                element.style.fill = '';
            }
        }
        update(changedProperties) {
            if (changedProperties.has('pixels') || changedProperties.has('pixelSpacing')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        updated() {
            if (this.animation && !this.animationFrame) {
                this.animationFrame = requestAnimationFrame(this.animateStep);
            }
            else if (!this.animation && this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
            }
        }
        render() {
            const { pixels, radius, background } = this;
            const pixelElements = [];
            const width = radius * 2;
            const height = radius * 2 + pinHeight;
            for (let i = 0; i < pixels; i++) {
                const angle = (i / pixels) * 360;
                pixelElements.push(b`<rect
          class="pixel"
          x="${radius - 2.5}"
          y="${pcbWidth / 2 - 2.5}"
          width="5"
          height="5"
          fill="white"
          stroke="black"
          stroke-width="0.25"
          transform="rotate(${angle} ${radius} ${radius})"/>`);
            }
            this.pixelElements = null; // Invalidate element cache
            return y`
      <svg
        width="${width}mm"
        height="${height}mm"
        version="1.1"
        viewBox="0 0 ${width} ${height}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            <rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />
          </pattern>
        </defs>
        <rect
          fill="url(#pin-pattern)"
          height="${pinHeight + 1}"
          width=${4 * 2.54}
          transform="translate(${radius - (4 * 2.54) / 2}, ${radius * 2 - 1})"
        />
        <circle
          cx="${radius}"
          cy="${radius}"
          r="${radius - pcbWidth / 2}"
          fill="transparent"
          stroke-width="${pcbWidth}"
          stroke="${background}"
        />
        ${pixelElements}
      </svg>
    `;
        }
    };
    __decorate$u([
        e$1()
    ], exports.LEDRingElement.prototype, "pixels", void 0);
    __decorate$u([
        e$1({ type: Number })
    ], exports.LEDRingElement.prototype, "pixelSpacing", void 0);
    __decorate$u([
        e$1()
    ], exports.LEDRingElement.prototype, "background", void 0);
    __decorate$u([
        e$1()
    ], exports.LEDRingElement.prototype, "animation", void 0);
    exports.LEDRingElement = __decorate$u([
        n('wokwi-led-ring')
    ], exports.LEDRingElement);

    var __decorate$t = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.SlideSwitchElement = class SlideSwitchElement extends n$1 {
        constructor() {
            super(...arguments);
            this.value = 0;
            this.pinInfo = [
                { name: '1', number: 1, y: 34, x: 6.5, signals: [] },
                { name: '2', number: 2, y: 34, x: 16, signals: [] },
                { name: '3', number: 3, y: 34, x: 25.5, signals: [] },
            ];
        }
        static get styles() {
            return r$3`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      svg #handle {
        transition: transform 0.2s linear;
      }
      input:checked + svg #handle {
        transform: translate(2px, 0);
      }
      input:focus + svg #handle {
        stroke-width: 0.4px;
        stroke: #8080ff;
      }
    `;
        }
        onClick() {
            var _a;
            const inputEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.hide-input');
            if (inputEl) {
                inputEl.checked = !inputEl.checked;
                this.onValueChange(inputEl);
                inputEl === null || inputEl === void 0 ? void 0 : inputEl.focus();
            }
        }
        onValueChange(target) {
            this.value = target.checked ? 1 : 0;
            this.dispatchEvent(new InputEvent('input', { detail: this.value }));
        }
        render() {
            const { value } = this;
            return y`
      <input
        tabindex="0"
        type="checkbox"
        class="hide-input"
        .checked=${value}
        @input="${(e) => this.onValueChange(e.target)}"
      />
      <svg
        width="8.5mm"
        height="9.23mm"
        version="1.1"
        viewBox="0 0 8.5 9.23"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="${this.onClick}"
      >
        <defs>
          <radialGradient
            id="a"
            cx="9.33"
            cy="122"
            r="4.25"
            gradientTransform="matrix(1.75 -.511 .28 .959 -41.2 8.15)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#808080" offset="0" />
            <stop stop-color="#b5b5b5" offset="1" />
          </radialGradient>
        </defs>
        <g fill="#aaa" stroke-width=".0673">
          <rect x="4" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
          <rect x="1.54" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
          <rect x="6.5" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        </g>
        <path
          id="handle"
          d="m2.74 0.128 0.145-0.128 0.177 0.0725 0.174-0.0725 0.151 0.0725 0.154-0.0725 0.151 0.0725 0.128-0.0725 0.134 0.0725 0.123-0.0725 0.145 0.128 2e-5 2h-1.48z"
          stroke-width=".0623"
        />
        <rect x="0" y="2.06" width="8.5" height="3.48" fill="url(#a)" stroke-width=".0548" />
        <rect x=".0322" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
        <rect x="6.95" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
        <rect x="2.55" y="4.74" width="3.47" height=".805" stroke-width=".0955" />
      </svg>
    `;
        }
    };
    __decorate$t([
        e$1()
    ], exports.SlideSwitchElement.prototype, "value", void 0);
    exports.SlideSwitchElement = __decorate$t([
        n('wokwi-slide-switch')
    ], exports.SlideSwitchElement);

    var __decorate$s = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.HCSR04Element = class HCSR04Element extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'VCC', x: 71.3, y: 94.5, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: 'TRIG', x: 81.3, y: 94.5, signals: [] },
                { name: 'ECHO', x: 91.3, y: 94.5, signals: [] },
                { name: 'GND', x: 101.3, y: 94.5, signals: [{ type: 'power', signal: 'GND' }] },
            ];
        }
        render() {
            return y`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 45 25"
        height="25mm"
        width="45mm"
        font-family="monospace"
      >
        <defs>
          <pattern patternUnits="userSpaceOnUse" width="2" height="2" id="checkerboard">
            <path d="M0 0h1v1H0zM1 1h1v1H1z" />
          </pattern>
          <radialGradient id="grad1" cx="8.96" cy="10.04" r="3.58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#777" offset="0" />
            <stop stop-color="#b9b9b9" offset="1" />
          </radialGradient>
          <g id="sensor-unit">
            <circle cx="8.98" cy="10" r="8.61" fill="#dcdcdc" />
            <circle cx="8.98" cy="10" r="7.17" fill="#222" />
            <circle cx="8.98" cy="10" r="5.53" fill="#777" fill-opacity=".992" />
            <circle cx="8.98" cy="10" r="3.59" fill="url(#grad1)" />
            <circle cx="8.99" cy="10" r=".277" fill="#777" fill-opacity=".818" />
            <circle cx="8.98" cy="10" r="5.53" fill="url(#checkerboard)" opacity=".397" />
          </g>
        </defs>
        <path
          d="M0 0v20.948h45V0zm1.422.464a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zM1.422 18.484a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1z"
          fill="#456f93"
        />
        <path
          d="M15.293 5.888l2.934-2.934v3.124l2.944 2.943v10.143M23.269 19.037v-2.473l-.966-.965v-12.5l2.577 1.488 4.741 4.741"
          fill="none"
          stroke="#355a7c"
          stroke-width=".858"
        />
        <use xlink:href="#sensor-unit" />
        <use xlink:href="#sensor-unit" x="27.12" />
        <g fill="none" stroke="#505132" stroke-width=".368">
          <circle cx="43.4" cy="1.46" r="1" />
          <circle cx="43.4" cy="19.5" r="1" />
          <circle cx="1.43" cy="1.46" r="1" />
          <circle cx="1.43" cy="19.5" r="1" />
        </g>
        <rect
          ry="2.07"
          y=".626"
          x="17.111"
          height="4.139"
          width="10.272"
          fill="#878787"
          stroke="#424242"
          stroke-width=".368"
        />
        <g fill="black">
          <rect x="17.87" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="20.41" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="22.95" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="25.49" y="18" ry=".568" width="2.25" height="2.271" />
        </g>
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="18.61" y="19" width=".75" height="7" rx=".2" />
          <rect x="21.15" y="19" width=".75" height="7" rx=".2" />
          <rect x="23.69" y="19" width=".75" height="7" rx=".2" />
          <rect x="26.23" y="19" width=".75" height="7" rx=".2" />
        </g>
        <text font-weight="400" font-size="2.2" fill="#e6e6e6" stroke-width=".055">
          <tspan y="8" x="17.6">HC-SR04</tspan>
        </text>
        <text
          transform="rotate(-90)"
          font-weight="400"
          font-size="1.55"
          fill="#e6e6e6"
          stroke-width=".039"
        >
          <tspan x="-17.591" y="19.561">VCC</tspan>
          <tspan x="-17.591" y="22.101">TRIG</tspan>
          <tspan x="-17.591" y="24.641">ECHO</tspan>
          <tspan x="-17.591" y="27.181">GND</tspan>
        </text>
      </svg>
    `;
        }
    };
    exports.HCSR04Element = __decorate$s([
        n('wokwi-hc-sr04')
    ], exports.HCSR04Element);

    var __decorate$r = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.LCD2004Element = class LCD2004Element extends exports.LCD1602Element {
        constructor() {
            super(...arguments);
            this.numCols = 20;
            this.numRows = 4;
        }
    };
    exports.LCD2004Element = __decorate$r([
        n('wokwi-lcd2004')
    ], exports.LCD2004Element);

    var __decorate$q = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.AnalogJoystickElement = class AnalogJoystickElement extends n$1 {
        constructor() {
            super(...arguments);
            this.xValue = 0;
            this.yValue = 0;
            this.pressed = false;
            this.pinInfo = [
                { name: 'VCC', x: 33, y: 115.8, signals: [VCC()] },
                { name: 'VERT', x: 42.6012, y: 115.8, signals: [analog(0)] },
                { name: 'HORZ', x: 52.2024, y: 115.8, signals: [analog(1)] },
                { name: 'SEL', x: 61.8036, y: 115.8, signals: [] },
                { name: 'GND', x: 71.4048, y: 115.8, signals: [GND()] },
            ];
        }
        static get styles() {
            return r$3`
      #knob {
        transition: transform 0.3s;
      }

      #knob:hover {
        fill: #222;
      }

      #knob:focus {
        outline: none;
        stroke: #4d90fe;
        stroke-width: 0.5;
      }

      .controls {
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }

      #knob:focus ~ .controls,
      #knob:hover ~ .controls {
        opacity: 1;
      }

      .controls:hover {
        opacity: 1;
      }

      .controls path {
        pointer-events: none;
      }

      .controls .region {
        pointer-events: fill;
        fill: none;
      }

      .controls .region:hover + path {
        fill: #fff;
      }

      .controls circle:hover {
        stroke: #fff;
      }

      .controls circle.pressed {
        fill: #fff;
      }
    `;
        }
        render() {
            const { xValue, yValue } = this;
            return y`
      <svg
        width="27.2mm"
        height="31.8mm"
        viewBox="0 0 27.2 31.8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="noise" primitiveUnits="objectBoundingBox">
            <feTurbulence baseFrequency="2 2" type="fractalNoise" />
            <feColorMatrix
              values=".1 0 0 0 .1
                      .1 0 0 0 .1
                      .1 0 0 0 .1
                      0 0 0 0 1"
            />
            <feComposite in2="SourceGraphic" operator="lighter" />
            <feComposite result="body" in2="SourceAlpha" operator="in" />
          </filter>
          <radialGradient id="g-knob" cx="13.6" cy="13.6" r="10.6" gradientUnits="userSpaceOnUse">
            <stop offset="0" />
            <stop offset="0.9" />
            <stop stop-color="#777" offset="1" />
          </radialGradient>
          <radialGradient
            id="g-knob-base"
            cx="13.6"
            cy="13.6"
            r="13.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#444" offset=".8" />
            <stop stop-color="#555" offset=".9" />
            <stop offset="1" />
          </radialGradient>
          <path
            id="pin"
            fill="silver"
            stroke="#a2a2a2"
            stroke-width=".024"
            d="M8.726 29.801a.828.828 0 00-.828.829.828.828 0 00.828.828.828.828 0 00.829-.828.828.828 0 00-.829-.829zm-.004.34a.49.49 0 01.004 0 .49.49 0 01.49.489.49.49 0 01-.49.49.49.49 0 01-.489-.49.49.49 0 01.485-.49z"
          />
        </defs>
        <path
          d="M1.3 0v31.7h25.5V0zm2.33.683a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.5 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-20.5 26.8a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.4 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-12.7 2.66a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.57 0a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.49.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm-7.62.007a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488zm10.2.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488z"
          fill="#bd1e34"
        />
        <g fill="#fff" font-family="sans-serif" stroke-width=".03">
          <text text-anchor="middle" font-size="1.2" letter-spacing=".053">
            <tspan x="4.034" y="25.643">Analog</tspan>
            <tspan x="4.061" y="27.159">Joystick</tspan>
          </text>
          <text transform="rotate(-90)" text-anchor="start" font-size="1.2">
            <tspan x="-29.2" y="9.2">VCC</tspan>
            <tspan x="-29.2" y="11.74">VERT</tspan>
            <tspan x="-29.2" y="14.28">HORZ</tspan>
            <tspan x="-29.2" y="16.82">SEL</tspan>
            <tspan x="-29.2" y="19.36">GND</tspan>
          </text>
        </g>
        <ellipse cx="13.6" cy="13.7" rx="13.6" ry="13.7" fill="url(#g-knob-base)" />
        <path
          d="M48.2 65.5s.042.179-.093.204c-.094.017-.246-.077-.322-.17-.094-.115-.082-.205-.009-.285.11-.122.299-.075.299-.075s-.345-.303-.705-.054c-.32.22-.228.52.06.783.262.237.053.497-.21.463-.18-.023-.252-.167-.21-.256.038-.076.167-.122.167-.122s-.149-.06-.324.005c-.157.06-.286.19-.276.513v1.51s.162-.2.352-.403c.214-.229.311-.384.53-.366.415.026.714-.159.918-.454.391-.569.085-1.2-.178-1.29"
          fill="#fff"
        />
        <circle
          id="knob"
          cx="13.6"
          cy="13.6"
          transform="translate(${2.5 * -xValue}, ${2.5 * -yValue})"
          r="10.6"
          fill="url(#g-knob)"
          filter="url(#noise)"
          tabindex="0"
          @keyup=${(e) => this.keyup(e)}
          @keydown=${(e) => this.keydown(e)}
        />
        <g fill="none" stroke="#fff" stroke-width=".142">
          <path
            d="M7.8 31.7l-.383-.351v-1.31l.617-.656h1.19l.721.656.675-.656h1.18l.708.656.662-.656h1.25l.643.656.63-.656h1.21l.695.656.636-.656h1.17l.753.656v1.3l-.416.39"
          />
          <path
            d="M9.5 31.7l.381-.344.381.331M12.1 31.7l.381-.344.381.331M14.7 31.7l.381-.344.381.331M17.2 31.7l.381-.344.381.331"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </g>
        <g class="controls" stroke-width="0.6" stroke-linejoin="bevel" fill="#aaa">
          <rect
            class="region"
            y="8.5"
            x="1"
            height="10"
            width="7"
            @mousedown=${(e) => this.mousedown(e, 1, 0)}
            @mouseup=${() => this.mouseup(true, false)}
          />
          <path d="m 7.022,11.459 -3.202,2.497 3.202,2.497" />

          <rect
            class="region"
            y="1.38"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${(e) => this.mousedown(e, 0, 1)}
            @mouseup=${() => this.mouseup(false, true)}
          />
          <path d="m 16.615,7.095 -2.497,-3.202 -2.497,3.202" />

          <rect
            class="region"
            y="8.5"
            x="18"
            height="10"
            width="7"
            @mousedown=${(e) => this.mousedown(e, -1, 0)}
            @mouseup=${() => this.mouseup(true, false)}
          />
          <path d="m 19.980,16.101 3.202,-2.497 -3.202,-2.497" />

          <rect
            class="region"
            y="17"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${(e) => this.mousedown(e, 0, -1)}
            @mouseup=${() => this.mouseup(false, true)}
          />
          <path d="m 11.620,20.112 2.497,3.202 2.497,-3.202" />

          <circle
            cx="13.6"
            cy="13.6"
            r="3"
            stroke="#aaa"
            class=${this.pressed ? 'pressed' : ''}
            @mousedown=${(e) => this.press(e)}
            @mouseup=${() => this.release()}
          />
        </g>
        <use xlink:href="#pin" x="0" />
        <use xlink:href="#pin" x="2.54" />
        <use xlink:href="#pin" x="5.08" />
        <use xlink:href="#pin" x="7.62" />
        <use xlink:href="#pin" x="10.16" />
      </svg>
    `;
        }
        keydown(e) {
            switch (e.key) {
                case 'ArrowUp':
                    this.yValue = 1;
                    this.valueChanged();
                    break;
                case 'ArrowDown':
                    this.yValue = -1;
                    this.valueChanged();
                    break;
                case 'ArrowLeft':
                    this.xValue = 1;
                    this.valueChanged();
                    break;
                case 'ArrowRight':
                    this.xValue = -1;
                    this.valueChanged();
                    break;
            }
            if (SPACE_KEYS.includes(e.key)) {
                this.press();
            }
        }
        keyup(e) {
            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                    this.yValue = 0;
                    this.valueChanged();
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                    this.xValue = 0;
                    this.valueChanged();
                    break;
            }
            if (SPACE_KEYS.includes(e.key)) {
                this.release();
            }
        }
        mousedown(e, dx, dy) {
            var _a;
            if (dx) {
                this.xValue = dx;
            }
            if (dy) {
                this.yValue = dy;
            }
            this.valueChanged();
            (_a = this.knob) === null || _a === void 0 ? void 0 : _a.focus();
            e.preventDefault(); // Prevents stealing focus
        }
        mouseup(x, y) {
            var _a;
            if (x) {
                this.xValue = 0;
            }
            if (y) {
                this.yValue = 0;
            }
            this.valueChanged();
            (_a = this.knob) === null || _a === void 0 ? void 0 : _a.focus();
        }
        press(e) {
            var _a;
            this.pressed = true;
            this.dispatchEvent(new InputEvent('button-press'));
            (_a = this.knob) === null || _a === void 0 ? void 0 : _a.focus();
            e === null || e === void 0 ? void 0 : e.preventDefault(); // Prevents stealing focus
        }
        release() {
            var _a;
            this.pressed = false;
            this.dispatchEvent(new InputEvent('button-release'));
            (_a = this.knob) === null || _a === void 0 ? void 0 : _a.focus();
        }
        valueChanged() {
            this.dispatchEvent(new InputEvent('input'));
        }
    };
    __decorate$q([
        e$1({ type: Number })
    ], exports.AnalogJoystickElement.prototype, "xValue", void 0);
    __decorate$q([
        e$1({ type: Number })
    ], exports.AnalogJoystickElement.prototype, "yValue", void 0);
    __decorate$q([
        e$1()
    ], exports.AnalogJoystickElement.prototype, "pressed", void 0);
    __decorate$q([
        i$2('#knob')
    ], exports.AnalogJoystickElement.prototype, "knob", void 0);
    exports.AnalogJoystickElement = __decorate$q([
        n('wokwi-analog-joystick')
    ], exports.AnalogJoystickElement);

    var __decorate$p = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.SlidePotentiometerElement = class SlidePotentiometerElement extends n$1 {
        constructor() {
            super(...arguments);
            this.travelLength = 30;
            this.value = 0;
            this.min = 0;
            this.max = 100;
            this.step = 2;
            this.isPressed = false;
            this.zoom = 1;
            this.pageToLocalTransformationMatrix = null;
            this.up = () => {
                if (this.isPressed) {
                    this.isPressed = false;
                }
            };
            this.mouseMove = (event) => {
                if (this.isPressed) {
                    this.updateValueFromXCoordinate(new DOMPointReadOnly(event.pageX, event.pageY));
                }
            };
        }
        get pinInfo() {
            return [
                { name: 'VCC', x: 1, y: 43, number: 1, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'SIG', x: 1, y: 63, number: 2, signals: [analog(0)] },
                {
                    name: 'GND',
                    x: 93.6 + this.travelLength * mmToPix,
                    y: 43,
                    number: 3,
                    signals: [{ type: 'power', signal: 'GND' }],
                },
            ];
        }
        static get styles() {
            return r$3`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #tip {
        /* some style to add when the element has focus */
        filter: url(#outline);
      }
    `;
        }
        update(changedProperties) {
            if (changedProperties.has('travelLength')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        render() {
            const { value, min: minValue, max: maxValue, travelLength } = this;
            // Tip is centered by default
            const tipBaseOffsetX = -15;
            const tipMovementX = (value / (maxValue - minValue)) * travelLength;
            const tipOffsetX = tipMovementX + tipBaseOffsetX;
            return y`
      <input
        tabindex="0"
        type="range"
        min="${this.min}"
        max="${this.max}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        aria-valuemax="${this.max}"
        @input="${this.onInputValueChange}"
        class="hide-input"
      />
      <svg
        width="${travelLength + 25}mm"
        height="29mm"
        version="1.1"
        viewBox="0 0 ${travelLength + 25} 29"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="outline">
            <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="#4faaff" />
          </filter>
          <linearGradient
            id="tipGradient"
            x1="36.482"
            x2="50.447"
            y1="91.25"
            y2="91.25"
            gradientTransform="matrix(.8593 0 0 1.1151 -14.849 -92.256)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1a1a1a" offset="0" />
            <stop stop-color="#595959" offset=".4" />
            <stop stop-color="#595959" offset=".6" />
            <stop stop-color="#1a1a1a" offset="1" />
          </linearGradient>
          <radialGradient
            id="bodyGradient"
            cx="62.59"
            cy="65.437"
            r="22.5"
            gradientTransform="matrix(1.9295 3.7154e-8 0 .49697 -98.268 -23.02)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#d2d2d2" offset="0" />
            <stop stop-color="#7a7a7a" offset="1" />
          </radialGradient>
          <g id="screw">
            <circle cx="0" cy="0" r="1" fill="#858585" stroke="#000" stroke-width=".05" />
            <path d="m0 1 0-2" fill="none" stroke="#000" stroke-width=".151" />
          </g>
        </defs>
        <!-- pins -->
        <g fill="#ccc">
          <rect x="0" y="11" width="5" height="0.75" />
          <rect x="${travelLength + 20}" y="11" width="5" height="0.75" />
          <rect x="0" y="16.25" width="5" height="0.75" />
        </g>
        <g transform="translate(5 5)">
          <!-- Body -->
          <rect
            id="sliderCase"
            x="0"
            y="5"
            width="${travelLength + 15}"
            height="9"
            rx=".2"
            ry=".2"
            fill="url(#bodyGradient)"
            fill-rule="evenodd"
          />
          <rect
            x="3.25"
            y="8"
            width="${travelLength + 8.5}"
            height="3"
            rx=".1"
            ry=".1"
            fill="#3f1e1e"
          />
          <!-- Screw Left -->
          <g transform="translate(1.625 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Screw Right -->
          <g transform="translate(${travelLength + 13.375} 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Tip -->
          <g
            id="tip"
            transform="translate(${tipOffsetX} 0)"
            @mousedown=${this.down}
            @touchstart=${this.down}
            @touchmove=${this.touchMove}
            @touchend=${this.up}
            @keydown=${this.down}
            @keyup=${this.up}
            @click="${this.focusInput}"
          >
            <rect x="19.75" y="8.6" width="5.5" height="1.8" />
            <rect
              x="16.5"
              y="0"
              width="12"
              height="19"
              fill="url(#tipGradient)"
              stroke-width="2.6518"
              rx=".1"
              ry=".1"
            />
            <rect x="22.2" y="0" width=".6" height="19" fill="#efefef" />
          </g>
        </g>
        <rect x="0" y="14" width="1" height="1" fill="none" id="firefox-workaround" />
      </svg>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            window.addEventListener('mouseup', this.up);
            window.addEventListener('mousemove', this.mouseMove);
            window.addEventListener('mouseleave', this.up);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            window.removeEventListener('mouseup', this.up);
            window.removeEventListener('mousemove', this.mouseMove);
            window.removeEventListener('mouseleave', this.up);
        }
        focusInput() {
            var _a;
            const inputEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.hide-input');
            inputEl === null || inputEl === void 0 ? void 0 : inputEl.focus();
        }
        down() {
            if (!this.isPressed) {
                this.updateCaseDisplayProperties();
            }
            this.isPressed = true;
        }
        updateCaseDisplayProperties() {
            var _a, _b, _c;
            const element = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#sliderCase');
            const firefoxWorkaround = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#firefox-workaround');
            if (element && firefoxWorkaround) {
                this.pageToLocalTransformationMatrix = getScreenCTM(element, firefoxWorkaround, new DOMRect(0, 14, 1, 1));
            }
            // Handle zooming in the storybook
            const zoom = (_c = getComputedStyle(window.document.body)) === null || _c === void 0 ? void 0 : _c.zoom;
            if (zoom !== undefined) {
                this.zoom = Number(zoom);
            }
            else {
                this.zoom = 1;
            }
        }
        onInputValueChange(event) {
            const target = event.target;
            if (target.value) {
                this.updateValue(Number(target.value));
            }
        }
        touchMove(event) {
            if (this.isPressed) {
                if (event.targetTouches.length > 0) {
                    const touchTarget = event.targetTouches[0];
                    this.updateValueFromXCoordinate(new DOMPointReadOnly(touchTarget.pageX, touchTarget.pageY));
                }
            }
        }
        updateValueFromXCoordinate(position) {
            if (this.pageToLocalTransformationMatrix) {
                // Handle zoom first, the transformation matrix does not take that into account
                let localPosition = new DOMPointReadOnly(position.x / this.zoom, position.y / this.zoom);
                // Converts the point from the page coordinate space to the #caseRect coordinate space
                // It also translates the units from pixels to millimeters!
                localPosition = localPosition.matrixTransform(this.pageToLocalTransformationMatrix);
                const caseBorderWidth = 7.5;
                const tipPositionXinMM = localPosition.x - caseBorderWidth;
                const mmPerIncrement = this.travelLength / (this.max - this.min);
                this.updateValue(Math.round(tipPositionXinMM / mmPerIncrement));
            }
        }
        updateValue(value) {
            this.value = clamp(this.min, this.max, value);
            this.dispatchEvent(new InputEvent('input', { detail: this.value }));
        }
    };
    __decorate$p([
        e$1({ type: Number })
    ], exports.SlidePotentiometerElement.prototype, "travelLength", void 0);
    __decorate$p([
        e$1({ type: Number })
    ], exports.SlidePotentiometerElement.prototype, "value", void 0);
    __decorate$p([
        e$1({ type: Number })
    ], exports.SlidePotentiometerElement.prototype, "min", void 0);
    __decorate$p([
        e$1({ type: Number })
    ], exports.SlidePotentiometerElement.prototype, "max", void 0);
    __decorate$p([
        e$1({ type: Number })
    ], exports.SlidePotentiometerElement.prototype, "step", void 0);
    exports.SlidePotentiometerElement = __decorate$p([
        n('wokwi-slide-potentiometer')
    ], exports.SlidePotentiometerElement);

    var __decorate$o = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.IRReceiverElement = class IRReceiverElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'GND', y: 87.75, x: 20.977, number: 1, signals: [GND()] },
                { name: 'VCC', y: 87.75, x: 30.578, number: 2, signals: [VCC()] },
                { name: 'DAT', y: 87.75, x: 40.18, number: 3, signals: [] },
            ];
        }
        render() {
            return y`
      <svg
        version="1.1"
        viewBox="0 0 61.1 88.7"
        width="16.178mm"
        height="23.482mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#171514">
          <path
            d="m61.1 4.85c0-2.68-2.17-4.85-4.85-4.85h-51.4c-2.68 0-4.85 2.17-4.85 4.85v61c0 2.68 2.17 4.85 4.85 4.85h51.4c2.68 0 4.85-2.17 4.85-4.85zm-7.43 53.3c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14s-4.14-1.86-4.14-4.14c0-2.29 1.85-4.14 4.14-4.14zm-46.3 0c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14-2.29 0-4.14-1.86-4.14-4.14 0-2.29 1.85-4.14 4.14-4.14z"
            stroke-width=".987"
          />
          <rect x="16.5" y="58.2" width="28.2" height="8.28" stroke="#fff" stroke-width=".888px" />
          <rect x="14.2" y="23" width="11.3" height="4.66" stroke="#fff" stroke-width=".888px" />
        </g>
        <rect x="15.2" y="23.7" width="9.44" height="3.23" fill="#a19e9e" stroke-width=".987" />
        <g fill="#171514" stroke="#fff" stroke-width=".888px">
          <rect x="14.2" y="33" width="11.3" height="4.66" />
          <rect x="31.6" y="23" width="11.3" height="4.66" />
          <rect x="31.6" y="33" width="11.3" height="4.66" />
        </g>
        <g fill="#433b38" stroke-width=".987">
          <rect x="17.7" y="59.1" width="6.47" height="6.47" />
          <rect x="27.3" y="59.1" width="6.47" height="6.47" />
          <rect x="37" y="59.1" width="6.47" height="6.47" />
        </g>
        <g fill="#9f9f9f" stroke-width=".987">
          <path
            d="m22.4 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m32 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m41.6 62.5c0-0.377-0.15-0.739-0.417-1.01s-0.629-0.417-1.01-0.417c-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.419 0.419h2.01c0.231 0 0.419-0.188 0.419-0.419v-25.8z"
          />
        </g>
        <text transform="rotate(90)" fill="#ffffff" font-size="5px">
          <tspan x="45.369" y="-37.601">DAT</tspan>
          <tspan x="45.609" y="-28.801">VCC</tspan>
          <tspan x="45.359" y="-20.2">GND</tspan>
          <text font-size="5.71px">
            <tspan
              x="16.234 18.076 22.422 24.263 28.608 32.018 35.112 36.639 40.05 43.144 46.553"
              y="-52.266"
            >
              IR Reciever
            </tspan>
          </text>
        </text>
        <g fill="none" stroke="#fff">
          <path
            d="m56.3 6.32c-0.654 0.514-1.48 0.82-2.37 0.82-0.895 0-1.72-0.306-2.37-0.82"
            stroke-width=".316px"
          />
          <path
            d="m57.4 7.97c-0.949 0.745-2.14 1.19-3.44 1.19-1.3 0-2.49-0.445-3.44-1.19"
            stroke-width=".395px"
          />
          <path
            d="m58.9 9.32c-1.38 1.08-3.11 1.73-5 1.73s-3.62-0.646-5-1.73"
            stroke-width=".395px"
          />
        </g>
        <path
          d="m20.4 10.2h-6.13c-0.382 0-0.691 0.309-0.691 0.691v6.2c0 0.382 0.309 0.691 0.691 0.691h13c0.931 0.0563 1.88 0.0563 2.81 0h12.7c0.381 0 0.691-0.309 0.691-0.691v-6.2c0-0.382-0.31-0.691-0.691-0.691h-5.88c-1.39-3.12-4.55-5.31-8.23-5.31-3.68 0-6.84 2.19-8.23 5.31zm0.463 0.691c1.18-3.1 4.21-5.31 7.77-5.31 3.55 0 6.59 2.21 7.76 5.31h6.35v6.2h-12.7c-0.914 0.0563-1.85 0.0563-2.77 0h-13v-6.2z"
          fill="#fff"
          stroke-width=".987"
        />
        <path
          d="m28.6 6.32c4.01 0 7.27 3.26 7.27 7.27 0 4.01-14.5 4.01-14.5 0 0-4.01 3.26-7.27 7.27-7.27z"
          fill="#2d2624"
          stroke-width=".987"
        />
        <clipPath id="b">
          <path
            d="m37.2 14.5c4.06 0 7.36 3.3 7.36 7.36 0 4.06-14.7 4.06-14.7 0 0-4.06 3.3-7.36 7.36-7.36z"
          />
        </clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#b)">
          <path
            d="m37.2 12.3c-0.069 0.303 0.377 0.714 0.536 0.965 0.504 0.799 0.744 1.43 1.07 2.3 1.01 2.7 0.775 5.41 0.775 8.2 0 0.121 0.155-0.196 0.262-0.254 0.233-0.126 0.484-0.232 0.724-0.345 0.727-0.341 1.47-0.602 2.24-0.833 2.84-0.852 4.9-0.521 6.1-3.77 0.26-0.704 0.404-1.57 0.22-2.31-0.225-0.9-2.44-3.28-3.27-3.7-1.35-0.675-3.05-0.667-4.43-1.01-1.3-0.326-3.08-0.498-4.11 0.524"
            fill="#483f3c"
          />
        </g>
        <rect x="19.1" y="11" width="19.1" height="5.51" fill="#2d2624" stroke-width=".987" />
        <clipPath id="a"><rect x="27.6" y="19.3" width="19.3" height="5.58" /></clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#a)">
          <path
            d="m38.1 18.8c0.144 0.284 0.197 0.749 0.286 1.07 0.466 1.68 0.509 3.53 0.399 5.27-0.041 0.653-0.374 1.31-0.374 1.96 0 0.041 0.076-0.032 0.116-0.043 0.154-0.042 0.14-0.034 0.29-0.06 0.375-0.063 0.754-0.104 1.13-0.153 0.884-0.115 1.77-0.241 2.66-0.34 2.32-0.26 5.58 0.4 6.53-2.44 0.185-0.557 0.236-1.13 0.289-1.72 0.054-0.587 0.14-1.38-0.037-1.95-0.922-3-4.9-1.81-7.22-1.81-0.773 0-1.54 0.084-2.3 0.236-0.055 0.011-0.659 0.108-0.659 0.114"
            fill="#483f3c"
          />
        </g>
        <g fill="#a19e9e" stroke-width=".987">
          <circle cx="16.5" cy="14" r="1.44" />
          <circle cx="40.5" cy="14" r="1.44" />
          <rect x="15.2" y="33.7" width="9.44" height="3.23" />
          <rect x="32.5" y="23.7" width="9.44" height="3.23" />
          <rect x="32.5" y="33.7" width="9.44" height="3.23" />
        </g>
        <g stroke-width=".987">
          <rect x="17.9" y="23.7" width="3.93" height="3.23" fill="#8e7147" />
          <rect x="34.8" y="24.1" width="4.88" height="2.44" fill="#171514" />
          <rect x="34.8" y="34.1" width="4.88" height="2.44" fill="#171514" />
          <text fill="#ffffff" font-size="2.2px" stroke-width=".987">
            <tspan x="35.267719 36.591557 37.915394" y="26.1">103</tspan>
            <tspan x="35.267719 36.591557 37.915394" y="36.12">102</tspan>
          </text>
          <rect x="17.9" y="33.7" width="3.93" height="3.23" fill="#ccf9f9" />
        </g>
      </svg>
    `;
        }
    };
    exports.IRReceiverElement = __decorate$o([
        n('wokwi-ir-receiver')
    ], exports.IRReceiverElement);

    var __decorate$n = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const irKeyCodes = {
        power: 0xa2,
        menu: 0xe2,
        test: 0x22,
        plus: 0x02,
        back: 0xc2,
        prev: 0xe0,
        play: 0xa8,
        next: 0x90,
        0: 0x68,
        minus: 0x98,
        c: 0xb0,
        1: 0x30,
        2: 0x18,
        3: 0x7a,
        4: 0x10,
        5: 0x38,
        6: 0x5a,
        7: 0x42,
        8: 0x4a,
        9: 0x52,
    };
    const keyboardKeyMap = {
        o: 'power',
        m: 'menu',
        t: 'test',
        '+': 'plus',
        b: 'back',
        arrowleft: 'prev',
        p: 'play',
        arrowright: 'next',
        0: '0',
        '-': 'minus',
        c: 'c',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
    };
    exports.IRRemoteElement = class IRRemoteElement extends n$1 {
        static get styles() {
            return r$3`
      use {
        fill: #fff;
      }

      use.red {
        fill: #e6252e;
      }

      use.black {
        fill: #121115;
      }

      use[tabindex] {
        cursor: pointer;
      }

      use.active {
        fill: #8c8;
      }

      use.red.active,
      use.black.active {
        fill: green;
      }

      use:focus {
        --circle-stroke-color: cyan;
        outline: none;
      }
    `;
        }
        eventHandler(target, buttonId, type) {
            target.focus();
            const irCode = irKeyCodes[buttonId];
            switch (type) {
                case 'up':
                    target.classList.remove('active');
                    this.dispatchEvent(new CustomEvent('button-release', {
                        detail: { key: buttonId, irCode },
                    }));
                    break;
                case 'down':
                    target.classList.add('active');
                    this.dispatchEvent(new CustomEvent('button-press', {
                        detail: { key: buttonId, irCode },
                    }));
                    break;
            }
        }
        buttonEvent(event, type) {
            var _a;
            const target = event.target;
            if (!(target instanceof SVGElement)) {
                return null;
            }
            const buttonId = (_a = target.dataset.btn) !== null && _a !== void 0 ? _a : '';
            if (buttonId == null) {
                return;
            }
            event.preventDefault();
            this.eventHandler(target, buttonId, type);
        }
        keyboardEvent(event, type) {
            var _a;
            if (SPACE_KEYS.includes(event.key)) {
                this.buttonEvent(event, type);
            }
            const target = event.target;
            const buttonId = keyboardKeyMap[event.key.toLowerCase()];
            if (!(target instanceof SVGElement) || buttonId == null) {
                return;
            }
            const buttonElement = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`use[data-btn="${buttonId}"]`);
            if (buttonElement && buttonElement instanceof SVGElement) {
                this.eventHandler(buttonElement, buttonId, type);
            }
        }
        render() {
            return y`
      <?xml version="1.0" encoding="UTF-8"?>
      <svg
        version="1.1"
        viewBox="0 0 151 316"
        width="40mm"
        height="83.653mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
        @mousedown=${(e) => this.buttonEvent(e, 'down')}
        @mouseup=${(e) => this.buttonEvent(e, 'up')}
        @touchstart=${(e) => this.buttonEvent(e, 'down')}
        @touchend=${(e) => this.buttonEvent(e, 'up')}
        @keydown=${(e) => this.keyboardEvent(e, 'down')}
        @keyup=${(e) => this.keyboardEvent(e, 'up')}
      >
        <defs>
          <g id="button" stroke-width="1.29">
            <path
              fill="#272726"
              d="m0 -17.5c-9.73 0-17.6 7.9-17.6 17.6 0 9.73 7.9 17.6 17.6 17.6 9.73 0 17.6-7.9 17.6-17.6 0-9.73-7.9-17.6-17.6-17.6zm0 1.29c9.01 0 16.3 7.32 16.3 16.3 0 9.01-7.32 16.3-16.3 16.3-9.02 0-16.3-7.32-16.3-16.3 0-9.02 7.32-16.3 16.3-16.3z"
            />
            <circle r="16.3" style="stroke: var(--circle-stroke-color)" />
          </g>
          <circle id="button2" r="16.3" style="stroke: var(--circle-stroke-color)" />
        </defs>
        <path
          d="m149 21.3c0-10.5-8.52-19-19-19h-109c-10.5 0-19 8.52-19 19v274c0 10.5 8.52 19 19 19h109c10.5 0 19-8.52 19-19z"
          fill="#fff"
          stroke="#272726"
          stroke-width="4.53px"
        />
        <use xlink:href="#button2" x="29.6" y="37.9" data-btn="power" class="red" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="37.9" data-btn="menu" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="75.2" data-btn="test" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="75.2" data-btn="plus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="75.2" data-btn="back" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="29.6" y="113" data-btn="prev" class="black" tabindex="0" />
        <use xlink:href="#button" x="75.5" y="113" data-btn="play" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="121.4" y="113" data-btn="next" class="black" tabindex="0" />
        <use xlink:href="#button" x="29.6" y="152" data-btn="0" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="152" data-btn="minus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="152" data-btn="c" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="190" data-btn="1" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="190" data-btn="2" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="190" data-btn="3" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="228" data-btn="4" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="228" data-btn="5" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="228" data-btn="6" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="266" data-btn="7" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="266" data-btn="8" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="266" data-btn="9" tabindex="0" fill="#fff" />
        <g style="pointer-events: none">
          <g fill="none" stroke="#fff" stroke-width="1.94px">
            <path
              d="m33.5 33c2.05 1.28 3.42 3.56 3.42 6.16 0 4.01-3.26 7.26-7.26 7.26-4.01 0-7.26-3.25-7.26-7.26 0-2.49 1.26-4.69 3.17-6"
            />
            <path d="m29.6 29.3v7.41" />
          </g>
          <path d="m80.9 113-9.58 4.79v-9.58z" fill="#121115" stroke-width="1.29" />
          <path d="m123.4 113-9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 113-8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <path d="m27.9 113 9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m21.8 113 8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m22.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <text fill="#e6252e" font-size="9.72px" font-weight="700" stroke-width="1.29">
            <tspan x="106.892 115.469 122.432 129.931" y="41.288">MENU</tspan>
            <tspan x="16.488 22.904 29.866 36.829" y="78.679">TEST</tspan>
          </text>
          <g fill="none" stroke="#fff" stroke-width="1.29">
            <path d="m67.7 152h15.5" />
            <path d="m67.7 75.2h15.5M75.5 67.4v15.5" />
          </g>
          <g fill="#121115" stroke-width="1.29">
            <path
              d="m119.4 70.7v -3.25l-6.95 4.84 6.71 4.45 0.111-2.2s6.65-0.357 7.05 3.15c0.397 3.51-6.66 5.21-6.66 5.21s10.9-2.33 10.7-6.82c-0.276-5.4-10.9-5.39-10.9-5.39z"
            />
            <text font-size="13.9px" font-weight="700">
              <tspan x="25.312" y="156.434">0</tspan>
              <tspan x="116.973" y="156.498">C</tspan>
              <tspan x="25.312" y="194.685">1</tspan>
              <tspan x="71.776" y="194.685">2</tspan>
              <tspan x="118.06" y="194.6">3</tspan>
              <tspan x="25.312" y="232.851">4</tspan>
              <tspan x="71.776" y="232.679">5</tspan>
              <tspan x="118.199" y="232.767">6</tspan>
              <tspan x="25.312" y="270.931">7</tspan>
              <tspan x="71.776" y="270.931">8</tspan>
              <tspan x="118.124" y="270.931">9</tspan>
            </text>
          </g>
          <g fill="#fff" stroke-width="1.29">
            <path
              d="m18 28.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0828 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-0.0078 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0479 0.097 0.0608 0.145 0.0298 0.0479-0.0323 0.0621-0.097 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.146 0.0453 0.0362 0.11 0.0298 0.146-0.0155z"
            />
            <path
              d="m64 65.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-0.0078 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0479 0.0957 0.0621 0.145 0.0298 0.0479-0.031 0.0608-0.0957 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m18 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0478 0.097 0.0621 0.145 0.0297 0.0479-0.031 0.0621-0.0957 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.147 0.0453 0.0362 0.11 0.0285 0.146-0.0168z"
            />
            <path
              d="m110.4 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0478 0.0957 0.0621 0.145 0.0297 0.0479-0.031 0.0608-0.0957 0.0298-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m64 142c0.687-0.758 1.5-1.42 2.39-1.99 1.26-0.815 2.7-1.43 4.22-1.87 0.974-0.279 1.98-0.481 3-0.605 0.673-0.0828 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-9e-3 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0491 0.0957 0.0621 0.145 0.031 0.0479-0.0323 0.0608-0.097 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.54-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.435-2.45-0.71-3.73-0.829-0.545-0.0504-1.09-0.0698-1.64-0.0569-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.459-3.16 0.838-0.772 0.29-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.044-0.0285 0.11 0.0155 0.146 0.0453 0.0362 0.111 0.0284 0.147-0.0155z"
            />
          </g>
        </g>
      </svg>
    `;
        }
    };
    exports.IRRemoteElement = __decorate$n([
        n('wokwi-ir-remote')
    ], exports.IRRemoteElement);

    var __decorate$m = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.PIRMotionSensorElement = class PIRMotionSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'VCC', y: 92, x: 36.178, number: 1, signals: [VCC()] },
                { name: 'OUT', y: 92, x: 45.9175, number: 2, signals: [] },
                { name: 'GND', y: 92, x: 55.6415, number: 3, signals: [GND()] },
            ];
        }
        render() {
            return y`
      <svg
        width="24mm"
        height="24.448mm"
        version="1.1"
        viewBox="0 0 90.7 92.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#c6bf95">
          <path
            d="m54.2 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m44.5 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m34.7 91c0 0.383 0.152 0.749 0.422 1.02s0.637 0.422 1.02 0.422 0.749-0.152 1.02-0.422 0.422-0.636 0.422-1.02v-26.1c0-0.234-0.19-0.423-0.424-0.423h-2.03c-0.234 0-0.424 0.189-0.424 0.423v26.1z"
          />
        </g>
        <path
          d="m90.7 0h-90.7v74.3h90.7zm-5.38 32.1c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78zm-77.1 0c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78z"
          fill="#253674"
        />
        <rect x="14.3" y="1.28" width="65.5" height="65.5" fill="#dde5e3" />
        <rect x="17.1" y="4.14" width="59.8" height="59.8" fill="#d1dfe1" />
        <circle cx="46.7" cy="33.8" r="31" fill="#d3d5d6" />
        <circle cx="46.7" cy="33.8" r="28.2" fill="#d9e1e1" />
        <clipPath id="a">
          <circle cx="52.5" cy="39.2" r="28.2" />
        </clipPath>
        <g transform="translate(-5.81 -5.45)" clip-path="url(#a)" fill="#fbfcfb">
          <path
            d="m52.8 13.7c11.2 2.94 21.3 18.3 21.8 30.5 0 0 6.16-8.84-2.25-20.6-7.05-9.89-19.5-9.87-19.5-9.87z"
          />
          <path
            d="m52.2 64.8c-7.37 0.013-19.8-6.53-22.1-14 0 0-0.102 4.33 6.99 10.2 5.95 4.94 15.1 3.75 15.1 3.75z"
          />
          <g fill="none" stroke="#d2d8d8" stroke-width=".4px">
            <path d="m32.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m49.3 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m65.6 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m81.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
          </g>
        </g>
        <text fill="#ffffff" font-family="sans-serif">
          <tspan x="33.293" y="73.864" font-size="9.88px">+</tspan>
          <tspan x="43.531" y="72.609" font-size="6.38px">D</tspan>
        </text>
        <path d="m57.9 70.8h-4.67v-0.81h4.67z" fill="#fff" />
      </svg>
    `;
        }
    };
    exports.PIRMotionSensorElement = __decorate$m([
        n('wokwi-pir-motion-sensor')
    ], exports.PIRMotionSensorElement);

    var __decorate$l = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.NTCTemperatureSensorElement = class NTCTemperatureSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'GND', y: 26.2, x: 135, number: 1, signals: [GND()] },
                { name: 'VCC', y: 35.8, x: 135, number: 2, signals: [VCC()] },
                { name: 'OUT', y: 45.5, x: 135, number: 3, signals: [analog(0)] },
            ];
        }
        render() {
            return y`
      <svg
        width="35.826mm"
        height="19mm"
        version="1.1"
        viewBox="0 0 135.4 71.782"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="a">
            <path
              d="m15.336 49.725c-0.945 0.682-2.127 1.088-3.411 1.088-3.104 0-5.612-2.374-5.612-5.281s2.508-5.281 5.612-5.281c1.038 0 2.009 0.266 2.842 0.728 2.108 0.79 3.314 1.004 5.699 0.917 0 0-2.134 1.335-1.968 2.97 0.149 1.458 3.053 2.494 3.053 2.494-2.438 0.388-4.177 1.403-6.215 2.365z"
            />
          </clipPath>
        </defs>
        <path
          d="m115.3 0h-90.421v71.782h90.421zm-66.145 56.313c3.27 0 5.925 2.608 5.925 5.878s-2.655 5.924-5.925 5.924-5.925-2.654-5.925-5.924 2.655-5.878 5.925-5.878zm16.013-7.96c3.27 0 5.925 2.654 5.925 5.924s-2.655 5.925-5.925 5.925-5.924-2.655-5.924-5.925 2.654-5.924 5.924-5.924zm-33.698 1.324c2.29 0 4.149 1.859 4.149 4.148 0 2.29-1.859 4.149-4.149 4.149-2.289 0-4.148-1.859-4.148-4.149 0-2.289 1.859-4.148 4.148-4.148zm59.914 0.635c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-11.4-8.143c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-14.816-1.811c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm0-15.974c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm14.816-3.203c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-14.816-9.601c3.27 0 5.925 2.654 5.925 5.924s-2.655 5.925-5.925 5.925-5.924-2.655-5.924-5.925 2.654-5.924 5.924-5.924zm-33.698 2.228c2.29 0 4.149 1.859 4.149 4.148 0 2.29-1.859 4.149-4.149 4.149-2.289 0-4.148-1.859-4.148-4.149 0-2.289 1.859-4.148 4.148-4.148zm59.914 0.288c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-48.154-5.701c0-1.635 2.963-4.729 5.925-4.729s5.925 3.094 5.925 4.729c0 3.27-2.655 7.121-5.925 7.121s-5.925-3.851-5.925-7.121z"
          fill="#0f3661"
        />
        <path
          d="m104.45 21.602v28.578h8.389v-28.578z"
          fill="none"
          stroke="#fff"
          stroke-width=".9px"
        />
        <g fill="#29261c">
          <path d="m105.37 42.328v6.554h6.554v-6.554z" />
          <path d="m105.37 32.604v6.554h6.554v-6.554z" />
          <path d="m105.37 22.865v6.554h6.554v-6.554z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m108.85 44.165c-0.382 0-0.749 0.151-1.019 0.422-0.27 0.27-0.422 0.636-0.422 1.018v1e-3c0 0.382 0.152 0.748 0.422 1.018s0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.189 0.424-0.423v-2.035c0-0.234-0.19-0.423-0.424-0.423h-26.131z"
          />
          <path
            d="m108.85 34.441c-0.382 0-0.749 0.151-1.019 0.422-0.27 0.27-0.422 0.636-0.422 1.018v1e-3c0 0.382 0.152 0.748 0.422 1.018s0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.189 0.424-0.423v-2.035c0-0.234-0.19-0.423-0.424-0.423h-26.131z"
          />
          <path
            d="m108.85 24.701c-0.382 0-0.749 0.152-1.019 0.422-0.27 0.271-0.422 0.637-0.422 1.019s0.152 0.749 0.422 1.019 0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.19 0.424-0.423v-2.035c0-0.234-0.19-0.424-0.424-0.424h-26.131z"
          />
        </g>
        <path d="m96.494 43.126v-14.495h-4.787v14.495z" fill="#bbb9b9" />
        <path d="m96.661 39.537v-7.317h-5.121v7.317z" fill="#29261c" />
        <g fill="none" stroke="#bbb9b9" stroke-linejoin="miter">
          <circle cx="31.465" cy="17.956" r="4.149" stroke-width="2.5px" />
          <circle cx="31.465" cy="53.825" r="4.149" stroke-width="2.5px" />
          <circle cx="65.163" cy="54.277" r="5.925" stroke-width=".95px" />
          <circle cx="65.163" cy="17.504" r="5.925" stroke-width=".95px" />
          <circle cx="65.163" cy="28.082" r="3.698" stroke-width="2.23px" />
          <circle cx="65.163" cy="44.056" r="3.698" stroke-width="2.23px" />
          <circle cx="49.15" cy="62.191" r="5.925" stroke-width=".75px" />
          <circle cx="49.15" cy="9.591" r="5.925" stroke-width=".75px" />
        </g>
        <ellipse cx="48.82" cy="25.397" rx="6.375" ry="4.839" fill="#bababa" />
        <ellipse cx="48.82" cy="46.384" rx="6.375" ry="4.839" fill="#bbb9b9" />
        <circle cx="48.82" cy="25.397" r="2.612" fill="#eceee9" />
        <circle cx="48.82" cy="46.384" r="2.612" fill="#eceee9" />
        <path
          d="m48.82 25.397c-8.828 4.288-19.813 9.008-38 11.393"
          fill="none"
          stroke="#d6d8d4"
          stroke-linejoin="miter"
          stroke-width=".95px"
        />
        <path
          d="m48.82 45.922c-9.482-5.223-20.452-6.013-38-4.789"
          fill="none"
          stroke="#d8d8d3"
          stroke-linejoin="miter"
          stroke-width=".95px"
        />
        <path
          d="m9.023 43.72c-0.945 0.682-2.127 1.088-3.411 1.088-3.104 0-5.612-2.374-5.612-5.281s2.508-5.281 5.612-5.281c1.038 0 2.009 0.266 2.842 0.728 2.108 0.79 3.314 1.004 5.699 0.917 0 0-2.134 1.335-1.968 2.97 0.149 1.458 3.053 2.494 3.053 2.494-2.438 0.388-4.177 1.403-6.215 2.365z"
          fill="#151312"
        />
        <g transform="translate(-6.313,-6.005)" clip-path="url(#a)">
          <path
            d="m16.648 41.782c-0.617 0-1.284-0.077-1.895 0-2.276 0.284-4.755 1.806-6.429 3.282-0.732 0.645-1.351 1.332-1.854 2.171-0.172 0.287-0.363 0.562-0.527 0.852-8e-3 0.012-0.215 0.396-0.248 0.362-0.152-0.151-0.044-0.995-0.044-1.151 0-1.394 0.015-2.694 0.341-4.059 0.435-1.827 0.867-4.205 2.407-5.497 0.593-0.497 1.419-0.714 2.138-0.941 0.989-0.311 2.096-0.55 3.145-0.406 1.754 0.241 3.113 2.109 3.428 3.768 0.08 0.421-0.08 0.892-0.08 1.31"
            fill="#615a59"
          />
        </g>
        <g r="3.698" fill="none" stroke="#bbb9b9" stroke-linejoin="miter" stroke-width="2.23px">
          <circle cx="91.379" cy="17.794" />
          <circle cx="91.379" cy="54.01" />
        </g>

        <path
          d="m79.979 41.028c3.519 0 6.375 2.168 6.375 4.839 0 2.67-2.856 4.839-6.375 4.839-3.518 0-6.375-2.169-6.375-4.839 0-2.671 2.857-4.839 6.375-4.839zm0 1.141c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698z"
          fill="#bbb9b9"
        />
        <path
          d="m79.979 20.04c3.519 0 6.375 2.169 6.375 4.839 0 2.671-2.856 4.839-6.375 4.839-3.518 0-6.375-2.168-6.375-4.839 0-2.67 2.857-4.839 6.375-4.839zm0 1.141c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698z"
          fill="#bbb9b9"
        />
        <path
          d="m89.905 44.462v-17.142h8.391v17.142z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".65px"
        />
        <text fill="#fffefe" font-family="sans-serif" transform="rotate(-90)">
          <tspan x="-39.297 -37.036 -34.776" y="95.418" font-size="3.735px">103</tspan>
          <tspan x="-61.485" y="111.57" font-size="9.778px">S</tspan>
          <tspan x="-15.512" y="111.573" font-size="15.828px">-</tspan>
        </text>
      </svg>
    `;
        }
    };
    exports.NTCTemperatureSensorElement = __decorate$l([
        n('wokwi-ntc-temperature-sensor')
    ], exports.NTCTemperatureSensorElement);

    var __decorate$k = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.HeartBeatSensorElement = class HeartBeatSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'GND', y: 17.8, x: 87, number: 1, signals: [GND()] },
                { name: 'VCC', y: 27.5, x: 87, number: 2, signals: [VCC()] },
                { name: 'OUT', y: 37.5, x: 87, number: 3, signals: [] },
            ];
        }
        render() {
            return y`
      <svg
        width="23.4mm"
        height="20.943mm"
        version="1.1"
        viewBox="0 0 88.4 79.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m71.2 0h-71.2v55.6h71.2zm-62.6 41.4c2.65 0 4.79 2.15 4.79 4.79 0 2.64-2.15 4.79-4.79 4.79-2.64 0-4.79-2.15-4.79-4.79 0-2.65 2.15-4.79 4.79-4.79zm0-36.7c2.65 0 4.79 2.15 4.79 4.79 0 2.64-2.15 4.79-4.79 4.79-2.64 0-4.79-2.15-4.79-4.79 0-2.65 2.15-4.79 4.79-4.79z"
          fill="#19365e"
        />
        <g transform="rotate(-90 31 151)">
          <text
            x="132.20599"
            y="184.995"
            fill="#fffefe"
            font-family="sans-serif"
            font-size="10.3px"
          >
            s
          </text>
        </g>
        <circle cx="22.6" cy="46.9" r="3.23" fill="#bbb9b9" />
        <circle cx="33.4" cy="46.9" r="3.23" fill="#bbb9b9" />
        <path d="m57.5 13.5v28.6h8.39v-28.6z" fill="none" stroke="#fff" stroke-width=".9px" />
        <g fill="#29261c">
          <path d="m58.4 34.2v6.55h6.55v-6.55z" />
          <path d="m58.4 24.5v6.55h6.55v-6.55z" />
          <path d="m58.4 14.8v6.56h6.55v-6.56z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m61.9 36.1c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 26.3c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 16.6c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.636-0.422 1.02v1e-3c0 0.382 0.152 0.748 0.422 1.02s0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.189-0.423-0.423-0.423h-26.1z"
          />
        </g>
        <g
          transform="translate(-6.88 -4.2)"
          fill="#0e0f0d"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.83px"
        >
          <circle cx="29.8" cy="22.6" r="2.59" />
          <circle cx="29.8" cy="12.2" r="2.59" />
          <circle cx="29.8" cy="41.3" r="2.59" />
          <circle cx="39.9" cy="22.6" r="2.59" />
          <circle cx="39.9" cy="12.2" r="2.59" />
          <circle cx="39.9" cy="41.3" r="2.59" />
        </g>
        <circle
          cx="8.58"
          cy="9.42"
          r="4.79"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.1px"
        />
        <circle
          cx="8.58"
          cy="46.2"
          r="4.79"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.1px"
        />
        <g transform="translate(-6.88 -4.2)">
          <rect x="26.5" y="59.8" width="16.4" height="20.9" fill="#d3d9de" />
          <circle cx="34.8" cy="64.3" r="2.37" fill="#a8b2c8" />
          <path
            d="m40.7 62.8h-2.75v19.2c0 0.364 0.145 0.713 0.403 0.971 0.257 0.258 0.607 0.402 0.971 0.402h1e-3c0.364 0 0.714-0.144 0.971-0.402 0.258-0.258 0.403-0.607 0.403-0.971v-19.2z"
            fill="#b9c5de"
          />
          <rect x="37.9" y="62.8" width="2.75" height="17.9" fill="#a8b2c8" />
          <path
            d="m32.4 69.5h-2.75v12.5c0 0.364 0.145 0.713 0.402 0.971 0.258 0.258 0.607 0.402 0.972 0.402s0.714-0.144 0.972-0.402c0.257-0.258 0.402-0.607 0.402-0.971v-12.5z"
            fill="#b9c5de"
          />
          <g fill="#a8b2c8">
            <rect x="29.6" y="69.5" width="2.75" height="11.2" />
            <path
              d="m35.5 72.2c0.142 0 0.277-0.056 0.377-0.156 0.101-0.1 0.157-0.236 0.157-0.377v-1.68c0-0.142-0.056-0.277-0.157-0.377-0.1-0.1-0.235-0.157-0.377-0.157h-3.97c-0.364 0-0.714 0.145-0.971 0.403-0.258 0.257-0.403 0.607-0.403 0.971v1e-3c0 0.364 0.145 0.713 0.403 0.971 0.257 0.258 0.607 0.402 0.971 0.402h3.97z"
            />
            <path
              d="m38.8 65.5c0.141 0 0.277-0.056 0.377-0.156s0.157-0.236 0.157-0.377v-1.68c0-0.142-0.057-0.277-0.157-0.377-0.1-0.101-0.236-0.157-0.377-0.157h-3.97c-0.364 0-0.714 0.145-0.972 0.403-0.257 0.257-0.402 0.607-0.402 0.971v1e-3c0 0.364 0.145 0.713 0.402 0.971 0.258 0.258 0.608 0.402 0.972 0.402h3.97z"
            />
          </g>
        </g>
        <path
          d="m31.8 15h2.49v-6.79c0-0.33-0.131-0.647-0.365-0.88-0.233-0.234-0.55-0.365-0.88-0.365h-1e-3c-0.33 0-0.647 0.131-0.88 0.365-0.234 0.233-0.365 0.55-0.365 0.88z"
          fill="#d2d2d2"
        />
        <path
          d="m21.7 15h2.49v-6.79c0-0.33-0.131-0.647-0.365-0.88-0.233-0.234-0.55-0.365-0.88-0.365h-1e-3c-0.33 0-0.647 0.131-0.88 0.365-0.234 0.233-0.365 0.55-0.365 0.88z"
          fill="#d2d2d2"
        />
        <g transform="translate(-6.88 -4.2)">
          <rect x="47" y="29.2" width="13.4" height="4.43" fill="#bbb9b9" />
          <rect x="50.3" y="29" width="6.77" height="4.74" fill="#29261c" />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <rect x="47" y="20" width="13.4" height="4.43" fill="#bbb9b9" />
          <rect x="50.3" y="19.9" width="6.77" height="4.74" fill="#29261c" />
        </g>
        <path
          d="m38.9 23.3h15.9v7.76h-15.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".6px"
        />
        <path
          d="m38.9 14.1h15.9v7.76h-15.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".6px"
        />
        <path
          d="m37.4 15.4h-19v19.1c0 5.24 4.24 9.48 9.48 9.48 5.24 0 9.48-4.24 9.48-9.48z"
          fill="#fdfefe"
        />
        <clipPath id="c">
          <path d="m44.3 19.6h-19v19.1c0 5.24 4.24 9.48 9.48 9.48 5.24 0 9.48-4.24 9.48-9.48z" />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#c)">
          <path
            d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            fill="#fff"
          />
        </g>
        <path
          d="m35.4 15.4h-15v18.8c0 1.98 0.789 3.89 2.19 5.29 1.4 1.4 3.31 2.19 5.29 2.19s3.89-0.788 5.29-2.19c1.4-1.4 2.19-3.31 2.19-5.29z"
          fill="#d5d5d5"
        />
        <clipPath id="b">
          <path
            d="m42.3 19.6h-15v18.8c0 1.98 0.789 3.89 2.19 5.29 1.4 1.4 3.31 2.19 5.29 2.19s3.89-0.788 5.29-2.19c1.4-1.4 2.19-3.31 2.19-5.29z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#b)">
          <g fill="#b1b1b1">
            <path d="m31.4 29.6v-10h-3.02v13.7h12.9l-3.67-3.65z" />
            <path d="m41.3 30.4-3.18-3.2v-7.56h3.18z" />
          </g>
          <path
            d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            fill="#e2e2e2"
          />
          <clipPath id="a">
            <path
              d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            />
          </clipPath>
          <g clip-path="url(#a)">
            <path d="m31.4 29.6v-10h-3.02v13.7h12.9l-3.67-3.65z" fill="#c7c7c7" />
          </g>
        </g>
        <rect x="17.3" y="11.7" width="21.3" height="3.68" fill="#fdfefe" />
        <path
          d="m64 9.39h-4.68"
          fill="none"
          stroke="#fffefe"
          stroke-linejoin="miter"
          stroke-width=".85px"
        />
      </svg>
    `;
        }
    };
    exports.HeartBeatSensorElement = __decorate$k([
        n('wokwi-heart-beat-sensor')
    ], exports.HeartBeatSensorElement);

    var __decorate$j = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.TiltSwitchElement = class TiltSwitchElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'GND', y: 18, x: 88, number: 1, signals: [GND()] },
                { name: 'VCC', y: 27.8, x: 88, number: 2, signals: [VCC()] },
                { name: 'OUT', y: 37.5, x: 88, number: 3, signals: [] },
            ];
        }
        render() {
            return y`
      <svg
        width="23.4mm"
        height="14.7mm"
        version="1.1"
        viewBox="0 0 88.4 55.6"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m71.2 0h-71.2v55.6h71.2zm-54.1 43.8c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96zm13.8-3.78c2.03 0 3.68 1.7 3.68 3.78s-1.65 3.78-3.68 3.78-3.68-1.7-3.68-3.78 1.65-3.78 3.68-3.78zm0-31.5c2.03 0 3.68 1.7 3.68 3.78 0 2.09-1.65 3.78-3.68 3.78s-3.68-1.7-3.68-3.78c0-2.09 1.65-3.78 3.68-3.78zm-13.8-6.6c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96z"
          fill="#19365e"
        />
        <clipPath id="g">
          <path
            d="m78.1 4.2h-71.2v55.6h71.2zm-54.1 43.8c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96zm13.8-3.78c2.03 0 3.68 1.7 3.68 3.78s-1.65 3.78-3.68 3.78-3.68-1.7-3.68-3.78 1.65-3.78 3.68-3.78zm0-31.5c2.03 0 3.68 1.7 3.68 3.78 0 2.09-1.65 3.78-3.68 3.78s-3.68-1.7-3.68-3.78c0-2.09 1.65-3.78 3.68-3.78zm-13.8-6.6c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#g)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#1b2f4c"
          />
        </g>
        <text
          transform="rotate(-90 31 151)"
          x="132.20"
          y="184.995"
          fill="#fffefe"
          font-size="10.3px"
        >
          s
        </text>
        <g fill="#bbb9b9">
          <ellipse cx="18.5" cy="18.5" rx="5.21" ry="3.44" />
          <ellipse cx="42.3" cy="18.5" rx="5.21" ry="3.44" />
          <ellipse cx="18.5" cy="37.2" rx="5.21" ry="3.44" />
          <ellipse cx="42.3" cy="37.2" rx="5.21" ry="3.44" />
        </g>
        <path d="m57.5 13.5v28.6h8.39v-28.6z" fill="none" stroke="#fff" stroke-width=".9px" />
        <g fill="#29261c">
          <path d="m58.4 34.2v6.55h6.55v-6.55z" />
          <path d="m58.4 24.5v6.55h6.55v-6.55z" />
          <path d="m58.4 14.8v6.56h6.55v-6.56z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m61.9 36.1c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 26.3c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 16.6c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.636-0.422 1.02v1e-3c0 0.382 0.152 0.748 0.422 1.02s0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.189-0.423-0.423-0.423h-26.1z"
          />
        </g>
        <g fill="#0e0f0d" stroke="#bbb9b9" stroke-linejoin="miter" stroke-width="1.83px" r="2.59">
          <circle cx="42.2" cy="18.4" />
          <circle cx="18.4" cy="18.4" />
          <circle cx="18.4" cy="37.1" />
          <circle cx="42.2" cy="37.1" />
        </g>
        <ellipse
          cx="17.1"
          cy="48.7"
          rx="4.82"
          ry="4.96"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.12px"
        />
        <path
          d="m30.8 39.6c-2.26 0-4.1 1.88-4.1 4.21 0 2.33 1.84 4.21 4.1 4.21s4.1-1.88 4.1-4.21c0-2.33-1.84-4.21-4.1-4.21zm0 0.855c1.8 0 3.25 1.51 3.25 3.36s-1.45 3.36-3.25 3.36-3.25-1.51-3.25-3.36 1.45-3.36 3.25-3.36z"
          fill="#bbb9b9"
        />
        <clipPath id="f">
          <path
            d="m37.7 43.8c-2.26 0-4.1 1.88-4.1 4.21 0 2.33 1.84 4.21 4.1 4.21s4.1-1.88 4.1-4.21c0-2.33-1.84-4.21-4.1-4.21zm0 0.855c1.8 0 3.25 1.51 3.25 3.36s-1.45 3.36-3.25 3.36-3.25-1.51-3.25-3.36 1.45-3.36 3.25-3.36z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#f)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#8e8e8e"
          />
        </g>
        <ellipse
          cx="30.8"
          cy="12.3"
          rx="3.68"
          ry="3.78"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width=".86px"
        />
        <ellipse
          cx="17.1"
          cy="6.86"
          rx="4.82"
          ry="4.96"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.12px"
        />
        <path
          d="m24.6 33.6-1.62-1.89s-3.45 2.95-5.16 4.41c-0.251 0.215-0.407 0.521-0.432 0.85-0.026 0.329 0.08 0.655 0.295 0.906v1e-3c0.215 0.25 0.521 0.406 0.85 0.431 0.329 0.026 0.655-0.08 0.906-0.295 1.72-1.47 5.16-4.42 5.16-4.42z"
          fill="#d2d2d2"
        />
        <clipPath id="e">
          <path
            d="m31.5 37.8-1.62-1.89s-3.45 2.95-5.16 4.41c-0.251 0.215-0.407 0.521-0.432 0.85-0.026 0.329 0.08 0.655 0.295 0.906v1e-3c0.215 0.25 0.521 0.406 0.85 0.431 0.329 0.026 0.655-0.08 0.906-0.295 1.72-1.47 5.16-4.42 5.16-4.42z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#e)">
          <path
            d="m31 36.9c-0.189 0.025-0.301 0.185-0.449 0.294-0.418 0.309-0.808 0.635-1.19 0.985-1 0.927-2.03 1.82-3.05 2.73-0.259 0.231-0.576 0.388-0.836 0.617-0.587 0.517-1.13 1.14-1.91 1.35-0.089 0.025-0.25 0.124-0.334 0.124-0.057 0 0.112-6e-3 0.168 0 0.093 9e-3 0.179 0.032 0.275 0.037 0.342 0.017 0.701 0.016 1.04-5e-3 0.994-0.062 2.05-0.419 3.01-0.675 1.54-0.411 2.9-1.01 4.09-2.12 0.52-0.486 0.938-1.08 1.38-1.64 0.582-0.723 1.1-1.47 1.41-2.35 0.018-0.052-0.326-0.106-0.365-0.114-0.472-0.095-0.911-0.123-1.4-0.123-0.655 0-1.44 0.626-2 0.894-0.412 0.196-1.25 0.443-1.56 0.866"
            fill="#ececec"
          />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <path d="m56.6 33.8v10.9h3.6v-10.9z" fill="#bbb9b9" />
          <path d="m56.5 36.5v5.5h3.85v-5.5z" fill="#29261c" />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <path d="m56.6 19.7v10.9h3.6v-10.9z" fill="#bbb9b9" />
          <clipPath id="d">
            <path d="m56.6 19.7v10.9h3.6v-10.9z" />
          </clipPath>
          <g clip-path="url(#d)">
            <path
              d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
              fill="#9c9b9b"
            />
          </g>
          <path d="m56.5 22.4v5.5h3.85v-5.5z" fill="#29261c" />
          <clipPath id="c">
            <path d="m56.5 22.4v5.5h3.85v-5.5z" />
          </clipPath>
          <g clip-path="url(#c)">
            <path
              d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            />
          </g>
        </g>
        <path
          d="m54.7 28.6v12.9h-6.3v-12.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".49px"
        />
        <path d="m48.2 14.3v13.4h6.79v-13.4zm0.489 5.11v-4.62h5.81v4.62 7.76h-5.81z" fill="#fff" />
        <clipPath id="b">
          <path d="m55 18.5v13.4h6.79v-13.4zm0.489 5.11v-4.62h5.81v4.62 7.76h-5.81z" />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#b)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#d4d4d4"
          />
        </g>
        <path
          d="m61.6 10.4v-4.68"
          fill="none"
          stroke="#fffefe"
          stroke-linejoin="miter"
          stroke-width=".85px"
        />
        <g fill="#a19e9e">
          <circle cx="4.64" cy="41.4" r="2.88" />
          <circle cx="4.64" cy="14.2" r="2.88" />
          <circle cx="51.4" cy="8.74" r="2.88" />
          <circle cx="51.4" cy="45.6" r="2.88" />
        </g>
        <g fill="#29261c">
          <circle cx="51.4" cy="45.6" r="1.47" />
          <circle cx="4.64" cy="41.4" r="1.47" />
          <circle cx="4.64" cy="14.2" r="1.47" />
          <circle cx="51.4" cy="8.74" r="1.47" />
        </g>
        <path
          d="m45.4 12.3 1.65 1.86s3.4-3 5.09-4.5c0.247-0.219 0.397-0.527 0.417-0.857 0.02-0.329-0.091-0.653-0.31-0.901h-1e-3c-0.218-0.247-0.527-0.398-0.856-0.418-0.33-0.02-0.654 0.092-0.901 0.311-1.69 1.5-5.09 4.5-5.09 4.5z"
          fill="#d2d2d2"
        />
        <clipPath id="a">
          <path
            d="m52.2 16.5 1.65 1.86s3.4-3 5.09-4.5c0.247-0.219 0.397-0.527 0.417-0.857 0.02-0.329-0.091-0.653-0.31-0.901h-1e-3c-0.218-0.247-0.527-0.398-0.856-0.418-0.33-0.02-0.654 0.092-0.901 0.311-1.69 1.5-5.09 4.5-5.09 4.5z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#a)">
          <path
            d="m52.8 17.4c0.188-0.028 0.297-0.19 0.444-0.302 0.413-0.316 0.797-0.648 1.17-1 0.986-0.943 2-1.86 3-2.78 0.255-0.235 0.569-0.398 0.825-0.63 0.579-0.527 1.11-1.16 1.89-1.38 0.088-0.026 0.248-0.127 0.332-0.129 0.057-1e-3 -0.112 8e-3 -0.168 3e-3 -0.093-7e-3 -0.18-0.03-0.276-0.033-0.342-0.011-0.701-4e-3 -1.04 0.023-0.993 0.079-2.04 0.453-2.99 0.725-1.53 0.437-2.89 1.06-4.05 2.19-0.512 0.494-0.92 1.1-1.36 1.66-0.569 0.733-1.08 1.49-1.37 2.37-0.017 0.053 0.328 0.101 0.367 0.108 0.474 0.088 0.913 0.107 1.4 0.099 0.654-0.011 1.42-0.649 1.98-0.927"
            fill="#ececec"
          />
        </g>
        <path
          d="m42.2 6.32c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.256 0.299 0.706 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.256 0.334-0.705 0.078-1-1.83-2.14-8.55-9.99-10.4-12.1z"
          fill="#4a91ce"
        />
      </svg>
    `;
        }
    };
    exports.TiltSwitchElement = __decorate$j([
        n('wokwi-tilt-switch')
    ], exports.TiltSwitchElement);

    var __decorate$i = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.FlameSensorElement = class FlameSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.ledPower = false;
            this.ledSignal = false;
            this.pinInfo = [
                { name: 'VCC', y: 14.6, x: 199, number: 1, signals: [VCC()] },
                { name: 'GND', y: 24.3, x: 199, number: 2, signals: [GND()] },
                { name: 'DOUT', y: 34, x: 199, number: 3, signals: [] },
                { name: 'AOUT', y: 43.7, x: 199, number: 4, signals: [] },
            ];
        }
        render() {
            const { ledPower, ledSignal } = this;
            return y`
      <svg
        width="52.904mm"
        heigth="16.267mm"
        version="1.1"
        viewBox="0 0 200 61.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m180 1.49e-7h-136v61.5h136zm-129 52c1.9 0 3.44 1.5 3.44 3.34s-1.54 3.34-3.44 3.34-3.44-1.5-3.44-3.34 1.54-3.34 3.44-3.34zm98.3-29.8c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55zm-98.3-19.4c1.9 0 3.44 1.5 3.44 3.34 0 1.84-1.54 3.34-3.44 3.34s-3.44-1.5-3.44-3.34c0-1.84 1.54-3.34 3.44-3.34z"
          fill="#1c2546"
        />
        <rect
          x="45.5"
          y="20.1"
          width="11.2"
          height="22.2"
          fill="none"
          stroke="#fff"
          stroke-width="1.08px"
        />
        <circle cx="51.1" cy="25.6" r="3.14" fill="#dae3eb" />
        <circle cx="51.1" cy="36.8" r="3.14" fill="#dae3eb" />
        <path
          d="m51.1 25.7c0-0.199-0.079-0.39-0.219-0.53-0.141-0.141-0.332-0.22-0.53-0.22h-13.2v1.5h13.2c0.198 0 0.389-0.079 0.53-0.219 0.14-0.141 0.219-0.332 0.219-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m51.1 36.7c0-0.198-0.079-0.389-0.219-0.53-0.141-0.14-0.332-0.219-0.53-0.219h-13.2v1.5h13.2c0.198 0 0.389-0.079 0.53-0.22 0.14-0.14 0.219-0.331 0.219-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m35.2 20.1h-25.2c-5.49 0-9.94 4.45-9.94 9.94v1e-3c0 5.49 4.45 9.94 9.94 9.94h25.2z"
          fill="#29261c"
        />
        <clipPath id="c">
          <path
            d="m35.18 20.14h-25.2c-5.49 0-9.94 4.45-9.94 9.94v1e-3c0 5.49 4.45 9.94 9.94 9.94h25.2z"
          />
        </clipPath>
        <g clip-path="url(#c)">
          <path
            d="m37.68 21.94c-12.6 0-25.1-0.227-37.7 0.917-0.196 0.018 0 4.25 0 4.25 12.8-1.41 25-1.08 37.7-0.669z"
            fill="#47434d"
          />
        </g>
        <rect x="32.6" y="17.9" width="5.06" height="25.7" fill="#29261c" />
        <clipPath id="b">
          <rect x="32.68" y="17.94" width="5.06" height="25.7" />
        </clipPath>
        <g clip-path="url(#b)">
          <path
            d="m51.98 20.84c-12.6 0-25.1-0.228-37.7 0.916-0.195 0.018 0 4.25 0 4.25 12.8-1.41 25-1.08 37.7-0.669z"
            fill="#47434d"
          />
        </g>
        <g fill="none" stroke-width="1.08px">
          <g stroke="#fff">
            <path d="m70.2 32.4h-7.47v9.67h7.47" />
            <path d="m136 10.4v-7.47h-9.67v7.47" />
            <path d="m155 12.8h7.47v-9.67h-7.47" />
            <path d="m155 55.8h7.47v-9.67h-7.47" />
            <path d="m136 43v-7.47h-9.67v7.47" />
            <path d="m70.2 45.2h-7.47v9.67h7.47" />
            <path d="m75.1 32.4h7.47v9.67h-7.47" />
            <path d="m136 15.2v7.47h-9.67v-7.47" />
            <path d="m151 12.8h-7.47v-9.67h7.47" />
            <path d="m151 55.8h-7.47v-9.67h7.47" />
            <path d="m136 47.9v7.47h-9.67v-7.47" />
            <path d="m75.1 45.2h7.47v9.67h-7.47" />
            <path
              d="m75.1 20h4.46c2.67 0 4.83 2.16 4.83 4.84v1e-3c0 2.67-2.16 4.84-4.83 4.84h-4.46"
            />
            <path
              d="m75.1 6.62h4.46c2.67 0 4.83 2.16 4.83 4.83v1e-3c0 2.67-2.16 4.84-4.83 4.84h-4.46"
            />
            <path
              d="m70.2 20h-4.46c-2.67 0-4.83 2.16-4.83 4.84v1e-3c0 2.67 2.16 4.84 4.83 4.84h4.46"
            />
            <path
              d="m70.2 6.62h-4.46c-2.67 0-4.83 2.16-4.83 4.83v1e-3c0 2.67 2.16 4.84 4.83 4.84h4.46"
            />
          </g>
          <ellipse cx="51.1" cy="6.11" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <ellipse cx="51.1" cy="55.4" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <g stroke="#fff">
            <path d="m50.6 44.7v4.75" />
            <path d="m50.6 12.1v4.75" />
            <path d="m53 14.5h-4.75" />
          </g>
        </g>
        <g fill="#dae3eb">
          <rect x="64.3" y="8.69" width="16.7" height="5.52" />
          <rect x="64.3" y="22" width="16.7" height="5.52" />
          <rect x="64.3" y="34.5" width="16.7" height="5.52" />
        </g>
        <rect x="68.4" y="34.3" width="8.43" height="5.9" fill="#29261c" />
        <path d="m134 21.2v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m134 17v-8.43h-5.9v8.43z" fill="#29261c" />

        <!-- LEDs -->
        <rect x="145" y="5.23" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="149" y="5.04" width="8.43" height="5.9" fill="#fffefe" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${ledPower &&
                b`<circle cx="153.2" cy="7.5" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}
        <rect x="145" y="48.3" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="149" y="48.1" width="8.43" height="5.9" fill="#fffefe" />
        ${ledSignal &&
                b`<circle cx="153.2" cy="51.3" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <path d="m134 53.8v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m134 49.7v-8.43h-5.9v8.43z" fill="#29261c" />
        <rect x="64.3" y="47.5" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="68.4" y="8.5" width="8.43" height="5.9" fill="#907463" />
        <rect x="68.4" y="21.8" width="8.43" height="5.9" fill="#907463" />
        <rect x="68.4" y="47.3" width="8.43" height="5.9" fill="#29261c" />
        <g fill="#dae3eb">
          <path
            d="m99.2 34.6h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 40.4h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 46.2h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 52h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m111 55.1h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 49.3h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 43.5h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 37.7h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
        </g>
        <rect x="97.6" y="33.2" width="16.1" height="23.3" fill="#29261c" />
        <rect x="89.4" width="32.1" height="32.1" fill="#466fb5" />
        <g fill="none" stroke="#2e60aa" stroke-width="1.63px">
          <path d="m95.6 7.35 13.9 17.1" />
          <path d="m112 8.62-14.9 13.2" />
          <path d="m114 12.7-19.2 5.13" />
          <path d="m114 17.3-19.5-4.06" />
          <path d="m113 21.8-5.14-4.58" />
          <path d="m105 27.6v-9.83" />
          <path d="m100 24.7 3.14-5.18" />
        </g>
        <circle cx="105" cy="16" r="6.56" fill="#bcc2d5" />
        <clipPath id="a">
          <circle cx="105.08" cy="16.04" r="6.56" />
        </clipPath>
        <g clip-path="url(#a)" fill="none" stroke="#3f3c40" stroke-width="2.5px">
          <path d="m105.08 6.74v18.6" />
          <path d="m115.08 16.04h-18.6" />
        </g>
        <path
          d="m149 19.8c5.5 0 9.96 4.46 9.96 9.96s-4.46 9.96-9.96 9.96-9.96-4.46-9.96-9.96 4.46-9.96 9.96-9.96zm0 2.4c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55z"
          fill="#d4d0d1"
        />
        <path
          d="m169.1 10.2v38.6h8.39v-38.6z"
          fill="#1c2546"
          stroke="#fff"
          stroke-linejoin="round"
          stroke-width=".9px"
        />
        <g fill="#29261c">
          <path d="m170 40.75v6.55h6.55v-6.55z" />
          <path d="m170 31.05v6.55h6.55v-6.55z" />
          <path d="m170 21.25v6.55h6.55v-6.55z" />
          <path d="m170 11.55v6.55h6.55v-6.55z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m173 42.55c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.271-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
          <path
            d="m173 32.85c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.271-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
          <path
            d="m173 23.15c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.27-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />

          <path
            d="m173 13.45c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.27-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
        </g>
        <text fill="#fffefe" font-family="sans-serif" font-size="8px">
          <tspan x="171" y="10">+</tspan>
          <tspan x="164.3" y="26.5">-</tspan>
          <tspan x="162.5" y="36.9">D</tspan>
          <tspan x="171" y="56">A</tspan>
        </text>
      </svg>
    `;
        }
    };
    __decorate$i([
        e$1()
    ], exports.FlameSensorElement.prototype, "ledPower", void 0);
    __decorate$i([
        e$1()
    ], exports.FlameSensorElement.prototype, "ledSignal", void 0);
    exports.FlameSensorElement = __decorate$i([
        n('wokwi-flame-sensor')
    ], exports.FlameSensorElement);

    var __decorate$h = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.GasSensorElement = class GasSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'AOUT', y: 16.5, x: 137, number: 1, signals: [] },
                { name: 'DOUT', y: 26.4, x: 137, number: 2, signals: [] },
                { name: 'GND', y: 36.5, x: 137, number: 3, signals: [GND()] },
                { name: 'VCC', y: 46.2, x: 137, number: 4, signals: [VCC()] },
            ];
        }
        render() {
            return y`
      <svg
        width="36.232mm"
        height="16.617mm"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 137 59.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="a" width="4.1" height="4.1" patternUnits="userSpaceOnUse">
            <path
              d="m0 0v4.09h0.4v-0.85l0.42 0.381v0.469h0.4v-0.0996l0.109 0.0996h0.711v-0.799l0.42 0.379v0.42h0.398v-0.0488l0.0547 0.0488h0.766v-0.75l0.42 0.381v0.369h0.4v-4.09h-0.4v0.311l-0.334-0.311h-0.598l0.111 0.0996v0.9l-0.42-0.379v-0.621h-0.398v0.25l-0.277-0.25h-0.6l0.0566 0.0508v0.9l-0.42-0.381v-0.57h-0.4v0.201l-0.223-0.201zm0.4 0.359 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.391v0.889l-0.42-0.379zm1.64 0.0605 0.42 0.379v0.891l-0.42-0.381zm-2.46 0.639 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.381v0.898l-0.42-0.379zm-2.46 0.641 0.42 0.379v0.9l-0.42-0.379zm1.64 0.0488 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.379v0.9l-0.42-0.379zm-2.46 0.65 0.42 0.379v0.9l-0.42-0.379zm1.64 0.0488 0.42 0.381v0.9l-0.42-0.381z"
              fill="#949392"
            />
          </pattern>
          <g id="pin">
            <path
              fill="#c6bf95"
              d="m29 4.6c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-1e-3c0-0.382-0.152-0.748-0.422-1.02s-0.636-0.422-1.02-0.422h-26.1c-0.234 0-0.423 0.189-0.423 0.423v2.04c0 0.234 0.189 0.423 0.423 0.423h26.1z"
            />
            <rect x="0" y="0" width="6.9" height="6.9" />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m113 0h-113v59.5h113zm-1.6 53.2c0 2.62-2.12 4.74-4.74 4.74s-4.74-2.12-4.74-4.74c0-2.62 2.12-4.74 4.74-4.74s4.74 2.12 4.74 4.74zm-110 0c0 2.62 2.12 4.74 4.74 4.74 2.62 0 4.74-2.12 4.74-4.74 0-2.62-2.12-4.74-4.74-4.74-2.62 0-4.74 2.12-4.74 4.74zm105-51.6c2.62 0 4.74 2.12 4.74 4.74 0 2.62-2.12 4.74-4.74 4.74s-4.74-2.12-4.74-4.74c0-2.62 2.12-4.74 4.74-4.74zm-101 0c-2.62 0-4.74 2.12-4.74 4.74 0 2.62 2.12 4.74 4.74 4.74 2.62 0 4.74-2.12 4.74-4.74 0-2.62-2.12-4.74-4.74-4.74z"
          fill="#0664af"
        />

        <!-- Pins -->
        <use xlink:href="#pin" x="107" y="12" />
        <use xlink:href="#pin" x="107" y="21.3" />
        <use xlink:href="#pin" x="107" y="31.1" />
        <use xlink:href="#pin" x="107" y="40.9" />

        <!-- Sensor -->
        <circle cx="47.7" cy="29.8" r="31.2" fill="none" stroke="#fff" stroke-width=".4px" />
        <circle cx="47.7" cy="29.8" r="28.8" fill="#dedede" />
        <circle cx="47.7" cy="29.8" r="25.8" fill="#d0ccc4" />
        <circle cx="47.7" cy="29.8" r="21.4" fill="#bab3ad" />
        <circle cx="47.7" cy="29.8" r="21.4" fill="url(#a)" />

        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="94.656" y="16.729">AOUT</tspan>
          <tspan x="94.656" y="26.098">DOUT</tspan>
          <tspan x="94.656" y="35.911">GND</tspan>
          <tspan x="94.656" y="45.696">VCC</tspan>
        </text>
      </svg>
    `;
        }
    };
    exports.GasSensorElement = __decorate$h([
        n('wokwi-gas-sensor')
    ], exports.GasSensorElement);

    var __decorate$g = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.FranzininhoElement = class FranzininhoElement extends n$1 {
        constructor() {
            super(...arguments);
            this.led1 = false;
            this.ledPower = false;
            this.resetPressed = false;
            this.pinInfo = [
                { name: 'GND.1', x: 218.5, y: 23.3, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'VCC.1', x: 218.5, y: 32.9, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: 'PB4', x: 218.5, y: 42.5, signals: [analog(2), { type: 'pwm' }] },
                { name: 'PB5', x: 218.5, y: 52.2, signals: [analog(0)] },
                { name: 'PB3', x: 218.5, y: 61.7, signals: [analog(3)] },
                { name: 'PB2', x: 218.5, y: 71.2, signals: [spi('SCK'), i2c('SCL'), analog(1)] },
                { name: 'PB1', x: 218.5, y: 80.9, signals: [spi('MISO'), { type: 'pwm' }] },
                { name: 'PB0', x: 218.5, y: 90.5, signals: [spi('MOSI'), i2c('SDA'), { type: 'pwm' }] },
                { name: 'VIN', x: 132.7, y: 8.1, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'GND.2', x: 142.9, y: 8.1, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'VCC.2', x: 153, y: 8.1, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
            ];
        }
        static get styles() {
            return r$3`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }
      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: #eee;
        outline: none;
      }
    `;
        }
        render() {
            const { ledPower, led1 } = this;
            return y`
      <svg
        width="64mm"
        height="30mm"
        version="1.1"
        viewBox="0 0 64 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${pinsFemalePattern}

        <!-- PCB -->
        <path
          d="M63.1 0H12.5v30h50.6V0zM22.2 25.9a1.57 1.57 0 11-.002 3.142A1.57 1.57 0 0122.2 25.9zm38.4 0a1.57 1.57 0 11-.002 3.138A1.57 1.57 0 0160.6 25.9zM22.2 1a1.57 1.57 0 110 3.14 1.57 1.57 0 010-3.14zm38.4 0a1.57 1.57 0 11-.002 3.142A1.57 1.57 0 0160.6 1z"
          fill="#2c8240"
        />

        <!-- Holes -->
        <g fill="#e6e6e6">
          <path
            d="M30.6 3.3a.752.752 0 10-1.503 0v1.46a.752.752 0 001.503 0V3.3zM26.3 3.3a.752.752 0 00-1.504 0v1.46a.752.752 0 001.504 0V3.3z"
          />
          <path
            d="M48.2 6.44a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM54.2 6.44a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM54.2 2.09a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM48.2 2.09a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748z"
          />
        </g>

        <g fill="#848400">
          <circle cx="15.4" cy="20.8" r="1.57" />
          <circle cx="15.4" cy="9.28" r="1.57" />
          <circle cx="29.2" cy="7.69" r=".94" />
          <circle cx="21.7" cy="7.69" r=".94" />
          <circle cx="21.7" cy="10.5" r=".94" />
          <circle cx="29.2" cy="10.5" r=".94" />
          <circle cx="36.7" cy="10.6" r=".94" />
          <circle cx="33.6" cy="10.6" r=".94" />
          <circle cx="36.7" cy="20.5" r=".94" />
          <circle cx="33.6" cy="20.5" r=".94" />
          <circle cx="20.6" cy="22.7" r=".94" />
          <circle cx="21.8" cy="19.8" r=".94" />
          <circle cx="29.3" cy="19.8" r=".94" />
          <circle cx="30.6" cy="16.9" r=".94" />
          <circle cx="20.6" cy="16.9" r=".94" />
          <circle cx="30.6" cy="13.9" r=".94" />
          <circle cx="17.8" cy="11.7" r=".94" />
          <circle cx="17.8" cy="13.9" r=".94" />
          <circle cx="20.6" cy="13.9" r=".94" />
          <circle cx="17.8" cy="16.1" r=".94" />
          <circle cx="17.8" cy="18.3" r=".94" />
          <circle cx="30.6" cy="22.7" r=".94" />
          <circle cx="33.6" cy="27" r=".94" />
          <circle cx="33.6" cy="24.8" r=".94" />
          <circle cx="38.4" cy="27" r=".94" />
          <circle cx="38.4" cy="24.8" r=".94" />
        </g>

        <g fill="#fff">
          <circle cx="15.4" cy="20.8" r="1.05" />
          <circle cx="15.4" cy="9.28" r="1.05" />
          <circle cx="29.2" cy="7.69" r=".52" />
          <circle cx="21.7" cy="7.69" r=".52" />
          <circle cx="21.7" cy="10.5" r=".52" />
          <circle cx="29.2" cy="10.5" r=".52" />
          <circle cx="36.7" cy="10.6" r=".52" />
          <circle cx="33.6" cy="10.6" r=".52" />
          <circle cx="36.7" cy="20.5" r=".52" />
          <circle cx="33.6" cy="20.5" r=".52" />
          <circle cx="20.6" cy="22.7" r=".52" />
          <circle cx="21.8" cy="19.8" r=".52" />
          <circle cx="29.3" cy="19.8" r=".52" />
          <circle cx="30.6" cy="16.9" r=".52" />
          <circle cx="20.6" cy="16.9" r=".52" />
          <circle cx="30.6" cy="13.9" r=".52" />
          <circle cx="17.8" cy="11.7" r=".52" />
          <circle cx="17.8" cy="13.9" r=".52" />
          <circle cx="20.6" cy="13.9" r=".52" />
          <circle cx="17.8" cy="16.1" r=".52" />
          <circle cx="17.8" cy="18.3" r=".52" />
          <circle cx="30.6" cy="22.7" r=".52" />
          <circle cx="33.6" cy="27" r=".52" />
          <circle cx="33.6" cy="24.8" r=".52" />
          <circle cx="38.4" cy="27" r=".52" />
          <circle cx="38.4" cy="24.8" r=".52" />
        </g>

        <!-- USB Connector -->
        <g fill="#b2b2b2">
          <path d="M15.6 11h1.02v1.53H15.6zM16.6 11.5h1.38v.45H16.6z" />
          <path d="M15.6 13.2h1.02v1.53H15.6zM16.6 13.7h1.38v.45H16.6z" />
          <path d="M15.6 15.3h1.02v1.53H15.6zM16.6 15.9h1.38v.45H16.6z" />
          <path d="M15.6 17.5h1.02v1.53H15.6zM16.6 18.1h1.38v.45H16.6z" />
        </g>

        <path d="M-.145 9.97h15.8v10.1h-15.8z" fill="#999" />
        <path d="M-.147 9.97h15v9.24h-15z" fill="#ccc" />
        <path
          d="M11.4 14.6h.682v.877H11.4zM2.45 16.3h1.41v2.08H2.45zM2.45 11.1h1.41v2.08H2.45z"
          fill="#999"
        />

        <!-- Pin Headers -->
        <g transform="translate(59.1 4.7) rotate(90 0 0)">
          <rect width="${0.38 + 2.54 * 8}" height="2.54" fill="url(#pins-female)" />
        </g>

        <!-- Pin Labels -->
        <text fill="#fff">
          <tspan x="59.5" dy="6.54">GND</tspan>
          <tspan x="59.5" dy="2.54">VCC</tspan>
          <tspan x="60.5" dy="2.54">5</tspan>
          <tspan x="60.5" dy="2.54">4</tspan>
          <tspan x="60.5" dy="2.54">3</tspan>
          <tspan x="60.5" dy="2.54">2</tspan>
          <tspan x="60.5" dy="2.54">1</tspan>
          <tspan x="60.5" dy="2.54">0</tspan>
        </text>

        <!-- Pin Bar -->
        <path d="M41.8 1.37l-.588-.588h-1.53l-.587.588v1.53l.587.587h1.53l.588-.587V2.22z" />
        <path d="M39.2 1.37l-.588-.587h-1.53l-.588.587v1.53l.588.587h1.53l.588-.587V2.22z" />
        <path d="M34.4 3.48h1.53l.588-.587v-1.53l-.588-.587H34.4l-.587.587v1.53l.587.587z" />

        <g fill="#8c8663">
          <path d="M40.1 1.7h.863v.864H40.1z" />
          <path d="M37.4 1.7h.863v.864H37.4z" />
          <path d="M34.7 1.7h.863v.864H34.7z" />
        </g>

        <text transform="translate(33.1 6) rotate(270 0 0)" fill="#fff" style="font-size: 1.4">
          <tspan x="0" dy="2.5">VIN</tspan>
          <tspan x="0" dy="2.5">GND</tspan>
          <tspan x="0" dy="2.5">VCC</tspan>
        </text>

        <!-- MCU -->
        <path
          d="M52.6 17.7h1.22v.873H52.6zM50.2 17.7h1.22v.873H50.2zM47.8 17.7h1.22v.873H47.8zM45.3 17.7h1.22v.873H45.3zM45.3 10.6h1.22v.858H45.3zM47.8 10.6h1.22v.858H47.8zM50.2 10.6h1.22v.858H50.2zM52.6 10.6h1.22v.858H52.6z"
          fill="#b2b2b2"
        />
        <path d="M44.7 11.5h9.77v6.28H44.7z" fill="#313131" />

        <g fill="#212121">
          <path d="M54.4 15.7a1.13 1.13 0 010-2.26v2.27z" />
          <circle cx="53.3" cy="12.6" r=".52" />
        </g>

        <text x="45.14" y="13.4" fill="olive" style="font-family: sans-serif; font-size: 1.6">
          <tspan x="45.14" y="13.4">ATTINY85</tspan>
        </text>

        <!-- LED Silk -->
        <path
          d="M34.6 27.65a2.003 2.003 0 001.01-1.74m.001 0a2 2 0 00-.711-1.53m-3.31 1.53c0 .741.41 1.42 1.06 1.77m-.341-3.32a2.01 2.01 0 00-.723 1.54m7.79 1.74a2.003 2.003 0 001.01-1.74m-.001 0a2 2 0 00-.711-1.53m-3.31 1.53c0 .741.41 1.42 1.06 1.77m-.342-3.32a2.008 2.008 0 00-.723 1.54"
          fill="none"
          stroke="#fff"
          stroke-width=".25"
        />

        <!-- Power LED -->
        <g fill="#00d300">
          <circle cx="33.6" cy="25.9" r="1.6" fill-opacity=".64" />
          <circle cx="33.6" cy="25.9" r="1.2" fill-opacity=".92" />
        </g>
        ${ledPower &&
                b`<circle cx="33.6" cy="25.9" r="1.8" fill="#03f704" filter="url(#ledFilter)" />`}

        <!-- LED1 -->
        <g fill="#d8e208">
          <circle cx="38.35" cy="25.9" r="1.6" fill-opacity=".64" />
          <circle cx="38.35" cy="25.9" r="1.2" fill-opacity=".92" />
        </g>
        ${led1 &&
                b`<circle cx="38.35" cy="25.9" r="1.8" fill="#fcfd00" filter="url(#ledFilter)" />`}

        <g fill="#fff">
          <text x="32.5" dy="23.4">ON</text>
          <text x="36.3" dy="23.4">LED1</text>
        </g>

        <!-- Capacitors -->
        <circle cx="41" cy="9.6" r="2.7" />
        <circle cx="41" cy="9.6" r="1.74" fill="#b2b2b2" />
        <path
          d="M41.1 11.3c-.429.003-.664-.089-1.1-.35l-.288 1.01c.396.226.842.349 1.3.356a2.84 2.84 0 001.4-.375l-.256-1.02c-.425.26-.555.371-1.06.375z"
          fill="#fff"
        />

        <ellipse cx="34.7" cy="7.91" rx="2.68" ry="1.13" fill="#f60" />
        <ellipse cx="34.7" cy="7.5" rx="1.25" ry=".413" />

        <!-- Diodes -->
        <g fill="#b2b2b2">
          <path
            d="M29.55 7.69a.357.357 0 00-.356-.357h-7.5a.356.356 0 000 .713h7.5c.196 0 .356-.16.356-.356z"
          />
          <path
            d="M29.55 10.5a.357.357 0 00-.356-.357h-7.5a.356.356 0 000 .713h7.5c.196 0 .356-.16.356-.356z"
          />
          <path
            d="M29.65 19.8a.357.357 0 00-.356-.356h-7.5a.357.357 0 100 .713h7.5c.196 0 .356-.16.356-.357z"
          />
        </g>

        <g fill="#ff2a2a">
          <path d="M23.2 8.88h4.47c.135 0 .111-2.38 0-2.38H23.2c-.145 0-.157 2.38 0 2.38z" />
          <path d="M27.7 11.7h-4.47c-.135 0-.112-2.38 0-2.38h4.47c.145 0 .157 2.38 0 2.38z" />
          <path d="M27.7 21h-4.47c-.134 0-.111-2.38 0-2.38h4.47c.145 0 .158 2.38 0 2.38z" />
        </g>

        <g fill="#fff" fill-opacity=".74">
          <path d="M24.1 9.32h.563v2.38H24.1z" />
          <path d="M24 18.6h.563v2.38H24z" />
          <path d="M26.4 6.5h.563v2.38H26.4z" />
        </g>

        <g fill-opacity=".4">
          <path
            d="M23.2 6.5c.205-.005.406 0 .609 0h3.86c.026 0 .057.24.052.24h-4.59c-.006 0 .025-.239.066-.24z"
          />
          <path
            d="M27.7 9.32c-.206-.005-.407 0-.609 0h-3.86c-.026 0-.057.239-.052.239h4.59c.006 0-.024-.238-.065-.239z"
          />
          <path
            d="M27.7 18.6c-.205-.005-.406 0-.609 0h-3.86c-.026 0-.057.239-.052.239h4.59c.006 0-.025-.238-.066-.239z"
          />
        </g>

        <!-- Resistors -->
        <g fill="#b2b2b2">
          <path
            d="M31 13.9a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .712h10.1A.356.356 0 0031 13.9z"
          />
          <path
            d="M31 16.9a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .713h10.1c.197 0 .356-.16.356-.357z"
          />
          <path
            d="M31 22.7a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .713h10.1c.197 0 .356-.16.356-.357z"
          />
          <path
            d="M33.6 10.2a.356.356 0 00-.356.356v9.98a.356.356 0 00.713 0v-9.98a.356.356 0 00-.357-.356z"
          />
          <path
            d="M36.7 10.2a.356.356 0 00-.357.356v9.98a.356.356 0 00.713 0v-9.98a.356.356 0 00-.356-.356z"
          />
        </g>

        <g fill="#d9b477">
          <path
            d="M23.8 15.8a1.369 1.369 0 00-.477-.103h-.69a.253.253 0 00-.25.25v1.86c0 .138.113.25.25.25h.69c.138 0 .352-.047.477-.102l.025-.013c.152-.062.314-.097.478-.102h2.49c.138 0 .352.047.477.102l.026.013c.124.057.339.102.477.102h.689c.138 0 .25-.112.251-.25v-1.86a.252.252 0 00-.251-.25h-.689a1.42 1.42 0 00-.477.103l-.026.012a1.369 1.369 0 01-.477.103h-2.49c-.138 0-.353-.048-.478-.103L23.8 15.8z"
          />
          <path
            d="M23.7 12.8a1.351 1.351 0 00-.477-.103h-.69a.252.252 0 00-.25.25v1.86c0 .138.112.25.25.25h.69c.137 0 .352-.047.477-.102l.025-.012c.125-.058.34-.103.477-.103h2.49c.138 0 .353.048.478.103l.025.012c.125.057.34.102.477.102h.69c.137 0 .25-.113.25-.25v-1.86a.252.252 0 00-.25-.25h-.69a1.42 1.42 0 00-.477.103l-.025.012a1.357 1.357 0 01-.478.103h-2.49a1.42 1.42 0 01-.477-.103L23.7 12.8z"
          />
          <path
            d="M23.8 21.6a1.373 1.373 0 00-.477-.102h-.69a.25.25 0 00-.25.25v1.86c0 .138.112.25.25.25h.69c.137 0 .352-.048.477-.103l.025-.012c.125-.057.34-.102.477-.102h2.49c.138 0 .353.047.477.102l.026.012c.125.058.339.103.477.103h.69c.137 0 .25-.113.25-.25v-1.86a.251.251 0 00-.25-.25h-.69c-.138 0-.352.047-.477.102l-.026.013a1.368 1.368 0 01-.477.102h-2.49a1.42 1.42 0 01-.477-.102L23.8 21.6z"
          />
          <path
            d="M34.7 13.8c.058-.125.103-.34.103-.477v-.69a.252.252 0 00-.25-.25h-1.86a.25.25 0 00-.25.25v.69c0 .137.047.352.102.477l.013.025c.057.125.102.34.102.477v2.49c0 .138-.047.353-.102.477l-.013.026a1.373 1.373 0 00-.102.477v.69c0 .138.112.25.25.25h1.86a.252.252 0 00.25-.25v-.69c0-.138-.048-.352-.103-.477l-.012-.026a1.369 1.369 0 01-.103-.477v-2.49c0-.137.048-.352.103-.477l.012-.025z"
          />
          <path
            d="M37.7 13.7c.058-.124.103-.339.103-.477v-.69a.253.253 0 00-.25-.25h-1.86a.252.252 0 00-.25.25v.69c0 .138.047.353.102.477l.012.026c.058.124.103.339.103.477v2.49c0 .138-.047.352-.103.477l-.012.026a1.346 1.346 0 00-.102.477v.69c0 .138.112.25.25.25h1.86a.253.253 0 00.25-.25v-.69a1.41 1.41 0 00-.103-.477l-.012-.026a1.369 1.369 0 01-.103-.477v-2.49c0-.138.048-.353.103-.477l.012-.026z"
          />
        </g>

        <path d="M24.6 21.71h.642v1.92H24.6z" fill="#008000" />

        <g fill="#00f">
          <path
            d="M23.9 12.85a.809.809 0 01-.107-.04l-.025-.013a1.378 1.378 0 00-.478-.102h-.03v2.36h.03c.138 0 .353-.047.478-.103l.025-.012a.688.688 0 01.107-.04V12.9z"
          />
          <path
            d="M23.9 15.85a.822.822 0 01-.108-.04l-.025-.013a1.373 1.373 0 00-.477-.102h-.03v2.36h.03c.137 0 .352-.047.477-.102l.025-.013a.7.7 0 01.108-.04V15.9z"
          />
        </g>

        <g fill="#8a3d06">
          <path
            d="M24 21.66a.696.696 0 01-.108-.039l-.025-.013a1.397 1.397 0 00-.477-.103h-.03v2.36h.03c.137 0 .352-.048.477-.103l.025-.012a.583.583 0 01.108-.04V21.7z"
          />
          <path
            d="M34.64 13.9c.013-.04.025-.077.04-.107l.013-.026c.057-.124.102-.339.102-.477v-.03h-2.36v.03c0 .138.047.353.103.477l.012.026c.015.03.028.067.04.107h2.05z"
          />
          <path
            d="M37.65 13.9a.822.822 0 01.04-.108l.013-.025c.057-.125.102-.34.102-.477v-.03h-2.36v.03c0 .137.047.352.102.477l.012.025c.016.03.028.068.04.108h2.05z"
          />
        </g>

        <g fill="#ad9f4e">
          <path d="M27.8 12.7h.244v2.36H27.8z" />
          <path d="M27.9 15.7h.244v2.36H27.9z" />
          <path d="M35.5 17.8h2.36v.244H35.5z" />
          <path d="M27.8 21.5h.244v2.36H27.8z" />
          <path d="M32.4 17.8h2.36v.244H32.4z" />
        </g>

        <g fill="#b3b3b3">
          <path d="M24.5 12.9h.642v1.92H24.5z" />
          <path d="M24.5 15.9h.642v1.92H24.5z" />
        </g>

        <g fill="#c40808">
          <path d="M25.9 21.72h.642v1.92H25.9z" />
          <path d="M32.65 15.8h1.92v.642H32.6z" />
          <path d="M35.65 15.8h1.92v.642H35.7z" />
        </g>

        <g fill="#1a1a1a">
          <path d="M25.8 12.9h.642v1.92H25.8z" />
          <path d="M25.8 15.9h.642v1.92H25.8z" />
          <path d="M32.65 14.5h1.92v.642H32.6z" />
          <path d="M35.65 14.5h1.92v.642H35.7z" />
        </g>

        <!-- Regulator -->
        <ellipse cx="27.7" cy="2.93" rx="2.31" ry="2.3" fill="#1a1a1a" />
        <path d="M25.4 2.93h4.61v2.3H25.4z" />

        <!-- Reset Button  -->
        <path
          d="M46.1 6.1h1.17v.69H46.1zM52.2 6.1h1.17v.69H52.2zM52.2 1.74h1.17v.69H52.2zM46.1 1.74h1.17v.69H46.1z"
          fill="#b2b2b2"
        />
        <path
          d="M52.5 2.16a.535.535 0 00-.534-.535h-4.49a.535.535 0 00-.534.535v4.28c0 .295.239.535.534.535h4.49c.295 0 .534-.24.534-.535V2.16z"
          fill="#999"
        />

        <circle cx="47.8" cy="6.18" r=".4" />
        <circle cx="51.7" cy="6.18" r=".4" />
        <circle cx="51.7" cy="2.42" r=".4" />
        <circle cx="47.8" cy="2.42" r=".4" />

        <g stroke-width=".1" paint-order="fill stroke">
          <circle
            id="reset-button"
            cx="49.7"
            cy="4.3"
            r="1.4"
            fill="#000"
            stroke="#3f3f3f"
            tabindex="0"
            @mousedown=${() => this.down()}
            @touchstart=${() => this.down()}
            @mouseup=${() => this.up()}
            @mouseleave=${() => this.leave()}
            @touchend=${() => this.leave()}
            @keydown=${(e) => SPACE_KEYS.includes(e.key) && this.down()}
            @keyup=${(e) => SPACE_KEYS.includes(e.key) && this.up()}
          />
        </g>

        <!-- Logo -->
        <g fill="#fff">
          <path d="M55.5 25.1h-3.54v2.42h3.54V25.1zm-.174.174v2.07h-3.19v-2.07h3.19z" />
          <path
            d="M56 23.6a.514.514 0 00-.514-.514h-14a.514.514 0 00-.514.514v1.03c0 .283.23.514.514.514h14A.515.515 0 0056 24.63V23.6z"
          />
        </g>
        <text
          x="41.14"
          y="24.9"
          fill="#2c8240"
          style="font-family: sans-serif; font-weight: bold; font-size: 2.15"
        >
          FRANZININHO
        </text>
        <text
          x="52.2"
          y="26.95"
          fill="#fff"
          style="font-family: sans-serif; font-weight: bold; font-size: 1.78"
        >
          DIY
        </text>
      </svg>
    `;
        }
        down() {
            if (this.resetPressed) {
                return;
            }
            this.resetPressed = true;
            this.resetButton.style.stroke = '#333';
            this.dispatchEvent(new CustomEvent('button-press', {
                detail: 'reset',
            }));
        }
        up() {
            if (!this.resetPressed) {
                return;
            }
            this.resetPressed = false;
            this.resetButton.style.stroke = '';
            this.dispatchEvent(new CustomEvent('button-release', {
                detail: 'reset',
            }));
        }
        leave() {
            this.resetButton.blur();
            this.up();
        }
    };
    __decorate$g([
        e$1()
    ], exports.FranzininhoElement.prototype, "led1", void 0);
    __decorate$g([
        e$1()
    ], exports.FranzininhoElement.prototype, "ledPower", void 0);
    __decorate$g([
        e$1()
    ], exports.FranzininhoElement.prototype, "resetPressed", void 0);
    __decorate$g([
        i$2('#reset-button')
    ], exports.FranzininhoElement.prototype, "resetButton", void 0);
    exports.FranzininhoElement = __decorate$g([
        n('wokwi-franzininho')
    ], exports.FranzininhoElement);

    var __decorate$f = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.NanoRP2040ConnectElement = class NanoRP2040ConnectElement extends n$1 {
        constructor() {
            super(...arguments);
            this.ledRed = 0;
            this.ledGreen = 0;
            this.ledBlue = 0;
            this.ledBuiltIn = false;
            this.ledPower = false;
            this.pinInfo = [
                {
                    name: 'D12',
                    x: 20.1,
                    y: 1,
                    signals: [spi('MISO'), { type: 'pwm' }],
                    description: 'GPIO04',
                },
                {
                    name: 'D11',
                    x: 29.8,
                    y: 1,
                    signals: [spi('MOSI'), { type: 'pwm' }],
                    description: 'GPIO07',
                },
                { name: 'D10', x: 39.3, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO05' },
                { name: 'D9', x: 48.9, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO21' },
                { name: 'D8', x: 58.5, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO20' },
                { name: 'D7', x: 68.1, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO19' },
                { name: 'D6', x: 77.7, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO18' },
                { name: 'D5', x: 87.3, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO17' },
                { name: 'D4', x: 96.9, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO16' },
                { name: 'D3', x: 106.5, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO15' },
                { name: 'D2', x: 116.1, y: 1, signals: [{ type: 'pwm' }], description: 'GPIO25' },
                { name: 'GND.1', x: 125.2, y: 1, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'RESET', x: 135.3, y: 1, signals: [] },
                { name: 'RX', x: 153.9, y: 1, signals: [usart('RX')], description: 'GPIO1' },
                { name: 'TX', x: 144.5, y: 1, signals: [usart('TX')], description: 'GPIO0' },
                { name: 'D13', x: 20.1, y: 67.5, signals: [spi('SCK')], description: 'GPIO6' },
                { name: '3.3V', x: 29.7, y: 67.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
                { name: 'AREF', x: 39.3, y: 67.5, signals: [] },
                { name: 'A0', x: 48.8, y: 67.5, signals: [analog(0)], description: 'GPIO26' },
                { name: 'A1', x: 58.5, y: 67.5, signals: [analog(1)], description: 'GPIO27' },
                { name: 'A2', x: 68, y: 67.5, signals: [analog(2)], description: 'GPIO28' },
                { name: 'A3', x: 77.6, y: 67.5, signals: [analog(3)], description: 'GPIO29' },
                { name: 'A4', x: 87.3, y: 67.5, signals: [analog(4)], description: 'GPIO12' },
                { name: 'A5', x: 96.9, y: 67.5, signals: [analog(5)], description: 'GPIO13' },
                { name: 'A6', x: 106.5, y: 67.5, signals: [analog(6)] },
                { name: 'A7', x: 116.1, y: 67.5, signals: [analog(7)] },
                { name: '5V', x: 125.5, y: 67.5, signals: [{ type: 'power', signal: 'VCC', voltage: 5 }] },
                { name: 'RESET.2', x: 134.9, y: 67.5, signals: [] },
                { name: 'GND.2', x: 145.3, y: 67.5, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'VIN', x: 154.1, y: 67.5, signals: [{ type: 'power', signal: 'VCC' }] },
            ];
        }
        render() {
            const { ledPower, ledBuiltIn, ledRed, ledGreen, ledBlue } = this;
            const brightness = Math.max(ledRed, ledGreen, ledBlue);
            const opacity = brightness ? 0.3 + brightness * 0.7 : 0;
            return y`
      <svg
        width="44.573mm"
        height="17.956mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 168 67.9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pad-pattern" height="10" width="9.58" patternUnits="userSpaceOnUse">
            <path
              d="m5.88 0.00992v5.57c0 1.63-1.32 2.95-2.94 2.95h-0.0025c-1.63 0-2.94-1.32-2.94-2.95v-5.57h0.805c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14zm-2.95 7.65c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14z"
              fill="#ffdc8e"
              stroke-width="1.24"
            />
          </pattern>
          <pattern id="pin-pattern" height="10" width="1.3" patternUnits="userSpaceOnUse">
            <path
              d="m0.5 0c-0.205 0-0.37 0.165-0.37 0.37v1.08h0.739v-1.08c0-0.205-0.165-0.37-0.37-0.37z"
              fill="#eaecec"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m156 0h12.2v67.9h-12.2c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.959-2.14-2.14-2.14-1.18 0-2.14 0.96-2.14 2.14h-5.29c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.29c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-12.2v-67.9h12.2v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.29v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.29v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14zm7.38 58.8c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm-153 0c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm67 1.42c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-47.9 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm76.6 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-67.1 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.959 2.14-2.14 2.14c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14zm47.9 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm-28.8 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm86.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-38.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm38.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-144-58.3c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm153 0c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm-28.1 5.71c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-19.2 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-28.8 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm67.1 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm9.57 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.959 2.14-2.14 2.14zm-57.5 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-19.2 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm76.7 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-86.3 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.959 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14z"
          fill="#1a466b"
        />
        <path
          d="m148 67.9v-5.57c0-1.9-1.54-3.44-3.44-3.44h-2e-3c-1.9 0-3.44 1.54-3.44 3.44v5.57h-1.47v-9.55h9.88v9.55zm-0.756-6.78 7e-3 0.0161c-0.459-1.03-1.49-1.75-2.69-1.75h-2e-3c-0.661 0-1.27 0.218-1.76 0.587 0.492-0.368 1.1-0.587 1.76-0.587h2e-3c1.19 0 2.22 0.712 2.68 1.73zm-4.55-1.07c0.0186-0.0161 0.0372-0.031 0.0558-0.0459-0.0186 0.0149-0.0372 0.0298-0.0558 0.0459zm-0.0942 0.0794c0.0124-0.0112 0.026-0.0236 0.0397-0.0347l0.0136-0.0112c-0.0186 0.0149-0.036 0.031-0.0533 0.0459zm-0.343 0.36c0.0744-0.0918 0.154-0.18 0.239-0.263-0.0856 0.0831-0.165 0.171-0.239 0.263zm-0.0967 0.129c0.0236-0.0347 0.0496-0.0682 0.0756-0.1-0.026 0.0322-0.0521 0.0657-0.0756 0.1zm-0.0409 0.057c9e-3 -0.0124 0.0174-0.0248 0.026-0.036-9e-3 0.0112-0.0174 0.0236-0.026 0.036zm-0.18 0.301v-0.0012 0.0012l-7e-3 0.0124zm5.56 6.93v-5.57c0-0.423-0.0893-0.825-0.25-1.19 0.161 0.365 0.25 0.766 0.25 1.19zm-5.82-6.24c5e-3 -0.0223 0.01-0.0446 0.0161-0.067-6e-3 0.0223-0.0112 0.0446-0.0161 0.067zm-4e-3 0.0136v0.0037z"
          fill="#fff"
        />

        <!-- Flash memory chip -->
        <path
          d="m59.9 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m59.9 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m63 14.4c0-0.394-0.32-0.714-0.715-0.714h-0.738c-0.394 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m63 14.4c0-0.394-0.32-0.714-0.715-0.714h-0.738c-0.394 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m66 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.739c-0.394 0-0.714 0.32-0.714 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m66 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.739c-0.394 0-0.714 0.32-0.714 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m68.9 14.4c0-0.394-0.321-0.714-0.715-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m68.9 14.4v-0.0012c0-0.394-0.321-0.714-0.715-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012z"
          fill="#1d1d1b"
        />
        <path
          d="m66.8 32.1c0 0.394 0.32 0.714 0.715 0.714h0.738c0.394 0 0.715-0.32 0.715-0.714z"
          fill="#eaecec"
        />
        <path
          d="m68.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m63.8 32.1c0 0.394 0.32 0.714 0.714 0.714h0.739c0.394 0 0.714-0.32 0.714-0.714z"
          fill="#eaecec"
        />
        <path
          d="m66 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m60.7 32.1c0 0.394 0.321 0.714 0.715 0.714h0.738c0.396 0 0.715-0.32 0.715-0.714z"
          fill="#eaecec"
        />
        <path
          d="m62.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.227-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m57.8 32.1c0 0.394 0.32 0.714 0.715 0.714h0.738c0.394 0 0.714-0.32 0.714-0.714z"
          fill="#eaecec"
        />
        <path
          d="m59.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <rect x="56.7" y="14.1" width="13.3" height="18.4" fill="#3b3838" />

        <!-- Mounting holes -->
        <g fill="none" stroke="#ffdc8e" stroke-width=".496px">
          <circle cx="10.4" cy="62.4" r="3.56" />
          <circle cx="163.5" cy="62.4" r="3.56" />
          <circle cx="10.2" cy="5.52" r="3.56" />
          <circle cx="163" cy="5.52" r="3.56" />
        </g>

        <!-- Pads -->
        <rect transform="translate(17, 0)" width="142" height="9.5" fill="url(#pad-pattern)" />
        <rect
          transform="translate(17, 68) scale(1,-1)"
          width="142"
          height="9.5"
          fill="url(#pad-pattern)"
        />

        <!-- RP2040 -->
        <rect
          transform="translate(79,37.8) scale(1,-1)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect transform="translate(79,12.5)" width="19.5" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(102.3,15.5) rotate(90)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(75.5,34.5) rotate(270)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />

        <!-- Accelerometer chip -->
        <rect transform="translate(90,42)" width="3.8" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(90,57.5) scale(1,-1)"
          width="3.8"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(100,47.5) rotate(90)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(84,52.5) rotate(270)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />

        <!-- Crypto chip -->
        <rect transform="translate(104,40)" width="4.8" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(104,57) scale(1,-1)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />

        <rect x="85.3" y="43.7" width="13.4" height="12.4" fill="#3b3838" stroke-width="1.24" />

        <rect x="76.9" y="14.1" width="23.8" height="22.2" fill="#3b3838" />

        <!-- Microphone -->
        <g stroke-width="1.24">
          <path d="m52.7 25.8v-11.7h-16.1v11.7z" fill="#3b3838" />
          <circle cx="46.7" cy="19.9" r="2.77" fill="#3b3838" />
          <path
            d="m46.7 17.1c1.53 0 2.78 1.24 2.78 2.78 0 1.53-1.24 2.78-2.78 2.78-1.53 0-2.78-1.24-2.78-2.78 0-1.53 1.24-2.78 2.78-2.78zm0 3.72c-0.523 0-0.949-0.425-0.949-0.949s0.425-0.949 0.949-0.949 0.949 0.425 0.949 0.949-0.425 0.949-0.949 0.949z"
            fill="#ffdc8e"
          />
        </g>

        <path d="m111 55.5v-14h-9.03v14z" fill="#3b3838" />

        <!-- WiFi module -->
        <rect x="112" y="10.1" width="56" height="45.4" fill="#418e54" />
        <path
          d="m160 53.6h-3.05v-41.9h11.3v41.9h-2.36c0-0.764-0.308-1.38-0.687-1.38-0.378 0-0.686 0.619-0.686 1.38h-3.17c0-0.764-0.308-1.38-0.687-1.38s-0.687 0.619-0.687 1.38z"
          fill="#cecccb"
        />
        <rect x="115" y="11.7" width="41.9" height="41.9" fill="#e4e4e4" />
        <path d="m157 11.7h-41.9v41.9h41.9zm-0.868 0.868v40.2h-40.2v-40.2z" fill="#ffdc8e" />
        <path
          d="m165 11.2h-3.86v35.3c0 0.0868 0.0347 0.171 0.0967 0.233s0.146 0.098 0.234 0.098h3.19c0.0868 0 0.171-0.036 0.233-0.098s0.098-0.146 0.098-0.233v-35.3z"
          fill="#448f53"
        />

        <!-- USB connector -->
        <path
          d="m3.2 47.5-2.18 1.07c-0.138 0.0657-0.295 0.0756-0.439 0.026-0.145-0.0496-0.263-0.154-0.33-0.291-0.067-0.136-0.0769-0.295-0.0273-0.439s0.154-0.263 0.291-0.33l1.5-0.73h-0.203c-0.479 0-0.939-0.19-1.28-0.529-0.34-0.339-0.529-0.799-0.529-1.28v-21.8c0-0.48 0.19-0.939 0.529-1.28 0.339-0.339 0.799-0.529 1.28-0.529h0.203l-1.5-0.73c-0.138-0.067-0.242-0.185-0.291-0.33-0.0496-0.144-0.0397-0.301 0.0273-0.438v-0.0012c0.067-0.136 0.185-0.242 0.33-0.291 0.144-0.0496 0.301-0.0397 0.439 0.0273l2.18 1.06v-0.591h20.2v27.7h-20.2z"
          fill="#cecccb"
        />
        <path
          d="m23.4 41.7h-1.77c-0.0595 0-0.113 0.031-0.144 0.0806-0.316 0.516-2.04 3.34-2.04 3.34h-1.63v-1.71h-1.17v-2.58h1.17v-1.63h3.1c0.133 0 0.259-0.0521 0.352-0.145 0.093-0.0942 0.145-0.221 0.145-0.352v-1.55h-1.29v-6.34h1.29v-1.55c0-0.131-0.0521-0.258-0.145-0.351-0.093-0.0942-0.219-0.146-0.352-0.146h-3.1v-1.63h-1.17v-2.58h1.17v-1.71h1.63s1.73 2.83 2.04 3.34c0.031 0.0508 0.0843 0.0806 0.144 0.0806h1.77z"
          fill="#989898"
        />

        <!-- Reset button -->
        <g stroke-width="1.24">
          <rect x="42.9" y="32.7" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="48.5" cy="37.7" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m46 44.9h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m46 30.7h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="46.2" y="45.2" width="5.23" height="2.59" />
            <rect x="46.2" y="27.7" width="5.23" height="2.59" />
            <path
              d="m49.7 30.6c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m47.1 44.9c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358s-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- Arduino Logo -->
        <path
          d="m135 33.7c-0.911 0.472-2.46 1.57-3.14 2.23-0.718 0.699-1.3 1.49-1.5 2.49-0.219 1.13-0.187 2.26 0.207 3.35 0.642 1.77 2.29 3.03 4.09 3.09 1.95 0.0707 3.7-0.982 4.44-2.8 0.851-2.08 0.553-4.05-0.885-5.8-0.885-1.08-2.05-1.84-3.2-2.57m-0.0223-3.06c1.35-0.861 2.68-1.72 3.58-3.06 1.05-1.54 1.24-3.22 0.656-4.98-0.624-1.86-2.27-3.09-4.2-3.15-1.9-0.0583-3.48 1.03-4.28 2.68-0.391 0.808-0.495 1.67-0.505 2.55-0.0149 1.26 0.384 2.36 1.23 3.29 0.998 1.11 2.26 1.87 3.52 2.67m2.43 1.5c0.605 0.49 1.2 0.934 1.76 1.43 1.45 1.29 2.44 2.85 2.78 4.77 0.541 3.09-0.298 5.73-2.83 7.66-3.65 2.79-8.84 1.41-10.8-2.83-1.25-2.77-1.04-6.6 1.76-9.15 0.627-0.572 1.33-1.06 2-1.59 0.114-0.0905 0.239-0.167 0.403-0.28-0.186-0.13-0.336-0.238-0.49-0.341-1.01-0.686-1.96-1.44-2.73-2.41-1.21-1.51-1.72-3.24-1.66-5.17 0.0533-1.62 0.494-3.12 1.48-4.41 1.65-2.17 3.84-3.24 6.57-2.9 2.85 0.345 4.86 1.96 5.85 4.63 1.19 3.17 0.508 6.06-1.76 8.56-0.593 0.653-1.34 1.17-2.01 1.75-0.112 0.0955-0.238 0.174-0.379 0.275"
          fill-rule="nonzero"
        />
        <path d="m137 22.3v4.51h-1.44v-4.51z" />
        <path
          d="m137 37.4v1.34h1.34v1.62h-1.34v1.36h-1.62v-1.34h-1.35v-1.64h1.34v-1.35z"
          fill-rule="nonzero"
        />

        <!-- LEDs -->
        <g stroke-width="1.24">
          <rect x="8.47" y="12.6" width="11.9" height="4.06" fill="#a19e9e" />
          <rect x="8.47" y="50.9" width="11.9" height="4.06" fill="#a19e9e" />

          <!-- LED BUILTIN -->
          <rect x="11.9" y="12.6" width="4.94" height="4.06" fill="#f1d99f" />

          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>

          ${ledBuiltIn &&
                b`<circle cx="14.5" cy="14.5" r="3" fill="red" filter="url(#ledFilter)" />`}

          <!-- LED POWER -->
          <rect x="11.9" y="50.9" width="4.94" height="4.06" fill="#f1d99f" />
          ${ledPower &&
                b`<circle cx="14.5" cy="53" r="3" fill="#80ff80" filter="url(#ledFilter)" />`}

          <!-- LED RGB -->
          <g fill="#ffdc8e">
            <rect x="33.4" y="23.6" width="1.25" height="1.25" />
            <rect x="30.2" y="23.6" width="1.25" height="1.25" />
            <rect x="33.4" y="26.8" width="1.25" height="1.25" />
            <rect x="30.2" y="26.8" width="1.25" height="1.25" />
          </g>
          <rect x="30.8" y="24.1" width="3.4" height="3.4" fill="#cecccb" />

          <circle
            cx="32.4"
            cy="25.4"
            r="3"
            fill="rgb(${ledRed * 255}, ${ledGreen * 255}, ${ledBlue * 255})"
            filter="url(#ledFilter)"
            opacity="${opacity}"
          />

          <path
            d="m122 0.00992v5.57c0 1.9 1.54 3.44 3.44 3.44h1e-3c1.9 0 3.44-1.54 3.44-3.44v-5.57h1.47v9.55h-9.88v-9.55zm0.756 6.78-7e-3 -0.0161c0.459 1.03 1.49 1.75 2.69 1.75h1e-3c0.661 0 1.27-0.218 1.76-0.587-0.491 0.368-1.1 0.587-1.76 0.587h-1e-3c-1.2 0-2.22-0.712-2.69-1.73zm4.55 1.07c-0.0186 0.0161-0.0384 0.031-0.057 0.0459 0.0186-0.0149 0.0384-0.0298 0.057-0.0459zm0.0942-0.0794c-0.0136 0.0112-0.0273 0.0236-0.0397 0.0347l-0.0136 0.0112c0.0174-0.0149 0.036-0.031 0.0533-0.0459zm0.342-0.36c-0.0744 0.0918-0.154 0.18-0.239 0.263 0.0856-0.0831 0.165-0.171 0.239-0.263zm0.098-0.129c-0.0248 0.0347-0.0496 0.0682-0.0756 0.1 0.026-0.0322 0.0508-0.0657 0.0756-0.1zm0.0397-0.057c-9e-3 0.0124-0.0161 0.0248-0.0248 0.036 9e-3 -0.0112 0.0161-0.0236 0.0248-0.036zm0.181-0.301-1e-3 0.00124 1e-3 -0.00124 6e-3 -0.0124zm-5.56-6.93v5.57c0 0.424 0.0893 0.826 0.25 1.19-0.161-0.365-0.25-0.766-0.25-1.19zm5.82 6.24c-5e-3 0.0223-0.01 0.0446-0.0161 0.067 6e-3 -0.0223 0.0112-0.0446 0.0161-0.067zm4e-3 -0.0136 1e-3 -0.00372z"
            fill="#fff"
          />
        </g>
      </svg>
    `;
        }
    };
    __decorate$f([
        e$1()
    ], exports.NanoRP2040ConnectElement.prototype, "ledRed", void 0);
    __decorate$f([
        e$1()
    ], exports.NanoRP2040ConnectElement.prototype, "ledGreen", void 0);
    __decorate$f([
        e$1()
    ], exports.NanoRP2040ConnectElement.prototype, "ledBlue", void 0);
    __decorate$f([
        e$1()
    ], exports.NanoRP2040ConnectElement.prototype, "ledBuiltIn", void 0);
    __decorate$f([
        e$1()
    ], exports.NanoRP2040ConnectElement.prototype, "ledPower", void 0);
    exports.NanoRP2040ConnectElement = __decorate$f([
        n('wokwi-nano-rp2040-connect')
    ], exports.NanoRP2040ConnectElement);

    var __decorate$e = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.SmallSoundSensorElement = class SmallSoundSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.ledPower = false;
            this.ledSignal = false;
            this.pinInfo = [
                { name: 'AOUT', y: 11, x: 0, number: 1, signals: [] },
                { name: 'GND', y: 20.5, x: 0, number: 2, signals: [GND()] },
                { name: 'VCC', y: 30.5, x: 0, number: 3, signals: [VCC()] },
                { name: 'DOUT', y: 40.5, x: 0, number: 4, signals: [] },
            ];
        }
        render() {
            const { ledPower, ledSignal } = this;
            return y`
      <svg
        width="35.211mm"
        height="13.346mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 133 50.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="3.6" width="14" patternUnits="userSpaceOnUse">
            <path
              d="m5.09 1.3c0-0.618-0.502-1.12-1.12-1.12h-3.97v2.6h3.97c0.618 0 1.12-0.502 1.12-1.12z"
              fill="#eaecec"
            />
            <path
              d="m5.09 1.3c0-0.297-0.118-0.582-0.328-0.792-0.211-0.21-0.496-0.328-0.793-0.328h-1.14v2.6h1.14c0.297 0 0.582-0.118 0.793-0.328 0.21-0.21 0.328-0.495 0.328-0.793z"
              fill="#adafb0"
            />
          </pattern>
          <g id="header-pin">
            <path d="m3.4 1.8v-6.55h-6.55v6.55z" fill="#433b38" />
            <path
              d="m0 0c0.382 0 0.748-0.152 1.02-0.422 0.27-0.27 0.421-0.637 0.421-1.02s-0.151-0.748-0.421-1.02c-0.271-0.27-0.637-0.422-1.02-0.422h-26.1c-0.233 0-0.423 0.19-0.423 0.424v2.04c0 0.233 0.19 0.423 0.423 0.423h26.1z"
              fill="#9f9f9f"
            />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m133 8.69v-8.69h-113v50.4h113v-8.69h-10.9c-0.444 0-0.804-0.36-0.804-0.804v-31.5c0-0.444 0.36-0.804 0.804-0.804zm-84.3 8.1c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#931917"
        />

        <!-- Chip  -->
        <rect transform="translate(87,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(74,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />

        <rect x="73.5" y="25.2" width="13.9" height="15.6" fill="#3b3838" />
        <path
          d="m88.7 40.9v3.24h-6.63c0-1.02-0.721-1.85-1.61-1.85s-1.61 0.827-1.61 1.85h-6.62v-3.24"
          fill="none"
          stroke="#fff"
          stroke-width=".4px"
        />
        <path d="m72.2 25.2v-1.74h16.5v1.74" fill="none" stroke="#fff" stroke-width=".4px" />

        <!-- PCB pins -->
        <path d="m31 44.6v-38h-8.39v38z" fill="none" stroke="#fff" stroke-width=".4px" />
        <use xlink:href="#header-pin" x="26.6" y="12.4" />
        <use xlink:href="#header-pin" x="26.6" y="22.1" />
        <use xlink:href="#header-pin" x="26.6" y="31.9" />
        <use xlink:href="#header-pin" x="26.6" y="41.6" />

        <path
          d="m48.8 13.9c6.24 0 11.3 5.07 11.3 11.3 0 6.24-5.07 11.3-11.3 11.3s-11.3-5.07-11.3-11.3c0-6.24 5.07-11.3 11.3-11.3zm0 2.88c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#d6d6d2"
        />
        <rect x="65.3" y="2.76" width="28.2" height="14.2" fill="#4875ce" />
        <path
          d="m94.9 2.1c0-0.221-0.179-0.4-0.4-0.4h-30.1c-0.221 0-0.4 0.179-0.4 0.4v15.5c0 0.221 0.179 0.4 0.4 0.4h30.1c0.221 0 0.4-0.179 0.4-0.4zm-0.4 0h-30.1v15.5h30.1z"
          fill="#fff"
        />
        <circle cx="69.9" cy="6.54" r="2.31" fill="#f1d99f" />
        <path
          d="m69.3 4.34c0.196-0.066 0.405-0.096 0.622-0.096 0.216 0 0.426 0.03 0.622 0.096v4.42c-0.196 0.066-0.406 0.096-0.622 0.096-0.217 0-0.426-0.03-0.622-0.096z"
          fill="#a4987a"
        />

        <!-- LEDs -->
        <rect
          x="50.5"
          y="1.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="2.12" width="3.98" height="3.28" fill="#f1d99f" />

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${ledPower && b`<circle cx="56" cy="4" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <rect
          x="50.5"
          y="44.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="45.1" width="3.98" height="3.28" fill="#f1d99f" />

        ${ledSignal &&
                b`<circle cx="56" cy="47" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- Resistors -->
        <rect
          x="32.3"
          y="1.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="2.52" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="1.92"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="2.64" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="3.05" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="43.9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="44.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="45" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="9.72" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="10.1" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="36.8"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="37.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="38" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="32.3"
          y="44.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="45.5" width="3.97" height="2.47" fill="#171514" />

        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="33.049" y="12.085">AO</tspan>
          <tspan x="33.049" y="41.951">DO</tspan>
          <tspan x="33.049" y="22.067">G</tspan>
          <tspan x="32.964001" y="32.418999" font-size="5.25px">+</tspan>
          <tspan x="52.675778" y="9.31008">PWR</tspan>
          <tspan x="52.675778" y="13.100851">LED</tspan>
          <tspan x="52.675778" y="40">DO</tspan>
          <tspan x="52.675778" y="43.4">LED</tspan>
        </text>

        <path
          d="m110 24.7c0-1.29-1.05-2.34-2.34-2.34h-1e-3c-1.29 0-2.34 1.05-2.34 2.34v0.989c0 1.3 1.05 2.34 2.34 2.34h1e-3c1.29 0 2.34-1.05 2.34-2.34v-0.989z"
          fill="#f8f3e9"
        />
        <circle cx="108" cy="25.2" r="1.14" fill="#3b3838" />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 47.7c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66 0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66 0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m128 45.4c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.513-1.14-1.14 0.512-1.14 1.14-1.14 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 6.29c0.621 0 1.22-0.247 1.66-0.687 0.439-0.439 0.686-1.04 0.686-1.66v-1e-3c0-0.621-0.247-1.22-0.686-1.66-0.44-0.439-1.04-0.686-1.66-0.686h-3.03c-0.621 0-1.22 0.247-1.66 0.686-0.44 0.44-0.687 1.04-0.687 1.66v1e-3c0 0.621 0.247 1.22 0.687 1.66 0.439 0.44 1.04 0.687 1.66 0.687z"
          fill="#f8f3e9"
        />
        <path
          d="m128 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 41.4c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66s-0.247-1.22-0.686-1.66c-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66s0.247 1.22 0.687 1.66c0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#dddcdb"
        />
        <path
          d="m117 9.6c0.621 0 1.22 0.247 1.66 0.686 0.439 0.44 0.686 1.04 0.686 1.66 0 0.621-0.247 1.22-0.686 1.66-0.44 0.44-1.04 0.687-1.66 0.687h-3.03c-0.621 0-1.22-0.247-1.66-0.687-0.44-0.439-0.687-1.04-0.687-1.66 0-0.622 0.247-1.22 0.687-1.66 0.439-0.439 1.04-0.686 1.66-0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 11.9c0-0.631-0.512-1.14-1.14-1.14-0.631 0-1.14 0.513-1.14 1.14s0.512 1.14 1.14 1.14c0.632 0 1.14-0.512 1.14-1.14z"
          fill="#3b3838"
        />
        <circle cx="122" cy="23.7" r="11.3" fill="#d6d6d2" />
        <circle cx="122" cy="23.7" r="10.2" fill="#3b3838" />
        <path
          d="m114 39.1c0 0.631-0.512 1.14-1.14 1.14-0.631 0-1.14-0.513-1.14-1.14s0.512-1.14 1.14-1.14c0.632 0 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
      </svg>
    `;
        }
    };
    __decorate$e([
        e$1()
    ], exports.SmallSoundSensorElement.prototype, "ledPower", void 0);
    __decorate$e([
        e$1()
    ], exports.SmallSoundSensorElement.prototype, "ledSignal", void 0);
    exports.SmallSoundSensorElement = __decorate$e([
        n('wokwi-small-sound-sensor')
    ], exports.SmallSoundSensorElement);

    var __decorate$d = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.BigSoundSensorElement = class BigSoundSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.led1 = false;
            this.led2 = false;
            this.pinInfo = [
                { name: 'AOUT', y: 11, x: 0, number: 1, signals: [] },
                { name: 'GND', y: 20.5, x: 0, number: 2, signals: [GND()] },
                { name: 'VCC', y: 30.5, x: 0, number: 3, signals: [VCC()] },
                { name: 'DOUT', y: 40.5, x: 0, number: 4, signals: [] },
            ];
        }
        render() {
            const { led2, led1 } = this;
            return y`
      <svg
        width="37.056mm"
        height="13.346mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 140 50.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="3.6" width="14" patternUnits="userSpaceOnUse">
            <path
              d="m5.09 1.3c0-0.618-0.502-1.12-1.12-1.12h-3.97v2.6h3.97c0.618 0 1.12-0.502 1.12-1.12z"
              fill="#eaecec"
            />
            <path
              d="m5.09 1.3c0-0.297-0.118-0.582-0.328-0.792-0.211-0.21-0.496-0.328-0.793-0.328h-1.14v2.6h1.14c0.297 0 0.582-0.118 0.793-0.328 0.21-0.21 0.328-0.495 0.328-0.793z"
              fill="#adafb0"
            />
          </pattern>
          <g id="header-pin">
            <path d="m3.4 1.8v-6.55h-6.55v6.55z" fill="#433b38" />
            <path
              d="m0 0c0.382 0 0.748-0.152 1.02-0.422 0.27-0.27 0.421-0.637 0.421-1.02s-0.151-0.748-0.421-1.02c-0.271-0.27-0.637-0.422-1.02-0.422h-26.1c-0.233 0-0.423 0.19-0.423 0.424v2.04c0 0.233 0.19 0.423 0.423 0.423h26.1z"
              fill="#9f9f9f"
            />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m133 0h-113v50.4h113zm-84.3 16.8c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#931917"
        />
        <path
          d="m48.8 13.9c6.24 0 11.3 5.07 11.3 11.3 0 6.24-5.07 11.3-11.3 11.3s-11.3-5.07-11.3-11.3c0-6.24 5.07-11.3 11.3-11.3zm0 2.88c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#d6d6d2"
        />

        <!-- Chip -->
        <rect transform="translate(87,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(74,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="73.5" y="25.2" width="13.9" height="15.6" fill="#3b3838" />
        <path
          d="m88.7 40.9v3.24h-6.63c0-1.02-0.721-1.85-1.61-1.85s-1.61 0.827-1.61 1.85h-6.62v-3.24"
          fill="none"
          stroke="#fff"
          stroke-width=".4px"
        />
        <path d="m72.2 25.2v-1.74h16.5v1.74" fill="none" stroke="#fff" stroke-width=".4px" />

        <!-- PCB pins -->
        <path d="m31 44.6v-38h-8.39v38z" fill="none" stroke="#fff" stroke-width=".4px" />
        <use xlink:href="#header-pin" x="26.6" y="12.4" />
        <use xlink:href="#header-pin" x="26.6" y="22.1" />
        <use xlink:href="#header-pin" x="26.6" y="31.9" />
        <use xlink:href="#header-pin" x="26.6" y="41.6" />

        <!-- Potentiometer -->
        <rect x="65.3" y="2.76" width="28.2" height="14.2" fill="#4875ce" />
        <path
          d="m94.9 2.1c0-0.221-0.179-0.4-0.4-0.4h-30.1c-0.221 0-0.4 0.179-0.4 0.4v15.5c0 0.221 0.179 0.4 0.4 0.4h30.1c0.221 0 0.4-0.179 0.4-0.4zm-0.4 0h-30.1v15.5h30.1z"
          fill="#fff"
        />
        <circle cx="69.9" cy="6.54" r="2.31" fill="#f1d99f" />
        <path
          d="m69.3 4.34c0.196-0.066 0.405-0.096 0.622-0.096 0.216 0 0.426 0.03 0.622 0.096v4.42c-0.196 0.066-0.406 0.096-0.622 0.096-0.217 0-0.426-0.03-0.622-0.096z"
          fill="#a4987a"
        />

        <!-- LED2 -->
        <rect
          x="50.5"
          y="1.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="2.12" width="3.98" height="3.28" fill="#f1d99f" />

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${led2 && b`<circle cx="56" cy="4" r="5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- LED1 -->
        <rect
          x="50.5"
          y="44.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="45.1" width="3.98" height="3.28" fill="#f1d99f" />

        ${led1 && b`<circle cx="56" cy="47" r="5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- Resistors -->
        <rect
          x="32.3"
          y="1.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="2.52" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="1.92"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="2.64" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="3.05" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="43.9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="44.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="45" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="9.72" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="10.1" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="36.8"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="37.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="38" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="32.3"
          y="44.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="45.5" width="3.97" height="2.47" fill="#171514" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="33.049" y="12.085">AO</tspan>
          <tspan x="33.049" y="41.951">DO</tspan>
          <tspan x="33.049" y="22.067">G</tspan>
          <tspan x="32.964001" y="32.418999" font-size="5.25px">+</tspan>
        </text>

        <text
          transform="rotate(90 92.4 -43.2)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.72px"
          x="137.13"
          y="3.60"
        >
          L2
        </text>

        <text
          transform="rotate(90 92.4 -.394)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.72px"
          x="137.13"
          y="46.38"
        >
          L1
        </text>

        <!-- Microphone -->
        <path
          d="m110 24.7c0-1.29-1.05-2.34-2.34-2.34h-1e-3c-1.29 0-2.34 1.05-2.34 2.34v0.989c0 1.3 1.05 2.34 2.34 2.34h1e-3c1.29 0 2.34-1.05 2.34-2.34v-0.989z"
          fill="#f8f3e9"
        />
        <circle cx="108" cy="25.2" r="1.14" fill="#3b3838" />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m118 27.8c0-0.622-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66v3.03c0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686 0.622 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66z"
          fill="#f8f3e9"
        />
        <circle cx="115" cy="29.3" r="1.14" fill="#3b3838" />
        <path
          d="m129 47.7c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66 0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66 0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m128 45.4c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.513-1.14-1.14 0.512-1.14 1.14-1.14 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 6.29c0.621 0 1.22-0.247 1.66-0.687 0.439-0.439 0.686-1.04 0.686-1.66v-1e-3c0-0.621-0.247-1.22-0.686-1.66-0.44-0.439-1.04-0.686-1.66-0.686h-3.03c-0.621 0-1.22 0.247-1.66 0.686-0.44 0.44-0.687 1.04-0.687 1.66v1e-3c0 0.621 0.247 1.22 0.687 1.66 0.439 0.44 1.04 0.687 1.66 0.687z"
          fill="#f8f3e9"
        />
        <path
          d="m128 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 41.4c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66s-0.247-1.22-0.686-1.66c-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66s0.247 1.22 0.687 1.66c0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 39.1c0 0.631-0.512 1.14-1.14 1.14-0.631 0-1.14-0.513-1.14-1.14s0.512-1.14 1.14-1.14c0.632 0 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 9.6c0.621 0 1.22 0.247 1.66 0.686 0.439 0.44 0.686 1.04 0.686 1.66 0 0.621-0.247 1.22-0.686 1.66-0.44 0.44-1.04 0.687-1.66 0.687h-3.03c-0.621 0-1.22-0.247-1.66-0.687-0.44-0.439-0.687-1.04-0.687-1.66 0-0.622 0.247-1.22 0.687-1.66 0.439-0.439 1.04-0.686 1.66-0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 11.9c0-0.631-0.512-1.14-1.14-1.14-0.631 0-1.14 0.513-1.14 1.14s0.512 1.14 1.14 1.14c0.632 0 1.14-0.512 1.14-1.14z"
          fill="#3b3838"
        />
        <path
          d="m118 19.2c0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66v3.03c0 0.621 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686 0.622 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66z"
          fill="#f8f3e9"
        />
        <circle cx="115" cy="20.7" r="1.14" fill="#3b3838" />
        <path
          d="m139 9.6h-16.2c-0.391 0-0.766 0.155-1.04 0.431-0.277 0.277-0.432 0.652-0.432 1.04v28.8c0 0.391 0.155 0.766 0.432 1.04 0.276 0.277 0.651 0.432 1.04 0.432h16.2z"
          fill="#e1e0da"
        />
        <rect x="139" y="9.6" width="1.55" height="31.8" fill="#3b3838" />
        <path
          d="m121 29.3 17.7-3.26v-16.5h-16.2c-0.391 0-0.766 0.155-1.04 0.431-0.277 0.277-0.432 0.652-0.432 1.04z"
          fill="#f3f0f4"
        />
        <path
          d="m121 28.5h-4.93c-0.21 0-0.411 0.083-0.56 0.232-0.148 0.148-0.231 0.349-0.231 0.559v0.022c0 0.21 0.083 0.411 0.231 0.559 0.149 0.149 0.35 0.232 0.56 0.232h4.93z"
          fill="#afafaf"
        />
        <path
          d="m121 20h-4.93c-0.21 0-0.411 0.084-0.56 0.232-0.148 0.148-0.231 0.35-0.231 0.559v0.022c0 0.21 0.083 0.411 0.231 0.559 0.149 0.149 0.35 0.232 0.56 0.232h4.93z"
          fill="#afafaf"
        />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
      </svg>
    `;
        }
    };
    __decorate$d([
        e$1()
    ], exports.BigSoundSensorElement.prototype, "led1", void 0);
    __decorate$d([
        e$1()
    ], exports.BigSoundSensorElement.prototype, "led2", void 0);
    exports.BigSoundSensorElement = __decorate$d([
        n('wokwi-big-sound-sensor')
    ], exports.BigSoundSensorElement);

    var __decorate$c = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.MPU6050Element = class MPU6050Element extends n$1 {
        constructor() {
            super(...arguments);
            this.led1 = false;
            this.pinInfo = [
                { name: 'INT', x: 7.28, y: 5.78, signals: [] },
                { name: 'AD0', x: 16.9, y: 5.78, signals: [] },
                { name: 'XCL', x: 26.4, y: 5.78, signals: [] },
                { name: 'XDA', x: 36.0, y: 5.78, signals: [] },
                { name: 'SDA', x: 45.6, y: 5.78, signals: [i2c('SDA')] },
                { name: 'SCL', x: 55.2, y: 5.78, signals: [i2c('SCL')] },
                { name: 'GND', x: 64.8, y: 5.78, signals: [GND()] },
                { name: 'VCC', x: 74.4, y: 5.78, signals: [VCC()] },
            ];
        }
        render() {
            const { led1 } = this;
            return y`
      <svg
        width="21.6mm"
        height="16.2mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 81.6 61.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2.1" width="14" patternUnits="userSpaceOnUse">
            <path
              d=" m2.09 1.32c0.124 0 0.243-0.049 0.331-0.137 0.086-0.086 0.137-0.206 0.137-0.33v-0.387c0-0.124-0.050-0.242-0.137-0.33-0.087-0.087-0.207-0.137-0.331-0.137h-1.62v1.32z"
              fill="#f5f9f0"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m81.6 0h-81.6v61.2h81.6zm-10 44.9c3.8 0 6.88 3.08 6.88 6.88 0 3.8-3.08 6.89-6.88 6.89-3.8 0-6.89-3.09-6.89-6.89 0-3.8 3.09-6.88 6.89-6.88zm-61.6 0c3.8 0 6.89 3.08 6.89 6.88 0 3.8-3.09 6.89-6.89 6.89-3.8 0-6.88-3.09-6.88-6.89 0-3.8 3.08-6.88 6.88-6.88zm-2.74-41.9c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8-2.8-1.26-2.8-2.8 1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm-9.58 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8-2.81-1.26-2.81-2.8 1.26-2.81 2.81-2.81zm-9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81z"
          fill="#16619d"
        />

        <!-- Right Chip -->
        <g fill="#fefdf4">
          <rect x="74.5" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="33" width="2.01" height="4.81" />
          <rect x="71.2" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="23.1" width="2.01" height="4.81" />
          <rect x="74.5" y="33" width="2.01" height="4.81" />
        </g>
        <g fill="#31322e">
          <rect x="74.5" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="33" width="2.01" height="2.4" />
          <rect x="71.2" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="25.5" width="2.01" height="2.4" />
          <rect x="74.5" y="33" width="2.01" height="2.4" />
        </g>

        <!-- Resistors -->
        <g fill="#e5e5e5">
          <rect x="12" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="21.3" width="3.83" height="9.3" />
          <rect x="56.5" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="35.6" width="3.83" height="9.3" />
          <rect x="23.3" y="21.3" width="3.83" height="9.3" />
          <rect x="62.2" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="35.8" width="3.83" height="9.3" />
          <rect x="56.9" y="35.8" width="3.83" height="9.3" />
        </g>
        <path d="m76 42.6v-3.13h-7.59v3.13z" fill="#fefdf4" />
        <rect x="23.1" y="35.6" width="3.83" height="9.3" fill="#e5e5e5" />

        <g fill="#26232b">
          <rect x="17.7" y="23.4" width="3.83" height="5.31" />
          <rect x="56.5" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="23.4" width="3.83" height="5.31" />
          <rect x="17.7" y="37.7" width="3.83" height="5.31" />
        </g>
        <g fill="#d8c18d">
          <rect x="23.3" y="23.4" width="3.83" height="5.31" />
          <rect x="62.2" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="37.8" width="3.83" height="5.31" />
          <rect x="56.9" y="37.8" width="3.83" height="5.31" />
          <path d="m74.3 42.6v-3.13h-4.33v3.13z" />
        </g>
        <g>
          <rect x="23.1" y="37.7" width="3.83" height="5.31" fill="#a06352" />
          <rect x="31.8" y="47.1" width="15.6" height="6.03" fill="#f3c338" />
          <rect x="67.3" y="27.9" width="9.76" height="5.28" fill="#010303" />
        </g>

        <!-- MPU6050 Chip -->
        <rect transform="translate(47,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(32.3,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(46.5,40.7) rotate(90)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(32.3,26) rotate(270)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="31.8" y="25.4" width="15.6" height="15.6" />

        <!-- LED -->
        <rect x="12" y="23.4" width="3.83" height="5.31" fill="#f5ecde" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${led1 &&
                b`<circle cx="13.9" cy="25.5" r="3.5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- PCB Pins-->
        <g fill="none" stroke="#d0ae88" stroke-width=".648px">
          <circle cx="64.8" cy="5.78" r="2.81" />
          <circle cx="55.2" cy="5.78" r="2.81" />
          <circle cx="45.6" cy="5.78" r="2.81" />
          <circle cx="36" cy="5.78" r="2.81" />
          <circle cx="26.4" cy="5.78" r="2.81" />
          <circle cx="16.9" cy="5.78" r="2.81" />
          <circle cx="7.28" cy="5.78" r="2.81" />
          <circle cx="74.4" cy="5.78" r="2.81" />
        </g>

        <!-- Text -->
        <text
          transform="rotate(90)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.6px"
          x="10.056"
        >
          <tspan x="10.056" y="-6">INT</tspan>
          <tspan x="10.056" y="-15.5">AD0</tspan>
          <tspan x="10.056" y="-25.157">XCL</tspan>
          <tspan x="10.056" y="-34.5">XDA</tspan>
          <tspan x="10.056" y="-44.38">SDA</tspan>
          <tspan x="9.911" y="-54">SCL</tspan>
          <tspan x="10.057" y="-63.54">GND</tspan>
          <tspan x="10.057" y="-73">VCC</tspan>
        </text>
      </svg>
    `;
        }
    };
    __decorate$c([
        e$1()
    ], exports.MPU6050Element.prototype, "led1", void 0);
    exports.MPU6050Element = __decorate$c([
        n('wokwi-mpu6050')
    ], exports.MPU6050Element);

    var __decorate$b = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.ESP32DevkitV1Element = class ESP32DevkitV1Element extends n$1 {
        constructor() {
            super(...arguments);
            this.led1 = false;
            this.ledPower = false;
            this.pinInfo = [
                { name: 'VIN', x: 5, y: 158.5, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'GND.2', x: 5, y: 149, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'D13', x: 5, y: 139.5, signals: [spi('MOSI', 0), { type: 'pwm' }] },
                { name: 'D12', x: 5, y: 130.4, signals: [spi('MISO', 0), { type: 'pwm' }] },
                { name: 'D14', x: 5, y: 120, signals: [spi('SCK', 0), { type: 'pwm' }] },
                { name: 'D27', x: 5, y: 110.8, signals: [{ type: 'pwm' }] },
                { name: 'D26', x: 5, y: 101, signals: [{ type: 'pwm' }] },
                { name: 'D25', x: 5, y: 91.3, signals: [{ type: 'pwm' }] },
                { name: 'D33', x: 5, y: 81.7, signals: [{ type: 'pwm' }] },
                { name: 'D32', x: 5, y: 72.2, signals: [{ type: 'pwm' }] },
                { name: 'D35', x: 5, y: 62.9, signals: [] },
                { name: 'D34', x: 5, y: 53.1, signals: [] },
                { name: 'VN', x: 5, y: 44, signals: [] },
                { name: 'VP', x: 5, y: 34, signals: [] },
                { name: 'EN', x: 5, y: 24, signals: [] },
                { name: '3V3', x: 101.3, y: 158.5, signals: [{ type: 'power', signal: 'VCC', voltage: 3.3 }] },
                { name: 'GND.1', x: 101.3, y: 149, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'D15', x: 101.3, y: 139.5, signals: [spi('SS', 0), { type: 'pwm' }] },
                { name: 'D2', x: 101.3, y: 130.4, signals: [{ type: 'pwm' }] },
                { name: 'D4', x: 101.3, y: 120, signals: [{ type: 'pwm' }] },
                { name: 'RX2', x: 101.3, y: 110.8, signals: [usart('RX', 2), { type: 'pwm' }] },
                { name: 'TX2', x: 101.3, y: 101, signals: [usart('TX', 2), { type: 'pwm' }] },
                { name: 'D5', x: 101.3, y: 91.3, signals: [spi('SS', 1), { type: 'pwm' }] },
                { name: 'D18', x: 101.3, y: 81.7, signals: [spi('SCK', 1), { type: 'pwm' }] },
                { name: 'D19', x: 101.3, y: 72.2, signals: [spi('MISO', 1), { type: 'pwm' }] },
                { name: 'D21', x: 101.3, y: 62.9, signals: [i2c('SDA'), { type: 'pwm' }] },
                { name: 'RX0', x: 101.3, y: 53.1, signals: [usart('RX', 0), { type: 'pwm' }] },
                { name: 'TX0', x: 101.3, y: 44, signals: [usart('TX', 0), { type: 'pwm' }] },
                { name: 'D22', x: 101.3, y: 34, signals: [i2c('SCL'), { type: 'pwm' }] },
                { name: 'D23', x: 101.3, y: 24, signals: [spi('MOSI', 1), { type: 'pwm' }] },
            ];
        }
        render() {
            const { ledPower, led1 } = this;
            return y`
      <svg
        width="28.2mm"
        height="54.053mm"
        version="1.1"
        viewBox="0 0 107 201"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="4.6" width="5" patternUnits="userSpaceOnUse">
            <path
              d="m3.5 2.85c0.268 1.82e-4 0.525-0.106 0.716-0.296 0.187-0.19 0.296-0.445 0.297-0.713l5.7e-4 -0.836c1.82e-4 -0.268-0.109-0.525-0.296-0.716-0.19-0.19-0.447-0.296-0.715-0.297l-3.5-0.0024-0.0019 2.85z"
              fill="#d1c479"
              stroke-width="3.11"
            />
          </pattern>
          <pattern id="small-pin-pattern" height="4.6" width="2.5" patternUnits="userSpaceOnUse">
            <path
              d="m1.4 1.32c0-0.138-0.0547-0.271-0.153-0.37-0.098-0.0965-0.23-0.153-0.368-0.153h-0.432c-0.138 0-0.271 0.0563-0.37 0.153-0.098 0.098-0.153 0.231-0.153 0.37v1.81h1.47z"
              fill="#f5f9f0"
              stroke-width="1.61"
            />
          </pattern>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <!-- Board -->
        <path
          d="m7.56 0c-4.19 0-7.56 3.37-7.56 7.56v181c0 4.19 3.37 7.56 7.56 7.56h91.5c4.19 0 7.56-3.37 7.56-7.56v-181c0-4.19-3.37-7.56-7.56-7.56zm1.11 2.5a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.9 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm3.75 15.8a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 0.438a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.15a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.8 0.344a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.27a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.24a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0.0762 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 0.0371a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.422a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.115a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.4 9.54a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.346a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm3.79 24.7a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.7 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- ESP32 Chip -->
        <rect transform="translate(85,34)" width="4.8" height="55" fill="url(#pin-pattern)"></rect>
        <rect
          transform="translate(20.5,87) rotate(180)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect
          transform="translate(80,98) rotate(90)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect x="20" y="24.8" width="65.6" height="73.3" fill="#808080" fill-rule="evenodd" />

        <!-- Regulator -->
        <g fill="#ececec" fill-rule="evenodd">
          <rect x="19.3" y="143" width="7.21" height="11.5" />
          <rect x="39.8" y="139" width="6.59" height="3.07" />
          <rect x="40" y="147" width="6.59" height="3.07" />
          <rect x="40.2" y="156" width="6.59" height="3.07" />
        </g>
        <rect x="26.3" y="137" width="14" height="24.7" fill="#4d4d4d" fill-rule="evenodd" />

        <!-- Buttons -->
        <g stroke-width="1.24">
          <rect x="77.6" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="83.2" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m80.7 190h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m80.7 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="81" y="190" width="5.23" height="2.59" />
            <rect x="81" y="173" width="5.23" height="2.59" />
            <path
              d="m84.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m81.8 190c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>
        <g stroke-width="1.24">
          <rect x="17.7" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="23.3" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m20.8 189h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m20.8 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="21" y="189" width="5.23" height="2.59" />
            <rect x="21" y="172" width="5.23" height="2.59" />
            <path
              d="m24.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m21.9 189c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- USB Connection -->
        <path
          d="m66.4 197 1.06 2.24c0.0651 0.142 0.0731 0.302 0.0207 0.448-0.0525 0.147-0.16 0.266-0.301 0.332-0.14 0.0665-0.302 0.0744-0.448 0.022-0.146-0.0525-0.266-0.16-0.332-0.301l-0.724-1.54-3e-3 0.207c-6e-3 0.488-0.206 0.955-0.556 1.3-0.35 0.342-0.821 0.529-1.31 0.522l-22.2-0.29c-0.489-6e-3 -0.955-0.206-1.3-0.556-0.341-0.35-0.529-0.821-0.522-1.31l3e-3 -0.207-0.764 1.52c-0.0701 0.14-0.192 0.244-0.34 0.292-0.147 0.0486-0.307 0.0365-0.446-0.0336l-1e-3 -1e-5c-0.138-0.0701-0.244-0.192-0.292-0.34-0.0486-0.147-0.0365-0.307 0.0336-0.447l1.11-2.21-0.602-8e-3 0.269-20.6 28.2 0.369-0.269 20.6z"
          fill="#cecccb"
          stroke-width="1.26"
        />
        <path
          d="m60.7 177-0.0236 1.8c-7.9e-4 0.0607 0.0301 0.116 0.0802 0.148 0.522 0.329 3.38 2.12 3.38 2.12l-0.0217 1.66-1.74-0.0227-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.66-0.0217 0.0413-3.16c2e-3 -0.136-0.0496-0.265-0.143-0.361-0.0948-0.096-0.223-0.151-0.357-0.152l-1.58-0.0207-0.0172 1.31-6.46-0.0845 0.0172-1.31-1.58-0.0207c-0.134-2e-3 -0.264 0.0496-0.36 0.143-0.0973 0.0936-0.152 0.221-0.154 0.357l-0.0413 3.16-1.66-0.0217-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.74-0.0228 0.0217-1.66s2.91-1.73 3.43-2.03c0.0522-0.0309 0.0833-0.0848 0.0841-0.146l0.0236-1.8z"
          fill="#989898"
          stroke-width="1.26"
        />

        <!-- LEDs -->
        <g stroke-width="1.44">
          <rect x="35" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="35" y="111" width="3.83" height="5.31" fill="#f5ecde" />
          ${ledPower &&
                b`<circle cx="37" cy="112.5" r="4" fill="red" filter="url(#ledFilter)" />`}

          <rect x="69.5" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="69.5" y="110" width="3.83" height="5.31" fill="#f5ecde" />
          ${led1 && b`<circle cx="71.5" cy="112.5" r="4" fill="blue" filter="url(#ledFilter)" />`}
        </g>

        <!-- Small Chip-->
        <rect
          transform="translate(69,137)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(82.8,160.5) rotate(180)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(87.2,142) rotate(90)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(64,155.8) rotate(270)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect x="66.9" y="140" width="17.4" height="17.4" fill="#333" stroke-width="1.61" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px" transform="rotate(270)">
          <tspan x="-162.21" y="12.285">VIN</tspan>
          <tspan x="-153.37" y="12.317">GND</tspan>
          <tspan x="-143.03" y="12.269">D13</tspan>
          <tspan x="-132.81" y="12.130">D12</tspan>
          <tspan x="-123.10" y="12.514">D14</tspan>
          <tspan x="-113.82" y="12.481">D27</tspan>
          <tspan x="-103.55" y="12.580">D26</tspan>
          <tspan x="-94.204" y="12.509">D25</tspan>
          <tspan x="-84.482" y="12.632">D33</tspan>
          <tspan x="-74.139" y="12.294">D32</tspan>
          <tspan x="-64.263" y="12.750">D35</tspan>
          <tspan x="-54.385" y="12.631">D34</tspan>
          <tspan x="-44.529" y="12.468">VN</tspan>
          <tspan x="-35.205" y="12.546">VP</tspan>
          <tspan x="-25.439" y="12.846">EN</tspan>
          <tspan x="-163.01" y="95.712">3V3</tspan>
          <tspan x="-153.64" y="95.392">GND</tspan>
          <tspan x="-142.86" y="95.431">D15</tspan>
          <tspan x="-131.36" y="95.296">D2</tspan>
          <tspan x="-122.53" y="95.505">D4</tspan>
          <tspan x="-114.75" y="95.613">RX2</tspan>
          <tspan x="-104.84" y="95.442">TX2</tspan>
          <tspan x="-93.899" y="95.430">D5</tspan>
          <tspan x="-85.460" y="95.585">D18</tspan>
          <tspan x="-75.415" y="95.747">D19</tspan>
          <tspan x="-65.796" y="95.687">D21</tspan>
          <tspan x="-55.802" y="95.818">RX0</tspan>
          <tspan x="-45.850" y="95.613">TX0</tspan>
          <tspan x="-36.582" y="96.012">D22</tspan>
          <tspan x="-26.250" y="95.903">D23</tspan>
        </text>
        <text x="30" y="59" fill="#cecccb" font-family="sans-serif" font-size="15px">ESP32</text>

        <!-- Antenna -->
        <path
          d="m24.3 22.1v-18.8h8v11.5h10.2v-11h8.5v10.5h10v-10.5h17.8v20.2"
          fill="none"
          stroke="#4f4c48"
          stroke-width="1px"
        />
        <path d="m69.7 4.16v19.5" fill="none" stroke="#4f4c48" stroke-width="1px" />
      </svg>
    `;
        }
    };
    __decorate$b([
        e$1()
    ], exports.ESP32DevkitV1Element.prototype, "led1", void 0);
    __decorate$b([
        e$1()
    ], exports.ESP32DevkitV1Element.prototype, "ledPower", void 0);
    exports.ESP32DevkitV1Element = __decorate$b([
        n('wokwi-esp32-devkit-v1')
    ], exports.ESP32DevkitV1Element);

    var __decorate$a = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.KY040Element = class KY040Element extends n$1 {
        constructor() {
            super(...arguments);
            this.angle = 0;
            this.stepSize = 18;
            this.pressed = false;
            this.arrowTimer = null;
            this.pinInfo = [
                { name: 'CLK', y: 7.9, x: 116, number: 1, signals: [] },
                { name: 'DT', y: 17.4, x: 116, number: 2, signals: [] },
                { name: 'SW', y: 27, x: 116, number: 3, signals: [] },
                { name: 'VCC', y: 36.3, x: 116, number: 4, signals: [VCC()] },
                { name: 'GND', y: 45.5, x: 116, number: 5, signals: [GND()] },
            ];
        }
        static get styles() {
            return r$3`
      svg {
        user-select: none;
      }

      .arrow-container {
        cursor: pointer;
      }

      svg:hover .arrow {
        fill: #666;
        stroke: #666;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .arrow-container:hover .arrow {
        fill: white;
      }

      svg:hover .handle:hover {
        stroke: #ccc;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      svg:hover .handle.active {
        fill: white;
        stroke: white;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .handle {
        cursor: pointer;
      }

      g[tabindex]:focus {
        outline: none;
      }

      g[tabindex]:focus + .focus-indicator {
        opacity: 1;
      }
    `;
        }
        render() {
            return y`
      <svg
        width="30.815mm"
        height="18.63mm"
        version="1.1"
        viewBox="0 0 116 70.4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x1="158"
            x2="170"
            y1="86.5"
            y2="86.5"
            gradientTransform="translate(-75.1 -60.1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4d4d4d" offset="0" />
            <stop stop-color="#4d4d4d" stop-opacity="0" offset="1" />
          </linearGradient>
        </defs>

        <!-- Board -->
        <path
          d="m0 0v70.4h99v-70.4zm18 56.5a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5zm63.8 0.213a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- Rotator -->
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="9.05" y="17.4" width="6.95" height="2.47" rx=".756" />
          <rect x="9.15" y="26.5" width="6.95" height="2.47" rx=".756" />
          <rect x="9.05" y="36.1" width="6.95" height="2.47" rx=".756" />
        </g>

        <g tabindex="0" @keydown=${this.keydown} @keyup=${this.keyup}>
          <rect x="12.2" y="8.05" width="48.4" height="41" rx="7.12" fill="#e6e6e6" />

          <circle cx="36.6" cy="28.5" r="13.5" fill="#666" />
          <rect x="32.5" y="7.87" width="7.42" height="41.5" fill="#666" />

          <!-- Handle -->
          <path
            transform="rotate(${this.angle}, 36.244, 28.5)"
            d="m36.3 21.4a7.03 7.14 0 0
              0-3.74 1.1v12.1a7.03 7.14 0 0 0 3.74 1.1 7.03 7.14 0 0 0 7.03-7.14 7.03 7.14 0 0
              0-7.03-7.14z"
            fill="#ccc"
            stroke="#060606"
            stroke-width=".3"
            class="handle ${this.pressed ? 'active' : ''}"
            @mousedown=${this.press}
            @mouseup=${this.release}
            @mouseleave=${this.release}
          />

          <!-- Counter Clockwise Arrow -->
          <g
            class="arrow-container"
            @click=${this.counterClockwiseStep}
            @mousedown=${this.counterclockwiseArrowPress}
            @mouseup=${this.arrowRelease}
            @mouseleave=${this.arrowRelease}
          >
            <circle cx="20" cy="43" r="12" fill="red" opacity="0" />
            <path
              d="m21 44.5c-5.17-1.78-7.55-5.53-6.6-11.2 0.0662-0.327 0.107-0.938 0.272-1.06 0.204-0.137 0.312-0.116 0.39-0.1 0.0775 0.0152 0.139 0.0274 0.189 0.102 0.846 3.81 3.13 6.84 6.57 7.59 0.304-0.787 0.461-3.32 0.826-3.24 0.428 0.0848 4.31 5.73 4.93 6.65-0.978 0.839-6.07 4.44-6.95 4.28 0 0 0.206-2.19 0.362-2.96z"
              fill="#b3b3b3"
              stroke="#000"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>

          <!-- Clockwise Arrow -->
          <g
            class="arrow-container"
            @click=${this.clockwiseStep}
            @mousedown=${this.clockwiseArrowPress}
            @mouseup=${this.arrowRelease}
            @mouseleave=${this.arrowRelease}
          >
            <circle cx="20" cy="15" r="12" fill="red" opacity="0" />
            <path
              d="m21.2 12.1c-5.17 1.78-7.55 5.53-6.6 11.2 0.0662 0.327 0.107 0.938 0.272 1.06 0.204 0.137 0.312 0.116 0.39 0.1 0.0775-0.0152 0.139-0.0274 0.189-0.102 0.846-3.81 3.13-6.84 6.57-7.59 0.304 0.787 0.461 3.32 0.826 3.24 0.428-0.0848 4.31-5.73 4.93-6.65-0.978-0.839-6.07-4.44-6.95-4.28 0 0 0.206 2.19 0.362 2.96z"
              fill="#b3b3b3"
              stroke="#022"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>
        </g>

        <!-- Focus indicator for the group above-->
        <rect
          class="focus-indicator"
          x="10.2"
          y="6.05"
          width="52.4"
          height="45"
          rx="7.12"
          stroke="white"
          stroke-width="2"
          fill="none"
          opacity="0"
        />

        <!-- Chip Pins -->
        <rect
          x="83"
          y="1.72"
          width="10.9"
          height="49.2"
          fill="url(#a)"
          fill-rule="evenodd"
          opacity=".65"
          stroke="#fff"
          stroke-width="1.16"
        />
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="86.9" y="6.54" width="28.9" height="2.47" rx=".877" />
          <rect x="86.8" y="15.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="25.6" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="34.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.6" y="44.1" width="28.9" height="2.47" rx=".877" />
        </g>
        <g fill="#ffffff" font-family="sans-serif" letter-spacing="0px" word-spacing="0px">
          <text x="65.55" y="12.13" font-size="7.29px" fill="#ffffff" stroke-width=".182">CLK</text>
          <text x="65.02" y="21.93" font-size="7.44px" fill="#ffffff">DT</text>
          <text x="65.29" y="31.26" font-size="7.54px" fill="#ffffff">SW</text>
          <text x="70.42" y="39.99" font-size="6.82px" fill="#ffffff">+</text>
          <text x="64.31" y="49.74" font-size="7.59px" fill="#ffffff">GND</text>
        </g>
      </svg>
    `;
        }
        clockwiseStep() {
            this.angle = (this.angle + this.stepSize) % 360;
            this.dispatchEvent(new InputEvent('rotate-cw'));
        }
        counterClockwiseStep() {
            this.angle = (this.angle - this.stepSize + 360) % 360;
            this.dispatchEvent(new InputEvent('rotate-ccw'));
        }
        press() {
            if (!this.pressed) {
                this.dispatchEvent(new InputEvent('button-press'));
                this.pressed = true;
            }
        }
        release() {
            if (this.pressed) {
                this.dispatchEvent(new InputEvent('button-release'));
                this.pressed = false;
            }
        }
        counterclockwiseArrowPress() {
            this.arrowTimer = setInterval(() => {
                this.counterClockwiseStep();
            }, 300);
        }
        clockwiseArrowPress() {
            this.arrowTimer = setInterval(() => {
                this.clockwiseStep();
            }, 300);
        }
        arrowRelease() {
            if (this.arrowTimer != null) {
                clearInterval(this.arrowTimer);
                this.arrowTimer = null;
            }
        }
        keydown(e) {
            switch (e.key) {
                case 'ArrowUp':
                case 'ArrowRight':
                    this.clockwiseStep();
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                case 'ArrowLeft':
                    this.counterClockwiseStep();
                    e.preventDefault();
                    break;
                case ' ':
                    this.press();
                    e.preventDefault();
                    break;
            }
        }
        keyup(e) {
            switch (e.key) {
                case ' ':
                    e.preventDefault();
                    this.release();
                    break;
            }
        }
    };
    __decorate$a([
        e$1()
    ], exports.KY040Element.prototype, "angle", void 0);
    __decorate$a([
        e$1()
    ], exports.KY040Element.prototype, "stepSize", void 0);
    __decorate$a([
        e$1()
    ], exports.KY040Element.prototype, "pressed", void 0);
    exports.KY040Element = __decorate$a([
        n('wokwi-ky-040')
    ], exports.KY040Element);

    var __decorate$9 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.PhotoresistorSensorElement = class PhotoresistorSensorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.ledDO = false;
            this.ledPower = false;
            this.pinInfo = [
                { name: 'VCC', x: 172, y: 16, signals: [VCC()] },
                { name: 'GND', x: 172, y: 26, signals: [GND()] },
                { name: 'DO', x: 172, y: 35.8, signals: [] },
                { name: 'AO', x: 172, y: 45.5, signals: [analog(0)] },
            ];
        }
        render() {
            const { ledPower, ledDO } = this;
            return y`
      <svg
        width="45.95mm"
        height="16.267mm"
        version="1.1"
        viewBox="0 0 174 61.5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- board -->
        <path
          d="m153 0h-136v61.5h136zm-129 52c1.9 0 3.44 1.5 3.44 3.34s-1.54 3.34-3.44 3.34-3.44-1.5-3.44-3.34 1.54-3.34 3.44-3.34zm98.3-29.8c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55zm-98.3-19.4c1.9 0 3.44 1.5 3.44 3.34 0 1.84-1.54 3.34-3.44 3.34s-3.44-1.5-3.44-3.34c0-1.84 1.54-3.34 3.44-3.34z"
          fill="#1c2546"
        />

        <!--Photo sensor-->
        <rect
          x="18.9"
          y="20.1"
          width="11.2"
          height="22.2"
          fill="none"
          stroke="#fff"
          stroke-width="1.08px"
        />
        <circle cx="24.5" cy="25.6" r="3.14" fill="#dae3eb" />
        <circle cx="24.5" cy="36.8" r="3.14" fill="#dae3eb" />
        <path
          d="m24.5 25.7c0-0.199-0.079-0.39-0.22-0.53-0.14-0.141-0.331-0.22-0.529-0.22h-23c-0.199 0-0.389 0.079-0.53 0.22-0.14 0.14-0.219 0.331-0.219 0.53 0 0.198 0.079 0.389 0.219 0.53 0.141 0.14 0.331 0.219 0.53 0.219h23c0.198 0 0.389-0.079 0.529-0.219 0.141-0.141 0.22-0.332 0.22-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m24.5 36.7c0-0.198-0.079-0.389-0.22-0.53-0.14-0.14-0.331-0.219-0.529-0.219h-23c-0.199 0-0.389 0.079-0.53 0.219-0.14 0.141-0.219 0.332-0.219 0.53 0 0.199 0.079 0.39 0.219 0.53 0.141 0.141 0.331 0.22 0.53 0.22h23c0.198 0 0.389-0.079 0.529-0.22 0.141-0.14 0.22-0.331 0.22-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m8.64 22.8c0-0.375-0.304-0.679-0.679-0.679h-6.14c-0.375 0-0.679 0.304-0.679 0.679v16.8c0 0.375 0.304 0.679 0.679 0.679h6.14c0.375 0 0.679-0.304 0.679-0.679v-16.8z"
          fill="#cc4247"
        />
        <clipPath>
          <path
            d="m27.9 29c0-0.375-0.304-0.679-0.679-0.679h-6.14c-0.375 0-0.679 0.304-0.679 0.679v16.8c0 0.375 0.304 0.679 0.679 0.679h6.14c0.375 0 0.679-0.304 0.679-0.679v-16.8z"
          />
        </clipPath>

        <!-- Holes -->
        <g fill="none" stroke-width="1.08px">
          <ellipse cx="24.5" cy="6.11" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <ellipse cx="24.5" cy="55.4" rx="3.43" ry="3.34" stroke="#a8b6ba" />

          <!-- +/- -->
          <g stroke="#fff">
            <path d="m24 44.7v4.75" />
            <path d="m24 12.1v4.75" />
            <path d="m26.4 14.5h-4.75" />
          </g>
        </g>

        <!-- Resistors -->
        <g fill="#dae3eb">
          <rect x="37.7" y="8.69" width="16.7" height="5.52" />
          <rect x="37.7" y="22" width="16.7" height="5.52" />
          <rect x="37.7" y="34.5" width="16.7" height="5.52" />
        </g>
        <rect x="41.9" y="34.3" width="8.43" height="5.9" fill="#29261c" />
        <path d="m108 21.2v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m108 17v-8.43h-5.9v8.43z" fill="#29261c" />
        <path d="m108 53.8v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m108 49.7v-8.43h-5.9v8.43z" fill="#29261c" />
        <rect x="37.7" y="47.5" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="41.9" y="8.5" width="8.43" height="5.9" fill="#907463" />
        <rect x="41.9" y="21.8" width="8.43" height="5.9" fill="#907463" />
        <rect x="41.9" y="47.3" width="8.43" height="5.9" fill="#29261c" />

        <!-- LEDs -->
        <rect x="118" y="4.77" width="13" height="4.29" fill="#dae3eb" />
        <rect x="121" y="4.62" width="6.55" height="4.59" fill="#fffefe" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${ledPower && b`<circle cx="124.5" cy="7" r="4" fill="green" filter="url(#ledFilter)" />`}

        <rect x="118" y="52.6" width="13" height="4.29" fill="#dae3eb" />
        <rect x="121" y="52.5" width="6.55" height="4.59" fill="#fffefe" />
        ${ledDO && b`<circle cx="124.5" cy="55" r="4" fill="red" filter="url(#ledFilter)" />`}

        <!-- Chip -->
        <g fill="#dae3eb">
          <path
            d="m72.7 34.6h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m72.7 40.4h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m72.7 46.2h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.288 0.677 0.449 1.08 0.449h9.67z"
          />
          <path
            d="m72.7 52h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.288 0.677 0.449 1.08 0.449h9.67z"
          />
          <path
            d="m84.4 55.1h9.67c0.406 0 0.796-0.161 1.08-0.449 0.288-0.287 0.449-0.677 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 49.3h9.67c0.406 0 0.796-0.161 1.08-0.449 0.288-0.287 0.449-0.677 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 43.5h9.67c0.406 0 0.796-0.161 1.08-0.448 0.288-0.288 0.449-0.678 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 37.7h9.67c0.406 0 0.796-0.161 1.08-0.448 0.288-0.288 0.449-0.678 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
        </g>
        <rect x="70.3" y="33.2" width="16.1" height="23.3" fill="#29261c" />

        <!-- Decorations -->
        <rect x="62.8" y="7.63e-9" width="32.1" height="32.1" fill="#466fb5" />
        <circle cx="78.9" cy="16" r="6.56" fill="#bcc2d5" />
        <path d="m78.9 6.72v18.6" fill="none" stroke="#3f3c40" stroke-width="2.5px" />
        <path d="m88.2 16h-18.6" fill="none" stroke="#3f3c40" stroke-width="2.5px" />
        <path
          d="m123 19.8c5.5 0 9.96 4.46 9.96 9.96s-4.46 9.96-9.96 9.96-9.96-4.46-9.96-9.96 4.46-9.96 9.96-9.96zm0 2.4c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55z"
          fill="#d4d0d1"
        />

        <!-- Text -->
        <text fill="#fffefe" font-size="4.4px" font-family="sans-serif">
          <tspan x="117.46" y="13.90">PWR</tspan>
          <tspan x="117.46" y="18.41">LED</tspan>
          <tspan x="133.16" y="17.37">VCC</tspan>
          <tspan x="133.16" y="26.87">GND</tspan>
          <tspan x="135.42" y="36.55">DO</tspan>
          <tspan x="135.42" y="46.359">AO</tspan>
          <tspan x="117.44" y="45.53">DO</tspan>
          <tspan x="117.44" y="50.036">LED</tspan>
        </text>

        <!-- Board pins -->
        <path
          d="m143 11.7v38h8.39v-38z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="round"
          stroke-width=".4px"
        />
        <g fill="#433b38">
          <path d="m144 42.1v6.55h6.55v-6.55z" />
          <path d="m144 32.3v6.55h6.55v-6.55z" />
          <path d="m144 22.6v6.55h6.55v-6.55z" />
          <path d="m144 12.9v6.55h6.55v-6.55z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m147 43.9c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.271 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 34.2c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.271 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 24.4c-0.382 0-0.748 0.151-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.27 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 14.7c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.637-0.421 1.02s0.151 0.749 0.421 1.02c0.271 0.27 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.19-0.424-0.423-0.424h-26.1z"
          />
        </g>
      </svg>
    `;
        }
    };
    __decorate$9([
        e$1()
    ], exports.PhotoresistorSensorElement.prototype, "ledDO", void 0);
    __decorate$9([
        e$1()
    ], exports.PhotoresistorSensorElement.prototype, "ledPower", void 0);
    exports.PhotoresistorSensorElement = __decorate$9([
        n('wokwi-photoresistor-sensor')
    ], exports.PhotoresistorSensorElement);

    var __decorate$8 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.RGBLedElement = class RGBLedElement extends n$1 {
        constructor() {
            super(...arguments);
            this.ledRed = 0;
            this.ledGreen = 0;
            this.ledBlue = 0;
            this.pinInfo = [
                { name: 'R', x: 8.5, y: 44, signals: [] },
                { name: 'COM', x: 18, y: 54, signals: [] },
                { name: 'G', x: 26.4, y: 44, signals: [] },
                { name: 'B', x: 35.7, y: 44, signals: [] },
            ];
        }
        render() {
            const { ledRed, ledGreen, ledBlue } = this;
            const brightness = Math.max(ledRed, ledGreen, ledBlue);
            const opacity = brightness ? 0.2 + brightness * 0.6 : 0;
            return y`
      <?xml version="1.0" encoding="UTF-8"?>
      <svg
        width="42.129"
        height="72.582"
        version="1.2"
        viewBox="-17 -10 37.3425 57.5115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- LED Legs -->
        <g fill="none" stroke="#9D9999" stroke-linecap="round" stroke-width="1.5px">
          <path d="m4.1 15.334 3.0611 9.971" />
          <path d="m8 14.4 5.9987 4.0518 1.1777 6.5679" stroke-linejoin="round" />
          <path d="m-4.3 14.184-5.0755 5.6592-0.10206 6.1694" stroke-linejoin="round" />
          <path d="m-1.1 15.607-0.33725 18.4" />
        </g>

        <!-- LED Body -->
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          opacity=".3"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="#e6e6e6"
          opacity=".5"
        />
        <path
          d="m8.3435 5.65v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          fill="#d1d1d1"
          opacity=".9"
        />
        <g transform="translate(-5.8295 -7.351)">
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            opacity=".7"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
            opacity=".25"
          />
          <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
        </g>
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648 2.2032 16.107 3.1961 16.107"
          fill="#666"
        />
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241 11.215 9.0338 7.4117 13.095"
          fill="#666"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="white"
          opacity=".65"
        />
        <g transform="translate(-5.8295 -7.351)" fill="#fff">
          <path
            d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
            opacity=".5"
          />
          <path
            d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
            opacity=".5"
          />
          <path
            d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
            opacity=".5"
          />
        </g>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="ledFilterRed" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${ledRed * 3}" />
        </filter>
        <filter id="ledFilterGreen" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${ledGreen * 3}" />
        </filter>
        <filter id="ledFilterBlue" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${ledBlue * 3}" />
        </filter>

        <circle
          cx="1.7"
          cy="3"
          r="${ledRed * 5 + 2}"
          fill="rgb(255, 0, 0)"
          opacity="${Math.min(ledRed * 20, 0.3)}"
          filter="url(#ledFilterRed)"
        />
        <circle
          cx="2.7"
          cy="5"
          r="${ledGreen * 5 + 2}"
          fill="rgb(0, 255, 0)"
          opacity="${Math.min(ledGreen * 20, 0.3)}"
          filter="url(#ledFilterGreen)"
        />
        <circle
          cx="0.7"
          cy="5"
          r="${ledBlue * 5 + 2}"
          fill="rgb(1,85,253)"
          opacity="${Math.min(ledBlue * 20, 0.3)}"
          filter="url(#ledFilterBlue)"
        />

        <circle
          cx="1.7"
          cy="4"
          r="10"
          fill="rgb(${ledRed * 255}, ${ledGreen * 255 + ledBlue * 90}, ${ledBlue * 255})"
          filter="url(#ledFilter)"
          opacity="${opacity}"
        />

        <!-- Grey hollow around the LED -->
        <circle
          cx="1.7"
          cy="4"
          r="13"
          stroke="#666"
          stroke-width="1"
          fill="none"
          filter="url(#ledFilter)"
          opacity="${opacity}"
        />
      </svg>
    `;
        }
    };
    __decorate$8([
        e$1()
    ], exports.RGBLedElement.prototype, "ledRed", void 0);
    __decorate$8([
        e$1()
    ], exports.RGBLedElement.prototype, "ledGreen", void 0);
    __decorate$8([
        e$1()
    ], exports.RGBLedElement.prototype, "ledBlue", void 0);
    exports.RGBLedElement = __decorate$8([
        n('wokwi-rgb-led')
    ], exports.RGBLedElement);

    var __decorate$7 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.ILI9341Element = class ILI9341Element extends n$1 {
        constructor() {
            super(...arguments);
            this.screenWidth = 240;
            this.screenHeight = 320;
            this.flipHorizontal = false;
            this.flipVertical = false;
            this.pinInfo = [
                { name: 'VCC', x: 48.3, y: 287.2, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'GND', x: 57.9012, y: 287.2, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'CS', x: 67.5024, y: 287.2, signals: [spi('SS')] },
                { name: 'RST', x: 77.1036, y: 287.2, signals: [] },
                { name: 'D/C', x: 86.7048, y: 287.2, signals: [] },
                { name: 'MOSI', x: 96.306, y: 287.2, signals: [spi('MOSI')] },
                { name: 'SCK', x: 105.9072, y: 287.2, signals: [spi('SCK')] },
                { name: 'LED', x: 115.5084, y: 287.2, signals: [] },
                { name: 'MISO', x: 125.1096, y: 287.2, signals: [spi('MISO')] },
            ];
        }
        static get styles() {
            return r$3`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 8px;
        top: 28px;
        width: 159px;
        height: 212px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `;
        }
        get canvas() {
            var _a;
            return (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('canvas');
        }
        firstUpdated() {
            this.dispatchEvent(new CustomEvent('canvas-ready'));
        }
        render() {
            const { screenWidth, screenHeight, flipHorizontal, flipVertical } = this;
            const flip = flipHorizontal || flipVertical;
            const scaleX = flipHorizontal ? -1 : 1;
            const scaleY = flipVertical ? -1 : 1;
            const canvasStyle = flip ? `transform: scaleX(${scaleX}) scaleY(${scaleY});` : '';
            return y`
      <div class="container">
        <svg
          width="46.5mm"
          height="77.6mm"
          version="1.1"
          viewBox="0 0 46.5 77.6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Board -->
          <path
            d="m8.8e-7 3.37e-6v77.6h46.5v-77.6zm43.1 1.78a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm-39.4 0.0946a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm0 70.7a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm39.4 0.0946a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm-31 2.68h1.41v1.34h-1.41zm2.53 0h1.41v1.34h-1.41zm2.56 0h1.41v1.34h-1.41zm2.54 0h1.41v1.34h-1.41zm12.7 0h1.41v1.34h-1.41zm-10.1 0.0119h1.41v1.34h-1.41zm2.54 0.0119h1.41v1.34h-1.41zm5.08 0h1.41v1.34h-1.41zm-2.53 0.0114h1.41v1.34h-1.41z"
            fill="#931917"
            stroke-width="0"
          />

          <!-- LCD Panel -->
          <path d="m0.17 5.65v64.6h46.1v-64.6zm6.46 62.9h34.7v1.7h-34.7z" fill="#f6e1f1" />
          <rect
            x="11.2"
            y="66.7"
            width="24.2"
            height="6.24"
            rx="1"
            ry="1"
            fill="#bdab16"
            opacity=".4"
          />
          <rect x="1.62" y="6.79" width="43.3" height="61.9" />
          <rect
            x="10.8"
            y="74.6"
            width="24.2"
            height="2.83"
            fill="none"
            stroke="#fff"
            stroke-width=".27"
          />

          <!-- Pins -->
          <g fill="#ccc">
            <path
              d="m11.8 75v1.99h1.98v-1.99zm0.988 0.397a0.6 0.6 0 0 1 0.0041 0 0.6 0.6 0 0 1 0.6 0.6 0.6 0.6 0 0 1-0.6 0.6 0.6 0.6 0 0 1-0.6-0.6 0.6 0.6 0 0 1 0.596-0.6z"
            />
            <path
              id="round-pin"
              d="m15.3 75a1 1 0 0 0-0.987 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-0.0134 0zm0.0093 0.4a0.6 0.6 0 0 1 0.0041 0 0.6 0.6 0 0 1 0.6 0.6 0.6 0.6 0 0 1-0.6 0.6 0.6 0.6 0 0 1-0.6-0.6 0.6 0.6 0 0 1 0.596-0.6z"
            />
            <use xlink:href="#round-pin" x="2.54" />
            <use xlink:href="#round-pin" x="5.08" />
            <use xlink:href="#round-pin" x="7.62" />
            <use xlink:href="#round-pin" x="10.16" />
            <use xlink:href="#round-pin" x="12.7" />
            <use xlink:href="#round-pin" x="15.24" />
            <use xlink:href="#round-pin" x="17.78" />
          </g>
          <text font-family="monospace" font-size="3.5px" fill="#fff">
            <tspan x="8.2" y="76.9">1</tspan>
            <tspan x="35.6" y="76.9">9</tspan>
            <tspan x="14.2" y="4.3" font-size="4.6px">ILI9341</tspan>
          </text>
        </svg>
        <canvas
          width="${screenWidth}"
          height="${screenHeight}"
          class="pixelated"
          style=${canvasStyle}
        ></canvas>
      </div>
    `;
        }
    };
    __decorate$7([
        e$1()
    ], exports.ILI9341Element.prototype, "flipHorizontal", void 0);
    __decorate$7([
        e$1()
    ], exports.ILI9341Element.prototype, "flipVertical", void 0);
    exports.ILI9341Element = __decorate$7([
        n('wokwi-ili9341')
    ], exports.ILI9341Element);

    var __decorate$6 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const segments = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const mm = mmToPix;
    const anodeX = 1.27 * mm;
    const cathodeX = 8.83 * mm;
    const green = '#9eff3c';
    const blue = '#2c95fa';
    const cyan = '#6cf9dc';
    const yellow = '#f1d73c';
    const red = '#dc012d';
    const colorPalettes = {
        GYR: [green, green, green, green, green, yellow, yellow, yellow, red, red],
        BCYR: [blue, cyan, cyan, cyan, cyan, yellow, yellow, yellow, red, red],
    };
    exports.LedBarGraphElement = class LedBarGraphElement extends n$1 {
        constructor() {
            super(...arguments);
            /** The color of a lit segment. Either HTML color or the special values GYR / BCYR */
            this.color = 'red';
            /** The color of an unlit segment */
            this.offColor = '#444';
            this.pinInfo = [
                { name: 'A1', x: anodeX, y: 1.27 * mm, number: 1, description: 'Anode 1', signals: [] },
                { name: 'A2', x: anodeX, y: 3.81 * mm, number: 2, description: 'Anode 2', signals: [] },
                { name: 'A3', x: anodeX, y: 6.35 * mm, number: 3, description: 'Anode 3', signals: [] },
                { name: 'A4', x: anodeX, y: 8.89 * mm, number: 4, description: 'Anode 4', signals: [] },
                { name: 'A5', x: anodeX, y: 11.43 * mm, number: 5, description: 'Anode 5', signals: [] },
                { name: 'A6', x: anodeX, y: 13.97 * mm, number: 6, description: 'Anode 6', signals: [] },
                { name: 'A7', x: anodeX, y: 16.51 * mm, number: 7, description: 'Anode 7', signals: [] },
                { name: 'A8', x: anodeX, y: 19.05 * mm, number: 8, description: 'Anode 8', signals: [] },
                { name: 'A9', x: anodeX, y: 21.59 * mm, number: 9, description: 'Anode 9', signals: [] },
                { name: 'A10', x: anodeX, y: 24.13 * mm, number: 10, description: 'Anode 10', signals: [] },
                { name: 'C1', x: cathodeX, y: 1.27 * mm, number: 20, description: 'Cathode 1', signals: [] },
                { name: 'C2', x: cathodeX, y: 3.81 * mm, number: 19, description: 'Cathode 2', signals: [] },
                { name: 'C3', x: cathodeX, y: 6.35 * mm, number: 18, description: 'Cathode 3', signals: [] },
                { name: 'C4', x: cathodeX, y: 8.89 * mm, number: 17, description: 'Cathode 4', signals: [] },
                { name: 'C5', x: cathodeX, y: 11.43 * mm, number: 16, description: 'Cathode 5', signals: [] },
                { name: 'C6', x: cathodeX, y: 13.97 * mm, number: 15, description: 'Cathode 6', signals: [] },
                { name: 'C7', x: cathodeX, y: 16.51 * mm, number: 14, description: 'Cathode 7', signals: [] },
                { name: 'C8', x: cathodeX, y: 19.05 * mm, number: 13, description: 'Cathode 8', signals: [] },
                { name: 'C9', x: cathodeX, y: 21.59 * mm, number: 12, description: 'Cathode 9', signals: [] },
                { name: 'C10', x: cathodeX, y: 24.13 * mm, number: 11, description: 'Cathode 10', signals: [] },
            ];
            /**
             * The values for the individual segments: 1 for a lit segment, and 0 for
             * an unlit segment.
             */
            this.values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        render() {
            const { values, color, offColor } = this;
            const palette = colorPalettes[color];
            return y`
      <svg
        width="10.1mm"
        height="25.5mm"
        version="1.1"
        viewBox="0 0 10.1 25.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="pin-pattern" height="2.54" width="10.1" patternUnits="userSpaceOnUse">
          <circle cx="1.27" cy="1.27" r="0.5" fill="#aaa" />
          <circle cx="8.83" cy="1.27" r="0.5" fill="#aaa" />
        </pattern>
        <path d="m1.4 0h8.75v25.5h-10.1v-24.2z" />
        <rect width="10.1" height="25.4" fill="url(#pin-pattern)" />
        ${segments.map((index) => {
                var _a;
                return b`<rect x="2.5" y="${0.4 + index * 2.54}" width="5" height="1.74" fill="${values[index] ? (_a = palette === null || palette === void 0 ? void 0 : palette[index]) !== null && _a !== void 0 ? _a : color : offColor}"/>`;
            })}
      </svg>
    `;
        }
    };
    __decorate$6([
        e$1()
    ], exports.LedBarGraphElement.prototype, "color", void 0);
    __decorate$6([
        e$1()
    ], exports.LedBarGraphElement.prototype, "offColor", void 0);
    __decorate$6([
        e$1({ type: Array })
    ], exports.LedBarGraphElement.prototype, "values", void 0);
    exports.LedBarGraphElement = __decorate$6([
        n('wokwi-led-bar-graph')
    ], exports.LedBarGraphElement);

    var __decorate$5 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.MicrosdCardElement = class MicrosdCardElement extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'CD', x: 76.734, y: 9.3744, signals: [] },
                { name: 'DO', x: 76.734, y: 18.8622, signals: [spi('MISO')] },
                { name: 'GND', x: 76.734, y: 28.4634, signals: [{ type: 'power', signal: 'GND' }] },
                { name: 'SCK', x: 76.734, y: 38.178, signals: [spi('SCK')] },
                { name: 'VCC', x: 76.734, y: 47.628, signals: [{ type: 'power', signal: 'VCC' }] },
                { name: 'DI', x: 76.734, y: 57.456, signals: [spi('MOSI')] },
                { name: 'CS', x: 76.734, y: 66.906, signals: [spi('SS')] },
            ];
        }
        render() {
            return y`
      <svg
        width="21.6mm"
        height="20.4mm"
        version="1.1"
        viewBox="0 0 21.6 20.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Board -->
        <rect width="21.6" height="20.4" fill="#a1111b" />

        <!-- Card and socket -->
        <rect
          x="1.32"
          y="4.59"
          width="3.13"
          height="8.06"
          fill="#262626"
          stroke="#d5b7b5"
          stroke-width=".232"
        />
        <rect x="4.08" y=".0367" width="10.7" height="17.8" rx=".772" ry=".772" fill="#262626" />
        <path
          d="m3.79 2.49-1.62 0.0292v1.38c0.474 0.0438 0.486 0.0027 0.489 0.197 0.0026 0.194-0.0698 0.237-1.2 0.257v0.939c0.388 0.0184 0.665-0.0702 0.679 0.211l0.176 3.66-0.413 0.434 0.0207 0.733 0.103 0.114 1.15 0.031 0.114-0.114-0.031-0.764-0.361-0.403 0.0413-3.62c0.0103-0.258 0.176-0.283 0.176-0.283h0.34c0.109 0 0.197 0.0689 0.197 0.154v5.29c0 0.0856-0.088 0.154-0.197 0.154h-1.99v6.96h5.2c-0.0402-1.41-0.191-5.31-0.0968-6 0.0155-0.114 0.263-0.0662 0.272-0.0303 0.0551 0.222 0.0216 2.55 0.234 5.65 0.431 0.234 0.17-0.655 0.423-0.635 0.242 0.0186-0.0802 0.81 0.394 0.635 0.384-4 0.0656-5.8 0.365-5.71 0.299 0.0904-0.204 5.36 0.0438 6.09h4.18s-0.17-4.16-0.285-5.96c-0.0099-0.155 0.473-0.156 0.467 0-0.0653 1.63 0.0803 5.67 0.0803 5.67 0.533 0.0657 0.168-0.755 0.46-0.745 0.279 0.0104-0.0511 0.854 0.387 0.745 0 0 0.218-4.08 0.226-5.69 7.07e-4 -0.146 0.375-0.139 0.372 0.0073-0.0227 1.42-0.131 5.97-0.131 5.97h1.01l-0.0656-14.3s-0.24-0.0383-0.352 0.0012c-3.96 1.4-7.81 1.06-10.7-0.0304-0.175-0.212-0.146-0.993-0.146-0.993z"
          fill="#dbded9"
        />
        <rect
          x="5.84"
          y="6.42"
          width="3.97"
          height="1.97"
          rx=".3"
          ry=".3"
          fill="#262626"
          stroke="#ebebeb"
          stroke-width=".08"
        />
        <rect
          x="10.4"
          y="6.42"
          width="3.97"
          height="1.97"
          rx=".3"
          ry=".3"
          fill="#262626"
          stroke="#ebebeb"
          stroke-width=".08"
        />
        <path
          d="m4.08 1.21s2.37 0.327 5.27 0.327c2.9 0 5.42-0.327 5.42-0.327v0.57s-0.949 0.331-5.42 0.327c-4.47-0.0037-5.27-0.327-5.27-0.327z"
          fill="#020202"
          stroke="#000"
          stroke-width=".027"
        />
        <g fill="#fcfff9">
          <rect x="1.19" y="10.9" width=".275" height="6.95" />
          <rect x="1.19" y="4.36" width=".275" height=".945" />
          <rect x="1.84" y="2.52" width=".33" height="1.38" />
        </g>

        <!-- Pins & labels -->
        <text font-family="sans-serif" fill="#ffffff" font-size="1.6px" stroke-width=".0327">
          <tspan x="16.61" y="2.90">CD</tspan>
          <tspan x="16.45" y="5.45">DO</tspan>
          <tspan x="15.39" y="7.98">GND</tspan>
          <tspan x="15.65" y="10.62">SCK</tspan>
          <tspan x="15.68" y="13.06">VCC</tspan>
          <tspan x="16.88" y="15.57">DI</tspan>
          <tspan x="16.67" y="18.24">CS</tspan>
        </text>
        <g fill="#fff" stroke="#d9cb97" stroke-width=".381">
          <ellipse cx="20.3" cy="2.48" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="4.99" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="7.53" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="10.1" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="12.6" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="15.2" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="17.7" rx=".814" ry=".814" />
        </g>
      </svg>
    `;
        }
    };
    exports.MicrosdCardElement = __decorate$5([
        n('wokwi-microsd-card')
    ], exports.MicrosdCardElement);

    var __decorate$4 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.DipSwitch8Element = class DipSwitch8Element extends n$1 {
        constructor() {
            super(...arguments);
            this.values = [0, 0, 0, 0, 0, 0, 0, 0];
            this.pinInfo = [
                { name: '1a', number: 1, y: 51.3, x: 8.1, signals: [] },
                { name: '2a', number: 2, y: 51.3, x: 17.7, signals: [] },
                { name: '3a', number: 3, y: 51.3, x: 27.3, signals: [] },
                { name: '4a', number: 4, y: 51.3, x: 36.9, signals: [] },
                { name: '5a', number: 5, y: 51.3, x: 46.5, signals: [] },
                { name: '6a', number: 6, y: 51.3, x: 56.1, signals: [] },
                { name: '7a', number: 7, y: 51.3, x: 65.7, signals: [] },
                { name: '8a', number: 8, y: 51.3, x: 75.3, signals: [] },
                { name: '8b', number: 9, y: 3, x: 75.3, signals: [] },
                { name: '7b', number: 10, y: 3, x: 65.7, signals: [] },
                { name: '6b', number: 11, y: 3, x: 56.1, signals: [] },
                { name: '5b', number: 12, y: 3, x: 46.5, signals: [] },
                { name: '4b', number: 13, y: 3, x: 36.9, signals: [] },
                { name: '3b', number: 14, y: 3, x: 27.3, signals: [] },
                { name: '2b', number: 15, y: 3, x: 17.7, signals: [] },
                { name: '1b', number: 16, y: 3, x: 8.1, signals: [] },
            ];
        }
        /**
         * Change switch state
         * @param index Which switch to change
         */
        toggleSwitch(index) {
            this.values[index] = this.values[index] ? 0 : 1;
            this.dispatchEvent(new InputEvent('switch-change', { detail: index }));
            this.requestUpdate(); // force lit to render again
        }
        /** Change switch state by keyboard 1-8 press */
        onKeyDown(e) {
            e.stopPropagation(); // stop storybook reacting to the key press
            const keys = ['1', '2', '3', '4', '5', '6', '7', '8'];
            const keyIndex = keys.indexOf(e.key);
            if (keyIndex !== -1) {
                this.toggleSwitch(keyIndex);
            }
        }
        drawSwitch(index, x) {
            return b` 
        <rect
        @click=${() => this.toggleSwitch(index)}
        x="${x + 4.693}"
        y="21.2"
        width="5.8168"
        height="13"
      />
      <use
        @click=${() => this.toggleSwitch(index)}
        xlink:href="#switch"
        x="${x}"
        y=${this.values[index] ? -7.2 : 0}
      />`;
        }
        preventTextSelection(e) {
            if (e.detail > 1) {
                // On double click
                e.preventDefault();
            }
        }
        render() {
            return y`
      <svg
        tabindex="0"
        @keydown=${this.onKeyDown}
        @mousedown=${this.preventTextSelection}
        width="82.87"
        height="55.355"
        version="1.1"
        viewBox="0 0 82.87 55.355"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="switch"
            transform="translate(-66.856 -41.367)"
            fill="#fffef4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".77094"
            d="m72.096 69.764s1.3376 0.38247 2.1066 0.39196c0.76893 0.0095 2.44-0.39196 2.44-0.39196 0.39596-0.06361 0.72389 0.32286 0.72389 0.72389v4.3678c0 0.40104-0.52337 0.72389-0.72389 0.72389s-1.6592-0.41225-2.4288-0.40316c-0.76958 0.0091-2.1177 0.40316-2.1177 0.40316-0.39396 0.075-0.72389-0.32286-0.72389-0.72389v-4.3678c0-0.40104 0.32286-0.72389 0.72389-0.72389z"
          />
        </defs>

        <!-- Pins -->
        <g
          transform="translate(-66.856 -41.367)"
          fill="#454837"
          fill-opacity=".49194"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".76744"
        >
          <rect x="73" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="82.6" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.2" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="101.8" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.4" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.6" y="87" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.2" y="87" width="2" height="6.5" rx=".7" ry=".7" />

          <rect x="73" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="82.6" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="92.2" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="101.8" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="111.4" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="121" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="130.6" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
          <rect x="140.2" y="44.4" width="2" height="6.5" rx=".7" ry=".7" />
        </g>

        <!-- Board -->
        <rect x="0" y="8.5" width="90.5" height="38.0831" fill="#d72c2c" />

        <!-- Text -->
        <text fill="#fffef4" font-family="sans-serif" font-size="7.66px" style="line-height:1.25">
          <tspan x="6.340" y="18.03">ON</tspan>
          <tspan x="4.35" y="43.28">1</tspan>
          <tspan x="14.485" y="43.28">2</tspan>
          <tspan x="23.956" y="43.28">3</tspan>
          <tspan x="33.57" y="43.28">4</tspan>
          <tspan x="43.05" y="43.28">5</tspan>
          <tspan x="52.36" y="43.28">6</tspan>
          <tspan x="62.45" y="43.28">7</tspan>
          <tspan x="71.92" y="43.28">8</tspan>
        </text>

        <!-- Switches -->
        <g fill="#917c6f" stroke-width=".77094">
          ${this.drawSwitch(0, 0)}<!-- -->
          ${this.drawSwitch(1, 9.6)}<!-- -->
          ${this.drawSwitch(2, 19.4)}<!-- -->
          ${this.drawSwitch(3, 29.1)}<!-- -->
          ${this.drawSwitch(4, 38.5)}<!-- -->
          ${this.drawSwitch(5, 48.1)}<!-- -->
          ${this.drawSwitch(6, 57.7)}<!-- -->
          ${this.drawSwitch(7, 67.3)}<!-- -->
        </g>
      </svg>
    `;
        }
    };
    __decorate$4([
        e$1({ type: Array })
    ], exports.DipSwitch8Element.prototype, "values", void 0);
    exports.DipSwitch8Element = __decorate$4([
        n('wokwi-dip-switch-8')
    ], exports.DipSwitch8Element);

    var __decorate$3 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const defaultSize = 23;
    exports.StepperMotorElement = class StepperMotorElement extends n$1 {
        constructor() {
            super(...arguments);
            this.angle = 0;
            this.arrow = '';
            this.value = '';
            this.units = '';
            this.size = defaultSize;
            this.nemaSpecMap = {
                '8': {
                    id: 8,
                    frameSize: 20.4,
                    holeRadius: 0.5,
                    shaftRadius: 3.5,
                    cornerRadius: 2.5,
                    cornerOffset: 2.5,
                    bodyRadius: 7.7,
                    textSize: 10,
                    valueYPosition: 16.5,
                    unitsYPosition: 19.7,
                },
                '11': {
                    id: 11,
                    frameSize: 28.2,
                    holeRadius: 1.25,
                    shaftRadius: 5,
                    cornerRadius: 2.5,
                    cornerOffset: 2.5,
                    bodyRadius: 11,
                    textSize: 12,
                    valueYPosition: 21.5,
                    unitsYPosition: 24,
                },
                '14': {
                    id: 14,
                    frameSize: 35.2,
                    holeRadius: 1.5,
                    shaftRadius: 5,
                    cornerRadius: 4.5,
                    cornerOffset: 4.5,
                    bodyRadius: 11,
                    textSize: 14,
                    valueYPosition: 26,
                    unitsYPosition: 32,
                },
                '17': {
                    id: 17,
                    frameSize: 42.3,
                    holeRadius: 1.5,
                    shaftRadius: 5,
                    cornerRadius: 5,
                    cornerOffset: 5.5,
                    bodyRadius: 14,
                    textSize: 16,
                    valueYPosition: 30.5,
                    unitsYPosition: 33.7,
                },
                '23': {
                    id: 23,
                    frameSize: 57.3,
                    holeRadius: 2.5,
                    shaftRadius: 6.35,
                    cornerRadius: 5,
                    cornerOffset: 5.5,
                    bodyRadius: 19.5,
                    textSize: 24,
                    valueYPosition: 41,
                    unitsYPosition: 46,
                },
                '34': {
                    id: 34,
                    frameSize: 86,
                    holeRadius: 3.25,
                    shaftRadius: 14,
                    cornerRadius: 3.25,
                    cornerOffset: 8.4,
                    bodyRadius: 36.5,
                    textSize: 32,
                    valueYPosition: 68,
                    unitsYPosition: 75,
                },
            };
        }
        get pinInfo() {
            var _a;
            const spec = (_a = this.nemaSpecMap[this.size]) !== null && _a !== void 0 ? _a : this.nemaSpecMap[defaultSize];
            // these offsets match the transform in renderFace
            const xOff = (spec.frameSize / 2 - 3.75) * mmToPix + 1;
            const yOff = (spec.frameSize + 5) * mmToPix;
            const pi = [
                { name: 'A-', y: yOff, x: xOff, number: 1, signals: [] },
                { name: 'A+', y: yOff, x: xOff + 2.54 * mmToPix, number: 2, signals: [] },
                { name: 'B+', y: yOff, x: xOff + 5.08 * mmToPix, number: 3, signals: [] },
                { name: 'B-', y: yOff, x: xOff + 7.62 * mmToPix, number: 4, signals: [] },
            ];
            return pi;
        }
        update(changedProperties) {
            if (changedProperties.has('size')) {
                this.dispatchEvent(new CustomEvent('pininfo-change'));
            }
            super.update(changedProperties);
        }
        render() {
            var _a;
            const spec = (_a = this.nemaSpecMap[this.size]) !== null && _a !== void 0 ? _a : this.nemaSpecMap[defaultSize];
            const cornerRadius = spec.cornerRadius;
            const holeRadius = spec.holeRadius;
            const shaftRadius = spec.shaftRadius;
            const frameSize = spec.frameSize;
            const cornerOffset = spec.cornerOffset;
            const bodyRadius = spec.bodyRadius;
            const halfShaft = shaftRadius / 2;
            const halfFrame = frameSize / 2;
            const innerHoleRadius = holeRadius * 0.9;
            const outerHoleRadius = holeRadius * 1.1;
            // shaft radius offset, needed for transform
            const rOff = Math.sqrt(0.75 * Math.pow(shaftRadius, 2));
            return y`<svg
      width="${frameSize + 1}mm"
      height="${frameSize + 5}mm"
      version="1.1"
      viewBox="0 0 ${(1 + frameSize) * mmToPix} ${(5 + frameSize) * mmToPix}"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient
          id="frame-gradient"
          x1="-${frameSize * 0.2}"
          x2="${frameSize * 2}"
          y1="${frameSize}"
          y2="${frameSize}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#666" offset="0" />
          <stop stop-color="#fff" offset="1" />
        </linearGradient>
        <linearGradient
          id="shaft-gradient"
          x1="0"
          x2="0"
          y1="-5"
          y2="5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9d9d9d" offset="0" />
          <stop stop-color="#9d9d9d" stop-opacity="0" offset="1" />
        </linearGradient>
        <linearGradient
          id="body-gradient"
          x1="${frameSize * 0.1}"
          x2="${frameSize * 0.7}"
          y1="${frameSize}"
          y2="${frameSize}"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9d9d9d" offset="0" />
          <stop stop-color="#fdfafa" offset=".29501" />
          <stop offset="1" stop-color="#2a2a2a" />
        </linearGradient>
      </defs>
      <!-- Body -->
      <g transform="translate(1,1)">
        <g transform="scale(${mmToPix})">
          <!-- Pins -->
          <path
            id="pin"
            transform="translate(${halfFrame - 3.75} ${frameSize})"
            fill="#9f9f9f"
            d="m 0 0 c .5 0 .5 0 .5 .5 v 4.55 c -.5 .5 -.5 .5 -1 0 v -4.5 c 0 -.5 0 -.5 .5 -.5"
          />
          <use xlink:href="#pin" x="2.54" />
          <use xlink:href="#pin" x="5.08" />
          <use xlink:href="#pin" x="7.62" />

          <g stroke-linecap="round" stroke-linejoin="round">
            <rect
              width="${frameSize}"
              height="${frameSize}"
              rx="${cornerRadius}"
              ry="${cornerRadius}"
              fill="url(#frame-gradient)"
              stroke="#000"
              stroke-width=".3245"
            />
            <circle cx="${cornerOffset}" cy="${cornerOffset}" r="${outerHoleRadius}" fill="#666" />
            <circle
              cx="${cornerOffset}"
              cy="${cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${cornerOffset}"
              r="${outerHoleRadius}"
              fill="#666"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
            <circle
              cx="${cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${outerHoleRadius}"
              fill="#666"
            />
            <circle
              cx="${cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${outerHoleRadius}"
              fill="#666"
            />
            <circle
              cx="${frameSize - cornerOffset}"
              cy="${frameSize - cornerOffset}"
              r="${innerHoleRadius}"
              fill="#e6e6e6"
            />
          </g>

          <!-- motor body -->
          <circle
            cx="${halfFrame}"
            cy="${halfFrame}"
            r="${bodyRadius}"
            fill="#868686"
            fill-opacity=".89602"
            opacity=".73"
            stroke="url(#body-gradient)"
            stroke-width="1.41429"
          />
          <!-- Rotator -->
          <g>
            <path
              id="arrow-path"
              transform="
                rotate(${this.angle}, ${halfFrame},${halfFrame}) 
                translate(${halfFrame} ${halfFrame})"
              fill="${this.arrow || 'transparent'}"
              d="m 0 0 l -${shaftRadius} 0 l ${shaftRadius} 
                -${halfFrame - 3} l ${shaftRadius} ${halfFrame - 3} z"
            />
            <path
              id="shaft-path"
              transform="
                translate(${halfFrame}, ${halfFrame}) 
                rotate(${this.angle}) 
                translate(0, 0)"
              d="m -${halfShaft} -${rOff} a ${shaftRadius} ${shaftRadius} 0 1 0 ${shaftRadius} 0 z"
              fill="#4d4d4d"
              stroke="url(#shaft-gradient)"
              stroke-width=".57968"
            />
          </g>

          <!-- Text -->
          <text font-family="arial" font-size="14.667px" text-align="center" text-anchor="middle">
            <tspan
              x="${halfFrame}"
              y="${spec.valueYPosition}"
              font-size="${spec.textSize / mmToPix}px"
            >
              ${this.value}
            </tspan>
            <tspan
              x="${halfFrame}"
              y="${spec.unitsYPosition}"
              font-size="${(0.7 * spec.textSize) / mmToPix}px"
            >
              ${this.units}
            </tspan>
          </text>
        </g>
      </g>
    </svg>`;
        }
    };
    __decorate$3([
        e$1({ type: Number })
    ], exports.StepperMotorElement.prototype, "angle", void 0);
    __decorate$3([
        e$1()
    ], exports.StepperMotorElement.prototype, "arrow", void 0);
    __decorate$3([
        e$1()
    ], exports.StepperMotorElement.prototype, "value", void 0);
    __decorate$3([
        e$1()
    ], exports.StepperMotorElement.prototype, "units", void 0);
    __decorate$3([
        e$1()
    ], exports.StepperMotorElement.prototype, "size", void 0);
    exports.StepperMotorElement = __decorate$3([
        n('wokwi-stepper-motor')
    ], exports.StepperMotorElement);

    var __decorate$2 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    exports.HX711Element = class HX711Element extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'VCC', y: 55, x: 7, number: 1, signals: [VCC()] },
                { name: 'DT', y: 36.3, x: 7, number: 2, signals: [] },
                { name: 'SCK', y: 46.2, x: 7, number: 3, signals: [] },
                { name: 'GND', y: 26.5, x: 7, number: 4, signals: [GND()] },
            ];
        }
        get dimension() {
            switch (this.type) {
                case '50kg':
                    return { width: 580, height: 430 };
                case '5kg':
                    return { width: 507, height: 269 };
                case 'gauge':
                    return { width: 509, height: 200 };
                default:
                    return { width: 580, height: 430 };
            }
        }
        renderSensor() {
            switch (this.type) {
                case 'gauge':
                    return b`
       <!-- Gauge Pressure Sensor -->
       <g
         transform="translate(412.5 99.5) scale(-1 1) translate(-94.5 -56.5)">
         <path d="m53.5 56.5l135-56" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 56.5l133-33" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m52.5 56.5l133-7" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m51.5 56.5l136 18" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <path
           d="m50.5 113c-14.636 0-26.5-25.296-26.5-56.5s11.864-56.5 26.5-56.5 26.5 25.296 26.5 56.5-11.864 56.5-26.5 56.5zm-1-88c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7zm0 77c3.5899 0 6.5-3.134 6.5-7s-2.9101-7-6.5-7-6.5 3.134-6.5 7 2.9101 7 6.5 7z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m0 54.1l33-5.1v17l-33-5.1v-6.8z" fill="#D8D8D8" stroke="#979797" />
         <circle cx="50" cy="57" r="20" fill="#D8D8D8" stroke="#979797" />
         <text
           transform="translate(50 56.5) scale(-1 1) translate(-50 -56.5)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="16"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="38.4414062" y="62">GP</tspan>
         </text>
       </g>`;
                case '5kg':
                    return b`
       <!-- 5kg Load Sensor -->
       <g
         transform="translate(413 133.5) scale(-1 1) translate(-94 -133.5)">
         <path
           d="m0.5 0.5v266h62v-266h-62zm31 123c-12.698 0-23-9.8445-23-22 0-12.155 10.302-22 23-22s23 9.8445 23 22c0 12.155-10.302 22-23 22zm0 57c-12.698 0-23-9.8445-23-22s10.302-22 23-22 23 9.8445 23 22-10.302 22-23 22z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <path d="m53.5 51.5l133-10" stroke="#F01919" stroke-linecap="square" stroke-width="3" />
         <path d="m54.5 57.5l131 8" stroke="#000" stroke-linecap="square" stroke-width="3" />
         <path d="m55.5 64.5l130 27" stroke="#C8C8C8" stroke-linecap="square" stroke-width="3" />
         <path d="m56.5 71.5l131 43" stroke="#24C22B" stroke-linecap="square" stroke-width="3" />
         <rect x="3.5" y="43.5" width="57" height="33" rx="11" fill="url(#e)" stroke="#979797" />
         <text
           transform="translate(28.5 245) scale(-1 1) translate(-28.5 -245)"
           fill="#FBFBFB"
           font-family="Arial-ItalicMT, Arial"
           font-size="14"
           font-style="italic"
         >
           <tspan x="17.2138672" y="250">5kg</tspan>
         </text>
       </g>`;
                case '50kg':
                default:
                    return b`
       <!-- 50kg Load Sensor -->
       <g
         transform="translate(448 212) scale(-1 1) translate(-131 -212)"
       >
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 106)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path
           d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
           fill="#D8D8D8"
           stroke="#979797"
         />
         <g transform="translate(18 17)" fill="#D8D8D8">
           <path
             d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
           />
           <rect x="61" y="24" width="13" height="24" />
           <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
         </g>
         <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
         <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
         <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
         <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <g transform="translate(0 212)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <g transform="translate(0 318)">
           <path
             d="m30 0.5c-16.292 0-29.5 13.208-29.5 29.5v46c0 16.292 13.208 29.5 29.5 29.5h46c16.292 0 29.5-13.208 29.5-29.5v-46c0-16.292-13.208-29.5-29.5-29.5h-46zm-3 9h40c9.1127 0 16.5 7.3873 16.5 16.5v54c0 9.1127-7.3873 16.5-16.5 16.5h-40c-9.1127 0-16.5-7.3873-16.5-16.5v-54c0-9.1127 7.3873-16.5 16.5-16.5z"
             fill="#D8D8D8"
             stroke="#979797"
           />
           <g transform="translate(18 17)" fill="#D8D8D8">
             <path
               d="m63 48h-36c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36c0 7.1797-5.8203 13-13 13h-37c-7.1797 0-13-5.8203-13-13v-43c-8.7926e-16 -7.1797 5.8203-13 13-13h37c6.8432 0 12.451 5.2876 12.962 12h0.03789v1c0-0.33647-0.012783-0.66996-0.03789-1h-35.962c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5h36v24z"
             />
             <rect x="61" y="24" width="13" height="24" />
             <rect x="30.5" y=".5" width="32" height="72" rx="11" stroke="#979797" />
           </g>
           <circle cx="64.5" cy="53.5" r="7.5" fill="url(#b)" />
           <ellipse cx="64.5" cy="25" rx="4.5" ry="4" fill="#737373" />
           <ellipse cx="64.5" cy="82" rx="4.5" ry="4" fill="#737373" />
           <path d="m106.5 48.25h21" stroke="#979797" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 53.25h21" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
           <path d="m106.5 58.25h21" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         </g>
         <path d="m128.5 53.5h82" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 68.5h60" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5h50" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 94.5h48" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5h36" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 371.25h94" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m225.5 118.5v253" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 265.25h83" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m213.5 96.5v169" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m201.5 71.5v88" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m211.5 44.5v9" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m128.5 159.25h71" stroke="#FF7F7F" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.5v212" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m147.25 58v212" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m162.25 48v317.5" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.25 154.5v104" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m129 376.23h6" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m136.5 164.15h-8" stroke="#D3D1D1" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 58.15h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 48.208h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 154.1h-52" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m180.5 260.2h-51" stroke="#999B7D" stroke-linecap="square" stroke-width="3" />
         <path d="m161.5 366.2h-34" stroke="#8A8198" stroke-linecap="square" stroke-width="3" />
         <path d="m146.5 270.25h-18" stroke="#EFEFEF" stroke-linecap="square" stroke-width="3" />
         <text
           transform="translate(94.5 265) scale(-1 1) translate(-94.5 -265)"
           fill="#FBFBFB"
           font-family="Arial-BoldItalicMT, Arial"
           font-size="14"
           font-style="italic"
           font-weight="bold"
         >
           <tspan x="87.1137695" y="270">A-</tspan>
           <tspan x="87.5" y="164">E-</tspan>
           <tspan x="85.7431641" y="57">E+</tspan>
           <tspan x="86.2431641" y="377">A+</tspan>
         </text>
       </g>`;
            }
        }
        render() {
            const { width, height } = this.dimension;
            return y`
      <style>
        text {
          user-select: none;
        }
      </style>
      <svg
        width="${+width / 10}mm"
        height="${+height / 10}mm"
        viewBox="0 0 ${width} ${height}"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path
            id="f"
            d="m317 74c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 23c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0 24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-120c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm-298 98c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-25c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-24c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm9.5 115c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm0-156c-6.3513 0-11.5-5.1487-11.5-11.5s5.1487-11.5 11.5-11.5 11.5 5.1487 11.5 11.5-5.1487 11.5-11.5 11.5zm-28.5-34h340v200h-340v-200z"
          />
          <path id="d" d="m0 0h340v200h-340v-200z" />
          <mask id="g" x="0" y="0" width="340" height="200" fill="white">
            <use xlink:href="#d" />
          </mask>
          <linearGradient id="a" y1="50%" y2="50%">
            <stop stop-color="#767676" offset="0" />
            <stop stop-color="#FFFEDF" offset="1" />
          </linearGradient>
          <radialGradient id="b" r="100%">
            <stop stop-color="#8A8A8A" offset="0" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="e"
            r="100%"
            gradientTransform="translate(.5 .5) scale(.58621 1) rotate(90) translate(-.5 -.5)"
          >
            <stop stop-color="#fff" offset="0" />
            <stop stop-color="#E7E7E7" offset="1" />
          </radialGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <mask id="c" fill="white">
            <use xlink:href="#f" />
          </mask>
          <g
            fill="#1C8944"
            mask="url(#c)"
            stroke="#ADA216"
            stroke-dasharray="1,1"
            stroke-opacity=".53643"
            stroke-width="4"
          >
            <use mask="url(#g)" xlink:href="#d" />
          </g>
          <g fill="#D2CDC3" mask="url(#c)">
            <g transform="translate(10 34)">
              <rect y="25" width="17" height="18" />
              <rect x="298" width="17" height="18" />
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(6 27)">
              <rect x="298" y="1" width="26" height="147" stroke="#fff" stroke-width="2" />
              <rect x="1" y="25" width="25" height="102" stroke="#fff" stroke-width="2" />
              <text
                font-family="Arial-BoldItalicMT, Arial"
                font-size="14"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="28.4448242" y="45" fill="#FBFBFB">GND</tspan>
                <tspan x="28.1689453" y="69" fill="#FBFBFB">DT</tspan>
                <tspan x="27.2207031" y="94" fill="#FBFBFB">SCK</tspan>
                <tspan x="28.2207031" y="119" fill="#FBFBFB">VCC</tspan>
                <tspan x="274" y="45" fill="#FBFBFB">E-</tspan>
                <tspan x="274.492188" y="18" fill="#FBFBFB">E+</tspan>
                <tspan x="274.058594" y="117" fill="#FBFBFB">B-</tspan>
                <tspan x="274.050781" y="140" fill="#FBFBFB">B+</tspan>
                <tspan x="274.058594" y="69" fill="#FBFBFB">A-</tspan>
                <tspan x="274.050781" y="94" fill="#FBFBFB">A+</tspan>
                <tspan x="98.2929688" y="160" fill="#FBFBFB">Load Cell Amp</tspan>
                <tspan x="126.132812" y="140" fill="#FBFBFB">HX711</tspan>
              </text>
            </g>
          </g>
          <g mask="url(#c)">
            <g transform="translate(122 28)">
              <rect
                x="14.5"
                y=".5"
                width="36"
                height="98"
                fill="#434341"
                fill-rule="evenodd"
                stroke="#3B3939"
              />
              <rect x="51" y="2" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="15" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="27" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="40" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="52" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="65" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="77" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect x="51" y="90" width="14" height="6" fill="url(#a)" fill-rule="evenodd" />
              <rect
                transform="translate(7 5) scale(-1 1) translate(-7 -5)"
                y="2"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 18) scale(-1 1) translate(-7 -18)"
                y="15"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 31) scale(-1 1) translate(-7 -31)"
                y="28"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 43) scale(-1 1) translate(-7 -43)"
                y="40"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 56) scale(-1 1) translate(-7 -56)"
                y="53"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 68) scale(-1 1) translate(-7 -68)"
                y="65"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 80) scale(-1 1) translate(-7 -80)"
                y="77"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <rect
                transform="translate(7 93) scale(-1 1) translate(-7 -93)"
                y="90"
                width="14"
                height="6"
                fill="url(#a)"
                fill-rule="evenodd"
              />
              <circle
                cx="20"
                cy="5"
                r="3"
                fill="#211919"
                fill-opacity=".54978"
                fill-rule="evenodd"
                stroke="#000"
              />
              <text
                transform="translate(27 52) rotate(-90) translate(-27 -52)"
                fill="none"
                font-family="Arial-BoldItalicMT, Arial"
                font-size="12"
                font-style="italic"
                font-weight="bold"
              >
                <tspan x="9.09960938" y="56" fill="#BBBBBB">HX711</tspan>
              </text>
            </g>
          </g>
          ${this.renderSensor()}
        </g>
      </svg>
    `;
        }
    };
    __decorate$2([
        e$1()
    ], exports.HX711Element.prototype, "type", void 0);
    exports.HX711Element = __decorate$2([
        n('wokwi-hx711')
    ], exports.HX711Element);

    var __decorate$1 = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const y1Pos = 5.1;
    const y2Pos = 32.7;
    const x1Pos = 5.5;
    const x2Pos = 25;
    const x3Pos = 45;
    const x4Pos = 74;
    exports.KS2EMDC5Element = class KS2EMDC5Element extends n$1 {
        constructor() {
            super(...arguments);
            this.pinInfo = [
                { name: 'NO2', x: x1Pos, y: y1Pos, signals: [], number: 8 },
                { name: 'NC2', x: x2Pos, y: y1Pos, signals: [], number: 6 },
                { name: 'P2', x: x3Pos, y: y1Pos, signals: [], number: 4 },
                { name: 'COIL2', x: x4Pos, y: y1Pos, signals: [{ type: 'power', signal: 'GND' }], number: 1 },
                { name: 'NO1', x: x1Pos, y: y2Pos, signals: [], number: 9 },
                { name: 'NC1', x: x2Pos, y: y2Pos, signals: [], number: 11 },
                { name: 'P1', x: x3Pos, y: y2Pos, signals: [], number: 13 },
                { name: 'COIL1', x: x4Pos, y: y2Pos, signals: [], number: 16 },
            ];
        }
        render() {
            return y`
      <svg
        width="21mm"
        height="10mm"
        version="1.1"
        viewBox="0 0 21 10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke-width=".4" fill="#f7b93c" stroke="#dda137">
          <rect x=".20" y=".20" width="20.6" height="9.61" ry=".58" />
          <rect x="20.2" y="4.5" width=".40" height="1" fill="#dda137" />
        </g>
        <g fill="none" stroke="#dda137" stroke-width=".47">
          <ellipse cx="1.6" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="6.68" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="11.76" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="19.38" cy="1.35" rx=".76" ry=".76" />
          <ellipse cx="1.6" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="6.68" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="11.76" cy="8.65" rx=".76" ry=".76" />
          <ellipse cx="19.38" cy="8.65" rx=".76" ry=".76" />
        </g>
        <text fill="#4a3510" font-family="sans-serif" font-size="2.8222px">
          <tspan x="1.07" y="6.03">KS2E-M-DC5</tspan>
        </text>
      </svg>
    `;
        }
    };
    exports.KS2EMDC5Element = __decorate$1([
        n('wokwi-ks2e-m-dc5')
    ], exports.KS2EMDC5Element);

    var __decorate = (window && window.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    const SHAFT_X = 60; // x location of shaft point
    const SHAFT_Y = 77; // y location of shaft point
    const OUTER_OFFSET = 9; // offset to center of outer hand's ring
    const INNER_OFFSET = 4.7; // offset to center of inner hand's ring
    const ORNATE_OUTER_OFFSET = 9; // offset to center of outer ornate hand's ring
    const ORNATE_INNER_OFFSET = 5; // offset to center of inner ornate hand's ring
    exports.BiaxialStepperElement = class BiaxialStepperElement extends n$1 {
        constructor() {
            super(...arguments);
            // length used to control outer hand length in mm
            this.outerHandLength = 30;
            // the current hand angle in degrees
            this.outerHandAngle = 0;
            // the current outer hand color
            this.outerHandColor = 'gold';
            // the current outer hand shape
            this.outerHandShape = 'plain';
            // length used to control inner hand length in mm
            this.innerHandLength = 30;
            // the current hand angle in degrees
            this.innerHandAngle = 0;
            // the current inner hand color
            this.innerHandColor = 'silver';
            // the current inner hand shape
            this.innerHandShape = 'plain';
            this.handMap = {
                outerPlainHand: (len) => ({
                    xOff: OUTER_OFFSET,
                    yOff: OUTER_OFFSET,
                    path: `m 0 0 c 0 5 4 9 9 9 c 3.3 0 6.1 -1.7 7.7 -4.3 h 24.9 h ${len} c 1.4 -1.5 1.9 -3.6 1.8 -4.7 c 0 -1.4 -0.4 -3.2 -1.9 -4.6 h -${len} h -24.8 c -1.6 -2.7 -4.5 -4.4 -7.8 -4.4 c -5 0 -9 4.1 -9 9 z m 3.5 0 c 0 -3 2.4 -5.4 5.5 -5.4 s 5.5 2.4 5.5 5.4 s -2.5 5.4 -5.5 5.4 s -5.5 -2.4 -5.5 -5.4 z`,
                }),
                outerArrowHand: (len) => ({
                    xOff: OUTER_OFFSET,
                    yOff: OUTER_OFFSET,
                    path: `m 0 0 c 0 5 4 9 9 9 c 3.89 0 7.16 -2.42 8.43 -5.85 c 0.3 -0.58 0.78 -1.16 1.27 -1.45 c 0.6 -0.3 1.29 -0.4 1.99 -0.2 c 0 0 0 0 0 0 h 0.01 l 0.9 3.3 h 20 l ${len} -4.7 l -${len} -4.9 h -20.138 l -0.9 3.3 c -0.7 0.2 -1.4 0.1 -2 -0.2 c -0.6 -0.3 -1.1 -0.8 -1.3 -1.5 c 0 0 -0.01 0.02 -0.02 0.02 c -1.38 -3.72 -4.38 -5.72 -8.38 -5.72 c -5 0 -9 4 -9 9 z m 3.5 0 c 0 -3.1 2.5 -5.5 5.5 -5.5 s 5.5 2.5 5.5 5.5 s -2.5 5.5 -5.5 5.5 s -5.5 -2.5 -5.5 -5.5 z`,
                }),
                outerOrnateHand: () => ({
                    xOff: ORNATE_OUTER_OFFSET,
                    yOff: ORNATE_OUTER_OFFSET,
                    path: `m 0 0 c 0 5 4 9 9 9 c 4.951 0.028 9.683 -3.101 9.6 -7.6 c 0 0 1.1 1.4 3.3 1.2 c -0.2 1 0.3 1.2 0.3 1.2 c 0.6 -1.5 6.4 -6.3 8.6 -0.3 c -3.1 -0.3 -1.8 3.8 0.5 1.6 c 0 0 0.9 2.3 4 2.1 c -0.8 1.7 3.1 2.1 1.7 -0.4 c 0 0 2.7 -1 2.3 -3.9 c 0 0 0.8 0.6 2.6 0.6 c 2.7 0.2 6.2 -3.7 16 -2.9 l 0.6 -0.7 l -0.6 -0.8 c -8.9 0.7 -13 -2.3 -16 -3 c -1.9 0 -2.5 0.8 -2.5 0.8 c 0 0 0.3 -2.6 -2.5 -4.1 c 0.8 -0.8 0 -1.6 -0.8 -1.6 c -0.5 0 -1 0.4 -0.8 1.5 c 0 0 -2.8 -0.8 -4 2.1 c 0 0 -1.4 -2 -2.5 0.3 c 0.2 0.5 0 0.9 0.8 1.2 c 0.2 0.3 1.2 -0.2 1.2 -0.2 c 0 0 -0.6 3.2 -3.9 3 c 0 0 -2.7 0.1 -4.8 -3.3 c -0.3 0.5 -0.3 0.7 -0.3 0.7 v 0.7 c 0 0 -2.1 -0.4 -3.4 1.2 c -0.06 -4.37 -4.449 -7.347 -9.41 -7.385 c -5 0 -9 4 -9 9 z m 44 -2.2 c 2.1 1.2 4.1 1.5 4.1 1.5 c -0.4 0.7 -0.5 0.7 0 1.6 c 0 0 -2.6 0.2 -4.1 1.4 c 0 0 0.2 -1.7 -0.6 -2.2 c 1 -0.6 0.6 -2.2 0.6 -2.2 z m -2.3 -0.5 c 1.3 0.1 1.6 1.1 1.6 1.1 c 0.1 0.4 -1.2 0.8 -1.1 1.1 l 0.3 0.5 l -0.2 0.6 c 0 0.3 0.6 0.4 1.2 1 c -0.5 0.6 -0.5 1.3 -2.1 1.3 c -1.1 0 -3.1 -2.5 -4.2 -2.9 c 1.1 -0.1 2.5 -2.8 4.5 -2.8 z m -10.8 0.9 c 0.5 1 2 1.9 2 1.9 c -1.4 0.7 -2 1.7 -2 1.7 c -1 -1.2 -2.2 -1.9 -2.2 -1.9 c 1.3 -0.6 2.2 -1.8 2.2 -1.8 z m -10.1 0.4 c 1.4 0 1.5 1.1 3.656 1.552 c -2 0.3 -2.4 1.5 -3.6 1.4 c -1.5 -0.1 -1.6 -1.3 -1.6 -1.3 c 0 0 -0.2 -1.5 1.6 -1.6 c 0 0 0 0 0.1 0 z m 14.1 2.1 c 3.1 0.1 3.1 3.2 3.1 3.2 c -0.3 1.7 -2.5 2.6 -2.5 2.6 c -2.5 0.2 -3.3 -1.5 -3.3 -1.5 c 0 0 1.4 0.6 1.8 -1 c -0.4 -2 -2.2 -0.8 -2.2 -0.8 c 0.3 -2.3 3 -2.5 3 -2.5 z`,
                }),
                innerPlainHand: (len) => ({
                    xOff: INNER_OFFSET,
                    yOff: INNER_OFFSET,
                    path: `m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.3 0 1.3 0 2.4 -0.4 h 2 h 27.7 h ${len} c 1.2 -1.2 1.8 -3.3 1.8 -4.3 c 0 -1 -0.7 -3.3 -1.9 -4.2 h -${len} h -27.7 h -1.9 c -0.2 0 -1.3 -0.5 -2.6 -0.5 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`,
                }),
                innerArrowHand: (len) => ({
                    xOff: INNER_OFFSET,
                    yOff: INNER_OFFSET,
                    path: `m 0 0 c 0 2.6 2.1 4.7 4.7 4.7 c 1.37 0 2.59 -0.59 3.44 -1.52 c 0.7 -0.7 1.5 -1.2 2.5 -1.5 s 2 -0.3 2.9 -0.1 l 0.46 3.37 l ${len}.44 -4.96 l -${len}.34 -5.03 l -0.75 3.53 c -0.81 0.1 -1.81 0.1 -2.71 -0.2 c -1 -0.3 -1.8 -0.8 -2.5 -1.5 c -0.86 -0.93 -2.08 -1.52 -3.44 -1.52 c -2.6 0 -4.7 2.1 -4.7 4.7 z m 2.7 0 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 z`,
                }),
                innerOrnateHand: () => ({
                    xOff: ORNATE_INNER_OFFSET,
                    yOff: ORNATE_INNER_OFFSET,
                    path: `m 0 0 c 0 5 5 5 5 5 c 5 0 4.6565 -5.696 5 -2.6 l 0.028 1.101 l 1.4525 0.016 l 0.55 -1.5 c 0 0 1.05 1.55 3.3 1.75 c 2.35 0.05 3.2 -0.85 3.2 -0.85 l 0.05 0.75 l 0.95 -0.05 l -0.05 1 l 4 -2.4 c 0.4 1.35 1.75 1.5 1.75 1.5 c 0.65 0.1 1.85 -0.95 1.85 -0.95 l 0.7 1.45 l 1 -1.75 l 1 1 l 0.35 -1.45 c 2.4 1.45 4.15 1.2 4.15 1.2 c 2.95 -0.1 3.9 -1.05 6.6 -1.95 c 4.85 -0.7 10.3 -0.1 10.3 -0.1 l -0.25 1.65 l 3.85 -1.45 l 15.2 -0.3 l 0.45 -0.4 l -0.55 -0.4 l -15.4 -0.25 l -3.6 -1.55 l 0.4 1.8 c 0 0 -4.75 -0.85 -10.1 -0.25 l -0.25 -1.05 l -1.05 0.85 c 0 0 0.45 -2.2 0.25 -3.8 c -1.15 2.55 -1.95 6.25 -6.45 6.3 c -4.4 -0.35 -5.7 -4.05 -5.7 -4.05 l -0.45 1 l -0.5 -0.5 l -0.55 0.75 c 0 0 -0.85 -0.6 -2.35 -0.75 c -1.85 0.15 -2.35 0.45 -2.35 0.45 l -0.25 -1.45 l -1.2 1.25 l -0.5 -0.8 l -1.05 1.05 l -0.6 -0.85 c -0.6 -0.45 -1.15 -0.55 -1.75 -0.3 c 0 0 -0.6 0.25 -0.8 0.75 c 0 0 -0.45 -0.7 -1.2 -0.85 c -0.75 -0.05 -2.3 1.3 -2.3 1.3 l -0.6175 -2.289 l -1.469 -0.032 l -0.0165 1.2265 c -0.3785 2.4515 0.0485 -3.212 -5.036 -3.228 c -4 0 -5.004 2.518 -5 5 z m 13.25 -1.2 c 0 0 0.15 1.3 1.05 1.3 c 0 0 0.5 -0.25 0.7 -0.8 c 0 0 0.35 0.85 0.75 0.9 c 0.9 -0.1 0.85 -1.25 1.15 -1.3 c 0 0 0.9 0.35 0.9 2.15 c 0 0 -0.6 1.7 -3 1.65 c 0 0 -2.05 -0.15 -2.55 -1.95 c 0 0 -0.15 -1.5 0.95 -2 z m 10.5 0.55 c 1.05 0 1.4 0.25 1.4 0.25 c 0.75 0.45 1 1.2 1 1.2 c 0.05 1.6 -0.85 1.55 -1.65 1.6 c 0 0 -0.95 -0.35 -1.3 -1.35 l -3.1 1.75 c 0 0 0.45 -2.5 2.8 -3.45 c 0.35 -0.05 0.6 -0.05 0.85 -0.05 z`,
                }),
            };
        }
        get pinInfo() {
            const pinXY = (y) => {
                return { x: 45, y: (28.9 + y * 2.54) * mmToPix };
            };
            return [
                Object.assign(Object.assign({ name: 'A1-' }, pinXY(0)), { number: 1, signals: [] }),
                Object.assign(Object.assign({ name: 'A1+' }, pinXY(1)), { number: 2, signals: [] }),
                Object.assign(Object.assign({ name: 'B1+' }, pinXY(2)), { number: 3, signals: [] }),
                Object.assign(Object.assign({ name: 'B1-' }, pinXY(3)), { number: 4, signals: [] }),
                Object.assign(Object.assign({ name: 'A2-' }, pinXY(4)), { number: 5, signals: [] }),
                Object.assign(Object.assign({ name: 'A2+' }, pinXY(5)), { number: 6, signals: [] }),
                Object.assign(Object.assign({ name: 'B2+' }, pinXY(6)), { number: 7, signals: [] }),
                Object.assign(Object.assign({ name: 'B2-' }, pinXY(7)), { number: 8, signals: [] }),
            ];
        }
        cap(s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
        constrain(v, min, max) {
            return Math.max(min, Math.min(v, max));
        }
        handPath(pfx, shape, len) {
            let path = this.handMap[pfx + this.cap(shape) + 'Hand'];
            // apply default values to properties if invalid
            if (path === undefined) {
                path = this.handMap[pfx + 'PlainHand'];
            }
            return path(len);
        }
        render() {
            const innerHandLength = this.constrain(this.innerHandLength, 20, 70);
            const outerHandLength = this.constrain(this.outerHandLength, 20, 70);
            const innerPathDesc = this.handPath('inner', this.innerHandShape, innerHandLength);
            const outerPathDesc = this.handPath('outer', this.outerHandShape, outerHandLength);
            const x = SHAFT_X;
            const y$1 = SHAFT_Y;
            return y`
    <svg xmlns="http://www.w3.org/2000/svg" width="56mm" height="67.5mm" viewBox="0 0 212 255">
    <defs>
        <style>
          .cls-1{fill:#939598;}
          .cls-2{fill:#d2d2d2;}
          .cls-3{fill:#808285;}
          .cls-4{fill:#ed1f24;}
          .cls-5{fill:#70bf44;}
          .cls-6{fill:#414042;}
          .cls-h{fill:"blue";stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.1px;transform-box:fill-box;}
        </style>
        <linearGradient
            id="hole-gradient"
            >
            <stop stop-color="#4f4f4f" offset="-25%" />
            <stop stop-color="grey" offset="75%" />
        </linearGradient>
    </defs>
      <g transform="translate(45 30)">

      <!-- pins - translate to top of base, between holes -->
        <g transform="scale(${mmToPix}) translate(2 20.5) ">
          <path id="pin-1" class="cls-3" d="m 0 0 h -2 c -0.5 0.5 -0.5 0.5 0 1 h 2 z" />
          <use href="#pin-1" y="2.54" />
          <use href="#pin-1" y="5.08" />
          <use href="#pin-1" y="7.62" />
          <use href="#pin-1" y="10.16" />
          <use href="#pin-1" y="12.70" />
          <use href="#pin-1" y="15.24" />
          <use href="#pin-1" y="17.78" />
        </g>

        <!-- scaled body -->
        <g>

          
          <!-- base -->
          <path class="cls-6" d="m 42.81 0 c -21.15 6.64 -37 25.23 -39.61 47.87 c -1.87 1.6 -3.08 3.95 -3.08 6.61 c 0 2.67 1.21 5.01 3.08 6.61 c 0.33 2.84 0.89 5.6 1.63 8.31 l 0 88.29 c -0.69 2.57 -1.23 5.2 -1.56 7.89 c -1.97 1.6 -3.27 4.01 -3.27 6.76 c 0 2.75 1.25 5.09 3.19 6.69 c 2.49 22.4 17.95 40.81 38.68 47.73 l 36.12 0 c 20.57 -6.87 35.96 -25.09 38.63 -47.27 c 2.08 -1.6 3.44 -4.08 3.44 -6.89 c 0 -2.81 -1.36 -5.31 -3.44 -6.89 c -0.35 -2.91 -0.93 -5.73 -1.71 -8.49 l 0 -87.35 c 0.77 -2.76 1.35 -5.59 1.71 -8.49 c 2.08 -1.6 3.44 -4.08 3.44 -6.89 c 0 -2.81 -1.36 -5.31 -3.44 -6.89 c -2.72 -22.52 -18.52 -40.96 -39.57 -47.59 l -34.23 0 z" />


          <!-- ribs -->
          <g>
              <path class="cls-3" d="M 62.89 0.01 l -5.96 0 l 0 29.99 c -1.17 0.25 -2.26 0.67 -3.32 1.17 l -13.17 -16.82 c -1.008 -1.717 -2.824 -3.461 -4.943 -2.697 c -1.398 0.505 -1.946 1.096 -1.423 4.207 l 0.006 0.01 l 14.77 18.86 c -1.36 1.51 -2.4 3.27 -3.06 5.22 l -39.71 -4.28 c -0.67 1.89 -1.24 3.82 -1.69 5.8 l 40.6 4.37 c 0.06 1.19 0.28 2.33 0.61 3.43 l -40.79 22.6 l 0 6.81 l 18.6 -10.32 l 0 42.07 l -18.6 0 l 0 5.96 l 18.6 0 l 0 41.9 l -18.58 -10.36 l 0 6.82 l 40.81 22.72 c -0.36 1.13 -0.59 2.32 -0.67 3.54 l -40.64 4.56 c 0.46 1.98 1.03 3.91 1.7 5.8 l 39.7 -4.45 c 0.64 1.91 1.64 3.61 2.94 5.11 l -14.06 18.38 l 0.04 0.04 c -0.34 0.51 -0.58 1.1 -0.58 1.75 c 0 1.77 1.44 3.2 3.2 3.2 c 1.6 0 2.88 -1.2 3.1 -2.75 l 13 -17 c 1.12 0.56 2.3 1.03 3.56 1.3 l 0 29.53 l 5.96 0 l 0 -29.44 c 1.35 -0.24 2.63 -0.68 3.83 -1.27 l 13.25 16.92 c 0.24 1.52 1.51 2.71 3.11 2.71 c 1.77 0 3.2 -1.44 3.2 -3.2 c 0 -1.05 -0.53 -1.95 -1.32 -2.52 l 0.13 -0.11 l -13.6 -17.37 c 1.31 -1.47 2.34 -3.16 3 -5.04 l 39.34 4.24 c 0.66 -1.89 1.24 -3.83 1.69 -5.8 l -40.17 -4.33 c -0.07 -1.4 -0.34 -2.74 -0.76 -4.02 l 40.33 -22.37 l 0 -6.81 l -18.8 10.42 l 0 -90.26 l 18.8 10.46 l 0 -6.81 l -40.27 -22.41 c 0.34 -1.08 0.56 -2.22 0.66 -3.39 l 40.22 -4.51 c -0.45 -1.97 -1.04 -3.9 -1.69 -5.8 l -39.25 4.4 c -0.7 -2.12 -1.82 -4.05 -3.31 -5.65 l 13 -17.01 c 1.16 -0.48 1.99 -1.63 1.99 -2.96 c 0 -1.78 -1.44 -3.2 -3.2 -3.2 c -1.08 0 -1.99 0.57 -2.58 1.38 l -0.02 -0.02 l -14.02 18.33 c -1.12 -0.51 -2.32 -0.89 -3.56 -1.12 l 0 -29.91 z m 27.27 116.38 l 0 45.41 l -18.53 10.28 c -2.23 -2.57 -5.27 -4.4 -8.75 -5.03 l 0 -38.57 c 6.17 -1.12 11.05 -5.93 12.24 -12.09 z m -45 0 c 1.16 6 5.81 10.74 11.77 12.01 l 0 38.72 c -3.37 0.72 -6.28 2.59 -8.42 5.13 l -18.66 -10.38 l 0 -45.5 l 15.31 0 z m -15.31 -5.96 l 0 -45.63 l 18.51 -10.27 c 2.15 2.64 5.12 4.58 8.57 5.31 l 0 2.56 c -7.02 1.37 -12.33 7.55 -12.33 14.97 c 0 7.43 5.31 13.62 12.33 14.98 l 0 6.2 c -5.9 1.26 -10.56 5.93 -11.76 11.88 z m 45.26 0 c -1.24 -6.1 -6.1 -10.84 -12.23 -11.95 l 0 -6.13 c 6.99 -1.4 12.27 -7.58 12.27 -14.98 c 0 -7.4 -5.27 -13.57 -12.27 -14.97 l 0 -2.49 c 3.57 -0.66 6.67 -2.56 8.91 -5.23 l 18.36 10.23 l 0 45.52 l -15.06 0 z" />
          </g>

          <!-- holes -->
          <g>
              <g>
                  <circle cx="4" cy="54.25" r="6.5" class="cls-1" />
                  <circle cx="4" cy="54.25" r="3.25" fill="url(#hole-gradient)" />
              </g>
              <g>
                  <circle cx="4" cy="172.25" r="6.5" class="cls-1" />
                  <circle cx="4" cy="172.25" r="3.25" fill="url(#hole-gradient)"/>
              </g>
              <g>
                  <circle cx="115" cy="54.25" r="6.5" class="cls-1" />
                  <circle cx="115" cy="54.25" r="3.25" fill="url(#hole-gradient)" />
              </g>
              <g>
                  <circle cx="115" cy="172.25" r="6.5" class="cls-1" />
                  <circle cx="115" cy="172.25" r="3.25" fill="url(#hole-gradient)"/>
              </g>
          </g>

          <!-- outer ('hours') hand -->
          <g>
              <path class="cls-h" transform="
                translate(${x} ${y$1 + outerPathDesc.yOff})   
                rotate(${270 + this.outerHandAngle}) 
                translate(-${outerPathDesc.xOff}, -${outerPathDesc.yOff})" 
                fill="${this.outerHandColor}" d="${outerPathDesc.path}" />
          </g>

          <!-- inner ('minutes') hand -->
          <g>
              <path class="cls-h" 
                transform="
                  translate(${x} ${y$1 + innerPathDesc.yOff})
                  rotate(${270 + this.innerHandAngle}) 
                  translate(-${innerPathDesc.xOff}, -${innerPathDesc.yOff})" 
                fill="${this.innerHandColor}" d="${innerPathDesc.path}" />
          </g>
        </g>
    </svg>`;
        }
    };
    __decorate([
        e$1()
    ], exports.BiaxialStepperElement.prototype, "outerHandLength", void 0);
    __decorate([
        e$1({ type: Number })
    ], exports.BiaxialStepperElement.prototype, "outerHandAngle", void 0);
    __decorate([
        e$1()
    ], exports.BiaxialStepperElement.prototype, "outerHandColor", void 0);
    __decorate([
        e$1()
    ], exports.BiaxialStepperElement.prototype, "outerHandShape", void 0);
    __decorate([
        e$1()
    ], exports.BiaxialStepperElement.prototype, "innerHandLength", void 0);
    __decorate([
        e$1({ type: Number })
    ], exports.BiaxialStepperElement.prototype, "innerHandAngle", void 0);
    __decorate([
        e$1()
    ], exports.BiaxialStepperElement.prototype, "innerHandColor", void 0);
    __decorate([
        e$1()
    ], exports.BiaxialStepperElement.prototype, "innerHandShape", void 0);
    exports.BiaxialStepperElement = __decorate([
        n('wokwi-biaxial-stepper')
    ], exports.BiaxialStepperElement);

    exports.fontA00 = fontA00;
    exports.fontA02 = fontA02;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));