function AnimatedTitle() {
    try {
        return (
            <div className="text-center mb-6" data-name="animated-title">
                <h1 className="text-4xl font-bold mb-2">
                    <span className="animate-bounce-text inline-block text-yellow-400">A</span>
                    <span className="animate-bounce-text inline-block text-purple-400" style={{ animationDelay: '0.1s' }}>I</span>
                    <span className="animate-bounce-text inline-block" style={{ animationDelay: '0.2s' }}> </span>
                    <span className="animate-bounce-text inline-block text-blue-400" style={{ animationDelay: '0.3s' }}>T</span>
                    <span className="animate-bounce-text inline-block text-green-400" style={{ animationDelay: '0.4s' }}>o</span>
                    <span className="animate-bounce-text inline-block text-pink-400" style={{ animationDelay: '0.5s' }}>d</span>
                    <span className="animate-bounce-text inline-block text-orange-400" style={{ animationDelay: '0.6s' }}>o</span>
                    <span className="animate-bounce-text inline-block" style={{ animationDelay: '0.7s' }}> </span>
                    <span className="animate-bounce-text inline-block text-red-400" style={{ animationDelay: '0.8s' }}>L</span>
                    <span className="animate-bounce-text inline-block text-indigo-400" style={{ animationDelay: '0.9s' }}>i</span>
                    <span className="animate-bounce-text inline-block text-teal-400" style={{ animationDelay: '1.0s' }}>s</span>
                    <span className="animate-bounce-text inline-block text-purple-400" style={{ animationDelay: '1.1s' }}>t</span>
                </h1>
                <div className="flex justify-center gap-2 text-2xl">
                    <i className="fas fa-magic text-purple-400 animate-float" style={{ animationDelay: '0s' }}></i>
                    <i className="fas fa-robot text-blue-400 animate-float" style={{ animationDelay: '0.3s' }}></i>
                    <i className="fas fa-microphone text-green-400 animate-float" style={{ animationDelay: '0.6s' }}></i>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AnimatedTitle component error:', error);
        reportError(error);
        return null;
    }
}
