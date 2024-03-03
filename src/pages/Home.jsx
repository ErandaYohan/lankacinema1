import React from 'react'
import HeroSlide from '../component/hero-slide/HeroSlide'
import { Link } from 'react-router-dom';
import { OutlineButton } from '../component/button/Button';
import MovieList from '../component/movie-list/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';

export default function Home() {
    return (
        <div>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Tv</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Tv</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>
        </div>
    )
}
