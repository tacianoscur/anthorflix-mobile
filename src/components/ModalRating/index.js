import React, { useContext, useState } from "react";
import { ThemeContext } from 'styled-components/native';
import StarRating from 'react-native-star-rating';

import { api } from '@src/services';

import {
    Button,
    Modal,
} from '@src/components';

const ModalRating = ({
    modalizeRef,
    movieId,
    userId,
    visible,
    handleVisibleChange,
    reloadData,
}) => {
    const theme = useContext(ThemeContext);
    const [currentRating, setRating] = useState(0);

    const handleSend = async () => {
        try {
            if (currentRating > 0) {
                const rating = await api.post('ratings', {
                    rating: currentRating,
                    userId,
                    movieId,
                });

                console.log(rating.data);
            }
        }
        catch(err) {
            console.log(err);
        }

        handleVisibleChange(false);
        setRating(0);
        reloadData();
    };

    const handleClose = () => {
        handleVisibleChange(false);
        setRating(0);
    };

    return (
        <Modal
            modalizeRef={modalizeRef}
            title="Avaliar filme"
            text="Deixe sua avaliação! Ela é muito importante para continuarmos evoluindo :)"
            visible={visible}
        >
            <StarRating
                containerStyle={{paddingHorizontal: 16}}
                disabled={false}
                emptyStarColor={theme.yellow}
                fullStarColor={theme.yellow}
                maxStars={5}
                rating={currentRating}
                selectedStar={(rating) => setRating(rating)}
                starSize={35}
                starStyle={{marginHorizontal: 4}}
            />
            <Button
                color={theme.green}
                onPress={handleSend}
                textCenter
                title="Enviar"
            />
            <Button
                color={theme.white}
                onPress={handleClose}
                textCenter
                textColor={theme.darkText}
                title="Cancelar"
            />
        </Modal>
    );
};

export default ModalRating;