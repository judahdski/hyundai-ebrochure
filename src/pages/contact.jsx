import React from 'react';

const Contact = () => {
	return (
		<div>
			<div className='p-8'>
				<div className='bg-[#E7E7E7] w-[320px] aspect-square rounded-2xl flex justify-center items-center'>
					<i class='fa-solid fa-user text-[106px] text-[#BBBBBB]'></i>
				</div>
			</div>
			<div>
				<div className='pt-4 pb-12 px-6 border-b-2 border-[#EDF3FA] flex flex-col gap-6'>
					{/* nama dan title */}
					<div className='flex flex-col items-center gap-1.5'>
						<p className='text-3xl font-semibold'>Renaldy</p>
						<p className='text-sm text-[#3F3E3E] font-medium'>Senior Hyundai Consultant</p>
					</div>
					{/* nama dan title */}

					{/* wa dan ig */}
					<div className='flex flex-col items-center gap-3'>
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
				<div className='pt-[48px] pb-[56px] px-4'>
					<form
						action=''
						className='bg-[#EDF3FA] rounded-2xl p-4 flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<label
								htmlFor=''
								className='text-[#686868] text-[12px] font-medium'>
								Nama
							</label>
							<input
								type='text'
								name='nama_field_input'
								id='nama_field_input'
								placeholder='Masukan nama anda di sini..'
								className='p-3 placeholder:text-[#A0A0A0] placeholder:text-sm border-[#EEEEEE] rounded-lg'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<label
								htmlFor=''
								className='text-[#686868] text-[12px] font-medium'>
								Message
							</label>
							<textarea
								name='message_field_input'
								id='message_field_input'
								className='min-h-[120px] p-3 text-sm placeholder:text-[#A0A0A0] placeholder:text-sm border-[#EEEEEE] rounded-lg'
								placeholder='Ayo, tanya - tanya aja di sini..'
							/>
						</div>
						<button
							type='submit'
							className='mt-2 p-4 bg-[#3165AF] rounded-lg text-white text-base font-medium'>
							Kirim Pesan
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
