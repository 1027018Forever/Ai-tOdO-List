function VoiceInput({ onVoiceInput }) {
    try {
        const [isListening, setIsListening] = React.useState(false);

        const handleVoiceInput = () => {
            if (isListening) {
                VoiceHelper.stopListening();
                setIsListening(false);
            } else {
                setIsListening(true);
                VoiceHelper.startListening((transcript) => {
                    onVoiceInput(transcript);
                    setIsListening(false);
                });
            }
        };

        return (
            <button
                onClick={handleVoiceInput}
                className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg transition-all ${
                    isListening 
                        ? 'bg-red-500 animate-pulse' 
                        : 'bg-purple-500 hover:bg-purple-600'
                }`}
                data-name="voice-input"
            >
                <i className={`fas ${isListening ? 'fa-stop' : 'fa-microphone'} text-white text-xl`}></i>
            </button>
        );
    } catch (error) {
        console.error('VoiceInput component error:', error);
        reportError(error);
        return null;
    }
}
