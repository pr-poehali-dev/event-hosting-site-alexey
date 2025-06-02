import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const achievements = [
    { number: "500+", label: "Проведённых мероприятий" },
    { number: "8", label: "Лет опыта" },
    { number: "100%", label: "Довольных клиентов" },
    { number: "50+", label: "Корпоративных клиентов" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О ведущем</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Алексей Алмазный — профессиональный ведущий мероприятий с
                8-летним опытом работы. Специализируется на создании
                незабываемых моментов для любых торжественных событий.
              </p>
              <p>
                За годы работы провёл более 500 мероприятий различного формата —
                от камерных семейных праздников до масштабных корпоративных
                событий. Каждое мероприятие готовится индивидуально с учётом
                пожеланий клиента.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Профессиональная аппаратура</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Индивидуальный подход</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Достижения
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="bg-gray-100 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Образование и навыки:
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Театральный институт, факультет актёрского мастерства</li>
                <li>• Курсы повышения квалификации ведущих</li>
                <li>• Владение профессиональным звуковым оборудованием</li>
                <li>• Опыт работы с артистами и диджеями</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
