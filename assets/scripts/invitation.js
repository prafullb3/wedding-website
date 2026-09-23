/* =====================================================================
   PRAFULL & TRISHNA — INVITATION SCRIPT
   ===================================================================== */

/* ── CONFIG ───────────────────────────────────────────────────────────
   Dates verified: 12 Dec 2026 = Saturday, 13 Dec 2026 = Sunday.
   Times are local (IST). Change them here, then change the matching
   human-readable strings in TRANSLATIONS below.
   ------------------------------------------------------------------ */
const CONFIG = {
  weddingDateTime: "2026-12-13T19:00:00+05:30",
  phone: "+91 98765 43210",
  sangeet: {
    start: "20261212T190000", end: "20261212T230000",
    location: "The Rosewood Terrace, 9 Meadow Court, Valsad, Gujarat"
  },
  haldi: {
    start: "20261213T100000", end: "20261213T130000",
    location: "The Courtyard, 21 Sunflower Street, Valsad, Gujarat"
  },
  wedding: {
    start: "20261213T190000", end: "20261213T210000",
    location: "The Old Botanical Hall, 12 Garden Lane, Valsad, Gujarat"
  }
};

/* ── TRANSLATIONS ─────────────────────────────────────────────────── */
const TRANSLATIONS = {

  en: {
    _names: "Prafull &amp; Trishna",
    _namesHero: 'Prafull<span class="amp">&amp;</span>Trishna',
    _digits: null,
    _cal: {
      sangeet: "Sangeet — Prafull & Trishna",
      haldi: "Fulo wali Haldi — Prafull & Trishna",
      wedding: "Wedding — Prafull & Trishna"
    },

    envelope_subtitle: "request the pleasure of your company",
    envelope_hint: "Tap the seal to open",
    seal_aria: "Open the invitation",

    nav_story: "Story", nav_events: "Events", nav_gallery: "Gallery",

    hero_eyebrow: "Together with their families",
    hero_date: "Sunday, the 13th of December, 2026",
    hero_place: "Valsad, Gujarat",
    hero_scroll: "Scroll",

    story_eyebrow: "Our Story",
    story_heading: "A beginning blessed by family, built on love",
    story_p: "Ours began the way so many good things do — with the blessings of our families, a conversation that never quite ended, and the quiet certainty that we were meant to build a life together. We are grateful for the love and guidance that carried us here, and there is no one we would rather share this day with than you.",
    tl1_label: "The beginning",
    tl1_desc: "With the blessings of both our families, two paths came together — with love, respect, and a great deal of hope.",
    tl2_label: "The engagement",
    tl2_desc: "A promise made in front of the people who matter most, and the certainty that we were ready to begin.",
    tl3_label: "The family blessing",
    tl3_desc: "Elders, prayers, and a house full of noise. Their blessings gave this moment its warmth and its meaning.",
    tl4_label: "The wedding",
    tl4_desc: "And now the day itself — a new chapter, begun among the people who have loved us all along.",

    countdown_eyebrow: "Counting Down",
    countdown_heading: "Until the mandap is lit",
    lbl_days: "Days", lbl_hours: "Hours", lbl_mins: "Minutes", lbl_secs: "Seconds",

    details_eyebrow: "The Celebrations",
    details_heading: "When & where",
    sangeet_title: "Sangeet",
    sangeet_when: "7:00 PM · Saturday, 12 December 2026",
    sangeet_where: "Shanti Resorts<br>Tithal, Valsad, Gujarat",
    sangeet_dress: "Cocktail Night — come ready to dance until the lights go up.",
    haldi_title: "Fulo wali Haldi",
    haldi_when: "10:00 AM · Sunday, 13 December 2026",
    haldi_where: "Shanti Resorts<br>Tithal, Valsad, Gujarat",
    haldi_dress: "Bright festive color — wear something washable.",
    wedding_title: "The Wedding",
    wedding_when: "6:30 PM · Sunday, 13 December 2026",
    wedding_where: "Shanti Resorts<br>Tithal, Valsad, Gujarat",
    wedding_dress: "Garden formal — traditional dress and soft, natural tones are very welcome.",
    btn_directions: "Get Directions", btn_calendar: "Add to Calendar",

    gallery_eyebrow: "A Few Favourites",
    gallery_heading: "Moments, so far",
    photo_caption: "Photo",

    assist_eyebrow: "Travel Help",
    assist_heading: "Anything you need",
    assist_intro: "If you need help with directions, staying over, or getting to the venue, please call us. Someone from the family will always pick up.",
    assist_hours: "Reachable between 9:00 AM and 9:00 PM",

    footer_line: "With love and gratitude, we hope to see you there.",
    toast_cal: "Calendar file downloaded"
  },

  hi: {
    _names: "प्रफुल्ल एवं तृष्णा",
    _namesHero: 'प्रफुल्ल<span class="amp">&amp;</span>तृष्णा',
    _digits: "०१२३४५६७८९",
    _cal: {
      sangeet: "संगीत — प्रफुल्ल एवं तृष्णा",
      haldi: "फूलों वाली हल्दी — प्रफुल्ल एवं तृष्णा",
      wedding: "विवाह — प्रफुल्ल एवं तृष्णा"
    },

    envelope_subtitle: "आपकी उपस्थिति की प्रार्थना करते हैं",
    envelope_hint: "खोलने के लिए मोहर को छुएँ",
    seal_aria: "निमंत्रण खोलें",

    nav_story: "कहानी", nav_events: "कार्यक्रम", nav_gallery: "तस्वीरें",

    hero_eyebrow: "दोनों परिवारों के आशीर्वाद सहित",
    hero_date: "रविवार, १३ दिसम्बर २०२६",
    hero_place: "वलसाड, गुजरात",
    hero_scroll: "नीचे देखें",

    story_eyebrow: "हमारी कहानी",
    story_heading: "परिवार के आशीर्वाद से खिली, प्रेम पर टिकी एक शुरुआत",
    story_p: "हमारी कहानी वैसे ही शुरू हुई जैसे अच्छी बातें अक्सर शुरू होती हैं — घरवालों के आशीर्वाद से, एक ऐसी बातचीत से जो कभी खत्म ही नहीं हुई, और इस शांत विश्वास से कि हमें साथ मिलकर एक जीवन बनाना है। जिस स्नेह और मार्गदर्शन ने हमें यहाँ तक पहुँचाया, उसके लिए हम आभारी हैं — और यह दिन आपसे बेहतर किसी और के साथ बाँटना हम नहीं चाहते।",
    tl1_label: "शुरुआत",
    tl1_desc: "दोनों परिवारों के आशीर्वाद से दो राहें एक हुईं — प्रेम, आदर और ढेर सारी उम्मीद के साथ।",
    tl2_label: "सगाई",
    tl2_desc: "अपनों के सामने किया गया एक वादा, और यह भरोसा कि अब हम साथ चलने के लिए तैयार हैं।",
    tl3_label: "परिवार का आशीर्वाद",
    tl3_desc: "बड़ों का स्नेह, पूजा-पाठ और घर भर की चहल-पहल — उन्हीं आशीर्वादों ने इस पल को अर्थ दिया।",
    tl4_label: "विवाह का दिन",
    tl4_desc: "और अब वह दिन — एक नया अध्याय, उन्हीं लोगों के बीच जिन्होंने हमें हमेशा सँभाला है।",

    countdown_eyebrow: "प्रतीक्षा के क्षण",
    countdown_heading: "शुभ घड़ी आने तक",
    lbl_days: "दिन", lbl_hours: "घंटे", lbl_mins: "मिनट", lbl_secs: "सेकंड",

    details_eyebrow: "शुभ कार्यक्रम",
    details_heading: "कब और कहाँ",
    sangeet_title: "संगीत",
    sangeet_when: "सायं ७:०० बजे · शनिवार, १२ दिसम्बर २०२६",
    sangeet_where: "शांति रिसॉर्ट्स<br>तिथल, वलसाड, गुजरात",
    sangeet_dress: "कॉकटेल नाइट — रात भर थिरकने की तैयारी के साथ आइए।",
    haldi_title: "फूलों वाली हल्दी",
    haldi_when: "प्रातः १०:०० बजे · रविवार, १३ दिसम्बर २०२६",
    haldi_where: "शांति रिसॉर्ट्स<br>तिथल, वलसाड, गुजरात",
    haldi_dress: "चमकदार आणि उत्सवी रंग — फूल और हल्दी खूब उड़ेंगे, इसलिए ऐसा पहनें जो आसानी से धुल जाए।",
    wedding_title: "विवाह",
    wedding_when: "सायं ६:३० बजे · रविवार, १३ दिसम्बर २०२६",
    wedding_where: "शांति रिसॉर्ट्स<br>तिथल, वलसाड, गुजरात",
    wedding_dress: "पारंपरिक परिधान — हल्के, प्राकृतिक रंग विशेष रूप से सुंदर लगेंगे।",
    btn_directions: "रास्ता देखें", btn_calendar: "कैलेंडर में जोड़ें",

    gallery_eyebrow: "कुछ प्यारी यादें",
    gallery_heading: "अब तक के पल",
    photo_caption: "तस्वीर",

    assist_eyebrow: "यात्रा सहायता",
    assist_heading: "कोई भी ज़रूरत हो, बताइए",
    assist_intro: "रास्ता, ठहरने की व्यवस्था या आयोजन स्थल तक पहुँचने में कोई भी सहायता चाहिए तो हमें फ़ोन कीजिए। परिवार से कोई न कोई ज़रूर उपलब्ध रहेगा।",
    assist_hours: "सुबह ९:०० से रात ९:०० बजे तक उपलब्ध",

    footer_line: "स्नेह और आभार सहित — आपकी प्रतीक्षा रहेगी।",
    toast_cal: "कैलेंडर फ़ाइल डाउनलोड हो गई"
  },

  mr: {
    _names: "प्रफुल्ल आणि तृष्णा",
    _namesHero: 'प्रफुल्ल<span class="amp">&amp;</span>तृष्णा',
    _digits: "०१२३४५६७८९",
    _cal: {
      sangeet: "संगीत — प्रफुल्ल आणि तृष्णा",
      haldi: "फुलांची हळद — प्रफुल्ल आणि तृष्णा",
      wedding: "विवाह — प्रफुल्ल आणि तृष्णा"
    },

    envelope_subtitle: "आपल्या उपस्थितीची आग्रहाची विनंती",
    envelope_hint: "उघडण्यासाठी मोहोरेला स्पर्श करा",
    seal_aria: "आमंत्रण उघडा",

    nav_story: "आमची गोष्ट", nav_events: "कार्यक्रम", nav_gallery: "छायाचित्रे",

    hero_eyebrow: "दोन्ही कुटुंबांच्या आशीर्वादाने",
    hero_date: "रविवार, १३ डिसेंबर २०२६",
    hero_place: "वलसाड, गुजरात",
    hero_scroll: "खाली पहा",

    story_eyebrow: "आमची गोष्ट",
    story_heading: "कुटुंबाच्या आशीर्वादाने उमललेली, प्रेमावर उभी राहिलेली सुरुवात",
    story_p: "चांगल्या गोष्टी जशा सुरू होतात, तशीच आमचीही सुरुवात झाली — घरच्यांच्या आशीर्वादाने, कधीच न संपलेल्या एका गप्पांनी, आणि आपण एकत्र आयुष्य उभं करायचं आहे या शांत खात्रीने. इथवर पोहोचवणाऱ्या प्रेमाबद्दल आणि मार्गदर्शनाबद्दल आम्ही कृतज्ञ आहोत — आणि हा दिवस तुमच्याशिवाय दुसऱ्या कुणासोबत साजरा करावा असं आम्हाला वाटतच नाही.",
    tl1_label: "सुरुवात",
    tl1_desc: "दोन्ही कुटुंबांच्या आशीर्वादाने दोन वाटा एकत्र आल्या — प्रेम, आदर आणि भरपूर आशेसह.",
    tl2_label: "साखरपुडा",
    tl2_desc: "जवळच्या माणसांसमोर दिलेलं एक वचन, आणि आता एकत्र सुरुवात करायची तयारी आहे ही खात्री.",
    tl3_label: "घरच्यांचा आशीर्वाद",
    tl3_desc: "वडीलधाऱ्यांचं प्रेम, पूजा-अर्चा आणि घरभर गजबज — त्याच आशीर्वादांनी या क्षणाला अर्थ दिला.",
    tl4_label: "लग्नाचा दिवस",
    tl4_desc: "आणि आता तो दिवस — एक नवं पान, ज्यांनी आम्हाला नेहमी सांभाळलं त्यांच्याच सोबत.",

    countdown_eyebrow: "आता थोडाच अवधी",
    countdown_heading: "शुभ मुहूर्तापर्यंत",
    lbl_days: "दिवस", lbl_hours: "तास", lbl_mins: "मिनिटे", lbl_secs: "सेकंद",

    details_eyebrow: "शुभ कार्यक्रम",
    details_heading: "केव्हा आणि कुठे",
    sangeet_title: "संगीत",
    sangeet_when: "सायं. ७:०० वा. · शनिवार, १२ डिसेंबर २०२६",
    sangeet_where: "शांति रिसॉर्ट्स<br>तिथल, वलसाड, गुजरात",
    sangeet_dress: "रंकॉकटेल नाइट— रात्रभर नाचायच्या तयारीनेच या.",
    haldi_title: "फुलांची हळद",
    haldi_when: "सकाळी १०:०० वा. · रविवार, १३ डिसेंबर २०२६",
    haldi_where: "शांति रिसॉर्ट्स<br>तिथल, वलसाड, गुजरात",
    haldi_dress: "चमकदार आणि उत्सवी रंग — फुलं आणि हळद भरपूर उधळणार, त्यामुळे धुता येतील असे कपडे घाला.",
    wedding_title: "विवाह सोहळा",
    wedding_when: "सायं. ६:३० वा. · रविवार, १३ डिसेंबर २०२६",
    wedding_where: "शांति रिसॉर्ट्स<br>तिथल, वलसाड, गुजरात",
    wedding_dress: "पारंपरिक पोशाख — मंद, नैसर्गिक रंग विशेष खुलून दिसतील.",
    btn_directions: "मार्ग पहा", btn_calendar: "कॅलेंडरमध्ये जोडा",

    gallery_eyebrow: "काही आवडते क्षण",
    gallery_heading: "आतापर्यंतचे क्षण",
    photo_caption: "छायाचित्र",

    assist_eyebrow: "प्रवासासाठी मदत",
    assist_heading: "काहीही लागलं तर सांगा",
    assist_intro: "मार्ग, राहण्याची सोय किंवा कार्यक्रमस्थळी पोहोचण्यासाठी काही मदत हवी असल्यास आम्हाला फोन करा. घरातलं कोणीतरी नक्की उपलब्ध असेल.",
    assist_hours: "सकाळी ९:०० ते रात्री ९:०० पर्यंत उपलब्ध",

    footer_line: "प्रेम आणि कृतज्ञतेसह — आपली वाट पाहत आहोत.",
    toast_cal: "कॅलेंडर फाइल डाउनलोड झाली"
  },

  gu: {
    _names: "પ્રફુલ્લ અને તૃષ્ણા",
    _namesHero: 'પ્રફુલ્લ<span class="amp">&amp;</span>તૃષ્ણા',
    _digits: "૦૧૨૩૪૫૬૭૮૯",
    _cal: {
      sangeet: "સંગીત — પ્રફુલ્લ અને તૃષ્ણા",
      haldi: "ફૂલોવાળી હળદી — પ્રફુલ્લ અને તૃષ્ણા",
      wedding: "લગ્ન — પ્રફુલ્લ અને તૃષ્ણા"
    },

    envelope_subtitle: "આપની ઉપસ્થિતિની હાર્દિક વિનંતી",
    envelope_hint: "ખોલવા માટે મહોર પર સ્પર્શ કરો",
    seal_aria: "આમંત્રણ ખોલો",

    nav_story: "અમારી વાત", nav_events: "કાર્યક્રમ", nav_gallery: "તસવીરો",

    hero_eyebrow: "બંને પરિવારોના આશીર્વાદ સાથે",
    hero_date: "રવિવાર, ૧૩ ડિસેમ્બર ૨૦૨૬",
    hero_place: "વલસાડ, ગુજરાત",
    hero_scroll: "નીચે જુઓ",

    story_eyebrow: "અમારી વાત",
    story_heading: "પરિવારના આશીર્વાદથી ખીલેલી, પ્રેમ પર ટકેલી શરૂઆત",
    story_p: "સારી વાતો જે રીતે શરૂ થાય છે, બરાબર એ જ રીતે અમારી પણ શરૂ થઈ — ઘરનાંના આશીર્વાદથી, ક્યારેય પૂરી ન થયેલી એક વાતચીતથી, અને સાથે મળીને જીવન ઘડવાનું છે એવી શાંત ખાતરીથી. અહીં સુધી પહોંચાડનારા સ્નેહ અને માર્ગદર્શન માટે અમે આભારી છીએ — અને આ દિવસ તમારા સિવાય બીજા કોઈ સાથે ઉજવવાનું અમને સૂઝતું જ નથી.",
    tl1_label: "શરૂઆત",
    tl1_desc: "બંને પરિવારોના આશીર્વાદથી બે રસ્તા એક થયા — પ્રેમ, આદર અને ઘણી બધી આશા સાથે.",
    tl2_label: "સગાઈ",
    tl2_desc: "સૌથી નજીકનાં લોકોની સામે અપાયેલું એક વચન, અને હવે સાથે શરૂ કરવાની તૈયારી છે એવી ખાતરી.",
    tl3_label: "વડીલોના આશીર્વાદ",
    tl3_desc: "વડીલોનો સ્નેહ, પૂજા-અર્ચના અને ઘરભરની ચહલપહલ — એ જ આશીર્વાદોએ આ ક્ષણને અર્થ આપ્યો.",
    tl4_label: "લગ્નનો દિવસ",
    tl4_desc: "અને હવે એ દિવસ — એક નવું પાનું, જેમણે હંમેશા સાથ આપ્યો એ સૌની હાજરીમાં.",

    countdown_eyebrow: "ગણતરી શરૂ",
    countdown_heading: "શુભ ઘડી સુધી",
    lbl_days: "દિવસ", lbl_hours: "કલાક", lbl_mins: "મિનિટ", lbl_secs: "સેકન્ડ",

    details_eyebrow: "શુભ પ્રસંગો",
    details_heading: "ક્યારે અને ક્યાં",
    sangeet_title: "સંગીત",
    sangeet_when: "સાંજે ૭:૦૦ · શનિવાર, ૧૨ ડિસેમ્બર ૨૦૨૬",
    sangeet_where: "શાંતિ રિસોર્ટ્સ<br>તિથળ, વલસાડ, ગુજરાત",
    sangeet_dress: "કોકટેલ નાઈટ — આખી રાત નાચવાની તૈયારી સાથે જ આવજો.",
    haldi_title: "ફૂલોવાળી હળદી",
    haldi_when: "સવારે ૧૦:૦૦ · રવિવાર, ૧૩ ડિસેમ્બર ૨૦૨૬",
    haldi_where: "શાંતિ રિસોર્ટ્સ<br>તિથળ, વલસાડ, ગુજરાત",
    haldi_dress: "ચમકદાર ઉત્સવી રંગો — ફૂલ અને હળદર ખૂબ ઊડશે, એટલે ધોવાઈ જાય એવું પહેરજો.",
    wedding_title: "લગ્ન",
    wedding_when: "સાંજે ૬:૩૦ · રવિવાર, ૧૩ ડિસેમ્બર ૨૦૨૬",
    wedding_where: "શાંતિ રિસોર્ટ્સ<br>તિથળ, વલસાડ, ગુજરાત",
    wedding_dress: "પરંપરાગત પોશાક — હળવા, કુદરતી રંગો ખાસ શોભશે.",
    btn_directions: "રસ્તો જુઓ", btn_calendar: "કેલેન્ડરમાં ઉમેરો",

    gallery_eyebrow: "કેટલીક પ્રિય ક્ષણો",
    gallery_heading: "અત્યાર સુધીની ક્ષણો",
    photo_caption: "તસવીર",

    assist_eyebrow: "મુસાફરીમાં મદદ",
    assist_heading: "જે પણ જોઈએ, કહેજો",
    assist_intro: "રસ્તો, રહેવાની વ્યવસ્થા કે સ્થળે પહોંચવામાં કોઈ પણ મદદ જોઈતી હોય તો અમને ફોન કરજો. ઘરનું કોઈક ને કોઈક હંમેશા ઉપલબ્ધ રહેશે.",
    assist_hours: "સવારે ૯:૦૦ થી રાત્રે ૯:૦૦ સુધી ઉપલબ્ધ",

    footer_line: "સ્નેહ અને આભાર સાથે — આપની રાહ જોઈશું.",
    toast_cal: "કેલેન્ડર ફાઇલ ડાઉનલોડ થઈ"
  }
};

