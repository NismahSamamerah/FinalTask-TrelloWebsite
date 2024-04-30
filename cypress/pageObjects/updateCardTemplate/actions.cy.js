class UpdateCardTemplateActions{
    clickOnTemplateCard(){
        cy.findByTestId('list-card').click();
        return this;
    }
    typeInTemplateTitleInputFeild(newTemplateName){
        cy.get('.mod-card-back-title').clear().type(`${newTemplateName} {enter}`);
        return this;
    }
}
export default UpdateCardTemplateActions;
