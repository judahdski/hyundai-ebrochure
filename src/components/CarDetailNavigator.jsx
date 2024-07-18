import React from 'react';

const CarDetailNavigator = ({ carDetailSection, setCarDetailSection }) => {
	const navigatorList = [
		{ index: 0, code: 'highlight', title: 'HIGHLIGHT', isLast: false },
		{ index: 1, code: 'gallery', title: 'GALLERY', isLast: false },
		{ index: 2, code: 'price', title: 'PRICE', isLast: false },
		{ index: 3, code: 'full_spec', title: 'FULL SPEC', isLast: true },
	];
	const { innerWidth: screenWidth } = window;

  return screenWidth > 980 ? (
    <div className='bg-white -mt-[27px] w-full flex justify-stretch rounded-[12px] overflow-hidden shadow-md'>
      {navigatorList.map(({ code, title, isLast }, index) => (
        <div
          key={index}
          className={`p-4 text-center tracking-[3px] ${
            carDetailSection == code
              ? ' text-[18px] text-[#1C4682] font-medium'
              : 'text-black'
          } flex-1 flex justify-center items-center  border-r-2 ${
            !isLast ? 'border-[#EDF3FA]' : ''
          } cursor-pointer hover:bg-slate-50`}
          onClick={() => setCarDetailSection(code)}
        >
          {title}
        </div>
      ))}
    </div>
  ) : (
    <>
      <div className='bg-white -mt-[27px] w-full flex justify-center rounded-[12px] overflow-hidden shadow-md'>
        <div
          className={`p-4 text-center tracking-[3px] ${
            carDetailSection == code
              ? ' text-[18px] text-[#1C4682] font-medium'
              : 'text-black'
          } flex-1 flex justify-center items-center  border-r-2 ${
            !isLast ? 'border-[#EDF3FA]' : ''
          } cursor-pointer hover:bg-slate-50`}
          onClick={() => setOpenModal(true)}
        >
          {title}
        </div>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body>
          <div className='space-y-6'>
            {navigatorList.map(({ code, title }, index) => (
              <div
                key={index}
                className='p-6 bg-[#1C4682] w-full rounded-2xl flex justify-center text-white tracking-[6px]'
                onClick={() => {
                  setCarDetailSection(code);
                  setOpenModal(false);
                }}
              >
                {title.toUpperCase()}
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarDetailNavigator;
