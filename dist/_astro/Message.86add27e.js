import { r as c } from './index.45a47ed6.js';
var t = {},
  u = {
    get exports() {
      return t;
    },
    set exports(r) {
      t = r;
    },
  },
  o = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m = c,
  h = Symbol.for('react.element'),
  f = Symbol.for('react.fragment'),
  p = Object.prototype.hasOwnProperty,
  b = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  x = { key: !0, ref: !0, __self: !0, __source: !0 };
function d(r, e, n) {
  var s,
    i = {},
    a = null,
    l = null;
  n !== void 0 && (a = '' + n),
    e.key !== void 0 && (a = '' + e.key),
    e.ref !== void 0 && (l = e.ref);
  for (s in e) p.call(e, s) && !x.hasOwnProperty(s) && (i[s] = e[s]);
  if (r && r.defaultProps)
    for (s in ((e = r.defaultProps), e)) i[s] === void 0 && (i[s] = e[s]);
  return { $$typeof: h, type: r, key: a, ref: l, props: i, _owner: b.current };
}
o.Fragment = f;
o.jsx = d;
o.jsxs = d;
(function (r) {
  r.exports = o;
})(u);
function g() {
  const [r, e] = c.useState(!0);
  function n() {
    e(!1);
  }
  return r
    ? t.jsx('div', {
        className: 'bg-black p-4',
        children: t.jsxs('div', {
          className: 'mx-auto lg:w-1/3',
          children: [
            t.jsxs('p', {
              className: 'text-white',
              children: [
                'Like what you see? This is a theme made by',
                ' ',
                t.jsx('a', {
                  target: '_blank',
                  rel: 'noreferrer',
                  className:
                    'border-b-4 border-b-green-500 hover:border-b-green-800',
                  href: 'https://www.treverparish.com/',
                  children: 'Trever Parish',
                }),
                ' ',
                '. I offer this theme to my clients included in my website package. It is fully customizable to meet different needs. My number is in place of where your number would be used, in the case you use this theme.',
              ],
            }),
            t.jsx('p', {
              className: 'mt-4 text-white',
              children:
                'All information provided on this site is fictional and purely for demonstrative purposes. All services and verbiage used is ostensible and any relation to actual events is coincidental or parodic.',
            }),
            t.jsx('p', {
              className: 'mt-4 text-white',
              children:
                'The contact form on this site does not work, visit my website linked earlier in this message to get in contact with me.',
            }),
            t.jsx('p', {
              className: 'mt-4 text-white',
              children:
                'This design cannot be replicated or used in any fashion. All images and icons used are free to use and require no attribution to their respect owners.',
            }),
            t.jsx('div', {
              className: 'buttonContainer mt-4 flex justify-center',
              children: t.jsx('button', {
                className:
                  'cursor-pointer rounded bg-primary-color p-2 text-white hover:bg-green-800',
                type: 'submit',
                onClick: n,
                children: 'Hide Message',
              }),
            }),
          ],
        }),
      })
    : null;
}
export { g as default };
