import React from 'react';
import { salesProfile } from '../assets/data/salesProfile';

const Contact = () => {
	return (
		<div className='w-full max-w-[1280px] md:flex md:flex-row'>
			<div className='p-8 w-1/2 md:flex md:justify-center items-center'>
				<div className='bg-[#E7E7E7] w-[320px] md:w-[480px] aspect-square rounded-2xl flex justify-center items-center overflow-hidden'>
					<img
						src={salesProfile.images[0].path}
						alt='Photo 1'
					/>
				</div>
			</div>
			<div className='w-1/2'>
				{/* kontak */}
				<div className='md:h-[262.5px] pt-4 pb-12 md:pb-8 px-6 md:px-[72px] border-b-2 border-[#EDF3FA] flex flex-col justify-end gap-6'>
					{/* nama dan title */}
					<div className='flex flex-col items-center md:items-start gap-1.5 md:gap-2'>
						<p className='text-3xl md:text-4xl font-semibold'>Renaldy</p>
						<p className='text-sm md:text-base text-[#3F3E3E] font-medium'>Senior Hyundai Consultant</p>
					</div>
					{/* nama dan title */}

					{/* wa dan ig */}
					<div className='flex flex-col items-center md:items-start gap-3'>
						<div className='flex items-center gap-4'>
							<i class='fa-brands fa-whatsapp text-[21px] text-[#16C907]'></i>
							<p className='text-[18px] font-medium'>0813 1234 56789</p>
						</div>
						<div className='flex items-center gap-4'>
							<i class='fa-brands fa-instagram text-[21px] text-[#FF0C9E]'></i>
							<p className='text-[18px] font-medium'>@ig_account_dummy</p>
						</div>
					</div>
					{/* wa dan ig */}
				</div>
				{/* kontak */}

				{/* form pertanyaan */}
				<div className='pt-[48px] pb-[56px] md:py-8 px-4 md:px-16'>
					<form
						action=''
						className='bg-[#EDF3FA] rounded-2xl p-4 flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<label
								htmlFor=''
								className='text-[#686868] text-[12px] md:text-sm font-medium'>
								Nama
							</label>
							<input
								type='text'
								name='nama_field_input'
								id='nama_field_input'
								placeholder='Masukan nama anda di sini . .'
								className='p-3 placeholder:text-[#A0A0A0] placeholder:text-sm md:placeholder:text-base border-[#EEEEEE] rounded-lg'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label
								htmlFor=''
								className='text-[#686868] text-[12px] md:text-sm font-medium'>
								Message
							</label>
							<textarea
								name='message_field_input'
								id='message_field_input'
								className='min-h-[120px] p-3 text-sm placeholder:text-[#A0A0A0] placeholder:text-sm md:placeholder:text-base border-[#EEEEEE] rounded-lg'
								placeholder='Ayo, tanya - tanya aja di sini . .'
							/>
						</div>
						<button
							type='submit'
							className='mt-2 p-4 bg-[#3165AF] rounded-lg text-white text-base font-medium'>
							Kirim Pesan
						</button>
					</form>
				</div>
				{/* form pertanyaan */}
			</div>
		</div>
	);
};

export default Contact;
