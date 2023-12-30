import 'cypress-xpath';
describe ('Segundo desafio', () =>{
    beforeEach (() => {
        cy.visit ('/');
    });


    it('Inicio de Sesión con CSS Selector', () => {
        cy.fixture('login.json').then((loginData) => {
          cy.fixture('tareas.json').then((tareas) => {
            cy.get('[data-cy="registertoggle"]').dblclick();
            cy.get('#user').type(loginData.usuario);
            cy.get('#pass').type(loginData.password);
            cy.get('#submitForm').click();
            cy.get('#todolistlink').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[0]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[1]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[2]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[3]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[4]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="all"]').click();
            cy.wait(2000);
            cy.get('[data-cy="completed"]').click();
            cy.wait(2000);
            cy.get('[data-cy="active"]').click();
            cy.wait(2000);
            cy.get('[data-cy="removeAll"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[0]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[1]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.contains(tareas[1]).should('be.visible').click();
            cy.get(':nth-child(2) > .css-vn850v > .css-1gtj1ok > .chakra-button').should('be.visible').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[2]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);
            cy.get('[data-cy="task"]').click();
            cy.get('[data-cy="task"]').type(tareas[3]);
            cy.get('[data-cy="sendTask"]').click();
            cy.wait(2000);

      //Elimino la tarea 3
      cy.contains(tareas[2]).should('be.visible').click();
      cy.get(':nth-child(2) > .css-vn850v > .css-1gtj1ok > .chakra-button').should('be.visible').click();
    });
        });
        });
      
      
  it('Inicio de Sesión con XPath', () => {
            cy.fixture('login.json').then((data) => {
              cy.wait(5000);
              cy.xpath('//span[@data-cy="registertoggle"]').dblclick();
              cy.xpath('//input[@id="user"]').type(data.usuario);
              cy.xpath('//input[@id="pass"]').type(data.password);
              cy.xpath('//button[@id="submitForm"]').click();
            });
          }); 

       
          

       });
    




