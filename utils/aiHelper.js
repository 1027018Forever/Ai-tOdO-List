const AIHelper = {
    generateSuggestions: async (todos, voicePrompt) => {
        try {
            const systemPrompt = `${voicePrompt}

Analyze the user's todo list patterns and suggest 3 new relevant tasks. Format each task as a JSON array of strings.

Current todos for analysis:
${JSON.stringify(todos, null, 2)}`;

            const userPrompt = "Based on these tasks, suggest 3 new relevant tasks that might be helpful for the user.";
            
            let response = await invokeAIAgent(systemPrompt, userPrompt);
            
            // Clean up the response to ensure it's valid JSON
            response = response.replace(/json/g, '')
                             .replace(//g, '')
                             .trim();
            
            return JSON.parse(response);
        } catch (error) {
            console.error('Error generating AI suggestions:', error);
            return [];
        }
    }
};
