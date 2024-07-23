import { ioniq6Banner } from '../../img/banner/index';
import { ioniq6MD } from '../../img/main_display/index';
import * as Ioniq6Images from '../../img/car_list/ioniq6/index';

export const ioniq6Detail = {
	carID: 'ciEPt3',
	mainImage: { banner: ioniq6Banner, mainDisplay: ioniq6MD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: 'Awaken your world.',
				body: 'Dirancang untuk melengkapi kehidupan sehari-hari dengan memberikan ruang untuk membangkitkan potensi yang Anda punya. Melalui siluet aerodinamis, serta tampilan interior yang dirancang untuk memberikan kesenangan dalam berkendara. IONIQ 6 hadir untuk mewujudkan era baru mobilitas listrik.',
				images: [Ioniq6Images.section1Highlight1Ioniq6],
			},
			{
				code: 'highlight_segment_2',
				title: 'Charging flexibly.',
				body: 'Bebas rasa khawatir ketika mengendarai IONIQ 6. IONIQ 6 telah dilengkapi portable charger yang dapat terhubung ke stop kontak dinding standar. Selain itu IONIQ 6 juga dapat menunjang pengisian daya sampai 80% hanya dalam +/- 18 menit*.',
				images: [Ioniq6Images.section2Highlight1Ioniq6],
			},
			{
				code: 'highlight_segment_3',
				title: 'Vehicle to Load (V2L) technology.',
				body: 'Fitur V2L memungkinkan IONIQ 6 menjadi sumber daya listrik sebesar 3,6 kW untuk penggunaan perangkat elektronik, menambah kemudahan dan kenyamanan Anda saat dalam perjalanan.',
				images: [],
			},
			{
				code: 'highlight_segment_4',
				title: 'Connect with your cars',
				body: 'IONIQ 6 is equipped with Hyundai Bluelink connectivity technology, a platform that makes it easy to check important information about your car. Connect with the Hyundai call center 7 x 24 hours when an emergency occurs to immediately provide you with assistance.',
				images: [],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Gravity Gold Matte',
					hexImage: Ioniq6Images.GravityGoldMatteHexImageIonic6,
					carImage: Ioniq6Images.gravityGoldMatteIoniq6,
				},
				{
					name: 'Nocturne Gray Matte',
					hexImage: Ioniq6Images.NocturneGrayMatteHexImageIonic6,
					carImage: Ioniq6Images.nocturneGrayMatteIoniq6,
				},
				{
					name: 'Abyss Black Pearl',
					hexImage: Ioniq6Images.AbyssBlackPearlHexImageIonic6,
					carImage: Ioniq6Images.abyssBlackPearlIoniq6,
				},
				{
					name: 'Serenity White Pearl',
					hexImage: Ioniq6Images.SerenityWhitePearlHexImageIonic6,
					carImage: Ioniq6Images.serenityWhitePearlIoniq6,
				},
				{
					name: 'Biophilic Blue Pearl',
					hexImage: Ioniq6Images.BiophilicBluePearlHexImageIonic6,
					carImage: Ioniq6Images.biophilicBluePearlIoniq6,
				},
			],
			articles: [],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: Ioniq6Images.eksterior1Ioniq6,
				},
				{
					caption: 'LED Headlamp',
					image: Ioniq6Images.eksterior2Ioniq6,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: Ioniq6Images.eksterior3Ioniq6,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: Ioniq6Images.eksterior4Ioniq6,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: Ioniq6Images.eksterior5Ioniq6,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: Ioniq6Images.eksterior6Ioniq6,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: Ioniq6Images.eksterior7Ioniq6,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: Ioniq6Images.eksterior8Ioniq6,
				},
			],
			interiors: [
				{ caption: '', image: Ioniq6Images.interior1Ioniq6 },
				{ caption: '', image: Ioniq6Images.interior2Ioniq6 },
				{ caption: '', image: Ioniq6Images.interior3Ioniq6 },
			],
		},
		priceList: [
			{ model: 'SIGNATURE AWD', price: 'Rp. 1,197,000,000' },
			{ model: 'AWD MATTE COLOR', price: 'Rp. 1,200,500,000' },
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
							value: '326',
						},
						{
							name: 'Max. Power (kW)',
							value: '239',
						},
						{
							name: 'Max. Torque (Nm)',
							value: '605',
						},
						{
							name: 'Acceleration (Sport) (0 - 100 kph) (sec)',
							value: '5.1',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Transmisi',
					specs: [
						{
							name: 'Transmission Type',
							value: 'Single Speed Reduction Gear',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Konsumsi Bahan Bakar',
					specs: [
						{
							name: 'Motor Type',
							value: 'Permanent Magnet Synchronous Motor',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Aki',
					specs: [
						{
							name: 'Battery type',
							value: 'Liquid cooled Lithium Ion',
						},
						{
							name: 'Battery Capacity (kWh)',
							value: '77,4',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4,855',
						},
						{
							name: 'Width Overall (mm)',
							value: '1,880',
						},
						{
							name: 'Height Overall (mm)',
							value: '1,495',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '20 x 8.5J +53.5',
						},
						{
							name: 'Rear Wheels',
							value: '20 x 8.5J +53.5',
						},
						{
							name: 'Front Tires',
							value: '245/40R20 99Y',
						},
						{
							name: 'Rear Tires',
							value: '245/40R20 99Y',
						},
					],
				},
			],
		},
	},
};
