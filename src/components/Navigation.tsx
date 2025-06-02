import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Алексей Алмазный
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              О ведущем
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
