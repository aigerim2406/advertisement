export const ADD_ADVERTISEMENT = 'ADD_ADVERTISEMENT';
export const DELETE_ADVERTISEMENT = 'DELETE_ADVERTISEMENT';

export const addAdvertisement = (advertisement) => ({
    type: ADD_ADVERTISEMENT,
    payload: advertisement,
});

export const deleteAdvertisement = (id) => ({
    type: DELETE_ADVERTISEMENT,
    payload: id,
});
