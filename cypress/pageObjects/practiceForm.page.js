import { BasePage } from "./base.page";

export class FormPage extends BasePage{
    static get url(){
        return "/automation-practice-form";
    }
    static setDate(){
        return cy.get('input#dateOfBirthInput').click().then(()=>{
            cy.get('select.react-datepicker__month-select').select('February')
                .get('select.react-datepicker__year-select').select('1930')
                .get('div.react-datepicker__day.react-datepicker__day--028').last().click()
        }).get('input#dateOfBirthInput').last().should('have.value', '28 Feb 1930')
    }
    static setSubjects(){
        return cy.get('div.subjects-auto-complete__value-container').type('Economics').get('div.subjects-auto-complete__menu').type('{enter}').then(()=>cy.contains('div.subjects-auto-complete__multi-value__label','Economics').should('have.text','Economics'))
    }
    static setHobbies(){
        return cy.contains('label.custom-control-label','Music').click().then(()=>
            cy.get('input#hobbies-checkbox-3').should('be.checked'))
    }
    static uploadImage(){
        return cy.get('input#uploadPicture').selectFile('files/bruhlinus.jpeg')
    }
    static setLocation(){
        cy.get('input#react-select-3-input').parent().parent().parent().type('NCR').type('{downarrow}{enter}').then(()=>cy.contains('div','NCR').should('have.text','NCR'))
        cy.get('input#react-select-4-input').parent().parent().parent().type('Delhi').type('{downarrow}{enter}').then(()=>cy.contains("div","Delhi").should('have.text','Delhi'))
    }
    static submit(){
        return cy.get('button#submit').click()
    }
}