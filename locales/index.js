const fs = require("fs");
const path = require("path");

const languages = {
  fa: { locale: "fa_IR", dir: "rtl", label: "فارسی", prefix: "" },
  ckb: { locale: "ckb_IQ", dir: "rtl", label: "کوردی", prefix: "/ckb" },
  en: { locale: "en_US", dir: "ltr", label: "English", prefix: "/en" },
};

const lang = process.env.SITE_LANG || "fa";
const language = languages[lang];

if (!language) {
  throw new Error("Unknown SITE_LANG: " + lang);
}

const dir = path.join(__dirname, lang);
const pages = {};
const pagesByLang = {};

for (const code of Object.keys(languages)) {
  pagesByLang[code] = fs
    .readdirSync(path.join(__dirname, code))
    .filter((file) => file.endsWith(".json") && file !== "nav.json")
    .map((file) => path.basename(file, ".json"));
}

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".json")) continue;
  const name = path.basename(file, ".json");
  const page = require(path.join(dir, file));
  page.lang = lang;
  page.locale = language.locale;
  if (name === "nav") {
    page.prefix = language.prefix;
    page.home = language.prefix ? language.prefix + "/" : "/";
  }
  pages[name] = page;
}

pages.dir = language.dir;
pages.siteLanguages = Object.keys(languages).map((code) => ({
  code,
  label: languages[code].label,
  prefix: languages[code].prefix,
  locale: languages[code].locale,
}));
pages.pagesByLang = pagesByLang;

module.exports = pages;
