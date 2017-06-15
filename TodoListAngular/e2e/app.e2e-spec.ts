import { TodoListAngularPage } from './app.po';

describe('todo-list-angular App', () => {
  let page: TodoListAngularPage;

  beforeEach(() => {
    page = new TodoListAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
