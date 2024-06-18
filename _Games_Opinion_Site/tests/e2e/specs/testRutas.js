describe('Primer test global', () => {
  it('Visitando Home', () => {
    cy.visit('/')
    cy.contains('h1', 'Lista de Juegos Disponibles');
    cy.location('href').should('equal', 'http://localhost:8080/');
    cy.pause();
  });
  it('Visitando Opiniones', () => {
    cy.visit('/opiniones')
    cy.contains('h2', 'Lista de Opiniones');
    cy.get('[data-cy="noOpiniones"]').should('be.visible');
    cy.get('[data-cy="opinionesVisible"]').should('not.exist');
    cy.url().should('include', '/opiniones');
    cy.pause();
  });
  it('Visitando Administracion', () => {
    cy.visit('/administracion')
    cy.contains('h2', 'Administrando la Lista de Opiniones');
    cy.get('[data-cy="sinAdministrar"]').should('be.visible');
    cy.get('[data-cy="administrandoLista"]').should('not.exist');
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/administracion');
    });
  });
})
