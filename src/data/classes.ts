// Class and exam series data extracted from App.tsx
// Contains BY_CLASS_SERIES, CLASS_DATA, and BY_EXAM_SERIES constants

export interface BilingualText {
  en: string;
  hi: string;
}

export interface ClassSeriesItem {
  class: string;
  label: BilingualText;
  tests: number;
  badge: BilingualText;
  gradient: string;
  image: string;
  tagline: BilingualText;
}

export interface Subject {
  name: string;
  icon: string;
  chapters: string[];
  tests: number;
}

export interface ClassDetails {
  heroDesc: string;
  subjects: Subject[];
  bookPages: number;
}

export interface ExamSeriesItem {
  exam: string;
  title: string;
  desc: string;
  tests: number;
  badge: string;
  emoji: string;
  gradient: string;
}

export const BY_CLASS_SERIES: ClassSeriesItem[] = [
  { class: '6', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 40, badge: { en: 'CLASS 6', hi: 'क्लास 6' }, gradient: 'from-amber-400 to-orange-500', image: '/students/class6.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '7', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 50, badge: { en: 'CLASS 7', hi: 'क्लास 7' }, gradient: 'from-emerald-400 to-teal-500', image: '/students/class7.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '8', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 60, badge: { en: 'CLASS 8', hi: 'क्लास 8' }, gradient: 'from-blue-400 to-indigo-500', image: '/students/class8.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '9', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 80, badge: { en: 'CLASS 9', hi: 'क्लास 9' }, gradient: 'from-violet-500 to-purple-600', image: '/students/class9.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '10', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 120, badge: { en: 'CLASS 10', hi: 'क्लास 10' }, gradient: 'from-rose-500 to-red-600', image: '/students/class10.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '11', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 150, badge: { en: 'CLASS 11', hi: 'क्लास 11' }, gradient: 'from-[#981F1F] to-[#6B1515]', image: '/students/class11.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
  { class: '12', label: { en: 'History, Geography, Constitution, Science, Static GK', hi: 'इतिहास, भूगोल, संविधान, विज्ञान, स्टैटिक GK' }, tests: 200, badge: { en: 'CLASS 12', hi: 'क्लास 12' }, gradient: 'from-[#121212] to-[#333]', image: '/students/class12.png', tagline: { en: 'Book + 365 Tests + Live Classes', hi: 'किताब + 365 टेस्ट + लाइव क्लास' } },
];

// Detailed class data for individual class pages
export const CLASS_DATA: Record<string, ClassDetails> = {
  '6': {
    heroDesc: 'Where every topper\'s journey begins. Build an unshakable NCERT foundation in History, Geography, Civics, Science & GK — the subjects your school ignores but UPSC demands.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['What, Where, How and When?', 'From Hunting-Gathering to Growing Food', 'In the Earliest Cities', 'What Books and Burials Tell Us', 'Kingdoms, Kings and an Early Republic', 'New Questions and Ideas', 'Ashoka, The Emperor Who Gave Up War', 'Vital Villages, Thriving Towns', 'Traders, Kings and Pilgrims', 'New Empires and Kingdoms', 'Buildings, Paintings and Books'], tests: 8 },
      { name: 'Geography', icon: '🌍', chapters: ['The Earth in the Solar System', 'Globe: Latitudes and Longitudes', 'Motions of the Earth', 'Maps', 'Major Domains of the Earth', 'Major Landforms of the Earth', 'Our Country — India', 'India: Climate, Vegetation and Wildlife'], tests: 8 },
      { name: 'Constitution', icon: '⚖️', chapters: ['Understanding Diversity', 'Diversity and Discrimination', 'What is Government?', 'Key Elements of a Democratic Government', 'Panchayati Raj', 'Rural Administration', 'Urban Administration', 'Rural Livelihoods', 'Urban Livelihoods'], tests: 8 },
      { name: 'Science', icon: '🔬', chapters: ['Food: Where Does It Come From?', 'Components of Food', 'Fibre to Fabric', 'Sorting Materials into Groups', 'Separation of Substances', 'Changes Around Us', 'Getting to Know Plants', 'Body Movements', 'The Living Organisms and Their Surroundings', 'Motion and Measurement of Distances'], tests: 8 },
      { name: 'Static GK', icon: '📊', chapters: ['India: States & Capitals', 'National Symbols', 'Important Days & Events', 'Famous Personalities', 'First in India & World', 'Books & Authors', 'Awards & Honours', 'Basic Indian Geography Facts'], tests: 8 },
    ],
    bookPages: 180,
  },
  '7': {
    heroDesc: 'Concepts deepen. From Medieval India to the Indian Constitution\'s evolution — Class 7 bridges curiosity with real competitive exam thinking.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['Tracing Changes Through a Thousand Years', 'New Kings and Kingdoms', 'The Delhi Sultans', 'The Mughal Empire', 'Rulers and Buildings', 'Towns, Traders and Craftspersons', 'Tribes, Nomads and Settled Communities', 'Devotional Paths to the Divine', 'The Making of Regional Cultures', 'Eighteenth-Century Political Formations'], tests: 10 },
      { name: 'Geography', icon: '🌍', chapters: ['Environment', 'Inside Our Earth', 'Our Changing Earth', 'Air', 'Water', 'Natural Vegetation and Wildlife', 'Human Environment: Settlement, Transport and Communication', 'Human-Environment Interactions: The Tropical and Subtropical Region', 'Life in the Deserts'], tests: 10 },
      { name: 'Constitution', icon: '⚖️', chapters: ['On Equality', 'Role of the Government in Health', 'How the State Government Works', 'Growing Up as Boys and Girls', 'Women Change the World', 'Understanding Media', 'Understanding Advertising', 'Markets Around Us', 'A Shirt in the Market'], tests: 10 },
      { name: 'Science', icon: '🔬', chapters: ['Nutrition in Plants', 'Nutrition in Animals', 'Fibre to Fabric', 'Heat', 'Acids, Bases and Salts', 'Physical and Chemical Changes', 'Weather, Climate and Adaptations', 'Winds, Storms and Cyclones', 'Soil', 'Respiration in Organisms', 'Transportation in Animals and Plants', 'Reproduction in Plants'], tests: 10 },
      { name: 'Static GK', icon: '📊', chapters: ['World: Countries & Capitals', 'International Organisations', 'Indian Rivers & Mountains', 'Important Inventions', 'Sports & Trophies', 'Currencies of the World', 'Famous Monuments', 'Indian Arts & Culture Basics'], tests: 10 },
    ],
    bookPages: 210,
  },
  '8': {
    heroDesc: 'The bridge between basics and boards. Modern Indian History, the Constitution in practice, and advanced Geography — the real competitive exam syllabus starts here.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['How, When and Where', 'From Trade to Territory', 'Ruling the Countryside', 'Tribals, Dikus and the Vision of a Golden Age', 'When People Rebel (1857)', 'Civilising the Native, Educating the Nation', 'Women, Caste and Reform', 'The Making of the National Movement', 'India After Independence'], tests: 12 },
      { name: 'Geography', icon: '🌍', chapters: ['Resources', 'Land, Soil, Water, Natural Vegetation and Wildlife Resources', 'Mineral and Power Resources', 'Agriculture', 'Industries', 'Human Resources'], tests: 12 },
      { name: 'Constitution', icon: '⚖️', chapters: ['The Indian Constitution', 'Understanding Secularism', 'Why Do We Need a Parliament?', 'Understanding Laws', 'Judiciary', 'Understanding Our Criminal Justice System', 'Understanding Marginalisation', 'Confronting Marginalisation'], tests: 12 },
      { name: 'Science', icon: '🔬', chapters: ['Crop Production and Management', 'Microorganisms', 'Synthetic Fibres and Plastics', 'Materials: Metals and Non-Metals', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Cell: Structure and Functions', 'Reproduction in Animals', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current'], tests: 12 },
      { name: 'Static GK', icon: '📊', chapters: ['Indian Freedom Fighters', 'Important Acts & Laws in Indian History', 'UN & Its Agencies', 'Indian Defence', 'Space Missions — India & World', 'Dams & Rivers of India', 'Census & Demographics', 'Current Affairs Framework'], tests: 12 },
    ],
    bookPages: 240,
  },
  '9': {
    heroDesc: 'Competition-level preparation officially begins. French Revolution, Indian Constitution at depth, Climate & Population — the chapters UPSC Prelims directly tests.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['The French Revolution', 'Socialism in Europe and the Russian Revolution', 'Nazism and the Rise of Hitler', 'Forest Society and Colonialism', 'Pastoralists in the Modern World'], tests: 16 },
      { name: 'Geography', icon: '🌍', chapters: ['India — Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wildlife', 'Population'], tests: 16 },
      { name: 'Constitution', icon: '⚖️', chapters: ['What is Democracy? Why Democracy?', 'Constitutional Design', 'Electoral Politics', 'Working of Institutions', 'Democratic Rights'], tests: 16 },
      { name: 'Science', icon: '🔬', chapters: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Why Do We Fall Ill?', 'Natural Resources', 'Improvement in Food Resources'], tests: 16 },
      { name: 'Static GK', icon: '📊', chapters: ['World Wars — Causes & Effects', 'Indian Geography Advanced', 'Constitutional Bodies of India', 'Economic Terms & Concepts', 'Important Committees & Commissions', 'Environmental Conventions', 'Indian Polity Advanced', 'Science & Technology in India'], tests: 16 },
    ],
    bookPages: 280,
  },
  '10': {
    heroDesc: 'Board exams meet competition prep. Nationalism, Federalism, Development Economics — these chapters appear word-for-word in UPSC, NDA, and every state exam.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World'], tests: 24 },
      { name: 'Geography', icon: '🌍', chapters: ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'], tests: 24 },
      { name: 'Constitution', icon: '⚖️', chapters: ['Power Sharing', 'Federalism', 'Democracy and Diversity', 'Gender, Religion and Caste', 'Popular Struggles and Movements', 'Political Parties', 'Outcomes of Democracy', 'Challenges to Democracy'], tests: 24 },
      { name: 'Science', icon: '🔬', chapters: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Periodic Classification of Elements', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity and Evolution', 'Light: Reflection and Refraction', 'Human Eye and Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Sources of Energy', 'Our Environment'], tests: 24 },
      { name: 'Static GK', icon: '📊', chapters: ['Indian Economy Basics', 'Five Year Plans', 'Indian Political System Deep Dive', 'International Relations', 'Environmental Issues & Policies', 'Indian Agriculture Data', 'Transport & Communication', 'Social Issues & Schemes'], tests: 24 },
    ],
    bookPages: 320,
  },
  '11': {
    heroDesc: 'IAS and NDA-level depth begins. Indian Constitution in full, World History, Economic Development, and advanced Geography — this is where serious aspirants separate from the crowd.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['From the Beginning of Time', 'Writing and City Life', 'An Empire Across Three Continents', 'The Central Islamic Lands', 'Nomadic Empires', 'The Three Orders', 'Changing Cultural Traditions', 'Confrontation of Cultures', 'The Industrial Revolution', 'Displacing Indigenous Peoples', 'Paths to Modernisation'], tests: 30 },
      { name: 'Geography', icon: '🌍', chapters: ['Geography as a Discipline', 'The Origin and Evolution of the Earth', 'Interior of the Earth', 'Distribution of Oceans and Continents', 'Minerals and Rocks', 'Geomorphic Processes', 'Landforms and their Evolution', 'Composition and Structure of Atmosphere', 'Solar Radiation, Heat Balance and Temperature', 'Atmospheric Circulation and Weather Systems', 'Water in the Atmosphere', 'World Climate and Climate Change', 'Water (Oceans)', 'Movements of Ocean Water', 'Life on the Earth', 'Biodiversity and Conservation'], tests: 30 },
      { name: 'Constitution', icon: '⚖️', chapters: ['Constitution — Why and How?', 'Rights in the Indian Constitution', 'Election and Representation', 'Executive', 'Legislature', 'Judiciary', 'Federalism', 'Local Governments', 'Constitution as a Living Document', 'The Philosophy of the Constitution'], tests: 30 },
      { name: 'Science', icon: '🔬', chapters: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Transport in Plants', 'Mineral Nutrition', 'Photosynthesis', 'Respiration in Plants', 'Plant Growth and Development', 'Digestion and Absorption', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'], tests: 30 },
      { name: 'Static GK', icon: '📊', chapters: ['Indian Polity — Complete Framework', 'World Geography Advanced', 'Indian Economy — Macro Concepts', 'Science & Technology Current', 'Art & Culture of India', 'Modern Indian History — Advanced', 'International Organisations Deep Dive', 'Ethics & Governance Basics'], tests: 30 },
    ],
    bookPages: 380,
  },
  '12': {
    heroDesc: 'The final year. Cold War, Indian Politics since Independence, Contemporary World Politics, Human Geography — the exact syllabus of UPSC Mains GS papers. Finish this, and you\'re exam ready.',
    subjects: [
      { name: 'History', icon: '📜', chapters: ['Bricks, Beads and Bones', 'Kings, Farmers and Towns', 'Kinship, Caste and Class', 'Thinkers, Beliefs and Buildings', 'Through the Eyes of Travellers', 'Bhakti-Sufi Traditions', 'An Imperial Capital: Vijayanagara', 'Peasants, Zamindars and the State', 'Kings and Chronicles: The Mughal Courts', 'Colonialism and the Countryside', 'Rebels and the Raj', 'Colonial Cities', 'Mahatma Gandhi and the Nationalist Movement', 'Understanding Partition', 'Framing the Constitution'], tests: 40 },
      { name: 'Geography', icon: '🌍', chapters: ['Human Geography: Nature and Scope', 'The World Population: Distribution, Density and Growth', 'Population Composition', 'Human Development', 'Primary Activities', 'Secondary Activities', 'Tertiary and Quaternary Activities', 'Transport and Communication', 'International Trade', 'Human Settlements'], tests: 40 },
      { name: 'Constitution', icon: '⚖️', chapters: ['The Cold War Era', 'The End of Bipolarity', 'US Hegemony in World Politics', 'Alternative Centres of Power', 'Contemporary South Asia', 'International Organisations', 'Security in the Contemporary World', 'Environment and Natural Resources', 'Globalisation', 'Era of One-Party Dominance', 'Challenges of Nation Building', 'Politics of Planned Development', 'India\'s External Relations', 'Challenges to and Restoration of the Congress System', 'Rise of Popular Movements', 'Regional Aspirations', 'Recent Developments in Indian Politics'], tests: 40 },
      { name: 'Science', icon: '🔬', chapters: ['Reproduction in Organisms', 'Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Strategies for Enhancement in Food Production', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation', 'Environmental Issues'], tests: 40 },
      { name: 'Static GK', icon: '📊', chapters: ['UPSC Prelims GS Pattern', 'Indian History — Complete Timeline', 'World Politics & Relations', 'Indian Economy — Budget & Policy', 'Geography — Map-Based Questions', 'Governance & Social Justice', 'Disaster Management', 'Internal Security Basics', 'Ethics Case Studies Intro'], tests: 40 },
    ],
    bookPages: 420,
  },
};

export const BY_EXAM_SERIES: ExamSeriesItem[] = [
  { exam: 'UPSC', title: 'UPSC Foundation Series', desc: 'The same NCERT foundation every IAS topper builds. Start from Class 6 level — reach Prelims level.', tests: 120, badge: 'UPSC', emoji: '🏛️', gradient: 'from-[#981F1F] to-[#6B1515]' },
  { exam: 'NDA', title: 'NDA Complete Test Series', desc: 'GS holds 400/900 marks in NDA. Our tests cover the exact NCERT chapters that NDA actually asks.', tests: 80, badge: 'NDA', emoji: '🏖️', gradient: 'from-emerald-600 to-emerald-800' },
  { exam: 'CUET', title: 'CUET Subject-wise Series', desc: 'Domain-specific tests for History, Geography, Political Science & General Studies sections of CUET.', tests: 150, badge: 'CUET', emoji: '🎓', gradient: 'from-indigo-600 to-indigo-800' },
];
