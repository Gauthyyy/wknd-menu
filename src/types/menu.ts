export type ItemDietType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  type?: ItemDietType;
  isSignature?: boolean;
  image?: string;
  description?: string;
}

export interface SubGroup {
  title: string;
  items: MenuItem[];
}

export interface Category {
  id: string;
  name: string;
  items?: MenuItem[];
  subgroups?: SubGroup[];
}

export interface MenuData {
  categories: Category[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  categoryName?: string;
}

export type OrderType = 'delivery' | 'pickup';

export interface ActiveOrder {
  id: string;
  items: CartItem[];
  total: number;
  status: 'Preparing' | 'Out for Delivery' | 'Arrived' | 'Ready for Pickup';
  time: string;
  estimatedDelivery: string;
  orderType: OrderType;
  customerName?: string;
  address?: string;
}
