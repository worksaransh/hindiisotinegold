
import React from 'react';
import GeneratedImage from './components/GeneratedImage';
import { 
  HERO_CONTENT, 
  PROBLEM_SECTION, 
  SOLUTION_SECTION, 
  INGREDIENTS, 
  FAQS, 
  PRICING, 
  PROMPTS 
} from './constants';

const App: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-10 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {HERO_CONTENT.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              {HERO_CONTENT.subheadline}
            </p>
            <ul className="space-y-3">
              {HERO_CONTENT.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700">
                  <span className="text-gold">✔</span> {benefit}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 py-4">
              <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-500">WHO GMP</span>
              <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-500">AYUSH Certified</span>
              <span className="bg-gray-50 border border-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-500">Doctor Curated</span>
            </div>
            <button 
              onClick={scrollToPricing}
              className="gold-gradient w-full md:w-auto px-10 py-4 rounded-full text-white font-bold text-lg hover:shadow-xl transition shadow-lg"
            >
              {HERO_CONTENT.cta}
            </button>
          </div>
          <div className="order-1 md:order-2">
            <GeneratedImage prompt={PROMPTS.hero} alt="Vision Banner" className="w-full shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 2. PROBLEM AWARENESS */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">{PROBLEM_SECTION.title}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <p className="text-lg text-gray-600 leading-relaxed">
              {PROBLEM_SECTION.description}
            </p>
            <GeneratedImage prompt={PROMPTS.problem} alt="Eye Strain" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* 3. SOLUTION INTRODUCTION */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <GeneratedImage prompt={PROMPTS.solution} alt="Isotine Gold Bottle" className="w-full" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">{SOLUTION_SECTION.title}</h2>
            <p className="text-lg text-gray-600">{SOLUTION_SECTION.description}</p>
            <div className="p-4 glass-card rounded-xl">
              <p className="font-medium text-gold italic">"हमारी दृष्टि न केवल हमारी आँखों पर, बल्कि हमारी नसों की मजबूती पर निर्भर करती है।"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDUCATION - OPTIC NERVE */}
      <section className="py-20 px-6 md:px-12 bg-[#FCFBF7]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">ऑप्टिक नर्व (Optic Nerve) का महत्व समझें</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center text-left">
            <div className="space-y-4">
              <p className="text-gray-600">ऑप्टिक नर्व वह 'केबल' है जो आपकी आँखों से संकेतों को मस्तिष्क तक पहुँचाती है।</p>
              <p className="text-gray-600">उम्र बढ़ने के साथ, यह केबल कमजोर होने लगती है। आइसोटिन गोल्ड इसी नर्व को सीधा पोषण देता है, जिससे दृष्टि स्पष्ट और मजबूत बनी रहती है।</p>
            </div>
            <GeneratedImage prompt={PROMPTS.nerve} alt="Optic Nerve Education" className="w-full" />
          </div>
        </div>
      </section>

      {/* 5. KEY BENEFITS ICON GRID */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">मुख्य लाभ (Benefits)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "👁️", title: "उम्र-संबंधी सहायता" },
              { icon: "⚡", title: "नसों का पोषण" },
              { icon: "🌈", title: "बेहतर रंग स्पष्टता" },
              { icon: "📱", title: "डिजिटल तनाव से मुक्ति" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl text-center space-y-3 border border-gray-100">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INGREDIENTS SECTION */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">शक्तिशाली आयुर्वेदिक जड़ी-बूटियाँ</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {INGREDIENTS.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-gold">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.benefit}</p>
                </div>
              ))}
            </div>
            <GeneratedImage prompt={PROMPTS.ingredients} alt="Ayurvedic Ingredients" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* 7. INSIDE-OUTSIDE CARE */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <GeneratedImage prompt={PROMPTS.dualCare} alt="Drops and Capsules" className="w-full" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">दोहरी सुरक्षा: अंदर और बाहर से</h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>आइसोटिन गोल्ड ड्रॉप्स:</strong> बाहरी सफाई और तुरंत राहत के लिए।</p>
              <p><strong>आइसोन्यूरोन कैप्सूल्स:</strong> नसों की मजबूती और मस्तिष्क के बेहतर संकेतों के लिए।</p>
              <p className="text-gold font-bold">एक साथ इस्तेमाल करने पर मिलता है 2X बेहतर परिणाम!</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW TO USE */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">उपयोग करने का तरीका</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
             <div className="text-left space-y-4">
               <div className="flex gap-4 items-start">
                 <span className="bg-gold text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</span>
                 <p className="text-gray-700">अपनी आँखें और हाथ साफ पानी से धोएं।</p>
               </div>
               <div className="flex gap-4 items-start">
                 <span className="bg-gold text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</span>
                 <p className="text-gray-700">आराम से लेट जाएं या बैठें और सिर पीछे करें।</p>
               </div>
               <div className="flex gap-4 items-start">
                 <span className="bg-gold text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">3</span>
                 <p className="text-gray-700">दोनों आँखों में 1-1 बूंद आइसोटिन गोल्ड डालें।</p>
               </div>
               <div className="flex gap-4 items-start">
                 <span className="bg-gold text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0">4</span>
                 <p className="text-gray-700">2-3 मिनट के लिए आँखें बंद रखें ताकि दवाई नसों तक पहुँचे।</p>
               </div>
             </div>
             <GeneratedImage prompt={PROMPTS.howToUse} alt="How to use" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* 9. WHO SHOULD USE IT */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <GeneratedImage prompt={PROMPTS.happyUsers} alt="Happy Users" className="w-full rounded-2xl shadow-xl" />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">यह किसके लिए है?</h2>
            <ul className="space-y-4">
              {[
                "30+ आयु के पुरुष और महिलाएं",
                "जिनकी दृष्टि धुंधली हो रही है",
                "मोबाइल और लैपटॉप का अधिक उपयोग करने वाले",
                "बुढ़ापे में आँखों की रोशनी सुरक्षित रखने के इच्छुक"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center text-gray-700">
                  <span className="text-green-500 text-xl">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. PRICING SECTION */}
      <section id="pricing" className="py-20 px-6 md:px-12 bg-gold/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">अपना सही पैक चुनें</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {PRICING.map((plan, idx) => (
              <div key={idx} className={`relative bg-white p-8 rounded-3xl border-2 transition hover:shadow-2xl ${plan.isBestSeller ? 'border-gold' : 'border-gray-100'}`}>
                {plan.isBestSeller && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-white px-6 py-1 rounded-full text-sm font-bold">
                    सर्वाधिक लोकप्रिय
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{plan.contents}</p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                  <span className="text-green-600 font-bold text-sm">{plan.discount}</span>
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition ${plan.isBestSeller ? 'gold-gradient text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  अभी ऑर्डर करें
                </button>
                <p className="text-center text-xs text-gray-400 mt-4 italic">फ्री डिलीवरी उपलब्ध | कैश ऑन डिलीवरी</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. TRUST & AUTHORITY */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-bold">भरोसा जो समय की कसौटी पर खरा उतरा</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-70">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🛡️</span>
              <span className="text-xs font-bold">WHO GMP Certified</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🌿</span>
              <span className="text-xs font-bold">AYUSH Ministry</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">👨‍⚕️</span>
              <span className="text-xs font-bold">Doctor Trusted</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">🚫</span>
              <span className="text-xs font-bold">Non-Habit Forming</span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">अक्सर पूछे जाने वाले सवाल (FAQs)</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="bg-white p-6 rounded-xl shadow-sm cursor-pointer group">
                <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-gold transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. MEDICAL DISCLAIMER */}
      <section className="py-10 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-400 italic leading-loose">
            <strong>महत्वपूर्ण सूचना:</strong> यह उत्पाद एक आयुर्वेदिक वेलनेस सप्लीमेंट है। यह किसी भी गंभीर चिकित्सा स्थिति या बीमारी के पूर्ण उपचार का दावा नहीं करता है। दृष्टि संबंधी किसी भी गंभीर समस्या के लिए हमेशा अपने नेत्र रोग विशेषज्ञ (Doctor) से परामर्श लें। व्यक्तिगत परिणाम भिन्न हो सकते हैं।
          </p>
        </div>
      </section>

      {/* 14. FINAL CTA SECTION */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <GeneratedImage prompt={PROMPTS.finalCta} alt="Happy Aging" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">अपनी आँखों को वह प्यार दें जिसकी उन्हें जरूरत है।</h2>
          <p className="text-lg md:text-xl text-gray-300">उम्र के साथ दृष्टि का कमजोर होना अनिवार्य नहीं है। सही पोषण के साथ आप अपनी आँखों की रोशनी को सुरक्षित रख सकते हैं।</p>
          <button 
            onClick={scrollToPricing}
            className="gold-gradient px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-transform"
          >
            अभी अपना पैक चुनें
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <div className="text-2xl font-bold tracking-tighter text-gray-800">ISOTINE <span className="text-gold">GOLD</span></div>
          <p className="text-sm text-gray-500">© 2024 Isotine Eye Care. सभी अधिकार सुरक्षित।</p>
          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 sticky-cta bg-white z-50">
        <button 
          onClick={scrollToPricing}
          className="w-full gold-gradient py-4 rounded-xl text-white font-bold text-lg shadow-lg"
        >
          अभी ऑर्डर करें - 30% तक की बचत
        </button>
      </div>
    </div>
  );
};

export default App;
