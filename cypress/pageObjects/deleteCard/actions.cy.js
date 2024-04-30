class DeleteCardActions {
    clickOnArchiveButton(){
        cy.findByTestId('quick-card-editor-archive').click()
        return this;
    }
}
export default DeleteCardActions;