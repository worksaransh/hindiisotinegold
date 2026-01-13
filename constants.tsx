
import React from 'react';
import { Ingredient, FAQItem, PricingPlan } from './types';

export const HERO_CONTENT = {
  headline: "उम्र के साथ आंखों की कमजोरी को अब कहें अलविदा",
  subheadline: "ऑप्टिक नर्व को सही पोषण दें और अपनी दृष्टि की शक्ति को फिर से जगाएं।",
  benefits: [
    "ऑप्टिक नर्व को अंदरूनी पोषण",
    "धुंधलेपन और तनाव से राहत",
    "100% सुरक्षित आयुर्वेदिक फॉर्मूला",
    "WHO GMP और आयुष प्रमाणित"
  ],
  cta: "अभी ऑर्डर करें"
};

export const PROBLEM_SECTION = {
  title: "क्या 30 के बाद आपकी आँखों की रोशनी कम हो रही है?",
  description: "जैसे-जैसे हमारी उम्र बढ़ती है, हमारी आँखों की नसों (Optic Nerve) को मिलने वाला पोषण कम होने लगता है। इससे धुंधलापन, रंगों की पहचान में कमी और मोबाइल-लैपटॉप के इस्तेमाल से आँखों में भारीपन महसूस होता है। आप अकेले नहीं हैं, लाखों भारतीय इसी समस्या का सामना कर रहे हैं।",
};

export const SOLUTION_SECTION = {
  title: "पेश है आइसोटिन गोल्ड (Isotine Gold)",
  description: "यह केवल सामान्य आई ड्रॉप्स नहीं है। यह विशेष रूप से ऑप्टिक नर्व के पोषण के लिए बनाया गया एक प्रीमियम आयुर्वेदिक समाधान है। यह आपकी आँखों को वह शक्ति देता है जिसकी उन्हें इस उम्र में सबसे अधिक आवश्यकता है।",
};

export const INGREDIENTS: Ingredient[] = [
  { name: "लोध्र (Lodhra)", benefit: "आँखों के तनाव को कम करने में सहायक।" },
  { name: "आंवला (Amla)", benefit: "विटामिन सी से भरपूर, दृष्टि में सुधार लाता है।" },
  { name: "चंदन (Chandan)", benefit: "आँखों को शीतलता और आराम प्रदान करता है।" },
  { name: "पुनर्नवा (Punarnava)", benefit: "नसों की कमजोरी को दूर करने में मददगार।" },
  { name: "पलाश (Palash)", benefit: "आँखों की चमक और स्पष्टता को बढ़ाता है।" }
];

export const FAQS: FAQItem[] = [
  {
    question: "क्या यह पूरी तरह सुरक्षित है?",
    answer: "हाँ, यह 100% आयुर्वेदिक है और WHO GMP व आयुष मंत्रालय द्वारा प्रमाणित सुविधाओं में बनाया गया है। इसके कोई ज्ञात दुष्प्रभाव नहीं हैं।"
  },
  {
    question: "परिणाम कब तक दिखेंगे?",
    answer: "हर व्यक्ति का शरीर अलग होता है, लेकिन नियमित उपयोग से 4-8 हफ्तों में बेहतर दृष्टि और कम तनाव महसूस होने लगता है।"
  },
  {
    question: "क्या मैं इसे चश्मे के साथ इस्तेमाल कर सकता हूँ?",
    answer: "बिल्कुल, यह चश्मे या कांटेक्ट लेंस के साथ इस्तेमाल किया जा सकता है। यह आँखों के प्राकृतिक स्वास्थ्य में सुधार करता है।"
  },
  {
    question: "इसे दिन में कितनी बार डालना चाहिए?",
    answer: "दिन में दो बार (सुबह और रात को सोते समय) 1-1 बूंद दोनों आँखों में डालने की सलाह दी जाती है।"
  }
];

export const PRICING: PricingPlan[] = [
  {
    title: "बेस्ट वैल्यू पैक",
    price: "₹1,499",
    originalPrice: "₹2,100",
    discount: "30% OFF",
    isBestSeller: true,
    contents: "3 आई ड्रॉप्स + 1 कैप्सूल डिब्बी (60 दिन का कोर्स)"
  },
  {
    title: "ट्रायल पैक",
    price: "₹599",
    originalPrice: "₹750",
    discount: "20% OFF",
    isBestSeller: false,
    contents: "1 आई ड्रॉप + 1 कैप्सूल स्ट्रिप (15 दिन का कोर्स)"
  }
];

export const PROMPTS = {
  hero: "A premium, realistic healthcare banner showing an Indian man and woman aged 45–55 with calm, confident expressions and clear eyes. A soft golden glow around the eyes symbolizing optic nerve strength. In the center, a realistic Isotine Gold Eye Drops bottle with a subtle gold aura. Clean white background with light Ayurvedic textures. Ultra-realistic, professional e-commerce style.",
  problem: "A realistic Indian man aged 50 squinting at his phone with mild eye strain. Natural indoor lighting, relatable home environment, no exaggeration.",
  solution: "Clean product-focused image of Isotine Gold Eye Drops bottle on white surface with blurred Ayurvedic herbs in background and gentle golden light.",
  nerve: "Semi-realistic medical illustration of a human eye with optic nerve softly glowing gold. Simple, educational, easy to understand.",
  ingredients: "Premium Ayurvedic composition showing Lodhra, Amla, Chandan, Punarnava, Palash arranged around the product bottle. Natural textures, studio lighting, clean background.",
  dualCare: "Isotine Gold Eye Drops and Isoneuron Capsules shown together with subtle visual flow connecting eyes and brain nerves.",
  howToUse: "Realistic instructional image of an Indian adult applying eye drops correctly, clean and hygienic setup.",
  happyUsers: "Happy Indian users aged 40–60 with relaxed, confident expressions and clear vision, outdoor sunlight.",
  finalCta: "Conversion-focused banner with Isotine Gold bottle glowing softly, mature Indian users smiling confidently in background."
};
