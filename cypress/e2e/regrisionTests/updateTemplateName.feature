Feature: Check Update Template Functionality 

    Scenario: Validate that the user can update the name of existing template 
        Given The user can navigate to the board
        When Click on the template card 
        And Click on template card name input and Type the new name
        Then the name of template will be updated successfully