const translations = {
    en: {
        subtitle: "Enter your field readings to get a crop recommendation",
        disclaimer: "This model recommends from a fixed database of 22 crops and may not cover every possible crop for your region. Example values are pre-filled below — replace them with your own readings.",
        legend_soil: "Soil composition",
        label_nitrogen: "Nitrogen",
        label_phosphorous: "Phosphorous",
        label_potassium: "Potassium",
        legend_climate: "Climate conditions",
        label_temperature: "Temperature",
        label_humidity: "Humidity",
        label_ph: "Soil pH",
        label_rainfall: "Rainfall",
        submit_btn: "Get recommendation",
        eyebrow_recommended: "Recommended crop",
        confidence_label: "Confidence",
        low_confidence_msg: "These conditions don't closely match any crop in our database of 22 crops. This recommendation may not be reliable — the actual best crop for this field might not be one we can currently predict.",
        eyebrow_all_crops: "All crops ranked by suitability",
        back_link: "← Try another combination"
    },
    te: {
        subtitle: "పంట సిఫారసు పొందడానికి మీ పొలం వివరాలను నమోదు చేయండి",
        disclaimer: "ఈ మోడల్ 22 పంటల స్థిర డేటాబేస్ నుండి సిఫారసు చేస్తుంది మరియు మీ ప్రాంతంలోని ప్రతి పంటను కవర్ చేయకపోవచ్చు. దిగువ నమూనా విలువలు ముందుగా నింపబడ్డాయి — వాటిని మీ స్వంత రీడింగులతో మార్చండి.",
        legend_soil: "నేల కూర్పు",
        label_nitrogen: "నత్రజని",
        label_phosphorous: "భాస్వరం",
        label_potassium: "పొటాషియం",
        legend_climate: "వాతావరణ పరిస్థితులు",
        label_temperature: "ఉష్ణోగ్రత",
        label_humidity: "తేమ",
        label_ph: "నేల pH",
        label_rainfall: "వర్షపాతం",
        submit_btn: "సిఫారసు పొందండి",
        eyebrow_recommended: "సిఫారసు చేసిన పంట",
        confidence_label: "విశ్వసనీయత",
        low_confidence_msg: "ఈ పరిస్థితులు మా 22 పంటల డేటాబేస్‌లోని ఏ పంటతోనూ దగ్గరగా సరిపోలడం లేదు. ఈ సిఫారసు నమ్మదగినది కాకపోవచ్చు.",
        eyebrow_all_crops: "అనుకూలత ప్రకారం అన్ని పంటల ర్యాంకింగ్",
        back_link: "← మరొక కలయికను ప్రయత్నించండి"
    },
    hi: {
        subtitle: "फसल की सिफारिश पाने के लिए अपने खेत की रीडिंग दर्ज करें",
        disclaimer: "यह मॉडल 22 फसलों के निश्चित डेटाबेस से सिफारिश करता है और आपके क्षेत्र की हर संभावित फसल को कवर नहीं कर सकता। नीचे उदाहरण मान पहले से भरे गए हैं — इन्हें अपनी खुद की रीडिंग से बदलें।",
        legend_soil: "मिट्टी की संरचना",
        label_nitrogen: "नाइट्रोजन",
        label_phosphorous: "फास्फोरस",
        label_potassium: "पोटैशियम",
        legend_climate: "जलवायु स्थितियाँ",
        label_temperature: "तापमान",
        label_humidity: "आर्द्रता",
        label_ph: "मिट्टी का pH",
        label_rainfall: "वर्षा",
        submit_btn: "सिफारिश प्राप्त करें",
        eyebrow_recommended: "अनुशंसित फसल",
        confidence_label: "विश्वास",
        low_confidence_msg: "ये स्थितियाँ हमारे 22 फसलों के डेटाबेस में किसी भी फसल से मेल नहीं खातीं। यह सिफारिश विश्वसनीय नहीं हो सकती।",
        eyebrow_all_crops: "उपयुक्तता के अनुसार सभी फसलों की रैंकिंग",
        back_link: "← दूसरा संयोजन आज़माएँ"
    }
};

const cropNames = {
    en: { apple: "Apple", banana: "Banana", blackgram: "Blackgram", chickpea: "Chickpea", coconut: "Coconut", coffee: "Coffee", cotton: "Cotton", grapes: "Grapes", jute: "Jute", kidneybeans: "Kidneybeans", lentil: "Lentil", maize: "Maize", mango: "Mango", mothbeans: "Mothbeans", mungbean: "Mungbean", muskmelon: "Muskmelon", orange: "Orange", papaya: "Papaya", pigeonpeas: "Pigeonpeas", pomegranate: "Pomegranate", rice: "Rice", watermelon: "Watermelon" },
    te: { apple: "ఆపిల్", banana: "అరటి", blackgram: "మినుములు", chickpea: "శనగలు", coconut: "కొబ్బరి", coffee: "కాఫీ", cotton: "పత్తి", grapes: "ద్రాక్ష", jute: "జనుము", kidneybeans: "రాజ్మా", lentil: "పప్పు", maize: "మొక్కజొన్న", mango: "మామిడి", mothbeans: "బొబ్బర్లు", mungbean: "పెసలు", muskmelon: "ఖర్బూజా", orange: "నారింజ", papaya: "బొప్పాయి", pigeonpeas: "కందులు", pomegranate: "దానిమ్మ", rice: "వరి", watermelon: "పుచ్చకాయ" },
    hi: { apple: "सेब", banana: "केला", blackgram: "उड़द", chickpea: "चना", coconut: "नारियल", coffee: "कॉफी", cotton: "कपास", grapes: "अंगूर", jute: "जूट", kidneybeans: "राजमा", lentil: "मसूर", maize: "मक्का", mango: "आम", mothbeans: "मोठ", mungbean: "मूंग", muskmelon: "खरबूजा", orange: "संतरा", papaya: "पपीता", pigeonpeas: "अरहर", pomegranate: "अनार", rice: "चावल", watermelon: "तरबूज" }
};

const langLabels = { en: "English", te: "తెలుగు", hi: "हिंदी" };

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-crop]').forEach(el => {
        const cropKey = el.getAttribute('data-crop').toLowerCase();
        const name = (cropNames[lang] && cropNames[lang][cropKey]) || cropNames.en[cropKey] || cropKey;
        el.textContent = name;
    });

    const label = document.getElementById('langBtnLabel');
    if (label) label.textContent = langLabels[lang];

    document.querySelectorAll('.lang-menu li').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('opticrop_lang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('opticrop_lang') || 'en';
    applyLanguage(savedLang);

    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langMenu.classList.toggle('open');
        });

        langMenu.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', function () {
                applyLanguage(this.getAttribute('data-lang'));
                langMenu.classList.remove('open');
            });
        });

        document.addEventListener('click', function () {
            langMenu.classList.remove('open');
        });
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const inputs = form.querySelectorAll('input[type="number"]');
            let hasError = false;

            inputs.forEach(input => {
                if (input.value.trim() === '' || isNaN(input.value)) {
                    hasError = true;
                    input.style.borderColor = '#c62828';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (hasError) {
                e.preventDefault();
                alert('Please fill in all fields with valid numbers.');
            }
        });
    }
});