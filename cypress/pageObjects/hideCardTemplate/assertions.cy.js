class HideTemplateFromListAssertions{
    checkTemplateIsNotVisible(){
        cy.findByTestId('list-card').should('not.exist');
        return this;
    }
}
export default HideTemplateFromListAssertions;