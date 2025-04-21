function TodoItem({ todo, onToggle, onDelete }) {
    try {
        return (
            <div 
                className={`todo-item flex items-center justify-between bg-gray-800 px-4 py-3 rounded-lg mb-2 ${
                    todo.completed ? 'completed' : ''
                }`}
                data-name="todo-item"
            >
                <div className="flex items-center gap-3" data-name="todo-item-content">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                        className="w-5 h-5 rounded-full accent-purple-500"
                        data-name="todo-checkbox"
                    />
                    <span className="text-white">{todo.text}</span>
                </div>
                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-red-500 hover:text-red-400 transition-colors"
                    data-name="todo-delete"
                >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        );
    } catch (error) {
        console.error('TodoItem component error:', error);
        reportError(error);
        return null;
    }
}
