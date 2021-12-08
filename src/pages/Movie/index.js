import React, { useContext, useEffect, useRef, useState } from "react";
import { useRoute, useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components/native';

import {
    Button,
    CustomScrollView,
    Layout,
    ModalRating,
    MovieAvaliations,
    MovieInfo,
} from '@src/components';

import {
    MovieData,
} from './styles';

const Movie = () => {
    const theme = useContext(ThemeContext);
    const navigation = useNavigation();
    const route = useRoute();

    const modalRatingRef = useRef(null);

    const [movie, setMovie] = useState();
    const [visible, setVisible] = useState(false);
    const [reload, setReload] = useState();

    useEffect(()=> {
        const movieData = route.params?.movie;
        setMovie(movieData);
    }, [route.params, route]);

    const openModalRating = () => {
        setVisible(true);
    };

    const handleVisibleChange = (newVisible) => {
        setVisible(newVisible);
    };

    const reloadData = () => {
        setReload(true);
    };

    return (
        <Layout>
            <CustomScrollView theme={theme}>
                {movie && (
                    <MovieData>
                        <MovieInfo movie={movie} reload={reload} />
                        <MovieAvaliations movieId={movie._id} reload={reload} />
                        <Button
                            onPress={() => openModalRating()}
                            color={theme.darkGrey}
                            title="Avaliar"
                            textColor={theme.white}
                            textCenter
                        />
                    </MovieData>
                )}
            </CustomScrollView>
            
            <ModalRating
                modalizeRef={modalRatingRef}
                movieId={movie?._id || ''}
                userId="61ab784c696bf3f2c7f8fc6b"
                visible={visible}
                handleVisibleChange={handleVisibleChange}
                reloadData={reloadData}
            />
        </Layout>
    );
};

export default Movie;