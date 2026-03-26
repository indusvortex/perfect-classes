import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import HeroSection from '@/components/ui/hero-section-9';
import { useLang, T } from '@/i18n/translations';
import { Users, BookOpen, Trophy } from 'lucide-react';
import { useEffect } from 'react';

// Main Hero with Scroll Expansion Video
export function ScrollVideoHero() {
  const { lang } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className='min-h-screen'>
      <ScrollExpandMedia
        mediaType='video'
        mediaSrc='https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID' // Replace with your YouTube video ID
        bgImageSrc='/hero/video-thumb.jpg' // Your existing background
        title={`${T[lang].heading1} ${T[lang].heading2}`}
        date={T[lang].badge}
        scrollToExpand={lang === 'hi' ? 'स्क्रॉल करें विस्तार के लिए' : 'Scroll to Expand'}
        textBlend
      >
        {/* Content that appears after video expands */}
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold mb-6 text-[#121212]'>
            {lang === 'hi' ? 'परफेक्ट क्लासेज के बारे में' : 'About Perfect Classes'}
          </h2>
          <p className='text-lg mb-8 text-[#555]'>
            {T[lang].subtitle}
          </p>
          <p className='text-lg mb-8 text-[#555]'>
            {lang === 'hi'
              ? 'विपिन सर के मार्गदर्शन में, हम ग्रामीण भारत के छात्रों को UPSC की तैयारी के लिए सशक्त बना रहे हैं। कक्षा 6 से ही शुरुआत करें और एक उज्ज्वल भविष्य बनाएं।'
              : "Under Vipin Sir's guidance, we're empowering students from rural India to prepare for UPSC from Class 6 onwards. Start early, dream big, achieve greatness."}
          </p>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}

// Alternative: Traditional Hero Section with Stats
export function TraditionalHero() {
  const { lang } = useLang();

  const heroData = {
    title: (
      <>
        {T[lang].heading1} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#981F1F] via-[#B52A2A] to-[#981F1F]">
          {T[lang].heading2}
        </span>
      </>
    ),
    subtitle: T[lang].subtitle,
    actions: [
      {
        text: T[lang].ctaJoin,
        onClick: () => window.location.href = '/#classes',
        variant: 'default' as const,
      },
      {
        text: lang === 'hi' ? 'और जानें' : 'Learn More',
        onClick: () => window.location.href = '/mission',
        variant: 'outline' as const,
      },
    ],
    stats: [
      {
        value: '5,000+',
        label: lang === 'hi' ? 'सक्रिय छात्र' : 'Active Students',
        icon: <Users className="h-5 w-5 text-[#981F1F]" />,
      },
      {
        value: '200+',
        label: lang === 'hi' ? 'गाँव' : 'Villages',
        icon: <Trophy className="h-5 w-5 text-[#FDB813]" />,
      },
      {
        value: '₹100',
        label: lang === 'hi' ? 'प्रति माह' : 'Per Month',
        icon: <BookOpen className="h-5 w-5 text-[#121212]" />,
      },
    ],
    images: [
      '/hero/gaon.jpg', // Village roots image (top)
      '/hero/gaon.jpg', // Same village image for Junior IAS (bottom)
    ],
  };

  return (
    <HeroSection
      title={heroData.title}
      subtitle={heroData.subtitle}
      actions={heroData.actions}
      stats={heroData.stats}
      images={heroData.images}
      className="bg-white"
    />
  );
}

// Default export - Scroll Video Hero
const PerfectClassesHero = ScrollVideoHero;

export default PerfectClassesHero;
