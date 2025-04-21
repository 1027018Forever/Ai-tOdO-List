function App() {
    try {
        const [todos, setTodos] = React.useState(() => TodoStorage.loadTodos());
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

        const handleUnlockAll = () => {
            setIsPremium(true);
            setUnlockedThemes(Object.keys(themes));
            setUnlockedVoices(aiVoices.map(voice => voice.id));
            // Here you would integrate with your payment system
            alert('Thank you for purchasing the premium package! All features unlocked.');
        };

        const handleUnlockThemes = () => {
            setUnlockedThemes(Object.keys(themes));
            // Here you would integrate with your payment system
            alert('Thank you! All themes unlocked.');
        };

        const handleUnlockVoices = () => {
            setUnlockedVoices(aiVoices.map(voice => voice.id));
            // Here you would integrate with your payment system
            alert('Thank you! All AI voices unlocked.');
        };

        // ... rest of the existing methods (addTodo, toggleTodo, etc.) remain the same ...

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
                        {!isPremium && <RewardProgress points={points} nextReward={nextReward} />}
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
                        <AISuggestions 
                            onAddSuggestion={generateSuggestions}
                            isLoading={isGeneratingSuggestions}
                        />
                        {suggestions.length > 0 && (
                            <div className="space-y-2" data-name="suggestions-list">
                                {suggestions.map((suggestion, index) => (
                                    <SuggestedTask
                                        key={index}
                                        task={suggestion}
                                        onAdd={addTodo}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <VoiceInput onVoiceInput={handleVoiceInput} />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
