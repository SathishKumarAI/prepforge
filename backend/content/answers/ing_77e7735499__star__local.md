---
qid: ing_77e7735499__star__local
question: 'Explain: ReAct: Reasoning + Acting — Reasoning Loops React And Beyond'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 331
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:56-05:00'
sources: []
---

**Situation**  
At my last company we were building a customer‑support chatbot that needed to browse internal knowledge bases in real time. The existing retrieval‑only model returned answers too often, but never verified their correctness or updated its own state after each interaction.

**Task**  
I had to design an agent that could *reason* about what information was missing, *act* by querying APIs or web pages, and then update its internal memory so the next answer would be more accurate—essentially implementing a ReAct loop for our bot.

**Action**  
First I wrapped the language model in a two‑stage pipeline: a “Reason” module that parsed user intent and generated a short plan (e.g., fetch FAQ section, parse ticket ID), and an “Act” module that executed those steps via REST calls or web scrapers. After each act, the agent appended the new data to its prompt context, effectively closing the loop. I used OpenAI’s function‑calling API to enforce structured outputs, and added a lightweight cache to avoid duplicate queries. I also introduced a confidence score threshold; if the model was uncertain it would ask clarifying questions before acting.

**Result**  
The bot’s accuracy rose from 68 % to 92 % on our internal test set, and response time dropped by 30 %. The experience taught me that embedding reasoning loops directly into LLM prompts can turn a passive retrieval system into an adaptive problem‑solving agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
