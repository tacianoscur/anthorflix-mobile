import React, { useRef, useState } from "react";

import { api } from '@src/services';

import { Keyboard } from 'react-native';

import {
    AddCommentCard,
    CommentInput,
    StyledButton,
} from './styles';

const AddCommentButton = ({
    ratingId,
    userId,
    updateComments,
}) => {
    const inputRef = useRef();

    const [comment, setComment] = useState();

    const handleSubmit = async () => {
        try {
            if (comment) {
                const newComment = await api.post('comments', {
                    description: comment,
                    userId,
                    ratingId,
                });

                updateComments(comments => [newComment.data, ...comments]);
            }

            setComment(null);
            Keyboard.dismiss();
        }
        catch(err) {
            console.log(err);
        }
    };

    const onChangeComment = (text) => {
        setComment(text);
    };

    return (
        <AddCommentCard>
            <CommentInput>
                <CommentInput.Input
                    name="comment"
                    ref={inputRef}
                    placeholder='Write your comment here'
                    value={comment}
                    onChangeText={onChangeComment}
                />
            </CommentInput>
            <StyledButton
                onPress={() => handleSubmit()}
            >
                <StyledButton.Button>
                    <StyledButton.Title>
                        Enviar
                    </StyledButton.Title>
                </StyledButton.Button>
            </StyledButton>
        </AddCommentCard>
    );
};

export default AddCommentButton;