function TodoInput({ onAdd }) {
    try {
        const [input, setInput] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (input.trim()) {
                onAdd(input.trim());
                setInput('');
            }
        };

        return (
            <form onSubmit={handleSubmit} className="mb-6" data-name="todo-input-form">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add a new task..."
                        className="todo-input w-full px-4 py-2 rounded-lg text-white"
                        data-name="todo-input"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                        data-name="todo-submit"
                    >
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </form>
        );
    } catch (error) {
        console.error('TodoInput component error:', error);
        reportError(error);
        return null;
    }
}
