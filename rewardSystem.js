const RewardSystem = {
    calculatePoints: (todos) => {
        return todos.reduce((points, todo) => {
            if (todo.completed) {
                points += 10; // Points for completing a task
            }
            return points;
        }, 0);
    },

    getUnlockedThemes: (points) => {
        return rewards.filter(reward => points >= reward.requiredPoints)
            .map(reward => reward.id);
    },

    getUnlockedVoices: (points) => {
        return aiVoices.filter(voice => points >= voice.requiredPoints)
            .map(voice => voice.id);
    },

    getNextReward: (points) => {
        const nextTheme = rewards.find(reward => reward.requiredPoints > points);
        const nextVoice = aiVoices.find(voice => voice.requiredPoints > points && voice.id !== 'default');
        
        if (!nextTheme && !nextVoice) return null;
        
        if (!nextTheme) return {
            ...nextVoice,
            type: 'voice',
            pointsNeeded: nextVoice.requiredPoints - points
        };
        
        if (!nextVoice) return {
            ...nextTheme,
            type: 'theme',
            pointsNeeded: nextTheme.requiredPoints - points
        };
        
        return nextTheme.requiredPoints < nextVoice.requiredPoints
            ? {
                ...nextTheme,
                type: 'theme',
                pointsNeeded: nextTheme.requiredPoints - points
            }
            : {
                ...nextVoice,
                type: 'voice',
                pointsNeeded: nextVoice.requiredPoints - points
            };
    }
};
