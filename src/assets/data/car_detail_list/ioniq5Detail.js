import { ioniq5Banner } from '../../img/banner/index';
import { ioniq5MD } from '../../img/main_display/index';
import * as Ioniq5Images from '../../img/car_list/ioniq5/index';

export const ioniq5Detail = {
	carID: 'W8poza',
	mainImage: { banner: ioniq5Banner, mainDisplay: ioniq5MD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: "Welcome on board. <br> Let's power up the future.",
				body: 'Era mobilitas masa depan telah hadir.<br> Inilah mobil listrik pertama yang sepenuhnya dibuat di Indonesia.<br> Rasakan pengalaman baru dengan IONIQ 5.',
				images: [section1HighlightIoniq5],
			},
			{
				code: 'highlight_segment_2',
				title: 'Charging flexibly.',
				body: 'Bebas rasa khawatir ketika mengendarai IONIQ 5. IONIQ 5 telah dilengkapi portable charger yang dapat terhubung ke stop kontak dinding standar. Selain itu IONIQ 5 juga dapat menunjang pengisian daya sampai 80% hanya dalam +/- 18 menit*.',
				images: [section2HighlightIoniq5],
			},
			{
				code: 'highlight_segment_3',
				title: 'Vehicle to Load (V2L) technology.',
				body: 'Fitur V2L memungkinkan IONIQ 5 menjadi sumber daya listrik sebesar 3,6 kW untuk penggunaan perangkat elektronik, menambah kemudahan dan kenyamanan Anda saat dalam perjalanan.',
				images: [section3HighlightIoniq5],
			},
			{
				code: 'highlight_segment_4',
				title: 'Connect with your cars',
				body: 'IONIQ 5 is equipped with Hyundai Bluelink connectivity technology, a platform that makes it easy to check important information about your car. Connect with the Hyundai call center 7 x 24 hours when an emergency occurs to immediately provide you with assistance.',
				images: [section4HighlightIoniq5],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Gravity Gold Matte',
					hexImage: Ioniq5Images.GravityGoldMatteHexImageIoniq5,
					carImage: Ioniq5Images.gravityGoldMatteIoniq5,
				},
				{
					name: 'Midnight Black Pearl',
					hexImage: Ioniq5Images.MidnightBlackPearlHexImageIoniq5,
					carImage: Ioniq5Images.midnightBlackPearlIoniq5,
				},
				{
					name: 'Titan Gray Metallic',
					hexImage: Ioniq5Images.TitanGrayMetallicHexImageIoniq5,
					carImage: Ioniq5Images.titanGrayMetallicIoniq5,
				},
				{
					name: 'Optic White',
					hexImage: Ioniq5Images.OpticWhiteHexImageIoniq5,
					carImage: Ioniq5Images.opticWhiteIoniq5,
				},
				{
					name: 'Magnetic Silver Metallic',
					hexImage: Ioniq5Images.MagneticSilverMetallicHexImageIoniq5,
					carImage: Ioniq5Images.magneticSilverMetallicIoniq5,
				},
			],
			articles: [],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: Ioniq5Images.eksterior1Ioniq5,
				},
				{
					caption: 'LED Headlamp',
					image: Ioniq5Images.eksterior2Ioniq5,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: Ioniq5Images.eksterior3Ioniq5,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: Ioniq5Images.eksterior4Ioniq5,
				},
			],
			interiors: [
				{ caption: '', image: Ioniq5Images.interior1Ioniq5 },
				{ caption: '', image: Ioniq5Images.interior2Ioniq5 },
				{ caption: '', image: Ioniq5Images.interior3Ioniq5 },
			],
		},
		priceList: [
			{ model: 'SIGNATURE LONG RANGE', price: 'Rp. 859,000,000' },
			{ model: 'SIGNATURE STANDARD RANGE', price: 'Rp. 809,000,000' },
			{ model: 'PRIME LONG RANGE', price: 'Rp. 789,000,000' },
			{ model: 'PRIME STANDARD RANGE', price: 'Rp. 748,000,000' },
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
							value: '170',
						},
						{
							name: 'Max. Power (kW)',
							value: '125',
						},
						{
							name: 'Max. Torque (Nm)',
							value: '350',
						},
						{
							name: 'Acceleration (Sport) (0 - 100 kph) (sec)',
							value: '8,5',
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
							value: '58',
						},
						{
							name: 'Battery Voltage(V)',
							value: '522,7',
						},
						{
							name: 'Battery Power Output (kW)',
							value: '195',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4.635',
						},
						{
							name: 'Width Overall (mm)',
							value: '1.890',
						},
						{
							name: 'Height Overall (mm)',
							value: '1.605',
						},
						{
							name: 'Base Wheel (mm)',
							value: '3.000',
						},
						{
							name: 'Front Wheelthread (mm)',
							value: '1.638',
						},
						{
							name: 'Rear Wheelthread (mm)',
							value: '1.647',
						},
						{
							name: 'Front OverHang (mm)',
							value: '845',
						},
						{
							name: 'Rear OverHang (mm)',
							value: '790',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bobot',
					specs: [
						{
							name: 'Lightest WeightCurb (kg)',
							value: '1.830',
						},
						{
							name: 'Heaviest WeightCurb (kg)',
							value: '1.910',
						},
						{
							name: 'Gross Weight (kg)',
							value: '2.370',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '7.5J x 15',
						},
						{
							name: 'Rear Wheels',
							value: '7.5J x 15',
						},
						{
							name: 'Front Tires',
							value: '235/55 R19',
						},
						{
							name: 'Rear Tires',
							value: '235/55 R19',
						},
					],
				},
			],
		},
	},
};
