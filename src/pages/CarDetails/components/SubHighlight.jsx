import React from 'react';
import { articleSect11Img, articleSect21Img, articleSect22Img, articleSect23Img } from '../../../assets/img/temp/index';

const SubHighlight = () => {
	return (
		<div className='p-[72px] flex flex-col gap-[72px]'>
			<div className='flex flex-col gap-8 items-center'>
				<h3 className='text-[32px] font-medium'>Bintang baru keluarga.</h3>
				<p className='leading-6'>
					Saatnya menikmati era baru MPV bersama New STARGAZER, inovasi mobilitas untuk setiap perjalanan berkualitas. Inilah standar baru mobil keluarga yang menghadirkan kenyamanan maksimal dan fitur berkelas, serta memberikan
					ruang luas untuk kebersamaan Anda dan orang terkasih.
				</p>
				<img
					src={articleSect11Img}
					alt='Article Section 1 (1) Image'
				/>
			</div>
			<div className='flex flex-col gap-8 items-center'>
				<h3 className='text-[32px] text-center font-medium'>
					Bluelink <br /> Connect with your car.
				</h3>
				<p className='leading-6'>
					New STARGAZER telah dilengkapi dengan teknologi konektivitas Hyundai Bluelink, sebuah platform yang memudahkan pengecekan informasi penting tentang mobil Anda. Terhubung dengan call center Hyundai 7 x 24 jam saat terjadi
					kondisi darurat untuk segera memberikan Anda bantuan.
				</p>

				<img
					src={articleSect21Img}
					alt='Article Section 2 (1) Image'
				/>

				<img
					src={articleSect22Img}
					alt='Article Section 2 (2) Image'
				/>

				<img
					src={articleSect23Img}
					alt='Article Section 2 (3) Image'
				/>
			</div>
		</div>
	);
};

export default SubHighlight;
