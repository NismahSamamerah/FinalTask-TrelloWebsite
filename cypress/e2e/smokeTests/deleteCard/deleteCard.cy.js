/// <reference types="cypress" />
import { Given, Then, When  , After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import DeleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import DeleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";

const dataUtils = new SharedDataUtils();
const sharedAction = new SharedActions();
const deleteCardAction = new DeleteCardActions();
const deleteCardAssertion = new DeleteCardAssertions()
const boardName = "testBoard" ;
let boardUrl,boardId,listId;

before(()=>{
    cy.loginToTrello();
    cy.screenshot({capture:"fullPage"})
    cy.wait(3000)
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id; 
        dataUtils.getAllListsInBoard(boardId).then((resp)=>{
            listId = resp.body[0].id
            dataUtils.createCard(listId)
        })
    })
})
Given('The user can navigate to the board',()=>{
    sharedAction.openBoard(boardUrl);
})
When('Click on edit button',()=>{
    sharedAction.clickOnEditButton();
})
When('Choose on archive button',()=>{
    deleteCardAction.clickOnArchiveButton();
})
Then('The card will be deleted successfully',()=>{
    deleteCardAssertion.checkTheCardIsNotVisible();
})

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})