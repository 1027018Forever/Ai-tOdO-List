
function App() {
    try {
        const [todos, setTodos] = React.useState(() => TodoStorage.loadTodos());
        const [searchQuery, setSearchQuery] = React.useState('');
        const [isRefreshing, setIsRefreshing] = React.useState(false);
        
        const filteredTodos = React.useMemo(() => {
            return todos.filter(todo => 
                todo.text.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }, [todos, searchQuery]);

        const handlePullToRefresh = () => {
            setIsRefreshing(true);
            // Simulate refresh
            setTimeout(() => {
                setIsRefreshing(false);
            }, 1000);
        };
        const [suggestions, setSuggestions] = React.useState([]);
        const [isGeneratingSuggestions, setIsGeneratingSuggestions] = React.useState(false);
        const [points, setPoints] = React.useState(0);
        const [currentTheme, setCurrentTheme] = React.useState('default');
        const [currentVoice, setCurrentVoice] = React.useState('default');
        const [colorMode, setColorMode] = React.useState('dark');
        const [contrastMode, setContrastMode] = React.useState('low');
        const [unlockedThemes, setUnlockedThemes] = React.useState(['default']);
        const [unlockedVoices, setUnlockedVoices] = React.useState(['default']);
        const [isPremium, setIsPremium] = React.useState(false);

        React.useEffect(() => {
            TodoStorage.saveTodos(todos);
            if (!isPremium) {
                const newPoints = RewardSystem.calculatePoints(todos);
                setPoints(newPoints);
                
                const newUnlockedThemes = ['default', ...RewardSystem.getUnlockedThemes(newPoints)];
                const newUnlockedVoices = ['default', ...RewardSystem.getUnlockedVoices(newPoints)];
                
                setUnlockedThemes(newUnlockedThemes);
                setUnlockedVoices(newUnlockedVoices);
            }
        }, [todos, isPremium]);

        React.useEffect(() => {
            document.documentElement.classList.toggle('dark', colorMode === 'dark');
        }, [colorMode]);

        const colorModeClass = `mode-${colorMode}`;
        const contrastClass = `contrast-${contrastMode}`;
        const themeClass = `theme-${currentTheme}`;

        const handleUnlockAll = () => {
            setIsPremium(true);
            setUnlockedThemes(Object.keys(themes));
            setUnlockedVoices(aiVoices.map(voice => voice.id));
            alert('Thank you for purchasing the premium package! All features unlocked.');
        };

        const handleUnlockThemes = () => {
            setUnlockedThemes(Object.keys(themes));
            alert('Thank you! All themes unlocked.');
        };

        const handleUnlockVoices = () => {
            setUnlockedVoices(aiVoices.map(voice => voice.id));
            alert('Thank you! All AI voices unlocked.');
        };

        const addTodo = (text) => {
            const newTodo = { id: Date.now(), text, completed: false };
            setTodos([...todos, newTodo]);
        };

        const toggleTodo = (id) => {
            setTodos(todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ));
        };

        const deleteTodo = (id) => {
            setTodos(todos.filter(todo => todo.id !== id));
        };

        return (
            <div 
                className={`min-h-screen ${colorModeClass} ${contrastClass} ${themeClass} 
                           bg-${themes[currentTheme].background} transition-colors duration-300`}
                data-name="app-container"
            >
                <div className="container mx-auto px-4 max-w-md py-8">
                    <div className="todo-container rounded-xl p-6 mb-8">
                        <AnimatedTitle />
                        {!isPremium && (
                            <PremiumUnlock
                                onUnlockAll={handleUnlockAll}
                                onUnlockThemes={handleUnlockThemes}
                                onUnlockVoices={handleUnlockVoices}
                            />
                        )}
                        <ColorModeToggle
                            colorMode={colorMode}
                            contrastMode={contrastMode}
                            onColorModeChange={setColorMode}
                            onContrastModeChange={setContrastMode}
                        />
                        {!isPremium && <RewardProgress points={points} />}
                        <ThemeSelector 
                            currentTheme={currentTheme}
                            unlockedThemes={unlockedThemes}
                            onThemeChange={setCurrentTheme}
                        />
                        <VoiceSelector
                            currentVoice={currentVoice}
                            unlockedVoices={unlockedVoices}
                            onVoiceChange={setCurrentVoice}
                        />
                        <TodoInput onAdd={addTodo} />
                        <TodoList
                            todos={todos}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        return null;
    }
}

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));
