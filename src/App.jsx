import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";

const packages = [
  {
    titleAr: "إستشارة ومتابعة عبر تطبيق صحة و عافية لمدة إسبوعين",
    titleEn: "Consultation & Follow-up via App (2 Weeks)",
    descAr:
      "حل مثالي لبداية سريعة مع برنامج غذائي وصحي مخصص. متابعة أسبوعية دقيقة لضمان انطلاقة قوية في رحلتك الصحية.",
    descEn:
      "Perfect for a quick start with a personalized diet and health program. Weekly check-ins to guarantee a strong kick-off to your wellness journey.",
    priceAr: "250 درهم",
    priceEn: "250 AED",
    link: "https://buy.stripe.com/00wbJ0bfp9Q9c2Sd0N5EY13",
    image: "/chat.png",
  },
  {
    titleAr: "إستشارة ومتابعة عبر تطبيق صحة و عافية لمدة شهر",
    titleEn: "Consultation & Follow-up via Seha & Afia App (1 Month)",
    descAr:
      "جلسة إستشارة متخصصة مع متابعة غذائية وصحية شاملة عبر التطبيق. نساعدك بخطة غذائية عملية تناسب أسلوب حياتك لمدة شهر كامل.",
    descEn:
      "Specialized consultation with complete nutritional and health follow-up via the app. Get a personalized diet plan tailored to your lifestyle for a full month.",
    priceAr: "350 درهم",
    priceEn: "350 AED",
    link: "https://buy.stripe.com/4gMfZgerBaUd8QGbWJ5EY11",
    image: "/chat.png",
  },
  {
    titleAr:
      "إستشارة عبر مكالمة صوتية + متابعة لمدة شهر عبر تطبيق صحة و عافية",
    titleEn: "Voice Call Consultation + Follow-up (1 Month)",
    descAr:
      "تواصل مباشر مع الطبيب عبر مكالمة صوتية لشرح حالتك بالتفصيل. متابعة مستمرة عبر التطبيق لضمان تقدمك خطوة بخطوة.",
    descEn:
      "Direct voice call with the doctor to discuss your case in detail. Continuous follow-up via the app to ensure steady progress throughout the month.",
    priceAr: "500 درهم",
    priceEn: "500 AED",
    link: "https://buy.stripe.com/9B6bJ0dnx0fzeb0gcZ5EY12",
    image: "/call.png",
  },

  {
    titleAr: "باقة 3 شهور متابعة عبر تطبيق صحة و عافية",
    titleEn: "3-Month Follow-up via Seha & Afia App",
    descAr:
      "أفضل خيار لنتائج مستدامة على المدى الطويل. خطة متكاملة مع متابعة دقيقة شهرية لتغيير نمط حياتك للأفضل.",
    descEn:
      "The best choice for long-term sustainable results. A comprehensive plan with monthly follow-ups to transform your lifestyle for the better.",
    priceAr: "900 درهم",
    priceEn: "900 AED",
    link: "https://buy.stripe.com/28EeVc2IT1jD6IygcZ5EY1e",
    image: "/chat.png",
  },
  {
    titleAr: "باقة 6 شهور متابعة عبر تطبيق صحة و عافية",
    titleEn: "6-Month Follow-up via Seha & Afia App",
    descAr:
      "رحلة متكاملة لتحسين صحتك ونمط حياتك على المدى الطويل. متابعة نصف سنوية دقيقة مع خطط غذائية متجددة باستمرار.",
    descEn:
      "A complete journey to improve your health and lifestyle in the long term. Half-yearly follow-up with continuously updated nutrition plans.",
    priceAr: "1500 درهم",
    priceEn: "1500 AED",
    link: "https://buy.stripe.com/aFadR8erB2nH8QGaSF5EY1f",
    image: "/chat.png",
  },

  // باقة 3 شهور و 6 شهور مع مكالمة 
  {
    titleAr: "باقة مكالمة صوتية + 3 شهور متابعة عبر تطبيق صحة و عافية",
    titleEn: "Voice call + 3-Month Follow-up via Seha & Afia App",
    descAr:
      "أفضل خيار لنتائج مستدامة على المدى الطويل. خطة متكاملة مع متابعة دقيقة شهرية لتغيير نمط حياتك للأفضل.",
    descEn:
      "The best choice for long-term sustainable results. A comprehensive plan with monthly follow-ups to transform your lifestyle for the better.",
    priceAr: "1200 درهم",
    priceEn: "1200 AED",
    link: "https://buy.stripe.com/5kQaEW3MX3rLff45yl5EY1a",
    image: "/call.png",
  },
  {
    titleAr: "باقةي مكالمة صوتية + 6 شهور متابعة عبر تطبيق صحة و عافية",
    titleEn: "Voice call +6-Month Follow-up via Seha & Afia App",
    descAr:
      "رحلة متكاملة لتحسين صحتك ونمط حياتك على المدى الطويل. متابعة نصف سنوية دقيقة مع خطط غذائية متجددة باستمرار.",
    descEn:
      "A complete journey to improve your health and lifestyle in the long term. Half-yearly follow-up with continuously updated nutrition plans.",
    priceAr: "1800 درهم",
    priceEn: "1800 AED",
    link: "https://buy.stripe.com/9B68wO83d2nH4Aq1i55EY1d",
    image: "/call.png",
  },
];

