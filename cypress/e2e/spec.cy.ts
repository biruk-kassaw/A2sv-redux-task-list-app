const appUrl = 'http://192.168.100.5:5173/'; 

describe('task list functionality', () => {
  beforeEach(() => {
    cy.visit(appUrl);
  });

  it('passes', () => {
    cy.visit('http://192.168.100.5:5173/')
  })

  it('should add a new task to the list', () => {
    const newTaskText = 'Buy groceries'; // Change this to the task you want to add

    cy.get('[data-cy="task-input"]').type(newTaskText);
    cy.get('[data-cy="add-button"]').click();

    // Verify that the new task is displayed correctly
    cy.contains(newTaskText);
  });

  it('should mark a task as completed', () => {
    // Assuming there's an existing task that we want to complete
    const existingTask = 'Do laundry'; // Change this to the task you want to complete
    cy.get('[data-cy="task-input"]').type(existingTask);
    cy.get('[data-cy="add-button"]').click();
    // Find the task and mark it as completed
    cy.contains(existingTask)
      .parent()
      .find('[data-cy="complete-button"]')
      .click();

    // Verify that the task UI reflects the completed state
    cy.contains(existingTask)
      .should('have.class', 'line-through');
  });

  it('should delete a task from the list', () => {
    // Assuming there's an existing task that we want to delete
    const taskToDelete = 'Clean the garage'; // Change this to the task you want to delete
    cy.get('[data-cy="task-input"]').type(taskToDelete);
    cy.get('[data-cy="add-button"]').click();
    // Find the task and click the delete button
    cy.contains(taskToDelete)
      .find('[data-cy="delete-button"]').parent()
      .click();

    // Verify that the task is removed from the list
    cy.contains(taskToDelete).should('not.exist');
  });
});