import React from 'react';
import { Category, MenuItem } from '../types/menu';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  category: Category;
  dietFilter: 'all' | 'veg' | 'non-veg' | 'signature';
  searchQuery: string;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ category, dietFilter, searchQuery }) => {
  const filterItem = (item: MenuItem): boolean => {
    // Dietary filter
    if (dietFilter === 'veg' && item.type !== 'veg') return false;
    if (dietFilter === 'non-veg' && item.type !== 'non-veg') return false;
    if (dietFilter === 'signature' && !item.isSignature) return false;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q) || false;
      return matchName || matchDesc;
    }

    return true;
  };

  // If category has direct items
  const filteredItems = (category.items || []).filter(filterItem);

  // If category has subgroups (e.g., Kulukki)
  const filteredSubgroups = (category.subgroups || []).map(sg => ({
    ...sg,
    items: sg.items.filter(filterItem)
  })).filter(sg => sg.items.length > 0);

  // Check if anything matches in this category
  const hasContent = filteredItems.length > 0 || filteredSubgroups.length > 0;

  if (!hasContent) return null;

  return (
    <section id={category.id} className="scroll-mt-32 space-y-6">
      
      {/* Category Header Title */}
      <div className="flex items-center space-x-3 border-b border-white/10 pb-3">
        <h2 className="font-headline font-black text-2xl sm:text-3xl text-white tracking-tight">
          {category.name}
        </h2>
        <div className="h-0.5 flex-grow bg-gradient-to-r from-wknd-yellow/40 to-transparent" />
      </div>

      {/* Direct Category Items Grid */}
      {filteredItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <MenuItemCard key={item.id} item={item} categoryName={category.name} />
          ))}
        </div>
      )}

      {/* Subgroups rendering (e.g. Spicy Kulukki vs Sweet Kulukki) */}
      {filteredSubgroups.map((sg, idx) => (
        <div key={idx} className="space-y-4 pt-2">
          <h3 className="font-headline font-bold text-lg text-wknd-yellow flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-wknd-yellow" />
            <span>{sg.title}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sg.items.map(item => (
              <MenuItemCard key={item.id} item={item} categoryName={`${category.name} - ${sg.title}`} />
            ))}
          </div>
        </div>
      ))}

    </section>
  );
};
