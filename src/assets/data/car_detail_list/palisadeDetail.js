import { palisadeMD } from '../../img/main_display/index';
import { palisadeBanner } from '../../img/banner/index';
import * as PalisadeImages from '../../img/car_list/palisade/index';

export const palisadeDetail = {
	carID: 'fpPQbL', // palisade
	mainImage: { banner: palisadeBanner, mainDisplay: palisadeMD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: 'Empower your world.',
				body: 'Jadikan pencapaian hidup Anda dan keluarga lebih berarti dengan New PALISADE. Berkendara penuh performa dan inovasi begitu berkesan di setiap perjalanan menuju dunia baru yang Anda miliki seutuhnya',
				images: [PalisadeImages.section1Highlight2Palisade, PalisadeImages.section1Highlight2Palisade, PalisadeImages.section1Highlight3Palisade],
			},
			{
				code: 'highlight_segment_2',
				title: 'Bluelink <br> Connect with your car.',
				body: 'New PALISADE telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: [PalisadeImages.section2Highlight1Palisade, PalisadeImages.section2Highlight2Palisade, PalisadeImages.section2Highlight3Palisade],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Abyss Black Pearl',
					hexImage: PalisadeImages.AbyssBlackPearlHexImagePalisade,
					carImage: PalisadeImages.abyssBlackPearlPalisade,
				},
				{
					name: 'Moonlight Blue Pearl',
					hexImage: PalisadeImages.MoonlightBluePearlHexImagePalisade,
					carImage: PalisadeImages.moonlightBluePearlPalisade,
				},
				{
					name: 'Creamy White Pearl',
					hexImage: PalisadeImages.CreamyWhitePearlHexImagePalisade,
					carImage: PalisadeImages.creamyWhitePearlPalisade,
				},
				{
					name: 'Graphite Gray Metallic',
					hexImage: PalisadeImages.GraphiteGrayMetallicHexImagePalisade,
					carImage: PalisadeImages.graphiteGrayMetallicPalisade,
				},
				{
					name: 'Shimmering Silver Metallic',
					hexImage: PalisadeImages.ShimmeringSilverMetallicHexImagePalisade,
					carImage: PalisadeImages.shimmeringSilverMetallicPalisade,
				},
			],
			articles: [
				{
					title: 'Empower your life.',
					body: 'Penampilan New PALISADE memukau setiap mata yang memandang. Karakter desain yang kuat dan berwibawa di semua sisi merefleksikan pencapaian dan keberhasilan Anda.',
					images: [PalisadeImages.palisadeArticleGallery],
				},
			],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: PalisadeImages.exterior1Palisade,
				},
				{
					caption: 'LED Headlamp',
					image: PalisadeImages.exterior2Palisade,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: PalisadeImages.exterior3Palisade,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: PalisadeImages.exterior4Palisade,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: PalisadeImages.exterior5Palisade,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: PalisadeImages.exterior6Palisade,
				},
			],
			interiors: [
				{ caption: '', image: PalisadeImages.interior1Palisade },
				{ caption: '', image: PalisadeImages.interior2Palisade },
				{ caption: '', image: PalisadeImages.interior3Palisade },
				{ caption: '', image: PalisadeImages.interior4Palisade },
			],
		},
		priceList: [
			{ model: 'Signature AWD XRT', price: 'Rp. 1,216,000,000' },
			{ model: 'Signature XRT', price: 'Rp. 1,080,000,000' },
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
							value: '147 (200)/3,800',
						},
						{
							name: 'Max Toque (kg-m/rpm)',
							value: '(45,0)/1,750 - 2,750',
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
							value: '8 Speed Automatic',
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
							value: '71 L',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4,980',
						},
						{
							name: 'Width Overall (mm)',
							value: '1,975',
						},
						{
							name: 'Height Overall (mm)',
							value: '1,750',
						},
						{
							name: 'Base Wheel (mm)',
							value: '2,900',
						},
						{
							name: 'Front Wheelthread (mm)',
							value: '1,708',
						},
						{
							name: 'Rear Wheelthread (mm)',
							value: '1,716',
						},
						{
							name: 'Front OverHang (mm)',
							value: '945',
						},
						{
							name: 'Rear OverHang (mm)',
							value: '1,135',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bagasi',
					specs: [
						{
							name: 'Cargo Area (L)',
							value: '704 / 311',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bobot',
					specs: [
						{
							name: 'Lightest WeightCurb (kg)',
							value: '1,881',
						},
						{
							name: 'Heaviest WeightCurb (kg)',
							value: '1,995',
						},
						{
							name: 'Gross Weight (kg)',
							value: '2,610',
						},
					],
				},
				{
					categoryID: 'FS003',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Front Wheels',
							value: '7.5J x 18"',
						},
						{
							name: 'Rear Wheels',
							value: '7.5J x 18"',
						},
						{
							name: 'Front Tires',
							value: '245/60 R18',
						},
						{
							name: 'Rear Tires',
							value: '245/60 R18',
						},
					],
				},
			],
		},
	},
};
