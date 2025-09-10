import React from 'react';
import './style.css';
import Title, { TitleSize } from '../../ui/title/title';
import StarCard from '../../ui/star-card/star-card';
import Button from '../../ui/button/button';

function StarsList({ stars }) {
  return (
    <section className='stars-list'>
      <Title size={TitleSize.DEFAULT}>Наши звезды</Title>
      <ul className='stars-list__list'>
        {stars.map((star) => (
          <li className='stars-list__item' key={star.id}>
            <StarCard star={star} />
          </li>
        ))}
      </ul>
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
}

export default StarsList;
