import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from 'styled-components/native';
import { format } from 'date-fns';

import { api } from '@src/services';

import StarRating from 'react-native-star-rating';

import Comment from './Comment';

import {
    AddCommentButton,
} from '@src/components';

import {
    DateText,
    RatingCard,
    RatingHeader,
    UserNameText,
} from './styles';

const Rating = ({ rating }) => {
    const theme = useContext(ThemeContext);

    const [comments, setComments] = useState(null);
    const [ratingDate, setRatingDate] = useState();

    useEffect(() => {
        setRatingDate(new Date(rating?.createdAt || ''));

        const getRatingComments = async () => {
            try {
                const ratingComments = await api.get(`ratings/${rating._id}/comments`);
                setComments(ratingComments.data);
            }
            catch(err) {
                console.log(err);
            }
        };

        getRatingComments();
    }, []);

    return (
        <RatingCard>
            <StarRating
                containerStyle={{ width: 50 }}
                disabled={true}
                emptyStarColor={theme.yellow}
                fullStarColor={theme.yellow}
                maxStars={5}
                rating={rating.rating}
                starSize={15}
                starStyle={{ marginHorizontal: 3 }}
            />
            <RatingHeader>
                <UserNameText>{rating.user.name}</UserNameText>
                <DateText>{ratingDate ? ` | ${format(ratingDate, 'dd/MM/yyyy')}` : ''}</DateText>
            </RatingHeader>
            {comments ? comments.map(comment => (
                <Comment key={comment._id} comment={comment} />
            )) : <></>}
            <AddCommentButton 
                ratingId={rating?._id} 
                userId='61ab784c696bf3f2c7f8fc6b' 
                updateComments={setComments}
                />
        </RatingCard>
    );
};

export default Rating;