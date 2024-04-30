/// <reference types="cypress" />
import { Given, Then, When  , After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import HideTemplateFromListActions from "../../../pageObjects/hideCardTemplate/actions.cy";
import HideTemplateFromListAssertions from "../../../pageObjects/hideCardTemplate/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";

const dataUtils = new SharedDataUtils();
const sharedAction = new SharedActions();
const hideTemplateFromListAction = new HideTemplateFromListActions();
const hideTemplateFromListAssertion = new HideTemplateFromListAssertions();
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
    sharedAction.openBoard(boardUrl);
})
When('Click on the edit button',()=>{
    sharedAction.clickOnEditButton();
})
When('Choose the hide from list option',()=>{
    hideTemplateFromListAction.clickOnHidFromListButton();
})
Then('The template will be hided from list successfully',()=>{
    hideTemplateFromListAssertion.checkTemplateIsNotVisible()
})
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})