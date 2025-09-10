import React from 'react';
import './style.css';
import Title, { TitleSize } from '../title/title';
import StarIcon from '../star-icon/star-icon';

function StarCard({ star }) {
  const { image, name, about, feature } = star;
  return (
    <div className='star-card'>
      <figure className='star-card__figure'>
        <img src={image} width={313} height={320} alt='изображение кота' />
        <StarIcon className='star-card__icon' feature={feature} />
      </figure>
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p
        className='star-card__text'
        dangerouslySetInnerHTML={{ __html: about }}
      ></p>
    </div>
  );
}

export default StarCard;
