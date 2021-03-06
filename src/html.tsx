/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react";
import Helmet from "react-helmet";

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css");
  } catch (err) {
    console.log(err);
  }
}

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
module.exports = React.createClass<HtmlProps, void>({
  render() {
    const head = Helmet.rewind();

    const css =
      process.env.NODE_ENV === `production` ? (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      ) : null;

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          {head.title.toComponent()}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/img/favicon/manifest.json" />
          <link
            rel="mask-icon"
            href="/img/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          <meta
            name="msapplication-config"
            content="/img/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="image_src"
            href="https://nativescripting.com/img/course_banners/nativescript_core_ng_course_banner_bg.png"
          />
          <meta
            name="og:image"
            content="https://nativescripting.com/img/course_banners/nativescript_core_ng_course_banner_bg.png"
          />
          <meta
            name="twitter:image"
            content="https://nativescripting.com/img/course_banners/nativescript_core_ng_course_banner_bg.png"
          />

          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script
            dangerouslySetInnerHTML={{
              __html: `
                                (function (i, s, o, g, r, a, m) {
                                    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                                        (i[r].q = i[r].q || []).push(arguments)
                                    }, i[r].l = 1 * new Date(); a = s.createElement(o),
                                        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                                })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
                        
                                ga('create', 'UA-98718768-1', 'auto');
                                ga('send', 'pageview');
                            `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                            (function (h, o, t, j, a, r) {
                                h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                                h._hjSettings = { hjid: 726771, hjsv: 6 };
                                a = o.getElementsByTagName('head')[0];
                                r = o.createElement('script'); r.async = 1;
                                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
                            `
            }}
          />
        </body>
      </html>
    );
  }
});
