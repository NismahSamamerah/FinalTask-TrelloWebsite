class MoveCardTemplateActions{
    chooseMoveOption(){
        cy.findByTestId('quick-card-editor-move').click();
        return this;
    }
    selectTheListName(){
        cy.findByTestId('move-card-popover-select-list-destination').select('Doing')
        return this;
        
    }
    clickOnMoveButton(){
        cy.findByTestId('move-card-popover-move-button').click();
    }

}
export default MoveCardTemplateActions;