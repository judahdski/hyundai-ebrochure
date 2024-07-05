import { cretaMD } from '../img/main_display/index';
import { cretaBanner } from '../img/banner/index';

export const carDetails = [
	{
		carID: 'Pt7A7k', // creta
		image: { banner: cretaBanner, mainDisplay: cretaMD },
		sections: {
			highlight: [
				{
					code: 'highlight_segment_1',
					title: 'Spotlight in motion.',
					body: 'Didesain untukmu yang selalu jeli melihat sisi terbaik dari segala tantangan. Bersiap hadapi perubahan, sigap menyesuaikan langkah. Ini saatnya nyalakan sinarmu dan pancarkan. Jadilah spotlight dalam perjalanan menuju masa depan.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_2',
					title: 'Connect with your car.',
					body: 'CRETA telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
					images: ['section2_highlight_creta.jpg'],
				},
			],
			gallery: {
				color: [
					{
						description: 'Optic White',
						hexCode: '#EEF1F0',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Midnight Black',
						hexCode: '#090C12',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Magnetic Silver',
						hexCode: '#090C12',
						imgPath: 'main_img_gallery.png',
					},
				],
				article: [
					{
						title: 'See the spotlight.',
						body: 'Didesain untuk tampil beda di tengah mobilitas urban. Parametric Jewel Pattern Grille & Hidden-type LED DRL, serta 17-inch Diamond Cut Alloy Wheel membuat CRETA semakin gagah dan berkarakter sebagai pusat perhatian.',
						img: ['creta_article_gallery'],
					},
				],
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
				{ name: 'PRIME DUAL TONE 1.5 IVT', value: 'Rp. 411,300,000' },
				{ name: 'PRIME 1.5 IVT', value: 'Rp. 408,300,000' },
				{ name: 'STYLE 1.5 IVT', value: 'Rp. 376,000,000' },
				{ name: 'BLACK EDITION 1.5 IVT', value: 'Rp. 350,000,000' },
				{ name: 'TREND 1.5 IVT', value: 'Rp. 333,500,000' },
				{ name: 'TREND 1.5 MT', value: 'Rp. 313,000,000' },
				{ name: 'ACTIVE 1.5 IVT MT', value: 'Rp. 291,300,000' },
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
								value: '1.5L MPI',
							},
							{
								description: 'Displacement (cc)',
								value: '1,497',
							},
							{
								description: 'Max Power (ps/rpm)',
								value: '115/6,300',
							},
							{
								description: 'Max Toque (kg-m/rpm)',
								value: '14.7/4,500',
							},
							{
								description: 'Number of Cylinders',
								value: '4',
							},
							{
								description: 'Valves of Cylinders',
								value: '16-valve (HLA)',
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
							{
								description: 'Tank Capacity',
								value: '40 L',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Length Overall (mm)',
								value: '4,315',
							},
							{
								description: 'Width Overall (mm)',
								value: '1,790',
							},
							{
								description: 'Height Overall (mm)',
								value: '1,630',
							},
							{
								description: 'Base Wheel (mm)',
								value: '2,610',
							},
							{
								description: 'Front Wheelthread (mm)',
								value: '1,572',
							},
							{
								description: 'Rear Wheelthread (mm)',
								value: '1,576',
							},
							{
								description: 'Front OverHang (mm)',
								value: '855',
							},
							{
								description: 'Rear OverHang (mm)',
								value: '850',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bagasi',
						detail: [
							{
								description: 'Cargo Area (L)',
								value: '416 / 1,384',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bobot',
						detail: [
							{
								description: 'Lightest WeightCurb (kg)',
								value: '1,200',
							},
							{
								description: 'Heaviest WeightCurb (kg)',
								value: '1,245',
							},
							{
								description: 'Gross Weight (kg)',
								value: '1,660',
							},
						],
					},
					{
						specID: 'FS003',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Front Wheels',
								value: '6.5J x 17"',
							},
							{
								description: 'Rear Wheels',
								value: '6.5J x 17"',
							},
							{
								description: 'Front Tires',
								value: '215/60 R17',
							},
							{
								description: 'Rear Tires',
								value: '215/60 R17',
							},
						],
					},
				],
			},
		},
	},
];
