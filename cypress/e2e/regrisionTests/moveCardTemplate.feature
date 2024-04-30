Feature: Check The Move Template Functionality

    Scenario: Validate that the user can move the template to another list
        Given The user can navigate to the board
        When Click on the edit button 
        And Choose the move option 
        And Select the list name 
        And Click on the move button
        Then The template will be moved to the selected list successfully
