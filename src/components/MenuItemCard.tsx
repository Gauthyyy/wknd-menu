import React from 'react';
import { Plus, Minus, Flame, Sparkles } from 'lucide-react';
import { MenuItem } from '../types/menu';
import { useCart } from '../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  categoryName?: string;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, categoryName }) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);

  return (
    <article className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-wknd-yellow/50 transition-all duration-300 hover:shadow-purple-glow">
      
      {/* Image Thumbnail & Badges Container */}
      <div className="h-44 w-full bg-wknd-surfaceDark relative overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-wknd-surfaceHigh text-wknd-purpleText">
            <Sparkles className="w-8 h-8 opacity-40" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-wknd-surface via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          
          {/* Dietary Indicator Tag */}
          {item.type && (
            <div className="bg-black/70 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 flex items-center space-x-1.5">
              <div
                className={`w-2.5 h-2.5 rounded-full border border-white ${
                  item.type === 'veg'
                    ? 'bg-emerald-500'
                    : item.type === 'non-veg'
                    ? 'bg-rose-500'
                    : 'bg-amber-400'
                }`}
              />
              <span className="font-mono text-[10px] uppercase font-bold text-white tracking-wider">
                {item.type}
              </span>
            </div>
          )}

          {/* Signature Badge */}
          {item.isSignature && (
            <div className="ml-auto bg-wknd-yellow text-black font-headline font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-neon flex items-center space-x-1">
              <Flame className="w-3 h-3 text-black fill-black" />
              <span>Signature</span>
            </div>
          )}

        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Item Title */}
        <h3 className="font-headline font-bold text-white text-lg group-hover:text-wknd-yellow transition-colors mb-1 line-clamp-1">
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-wknd-mutedText text-xs sm:text-sm line-clamp-2 mb-4 flex-grow">
          {item.description || "Freshly prepared to order using authentic WKND ingredients and signature spices."}
        </p>

        {/* Bottom Price & Add Action Button */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
          
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-wknd-purpleText uppercase tracking-wider">Price</span>
            <span className="font-mono font-extrabold text-wknd-yellow text-xl">
              ₹{item.price}
            </span>
          </div>

          {/* Quantity Controls / Add Button */}
          {quantity > 0 ? (
            <div className="flex items-center space-x-2 bg-wknd-surfaceHigh border border-wknd-yellow/40 rounded-xl p-1 shadow-neon">
              <button
                onClick={() => updateQuantity(item.id, quantity - 1)}
                className="w-7 h-7 rounded-lg bg-black/40 flex items-center justify-center text-white hover:bg-wknd-yellow hover:text-black transition-colors"
                title="Decrease Quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              
              <span className="font-mono font-bold text-white px-1 text-sm min-w-[20px] text-center">
                {quantity}
              </span>

              <button
                onClick={() => updateQuantity(item.id, quantity + 1)}
                className="w-7 h-7 rounded-lg bg-black/40 flex items-center justify-center text-white hover:bg-wknd-yellow hover:text-black transition-colors"
                title="Increase Quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(item, categoryName)}
              className="px-4 py-2 rounded-xl bg-wknd-yellow text-black font-headline font-bold text-xs uppercase tracking-wider hover:bg-wknd-yellowHover active:scale-95 transition-all shadow-neon flex items-center space-x-1.5"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Add</span>
            </button>
          )}

        </div>

      </div>

    </article>
  );
};
