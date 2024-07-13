import { ionic6MD, ionic5MD, palisadeMD, stariaMD, cretaMD, santaFeMD, stargazerMD, stargazerXMD } from '../img/main_display/index';
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
	{
		carID: 'fpPQbL', // palisade
		image: { banner: cretaBanner, mainDisplay: palisadeMD },
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
	},
	{
		carID: 'RBm1W3', // stargazer
		image: { banner: cretaBanner, mainDisplay: stargazerMD },
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
	},
	{
		carID: 'ipEZQz', // 
		image: { banner: cretaBanner, mainDisplay: stargazerXMD },
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
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Magnetic Silver Metalic',
						hexCode: '#898789',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Creamy White Pearl',
						hexCode: '#F2F5F5',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Midnight Black Pearl',
						hexCode: '#181A1B',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Titan Gray Metalic',
						hexCode: '#424649',
						imgPath: 'main_img_gallery.png',
					},
				],
				article: [
					{
						title: 'Express your soul.',
						body: ' tampil dengan desain eksterior baru X Dedicated Design menjadi simbol dari semangat baru untuk mengekspresikan jati dirimu yang sesungguhnya.',
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
	},
	{
		carID: '1hsMWj', // staria
		image: { banner: cretaBanner, mainDisplay: stariaMD },
		sections: {
			highlight: [
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
				color: [
					{
						description: 'Abyss Black Pearl',
						hexCode: '#1D1C1E',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Shimmering Silver Metallic',
						hexCode: '#CBCBCB',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Graphite Gray Metallic',
						hexCode: '#2C2C31',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Creamy White',
						hexCode: '#F9F9FB',
						imgPath: 'main_img_gallery.png',
					},
				],
				article: [],
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
				{
					name: 'LOMBARDI',
					value: 'Rp. 1,429,000,000',
				},
				{ name: 'SIGN 7', value: 'Rp. 1,039,500,000' },
				{ name: 'SIGN 9', value: 'Rp. 905,500,000' },
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
								value: '177/3,800',
							},
							{
								description: 'Max Toque (kg-m/rpm)',
								value: '44/1,500 - 2,500',
							},
							{
								description: 'Number of Cylinders',
								value: '4',
							},
							{
								description: 'Valves of Cylinders',
								value: '16-valve, HLA',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Transmisi',
						detail: [
							{
								description: 'Transmission Type',
								value: 'A/T',
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
								value: '75 L',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Length Overall (mm)',
								value: '5,253',
							},
							{
								description: 'Width Overall (mm)',
								value: '1,997',
							},
							{
								description: 'Height Overall (mm)',
								value: '1,990',
							},
							{
								description: 'Base Wheel (mm)',
								value: '3,273',
							},
							{
								description: 'Front Wheelthread (mm)',
								value: '1,721',
							},
							{
								description: 'Rear Wheelthread (mm)',
								value: '1,732',
							},
							{
								description: 'Front OverHang (mm)',
								value: '910',
							},
							{
								description: 'Rear OverHang (mm)',
								value: '	1,070',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bagasi',
						detail: [
							{
								description: 'Cargo Area (L)',
								value: '117 / 882',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bobot',
						detail: [
							{
								description: 'Lightest WeightCurb (kg)',
								value: '2,285',
							},
							{
								description: 'Heaviest WeightCurb (kg)',
								value: '2,384',
							},
							{
								description: 'Gross Weight (kg)',
								value: '3,120',
							},
						],
					},
					{
						specID: 'FS003',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Front Wheels',
								value: '7.0J x 18"',
							},
							{
								description: 'Rear Wheels',
								value: '7.0J x 18"',
							},
							{
								description: 'Front Tires',
								value: '235/55 R18',
							},
							{
								description: 'Rear Tires',
								value: '235/55 R18',
							},
						],
					},
				],
			},
		},
	},
	{
		carID: 'lmVrRt', // santa fe
		image: { banner: cretaBanner, mainDisplay: santaFeMD },
		sections: {
			highlight: [
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
				color: [
					{
						description: 'Creamy White Pearl',
						hexCode: '#CFCFCF',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Magentic Silver Metallic',
						hexCode: '#A3A5A4',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Titan Gray Metallic',
						hexCode: '#454545',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Midnight Black Pearl',
						hexCode: '#252628',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Lagoon Blue Pearl',
						hexCode: '#2C3135',
						imgPath: 'main_img_gallery.png',
					},
				],
				article: [],
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
				{
					name: 'SIGN 2.2 AT',
					value: 'Rp. 736,800,000',
				},
				{ name: 'PRIME 2.2 AT', value: 'Rp. 666,100,000' },
				{ name: 'SIGN 2.5 AT', value: 'Rp. 685,300,000' },
				{ name: 'PRIME 2.5 AT', value: 'Rp. 605,500,000' },
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
								value: '2.5 Theta III MPi',
							},
							{
								description: 'Displacement (cc)',
								value: '2,497',
							},
							{
								description: 'Max Speed (kph)',
								value: '195',
							},
							{
								description: 'Max Power (ps/rpm)',
								value: '180/6,000',
							},
							{
								description: 'Max Toque (kg-m/rpm)',
								value: '23.7/4,000',
							},
							{
								description: 'Acceleration (0 - 100 kph) (sec)',
								value: '10.1',
							},
							{
								description: 'Braking Distance (0-100 kph) (m)',
								value: '43.1',
							},
							{
								description: 'Number of Cylinders',
								value: '4',
							},
							{
								description: 'Valves of Cylinders',
								value: '16-valve, HLA',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Transmisi',
						detail: [
							{
								description: 'Transmission Type',
								value: '6-Speed Automatic FWD',
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
								value: '67 L',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Length Overall (mm)',
								value: '4,785',
							},
							{
								description: 'Width Overall (mm)',
								value: '1,900',
							},
							{
								description: 'Height Overall (mm)',
								value: '1,710',
							},
							{
								description: 'Base Wheel (mm)',
								value: '2,765',
							},
							{
								description: 'Front Wheelthread (mm)',
								value: '1,646',
							},
							{
								description: 'Rear Wheelthread (mm)',
								value: '1,656',
							},
							{
								description: 'Front OverHang (mm)',
								value: '945',
							},
							{
								description: 'Rear OverHang (mm)',
								value: '1,075',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bagasi',
						detail: [
							{
								description: 'Cargo Area (L)',
								value: '571 / 782',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bobot',
						detail: [
							{
								description: 'Lightest WeightCurb (kg)',
								value: '1,650',
							},
							{
								description: 'Heaviest WeightCurb (kg)',
								value: '1,776',
							},
							{
								description: 'Gross Weight (kg)',
								value: '2,510',
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
								value: '235/60 R18',
							},
							{
								description: 'Rear Tires',
								value: '235/60 R18',
							},
						],
					},
				],
			},
		},
	},
	{
		carID: 'W8poza', // ionic 5
		image: { banner: cretaBanner, mainDisplay: ionic5MD },
		sections: {
			highlight: [
				{
					code: 'highlight_segment_1',
					title: "Welcome on board. <br> Let's power up the future.",
					body: 'Era mobilitas masa depan telah hadir.<br> Inilah mobil listrik pertama yang sepenuhnya dibuat di Indonesia.<br> Rasakan pengalaman baru dengan IONIQ 5.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_2',
					title: 'Charging flexibly.',
					body: 'Bebas rasa khawatir ketika mengendarai IONIQ 5. IONIQ 5 telah dilengkapi portable charger yang dapat terhubung ke stop kontak dinding standar. Selain itu IONIQ 5 juga dapat menunjang pengisian daya sampai 80% hanya dalam +/- 18 menit*.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_3',
					title: 'Vehicle to Load (V2L) technology.',
					body: 'Fitur V2L memungkinkan IONIQ 5 menjadi sumber daya listrik sebesar 3,6 kW untuk penggunaan perangkat elektronik, menambah kemudahan dan kenyamanan Anda saat dalam perjalanan.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_4',
					title: 'Connect with your cars',
					body: 'IONIQ 5 is equipped with Hyundai Bluelink connectivity technology, a platform that makes it easy to check important information about your car. Connect with the Hyundai call center 7 x 24 hours when an emergency occurs to immediately provide you with assistance.',
					images: ['section2_highlight_creta.jpg'],
				},
			],
			gallery: {
				color: [
					{
						description: 'Gravity Gold Matte',
						hexCode: '#9F9895',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Midnight Black Pearl',
						hexCode: '#1D1D1E',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Titan Gray Metallic',
						hexCode: '#434448',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Optic White',
						hexCode: '#E3E3EB',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Magnetic Silver Metallic',
						hexCode: '#8B8B8E',
						imgPath: 'main_img_gallery.png',
					},
				],
				article: [],
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
				{ name: 'SIGNATURE LONG RANGE', value: 'Rp. 859,000,000' },
				{ name: 'SIGNATURE STANDARD RANGE', value: 'Rp. 809,000,000' },
				{ name: 'PRIME LONG RANGE', value: 'Rp. 789,000,000' },
				{ name: 'PRIME STANDARD RANGE', value: 'Rp. 748,000,000' },
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
								description: 'Max. Power (ps)',
								value: '170',
							},
							{
								description: 'Max. Power (kW)',
								value: '125',
							},
							{
								description: 'Max. Torque (Nm)',
								value: '350',
							},
							{
								description: 'Acceleration (Sport) (0 - 100 kph) (sec)',
								value: '8,5',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Transmisi',
						detail: [
							{
								description: 'Transmission Type',
								value: 'Single Speed Reduction Gear',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Konsumsi Bahan Bakar',
						detail: [
							{
								description: 'Motor Type',
								value: 'Permanent Magnet Synchronous Motor',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Aki',
						detail: [
							{
								description: 'Battery type',
								value: 'Liquid cooled Lithium Ion',
							},
							{
								description: 'Battery Capacity (kWh)',
								value: '58',
							},
							{
								description: 'Battery Voltage(V)',
								value: '522,7',
							},
							{
								description: 'Battery Power Output (kW)',
								value: '195',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Length Overall (mm)',
								value: '4.635',
							},
							{
								description: 'Width Overall (mm)',
								value: '1.890',
							},
							{
								description: 'Height Overall (mm)',
								value: '1.605',
							},
							{
								description: 'Base Wheel (mm)',
								value: '3.000',
							},
							{
								description: 'Front Wheelthread (mm)',
								value: '1.638',
							},
							{
								description: 'Rear Wheelthread (mm)',
								value: '1.647',
							},
							{
								description: 'Front OverHang (mm)',
								value: '845',
							},
							{
								description: 'Rear OverHang (mm)',
								value: '790',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Bobot',
						detail: [
							{
								description: 'Lightest WeightCurb (kg)',
								value: '1.830',
							},
							{
								description: 'Heaviest WeightCurb (kg)',
								value: '1.910',
							},
							{
								description: 'Gross Weight (kg)',
								value: '2.370',
							},
						],
					},
					{
						specID: 'FS003',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Front Wheels',
								value: '7.5J x 15',
							},
							{
								description: 'Rear Wheels',
								value: '7.5J x 15',
							},
							{
								description: 'Front Tires',
								value: '235/55 R19',
							},
							{
								description: 'Rear Tires',
								value: '235/55 R19',
							},
						],
					},
				],
			},
		},
	},
	{
		carID: 'ciEPt3', // ionic 6
		image: { banner: cretaBanner, mainDisplay: ionic6MD },
		sections: {
			highlight: [
				{
					code: 'highlight_segment_1',
					title: 'Awaken your world.',
					body: 'Dirancang untuk melengkapi kehidupan sehari-hari dengan memberikan ruang untuk membangkitkan potensi yang Anda punya. Melalui siluet aerodinamis, serta tampilan interior yang dirancang untuk memberikan kesenangan dalam berkendara. IONIQ 6 hadir untuk mewujudkan era baru mobilitas listrik.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_2',
					title: 'Charging flexibly.',
					body: 'Bebas rasa khawatir ketika mengendarai IONIQ 6. IONIQ 6 telah dilengkapi portable charger yang dapat terhubung ke stop kontak dinding standar. Selain itu IONIQ 6 juga dapat menunjang pengisian daya sampai 80% hanya dalam +/- 18 menit*.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_3',
					title: 'Vehicle to Load (V2L) technology.',
					body: 'Fitur V2L memungkinkan IONIQ 6 menjadi sumber daya listrik sebesar 3,6 kW untuk penggunaan perangkat elektronik, menambah kemudahan dan kenyamanan Anda saat dalam perjalanan.',
					images: ['section1_highlight_creta.jpg'],
				},
				{
					code: 'highlight_segment_4',
					title: 'Connect with your cars',
					body: 'IONIQ 6 is equipped with Hyundai Bluelink connectivity technology, a platform that makes it easy to check important information about your car. Connect with the Hyundai call center 7 x 24 hours when an emergency occurs to immediately provide you with assistance.',
					images: ['section2_highlight_creta.jpg'],
				},
			],
			gallery: {
				color: [
					{
						description: 'Gravity Gold Matte',
						hexCode: '#9B9A92',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Nocturne Gray Matte',
						hexCode: '#2D373B',
						imgPath: 'creta_putih_pick_color.png',
					},
					{
						description: 'Abyss Black Pearl',
						hexCode: '#030507',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Serenity White Pearl',
						hexCode: '#E9EEE6',
						imgPath: 'main_img_gallery.png',
					},
					{
						description: 'Biophilic Blue Pearl',
						hexCode: '#060C16',
						imgPath: 'main_img_gallery.png',
					},
				],
				article: [],
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
				{ name: 'SIGNATURE AWD', value: 'Rp. 1,197,000,000' },
				{ name: 'AWD MATTE COLOR', value: 'Rp. 1,200,500,000' },
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
								description: 'Max. Power (ps)',
								value: '326',
							},
							{
								description: 'Max. Power (kW)',
								value: '239',
							},
							{
								description: 'Max. Torque (Nm)',
								value: '605',
							},
							{
								description: 'Acceleration (Sport) (0 - 100 kph) (sec)',
								value: '5.1',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Transmisi',
						detail: [
							{
								description: 'Transmission Type',
								value: 'Single Speed Reduction Gear',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Konsumsi Bahan Bakar',
						detail: [
							{
								description: 'Motor Type',
								value: 'Permanent Magnet Synchronous Motor',
							},
						],
					},
					{
						specID: 'FS001',
						code: 'Aki',
						detail: [
							{
								description: 'Battery type',
								value: 'Liquid cooled Lithium Ion',
							},
							{
								description: 'Battery Capacity (kWh)',
								value: '77,4',
							},
						],
					},
					{
						specID: 'FS002',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Length Overall (mm)',
								value: '4,855',
							},
							{
								description: 'Width Overall (mm)',
								value: '1,880',
							},
							{
								description: 'Height Overall (mm)',
								value: '1,495',
							},
						],
					},
					{
						specID: 'FS003',
						code: 'Tampak Luar',
						detail: [
							{
								description: 'Front Wheels',
								value: '20 x 8.5J +53.5',
							},
							{
								description: 'Rear Wheels',
								value: '20 x 8.5J +53.5',
							},
							{
								description: 'Front Tires',
								value: '245/40R20 99Y',
							},
							{
								description: 'Rear Tires',
								value: '245/40R20 99Y',
							},
						],
					},
				],
			},
		},
	},
];
