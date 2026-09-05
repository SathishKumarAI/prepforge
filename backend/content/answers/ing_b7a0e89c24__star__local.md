---
qid: ing_b7a0e89c24__star__local
question: 'Explain: Memory Maintenance — Context vs. Memory Engineering in Agentic
  AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 294
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:30-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were building an agentic chatbot to help users navigate complex loan products. Our early iterations kept asking the same clarifying questions because the bot had no persistent memory of prior interactions.

**Task:**  
I was tasked with designing a system that could maintain user context across multiple turns while still protecting sensitive data and keeping response latency low.

**Action:**  
First, I defined *context* as short‑term conversational state—intent, entities, and recent dialogue. For this, we used a lightweight in‑memory store (Redis) keyed by session ID, updated after each turn. Next, for *memory engineering*, I implemented a modular knowledge graph stored in Neo4j that captured long‑term user preferences and policy rules. Every 24 hours, an ETL job aggregated the session stores into the graph, applying privacy filters to strip PII before persistence. During inference, the agent fetched relevant nodes from the graph via Cypher queries and merged them with the Redis context to generate answers in under 150 ms.

**Result:**  
The bot’s first‑contact resolution rate jumped from 42% to 68%, and average session length dropped by 35%. I learned that separating short‑term context from long‑term memory allows scalable, privacy‑respectful agentic AI without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
