import { ioniq5Banner } from '../../img/banner/index';
import { ioniq5MD } from '../../img/main_display/index';
import {
	eksterior1Ioniq5,
	eksterior2Ioniq5,
	eksterior3Ioniq5,
	eksterior4Ioniq5,
	eksterior5Ioniq5,
	eksterior6Ioniq5,
	interior1Ioniq5,
	interior2Ioniq5,
	interior3Ioniq5,
	ioniq5ArticleGallery,
	section1HighlightIoniq5,
	section2HighlightIoniq5,
	section3HighlightIoniq5,
	section4HighlightIoniq5,
	gravityGoldMatteIoniq5,
	magneticSilverMetallicIoniq5,
	midnightBlackPearlIoniq5,
	opticWhiteIoniq5,
	titanGrayMetallicIoniq5,
} from '../../imgcar_list/ioniq5/index';

export const ioniq5Detail = {
	carID: 'W8poza',
	image: { banner: ioniq5Banner, mainDisplay: ioniq5MD },
	sections: {
		highlight: [
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
			color: [
				{
					description: 'Gravity Gold Matte',
					hexCode: '#9F9895',
					imgPath: gravityGoldMatteIoniq5,
				},
				{
					description: 'Midnight Black Pearl',
					hexCode: '#1D1D1E',
					imgPath: midnightBlackPearlIoniq5,
				},
				{
					description: 'Titan Gray Metallic',
					hexCode: '#434448',
					imgPath: titanGrayMetallicIoniq5,
				},
				{
					description: 'Optic White',
					hexCode: '#E3E3EB',
					imgPath: opticWhiteIoniq5,
				},
				{
					description: 'Magnetic Silver Metallic',
					hexCode: '#8B8B8E',
					imgPath: magneticSilverMetallicIoniq5,
				},
			],
			article: [],
			eksterior: [
				{
					alt: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					path: eksterior1Ioniq5,
				},
				{
					alt: 'LED Headlamp',
					path: eksterior2Ioniq5,
				},
				{
					alt: '17-inch Diamond Cut Alloy Wheels',
					path: eksterior3Ioniq5,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior4Ioniq5,
				},
			],
			interior: [
				{ alt: '', path: interior1Ioniq5 },
				{ alt: '', path: interior2Ioniq5 },
				{ alt: '', path: interior3Ioniq5 },
			],
		},
		priceList: [
			{ name: 'SIGNATURE LONG RANGE', value: 'Rp. 859,000,000' },
			{ name: 'SIGNATURE STANDARD RANGE', value: 'Rp. 809,000,000' },
			{ name: 'PRIME LONG RANGE', value: 'Rp. 789,000,000' },
			{ name: 'PRIME STANDARD RANGE', value: 'Rp. 748,000,000' },
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
							value: '170',
						},
						{
							description: 'Max. Power (kW)',
							value: '125',
						},
						{
							description: 'Max. Torque (Nm)',
							value: '350',
						},
						{
							description: 'Acceleration (Sport) (0 - 100 kph) (sec)',
							value: '8,5',
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
							value: '58',
						},
						{
							description: 'Battery Voltage(V)',
							value: '522,7',
						},
						{
							description: 'Battery Power Output (kW)',
							value: '195',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Length Overall (mm)',
							value: '4.635',
						},
						{
							description: 'Width Overall (mm)',
							value: '1.890',
						},
						{
							description: 'Height Overall (mm)',
							value: '1.605',
						},
						{
							description: 'Base Wheel (mm)',
							value: '3.000',
						},
						{
							description: 'Front Wheelthread (mm)',
							value: '1.638',
						},
						{
							description: 'Rear Wheelthread (mm)',
							value: '1.647',
						},
						{
							description: 'Front OverHang (mm)',
							value: '845',
						},
						{
							description: 'Rear OverHang (mm)',
							value: '790',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bobot',
					detail: [
						{
							description: 'Lightest WeightCurb (kg)',
							value: '1.830',
						},
						{
							description: 'Heaviest WeightCurb (kg)',
							value: '1.910',
						},
						{
							description: 'Gross Weight (kg)',
							value: '2.370',
						},
					],
				},
				{
					specID: 'FS003',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Front Wheels',
							value: '7.5J x 15',
						},
						{
							description: 'Rear Wheels',
							value: '7.5J x 15',
						},
						{
							description: 'Front Tires',
							value: '235/55 R19',
						},
						{
							description: 'Rear Tires',
							value: '235/55 R19',
						},
					],
				},
			],
		},
	},
};
