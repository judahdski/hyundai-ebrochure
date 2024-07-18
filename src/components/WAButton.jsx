import { Fragment } from 'react';

export const WAButton = ({ content, waMessage }) => {
	return (
		<>
			<a
				href={`https://wa.me/+62813131313?text=${encodeURIComponent(waMessage)}`}
				target='_blank'>
				{content}
			</a>
		</>
	);
};
