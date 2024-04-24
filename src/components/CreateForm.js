import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisement } from '../redux/actions';
import './CreateForm.css';

const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null); // Состояние для хранения
    const dispatch = useDispatch();

    // форманы жберу ушин обработка жасайды
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAdvertisement = {
            id: Date.now(),
            title,
            content,
            photo
        };
        dispatch(addAdvertisement(newAdvertisement));
        setTitle(''); // вызов функции dispatch с передачей действия и данных объявления
        setContent('');
        setPhoto(null)
    }

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    } // фотоны файл аркылы добавляем

    return (
        <div className="advertisement-form">
            <h2>Add Advertisement</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
                <input type="file" accept="image/*" onChange={handlePhotoChange} />
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateForm;
