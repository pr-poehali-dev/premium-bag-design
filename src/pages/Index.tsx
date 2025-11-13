import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-wider text-foreground">PRIDEBAG</h1>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                О бренде
              </button>
              <button 
                onClick={() => scrollToSection('quality')}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                Качество
              </button>
            </div>
            <Button className="bg-gold hover:bg-gold/90 text-black font-medium">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
              Итальянская кожа.<br />
              Российское качество.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Премиальные сумки ручной работы из натуральной итальянской кожи. 
              Каждое изделие — воплощение роскоши и долговечности.
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('catalog')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              Смотреть коллекцию
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 animate-fade-up">Наша коллекция</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-fade-up">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-square bg-gradient-to-br from-luxury-gray/20 to-muted">
                  <img 
                    src="https://cdn.poehali.dev/files/5e2fa724-426c-40a5-96c8-b6a78f952315.jpg"
                    alt="PRIDEBAG Premium Leather Bag"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 flex flex-col justify-center bg-card">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">PRIDEBAG Classic</h3>
                    <p className="text-muted-foreground">Деловая сумка из итальянской кожи</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon name="Award" size={16} className="text-gold" />
                      </div>
                      <span className="text-sm">Премиум качество</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon name="Leaf" size={16} className="text-gold" />
                      </div>
                      <span className="text-sm">Натуральная итальянская кожа</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon name="MapPin" size={16} className="text-gold" />
                      </div>
                      <span className="text-sm">Сделано в России</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gold hover:bg-gold/90 text-black w-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-up">
            <h2 className="text-5xl font-bold mb-8">О бренде</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                PRIDEBAG — это бренд премиальных кожаных изделий, созданный для тех, кто ценит 
                безупречное качество и элегантный дизайн. Мы работаем исключительно с лучшими 
                поставщиками итальянской кожи, известными во всём мире своим мастерством.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Каждая сумка изготавливается вручную российскими мастерами с многолетним опытом. 
                Мы объединили европейские традиции обработки кожи с российской добросовестностью 
                и вниманием к деталям.
              </p>
              <p className="text-lg leading-relaxed">
                Наша миссия — создавать изделия, которые служат десятилетиями и становятся 
                верными спутниками в вашей жизни.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-12 animate-fade-up">Наши преимущества</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Премиум качество</h3>
              <p className="text-muted-foreground leading-relaxed">
                Только лучшие материалы и проверенные технологии производства. 
                Каждое изделие проходит строгий контроль качества.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Leaf" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Итальянская кожа</h3>
              <p className="text-muted-foreground leading-relaxed">
                Натуральная кожа высшего качества от ведущих итальянских производителей. 
                Мягкая, прочная и долговечная.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Hand" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ручная работа</h3>
              <p className="text-muted-foreground leading-relaxed">
                Каждая сумка создаётся вручную опытными мастерами в России. 
                Индивидуальный подход к каждому изделию.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Гарантия 2 года</h3>
              <p className="text-muted-foreground leading-relaxed">
                Мы уверены в качестве наших изделий и предоставляем 
                расширенную гарантию на все сумки.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Доставка по РФ</h3>
              <p className="text-muted-foreground leading-relaxed">
                Бесплатная доставка по всей России. Надёжная упаковка 
                и страхование при отправке.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Star" size={32} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Эксклюзивность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ограниченные коллекции и возможность индивидуального заказа. 
                Ваша сумка будет уникальной.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4 mt-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">PRIDEBAG</h3>
            <p className="text-primary-foreground/80 mb-6">
              Премиальные кожаные изделия из Италии
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://vk.com/public232217754" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="VK">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 13.854c.484.51 1.003 1.004 1.446 1.553.195.243.38.494.539.77.225.392.02.822-.185.843h-2.413c-.315.026-.607-.108-.853-.31-.196-.16-.377-.337-.559-.51-.077-.074-.154-.147-.235-.217-.315-.274-.591-.512-.953-.446-.362.066-.452.412-.473.756-.021.405.004.648-.219.824-.419.331-1.253.267-2.213.02-1.024-.263-1.935-.834-2.703-1.602-1.35-1.35-2.394-2.923-3.312-4.604-.09-.165-.01-.396.15-.436l2.354-.003c.185-.007.308.096.385.253.376.761.802 1.477 1.312 2.134.132.17.265.34.434.472.192.151.34.045.427-.138.056-.117.08-.243.092-.37.048-.489.054-.976-.012-1.465-.037-.276-.177-.456-.453-.506-.141-.025-.12-.074-.052-.149.107-.118.208-.192.408-.192h2.818c.223.044.272.145.303.369l.001 1.575c-.002.117.059.465.27.542.169.055.28-.078.381-.178.457-.453.783-.994 1.084-1.553.134-.248.25-.507.362-.767.083-.193.213-.29.435-.285l2.653.001c.079 0 .159.001.237.013.313.048.399.171.302.477-.168.532-.539 1.002-.874 1.481-.359.512-.742 1.008-1.095 1.527-.324.476-.297.714.084 1.134z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © 2024 PRIDEBAG. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;