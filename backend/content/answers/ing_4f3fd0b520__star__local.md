---
qid: ing_4f3fd0b520__star__local
question: 'Explain: 8 Tool Calling — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 335
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:53-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a chatbot that could fetch real‑time flight data for travelers on our travel app. The API response format changed mid‑project and the existing monolithic code broke every time we deployed a new version.

**Task** – I needed to create a flexible system where the bot could call different external tools (flight search, weather, currency conversion) without hardcoding each one, while keeping latency under 1 second for a good user experience.

**Action** – I implemented *Tool Calling* as described by Neo Kim and Logan Thorneloe. First, I defined a JSON schema for every tool: name, description, required arguments, and output format. Then I built an LLM‑driven orchestrator that parses the user’s intent, selects the appropriate tool, formats the request, sends it to the API, and feeds the response back into the conversation context. To keep things fast I cached recent responses in Redis and used batching for parallel calls. Finally, I added a safety layer that verifies output against the schema before returning it.

**Result** – The bot’s success rate rose from 68 % to 95 %, and average response time dropped from 2.3 s to 0.8 s. I learned that treating external services as first‑class “tools” lets LLMs reason about which one to use, turning a brittle monolith into an extensible, maintainable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
