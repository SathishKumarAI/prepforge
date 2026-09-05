---
qid: ing_6f6699443e__star__local
question: What is context engineering? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 281
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:48-05:00'
sources: []
---

**Situation:** At my last startup we were building a conversational agent for customer support. The bot’s accuracy dropped from 82% to 68% when new product lines were added, because it kept misunderstanding user intents.

**Task:** I had to design a system that could adapt the model’s context on the fly so it could correctly interpret queries about any product without retraining from scratch.

**Action:** I introduced “context engineering” by creating dynamic prompt templates that embed relevant product metadata and recent conversation history. Using OpenAI’s GPT‑4, I built a microservice that pulls the latest SKU details from our database and injects them into the prompt as structured JSON. I also implemented a rolling window of user messages to maintain conversational coherence, trimming older turns when token limits approached. To test trade‑offs, I ran A/B experiments comparing static prompts versus context‑enhanced ones, measuring intent accuracy and response latency.

**Result:** The new approach lifted intent classification from 68% back up to 83%, matching our pre‑deployment baseline, while keeping average response time under 300 ms. I learned that thoughtful prompt construction—selectively feeding only the most relevant context—can dramatically improve performance without costly re‑training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
