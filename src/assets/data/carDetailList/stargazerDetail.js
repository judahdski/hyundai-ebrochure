import { stargazerMD } from '../../img/main_display/index';
import { stargazerBanner } from '../../img/banner/index';

export const stargazerDetail = {
	carID: 'RBm1W3', // stargazer
	image: { banner: stargazerBanner, mainDisplay: stargazerMD },
	sections: {
		highlight: [
			{
				code: 'highlight_segment_1',
				title: 'Bintang baru keluarga.',
				body: 'Saatnya menikmati era baru MPV bersama New STARGAZER, inovasi mobilitas untuk setiap perjalanan berkualitas. Inilah standar baru mobil keluarga yang menghadirkan kenyamanan maksimal dan fitur berkelas, serta memberikan ruang luas untuk kebersamaan Anda dan orang terkasih.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_2',
				title: 'Bluelink <br> Connect with your car.',
				body: 'New STARGAZER telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: ['section2_highlight_creta.jpg'],
			},
		],
		gallery: {
			color: [
				{
					description: 'Magnetic Silver Metallic',
					hexCode: '#848688',
					imgPath: 'creta_putih_pick_color.png',
				},
				{
					description: 'Creamy White Pearl',
					hexCode: '#EEF2F1',
					imgPath: 'creta_putih_pick_color.png',
				},
				{
					description: 'Midnight Black Pearl',
					hexCode: '#070B10',
					imgPath: 'main_img_gallery.png',
				},
				{
					description: 'Titan Gray Metallic',
					hexCode: '#3C464B',
					imgPath: 'main_img_gallery.png',
				},
				{
					description: 'Dragon Red Pearl',
					hexCode: '#9D201F',
					imgPath: 'main_img_gallery.png',
				},
			],
			article: [
				{
					title: 'Tampil memukau bagai bintang.',
					body: 'Desain futuristik dan dinamis akan langsung terlihat melalui <i>one curve design</i> yang diciptakan untuk memalingkan setiap pandangan. Dilengkapi dengan <i>Horizon type DRL (Daytime Running Lights)</i> dan <i>H-shape LED Rear Combination Lamp</i>, New STARGAZER semakin menawan dengan eksterior yang membuat Anda dan keluarga tampil memukau bagai bintang.',
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
			{ name: 'PRIME 1.5 IVT', value: 'Rp. 316,200,000' },
			{ name: 'STYLE 1.5 IVT', value: 'Rp. 300,800,000' },
			{ name: 'ESSENTIAL 1.5 IVT', value: 'Rp. 272,500,000' },
			{ name: 'ESSENTIAL 1.5 MT', value: 'Rp. 258,800,000' },
			{ name: 'ACTIVE 1.5 IVT', value: 'Rp. 260,000,000' },
			{ name: 'ACTIVE 1.5 MT', value: 'Rp. 247,200,000' },
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
							value: '4,460',
						},
						{
							description: 'Width Overall (mm)',
							value: '1,780',
						},
						{
							description: 'Height Overall (mm)',
							value: '1,690',
						},
						{
							description: 'Base Wheel (mm)',
							value: '2,780',
						},
						{
							description: 'Front OverHang (mm)',
							value: '800',
						},
						{
							description: 'Rear OverHang (mm)',
							value: '880',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bagasi',
					detail: [
						{
							description: 'Cargo Area (L)',
							value: '585 (behind 2nd row) / 200 (behind 3rd row)',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bobot',
					detail: [
						{
							description: 'Lightest WeightCurb (kg)',
							value: '1,209',
						},
						{
							description: 'Heaviest WeightCurb (kg)',
							value: '1,272',
						},
						{
							description: 'Gross Weight (kg)',
							value: '1,830',
						},
					],
				},
				{
					specID: 'FS003',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Front Wheels',
							value: '6.5J x 16"',
						},
						{
							description: 'Rear Wheels',
							value: '6.5J x 16"',
						},
						{
							description: 'Front Tires',
							value: '205/55 R16',
						},
						{
							description: 'Rear Tires',
							value: '205/55 R16',
						},
					],
				},
			],
		},
	},
};
