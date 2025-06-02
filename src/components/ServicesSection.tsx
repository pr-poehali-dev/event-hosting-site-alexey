import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Heart",
      title: "Свадьбы",
      description:
        "Незабываемый день для влюблённых с индивидуальным сценарием",
      price: "от 15 000 ₽",
    },
    {
      icon: "Building",
      title: "Корпоративные мероприятия",
      description: "Профессиональное проведение деловых событий и праздников",
      price: "от 20 000 ₽",
    },
    {
      icon: "Gift",
      title: "Дни рождения",
      description: "Яркие празднования для детей и взрослых любого возраста",
      price: "от 10 000 ₽",
    },
    {
      icon: "GraduationCap",
      title: "Выпускные",
      description: "Торжественные мероприятия для школ и университетов",
      price: "от 12 000 ₽",
    },
    {
      icon: "Music",
      title: "Юбилеи",
      description: "Элегантные празднования важных дат и достижений",
      price: "от 18 000 ₽",
    },
    {
      icon: "Sparkles",
      title: "Новый год",
      description: "Волшебные новогодние программы для любой аудитории",
      price: "от 25 000 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Услуги ведущего
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональное проведение мероприятий любого формата и масштаба
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow hover-scale"
            >
              <CardHeader className="text-center p-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-amber-600"
                  />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <div className="text-2xl font-bold text-amber-600">
                  {service.price}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
