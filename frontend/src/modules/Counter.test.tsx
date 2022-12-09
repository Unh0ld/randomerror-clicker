import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import { act } from "react-dom/test-utils";

test('increase hacks by one', () => {
    // Given
    render(<Counter />);
    let hacks = screen.getByText(/Devices hacked: 0/i);
    expect(hacks).toBeInTheDocument();
    // When
    const button = screen.getByText(/^Hack /i);
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true })); // 
    });
    // Then
    hacks = screen.getByText(/Devices hacked: 1/i);
    expect(hacks).toBeInTheDocument();
});