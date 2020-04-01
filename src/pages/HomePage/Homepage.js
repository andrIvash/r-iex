import React, {PureComponent} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../components/Layout';
import CardList from '../../components/CardList/CardList';
import SectionWithLoader from '../../hocs/SectionWithLoader';
import { checkError, getPhotos } from '../../services';

const BASE_SCROLL_CONTAINER_HEIGHT = '55rem';

class Homepage extends PureComponent {
  state = {
    images: [],
    page: 0,
    loading: false
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    this.setState({
      loading: true
    }, () => {
      getPhotos({
        page: this.state.page,
      }).then((result) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...result.data],
          loading: false
        }));
      }, (error) =>{
        checkError(error);
        this.setState({
          error: error,
          loading: false
        })
      })
    })
  };

  likeImage = () => {};

  render() {
    const {images, loading, error} = this.state;
    return (
      <SectionWithLoader
        loading={loading}
        error={error}
      >
        <Layout>
          <InfiniteScroll
            height={BASE_SCROLL_CONTAINER_HEIGHT}
            dataLength={images.length}
            next={this.fetchPhotos}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            >
            <CardList
              cards={images}
            />
          </InfiniteScroll>
        </Layout>
      </SectionWithLoader>
    );
  }
}

export default Homepage;
