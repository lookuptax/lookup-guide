
const https = require("https");

const urls = [
"https://lookuptax.com/docs/de/como-verificar/verificacion-cnpj-brasil",
"https://lookuptax.com/docs/es/how-to-verify/business-license-verification-uae",
"https://lookuptax.com/docs/es/tax-identification-number/belize-tax-id-guide",
"https://lookuptax.com/docs/blog/guide-to-vat-vies-vat-validation",
"https://lookuptax.com/docs/pt/tax-identification-number/maldives-tax-id-guide",
"https://lookuptax.com/docs/de/shuiwu-shibie-haoma/malaixiya-shuihao",
"https://lookuptax.com/docs/es/tax-identification-number/ecuador-tax-id-guide",
"https://lookuptax.com/docs/zh-Hans/how-to-verify/vat-verification-finland",
"https://lookuptax.com/docs/de/shuiwu-shibie-haoma/riben-shuihao",
"https://lookuptax.com/docs/es/tax-identification-number/uzbekistan-tax-id-guide",
"https://lookuptax.com/docs/zh-Hans/how-to-verify/dni-verification-argentina",
"https://lookuptax.com/docs/zh-Hans/tax-identification-number/lithuania-tax-id-guide",
"https://lookuptax.com/docs/pt/how-to-verify/PST-verification-canada",
"https://lookuptax.com/docs/zh-Hans/how-to-verify/business-license-verification-uae",
"https://lookuptax.com/docs/pt/explainers/qr-bill-switzerland",
"https://lookuptax.com/docs/pt/how-to-verify/trn-verification-uae",
"https://lookuptax.com/docs/es/how-to-verify/find-gst-singapore",
"https://lookuptax.com/docs/es/contact-us",
"https://lookuptax.com/docs/pt/how-to-verify/find-gst-singapore",
"https://lookuptax.com/docs/es/tax-identification-number/czechia-tax-id-guide",
"https://lookuptax.com/docs/zh-Hans/tax-identification-number/czechia-tax-id-guide"
];

const checkUrl = (urlStr) => {
  return new Promise((resolve) => {
    https.get(urlStr, (res) => {
      resolve(`${res.statusCode} ${urlStr}` + (res.statusCode >= 300 && res.statusCode < 400 ? ` -> ${res.headers.location}` : ""));
    }).on("error", (err) => {
      resolve(`ERROR ${urlStr}: ${err.message}`);
    });
  });
};

async function run() {
  for (const u of urls) {
    const res = await checkUrl(u);
    console.log(res);
  }
}
run();

