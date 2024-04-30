class HideTemplateFromListActions{
    clickOnHidFromListButton(){
        cy.findByTestId('quick-card-editor-archive').click()
        return this;
    }
}
export default HideTemplateFromListActions;