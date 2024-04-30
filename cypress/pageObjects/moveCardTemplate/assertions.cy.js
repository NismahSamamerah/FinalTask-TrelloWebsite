class MoveCardTemplateAssertions{
    checkTheCardIsNotVisible(){
            cy.findByTestId('lists').find('li').first().findByTestId('list-cards').should('be.empty');
            return this;
    }
}
export default MoveCardTemplateAssertions;