import type { ImageMetadata } from 'astro';

const topicImages = import.meta.glob<{ default: ImageMetadata }>('../assets/topics/*.png', { eager: true });
const topic = (id: number) => topicImages[`../assets/topics/${id}.png`].default;

export interface Topic {
	name: string;
	words: number;
	sample: string;
	image: ImageMetadata;
}

export interface Level {
	name: string;
	emoji: string;
	topics: Topic[];
	soon?: boolean;
}

// Mirrors src/reducers/CategoryReducer.js in the app (hidden categories left out).
export const LEVELS: Level[] = [
	{
		name: 'Новичок',
		emoji: '😊',
		topics: [
			{ name: 'Цифры 0–9', words: 10, sample: 'One, Two, Three', image: topic(1) },
			{ name: 'Семья', words: 12, sample: 'Mother, Father, Grandma', image: topic(2) },
			{ name: 'Цвета', words: 13, sample: 'Red, Green, Blue', image: topic(3) },
			{ name: 'Домашние животные', words: 13, sample: 'Dog, Cat, Hamster', image: topic(4) },
			{ name: 'Дикие животные', words: 8, sample: 'Fox, Wolf, Bear', image: topic(5) },
		],
	},
	{
		name: 'Любитель',
		emoji: '😋',
		topics: [
			{ name: 'Числа 10–20', words: 11, sample: 'Ten, Eleven, Twelve', image: topic(6) },
			{ name: 'Одежда', words: 22, sample: 'Coat, Jacket, Pants', image: topic(7) },
			{ name: 'Еда', words: 19, sample: 'Soup, Fish, Meat', image: topic(8) },
			{ name: 'Фрукты', words: 16, sample: 'Lemon, Apple, Pineapple', image: topic(9) },
			{ name: 'Овощи', words: 12, sample: 'Potato, Tomato, Cucumber', image: topic(10) },
			{ name: 'Части тела', words: 20, sample: 'Head, Nose, Eye', image: topic(11) },
		],
	},
	{
		name: 'Знаток',
		emoji: '🤓',
		topics: [
			{ name: 'Транспорт', words: 12, sample: 'Car, Bus, Bicycle', image: topic(12) },
			{ name: 'Школа', words: 10, sample: 'Pen, Pencil, Paper', image: topic(14) },
			{ name: 'Посуда', words: 7, sample: 'Cup, Plate, Glass', image: topic(15) },
			{ name: 'Игрушки', words: 13, sample: 'Doll, Ball, Balloon', image: topic(16) },
			{ name: 'Спорт', words: 11, sample: 'Football, Tennis, Hockey', image: topic(17) },
		],
	},
	{ name: 'Мастер', emoji: '😤', topics: [], soon: true },
];

export const TOPIC_COUNT = LEVELS.reduce((n, l) => n + l.topics.length, 0);
export const WORD_COUNT = LEVELS.reduce((n, l) => n + l.topics.reduce((m, t) => m + t.words, 0), 0);

export const FAQ: { q: string; a: string[] }[] = [
	{
		q: 'Ребёнок ещё не умеет читать. Он справится?',
		a: [
			'Да. Каждое слово сопровождается картинкой и озвучено по-русски и по-английски, а в экзамене приложение само произносит задание вслух. Читать для этого не нужно.',
		],
	},
	{
		q: 'Сколько это стоит? Есть ли реклама?',
		a: ['Приложение полностью бесплатное. В нём нет рекламы, подписок и встроенных покупок.'],
	},
	{
		q: 'Нужен ли интернет или регистрация?',
		a: [
			'Нет. Все картинки и звуки уже внутри приложения, поэтому оно работает без интернета — например, в дороге. Регистрироваться не нужно: монеты и настройки хранятся прямо на устройстве.',
		],
	},
	{
		q: 'Можно ли установить на планшет?',
		a: ['Да, LangoLand работает на iPhone, iPad, а также на телефонах и планшетах с Android.'],
	},
	{
		q: 'Как выключить фоновую музыку?',
		a: [
			'Нажмите на шестерёнку на главном экране и снимите галочку «Музыка включена». Озвучка слов при этом останется.',
		],
	},
	{
		q: 'Зачем нужны монеты?',
		a: [
			'Монеты начисляются за правильные ответы в экзамене. Это простой способ увидеть прогресс: чем больше монет, тем больше слов ребёнок уже знает.',
		],
	},
	{
		q: 'Почему уровень «Мастер» пока закрыт?',
		a: ['Мы готовим для него новые темы — профессии, мебель, хобби и другие. Он откроется в одном из следующих обновлений.'],
	},
	{
		q: 'У меня есть идея или вопрос. Куда написать?',
		a: ['Напишите на почту — она указана внизу страницы. Мы читаем все письма и с радостью обсудим, как сделать приложение лучше.'],
	},
];
