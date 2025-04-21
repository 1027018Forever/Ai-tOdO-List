function RewardProgress({ points, nextReward }) {
    try {
        return (
            <div className="mb-6 text-center" data-name="reward-progress">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Points: {points}</span>
                    {nextReward && (
                        <span className="text-purple-300">
                            Next reward: {nextReward.name} ({nextReward.pointsNeeded} points needed)
                        </span>
                    )}
                </div>
                {nextReward && (
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                            className="bg-purple-500 rounded-full h-2 transition-all duration-500"
                            style={{ width: `${(points / nextReward.requiredPoints) * 100}%` }}
                            data-name="progress-bar"
                        ></div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('RewardProgress component error:', error);
        reportError(error);
        return null;
    }
}
