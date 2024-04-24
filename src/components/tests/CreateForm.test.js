import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import AddAdvertisementForm from '../CreateForm';

test('renders add advertisement form', () => {
    const { getByText, getByPlaceholderText } = render(
        <Provider store={store}>
            <AddAdvertisementForm />
        </Provider>
    );
    const headerElement = getByText(/Add Advertisement/i);
    expect(headerElement).toBeInTheDocument();

    const titleInput = getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    expect(titleInput.value).toBe('Test Title');

    // Add more tests as needed
});
