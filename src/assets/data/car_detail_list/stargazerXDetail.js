import { stargazerXBanner } from '../../img/banner/index';
import { stargazerXMD } from '../../img/main_display/index';
import {
	eksterior1StargazerX,
	eksterior2StargazerX,
	eksterior3StargazerX,
	eksterior4StargazerX,
	eksterior5StargazerX,
	eksterior6StargazerX,
	interior1StargazerX,
	interior2StargazerX,
	interior3StargazerX,
	interior4StargazerX,
	stargazerxArticleGallery,
	section1HighlightStargazerX,
	section1Highlight2StargazerX,
	section1Highlight3StargazerX,
	section2Highlight1StargazerX,
	section2Highlight2StargazerX,
	section2Highlight3StargazerX,
	creamyWhitePearlStargazerX,
	magneticSilverMetallicStargazerX,
	titanGrayMetallicStargazerX,
	midnightBlackPearlStargazerx,
	dragoRedPearlStargazerX,
} from '../../img/car_list/stargazer-x/index';

export const stargazerXDetail = {
	carID: 'ipEZQz',
	image: { banner: stargazerXBanner, mainDisplay: stargazerXMD },
	sections: {
		highlight: [
			{
				code: 'highlight_segment_1',
				title: 'Unleash the X in you.',
				body: 'Tunjukkan faktor X dalam dirimu bersama Hyundai . Desain baru berkarakter tegas namun tetap stylish dan futuristik, dilengkapi dengan beragam fitur inovatif membuat eksplorasi dalam hidup lebih menyenangkan.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_2',
				title: 'Bluelink <br> Connect with your car.',
				body: 'Hyundai  telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: ['section2_highlight_creta.jpg'],
			},
		],
		gallery: {
			color: [
				{
					description: 'Dragon Red Pearl',
					hexCode: '#9A2F2E',
					imgPath: dragoRedPearlStargazerX,
				},
				{
					description: 'Magnetic Silver Metalic',
					hexCode: '#898789',
					imgPath: magneticSilverMetallicStargazerX,
				},
				{
					description: 'Creamy White Pearl',
					hexCode: '#F2F5F5',
					imgPath: creamyWhitePearlStargazerX,
				},
				{
					description: 'Midnight Black Pearl',
					hexCode: '#181A1B',
					imgPath: midnightBlackPearlStargazerx,
				},
				{
					description: 'Titan Gray Metalic',
					hexCode: '#424649',
					imgPath: titanGrayMetallicStargazerX,
				},
			],
			article: [
				{
					title: 'Express your soul.',
					body: ' tampil dengan desain eksterior baru X Dedicated Design menjadi simbol dari semangat baru untuk mengekspresikan jati dirimu yang sesungguhnya.',
					img: [stargazerxArticleGallery],
				},
			],
			eksterior: [
				{
					alt: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					path: eksterior1StargazerX,
				},
				{
					alt: 'LED Headlamp',
					path: eksterior2StargazerX,
				},
				{
					alt: '17-inch Diamond Cut Alloy Wheels',
					path: eksterior3StargazerX,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior4StargazerX,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior5StargazerX,
				},
				{
					alt: 'LED Rear Combination Lamp',
					path: eksterior6StargazerX,
				},
			],
			interior: [
				{ alt: '', path: interior1StargazerX },
				{ alt: '', path: interior2StargazerX },
				{ alt: '', path: interior3StargazerX },
				{ alt: '', path: interior4StargazerX },
			],
		},
		priceList: [
			{
				name: 'PRIME Premium Color 1.5 IVT',
				value: 'Rp. 339,700,000',
			},
			{ name: 'PRIME 1.5 IVT', value: 'Rp. 336,200,000' },
			{ name: 'STYLE 1.5 IVT', value: 'Rp. 325,600,000' },
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
							value: 'Smartstream G1.5 MPI Inline 4 cylinders',
						},
						{
							description: 'Displacement (cc)',
							value: '1.497',
						},
						{
							description: 'Max Power (ps/rpm)',
							value: '84,4 (115)/6.300',
						},
						{
							description: 'Max Toque (kg-m/rpm)',
							value: '143,8 (14.7)/4.500',
						},
						{
							description: 'Number of Cylinders',
							value: '4',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Transmisi',
					detail: [
						{
							description: 'Transmission Type',
							value: 'IVT',
						},
					],
				},
				{
					specID: 'FS001',
					code: 'Konsumsi Bahan Bakar',
					detail: [
						{
							description: 'Fuel Type',
							value: 'Gasoline',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Length Overall (mm)',
							value: '4.495',
						},
						{
							description: 'Width Overall (mm)',
							value: '1.815',
						},
						{
							description: 'Height Overall (mm)',
							value: '1.710',
						},
						{
							description: 'Base Wheel (mm)',
							value: '2.780',
						},
					],
				},
				{
					specID: 'FS003',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Front Wheels',
							value: '6,5J x 17"',
						},
						{
							description: 'Rear Wheels',
							value: '6,5J x 17"',
						},
						{
							description: 'Front Tires',
							value: '205/55R17',
						},
						{
							description: 'Rear Tires',
							value: '205/55R17',
						},
					],
				},
			],
		},
	},
};