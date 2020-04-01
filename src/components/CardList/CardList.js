import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';

import styles from './cardList.module.css';

const CardList = (props) => {
  return (
    <section className={styles.cardList}>
      <main className={styles.cardListContent}>
        {props.cards.map((card, index) => (
          <ImageCard
            key={`${card.id}_${index}`}
            {...card}
          />
        ))}
      </main>
    </section>
  )
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string,
    id: PropTypes.string,
    author: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    url: PropTypes.string,
    download_url: PropTypes.string,
  }))
};

export default React.memo(CardList);

