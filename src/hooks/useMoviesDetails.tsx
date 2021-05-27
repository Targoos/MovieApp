import {useState, useEffect} from 'react';
import {movieDB} from '../api/movieDB';
import {MovieDetails, MovieFull} from '../interfaces/movieAppInterface';
import {CreditsResponse} from '../interfaces/movieAppInterface';

export const useMoviesDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailRes, castRes] = await Promise.all([
      movieDetailPromise,
      castPromise,
    ]);

    setMovieDetails({
      isLoading: false,
      movieFull: movieDetailRes.data,
      cast: castRes.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...movieDetails,
  };
};
