import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from 'styled-components/native';

import { format } from 'date-fns';
import { IMAGE_URL } from '@env';

import { api } from '@src/services';

import StarRating from 'react-native-star-rating';
import { Image } from 'react-native';
import {
    AverageRatingText,
    AverageRatingWrapper,
    CustomText,
    Genre,
    GenresWrapper,
    Information,
    MovieBody,
    MovieGeneralInfo,
    MovieHeader,
    Overview,
    OverviewWrapper,
    Title,
    TitleWrapper,
    styles,
} from './styles';

import moviePosterNoImage from '@src/assets/images/no-image.jpg';

const MovieInfo = ({ movie, reload }) => {
    const theme = useContext(ThemeContext);

    const [releaseDate, setReleaseDate] = useState(null);
    const [language, setLanguage] = useState(null);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(()=> {
        const getAverageRating = async () => {
            try {
                const average = await api.get(`movies/${movie._id}/ratings/average`);
                if (average.data.length) {
                    setAverageRating(average.data[0].average);
                }
            }
            catch(err) {
                console.log(err);
            }
        };

        const releaseDateData = movie && movie.releaseDate ? new Date(movie.releaseDate) : '';
        const languageData = movie && movie.language ? movie.language : '';

        setReleaseDate(releaseDateData);
        setLanguage(languageData);
        getAverageRating();
    }, [movie, reload]);

    return (
        <Information>
            <MovieHeader>
                {movie && movie.poster ? (
                            <Image style={styles.moviePoster} source={{ uri: `${IMAGE_URL}/${movie.poster}` }} />
                ) : (
                            <Image style={styles.moviePoster} source={moviePosterNoImage} />
                )}
                <MovieGeneralInfo>
                    <TitleWrapper>
                        <Title>{movie ? movie.title : ''}</Title>
                    </TitleWrapper>
                    {movie && movie.genres ? 
                        <GenresWrapper>
                            {movie.genres.map((genre, index) => (
                                <Genre key={genre._id}>{genre.name} {index < movie.genres.length - 1 ? " | " : ""}</Genre>
                            ))}
                        </GenresWrapper> 
                    : <></>}
                    <CustomText>Release Date: {releaseDate ? format(releaseDate, 'dd/MM/yyyy') : ''}</CustomText>
                    <CustomText>Language: {language ? language : ''}</CustomText>
                    <AverageRatingWrapper>
                        <AverageRatingText>Rating:</AverageRatingText>
                        <StarRating
                            containerStyle={{ width: 50 }}
                            disabled={true}
                            emptyStarColor={theme.yellow}
                            fullStarColor={theme.yellow}
                            maxStars={5}
                            rating={averageRating}
                            starSize={15}
                            starStyle={{ marginHorizontal: 3 }}
                        />
                    </AverageRatingWrapper>
                </MovieGeneralInfo>
            </MovieHeader>
            <MovieBody>
                <OverviewWrapper>
                    <Overview numberOfLines={5}>{movie ? movie.overview : ''}</Overview>
                </OverviewWrapper>
            </MovieBody>
        </Information>
    );
};

export default MovieInfo;