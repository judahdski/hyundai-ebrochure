import { palisadeMD } from '../../img/main_display/index';
import { palisadeBanner } from '../../img/banner/index';

export const palisadeDetail = {
	carID: 'fpPQbL', // palisade
	image: { banner: palisadeBanner, mainDisplay: palisadeMD },
	sections: {
		highlight: [
			{
				code: 'highlight_segment_1',
				title: 'Empower your world.',
				body: 'Jadikan pencapaian hidup Anda dan keluarga lebih berarti dengan New PALISADE. Berkendara penuh performa dan inovasi begitu berkesan di setiap perjalanan menuju dunia baru yang Anda miliki seutuhnya',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_2',
				title: 'Bluelink <br> Connect with your car.',
				body: 'New PALISADE telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: ['section2_highlight_creta.jpg'],
			},
		],
		gallery: {
			color: [
				{
					description: 'Abyss Black Pearl',
					hexCode: '#252628',
					imgPath: 'creta_putih_pick_color.png',
				},
				{
					description: 'Moonlight Blue Pearl',
					hexCode: '#2C3649',
					imgPath: 'creta_putih_pick_color.png',
				},
				{
					description: 'Creamy White Pearl',
					hexCode: '#E8E8E8',
					imgPath: 'main_img_gallery.png',
				},
				{
					description: 'Graphite Gray Metallic',
					hexCode: '#414649',
					imgPath: 'main_img_gallery.png',
				},
				{
					description: 'Shimmering Silver Metallic',
					hexCode: '#989C9D',
					imgPath: 'main_img_gallery.png',
				},
			],
			article: [
				{
					title: 'Empower your life.',
					body: 'Penampilan New PALISADE memukau setiap mata yang memandang. Karakter desain yang kuat dan berwibawa di semua sisi merefleksikan pencapaian dan keberhasilan Anda.',
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
			{ name: 'DIESEL 2.2 AT SIGN AWD', value: 'Rp. 1,147,500,000' },
			{ name: 'DIESEL 2.2 AT SIGN 4X2', value: 'Rp. 1,012,500,000' },
			{ name: 'DIESEL 2.2 AT PRIME 4X2', value: 'Rp. 875,500,000' },
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
							value: '147 (200)/3,800',
						},
						{
							description: 'Max Toque (kg-m/rpm)',
							value: '(45,0)/1,750 - 2,750',
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
							value: '8 Speed Automatic',
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
							value: '71 L',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Length Overall (mm)',
							value: '4,980',
						},
						{
							description: 'Width Overall (mm)',
							value: '1,975',
						},
						{
							description: 'Height Overall (mm)',
							value: '1,750',
						},
						{
							description: 'Base Wheel (mm)',
							value: '2,900',
						},
						{
							description: 'Front Wheelthread (mm)',
							value: '1,708',
						},
						{
							description: 'Rear Wheelthread (mm)',
							value: '1,716',
						},
						{
							description: 'Front OverHang (mm)',
							value: '945',
						},
						{
							description: 'Rear OverHang (mm)',
							value: '1,135',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bagasi',
					detail: [
						{
							description: 'Cargo Area (L)',
							value: '704 / 311',
						},
					],
				},
				{
					specID: 'FS002',
					code: 'Bobot',
					detail: [
						{
							description: 'Lightest WeightCurb (kg)',
							value: '1,881',
						},
						{
							description: 'Heaviest WeightCurb (kg)',
							value: '1,995',
						},
						{
							description: 'Gross Weight (kg)',
							value: '2,610',
						},
					],
				},
				{
					specID: 'FS003',
					code: 'Tampak Luar',
					detail: [
						{
							description: 'Front Wheels',
							value: '7.5J x 18"',
						},
						{
							description: 'Rear Wheels',
							value: '7.5J x 18"',
						},
						{
							description: 'Front Tires',
							value: '245/60 R18',
						},
						{
							description: 'Rear Tires',
							value: '245/60 R18',
						},
					],
				},
			],
		},
	},
};
