function PremiumUnlock({ onUnlockAll, onUnlockThemes, onUnlockVoices }) {
    try {
        return (
            <div className="mb-6 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg p-4" data-name="premium-unlock">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <i className="fas fa-crown text-yellow-400"></i>
                    Premium Features
                </h3>
                <div className="grid gap-3">
                    <button
                        onClick={onUnlockAll}
                        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-between"
                        data-name="unlock-all"
                    >
                        <span>Unlock Everything</span>
                        <span className="bg-black text-white px-2 py-1 rounded text-sm">$1.50</span>
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={onUnlockThemes}
                            className="bg-gradient-to-r from-purple-400 to-purple-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center"
                            data-name="unlock-themes"
                        >
                            <i className="fas fa-paint-brush mb-1"></i>
                            <span>Themes Only</span>
                            <span className="text-xs">$0.99</span>
                        </button>
                        <button
                            onClick={onUnlockVoices}
                            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity flex flex-col items-center"
                            data-name="unlock-voices"
                        >
                            <i className="fas fa-microphone mb-1"></i>
                            <span>Voices Only</span>
                            <span className="text-xs">$0.99</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('PremiumUnlock component error:', error);
        reportError(error);
        return null;
    }
}
