const services = [
  {title:"Aadhaar Services",hi:"आधार सेवाएँ",desc:"UIDAI services for Aadhaar enrolment, updates, downloads and verification.",hiDesc:"आधार नामांकन, अपडेट, डाउनलोड और सत्यापन के लिए UIDAI सेवाएँ।",category:"identity",label:"IDENTITY",icon:"▤",tone:"lilac",url:"https://uidai.gov.in/",tags:"aadhaar uidai identity card update download"},
  {title:"Passport Seva",hi:"पासपोर्ट सेवा",desc:"Apply for, renew and track an Indian passport application.",hiDesc:"भारतीय पासपोर्ट के लिए आवेदन करें, नवीनीकरण और स्थिति जाँचें।",category:"identity",label:"IDENTITY",icon:"▣",tone:"peach",url:"https://www.passportindia.gov.in/",tags:"passport travel renewal"},
  {title:"DigiLocker",hi:"डिजिलॉकर",desc:"Access and share digital documents and certificates.",hiDesc:"डिजिटल दस्तावेज़ और प्रमाणपत्र देखें व साझा करें।",category:"identity",label:"DOCUMENTS",icon:"▧",tone:"sky",url:"https://www.digilocker.gov.in/",tags:"digilocker documents certificate marksheet"},
  {title:"Voter Services",hi:"मतदाता सेवाएँ",desc:"Register as a voter and use Election Commission services.",hiDesc:"मतदाता के रूप में पंजीकरण करें और चुनाव आयोग की सेवाएँ पाएँ।",category:"identity",label:"CITIZEN",icon:"☷",tone:"mint",url:"https://voters.eci.gov.in/",tags:"voter election voter id registration"},
  {title:"PAN / NSDL Services",hi:"पैन कार्ड सेवाएँ",desc:"Apply for a PAN card or manage PAN-related services through authorised portals.",hiDesc:"अधिकृत पोर्टल के माध्यम से पैन कार्ड के लिए आवेदन और संबंधित सेवाएँ पाएँ।",category:"identity",label:"IDENTITY",icon:"▣",tone:"lilac",url:"https://www.protean-tinpan.com/",tags:"pan card nsdl tin"},
  {title:"UMANG",hi:"उमंग",desc:"Access multiple central and state government services in one app and portal.",hiDesc:"एक ही ऐप और पोर्टल पर केंद्र व राज्य सरकार की कई सेवाएँ पाएँ।",category:"citizen",label:"CITIZEN HELP",icon:"✳",tone:"teal",url:"https://web.umang.gov.in/",tags:"umang government services app"},
  {title:"National Portal of India",hi:"भारत का राष्ट्रीय पोर्टल",desc:"Find official government information, departments and public resources.",hiDesc:"सरकारी जानकारी, विभाग और सार्वजनिक संसाधन खोजें।",category:"citizen",label:"CITIZEN HELP",icon:"🇮🇳",tone:"teal",url:"https://www.india.gov.in/",tags:"india government portal public information"},
  {title:"National Government Services Portal",hi:"राष्ट्रीय सरकारी सेवा पोर्टल",desc:"Discover online services offered by government departments.",hiDesc:"सरकारी विभागों द्वारा दी जाने वाली ऑनलाइन सेवाएँ खोजें।",category:"citizen",label:"CITIZEN HELP",icon:"⌘",tone:"blue",url:"https://services.india.gov.in/",tags:"government services online portal"},
  {title:"National Career Service",hi:"राष्ट्रीय करियर सेवा",desc:"Explore jobs, career guidance and employment services.",hiDesc:"नौकरी, करियर मार्गदर्शन और रोजगार सेवाएँ देखें।",category:"jobs",label:"CAREER",icon:"⌁",tone:"mint",url:"https://www.ncs.gov.in/",tags:"job jobs career employment vacancy work"},
  {title:"Employment News",hi:"रोज़गार समाचार",desc:"Browse government job and recruitment announcements.",hiDesc:"सरकारी नौकरी और भर्ती की घोषणाएँ देखें।",category:"jobs",label:"CAREER",icon:"▤",tone:"peach",url:"https://employmentnews.gov.in/",tags:"employment news recruitment govt vacancy"},
  {title:"UPSC",hi:"संघ लोक सेवा आयोग",desc:"Find UPSC examinations, notifications, results and application information.",hiDesc:"UPSC परीक्षाओं, अधिसूचनाओं, परिणाम और आवेदन की जानकारी पाएँ।",category:"jobs",label:"EXAMS",icon:"✧",tone:"gold",url:"https://upsc.gov.in/",tags:"upsc civil services exam result"},
  {title:"SSC",hi:"कर्मचारी चयन आयोग",desc:"Official portal for SSC examinations, notices and results.",hiDesc:"SSC परीक्षाओं, सूचनाओं और परिणामों का आधिकारिक पोर्टल।",category:"jobs",label:"EXAMS",icon:"▣",tone:"sky",url:"https://ssc.gov.in/",tags:"ssc cgl chsl mts exam"},
  {title:"Railway Recruitment Boards",hi:"रेलवे भर्ती बोर्ड",desc:"Check railway recruitment notices and application updates.",hiDesc:"रेलवे भर्ती सूचनाएँ और आवेदन अपडेट देखें।",category:"jobs",label:"RECRUITMENT",icon:"🚆",tone:"peach",url:"https://www.rrbapply.gov.in/",tags:"railway rrb recruitment job"},
  {title:"National Scholarship Portal",hi:"राष्ट्रीय छात्रवृत्ति पोर्टल",desc:"Find scholarship schemes and submit eligible applications.",hiDesc:"छात्रवृत्ति योजनाएँ खोजें और पात्र आवेदन करें।",category:"education",label:"EDUCATION",icon:"✧",tone:"gold",url:"https://scholarships.gov.in/",tags:"scholarship student education financial aid"},
  {title:"SWAYAM",hi:"स्वयं",desc:"Explore online courses from India's national learning platform.",hiDesc:"भारत के राष्ट्रीय शिक्षण मंच पर ऑनलाइन पाठ्यक्रम देखें।",category:"education",label:"LEARNING",icon:"▱",tone:"lilac",url:"https://swayam.gov.in/",tags:"swayam course online learning education"},
  {title:"NTA",hi:"राष्ट्रीय परीक्षा एजेंसी",desc:"Find examination notices, registrations, admit cards and results.",hiDesc:"परीक्षा सूचनाएँ, पंजीकरण, प्रवेश पत्र और परिणाम देखें।",category:"education",label:"EXAMS",icon:"✎",tone:"sky",url:"https://nta.ac.in/",tags:"nta exam neet jee cuet"},
  {title:"CBSE",hi:"सीबीएसई",desc:"Access board announcements, academic resources and examination updates.",hiDesc:"बोर्ड घोषणाएँ, शैक्षणिक संसाधन और परीक्षा अपडेट पाएँ।",category:"education",label:"EDUCATION",icon:"▤",tone:"blue",url:"https://www.cbse.gov.in/",tags:"cbse board result school"},
  {title:"AISHE",hi:"उच्च शिक्षा सर्वेक्षण",desc:"Access higher-education statistics and institutional information.",hiDesc:"उच्च शिक्षा के आँकड़े और संस्थानों की जानकारी पाएँ।",category:"education",label:"EDUCATION",icon:"▥",tone:"mint",url:"https://aishe.gov.in/",tags:"college university higher education"},
  {title:"ePathshala",hi:"ई-पाठशाला",desc:"Find digital textbooks and learning resources.",hiDesc:"डिजिटल पाठ्यपुस्तकें और अध्ययन सामग्री पाएँ।",category:"education",label:"LEARNING",icon:"▱",tone:"lilac",url:"https://epathshala.nic.in/",tags:"textbook books ncert learning"},
  {title:"MyScheme",hi:"मेरी योजना",desc:"Discover government schemes and check eligibility and benefits.",hiDesc:"सरकारी योजनाएँ खोजें और पात्रता व लाभों की जानकारी पाएँ।",category:"finance",label:"SCHEMES",icon:"✳",tone:"rose",url:"https://www.myscheme.gov.in/",tags:"scheme yojana benefits subsidy"},
  {title:"EPFO",hi:"ईपीएफओ",desc:"Access provident fund, pension and employee services.",hiDesc:"भविष्य निधि, पेंशन और कर्मचारी सेवाएँ पाएँ।",category:"finance",label:"FINANCE",icon:"₹",tone:"gold",url:"https://www.epfindia.gov.in/",tags:"epfo pf provident fund pension"},
  {title:"Income Tax e-Filing",hi:"आयकर ई-फाइलिंग",desc:"Use the Income Tax Department portal for returns and tax services.",hiDesc:"रिटर्न और कर सेवाओं के लिए आयकर विभाग का पोर्टल उपयोग करें।",category:"finance",label:"FINANCE",icon:"▣",tone:"sky",url:"https://www.incometax.gov.in/",tags:"income tax itr tax return"},
  {title:"GST Portal",hi:"जीएसटी पोर्टल",desc:"Access GST registration, returns and taxpayer services.",hiDesc:"जीएसटी पंजीकरण, रिटर्न और करदाता सेवाएँ पाएँ।",category:"finance",label:"TAX",icon:"₹",tone:"mint",url:"https://www.gst.gov.in/",tags:"gst tax registration return"},
  {title:"Jan Dhan Yojana",hi:"जन धन योजना",desc:"Read official information about financial inclusion and bank accounts.",hiDesc:"वित्तीय समावेशन और बैंक खातों की आधिकारिक जानकारी पढ़ें।",category:"finance",label:"SCHEMES",icon:"₹",tone:"gold",url:"https://pmjdy.gov.in/",tags:"jan dhan bank account financial inclusion"},
  {title:"Public Provident Fund (PPF)",hi:"पब्लिक प्रोविडेंट फंड",desc:"Find official small-savings scheme information from the National Savings Institute.",hiDesc:"राष्ट्रीय बचत संस्थान से छोटी बचत योजनाओं की जानकारी पाएँ।",category:"finance",label:"SAVINGS",icon:"₹",tone:"teal",url:"https://www.nsiindia.gov.in/",tags:"ppf savings post office scheme"},
  {title:"Parivahan Sewa",hi:"परिवहन सेवा",desc:"Find driving licence, vehicle registration and transport services.",hiDesc:"ड्राइविंग लाइसेंस, वाहन पंजीकरण और परिवहन सेवाएँ पाएँ।",category:"transport",label:"TRANSPORT",icon:"➜",tone:"peach",url:"https://parivahan.gov.in/",tags:"driving licence vehicle rc transport"},
  {title:"Sarathi Driving Licence",hi:"सारथी ड्राइविंग लाइसेंस",desc:"Apply for and manage driving licence services.",hiDesc:"ड्राइविंग लाइसेंस के लिए आवेदन करें और सेवाएँ प्रबंधित करें।",category:"transport",label:"LICENCE",icon:"🚘",tone:"blue",url:"https://sarathi.parivahan.gov.in/",tags:"sarathi driving licence learner"},
  {title:"VAHAN Vehicle Services",hi:"वाहन सेवाएँ",desc:"Access vehicle registration and related services.",hiDesc:"वाहन पंजीकरण और संबंधित सेवाएँ पाएँ।",category:"transport",label:"VEHICLE",icon:"🚗",tone:"mint",url:"https://vahan.parivahan.gov.in/",tags:"vahan vehicle registration rc"},
  {title:"Indian Railways",hi:"भारतीय रेलवे",desc:"Visit the official railway portal for passenger information and services.",hiDesc:"यात्री जानकारी और सेवाओं के लिए आधिकारिक रेलवे पोर्टल देखें।",category:"transport",label:"RAILWAYS",icon:"🚆",tone:"peach",url:"https://indianrailways.gov.in/",tags:"train railway passenger"},
  {title:"IRCTC",hi:"आईआरसीटीसी",desc:"Book railway tickets and manage train travel through IRCTC.",hiDesc:"IRCTC के माध्यम से रेल टिकट बुक करें और यात्रा प्रबंधित करें।",category:"transport",label:"TICKETS",icon:"🎫",tone:"lilac",url:"https://www.irctc.co.in/",tags:"irctc train ticket booking"},
  {title:"Air Suvidha / Airport Info",hi:"हवाई अड्डा जानकारी",desc:"Visit the Airports Authority of India for airport and passenger information.",hiDesc:"हवाई अड्डे और यात्रियों की जानकारी के लिए भारतीय विमानपत्तन प्राधिकरण देखें।",category:"transport",label:"TRAVEL",icon:"✈",tone:"sky",url:"https://www.aai.aero/",tags:"airport flight aviation"},
  {title:"PM-KISAN",hi:"पीएम-किसान",desc:"Find scheme information and beneficiary services for eligible farmers.",hiDesc:"पात्र किसानों के लिए योजना और लाभार्थी सेवाओं की जानकारी पाएँ।",category:"citizen",label:"FARMERS",icon:"🌾",tone:"mint",url:"https://pmkisan.gov.in/",tags:"farmer kisan payment agriculture"},
  {title:"Ayushman Bharat PM-JAY",hi:"आयुष्मान भारत",desc:"Read official information about health coverage and beneficiary services.",hiDesc:"स्वास्थ्य कवरेज और लाभार्थी सेवाओं की आधिकारिक जानकारी पाएँ।",category:"citizen",label:"HEALTH",icon:"✚",tone:"rose",url:"https://pmjay.gov.in/",tags:"ayushman bharat health card hospital"},
  {title:"CoWIN",hi:"कोविन",desc:"Access official vaccination information and records where available.",hiDesc:"जहाँ उपलब्ध हो, टीकाकरण की आधिकारिक जानकारी और रिकॉर्ड पाएँ।",category:"citizen",label:"HEALTH",icon:"✚",tone:"sky",url:"https://www.cowin.gov.in/",tags:"cowin vaccine vaccination certificate"},
  {title:"e-Shram",hi:"ई-श्रम",desc:"Find information and registration services for unorganised workers.",hiDesc:"असंगठित क्षेत्र के श्रमिकों के लिए जानकारी और पंजीकरण सेवाएँ पाएँ।",category:"citizen",label:"WORKERS",icon:"⌁",tone:"gold",url:"https://eshram.gov.in/",tags:"eshram labour worker registration"},
  {title:"CPGRAMS Grievance Portal",hi:"जन शिकायत पोर्टल",desc:"Submit and track public grievances with government departments.",hiDesc:"सरकारी विभागों के साथ जन शिकायत दर्ज करें और स्थिति देखें।",category:"citizen",label:"GRIEVANCE",icon:"☷",tone:"lilac",url:"https://pgportal.gov.in/",tags:"complaint grievance public issue"},
  {title:"RTI Online",hi:"आरटीआई ऑनलाइन",desc:"Submit eligible Right to Information requests to central public authorities.",hiDesc:"केंद्रीय सार्वजनिक प्राधिकरणों को सूचना का अधिकार आवेदन दें।",category:"citizen",label:"CITIZEN RIGHTS",icon:"ⓘ",tone:"blue",url:"https://rtionline.gov.in/",tags:"rti information right to information"},
  {title:"Birth & Death Registration",hi:"जन्म और मृत्यु पंजीकरण",desc:"Find the Civil Registration System for birth and death registration information.",hiDesc:"जन्म और मृत्यु पंजीकरण की जानकारी के लिए नागरिक पंजीकरण प्रणाली देखें।",category:"identity",label:"CERTIFICATES",icon:"▤",tone:"mint",url:"https://crsorgi.gov.in/",tags:"birth certificate death certificate registration"},
  {title:"National Population Register / Census",hi:"जनगणना जानकारी",desc:"Visit the Census of India portal for official census information.",hiDesc:"आधिकारिक जनगणना जानकारी के लिए भारत की जनगणना वेबसाइट देखें।",category:"citizen",label:"PUBLIC INFO",icon:"▥",tone:"teal",url:"https://censusindia.gov.in/",tags:"census population"},
  {title:"Online Police Services",hi:"ऑनलाइन पुलिस सेवाएँ",desc:"Find state police portals and citizen services through the national directory.",hiDesc:"राष्ट्रीय निर्देशिका से राज्य पुलिस पोर्टल और नागरिक सेवाएँ खोजें।",category:"citizen",label:"PUBLIC SAFETY",icon:"✧",tone:"blue",url:"https://www.india.gov.in/",tags:"police verification complaint"},
  {title:"Legal Services Authority",hi:"विधिक सेवा प्राधिकरण",desc:"Find legal aid and information from the National Legal Services Authority.",hiDesc:"राष्ट्रीय विधिक सेवा प्राधिकरण से कानूनी सहायता और जानकारी पाएँ।",category:"citizen",label:"LEGAL AID",icon:"⚖",tone:"lilac",url:"https://nalsa.gov.in/",tags:"legal aid lawyer free legal"},
  {title:"Consumer Helpline",hi:"राष्ट्रीय उपभोक्ता हेल्पलाइन",desc:"Get consumer rights information and submit consumer grievances.",hiDesc:"उपभोक्ता अधिकारों की जानकारी पाएँ और शिकायत दर्ज करें।",category:"citizen",label:"CONSUMER",icon:"☏",tone:"rose",url:"https://consumerhelpline.gov.in/",tags:"consumer complaint product grievance"},
  {title:"FSSAI / Food Safety",hi:"खाद्य सुरक्षा",desc:"Access food safety information and FSSAI services.",hiDesc:"खाद्य सुरक्षा की जानकारी और FSSAI सेवाएँ पाएँ।",category:"citizen",label:"FOOD SAFETY",icon:"✳",tone:"mint",url:"https://www.fssai.gov.in/",tags:"fssai food licence food safety"},
  {title:"GeM Government e-Marketplace",hi:"सरकारी ई-मार्केटप्लेस",desc:"Official procurement marketplace for government buyers and registered sellers.",hiDesc:"सरकारी खरीदारों और पंजीकृत विक्रेताओं के लिए आधिकारिक खरीद पोर्टल।",category:"jobs",label:"BUSINESS",icon:"▣",tone:"sky",url:"https://gem.gov.in/",tags:"gem seller business tender procurement"},
  {title:"Startup India",hi:"स्टार्टअप इंडिया",desc:"Explore startup support, recognition and entrepreneurship resources.",hiDesc:"स्टार्टअप सहायता, मान्यता और उद्यमिता संसाधन देखें।",category:"jobs",label:"BUSINESS",icon:"✧",tone:"gold",url:"https://www.startupindia.gov.in/",tags:"startup business entrepreneur"},
  {title:"MCA Company Services",hi:"कॉर्पोरेट कार्य मंत्रालय",desc:"Access company and limited liability partnership filing services.",hiDesc:"कंपनी और सीमित देयता भागीदारी की फाइलिंग सेवाएँ पाएँ।",category:"finance",label:"BUSINESS",icon:"▤",tone:"blue",url:"https://www.mca.gov.in/",tags:"mca company registration roc"},
  {title:"Bhuvan Land Records",hi:"भुवन भू-अभिलेख",desc:"Explore mapping and geospatial information from ISRO's Bhuvan portal.",hiDesc:"ISRO के भुवन पोर्टल से मानचित्र और भू-स्थानिक जानकारी देखें।",category:"citizen",label:"LAND & MAPS",icon:"⌖",tone:"teal",url:"https://bhuvan.nrsc.gov.in/",tags:"bhuvan map land map"},
  {title:"India Post",hi:"भारतीय डाक",desc:"Find postal, savings, tracking and other India Post services.",hiDesc:"डाक, बचत, ट्रैकिंग और अन्य भारतीय डाक सेवाएँ पाएँ।",category:"citizen",label:"POSTAL",icon:"✉",tone:"peach",url:"https://www.indiapost.gov.in/",tags:"post office speed post tracking"},
  {title:"National Health Portal",hi:"राष्ट्रीय स्वास्थ्य पोर्टल",desc:"Find public health information and official health resources.",hiDesc:"सार्वजनिक स्वास्थ्य जानकारी और आधिकारिक स्वास्थ्य संसाधन पाएँ।",category:"citizen",label:"HEALTH",icon:"✚",tone:"rose",url:"https://www.nhp.gov.in/",tags:"health hospital health information"}
];

