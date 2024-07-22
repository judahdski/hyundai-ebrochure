import { Table } from 'flowbite-react';
import React, { useState } from 'react';
import { cretaDetail } from '../../../assets/data/car_detail_list/cretaDetail';

const SubFullSpec = ({ carID }) => {
	// #region UseState
	const [carModel, setCarModel] = useState(null);
	// #endregion UseState

	//#region Get data
	const getFullSpec = () => cretaDetail.sections.fullSpec;
	const categories = getFullSpec().categories;
	const specDetails = getFullSpec().details;
	//#endregion

	//   const carDetail = carDetails.filter((row) => row.carID == carID)[0];

	return (
		<div className='px-4 py-8 md:p-[72px] flex flex-col gap-[32px]'>
			{categories.map(({ id, title }) => {
				console.log({ specDetails: specDetails.filter((row) => row.categoryID == id) });

				return (
					<div
						key={id}
						className='flex flex-col gap-4 md:gap-6'>
						<p className='text-[20px] md:text-2xl text-center font-medium'>{title}</p>
						{specDetails
							.filter((row) => row.categoryID == id)[0]
							.specs.map(({ specType, specs }, index) => {
								<Table key={index}>
									<Table.Head>
										<Table.HeadCell className='bg-[#30486B] w-[30%] text-white'>{specType}</Table.HeadCell>
										<Table.HeadCell className='bg-[#30486B] w-[70%] text-white'></Table.HeadCell>
									</Table.Head>
									<Table.Body className='divide-y'>
										{specs.map(({ name, value }, index) => (
											<Table.Row
												key={index}
												className='bg-white dark:border-gray-700 dark:bg-gray-800'>
												<Table.Cell className='whitespace-nowrap font-medium text-gray-900'>{name}</Table.Cell>
												<Table.Cell>{value}</Table.Cell>
											</Table.Row>
										))}
									</Table.Body>
								</Table>;
							})}
					</div>
				);
			})}
		</div>
	);
};

export default SubFullSpec;

{
	/*  */
}
{
	/* <div className='pt-[48px] flex items-center gap-6'>
				<p className='font-medium'>Model</p>
				<div className='py-2 px-4 rounded-lg border border-[#CFCFCF]'>
					<Dropdown
						label={carModel ?? 'Silahkan pilih model mobil'}
						dismissOnClick={true}
						inline>
						<Dropdown.Item onClick={() => setCarModel('Dashboard')}>Dashboard</Dropdown.Item>
						<Dropdown.Item onClick={() => setCarModel('Settings')}>Settings</Dropdown.Item>
						<Dropdown.Item onClick={() => setCarModel('Earnings')}>Earnings</Dropdown.Item>
						<Dropdown.Item onClick={() => setCarModel('Sign out')}>Sign out</Dropdown.Item>
					</Dropdown>
				</div>
			</div> */
}
