class CreateCardTemplateActions{
    clickOnTemplateCardButton(){
        cy.findByTestId('card-template-list-button').first().click({multiple: true});
        return this;
    }
    clickOnCreateNewTemplateButton(){
        cy.findByTestId('create-new-template-card-button').click();
        return this;
    }
    typeInTemplateTitleInput(templateTitle){
        cy.findByTestId('create-template-card-composer').type(templateTitle);
    }
    clickOnAddButton(){
        cy.findByTestId('new-template-card-submit-button').click()
    }
}
export default CreateCardTemplateActions;