import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (999) 123-45-67",
      action: "tel:+79991234567",
    },
    {
      icon: "Mail",
      title: "Email",
      content: "alex@almazny.ru",
      action: "mailto:alex@almazny.ru",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      content: "@alexalmazny",
      action: "https://t.me/alexalmazny",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      content: "@alex_almazny",
      action: "https://instagram.com/alex_almazny",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Связаться со мной</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готов обсудить детали вашего мероприятия и предложить лучшие решения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors"
            >
              <CardHeader className="text-center p-6">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={contact.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-white text-lg mb-2">
                  {contact.title}
                </CardTitle>
                <CardContent className="p-0">
                  <a
                    href={contact.action}
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {contact.content}
                  </a>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center mb-6">
                Быстрая заявка
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    placeholder="Введите имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Тип мероприятия
                </label>
                <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500">
                  <option>Выберите тип мероприятия</option>
                  <option>Свадьба</option>
                  <option>Корпоратив</option>
                  <option>День рождения</option>
                  <option>Юбилей</option>
                  <option>Выпускной</option>
                  <option>Новый год</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Дополнительная информация
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-amber-500"
                  placeholder="Расскажите о вашем мероприятии..."
                />
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 text-lg">
                Отправить заявку
                <Icon name="Send" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
