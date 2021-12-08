import React from "react";

import { IMAGE_URL } from '@env';
import { navigationRef } from '@src/services';

import { ImageBackground  } from 'react-native'; 
import {
    CardDataWrapper,
    CardStyled,
    CardWrapper,
    Genre,
    GenresWrapper,
    Title,
    TitleWrapper,
    styles,
} from './styles';

const moviePosterNoImage = require('../../assets/images/no-image.jpg');

const MovieCard = ({ movie }) => {
    const moviePoster = { uri: `${IMAGE_URL}/${movie.poster}` };

    const goToMovie = () => {
        navigationRef.current?.navigate('Movie', {
            movie,
        });
    };

    return (
        <CardStyled onPress={goToMovie}>
            <CardWrapper>
                <ImageBackground source={movie.poster ? moviePoster : moviePosterNoImage} style={styles.backgroundImage}>
                    <CardDataWrapper>
                        <TitleWrapper>
                            <Title>{movie.title}</Title>
                        </TitleWrapper>
                        {movie.genres ? 
                            <GenresWrapper>
                                {movie.genres.map((genre, index) => (
                                    <Genre key={genre._id}>{genre.name} {index < movie.genres.length - 1 ? " | " : ""}</Genre>
                                ))}
                            </GenresWrapper> 
                        : <></>}
                    </CardDataWrapper>
                </ImageBackground>
            </CardWrapper>
        </CardStyled>
    );
};

export default MovieCard;