var hljs = new
function() {
    function e(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }
    function t(e) {
        return e.nodeName.toLowerCase()
    }
    function r(e, t) {
        var r = e && e.exec(t);
        return r && 0 == r.index
    }
    function n(e) {
        var t = (e.className + " " + (e.parentNode ? e.parentNode.className: "")).split(/\s+/);
        return t = t.map(function(e) {
            return e.replace(/^lang(uage)?-/, "")
        }),
        t.filter(function(e) {
            return m(e) || /no(-?)highlight/.test(e)
        })[0]
    }
    function i(e, t) {
        var r = {};
        for (var n in e) r[n] = e[n];
        if (t) for (var n in t) r[n] = t[n];
        return r
    }
    function a(e) {
        var r = [];
        return function n(e, i) {
            for (var a = e.firstChild; a; a = a.nextSibling) 3 == a.nodeType ? i += a.nodeValue.length: 1 == a.nodeType && (r.push({
                event: "start",
                offset: i,
                node: a
            }), i = n(a, i), t(a).match(/br|hr|img|input/) || r.push({
                event: "stop",
                offset: i,
                node: a
            }));
            return i
        } (e, 0),
        r
    }
    function s(r, n, i) {
        function a() {
            return r.length && n.length ? r[0].offset != n[0].offset ? r[0].offset < n[0].offset ? r: n: "start" == n[0].event ? r: n: r.length ? r: n
        }
        function s(r) {
            function n(t) {
                return " " + t.nodeName + '="' + e(t.value) + '"'
            }
            u += "<" + t(r) + Array.prototype.map.call(r.attributes, n).join("") + ">"
        }
        function c(e) {
            u += "</" + t(e) + ">"
        }
        function o(e) { ("start" == e.event ? s: c)(e.node)
        }
        for (var l = 0,
        u = "",
        f = []; r.length || n.length;) {
            var p = a();
            if (u += e(i.substr(l, p[0].offset - l)), l = p[0].offset, p == r) {
                f.reverse().forEach(c);
                do o(p.splice(0, 1)[0]),
                p = a();
                while (p == r && p.length && p[0].offset == l);
                f.reverse().forEach(s)
            } else "start" == p[0].event ? f.push(p[0].node) : f.pop(),
            o(p.splice(0, 1)[0])
        }
        return u + e(i.substr(l))
    }
    function c(e) {
        function t(e) {
            return e && e.source || e
        }
        function r(r, n) {
            return RegExp(t(r), "m" + (e.cI ? "i": "") + (n ? "g": ""))
        }
        function n(a, s) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var c = {},
                    o = function(t, r) {
                        e.cI && (r = r.toLowerCase()),
                        r.split(" ").forEach(function(e) {
                            var r = e.split("|");
                            c[r[0]] = [t, r[1] ? Number(r[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? o("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                        o(e, a.k[e])
                    }),
                    a.k = c
                }
                a.lR = r(a.l || /\b[A-Za-z0-9_]+\b/, !0),
                s && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = r(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = r(a.e)), a.tE = t(a.e) || "", a.eW && s.tE && (a.tE += (a.e ? "|": "") + s.tE)),
                a.i && (a.iR = r(a.i)),
                void 0 === a.r && (a.r = 1),
                a.c || (a.c = []);
                var l = [];
                a.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(t) {
                        l.push(i(e, t))
                    }) : l.push("self" == e ? a: e)
                }),
                a.c = l,
                a.c.forEach(function(e) {
                    n(e, a)
                }),
                a.starts && n(a.starts, s);
                var u = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?": e.b
                }).concat([a.tE, a.i]).map(t).filter(Boolean);
                a.t = u.length ? r(u.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        n(e)
    }
    function o(t, n, i, a) {
        function s(e, t) {
            for (var n = 0; n < t.c.length; n++) if (r(t.c[n].bR, e)) return t.c[n]
        }
        function u(e, t) {
            return r(e.eR, t) ? e: e.eW ? u(e.parent, t) : void 0
        }
        function f(e, t) {
            return ! i && r(t.iR, e)
        }
        function p(e, t) {
            var r = w.cI ? t[0].toLowerCase() : t[0];
            return e.k.hasOwnProperty(r) && e.k[r]
        }
        function d(e, t, r, n) {
            var i = n ? "": v.classPrefix,
            a = '<span class="' + i,
            s = r ? "": "</span>";
            return a += e + '">',
            a + t + s
        }
        function h() {
            if (!x.k) return e(k);
            var t = "",
            r = 0;
            x.lR.lastIndex = 0;
            for (var n = x.lR.exec(k); n;) {
                t += e(k.substr(r, n.index - r));
                var i = p(x, n);
                i ? (L += i[1], t += d(i[0], e(n[0]))) : t += e(n[0]),
                r = x.lR.lastIndex,
                n = x.lR.exec(k)
            }
            return t + e(k.substr(r))
        }
        function b() {
            if (x.sL && !N[x.sL]) return e(k);
            var t = x.sL ? o(x.sL, k, !0, C) : l(k);
            return x.r > 0 && (L += t.r),
            "continuous" == x.subLanguageMode && (C = t.top),
            d(t.language, t.value, !1, !0)
        }
        function g() {
            return void 0 !== x.sL ? b() : h()
        }
        function y(t, r) {
            var n = t.cN ? d(t.cN, "", !0) : "";
            t.rB ? (R += n, k = "") : t.eB ? (R += e(r) + n, k = "") : (R += n, k = r),
            x = Object.create(t, {
                parent: {
                    value: x
                }
            })
        }
        function M(t, r) {
            if (k += t, void 0 === r) return R += g(),
            0;
            var n = s(r, x);
            if (n) return R += g(),
            y(n, r),
            n.rB ? 0 : r.length;
            var i = u(x, r);
            if (i) {
                var a = x;
                a.rE || a.eE || (k += r),
                R += g();
                do x.cN && (R += "</span>"),
                L += x.r,
                x = x.parent;
                while (x != i.parent);
                return a.eE && (R += e(r)),
                k = "",
                i.starts && y(i.starts, ""),
                a.rE ? 0 : r.length
            }
            if (f(r, x)) throw new Error('Illegal lexeme "' + r + '" for mode "' + (x.cN || "<unnamed>") + '"');
            return k += r,
            r.length || 1
        }
        var w = m(t);
        if (!w) throw new Error('Unknown language: "' + t + '"');
        c(w);
        for (var C, x = a || w,
        R = "",
        E = x; E != w; E = E.parent) E.cN && (R = d(E.cN, "", !0) + R);
        var k = "",
        L = 0;
        try {
            for (var I, _, B = 0;;) {
                if (x.t.lastIndex = B, I = x.t.exec(n), !I) break;
                _ = M(n.substr(B, I.index - B), I[0]),
                B = I.index + _
            }
            M(n.substr(B));
            for (var E = x; E.parent; E = E.parent) E.cN && (R += "</span>");
            return {
                r: L,
                value: R,
                language: t,
                top: x
            }
        } catch(A) {
            if ( - 1 != A.message.indexOf("Illegal")) return {
                r: 0,
                value: e(n)
            };
            throw A
        }
    }
    function l(t, r) {
        r = r || v.languages || Object.keys(N);
        var n = {
            r: 0,
            value: e(t)
        },
        i = n;
        return r.forEach(function(e) {
            if (m(e)) {
                var r = o(e, t, !1);
                r.language = e,
                r.r > i.r && (i = r),
                r.r > n.r && (i = n, n = r)
            }
        }),
        i.language && (n.second_best = i),
        n
    }
    function u(e) {
        return v.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm,
        function(e, t) {
            return t.replace(/\t/g, v.tabReplace)
        })),
        v.useBR && (e = e.replace(/\n/g, "<br>")),
        e
    }
    function f(e) {
        var t = n(e);
        if (!/no(-?)highlight/.test(t)) {
            var r;
            v.useBR ? (r = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), r.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : r = e;
            var i = r.textContent,
            c = t ? o(t, i, !0) : l(i),
            f = a(r);
            if (f.length) {
                var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                p.innerHTML = c.value,
                c.value = s(f, a(p), i)
            }
            c.value = u(c.value),
            e.innerHTML = c.value,
            e.className += " hljs " + (!t && c.language || ""),
            e.result = {
                language: c.language,
                re: c.r
            },
            c.second_best && (e.second_best = {
                language: c.second_best.language,
                re: c.second_best.r
            })
        }
    }
    function p(e) {
        v = i(v, e)
    }
    function d() {
        if (!d.called) {
            d.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, f)
        }
    }
    function h() {
        addEventListener("DOMContentLoaded", d, !1),
        addEventListener("load", d, !1)
    }
    function b(e, t) {
        var r = N[e] = t(this);
        r.aliases && r.aliases.forEach(function(t) {
            y[t] = e
        })
    }
    function g() {
        return Object.keys(N)
    }
    function m(e) {
        return N[e] || N[y[e]]
    }
    var v = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    },
    N = {},
    y = {};
    this.highlight = o,
    this.highlightAuto = l,
    this.fixMarkup = u,
    this.highlightBlock = f,
    this.configure = p,
    this.initHighlighting = d,
    this.initHighlightingOnLoad = h,
    this.registerLanguage = b,
    this.listLanguages = g,
    this.getLanguage = m,
    this.inherit = i,
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*",
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*",
    this.NR = "\\b\\d+(\\.\\d+)?",
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    this.BNR = "\\b(0b[01]+)",
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    this.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    this.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [this.BE]
    },
    this.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [this.BE]
    },
    this.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    },
    this.CLCM = {
        cN: "comment",
        b: "//",
        e: "$",
        c: [this.PWM]
    },
    this.CBCM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/",
        c: [this.PWM]
    },
    this.HCM = {
        cN: "comment",
        b: "#",
        e: "$",
        c: [this.PWM]
    },
    this.NM = {
        cN: "number",
        b: this.NR,
        r: 0
    },
    this.CNM = {
        cN: "number",
        b: this.CNR,
        r: 0
    },
    this.BNM = {
        cN: "number",
        b: this.BNR,
        r: 0
    },
    this.CSSNM = {
        cN: "number",
        b: this.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    this.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gim]*/,
        i: /\n/,
        c: [this.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [this.BE]
        }]
    },
    this.TM = {
        cN: "title",
        b: this.IR,
        r: 0
    },
    this.UTM = {
        cN: "title",
        b: this.UIR,
        r: 0
    }
};
hljs.registerLanguage("javascript",
function(e) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
        },
        c: [{
            cN: "pi",
            b: /^\s*('|")use strict('|")/,
            r: 10
        },
        e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        },
        {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [e.CLCM, e.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        },
        {
            b: /\$[(.]/
        },
        {
            b: "\\." + e.IR,
            r: 0
        }]
    }
}),
hljs.registerLanguage("java",
function(e) {
    var t = e.UIR + "(<" + e.UIR + ">)?",
    r = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private";
    return {
        aliases: ["jsp"],
        k: r,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [{
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            }]
        },
        e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            },
            e.UTM]
        },
        {
            bK: "new",
            e: /\s/,
            r: 0
        },
        {
            cN: "function",
            b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: r,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                c: [e.UTM]
            },
            {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: r,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            },
            e.CLCM, e.CBCM]
        },
        e.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
}),
hljs.registerLanguage("python",
function(e) {
    var t = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    },
    r = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [t],
            r: 10
        },
        {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [t],
            r: 10
        },
        {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        },
        {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        },
        {
            b: /(b|br)'/,
            e: /'/
        },
        {
            b: /(b|br)"/,
            e: /"/
        },
        e.ASM, e.QSM]
    },
    n = {
        cN: "number",
        r: 0,
        v: [{
            b: e.BNR + "[lLjJ]?"
        },
        {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        },
        {
            b: e.CNR + "[lLjJ]?"
        }]
    },
    i = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", t, n, r]
    },
    a = {
        e: /:/,
        i: /[${=;\n]/,
        c: [e.UTM, i]
    };
    return {
        aliases: ["py", "gyp"],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [t, n, r, e.HCM, e.inherit(a, {
            cN: "function",
            bK: "def",
            r: 10
        }), e.inherit(a, {
            cN: "class",
            bK: "class"
        }), {
            cN: "decorator",
            b: /@/,
            e: /$/
        },
        {
            b: /\b(print|exec)\(/
        }]
    }
}),
hljs.registerLanguage("delphi",
function(e) {
    var t = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure",
    r = {
        cN: "comment",
        v: [{
            b: /\{/,
            e: /\}/,
            r: 0
        },
        {
            b: /\(\*/,
            e: /\*\)/,
            r: 10
        }]
    },
    n = {
        cN: "string",
        b: /'/,
        e: /'/,
        c: [{
            b: /''/
        }]
    },
    i = {
        cN: "string",
        b: /(#\d+)+/
    },
    a = {
        b: e.IR + "\\s*=\\s*class\\s*\\(",
        rB: !0,
        c: [e.TM]
    },
    s = {
        cN: "function",
        bK: "function constructor destructor procedure",
        e: /[:;]/,
        k: "function constructor|10 destructor|10 procedure|10",
        c: [e.TM, {
            cN: "params",
            b: /\(/,
            e: /\)/,
            k: t,
            c: [n, i]
        },
        r]
    };
    return {
        cI: !0,
        k: t,
        i: /("|\$[G-Zg-z]|\/\*|<\/)/,
        c: [r, e.CLCM, n, i, e.NM, a, s]
    }
}),
hljs.registerLanguage("cpp",
function(e) {
    var t = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c", "h", "c++", "h++"],
        k: t,
        i: "</",
        c: [e.CLCM, e.CBCM, e.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        },
        {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        },
        e.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [{
                b: 'include\\s*[<"]',
                e: '[>"]',
                k: "include",
                i: "\\n"
            },
            e.CLCM]
        },
        {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: t,
            c: ["self"]
        },
        {
            b: e.IR + "::"
        }]
    }
});