class UpdateCardTemplateAssertions{
    checkTemplateTitleContainValue(newTemplateName){
        cy.get('#js-dialog-title').should('contain',newTemplateName);
        return this;
    }
}
export default UpdateCardTemplateAssertions;
