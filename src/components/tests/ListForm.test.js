import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AdvertisementList from '../ListForm';

test('renders advertisement list', () => {
    const { getByText } = render(
        <Provider store={store}>
            <AdvertisementList />
        </Provider>
    );
    const headerElement = getByText(/Advertisements/i);
    expect(headerElement).toBeInTheDocument();
});

// Add more tests as needed
