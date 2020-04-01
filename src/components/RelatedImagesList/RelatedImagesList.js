import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography
} from "@material-ui/core";
import * as constants from '../../services/constants';
import generateRandoms from '../../utils/generateRandoms';
import ImageCard from '../ImageCard/ImageCard';

import styles from './relatedImagesList.module.css';

const RelatedImagesList = (props) => {
  const [imagesList, setImagesList] = useState([]);
  useEffect(() => {
    setImagesList(generateRandoms(5));
  }, []);
  return (
    <div className={styles.container}>
      <Typography variant="h5" className={styles.title}>Related images</Typography>
      <Grid container spacing={2} justify="space-between">
        {imagesList.map((id) => (
          <Grid item xs={6} sm={4} lg={2} key={id}>
            <ImageCard
              className={styles.imageCard}
              id={String(id)}
              download_url={constants.URL_IMAGE_TEMPLATE.replace(':id', id)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

RelatedImagesList.propTypes = {
  imageId: PropTypes.string
};

export default React.memo(RelatedImagesList);
