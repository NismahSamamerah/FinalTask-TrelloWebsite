Feature: Check Create New Card Template Functionality

    Scenario: Validate That The User can create new card template
        Given The user can navigate to the board
        When Click on template card button
        And Click on create a new template button 
        And Types in Template title input field
        And Click on Add botton 
        Then The template will be created successfully