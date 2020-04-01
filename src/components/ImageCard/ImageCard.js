import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styles from './imageCard.module.css';

const ImageCard = (props) => (
  <Link
    className={`${styles.imageCard} ${props.className ? props.className : ''}` }
    to={`/image/${props.id}`}
    onClick={props.clickHandler ? props.clickHandler : null}
  >
    <img
      className={styles.image}
      src={props.download_url}
      title={props.author}
      alt={props.author}
    />
    {props.author && (
      <div className={styles.content}>
        <div className={styles.title}>
          {props.author}
        </div>
      </div>
    )}
  </Link>
);

ImageCard.propTypes = {
  clickHandler: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  author: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  download_url: PropTypes.string,
};

export default React.memo(ImageCard);
