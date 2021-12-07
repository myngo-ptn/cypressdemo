describe('Verify all assignee’s records should contain keyword', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/WebTable/')
    //change name function fineNameTable to name for using in this script
    cy.fixture('fineNameTable').then(function (fineNameTable) {
      this.name = fineNameTable  
    })  
  })


  it('Verify that user cant find other people name with blank field', function() {
    //Search first element in findNameTable.json and check result
    cy.Key(this.name[0].name)   
  })

  it('Verify that user cant find other people name with special character', function() {
    //Search second element in findNameTable.json and check result
    cy.Key(this.name[1].name)  
  }) 

  it('Verify that user cant find other people name by number', function() {
    //Search third element in findNameTable.json and check result
    cy.Key(this.name[2].name)  
  })

  it('Verify that user able to filter by Asignee another name', function() {
    //Search fourth element in findNameTable.json and check result
    cy.Key(this.name[3].name)  
  })

  it('Verify that user able to filter by Asignee', function () {
    // Search fifth element in findNameTable.json and check result
    cy.Key(this.name[4].name)  
  })


})