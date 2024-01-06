 import 'cypress-xpath';
       describe('Segundo desafio', () => {
         let loginData;
         let tasks;
       
         before(() => {
           cy.fixture('login.json').then((data) => {
             loginData = data;
           });
       
           cy.fixture('tareas.json').then((data) => {
             tasks = data;
           });
       
           cy.visit('/');
         });
       
         beforeEach(() => {
           cy.wait(2000);
           cy.visit('')
           cy.get('[data-cy="registertoggle"]').dblclick();
           cy.get('#user').type(loginData.usuario);
           cy.get('#pass').type(loginData.password);
           cy.get('#submitForm').click();
           cy.get('#todolistlink').click();
           cy.wait(2000);
           cy.get('[data-cy="removeAll"]').click();
         });
       
         it('Primer test - Ingresar 5 tareas', () => {
           cy.get('[data-cy="task"]').click().type(tasks[0]);
           cy.get('[data-cy="sendTask"]').click();
           cy.wait(2000)
       
           cy.get('[data-cy="task"]').click().type(tasks[1]);
           cy.get('[data-cy="sendTask"]').click();
           cy.wait(2000)
           cy.get('[data-cy="task"]').click().type(tasks[2]);
           cy.get('[data-cy="sendTask"]').click();
           cy.wait(2000)
           cy.get('[data-cy="task"]').click().type(tasks[3]);
           cy.get('[data-cy="sendTask"]').click();
           cy.wait(2000)
           cy.get('[data-cy="task"]').click().type(tasks[4]);
           cy.get('[data-cy="sendTask"]').click();
           cy.wait(2000)
           cy.get('[data-cy="all"]').click();
           cy.wait(2000);
           cy.get('[data-cy="completed"]').click();
           cy.wait(2000);
           cy.get('[data-cy="active"]').click();
           cy.wait(2000);
           cy.get('[data-cy="removeAll"]').click();
         });

         it('Segundo test - Agregar, completar y eliminar tareas', () => {
          // Agregar tarea 1
          cy.get('[data-cy="task"]').click().type(tasks[0]);
          cy.get('[data-cy="sendTask"]').click();
          cy.wait(2000);
        
          // Agregar tarea 2
          cy.get('[data-cy="task"]').clear().type(tasks[1]);
          cy.get('[data-cy="sendTask"]').click();
          cy.wait(2000);
        
          // Completar tarea 1
          cy.contains(tasks[0]).should('exist').click();
          cy.wait(2000);
        
          // Completar tarea 2
          cy.contains("Segunda tarea").should('exist').click();
          cy.wait(2000);
        
          // Eliminar segunda tarea completada
          cy.get('[data-cy="task"]').click();
          cy.get(':nth-child(2) > .css-vn850v > .css-1gtj1ok > .chakra-button').click();
          cy.wait(2000);
        });
        
        
        it('Tercer Test - Agregar 2 tareas y eliminar la primera', () => {
          // Agregar tarea 1
          cy.get('[data-cy="task"]').click().type(tasks[0]);
          cy.get('[data-cy="sendTask"]').click();
          cy.wait(2000);
        
          // Agregar tarea 2
          cy.get('[data-cy="task"]').clear().type(tasks[1]);
          cy.get('[data-cy="sendTask"]').click();
          cy.wait(2000);

          cy.get(':nth-child(1) > .css-vn850v > .css-1gtj1ok > .chakra-button').click()

        });

        
        
        
       
         it('Tercer test - Inicio de Sesión con XPath', () => {
           cy.fixture('login.json').then((data) => {
             cy.wait(5000);
             cy.xpath('//input[@id="user"]').type(data.usuario);
             cy.xpath('//input[@id="pass"]').type(data.password);
             cy.xpath('//button[@id="submitForm"]').click();
           });
         });
       });
       
       





