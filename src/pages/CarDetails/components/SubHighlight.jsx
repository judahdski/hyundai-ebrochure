import React from 'react';
import { carDetails } from '../../../assets/data/carDetails';

const SubHighlight = ({ carID }) => {
  //#region Get data
  const carDetail = () => carDetails.filter((row) => row.id == carID)[0];
  const getHighlights = () => carDetail().carDetail?.sections?.highlights;
  //#endregion

  return (
    <div className='px-4 py-8 md:p-[72px] flex flex-col gap-8 md:gap-[72px]'>
      {getHighlights().map(({ code, title, body, images }) => (
        <div
          key={code}
          className='flex flex-col gap-6 md:gap-8 md:items-center'
        >
          <h3 className='text-[22px] md:text-[32px] font-medium'>{title}</h3>
          <p className='text-sm md:text-base leading-6'>{body}</p>
          {images.map((imgPath) => (
            <img
              className='rounded-lg'
              src={imgPath}
              alt=''
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubHighlight;
