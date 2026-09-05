---
qid: ing_3eab72bfd5__star__local
question: 'Explain: Durable Execution for Long-Running Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 318
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:48-05:00'
sources: []
---

**Situation:**  
At my previous company we built a conversational AI platform that ran customer support bots across thousands of retail sites. The bot had to process complex orders and hold user context for up to 48 hours while waiting on external payment and inventory services. When we deployed the new version, users reported random timeouts after only a few minutes, causing lost sales.

**Task:**  
I was tasked with redesigning the agent’s execution model so it could survive restarts, scale horizontally, and reliably recover state without losing user data or violating SLA constraints.

**Action:**  
I introduced Azure Durable Functions to orchestrate each conversation. The function’s state was persisted in Cosmos DB; I used activity functions for external API calls and a timer trigger for periodic heartbeats. To handle idempotency, every message carried a correlation ID that the orchestration checked before re‑executing an activity. I also added a retry policy with exponential backoff for transient failures and implemented a graceful shutdown hook to pause the agent and persist its state.

**Result:**  
The new durable execution reduced timeout incidents by 97 %, increased average session length from 5 minutes to 1.8 hours, and lifted revenue loss estimates to $120k/month. I learned that treating long‑running AI agents as stateful orchestrations, rather than stateless functions, is essential for reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
