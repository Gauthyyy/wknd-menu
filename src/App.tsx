import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { MENU_DATA } from './data/menuData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { CartDrawer } from './components/CartDrawer';
import { LocationModal } from './components/LocationModal';
import { OrdersTracker } from './components/OrdersTracker';
import { Footer } from './components/Footer';
import { SearchX, Sparkles } from 'lucide-react';

const MainContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'non-veg' | 'signature'>('all');

  // Filter categories to render based on selectedCategory tab
  const categoriesToRender = MENU_DATA.categories.filter(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return false;
    }
    return true;
  });

  // Check if any results match across categories when searching or filtering
  const hasAnyResults = categoriesToRender.some(cat => {
    const filterItem = (item: any) => {
      if (dietFilter === 'veg' && item.type !== 'veg') return false;
      if (dietFilter === 'non-veg' && item.type !== 'non-veg') return false;
      if (dietFilter === 'signature' && !item.isSignature) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.description?.toLowerCase().includes(q) || false;
        return matchName || matchDesc;
      }
      return true;
    };

    const hasItems = (cat.items || []).some(filterItem);
    const hasSubgroups = (cat.subgroups || []).some(sg => sg.items.some(filterItem));
    return hasItems || hasSubgroups;
  });

  return (
    <div className="min-h-screen flex flex-col bg-wknd-bg">
      <Navbar />

      <main className="flex-1 space-y-10">
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={MENU_DATA.categories}
          dietFilter={dietFilter}
          setDietFilter={setDietFilter}
        />

        {/* Menu Sections List Container */}
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {hasAnyResults ? (
            categoriesToRender.map(category => (
              <MenuSection
                key={category.id}
                category={category}
                dietFilter={dietFilter}
                searchQuery={searchQuery}
              />
            ))
          ) : (
            <div className="py-16 text-center glass-card rounded-3xl p-8 max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 mx-auto flex items-center justify-center text-wknd-purpleText border border-white/10">
                <SearchX className="w-8 h-8 text-wknd-yellow" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-xl text-white">No items found</h3>
                <p className="text-wknd-mutedText text-xs sm:text-sm">
                  We couldn't find anything matching "{searchQuery}". Try searching for rolls, burgers, kulukki or shakes!
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDietFilter('all');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2 rounded-xl bg-wknd-yellow text-black font-headline font-bold text-xs uppercase tracking-wider shadow-neon hover:bg-wknd-yellowHover transition-all"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <LocationModal />
      <OrdersTracker />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}

export default App;
