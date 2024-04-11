import React, { createContext, useState } from 'react';

export const AdvertisementContext = createContext();

const AdvertisementContextProvider = (props) => {
    const [advertisements, setAdvertisements] = useState([]);

    const addAdvertisement = (title, content, photo) => {
        setAdvertisements([...advertisements, { id: Date.now(), title, content, photo }]);
    }

    const removeAdvertisement = (id) => {
        setAdvertisements(advertisements.filter(advertisement => advertisement.id !== id));
    }

    return (
        <AdvertisementContext.Provider value={{ advertisements, addAdvertisement, removeAdvertisement }}>
            {props.children}
        </AdvertisementContext.Provider>
    );
}

export default AdvertisementContextProvider;
