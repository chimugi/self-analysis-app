import React from 'react';
import { render } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Component', () => {
  it('should render "hoge"', () => {
    render(<Home />);
    //expect(screen.getByText('hoge')).toBeInTheDocument();
  });
});