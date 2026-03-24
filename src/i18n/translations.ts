import React from 'react';

// ─── LANGUAGE SYSTEM ──────────────────────────────────────────────────────────

export type Lang = 'en' | 'hi';

export const LangContext = React.createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {}
});

export function useLang() {
  return React.useContext(LangContext);
}

export const T: Record<Lang, Record<string, string>> = {
  en: {
    // Hero
    badge: 'Junior IAS Program',
    heading1: 'Early Preparation,',
    heading2: 'Bright Future.',
    subtitle: 'Building UPSC-ready minds from Class 6. No coaching. No lakhs. Just ₹100.',
    journeyGaon: 'Village',
    journeyJuniorIas: 'Junior IAS',
    journeySarkariNaukri: 'Govt Job',
    videoTitle: 'Watch: How Junior IAS Works',
    videoSubtitle: '2 min intro by Vipin Sir',
    ctaJoin: 'Join the Movement',
    trustNcert: 'Pure NCERT — No Junk',
    trust5000: '5,000+ Students Enrolled',
    trust100: 'Just ₹100/month',
    trustClass: 'Class 6 to 12 Coverage',

    // Test Series
    testBadge: 'Junior IAS Test Series',
    testHeading: 'NCERT-Based',
    testHeadingHighlight: 'Test Series',
    testDesc: "Every question comes directly from Vipin Sir's NCERT-based books. Study the book, take the test — no surprises, only results.",
    exploreSeries: 'Explore Series',

    // Books
    booksBadge: 'Pure NCERT Books',
    booksHeading: "The NCERT That Schools Don't Teach.",
    booksDesc: "Written by Vipin Sir himself — one book per class covering History, Geography, Constitution, Science & Static GK. The same NCERT foundation that decides UPSC, NDA, and every state exam. No market junk, only what matters.",
    hindiMedium: 'Hindi Medium',
    englishMedium: 'English Medium',
    orderNow: 'Order Now',

    // Why Us
    whyBadge: 'The Difference',
    whyHeading: 'Why',
    whyHeadingHighlight: 'Junior IAS?',
    whyDesc: "Because your school won't teach you what UPSC will ask. We fill that gap — from Class 6 itself.",
    feature1Title: 'Book-Linked Tests',
    feature1Desc: "Every question comes directly from Vipin Sir's Junior IAS books. No random questions — study the chapter, ace the test. 100% alignment.",
    feature2Title: 'Track Your Growth',
    feature2Desc: "See exactly where you stand — subject-wise scores, weak topics, and improvement trends after every test. Know what to fix next.",
    feature3Title: 'Proven by 350+ Selections',
    feature3Desc: "This isn't a new experiment. The same teaching system that produced 350+ UP Police and 125+ Super TET selections — now digital.",
    trustBadge1: 'Pure NCERT — No Junk Content',
    trustBadge2: 'Class 6 to 12, One System',
    trustBadge3: 'Just ₹100/Month',
    trustBadge4: 'Written by Vipin Sir Himself',

    // Testimonials
    testiBadge: 'Student Reviews',
    testiHeading: 'Their Story,',
    testiHeadingHighlight: 'In Their Words.',
    testiDesc: "From small towns to government jobs — real students and parents from Noorpur and nearby villages who trusted Vipin Sir's system.",
    videoComingSoon: 'Video coming soon',
    galleryTitle: 'Vipin Sir with Selected Students',
    gallerySubtitle: 'Building futures from Noorpur',
    studentsAndCounting: 'students and counting!',

    // Stats
    statsHeading: 'The Perfect Classes',
    statsHeadingHighlight: 'Legacy',
    statsDesc: 'From 5 students in Noorpur to thousands of government selections — built on trust, not marketing.',
    stat1Label: 'Students at a Time',
    stat2Label: 'UP Police Selections',
    stat3Label: 'Super TET Selections',
    stat4Label: 'Years of Legacy',

    // CTA
    ctaBadge: 'Just ₹100/Month — No Excuses',
    ctaHeading1: "Your Child's Future,",
    ctaHeading2: 'Just ₹100.',
    ctaDesc: 'The same NCERT foundation that IAS toppers build in Delhi — now available for every village, every family. 350+ selections prove this system works.',
    ctaStartTest: 'Start Free Test',
    ctaCallUs: 'Call Us',

    // FAQ
    faqHeading: 'Frequently Asked',
    faqHeadingHighlight: 'Questions',
    faq1Q: 'What is the Junior IAS program?',
    faq1A: "Junior IAS is Vipin Sir's mission to build UPSC-level General Studies foundations from Class 6 itself. It covers History, Geography, Constitution, Science, and Static GK — the same NCERT subjects that decide every competitive exam in India.",
    faq2Q: 'Why should my child start preparing from Class 6?',
    faq2A: "Because competitive exams like UPSC, NDA, and State PCS test NCERT knowledge from Class 6-12. Schools only focus on PCM to clear boards — they completely ignore the Humanities that actually decide your rank. Starting early means no last-minute cramming in Delhi coaching centers.",
    faq3Q: 'How does the test series work with the books?',
    faq3A: "Every single question in our test series comes directly from Vipin Sir's Junior IAS books (NCERT-based). Study the chapter, take the test — 100% alignment, zero surprises. This is how 350+ students cleared UP Police from a single center.",
    faq4Q: 'Is ₹100/month really the full price?',
    faq4A: "Yes. ₹100/month (₹1,200/year) gives you access to the complete Junior IAS ecosystem — books and test series. Vipin Sir deliberately priced it so that no rural or semi-urban family is ever priced out of quality education.",
    faq5Q: 'Who is Vipin Sir?',
    faq5A: "Vipin Sir is a B.Tech + M.Tech Aeronautical Engineer who left a BSF government job to teach. He taught at India's top UPSC coaching centers in Delhi before founding Perfect Classes in Noorpur in 2016. Starting with just 5 students, he built it to 5,000 students with 350+ UP Police and 125+ Super TET selections — all from one center, purely by word of mouth.",
    faq6Q: 'Can I access tests on mobile?',
    faq6A: "Yes. Our platform is fully mobile-optimised — attempt tests anytime, anywhere, even on basic smartphones with slow internet.",

    // Footer
    footerDesc: "From Noorpur to every village — building India's future since 2016.",
    footerTestSeries: 'Test Series',
    footerExplore: 'Explore',
    footerQuickLinks: 'Quick Links',
    footerOurBooks: 'Our Books',
    footer200Village: '200-Village Tour',
    footerJuniorIasTests: 'Junior IAS Tests',
    footerAboutVipin: 'About Vipin Sir',
    footerContactUs: 'Contact Us',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerCopyright: '© 2026 Perfect Classes. All rights reserved.',
    footerMadeWith: 'Designed with ❤️ for Indian students',

    // Navbar
    navTestSeries: 'Test Series',
    navBooks: 'Books',
    navMission: 'Mission',
    navResults: 'Results',
    navAbout: 'About',
    navStartFreeTest: 'Start Free Test',
  },
  hi: {
    // Hero
    badge: 'जूनियर IAS प्रोग्राम',
    heading1: 'गाँव की मिट्टी से',
    heading2: 'लाल बत्ती तक।',
    subtitle: 'क्लास 6 से UPSC की नींव। शुद्ध NCERT। सिर्फ़ ₹100/महीना।',
    journeyGaon: 'गाँव',
    journeyJuniorIas: 'जूनियर IAS',
    journeySarkariNaukri: 'सरकारी नौकरी',
    videoTitle: 'देखिये: जूनियर IAS कैसे काम करता है',
    videoSubtitle: 'विपिन सर का 2 मिनट का परिचय',
    ctaJoin: 'आंदोलन में जुड़ें',
    trustNcert: 'शुद्ध NCERT — कोई फालतू नहीं',
    trust5000: '5,000+ छात्र जुड़े हुए',
    trust100: 'सिर्फ़ ₹100/महीना',
    trustClass: 'क्लास 6 से 12 तक',

    // Test Series
    testBadge: 'जूनियर IAS टेस्ट सीरीज़',
    testHeading: 'NCERT-आधारित',
    testHeadingHighlight: 'टेस्ट सीरीज़',
    testDesc: 'हर सवाल सीधे विपिन सर की NCERT किताबों से आता है। किताब पढ़ो, टेस्ट दो — कोई सरप्राइज़ नहीं, सिर्फ़ नतीजे।',
    exploreSeries: 'सीरीज़ देखें',

    // Books
    booksBadge: 'शुद्ध NCERT किताबें',
    booksHeading: 'वो NCERT जो स्कूल नहीं पढ़ाते।',
    booksDesc: 'विपिन सर ने खुद लिखी हैं — हर क्लास के लिए एक किताब जिसमें इतिहास, भूगोल, संविधान, विज्ञान और स्टैटिक GK शामिल है। वही NCERT नींव जो UPSC, NDA और हर राज्य परीक्षा तय करती है। बाज़ार का कूड़ा नहीं, सिर्फ़ वो जो ज़रूरी है।',
    hindiMedium: 'हिंदी माध्यम',
    englishMedium: 'अंग्रेज़ी माध्यम',
    orderNow: 'अभी ऑर्डर करें',

    // Why Us
    whyBadge: 'फर्क क्या है',
    whyHeading: 'क्यों',
    whyHeadingHighlight: 'जूनियर IAS?',
    whyDesc: 'क्योंकि आपका स्कूल वो नहीं पढ़ाएगा जो UPSC पूछेगा। हम वो कमी भरते हैं — क्लास 6 से ही।',
    feature1Title: 'किताब से जुड़े टेस्ट',
    feature1Desc: 'हर सवाल सीधे विपिन सर की NCERT किताबों से आता है। कोई बेतरतीब सवाल नहीं — अध्याय पढ़ो, टेस्ट में टॉप करो। 100% संरेखण।',
    feature2Title: 'अपनी प्रगति ट्रैक करें',
    feature2Desc: 'देखें आप कहाँ खड़े हैं — विषय-वार स्कोर, कमजोर टॉपिक्स, और हर टेस्ट के बाद सुधार के रुझान। जानें अगला क्या सुधारना है।',
    feature3Title: '350+ चयनों से प्रमाणित',
    feature3Desc: 'यह कोई नया प्रयोग नहीं है। वही पढ़ाई का तरीका जिसने 350+ UP Police और 125+ Super TET चयन दिए — अब डिजिटल।',
    trustBadge1: 'शुद्ध NCERT — कोई फालतू कंटेंट नहीं',
    trustBadge2: 'क्लास 6 से 12, एक सिस्टम',
    trustBadge3: 'सिर्फ़ ₹100/महीना',
    trustBadge4: 'विपिन सर ने खुद लिखी हैं',

    // Testimonials
    testiBadge: 'छात्रों की राय',
    testiHeading: 'उनकी कहानी,',
    testiHeadingHighlight: 'उन्हीं की ज़ुबानी।',
    testiDesc: 'छोटे कस्बों से सरकारी नौकरी तक — नूरपुर और आसपास के गाँवों के असली छात्र और अभिभावक जिन्होंने विपिन सर पर भरोसा किया।',
    videoComingSoon: 'वीडियो जल्द आ रहा है',
    galleryTitle: 'विपिन सर चयनित छात्रों के साथ',
    gallerySubtitle: 'नूरपुर से भविष्य बना रहे हैं',
    studentsAndCounting: 'छात्र और बढ़ रहे हैं!',

    // Stats
    statsHeading: 'परफेक्ट क्लासेज़ की',
    statsHeadingHighlight: 'विरासत',
    statsDesc: 'नूरपुर में 5 छात्रों से हजारों सरकारी चयनों तक — भरोसे पर बना, मार्केटिंग पर नहीं।',
    stat1Label: 'एक समय में छात्र',
    stat2Label: 'UP Police चयन',
    stat3Label: 'Super TET चयन',
    stat4Label: 'सालों की विरासत',

    // CTA
    ctaBadge: 'सिर्फ़ ₹100/महीना — कोई बहाना नहीं',
    ctaHeading1: 'आपके बच्चे का भविष्य,',
    ctaHeading2: 'सिर्फ़ ₹100 में।',
    ctaDesc: 'वही NCERT नींव जो IAS टॉपर्स दिल्ली में बनाते हैं — अब हर गाँव, हर परिवार के लिए उपलब्ध। 350+ चयन साबित करते हैं कि यह सिस्टम काम करता है।',
    ctaStartTest: 'मुफ़्त टेस्ट शुरू करें',
    ctaCallUs: 'कॉल करें',

    // FAQ
    faqHeading: 'अक्सर पूछे जाने वाले',
    faqHeadingHighlight: 'सवाल',
    faq1Q: 'जूनियर IAS प्रोग्राम क्या है?',
    faq1A: 'जूनियर IAS विपिन सर का मिशन है जो क्लास 6 से ही UPSC-स्तर की सामान्य अध्ययन की नींव तैयार करता है। इसमें इतिहास, भूगोल, संविधान, विज्ञान और स्टैटिक GK शामिल है — वही NCERT विषय जो भारत की हर प्रतियोगी परीक्षा तय करते हैं।',
    faq2Q: 'मेरे बच्चे को क्लास 6 से तैयारी क्यों शुरू करनी चाहिए?',
    faq2A: 'क्योंकि UPSC, NDA और State PCS जैसी प्रतियोगी परीक्षाएँ क्लास 6-12 की NCERT से पूछती हैं। स्कूल सिर्फ़ बोर्ड पास करने के लिए PCM पर ध्यान देते हैं — वे Humanities को पूरी तरह नज़रअंदाज़ कर देते हैं जबकि वही रैंक तय करती है। जल्दी शुरू करने से दिल्ली कोचिंग में आखिरी वक्त की भागदौड़ नहीं मचती।',
    faq3Q: 'टेस्ट सीरीज़ किताबों के साथ कैसे काम करती है?',
    faq3A: 'हमारी टेस्ट सीरीज़ का हर सवाल सीधे विपिन सर की NCERT किताबों से आता है। अध्याय पढ़ो, टेस्ट दो — 100% संरेखण, कोई सरप्राइज़ नहीं। इसी तरीके से 350+ छात्रों ने एक ही सेंटर से UP Police क्लियर किया।',
    faq4Q: 'क्या ₹100/महीना सचमुच पूरी कीमत है?',
    faq4A: 'हाँ। ₹100/महीना (₹1,200/साल) में आपको पूरा जूनियर IAS इकोसिस्टम मिलता है — किताबें और टेस्ट सीरीज़। विपिन सर ने जानबूझकर कीमत इतनी रखी है कि कोई भी ग्रामीण या अर्ध-शहरी परिवार अच्छी शिक्षा से वंचित न रहे।',
    faq5Q: 'विपिन सर कौन हैं?',
    faq5A: 'विपिन सर B.Tech + M.Tech एयरोनॉटिकल इंजीनियर हैं जिन्होंने BSF की सरकारी नौकरी छोड़कर पढ़ाना चुना। दिल्ली में भारत के टॉप UPSC कोचिंग में पढ़ाने के बाद 2016 में नूरपुर में परफेक्ट क्लासेज़ की स्थापना की। सिर्फ़ 5 छात्रों से शुरू करके 5,000 छात्रों तक पहुँचे, 350+ UP Police और 125+ Super TET चयन — सब एक ही सेंटर से, सिर्फ़ लोगों की ज़ुबानी से।',
    faq6Q: 'क्या मोबाइल पर टेस्ट दे सकते हैं?',
    faq6A: 'हाँ। हमारा प्लेटफ़ॉर्म पूरी तरह मोबाइल पर चलता है — कभी भी, कहीं भी, बेसिक स्मार्टफ़ोन और धीमे इंटरनेट पर भी टेस्ट दें।',

    // Footer
    footerDesc: 'नूरपुर से हर गाँव तक — 2016 से भारत का भविष्य बना रहे हैं।',
    footerTestSeries: 'टेस्ट सीरीज़',
    footerExplore: 'एक्सप्लोर करें',
    footerQuickLinks: 'त्वरित लिंक',
    footerOurBooks: 'हमारी किताबें',
    footer200Village: '200 गाँव यात्रा',
    footerJuniorIasTests: 'जूनियर IAS टेस्ट',
    footerAboutVipin: 'विपिन सर के बारे में',
    footerContactUs: 'संपर्क करें',
    footerPrivacy: 'गोपनीयता नीति',
    footerTerms: 'उपयोग की शर्तें',
    footerCopyright: '© 2026 परफेक्ट क्लासेज़। सर्वाधिकार सुरक्षित।',
    footerMadeWith: 'भारतीय छात्रों के लिए ❤️ से बनाया',

    // Navbar
    navTestSeries: 'टेस्ट सीरीज़',
    navBooks: 'किताबें',
    navMission: 'मिशन',
    navResults: 'परिणाम',
    navAbout: 'परिचय',
    navStartFreeTest: 'मुफ़्त टेस्ट शुरू करें',
  },
};
