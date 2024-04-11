import { useContext } from 'react';
import { AdvertisementContext } from '../contexts/AdvertisementContext';

const useAdvertisement = () => {
    return useContext(AdvertisementContext);
}

export default useAdvertisement;
