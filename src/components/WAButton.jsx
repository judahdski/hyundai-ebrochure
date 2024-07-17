export const WAButton = ({ content, customClass, waMessage }) => {
  return (
    <a
      href={`https://wa.me/+62813131313?text=${encodeURIComponent(waMessage)}`}
      className={`${customClass}`}
      target="_blank"
    >
      {content}
    </a>
  );
};
