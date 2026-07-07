// Shared Language Toggle for all pages
let currentLang = localStorage.getItem('sda_lang') || 'en';

const pageTrans = {
    // Common nav & footer
    navHome: { en: 'Home', te: 'హోమ్' },
    navCollection: { en: 'Collection', te: 'సేకరణ' },
    navStudio: { en: 'Studio', te: 'స్టూడియో' },
    navOrder: { en: 'Order', te: 'ఆర్డర్' },
    navCta: { en: 'Place Order', te: 'ఆర్డర్ చేయండి' },
    subtitle: { en: 'Handcrafted Clay Ganesh & Durga Idols', te: 'చేతితో తయారు చేసిన మట్టి విగ్రహాలు' },
    footContact: { en: 'Contact', te: 'సంప్రదించండి' },
    footLinks: { en: 'Links', te: 'లింకులు' },
    footTime: { en: 'Hours: Mon–Sat, 8 AM – 8 PM', te: 'సమయం: సోమ–శని, ఉ. 8 – రా. 8' },
    footHome: { en: 'Home', te: 'హోమ్' },
    footCollection: { en: 'Collection', te: 'సేకరణ' },
    footStudio: { en: 'About Studio', te: 'స్టూడియో గురించి' },
    footOrder: { en: 'Place Order', te: 'ఆర్డర్ చేయండి' },
    copyright: { en: '© 2026 Sai Durga Arts. All rights reserved.', te: '© 2026 సాయి దుర్గ ఆర్ట్స్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.' },

    // Products page
    prodPageLabel: { en: 'Full Catalog', te: 'పూర్తి క్యాటలాగ్' },
    prodPageTitle: { en: 'Our Collection', te: 'మా సేకరణ' },
    prodPageDesc: { en: 'Every idol below is handcrafted from natural riverbank clay. Available in raw earth finish or hand-painted with botanical pigments.', te: 'ప్రతి విగ్రహం సహజ నది ఒడ్డు మట్టితో చేతితో తయారు చేయబడింది. సహజ ఫినిష్ లేదా సహజ రంగులతో అందుబాటులో ఉంటాయి.' },
    filterAll: { en: 'All Items', te: 'అన్నీ' },
    filterSmall: { en: 'Small (3–9")', te: 'చిన్న (3–9")' },
    filterMedium: { en: 'Medium (12–18")', te: 'మధ్యస్థం (12–18")' },
    filterLarge: { en: 'Large (24–36")', te: 'పెద్ద (24–36")' },
    customTitle: { en: 'Need a Custom Size or Design?', te: 'కస్టమ్ సైజ్ లేదా డిజైన్ కావాలా?' },
    customDesc: { en: 'We make idols from 3 inches to 5 feet. Special designs for mandapams, societies, temples. Bulk orders welcome — advance booking recommended.', te: '3 అంగుళాల నుండి 5 అడుగుల వరకు విగ్రహాలు తయారు చేస్తాము. మండపాలు, సొసైటీలు, ఆలయాలకు ప్రత్యేక డిజైన్లు. బల్క్ ఆర్డర్లకు స్వాగతం.' },
    customBtn: { en: 'Request Custom Order', te: 'కస్టమ్ ఆర్డర్ చేయండి' },

    // About page
    aboutPageLabel: { en: 'About Us', te: 'మా గురించి' },
    aboutPageTitle: { en: 'Our Studio & Philosophy', te: 'మా స్టూడియో & తత్వం' },
    aboutPageDesc: { en: 'A family-run clay idol workshop rooted in tradition, located in Palavalasa, Sompeta, Srikakulam.', te: 'పలవలస, సోంపేట, శ్రీకాకుళంలో ఉన్న సంప్రదాయబద్ధమైన కుటుంబ మట్టి విగ్రహ శిల్పశాల.' },
    storyTitle: { en: 'Our Story', te: 'మా కథ' },
    processLabel: { en: 'Process', te: 'ప్రక్రియ' },
    processTitle: { en: 'How We Make Each Idol', te: 'ప్రతి విగ్రహాన్ని ఎలా తయారు చేస్తాము' },
    whyLabel: { en: 'Why Us', te: 'ఎందుకు మేము' },
    whyTitle: { en: 'What Makes Us Different', te: 'మమ్మల్ని ప్రత్యేకంగా ఏది చేస్తుంది' },

    // Contact page
    contactPageLabel: { en: 'Contact & Orders', te: 'సంప్రదింపు & ఆర్డర్లు' },
    contactPageTitle: { en: 'Place Your Order', te: 'మీ ఆర్డర్ చేయండి' },
    contactPageDesc: { en: "Fill in your details and requirements below. We'll confirm via WhatsApp within a few hours. Pay only after seeing photos of your finished idol.", te: 'మీ వివరాలు మరియు అవసరాలను పూరించండి. కొన్ని గంటల్లో WhatsApp ద్వారా నిర్ధారిస్తాము. మీ పూర్తయిన విగ్రహం ఫోటోలు చూసిన తర్వాతే చెల్లించండి.' },
    orderTitle: { en: 'Order Details', te: 'ఆర్డర్ వివరాలు' },
    submitBtn: { en: 'Submit Order Request', te: 'ఆర్డర్ సమర్పించండి' },
    mapTitle: { en: 'Find Our Workshop', te: 'మా వర్క్‌షాప్‌ను కనుగొనండి' },
    mapBtn: { en: 'Open in Google Maps', te: 'Google Maps లో చూడండి' },
};

function switchLang() {
    currentLang = currentLang === 'en' ? 'te' : 'en';
    localStorage.setItem('sda_lang', currentLang);
    applyLang();
}

function applyLang() {
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (pageTrans[key] && pageTrans[key][currentLang]) {
            el.innerHTML = pageTrans[key][currentLang];
        }
    });
    // Update all toggle button labels
    document.querySelectorAll('.lang-label').forEach(el => {
        el.textContent = currentLang === 'en' ? 'తె' : 'EN';
    });
}

// Apply on page load
document.addEventListener('DOMContentLoaded', () => {
    applyLang();
});
