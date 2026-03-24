import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';

function TermsOfUsePage() {
  const lastUpdated = 'March 2026';
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Perfect Classes website (perfectclassesnoorpur.com) and its associated services, you confirm that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our platform.

These terms apply to all users including students, parents, and guardians.`,
    },
    {
      title: '2. About Perfect Classes',
      content: `Perfect Classes is an educational platform based in Noorpur, Uttar Pradesh, India, that provides test series, study materials, and coaching for students of Class 6–12 and competitive exam aspirants (NDA, CUET, Agniveer, and others). Content is delivered through our website and integrated third-party platforms.`,
    },
    {
      title: '3. User Accounts',
      content: `• You must provide accurate and complete information when creating an account.
• You are responsible for maintaining the confidentiality of your login credentials.
• You must not share your account with others or allow multiple users to access a single account.
• You must notify us immediately at info@perfectclassesnoorpur.com if you suspect unauthorised access to your account.
• We reserve the right to suspend or terminate accounts that violate these terms.`,
    },
    {
      title: '4. Use of the Platform',
      content: `You agree to use Perfect Classes only for lawful educational purposes. You must NOT:

• Copy, reproduce, distribute, or resell any test questions, answers, or content from our platform.
• Attempt to gain unauthorised access to any part of the platform or its systems.
• Use automated tools, bots, or scripts to access or scrape content.
• Impersonate any person or entity, including Perfect Classes staff.
• Post or transmit any content that is offensive, harmful, or violates any applicable law.
• Use the platform for any commercial purpose without our written consent.`,
    },
    {
      title: '5. Intellectual Property',
      content: `All content on the Perfect Classes platform — including test questions, study materials, graphics, logos, videos, and text — is the exclusive intellectual property of Perfect Classes or its licensors.

You are granted a limited, non-exclusive, non-transferable licence to access and use the content solely for your personal educational purposes. Any unauthorised use, reproduction, or distribution of our content is strictly prohibited and may result in legal action.`,
    },
    {
      title: '6. Payments and Refunds',
      content: `• All fees for test series, courses, or subscriptions are displayed clearly before purchase.
• Payments are processed securely through authorised third-party payment gateways.
• Once a course or test series is activated and accessed, refunds will not be provided unless the content is found to be materially defective.
• Refund requests must be raised within 48 hours of purchase by contacting info@perfectclassesnoorpur.com.
• We reserve the right to modify pricing at any time, with prior notice for existing subscribers.`,
    },
    {
      title: '7. Disclaimer of Warranties',
      content: `Perfect Classes provides its platform and content on an "as is" and "as available" basis. While we make every effort to ensure accuracy and quality, we do not guarantee:

• That the platform will be uninterrupted or error-free at all times.
• That test content will guarantee a particular score or exam result.
• That all information is completely up-to-date at all times.

Use of our platform is at your own risk. We are not liable for any academic outcomes or exam results.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `To the fullest extent permitted by applicable law, Perfect Classes shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of (or inability to use) our platform, including but not limited to loss of data, loss of revenue, or loss of opportunity.

Our total liability in any matter shall not exceed the amount you paid for the specific service in question.`,
    },
    {
      title: '9. Third-Party Services',
      content: `Our platform integrates with third-party services (such as Graphy for course delivery and payment gateways for transactions). These services have their own terms of service and privacy policies. Perfect Classes is not responsible for the practices or content of these third-party providers.`,
    },
    {
      title: '10. Termination',
      content: `We reserve the right to suspend or permanently terminate your access to the platform, without prior notice, if you:

• Violate any of these Terms of Use.
• Engage in fraudulent, abusive, or harmful behaviour.
• Attempt to compromise the integrity of our tests or platform.

Upon termination, your right to access the platform ceases immediately. You may contact us at info@perfectclassesnoorpur.com to appeal a termination decision.`,
    },
    {
      title: '11. Governing Law',
      content: `These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bijnor District, Uttar Pradesh, India.`,
    },
    {
      title: '12. Changes to Terms',
      content: `We may revise these Terms of Use at any time. Updated terms will be posted on this page with a revised "Last Updated" date. Continued use of our platform after changes are posted constitutes your acceptance of the revised terms. We recommend reviewing this page periodically.`,
    },
    {
      title: '13. Contact',
      content: `For any questions regarding these Terms of Use, please contact us:

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
            <FileText size={12} /> Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121212] mb-3">Terms of <span className="text-[#981F1F]">Use</span></h1>
          <p className="text-[#555] text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-[#FFF1F1] border border-[#981F1F]/20 rounded-2xl p-6 mb-10">
          <p className="text-[#555] text-sm leading-relaxed">
            Please read these Terms of Use carefully before using the Perfect Classes platform. These terms constitute a legally binding agreement between you and Perfect Classes regarding your use of our website and services.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-bold text-[#121212] mb-4">{s.title}</h2>
              <div className="text-sm text-[#555] leading-relaxed">
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

export default TermsOfUsePage;
