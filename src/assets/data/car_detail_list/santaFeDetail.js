import { santaFeBanner } from '../../img/banner/index';
import { santaFeMD } from '../../img/main_display/index';
import * as SantaFeImages from '../../img/car_list/santa-fe/index';

export const santaFeDetail = {
	carID: 'lmVrRt',
	mainImage: { banner: santaFeBanner, mainDisplay: santaFeMD },
	sections: {
		highlights: [
			{
				code: 'highlight_segment_1',
				title: 'Drive SANTA FE Together.',
				body: 'Dengan SANTA FE, hari-hari Anda akan selalu diawali dengan menyenangkan. Baik untuk rutinitas sehari-hari, menciptakan momen-momen spesial atau merencanakan perjalanan jauh. SANTA FE akan selalu memberi berbagai kemudahan dalam berkendara serta kenyamanan untuk perjalanan yang penuh gaya bagi Anda sekeluarga. SANTA FE membuat segalanya jadi lebih baik.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_2',
				title: 'Rediscovering happiness.',
				body: 'Semua detail yang ada pada SANTA FE diciptakan untuk satu tujuan: keluarga Anda. Desainnya yang mewah begitu memanjakan, ruang interior yang luas mendukung berbagai aktivitas Anda sekeluarga, serta teknologi terdepan yang menjaga semua orang agar tetap aman setiap saat. Rencanakan saja apa yang bisa membuat keluarga Anda bahagia, selebihnya biarkan SANTA FE yang bekerja.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_3',
				title: 'Making every day upscale.',
				body: 'Grille depan yang lebar khas SANTA FE didesain menyatu dan harmonis dengan lampu depan. Bagian sampingnya dirancang dinamis dan proporsional membungkus hingga ke lampu belakang dan ke setiap sudut-sudut badan kendaraan. Tampilan SANTA FE yang tak tertandingi akan selalu menemani di setiap momen penting Anda.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_4',
				title: 'Making every day comfortable.',
				body: 'Tidak hanya luas, interior SANTA FE dilengkapi detil-detil untuk seluruh anggota keluarga Anda. Konsol utama dilapisi dengan bahan kulit premium yang nyaman dengan tombol-tombol yang disusun teratur agar memudahkan Anda dalam mengatur fitur yang diinginkan.',
				images: ['section1_highlight_creta.jpg'],
			},
			{
				code: 'highlight_segment_5',
				title: 'Connect with your cars',
				body: 'SANTA FE telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi kondisi darurat untuk segera memberikan Anda bantuan.',
				images: ['section2_highlight_creta.jpg'],
			},
		],
		gallery: {
			colors: [
				{
					name: 'Creamy White Pearl',
					hexImage: SantaFeImages.CreamyWhitePearlHexImageSantafe,
					carImage: SantaFeImages.creamyWhitePearlSantafe,
				},
				{
					name: 'Magentic Silver Metallic',
					hexImage: SantaFeImages.MagenticSilverMetallicHexImageSantafe,
					carImage: SantaFeImages.magneticSilverMetallicSantafe,
				},
				{
					name: 'Titan Gray Metallic',
					hexImage: SantaFeImages.TitanGrayMetallicHexImageSantafe,
					carImage: SantaFeImages.titanGrayMetallicSantafe,
				},
				{
					name: 'Midnight Black Pearl',
					hexImage: SantaFeImages.MidnightBlackPearlHexImageSantafe,
					carImage: SantaFeImages.midnightBlackPearlSantafe,
				},
				{
					name: 'Lagoon Blue Pearl',
					hexImage: SantaFeImages.LagoonBluePearlHexImageSantafe,
					carImage: SantaFeImages.lagoonBluePearlSantafe,
				},
			],
			articles: [],
			exteriors: [
				{
					caption: 'Parametric Jewel Pattern Grille & Hidden-type LED DRL',
					image: SantaFeImages.exterior1SantaFe,
				},
				{
					caption: 'LED Headlamp',
					image: SantaFeImages.exterior2SantaFe,
				},
				{
					caption: '17-inch Diamond Cut Alloy Wheels',
					image: SantaFeImages.exterior3SantaFe,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: SantaFeImages.exterior4SantaFe,
				},
				{
					caption: 'LED Rear Combination Lamp',
					image: SantaFeImages.exterior5SantaFe,
				},
			],
			interiors: [
				{ caption: '', image: SantaFeImages.interior1SantaFe },
				{ caption: '', image: SantaFeImages.interior2SantaFe },
				{ caption: '', image: SantaFeImages.interior3SantaFe },
			],
		},
		priceList: [
			{ model: 'SIGN 2.2 AT', price: 'Rp. 736,800,000' },
			{ model: 'PRIME 2.2 AT', price: 'Rp. 666,100,000' },
			{ model: 'SIGN 2.5 AT', price: 'Rp. 685,300,000' },
			{ model: 'PRIME 2.5 AT', price: 'Rp. 605,500,000' },
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
							value: '2.5 Theta III MPi',
						},
						{
							name: 'Displacement (cc)',
							value: '2,497',
						},
						{
							name: 'Max Speed (kph)',
							value: '195',
						},
						{
							name: 'Max Power (ps/rpm)',
							value: '180/6,000',
						},
						{
							name: 'Max Toque (kg-m/rpm)',
							value: '23.7/4,000',
						},
						{
							name: 'Acceleration (0 - 100 kph) (sec)',
							value: '10.1',
						},
						{
							name: 'Braking Distance (0-100 kph) (m)',
							value: '43.1',
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
							value: '6-Speed Automatic FWD',
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
							value: '67 L',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Tampak Luar',
					specs: [
						{
							name: 'Length Overall (mm)',
							value: '4,785',
						},
						{
							name: 'Width Overall (mm)',
							value: '1,900',
						},
						{
							name: 'Height Overall (mm)',
							value: '1,710',
						},
						{
							name: 'Base Wheel (mm)',
							value: '2,765',
						},
						{
							name: 'Front Wheelthread (mm)',
							value: '1,646',
						},
						{
							name: 'Rear Wheelthread (mm)',
							value: '1,656',
						},
						{
							name: 'Front OverHang (mm)',
							value: '945',
						},
						{
							name: 'Rear OverHang (mm)',
							value: '1,075',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bagasi',
					specs: [
						{
							name: 'Cargo Area (L)',
							value: '571 / 782',
						},
					],
				},
				{
					categoryID: 'FS002',
					specType: 'Bobot',
					specs: [
						{
							name: 'Lightest WeightCurb (kg)',
							value: '1,650',
						},
						{
							name: 'Heaviest WeightCurb (kg)',
							value: '1,776',
						},
						{
							name: 'Gross Weight (kg)',
							value: '2,510',
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
							value: '235/60 R18',
						},
						{
							name: 'Rear Tires',
							value: '235/60 R18',
						},
					],
				},
			],
		},
	},
};
