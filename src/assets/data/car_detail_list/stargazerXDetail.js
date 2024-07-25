import { stargazerXBanner } from '../../img/banner/index';
import { stargazerXMD } from '../../img/main_display/index';
import * as StargazerXImages from '../../img/car_list/stargazer-x/index';

export const stargazerXDetail = {
	carID: 'ipEZQz',
	mainImage: { banner: stargazerXBanner, mainDisplay: stargazerXMD },
	sections: {
		highlight: [
			{
				code: 'highlight_segment_1',
				title: 'Unleash the X in you.',
				body: 'Tunjukkan faktor X dalam dirimu bersama Hyundai . Desain baru berkarakter tegas namun tetap stylish dan futuristik, dilengkapi dengan beragam fitur inovatif membuat eksplorasi dalam hidup lebih menyenangkan.',
				images: [StargazerXImages.section1HighlightStargazerX],
			},
			{
				code: 'highlight_segment_2',
				title: 'Bluelink <br> Connect with your car.',
				body: 'Hyundai  telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: [StargazerXImages.section2Highlight1StargazerX, StargazerXImages.section2Highlight2StargazerX, StargazerXImages.section2Highlight3StargazerX],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Dragon Red Pearl',
					hexImage: StargazerXImages.DragonRedPearlHexImageStargazerx,
					carImage: StargazerXImages.dragoRedPearlStargazerX,
				},
				{
					name: 'Magnetic Silver Metalic',
					hexImage: StargazerXImages.MagneticSilverMetallicHexImageStargazerx,
					carImage: StargazerXImages.magneticSilverMetallicStargazerX,
				},
				{
					name: 'Creamy White Pearl',
					hexImage: StargazerXImages.CreamyWhitePearlHexImageStargazerx,
					carImage: StargazerXImages.creamyWhitePearlStargazerX,
				},
				{
					name: 'Midnight Black Pearl',
					hexImage: StargazerXImages.MidnightBlackPearlHexImageStargazerx,
					carImage: StargazerXImages.midnightBlackPearlStargazerx,
				},
				{
					name: 'Titan Gray Metalic',
					hexImage: StargazerXImages.TitanGrayMetallicHexImageStargazerx,
					carImage: StargazerXImages.titanGrayMetallicStargazerX,
				},
			],
			articles: [
				{
					title: 'Express your soul.',
					body: ' tampil dengan desain eksterior baru X Dedicated Design menjadi simbol dari semangat baru untuk mengekspresikan jati dirimu yang sesungguhnya.',
					images: [StargazerXImages.stargazerxArticleGallery],
				},
			],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: StargazerXImages.eksterior1StargazerX,
				},
				{
					caption: 'LED Headlamp',
					image: StargazerXImages.eksterior2StargazerX,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: StargazerXImages.eksterior3StargazerX,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerXImages.eksterior4StargazerX,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerXImages.eksterior5StargazerX,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerXImages.eksterior6StargazerX,
				},
			],
			interiors: [
				{ caption: '', image: StargazerXImages.interior1StargazerX },
				{ caption: '', image: StargazerXImages.interior2StargazerX },
				{ caption: '', image: StargazerXImages.interior3StargazerX },
				{ caption: '', image: StargazerXImages.interior4StargazerX },
			],
		},
		priceList: [
			{ name: 'Prime Matte Color', price: 'Rp. 350,500,000' },
			{ name: 'Prime', price: 'Rp. 347,400,000' },
			{ name: 'Style', price: 'Rp. 336,800,000' },
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
							value: 'Smartstream G1.5 MPI Inline 4 cylinders',
						},
						{
							name: 'Displacement (cc)',
							value: '1.497',
						},
						{
							name: 'Max Power (ps/rpm)',
							value: '84,4 (115)/6.300',
						},
						{
							name: 'Max Toque (kg-m/rpm)',
							value: '143,8 (14.7)/4.500',
						},
						{
							name: 'Number of Cylinders',
							value: '4',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Transmisi',
					specs: [
						{
							name: 'Transmission Type',
							value: 'IVT',
						},
					],
				},
				{
					categoryID: 'FS001',
					specType: 'Konsumsi Bahan Bakar',
					specs: [
						{
							name: 'Fuel Type',
							value: 'Gasoline',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4.495',
						},
						{
							name: 'Width Overall (mm)',
							value: '1.815',
						},
						{
							name: 'Height Overall (mm)',
							value: '1.710',
						},
						{
							name: 'Base Wheel (mm)',
							value: '2.780',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '6,5J x 17"',
						},
						{
							name: 'Rear Wheels',
							value: '6,5J x 17"',
						},
						{
							name: 'Front Tires',
							value: '205/55R17',
						},
						{
							name: 'Rear Tires',
							value: '205/55R17',
						},
					],
				},
			],
		},
	},
};