const grid = document.getElementById("serviceGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");
let activeCategory = "all";
let language = "en";

function renderServices() {
  if (!grid || !searchInput || !emptyState || !resultCount) return;
  const query = searchInput.value.trim().toLocaleLowerCase();
  const filtered = services.filter(service => {
    const categoryMatch = activeCategory === "all" || service.category === activeCategory;
    const searchable = [service.title, service.hi, service.desc, service.hiDesc, service.tags, service.label]
      .join(" ").toLocaleLowerCase();
    return categoryMatch && (!query || searchable.includes(query));
  });

  grid.innerHTML = filtered.map(service => `
    <a class="service-card" href="${service.url}" target="_blank" rel="noopener noreferrer"
       aria-label="${service.title} — opens official website">
      <div class="card-top">
        <span class="service-icon ${service.tone}">${service.icon}</span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </div>
      <h3>${language === "hi" ? service.hi : service.title}</h3>
      <p>${language === "hi" ? service.hiDesc : service.desc}</p>
      <div class="card-bottom">
        <span class="category-label">${service.label}</span>
        <span class="visit-link">${language === "hi" ? "आधिकारिक साइट खोलें" : "Visit official site"} ↗</span>
      </div>
    </a>`).join("");

  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  resultCount.innerHTML = `${filtered.length} ${language === "hi" ? "सेवाएँ" : "SERVICES"} <span>${language === "hi" ? "मिलीं" : "AVAILABLE"}</span>`;
}

