import { cretaBanner } from '../../img/banner/index';
import { cretaMD } from '../../img/main_display/index';
import * as CretaImages from '../../img/car_list/creta/index';

export const cretaDetail = {
	carID: 'Pt7A7k', // creta
	mainImage: { banner: cretaBanner, mainDisplay: cretaMD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: 'Spotlight in motion.',
				body: 'Didesain untukmu yang selalu jeli melihat sisi terbaik dari segala tantangan. Bersiap hadapi perubahan, sigap menyesuaikan langkah. Ini saatnya nyalakan sinarmu dan pancarkan. Jadilah spotlight dalam perjalanan menuju masa depan.',
				images: [CretaImages.section1HighlightCreta],
			},
			{
				code: 'highlight_segment_2',
				title: 'Connect with your car.',
				body: 'CRETA telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: [CretaImages.section2HighlightCreta],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Optic White',
					hexImage: CretaImages.OpticWhiteHexImageCreta,
					carImage: CretaImages.opticWhiteCreta,
				},
				{
					name: 'Midnight Black',
					hexImage: CretaImages.MidnightBlackHexImageCreta,
					carImage: CretaImages.midnightBlackCreta,
				},
				{
					name: 'Magnetic Silver',
					hexImage: CretaImages.MagneticSilverHexImageCreta,
					carImage: CretaImages.magneticSilverCreta,
				},
			],
			articles: [
				{
					title: 'See the spotlight.',
					body: 'Didesain untuk tampil beda di tengah mobilitas urban. Parametric Jewel Pattern Grille & Hidden-type LED DRL, serta 17-inch Diamond Cut Alloy Wheel membuat CRETA semakin gagah dan berkarakter sebagai pusat perhatian.',
					images: [CretaImages.cretaArticleGallery],
				},
			],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: CretaImages.eksterior1Creta,
				},
				{
					caption: 'LED Headlamp',
					image: CretaImages.eksterior2Creta,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: CretaImages.eksterior3Creta,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: CretaImages.eksterior5Creta,
				},
			],
			interiors: [
				{ caption: '', image: CretaImages.interior1Creta },
				{ caption: '', image: CretaImages.interior2Creta },
				{ caption: '', image: CretaImages.interior3Creta },
				{ caption: '', image: CretaImages.interior4Creta },
			],
		},
		priceList: [
			{ model: 'PRIME DUAL TONE 1.5 IVT', price: 'Rp. 411,300,000' },
			{ model: 'PRIME 1.5 IVT', price: 'Rp. 408,300,000' },
			{ model: 'STYLE 1.5 IVT', price: 'Rp. 376,000,000' },
			{ model: 'BLACK EDITION 1.5 IVT', price: 'Rp. 350,000,000' },
			{ model: 'TREND 1.5 IVT', price: 'Rp. 333,500,000' },
			{ model: 'TREND 1.5 MT', price: 'Rp. 313,000,000' },
			{ model: 'ACTIVE 1.5 IVT MT', price: 'Rp. 291,300,000' },
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
							value: '1.5L MPI',
						},
						{
							name: 'Displacement (cc)',
							value: '1,497',
						},
						{
							name: 'Max Power (ps/rpm)',
							value: '115/6,300',
						},
						{
							name: 'Max Toque (kg-m/rpm)',
							value: '14.7/4,500',
						},
						{
							name: 'Number of Cylinders',
							value: '4',
						},
						{
							name: 'Valves of Cylinders',
							value: '16-valve (HLA)',
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
						{
							name: 'Tank Capacity',
							value: '40 L',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4,315',
						},
						{
							name: 'Width Overall (mm)',
							value: '1,790',
						},
						{
							name: 'Height Overall (mm)',
							value: '1,630',
						},
						{
							name: 'Base Wheel (mm)',
							value: '2,610',
						},
						{
							name: 'Front Wheelthread (mm)',
							value: '1,572',
						},
						{
							name: 'Rear Wheelthread (mm)',
							value: '1,576',
						},
						{
							name: 'Front OverHang (mm)',
							value: '855',
						},
						{
							name: 'Rear OverHang (mm)',
							value: '850',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bagasi',
					specs: [
						{
							name: 'Cargo Area (L)',
							value: '416 / 1,384',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bobot',
					specs: [
						{
							name: 'Lightest WeightCurb (kg)',
							value: '1,200',
						},
						{
							name: 'Heaviest WeightCurb (kg)',
							value: '1,245',
						},
						{
							name: 'Gross Weight (kg)',
							value: '1,660',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '6.5J x 17"',
						},
						{
							name: 'Rear Wheels',
							value: '6.5J x 17"',
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
