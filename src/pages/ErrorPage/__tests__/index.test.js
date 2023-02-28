import {render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from '../index.js';

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        errorCode: 500,
    }),
}));

describe('ErrorPage', () => {
    it('should render the error page with text something went wrong when erorcode is not present', () => {
        jest.mock('react-router-dom', () => ({
            useParams: () => ({
                errorCode: null,
            }),
        }));
        render(<ErrorPage />);
        expect(screen.getByText('Something went wrong!')).toBeTruthy();
    });
    it('should render the error page with error code', () => {
        render(<ErrorPage />);
        expect(screen.getByText('Something went wrong!')).toBeTruthy();
        expect(screen.getByText('Error code: 500')).toBeTruthy();
    });
});
