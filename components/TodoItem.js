function TodoItem({ todo, onToggle, onDelete }) {
    try {
        const [swipeX, setSwipeX] = React.useState(0);
        const [isDragging, setIsDragging] = React.useState(false);

        const handleTouchStart = (e) => {
            setIsDragging(true);
            const touch = e.touches[0];
            setSwipeX(touch.clientX);
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            const diff = touch.clientX - swipeX;
            const element = e.currentTarget;
            element.style.transform = `translateX(${diff}px)`;
        };

        const handleTouchEnd = (e) => {
            setIsDragging(false);
            const element = e.currentTarget;
            const rect = element.getBoundingClientRect();
            if (rect.x < -100) {
                onDelete(todo.id);
            } else if (rect.x > 100) {
                onToggle(todo.id);
            }
            element.style.transform = '';
        };

        return (
            <div 
                className={`flex items-center justify-between bg-purple-900 bg-opacity-40 px-4 py-3 rounded-lg mb-2 ${isDragging ? 'swiping' : ''}`}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
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