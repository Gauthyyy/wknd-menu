import React from 'react';
import { Search, Sparkles, Flame, Clock, MapPin, X } from 'lucide-react';
import { Category } from '../types/menu';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  categories: Category[];
  dietFilter: 'all' | 'veg' | 'non-veg' | 'signature';
  setDietFilter: (filter: 'all' | 'veg' | 'non-veg' | 'signature') => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  dietFilter,
  setDietFilter
}) => {
  return (
    <section className="pt-24 pb-6 px-4 max-w-7xl mx-auto">
      
      {/* Hero Banner Header */}
      <div className="relative rounded-3xl overflow-hidden glass-card p-6 sm:p-10 border border-wknd-border shadow-purple-glow">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-wknd-yellow/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          
          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-wknd-yellow/15 border border-wknd-yellow/40 text-wknd-yellow font-mono text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Late Night Food Haven</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs">
              <Clock className="w-3.5 h-3.5 text-wknd-yellow" />
              <span>Open 4 PM - 3 AM</span>
            </span>
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs">
              <MapPin className="w-3.5 h-3.5 text-wknd-yellow" />
              <span>Near SRM Campus</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-4">
            Your Favorite College Hangout Spot in <span className="text-wknd-yellow neon-text-glow">Potheri</span>
          </h1>

          {/* Subtitle */}
          <p className="text-wknd-mutedText text-base sm:text-lg mb-8 max-w-2xl">
            Craving late-night rolls, zinger burgers, spicy kulukki, and signature thick shakes? Order instantly & get fast delivery straight to your hostel or desk!
          </p>

          {/* Real-time Search Input */}
          <div className="relative max-w-2xl mb-6">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-wknd-yellow pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rolls, zinger burgers, kulukki, mojitos, shakes..."
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-wknd-surfaceDark/90 border border-white/20 focus:border-wknd-yellow text-white placeholder-wknd-mutedText/70 text-sm sm:text-base outline-none shadow-inner transition-all focus:ring-2 focus:ring-wknd-yellow/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 p-1 rounded-full text-wknd-mutedText hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Dietary Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-wknd-purpleText font-mono uppercase tracking-wider mr-1">Filter:</span>
            
            <button
              onClick={() => setDietFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                dietFilter === 'all'
                  ? 'bg-wknd-yellow text-black font-bold shadow-neon'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All Items
            </button>

            <button
              onClick={() => setDietFilter('veg')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center space-x-1.5 ${
                dietFilter === 'veg'
                  ? 'bg-emerald-500 text-black font-bold shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 border border-white" />
              <span>Veg Only</span>
            </button>

            <button
              onClick={() => setDietFilter('non-veg')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center space-x-1.5 ${
                dietFilter === 'non-veg'
                  ? 'bg-rose-500 text-white font-bold shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400 border border-white" />
              <span>Non-Veg</span>
            </button>

            <button
              onClick={() => setDietFilter('signature')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all flex items-center space-x-1.5 ${
                dietFilter === 'signature'
                  ? 'bg-amber-400 text-black font-bold shadow-neon'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
              <span>Signatures</span>
            </button>
          </div>

        </div>
      </div>

      {/* Category Scroll Tabs Bar */}
      <div className="sticky top-16 z-40 bg-wknd-bg/95 backdrop-blur-md pt-4 pb-2 -mx-4 px-4 overflow-x-auto no-scrollbar border-b border-white/10 flex items-center space-x-2 mt-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-5 py-2.5 rounded-full font-headline font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-wknd-yellow text-black shadow-neon scale-105'
              : 'bg-wknd-surface text-wknd-mutedText hover:text-white hover:bg-wknd-surfaceHigh border border-white/5'
          }`}
        >
          🍔 All Menu
        </button>

        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full font-headline font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-wknd-yellow text-black shadow-neon scale-105'
                : 'bg-wknd-surface text-wknd-mutedText hover:text-white hover:bg-wknd-surfaceHigh border border-white/5'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

    </section>
  );
};
