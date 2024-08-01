import './styles.css';

import { fakerJA, fakerDE, fakerZH_CN } from '@faker-js/faker';
function showToast(message, duration) {
  var toast = document.getElementById('toast');
  toast.style.display = 'block';
  toast.innerHTML = message;

  // 可以在这里调整toast的大小
  toast.style.width = '200px'; // 修改宽度
  toast.style.height = '50px'; // 修改高度

  // 计时器隐藏toast
  setTimeout(function () {
    toast.style.display = 'none';
  }, duration || 3000);
}
function down() {
  var data = [];
  for (const faker of [fakerZH_CN]) {
    //length 数量， ProdCate...字段,  //faker.number.bigInt  生成字段的方法 参考  https://fakerjs.dev/api/
    data = Array.from({ length: 50 }).map(function (item, index) {
      return {
        ProdId: `${faker.number.bigInt()}`,
        RankId: index + 1,
        ProdCate:
          faker.commerce.department() +
          '>>' +
          faker.commerce.department() +
          '>>' +
          faker.commerce.department() +
          '>>' +
          faker.commerce.department(),
        ProdShopCate:
          faker.commerce.department() +
          '>>' +
          faker.commerce.department() +
          '>>' +
          faker.commerce.department() +
          '>>' +
          faker.commerce.department(),
        ProdDesc: faker.commerce.productDescription(),
        ProdName: faker.commerce.productDescription(),
        ProdPoint: 9,
        ProdImg: faker.image.urlPicsumPhotos(),
        ProdJAN: faker.commerce.isbn(),
        ProdCode: faker.string.alpha(4) + '-' + faker.string.numeric(4),
        PriceMin: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
        PriceMax: faker.commerce.price({ min: 100, max: 200, dec: 0 }),
        ProdReviewScore: faker.number.int({ min: 1, max: 5 }),
        ProdReviewQty: faker.number.int({ min: 100, max: 5000 }),
        StoreShopName: 'DAYDAYBUY乐天店-' + faker.string.alpha(),
      };
    });
  }

  (document.getElementById('json') as HTMLInputElement).value = JSON.stringify(
    data,
    null,
    4
  );
}

document.getElementById('getjson').addEventListener('click', down);

document
  .getElementById('copyjson')
  .addEventListener('click', async function () {
    await navigator.clipboard.writeText(
      (document.getElementById('json') as HTMLInputElement).value
    );

    showToast('复制成功', 3000);
  });