/* ── LANGUAGE ─────────────────────────────────────────────────────── */
let LANG = "en";
const dict = () => TRANSLATIONS[LANG] || TRANSLATIONS.en;

function localizeDigits(str){
  const d = dict()._digits;
  return d ? String(str).replace(/[0-9]/g, n => d[+n]) : String(str);
}

function applyLanguage(lang){
  if(!TRANSLATIONS[lang]) lang = "en";
  LANG = lang;
  const t = TRANSLATIONS[lang];

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v = t[el.getAttribute("data-i18n")];
    if(v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el=>{
    const v = t[el.getAttribute("data-i18n-aria")];
    if(v !== undefined) el.setAttribute("aria-label", v);
  });

  setHTML("hero-names",  t._namesHero);
  setHTML("env-names",   t._names);
  setHTML("bar-names",   t._names);
  setHTML("story-names", t._names);
  setHTML("help-names",  t._names);

  document.documentElement.setAttribute("lang", lang);
  document.body.className = document.body.className
    .replace(/\blang-\w+\b/g,"").trim() + " lang-" + lang;

  document.querySelectorAll(".langs button").forEach(btn=>{
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  drawCountdown(true);
  try{ localStorage.setItem("pt-lang", lang); }catch(e){}
}
function setHTML(id, html){ const el = document.getElementById(id); if(el) el.innerHTML = html; }

document.querySelectorAll(".langs button").forEach(btn=>{
  btn.addEventListener("click", ()=> applyLanguage(btn.getAttribute("data-lang")));
});

/* ── PETALS ───────────────────────────────────────────────────────── */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
(function petals(){
  if(reduceMotion) return;
  const host = document.getElementById("petals");
  if(!host) return;
  const kinds = ["", "alt", "gold"];
  const frag = document.createDocumentFragment();
  for(let i = 0; i < 16; i++){
    const p = document.createElement("div");
    p.className = "petal " + kinds[i % 3];
    const size = 9 + Math.random() * 9;
    p.style.left = (Math.random() * 100).toFixed(2) + "vw";
    p.style.width = size.toFixed(1) + "px";
    p.style.height = size.toFixed(1) + "px";
    p.style.setProperty("--drift-x", (Math.random() * 120 - 60).toFixed(0) + "px");
    p.style.animationDuration = (15 + Math.random() * 11).toFixed(1) + "s";
    p.style.animationDelay = (-Math.random() * 22).toFixed(1) + "s";
    frag.appendChild(p);
  }
  host.appendChild(frag);
})();

/* sparks behind the envelope */
(function sparks(){
  if(reduceMotion) return;
  const host = document.querySelector("#envelope-overlay .sparks");
  if(!host) return;
  for(let i = 0; i < 26; i++){
    const s = document.createElement("i");
    s.style.left = (Math.random() * 100).toFixed(1) + "%";
    s.style.top = (Math.random() * 100).toFixed(1) + "%";
    s.style.animationDelay = (Math.random() * 4.5).toFixed(2) + "s";
    host.appendChild(s);
  }
})();

/* ── REVEAL ON SCROLL ─────────────────────────────────────────────── */
const revealEls = document.querySelectorAll(".reveal");
if("IntersectionObserver" in window){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold:0.14, rootMargin:"0px 0px -6% 0px" });
  revealEls.forEach(el => obs.observe(el));

  const tl = document.querySelector(".timeline");
  if(tl){
    const tlObs = new IntersectionObserver((e)=>{
      if(e[0].isIntersecting){ tl.classList.add("lit"); tlObs.disconnect(); }
    }, { threshold:0.2 });
    tlObs.observe(tl);
  }
}else{
  revealEls.forEach(el => el.classList.add("visible"));
  document.querySelector(".timeline")?.classList.add("lit");
}

