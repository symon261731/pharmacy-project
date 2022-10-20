/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      url: 'https://images.apteka.ru/original_42e2cea5-8556-4681-9938-c409b3de2daa.webp',
      name: 'Пенталгин 24 шт. таблетки, покрытые пленочной оболочкой',
      price: 229,
      sale: 20,
      amount: 20,
      describe:'Пенталгин – это комбинированный обезболивающий препарат, с уникальной формулой пяти активных компонентов, для облегчения боли, воспаления и спазмов. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_45ed50bc-ac81-445d-8141-3296e5bd0572.webp',
      name: 'Ингавирин 90 мг 10 шт. капсулы',
      price: 750,
      sale: 30,
      amount: 10,
      describe:'Ингавирин включают в группу противовирусных и противовоспалительных средств, его могут принимать для предотвращения возникновения простудных заболеваний или для лечения аденовирусной инфекции, гриппа, ОРВИ и других болезней вирусной этиологии.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_e5e1c31d-85f9-41fc-b9fe-8f352628e6a6.webp',
      name: 'Комбилипен раствор для внутримышечного введения 2 мл ампулы 10 шт',
      price: 337,
      sale: 50,
      amount: 0,
      describe:'Комбинированный поливитаминный препарат. Действие препарата определяется свойствами витаминов, входящих в его состав. Нейротропные витамины группы В оказывают благоприятное воздействие на воспалительные и дегенеративные заболевания нервной системы и опорно-двигательного аппарата.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_7b01fef4-d3ef-47ac-8b90-387d10411e40.webp',
      name: 'Ксарелто 15 мг 28 шт. таблетки',
      price: 3224,
      sale: 60,
      amount: 2,
      describe:'Применяется для профилактики инсульта и системной тромбоэмболии у пациентов с фибрилляцией предсердий неклапанного происхождения.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_3fc9b092-9cd1-486a-a923-8bbcd9463cb3.webp',
      name: 'Анвимакс порошок',
      price: 200,
      sale: 10,
      amount: 30,
      describe:'Комбинированный препарат, обладает противовирусным, интерфероногенным, жаропонижающим, обезболивающим, антигистаминным и ангиопротекторным действием.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_28e40905-542c-4fda-b73e-4a3d6dea0bd1.webp',
      name: 'Алфлутоп раствор для инъекций',
      price: 1895,
      sale: 30,
      amount: 1,
      describe:'Алфлутоп предотвращает разрушение макромолекулярных структур нормальных тканей, стимулирует процессы восстановления в интерстициальной ткани и ткани суставного хряща, что объясняет его анальгезирующее действие.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_75a921dc-e8e1-4e54-8308-21ff5250b4bc.webp',
      name: 'Арбидол максимум 200 мг',
      price: 528,
      sale: 10,
      amount: 10,
      describe:'Противовирусное, иммуностимулирующее средство. Лечение и профилактика гриппа и других ОРВИ, хронический бронхит, пневмония, рецидивирующая герпетическая инфекция, для профилактики инфекционных осложнений и нормализации иммунного статуса.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_16fc2507-d458-49b1-bda6-11be5ea65af1.webp',
      name: 'Омепразол 20 мг',
      price: 50,
      sale: 20,
      amount: 20,
      describe:'Омепразол подавляет базальную и стимулированную любым раздражителем секрецию соляной кислоты на заключительной стадии. Снижает общий объем желудочной секреции и угнетает выделение пепсина.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_934d07f2-7ce3-487b-a777-e3247481c889.webp',
      name: 'Снуп 90 мкг/доза',
      price: 150,
      sale: 30,
      amount: 5,
      describe:'Ксилометазолин относится к группе местных сосудосуживающих средств (деконгестантов) с альфа-адреномиметической активностью. Вызывает сужение кровеносных сосудов слизистой оболочки носа, устраняя отек и гиперемию слизистой оболочки носа, восстанавливает проходимость носовых ходов, облегчает носовое дыхание.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_c6630b00-be7c-4e37-a3de-0e9bd52de5fa.webp',
      name: 'Метформин канон 850 мг 60 шт',
      price: 77,
      sale: 15,
      amount: 0,
      describe:'Метформин стимулирует синтез гликогена, воздействуя на гликогенсинтетазу. Увеличивает транспортную емкость всех типов мембранных переносчиков глюкозы. Задерживает всасывание глюкозы в кишечнике. Снижает уровень триглицеридов, ЛПНП, ЛПОНП.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_ce62b25d-254f-4df9-bf1b-1e21443deeee.webp',
      name: 'Джардинс 10 мг 30 шт',
      price: 3000,
      sale: 50,
      amount: 3,
      describe:'Применяется при сахарном диабете у 2 типов взрослых пациентов с неадекватным гликемическим контролем в дополнение к диетотерапии и физическим упражнениям в качестве монотерапии и в качестве комбинированной терапии с другими гипогликемическими препаратами, включая инсулин.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_ea709d91-c819-4739-b03a-b0ceee53daf1.webp',
      name: 'Но-шпа форте 80 мг 24 шт',
      price: 180,
      sale: 15,
      amount: 10,
      describe:'Применяется при спазмах гладкой мускулатуры при заболеваниях желчевыводящих путей: холецистолитиаз, холангиолитиаз, холецистит, перихолецистит, холангит, папиллит.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_fecc8c3c-3255-449f-8993-4e8c7ee18429.webp',
      name: 'Ферлатум 800 м',
      price: 1000,
      sale: 30,
      amount: 7,
      describe:'Применяется для лечение латентного и клинически выраженного дефицита железа (железодефицитной анемии).',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_94a074fb-caac-4b3d-b1a2-dbc61a5804e3.webp',
      name: 'Нимесил 100 мг 30 шт',
      price: 1040,
      sale: 25,
      amount: 4,
      describe:'Нимесулид является НПВС из класса сульфонамидов. Оказывает противовоспалительное, обезболивающее и жаропонижающее действие.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_4d0e722b-166a-4789-bece-7236b3d56691.webp',
      name: 'ПАРАЦЕТАМОЛ 0,5 N10',
      price: 40,
      sale: 25,
      amount: 15,
      describe:'Парацетамо́л (лат. Paracetamolum) — лекарственное средство, анальгетик и антипиретик из группы анилидов, оказывает жаропонижающее действие.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
