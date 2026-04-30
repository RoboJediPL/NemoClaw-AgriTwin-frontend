// Integration test for Button component
import { render, screen } from '@testing-library/react';
import Button from './Button.jsx';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
  it('triggers onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    await userEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});