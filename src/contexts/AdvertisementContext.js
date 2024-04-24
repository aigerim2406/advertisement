import React, { createContext, useState } from 'react';

export const AdvertisementContext = createContext();
//для хранения состояние объявлений
const AdvertisementContextProvider = (props) => {
    const [advertisements, setAdvertisements] = useState([]);

    //добавлят ететин функция
    const addAdvertisement = (title, content, photo) => {
        setAdvertisements([...advertisements, { id: Date.now(), title, content, photo }]);
    }

    //удалить ету ушин
    const removeAdvertisement = (id) => {
        setAdvertisements(advertisements.filter(advertisement => advertisement.id !== id));
    }

    //ар js файлга AdvertisementContext.Provider лактырады
    return (
        <AdvertisementContext.Provider value={{ advertisements, addAdvertisement, removeAdvertisement }}>
            {props.children}
        </AdvertisementContext.Provider>
    );
}

export default AdvertisementContextProvider;
