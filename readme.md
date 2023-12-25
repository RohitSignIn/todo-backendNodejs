# Todo Backend

## APIs

- Fetch all todos

  - GET http://localhost:3001/api/v1/todo

- Create a todo

  - POST http://localhost:3001/api/v1/todo
  - ```
      {
          text: "First todo",
      }
    ```

  ```

  ```

- Update a todo

  - PATCH http://localhost:3001/api/v1/todo
  - ```
      {
          id: "1",
          "update": "text",
          "text": "updated todo"
      }

       OR

      {
          id: "1",
          "update": "completed",
          "completed": false
      }
    ```

* Delete a todo

  - PATCH http://localhost:3001/api/v1/t
  - ```
      {
          id: 1
      }
    ```
