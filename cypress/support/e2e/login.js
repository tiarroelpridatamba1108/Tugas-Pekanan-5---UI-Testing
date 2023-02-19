describe('Open Kasir Aja Url', () => {
  it('Should contain url /login', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')
  })

  //1. Test Case Positive
  it('user success login to kasir Aja', () => {
    //Open kasir aja login page
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')

    //Input username and password
    cy.get('#email').type("tiarrotamba24@gmail.com")
    cy.get('#password').type("Mahanaim123")

    //Click button login
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

    //Assert dashboard page after login
    cy.url().should('include', '/dashboard')
    cy.contains("kasirAja")  
  })

  //2. Test Case Negative
  it('user success login to kasir Aja', () => {
    //Open kasir aja login page
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')

    //Input username (correct) and password (wrong)
    cy.get('#email').type("tiarrotamba24@gmail.com")
    cy.get('#password').type("slalal")

    //Click login
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()

    //Assert warning after login
    cy.contains("Kredensial yang Anda berikan salah")
  })

})