const searchForm = document.getElementById("searchForm");
searchForm?.addEventListener("submit", event => {
  event.preventDefault();
  renderServices();
  document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
});
searchInput?.addEventListener("input", renderServices);

document.querySelectorAll(".chip").forEach(button => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.search || "";
    activeCategory = "all";
    document.querySelectorAll(".filter-btn").forEach(item => item.classList.toggle("active", item.dataset.category === "all"));
    renderServices();
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
  });
});

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    button.classList.add("active");
    activeCategory = button.dataset.category || "all";
    renderServices();
  });
});

document.getElementById("clearSearch")?.addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";
  document.querySelectorAll(".filter-btn").forEach(button => button.classList.toggle("active", button.dataset.category === "all"));
  renderServices();
});

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  if (themeIcon) themeIcon.textContent = dark ? "☀" : "☾";
}
try {
  applyTheme(localStorage.getItem("pubweb-theme") || "light");
} catch (_) {
  applyTheme("light");
}
themeToggle?.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark ? "dark" : "light");
  try { localStorage.setItem("pubweb-theme", dark ? "dark" : "light"); } catch (_) {}
});

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.body.classList.toggle("hindi", language === "hi");
  document.documentElement.lang = language === "hi" ? "hi" : "en";

  document.querySelectorAll("[data-en][data-hi]").forEach(element => {
    element.textContent = language === "hi" ? element.dataset.hi : element.dataset.en;
  });
  document.querySelectorAll("[data-en-html][data-hi-html]").forEach(element => {
    element.innerHTML = language === "hi" ? element.dataset.hiHtml : element.dataset.enHtml;
  });

  if (searchInput) {
    searchInput.placeholder = language === "hi"
      ? "आपको किस चीज़ में मदद चाहिए? जैसे आधार, पासपोर्ट, नौकरी..."
      : "What do you need help with? e.g. Aadhaar, passport, jobs...";
    searchInput.setAttribute("aria-label", language === "hi" ? "सरकारी सेवाएँ खोजें" : "Search government services");
  }
  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.innerHTML = language === "hi" ? "<span>文</span><b>English</b>" : "<span>文</span><b>हिंदी</b>";
  }
  renderServices();
}
document.getElementById("languageToggle")?.addEventListener("click", () => setLanguage(language === "en" ? "hi" : "en"));

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks?.classList.toggle("open") || false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
renderServices();
