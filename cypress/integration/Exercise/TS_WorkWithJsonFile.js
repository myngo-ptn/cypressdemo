import * as _ from 'lodash';
import getSelectorJsonFile from '../../support/PageObject/GetSelectorJsonFile';
import loginSauceDemo from '../../support/PageObject/LoginSauceDemo';

describe('Work with json File', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('accountJsonFile').then(function (accountJsonFile) {
      this.testdata = accountJsonFile
      cy.log(this.testdata)
    })
    
    cy.fixture('listOptionSelector').then(function (listOptionSelector) {
      this.dataList = listOptionSelector
      cy.log(this.dataList)
    })
    
  })

  it("Write list of option into json file", function () {
    const select = new getSelectorJsonFile();
    const login = new loginSauceDemo();

    //login into page
    login.enterUsername(this.testdata.username)
    login.enterPassword(this.testdata.password)
    login.submit()
    
    //create a array get value and option tab
    // let options = [];
    select.selectData()
          .children("option")
          .each((currentElement) => {
            this.dataList.push({
              value : currentElement.prop("value"),
              option : currentElement.text(),
            });
          });
      //Write result into cypress/fixtures/optionData.json
    cy.writeFile("cypress/fixtures/listOptionSelector.json", this.dataList);
    var str = 'C_Notice of hearing_Person - Test Tester (email) (465782320-C_Noticeofhearing_Person-email60fa6998-c7d7-4087-923c-7802497b1337.eml) [Event Comment:  PDF - C_Notice of hearing_Person - Test Tester - daniel.greig@sa.gov.auC_Notice of hearing_Person - Test Tester (email)PDF'
    var filename = str.match(/(\((.+?)\)(?:,|$))/g);
    cy.log(filename)
  })

  it.only("Write list of option into json file", function () {
    var str = 'C_Notice of hearing_Person - Test Tester (email) (465782320-C_Noticeofhearing_Person-email60fa6998-c7d7-4087-923c-7802497b1337.eml) [Event Comment:  PDF - C_Notice of hearing_Person - Test Tester - daniel.greig@sa.gov.auC_Notice of hearing_Person - Test Tester (email)PDF'
    var filename = str.match(/(\([\w,\s-]+\.[A-Za-z]{3,}\))/g)[0];
    cy.log(filename)
  })

  it('Verify that user should able to select value in list ', function() {
    const select = new getSelectorJsonFile();
    const login = new loginSauceDemo();

    login.enterUsername(this.testdata.username)
    login.enterPassword(this.testdata.password)
    login.submit()

    //select Price (low to high) 
    select.getSelect().select(this.dataList[2].option)
    select.getSelect().should('have.value', this.dataList[2].value) 
    
    //verify Price (low to high) should be selected
    select.getPricebar()
          .should('have.length.gt', 0)
          .then($prices => {
          const prices = $prices
            .toArray()
            .map($el => parseFloat($el.innerText.substr(1)))
            // Verify that prices should be sorted
            expect(prices).to.be.sorted()
      })

  })

  it('Read writed file', function() {

    const select = new getSelectorJsonFile();
    const login = new loginSauceDemo();

    login.enterUsername(this.testdata.username)
    login.enterPassword(this.testdata.password)
    login.submit()

    //Name (A to Z) be selected as default
    select.getSelect()
          .should('have.value', this.dataList[0].value)

    //Select item [3] Price (High to low) should be selected
    select.getSelect()
      .select(this.dataList[3].option)
    //Verify Price (High to low) should be selected
    select.getSelect() 
      .should('have.value', this.dataList[3].value) 

      select.getOptionList().each(function (opt,index) {
      //verify correct search key each row in column
      expect(opt).to.contain(this.dataList[index].option)    
    })  
  })
})
