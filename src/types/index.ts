// Интерфейс карточки
interface ICard { 
  _id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

// Интерфейс корзины
interface IBasket {
  items: ICard[];
  total: number;
}

// Интерфейс форм оформления заказа
interface IOrder {  
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: ICard[];
}

// Интерфейс для модели данных карточек
interface ICardsData {  
  cards: ICard [];
  preview: string | null;
}

// Типы для модальных окон
type TCardPreview = Pick<ICard, 'image' | 'title' | 'category' | 'price'>; //главная страница

type TCardInfo = Pick<ICard, 'description' | 'image' | 'title' | 'category' | 'price'>; //мод.окно товара

type TBasketItem = Pick<ICard, 'title' | 'price'>; //мод.окно корзины

type TPaymentForm = Pick<IOrder, 'payment' | 'address'>; //мод.окно формы оплаты

type TContactForm = Pick<IOrder, 'email' | 'phone'>; //мод.окно формы контактов

