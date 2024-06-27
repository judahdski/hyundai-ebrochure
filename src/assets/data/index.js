import { cretaLeftPose, ionic5LeftPose, ionic6LeftPose, palisadeLeftPose, santafeLeftPose, stargazerLeftPose, stargazerxLeftPose, stariaLeftPose } from '../img/carousel-lineups/index';
import { onlineOrder, testDrive, tradeIn } from '../img/features/index';

export const carList = [
	{
		name: 'Ionic 6',
		imgPath: ionic6LeftPose,
	},
	{
		name: 'Ionic 5',
		imgPath: ionic5LeftPose,
	},
	{
		name: 'Creta',
		imgPath: cretaLeftPose,
	},
	{
		name: 'Palisade',
		imgPath: palisadeLeftPose,
	},
	{
		name: 'Santafe',
		imgPath: santafeLeftPose,
	},
	{
		name: 'Stargazer',
		imgPath: stargazerLeftPose,
	},
	{
		name: 'Stargazer X',
		imgPath: stargazerxLeftPose,
	},
	{
		name: 'Staria',
		imgPath: stariaLeftPose,
	},
];

export const features = [
	{
		title: 'Permintaan Trade-In',
		icon: tradeIn,
		isMiddle: false,
	},
	{
		title: 'Pemesanan Online',
		icon: onlineOrder,
		isMiddle: true,
	},
	{
		title: 'Permintaan Test Drive',
		icon: testDrive,
		isMiddle: false,
	},
];
