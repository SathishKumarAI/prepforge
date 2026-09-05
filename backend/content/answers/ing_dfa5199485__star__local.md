---
qid: ing_dfa5199485__star__local
question: 'Explain: The interview loop — Character Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 293
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:03-05:00'
sources: []
---

**Situation:** At my last startup, we were building a real‑time character dialogue system for an AR game. Our beta testers reported that NPCs felt robotic and repetitive, especially during long play sessions.

**Task:** I had to design a lightweight “interview loop” so each character could ask clarifying questions, adapt responses on the fly, and maintain context without bloating the model or latency.

**Action:** I first mapped out a state machine where the NPC’s prompt fed into a 2‑step pipeline: (1) an intent classifier (BERT fine‑tuned on dialogue acts) determines if more context is needed; (2) if yes, the system generates a follow‑up question using GPT‑4 with a short prompt template that references the last user utterance. I wrapped this in a microservice with async queues so it could run concurrently for up to 10 characters. To keep latency under 200 ms, I cached recent embeddings and used a lightweight distilBERT model for intent detection.

**Result:** After deploying the loop, we saw a 45% drop in player complaints about repetitive dialogue and a 30% increase in average session length. The experience taught me that a simple, modular interview loop can dramatically improve conversational AI without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
