import React from 'react';
import ReactDOM from 'react-dom';
import { ScoreBoard } from '../index';

describe('ScoreBoard render', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ScoreBoard/>, div);
    });
});