/* ── SCROLL PROGRESS + TOP BAR ────────────────────────────────────── */
const progress = document.getElementById("progress");
const topbar = document.getElementById("topbar");
const langFloat = document.getElementById("lang-float");
let ticking = false;

function onScroll(){
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;
  if(progress) progress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
  const past = window.scrollY > window.innerHeight * 0.7;
  topbar?.classList.toggle("show", past);
  langFloat?.classList.toggle("hide", past);
  ticking = false;
}
window.addEventListener("scroll", ()=>{
  if(!ticking){ ticking = true; requestAnimationFrame(onScroll); }
}, { passive:true });

/* ── ENVELOPE ─────────────────────────────────────────────────────── */
const overlay = document.getElementById("envelope-overlay");
const envelope = document.getElementById("envelope");
const sealBtn = document.getElementById("seal-btn");

function openInvitation(){
  if(!envelope || envelope.classList.contains("open")) return;
  envelope.classList.add("open");
  setTimeout(()=>{
    overlay.classList.add("hidden");
    document.body.classList.remove("locked");
    document.body.classList.add("revealed");
  }, 1000);
  setTimeout(()=> overlay?.remove(), 2200);
}
sealBtn?.addEventListener("click", openInvitation);
document.addEventListener("keydown", (e)=>{
  if((e.key === "Enter" || e.key === " ") && document.body.classList.contains("locked")){
    e.preventDefault();
    openInvitation();
  }
});

