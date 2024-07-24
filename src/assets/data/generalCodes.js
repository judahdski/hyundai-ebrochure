import { onlineOrder, testDrive, tradeIn } from '../img/features/index';

export const generalCode = [
	{
		code: 'scr_lu',
		description: 'Lineups',
		value: null,
		category: 'screen',
	},
	{
		code: 'scr_pl',
		description: 'Pricelist',
		value: null,
		category: 'screen',
	},
	{
		code: 'scr_ct',
		description: 'Contact',
		value: null,
		category: 'screen',
	},
	{
		code: 'ftr_pti',
		description: 'Permintaan Trade-In',
		value: tradeIn,
		message: 'Halo, saya tertarik untuk melakukan Trade-In mobil Hyundai. Bisakah Anda membantu saya?',
		category: 'feature',
	},
	{
		code: 'ftr_po',
		description: 'Permintaan Online',
		value: onlineOrder,
		message: 'Halo, saya tertarik untuk memesan mobil Hyundai secara online. Bisakah Anda memberikan informasi lebih lanjut?',
		category: 'feature',
	},
	{
		code: 'ftr_ptd',
		description: 'Permintaan Test Drive',
		value: testDrive,
		message: 'Halo, saya tertarik untuk melakukan test drive mobil Hyundai. Kapan saya bisa mengatur jadwal?',
		category: 'feature',
	},
	{
		code: 'cb001',
		description: 'Kona sale bla bla',
		value: null,
		category: 'campaignBanner',
	},
];
