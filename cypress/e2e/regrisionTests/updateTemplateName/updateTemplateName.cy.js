/// <reference types="cypress" />
import { Given, Then, When  , After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import UpdateCardTemplateActions from "../../../pageObjects/updateCardTemplate/actions.cy";
import UpdateCardTemplateAssertions from "../../../pageObjects/updateCardTemplate/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";

const dataUtils = new SharedDataUtils();
const sharedAction = new SharedActions
const updateCardTemplateAction = new UpdateCardTemplateActions();
const updateCardTemplateAssertion = new UpdateCardTemplateAssertions();
const boardName = "testBoard"
let boardUrl ,boardId ,listId;
const newTemplateTitle = 'Temp4';

before(()=>{
    cy.loginToTrello();
    cy.wait(3000)
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id;
        dataUtils.getAllListsInBoard(boardId).then((resp)=>{
            listId = resp.body[0].id
            dataUtils.createCardTemplate(listId);
})
})
})
Given('The user can navigate to the board',()=>{
    sharedAction.openBoard(boardUrl);
})
When('Click on the template card',()=>{
    updateCardTemplateAction.clickOnTemplateCard();
})
When('Click on template card name input and Type the new name',()=>{
    updateCardTemplateAction.typeInTemplateTitleInputFeild(newTemplateTitle)
})
Then('the name of template will be updated successfully',()=>{
    updateCardTemplateAssertion.checkTemplateTitleContainValue(newTemplateTitle);
})
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})