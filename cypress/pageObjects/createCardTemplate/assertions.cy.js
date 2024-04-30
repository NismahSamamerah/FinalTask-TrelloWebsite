class CreateCardTemplateAssertions{
    checkTemplateNameContainValue(templateTitle){
        cy.get('#js-dialog-title').should('contain',templateTitle);
        return this;
    }
}
export default CreateCardTemplateAssertions;