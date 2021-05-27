import {useEffect, useState} from 'react';
import {movieDB} from '../api/movieDB';
import {
  MovieDbMoviesResponse,
  useMoviesState,
} from '../interfaces/movieAppInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<useMoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = await movieDB.get<MovieDbMoviesResponse>(
      '/now_playing',
    );
    const popularPromise = await movieDB.get<MovieDbMoviesResponse>('/popular');
    const topRatedPromise = await movieDB.get<MovieDbMoviesResponse>(
      '/top_rated',
    );
    const upcomingPromise = await movieDB.get<MovieDbMoviesResponse>(
      '/upcoming',
    );

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {...moviesState, isLoading};
};
