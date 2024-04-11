import React, { useState, useContext } from 'react';
import { AdvertisementContext } from '../contexts/AdvertisementContext';
import './CreateForm.css';

const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState(null); // Состояние для хранения фотографии
    const { addAdvertisement } = useContext(AdvertisementContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addAdvertisement(title, content, photo); // Добавление фотографии в функцию добавления объявления
        setTitle('');
        setContent('');
        setPhoto(null);
    }

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    }

    return (
        <div className="advertisement-form">
            <h2>Add Advertisement</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
                <input type="file" accept="image/*" onChange={handlePhotoChange} /> {/* Добавление поля для загрузки фотографии */}
                <br/>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateForm;
