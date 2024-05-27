const { FormPage } = require("../pageObjects/practiceForm.page")

describe('template spec', () => {
  beforeEach(()=>{
  FormPage.visit()
  })
  it('passes', () => {
    FormPage.setDate()
    FormPage.setSubjects()
    FormPage.setHobbies()
    FormPage.uploadImage()
    FormPage.setLocation()
    FormPage.submit()
  })
})