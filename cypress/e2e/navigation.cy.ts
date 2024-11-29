describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to all sections from header', () => {
    cy.get('nav').within(() => {
      cy.contains('Services').click();
      cy.contains('Clients').click();
      cy.contains('Book a Call').click();
      cy.contains('Blog').click();
      cy.contains('Contact').click();
    });
  });

  it('scrolls to top when back to top button is clicked', () => {
    cy.scrollTo('bottom');
    cy.get('button[aria-label="Back to top"]').click();
    cy.window().its('scrollY').should('equal', 0);
  });
});