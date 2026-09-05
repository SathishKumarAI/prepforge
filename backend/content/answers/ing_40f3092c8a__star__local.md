---
qid: ing_40f3092c8a__star__local
question: 'Explain: Agent Plugins — Tool Use And Mcp'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:23-05:00'
sources: []
---

**Situation:**  
At my last startup, we were building a conversational agent that had to pull real‑time flight data and weather updates while still answering user queries about travel itineraries. Our core model was great at language but couldn’t reach external APIs on its own.

**Task:**  
I needed to integrate an “agent plugin” system so the LLM could call structured tools (REST endpoints, database lookups) safely and efficiently, without compromising latency or hallucination rates.

**Action:**  
First, I defined a JSON‑based tool schema: each plugin exposed a name, description, input schema, and a sandboxed execution endpoint. I wrapped these in a lightweight Python microservice that validated inputs against the schema, logged calls, and returned typed results. Then I updated the LLM’s prompt to include a “tool use” instruction block, letting it decide when to invoke a plugin instead of generating text. Finally, I added a multi‑candidate planner (MCP) layer: for each user intent, MCP generated up to five tool‑call sequences, scored them by predicted success probability and response time, and chose the best plan before execution.

**Result:**  
User‑reported accuracy jumped from 78 % to 93 %, while average response latency dropped from 1.8 s to 1.2 s. The system also logged fewer hallucinations because every factual answer was verified by a plugin call. I learned that clear tool contracts and an automated planner are key to scaling LLMs into production‑grade assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
