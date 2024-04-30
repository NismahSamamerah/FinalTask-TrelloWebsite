/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CreateCardActions from "../../../pageObjects/createCard/actions.cy";
import CreateCardAssertions from "../../../pageObjects/createCard/assertions.cy";
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import SharedActions from "../../../pageObjects/shared/actions.cy";

const createCardAction = new CreateCardActions();
const createCardAssertion = new CreateCardAssertions();
const dataUtils = new SharedDataUtils();
const sharedAction = new SharedActions();
const boardName = "NismahBoard1" ;
let boardUrl, boardId;
const cardTitle = 'card1';

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id
    })
})
Given('The user can navigate to the board',()=>{
    sharedAction.openBoard(boardUrl);
})
When('Clicks on Add a card button',()=>{
    createCardAction.clickOnAddACardButton();
})
When('Types in card title input field',()=>{
    createCardAction.typeInCardTitleInput(cardTitle)
})
When('Clicks on Add Card button',()=>{
    createCardAction.clickOnAddToCardButton();
})
Then('The card will be created successfully',()=>{
    createCardAssertion.checkCardNameIsVisible();
    createCardAssertion.checkCardNameContainValue(cardTitle);
})

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
    cy.visit('/')
})

