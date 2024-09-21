
function Todo ({todo, deleteTodo, updateTodo, updateTodoTitle}) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.status}
                onChange={(e) => updateTodo(todo.id, e.target.checked)}
            />
            <span className={todo.status ? "checked" : ""}>{todo.title}</span>
            <button onClick={() => updateTodoTitle(todo.id)}>Обновить</button>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </li>
    );
}

export default Todo;
