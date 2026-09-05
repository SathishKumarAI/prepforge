---
qid: ing_ab52d35ba4__star__local
question: 'Explain: Sources — Character Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 374
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:23-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a multiplayer RPG where NPCs needed to feel alive and consistent across thousands of concurrent players. The game’s narrative engine was pulling data from our content database, but the characters’ dialogue kept sounding generic because the AI model only used the raw text without context.

**Task:**  
I had to design a system that fed the character‑specific “source” information into the LLM so each NPC could generate unique, lore‑consistent responses in real time, all while keeping latency under 150 ms per request on our cloud infra.

**Action:**  
First, I mapped out each character’s attributes (backstory, personality traits, recent events) and stored them as structured JSON in a Redis cache. Then I built a lightweight “source encoder” that concatenated the relevant fields into a prompt prefix with clear delimiters, ensuring the model could parse which part of the source applied to what context. I wrapped this logic in a Node.js microservice that queried Redis, assembled the prompt, and streamed the LLM’s output via OpenAI’s ChatCompletion API using a temperature of 0.6 and top‑p 0.9 for balanced creativity. To keep response times low, I used request pooling and circuit‑breaker patterns to fall back to a cached default reply if the AI service lagged.

**Result:**  
Within two weeks we saw a 45 % drop in player complaints about NPC staleness, and engagement metrics (average session length) increased by 12 %. The system also reduced GPU usage by 30 % because the prompts were concise. I learned that carefully structuring source data and using efficient caching can make character AI feel truly personalized without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
