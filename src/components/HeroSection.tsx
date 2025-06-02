import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Алексей
            <span className="text-amber-400 block mt-2">Алмазный</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            Профессиональный ведущий мероприятий
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Icon name="Calendar" size={20} />
              <span>Свадьбы</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Icon name="Users" size={20} />
              <span>Корпоративы</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Icon name="PartyPopper" size={20} />
              <span>Дни рождения</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              Заказать мероприятие
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              Посмотреть портфолио
              <Icon name="Play" size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;
