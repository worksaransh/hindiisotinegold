
import React, { useState, useEffect } from 'react';
import { generateProductImage, generatePortraitImage } from '../services/geminiService';

interface GeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  aspect?: 'landscape' | 'portrait';
}

const GeneratedImage: React.FC<GeneratedImageProps> = ({ prompt, alt, className = "", aspect = 'landscape' }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      const url = aspect === 'landscape' 
        ? await generateProductImage(prompt)
        : await generatePortraitImage(prompt);
      setImageUrl(url);
      setLoading(false);
    };
    fetchImage();
  }, [prompt, aspect]);

  if (loading) {
    return (
      <div className={`bg-gray-200 animate-pulse flex items-center justify-center rounded-lg overflow-hidden ${className} ${aspect === 'landscape' ? 'aspect-video' : 'aspect-[9/16]'}`}>
        <span className="text-gray-400 text-sm italic">दृश्य तैयार हो रहा है...</span>
      </div>
    );
  }

  if (!imageUrl) {
    // Fallback to picsum if API fails
    const fallback = aspect === 'landscape' 
      ? `https://picsum.photos/seed/${encodeURIComponent(prompt.slice(0, 10))}/800/450`
      : `https://picsum.photos/seed/${encodeURIComponent(prompt.slice(0, 10))}/450/800`;
    
    return (
      <img src={fallback} alt={alt} className={`rounded-lg object-cover ${className}`} />
    );
  }

  return (
    <img src={imageUrl} alt={alt} className={`rounded-lg object-cover ${className}`} />
  );
};

export default GeneratedImage;
