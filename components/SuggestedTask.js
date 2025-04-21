function SuggestedTask({ task, onAdd }) {
    try {
        return (
            <div 
                className="flex items-center justify-between bg-purple-900 bg-opacity-40 px-4 py-3 rounded-lg mb-2"
                data-name="suggested-task"
            >
                <span className="text-purple-200">{task}</span>
                <button
                    onClick={() => onAdd(task)}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    data-name="add-suggestion"
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        );
    } catch (error) {
        console.error('SuggestedTask component error:', error);
        reportError(error);
        return null;
    }
}
