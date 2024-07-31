import { Dropdown } from 'flowbite-react';

const HeDropdown = ({ ActiveText, DropdownItems = [] }) => {
	return (
		<div className='w-full flex flex-col md:flex-row md:items-center gap-2 md:gap-6'>
			<p className='font-medium text-sm md:text-base'>Varian</p>
			<Dropdown
				label=''
				dismissOnClick={true}
				renderTrigger={() => <span className='flex-1 py-2 px-4 rounded-lg border border-[#CFCFCF] hover:bg-slate-50 cursor-pointer text-slate-500'>{ActiveText ?? 'Silahkan pilih varian'}</span>}>
				{DropdownItems.map(({ description, onClick }, index) => (
					<Dropdown.Item
						key={index}
						as='p'
						onClick={onClick}>
						{description}
					</Dropdown.Item>
				))}
			</Dropdown>
		</div>
	);
};

export default HeDropdown;
