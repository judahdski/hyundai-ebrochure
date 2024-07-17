import { stariaBanner } from "../../img/banner/index";
import { stariaMD } from "../../img/main_display/index";
import {
	eksterior1Staria,
	eksterior2Staria,
	eksterior3Staria,
	eksterior4Staria,
	eksterior5Staria,
	eksterior6Staria,
	interior1Staria,
	interior2Staria,
	interior3Staria,
	interior4Staria,
	section1Highlight1Staria,
	section2Highlight1Staria,
	abyssBlackPearlStaria,
	creamyWhitePearlStaria,
	graphiteGrayMetallicStaria,
	shimmeringSilverMetallicStaria
} from "../../img/car_list/staria/index";

export const stariaDetail = {
	carID: '1hsMWj',
	image: { banner: stariaBanner, mainDisplay: stariaMD },
	sections: {
		highlight: [
			{
				code: 'highlight_segment_1',
				title: 'Larger than life.',
				body: 'Bagi Anda yang selalu membuka ruang demi kesuksesan, bersiaplah menjalani pencapaian demi pencapaian bersama STARIA. STARIA merevolusi fungsi ruang berkendara untuk berpegian dalam kenyamanan yang maksimal, melakukan percakapan tatap muka yang menyenangkan selama perjalanan, sambil menikmati momen-momen yang memperkaya hidup Anda.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_2',
				title: 'Launch into a new dimension.',
				body: 'Mengadopsi gaya on-curve design, STARIA mengaplikasikan inovasi terbarunya pada rancang bentuk kendaraan MPV. Siluet futuristiknya membungkus berbagai fitur teknologi terdepan untuk berkendara yang semakin aman, nyaman dan mudah. Lebih dari sekedar membangun estetika desain, STARIA menciptakan kelas dan standar kemewahan yang baru di segmen MPV.',
				images: ['section2_highlight_creta.jpg'],
			},
		],
		gallery: {
			color: [
				{
					description: 'Abyss Black Pearl',
					hexCode: '#1D1C1E',
					imgPath: abyssBlackPearlStaria,
				},
				{
					description: 'Shimmering Silver Metallic',
					hexCode: '#CBCBCB',
					imgPath: shimmeringSilverMetallicStaria,
				},
				{
					description: 'Graphite Gray Metallic',
					hexCode: '#2C2C31',
					imgPath: graphiteGrayMetallicStaria,
				},
				{
					description: 'Creamy White Pearl',
					hexCode: '#F9F9FB',
					imgPath: creamyWhitePearlStaria,
				},
			],
			article: [],
			eksterior: [
				{
					alt: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					path: eksterior1Staria,
				},
				{
					alt: 'LED Headlamp',
					path: eksterior2Staria,
				},
				{
					alt: '17-inch Diamond Cut Alloy Wheels',
					path: eksterior3Staria,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior4Staria,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior5Staria,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior6Staria,
				},
			],
			interior: [
				{ alt: '', path: interior1Staria },
				{ alt: '', path: interior2Staria },
				{ alt: '', path: interior3Staria },
				{ alt: '', path: interior4Staria },
			],
		},
		priceList: [
			{
				name: 'LOMBARDI',
				value: 'Rp. 1,429,000,000',
			},
			{ name: 'SIGN 7', value: 'Rp. 1,039,500,000' },
			{ name: 'SIGN 9', value: 'Rp. 905,500,000' },
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
							description: 'Engine Type',
							value: 'R 2.2 CRDi',
						},
						{
							description: 'Displacement (cc)',
							value: '2,199',
						},
						{
							description: 'Max Power (ps/rpm)',
							value: '177/3,800',
						},
						{
							description: 'Max Toque (kg-m/rpm)',
							value: '44/1,500 - 2,500',
						},
						{
							description: 'Number of Cylinders',
							value: '4',
						},
						{
							description: 'Valves of Cylinders',
							value: '16-valve, HLA',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Transmisi',
					detail: [
						{
							description: 'Transmission Type',
							value: 'A/T',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Konsumsi Bahan Bakar',
					detail: [
						{
							description: 'Fuel Type',
							value: 'Diesel',
						},
						{
							description: 'Tank Capacity',
							value: '75 L',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Length Overall (mm)',
							value: '5,253',
						},
						{
							description: 'Width Overall (mm)',
							value: '1,997',
						},
						{
							description: 'Height Overall (mm)',
							value: '1,990',
						},
						{
							description: 'Base Wheel (mm)',
							value: '3,273',
						},
						{
							description: 'Front Wheelthread (mm)',
							value: '1,721',
						},
						{
							description: 'Rear Wheelthread (mm)',
							value: '1,732',
						},
						{
							description: 'Front OverHang (mm)',
							value: '910',
						},
						{
							description: 'Rear OverHang (mm)',
							value: '	1,070',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bagasi',
					detail: [
						{
							description: 'Cargo Area (L)',
							value: '117 / 882',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bobot',
					detail: [
						{
							description: 'Lightest WeightCurb (kg)',
							value: '2,285',
						},
						{
							description: 'Heaviest WeightCurb (kg)',
							value: '2,384',
						},
						{
							description: 'Gross Weight (kg)',
							value: '3,120',
						},
					],
				},
				{
					specID: 'FS003',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Front Wheels',
							value: '7.0J x 18"',
						},
						{
							description: 'Rear Wheels',
							value: '7.0J x 18"',
						},
						{
							description: 'Front Tires',
							value: '235/55 R18',
						},
						{
							description: 'Rear Tires',
							value: '235/55 R18',
						},
					],
				},
			],
		},
	},
};
