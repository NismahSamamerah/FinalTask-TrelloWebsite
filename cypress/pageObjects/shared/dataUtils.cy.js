import { APIKey , APIToken } from "../../support/constants.cy"

class SharedDataUtils {
    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }
    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);
    }
    createCard = (listId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,{name: 'card5'})
    }
    createCardTemplate = (listId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&key=${APIKey}&token=${APIToken}`,{name: 'Temp2',"isTemplate": true})
    }
    getAllListsInBoard = (boardId)=>{
        return cy.request(`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`)
    }
}
export default SharedDataUtils;