class CreateCardAssertions{
    checkCardNameIsVisible(){
        cy.findByTestId('card-name').should('be.visible');
    }
    checkCardNameContainValue(cardName){
        cy.findByTestId('card-name').should('contain',cardName);
    }
}
export default CreateCardAssertions;