function ColorModeToggle({ colorMode, contrastMode, onColorModeChange, onContrastModeChange }) {
    try {
        return (
            <div className="flex flex-col gap-4 mb-6" data-name="color-mode-toggle">
                <div className="flex items-center justify-between">
                    <span className="text-current">Color Mode</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onColorModeChange('light')}
                            className={`px-3 py-1 rounded-lg transition-all ${
                                colorMode === 'light'
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                            data-name="light-mode"
                        >
                            <i className="fas fa-sun"></i>
                        </button>
                        <button
                            onClick={() => onColorModeChange('dark')}
                            className={`px-3 py-1 rounded-lg transition-all ${
                                colorMode === 'dark'
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                            data-name="dark-mode"
                        >
                            <i className="fas fa-moon"></i>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-current">Contrast</span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onContrastModeChange('low')}
                            className={`px-3 py-1 rounded-lg transition-all ${
                                contrastMode === 'low'
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                            data-name="low-contrast"
                        >
                            Low
                        </button>
                        <button
                            onClick={() => onContrastModeChange('high')}
                            className={`px-3 py-1 rounded-lg transition-all ${
                                contrastMode === 'high'
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                            data-name="high-contrast"
                        >
                            High
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ColorModeToggle component error:', error);
        reportError(error);
        return null;
    }
}
