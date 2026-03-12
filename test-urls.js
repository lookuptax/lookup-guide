
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

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      let out = `${res.status} ${url}`;
      if (res.status >= 300 && res.status < 400) {
        out += ` -> ${res.headers.get("location")}`;
      }
      console.log(out);
    } catch (e) {
      console.log(`ERROR ${url}: ${e.message}`);
    }
  }
}
check();

