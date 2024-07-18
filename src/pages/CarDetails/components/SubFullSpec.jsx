import { Table } from 'flowbite-react';
import React, { useState } from 'react';

const SubFullSpec = ({ carID }) => {
  const [carModel, setCarModel] = useState(null);

  //   const carDetail = carDetails.filter((row) => row.carID == carID)[0];

  return (
    <div className='p-[72px] pt-0 flex flex-col gap-[32px]'>
      <div className='pt-[48px]'></div>
      {/*  */}
      {/* <div className='pt-[48px] flex items-center gap-6'>
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
			</div> */}
			<div className='flex flex-col gap-6'>
				<p className='text-2xl text-center font-medium'>title</p>
				<Table>
					<Table.Head>
						<Table.HeadCell className='bg-[#30486B] w-[30%] text-white'>code</Table.HeadCell>
						<Table.HeadCell className='bg-[#30486B] w-[70%] text-white'>code1</Table.HeadCell>
					</Table.Head>
					<Table.Body className='divide-y'>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
								<Table.Cell className='whitespace-nowrap font-medium text-gray-900'>description</Table.Cell>
								<Table.Cell>value</Table.Cell>
							</Table.Row>
					</Table.Body>
				</Table>
			</div>
			<div className='flex flex-col gap-6'>
				<p className='text-2xl text-center font-medium'>Dimensi</p>
				<Table>
					<Table.Head>
						<Table.HeadCell className='bg-[#30486B] w-[30%] text-white'>Product name</Table.HeadCell>
						<Table.HeadCell className='bg-[#30486B] w-[70%] text-white'>product1</Table.HeadCell>
					</Table.Head>
					<Table.Body className='divide-y'>
						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900'>Engine Type</Table.Cell>
							<Table.Cell>R 2.2 CRDi</Table.Cell>
						</Table.Row>
						<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
							<Table.Cell className='whitespace-nowrap font-medium text-gray-900'>Displacement (cc)</Table.Cell>
							<Table.Cell>2,199</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		</div>
	);
};

export default SubFullSpec;
