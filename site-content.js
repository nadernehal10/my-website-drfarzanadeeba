/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║           DR. FARZANA DEEBA — WEBSITE CONTENT FILE              ║
 * ║                                                                  ║
 * ║  Edit this file to update ANY content on the website.           ║
 * ║  Each section is clearly labelled. Instructions are in          ║
 * ║  comments above each item.                                       ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────────────────────────────────────
// 1. CONTACT & CLINIC INFORMATION
//    Change phone numbers, address, hours here — updates ALL pages at once.
// ─────────────────────────────────────────────────────────────────────────────
const CONTACT = {
  phone: "01753-843987",
  phoneLink: "tel:+8801753843987",

  chamberEn: "Popular Diagnostic Centre Ltd.<br>Building No-07, 6th Floor, Room No-606<br>Road #2, Dhanmondi, Dhaka-1205",
  chamberBn: "পপুলার ডায়াগনস্টিক সেন্টার লি.<br>ভবন নং-০৭, ৬ষ্ঠ তলা, কক্ষ নং-৬০৬<br>রোড #২, ধানমন্ডি, ঢাকা-১২০৫",

  hoursEn: "Saturday – Wednesday<br>4:00 PM – 9:00 PM",
  hoursBn: "শনিবার – বুধবার<br>বিকাল ৪টা – রাত ৯টা",

  bookingNoteEn: "Call one day prior · 10:00 AM – 4:00 PM<br>Closed Thursday & Friday",
  bookingNoteBn: "একদিন আগে ফোন করুন · সকাল ১০টা – বিকাল ৪টা<br>বৃহস্পতি ও শুক্রবার বন্ধ",
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. BLOG POSTS
//
//    TO ADD A NEW POST: Copy one object (from { to the closing }),
//    paste it at the TOP of the array, and fill in your content.
//
//    id          — short unique word, no spaces (used for URLs / links)
//    category    — one of: pcos | fertility | pregnancy | menstrual | surgery
//    featured    — set to true for ONE post to show it large at the top
//    date        — display date shown on the card
//    readTime    — e.g. "5 min"
//    image       — path to image file in uploads/ folder, or leave "" for placeholder
//    imageLabelEn / imageLabelBn  — description of what image should show
//    title / titleBn — article title in English and Bangla
//    excerpt / excerptBn — short summary shown on the card (1–2 sentences)
//    body / bodyBn   — full article HTML (paragraphs, headings, callouts)
//                      Use <p>, <h2>, <h3>, <div class="callout"><p>...</p></div>
// ─────────────────────────────────────────────────────────────────────────────
const BLOG_POSTS = [

  {
    id: "pcos",
    category: "pcos",
    featured: true,
    date: "March 2025",
    dateBn: "মার্চ ২০২৫",
    readTime: "6 min",
    image: "",
    imageLabelEn: "header image — PCOS awareness illustration",
    imageLabelBn: "হেডার ছবি — পিসিওএস সচেতনতা চিত্র",
    titleEn: "Understanding PCOS: Symptoms, Causes and Treatment Options",
    titleBn: "পিসিওএস বোঝা: লক্ষণ, কারণ ও চিকিৎসার বিকল্পসমূহ",
    excerptEn: "Polycystic Ovary Syndrome is one of the most common hormonal disorders in women of reproductive age — yet it remains widely misunderstood. This guide explains what PCOS actually is, how to recognise its signs, and what your treatment options look like today.",
    excerptBn: "পলিসিস্টিক ওভারি সিনড্রোম প্রজনন বয়সের নারীদের মধ্যে সবচেয়ে সাধারণ হরমোনজনিত ব্যাধিগুলির একটি।",
    bodyEn: `
      <p>Polycystic Ovary Syndrome (PCOS) is one of the most common hormonal disorders affecting women of reproductive age, with estimates suggesting it affects between 8–13% of women globally. Despite its prevalence, PCOS is frequently misdiagnosed or diagnosed late — often years after symptoms first appear.</p>
      <h2>What Is PCOS?</h2>
      <p>PCOS is a hormonal condition characterised by elevated androgen (male hormone) levels, irregular menstrual cycles, and the presence of multiple small follicles (not true cysts) on the ovaries. Diagnosis is made using the <strong>Rotterdam criteria</strong>, which requires two of the three features.</p>
      <div class="callout"><p><strong>Key fact:</strong> The "cysts" in PCOS are not true cysts — they are immature follicles that failed to release an egg. The name is somewhat misleading.</p></div>
      <h2>Common Symptoms</h2>
      <p>Symptoms vary widely between individuals. The most frequent include irregular or absent periods, excessive hair growth (hirsutism) on the face and body, acne, scalp hair thinning, weight gain, and difficulty conceiving.</p>
      <h2>Why Does PCOS Cause Infertility?</h2>
      <p>The primary mechanism is anovulation — many women with PCOS do not ovulate regularly, or at all. Without ovulation, conception cannot occur naturally. Insulin resistance, present in up to 70% of PCOS patients, also disrupts the hormonal environment necessary for healthy egg development.</p>
      <h2>Treatment Options</h2>
      <p>PCOS management is highly individualised. The right approach depends on whether your priority is symptom management, fertility, or long-term metabolic health.</p>
      <h3>Lifestyle Modification</h3>
      <p>Even a 5–10% reduction in body weight in overweight women can significantly restore ovulation and improve hormone levels. A low glycaemic diet and regular aerobic exercise are first-line interventions.</p>
      <h3>Medication</h3>
      <p>For menstrual regulation, the combined oral contraceptive pill is commonly used. For fertility, ovulation induction with letrozole or clomiphene citrate is typically the first step. Metformin helps with insulin resistance and can improve ovulation in some patients.</p>
      <div class="callout"><p>Dr. Deeba sees patients with PCOS for both fertility and general gynaecological management. Appointments: 4–9 PM · Call 01753-843987</p></div>
    `,
    bodyBn: `
      <p>পলিসিস্টিক ওভারি সিনড্রোম (পিসিওএস) প্রজনন বয়সের নারীদের মধ্যে সবচেয়ে সাধারণ হরমোনজনিত ব্যাধিগুলির একটি। বৈশ্বিক অনুমান অনুযায়ী এটি ৮–১৩% নারীকে প্রভাবিত করে।</p>
      <h2>পিসিওএস কী?</h2>
      <p>পিসিওএস একটি হরমোনজনিত অবস্থা যা উচ্চ অ্যান্ড্রোজেন মাত্রা, অনিয়মিত মাসিক চক্র এবং ডিম্বাশয়ে একাধিক ছোট ফলিকলের উপস্থিতি দ্বারা চিহ্নিত।</p>
      <div class="callout"><p><strong>গুরুত্বপূর্ণ তথ্য:</strong> পিসিওএস-এর "সিস্ট" আসলে সত্যিকারের সিস্ট নয় — এগুলি অপরিপক্ক ফলিকল যা ডিম্বাণু নিঃসরণ করতে পারেনি।</p></div>
      <h2>সাধারণ লক্ষণসমূহ</h2>
      <p>অনিয়মিত মাসিক, মুখ ও শরীরে অতিরিক্ত লোম, ব্রণ, মাথার চুল পাতলা হওয়া এবং গর্ভধারণে অসুবিধা প্রধান লক্ষণ।</p>
      <div class="callout"><p>ডাঃ দীবা উর্বরতা ও সাধারণ গাইনোকোলজিক্যাল ব্যবস্থাপনার জন্য পিসিওএস রোগীদের দেখেন। অ্যাপয়েন্টমেন্ট: বিকাল ৪–রাত ৯টা · ০১৭৫৩-৮৪৩৯৮৭</p></div>
    `,
  },

  {
    id: "fertility",
    category: "fertility",
    featured: false,
    date: "January 2025",
    dateBn: "জানুয়ারি ২০২৫",
    readTime: "8 min",
    image: "",
    imageLabelEn: "fertility consultation illustration",
    imageLabelBn: "উর্বরতা পরামর্শ চিত্র",
    titleEn: "When to See a Specialist: A Guide for Couples Trying to Conceive",
    titleBn: "কখন বিশেষজ্ঞ দেখাবেন: গর্ভধারণের চেষ্টারত দম্পতিদের জন্য গাইড",
    excerptEn: "Knowing when to seek help is the first step. This guide walks you through timelines and what to expect.",
    excerptBn: "সাহায্য চাওয়ার সঠিক সময় জানা প্রথম পদক্ষেপ।",
    bodyEn: `
      <p>One of the most common questions I hear from couples is: "How long should we try before seeing a doctor?" The answer depends on your age, your cycle regularity, and whether either partner has a known medical condition.</p>
      <h2>General Guidelines by Age</h2>
      <p>For women <strong>under 35</strong>: try for 12 months before seeking a specialist evaluation. For women <strong>35–39</strong>: try for 6 months. For women <strong>40 and over</strong>: seek evaluation immediately, or even pre-conceptually.</p>
      <div class="callout"><p>These timelines assume regular, unprotected intercourse every 2–3 days around the fertile window. If cycles are irregular, don't wait — seek evaluation earlier.</p></div>
      <h2>When to Go Sooner</h2>
      <p>Regardless of how long you have been trying, see a specialist sooner if: you have irregular or absent periods, a diagnosis of PCOS or endometriosis, previous pelvic infection, prior surgery on the uterus or tubes, known male factor issues, or more than two miscarriages.</p>
      <h2>What Happens at a First Consultation?</h2>
      <p>Your first appointment will include a detailed history, a pelvic ultrasound, and a panel of blood tests (hormonal profile including AMH, FSH, LH, thyroid function). Your partner may also be asked to provide a semen analysis.</p>
    `,
    bodyBn: `
      <p>দম্পতিদের কাছ থেকে আমি সবচেয়ে বেশি যে প্রশ্নটি শুনি: "ডাক্তার দেখানোর আগে কতদিন চেষ্টা করা উচিত?" উত্তরটি আপনার বয়স ও মাসিকের নিয়মিততার উপর নির্ভর করে।</p>
      <h2>বয়স অনুযায়ী সাধারণ নির্দেশিকা</h2>
      <p><strong>৩৫ বছরের কম</strong>: ১২ মাস চেষ্টা করুন। <strong>৩৫–৩৯</strong>: ৬ মাস। <strong>৪০ ও তার বেশি</strong>: অবিলম্বে মূল্যায়ন নিন।</p>
      <div class="callout"><p>যদি মাসিক অনিয়মিত হয়, অপেক্ষা না করে আগেই মূল্যায়ন নিন।</p></div>
    `,
  },

  {
    id: "pregnancy",
    category: "pregnancy",
    featured: false,
    date: "November 2024",
    dateBn: "নভেম্বর ২০২৪",
    readTime: "7 min",
    image: "",
    imageLabelEn: "high-risk pregnancy illustration",
    imageLabelBn: "উচ্চ ঝুঁকির গর্ভাবস্থা চিত্র",
    titleEn: "High-Risk Pregnancy: What It Means and How We Manage It",
    titleBn: "উচ্চ ঝুঁকির গর্ভাবস্থা: এর অর্থ কী এবং কীভাবে পরিচালনা করি",
    excerptEn: "A high-risk label can feel alarming, but with the right specialist care, most pregnancies reach a healthy outcome.",
    excerptBn: "উচ্চ ঝুঁকির লেবেল উদ্বেগজনক মনে হতে পারে, তবে সঠিক সেবায় অধিকাংশ গর্ভাবস্থা সুস্থভাবে শেষ হয়।",
    bodyEn: `
      <p>Being told your pregnancy is "high-risk" can feel frightening. But the term is a clinical classification — it describes pregnancies that require closer monitoring and more frequent specialist review, not necessarily pregnancies that will have poor outcomes.</p>
      <h2>What Makes a Pregnancy High-Risk?</h2>
      <p>A pregnancy can be classified as high-risk due to maternal factors (age, pre-existing conditions like diabetes or hypertension, obesity), obstetric factors (multiple gestation, prior pregnancy losses, placental abnormalities), or fetal factors (growth restriction, chromosomal abnormalities).</p>
      <div class="callout"><p>Advanced maternal age (35+) alone does not mean a poor outcome. It means more frequent monitoring — which gives us the best chance of catching complications early.</p></div>
      <h2>How We Manage High-Risk Pregnancies</h2>
      <p>Management is tailored to the specific risk factors. It typically involves more frequent antenatal visits, additional ultrasound scans, specialist referrals as needed, and a carefully planned delivery strategy.</p>
    `,
    bodyBn: `
      <p>"উচ্চ ঝুঁকির গর্ভাবস্থা" শোনা ভয়ঙ্কর মনে হতে পারে। কিন্তু এটি একটি ক্লিনিক্যাল শ্রেণীবিভাজন — ঘনিষ্ঠ পর্যবেক্ষণ প্রয়োজন, অগত্যা খারাপ ফলাফল নয়।</p>
      <div class="callout"><p>সঠিক বিশেষজ্ঞ যত্নের সাথে, উচ্চ ঝুঁকির গর্ভাবস্থার বিশাল সংখ্যাগরিষ্ঠতা সুস্থ শিশুর জন্ম দেয়।</p></div>
    `,
  },

  {
    id: "menstrual",
    category: "menstrual",
    featured: false,
    date: "September 2024",
    dateBn: "সেপ্টেম্বর ২০২৪",
    readTime: "5 min",
    image: "",
    imageLabelEn: "menstrual health illustration",
    imageLabelBn: "মাসিক স্বাস্থ্য চিত্র",
    titleEn: "Heavy Periods: When Is It Normal and When Should You Act?",
    titleBn: "অতিরিক্ত মাসিক: কখন স্বাভাবিক আর কখন চিকিৎসা নেবেন?",
    excerptEn: "Heavy menstrual bleeding affects 1 in 5 women and can signal underlying conditions that respond well to treatment.",
    excerptBn: "অতিরিক্ত মাসিক রক্তপাত ৫ জনে ১ জন নারীকে প্রভাবিত করে এবং এটি অন্তর্নিহিত সমস্যার ইঙ্গিত দিতে পারে।",
    bodyEn: `
      <p>Heavy menstrual bleeding (HMB) — medically defined as losing more than 80ml of blood per period — affects approximately 1 in 5 women at some point in their lives. While it is common, it is not something to simply endure.</p>
      <h2>Signs Your Bleeding Is Unusually Heavy</h2>
      <p>You may be experiencing HMB if you: need to change a pad or tampon every 1–2 hours, pass clots larger than a 50 paise coin, bleed for more than 7 days, or feel fatigued and short of breath during your period (signs of anaemia).</p>
      <div class="callout"><p>Heavy bleeding is not just inconvenient — chronic blood loss can lead to iron-deficiency anaemia, causing fatigue and reduced quality of life. Treatment is available and effective.</p></div>
      <h2>Common Causes</h2>
      <p>The most common causes include uterine fibroids, endometrial polyps, adenomyosis, endometriosis, PCOS, thyroid disorders, and coagulation problems.</p>
    `,
    bodyBn: `
      <p>অতিরিক্ত মাসিক রক্তপাত জীবনে কোনো না কোনো সময়ে প্রায় ৫ জনে ১ জন নারীকে প্রভাবিত করে। এটি সাধারণ হলেও সহ্য করার বিষয় নয়।</p>
      <div class="callout"><p>ভারী রক্তপাত শুধু অসুবিধাজনক নয় — দীর্ঘস্থায়ী রক্তক্ষরণ আয়রনের অভাবজনিত রক্তাল্পতা সৃষ্টি করতে পারে। চিকিৎসা পাওয়া যায় এবং কার্যকর।</p></div>
    `,
  },

  {
    id: "surgery",
    category: "surgery",
    featured: false,
    date: "July 2024",
    dateBn: "জুলাই ২০২৪",
    readTime: "6 min",
    image: "",
    imageLabelEn: "laparoscopic surgery illustration",
    imageLabelBn: "ল্যাপারোস্কোপিক সার্জারি চিত্র",
    titleEn: "What Is Laparoscopic Surgery? A Patient's Guide",
    titleBn: "ল্যাপারোস্কোপিক সার্জারি কী? রোগীর গাইড",
    excerptEn: "Keyhole surgery demystified — what it involves, how to prepare, and what recovery looks like.",
    excerptBn: "কী-হোল সার্জারি ব্যাখ্যা — এতে কী হয়, কীভাবে প্রস্তুতি নেবেন এবং সুস্থতা কেমন হয়।",
    bodyEn: `
      <p>Laparoscopic surgery — commonly called "keyhole surgery" — has transformed gynaecological surgery over the past three decades. Procedures that once required large abdominal incisions and weeks of recovery are now routinely performed through incisions smaller than a fingernail.</p>
      <h2>How Does Laparoscopy Work?</h2>
      <p>The surgeon makes 2–4 small incisions (usually 5–12mm) in the abdomen. Carbon dioxide gas inflates the abdominal cavity. A thin camera (laparoscope) is inserted, allowing the surgeon to see the pelvic organs on a high-definition monitor. Surgical instruments are passed through remaining incisions.</p>
      <div class="callout"><p>Most laparoscopic procedures in gynaecology take between 30 minutes and 2 hours. The majority of patients are discharged the same day or after one overnight stay.</p></div>
      <h2>Recovery</h2>
      <p>Most patients experience mild shoulder pain from the gas (which resolves in 1–2 days), and some abdominal soreness for a week. Return to light activity is usually possible within 3–5 days.</p>
    `,
    bodyBn: `
      <p>ল্যাপারোস্কোপিক সার্জারি — সাধারণত "কী-হোল সার্জারি" বলা হয় — গত তিন দশকে গাইনোকোলজিক্যাল সার্জারিকে রূপান্তরিত করেছে।</p>
      <div class="callout"><p>বেশিরভাগ ল্যাপারোস্কোপিক পদ্ধতিতে ৩০ মিনিট থেকে ২ ঘণ্টা সময় লাগে। অধিকাংশ রোগী একই দিন বা এক রাত থাকার পর বাড়ি যান।</p></div>
    `,
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// 3. RESEARCH PUBLICATIONS
//
//    TO ADD A NEW PUBLICATION: Copy one object block and paste it at the
//    TOP of the array (most recent first). Fill in all fields.
//
//    year        — publication year (number)
//    topic       — one of: infertility | endocrinology | surgery | pregnancy
//    type        — "Peer Reviewed" | "Original Article" | "Review"
//    titleEn / titleBn     — publication title
//    journalEn / journalBn — journal name
//    volumeEn / volumeBn   — volume/issue info (optional, use "" if none)
//    abstractEn / abstractBn — full abstract text
// ─────────────────────────────────────────────────────────────────────────────
const RESEARCH_PUBS = [

  {
    year: 2024,
    topic: "infertility",
    type: "Peer Reviewed",
    titleEn: "Recurrent Implantation Failure: Endometrial Receptivity Testing and Clinical Outcomes",
    titleBn: "বারবার ইমপ্লান্টেশন ব্যর্থতা: এন্ডোমেট্রিয়াল রিসেপটিভিটি পরীক্ষা ও ক্লিনিক্যাল ফলাফল",
    journalEn: "Journal of Obstetrics and Gynaecology Research, Bangladesh",
    journalBn: "বাংলাদেশ জার্নাল অব অবস্টেট্রিক্স ও গাইনোকোলজি রিসার্চ",
    volumeEn: "Vol. 39, Issue 2",
    volumeBn: "খণ্ড ৩৯, সংখ্যা ২",
    abstractEn: "Background: Recurrent implantation failure (RIF) remains a clinical challenge in assisted reproductive technology. This prospective cohort study evaluated the role of endometrial receptivity analysis (ERA) in personalising embryo transfer timing among 86 patients with ≥3 failed IVF cycles at BSMMU. Results demonstrated a 34% improvement in clinical pregnancy rates following personalised embryo transfer.",
    abstractBn: "পটভূমি: বারবার ইমপ্লান্টেশন ব্যর্থতা (আরআইএফ) সহায়তাকৃত প্রজনন প্রযুক্তিতে একটি ক্লিনিক্যাল চ্যালেঞ্জ। এই গবেষণায় বিএসএমএমইউতে ≥৩ বার আইভিএফ ব্যর্থ হওয়া ৮৬ জন রোগীর মধ্যে ইআরএ-এর ভূমিকা মূল্যায়ন করা হয়েছে। ব্যক্তিগতকৃত ভ্রূণ স্থানান্তরের পরে ক্লিনিক্যাল গর্ভাবস্থার হারে ৩৪% উন্নতি দেখা গেছে।",
  },

  {
    year: 2024,
    topic: "endocrinology",
    type: "Original Article",
    titleEn: "Insulin Resistance in Non-Obese PCOS: Prevalence and Metabolic Implications in Bangladeshi Women",
    titleBn: "নন-ওবিস পিসিওএস-এ ইনসুলিন প্রতিরোধ: বাংলাদেশি নারীদের মধ্যে প্রাদুর্ভাব ও বিপাকীয় প্রভাব",
    journalEn: "BSMMU Journal",
    journalBn: "বিএসএমএমইউ জার্নাল",
    volumeEn: "Vol. 17, Issue 1",
    volumeBn: "খণ্ড ১৭, সংখ্যা ১",
    abstractEn: "Objective: To determine the prevalence of insulin resistance (IR) in non-obese PCOS patients and correlate it with androgen levels and menstrual irregularity. A cross-sectional study of 120 non-obese PCOS patients (BMI <25) showed IR in 44% of cases, significantly higher than BMI-matched controls (p<0.001), with hyperandrogenism as the strongest correlate.",
    abstractBn: "উদ্দেশ্য: নন-ওবিস পিসিওএস রোগীদের মধ্যে ইনসুলিন প্রতিরোধের প্রাদুর্ভাব নির্ধারণ করা। ১২০ জন নন-ওবিস পিসিওএস রোগীর গবেষণায় ৪৪% ক্ষেত্রে ইনসুলিন প্রতিরোধ দেখা গেছে।",
  },

  {
    year: 2023,
    topic: "infertility",
    type: "Peer Reviewed",
    titleEn: "Outcomes of IUI in Unexplained Infertility: A Prospective Study at BSMMU",
    titleBn: "বিএসএমএমইউতে অব্যাখ্যাত বন্ধ্যাত্বে আইইউআই-এর ফলাফল: একটি সম্ভাব্য গবেষণা",
    journalEn: "Journal of Obstetrics and Gynaecology Research, Bangladesh",
    journalBn: "বাংলাদেশ জার্নাল অব অবস্টেট্রিক্স ও গাইনোকোলজি রিসার্চ",
    volumeEn: "",
    volumeBn: "",
    abstractEn: "This prospective study evaluated IUI success rates in unexplained infertility over three stimulation cycles using gonadotropin and clomiphene protocols in 145 couples. Cumulative pregnancy rate after three cycles was 38.6%, with no significant difference between stimulation protocols. Younger age and shorter duration of infertility were the strongest predictors of success.",
    abstractBn: "এই সম্ভাব্য গবেষণায় ১৪৫ দম্পতিতে তিনটি উদ্দীপনা চক্রে আইইউআই সাফল্যের হার মূল্যায়ন করা হয়েছে। তিনটি চক্রের পরে সঞ্চিত গর্ভাবস্থার হার ছিল ৩৮.৬%।",
  },

  {
    year: 2022,
    topic: "surgery",
    type: "Original Article",
    titleEn: "Laparoscopic Management of Endometrioma and Its Effect on Ovarian Reserve",
    titleBn: "এন্ডোমেট্রিওমার ল্যাপারোস্কোপিক ব্যবস্থাপনা ও ওভারিয়ান রিজার্ভে এর প্রভাব",
    journalEn: "Bangladesh Journal of Medical Science",
    journalBn: "বাংলাদেশ জার্নাল অব মেডিকেল সায়েন্স",
    volumeEn: "",
    volumeBn: "",
    abstractEn: "Objective: To assess changes in anti-Müllerian hormone (AMH) and antral follicle count (AFC) at 3 and 6 months following laparoscopic cystectomy for unilateral endometrioma. Among 62 patients, AMH declined by a mean of 28% at 3 months, stabilising at 6 months. Meticulous stripping technique correlated with less AMH reduction compared to electrocoagulation.",
    abstractBn: "উদ্দেশ্য: একতরফা এন্ডোমেট্রিওমার ল্যাপারোস্কোপিক সিস্টেক্টমির পরে ৩ ও ৬ মাসে এএমএইচ পরিবর্তন মূল্যায়ন করা। ৬২ জন রোগীর মধ্যে এএমএইচ ৩ মাসে গড়ে ২৮% হ্রাস পেয়েছে।",
  },

  {
    year: 2022,
    topic: "endocrinology",
    type: "Original Article",
    titleEn: "Thyroid Disorders and Their Impact on Female Fertility: A Retrospective Analysis",
    titleBn: "থাইরয়েড ব্যাধি এবং নারীর উর্বরতায় তাদের প্রভাব: একটি পূর্ববর্তী বিশ্লেষণ",
    journalEn: "BSMMU Journal",
    journalBn: "বিএসএমএমইউ জার্নাল",
    volumeEn: "Vol. 15, Issue 2",
    volumeBn: "খণ্ড ১৫, সংখ্যা ২",
    abstractEn: "A retrospective review of 340 infertile women presenting to BSMMU found thyroid dysfunction (overt or subclinical hypothyroidism) in 22.6% of cases, with a significantly higher rate of anovulation and recurrent pregnancy loss compared to euthyroid controls. Universal thyroid screening prior to fertility workup is recommended.",
    abstractBn: "বিএসএমএমইউতে আসা ৩৪০ জন বন্ধ্যা নারীর পর্যালোচনায় ২২.৬% ক্ষেত্রে থাইরয়েড কর্মহীনতা পাওয়া গেছে।",
  },

  {
    year: 2021,
    topic: "infertility",
    type: "Original Article",
    titleEn: "Prevalence of PCOS Among Women Presenting with Infertility in Tertiary Care, Dhaka",
    titleBn: "ঢাকার তৃতীয় স্তরের সেবায় বন্ধ্যাত্বের কারণে আসা নারীদের মধ্যে পিসিওএস-এর প্রাদুর্ভাব",
    journalEn: "BMRC Bulletin, Dhaka",
    journalBn: "বিএমআরসি বুলেটিন, ঢাকা",
    volumeEn: "",
    volumeBn: "",
    abstractEn: "A cross-sectional study of 400 women presenting with primary or secondary infertility identified PCOS as the cause in 31.5% of cases, making it the single largest contributor to female-factor infertility at this centre. Rotterdam criteria were applied for diagnosis.",
    abstractBn: "৪০০ জন বন্ধ্যা নারীর গবেষণায় ৩১.৫% ক্ষেত্রে পিসিওএসকে কারণ হিসেবে চিহ্নিত করা হয়েছে।",
  },

  {
    year: 2020,
    topic: "surgery",
    type: "Review",
    titleEn: "Hysteroscopic Evaluation of the Uterine Cavity in Recurrent Implantation Failure",
    titleBn: "বারবার ইমপ্লান্টেশন ব্যর্থতায় জরায়ু গহ্বরের হিস্টেরোস্কোপিক মূল্যায়ন",
    journalEn: "Journal of Bangladesh College of Physicians and Surgeons",
    journalBn: "জার্নাল অব বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস",
    volumeEn: "",
    volumeBn: "",
    abstractEn: "Narrative review examining the evidence for routine hysteroscopy prior to IVF, with focus on detection of intrauterine pathology (polyps, septum, adhesions, submucosal fibroids) in women with recurrent implantation failure. Concludes that hysteroscopy is warranted after two or more failed IVF cycles.",
    abstractBn: "আইভিএফ-এর আগে রুটিন হিস্টেরোস্কোপির প্রমাণ পর্যালোচনা। দুই বা ততোধিক আইভিএফ ব্যর্থতার পরে হিস্টেরোস্কোপি প্রয়োজন বলে উপসংহারে আসা হয়েছে।",
  },

  {
    year: 2019,
    topic: "infertility",
    type: "Original Article",
    titleEn: "Anti-Müllerian Hormone as a Predictor of Ovarian Response in Controlled Stimulation Cycles",
    titleBn: "নিয়ন্ত্রিত উদ্দীপনা চক্রে ডিম্বাশয়ের প্রতিক্রিয়ার পূর্বাভাসকারী হিসেবে অ্যান্টি-মুলেরিয়ান হরমোন",
    journalEn: "BSMMU Journal",
    journalBn: "বিএসএমএমইউ জার্নাল",
    volumeEn: "",
    volumeBn: "",
    abstractEn: "Prospective evaluation of AMH as a predictor of poor and hyper-ovarian response in 180 women undergoing controlled ovarian stimulation. AMH <1.1 ng/mL had sensitivity 82% and specificity 79% for poor response; AMH >3.4 ng/mL had sensitivity 75% for hyper-response.",
    abstractBn: "১৮০ জন নারীর মধ্যে নিয়ন্ত্রিত ডিম্বাশয় উদ্দীপনায় দুর্বল ও অতি-ডিম্বাশয় প্রতিক্রিয়ার পূর্বাভাসকারী হিসেবে এএমএইচ-এর সম্ভাব্য মূল্যায়ন।",
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// 4. CONFERENCE PRESENTATIONS
//    TO ADD: Copy one object and paste at the top of the array.
// ─────────────────────────────────────────────────────────────────────────────
const PRESENTATIONS = [

  {
    year: 2024,
    titleEn: "Personalising IVF: ERA-Guided Frozen Embryo Transfer Outcomes",
    titleBn: "আইভিএফ ব্যক্তিগতকরণ: ইআরএ-নির্দেশিত ফ্রোজেন ভ্রূণ স্থানান্তরের ফলাফল",
    venueEn: "Bangladesh Society of Obstetrics and Gynaecology (BSOG) Annual Conference, Dhaka",
    venueBn: "বাংলাদেশ সোসাইটি অব অবস্টেট্রিক্স অ্যান্ড গাইনোকোলজি (বিএসওজি) বার্ষিক সম্মেলন, ঢাকা",
  },
  {
    year: 2023,
    titleEn: "Non-Obese PCOS: A Distinct Phenotype with Unique Clinical Challenges",
    titleBn: "নন-ওবিস পিসিওএস: অনন্য ক্লিনিক্যাল চ্যালেঞ্জ সহ একটি স্বতন্ত্র ফেনোটাইপ",
    venueEn: "South Asian Federation of Obstetrics and Gynaecology (SAFOG) Congress, Colombo",
    venueBn: "সাউথ এশিয়ান ফেডারেশন অব অবস্টেট্রিক্স অ্যান্ড গাইনোকোলজি (সেফোগ) কংগ্রেস, কলম্বো",
  },
  {
    year: 2022,
    titleEn: "Ovarian Reserve After Laparoscopic Cystectomy: Balancing Benefit and Risk",
    titleBn: "ল্যাপারোস্কোপিক সিস্টেক্টমির পর ওভারিয়ান রিজার্ভ: সুবিধা ও ঝুঁকির ভারসাম্য",
    venueEn: "BSMMU Annual Academic Week, Dhaka",
    venueBn: "বিএসএমএমইউ বার্ষিক একাডেমিক সপ্তাহ, ঢাকা",
  },
  {
    year: 2021,
    titleEn: "Universal Thyroid Screening in Infertile Women: Evidence and Recommendations",
    titleBn: "বন্ধ্যা নারীদের মধ্যে সর্বজনীন থাইরয়েড স্ক্রিনিং: প্রমাণ ও সুপারিশ",
    venueEn: "BSOG Annual Conference, Dhaka",
    venueBn: "বিএসওজি বার্ষিক সম্মেলন, ঢাকা",
  },

];
