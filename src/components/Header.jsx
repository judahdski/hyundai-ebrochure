import React, { useState } from 'react';
import headerLogo from '../assets/img/hyundai-logo-header.png';
import { generalCode } from '../assets/data/generalCodes';
import { Modal } from 'flowbite-react';
import { WAButton } from './WAButton';

const Header = ({ setPage, page }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='text-white md:h-[72px] h-[68px] bg-[#1C4682] flex justify-between px-[20px] md:px-[68px]'>
      <img
        src={headerLogo}
        alt='Hyundai Logo'
      />

      <div
        className='pr-[12px] flex items-center text-base md:hidden'
        onClick={() => setOpenModal(true)}
      >
        <i className='fa-solid fa-bars'></i>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body>
          <div className='space-y-6'>
            {generalCode
              .filter((item) => item.category == 'screen')
              .map(({ code, description }, index) => (
                <div
                  key={index}
                  className='p-6 bg-[#1C4682] w-full rounded-2xl flex justify-center text-white tracking-[6px]'
                  onClick={() => {
                    setOpenModal(false);
                    setPage(code);

                    localStorage.setItem('carID', null);
                  }}
                >
                  {description.toUpperCase()}
                </div>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='px-2 w-full flex flex-col gap-6'>
            <p className='font-medium'>Layanan Kami</p>
            <div className='w-full flex flex-col justify-stretch gap-4'>
              {generalCode
                .filter((item) => item.category == 'feature')
                .map(({ description, value, message }, index) => (
                  <WAButton
                    key={index}
                    customClassName={
                      'p-4 w-full border border-[#E2E2E2] rounded-2xl flex items-center justify-stretch gap-4'
                    }
                    content={
                      <>
                        <img
                          src={value}
                          alt={description}
                          className='w-[24px] h-[24px]'
                        />
                        <p className='text-sm font-medium'>{description}</p>
                      </>
                    }
                    waMessage={message ?? 'Halo mas, saya ingin '}
                  />
                ))}
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <div className='hidden md:flex items-center'>
        {generalCode
          .filter((item) => item.category == 'screen')
          .map(({ code, description }, index) => (
            <p
              key={index}
              className={`px-[36px] py-2 tracking-wide cursor-pointer ${
                page == code ? 'font-medium' : 'text-slate-200'
              }`}
              onClick={() => {
                setPage(code);

                localStorage.setItem('carID', null);
              }}
            >
              {description}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Header;
