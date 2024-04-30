class SharedActions{
    openBoard(url){
        cy.visit(url)
        return this;
    }
    clickOnEditButton(){
        cy.findByTestId('quick-card-editor-button').click({force: true});
        return this;
    }
}
export default SharedActions;