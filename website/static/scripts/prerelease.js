window.prerelease = (function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var n = {};
  return (
    (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = "/"),
    t((t.s = 0))
  );
})([
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function i(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var l = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      a = n(1),
      s = (function(e) {
        function t() {
          var e, n, i, l;
          r(this, t);
          for (var a = arguments.length, s = Array(a), u = 0; u < a; u++)
            s[u] = arguments[u];
          return (
            (n = i = o(
              this,
              (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                e,
                [this].concat(s)
              )
            )),
            (i.state = { access: !1 }),
            (i.access = function() {
              var e = i.state.email;
              fetch(
                "https://stripe-checkout-cednztddti.now.sh/customer?email=" + e
              )
                .then(function(e) {
                  return e.json();
                })
                .then(function(e) {
                  return i.setState({ access: e.access });
                });
            }),
            (l = n),
            o(i, l)
          );
        }
        return (
          i(t, e),
          l(t, [
            {
              key: "render",
              value: function() {
                var e = this;
                return (0, a.h)(
                  "div",
                  null,
                  (0, a.h)(
                    "div",
                    {
                      style: { margin: "90px", minHeight: "calc(100vh - 90px)" }
                    },
                    this.state.access
                      ? (0, a.h)(
                          "div",
                          null,
                          (0, a.h)("h1", null, "Builds:"),
                          (0, a.h)(
                            "ul",
                            null,
                            (0, a.h)(
                              "li",
                              null,
                              "Latest Release",
                              " ",
                              (0, a.h)(
                                "ul",
                                null,
                                (0, a.h)(
                                  "li",
                                  null,
                                  (0, a.h)(
                                    "a",
                                    {
                                      href:
                                        "https://s3.amazonaws.com/thoriumsim/thorium-macos.zip"
                                    },
                                    "macOS"
                                  )
                                ),
                                (0, a.h)(
                                  "li",
                                  null,
                                  (0, a.h)(
                                    "a",
                                    {
                                      href:
                                        "https://s3.amazonaws.com/thoriumsim/thorium-win.exe.zip"
                                    },
                                    "Windows"
                                  )
                                ),
                                (0, a.h)(
                                  "li",
                                  null,
                                  (0, a.h)(
                                    "a",
                                    {
                                      href:
                                        "https://s3.amazonaws.com/thoriumsim/thorium-linux.zip"
                                    },
                                    "Linux"
                                  )
                                )
                              )
                            ),
                            (0, a.h)(
                              "li",
                              null,
                              "Template Simulators",
                              (0, a.h)(
                                "ul",
                                null,
                                (0, a.h)(
                                  "li",
                                  null,
                                  (0, a.h)(
                                    "a",
                                    {
                                      href:
                                        "https://s3.amazonaws.com/thoriumsim/simulators/Voyager.sim"
                                    },
                                    "Voyager"
                                  )
                                ),
                                (0, a.h)(
                                  "li",
                                  null,
                                  (0, a.h)(
                                    "a",
                                    {
                                      href:
                                        "https://s3.amazonaws.com/thoriumsim/simulators/Vanguard.sim"
                                    },
                                    "Vanguard (Jr.)"
                                  )
                                )
                              )
                            ),
                            (0, a.h)(
                              "li",
                              null,
                              "Template Missions",
                              (0, a.h)(
                                "ul",
                                null,
                                (0, a.h)(
                                  "li",
                                  null,
                                  (0, a.h)(
                                    "a",
                                    {
                                      href:
                                        "https://s3.amazonaws.com/thoriumsim/missions/Intolerance.misn"
                                    },
                                    "Intolerance"
                                  )
                                )
                              )
                            )
                          )
                        )
                      : (0, a.h)(
                          "div",
                          null,
                          (0, a.h)(
                            "h1",
                            null,
                            "Please enter your email address to access prerelease versions of Thorium."
                          ),
                          (0, a.h)(
                            "form",
                            {
                              action: "javascript:myFunction(); return false;",
                              onSubmit: this.access
                            },
                            (0, a.h)("input", {
                              type: "text",
                              onChange: function(t) {
                                return e.setState({ email: t.target.value });
                              },
                              value: this.state.email
                            }),
                            (0, a.h)(
                              "button",
                              { onClick: this.access },
                              "Access"
                            )
                          )
                        )
                  )
                );
              }
            }
          ]),
          t
        );
      })(a.Component);
    (t.default = s),
      (0, a.render)((0, a.h)(s, null), document.getElementById("prerelease"));
  },
  function(e, t, n) {
    "use strict";
    function r() {}
    function o(e, t) {
      var n,
        o,
        i,
        l,
        a = L;
      for (l = arguments.length; l-- > 2; ) E.push(arguments[l]);
      for (
        t &&
        null != t.children &&
        (E.length || E.push(t.children), delete t.children);
        E.length;

      )
        if ((o = E.pop()) && void 0 !== o.pop)
          for (l = o.length; l--; ) E.push(o[l]);
        else
          "boolean" == typeof o && (o = null),
            (i = "function" != typeof e) &&
              (null == o
                ? (o = "")
                : "number" == typeof o
                  ? (o = String(o))
                  : "string" != typeof o && (i = !1)),
            i && n ? (a[a.length - 1] += o) : a === L ? (a = [o]) : a.push(o),
            (n = i);
      var s = new r();
      return (
        (s.nodeName = e),
        (s.children = a),
        (s.attributes = null == t ? void 0 : t),
        (s.key = null == t ? void 0 : t.key),
        void 0 !== z.vnode && z.vnode(s),
        s
      );
    }
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }
    function l(e, t) {
      return o(
        e.nodeName,
        i(i({}, e.attributes), t),
        arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
      );
    }
    function a(e) {
      !e._dirty &&
        (e._dirty = !0) &&
        1 == W.push(e) &&
        (z.debounceRendering || B)(s);
    }
    function s() {
      var e,
        t = W;
      for (W = []; (e = t.pop()); ) e._dirty && T(e);
    }
    function u(e, t, n) {
      return "string" == typeof t || "number" == typeof t
        ? void 0 !== e.splitText
        : "string" == typeof t.nodeName
          ? !e._componentConstructor && c(e, t.nodeName)
          : n || e._componentConstructor === t.nodeName;
    }
    function c(e, t) {
      return (
        e.normalizedNodeName === t ||
        e.nodeName.toLowerCase() === t.toLowerCase()
      );
    }
    function p(e) {
      var t = i({}, e.attributes);
      t.children = e.children;
      var n = e.nodeName.defaultProps;
      if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
      return t;
    }
    function f(e, t) {
      var n = t
        ? document.createElementNS("http://www.w3.org/2000/svg", e)
        : document.createElement(e);
      return (n.normalizedNodeName = e), n;
    }
    function d(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }
    function h(e, t, n, r, o) {
      if (("className" === t && (t = "class"), "key" === t));
      else if ("ref" === t) n && n(null), r && r(e);
      else if ("class" !== t || o)
        if ("style" === t) {
          if (
            ((r && "string" != typeof r && "string" != typeof n) ||
              (e.style.cssText = r || ""),
            r && "object" == typeof r)
          ) {
            if ("string" != typeof n)
              for (var i in n) i in r || (e.style[i] = "");
            for (var i in r)
              e.style[i] =
                "number" == typeof r[i] && !1 === V.test(i)
                  ? r[i] + "px"
                  : r[i];
          }
        } else if ("dangerouslySetInnerHTML" === t)
          r && (e.innerHTML = r.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
          var l = t !== (t = t.replace(/Capture$/, ""));
          (t = t.toLowerCase().substring(2)),
            r
              ? n || e.addEventListener(t, v, l)
              : e.removeEventListener(t, v, l),
            ((e._listeners || (e._listeners = {}))[t] = r);
        } else if ("list" !== t && "type" !== t && !o && t in e)
          m(e, t, null == r ? "" : r),
            (null != r && !1 !== r) || e.removeAttribute(t);
        else {
          var a = o && t !== (t = t.replace(/^xlink\:?/, ""));
          null == r || !1 === r
            ? a
              ? e.removeAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  t.toLowerCase()
                )
              : e.removeAttribute(t)
            : "function" != typeof r &&
              (a
                ? e.setAttributeNS(
                    "http://www.w3.org/1999/xlink",
                    t.toLowerCase(),
                    r
                  )
                : e.setAttribute(t, r));
        }
      else e.className = r || "";
    }
    function m(e, t, n) {
      try {
        e[t] = n;
      } catch (e) {}
    }
    function v(e) {
      return this._listeners[e.type]((z.event && z.event(e)) || e);
    }
    function _() {
      for (var e; (e = A.pop()); )
        z.afterMount && z.afterMount(e),
          e.componentDidMount && e.componentDidMount();
    }
    function y(e, t, n, r, o, i) {
      H++ ||
        ((R = null != o && void 0 !== o.ownerSVGElement),
        (D = null != e && !("__preactattr_" in e)));
      var l = b(e, t, n, r, i);
      return (
        o && l.parentNode !== o && o.appendChild(l),
        --H || ((D = !1), i || _()),
        l
      );
    }
    function b(e, t, n, r, o) {
      var i = e,
        l = R;
      if (
        ((null != t && "boolean" != typeof t) || (t = ""),
        "string" == typeof t || "number" == typeof t)
      )
        return (
          e && void 0 !== e.splitText && e.parentNode && (!e._component || o)
            ? e.nodeValue != t && (e.nodeValue = t)
            : ((i = document.createTextNode(t)),
              e && (e.parentNode && e.parentNode.replaceChild(i, e), C(e, !0))),
          (i.__preactattr_ = !0),
          i
        );
      var a = t.nodeName;
      if ("function" == typeof a) return O(e, t, n, r);
      if (
        ((R = "svg" === a || ("foreignObject" !== a && R)),
        (a = String(a)),
        (!e || !c(e, a)) && ((i = f(a, R)), e))
      ) {
        for (; e.firstChild; ) i.appendChild(e.firstChild);
        e.parentNode && e.parentNode.replaceChild(i, e), C(e, !0);
      }
      var s = i.firstChild,
        u = i.__preactattr_,
        p = t.children;
      if (null == u) {
        u = i.__preactattr_ = {};
        for (var d = i.attributes, h = d.length; h--; )
          u[d[h].name] = d[h].value;
      }
      return (
        !D &&
        p &&
        1 === p.length &&
        "string" == typeof p[0] &&
        null != s &&
        void 0 !== s.splitText &&
        null == s.nextSibling
          ? s.nodeValue != p[0] && (s.nodeValue = p[0])
          : ((p && p.length) || null != s) &&
            g(i, p, n, r, D || null != u.dangerouslySetInnerHTML),
        w(i, t.attributes, u),
        (R = l),
        i
      );
    }
    function g(e, t, n, r, o) {
      var i,
        l,
        a,
        s,
        c,
        p = e.childNodes,
        f = [],
        h = {},
        m = 0,
        v = 0,
        _ = p.length,
        y = 0,
        g = t ? t.length : 0;
      if (0 !== _)
        for (var x = 0; x < _; x++) {
          var w = p[x],
            N = w.__preactattr_,
            k = g && N ? (w._component ? w._component.__key : N.key) : null;
          null != k
            ? (m++, (h[k] = w))
            : (N || (void 0 !== w.splitText ? !o || w.nodeValue.trim() : o)) &&
              (f[y++] = w);
        }
      if (0 !== g)
        for (var x = 0; x < g; x++) {
          (s = t[x]), (c = null);
          var k = s.key;
          if (null != k)
            m && void 0 !== h[k] && ((c = h[k]), (h[k] = void 0), m--);
          else if (!c && v < y)
            for (i = v; i < y; i++)
              if (void 0 !== f[i] && u((l = f[i]), s, o)) {
                (c = l), (f[i] = void 0), i === y - 1 && y--, i === v && v++;
                break;
              }
          (c = b(c, s, n, r)),
            (a = p[x]),
            c &&
              c !== e &&
              c !== a &&
              (null == a
                ? e.appendChild(c)
                : c === a.nextSibling
                  ? d(a)
                  : e.insertBefore(c, a));
        }
      if (m) for (var x in h) void 0 !== h[x] && C(h[x], !1);
      for (; v <= y; ) void 0 !== (c = f[y--]) && C(c, !1);
    }
    function C(e, t) {
      var n = e._component;
      n
        ? j(n)
        : (null != e.__preactattr_ &&
            e.__preactattr_.ref &&
            e.__preactattr_.ref(null),
          (!1 !== t && null != e.__preactattr_) || d(e),
          x(e));
    }
    function x(e) {
      for (e = e.lastChild; e; ) {
        var t = e.previousSibling;
        C(e, !0), (e = t);
      }
    }
    function w(e, t, n) {
      var r;
      for (r in n)
        (t && null != t[r]) ||
          null == n[r] ||
          h(e, r, n[r], (n[r] = void 0), R);
      for (r in t)
        "children" === r ||
          "innerHTML" === r ||
          (r in n &&
            t[r] === ("value" === r || "checked" === r ? e[r] : n[r])) ||
          h(e, r, n[r], (n[r] = t[r]), R);
    }
    function N(e) {
      var t = e.constructor.name;
      (F[t] || (F[t] = [])).push(e);
    }
    function k(e, t, n) {
      var r,
        o = F[e.name];
      if (
        (e.prototype && e.prototype.render
          ? ((r = new e(t, n)), M.call(r, t, n))
          : ((r = new M(t, n)), (r.constructor = e), (r.render = S)),
        o)
      )
        for (var i = o.length; i--; )
          if (o[i].constructor === e) {
            (r.nextBase = o[i].nextBase), o.splice(i, 1);
            break;
          }
      return r;
    }
    function S(e, t, n) {
      return this.constructor(e, n);
    }
    function P(e, t, n, r, o) {
      e._disable ||
        ((e._disable = !0),
        (e.__ref = t.ref) && delete t.ref,
        (e.__key = t.key) && delete t.key,
        !e.base || o
          ? e.componentWillMount && e.componentWillMount()
          : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r),
        r &&
          r !== e.context &&
          (e.prevContext || (e.prevContext = e.context), (e.context = r)),
        e.prevProps || (e.prevProps = e.props),
        (e.props = t),
        (e._disable = !1),
        0 !== n &&
          (1 !== n && !1 === z.syncComponentUpdates && e.base
            ? a(e)
            : T(e, 1, o)),
        e.__ref && e.__ref(e));
    }
    function T(e, t, n, r) {
      if (!e._disable) {
        var o,
          l,
          a,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.prevProps || s,
          d = e.prevState || u,
          h = e.prevContext || c,
          m = e.base,
          v = e.nextBase,
          b = m || v,
          g = e._component,
          x = !1;
        if (
          (m &&
            ((e.props = f),
            (e.state = d),
            (e.context = h),
            2 !== t &&
            e.shouldComponentUpdate &&
            !1 === e.shouldComponentUpdate(s, u, c)
              ? (x = !0)
              : e.componentWillUpdate && e.componentWillUpdate(s, u, c),
            (e.props = s),
            (e.state = u),
            (e.context = c)),
          (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
          (e._dirty = !1),
          !x)
        ) {
          (o = e.render(s, u, c)),
            e.getChildContext && (c = i(i({}, c), e.getChildContext()));
          var w,
            N,
            S = o && o.nodeName;
          if ("function" == typeof S) {
            var O = p(o);
            (l = g),
              l && l.constructor === S && O.key == l.__key
                ? P(l, O, 1, c, !1)
                : ((w = l),
                  (e._component = l = k(S, O, c)),
                  (l.nextBase = l.nextBase || v),
                  (l._parentComponent = e),
                  P(l, O, 0, c, !1),
                  T(l, 1, n, !0)),
              (N = l.base);
          } else
            (a = b),
              (w = g),
              w && (a = e._component = null),
              (b || 1 === t) &&
                (a && (a._component = null),
                (N = y(a, o, c, n || !m, b && b.parentNode, !0)));
          if (b && N !== b && l !== g) {
            var M = b.parentNode;
            M &&
              N !== M &&
              (M.replaceChild(N, b), w || ((b._component = null), C(b, !1)));
          }
          if ((w && j(w), (e.base = N), N && !r)) {
            for (var U = e, E = e; (E = E._parentComponent); ) (U = E).base = N;
            (N._component = U), (N._componentConstructor = U.constructor);
          }
        }
        if (
          (!m || n
            ? A.unshift(e)
            : x ||
              (e.componentDidUpdate && e.componentDidUpdate(f, d, h),
              z.afterUpdate && z.afterUpdate(e)),
          null != e._renderCallbacks)
        )
          for (; e._renderCallbacks.length; ) e._renderCallbacks.pop().call(e);
        H || r || _();
      }
    }
    function O(e, t, n, r) {
      for (
        var o = e && e._component,
          i = o,
          l = e,
          a = o && e._componentConstructor === t.nodeName,
          s = a,
          u = p(t);
        o && !s && (o = o._parentComponent);

      )
        s = o.constructor === t.nodeName;
      return (
        o && s && (!r || o._component)
          ? (P(o, u, 3, n, r), (e = o.base))
          : (i && !a && (j(i), (e = l = null)),
            (o = k(t.nodeName, u, n)),
            e && !o.nextBase && ((o.nextBase = e), (l = null)),
            P(o, u, 1, n, r),
            (e = o.base),
            l && e !== l && ((l._component = null), C(l, !1))),
        e
      );
    }
    function j(e) {
      z.beforeUnmount && z.beforeUnmount(e);
      var t = e.base;
      (e._disable = !0),
        e.componentWillUnmount && e.componentWillUnmount(),
        (e.base = null);
      var n = e._component;
      n
        ? j(n)
        : t &&
          (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null),
          (e.nextBase = t),
          d(t),
          N(e),
          x(t)),
        e.__ref && e.__ref(null);
    }
    function M(e, t) {
      (this._dirty = !0),
        (this.context = t),
        (this.props = e),
        (this.state = this.state || {});
    }
    function U(e, t, n) {
      return y(n, e, {}, !1, t, !1);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n.d(t, "h", function() {
        return o;
      }),
      n.d(t, "createElement", function() {
        return o;
      }),
      n.d(t, "cloneElement", function() {
        return l;
      }),
      n.d(t, "Component", function() {
        return M;
      }),
      n.d(t, "render", function() {
        return U;
      }),
      n.d(t, "rerender", function() {
        return s;
      }),
      n.d(t, "options", function() {
        return z;
      });
    var z = {},
      E = [],
      L = [],
      B =
        "function" == typeof Promise
          ? Promise.resolve().then.bind(Promise.resolve())
          : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      W = [],
      A = [],
      H = 0,
      R = !1,
      D = !1,
      F = {};
    i(M.prototype, {
      setState: function(e, t) {
        var n = this.state;
        this.prevState || (this.prevState = i({}, n)),
          i(n, "function" == typeof e ? e(n, this.props) : e),
          t && (this._renderCallbacks = this._renderCallbacks || []).push(t),
          a(this);
      },
      forceUpdate: function(e) {
        e && (this._renderCallbacks = this._renderCallbacks || []).push(e),
          T(this, 2);
      },
      render: function() {}
    });
    var I = {
      h: o,
      createElement: o,
      cloneElement: l,
      Component: M,
      render: U,
      rerender: s,
      options: z
    };
    t.default = I;
  }
]);
