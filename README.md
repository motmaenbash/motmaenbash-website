# MotmaenBash Website | وب‌سایت مطمئن باش

[MotmaenBash](https://motmaenbash.ir) is a free and open-source browser extension and Android app that helps people avoid phishing: fake payment pages, phishing SMS, and suspicious apps. This repository is the landing page, with download links for the Chrome, Firefox, and Yandex extensions and the Android app.

This repository contains the website source code for MotmaenBash project. For the main project repository including browser extensions and mobile app source code, please visit [MotmaenBash on GitHub](https://github.com/motmaenbash/motmaenbash).

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

2. Compile `pug/pages` into the repository root. `-w` rebuilds on change, `-P` keeps the HTML readable:

   ```bash
   pug -w "pug/pages" -o ./ -P --basedir ./
   ```

3. Rebuild the sitemap after a page is added or removed. `app_test.pug` is skipped:

   ```bash
   node scripts/build-sitemap.js
   ```

## License

The website in this repository is [MIT](LICENSE). The Android app, extensions, and database use the licenses in the table above.
