import React, {PureComponent} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../../components/Layout';
import CardList from '../../components/CardList/CardList';
import SectionWithLoader from '../../hocs/SectionWithLoader';
import { checkError, getPhotos } from '../../services';

const BASE_SCROLL_CONTAINER_HEIGHT = '50rem';

class Homepage extends PureComponent {
  state = {
    images: [],
    page: 1
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    getPhotos({
      page: this.state.page,
    }).then((result) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...result.data],
        page: prevState.page + 1
      }));
    }, (error) =>{
      checkError(error);
      this.setState({
        error: error
      })
    })
  };

  render() {
    const {images, error} = this.state;
    return (
      <SectionWithLoader
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
