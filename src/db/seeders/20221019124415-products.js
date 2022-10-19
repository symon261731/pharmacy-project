/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [{
      url: 'https://images.apteka.ru/original_42e2cea5-8556-4681-9938-c409b3de2daa.webp',
      name: 'Пенталгин 24 шт. таблетки, покрытые пленочной оболочкой',
      price: 229,
      sale: 20,
      amount: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_45ed50bc-ac81-445d-8141-3296e5bd0572.webp',
      name: 'Ингавирин 90 мг 10 шт. капсулы',
      price: 750,
      sale: 30,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_e5e1c31d-85f9-41fc-b9fe-8f352628e6a6.webp',
      name: 'Комбилипен раствор для внутримышечного введения 2 мл ампулы 10 шт',
      price: 337,
      sale: 50,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_7b01fef4-d3ef-47ac-8b90-387d10411e40.webp',
      name: 'Ксарелто 15 мг 28 шт. таблетки',
      price: 3224,
      sale: 60,
      amount: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_3fc9b092-9cd1-486a-a923-8bbcd9463cb3.webp',
      name: 'Анвимакс порошок',
      price: 200,
      sale: 10,
      amount: 30,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_28e40905-542c-4fda-b73e-4a3d6dea0bd1.webp',
      name: 'Алфлутоп раствор для инъекций',
      price: 1895,
      sale: 30,
      amount: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_75a921dc-e8e1-4e54-8308-21ff5250b4bc.webp',
      name: 'Арбидол максимум 200 мг',
      price: 528,
      sale: 10,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_16fc2507-d458-49b1-bda6-11be5ea65af1.webp',
      name: 'Омепразол 20 мг',
      price: 50,
      sale: 20,
      amount: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_934d07f2-7ce3-487b-a777-e3247481c889.webp',
      name: 'Снуп 90 мкг/доза',
      price: 150,
      sale: 30,
      amount: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_c6630b00-be7c-4e37-a3de-0e9bd52de5fa.webp',
      name: 'Метформин канон 850 мг 60 шт',
      price: 77,
      sale: 15,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_ce62b25d-254f-4df9-bf1b-1e21443deeee.webp',
      name: 'Джардинс 10 мг 30 шт',
      price: 3000,
      sale: 50,
      amount: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_ea709d91-c819-4739-b03a-b0ceee53daf1.webp',
      name: 'Но-шпа форте 80 мг 24 шт',
      price: 180,
      sale: 15,
      amount: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_fecc8c3c-3255-449f-8993-4e8c7ee18429.webp',
      name: 'Ферлатум 800 м',
      price: 1000,
      sale: 30,
      amount: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_94a074fb-caac-4b3d-b1a2-dbc61a5804e3.webp',
      name: 'Нимесил 100 мг 30 шт',
      price: 1040,
      sale: 25,
      amount: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      url: 'https://images.apteka.ru/original_4d0e722b-166a-4789-bece-7236b3d56691.webp',
      name: 'ПАРАЦЕТАМОЛ 0,5 N10',
      price: 40,
      sale: 25,
      amount: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
