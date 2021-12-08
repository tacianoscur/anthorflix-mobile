import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from 'styled-components/native';

import { api } from '@src/services';

import { View } from 'react-native';

import {
    CustomScrollView,
    Rating,
} from '@src/components';

import {
    RatingsTitle,
} from './styles';

const MovieAvaliations = ({ movieId, reload }) => {
    const theme = useContext(ThemeContext);

    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const getMovieRatings = async () => {
            try {
                const movieRatings = await api.get(`movies/${movieId}/ratings`);
                setRatings(movieRatings.data);
            }
            catch(err) {
                console.log(err);
            }
        };

        getMovieRatings();
    }, [reload]);

    return (
        <View style={{ flex: 1, }}>
            {ratings && ratings.length ? (
                <>
                    <RatingsTitle>Avaliações</RatingsTitle>
                    <CustomScrollView>
                        {ratings.map(rating => (
                            <Rating key={rating._id} rating={rating} />
                        ))}
                    </CustomScrollView>
                </>
            ) : <></>}
        </View>
    );
};

export default MovieAvaliations;