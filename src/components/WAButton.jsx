export const WAButton = ({ customClassName, content, waMessage }) => {
	return (
		<>
			<a
				className={customClassName}
				href={`https://wa.me/+62813131313?text=${encodeURIComponent(waMessage)}`}
				target='_blank'>
				{content}
			</a>
		</>
	);
};
