/// <reference types="cypress" />
import { Given, Then, When  , After } from "cypress-cucumber-preprocessor/steps";
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import CreateCardActions from "../../../pageObjects/createCard/actions.cy";
import CreateCardTemplateActions from "../../../pageObjects/createCardTemplate/actions.cy";
import CreateCardTemplateAssertions from "../../../pageObjects/createCardTemplate/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";


const dataUtils = new SharedDataUtils();
const sharedAction = new SharedActions();
const createCardTemplateAction = new CreateCardTemplateActions();
const createCardTemplateAssertion = new CreateCardTemplateAssertions();
const boaredName = 'board1';
let boardUrl,boardId;
const templateTitle = 'Template123';
before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    dataUtils.createBoard(boaredName).then((resp)=>{
        cy.log(resp)
        boardUrl = resp.body.url;
        boardId = resp.body.id;
    })
})
Given('The user can navigate to the board',()=>{
    sharedAction.openBoard(boardUrl)
})
When('Click on template card button',()=>{
    createCardTemplateAction.clickOnTemplateCardButton();
})
When('Click on create a new template button',()=>{
    createCardTemplateAction.clickOnCreateNewTemplateButton();
})
When('Types in Template title input field',()=>{
    createCardTemplateAction.typeInTemplateTitleInput(templateTitle)
})
When('Click on Add botton',()=>{
    createCardTemplateAction.clickOnAddButton();
})
Then('The template will be created successfully',()=>{
    createCardTemplateAssertion.checkTemplateNameContainValue(templateTitle);
})
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
})