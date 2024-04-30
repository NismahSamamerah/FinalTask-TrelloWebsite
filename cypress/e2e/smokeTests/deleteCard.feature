Feature: Check Delete Card Functionality 

    Scenario: Validate that the user can delete existing card 
        Given The user can navigate to the board 
        When Click on edit button
        And Choose on archive button 
        Then The card will be deleted successfully 

        