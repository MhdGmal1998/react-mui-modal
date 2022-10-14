import { findByRole, render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import LogingModal from './LoginModal'

describe('test the login modal', () => {
    test('test the login button ', () => {
        render(
            <LogingModal isOpen={true} open={true} />)
        const btn = screen.getByRole(/loginButton/)

        // fireEvent.click(btn)
        // screen.getByRole(/update-modal/)

    })
})