export default function App() {
  const [lang, setLang] = useState("ar");

  return (
    <div
      className={`min-vh-100 text-dark`}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{ backgroundColor: "#f0faf7" }}
    >
      {/* الهيدر */}
      <header className="container py-4">
        <div
          className={`d-flex flex-column flex-md-row align-items-center justify-content-between ${lang === "ar" ? "flex-md-row-reverse" : "flex-md-row"
            }`}
        >
          {/* الصورة */}
          <div className="mb-3 mb-md-0">
            <img
              src="/mo_saieed.jpg"
              alt="دكتور محمد سعيد"
              className="rounded-circle shadow"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>

          {/* الاسم + النبذة */}
          <div
            className={`text-center flex-grow-1 px-3 text-md-${lang === "ar" ? "end" : "start"
              }`}
          >
            <h1 className="fw-bold text-success">
              {lang === "ar" ? "د. محمد سعيد" : "Dr. Mohamed Saeed"}
            </h1>
            <p className="text-secondary">
              {lang === "ar"
                ? "استشارات وباقات تغذية عبر تطبيق صحة و عافية"
                : "Nutrition Consultations & Packages via Seha We Afeya App"}
            </p>
          </div>

          {/* زر اللغة */}
          <div>
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="btn btn-success"
            >
              {lang === "ar" ? "English" : "العربية"}
            </button>
          </div>
        </div>
      </header>

      {/* الباقات */}
      <main className="container py-5">
        <div className="row g-4">
          {packages.map((pkg, i) => (
            <div className="col-12 col-md-6" key={i}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card shadow border-0 h-100"
              >
                <img
                  src={pkg.image}
                  alt={lang === "ar" ? pkg.titleAr : pkg.titleEn}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title text-success fw-bold text-center mb-3">
                    {lang === "ar" ? pkg.titleAr : pkg.titleEn}
                  </h5>
                  <p className="text-secondary text-center">
                    {lang === "ar" ? pkg.descAr : pkg.descEn}
                  </p>
                  <p className="text-center fw-bold">
                    {lang === "ar" ? pkg.priceAr : pkg.priceEn}
                  </p>
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-100 mt-3"
                  >
                    {lang === "ar" ? "ادفع الآن" : "Pay Now"}
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </main>

      {/* قسم التواصل */}
      <footer className="container py-5 text-center">
        <h5 className="mb-4">{lang === "ar" ? "تواصل معنا" : "Contact Us"}</h5>
        <div className="d-flex justify-content-center gap-4 fs-3 flex-wrap">
          <a href="https://wa.me/+971557412046" target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp" style={{ color: "#25D366" }}></i>
          </a>
          <a href="https://www.facebook.com/MohamedSaieedHealth" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook" style={{ color: "#1877F2" }}></i>
          </a>
          <a href="https://www.instagram.com/MohamedSaieedHealth" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram" style={{ color: "#E1306C" }}></i>
          </a>
          <a href="https://www.tiktok.com/@mohamedsaieedhealth" target="_blank" rel="noreferrer">
            <i className="bi bi-tiktok" style={{ color: "#000000" }}></i>
          </a>
          <a href="https://linktr.ee/sehawafya?utm_source=linktree_profile_share&ltsid=6fd2fb28-1dbe-40ab-b019-b2a36067aed1" target="_blank" rel="noreferrer">
            <i className="bi bi-link-45deg" style={{ color: "#39E09B" }}></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
