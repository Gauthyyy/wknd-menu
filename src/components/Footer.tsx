import React from 'react';
import { MapPin, Phone, Instagram, Navigation, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Footer: React.FC = () => {
  const { setIsLocationModalOpen } = useCart();
  const mapsUrl = "https://maps.google.com/?q=Potheri+SRM+Campus+Chennai";

  return (
    <footer className="mt-20 border-t border-white/10 bg-wknd-surfaceDark/90 backdrop-blur-lg pt-12 pb-24 sm:pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-wknd-yellow/20 border border-wknd-yellow/40 flex items-center justify-center font-headline font-black text-wknd-yellow text-xl shadow-neon">
              W
            </div>
            <span className="font-headline font-black text-2xl tracking-tight text-white neon-text-glow">
              WKND
            </span>
          </div>

          <p className="text-wknd-mutedText text-xs sm:text-sm leading-relaxed max-w-sm">
            Your ultimate late-night food spot in Potheri. Delicious rolls, burgers, kulukki, mojitos, and thick shakes delivered straight to your SRM hostel room!
          </p>

          <div className="flex items-center space-x-2 text-xs font-mono text-wknd-yellow">
            <Sparkles className="w-4 h-4" />
            <span>Open Late Night • 4:00 PM – 3:00 AM</span>
          </div>
        </div>

        {/* Quick Links & Location */}
        <div className="space-y-3">
          <h4 className="font-headline font-bold text-sm text-wknd-yellow uppercase tracking-wider">
            Location & Contact
          </h4>
          
          <ul className="space-y-2.5 text-xs text-wknd-mutedText">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-wknd-yellow shrink-0 mt-0.5" />
              <span>Potheri, Kattankulathur, Chennai (Near SRM Campus Gate)</span>
            </li>
            
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-wknd-yellow shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <Instagram className="w-4 h-4 text-wknd-yellow shrink-0" />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @wknd_potheri
              </a>
            </li>
          </ul>
        </div>

        {/* Action CTAs */}
        <div className="space-y-3">
          <h4 className="font-headline font-bold text-sm text-wknd-yellow uppercase tracking-wider">
            Quick Actions
          </h4>

          <div className="space-y-2">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-headline font-bold flex items-center justify-between transition-all"
            >
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-wknd-yellow" />
                <span>Open in Google Maps</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-wknd-mutedText" />
            </a>

            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-headline font-bold flex items-center justify-between transition-all text-left"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-wknd-yellow" />
                <span>View Outlet Timing & Info</span>
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-wknd-purpleText space-y-2 sm:space-y-0">
        <p>© {new Date().getFullYear()} WKND Digital Menu Portal • Potheri, Chennai</p>
        <p className="flex items-center space-x-1">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for SRM Campus Foodies</span>
        </p>
      </div>
    </footer>
  );
};
