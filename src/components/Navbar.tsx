import React from 'react';
import { ShoppingBag, MapPin, Phone, Receipt, Menu, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const { totalItems, totalPrice, setIsCartOpen, setIsLocationModalOpen, setIsOrdersOpen, activeOrders } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-wknd-surfaceHigh border border-wknd-yellow/30 flex items-center justify-center neon-glow group-hover:border-wknd-yellow transition-all">
              <span className="font-headline font-black text-wknd-yellow text-xl tracking-tighter">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-black text-2xl tracking-tight text-white group-hover:text-wknd-yellow transition-colors neon-text-glow">
                WKND
              </span>
              <span className="font-mono text-[10px] text-wknd-yellow uppercase tracking-widest -mt-1 hidden sm:block">
                After Hours • Potheri
              </span>
            </div>
          </a>
        </div>

        {/* Quick Action Navigation Links */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* Location Button */}
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-wknd-yellow/40 text-xs sm:text-sm font-medium transition-all text-wknd-mutedText hover:text-white"
            title="Location Info"
          >
            <MapPin className="w-4 h-4 text-wknd-yellow shrink-0" />
            <span className="hidden md:inline">SRM Campus, Potheri</span>
            <span className="md:hidden">Potheri</span>
          </button>

          {/* Call Outlet */}
          <a
            href="tel:+919876543210"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-wknd-yellow/40 text-xs sm:text-sm font-medium transition-all text-wknd-mutedText hover:text-white"
            title="Call Outlet"
          >
            <Phone className="w-4 h-4 text-wknd-yellow shrink-0" />
            <span>Call</span>
          </a>

          {/* Orders History / Tracker */}
          <button
            onClick={() => setIsOrdersOpen(true)}
            className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-wknd-yellow/40 text-xs sm:text-sm font-medium transition-all text-wknd-mutedText hover:text-white"
          >
            <Receipt className="w-4 h-4 text-wknd-yellow shrink-0" />
            <span className="hidden sm:inline">Orders</span>
            {activeOrders.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-wknd-yellow animate-ping" />
            )}
          </button>

          {/* Cart Trigger Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-wknd-yellow text-black font-headline font-bold text-xs sm:text-sm neon-glow hover:bg-wknd-yellowHover active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-black shrink-0" />
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="bg-black text-wknd-yellow px-1.5 py-0.5 rounded-full text-xs font-mono font-extrabold ml-1">
                {totalItems}
              </span>
            )}
            {totalPrice > 0 && (
              <span className="hidden sm:inline font-mono font-bold border-l border-black/20 pl-2">
                ₹{totalPrice}
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
