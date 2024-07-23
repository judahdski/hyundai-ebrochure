import { stariaBanner } from '../../img/banner/index';
import { stariaMD } from '../../img/main_display/index';
import * as StariaImages from '../../img/car_list/staria/index';

export const stariaDetail = {
	carID: '1hsMWj',
	mainImage: { banner: stariaBanner, mainDisplay: stariaMD },
	sections: {
		highlights: [
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
			colors: [
				{
					name: 'Abyss Black Pearl',
					hexImage: StariaImages.AbyssBlackPearlHexImageStaria,
					carImage: StariaImages.abyssBlackPearlStaria,
				},
				{
					name: 'Shimmering Silver Metallic',
					hexImage: StariaImages.ShimmeringSilverMetallicHexImageStaria,
					carImage: StariaImages.shimmeringSilverMetallicStaria,
				},
				{
					name: 'Graphite Gray Metallic',
					hexImage: StariaImages.GraphiteGrayMetallicHexImageStaria,
					carImage: StariaImages.graphiteGrayMetallicStaria,
				},
				{
					name: 'Creamy White Pearl',
					hexImage: StariaImages.CreamyWhiteHexImageStaria,
					carImage: StariaImages.creamyWhitePearlStaria,
				},
			],
			articles: [],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: StariaImages.eksterior1Staria,
				},
				{
					caption: 'LED Headlamp',
					image: StariaImages.eksterior2Staria,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: StariaImages.eksterior3Staria,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StariaImages.eksterior4Staria,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StariaImages.eksterior5Staria,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StariaImages.eksterior6Staria,
				},
			],
			interiors: [
				{ caption: '', image: StariaImages.interior1Staria },
				{ caption: '', image: StariaImages.interior2Staria },
				{ caption: '', image: StariaImages.interior3Staria },
				{ caption: '', image: StariaImages.interior4Staria },
			],
		},
		priceList: [
			{ model: 'LOMBARDI', price: 'Rp. 1,429,000,000' },
			{ model: 'SIGN 7', price: 'Rp. 1,039,500,000' },
			{ model: 'SIGN 9', price: 'Rp. 905,500,000' },
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
							name: 'Engine Type',
							value: 'R 2.2 CRDi',
						},
						{
							name: 'Displacement (cc)',
							value: '2,199',
						},
						{
							name: 'Max Power (ps/rpm)',
							value: '177/3,800',
						},
						{
							name: 'Max Toque (kg-m/rpm)',
							value: '44/1,500 - 2,500',
						},
						{
							name: 'Number of Cylinders',
							value: '4',
						},
						{
							name: 'Valves of Cylinders',
							value: '16-valve, HLA',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Transmisi',
					specs: [
						{
							name: 'Transmission Type',
							value: 'A/T',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Konsumsi Bahan Bakar',
					specs: [
						{
							name: 'Fuel Type',
							value: 'Diesel',
						},
						{
							name: 'Tank Capacity',
							value: '75 L',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '5,253',
						},
						{
							name: 'Width Overall (mm)',
							value: '1,997',
						},
						{
							name: 'Height Overall (mm)',
							value: '1,990',
						},
						{
							name: 'Base Wheel (mm)',
							value: '3,273',
						},
						{
							name: 'Front Wheelthread (mm)',
							value: '1,721',
						},
						{
							name: 'Rear Wheelthread (mm)',
							value: '1,732',
						},
						{
							name: 'Front OverHang (mm)',
							value: '910',
						},
						{
							name: 'Rear OverHang (mm)',
							value: '	1,070',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bagasi',
					specs: [
						{
							name: 'Cargo Area (L)',
							value: '117 / 882',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bobot',
					specs: [
						{
							name: 'Lightest WeightCurb (kg)',
							value: '2,285',
						},
						{
							name: 'Heaviest WeightCurb (kg)',
							value: '2,384',
						},
						{
							name: 'Gross Weight (kg)',
							value: '3,120',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '7.0J x 18"',
						},
						{
							name: 'Rear Wheels',
							value: '7.0J x 18"',
						},
						{
							name: 'Front Tires',
							value: '235/55 R18',
						},
						{
							name: 'Rear Tires',
							value: '235/55 R18',
						},
					],
				},
			],
		},
	},
};
