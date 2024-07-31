import { Table } from 'flowbite-react';
import React, { useState, useEffect, useCallback } from 'react';
import { cretaDetail } from '../../../assets/data/car_detail_list/cretaDetail';
import HeDropdown from '../../../components/HeDropdown';

const SubFullSpec = ({ carID }) => {
	// #region UseState
	const [carVariantID, setCarVariantID] = useState({ ID: '', modelName: null });
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	// #endregion UseState

	//#region Get data
	const getVariants = () => cretaDetail.variants;

	const getFullSpec = useCallback(() => {
		try {
			return cretaDetail.sections.fullSpecs.find((row) => row.variantID === carVariantID.ID);
		} catch (err) {
			setError(err);
			return null;
		}
	}, [carVariantID.ID]);

	const specDetails = (categoryID) => {
		return getFullSpec()?.details.filter((row) => row.categoryID === categoryID) ?? [];
	};
	//#endregion

	useEffect(() => {
		const fullSpec = getFullSpec();
		if (fullSpec) {
			setCategories(fullSpec.categories ?? []);
		}
	}, [getFullSpec]);

	return (
		<div className='px-4 py-8 md:p-[72px] flex flex-col gap-[32px]'>
			<HeDropdown
				DropdownItems={getVariants().map(({ model, id }) => ({
					description: model,
					onClick: () => setCarVariantID({ ID: id, modelName: model }),
				}))}
				ActiveText={carVariantID.modelName ?? 'Silahkan pilih model mobil'}
			/>

			{carVariantID.ID && !error ? (
				categories.map(({ id, title }) => (
					<div
						key={id}
						className='flex flex-col gap-4 md:gap-6'>
						<p className='text-[20px] md:text-2xl text-center font-medium'>{title}</p>

						{specDetails(id).map(({ specType, specs }, index) => (
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
							</Table>
						))}
					</div>
				))
			) : (
				<p className='text-center text-red-500'>Data tidak tersedia atau terjadi kesalahan.</p>
			)}
		</div>
	);
};

export default SubFullSpec;
