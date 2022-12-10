import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import { act } from "react-dom/test-utils";

test('increase hacks by one', () => {
    // Given
    render(<Counter />);
    let hacks = screen.getByTestId("hacks");
    expect(hacks).toBeInTheDocument();
    // When
    const button = screen.getByText(/^Hack$/i);
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true })); // 
    });
    // Then
    expect(hacks.innerHTML).toBe("1");
});