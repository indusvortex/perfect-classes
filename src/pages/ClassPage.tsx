import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronRight, ArrowRight, Phone } from 'lucide-react';
import PagePlaceholder from './PagePlaceholder';
import FloatingIcon from '@/components/shared/FloatingIcon';
import { useLang } from '@/i18n/translations';

// Class data - TODO: Move to @/data/classes.ts
const BY_CLASS_SERIES = [
  { class: '6', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 40, badge: { en: 'CLASS 6', hi: 'क्लास 6' }, gradient: 'from-amber-400 to-orange-500', image: '/students/class6.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '7', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 50, badge: { en: 'CLASS 7', hi: 'क्लास 7' }, gradient: 'from-emerald-400 to-teal-500', image: '/students/class7.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '8', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 60, badge: { en: 'CLASS 8', hi: 'क्लास 8' }, gradient: 'from-blue-400 to-indigo-500', image: '/students/class8.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '9', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 80, badge: { en: 'CLASS 9', hi: 'क्लास 9' }, gradient: 'from-violet-500 to-purple-600', image: '/students/class9.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '10', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 120, badge: { en: 'CLASS 10', hi: 'क्लास 10' }, gradient: 'from-rose-500 to-red-600', image: '/students/class10.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '11', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 150, badge: { en: 'CLASS 11', hi: 'क्लास 11' }, gradient: 'from-[#981F1F] to-[#6B1515]', image: '/students/class11.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '12', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 200, badge: { en: 'CLASS 12', hi: 'क्लास 12' }, gradient: 'from-[#121212] to-[#333]', image: '/students/class12.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
];

const CLASS_DATA: Record<string, {
  heroDesc: string;
  subjects: { name: string; icon: string; chapters: string[]; tests: number }[];
  bookPages: number;
}> = {
  '6': {
    heroDesc: 'Where every topper\'s journey begins. Build an unshakable NCERT foundation in History, Geography, Civics, Science & GK — the subjects your school ignores but UPSC demands.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['What, Where, How and When?', 'From Hunting-Gathering to Growing Food', 'In the Earliest Cities', 'What Books and Burials Tell Us', 'Kingdoms, Kings and an Early Republic', 'New Questions and Ideas', 'Ashoka, The Emperor Who Gave Up War', 'Vital Villages, Thriving Towns', 'Traders, Kings and Pilgrims', 'New Empires and Kingdoms', 'Buildings, Paintings and Books'], tests: 8 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Major Domains of the Earth', 'Major Landforms of the Earth', 'Our Country — India', 'India: Climate, Vegetation and Wildlife'], tests: 8 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['Understanding Diversity', 'Diversity and Discrimination', 'What is Government?', 'Key Elements of a Democratic Government', 'Panchayati Raj', 'Rural Administration', 'Urban Administration', 'Rural Livelihoods', 'Urban Livelihoods'], tests: 8 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Food: Where Does It Come From?', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials into Groups', 'Separation of Substances', 'Changes Around Us', 'Getting to Know Plants', 'Body Movements', 'The Living Organisms and Their Surroundings', 'Motion and Measurement of Distances'], tests: 8 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['India: States & Capitals', 'National Symbols', 'Important Days & Events', 'Famous Personalities', 'First in India & World', 'Books & Authors', 'Awards & Honours', 'Basic Indian Geography Facts'], tests: 8 },
    ],
    bookPages: 180,
  },
  '7': {
    heroDesc: 'Concepts deepen. From Medieval India to the Indian Constitution\'s evolution — Class 7 bridges curiosity with real competitive exam thinking.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['Tracing Changes Through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire', 'Rulers and Buildings', 'Towns, Traders and Craftspersons', 'Tribes, Nomads and Settled Communities', 'Devotional Paths to the Divine', 'The Making of Regional Cultures', 'Eighteenth-Century Political Formations'], tests: 10 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water', 'Natural Vegetation and Wildlife', 'Human Environment: Settlement, Transport and Communication', 'Human-Environment Interactions: The Tropical and Subtropical Region', 'Life in the Deserts'], tests: 10 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['On Equality', 'Role of the Government in Health', 'How the State Government Works', 'Growing Up as Boys and Girls', 'Women Change the World', 'Understanding Media', 'Understanding Advertising', 'Markets Around Us', 'A Shirt in the Market'], tests: 10 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations', 'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals and Plants', 'Reproduction in Plants'], tests: 10 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['World: Countries & Capitals', 'International Organisations', 'Indian Rivers & Mountains', 'Important Inventions', 'Sports & Trophies', 'Currencies of the World', 'Famous Monuments', 'Indian Arts & Culture Basics'], tests: 10 },
    ],
    bookPages: 210,
  },
  '8': {
    heroDesc: 'The bridge between basics and boards. Modern Indian History, the Constitution in practice, and advanced Geography — the real competitive exam syllabus starts here.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['How, When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals, Dikus and the Vision of a Golden Age', 'When People Rebel (1857)', 'Civilising the Native, Educating the Nation', 'Women, Caste and Reform', 'The Making of the National Movement', 'India After Independence'], tests: 12 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources', 'Mineral and Power Resources', 'Agriculture', 'Industries', 'Human Resources'], tests: 12 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['The Indian Constitution', 'Understanding Secularism', 'Why Do We Need a Parliament?', 'Understanding Laws', 'Judiciary', 'Understanding Our Criminal Justice System', 'Understanding Marginalisation', 'Confronting Marginalisation'], tests: 12 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Crop Production and Management', 'Microorganisms', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Cell: Structure and Functions', 'Reproduction in Animals', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current'], tests: 12 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['Indian Freedom Fighters', 'Important Acts & Laws in Indian History', 'UN & Its Agencies', 'Indian Defence', 'Space Missions — India & World', 'Dams & Rivers of India', 'Census & Demographics', 'Current Affairs Framework'], tests: 12 },
    ],
    bookPages: 240,
  },
  '9': {
    heroDesc: 'Competition-level preparation officially begins. French Revolution, Indian Constitution at depth, Climate & Population — the chapters UPSC Prelims directly tests.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'Pastoralists in the Modern World'], tests: 16 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['India — Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wildlife', 'Population'], tests: 16 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['What is Democracy? Why Democracy?', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'Democratic Rights'], tests: 16 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Why Do We Fall Ill?', 'Natural Resources', 'Improvement in Food Resources'], tests: 16 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['World Wars — Causes & Effects', 'Indian Geography Advanced', 'Constitutional Bodies of India', 'Economic Terms & Concepts', 'Important Committees & Commissions', 'Environmental Conventions', 'Indian Polity Advanced', 'Science & Technology in India'], tests: 16 },
    ],
    bookPages: 280,
  },
  '10': {
    heroDesc: 'Board exams meet competition prep. Nationalism, Federalism, Development Economics — these chapters appear word-for-word in UPSC, NDA, and every state exam.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World'], tests: 24 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'], tests: 24 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender, Religion and Caste', 'Popular Struggles and Movements', 'Political Parties', 'Outcomes of Democracy', 'Challenges to Democracy'], tests: 24 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light: Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy', 'Our Environment'], tests: 24 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['Indian Economy Basics', 'Five Year Plans', 'Indian Political System Deep Dive', 'International Relations', 'Environmental Issues & Policies', 'Indian Agriculture Data', 'Transport & Communication', 'Social Issues & Schemes'], tests: 24 },
    ],
    bookPages: 320,
  },
  '11': {
    heroDesc: 'IAS and NDA-level depth begins. Indian Constitution in full, World History, Economic Development, and advanced Geography — this is where serious aspirants separate from the crowd.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['From the Beginning of Time', 'Writing and City Life', 'An Empire Across Three Continents', 'The Central Islamic Lands', 'Nomadic Empires', 'The Three Orders', 'Changing Cultural Traditions', 'Confrontation of Cultures', 'The Industrial Revolution', 'Displacing Indigenous Peoples', 'Paths to Modernisation'], tests: 30 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Geography as a Discipline', 'The Origin and Evolution of the Earth', 'Interior of the Earth', 'Distribution of Oceans and Continents', 'Minerals and Rocks', 'Geomorphic Processes', 'Landforms and their Evolution', 'Composition and Structure of Atmosphere', 'Solar Radiation, Heat Balance and Temperature', 'Atmospheric Circulation and Weather Systems', 'Water in the Atmosphere', 'World Climate and Climate Change', 'Water (Oceans)', 'Movements of Ocean Water', 'Life on the Earth', 'Biodiversity and Conservation'], tests: 30 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['Constitution — Why and How?', 'Rights in the Indian Constitution', 'Election and Representation', 'Executive', 'Legislature', 'Judiciary', 'Federalism', 'Local Governments', 'Constitution as a Living Document', 'The Philosophy of the Constitution'], tests: 30 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis', 'Respiration in Plants', 'Plant Growth and Development', 'Digestion and Absorption', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'], tests: 30 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['Indian Polity — Complete Framework', 'World Geography Advanced', 'Indian Economy — Macro Concepts', 'Science & Technology Current', 'Art & Culture of India', 'Modern Indian History — Advanced', 'International Organisations Deep Dive', 'Ethics & Governance Basics'], tests: 30 },
    ],
    bookPages: 380,
  },
  '12': {
    heroDesc: 'The final year. Cold War, Indian Politics since Independence, Contemporary World Politics, Human Geography — the exact syllabus of UPSC Mains GS papers. Finish this, and you\'re exam ready.',
    subjects: [
      { name: 'History', icon: '\uD83D\uDCDC', chapters: ['Bricks, Beads and Bones', 'Kings, Farmers and Towns', 'Kinship, Caste and Class', 'Thinkers, Beliefs and Buildings', 'Through the Eyes of Travellers', 'Bhakti-Sufi Traditions', 'An Imperial Capital: Vijayanagara', 'Peasants, Zamindars and the State', 'Kings and Chronicles: The Mughal Courts', 'Colonialism and the Countryside', 'Rebels and the Raj', 'Colonial Cities', 'Mahatma Gandhi and the Nationalist Movement', 'Understanding Partition', 'Framing the Constitution'], tests: 40 },
      { name: 'Geography', icon: '\uD83C\uDF0D', chapters: ['Human Geography: Nature and Scope', 'The World Population: Distribution, Density and Growth', 'Population Composition', 'Human Development', 'Primary Activities', 'Secondary Activities', 'Tertiary and Quaternary Activities', 'Transport and Communication', 'International Trade', 'Human Settlements'], tests: 40 },
      { name: 'Constitution', icon: '\u2696\uFE0F', chapters: ['The Cold War Era', 'The End of Bipolarity', 'US Hegemony in World Politics', 'Alternative Centres of Power', 'Contemporary South Asia', 'International Organisations', 'Security in the Contemporary World', 'Environment and Natural Resources', 'Globalisation', 'Era of One-Party Dominance', 'Challenges of Nation Building', 'Politics of Planned Development', 'India\'s External Relations', 'Challenges to and Restoration of the Congress System', 'Rise of Popular Movements', 'Regional Aspirations', 'Recent Developments in Indian Politics'], tests: 40 },
      { name: 'Science', icon: '\uD83D\uDD2C', chapters: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues'], tests: 40 },
      { name: 'Static GK', icon: '\uD83D\uDCCA', chapters: ['UPSC Prelims GS Pattern', 'Indian History — Complete Timeline', 'World Politics & Relations', 'Indian Economy — Budget & Policy', 'Geography — Map-Based Questions', 'Governance & Social Justice', 'Disaster Management', 'Internal Security Basics', 'Ethics Case Studies Intro'], tests: 40 },
    ],
    bookPages: 420,
  },
};

