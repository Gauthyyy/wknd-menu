import React from 'react';
import { X, MapPin, Clock, Phone, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const LocationModal: React.FC = () => {
  const { isLocationModalOpen, setIsLocationModalOpen } = useCart();

  if (!isLocationModalOpen) return null;

  const mapsUrl = "https://maps.google.com/?q=Potheri+SRM+Campus+Chennai";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsLocationModalOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Content Box */}
      <div className="relative z-10 w-full max-w-lg glass-card rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl animate-scale-up">
        
        {/* Close Button */}
        <button
          onClick={() => setIsLocationModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-wknd-mutedText hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Title */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl bg-wknd-yellow/15 border border-wknd-yellow/40 flex items-center justify-center text-wknd-yellow shadow-neon">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline font-black text-xl text-white">WKND Potheri Outlet</h3>
            <p className="font-mono text-xs text-wknd-yellow font-bold uppercase tracking-wider">
              SRM Campus Hangout Hub
            </p>
          </div>
        </div>

        {/* Location Details List */}
        <div className="space-y-4 text-sm">
          
          <div className="bg-wknd-surfaceDark p-4 rounded-2xl border border-white/10 flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-wknd-yellow shrink-0 mt-0.5" />
            <div>
              <h4 className="font-headline font-bold text-white mb-1">Address</h4>
              <p className="text-wknd-mutedText text-xs leading-relaxed">
                GST Road, Potheri, Kattankulathur, Chennai, Tamil Nadu 603203 (Directly opposite SRM University Gate / Potheri Railway Station).
              </p>
            </div>
          </div>

          <div className="bg-wknd-surfaceDark p-4 rounded-2xl border border-white/10 flex items-start space-x-3">
            <Clock className="w-5 h-5 text-wknd-yellow shrink-0 mt-0.5" />
            <div>
              <h4 className="font-headline font-bold text-white mb-1">Operating Hours</h4>
              <p className="text-wknd-mutedText text-xs">
                Open Daily: <span className="text-wknd-yellow font-mono font-bold">4:00 PM – 3:00 AM (Late Night)</span>
              </p>
              <p className="text-[11px] text-wknd-purpleText mt-1">
                ⚡ Special late-night delivery available to all SRM Hostels & Potheri apartments.
              </p>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-wknd-yellow text-black font-headline font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-wknd-yellowHover transition-all flex items-center justify-center space-x-2"
          >
            <Navigation className="w-4 h-4 fill-black" />
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href="tel:+919876543210"
            className="w-full py-3 px-4 rounded-xl bg-white/10 text-white font-headline font-bold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/15 transition-all flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4 text-wknd-yellow" />
            <span>Call Outlet (+91 98765 43210)</span>
          </a>

        </div>

      </div>
    </div>
  );
};
