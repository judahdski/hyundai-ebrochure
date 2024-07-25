import { stargazerMD } from '../../img/main_display/index';
import { stargazerBanner } from '../../img/banner/index';
import * as StargazerImages from '../../img/car_list/stargazer/index';

export const stargazerDetail = {
	carID: 'RBm1W3', // stargazer
	mainImage: { banner: stargazerBanner, mainDisplay: stargazerMD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: 'Bintang baru keluarga.',
				body: 'Saatnya menikmati era baru MPV bersama New STARGAZER, inovasi mobilitas untuk setiap perjalanan berkualitas. Inilah standar baru mobil keluarga yang menghadirkan kenyamanan maksimal dan fitur berkelas, serta memberikan ruang luas untuk kebersamaan Anda dan orang terkasih.',
				images: [StargazerImages.section1Highlight1Stargazer],
			},
			{
				code: 'highlight_segment_2',
				title: 'Bluelink <br> Connect with your car.',
				body: 'New STARGAZER telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: [StargazerImages.section2Highlight1Stargazer, StargazerImages.section2Highlight2Stargazer, StargazerImages.section2Highlight3Stargazer],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Magnetic Silver Metallic',
					hexImage: '#848688',
					carImage: StargazerImages.magneticSilverMetallicStargazer,
				},
				{
					name: 'Creamy White Pearl',
					hexImage: '#EEF2F1',
					carImage: StargazerImages.creamyWhitePearlStargazer,
				},
				{
					name: 'Midnight Black Pearl',
					hexImage: '#070B10',
					carImage: StargazerImages.midnightBlackPearlStargazerx,
				},
				{
					name: 'Titan Gray Metallic',
					hexImage: '#3C464B',
					carImage: StargazerImages.titanGrayMetallicStargazer,
				},
				{
					name: 'Dragon Red Pearl',
					hexImage: '#9D201F',
					carImage: StargazerImages.dragoRedPearlStargazer,
				},
			],
			articles: [
				{
					title: 'Tampil memukau bagai bintang.',
					body: 'Desain futuristik dan dinamis akan langsung terlihat melalui <i>one curve design</i> yang diciptakan untuk memalingkan setiap pandangan. Dilengkapi dengan <i>Horizon type DRL (Daytime Running Lights)</i> dan <i>H-shape LED Rear Combination Lamp</i>, New STARGAZER semakin menawan dengan exterior yang membuat Anda dan keluarga tampil memukau bagai bintang.',
					images: [StargazerImages.stargazerArticleGallery],
				},
			],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: StargazerImages.exterior1Stargazer,
				},
				{
					caption: 'LED Headlamp',
					image: StargazerImages.exterior2Stargazer,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: StargazerImages.exterior3Stargazer,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerImages.exterior4Stargazer,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerImages.exterior5Stargazer,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerImages.exterior6Stargazer,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerImages.exterior7Stargazer,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: StargazerImages.exterior8Stargazer,
				},
			],
			interiors: [
				{ caption: '', image: StargazerImages.interior1Stargazer },
				{ caption: '', image: StargazerImages.interior2Stargazer },
				{ caption: '', image: StargazerImages.interior3Stargazer },
				{ caption: '', image: StargazerImages.interior4Stargazer },
				{ caption: '', image: StargazerImages.interior5Stargazer },
				{ caption: '', image: StargazerImages.interior6Stargazer },
				{ caption: '', image: StargazerImages.interior7Stargazer },
			],
		},
		priceList: [
			{ model: 'Prime 1.5 IVT', price: 'Rp. 321,900,000' },
			{ model: 'Essential 1.5 IVT', price: 'Rp. 276,300,000' },
			{ model: 'Essential 1.5 MT', price: 'Rp. 262,400,000' },
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
							value: '4,460',
						},
						{
							name: 'Width Overall (mm)',
							value: '1,780',
						},
						{
							name: 'Height Overall (mm)',
							value: '1,690',
						},
						{
							name: 'Base Wheel (mm)',
							value: '2,780',
						},
						{
							name: 'Front OverHang (mm)',
							value: '800',
						},
						{
							name: 'Rear OverHang (mm)',
							value: '880',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bagasi',
					specs: [
						{
							name: 'Cargo Area (L)',
							value: '585 (behind 2nd row) / 200 (behind 3rd row)',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bobot',
					specs: [
						{
							name: 'Lightest WeightCurb (kg)',
							value: '1,209',
						},
						{
							name: 'Heaviest WeightCurb (kg)',
							value: '1,272',
						},
						{
							name: 'Gross Weight (kg)',
							value: '1,830',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '6.5J x 16"',
						},
						{
							name: 'Rear Wheels',
							value: '6.5J x 16"',
						},
						{
							name: 'Front Tires',
							value: '205/55 R16',
						},
						{
							name: 'Rear Tires',
							value: '205/55 R16',
						},
					],
				},
			],
		},
	},
};
