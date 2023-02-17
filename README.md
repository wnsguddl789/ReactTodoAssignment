# React + TS Todo Assignment

지금까지 배운 내용을 토대로 React+TS를 사용해 Todo-CRUD를 구현해봅니다.

## 요구사항

### Model

> src/models/TodoModel.ts 파일을 데이터 스토어로 사용해주세요

TodoModel 클래스에 임포트되어있는 Todo Type을 사용해 투두리스트의 상태(프로퍼티)를 정의하고 동작(메서드)를 작성하시면됩니다.

동작(메서드)는 상태(프로퍼티)를 바꿀수있습니다.
상태(프로퍼티)는 외부에서 변경할수없고, 오로지 내부 동작(메서드)에 의해서만 변화해야합니다.

```ts
type Todo = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isFinished: boolean;
};
```

CRUD 메서드 구현

- [ ] Todo getTodos 메서드 구현
- [ ] Todo getTodosCount 메서드 구현
- [ ] Todo create 메서드 구현
- [ ] Todo update 메서드 구현
- [ ] Todo delete 메서드 구현

> getTodos : 모든 Todos를 반환합니다.

> getTodosCount : Todos의 갯수를 반환합니다.

> create: Todo를 하나 생성합니다.

> update : Todo를 를 변경합니다.

> delete : Todo를 삭제합니다.

### View

`Todo`타입을 확인을해보면 `isFinished` 타입이 존재합니다.

`localhost:5173/`에는 isFinished가 false한 투두리스트를 출력하고 `localhost:5173/finished`에는 true한 투두리스트를 출력해주세요

#### 스타일링

해당과제에 스타일링은 중요하지 않으나, 할수있으면 해주세요!
