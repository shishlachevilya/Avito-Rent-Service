import React from 'react';
import './rent-list-item.scss';
import { Link } from 'react-router-dom';

const RentListItem = ({ item }) => {
  const { id, address, title, previewImage, price } = item;

  return (
    <article id={ id } className='article'>
      <img src={ previewImage } alt={ title }/>
      <div className='article__info'>
        <h3>{ title }</h3>
        <p>{ address }</p>
        <p>{ price }</p>
        <Link to={ `/detail/${ id }` }>
          view detail
        </Link>
      </div>
    </article>
  );
};

export default RentListItem;
