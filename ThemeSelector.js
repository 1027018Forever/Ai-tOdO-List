function ThemeSelector({ currentTheme, unlockedThemes, onThemeChange }) {
    try {
        return (
            <div className="mb-6" data-name="theme-selector">
                <h3 className="text-white mb-2">Themes</h3>
                <div className="flex gap-2">
                    {Object.keys(themes).map(themeId => (
                        <button
                            key={themeId}
                            onClick={() => onThemeChange(themeId)}
                            className={`px-3 py-1 rounded-lg transition-all ${
                                currentTheme === themeId 
                                    ? 'bg-purple-500 text-white' 
                                    : unlockedThemes.includes(themeId)
                                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            }`}
                            disabled={!unlockedThemes.includes(themeId)}
                            data-name={`theme-${themeId}`}
                        >
                            {themeId.charAt(0).toUpperCase() + themeId.slice(1)}
                            {!unlockedThemes.includes(themeId) && (
                                <i className="fas fa-lock ml-2"></i>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('ThemeSelector component error:', error);
        reportError(error);
        return null;
    }
}
