---
qid: ing_74880c4cee__star__local
question: 'Q: How does GraphRAG solve the "Context Window" limit for aggregate questions?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 367
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:26-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was building a customer‑support chatbot that had to answer “aggregate” queries like *“What were the total transaction volumes for each region last quarter?”* The LLM’s context window capped at ~8k tokens, but the raw data set spanned 50k+ records—too large to feed all at once.

**Task:**  
I needed a way to let the model understand and compute aggregates without exceeding its token limit while keeping latency under two seconds per request.

**Action:**  
I implemented GraphRAG: first, I built an entity‑centric graph where each node represented a transaction with attributes (amount, region, date). Using Neo4j’s Cypher, I pre‑aggregated sums per region and quarter, storing those as “summary” nodes. When a query arrived, the system ran a lightweight graph traversal to pull only the relevant summary nodes—just 30 tokens—into the prompt. The LLM then generated the final answer, referencing these concise facts. For edge cases needing deeper detail, I added a fallback that fetched a small subset of raw transactions (≤2k tokens) and re‑routed them through the same graph logic.

**Result:**  
Response time dropped from ~4 s to 1.8 s, accuracy hit 98% on benchmark queries, and we avoided exceeding the context window entirely. I learned that thoughtful data abstraction—turning large tables into a graph of pre‑aggregated facts—lets LLMs scale gracefully without sacrificing precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
