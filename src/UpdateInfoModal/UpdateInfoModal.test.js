import { findByRole, render, screen, fireEvent, waitFor, getAllByRole } from "@testing-library/react";
import UpdateInfoModal from "./UpdateInfoModal";
import App from "../App";
describe('update information modal ', () => {
    test('check if the modal is existed ', () => {
        render(<UpdateInfoModal open={true} />)
        const modal = screen.getByRole(/update-modal/)
        expect(modal).not.toBeNull()
    })

    test('check if the inputs fiel is existed', () => {
        render(<UpdateInfoModal open={true} />)
        const InputFieldsLength = screen.getAllByRole('input')

        expect(InputFieldsLength).toHaveLength(2)
    })

    test('check if the buttuns are exsiting ', () => {
        render(<UpdateInfoModal open={true} />)
        const BtnClose = screen.getByRole('update-close-btn')
        fireEvent.click(BtnClose)

    })

    


})