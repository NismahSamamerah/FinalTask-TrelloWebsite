Feature: Create new card functionality 

    Scenario: Validate that the user can create new card 
        Given The user can navigate to the board 
        When Clicks on Add a card button
        And Types in card title input field
        And Clicks on Add Card button
        Then The card will be created successfully 