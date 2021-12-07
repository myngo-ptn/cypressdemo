// import checkSearchKeyWord from "./PageObject/Example/CheckSearchKeyWord"
// import dateTimePicker from "./PageObject/Example/DateTimePicker"
import LoginSauceDemoPage from "./PageObject/LoginPage/LoginSauceDemoPage";
import HomePage from "./PageObject/HomePage/HomePage";

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginSauceDemoPage();
  loginPage.getUsernameTextBox()
    .clear()
    .type(username);
  loginPage.getPasswordTextBox()
    .clear()
    .type(password);
  loginPage.getLoginButton()
    .click();
})

Cypress.Commands.add('logout', () => {
  const homePage = new HomePage();
  homePage.getBurgerButton()
    .click();
  homePage.getLogoutLink()
    .click();
})

// //function check finding key word in TS_wordWithTable
// Cypress.Commands.add('checkSearchKey', (value) => {
//   const check = new checkSearchKeyWord()
//   check.moveToSearchField(value)
//   //selects the total number of rows column => get returned records after searching
//   check.selectTotalRowColumn()
//   //iterating through the array of elements    => get a firstname cell of returned records               
//   check.selectFirstColumn().each(($e1, index, $list) => {
//     //storing the content in the text variable => get text of first name cell
//     const text = $e1.text()
//     //If the content is inout we fill in,iteration stops                              
//     if (text.includes(value)) {
//       //gets the CSS of the first column                            
//       check.selectFirstColumn()
//         //grabs the content in the index value                          
//         .eq(index)
//         //promises should be resolved manually since text() is jQuery method                                       
//         .then(function (Field) {
//           const Fieldtext = Field.text();
//           //comparing strings using the jQuery method expect()  => Verify text in cell match with keyword        
//           expect(Fieldtext).to.equal(value);
//         });
//     }
//   }
//   )

// })

// function randomDate(start, end) {
//   var date = new Date(+start + Math.random() * (end - start));
//   return date;
// }

// Cypress.Commands.add('randomDateTime', (start, end) => {
//   //random Date between startDate and endDate
//   const dateInRange = randomDate(new Date(start), new Date(end));

//   //covert yyyy-mm-ddThh:mm:ss:zzz to 2 strings are yyyy-mm-dd and hh:mm
//   const dateInRangeString = dateInRange.toISOString()
//   const dateString = dateInRangeString.split('T')[0]
//   const timeString = dateInRangeString.split('T')[1]
//   const timeStringHourMin = timeString.substring(0, 5)

//   //enter Date Time after cut into BirthDayField
//   const picker = new dateTimePicker()
//   picker.inputDateTimeInField(dateString, timeStringHourMin)
//   picker.clickSubmitButton()


//   //verify actualDate in range [startDate, endDate]
//   var startDate = new Date(start).getTime()
//   var actualDate = new Date(dateString).getTime()
//   var endDate = new Date(end).getTime()
//   // compare startDate < actualDate <endDate
//   expect(actualDate).to.gte(startDate)
//   expect(endDate).to.gte(actualDate)

// })







