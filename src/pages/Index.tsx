import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import WatercolorDecoration from '@/components/WatercolorDecoration';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  const categories = [
    { id: 1, name: 'Букеты', icon: 'Flower2', count: 24 },
    { id: 2, name: 'Цветочные композиции', icon: 'Sparkles', count: 18 },
    { id: 3, name: 'Цветы (срезка)', icon: 'Leaf', count: 32 },
    { id: 4, name: 'Подарки и сувениры', icon: 'Gift', count: 15 },
    { id: 5, name: 'Дополнения к цветам', icon: 'Package', count: 12 },
  ];

  const products = [
    {
      id: 1,
      name: 'Нежность весны',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/906f88c7-e792-4459-902a-bcd23a9408d8.jpg',
      category: 'Букеты'
    },
    {
      id: 2,
      name: 'Романтика',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/906f88c7-e792-4459-902a-bcd23a9408d8.jpg',
      category: 'Букеты'
    },
    {
      id: 3,
      name: 'Летний сад',
      price: 5800,
      image: 'https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/906f88c7-e792-4459-902a-bcd23a9408d8.jpg',
      category: 'Композиции'
    },
    {
      id: 4,
      name: 'Элегантность',
      price: 6500,
      image: 'https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/906f88c7-e792-4459-902a-bcd23a9408d8.jpg',
      category: 'Композиции'
    }
  ];

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <WatercolorDecoration />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-3xl font-bold text-primary font-serif">Cvetanika</h1>
              
            </div>

            <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка и оплата</a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>

            <div className="flex items-center gap-8">

            <div className="flex items-center gap-4">
              <a href="https://t.me/cvetanika" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="https://vk.com/cvetanika" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.13 14.44h-1.33c-.52 0-.68-.42-1.61-1.35-.82-.77-1.18-.87-1.38-.87-.29 0-.37.08-.37.47v1.23c0 .33-.11.53-1 .53-1.48 0-3.12-.9-4.27-2.57-1.73-2.47-2.2-4.33-2.2-4.71 0-.2.08-.39.47-.39h1.33c.35 0 .48.16.62.54.69 2 1.87 3.75 2.35 3.75.18 0 .27-.08.27-.54v-2.1c-.06-.99-.58-1.08-.58-1.43 0-.16.13-.32.34-.32h2.09c.3 0 .4.16.4.5v2.83c0 .3.13.4.21.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.67-.39h1.33c.4 0 .49.2.4.5-.16.72-1.84 3.4-1.84 3.4-.15.25-.21.36 0 .65.15.21.64.63 1 1.02.65.71 1.14 1.31 1.27 1.73.14.4-.07.61-.47.61z"/>
                </svg>
              </a>
              <Button variant="ghost" size="icon" className="relative" onClick={() => setCartCount(0)}>
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[500px] bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="absolute top-10 right-1/4 w-32 h-32" viewBox="0 0 120 120" fill="none">
            <path d="M60 20C55 18 50 22 48 28C46 34 50 40 56 42C52 45 50 52 53 58C56 64 62 66 68 64C69 69 74 72 79 71C84 70 87 65 86 60C92 59 96 53 94 47C92 41 86 38 80 40C82 35 80 28 75 25C70 22 64 23 62 28C60 25 57 23 53 22C49 21 45 23 44 27" fill="currentColor" className="text-primary" />
          </svg>
          <svg className="absolute bottom-20 left-1/3 w-40 h-40" viewBox="0 0 150 150" fill="none">
            <ellipse cx="75" cy="75" rx="30" ry="45" fill="currentColor" className="text-primary" transform="rotate(-30 75 75)" />
            <ellipse cx="75" cy="75" rx="25" ry="40" fill="currentColor" className="text-primary" transform="rotate(30 75 75)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-8 h-full items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground font-serif leading-tight">
                Авторские букеты с душой
              </h2>
              <p className="text-lg text-muted-foreground">
                Создаём уникальные букеты для ваших особенных моментов
              </p>
              <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-base">
                    Оформить предзаказ
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-serif">Подобрать букет по поводу или по бюджету</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Повод</label>
                      <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите повод" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday">День рождения</SelectItem>
                          <SelectItem value="wedding">Свадьба</SelectItem>
                          <SelectItem value="anniversary">Годовщина</SelectItem>
                          <SelectItem value="romantic">Романтическое свидание</SelectItem>
                          <SelectItem value="corporate">Корпоратив</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Бюджет</label>
                      <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите бюджет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget1">До 3 000 ₽</SelectItem>
                          <SelectItem value="budget2">3 000 - 5 000 ₽</SelectItem>
                          <SelectItem value="budget3">5 000 - 8 000 ₽</SelectItem>
                          <SelectItem value="budget4">От 8 000 ₽</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <Button className="w-full" size="lg" onClick={() => { handleAddToCart(); setIsOrderDialogOpen(false); }}>
                      <Icon name="Sparkles" size={18} className="mr-2" />
                      Подобрать букет
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="hidden md:block relative h-full">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/1e8c930b-4284-480e-9bdf-71e953618628.jpg"
                  alt="Букет цветов"
                  className="h-full w-auto object-cover rounded-lg shadow-2xl animate-scale-in"
                />
                <div className="absolute top-8 left-8 bg-primary/95 text-primary-foreground px-6 py-4 rounded-lg shadow-lg backdrop-blur">
                  <p className="text-lg font-semibold">Скидка 15%</p>
                  <p className="text-sm">на предзаказ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="absolute top-1/4 right-10 w-36 h-36" viewBox="0 0 140 140" fill="none">
            <path d="M70 30L73 48L82 38L79 56L90 48L84 64L100 62L90 75L103 80L88 85L95 98L80 90L78 105L70 88L62 103L64 88L48 95L56 82L42 80L55 73L45 62L60 66L54 48L67 58L65 40" fill="currentColor" className="text-primary" />
          </svg>
          <svg className="absolute bottom-1/3 left-1/4 w-32 h-32" viewBox="0 0 120 120" fill="none">
            <ellipse cx="60" cy="60" rx="20" ry="35" fill="currentColor" className="text-primary" opacity="0.3" transform="rotate(20 60 60)" />
            <ellipse cx="60" cy="60" rx="18" ry="30" fill="currentColor" className="text-primary" opacity="0.3" transform="rotate(-60 60 60)" />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 font-serif">Каталог</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm">{category.name}</h4>
                  <p className="text-xs text-muted-foreground">{category.count} товаров</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary/90">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h4 className="font-semibold text-lg font-serif">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button size="sm" onClick={handleAddToCart}>
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="absolute top-20 left-1/4 w-28 h-28" viewBox="0 0 110 110" fill="none">
            <circle cx="55" cy="55" r="18" fill="currentColor" className="text-primary" opacity="0.3" />
            <path d="M55 20L57 38L65 28L63 46L73 38L68 54L83 52L73 64L86 69L71 72L76 86L62 75L59 90L55 75L50 88L52 72L37 79L44 67L30 64L43 57L34 46L48 50L43 33L55 43L53 25" fill="currentColor" className="text-primary" />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-4 font-serif">Отзывы наших клиентов</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы ценим каждого клиента и стараемся сделать их особенные моменты незабываемыми
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/4e449abe-0287-46e8-bc38-96980f5c1616.jpg"
                    alt="Анна"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold font-serif text-lg">Анна Петрова</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Заказывала букет на день рождения подруги. Цветы потрясающие! Свежие, ароматные, композиция просто волшебная. Доставили вовремя, упаковка очень красивая. Обязательно буду заказывать ещё!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/6f9edbf8-2214-4fcd-a778-46a4d653e97f.jpg"
                    alt="Екатерина"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold font-serif text-lg">Екатерина Смирнова</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Профессиональный подход! Флористы помогли подобрать идеальный букет для свадьбы. Каждая деталь продумана до мелочей. Гости были в восторге от композиций. Спасибо за ваш талант!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/b9c17821-38ef-4b59-9fdb-d33e13d6de44/files/e76fc3a1-099b-4fb2-88cd-7411ed282a38.jpg"
                    alt="Мария"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold font-serif text-lg">Мария Иванова</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Заказываю цветы в Cvetanika уже не первый раз. Всегда на высшем уровне! Отдельное спасибо за индивидуальный подход и внимание к деталям. Это лучшая цветочная студия в городе!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 font-serif text-primary">Cvetanika</h4>
              <p className="text-sm text-muted-foreground">
                Цветочная студия авторских букетов и композиций
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Каталог</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Букеты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Композиции</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Цветы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Подарки</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Информация</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#delivery" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div id="contacts">
              <h5 className="font-semibold mb-3">Контакты</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (923) 423-30-40</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Clock" size={16} className="mt-0.5" />
                  <div>
                    <p>Режим работы:</p>
                    <p>Вт-Вс: 10:00 - 20:00</p>
                    <p>Пн: 15:00 - 20:00</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 pt-2">
                  <a href="https://t.me/cvetanika" className="hover:text-primary transition-colors">
                    <Icon name="Send" size={20} />
                  </a>
                  <a href="https://vk.com/cvetanika" className="hover:text-primary transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.13 14.44h-1.33c-.52 0-.68-.42-1.61-1.35-.82-.77-1.18-.87-1.38-.87-.29 0-.37.08-.37.47v1.23c0 .33-.11.53-1 .53-1.48 0-3.12-.9-4.27-2.57-1.73-2.47-2.2-4.33-2.2-4.71 0-.2.08-.39.47-.39h1.33c.35 0 .48.16.62.54.69 2 1.87 3.75 2.35 3.75.18 0 .27-.08.27-.54v-2.1c-.06-.99-.58-1.08-.58-1.43 0-.16.13-.32.34-.32h2.09c.3 0 .4.16.4.5v2.83c0 .3.13.4.21.4.18 0 .33-.1.67-.44 1.04-1.17 1.79-2.97 1.79-2.97.1-.21.26-.39.67-.39h1.33c.4 0 .49.2.4.5-.16.72-1.84 3.4-1.84 3.4-.15.25-.21.36 0 .65.15.21.64.63 1 1.02.65.71 1.14 1.31 1.27 1.73.14.4-.07.61-.47.61z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Cvetanika. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;