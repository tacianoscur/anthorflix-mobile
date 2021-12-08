import React, { useEffect, useState } from "react";
import { format } from 'date-fns';

import { View, Text } from 'react-native';

import {
    CommentCard,
    DescriptionText,
    UserNameText,
} from './styles';

const Comment = ({ comment }) => {

    return (
        <CommentCard>
            <UserNameText>{comment.user.name}</UserNameText>
            <DescriptionText>{comment.description}</DescriptionText>
        </CommentCard>
    );
};

export default Comment;