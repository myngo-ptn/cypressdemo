import dateTimePicker from "../../support/PageObject/DateTimePicker"

describe('Work with datetimepicker', () => {

  beforeEach(() => {
    // cy.visit('http://www.demo.guru99.com/test/')
    cy.visit('https://www.demo.guru99.com/V4/index.php');
    cy.fixture('inputDateTime').then(function (inputDateTime) {
      this.inputData = inputDateTime
    })

    cy.fixture('actualDateRange').then(function (actualDateRange) {
      this.actualDate = actualDateRange
    })

    cy.fixture('tittleDateTimePicker').then(function (tittleDateTimePicker) {
      this.tittle = tittleDateTimePicker
    })
  })  

  it('Verify that user should able to select date', function () {
    //enter Date and time into Birthday field
    const picker = new dateTimePicker()  
    picker.inputDateTimeInField(this.inputData.date, this.inputData.time)
    picker.clickSubmitButton()  
    
    //Display entered Birth Date, Birth Time      
    picker.checkDate(this.inputData.date)   
    picker.checkDate(this.inputData.time)  
  })

  it('Verify the date should be in range', function () {

    //covert input startDate from dd-mm-yyyy to yyyy-mm-dd
    var startAfterformat = this.actualDate.startDate.split("-").reverse().join("-");
    //print startDate after convert to check                      
    cy.log(startAfterformat)

    //covert input endDate from dd-mm-yyyy to yyyy-mm-dd
    var endAfterformat = this.actualDate.endDate.split("-").reverse().join("-");
    //print startDate after convert to check  
    cy.log(endAfterformat)

    //random and check random in range
    cy.randomDateTime(startAfterformat, endAfterformat)

  })

  it('enter date', function() {
    //https://www.demo.guru99.com/V4/manager/addcustomerpage.php
  })
}) 

