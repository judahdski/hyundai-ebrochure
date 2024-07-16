import { cretaLeftPose, ioniq5LeftPose, ioniq6LeftPose, palisadeLeftPose, santafeLeftPose, stargazerLeftPose, stargazerxLeftPose, stariaLeftPose } from '../img/carousel-lineups/index';
import { onlineOrder, testDrive, tradeIn } from '../img/features/index';

export const carList = [
	{
		name: 'Ioniq 6',
		imgPath: ioniq6LeftPose,
	},
	{
		name: 'Ioniq 5',
		imgPath: ioniq5LeftPose,
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
