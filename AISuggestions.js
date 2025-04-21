function AISuggestions({ onAddSuggestion, isLoading }) {
    try {
        return (
            <div className="mt-8 mb-4" data-name="ai-suggestions">
                <div className="flex items-center gap-2 mb-3">
                    <i className="fas fa-robot text-purple-500"></i>
                    <h2 className="text-white text-lg font-semibold">AI Suggestions</h2>
                </div>
                {isLoading ? (
                    <div className="text-gray-400 flex items-center gap-2" data-name="ai-loading">
                        <i className="fas fa-spinner fa-spin"></i>
                        <span>Generating suggestions...</span>
                    </div>
                ) : (
                    <button 
                        onClick={onAddSuggestion}
                        className="bg-gradient-to-r from-purple-600 to-purple-400 px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity w-full flex items-center justify-center gap-2"
                        data-name="generate-suggestions"
                    >
                        <i className="fas fa-magic"></i>
                        <span>Generate AI Suggestions</span>
                    </button>
                )}
            </div>
        );
    } catch (error) {
        console.error('AISuggestions component error:', error);
        reportError(error);
        return null;
    }
}
