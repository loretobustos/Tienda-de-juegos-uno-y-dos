describe('Primer test global', () => {
    it('Visitando Home', () => {
        cy.visit('/')
        cy.get('[data-cy="opinando1"]').click();
        let nombre = "Maria";
        let opinion = "Muy buen juego";
        cy.pause();
        cy.get('#nombre1').type(nombre).should('have.value', 'Maria');
        cy.get('#opiniones1').type(opinion).should('have.value',opinion);
        cy.pause();
        cy.get('[data-cy="guardarOpinion1"]').click();
        cy.pause();
    });
    it('Visitando Opiniones', () => {
        cy.get('[data-cy="opinionesClick"]').click();
        cy.get('[data-cy="noOpiniones"]').should('not.exist');
        cy.get('[data-cy="opinionesVisible"]').should('be.visible');
        cy.get('[data-cy="nombre0"]').should('contain','Maria');
        cy.pause();
    });
    it('Visitando Administracion', () => {
        cy.get('[data-cy="administraClick"]').click();
        cy.contains('td', 'Maria');
        cy.pause();
        cy.get('[data-cy="eliminarOpinion0"]').click();
        cy.pause();
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Seguro que desea eliminar');
        });
    });
  })
  