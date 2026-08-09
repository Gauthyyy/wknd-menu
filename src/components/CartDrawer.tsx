import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Send, Truck, Store, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
    orderType,
    setOrderType,
    hostelAddress,
    setHostelAddress,
    customerNotes,
    setCustomerNotes,
    placeWhatsAppOrder
  } = useCart();

  const FREE_DELIVERY_THRESHOLD = 200;
  const deliveryFee = orderType === 'delivery' ? (totalPrice >= FREE_DELIVERY_THRESHOLD ? 0 : 25) : 0;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <>
      {/* Floating Bottom Cart Bar (Shown when cart has items and drawer is closed) */}
      {totalItems > 0 && !isCartOpen && (
        <div className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto animate-bounce-short">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-wknd-yellow text-black font-headline font-black py-4 px-6 rounded-2xl shadow-neon-lg flex items-center justify-between hover:bg-wknd-yellowHover transition-all active:scale-95 border-2 border-black/20"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-black text-wknd-yellow flex items-center justify-center font-mono text-sm font-extrabold">
                {totalItems}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-wider text-black/70 font-mono font-bold">
                  View Cart
                </span>
                <span className="text-base font-extrabold leading-tight">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-mono text-xl font-black">
                ₹{finalTotal}
              </span>
              <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-black" />
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Backdrop Overlay */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Slide-over Side Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[450px] bg-wknd-bg/95 border-l border-white/10 backdrop-blur-xl shadow-2xl flex flex-col transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Cart Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between glass-nav">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-wknd-yellow/15 border border-wknd-yellow/30 flex items-center justify-center text-wknd-yellow">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-headline font-bold text-lg text-white">Your Order</h2>
              <p className="font-mono text-xs text-wknd-purpleText">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} in cart
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="p-2 rounded-lg text-wknd-mutedText hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                title="Clear Cart"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg text-wknd-mutedText hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-wknd-surfaceHigh border border-white/10 flex items-center justify-center text-wknd-purpleText">
                <ShoppingBag className="w-10 h-10 opacity-50" />
              </div>
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-lg text-white">Your cart is empty</h3>
                <p className="text-wknd-mutedText text-sm max-w-xs">
                  Looks like you haven't added any rolls, burgers, or kulukki yet. Explore our late night menu!
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 px-6 py-2.5 rounded-xl bg-wknd-yellow text-black font-headline font-bold text-sm shadow-neon hover:bg-wknd-yellowHover transition-all"
              >
                Explore Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Type Toggle (Delivery vs Pickup) */}
              <div className="bg-wknd-surface p-1 rounded-2xl border border-white/10 flex">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 py-2.5 rounded-xl font-headline font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all ${
                    orderType === 'delivery'
                      ? 'bg-wknd-yellow text-black shadow-neon'
                      : 'text-wknd-mutedText hover:text-white'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Hostel Delivery</span>
                </button>

                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 py-2.5 rounded-xl font-headline font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all ${
                    orderType === 'pickup'
                      ? 'bg-wknd-yellow text-black shadow-neon'
                      : 'text-wknd-mutedText hover:text-white'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>Self Pickup</span>
                </button>
              </div>

              {/* Delivery Address Input */}
              {orderType === 'delivery' && (
                <div className="bg-wknd-surface p-4 rounded-2xl border border-white/10 space-y-2">
                  <label className="flex items-center space-x-2 text-xs font-mono font-bold text-wknd-yellow uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Delivery Location (Potheri / SRM Campus)</span>
                  </label>
                  <input
                    type="text"
                    value={hostelAddress}
                    onChange={(e) => setHostelAddress(e.target.value)}
                    placeholder="e.g. SRM M-Block Hostel, Room 402 / Tech Park Gate"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-wknd-surfaceDark border border-white/15 text-white text-xs sm:text-sm outline-none focus:border-wknd-yellow"
                  />
                  {totalPrice < FREE_DELIVERY_THRESHOLD && (
                    <p className="text-[11px] font-mono text-wknd-mutedText flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-wknd-yellow" />
                      <span>Add ₹{FREE_DELIVERY_THRESHOLD - totalPrice} more for FREE delivery!</span>
                    </p>
                  )}
                </div>
              )}

              {/* Item List */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-wknd-purpleText font-bold">
                  Order Items ({cartItems.length})
                </h3>

                {cartItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="glass-card p-3.5 rounded-2xl border border-white/10 flex items-center space-x-3 group hover:border-wknd-yellow/30 transition-all"
                  >
                    {/* Item Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-wknd-surfaceDark overflow-hidden shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-wknd-purpleText">
                          <ShoppingBag className="w-6 h-6 opacity-30" />
                        </div>
                      )}
                    </div>

                    {/* Title & Price */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-headline font-bold text-white text-sm truncate">
                        {item.name}
                      </h4>
                      <p className="font-mono text-xs text-wknd-yellow font-semibold">
                        ₹{item.price} x {quantity} = ₹{item.price * quantity}
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-1.5 bg-wknd-surfaceHigh border border-white/10 rounded-xl p-1 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, quantity - 1)}
                        className="w-6 h-6 rounded-lg bg-black/40 flex items-center justify-center text-white hover:bg-wknd-yellow hover:text-black transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs font-bold text-white w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, quantity + 1)}
                        className="w-6 h-6 rounded-lg bg-black/40 flex items-center justify-center text-white hover:bg-wknd-yellow hover:text-black transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Instructions Note */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-wknd-purpleText uppercase tracking-wider font-bold">
                  Special Instructions / Notes
                </label>
                <input
                  type="text"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="e.g. Extra mayo, less spicy, call before delivery"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-wknd-surface border border-white/10 text-white text-xs outline-none focus:border-wknd-yellow"
                />
              </div>

            </>
          )}

        </div>

        {/* Cart Drawer Footer / Checkout CTA */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/10 glass-nav space-y-4">
            
            {/* Bill Summary Breakdown */}
            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between text-wknd-mutedText">
                <span>Items Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>
              
              <div className="flex justify-between text-wknd-mutedText">
                <span>
                  {orderType === 'delivery' ? 'Delivery Fee' : 'Pickup Fee'}
                </span>
                <span>
                  {orderType === 'pickup' ? (
                    'FREE'
                  ) : deliveryFee === 0 ? (
                    <span className="text-emerald-400 font-bold">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-sm font-bold text-white">
                <span>Total Amount</span>
                <span className="text-wknd-yellow font-mono text-xl">₹{finalTotal}</span>
              </div>
            </div>

            {/* WhatsApp Checkout Button */}
            <button
              onClick={placeWhatsAppOrder}
              className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-headline font-black text-base shadow-neon flex items-center justify-center space-x-2 transition-all active:scale-95"
            >
              <Send className="w-5 h-5 fill-black stroke-black" />
              <span>Order via WhatsApp</span>
            </button>

            <p className="text-[10px] font-mono text-center text-wknd-purpleText">
              ⚡ Instant WhatsApp confirmation & live preparation updates
            </p>

          </div>
        )}

      </div>
    </>
  );
};
