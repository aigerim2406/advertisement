import React from 'react';
import ListForm from './components/ListForm';
import CreateForm from './components/CreateForm';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <h1 className="header">Gaba's Advertisement</h1>
            <div className="advertisement-board">

                    <ListForm />
                    <CreateForm />

            </div>
        </div>
    );
}

export default App;
