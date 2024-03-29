(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
        d(t);
    new MutationObserver(t=>{
        for (const c of t)
            if (c.type === "childList")
                for (const s of c.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && d(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    
    function d(t) {
        if (t.ep)
            return;
        t.ep = !0;
        const c = f(t);
        fetch(t.href, c)
    }
}
)();
var le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
const ue = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)
  , B = document.querySelector.bind(document)
  , de = document.querySelectorAll.bind(document)
  , Ee = "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype;
function Y(n, a, f, d) {
    if (n)
        if (n instanceof NodeList) {
            n.forEach(t=>t.addEventListener(a, f, d));
            return
        } else
            n.addEventListener(a, f, d)
}
function fe(n, a, f) {
    let d;
    function t(...c) {
        const s = f && !d;
        clearTimeout(d),
        d = setTimeout(()=>{
            d = void 0,
            f || n(...c)
        }
        , a),
        s && n(...c)
    }
    return t
}
function ge(n) {
    let a, f;
    return (...t)=>{
        a = t,
        !f && (f = requestAnimationFrame(()=>{
            f = void 0,
            a && n(...a)
        }
        ))
    }
}
var ne = {
    exports: {}
};
(function(n, a) {
    (function(f, d) {
        n.exports = d()
    }
    )(le, ()=>(()=>{
        var f = {
            508: (s,o,e)=>{
                function b(i, l=300, r=0) {
                    return (...p)=>(clearTimeout(r),
                    r = setTimeout(i, l, ...p))
                }
                function $(i=16) {
                    return i = i > 16 ? 16 : i,
                    `${Math.floor(1e16 * Math.random())}`.padStart(i, "0").substring(-1, i)
                }
                function T(i, l=16) {
                    let r = 0;
                    for (let p = 0; p < i.length; p++)
                        r = (r << 5) - r + i.charCodeAt(p),
                        r &= r;
                    return r = Math.abs(r),
                    `${r}`.padStart(l, "0").substring(-1, l)
                }
                function E() {
                    const i = document.body
                      , l = window.pageYOffset || i.scrollTop
                      , {scrollHeight: r, offsetHeight: p, clientHeight: y} = document.documentElement
                      , L = Math.max(i.scrollHeight, r, i.offsetHeight, p, i.clientHeight, y) - window.innerHeight;
                    return Math.floor(100 * Math.abs(l / L))
                }
                function I(i, l) {
                    let r = i;
                    for (; r && (!(r != null && r.matches) || !(r != null && r.matches(l))); )
                        r = r == null ? void 0 : r.parentNode;
                    return r
                }
                function O(i) {
                    let l, r, p = !1;
                    try {
                        ({hostname: l, pathname: r} = i && new URL(i) || {})
                    } catch {}
                    return l && (p = l !== window.location.host),
                    {
                        t: p,
                        hostname: l,
                        pathname: r
                    }
                }
                e.r(o),
                e.d(o, {
                    o: ()=>R,
                    i: ()=>P,
                    u: ()=>b,
                    l: ()=>W,
                    m: ()=>U,
                    g: ()=>J,
                    v: ()=>T,
                    p: ()=>$,
                    h: ()=>E,
                    _: ()=>K,
                    $: ()=>Q,
                    S: ()=>O,
                    j: ()=>I,
                    I: ()=>h
                });
                const R = "clientId"
                  , h = "sessionId"
                  , P = "sessionCount";
                function U() {
                    const {hostname: i, origin: l, pathname: r, search: p} = document.location
                      , y = document.title;
                    return {
                        location: l + r + p,
                        hostname: i,
                        pathname: r,
                        referrer: document.referrer,
                        title: y
                    }
                }
                function W(i=R) {
                    const l = $();
                    return localStorage.getItem(i) || (localStorage.setItem(i, l),
                    l)
                }
                function K(i=h) {
                    const l = $();
                    return sessionStorage.getItem(i) || (sessionStorage.setItem(i, l),
                    l)
                }
                function Q(i) {
                    const l = localStorage.getItem(R) ? void 0 : "1"
                      , r = sessionStorage.getItem(h) ? void 0 : "1";
                    let p = sessionStorage.getItem(P) || "1";
                    return i && (p = function(y=P) {
                        let L = "1";
                        const q = sessionStorage.getItem(y);
                        return q && (L = "" + (+q + 1)),
                        sessionStorage.setItem(y, L),
                        L
                    }()),
                    {
                        firstVisit: l,
                        sessionStart: r,
                        sessionCount: p
                    }
                }
                function J(i) {
                    return Array.isArray(i) ? i.map(l=>l.map(r=>r == null ? void 0 : r.toString())) : Object.keys(i).map(l=>[l, `${i[l]}`])
                }
            }
            ,
            209: (s,o)=>{
                Object.defineProperty(o, "M", {
                    value: !0
                }),
                o.files = o.k = void 0,
                o.k = {
                    protocolVersion: "v",
                    trackingId: "tid",
                    pageId: "_p",
                    language: "ul",
                    clientId: "cid",
                    firstVisit: "_fv",
                    hitCount: "_s",
                    sessionId: "sid",
                    sessionCount: "sct",
                    sessionEngagement: "seg",
                    sessionStart: "_ss",
                    debug: "_dbg",
                    referrer: "dr",
                    location: "dl",
                    title: "dt",
                    eventName: "en",
                    eventParam: "ep",
                    eventParamNumber: "epn",
                    screenResolution: "sr",
                    enagementTime: "_et"
                },
                o.files = ["pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma"]
            }
        }
          , d = {};
        function t(s) {
            var o = d[s];
            if (o !== void 0)
                return o.exports;
            var e = d[s] = {
                exports: {}
            };
            return f[s](e, e.exports, t),
            e.exports
        }
        t.d = (s,o)=>{
            for (var e in o)
                t.D(o, e) && !t.D(s, e) && Object.defineProperty(s, e, {
                    O: !0,
                    get: o[e]
                })
        }
        ,
        t.D = (s,o)=>Object.prototype.hasOwnProperty.call(s, o),
        t.r = s=>{
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(s, "M", {
                value: !0
            })
        }
        ;
        var c = {};
        return (()=>{
            var ee, te;
            var s = c;
            Object.defineProperty(s, "M", {
                value: !0
            }),
            s.track = void 0;
            const o = t(508)
              , e = t(209)
              , b = typeof window < "u"
              , $ = b && ((ee = window.minimalAnalytics) == null ? void 0 : ee.defineGlobal)
              , T = b && ((te = window.minimalAnalytics) == null ? void 0 : te.autoTrack)
              , E = ["q", "s", "search", "query", "keyword"];
            let I, O, R, h = [[Date.now()]], P = !1;
            const U = "page_view"
              , W = "scroll"
              , K = "click"
              , Q = "view_search_results"
              , J = "user_engagement"
              , i = "file_download";
            function l(g, {type: m, event: u, debug: _}) {
                const {location: H, referrer: M, title: k} = (0,
                o.m)()
                  , {firstVisit: A, sessionStart: S, sessionCount: D} = (0,
                o.$)(!P)
                  , j = self.screen || {};
                let v = [[e.k.protocolVersion, "2"], [e.k.trackingId, g], [e.k.pageId, (0,
                o.p)()], [e.k.language, (navigator.language || "").toLowerCase()], [e.k.clientId, (0,
                o.l)()], [e.k.firstVisit, A], [e.k.hitCount, "1"], [e.k.sessionId, (0,
                o._)()], [e.k.sessionCount, D], [e.k.sessionEngagement, "1"], [e.k.sessionStart, S], [e.k.debug, _ ? "1" : ""], [e.k.referrer, M], [e.k.location, H], [e.k.title, k], [e.k.screenResolution, `${j.width}x${j.height}`]];
                return v = v.concat(function({type: x="", event: w}) {
                    const N = document.location.search
                      , V = new URLSearchParams(N)
                      , z = E.some(X=>new RegExp(`[?|&]${X}=`,"g").test(N)) ? Q : x
                      , G = E.find(X=>V.get(X));
                    let F = [[e.k.eventName, z], [`${e.k.eventParam}.search_term`, G || ""]];
                    return w && (F = F.concat((0,
                    o.g)(w))),
                    F
                }({
                    type: m,
                    event: u
                })),
                v = v.filter(([,x])=>x),
                new URLSearchParams(v)
            }
            function r() {
                return h.reduce((g,[m,u=Date.now()])=>g + (u - m), 0).toString()
            }
            function p(g, m) {
                var V, z, G, F;
                const u = (0,
                o.j)(m.target, "a, button, input[type=submit], input[type=button]")
                  , _ = (V = u == null ? void 0 : u.tagName) == null ? void 0 : V.toLowerCase()
                  , H = _ === "a" ? "link" : _
                  , M = (u == null ? void 0 : u.getAttribute("href")) || void 0
                  , k = (u == null ? void 0 : u.getAttribute("download")) || void 0 || M
                  , {t: A, hostname: S, pathname: D} = (0,
                o.S)(k)
                  , j = H === "link" && !A
                  , [v] = (k == null ? void 0 : k.match(new RegExp(e.files.join("|"),"g"))) || []
                  , x = v ? i : K
                  , w = `${e.k.eventParam}.${H}`;
                if (!u || j && !v)
                    return;
                let N = [[`${w}_id`, u.id], [`${w}_classes`, u.className], [`${w}_name`, (z = u == null ? void 0 : u.getAttribute("name")) == null ? void 0 : z.trim()], [`${w}_text`, (G = u.textContent) == null ? void 0 : G.trim()], [`${w}_value`, (F = u == null ? void 0 : u.getAttribute("value")) == null ? void 0 : F.trim()], [`${w}_url`, M], [`${w}_domain`, S], [`${e.k.eventParam}.outbound`, `${A}`], [e.k.enagementTime, r()]];
                v && (N = N.concat([[`${e.k.eventParam}.file_name`, D || k], [`${e.k.eventParam}.file_extension`, v]])),
                C(g, {
                    type: x,
                    event: N
                })
            }
            function y() {
                const g = h.length - 1
                  , [,m] = h[g];
                m || h[g].push(Date.now())
            }
            function L() {
                const g = h.length - 1
                  , [,m] = h[g];
                m && h.push([Date.now()])
            }
            function q() {
                const g = h.length - 1
                  , [,m] = h[g]
                  , u = ["hidden", "visible"].indexOf(document.visibilityState);
                u !== -1 && (!!u ? m && h.push([Date.now()]) : !m && h[g].push(Date.now()))
            }
            const se = (0,
            o.u)(g=>{
                if ((0,
                o.h)() < 90)
                    return;
                const m = [[`${e.k.eventParamNumber}.percent_scrolled`, 90]];
                C(g, {
                    type: W,
                    event: m
                }),
                document.removeEventListener("scroll", O)
            }
            );
            function ae(g) {
                const m = [[e.k.enagementTime, r()]];
                C(g, {
                    type: J,
                    event: m
                })
            }
            function ce(g) {
                P || (I = p.bind(null, g),
                O = se.bind(null, g),
                R = ae.bind(null, g),
                document.addEventListener("visibilitychange", q),
                document.addEventListener("scroll", O),
                document.addEventListener("click", I),
                window.addEventListener("blur", y),
                window.addEventListener("focus", L),
                window.addEventListener("beforeunload", R))
            }
            function C(...g) {
                var A;
                const [m,{type: u, event: _, debug: H}] = function(S) {
                    var x;
                    const D = (x = window.minimalAnalytics) == null ? void 0 : x.trackingId
                      , j = typeof S[0] == "string" ? S[0] : D
                      , v = typeof S[0] == "object" ? S[0] : S[1] || {};
                    return [j, {
                        type: U,
                        ...v
                    }]
                }(g);
                if (!m)
                    return void console.error("GA4: Tracking ID is missing or undefined");
                const M = l(m, {
                    type: u,
                    event: _,
                    debug: H
                })
                  , k = ((A = window.minimalAnalytics) == null ? void 0 : A.analyticsEndpoint) || "https://www.google-analytics.com/g/collect";
                navigator.sendBeacon(`${k}?${M}`),
                ce(m),
                P = !0
            }
            s.track = C,
            $ && (window.track = C),
            T && C()
        }
        )(),
        c
    }
    )())
}
)(ne);
var me = ne.exports;
function pe() {
    const n = {
        tolerance: 0,
        duration: 600
    }
      , a = window;
    function f(c, s, o, e) {
        return c /= e,
        c--,
        -o * (c * c * c * c - 1) + s
    }
    function d(c) {
        if (c == null)
            return;
        const s = a.scrollY;
        let o = c.getBoundingClientRect().top, e, b;
        o -= n.tolerance;
        const $ = T=>{
            const E = a.scrollY;
            e || (e = T - 1);
            const I = T - e;
            if (b && (o > 0 && b > E || o < 0 && b < E))
                return;
            b = E;
            const O = f(I, s, o, n.duration);
            a.scroll(0, O),
            I < n.duration ? a.requestAnimationFrame($) : a.scroll(0, o + s)
        }
        ;
        a.requestAnimationFrame($)
    }
    function t(c) {
        const s = c.href || c.dataset.target;
        let o;
        s === "#" ? o = document.body : s && (o = /^[\.#]/.test(s) ? B(s) : s),
        o != null && Y(c, "click", e=>{
            e.preventDefault(),
            d(o)
        }
        )
    }
    return {
        options: n,
        registerTrigger: t
    }
}
function he() {
    const n = B(".header-toggle")
      , a = B(".header-nav");
    function f(t) {
        n.setAttribute("aria-expanded", String(t)),
        a.classList.toggle("show", t)
    }
    function d(t) {
        a.contains(t.target) || (n.contains(t.target) && t.stopPropagation(),
        f(!1),
        document.body.removeEventListener("click", d, !0))
    }
    Y(n, "click", ()=>{
        const t = n.getAttribute("aria-expanded") === "false";
        f(t),
        t && Y(document.body, "click", d, !0)
    }
    )
}
const ve = "/assets/Rubik-Regular-3Eclk4sQ.woff2"
  , we = "/assets/Rubik-Bold-GFA7YBSU.woff2"
  , be = "/assets/Rubik-ExtraBold-IK0H1EWv.woff2";
async function ye(n) {
    try {
        await n.load(),
        document.fonts.add(n)
    } catch (a) {
        console.error("Failed to load font", a)
    }
}
window.FontFace && [[ve, "400"], [we, "700"], [be, "800"]].forEach(([n,a])=>{
    ye(new FontFace("Rubik",`url(${n})`,{
        weight: a,
        display: "optional"
    }))
}
);
me.track("G-YR2ELGYW6H");
const oe = []
  , re = n=>{
    oe.push(n)
}
;
Y(window, "resize", fe(n=>{
    oe.forEach(a=>a(n))
}
, 300, !0));
const ke = window.CSS.supports("height: 100vh");
let Z = 0;
const ie = ()=>{
    const n = document.documentElement;
    Z = Math.max(n.clientHeight || 0, window.innerHeight || 0),
    ke || n.style.setProperty("--page-height", `${Z}px`)
}
;
ie();
re(ie);
const Se = ()=>{
    const n = pe()
      , a = B(".header")
      , f = ()=>{
        const d = a.getBoundingClientRect();
        n.options.tolerance = d.top + d.height
    }
    ;
    f(),
    re(f),
    de(".js-scroll").forEach(n.registerTrigger)
}
  , $e = ()=>{
    const n = B(".scroll-top");
    if (!n)
        return;
    const a = Number(n.dataset.showOffset) || null;
    let f;
    const d = ge(()=>{
        const t = window.scrollY < (a || Z);
        f !== t && (f = t,
        n.classList.toggle("is-hidden", f))
    }
    );
    d(),
    Y(window, "scroll", d)
}
;
document.documentElement.classList.toggle("is-mobile", ue);
he();
Se();
$e();
export {de as $, ue as i, Y as o, Ee as s};
