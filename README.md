# MotmaenBash Website | وب‌سایت مطمئن باش

[MotmaenBash](https://motmaenbash.ir) is a free and open-source browser extension and Android app that helps people avoid phishing: fake payment pages, phishing SMS, and suspicious apps. This repository is the landing page, with download links for the Chrome, Firefox, and Yandex extensions and the Android app.

This repository contains the website source code for MotmaenBash project. For the main project repository including browser extensions and mobile app source code, please visit [MotmaenBash on GitHub](https://github.com/motmaenbash/motmaenbash).

The site is in three languages. Persian is the default and stays at the root (`/`, `/faqs.html`). English is under `/en/` and Central Kurdish (Sorani) is under `/ckb/`, with the same filenames. The language menu and the footer open the current page in the other language. `hreflang` links those versions. There is no `?lang=` parameter.

## Features

- **Phishing Protection**: Verifies the authenticity of Iranian payment gateways.
- **Browser Extensions**: Available for Chrome, Firefox, and Yandex.
- **Mobile App**: Protects users against phishing and online fraud.
- **Real-time Alerts**: Provides URL verification and alerts in real-time.
- **Privacy-Focused**: SMS, link, and app checks stay on the device. Crash reports and aggregate counts go to Firebase; message text, link contents, and the app list are not collected.
- **Regular Updates**: Maintains a regularly updated phishing database.
- **Free & Open Source**: Completely free to use and open-source.

### Android app

- Check an Iranian payment page before card details are entered, including Shaparak gateways
- Scan a newly received SMS for phishing text and dangerous links
- Warn when a suspicious app is installed, and scan installed apps on demand
- Warn when the browser opens a known phishing or scam link

### Browser extension

The browser extension checks the address of Iranian payment gateways. It is published for Chrome and Firefox. Yandex can install the Chrome build.

## Installation

Install only from these links. A build from anywhere else may have been modified.

### Browser Extensions

- [Chrome Extension](https://chromewebstore.google.com/detail/motmaenbash-%D9%85%D8%B7%D9%85%D8%A6%D9%86-%D8%A8%D8%A7%D8%B4/efhpmpdbeaganelnekhbffjphahncbgn) (Desktop)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/motmaenbash-%D9%85%D8%B7%D9%85%D8%A6%D9%86-%D8%A8%D8%A7%D8%B4/) (Desktop / Mobile)
- [Yandex Extension](https://chromewebstore.google.com/detail/motmaenbash-%D9%85%D8%B7%D9%85%D8%A6%D9%86-%D8%A8%D8%A7%D8%B4/efhpmpdbeaganelnekhbffjphahncbgn) (Desktop / Mobile)

### Mobile App

- [Google Play](https://play.google.com/store/apps/details?id=nu.milad.motmaenbash)
- [Cafe Bazaar](https://cafebazaar.ir/app/nu.milad.motmaenbash)
- [Myket](https://myket.ir/app/nu.milad.motmaenbash)

There is no iOS app. The same limits that block SMS and browser inspection on iOS also block a matching version of this app.

## Getting Started

To use MotmaenBash, install the browser extension or the Android app. After installation, checks run on the device: payment pages, phishing SMS, suspicious apps, and known scam links.

## Support the Project

If you find MotmaenBash useful, you can support it by donating:

💝 [Make a donation](https://motmaenbash.ir/donate.html)

حمایت شما باعث تداوم این پروژه و بروزرسانی مداوم آن خواهد شد 💝

## Credits

- Developed by [Milad Nouri](https://milad.nu) for the people of Iran.

## Social Media

- [X](https://x.com/miladnu)
- [Telegram](https://t.me/miladnourichannel)
- [YouTube](https://youtube.com/miladnu)
- [Instagram](https://instagram.com/milad_nouri)

## Repositories

| Part | Repository | License |
| --- | --- | --- |
| Android app | [motmaenbash-android](https://github.com/motmaenbash/motmaenbash-android) | Apache 2.0. The name and logo may not be reused. Public builds under the name MotmaenBash are published by the project only. |
| Chrome extension | [motmaenbash-chrome](https://github.com/motmaenbash/motmaenbash-chrome) | MIT |
| Firefox extension | [motmaenbash-firefox](https://github.com/motmaenbash/motmaenbash-firefox) | MIT |
| Offline database | [motmaenbash-data](https://github.com/miladnouri/motmaenbash-data) | CC-BY-4.0 |
| This website | [motmaenbash-website](https://github.com/motmaenbash/motmaenbash-website) | MIT |

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

This website is built using [Pug](https://pugjs.org/) (formerly Jade) template engine. Follow these steps to set up the development environment:

1. Install Pug globally:

   ```bash
   npm install pug-cli -g
   ```

2. Compile `pug/pages` into the repository root. `-w` rebuilds on change, `-P` keeps the HTML readable. `-O locales/index.js` loads every file in `locales/fa/`. `SITE_LANG` chooses the folder. Direction and locale codes live in `locales/index.js`.

   ```bash
   pug -w "pug/pages" -o ./ -P --basedir ./ -O locales/index.js
   ```

3. Compile English pages into `en/` and Kurdish (Sorani) pages into `ckb/`. Persian URLs stay at the root. Each page uses the same Pug file. `app_test.pug`, `privacy_en.pug`, and `404.pug` are not translated. GitHub Pages serves the root `404.html` for every missing address.

   ```bash
   SITE_LANG=en pug pug/pages/index.pug pug/pages/faqs.pug pug/pages/donate.pug pug/pages/changelog.pug pug/pages/about.pug pug/pages/privacy.pug pug/pages/git.pug pug/pages/press.pug -O locales/index.js -o ./en -P --basedir ./
   SITE_LANG=ckb pug pug/pages/index.pug pug/pages/faqs.pug pug/pages/donate.pug pug/pages/changelog.pug pug/pages/about.pug pug/pages/privacy.pug pug/pages/git.pug pug/pages/press.pug -O locales/index.js -o ./ckb -P --basedir ./
   ```

4. Rebuild the sitemap after a page is added or removed. `app_test.pug`, `privacy_en.pug`, and `404.pug` are skipped:

   ```bash
   node scripts/build-sitemap.js
   ```

`sitemap.xml`, `robots.txt`, `humans.txt`, and `llms.txt` live at the repository root. `robots.txt` points at the sitemap and keeps `/app_test.html` and `/privacy_en.html` out of the crawl. `404.html` is the single Persian page GitHub Pages serves for a missing address. It is marked `noindex` and is not part of the sitemap.

## Translations

Text lives in `locales/<language>/*.json`. The Pug files in `pug/pages` are shared. Compiled HTML is generated, so edit the JSON and compile again.

| Folder | Language | URLs |
| --- | --- | --- |
| `locales/fa` | Persian | `/` and `/faqs.html` |
| `locales/en` | English | `/en/` and `/en/faqs.html` |
| `locales/ckb` | Central Kurdish (Sorani) | `/ckb/` and `/ckb/faqs.html` |

Public pages, and the JSON file for each:

| Page | JSON | Persian | English | Kurdish |
| --- | --- | --- | --- | --- |
| Home | `home.json` | `/` | `/en/` | `/ckb/` |
| FAQ | `faqs.json` | `/faqs.html` | `/en/faqs.html` | `/ckb/faqs.html` |
| About | `about.json` | `/about.html` | `/en/about.html` | `/ckb/about.html` |
| Privacy | `privacy.json` | `/privacy.html` | `/en/privacy.html` | `/ckb/privacy.html` |
| Donate | `donate.json` | `/donate.html` | `/en/donate.html` | `/ckb/donate.html` |
| Changelog | `changelog.json` | `/changelog.html` | `/en/changelog.html` | `/ckb/changelog.html` |
| Source | `git.json` | `/git.html` | `/en/git.html` | `/ckb/git.html` |
| Press | `press.json` | `/press.html` | `/en/press.html` | `/ckb/press.html` |

`nav.json` is the header and the footer. It is not a page. `404.pug`, `app_test.pug`, and `privacy_en.pug` are Persian-only. `privacy_en.html` redirects to `/en/privacy.html`.

### Edit a translation

1. Change the strings in `locales/<language>/<page>.json`. Header and footer strings are in `nav.json`.
2. Set `url` to the absolute address of that page, such as `https://motmaenbash.ir/en/about.html`. The loader adds `lang` and `locale`, so those keys do not belong in the JSON.
3. Keep links to this site on the same language. Persian uses `/about.html`. English uses `/en/about.html`. Kurdish uses `/ckb/about.html`.
4. Keep the product name. English pages say MotmaenBash. Persian and Kurdish pages say مطمئن باش.
5. Compile that language again with the command in step 2 or 3, then run `node scripts/build-sitemap.js` if a page was added or removed.

A language appears in the menu, the footer, and `hreflang` only for pages that have a JSON file in its folder. Leave a page out until it is translated.

### Add a language

1. Add the language to the `languages` object in `locales/index.js`. The object order is the menu order.

   ```js
   xx: { locale: "xx", dir: "rtl", label: "…", prefix: "/xx" }
   ```

   `locale` is the Open Graph locale. `dir` is `rtl` or `ltr` and chooses `bootstrap.rtl.min.css` or `bootstrap.min.css`. `label` is the name shown in the menu. `prefix` is the URL folder. An empty prefix is only for Persian at the root.

2. Copy `locales/en` to `locales/xx` and translate every file, including `nav.json`.
3. Point each `url` at `https://motmaenbash.ir/xx/…`. The home page is `https://motmaenbash.ir/xx/`.
4. Compile into a matching folder. Use the same Pug file list as English. `404.pug`, `app_test.pug`, and `privacy_en.pug` stay out of it.

   ```bash
   SITE_LANG=xx pug pug/pages/index.pug pug/pages/faqs.pug pug/pages/donate.pug pug/pages/changelog.pug pug/pages/about.pug pug/pages/privacy.pug pug/pages/git.pug pug/pages/press.pug -O locales/index.js -o ./xx -P --basedir ./
   ```

5. Run `node scripts/build-sitemap.js`. Every locale folder except `fa` is added on its own.
6. Publish the folder only after the pages are translated.

## License

The website in this repository is [MIT](LICENSE). The Android app, extensions, and database use the licenses in the table above.