/* ── COUNTDOWN ────────────────────────────────────────────────────── */
const target = new Date(CONFIG.weddingDateTime).getTime();
const cells = {
  days:  document.getElementById("cd-days"),
  hours: document.getElementById("cd-hours"),
  mins:  document.getElementById("cd-mins"),
  secs:  document.getElementById("cd-secs")
};
const pad = n => String(n).padStart(2,"0");

function drawCountdown(force){
  const diff = Math.max(0, target - Date.now());
  const values = {
    days:  Math.floor(diff / 86400000),
    hours: Math.floor(diff % 86400000 / 3600000),
    mins:  Math.floor(diff % 3600000 / 60000),
    secs:  Math.floor(diff % 60000 / 1000)
  };
  Object.keys(cells).forEach(k=>{
    const el = cells[k];
    if(!el) return;
    const next = localizeDigits(pad(values[k]));
    if(el.textContent === next && !force) return;
    el.textContent = next;
    if(!reduceMotion){
      el.classList.remove("flip");
      void el.offsetWidth;
      el.classList.add("flip");
    }
  });
}
drawCountdown(true);
setInterval(drawCountdown, 1000);

/* ── CALENDAR (.ics download) ─────────────────────────────────────── */
function addToCalendar(which){
  const ev = CONFIG[which];
  if(!ev) return;
  const title = dict()._cal[which];
  const ics = [
    "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Prafull and Trishna//Invitation//EN",
    "BEGIN:VEVENT",
    "UID:" + which + "-prafull-trishna@invite",
    "SUMMARY:" + title,
    "DTSTART;TZID=Asia/Kolkata:" + ev.start,
    "DTEND;TZID=Asia/Kolkata:" + ev.end,
    "LOCATION:" + ev.location.replace(/,/g,"\\,"),
    "DESCRIPTION:We hope you can join us!",
    "END:VEVENT","END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type:"text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = which + ".ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  toast(dict().toast_cal);
}

/* ── TOAST ────────────────────────────────────────────────────────── */
let toastTimer;
function toast(msg){
  const el = document.getElementById("toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove("show"), 2800);
}

/* ── BOOT ─────────────────────────────────────────────────────────── */
(function boot(){
  let saved = null;
  try{ saved = localStorage.getItem("pt-lang"); }catch(e){}
  if(!saved){
    const nav = (navigator.language || "en").slice(0,2).toLowerCase();
    if(TRANSLATIONS[nav]) saved = nav;
  }
  applyLanguage(saved || "en");
  sealBtn?.focus({ preventScroll:true });
  onScroll();
})();
