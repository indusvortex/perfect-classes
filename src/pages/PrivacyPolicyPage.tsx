import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight } from 'lucide-react';

function PrivacyPolicyPage() {
  const lastUpdated = 'March 2026';
  const sections = [
    {
      title: '1. Information We Collect',
      content: `When you register or use our platform, we may collect the following information:

• **Personal Identification:** Name, email address, phone number, and date of birth.
• **Academic Information:** Class, stream, target exam, and performance data from tests taken on our platform.
• **Payment Information:** Transaction details processed securely through third-party payment gateways. We do not store card or banking information.
• **Usage Data:** Pages visited, test attempts, time spent, device type, IP address, and browser type.
• **Communications:** Messages or enquiries you send to our support team.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information collected to:

• Provide and improve our test series and educational services.
• Personalise your learning experience and generate performance reports.
• Send important updates, course notifications, and result alerts.
• Process payments and send transaction confirmations.
• Respond to your queries and provide customer support.
• Analyse usage patterns to improve platform performance.
• Comply with legal obligations.`,
    },
    {
      title: '3. Sharing of Information',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your data in the following limited circumstances:

• **Service Providers:** With trusted partners (e.g., payment processors, hosting providers) who assist in operating our platform, subject to confidentiality agreements.
• **Legal Requirements:** When required by law, court order, or government authority.
• **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your data may be transferred with appropriate notice.`,
    },
    {
      title: '4. Data Security',
      content: `We implement industry-standard security measures to protect your personal information:

• SSL/TLS encryption for all data transmission.
• Secure, access-controlled servers for data storage.
• Regular security audits and vulnerability assessments.
• Restricted access to personal data on a need-to-know basis.

While we strive to protect your data, no method of internet transmission is 100% secure. We encourage you to use strong passwords and keep your login credentials confidential.`,
    },
    {
      title: '5. Cookies',
      content: `We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us:

• Keep you logged in during your session.
• Remember your preferences and settings.
• Analyse traffic and usage patterns.
• Deliver relevant content.

You can control or disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain features.`,
    },
    {
      title: '6. Children\'s Privacy',
      content: `Our platform is designed for students of Class 6 and above. We do not knowingly collect personal information from children under 13 years of age without verifiable parental consent. If you are a parent or guardian and believe your child has provided personal information, please contact us immediately at info@perfectclassesnoorpur.com and we will take appropriate action.`,
    },
    {
      title: '7. Your Rights',
      content: `You have the following rights regarding your personal data:

• **Access:** Request a copy of the personal data we hold about you.
• **Correction:** Request correction of inaccurate or incomplete information.
• **Deletion:** Request deletion of your account and associated data, subject to legal retention requirements.
• **Opt-Out:** Unsubscribe from marketing communications at any time via the link in our emails.

To exercise any of these rights, contact us at info@perfectclassesnoorpur.com.`,
    },
    {
      title: '8. Third-Party Links',
      content: `Our website may contain links to third-party websites (e.g., Graphy course platform, social media pages). We are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies before providing any personal information.`,
    },
    {
      title: '9. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify registered users of significant changes via email or a notice on our platform. The "Last Updated" date at the top of this page will always reflect the most recent version.`,
    },
    {
      title: '10. Contact Us',
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:

• **Email:** info@perfectclassesnoorpur.com
• **Phone:** +91 98765 43210
• **Address:** Perfect Classes, Noorpur, Bijnor District, Uttar Pradesh, India`,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] pt-32 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#FFF1F1] text-[#981F1F] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-[#981F1F]/20">
            <Shield size={12} /> Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-3">Privacy <span className="text-[#981F1F]">Policy</span></h1>
          <p className="text-[#555] text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-[#FFF1F1] border border-[#981F1F]/20 rounded-2xl p-6 mb-10">
          <p className="text-[#555] text-sm leading-relaxed">
            Perfect Classes ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website at <strong>perfectclassesnoorpur.com</strong> and our associated test series platform. By using our services, you agree to the terms described in this policy.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-bold text-[#121212] mb-4">{s.title}</h2>
              <div className="text-sm text-[#555] leading-relaxed whitespace-pre-line">
                {s.content.split('\n').map((line, j) => {
                  const trimmed = line.trim();
                  if (trimmed.startsWith('•')) {
                    return <p key={j} className="mb-1 pl-2">{trimmed}</p>;
                  }
                  if (trimmed === '') return <br key={j} />;
                  return <p key={j} className="mb-2">{trimmed}</p>;
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center gap-2 bg-[#981F1F] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#7a1818] transition-colors shadow-lg">
            <ArrowRight className="rotate-180" size={18} /> Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
