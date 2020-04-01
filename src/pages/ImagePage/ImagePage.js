import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom'
import {
  Grid,
  IconButton
} from "@material-ui/core";
import { MdFileDownload } from "react-icons/md";
import { checkError, getImage } from '../../services';
import Layout from "../../components/Layout";
import ImageCard from '../../components/ImageCard/ImageCard';
import RelatedImagesList from '../../components/RelatedImagesList/RelatedImagesList';

import 'react-medium-image-zoom/dist/styles.css'
import styles from './image.module.css';
import SectionWithLoader from '../../hocs/SectionWithLoader';


const ImagePage = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchSingleImage = () => {
      setLoading(true);
      getImage(imageId).then((result) => {
        setImage(result.data);
        setLoading(false);
      }, (error) =>{
        checkError(error);
        setLoading(false);
        setError(error)
      })
    };
    fetchSingleImage();
  }, [imageId]);

  return (
    <SectionWithLoader
      loading={loading}
      error={error}
    >
      <Layout>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <IconButton href={image.download_url}>
                  <MdFileDownload />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Zoom>
            <ImageCard
              className={styles.imageCard}
              {...image}
            />
            </Zoom>
          </Grid>
          <RelatedImagesList
            imageId={imageId}
          />
        </Grid>
      </Layout>
    </SectionWithLoader>
  );
};

export default React.memo(ImagePage);
