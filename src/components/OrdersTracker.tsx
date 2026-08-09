import React from 'react';
import { X, Receipt, Clock, CheckCircle2, Truck, ChefHat, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const OrdersTracker: React.FC = () => {
  const { isOrdersOpen, setIsOrdersOpen, activeOrders } = useCart();

  if (!isOrdersOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsOrdersOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl glass-card rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOrdersOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-wknd-mutedText hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-wknd-yellow/15 border border-wknd-yellow/40 flex items-center justify-center text-wknd-yellow shadow-neon">
            <Receipt className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline font-black text-2xl text-white">Your Orders</h3>
            <p className="font-mono text-xs text-wknd-purpleText">
              Real-time kitchen status & order history
            </p>
          </div>
        </div>

        {activeOrders.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-wknd-purpleText">
              <Receipt className="w-8 h-8 opacity-40" />
            </div>
            <h4 className="font-headline font-bold text-white text-base">No active orders yet</h4>
            <p className="text-wknd-mutedText text-xs max-w-xs mx-auto">
              Place an order via WhatsApp and track live preparation status here!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            {activeOrders.map((order, idx) => (
              <div
                key={order.id}
                className="glass-card rounded-2xl p-5 border border-wknd-yellow/30 relative overflow-hidden space-y-5 shadow-neon"
              >
                {/* Glow Background Orb */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-wknd-yellow/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

                {/* Top Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-xs font-bold text-wknd-yellow uppercase tracking-wider">
                      {order.id} • {order.time}
                    </span>
                    <h4 className="font-headline font-bold text-white text-lg">
                      {order.orderType === 'delivery' ? 'Hostel Delivery' : 'Self Pickup'}
                    </h4>
                    <p className="text-xs text-wknd-mutedText">{order.address}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-black text-wknd-yellow text-xl">
                      ₹{order.total}
                    </span>
                    <span className="block text-[10px] font-mono text-emerald-400 font-bold uppercase">
                      Confirmed via WhatsApp
                    </span>
                  </div>
                </div>

                {/* Status Tracker Bar */}
                <div className="bg-wknd-surfaceDark p-4 rounded-xl border border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-wknd-yellow font-bold flex items-center space-x-1">
                      <ChefHat className="w-3.5 h-3.5" />
                      <span>1. Preparing</span>
                    </span>
                    <span className="text-wknd-mutedText flex items-center space-x-1">
                      <Truck className="w-3.5 h-3.5" />
                      <span>2. Out for Delivery</span>
                    </span>
                    <span className="text-wknd-mutedText flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>3. Arrived</span>
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 bg-wknd-yellow rounded-full w-1/3 shadow-neon animate-pulse" />
                  </div>

                  <p className="text-xs font-mono text-center text-wknd-mutedText">
                    Estimated Delivery: <span className="text-white font-bold">{order.estimatedDelivery}</span>
                  </p>
                </div>

                {/* Item List Summary */}
                <div className="space-y-1.5 pt-1">
                  <h5 className="text-xs font-mono uppercase text-wknd-purpleText font-bold">Items</h5>
                  <div className="divide-y divide-white/5">
                    {order.items.map((ci, itemIdx) => (
                      <div key={itemIdx} className="py-1 flex justify-between text-xs text-white">
                        <span>{ci.item.name} x{ci.quantity}</span>
                        <span className="font-mono text-wknd-mutedText">₹{ci.item.price * ci.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};
