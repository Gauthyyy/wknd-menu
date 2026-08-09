import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem, OrderType, ActiveOrder } from '../types/menu';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: MenuItem, categoryName?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  getItemQuantity: (itemId: string) => number;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  orderType: OrderType;
  setOrderType: (type: OrderType) => void;
  hostelAddress: string;
  setHostelAddress: (addr: string) => void;
  customerNotes: string;
  setCustomerNotes: (notes: string) => void;
  activeOrders: ActiveOrder[];
  isLocationModalOpen: boolean;
  setIsLocationModalOpen: (open: boolean) => void;
  isOrdersOpen: boolean;
  setIsOrdersOpen: (open: boolean) => void;
  placeWhatsAppOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_CART_KEY = 'wknd_cart_items_v1';
const LOCAL_STORAGE_ORDERS_KEY = 'wknd_active_orders_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeOrders, setActiveOrders] = useState<ActiveOrder[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_ORDERS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState<boolean>(false);
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [hostelAddress, setHostelAddress] = useState<string>('SRM Abode / Tech Park, Potheri');
  const [customerNotes, setCustomerNotes] = useState<string>('');

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_ORDERS_KEY, JSON.stringify(activeOrders));
    } catch (e) {
      console.error(e);
    }
  }, [activeOrders]);

  const addToCart = (item: MenuItem, categoryName?: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(ci => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { item, quantity: 1, categoryName }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => prev.filter(ci => ci.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prev => prev.map(ci => ci.item.id === itemId ? { ...ci, quantity } : ci));
  };

  const getItemQuantity = (itemId: string): number => {
    const item = cartItems.find(ci => ci.item.id === itemId);
    return item ? item.quantity : 0;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);
  const totalPrice = cartItems.reduce((acc, ci) => acc + (ci.item.price * ci.quantity), 0);

  const placeWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    // Create active order record
    const newOrder: ActiveOrder = {
      id: `WKND-${Math.floor(1000 + Math.random() * 9000)}`,
      items: [...cartItems],
      total: totalPrice,
      status: 'Preparing',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      estimatedDelivery: '20-25 mins',
      orderType,
      address: orderType === 'delivery' ? hostelAddress : 'Self Pickup at WKND Outlet (Potheri)'
    };

    setActiveOrders(prev => [newOrder, ...prev]);

    // Format WhatsApp message
    let message = `*NEW ORDER - WKND POTHERI*\n`;
    message += `Order ID: *${newOrder.id}*\n`;
    message += `Type: *${orderType.toUpperCase()}*\n`;
    if (orderType === 'delivery') {
      message += `Delivery Address: *${hostelAddress}*\n`;
    }
    message += `------------------------\n`;
    message += `*ITEMS:*\n`;

    cartItems.forEach((ci, index) => {
      message += `${index + 1}. ${ci.item.name} x${ci.quantity} = ₹${ci.item.price * ci.quantity}\n`;
    });

    message += `------------------------\n`;
    message += `*TOTAL AMOUNT: ₹${totalPrice}*\n`;
    if (customerNotes.trim()) {
      message += `Note: ${customerNotes.trim()}\n`;
    }
    message += `\n*Please confirm order preparation!*`;

    // WhatsApp phone number for WKND Potheri
    const phoneNumber = "919876543210";
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Clear cart and open WhatsApp
    clearCart();
    setIsCartOpen(false);
    setIsOrdersOpen(true);
    window.open(waUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getItemQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        orderType,
        setOrderType,
        hostelAddress,
        setHostelAddress,
        customerNotes,
        setCustomerNotes,
        activeOrders,
        isLocationModalOpen,
        setIsLocationModalOpen,
        isOrdersOpen,
        setIsOrdersOpen,
        placeWhatsAppOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
