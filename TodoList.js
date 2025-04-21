function TodoList({ todos, onToggle, onDelete }) {
    try {
        return (
            <div className="space-y-2" data-name="todo-list">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        );
    } catch (error) {
        console.error('TodoList component error:', error);
        reportError(error);
        return null;
    }
}
