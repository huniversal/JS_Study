// 인터페이스 다중 상속
(() => {
  interface BaseTodo {
    title: string;
  }

  interface TodoRegist extends BaseTodo {
    content: string;
  }

  interface TodoList extends BaseTodo {
    id: number;
    done: boolean;
  }

  interface TodoInfo extends TodoRegist, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: "할일1",
    content: "내용1",
  };
  const todo2: TodoList = {
    id: 2,
    title: "할일 2",
    done: false,
  };
  const todo3: TodoInfo = {
    id: 3,
    title: "할일3",
    content: "내용3",
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
