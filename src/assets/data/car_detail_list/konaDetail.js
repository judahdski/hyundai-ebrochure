import { konaBanner } from '../../img/banner/index';
import { konaMD } from '../../img/main_display/index';
import * as KonaImages from '../../img/car_list/kona/index';

export const konaDetail = {
	carID: 'a23scs', // kona
	mainImage: { banner: konaBanner, mainDisplay: konaMD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: 'Your future playground.',
				body: 'Dengan the all-new KONA Electric, masa depan kini bisa kamu rasakan. Nikmati perjalanan yang lebih seru dan berani tampil beda saat kamu menempuh jarak yang lebih jauh tanpa khawatir dengan teknologi dan inovasi yang selalu terkoneksi. Ciptakan terus keseruan tanpa batas lewat imajinasi di setiap eksplorasi.',
				images: [KonaImages.section1Highlight1Kona],
			},
			{
				code: 'highlight_segment_2',
				title: 'Ruang luas untuk perjalanan seru.',
				body: 'Ke mana pun kamu bereksplorasi, nikmati ruang yang nyaman dan estetik dengan ruang kaki dan bahu yang luas dan lantai datar yang luas, pastikan perjalananmu penuh keseruan.',
				images: [KonaImages.section2Highlight1Kona, KonaImages.section2Highlight2Kona, KonaImages.section2Highlight3Kona],
			},
			{
				code: 'highlight_segment_3',
				title: 'Keseruan tanpa batas, jarak lebih jauh.',
				body: 'Rasakan keseruan tanpa batas di setiap eksplorasi dengan jarak tempuh lebih dari 600+ km*.',
				images: [KonaImages.section3Highlight1Kona],
			},
			{
				code: 'highlight_segment_4',
				title: 'Connect with your car.',
				body: 'Platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam untuk berikan Anda bantuan serta dilengkapi dengan OTA (Over the Air) yang memudahkan update software kapan pun dan dimana pun.',
				images: [KonaImages.section4Highlight1Kona],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Midnight Black Pearl',
					hexImage: KonaImages.MidnightBlackPearlHexImageKona,
					carImage: KonaImages.MidnightBlackPearlKona,
				},
				{
					name: 'Titan Gray Metallic',
					hexImage: KonaImages.TitanGrayMetallicHexImageKona,
					carImage: KonaImages.TitanGrayMetallicKona,
				},
				{
					name: 'Creamy White Pearl',
					hexImage: KonaImages.CreamyWhitePearlHexImageKona,
					carImage: KonaImages.CreamyWhitePearlKona,
				},
				{
					name: 'Optic White Matte',
					hexImage: KonaImages.OpticWhiteMatteHexImageKona,
					carImage: KonaImages.OpticWhiteMatteKona,
				},
				{
					name: 'Dragon Red Pearl',
					hexImage: KonaImages.DragonRedPearlHexImageKona,
					carImage: KonaImages.DragonRedPearlKona,
				},
			],
			articles: [
				{
					title: 'Menuju masa depan dengan tampilan futuristik dan garis kontur yang dinamis.',
					body: 'Tampil beda dengan Pixelated Seamless Horizon Lamp yang dinamis dan elegan, berikan kesan futuristik saat kamu mengeksplorasi destinasi baru. Tampilan KONA Electric yang dinamis semakin menonjol dengan lipatan tajam diagonal pada sisi samping yang menghubungkan cetakan krom satin dari garis sabuk ke spoiler, menciptakan kontur yang membungkus seluruh kendaraan. Selaras dengan bagian depannya, Pixelated Seamless Horizon Lamp membuat KONA Electric semakin menonjol dengan menunjukkan ciri khasnya.',
					images: [KonaImages.konaArticleGallery],
				},
			],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: KonaImages.exterior1Kona,
				},
				{
					caption: 'LED Headlamp',
					image: KonaImages.exterior2Kona,
				},
			],
			interiors: [
				{ caption: '', image: KonaImages.interior1Kona },
				{ caption: '', image: KonaImages.interior2Kona },
				{ caption: '', image: KonaImages.interior3Kona },
				{ caption: '', image: KonaImages.interior4Kona },
				{ caption: '', image: KonaImages.interior5Kona },
				{ caption: '', image: KonaImages.interior6Kona },
			],
		},
		priceList: [
			{ model: 'Signature Long Range', price: 'Rp. 590,400,000' },
			{ model: 'Signature Std Range', price: 'Rp. 575,400,000' },
			{ model: 'Prime Long Range', price: 'Rp. 560,400,000' },
			{ model: 'Prime Std Range', price: 'Rp. 515,400,000' },
			{ model: 'Style', price: 'Rp. 499,400,000' },
		],
		fullSpec: {
			categories: [
				{ id: 'FS001', title: 'Performa' },
				{ id: 'FS002', title: 'Dimensi' },
				{ id: 'FS003', title: 'Roda' },
			],
			details: [
				{
					categoryID: 'FS001',
					specType: 'Mesin',
					specs: [
						{
							name: 'Max. Power (ps)',
							value: '156',
						},
						{
							name: 'Max. Power (kW)',
							value: '114.6',
						},
						{
							name: 'Max. Torque (Nm)',
							value: '255',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Konsumsi Bahan Bakar',
					specs: [
						{
							name: 'All Electric Range (km, NEDC mode)',
							value: '448',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Aki',
					specs: [
						{
							name: 'Battery type',
							value: 'Lithium ion',
						},
						{
							name: 'Battery Capacity (kWh)',
							value: '48.9',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4355',
						},
						{
							name: 'Width Overall (mm)',
							value: '1825',
						},
						{
							name: 'Height Overall (mm)',
							value: '1575',
						},
						{
							name: 'Base Wheel (mm)',
							value: '2660',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bagasi',
					specs: [
						{
							name: 'Cargo Area (L)',
							value: '466/1300L',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '7.0J x 17"',
						},
						{
							name: 'Rear Wheels',
							value: '7.0J x 17"',
						},
						{
							name: 'Front Tires',
							value: '215/60 R17',
						},
						{
							name: 'Rear Tires',
							value: '215/60 R17',
						},
					],
				},
			],
		},
	},
};
