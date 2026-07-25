import { A as rootRouteId, M as createLRUCache, N as invariant, P as decodePath, S as createInlineCssStyleAsset, b as TSR_SCRIPT_BARRIER_ID, w as getStylesheetHref, x as createInlineCssPlaceholderAsset, y as GLOBAL_TSR } from "./react-router+[...].mjs";
//#region node_modules/seroval/dist/esm/production/index.mjs
var L = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(L || {});
var v$1 = Symbol.asyncIterator;
var dr = Symbol.hasInstance;
var R = Symbol.isConcatSpreadable;
var C = Symbol.iterator;
var gr = Symbol.match;
var yr = Symbol.matchAll;
var Nr = Symbol.replace;
var br = Symbol.search;
var vr = Symbol.species;
var Cr = Symbol.split;
var Ar = Symbol.toPrimitive;
var P$1 = Symbol.toStringTag;
var Er = Symbol.unscopables;
var nt = {
	0: "Symbol.asyncIterator",
	1: "Symbol.hasInstance",
	2: "Symbol.isConcatSpreadable",
	3: "Symbol.iterator",
	4: "Symbol.match",
	5: "Symbol.matchAll",
	6: "Symbol.replace",
	7: "Symbol.search",
	8: "Symbol.species",
	9: "Symbol.split",
	10: "Symbol.toPrimitive",
	11: "Symbol.toStringTag",
	12: "Symbol.unscopables"
};
var Ce = {
	[v$1]: 0,
	[dr]: 1,
	[R]: 2,
	[C]: 3,
	[gr]: 4,
	[yr]: 5,
	[Nr]: 6,
	[br]: 7,
	[vr]: 8,
	[Cr]: 9,
	[Ar]: 10,
	[P$1]: 11,
	[Er]: 12
};
var ot = {
	0: v$1,
	1: dr,
	2: R,
	3: C,
	4: gr,
	5: yr,
	6: Nr,
	7: br,
	8: vr,
	9: Cr,
	10: Ar,
	11: P$1,
	12: Er
};
var at = {
	2: "!0",
	3: "!1",
	1: "void 0",
	0: "null",
	4: "-0",
	5: "1/0",
	6: "-1/0",
	7: "0/0"
};
var o$1 = void 0;
var st = {
	2: !0,
	3: !1,
	1: o$1,
	0: null,
	4: -0,
	5: Number.POSITIVE_INFINITY,
	6: Number.NEGATIVE_INFINITY,
	7: NaN
};
var Ae = {
	0: "Error",
	1: "EvalError",
	2: "RangeError",
	3: "ReferenceError",
	4: "SyntaxError",
	5: "TypeError",
	6: "URIError"
};
var it = {
	0: Error,
	1: EvalError,
	2: RangeError,
	3: ReferenceError,
	4: SyntaxError,
	5: TypeError,
	6: URIError
};
function c$1(e, r, t, n, a, s, i, u, l, g, S, d) {
	return {
		t: e,
		i: r,
		s: t,
		c: n,
		m: a,
		p: s,
		e: i,
		a: u,
		f: l,
		b: g,
		o: S,
		l: d
	};
}
function B$1(e) {
	return c$1(2, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
var J = B$1(2);
var Z = B$1(3);
var Ee = B$1(1);
var Ie = B$1(0);
var ut = B$1(4);
var lt = B$1(5);
var ct = B$1(6);
var ft = B$1(7);
function dn(e) {
	switch (e) {
		case "\"": return "\\\"";
		case "\\": return "\\\\";
		case `
`: return "\\n";
		case "\r": return "\\r";
		case "\b": return "\\b";
		case "	": return "\\t";
		case "\f": return "\\f";
		case "<": return "\\x3C";
		case "\u2028": return "\\u2028";
		case "\u2029": return "\\u2029";
		default: return o$1;
	}
}
function y$1(e) {
	let r = "", t = 0, n;
	for (let a = 0, s = e.length; a < s; a++) n = dn(e[a]), n && (r += e.slice(t, a) + n, t = a + 1);
	return t === 0 ? r = e : r += e.slice(t), r;
}
function gn(e) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\\"": return "\"";
		case "\\n": return `
`;
		case "\\r": return "\r";
		case "\\b": return "\b";
		case "\\t": return "	";
		case "\\f": return "\f";
		case "\\x3C": return "<";
		case "\\u2028": return "\u2028";
		case "\\u2029": return "\u2029";
		default: return e;
	}
}
function h$1(e) {
	return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, gn);
}
var U = "__SEROVAL_REFS__";
var le$1 = "$R";
var Re = `self.${le$1}`;
function yn(e) {
	return e == null ? `${Re}=${Re}||[]` : `(${Re}=${Re}||{})["${y$1(e)}"]=[]`;
}
var Ir = /* @__PURE__ */ new Map();
var j$1 = /* @__PURE__ */ new Map();
function Rr(e) {
	return Ir.has(e);
}
function bn(e) {
	return j$1.has(e);
}
function St(e) {
	if (Rr(e)) return Ir.get(e);
	throw new Pe(e);
}
function mt(e) {
	if (bn(e)) return j$1.get(e);
	throw new xe(e);
}
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof window != "undefined" ? Object.defineProperty(window, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof self != "undefined" ? Object.defineProperty(self, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof global != "undefined" && Object.defineProperty(global, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
});
function Te(e) {
	return e instanceof EvalError ? 1 : e instanceof RangeError ? 2 : e instanceof ReferenceError ? 3 : e instanceof SyntaxError ? 4 : e instanceof TypeError ? 5 : e instanceof URIError ? 6 : 0;
}
function vn(e) {
	let r = Ae[Te(e)];
	return e.name !== r ? { name: e.name } : e.constructor.name !== r ? { name: e.constructor.name } : {};
}
function $(e, r) {
	let t = vn(e), n = Object.getOwnPropertyNames(e);
	for (let a = 0, s = n.length, i; a < s; a++) i = n[a], i !== "name" && i !== "message" && (i === "stack" ? r & 4 && (t = t || {}, t[i] = e[i]) : (t = t || {}, t[i] = e[i]));
	return t;
}
function Oe(e) {
	return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function we(e) {
	switch (e) {
		case Number.POSITIVE_INFINITY: return lt;
		case Number.NEGATIVE_INFINITY: return ct;
	}
	return e !== e ? ft : Object.is(e, -0) ? ut : c$1(0, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function X(e) {
	return c$1(1, o$1, y$1(e), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function he(e) {
	return c$1(3, o$1, "" + e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function dt(e) {
	return c$1(4, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ze(e, r) {
	let t = r.valueOf();
	return c$1(5, e, t !== t ? "" : r.toISOString(), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function _e(e, r) {
	return c$1(6, e, o$1, y$1(r.source), r.flags, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function gt(e, r) {
	return c$1(17, e, Ce[r], o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function yt(e, r) {
	return c$1(18, e, y$1(St(r)), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ce(e, r, t) {
	return c$1(25, e, t, y$1(r), o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function ke(e, r, t) {
	return c$1(9, e, o$1, o$1, o$1, o$1, o$1, t, o$1, o$1, Oe(r), o$1);
}
function De(e, r) {
	return c$1(21, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Fe(e, r, t) {
	return c$1(15, e, o$1, r.constructor.name, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.length);
}
function Be(e, r, t) {
	return c$1(16, e, o$1, r.constructor.name, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.length);
}
function Ve(e, r, t) {
	return c$1(20, e, o$1, o$1, o$1, o$1, o$1, o$1, t, r.byteOffset, o$1, r.byteLength);
}
function Me(e, r, t) {
	return c$1(13, e, Te(r), o$1, y$1(r.message), t, o$1, o$1, o$1, o$1, o$1, o$1);
}
function Le(e, r, t) {
	return c$1(14, e, Te(r), o$1, y$1(r.message), t, o$1, o$1, o$1, o$1, o$1, o$1);
}
function Ue(e, r) {
	return c$1(7, e, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1, o$1);
}
function je(e, r) {
	return c$1(28, o$1, o$1, o$1, o$1, o$1, o$1, [e, r], o$1, o$1, o$1, o$1);
}
function Ye(e, r) {
	return c$1(30, o$1, o$1, o$1, o$1, o$1, o$1, [e, r], o$1, o$1, o$1, o$1);
}
function qe(e, r, t) {
	return c$1(31, e, o$1, o$1, o$1, o$1, o$1, t, r, o$1, o$1, o$1);
}
function We(e, r) {
	return c$1(32, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Ke(e, r) {
	return c$1(33, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function Ge(e, r) {
	return c$1(34, e, o$1, o$1, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1);
}
function He(e, r, t, n) {
	return c$1(35, e, t, o$1, o$1, o$1, o$1, r, o$1, o$1, o$1, n);
}
var { toString: bs } = Object.prototype;
var Cn = {
	parsing: 1,
	serialization: 2,
	deserialization: 3
};
function An(e) {
	return `Seroval Error (step: ${Cn[e]})`;
}
var En = (e, r) => An(e);
var fe = class extends Error {
	constructor(t, n) {
		super(En(t, n));
		this.cause = n;
	}
};
var _ = class extends fe {
	constructor(r) {
		super("parsing", r);
	}
};
var Je = class extends fe {
	constructor(r) {
		super("deserialization", r);
	}
};
function k(e) {
	return `Seroval Error (specific: ${e})`;
}
var x$1 = class extends Error {
	constructor(t) {
		super(k(1));
		this.value = t;
	}
};
var z = class extends Error {
	constructor(r) {
		super(k(2));
	}
};
var Q$1 = class extends Error {
	constructor(r) {
		super(k(3));
	}
};
var V = class extends Error {
	constructor(r) {
		super(k(4));
	}
};
var Pe = class extends Error {
	constructor(t) {
		super(k(5));
		this.value = t;
	}
};
var xe = class extends Error {
	constructor(r) {
		super(k(6));
	}
};
var Ze = class extends Error {
	constructor(r) {
		super(k(7));
	}
};
var O$1 = class extends Error {
	constructor(r) {
		super(k(8));
	}
};
var M$1 = class extends Error {
	constructor(r) {
		super(k(9));
	}
};
var Y = class {
	constructor(r, t) {
		this.value = r;
		this.replacement = t;
	}
};
var ee$1 = () => {
	let e = {
		p: 0,
		s: 0,
		f: 0
	};
	return e.p = new Promise((r, t) => {
		e.s = r, e.f = t;
	}), e;
};
var In = (e, r) => {
	e.s(r), e.p.s = 1, e.p.v = r;
};
var Rn = (e, r) => {
	e.f(r), e.p.s = 2, e.p.v = r;
};
var bt = ee$1.toString();
var vt = In.toString();
var Ct = Rn.toString();
var xr = () => {
	let e = [], r = [], t = !0, n = !1, a = 0, s = (l, g, S) => {
		for (S = 0; S < a; S++) r[S] && r[S][g](l);
	}, i = (l, g, S, d) => {
		for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
	}, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
		t && (r[g] = r[a], r[a--] = void 0);
	});
	return {
		__SEROVAL_STREAM__: !0,
		on: (l) => u(l),
		next: (l) => {
			t && (e.push(l), s(l, "next"));
		},
		throw: (l) => {
			t && (e.push(l), s(l, "throw"), t = !1, n = !1, r.length = 0);
		},
		return: (l) => {
			t && (e.push(l), s(l, "return"), t = !1, n = !0, r.length = 0);
		}
	};
};
var At = xr.toString();
var Tr = (e) => (r) => () => {
	let t = 0, n = {
		[e]: () => n,
		next: () => {
			if (t > r.d) return {
				done: !0,
				value: void 0
			};
			let a = t++, s = r.v[a];
			if (a === r.t) throw s;
			return {
				done: a === r.d,
				value: s
			};
		}
	};
	return n;
};
var Et = Tr.toString();
var Or = (e, r) => (t) => () => {
	let n = 0, a = -1, s = !1, i = [], u = [], l = (S = 0, d = u.length) => {
		for (; S < d; S++) u[S].s({
			done: !0,
			value: void 0
		});
	};
	t.on({
		next: (S) => {
			let d = u.shift();
			d && d.s({
				done: !1,
				value: S
			}), i.push(S);
		},
		throw: (S) => {
			let d = u.shift();
			d && d.f(S), l(), a = i.length, s = !0, i.push(S);
		},
		return: (S) => {
			let d = u.shift();
			d && d.s({
				done: !0,
				value: S
			}), l(), a = i.length, i.push(S);
		}
	});
	let g = {
		[e]: () => g,
		next: () => {
			if (a === -1) {
				let G = n++;
				if (G >= i.length) {
					let tt = r();
					return u.push(tt), tt.p;
				}
				return {
					done: !1,
					value: i[G]
				};
			}
			if (n > a) return {
				done: !0,
				value: void 0
			};
			let S = n++, d = i[S];
			if (S !== a) return {
				done: !1,
				value: d
			};
			if (s) throw d;
			return {
				done: !0,
				value: d
			};
		}
	};
	return g;
};
var It = Or.toString();
var wr = (e) => {
	let r = atob(e), t = r.length, n = new Uint8Array(t);
	for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
	return n.buffer;
};
var Rt = wr.toString();
function $e(e) {
	return "__SEROVAL_SEQUENCE__" in e;
}
function hr(e, r, t) {
	return {
		__SEROVAL_SEQUENCE__: !0,
		v: e,
		t: r,
		d: t
	};
}
function Xe(e) {
	let r = [], t = -1, n = -1, a = e[C]();
	for (;;) try {
		let s = a.next();
		if (r.push(s.value), s.done) {
			n = r.length - 1;
			break;
		}
	} catch (s) {
		t = r.length, r.push(s);
	}
	return hr(r, t, n);
}
var Pn = Tr(C);
function Pt(e) {
	return Pn(e);
}
var xt = {};
var Tt = {};
var Ot = {
	0: {},
	1: {},
	2: {},
	3: {},
	4: {},
	5: {}
};
var wt = {
	0: "[]",
	1: bt,
	2: vt,
	3: Ct,
	4: At,
	5: Rt
};
function Qe(e) {
	return "__SEROVAL_STREAM__" in e;
}
function re$1() {
	return xr();
}
function er(e) {
	let r = re$1(), t = e[v$1]();
	async function n() {
		try {
			let a = await t.next();
			a.done ? r.return(a.value) : (r.next(a.value), await n());
		} catch (a) {
			r.throw(a);
		}
	}
	return n().catch(() => {}), r;
}
var xn = Or(v$1, ee$1);
function ht(e) {
	return xn(e);
}
async function zr(e) {
	try {
		return [1, await e];
	} catch (r) {
		return [0, r];
	}
}
function me(e, r) {
	return {
		plugins: r.plugins,
		mode: e,
		marked: /* @__PURE__ */ new Set(),
		features: 63 ^ (r.disabledFeatures || 0),
		refs: r.refs || /* @__PURE__ */ new Map(),
		depthLimit: r.depthLimit || 1e3
	};
}
function pe(e, r) {
	e.marked.add(r);
}
function _r(e, r) {
	let t = e.refs.size;
	return e.refs.set(r, t), t;
}
function rr(e, r) {
	let t = e.refs.get(r);
	return t != null ? (pe(e, t), {
		type: 1,
		value: dt(t)
	}) : {
		type: 0,
		value: _r(e, r)
	};
}
function q(e, r) {
	let t = rr(e, r);
	return t.type === 1 ? t : Rr(r) ? {
		type: 2,
		value: yt(t.value, r)
	} : t;
}
function I(e, r) {
	let t = q(e, r);
	if (t.type !== 0) return t.value;
	if (r in Ce) return gt(t.value, r);
	throw new x$1(r);
}
function D$1(e, r) {
	let t = rr(e, Ot[r]);
	return t.type === 1 ? t.value : c$1(26, t.value, r, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
function tr(e) {
	let r = rr(e, xt);
	return r.type === 1 ? r.value : c$1(27, r.value, o$1, o$1, o$1, o$1, o$1, o$1, I(e, C), o$1, o$1, o$1);
}
function nr(e) {
	let r = rr(e, Tt);
	return r.type === 1 ? r.value : c$1(29, r.value, o$1, o$1, o$1, o$1, o$1, [D$1(e, 1), I(e, v$1)], o$1, o$1, o$1, o$1);
}
function or(e, r, t, n) {
	return c$1(t ? 11 : 10, e, o$1, o$1, o$1, n, o$1, o$1, o$1, o$1, Oe(r), o$1);
}
function ar(e, r, t, n) {
	return c$1(8, r, o$1, o$1, o$1, o$1, {
		k: t,
		v: n
	}, o$1, D$1(e, 0), o$1, o$1, o$1);
}
function _t(e, r, t) {
	return c$1(22, r, t, o$1, o$1, o$1, o$1, o$1, D$1(e, 1), o$1, o$1, o$1);
}
function sr(e, r, t) {
	let n = new Uint8Array(t), a = "";
	for (let s = 0, i = n.length; s < i; s++) a += String.fromCharCode(n[s]);
	return c$1(19, r, y$1(btoa(a)), o$1, o$1, o$1, o$1, o$1, D$1(e, 5), o$1, o$1, o$1);
}
function te(e, r) {
	return {
		base: me(e, r),
		child: void 0
	};
}
var Dr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return N$1(this._p, this.depth, r);
	}
};
async function On(e, r, t) {
	let n = [];
	for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = await N$1(e, r, t[a]) : n[a] = 0;
	return n;
}
async function wn(e, r, t, n) {
	return ke(t, n, await On(e, r, n));
}
async function Fr(e, r, t) {
	let n = Object.entries(t), a = [], s = [];
	for (let i = 0, u = n.length; i < u; i++) a.push(y$1(n[i][0])), s.push(await N$1(e, r, n[i][1]));
	return C in t && (a.push(I(e.base, C)), s.push(je(tr(e.base), await N$1(e, r, Xe(t))))), v$1 in t && (a.push(I(e.base, v$1)), s.push(Ye(nr(e.base), await N$1(e, r, er(t))))), P$1 in t && (a.push(I(e.base, P$1)), s.push(X(t[P$1]))), R in t && (a.push(I(e.base, R)), s.push(t[R] ? J : Z)), {
		k: a,
		v: s
	};
}
async function kr(e, r, t, n, a) {
	return or(t, n, a, await Fr(e, r, n));
}
async function hn(e, r, t, n) {
	return De(t, await N$1(e, r, n.valueOf()));
}
async function zn(e, r, t, n) {
	return Fe(t, n, await N$1(e, r, n.buffer));
}
async function _n(e, r, t, n) {
	return Be(t, n, await N$1(e, r, n.buffer));
}
async function kn(e, r, t, n) {
	return Ve(t, n, await N$1(e, r, n.buffer));
}
async function kt(e, r, t, n) {
	let a = $(n, e.base.features);
	return Me(t, n, a ? await Fr(e, r, a) : o$1);
}
async function Dn(e, r, t, n) {
	let a = $(n, e.base.features);
	return Le(t, n, a ? await Fr(e, r, a) : o$1);
}
async function Fn(e, r, t, n) {
	let a = [], s = [];
	for (let [i, u] of n.entries()) a.push(await N$1(e, r, i)), s.push(await N$1(e, r, u));
	return ar(e.base, t, a, s);
}
async function Bn(e, r, t, n) {
	let a = [];
	for (let s of n.keys()) a.push(await N$1(e, r, s));
	return Ue(t, a);
}
async function Dt(e, r, t, n) {
	let a = e.base.plugins;
	if (a) for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.async && u.test(n)) return ce(t, u.tag, await u.parse.async(n, new Dr(e, r), { id: t }));
	}
	return o$1;
}
async function Vn(e, r, t, n) {
	let [a, s] = await zr(n);
	return c$1(12, t, a, o$1, o$1, o$1, o$1, o$1, await N$1(e, r, s), o$1, o$1, o$1);
}
function Mn(e, r, t, n, a) {
	let s = [], i = t.on({
		next: (u) => {
			pe(this.base, r), N$1(this, e, u).then((l) => {
				s.push(We(r, l));
			}, (l) => {
				a(l), i();
			});
		},
		throw: (u) => {
			pe(this.base, r), N$1(this, e, u).then((l) => {
				s.push(Ke(r, l)), n(s), i();
			}, (l) => {
				a(l), i();
			});
		},
		return: (u) => {
			pe(this.base, r), N$1(this, e, u).then((l) => {
				s.push(Ge(r, l)), n(s), i();
			}, (l) => {
				a(l), i();
			});
		}
	});
}
async function Ln(e, r, t, n) {
	return qe(t, D$1(e.base, 4), await new Promise(Mn.bind(e, r, t, n)));
}
async function Un(e, r, t, n) {
	let a = [];
	for (let s = 0, i = n.v.length; s < i; s++) a[s] = await N$1(e, r, n.v[s]);
	return He(t, a, n.t, n.d);
}
async function jn(e, r, t, n) {
	if (Array.isArray(n)) return wn(e, r, t, n);
	if (Qe(n)) return Ln(e, r, t, n);
	if ($e(n)) return Un(e, r, t, n);
	let a = n.constructor;
	if (a === Y) return N$1(e, r, n.replacement);
	let s = await Dt(e, r, t, n);
	if (s) return s;
	switch (a) {
		case Object: return kr(e, r, t, n, !1);
		case o$1: return kr(e, r, t, n, !0);
		case Date: return ze(t, n);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return kt(e, r, t, n);
		case Number:
		case Boolean:
		case String:
		case BigInt: return hn(e, r, t, n);
		case ArrayBuffer: return sr(e.base, t, n);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return zn(e, r, t, n);
		case DataView: return kn(e, r, t, n);
		case Map: return Fn(e, r, t, n);
		case Set: return Bn(e, r, t, n);
		default: break;
	}
	if (a === Promise || n instanceof Promise) return Vn(e, r, t, n);
	let i = e.base.features;
	if (i & 32 && a === RegExp) return _e(t, n);
	if (i & 16) switch (a) {
		case BigInt64Array:
		case BigUint64Array: return _n(e, r, t, n);
		default: break;
	}
	if (i & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return Dn(e, r, t, n);
	if (n instanceof Error) return kt(e, r, t, n);
	if (C in n || v$1 in n) return kr(e, r, t, n, !!a);
	throw new x$1(n);
}
async function Yn(e, r, t) {
	let n = q(e.base, t);
	if (n.type !== 0) return n.value;
	let a = await Dt(e, r, n.value, t);
	if (a) return a;
	throw new x$1(t);
}
async function N$1(e, r, t) {
	if (r >= e.base.depthLimit) throw new M$1(e.base.depthLimit);
	switch (typeof t) {
		case "boolean": return t ? J : Z;
		case "undefined": return Ee;
		case "string": return X(t);
		case "number": return we(t);
		case "bigint": return he(t);
		case "object":
			if (t) {
				let n = q(e.base, t);
				return n.type === 0 ? await jn(e, r + 1, n.value, t) : n.value;
			}
			return Ie;
		case "symbol": return I(e.base, t);
		case "function": return Yn(e, r, t);
		default: throw new x$1(t);
	}
}
async function ne(e, r) {
	try {
		return await N$1(e, 0, r);
	} catch (t) {
		throw t instanceof _ ? t : new _(t);
	}
}
var oe$1 = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(oe$1 || {});
function ai(e) {
	return e;
}
function Ft(e, r) {
	for (let t = 0, n = r.length; t < n; t++) {
		let a = r[t];
		e.has(a) || (e.add(a), a.extends && Ft(e, a.extends));
	}
}
function A(e) {
	if (e) {
		let r = /* @__PURE__ */ new Set();
		return Ft(r, e), [...r];
	}
}
function Bt(e) {
	switch (e) {
		case "Int8Array": return Int8Array;
		case "Int16Array": return Int16Array;
		case "Int32Array": return Int32Array;
		case "Uint8Array": return Uint8Array;
		case "Uint16Array": return Uint16Array;
		case "Uint32Array": return Uint32Array;
		case "Uint8ClampedArray": return Uint8ClampedArray;
		case "Float32Array": return Float32Array;
		case "Float64Array": return Float64Array;
		case "BigInt64Array": return BigInt64Array;
		case "BigUint64Array": return BigUint64Array;
		default: throw new Ze(e);
	}
}
function de$1(e) {
	switch (e) {
		case "constructor":
		case "__proto__":
		case "prototype":
		case "__defineGetter__":
		case "__defineSetter__":
		case "__lookupGetter__":
		case "__lookupSetter__": return !1;
		default: return !0;
	}
}
function Vt(e) {
	switch (e) {
		case v$1:
		case R:
		case P$1:
		case C: return !0;
		default: return !1;
	}
}
var qn = 1e6;
var Wn = 1e4;
var Kn = 2e4;
function Lt(e, r) {
	switch (r) {
		case 3: return Object.freeze(e);
		case 1: return Object.preventExtensions(e);
		case 2: return Object.seal(e);
		default: return e;
	}
}
var Gn = 1e3;
function Ut(e, r) {
	var n;
	let t = r.refs || /* @__PURE__ */ new Map();
	return "types" in t || Object.assign(t, { types: /* @__PURE__ */ new Map() }), {
		mode: e,
		plugins: r.plugins,
		refs: t,
		features: (n = r.features) != null ? n : 63 ^ (r.disabledFeatures || 0),
		depthLimit: r.depthLimit || Gn
	};
}
function jt(e) {
	return {
		mode: 1,
		base: Ut(1, e),
		child: o$1,
		state: { marked: new Set(e.markedRefs) }
	};
}
var Br = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	deserialize(r) {
		return p(this._p, this.depth, r);
	}
};
function qt(e, r) {
	if (r < 0 || !Number.isFinite(r) || !Number.isInteger(r)) throw new O$1({
		t: 4,
		i: r
	});
	if (e.refs.has(r)) throw new Error("Conflicted ref id: " + r);
}
function Hn(e, r, t) {
	return qt(e.base, r), e.state.marked.has(r) && e.base.refs.set(r, t), t;
}
function Jn(e, r, t) {
	return qt(e.base, r), e.base.refs.set(r, t), t;
}
function b(e, r, t) {
	return e.mode === 1 ? Hn(e, r, t) : Jn(e, r, t);
}
function Vr(e, r, t) {
	if (Object.hasOwn(r, t)) return r[t];
	throw new O$1(e);
}
function Zn(e, r) {
	return b(e, r.i, mt(h$1(r.s)));
}
function $n(e, r, t) {
	let n = t.a, a = n.length, s = b(e, t.i, new Array(a));
	for (let i = 0, u; i < a; i++) u = n[i], u && (s[i] = p(e, r, u));
	return Lt(s, t.o), s;
}
function Mt(e, r, t) {
	de$1(r) ? e[r] = t : Object.defineProperty(e, r, {
		value: t,
		configurable: !0,
		enumerable: !0,
		writable: !0
	});
}
function Xn(e, r, t, n, a) {
	if (typeof n == "string") Mt(t, h$1(n), p(e, r, a));
	else {
		let s = p(e, r, n);
		switch (typeof s) {
			case "string":
				Mt(t, s, p(e, r, a));
				break;
			case "symbol":
				Vt(s) && (t[s] = p(e, r, a));
				break;
			default: throw new O$1(n);
		}
	}
}
function Wt(e, r, t) {
	e.base.refs.types.set(r, t);
}
function ge(e, r, t, n) {
	if (e.base.refs.types.get(t) !== n) throw new O$1(r);
}
function Kt(e, r, t, n) {
	let a = t.k;
	if (a.length > 0) for (let i = 0, u = t.v, l = a.length; i < l; i++) Xn(e, r, n, a[i], u[i]);
	return n;
}
function Qn(e, r, t) {
	let n = b(e, t.i, t.t === 10 ? {} : Object.create(null));
	return Kt(e, r, t.p, n), Lt(n, t.o), n;
}
function eo(e, r) {
	return b(e, r.i, new Date(r.s));
}
function ro(e, r) {
	if (e.base.features & 32) {
		let t = h$1(r.c);
		if (t.length > Kn) throw new O$1(r);
		return b(e, r.i, new RegExp(t, r.m));
	}
	throw new z(r);
}
function to(e, r, t) {
	let n = b(e, t.i, /* @__PURE__ */ new Set());
	for (let a = 0, s = t.a, i = s.length; a < i; a++) n.add(p(e, r, s[a]));
	return n;
}
function no(e, r, t) {
	let n = b(e, t.i, /* @__PURE__ */ new Map());
	for (let a = 0, s = t.e.k, i = t.e.v, u = s.length; a < u; a++) n.set(p(e, r, s[a]), p(e, r, i[a]));
	return n;
}
function oo(e, r) {
	if (r.s.length > qn) throw new O$1(r);
	return b(e, r.i, wr(h$1(r.s)));
}
function ao(e, r, t) {
	var u;
	let n = Bt(t.c), a = p(e, r, t.f), s = (u = t.b) != null ? u : 0;
	if (s < 0 || s > a.byteLength) throw new O$1(t);
	return b(e, t.i, new n(a, s, t.l));
}
function so(e, r, t) {
	var i;
	let n = p(e, r, t.f), a = (i = t.b) != null ? i : 0;
	if (a < 0 || a > n.byteLength) throw new O$1(t);
	return b(e, t.i, new DataView(n, a, t.l));
}
function Gt(e, r, t, n) {
	if (t.p) {
		let a = Kt(e, r, t.p, {});
		Object.defineProperties(n, Object.getOwnPropertyDescriptors(a));
	}
	return n;
}
function io(e, r, t) {
	return Gt(e, r, t, b(e, t.i, new AggregateError([], h$1(t.m))));
}
function uo(e, r, t) {
	let n = Vr(t, it, t.s);
	return Gt(e, r, t, b(e, t.i, new n(h$1(t.m))));
}
function lo(e, r, t) {
	let n = ee$1(), a = b(e, t.i, n.p), s = p(e, r, t.f);
	return t.s ? n.s(s) : n.f(s), a;
}
function co(e, r, t) {
	return b(e, t.i, Object(p(e, r, t.f)));
}
function fo(e, r, t) {
	let n = e.base.plugins;
	if (n) {
		let a = h$1(t.c);
		for (let s = 0, i = n.length; s < i; s++) {
			let u = n[s];
			if (u.tag === a) return b(e, t.i, u.deserialize(t.s, new Br(e, r), { id: t.i }));
		}
	}
	throw new Q$1(t.c);
}
function So(e, r) {
	let t = b(e, r.i, b(e, r.s, ee$1()).p);
	return Wt(e, r.s, 22), t;
}
function mo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return ge(e, t, t.i, 22), n.s(p(e, r, t.a[1])), o$1;
	throw new V("Promise");
}
function po(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return ge(e, t, t.i, 22), n.f(p(e, r, t.a[1])), o$1;
	throw new V("Promise");
}
function go(e, r, t) {
	p(e, r, t.a[0]);
	return Pt(p(e, r, t.a[1]));
}
function yo(e, r, t) {
	p(e, r, t.a[0]);
	return ht(p(e, r, t.a[1]));
}
function No(e, r, t) {
	let n = b(e, t.i, re$1());
	Wt(e, t.i, 31);
	let a = t.a, s = a.length;
	if (s) for (let i = 0; i < s; i++) p(e, r, a[i]);
	return n;
}
function bo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return ge(e, t, t.i, 31), n.next(p(e, r, t.f)), o$1;
	throw new V("Stream");
}
function vo(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return ge(e, t, t.i, 31), n.throw(p(e, r, t.f)), o$1;
	throw new V("Stream");
}
function Co(e, r, t) {
	let n = e.base.refs.get(t.i);
	if (n) return ge(e, t, t.i, 31), n.return(p(e, r, t.f)), o$1;
	throw new V("Stream");
}
function Ao(e, r, t) {
	return p(e, r, t.f), o$1;
}
function Eo(e, r, t) {
	return p(e, r, t.a[1]), o$1;
}
function Io(e, r, t) {
	let n = b(e, t.i, hr([], t.s, t.l));
	for (let a = 0, s = t.a.length; a < s; a++) n.v[a] = p(e, r, t.a[a]);
	return n;
}
function p(e, r, t) {
	if (r > e.base.depthLimit) throw new M$1(e.base.depthLimit);
	switch (r += 1, t.t) {
		case 2: return Vr(t, st, t.s);
		case 0: return Number(t.s);
		case 1: return h$1(String(t.s));
		case 3:
			if (String(t.s).length > Wn) throw new O$1(t);
			return BigInt(t.s);
		case 4: return e.base.refs.get(t.i);
		case 18: return Zn(e, t);
		case 9: return $n(e, r, t);
		case 10:
		case 11: return Qn(e, r, t);
		case 5: return eo(e, t);
		case 6: return ro(e, t);
		case 7: return to(e, r, t);
		case 8: return no(e, r, t);
		case 19: return oo(e, t);
		case 16:
		case 15: return ao(e, r, t);
		case 20: return so(e, r, t);
		case 14: return io(e, r, t);
		case 13: return uo(e, r, t);
		case 12: return lo(e, r, t);
		case 17: return Vr(t, ot, t.s);
		case 21: return co(e, r, t);
		case 25: return fo(e, r, t);
		case 22: return So(e, t);
		case 23: return mo(e, r, t);
		case 24: return po(e, r, t);
		case 28: return go(e, r, t);
		case 30: return yo(e, r, t);
		case 31: return No(e, r, t);
		case 32: return bo(e, r, t);
		case 33: return vo(e, r, t);
		case 34: return Co(e, r, t);
		case 27: return Ao(e, r, t);
		case 29: return Eo(e, r, t);
		case 35: return Io(e, r, t);
		default: throw new z(t);
	}
}
function ir(e, r) {
	try {
		return p(e, 0, r);
	} catch (t) {
		throw new Je(t);
	}
}
var Ro = () => T;
var Po = Ro.toString();
var Ht = /=>/.test(Po);
function ur(e, r) {
	return Ht ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>" + (r.startsWith("{") ? "(" + r + ")" : r) : "function(" + e.join(",") + "){return " + r + "}";
}
function Jt(e, r) {
	return Ht ? (e.length === 1 ? e[0] : "(" + e.join(",") + ")") + "=>{" + r + "}" : "function(" + e.join(",") + "){" + r + "}";
}
var Xt = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_";
var Zt = Xt.length;
var Qt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
var $t = Qt.length;
function Mr(e) {
	let r = e % Zt, t = Xt[r];
	for (e = (e - r) / Zt; e > 0;) r = e % $t, t += Qt[r], e = (e - r) / $t;
	return t;
}
var xo = /^[$A-Z_][0-9A-Z_$]*$/i;
function Lr(e) {
	let r = e[0];
	return (r === "$" || r === "_" || r >= "A" && r <= "Z" || r >= "a" && r <= "z") && xo.test(e);
}
function Ne(e) {
	switch (e.t) {
		case 0: return e.s + "=" + e.v;
		case 2: return e.s + ".set(" + e.k + "," + e.v + ")";
		case 1: return e.s + ".add(" + e.v + ")";
		case 3: return e.s + ".delete(" + e.k + ")";
		case 4: return "Object.defineProperty(" + e.s + ",\"__proto__\",{value:" + e.k + ",configurable:!0,enumerable:!0,writable:!0})";
	}
}
function To(e) {
	let r = [], t = e[0];
	for (let n = 1, a = e.length, s, i = t; n < a; n++) s = e[n], s.t === 0 && s.v === i.v ? t = {
		t: 0,
		s: s.s,
		k: o$1,
		v: Ne(t)
	} : s.t === 2 && s.s === i.s ? t = {
		t: 2,
		s: Ne(t),
		k: s.k,
		v: s.v
	} : s.t === 1 && s.s === i.s ? t = {
		t: 1,
		s: Ne(t),
		k: o$1,
		v: s.v
	} : s.t === 3 && s.s === i.s ? t = {
		t: 3,
		s: Ne(t),
		k: s.k,
		v: o$1
	} : (r.push(t), t = s), i = s;
	return r.push(t), r;
}
function sn(e) {
	if (e.length) {
		let r = "", t = To(e);
		for (let n = 0, a = t.length; n < a; n++) r += Ne(t[n]) + ",";
		return r;
	}
	return o$1;
}
var Oo = "Object.create(null)";
var wo = "new Set";
var ho = "new Map";
var zo = "Promise.resolve";
var _o = "Promise.reject";
var ko = {
	3: "Object.freeze",
	2: "Object.seal",
	1: "Object.preventExtensions",
	0: o$1
};
function un(e, r) {
	return {
		mode: e,
		plugins: r.plugins,
		features: r.features,
		marked: new Set(r.markedRefs),
		stack: [],
		flags: [],
		assignments: []
	};
}
function cr(e) {
	return {
		mode: 2,
		base: un(2, e),
		state: e,
		child: o$1
	};
}
var Ur = class {
	constructor(r) {
		this._p = r;
	}
	serialize(r) {
		return f$1(this._p, r);
	}
};
function Fo(e, r) {
	let t = e.valid.get(r);
	t ?? (t = e.valid.size, e.valid.set(r, t));
	let n = e.vars[t];
	return n ?? (n = Mr(t), e.vars[t] = n), n;
}
function Bo(e) {
	return le$1 + "[" + e + "]";
}
function m$1(e, r) {
	return e.mode === 1 ? Fo(e.state, r) : Bo(r);
}
function w$1(e, r) {
	e.marked.add(r);
}
function jr(e, r) {
	return e.marked.has(r);
}
function qr(e, r, t) {
	r !== 0 && (w$1(e.base, t), e.base.flags.push({
		type: r,
		value: m$1(e, t)
	}));
}
function Vo(e) {
	let r = "";
	for (let t = 0, n = e.flags, a = n.length; t < a; t++) {
		let s = n[t];
		r += ko[s.type] + "(" + s.value + "),";
	}
	return r;
}
function ln(e) {
	let r = sn(e.assignments), t = Vo(e);
	return r ? t ? r + t : r : t;
}
function Wr(e, r, t) {
	e.assignments.push({
		t: 0,
		s: r,
		k: o$1,
		v: t
	});
}
function Mo(e, r, t) {
	e.base.assignments.push({
		t: 1,
		s: m$1(e, r),
		k: o$1,
		v: t
	});
}
function ye$1(e, r, t, n) {
	e.base.assignments.push({
		t: 2,
		s: m$1(e, r),
		k: t,
		v: n
	});
}
function en(e, r, t) {
	e.base.assignments.push({
		t: 3,
		s: m$1(e, r),
		k: t,
		v: o$1
	});
}
function be(e, r, t, n) {
	Wr(e.base, m$1(e, r) + "[" + t + "]", n);
}
function Yr(e, r, t, n) {
	if (!de$1(t)) {
		e.base.assignments.push({
			t: 4,
			s: m$1(e, r),
			k: n,
			v: o$1
		});
		return;
	}
	Wr(e.base, m$1(e, r) + "." + t, n);
}
function Lo(e, r, t, n) {
	Wr(e.base, m$1(e, r) + ".v[" + t + "]", n);
}
function F$1(e, r) {
	return r.t === 4 && e.stack.includes(r.i);
}
function ae(e, r, t) {
	return e.mode === 1 && !jr(e.base, r) ? t : m$1(e, r) + "=" + t;
}
function Uo(e) {
	return U + ".get(\"" + e.s + "\")";
}
function rn(e, r, t, n) {
	return t ? F$1(e.base, t) ? (w$1(e.base, r), be(e, r, n, m$1(e, t.i)), "") : f$1(e, t) : "";
}
function jo(e, r) {
	let t = r.i, n = r.a, a = n.length;
	if (a > 0) {
		e.base.stack.push(t);
		let s = rn(e, t, n[0], 0), i = s === "";
		for (let u = 1, l; u < a; u++) l = rn(e, t, n[u], u), s += "," + l, i = l === "";
		return e.base.stack.pop(), qr(e, r.o, r.i), "[" + s + (i ? ",]" : "]");
	}
	return "[]";
}
function tn(e, r, t, n) {
	if (typeof t == "string") {
		let a = Number(t), s = a >= 0 && a.toString() === t || Lr(t);
		if (F$1(e.base, n)) {
			let i = m$1(e, n.i);
			return w$1(e.base, r.i), s && a !== a ? Yr(e, r.i, t, i) : be(e, r.i, s ? t : "\"" + t + "\"", i), "";
		}
		return de$1(t) ? (s ? t : "\"" + t + "\"") + ":" + f$1(e, n) : "[\"" + t + "\"]:" + f$1(e, n);
	}
	return "[" + f$1(e, t) + "]:" + f$1(e, n);
}
function cn(e, r, t) {
	let n = t.k, a = n.length;
	if (a > 0) {
		let s = t.v;
		e.base.stack.push(r.i);
		let i = tn(e, r, n[0], s[0]);
		for (let u = 1, l = i; u < a; u++) l = tn(e, r, n[u], s[u]), i += (l && i && ",") + l;
		return e.base.stack.pop(), "{" + i + "}";
	}
	return "{}";
}
function Yo(e, r) {
	return qr(e, r.o, r.i), cn(e, r, r.p);
}
function qo(e, r, t, n) {
	let a = cn(e, r, t);
	return a !== "{}" ? "Object.assign(" + n + "," + a + ")" : n;
}
function Wo(e, r, t, n, a) {
	let s = e.base, i = f$1(e, a), u = Number(n), l = u >= 0 && u.toString() === n || Lr(n);
	if (F$1(s, a)) l && u !== u ? Yr(e, r.i, n, i) : be(e, r.i, l ? n : "\"" + n + "\"", i);
	else {
		let g = s.assignments;
		s.assignments = t, l && u !== u ? Yr(e, r.i, n, i) : be(e, r.i, l ? n : "\"" + n + "\"", i), s.assignments = g;
	}
}
function Ko(e, r, t, n, a) {
	if (typeof n == "string") Wo(e, r, t, n, a);
	else {
		let s = e.base, i = s.stack;
		s.stack = [];
		let u = f$1(e, a);
		s.stack = i;
		let l = s.assignments;
		s.assignments = t, be(e, r.i, f$1(e, n), u), s.assignments = l;
	}
}
function Go(e, r, t) {
	let n = t.k, a = n.length;
	if (a > 0) {
		let s = [], i = t.v;
		e.base.stack.push(r.i);
		for (let u = 0; u < a; u++) Ko(e, r, s, n[u], i[u]);
		return e.base.stack.pop(), sn(s);
	}
	return o$1;
}
function Kr(e, r, t) {
	if (r.p) {
		let n = e.base;
		if (n.features & 8) t = qo(e, r, r.p, t);
		else {
			w$1(n, r.i);
			let a = Go(e, r, r.p);
			if (a) return "(" + ae(e, r.i, t) + "," + a + m$1(e, r.i) + ")";
		}
	}
	return t;
}
function Ho(e, r) {
	return qr(e, r.o, r.i), Kr(e, r, Oo);
}
function Jo(e) {
	return "new Date(\"" + e.s + "\")";
}
function Zo(e, r) {
	if (e.base.features & 32) return "/" + h$1(r.c) + "/" + r.m;
	throw new z(r);
}
function nn(e, r, t) {
	let n = e.base;
	return F$1(n, t) ? (w$1(n, r), Mo(e, r, m$1(e, t.i)), "") : f$1(e, t);
}
function $o(e, r) {
	let t = wo, n = r.a, a = n.length, s = r.i;
	if (a > 0) {
		e.base.stack.push(s);
		let i = nn(e, s, n[0]);
		for (let u = 1, l = i; u < a; u++) l = nn(e, s, n[u]), i += (l && i && ",") + l;
		e.base.stack.pop(), i && (t += "([" + i + "])");
	}
	return t;
}
function on(e, r, t, n, a) {
	let s = e.base;
	if (F$1(s, t)) {
		let i = m$1(e, t.i);
		if (w$1(s, r), F$1(s, n)) return ye$1(e, r, i, m$1(e, n.i)), "";
		if (n.t !== 4 && n.i != null && jr(s, n.i)) {
			let l = "(" + f$1(e, n) + ",[" + a + "," + a + "])";
			return ye$1(e, r, i, m$1(e, n.i)), en(e, r, a), l;
		}
		let u = s.stack;
		return s.stack = [], ye$1(e, r, i, f$1(e, n)), s.stack = u, "";
	}
	if (F$1(s, n)) {
		let i = m$1(e, n.i);
		if (w$1(s, r), t.t !== 4 && t.i != null && jr(s, t.i)) {
			let l = "(" + f$1(e, t) + ",[" + a + "," + a + "])";
			return ye$1(e, r, m$1(e, t.i), i), en(e, r, a), l;
		}
		let u = s.stack;
		return s.stack = [], ye$1(e, r, f$1(e, t), i), s.stack = u, "";
	}
	return "[" + f$1(e, t) + "," + f$1(e, n) + "]";
}
function Xo(e, r) {
	let t = ho, n = r.e.k, a = n.length, s = r.i, i = r.f, u = m$1(e, i.i), l = e.base;
	if (a > 0) {
		let g = r.e.v;
		l.stack.push(s);
		let S = on(e, s, n[0], g[0], u);
		for (let d = 1, G = S; d < a; d++) G = on(e, s, n[d], g[d], u), S += (G && S && ",") + G;
		l.stack.pop(), S && (t += "([" + S + "])");
	}
	return i.t === 26 && (w$1(l, i.i), t = "(" + f$1(e, i) + "," + t + ")"), t;
}
function Qo(e, r) {
	return W(e, r.f) + "(\"" + r.s + "\")";
}
function ea(e, r) {
	return "new " + r.c + "(" + f$1(e, r.f) + "," + r.b + "," + r.l + ")";
}
function ra(e, r) {
	return "new DataView(" + f$1(e, r.f) + "," + r.b + "," + r.l + ")";
}
function ta(e, r) {
	let t = r.i;
	e.base.stack.push(t);
	let n = Kr(e, r, "new AggregateError([],\"" + r.m + "\")");
	return e.base.stack.pop(), n;
}
function na(e, r) {
	return Kr(e, r, "new " + Ae[r.s] + "(\"" + r.m + "\")");
}
function oa(e, r) {
	let t, n = r.f, a = r.i, s = r.s ? zo : _o, i = e.base;
	if (F$1(i, n)) {
		let u = m$1(e, n.i);
		t = s + (r.s ? "().then(" + ur([], u) + ")" : "().catch(" + Jt([], "throw " + u) + ")");
	} else {
		i.stack.push(a);
		let u = f$1(e, n);
		i.stack.pop(), t = s + "(" + u + ")";
	}
	return t;
}
function aa(e, r) {
	return "Object(" + f$1(e, r.f) + ")";
}
function W(e, r) {
	let t = f$1(e, r);
	return r.t === 4 ? t : "(" + t + ")";
}
function sa(e, r) {
	if (e.mode === 1) throw new z(r);
	return "(" + ae(e, r.s, W(e, r.f) + "()") + ").p";
}
function ia(e, r) {
	if (e.mode === 1) throw new z(r);
	return W(e, r.a[0]) + "(" + m$1(e, r.i) + "," + f$1(e, r.a[1]) + ")";
}
function ua(e, r) {
	if (e.mode === 1) throw new z(r);
	return W(e, r.a[0]) + "(" + m$1(e, r.i) + "," + f$1(e, r.a[1]) + ")";
}
function la(e, r) {
	let t = e.base.plugins;
	if (t) for (let n = 0, a = t.length; n < a; n++) {
		let s = t[n];
		if (s.tag === r.c) return e.child ??= new Ur(e), s.serialize(r.s, e.child, { id: r.i });
	}
	throw new Q$1(r.c);
}
function ca(e, r) {
	let t = "", n = !1;
	return r.f.t !== 4 && (w$1(e.base, r.f.i), t = "(" + f$1(e, r.f) + ",", n = !0), t += ae(e, r.i, "(" + Et + ")(" + m$1(e, r.f.i) + ")"), n && (t += ")"), t;
}
function fa(e, r) {
	return W(e, r.a[0]) + "(" + f$1(e, r.a[1]) + ")";
}
function Sa(e, r) {
	let t = r.a[0], n = r.a[1], a = e.base, s = "";
	t.t !== 4 && (w$1(a, t.i), s += "(" + f$1(e, t)), n.t !== 4 && (w$1(a, n.i), s += (s ? "," : "(") + f$1(e, n)), s && (s += ",");
	let i = ae(e, r.i, "(" + It + ")(" + m$1(e, n.i) + "," + m$1(e, t.i) + ")");
	return s ? s + i + ")" : i;
}
function ma(e, r) {
	return W(e, r.a[0]) + "(" + f$1(e, r.a[1]) + ")";
}
function pa(e, r) {
	let t = ae(e, r.i, W(e, r.f) + "()"), n = r.a.length;
	if (n) {
		let a = f$1(e, r.a[0]);
		for (let s = 1; s < n; s++) a += "," + f$1(e, r.a[s]);
		return "(" + t + "," + a + "," + m$1(e, r.i) + ")";
	}
	return t;
}
function da(e, r) {
	return m$1(e, r.i) + ".next(" + f$1(e, r.f) + ")";
}
function ga(e, r) {
	return m$1(e, r.i) + ".throw(" + f$1(e, r.f) + ")";
}
function ya(e, r) {
	return m$1(e, r.i) + ".return(" + f$1(e, r.f) + ")";
}
function an(e, r, t, n) {
	let a = e.base;
	return F$1(a, n) ? (w$1(a, r), Lo(e, r, t, m$1(e, n.i)), "") : f$1(e, n);
}
function Na(e, r) {
	let t = r.a, n = t.length, a = r.i;
	if (n > 0) {
		e.base.stack.push(a);
		let s = an(e, a, 0, t[0]);
		for (let i = 1, u = s; i < n; i++) u = an(e, a, i, t[i]), s += (u && s && ",") + u;
		if (e.base.stack.pop(), s) return "{__SEROVAL_SEQUENCE__:!0,v:[" + s + "],t:" + r.s + ",d:" + r.l + "}";
	}
	return "{__SEROVAL_SEQUENCE__:!0,v:[],t:-1,d:0}";
}
function ba(e, r) {
	switch (r.t) {
		case 17: return nt[r.s];
		case 18: return Uo(r);
		case 9: return jo(e, r);
		case 10: return Yo(e, r);
		case 11: return Ho(e, r);
		case 5: return Jo(r);
		case 6: return Zo(e, r);
		case 7: return $o(e, r);
		case 8: return Xo(e, r);
		case 19: return Qo(e, r);
		case 16:
		case 15: return ea(e, r);
		case 20: return ra(e, r);
		case 14: return ta(e, r);
		case 13: return na(e, r);
		case 12: return oa(e, r);
		case 21: return aa(e, r);
		case 22: return sa(e, r);
		case 25: return la(e, r);
		case 26: return wt[r.s];
		case 35: return Na(e, r);
		default: throw new z(r);
	}
}
function f$1(e, r) {
	switch (r.t) {
		case 2: return at[r.s];
		case 0: return "" + r.s;
		case 1: return "\"" + r.s + "\"";
		case 3: return r.s + "n";
		case 4: return m$1(e, r.i);
		case 23: return ia(e, r);
		case 24: return ua(e, r);
		case 27: return ca(e, r);
		case 28: return fa(e, r);
		case 29: return Sa(e, r);
		case 30: return ma(e, r);
		case 31: return pa(e, r);
		case 32: return da(e, r);
		case 33: return ga(e, r);
		case 34: return ya(e, r);
		default: return ae(e, r.i, ba(e, r));
	}
}
function Sr(e, r) {
	let t = f$1(e, r), n = r.i;
	if (n == null) return t;
	let a = ln(e.base), s = m$1(e, n), i = e.state.scopeId, u = i == null ? "" : le$1, l = a ? "(" + t + "," + a + s + ")" : t;
	if (u === "") return r.t === 10 && !a ? "(" + l + ")" : l;
	let g = i == null ? "()" : "(" + le$1 + "[\"" + y$1(i) + "\"])";
	return "(" + ur([u], l) + ")" + g;
}
var Hr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return E$1(this._p, this.depth, r);
	}
};
var Jr = class {
	constructor(r, t) {
		this._p = r;
		this.depth = t;
	}
	parse(r) {
		return E$1(this._p, this.depth, r);
	}
	parseWithError(r) {
		return K(this._p, this.depth, r);
	}
	isAlive() {
		return this._p.state.alive;
	}
	pushPendingState() {
		et(this._p);
	}
	popPendingState() {
		ve(this._p);
	}
	onParse(r) {
		se(this._p, r);
	}
	onError(r) {
		Xr(this._p, r);
	}
	addCleanup(r) {
		this._p.state.cleanups.push(r);
	}
};
function va(e) {
	return {
		alive: !0,
		pending: 0,
		initial: !0,
		buffer: [],
		onParse: e.onParse,
		onError: e.onError,
		onDone: e.onDone,
		cleanups: []
	};
}
function Zr(e) {
	return {
		type: 2,
		base: me(2, e),
		state: va(e)
	};
}
function Ca(e, r, t) {
	let n = [];
	for (let a = 0, s = t.length; a < s; a++) a in t ? n[a] = E$1(e, r, t[a]) : n[a] = 0;
	return n;
}
function Aa(e, r, t, n) {
	return ke(t, n, Ca(e, r, n));
}
function $r(e, r, t) {
	let n = Object.entries(t), a = [], s = [];
	for (let i = 0, u = n.length; i < u; i++) a.push(y$1(n[i][0])), s.push(E$1(e, r, n[i][1]));
	return C in t && (a.push(I(e.base, C)), s.push(je(tr(e.base), E$1(e, r, Xe(t))))), v$1 in t && (a.push(I(e.base, v$1)), s.push(Ye(nr(e.base), E$1(e, r, e.type === 1 ? re$1() : er(t))))), P$1 in t && (a.push(I(e.base, P$1)), s.push(X(t[P$1]))), R in t && (a.push(I(e.base, R)), s.push(t[R] ? J : Z)), {
		k: a,
		v: s
	};
}
function Gr(e, r, t, n, a) {
	return or(t, n, a, $r(e, r, n));
}
function Ea(e, r, t, n) {
	return De(t, E$1(e, r, n.valueOf()));
}
function Ia(e, r, t, n) {
	return Fe(t, n, E$1(e, r, n.buffer));
}
function Ra(e, r, t, n) {
	return Be(t, n, E$1(e, r, n.buffer));
}
function Pa(e, r, t, n) {
	return Ve(t, n, E$1(e, r, n.buffer));
}
function fn(e, r, t, n) {
	let a = $(n, e.base.features);
	return Me(t, n, a ? $r(e, r, a) : o$1);
}
function xa(e, r, t, n) {
	let a = $(n, e.base.features);
	return Le(t, n, a ? $r(e, r, a) : o$1);
}
function Ta(e, r, t, n) {
	let a = [], s = [];
	for (let [i, u] of n.entries()) a.push(E$1(e, r, i)), s.push(E$1(e, r, u));
	return ar(e.base, t, a, s);
}
function Oa(e, r, t, n) {
	let a = [];
	for (let s of n.keys()) a.push(E$1(e, r, s));
	return Ue(t, a);
}
function wa(e, r, t, n) {
	let a = qe(t, D$1(e.base, 4), []);
	return e.type === 1 || (et(e), n.on({
		next: (s) => {
			if (e.state.alive) {
				let i = K(e, r, s);
				i && se(e, We(t, i));
			}
		},
		throw: (s) => {
			if (e.state.alive) {
				let i = K(e, r, s);
				i && se(e, Ke(t, i));
			}
			ve(e);
		},
		return: (s) => {
			if (e.state.alive) {
				let i = K(e, r, s);
				i && se(e, Ge(t, i));
			}
			ve(e);
		}
	})), a;
}
function ha(e, r, t) {
	if (this.state.alive) {
		let n = K(this, r, t);
		n && se(this, c$1(23, e, o$1, o$1, o$1, o$1, o$1, [D$1(this.base, 2), n], o$1, o$1, o$1, o$1)), ve(this);
	}
}
function za(e, r, t) {
	if (this.state.alive) {
		let n = K(this, r, t);
		n && se(this, c$1(24, e, o$1, o$1, o$1, o$1, o$1, [D$1(this.base, 3), n], o$1, o$1, o$1, o$1));
	}
	ve(this);
}
function _a(e, r, t, n) {
	let a = _r(e.base, {});
	return e.type === 2 && (et(e), n.then(ha.bind(e, a, r), za.bind(e, a, r))), _t(e.base, t, a);
}
function ka(e, r, t, n, a) {
	for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.sync && u.test(n)) return ce(t, u.tag, u.parse.sync(n, new Hr(e, r), { id: t }));
	}
	return o$1;
}
function Da(e, r, t, n, a) {
	for (let s = 0, i = a.length; s < i; s++) {
		let u = a[s];
		if (u.parse.stream && u.test(n)) return ce(t, u.tag, u.parse.stream(n, new Jr(e, r), { id: t }));
	}
	return o$1;
}
function Sn(e, r, t, n) {
	let a = e.base.plugins;
	return a ? e.type === 1 ? ka(e, r, t, n, a) : Da(e, r, t, n, a) : o$1;
}
function Fa(e, r, t, n) {
	let a = [];
	for (let s = 0, i = n.v.length; s < i; s++) a[s] = E$1(e, r, n.v[s]);
	return He(t, a, n.t, n.d);
}
function Ba(e, r, t, n, a) {
	switch (a) {
		case Object: return Gr(e, r, t, n, !1);
		case o$1: return Gr(e, r, t, n, !0);
		case Date: return ze(t, n);
		case Error:
		case EvalError:
		case RangeError:
		case ReferenceError:
		case SyntaxError:
		case TypeError:
		case URIError: return fn(e, r, t, n);
		case Number:
		case Boolean:
		case String:
		case BigInt: return Ea(e, r, t, n);
		case ArrayBuffer: return sr(e.base, t, n);
		case Int8Array:
		case Int16Array:
		case Int32Array:
		case Uint8Array:
		case Uint16Array:
		case Uint32Array:
		case Uint8ClampedArray:
		case Float32Array:
		case Float64Array: return Ia(e, r, t, n);
		case DataView: return Pa(e, r, t, n);
		case Map: return Ta(e, r, t, n);
		case Set: return Oa(e, r, t, n);
		default: break;
	}
	if (a === Promise || n instanceof Promise) return _a(e, r, t, n);
	let s = e.base.features;
	if (s & 32 && a === RegExp) return _e(t, n);
	if (s & 16) switch (a) {
		case BigInt64Array:
		case BigUint64Array: return Ra(e, r, t, n);
		default: break;
	}
	if (s & 1 && typeof AggregateError != "undefined" && (a === AggregateError || n instanceof AggregateError)) return xa(e, r, t, n);
	if (n instanceof Error) return fn(e, r, t, n);
	if (C in n || v$1 in n) return Gr(e, r, t, n, !!a);
	throw new x$1(n);
}
function Va(e, r, t, n) {
	if (Array.isArray(n)) return Aa(e, r, t, n);
	if (Qe(n)) return wa(e, r, t, n);
	if ($e(n)) return Fa(e, r, t, n);
	let a = n.constructor;
	if (a === Y) return E$1(e, r, n.replacement);
	return Sn(e, r, t, n) || Ba(e, r, t, n, a);
}
function Ma(e, r, t) {
	let n = q(e.base, t);
	if (n.type !== 0) return n.value;
	let a = Sn(e, r, n.value, t);
	if (a) return a;
	throw new x$1(t);
}
function E$1(e, r, t) {
	if (r >= e.base.depthLimit) throw new M$1(e.base.depthLimit);
	switch (typeof t) {
		case "boolean": return t ? J : Z;
		case "undefined": return Ee;
		case "string": return X(t);
		case "number": return we(t);
		case "bigint": return he(t);
		case "object":
			if (t) {
				let n = q(e.base, t);
				return n.type === 0 ? Va(e, r + 1, n.value, t) : n.value;
			}
			return Ie;
		case "symbol": return I(e.base, t);
		case "function": return Ma(e, r, t);
		default: throw new x$1(t);
	}
}
function se(e, r) {
	e.state.initial ? e.state.buffer.push(r) : Qr(e, r, !1);
}
function Xr(e, r) {
	if (e.state.onError) e.state.onError(r);
	else throw r instanceof _ ? r : new _(r);
}
function mn(e) {
	e.state.onDone && e.state.onDone();
	for (let r = 0, t = e.state.cleanups.length; r < t; r++) e.state.cleanups[r]();
}
function Qr(e, r, t) {
	try {
		e.state.onParse(r, t);
	} catch (n) {
		Xr(e, n);
	}
}
function et(e) {
	e.state.pending++;
}
function ve(e) {
	--e.state.pending <= 0 && mn(e);
}
function K(e, r, t) {
	try {
		return E$1(e, r, t);
	} catch (n) {
		return Xr(e, n), o$1;
	}
}
function rt(e, r) {
	let t = K(e, 0, r);
	t && (Qr(e, t, !0), e.state.initial = !1, La(e, e.state), e.state.pending <= 0 && mr(e));
}
function La(e, r) {
	for (let t = 0, n = r.buffer.length; t < n; t++) Qr(e, r.buffer[t], !1);
}
function mr(e) {
	e.state.alive && (mn(e), e.state.alive = !1);
}
async function lu(e, r = {}) {
	return await ne(te(2, {
		plugins: A(r.plugins),
		disabledFeatures: r.disabledFeatures,
		refs: r.refs
	}), e);
}
function pn(e, r) {
	let t = A(r.plugins), n = Zr({
		plugins: t,
		refs: r.refs,
		disabledFeatures: r.disabledFeatures,
		onParse(a, s) {
			let i = cr({
				plugins: t,
				features: n.base.features,
				scopeId: r.scopeId,
				markedRefs: n.base.marked
			}), u;
			try {
				u = Sr(i, a);
			} catch (l) {
				r.onError && r.onError(l);
				return;
			}
			r.onSerialize(u, s);
		},
		onError: r.onError,
		onDone: r.onDone
	});
	return rt(n, e), mr.bind(null, n);
}
function cu(e, r) {
	let n = Zr({
		plugins: A(r.plugins),
		refs: r.refs,
		disabledFeatures: r.disabledFeatures,
		depthLimit: r.depthLimit,
		onParse: r.onParse,
		onError: r.onError,
		onDone: r.onDone
	});
	return rt(n, e), mr.bind(null, n);
}
function Ou(e, r = {}) {
	var i;
	let t = A(r.plugins), n = r.disabledFeatures || 0, a = (i = e.f) != null ? i : 63;
	return ir(jt({
		plugins: t,
		markedRefs: e.m,
		features: a & ~n,
		disabledFeatures: n
	}), e.t);
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/transformer.js
/**
* Create a strongly-typed serialization adapter for SSR hydration.
* Use to register custom types with the router serializer.
*/
function createSerializationAdapter(opts) {
	return opts;
}
/** Create a Seroval plugin for server-side serialization only. */
/* @__NO_SIDE_EFFECTS__ */
function makeSsrSerovalPlugin(serializationAdapter, options) {
	return /* @__PURE__ */ ai({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: { stream(value, ctx, _data) {
			return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
		} },
		serialize(node, ctx, _data) {
			options.didRun = true;
			return GLOBAL_TSR + ".t.get(\"" + serializationAdapter.key + "\")(" + ctx.serialize(node.v) + ")";
		},
		deserialize: void 0
	});
}
/** Create a Seroval plugin for client/server symmetric (de)serialization. */
/* @__NO_SIDE_EFFECTS__ */
function makeSerovalPlugin(serializationAdapter) {
	return /* @__PURE__ */ ai({
		tag: "$TSR/t/" + serializationAdapter.key,
		test: serializationAdapter.test,
		parse: {
			sync(value, ctx, _data) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			async async(value, ctx, _data) {
				return { v: await ctx.parse(serializationAdapter.toSerializable(value)) };
			},
			stream(value, ctx, _data) {
				return { v: ctx.parse(serializationAdapter.toSerializable(value)) };
			}
		},
		serialize: void 0,
		deserialize(node, ctx, _data) {
			return serializationAdapter.fromSerializable(ctx.deserialize(node.v));
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/RawStream.js
/**
* Marker class for ReadableStream<Uint8Array> that should be serialized
* with base64 encoding (SSR) or binary framing (server functions).
*
* Wrap your binary streams with this to get efficient serialization:
* ```ts
* // For binary data (files, images, etc.)
* return { data: new RawStream(file.stream()) }
*
* // For text-heavy data (RSC payloads, etc.)
* return { data: new RawStream(rscStream, { hint: 'text' }) }
* ```
*/
var RawStream = class {
	constructor(stream, options) {
		this.stream = stream;
		this.hint = options?.hint ?? "binary";
	}
};
var BufferCtor = globalThis.Buffer;
var hasNodeBuffer = !!BufferCtor && typeof BufferCtor.from === "function";
function uint8ArrayToBase64(bytes) {
	if (bytes.length === 0) return "";
	if (hasNodeBuffer) return BufferCtor.from(bytes).toString("base64");
	const CHUNK_SIZE = 32768;
	const chunks = [];
	for (let i = 0; i < bytes.length; i += CHUNK_SIZE) {
		const chunk = bytes.subarray(i, i + CHUNK_SIZE);
		chunks.push(String.fromCharCode.apply(null, chunk));
	}
	return btoa(chunks.join(""));
}
function base64ToUint8Array(base64) {
	if (base64.length === 0) return /* @__PURE__ */ new Uint8Array(0);
	if (hasNodeBuffer) {
		const buf = BufferCtor.from(base64, "base64");
		return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
	}
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes;
}
var RAW_STREAM_FACTORY_BINARY = Object.create(null);
var RAW_STREAM_FACTORY_TEXT = Object.create(null);
var RAW_STREAM_FACTORY_CONSTRUCTOR_BINARY = (stream) => new ReadableStream({ start(controller) {
	stream.on({
		next(base64) {
			try {
				controller.enqueue(base64ToUint8Array(base64));
			} catch {}
		},
		throw(error) {
			controller.error(error);
		},
		return() {
			try {
				controller.close();
			} catch {}
		}
	});
} });
var textEncoderForFactory = new TextEncoder();
var RAW_STREAM_FACTORY_CONSTRUCTOR_TEXT = (stream) => {
	return new ReadableStream({ start(controller) {
		stream.on({
			next(value) {
				try {
					if (typeof value === "string") controller.enqueue(textEncoderForFactory.encode(value));
					else controller.enqueue(base64ToUint8Array(value.$b64));
				} catch {}
			},
			throw(error) {
				controller.error(error);
			},
			return() {
				try {
					controller.close();
				} catch {}
			}
		});
	} });
};
var FACTORY_BINARY = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`;
var FACTORY_TEXT = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function toBinaryStream(readable) {
	const stream = re$1();
	const reader = readable.getReader();
	(async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					stream.return(void 0);
					break;
				}
				stream.next(uint8ArrayToBase64(value));
			}
		} catch (error) {
			stream.throw(error);
		} finally {
			reader.releaseLock();
		}
	})();
	return stream;
}
function toTextStream(readable) {
	const stream = re$1();
	const reader = readable.getReader();
	const decoder = new TextDecoder("utf-8", { fatal: true });
	(async () => {
		try {
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					try {
						const remaining = decoder.decode();
						if (remaining.length > 0) stream.next(remaining);
					} catch {}
					stream.return(void 0);
					break;
				}
				try {
					const text = decoder.decode(value, { stream: true });
					if (text.length > 0) stream.next(text);
				} catch {
					stream.next({ $b64: uint8ArrayToBase64(value) });
				}
			}
		} catch (error) {
			stream.throw(error);
		} finally {
			reader.releaseLock();
		}
	})();
	return stream;
}
/**
* SSR Plugin - uses base64 or UTF-8+base64 encoding for chunks, delegates to seroval's stream mechanism.
* Used during SSR when serializing to JavaScript code for HTML injection.
*
* Supports two modes based on RawStream hint:
* - 'binary': Always base64 encode (default)
* - 'text': Try UTF-8 first, fallback to base64 for invalid UTF-8
*/
var RawStreamSSRPlugin = /* @__PURE__ */ ai({
	tag: "tss/RawStream",
	extends: [/* @__PURE__ */ ai({
		tag: "tss/RawStreamFactory",
		test(value) {
			return value === RAW_STREAM_FACTORY_BINARY;
		},
		parse: {
			sync(_value, _ctx, _data) {
				return {};
			},
			async async(_value, _ctx, _data) {
				return {};
			},
			stream(_value, _ctx, _data) {
				return {};
			}
		},
		serialize(_node, _ctx, _data) {
			return FACTORY_BINARY;
		},
		deserialize(_node, _ctx, _data) {
			return RAW_STREAM_FACTORY_BINARY;
		}
	}), /* @__PURE__ */ ai({
		tag: "tss/RawStreamFactoryText",
		test(value) {
			return value === RAW_STREAM_FACTORY_TEXT;
		},
		parse: {
			sync(_value, _ctx, _data) {
				return {};
			},
			async async(_value, _ctx, _data) {
				return {};
			},
			stream(_value, _ctx, _data) {
				return {};
			}
		},
		serialize(_node, _ctx, _data) {
			return FACTORY_TEXT;
		},
		deserialize(_node, _ctx, _data) {
			return RAW_STREAM_FACTORY_TEXT;
		}
	})],
	test(value) {
		return value instanceof RawStream;
	},
	parse: {
		sync(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			return {
				hint: ctx.parse(value.hint),
				factory: ctx.parse(factory),
				stream: ctx.parse(re$1())
			};
		},
		async async(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			const encodedStream = value.hint === "text" ? toTextStream(value.stream) : toBinaryStream(value.stream);
			return {
				hint: await ctx.parse(value.hint),
				factory: await ctx.parse(factory),
				stream: await ctx.parse(encodedStream)
			};
		},
		stream(value, ctx, _data) {
			const factory = value.hint === "text" ? RAW_STREAM_FACTORY_TEXT : RAW_STREAM_FACTORY_BINARY;
			const encodedStream = value.hint === "text" ? toTextStream(value.stream) : toBinaryStream(value.stream);
			return {
				hint: ctx.parse(value.hint),
				factory: ctx.parse(factory),
				stream: ctx.parse(encodedStream)
			};
		}
	},
	serialize(node, ctx, _data) {
		return "(" + ctx.serialize(node.factory) + ")(" + ctx.serialize(node.stream) + ")";
	},
	deserialize(node, ctx, _data) {
		const stream = ctx.deserialize(node.stream);
		return ctx.deserialize(node.hint) === "text" ? RAW_STREAM_FACTORY_CONSTRUCTOR_TEXT(stream) : RAW_STREAM_FACTORY_CONSTRUCTOR_BINARY(stream);
	}
});
/**
* Creates an RPC plugin instance that registers raw streams with a multiplexer.
* Used for server function responses where we want binary framing.
* Note: RPC always uses binary framing regardless of hint.
*
* @param onRawStream Callback invoked when a RawStream is encountered during serialization
*/
/* @__NO_SIDE_EFFECTS__ */
function createRawStreamRPCPlugin(onRawStream) {
	let nextStreamId = 1;
	return /* @__PURE__ */ ai({
		tag: "tss/RawStream",
		test(value) {
			return value instanceof RawStream;
		},
		parse: {
			async async(value, ctx, _data) {
				const streamId = nextStreamId++;
				onRawStream(streamId, value.stream);
				return { streamId: await ctx.parse(streamId) };
			},
			stream(value, ctx, _data) {
				const streamId = nextStreamId++;
				onRawStream(streamId, value.stream);
				return { streamId: ctx.parse(streamId) };
			}
		},
		serialize() {
			throw new Error("RawStreamRPCPlugin.serialize should not be called. RPC uses JSON serialization, not JS code generation.");
		},
		deserialize() {
			throw new Error("RawStreamRPCPlugin.deserialize should not be called. Use createRawStreamDeserializePlugin on client.");
		}
	});
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/ShallowErrorPlugin.js
/**
* this plugin serializes only the `message` part of an Error
* this helps with serializing e.g. a ZodError which has functions attached that cannot be serialized
*/
var ShallowErrorPlugin = /* @__PURE__ */ ai({
	tag: "$TSR/Error",
	test(value) {
		return value instanceof Error;
	},
	parse: {
		sync(value, ctx) {
			return { message: ctx.parse(value.message) };
		},
		async async(value, ctx) {
			return { message: await ctx.parse(value.message) };
		},
		stream(value, ctx) {
			return { message: ctx.parse(value.message) };
		}
	},
	serialize(node, ctx) {
		return "new Error(" + ctx.serialize(node.message) + ")";
	},
	deserialize(node, ctx) {
		return new Error(ctx.deserialize(node.message));
	}
});
var o = {};
var P = (e) => new ReadableStream({ start: (r) => {
	e.on({
		next: (a) => {
			try {
				r.enqueue(a);
			} catch (t) {}
		},
		throw: (a) => {
			r.error(a);
		},
		return: () => {
			try {
				r.close();
			} catch (a) {}
		}
	});
} });
var ee = ai({
	tag: "seroval-plugins/web/ReadableStreamFactory",
	test(e) {
		return e === o;
	},
	parse: {
		sync() {
			return o;
		},
		async async() {
			return await Promise.resolve(o);
		},
		stream() {
			return o;
		}
	},
	serialize() {
		return P.toString();
	},
	deserialize() {
		return o;
	}
});
async function N(e, r) {
	try {
		let a = await r.read();
		a.done ? (e.return(a.value), r.releaseLock()) : (e.next(a.value), await N(e, r));
	} catch (a) {
		e.throw(a);
	}
}
function re(e) {
	e.cancel().catch(() => {}), e.releaseLock();
}
function w(e) {
	let r = re$1(), a = e.getReader(), t = re.bind(null, a);
	return N(r, a).catch(t), [r, t];
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/serializer/seroval-plugins.js
var defaultSerovalPlugins = [
	ShallowErrorPlugin,
	RawStreamSSRPlugin,
	ai({
		tag: "seroval/plugins/web/ReadableStream",
		extends: [ee],
		test(e) {
			return typeof ReadableStream == "undefined" ? !1 : e instanceof ReadableStream;
		},
		parse: {
			sync(e, r) {
				return {
					factory: r.parse(o),
					stream: r.parse(re$1())
				};
			},
			async async(e, r) {
				return {
					factory: await r.parse(o),
					stream: await r.parse(w(e)[0])
				};
			},
			stream(e, r) {
				let [a, t] = w(e);
				return r.addCleanup(t), {
					factory: r.parse(o),
					stream: r.parse(a)
				};
			}
		},
		serialize(e, r) {
			return "(" + r.serialize(e.factory) + ")(" + r.serialize(e.stream) + ")";
		},
		deserialize(e, r) {
			return P(r.deserialize(e.stream));
		}
	})
];
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-match-id.js
function dehydrateSsrMatchId(id) {
	return id.replaceAll("/", "\0");
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/tsrScript.js
var tsrScript_default = "self.$_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]}";
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/ssr-server.js
var SCOPE_ID = "tsr";
var TSR_PREFIX = GLOBAL_TSR + ".router=";
var P_PREFIX = GLOBAL_TSR + ".p(()=>";
var P_SUFFIX = ")";
function dehydrateMatch(match) {
	const dehydratedMatch = {
		i: dehydrateSsrMatchId(match.id),
		u: match.updatedAt,
		s: match.status
	};
	for (const [key, shorthand] of [
		["__beforeLoadContext", "b"],
		["loaderData", "l"],
		["error", "e"],
		["ssr", "ssr"]
	]) if (match[key] !== void 0) dehydratedMatch[shorthand] = match[key];
	if (match.globalNotFound) dehydratedMatch.g = true;
	return dehydratedMatch;
}
var INITIAL_SCRIPTS = [yn(SCOPE_ID), tsrScript_default];
var ScriptBuffer = class {
	constructor(injectScript) {
		this._scriptBarrierLifted = false;
		this._cleanedUp = false;
		this._microtaskVersion = 0;
		this._pendingMicrotaskVersion = 0;
		this.injectScript = injectScript;
		this._queue = INITIAL_SCRIPTS.slice();
	}
	enqueue(script) {
		if (this._cleanedUp) return;
		this._queue.push(script);
		if (this._scriptBarrierLifted) this.scheduleInjectBufferedScripts();
	}
	liftBarrier() {
		if (this._scriptBarrierLifted || this._cleanedUp) return;
		this._scriptBarrierLifted = true;
		if (this._queue.length > 0) this.scheduleInjectBufferedScripts();
	}
	scheduleInjectBufferedScripts() {
		if (this._pendingMicrotaskVersion !== 0) return;
		const pendingVersion = ++this._microtaskVersion;
		this._pendingMicrotaskVersion = pendingVersion;
		queueMicrotask(() => {
			if (this._pendingMicrotaskVersion !== pendingVersion) return;
			this._pendingMicrotaskVersion = 0;
			this.injectBufferedScripts();
		});
	}
	clearPendingMicrotask() {
		if (this._pendingMicrotaskVersion === 0) return;
		this._pendingMicrotaskVersion = 0;
		this._microtaskVersion++;
	}
	/**
	* Flushes any pending scripts synchronously.
	* Call this before signaling serialization finished to ensure all scripts are injected.
	*
	* IMPORTANT: Only injects if the barrier has been lifted. Before the barrier is lifted,
	* scripts should remain in the queue so takeBufferedScripts() can retrieve them
	*/
	flush() {
		if (!this._scriptBarrierLifted) return;
		if (this._cleanedUp) return;
		this.clearPendingMicrotask();
		this.injectBufferedScripts();
	}
	takeAll() {
		return this.takeScripts(this._queue.length);
	}
	takeScripts(count) {
		if (count <= 0) return void 0;
		const bufferedScripts = this._queue.splice(0, count);
		if (bufferedScripts.length === 0) return;
		if (bufferedScripts.length === 1) return bufferedScripts[0] + ";document.currentScript.remove()";
		return bufferedScripts.join(";") + ";document.currentScript.remove()";
	}
	hasPending() {
		return this._queue.length > 0;
	}
	injectBufferedScripts() {
		if (this._cleanedUp) return;
		if (this._queue.length === 0) return;
		const scriptsToInject = this.takeAll();
		if (scriptsToInject) this.injectScript?.(scriptsToInject);
	}
	cleanup() {
		this._cleanedUp = true;
		this.clearPendingMicrotask();
		this._queue = [];
		this.injectScript = void 0;
	}
};
var MANIFEST_CACHE_SIZE = 100;
var manifestCaches = /* @__PURE__ */ new WeakMap();
function getManifestCache(manifest) {
	const cache = manifestCaches.get(manifest);
	if (cache) return cache;
	const newCache = createLRUCache(MANIFEST_CACHE_SIZE);
	manifestCaches.set(manifest, newCache);
	return newCache;
}
function getInlineCssForPreparedRoutes(manifest, preparedRoutes) {
	if (preparedRoutes.inlineCss !== void 0) return preparedRoutes.inlineCss;
	const styles = manifest.inlineCss?.styles;
	const hrefs = preparedRoutes.inlineCssHrefs;
	if (!styles || !hrefs?.length) return void 0;
	let css = "";
	for (const href of hrefs) css += styles[href];
	preparedRoutes.inlineCss = css;
	return css;
}
function getInlineCssAssetForPreparedRoutes(manifest, preparedRoutes) {
	const css = getInlineCssForPreparedRoutes(manifest, preparedRoutes);
	return css === void 0 ? void 0 : createInlineCssStyleAsset(css);
}
function getMatchedRoutesCacheKey(matches) {
	let cacheKey = "";
	for (let i = 0; i < matches.length; i++) cacheKey += (i === 0 ? "" : "\0") + matches[i].routeId;
	return cacheKey;
}
function getPreparedMatchedManifestRoutes(manifest, matches, cacheKey) {
	{
		const cached = getManifestCache(manifest).get(cacheKey);
		if (cached) return cached;
	}
	const preparedRoutes = prepareMatchedManifestRoutes(manifest, matches);
	getManifestCache(manifest).set(cacheKey, preparedRoutes);
	return preparedRoutes;
}
function prepareMatchedManifestRoutes(manifest, matches) {
	const inlineStyles = manifest.inlineCss?.styles;
	const routes = {};
	if (!inlineStyles) {
		for (const match of matches) {
			const route = manifest.routes[match.routeId];
			if (route) routes[match.routeId] = route;
		}
		return {
			routes,
			hasStrippedRoutes: false
		};
	}
	const inlineCssHrefs = [];
	const seenInlineCssHrefs = /* @__PURE__ */ new Set();
	let hasStrippedRoutes = false;
	for (const match of matches) {
		const routeId = match.routeId;
		const route = manifest.routes[routeId];
		if (!route) continue;
		const nextRoute = stripInlinedStylesheetAssetsFromRoute(inlineStyles, route, inlineCssHrefs, seenInlineCssHrefs);
		if (nextRoute !== route) hasStrippedRoutes = true;
		routes[routeId] = nextRoute;
	}
	return {
		routes,
		hasStrippedRoutes,
		...inlineCssHrefs.length ? { inlineCssHrefs } : {}
	};
}
function stripInlinedStylesheetAssetsFromRoute(inlineStyles, route, inlineCssHrefs, seenInlineCssHrefs) {
	const css = route.css;
	if (!css) return route;
	if (css.length === 0) {
		const nextRoute = { ...route };
		delete nextRoute.css;
		return nextRoute;
	}
	let cssLinks;
	for (let i = 0; i < css.length; i++) {
		const link = css[i];
		const href = getStylesheetHref(link);
		if (inlineStyles[href] === void 0) {
			if (cssLinks) cssLinks.push(link);
			continue;
		}
		if (!seenInlineCssHrefs.has(href)) {
			seenInlineCssHrefs.add(href);
			inlineCssHrefs.push(href);
		}
		if (!cssLinks) cssLinks = css.slice(0, i);
	}
	if (!cssLinks) return route;
	if (cssLinks.length > 0) return {
		...route,
		css: cssLinks
	};
	const nextRoute = { ...route };
	delete nextRoute.css;
	return nextRoute;
}
function hasRouteAssets(route) {
	return !!route.scripts?.length || !!route.css?.length;
}
function hasRequestAssets(assets) {
	return !!assets && (!!assets.preloads?.length || hasRouteAssets(assets));
}
function mergeRequestAssetsIntoRootRoute(rootRoute, requestAssets) {
	const preloads = requestAssets?.preloads?.length ? [...requestAssets.preloads, ...rootRoute?.preloads ?? []] : rootRoute?.preloads;
	const scripts = requestAssets?.scripts?.length ? [...requestAssets.scripts, ...rootRoute?.scripts ?? []] : rootRoute?.scripts;
	const cssLinks = requestAssets?.css?.length ? [...requestAssets.css, ...rootRoute?.css ?? []] : rootRoute?.css;
	return {
		...rootRoute ?? {},
		...preloads?.length ? { preloads } : {},
		...scripts?.length ? { scripts } : {},
		...cssLinks?.length ? { css: cssLinks } : {}
	};
}
function attachRouterServerSsrUtils({ router, manifest, getRequestAssets }) {
	router.ssr = { get manifest() {
		if (!manifest) return manifest;
		const requestAssets = getRequestAssets?.();
		const matches = router.stores.matches.get();
		const hasAssets = hasRequestAssets(requestAssets);
		if (!hasAssets && !manifest.inlineCss) return manifest;
		let inlineCssAsset;
		let routes = manifest.routes;
		if (manifest.inlineCss) {
			const preparedManifest = getPreparedMatchedManifestRoutes(manifest, matches, getMatchedRoutesCacheKey(matches));
			inlineCssAsset = getInlineCssAssetForPreparedRoutes(manifest, preparedManifest);
			if (preparedManifest.hasStrippedRoutes) routes = {
				...manifest.routes,
				...preparedManifest.routes
			};
		}
		if (!hasAssets) return {
			...manifest.scriptFormat ? { scriptFormat: manifest.scriptFormat } : {},
			...inlineCssAsset ? { inlineStyle: inlineCssAsset } : {},
			routes
		};
		const rootRoute = routes[rootRouteId];
		return {
			...manifest.scriptFormat ? { scriptFormat: manifest.scriptFormat } : {},
			...inlineCssAsset ? { inlineStyle: inlineCssAsset } : {},
			routes: {
				...routes,
				[rootRouteId]: mergeRequestAssetsIntoRootRoute(rootRoute, requestAssets)
			}
		};
	} };
	let _dehydrated = false;
	let _serializationFinished = false;
	let streamFastPathReserved = false;
	const renderFinishedListeners = [];
	const injectedHtmlListeners = [];
	const serializationFinishedListeners = [];
	const cleanupListeners = [];
	let cleanupStarted = false;
	let injectedHtmlBuffer = "";
	const callListeners = (listeners, errorPrefix) => {
		const snapshot = listeners.slice();
		for (const l of snapshot) try {
			l();
		} catch (err) {
			console.error(`${errorPrefix}:`, err);
		}
	};
	const removeListener = (listeners, listener) => {
		const index = listeners.indexOf(listener);
		if (index >= 0) listeners.splice(index, 1);
	};
	const scriptBuffer = new ScriptBuffer((script) => {
		serverSsr.injectScript(script);
	});
	const serverSsr = {
		injectHtml: (html) => {
			if (!html || cleanupStarted) return;
			injectedHtmlBuffer += html;
			callListeners(injectedHtmlListeners, "SSR injected HTML listener error");
		},
		injectScript: (script) => {
			if (!script || cleanupStarted) return;
			const html = `<script${router.options.ssr?.nonce ? ` nonce='${router.options.ssr.nonce}'` : ""}>${script}<\/script>`;
			serverSsr.injectHtml(html);
		},
		dehydrate: async (opts) => {
			if (_dehydrated) invariant();
			let matchesToDehydrate = router.stores.matches.get();
			if (router.isShell()) matchesToDehydrate = matchesToDehydrate.slice(0, 1);
			const matches = matchesToDehydrate.map(dehydrateMatch);
			let manifestToDehydrate = void 0;
			if (manifest) {
				const cacheKey = getMatchedRoutesCacheKey(matchesToDehydrate);
				const preparedManifest = getPreparedMatchedManifestRoutes(manifest, matchesToDehydrate, cacheKey);
				manifestToDehydrate = {
					...manifest.scriptFormat ? { scriptFormat: manifest.scriptFormat } : {},
					...preparedManifest.inlineCssHrefs ? { inlineStyle: createInlineCssPlaceholderAsset() } : {},
					routes: preparedManifest.routes
				};
				const requestAssets = opts?.requestAssets;
				if (hasRequestAssets(requestAssets)) {
					const existingRoot = manifestToDehydrate.routes[rootRouteId];
					manifestToDehydrate.routes = {
						...manifestToDehydrate.routes,
						[rootRouteId]: mergeRequestAssetsIntoRootRoute(existingRoot, requestAssets)
					};
				}
			}
			const dehydratedRouter = {
				manifest: manifestToDehydrate,
				matches
			};
			const lastMatchId = matchesToDehydrate[matchesToDehydrate.length - 1]?.id;
			if (lastMatchId) dehydratedRouter.lastMatchId = dehydrateSsrMatchId(lastMatchId);
			const dehydratedData = await router.options.dehydrate?.();
			if (dehydratedData) dehydratedRouter.dehydratedData = dehydratedData;
			_dehydrated = true;
			const trackPlugins = { didRun: false };
			const serializationAdapters = router.options.serializationAdapters;
			const plugins = serializationAdapters ? serializationAdapters.map((t) => /* @__PURE__ */ makeSsrSerovalPlugin(t, trackPlugins)).concat(defaultSerovalPlugins) : defaultSerovalPlugins;
			let serializationCompleteSignaled = false;
			const signalSerializationComplete = () => {
				if (serializationCompleteSignaled || cleanupStarted) return;
				serializationCompleteSignaled = true;
				_serializationFinished = true;
				const listeners = serializationFinishedListeners.slice();
				serializationFinishedListeners.length = 0;
				for (const l of listeners) try {
					l();
				} catch (err) {
					console.error("Serialization listener error:", err);
				}
			};
			const finishScriptSerialization = () => {
				if (serializationCompleteSignaled || cleanupStarted) return;
				scriptBuffer.enqueue(GLOBAL_TSR + ".e()");
				scriptBuffer.flush();
				signalSerializationComplete();
			};
			pn(dehydratedRouter, {
				refs: /* @__PURE__ */ new Map(),
				plugins,
				onSerialize: (data, initial) => {
					let serialized = initial ? TSR_PREFIX + data : data;
					if (trackPlugins.didRun) serialized = P_PREFIX + serialized + P_SUFFIX;
					scriptBuffer.enqueue(serialized);
				},
				onError: (err) => {
					console.error("Serialization error:", err);
					if (err && err.stack) console.error(err.stack);
					finishScriptSerialization();
				},
				scopeId: SCOPE_ID,
				onDone: () => {
					finishScriptSerialization();
				}
			});
		},
		isDehydrated() {
			return _dehydrated;
		},
		isSerializationFinished() {
			return _serializationFinished;
		},
		reserveStreamFastPath() {
			if (!cleanupStarted && _serializationFinished && !streamFastPathReserved && renderFinishedListeners.length === 0 && !injectedHtmlBuffer && !scriptBuffer.hasPending()) {
				streamFastPathReserved = true;
				return true;
			}
			return false;
		},
		onInjectedHtml: (listener) => {
			if (cleanupStarted) return () => {};
			injectedHtmlListeners.push(listener);
			return () => removeListener(injectedHtmlListeners, listener);
		},
		onRenderFinished: (listener) => {
			if (cleanupStarted || streamFastPathReserved) return;
			renderFinishedListeners.push(listener);
		},
		onSerializationFinished: (listener) => {
			if (cleanupStarted) return () => {};
			if (_serializationFinished && !cleanupStarted) {
				try {
					listener();
				} catch (err) {
					console.error("Serialization listener error:", err);
				}
				return () => {};
			}
			serializationFinishedListeners.push(listener);
			return () => removeListener(serializationFinishedListeners, listener);
		},
		onCleanup: (listener) => {
			if (cleanupStarted) return;
			cleanupListeners.push(listener);
		},
		setRenderFinished: () => {
			if (cleanupStarted) return;
			scriptBuffer.liftBarrier();
			const listeners = renderFinishedListeners.slice();
			renderFinishedListeners.length = 0;
			for (const l of listeners) try {
				l();
			} catch (err) {
				console.error("Error in render finished listener:", err);
			}
			if (_serializationFinished) scriptBuffer.flush();
		},
		takeBufferedScripts() {
			const scripts = scriptBuffer.takeAll();
			if (!scripts) return void 0;
			return {
				tag: "script",
				attrs: {
					nonce: router.options.ssr?.nonce,
					className: "$tsr",
					id: TSR_SCRIPT_BARRIER_ID
				},
				children: scripts
			};
		},
		liftScriptBarrier() {
			scriptBuffer.liftBarrier();
		},
		takeBufferedHtml() {
			if (!injectedHtmlBuffer) return;
			const buffered = injectedHtmlBuffer;
			injectedHtmlBuffer = "";
			return buffered;
		},
		cleanup() {
			if (cleanupStarted) return;
			cleanupStarted = true;
			const listeners = cleanupListeners.slice();
			cleanupListeners.length = 0;
			for (const l of listeners) try {
				l();
			} catch (err) {
				console.error("Error in SSR cleanup listener:", err);
			}
			renderFinishedListeners.length = 0;
			injectedHtmlListeners.length = 0;
			serializationFinishedListeners.length = 0;
			injectedHtmlBuffer = "";
			scriptBuffer.cleanup();
			router.serverSsr = void 0;
		}
	};
	router.serverSsr = serverSsr;
	for (const listener of router.serverSsrLifecycle?.onServerSsrAttach ?? []) try {
		listener(serverSsr);
	} catch (err) {
		console.error("SSR attach listener error:", err);
	}
}
/**
* Get the origin for the request.
*
* SECURITY: We intentionally do NOT trust the Origin header for determining
* the router's origin. The Origin header can be spoofed by attackers, which
* could lead to SSRF-like vulnerabilities where redirects are constructed
* using a malicious origin (CVE-2024-34351).
*
* Instead, we derive the origin from request.url, which is typically set by
* the server infrastructure (not client-controlled headers).
*
* For applications behind proxies that need to trust forwarded headers,
* use the router's `origin` option to explicitly configure a trusted origin.
*/
function getOrigin(request) {
	try {
		return new URL(request.url).origin;
	} catch {}
	return "http://localhost";
}
function getNormalizedURL(url, base) {
	if (typeof url === "string") url = url.replace("\\", "%5C");
	const rawUrl = new URL(url, base);
	const { path: decodedPathname, handledProtocolRelativeURL } = decodePath(rawUrl.pathname);
	const searchParams = new URLSearchParams(rawUrl.search);
	const normalizedHref = decodedPathname + (searchParams.size > 0 ? "?" : "") + searchParams.toString() + rawUrl.hash;
	return {
		url: new URL(normalizedHref, rawUrl.origin),
		handledProtocolRelativeURL
	};
}
//#endregion
//#region node_modules/cookie-es/dist/index.mjs
function splitSetCookieString(cookiesString) {
	if (Array.isArray(cookiesString)) return cookiesString.flatMap((c) => splitSetCookieString(c));
	if (typeof cookiesString !== "string") return [];
	const cookiesStrings = [];
	let pos = 0;
	let start;
	let ch;
	let lastComma;
	let nextStart;
	let cookiesSeparatorFound;
	const skipWhitespace = () => {
		while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) pos += 1;
		return pos < cookiesString.length;
	};
	const notSpecialChar = () => {
		ch = cookiesString.charAt(pos);
		return ch !== "=" && ch !== ";" && ch !== ",";
	};
	while (pos < cookiesString.length) {
		start = pos;
		cookiesSeparatorFound = false;
		while (skipWhitespace()) {
			ch = cookiesString.charAt(pos);
			if (ch === ",") {
				lastComma = pos;
				pos += 1;
				skipWhitespace();
				nextStart = pos;
				while (pos < cookiesString.length && notSpecialChar()) pos += 1;
				if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
					cookiesSeparatorFound = true;
					pos = nextStart;
					cookiesStrings.push(cookiesString.slice(start, lastComma));
					start = pos;
				} else pos = lastComma + 1;
			} else pos += 1;
		}
		if (!cookiesSeparatorFound || pos >= cookiesString.length) cookiesStrings.push(cookiesString.slice(start));
	}
	return cookiesStrings;
}
//#endregion
//#region node_modules/@tanstack/router-core/dist/esm/ssr/headers.js
function toHeadersInstance(init) {
	if (init instanceof Headers) return init;
	else if (Array.isArray(init)) return new Headers(init);
	else if (typeof init === "object") return new Headers(init);
	else return null;
}
function mergeHeaders(...headers) {
	return headers.reduce((acc, header) => {
		const headersInstance = toHeadersInstance(header);
		if (!headersInstance) return acc;
		for (const [key, value] of headersInstance.entries()) if (key === "set-cookie") splitSetCookieString(value).forEach((cookie) => acc.append("set-cookie", cookie));
		else acc.set(key, value);
		return acc;
	}, new Headers());
}
//#endregion
export { defaultSerovalPlugins as a, makeSerovalPlugin as c, lu as d, getOrigin as i, Ou as l, attachRouterServerSsrUtils as n, createRawStreamRPCPlugin as o, getNormalizedURL as r, createSerializationAdapter as s, mergeHeaders as t, cu as u };