function ClassPage() {
  const { classId } = useParams();
  const { lang } = useLang();
  const classInfo = BY_CLASS_SERIES.find(s => s.class === classId);
  const data = classId ? CLASS_DATA[classId] : null;
  const [openSubject, setOpenSubject] = useState<number | null>(null);

  if (!classInfo || !data) return <PagePlaceholder title="Class Not Found" />;



  // Bilingual class page text
  const cp = {
    en: {
      back: 'All Classes',
      badge: `Junior IAS — Class ${classInfo.class}`,
      heading: `Class ${classInfo.class}`,
      heroDesc: data.heroDesc,
      startTest: 'Start Free Test',
      orderBook: 'Order Book',
      priceTag: 'Just ₹100/month — Complete Access',
      whatYouGet: "What You'll Get",
      whatYouGetDesc: 'Everything included in one package — no hidden charges.',
      getBook: 'Junior IAS Book',
      getBookDesc: `${data.bookPages}+ Pages, 5 Subjects, Written By Vipin Sir`,
      getLive: '365 Days Live Classes',
      getLiveDesc: 'Daily Live Sessions With Doubt Clearing',
      getOffline: '52 Offline Tests',
      getOfflineDesc: 'Weekly Chapter-Wise Test Series',
      getOnline: '365 Online Tests',
      getOnlineDesc: 'Daily Practice Tests With Instant Results',
      journeyTitle: 'Your UPSC',
      journeyTitleHL: 'Journey Starts Here',
      journeyDesc: 'From your classroom to the civil services — here\'s the path we walk together.',
      step1: 'Get Your Junior IAS Book',
      step1Desc: 'A carefully crafted book covering History, Geography, Constitution, Science & GK — your foundation stone.',
      step2: 'Attend Daily Live Classes',
      step2Desc: 'Vipin Sir breaks down every concept, every day. Ask doubts, get clarity, build confidence.',
      step3: 'Take Weekly Offline Tests',
      step3Desc: 'Every Sunday, test what you learned. Real exam conditions. Real growth.',
      step4: 'Practice Daily Online Tests',
      step4Desc: 'Quick 10-minute tests every day. Track your score, watch yourself improve.',
      step5: 'Become UPSC Ready',
      step5Desc: 'By the time you reach Class 12, you won\'t need a coaching institute. You\'ll already be ahead.',
      chapters: 'chapters',
      tests: 'tests',
      viewChapters: 'View Chapters',
      chapterBreakdown: 'Explore What You\'ll',
      chapterBreakdownHL: 'Learn',
      chapterDesc: 'Tap any subject to dive into the chapters. Every chapter = one step closer to your dream.',
      completePackage: `Complete Class ${classInfo.class} Package`,
      packageHeading: 'Book + Tests + Live Classes',
      perMonth: '/month',
      packageDesc: `₹1,200/year for the complete Junior IAS ecosystem. Book + 365 online tests + 52 offline tests + daily live classes.`,
      enrollNow: 'Enroll Now',
      askWhatsApp: 'Ask on WhatsApp',
      included: 'All included:',
      inclBook: 'Junior IAS Book',
      inclLive: '365 Live Classes',
      inclOffline: '52 Offline Tests',
      inclOnline: '365 Online Tests',
    },
    hi: {
      back: 'सभी क्लास',
      badge: `जूनियर IAS — क्लास ${classInfo.class}`,
      heading: `क्लास ${classInfo.class}`,
      heroDesc: data.heroDesc,
      startTest: 'मुफ़्त टेस्ट शुरू करें',
      orderBook: 'किताब ऑर्डर करें',
      priceTag: 'सिर्फ़ ₹100/महीना — पूरा एक्सेस',
      whatYouGet: 'आपको क्या मिलेगा',
      whatYouGetDesc: 'एक पैकेज में सब कुछ — कोई छुपा शुल्क नहीं।',
      getBook: 'जूनियर IAS किताब',
      getBookDesc: `${data.bookPages}+ पेज, 5 विषय, विपिन सर द्वारा लिखी`,
      getLive: '365 दिन लाइव क्लास',
      getLiveDesc: 'रोज़ लाइव सेशन और डाउट क्लियरिंग',
      getOffline: '52 ऑफलाइन टेस्ट',
      getOfflineDesc: 'हर हफ़्ते अध्याय-वार टेस्ट सीरीज़',
      getOnline: '365 ऑनलाइन टेस्ट',
      getOnlineDesc: 'रोज़ प्रैक्टिस टेस्ट, तुरंत रिज़ल्ट',
      journeyTitle: 'तुम्हारा UPSC',
      journeyTitleHL: 'सफ़र यहीं से शुरू',
      journeyDesc: 'क्लासरूम से सिविल सर्विसेज़ तक — यह रास्ता हम साथ चलेंगे।',
      step1: 'जूनियर IAS किताब लो',
      step1Desc: 'इतिहास, भूगोल, संविधान, विज्ञान और GK — तुम्हारी नींव का पत्थर।',
      step2: 'रोज़ लाइव क्लास लो',
      step2Desc: 'विपिन सर हर कॉन्सेप्ट समझाएँगे। डाउट पूछो, क्लैरिटी पाओ।',
      step3: 'हफ़्ते का ऑफलाइन टेस्ट दो',
      step3Desc: 'हर रविवार, असली परीक्षा जैसा माहौल। असली तैयारी।',
      step4: 'रोज़ ऑनलाइन टेस्ट दो',
      step4Desc: 'रोज़ 10 मिनट का टेस्ट। स्कोर ट्रैक करो, खुद को बढ़ते देखो।',
      step5: 'UPSC रेडी बनो',
      step5Desc: 'क्लास 12 तक पहुँचते-पहुँचते कोचिंग की ज़रूरत ही नहीं पड़ेगी।',
      chapters: 'अध्याय',
      tests: 'टेस्ट',
      viewChapters: 'अध्याय देखें',
      chapterBreakdown: 'जानो क्या',
      chapterBreakdownHL: 'सीखोगे',
      chapterDesc: 'किसी भी विषय पर टैप करो। हर अध्याय = सपने के एक कदम और करीब।',
      completePackage: `क्लास ${classInfo.class} का पूरा पैकेज`,
      packageHeading: 'किताब + टेस्ट + लाइव क्लास',
      perMonth: '/महीना',
      packageDesc: `₹1,200/साल में पूरा जूनियर IAS इकोसिस्टम। किताब + 365 ऑनलाइन टेस्ट + 52 ऑफलाइन टेस्ट + रोज़ लाइव क्लास।`,
      enrollNow: 'अभी एनरोल करें',
      askWhatsApp: 'WhatsApp पर पूछें',
      included: 'सब शामिल:',
      inclBook: 'जूनियर IAS किताब',
      inclLive: '365 लाइव क्लास',
      inclOffline: '52 ऑफलाइन टेस्ट',
      inclOnline: '365 ऑनलाइन टेस्ट',
    },
  };
  const t = cp[lang];

  return (
    <div className="bg-[#FFF8F0] relative overflow-hidden">

      {/* ── Background decorative elements across the page ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {Number(classInfo.class) <= 8 ? (
          <>
            {/* Playful squiggly SVG lines for Class 6-8 */}
            <svg className="absolute top-[15%] left-0 w-32 opacity-[0.06]" viewBox="0 0 100 200"><path d="M50,0 Q80,50 50,100 Q20,150 50,200" stroke="#981F1F" strokeWidth="3" fill="none" /></svg>
            <svg className="absolute top-[45%] right-0 w-24 opacity-[0.05]" viewBox="0 0 100 200"><path d="M50,0 Q20,50 50,100 Q80,150 50,200" stroke="#FDB813" strokeWidth="3" fill="none" /></svg>
            <svg className="absolute top-[70%] left-[5%] w-20 opacity-[0.04]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="#981F1F" strokeWidth="2" fill="none" strokeDasharray="8 6" /></svg>
            <svg className="absolute top-[30%] right-[8%] w-16 opacity-[0.05]" viewBox="0 0 100 100"><rect x="10" y="10" width="80" height="80" rx="20" stroke="#FDB813" strokeWidth="2" fill="none" strokeDasharray="10 8" /></svg>
            <div className="absolute top-[55%] left-[3%] grid grid-cols-3 gap-2 opacity-[0.06]">
              {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#981F1F]" />)}
            </div>
            <div className="absolute top-[25%] right-[4%] grid grid-cols-3 gap-2 opacity-[0.05]">
              {[...Array(9)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#FDB813]" />)}
            </div>
            <div className="absolute top-[80%] right-[15%] text-[#981F1F]/[0.06] text-6xl font-thin">+</div>
            <div className="absolute top-[10%] left-[20%] text-[#FDB813]/[0.08] text-5xl font-thin">+</div>
          </>
        ) : (
          <>
            {/* Clean geometric lines for Class 9-12 — serious academic */}
            <svg className="absolute top-[12%] left-0 w-40 opacity-[0.04]" viewBox="0 0 160 300"><line x1="20" y1="0" x2="20" y2="300" stroke="#981F1F" strokeWidth="1" /><line x1="40" y1="0" x2="40" y2="300" stroke="#981F1F" strokeWidth="0.5" /><line x1="60" y1="0" x2="60" y2="300" stroke="#981F1F" strokeWidth="0.5" /></svg>
            <svg className="absolute top-[40%] right-0 w-40 opacity-[0.03]" viewBox="0 0 160 300"><line x1="100" y1="0" x2="100" y2="300" stroke="#333" strokeWidth="1" /><line x1="120" y1="0" x2="120" y2="300" stroke="#333" strokeWidth="0.5" /><line x1="140" y1="0" x2="140" y2="300" stroke="#333" strokeWidth="0.5" /></svg>
            <svg className="absolute top-[65%] left-[5%] w-24 opacity-[0.03]" viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" stroke="#981F1F" strokeWidth="1" fill="none" /><rect x="15" y="15" width="70" height="70" stroke="#981F1F" strokeWidth="0.5" fill="none" /></svg>
            <svg className="absolute top-[25%] right-[6%] w-20 opacity-[0.03]" viewBox="0 0 100 100"><polygon points="50,5 95,95 5,95" stroke="#333" strokeWidth="1" fill="none" /></svg>
            <div className="absolute top-[75%] right-[12%] w-px h-32 bg-[#981F1F]/[0.06]" />
            <div className="absolute top-[50%] left-[8%] w-px h-24 bg-[#333]/[0.04]" />
          </>
        )}
      </div>

      {/* ── Hero Section — Playful, KidWise-inspired ── */}
      <section className={`relative bg-gradient-to-b ${classInfo.gradient} pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-visible`}>
        {/* Decorative background shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full bg-white/10" />
        <div className="absolute bottom-20 left-10 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-white/5" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/10" />
        <div className="absolute bottom-16 right-[15%] w-24 h-24 rounded-2xl bg-white/5 rotate-12" />
        <div className="absolute top-20 left-[40%] w-12 h-12 rounded-lg bg-white/5 -rotate-12" />
        {/* Dot grid pattern */}
        <div className="absolute top-[20%] right-[5%] opacity-[0.12] hidden lg:block">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <g fill="white">
              <circle cx="12" cy="12" r="3"/><circle cx="36" cy="12" r="3"/><circle cx="60" cy="12" r="3"/><circle cx="84" cy="12" r="3"/><circle cx="108" cy="12" r="3"/>
              <circle cx="12" cy="36" r="3"/><circle cx="36" cy="36" r="3"/><circle cx="60" cy="36" r="3"/><circle cx="84" cy="36" r="3"/><circle cx="108" cy="36" r="3"/>
              <circle cx="12" cy="60" r="3"/><circle cx="36" cy="60" r="3"/><circle cx="60" cy="60" r="3"/><circle cx="84" cy="60" r="3"/><circle cx="108" cy="60" r="3"/>
              <circle cx="12" cy="84" r="3"/><circle cx="36" cy="84" r="3"/><circle cx="60" cy="84" r="3"/><circle cx="84" cy="84" r="3"/><circle cx="108" cy="84" r="3"/>
              <circle cx="12" cy="108" r="3"/><circle cx="36" cy="108" r="3"/><circle cx="60" cy="108" r="3"/><circle cx="84" cy="108" r="3"/><circle cx="108" cy="108" r="3"/>
            </g>
          </svg>
        </div>
        {/* Open book SVG */}
        <svg className="absolute bottom-[25%] left-[3%] w-16 sm:w-20 opacity-[0.08]" viewBox="0 0 100 80" fill="none">
          <path d="M50,15 C40,5 20,5 5,10 L5,70 C20,65 40,65 50,75 C60,65 80,65 95,70 L95,10 C80,5 60,5 50,15Z" stroke="white" strokeWidth="2.5" fill="none" />
          <line x1="50" y1="15" x2="50" y2="75" stroke="white" strokeWidth="1.5" />
        </svg>
        {/* Pencil SVG */}
        <svg className="absolute top-[60%] right-[8%] w-8 sm:w-12 opacity-[0.1] rotate-[-30deg]" viewBox="0 0 24 80" fill="none">
          <rect x="4" y="0" width="16" height="60" rx="2" stroke="white" strokeWidth="2" />
          <polygon points="4,60 20,60 12,78" stroke="white" strokeWidth="2" fill="none" />
          <line x1="4" y1="50" x2="20" y2="50" stroke="white" strokeWidth="1.5" />
        </svg>

        {/* Floating icons — playful for 6-8, serious/academic for 9-12 */}
        {Number(classInfo.class) <= 8 ? (
          <>
            <FloatingIcon emoji="📚" className="top-[15%] left-[8%] opacity-60" delay={0} duration={5} />
            <FloatingIcon emoji="✏️" className="top-[20%] right-[12%] opacity-50" delay={1} duration={4.5} />
            <FloatingIcon emoji="🎯" className="bottom-[20%] left-[15%] opacity-40" delay={0.5} duration={5.5} />
            <FloatingIcon emoji="🧠" className="top-[35%] right-[5%] opacity-50" delay={1.5} duration={4} />
            <FloatingIcon emoji="⭐" className="bottom-[15%] right-[20%] opacity-60" delay={0.8} duration={3.5} />
            <FloatingIcon emoji="🏆" className="top-[10%] left-[30%] opacity-40" delay={2} duration={6} />
            <FloatingIcon emoji="📝" className="bottom-[30%] right-[35%] opacity-30 hidden sm:block" delay={1.2} duration={5} />
            <FloatingIcon emoji="🚀" className="top-[60%] left-[5%] opacity-40 hidden sm:block" delay={0.3} duration={4.5} />
          </>
        ) : (
          <>
            <FloatingIcon emoji="🏛️" className="top-[15%] left-[8%] opacity-40" delay={0} duration={6} />
            <FloatingIcon emoji="⚖️" className="top-[20%] right-[12%] opacity-35" delay={1.2} duration={5.5} />
            <FloatingIcon emoji="🎖️" className="bottom-[20%] left-[15%] opacity-30" delay={0.5} duration={6} />
            <FloatingIcon emoji="📊" className="top-[35%] right-[5%] opacity-35" delay={1.8} duration={5} />
            <FloatingIcon emoji="🔬" className="bottom-[15%] right-[20%] opacity-30" delay={0.8} duration={5.5} />
            <FloatingIcon emoji="🗺️" className="top-[10%] left-[30%] opacity-30 hidden sm:block" delay={2} duration={6.5} />
          </>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Link to="/#test-series" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-sm mb-4 transition-colors px-4 py-2 rounded-full border border-white/30 font-medium">
                <ArrowRight className="rotate-180" size={14} /> {t.back}
              </Link>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 ml-2 border border-white/30">
                {t.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.25] mb-4">
                {t.heading}
              </h1>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <button className="bg-white text-[#121212] font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg text-base sm:text-lg">
                  {t.startTest} <ArrowRight size={18} />
                </button>
                <button className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/25 transition-colors flex items-center gap-2">
                  <BookOpen size={18} /> {t.orderBook}
                </button>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                {t.priceTag}
              </div>
            </div>

            {/* Right side — Student illustration with floating stats */}
            <div className="flex justify-center items-center mt-8 lg:mt-0 relative">
              {/* Large decorative circle behind */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-white/10" />

              {/* Student illustration */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img src={classInfo.image} alt={`Class ${classInfo.class}`} className="w-44 h-52 sm:w-56 sm:h-64 lg:w-64 lg:h-72 drop-shadow-2xl object-contain" />
              </motion.div>

              {/* Floating stat badges — 4 corners with gradient icons */}
              {/* Top-left: Online Tests */}
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -left-4 sm:-top-4 sm:-left-6 lg:-left-10 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-lg text-base sm:text-lg">💻</div>
                  <div>
                    <span className="text-white font-extrabold text-base sm:text-xl block leading-none">365</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'ऑनलाइन टेस्ट' : 'Online Tests'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom-left: Junior IAS Book */}
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:-bottom-2 sm:-left-6 lg:-left-8 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg text-base sm:text-lg">📕</div>
                  <div>
                    <span className="text-white font-extrabold text-xs sm:text-sm block leading-tight">{lang === 'hi' ? 'जूनियर IAS' : 'Junior IAS'}</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'किताब' : 'Book'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Top-right: Live Classes */}
              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -top-2 -right-4 sm:-top-2 sm:-right-6 lg:-right-8 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg text-base sm:text-lg">🎥</div>
                  <div>
                    <span className="text-white font-extrabold text-base sm:text-xl block leading-none">365</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'लाइव क्लास' : 'Live Classes'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom-right: Offline Tests */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-6 -right-2 sm:-bottom-4 sm:-right-4 lg:-right-6 bg-white/15 backdrop-blur-xl rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-2xl z-20 border border-white/25 scale-[0.8] sm:scale-100">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg text-base sm:text-lg">📝</div>
                  <div>
                    <span className="text-white font-extrabold text-base sm:text-xl block leading-none">52+</span>
                    <span className="text-white/60 text-[8px] sm:text-[10px] font-medium">{lang === 'hi' ? 'ऑफलाइन टेस्ट' : 'Offline Tests'}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gradient bridge from hero to content ── */}
      <div className="relative h-24 sm:h-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${classInfo.gradient} opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF8F0]/70 to-[#FFF8F0]" />
        {/* Subtle curved separator */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60Z" fill="#FFF8F0" />
        </svg>
      </div>

      {/* ── What You Get — 4 pillars ── */}
      <section className="py-16 sm:py-20 relative z-10 bg-gradient-to-b from-[#FFF8F0] to-[#FFF8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">
              {t.whatYouGet}
            </h2>
            <p className="text-[#555] mt-2 max-w-xl mx-auto">{t.whatYouGetDesc}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '📖', title: t.getBook, desc: t.getBookDesc, color: 'from-amber-50 to-orange-50', border: 'border-amber-200', iconBg: 'bg-amber-100' },
              { icon: '🎥', title: t.getLive, desc: t.getLiveDesc, color: 'from-green-50 to-emerald-50', border: 'border-green-200', iconBg: 'bg-green-100' },
              { icon: '📝', title: t.getOffline, desc: t.getOfflineDesc, color: 'from-blue-50 to-indigo-50', border: 'border-blue-200', iconBg: 'bg-blue-100' },
              { icon: '💻', title: t.getOnline, desc: t.getOnlineDesc, color: 'from-purple-50 to-violet-50', border: 'border-purple-200', iconBg: 'bg-purple-100' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl border ${item.border} p-5 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all`}
              >
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#121212] text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-xs text-[#666] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Price highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-[#981F1F] to-[#7A1818] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white"
          >
            <div className="flex items-center gap-4">
              <div className="text-4xl">🎁</div>
              <div>
                <p className="font-bold text-lg sm:text-xl">{lang === 'hi' ? 'यह सब सिर्फ़' : 'All this for just'}</p>
                <p className="text-white/70 text-sm">{lang === 'hi' ? 'किताब + टेस्ट + लाइव क्लास' : 'Book + Tests + Live Classes'}</p>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#FDB813]">₹100</span>
              <span className="text-white/60 text-lg">{t.perMonth}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Your Journey Timeline ── */}
      <section className="py-16 sm:py-20 relative z-10 overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-12 right-[5%] w-20 sm:w-28 opacity-[0.04]" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="#981F1F" strokeWidth="2" fill="none" /><circle cx="50" cy="50" r="30" stroke="#981F1F" strokeWidth="1.5" fill="none" /><circle cx="50" cy="50" r="15" stroke="#981F1F" strokeWidth="1" fill="none" /></svg>
        <svg className="absolute bottom-20 left-[3%] w-16 sm:w-24 opacity-[0.05] rotate-12" viewBox="0 0 100 80" fill="none">
          <path d="M50,15 C40,5 20,5 5,10 L5,70 C20,65 40,65 50,75 C60,65 80,65 95,70 L95,10 C80,5 60,5 50,15Z" stroke="#FDB813" strokeWidth="2.5" fill="none" />
          <line x1="50" y1="15" x2="50" y2="75" stroke="#FDB813" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[40%] right-[2%] w-10 opacity-[0.04]" viewBox="0 0 40 40"><polygon points="20,2 38,38 2,38" stroke="#981F1F" strokeWidth="2" fill="none" /></svg>
        {/* Dot pattern */}
        <div className="absolute top-[60%] left-[6%] opacity-[0.03] hidden sm:block">
          <svg width="80" height="80" viewBox="0 0 80 80"><g fill="#981F1F">
            <circle cx="10" cy="10" r="2.5"/><circle cx="30" cy="10" r="2.5"/><circle cx="50" cy="10" r="2.5"/><circle cx="70" cy="10" r="2.5"/>
            <circle cx="10" cy="30" r="2.5"/><circle cx="30" cy="30" r="2.5"/><circle cx="50" cy="30" r="2.5"/><circle cx="70" cy="30" r="2.5"/>
            <circle cx="10" cy="50" r="2.5"/><circle cx="30" cy="50" r="2.5"/><circle cx="50" cy="50" r="2.5"/><circle cx="70" cy="50" r="2.5"/>
            <circle cx="10" cy="70" r="2.5"/><circle cx="30" cy="70" r="2.5"/><circle cx="50" cy="70" r="2.5"/><circle cx="70" cy="70" r="2.5"/>
          </g></svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#121212]">
              {t.journeyTitle} <span className="text-[#981F1F]">{t.journeyTitleHL}</span>
            </h2>
            <p className="text-[#555] mt-3 max-w-lg mx-auto text-base">{t.journeyDesc}</p>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#981F1F] via-[#FDB813] to-green-500 rounded-full" />

            {[
              { emoji: '📖', title: t.step1, desc: t.step1Desc, color: 'bg-amber-500', ring: 'ring-amber-100' },
              { emoji: '🎥', title: t.step2, desc: t.step2Desc, color: 'bg-[#981F1F]', ring: 'ring-red-100' },
              { emoji: '📝', title: t.step3, desc: t.step3Desc, color: 'bg-blue-500', ring: 'ring-blue-100' },
              { emoji: '💻', title: t.step4, desc: t.step4Desc, color: 'bg-purple-500', ring: 'ring-purple-100' },
              { emoji: '🏆', title: t.step5, desc: t.step5Desc, color: 'bg-green-500', ring: 'ring-green-100' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex items-start gap-5 sm:gap-6 mb-8 last:mb-0"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full ${step.color} ring-4 ${step.ring} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                  {step.emoji}
                </div>
                {/* Content card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-white bg-[#981F1F]/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {lang === 'hi' ? `चरण ${i + 1}` : `Step ${i + 1}`}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-[#121212] text-lg sm:text-xl mb-1">{step.title}</h3>
                  <p className="text-[#666] text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chapter Breakdown (Accordion) ── */}
      <section className="pb-16 sm:pb-20 relative z-10 overflow-hidden">
        {/* Decorative background SVGs */}
        <svg className="absolute top-10 left-[2%] w-14 sm:w-20 opacity-[0.04]" viewBox="0 0 80 80"><rect x="5" y="5" width="70" height="70" rx="15" stroke="#981F1F" strokeWidth="2" fill="none" /><rect x="18" y="18" width="44" height="44" rx="10" stroke="#981F1F" strokeWidth="1.5" fill="none" /></svg>
        <svg className="absolute top-[30%] right-[3%] w-24 opacity-[0.03]" viewBox="0 0 100 200"><path d="M50,0 Q80,50 50,100 Q20,150 50,200" stroke="#FDB813" strokeWidth="3" fill="none" /></svg>
        <svg className="absolute bottom-[15%] left-[5%] w-12 opacity-[0.04]" viewBox="0 0 50 50"><circle cx="25" cy="25" r="22" stroke="#981F1F" strokeWidth="2" fill="none" strokeDasharray="6 4" /></svg>
        {/* Graduation cap SVG */}
        <svg className="absolute bottom-10 right-[6%] w-16 sm:w-20 opacity-[0.04]" viewBox="0 0 100 80" fill="none">
          <polygon points="50,10 95,35 50,55 5,35" stroke="#981F1F" strokeWidth="2.5" />
          <line x1="50" y1="55" x2="50" y2="75" stroke="#981F1F" strokeWidth="2" />
          <path d="M30,42 L30,60 Q50,72 70,60 L70,42" stroke="#981F1F" strokeWidth="2" fill="none" />
        </svg>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-[#981F1F]/10 text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
                {data.subjects.length} {lang === 'hi' ? 'विषय' : 'Subjects'} · {data.subjects.reduce((s, sub) => s + sub.chapters.length, 0)} {t.chapters}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] leading-tight">
                {t.chapterBreakdown} <span className="text-[#981F1F]">{t.chapterBreakdownHL}</span>
              </h2>
              <p className="text-[#555] mt-3 max-w-md mx-auto text-base">{t.chapterDesc}</p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            {data.subjects.map((subj, i) => {
              const colors = [
                { bg: 'from-red-50 to-orange-50', border: 'border-red-200', accent: 'bg-[#981F1F]', accentLight: 'bg-[#981F1F]/10', text: 'text-[#981F1F]' },
                { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', accent: 'bg-blue-600', accentLight: 'bg-blue-100', text: 'text-blue-600' },
                { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', accent: 'bg-amber-600', accentLight: 'bg-amber-100', text: 'text-amber-600' },
                { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', accent: 'bg-green-600', accentLight: 'bg-green-100', text: 'text-green-600' },
                { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200', accent: 'bg-purple-600', accentLight: 'bg-purple-100', text: 'text-purple-600' },
              ];
              const c = colors[i % colors.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-r ${c.bg} rounded-2xl border ${c.border} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
                >
                  <button
                    className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between"
                    onClick={() => setOpenSubject(openSubject === i ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${c.accent} flex items-center justify-center text-2xl sm:text-3xl shadow-md`}>
                        <span className="drop-shadow-sm">{subj.icon}</span>
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[#121212] text-lg sm:text-xl">{subj.name}</h3>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className={`text-xs font-semibold ${c.text}`}>{subj.chapters.length} {t.chapters}</span>
                          <span className="text-[#ccc]">·</span>
                          <span className="text-xs font-semibold text-[#888]">{subj.tests}+ {lang === 'hi' ? 'ऑफलाइन' : 'Offline'}</span>
                          <span className="text-[#ccc]">·</span>
                          <span className="text-xs font-semibold text-[#888]">70+ {lang === 'hi' ? 'ऑनलाइन' : 'Online'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`hidden sm:inline-block text-xs font-bold ${c.text} uppercase tracking-wider`}>{t.viewChapters}</span>
                      <span className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openSubject === i ? `${c.accent} text-white rotate-90 shadow-md` : `${c.accentLight} ${c.text}`}`}>
                        <ChevronRight size={18} />
                      </span>
                    </div>
                  </button>
                  <AnimatePresence>
                    {openSubject === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {subj.chapters.map((ch, ci) => (
                              <motion.div
                                key={ci}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: ci * 0.03 }}
                                className="flex items-start gap-3 py-2.5 px-3 rounded-xl bg-white/80 border border-white shadow-sm hover:shadow transition-shadow"
                              >
                                <span className={`flex-shrink-0 w-7 h-7 rounded-lg ${c.accent} text-white text-[11px] font-bold flex items-center justify-center mt-0.5 shadow-sm`}>
                                  {ci + 1}
                                </span>
                                <span className="text-sm text-[#333] leading-snug font-medium">{ch}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing CTA ── */}
      <section className="pb-20 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#121212] rounded-3xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#981F1F]/10 -translate-y-1/2" />
            {/* Floating icons in CTA */}
            <div className="absolute top-6 left-6 text-2xl opacity-20 animate-bounce">📚</div>
            <div className="absolute bottom-6 right-6 text-2xl opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🎯</div>
            <div className="absolute top-8 right-10 text-xl opacity-15 animate-bounce" style={{ animationDelay: '1s' }}>⭐</div>
            <div className="relative z-10">
              <div className="inline-block bg-[#FDB813] text-[#121212] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
                {t.completePackage}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-[1.25]">
                {t.packageHeading}
              </h2>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-extrabold text-[#FDB813]">₹100</span>
                <span className="text-white/60 text-lg">{t.perMonth}</span>
              </div>
              <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
                {t.packageDesc}
              </p>
              {/* Included items */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {[t.inclBook, t.inclLive, t.inclOffline, t.inclOnline].map((item, i) => (
                  <span key={i} className="bg-white/10 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                    ✓ {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#981F1F] text-white font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-[#7a1818] transition-colors flex items-center gap-2 shadow-lg text-base sm:text-lg">
                  {t.enrollNow} <ArrowRight size={18} />
                </button>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2">
                  <Phone size={16} /> {t.askWhatsApp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassPage;
