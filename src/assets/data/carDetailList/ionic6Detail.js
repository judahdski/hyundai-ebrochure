import { ioniq6Banner } from '../../img/banner/index';
import { ioniq6MD } from '../../img/main_display/index';
import {
	eksterior1Ioniq6,
	eksterior2Ioniq6,
	eksterior3Ioniq6,
	eksterior4Ioniq6,
	eksterior5Ioniq6,
	eksterior6Ioniq6,
	eksterior7Ioniq6,
	eksterior8Ioniq6,
	interior1Ioniq6,
	interior2Ioniq6,
	interior3Ioniq6,
	section1HighlightIoniq6,
	section2HighlightIoniq6,
	abyssBlackPearlIoniq6,
	biophilicBluePearlIoniq6,
	gravityGoldMatteIoniq6,
	nocturneGrayMatteIoniq6,
	serenityWhitePearlIoniq6,
} from '../../img/carList/ioniq6/index';

export const ioniq6Detail = {
	carID: 'ciEPt3',
	image: { banner: ioniq6Banner, mainDisplay: ioniq6MD },
	sections: {
		highlight: [
			{
				code: 'highlight_segment_1',
				title: 'Awaken your world.',
				body: 'Dirancang untuk melengkapi kehidupan sehari-hari dengan memberikan ruang untuk membangkitkan potensi yang Anda punya. Melalui siluet aerodinamis, serta tampilan interior yang dirancang untuk memberikan kesenangan dalam berkendara. IONIQ 6 hadir untuk mewujudkan era baru mobilitas listrik.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_2',
				title: 'Charging flexibly.',
				body: 'Bebas rasa khawatir ketika mengendarai IONIQ 6. IONIQ 6 telah dilengkapi portable charger yang dapat terhubung ke stop kontak dinding standar. Selain itu IONIQ 6 juga dapat menunjang pengisian daya sampai 80% hanya dalam +/- 18 menit*.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_3',
				title: 'Vehicle to Load (V2L) technology.',
				body: 'Fitur V2L memungkinkan IONIQ 6 menjadi sumber daya listrik sebesar 3,6 kW untuk penggunaan perangkat elektronik, menambah kemudahan dan kenyamanan Anda saat dalam perjalanan.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_4',
				title: 'Connect with your cars',
				body: 'IONIQ 6 is equipped with Hyundai Bluelink connectivity technology, a platform that makes it easy to check important information about your car. Connect with the Hyundai call center 7 x 24 hours when an emergency occurs to immediately provide you with assistance.',
				images: ['section2_highlight_creta.jpg'],
			},
		],
		gallery: {
			color: [
				{
					description: 'Gravity Gold Matte',
					hexCode: '#9B9A92',
					imgPath: 'creta_putih_pick_color.png',
				},
				{
					description: 'Nocturne Gray Matte',
					hexCode: '#2D373B',
					imgPath: 'creta_putih_pick_color.png',
				},
				{
					description: 'Abyss Black Pearl',
					hexCode: '#030507',
					imgPath: 'main_img_gallery.png',
				},
				{
					description: 'Serenity White Pearl',
					hexCode: '#E9EEE6',
					imgPath: 'main_img_gallery.png',
				},
				{
					description: 'Biophilic Blue Pearl',
					hexCode: '#060C16',
					imgPath: 'main_img_gallery.png',
				},
			],
			article: [],
			eksterior: [
				{
					alt: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					path: 'eksterior1_creta.png',
				},
				{
					alt: 'LED Headlamp',
					path: 'eksterior2_creta.png',
				},
				{
					alt: '17-inch Diamond Cut Alloy Wheels',
					path: 'eksterior3_creta.png',
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: 'eksterior4_creta.png',
				},
			],
			interior: [
				{ alt: '', path: 'interior1_creta.png' },
				{ alt: '', path: 'interior2_creta.png' },
				{ alt: '', path: 'interior3_creta.png' },
				{ alt: '', path: 'interior4_creta.png' },
			],
		},
		priceList: [
			{ name: 'SIGNATURE AWD', value: 'Rp. 1,197,000,000' },
			{ name: 'AWD MATTE COLOR', value: 'Rp. 1,200,500,000' },
		],
		fullSpec: {
			category: [
				{ id: 'FS001', title: 'Performa' },
				{ id: 'FS002', title: 'Dimensi' },
				{ id: 'FS003', title: 'Roda' },
			],
			specDetail: [
				{
					specID: 'FS001',
					code: 'Mesin',
					detail: [
						{
							description: 'Max. Power (ps)',
							value: '326',
						},
						{
							description: 'Max. Power (kW)',
							value: '239',
						},
						{
							description: 'Max. Torque (Nm)',
							value: '605',
						},
						{
							description: 'Acceleration (Sport) (0 - 100 kph) (sec)',
							value: '5.1',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Transmisi',
					detail: [
						{
							description: 'Transmission Type',
							value: 'Single Speed Reduction Gear',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Konsumsi Bahan Bakar',
					detail: [
						{
							description: 'Motor Type',
							value: 'Permanent Magnet Synchronous Motor',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Aki',
					detail: [
						{
							description: 'Battery type',
							value: 'Liquid cooled Lithium Ion',
						},
						{
							description: 'Battery Capacity (kWh)',
							value: '77,4',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Length Overall (mm)',
							value: '4,855',
						},
						{
							description: 'Width Overall (mm)',
							value: '1,880',
						},
						{
							description: 'Height Overall (mm)',
							value: '1,495',
						},
					],
				},
				{
					specID: 'FS003',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Front Wheels',
							value: '20 x 8.5J +53.5',
						},
						{
							description: 'Rear Wheels',
							value: '20 x 8.5J +53.5',
						},
						{
							description: 'Front Tires',
							value: '245/40R20 99Y',
						},
						{
							description: 'Rear Tires',
							value: '245/40R20 99Y',
						},
					],
				},
			],
		},
	},
};
