import { salesProfile } from '../assets/data/salesProfile';

export const WAButton = ({ customClassName, content, waMessage }) => {
  return (
    <>
      <a
        className={customClassName}
        href={`https://wa.me/${salesProfile.phoneNo}?text=${encodeURIComponent(
          waMessage
        )}`}
        target='_blank'
      >
        {content}
      </a>
    </>
  );
};
