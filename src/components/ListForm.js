import React, { useContext } from 'react';
import { AdvertisementContext } from '../contexts/AdvertisementContext';
import './ListForm.css';

const ListForm = () => {
    const { advertisements, removeAdvertisement } = useContext(AdvertisementContext);

    return (
        <div className="advertisement-list">
            <h2>Advertisements</h2>
            <ul>
                {advertisements.map(advertisement => (
                    <li key={advertisement.id}>
                        <div>
                            <strong>{advertisement.title}</strong>
                            <p>{advertisement.content}</p>
                        </div>
                        {advertisement.photo && (
                            <img src={URL.createObjectURL(advertisement.photo)} alt="Advertisement" />
                        )}
                        <br/>
                        <button onClick={() => removeAdvertisement(advertisement.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListForm;
