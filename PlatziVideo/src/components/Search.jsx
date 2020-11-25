import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';
import Categories from './Categories';

const Search = (props) => {
  const { isHome, isSearch, search } = props;
  const inputStyle = classNames('input', { isHome });
  const hasSearch = Object.keys(search).length > 0;

  const handleChange = (e) => {
    props.searchVideo(e.target.value);
  };

  const searchStyle = classNames('categories', {
    isSearch,
  });

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder='Buscar...'
        name='search'
        onChange={handleChange}
      />
      {hasSearch && (
        <Categories title='Resultados' className={searchStyle}>
          <Carousel>
            {search.map((item) => (
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
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
