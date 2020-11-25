import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Search from '../components/Search';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                id={item.id}
                cover={item.cover}
                year={item.year}
                title={item.title}
                contentRating={item.contentRating}
                duration={item.duration}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => (
            <CarouselItem
              key={item.id}
              id={item.id}
              cover={item.cover}
              year={item.year}
              title={item.title}
              contentRating={item.contentRating}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Videos Originales'>
        <Carousel>
          {originals.map((item) => (
            <CarouselItem
              key={item.id}
              id={item.id}
              cover={item.cover}
              year={item.year}
              title={item.title}
              contentRating={item.contentRating}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default connect(props, actions)(Home)
export default connect(mapStateToProps, null)(Home);
