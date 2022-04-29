import React from 'react';

const Page = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className='page-container'>
      <button onClick={onLeftClick} className='btn-voltar'>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <div>{page} de {totalPages}</div>
      <button onClick={onRightClick} className='btn-avancar'>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
}

export default Page;