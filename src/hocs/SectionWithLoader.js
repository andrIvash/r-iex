import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../services/constants';
import styles from './sectionWithLoader.module.css';

const SectionWithLoader = (props) => {
  const {error, loading} = props;
  return (
    <div className="sectionWithLoader">
      {loading ? (
        <div className={styles.wrapper}>
          <div className={styles.loader}>
            Loading...
          </div>
        </div>
      ) : (
        error && error.response ? (
          <div className={styles.error}>
            {error.response && error.response.data ? error.response.data : constants.DEFAULT_ERROR_MESSAGE}
          </div>
        ) : props.children
      )}
    </div>
  )
};

SectionWithLoader.propTypes = {
  error: PropTypes.shape({}),
  loading: PropTypes.bool,
  children: PropTypes.element
}

export default React.memo(SectionWithLoader);
