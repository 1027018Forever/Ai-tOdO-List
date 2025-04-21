const TodoStorage = {
    saveTodos: (todos) => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error('Error saving todos:', error);
        }
    },

    loadTodos: () => {
        try {
            const todos = localStorage.getItem('todos');
            return todos ? JSON.parse(todos) : [];
        } catch (error) {
            console.error('Error loading todos:', error);
            return [];
        }
    }
};
