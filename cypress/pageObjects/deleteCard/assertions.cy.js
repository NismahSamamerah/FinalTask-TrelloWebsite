class DeleteCardAssertions{
    checkTheCardIsNotVisible(){
        cy.findByTestId('list-card').should('not.exist');
        return this;
    }
}
export default DeleteCardAssertions;