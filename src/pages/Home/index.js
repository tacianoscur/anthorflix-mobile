import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from 'styled-components/native';

import {
    View,
} from 'react-native';

import {
    CustomScrollView,
    Layout,
    MovieCard,
} from '@src/components';

import {
    HeaderStyled,
    ListMovies,
    StyledLogo,
} from './styles';

import { api } from '@src/services';

const Home = () => {
    const theme = useContext(ThemeContext);
    const [ allMovies, setAllMovies ] = useState(null);

    useEffect(() => {
        const getAllMovies = async () => {
            try {
                const movies = await api.get('/movies');
    
                setAllMovies(movies);
            }
            catch(err) {
                console.log(err);
            }
        };

        getAllMovies();
    }, []);
    
    return (
        <Layout>
            <CustomScrollView theme={theme}>
                    <HeaderStyled>
                        <StyledLogo>Anthorflix</StyledLogo>
                    </HeaderStyled>
                    <ListMovies>
                        {allMovies ? 
                            allMovies.data.map(movie => (
                                <MovieCard key={movie._id} movie={movie} />
                            )) : (
                                <></>
                            )
                        }
                    </ListMovies>
            </CustomScrollView>
        </Layout>
    )
};

export default Home;