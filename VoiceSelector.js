function VoiceSelector({ currentVoice, unlockedVoices, onVoiceChange }) {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className="mb-6" data-name="voice-selector">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-current">AI Voice</h3>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-purple-500 hover:text-purple-400"
                        data-name="toggle-voice-list"
                    >
                        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                    </button>
                </div>
                {isOpen && (
                    <div className="grid grid-cols-2 gap-2" data-name="voice-list">
                        {aiVoices.map(voice => (
                            <button
                                key={voice.id}
                                onClick={() => onVoiceChange(voice.id)}
                                className={`p-3 rounded-lg transition-all ${
                                    currentVoice === voice.id
                                        ? 'bg-purple-500 text-white'
                                        : unlockedVoices.includes(voice.id)
                                            ? 'bg-gray-200 dark:bg-gray-700 text-current hover:bg-gray-300 dark:hover:bg-gray-600'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                }`}
                                disabled={!unlockedVoices.includes(voice.id)}
                                data-name={`voice-${voice.id}`}
                            >
                                <div className="text-left">
                                    <div className="font-medium">{voice.name}</div>
                                    <div className="text-sm opacity-75">{voice.personality}</div>
                                    {!unlockedVoices.includes(voice.id) && (
                                        <div className="text-xs mt-1">
                                            <i className="fas fa-lock mr-1"></i>
                                            {voice.requiredPoints} points
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('VoiceSelector component error:', error);
        reportError(error);
        return null;
    }
}
