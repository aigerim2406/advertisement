import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAdvertisement } from '../redux/actions';
import './ListForm.css';


// аламыз списка объявленияны и функция removeAdvertisement контексттан
const ListForm = () => {
    const ads = useSelector(state => state.advertisements);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteAdvertisement(id));
    };

    return (
        <div className="advertisement-list">
            <h2>advertisements</h2>
            <ul>
                {ads.map(ad => (
                    <li key={ad.id}>
                        <div>
                            <strong>{ad.title}</strong>
                            <p>{ad.content}</p>
                        </div>
                        {ad.photo && (
                            <img src={URL.createObjectURL(ad.photo)} alt="Advertisement" />
                        )}
                        <button onClick={() => handleDelete(ad.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListForm;
