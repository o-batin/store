import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        // tslint:disable-next-line:max-line-length
        id: 1, name: 'Xiaomi Mi A1', description: `Xiaomi Mi A1 - это первый смартфон компании который поставляется с чистой версией Android, без оболочки MIUI в рамках концепции Android One.`,
        price: 140, avaible: true, image: '../../assets/img/Xiaomi-Mi-A1-black.png'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 2, name: 'Xiaomi Redmi 6 Pro', description: `Xiaomi Redmi 6 Pro – новинка, созданная для того, чтобы радовать и удивлять. Устройство выполнено в обновленном безрамочном стиле, который подарит совершенно новые эмоции от использования.`,
        price: 150, avaible: true, image: '../../assets/img/xiaomi_redmi_6_pro.png'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 3, name: 'Xiaomi Mi 8 ', description: `Xiaomi Mi 8 – смартфон для тех, кто хочет получить стильный девайс с отличным дизайном и хорошим оснащением. Модель имеет безрамочное исполнение, благодаря чему 5,88-дюймовый AMOLED экран покрывает практически всю поверхность передней панели, за исключением выреза под камеры.`,
        price: 400, avaible: false, image: '../../assets/img/Xiaomi-Mi-8-Black.png'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 4, name: 'Xiaomi Redmi Note 5', description: `Xiaomi Redmi Note 5 – смартфон для тех, кто хочет получить максимально сбалансированный девайс, имеющий хороший экран, производительность, достаточно высокое качество и, при этом, доступную стоимость.`,
        price: 150, avaible: true, image: '../../assets/img/Xiaomi-Redmi-Note-5A-Pro-grey-2.png'
      },
      {
        // tslint:disable-next-line:max-line-length
        id: 5, name: 'Xiaomi Mi A2 Lite', description: `Xiaomi Mi A2 Lite - это второе поколение в линейке смартфонов компании на "чистом Android", то есть без дополнительных оболочек. Смартфон создан в сотрудничестве с Google по программе Android One.`,
        price: 160, avaible: false, image: '../../assets/img/Xiaomi-Mi-A2-Lite-blk.png'
      }
    ];
    return { products };
  }
}
