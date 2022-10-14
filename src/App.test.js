import LoginModal from "./LoginModal/LoginModal";
import UpdateInfoModal from "./UpdateInfoModal/UpdateInfoModal";
import { findByRole, render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe('Login Modal test cases ', () => {
    test('test if the model render ', () => {
        const comp = render(<LoginModal open={true} />)
        const modal = screen.getByRole(/presentation/)
        expect(modal).not.toBeNull()
    })

    test('test if the input fields render ', () => {
        render(
            <LoginModal open={true} />
        )
        const allInput = screen.getAllByRole('input')
        expect(allInput).toHaveLength(2)

    })

    test('test functionallity of open and close modal ', () => {

        // we call app file, because the button is insied it
        render(
            <App>
                <LoginModal open={false} />
            </App>
        )
        const btn = screen.getByRole(/open-login-modal-btn/)
        const fn = jest.fn()
        fireEvent.click(btn)
        expect(screen.getByRole(/presentation/)).toBeTruthy()

        // simulate for close modal event by clicking ESC key 
        fireEvent.keyDown(screen.getByRole(/presentation/), {
            key: 'Escape',
            code: 'Escape'
        })

        // to wait untill modal hide when we click hide 
        setTimeout(() => expect(screen.getByRole(/presentation/)).toBeFalsy(), 2000)
    })

    test("test the handleClickShowPassword function", () => {
        const { getByRole } = render(<LoginModal open={true} />)
        const btn = screen.getByRole(/eyeIcon/)
        fireEvent.click(btn)
        fireEvent.mouseDown(btn)
    })
})

describe('update modal test cases ', () => {

})