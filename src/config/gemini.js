
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

const apiKey = 'AIzaSyB94MQN4Jll6vWkRpC6M4EfWaErNlr9wdw';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });
  let solarPrompt = `You are an intelligent solar energy assistant. Your goal is to provide accurate and helpful information about:
- Solar panel technology
- Installation processes
- Maintenance requirements
- Cost & ROI analysis
- Industry regulations
- Market trends
Respond in a clear and concise manner, tailored to the user's level of expertise 
${prompt}`
  const result = await chatSession.sendMessage(solarPrompt);
  console.log(result.response.text());
  return result.response.text();

}

export default run;