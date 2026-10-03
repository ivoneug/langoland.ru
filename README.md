# langoland.ru

Лендинг приложения LangoLand на [Astro](https://astro.build), хостится на GitHub Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # статический сайт в dist/
```

Пуш в `main` собирает и публикует сайт через `.github/workflows/deploy.yml`.

## Что где

- `src/data/site.ts` — название, описание, почта, ссылки на магазины.
- `src/data/content.ts` — темы по уровням и FAQ. Темы повторяют `src/reducers/CategoryReducer.js` из приложения:
  при добавлении слов или тем обновите числа здесь, счётчики на странице посчитаются сами.
- `src/pages/privacy/` — политика конфиденциальности. Адрес `/privacy/` указан в App Store и Google Play — не меняйте его.
- `src/assets/screens/` — скриншоты приложения (iPhone, 828 px по ширине), Astro сам конвертирует их в webp.
- `public/og.jpg` — картинка для превью ссылок (1200×630).

## Домен

`public/CNAME` содержит `langoland.ru`. DNS у регистратора:

| Тип   | Имя   | Значение                                                                 |
| ----- | ----- | ------------------------------------------------------------------------ |
| A     | @     | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153       |
| AAAA  | @     | 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153 |
| CNAME | www   | ivoneug.github.io                                                        |
