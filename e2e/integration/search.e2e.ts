describe('Search', () => {
  const getSearchInput = () => cy.get('[role="search"] input');
  const getSearchResults = () => cy.get('[data-role="search:results"]');
  const getResult = i => cy.get('[role=search] label').eq(i);

  beforeEach(() => {
    cy.visit('e2e/standalone.html');
  });

  it('should correctly show and hide search results box', () => {
    getSearchResults().should('not.exist');

    // should not open for less than 3 symbols
    getSearchInput().type('in', { force: true });
    getSearchResults().should('not.exist');

    getSearchInput().type('t', { force: true });
    cy.get('[role=search] [role=menuitem]')
      .should('have.length', 3)
      .eq(1)
      .should('contain', 'Delete purchase order by ID');

    getSearchInput().type('{esc}', { force: true });
    getSearchResults().should('not.exist');
  });

  it('should support arrow navigation', () => {
    getSearchInput().type('int', { force: true });

    cy.wait(500);

    getSearchInput().type('{downarrow}', { force: true });
    getResult(0).should('have.class', 'active');

    getSearchInput().type('{downarrow}', { force: true });
    getResult(1).should('have.class', 'active');
    getResult(0).should('not.have.class', 'active');

    getSearchInput().type('{uparrow}', { force: true });
    getResult(1).should('not.have.class', 'active');
    getResult(0).should('have.class', 'active');

    getSearchInput().type('{downarrow}', { force: true });
    getResult(1).should('have.class', 'active');

    getSearchInput().type('{enter}', { force: true });
  });

  it('should mark search results', () => {
    cy.get('[data-markjs]').should('not.exist');
    getSearchInput().type('int', { force: true });
    cy.get('[data-markjs]').should('exist');
  });

  it('should show proper message when no search results are found', () => {
    getSearchResults().should('not.exist');
    getSearchInput().type('xzss', { force: true });
    getSearchResults().should('exist').should('contain', 'No results found');
  });

  it('should allow search by path or keywords in path', () => {
    getSearchInput().clear().type('uploadImage', { force: true });
    cy.get('[role=search] [role=menuitem]')
      .should('have.length', 1)
      .first()
      .should('contain', 'uploads an image');

    getSearchInput()
      .clear()
      .type('/pet/{petId}/uploadImage', { force: true, parseSpecialCharSequences: false });
    cy.get('[role=search] [role=menuitem]')
      .should('have.length', 1)
      .first()
      .should('contain', 'uploads an image');
  });
});
