/// <reference types="cypress" />
import { Given, Then, When  , After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import MoveCardTemplateActions from "../../../pageObjects/moveCardTemplate/actions.cy";
import MoveCardTemplateAssertions from "../../../pageObjects/moveCardTemplate/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";

const dataUtils = new SharedDataUtils();
const sharedAction = new SharedActions();
const moveCardTemplateAction = new MoveCardTemplateActions();
const moveCardTemplateAssertion = new MoveCardTemplateAssertions();
let boardUrl,boardId,listId;
const boardName = 'testingBoard';

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
    sharedAction.openBoard(boardUrl)
})
When('Click on the edit button',()=>{
    sharedAction.clickOnEditButton();
})
When('Choose the move option',()=>{
    moveCardTemplateAction.chooseMoveOption();
})
When('Select the list name',()=>{
    moveCardTemplateAction.selectTheListName();
})
When('Click on the move button',()=>{
    moveCardTemplateAction.clickOnMoveButton();
})
Then('The template will be moved to the selected list successfully',()=>{
    moveCardTemplateAssertion.checkTheCardIsNotVisible();
})
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId);
    // cy.visit('/')
})