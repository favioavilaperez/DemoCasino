export class Modal{
    constructor(){
        this.closeButton = '.mfp-close'     
    }

    clickCloseButton(){
        cy.get(this.closeButton).click()
    }
    
}

export const onModal = new Modal()