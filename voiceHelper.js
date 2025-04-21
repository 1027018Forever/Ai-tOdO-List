const VoiceHelper = {
    recognition: null,
    
    init: () => {
        try {
            if ('webkitSpeechRecognition' in window) {
                VoiceHelper.recognition = new webkitSpeechRecognition();
                VoiceHelper.recognition.continuous = false;
                VoiceHelper.recognition.interimResults = false;
                VoiceHelper.recognition.lang = 'en-US';
            }
        } catch (error) {
            console.error('Speech recognition not supported:', error);
        }
    },

    startListening: (onResult) => {
        if (!VoiceHelper.recognition) {
            VoiceHelper.init();
        }

        if (VoiceHelper.recognition) {
            VoiceHelper.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                onResult(transcript);
            };
            VoiceHelper.recognition.start();
        }
    },

    stopListening: () => {
        if (VoiceHelper.recognition) {
            VoiceHelper.recognition.stop();
        }
    }
};
