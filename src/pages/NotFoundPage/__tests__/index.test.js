import {render, screen } from '@testing-library/react';
import React from 'react';
import NotFoundPage from '../index.js';

describe('NotFoundPage', () => {
    it('should render the not found page', () => {
        render(<NotFoundPage />);
        expect(screen.getByText('404 Error. Page not found')).toBeTruthy();
    });
});
