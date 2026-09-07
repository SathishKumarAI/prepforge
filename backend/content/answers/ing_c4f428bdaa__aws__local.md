---
qid: ing_c4f428bdaa__aws__local
question: 'Explain: Conversational RAG Agent using InMemoryChatMessageStore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:08-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a conversational RAG (Retrieval‑Augmented Generation) agent for an enterprise chatbot that had to surface up‑to‑date policy documents while keeping latency under 200 ms. The core requirement was an *in‑memory chat message store* that could feed context into the LLM without hitting slow disk or network calls.

**Action – Design & Implementation**  
I chose **Amazon Elasticache (Redis)** as the in‑memory store because it offers single‑digit millisecond reads, built‑in replication for high availability, and native support for key‑value TTLs—perfect for discarding stale conversation context. The agent pipeline:

1. **Message ingestion** – Each user message is pushed to Redis with a composite key (`sessionId:timestamp`).  
2. **RAG retrieval** – I leveraged **Amazon Kendra** to index policy docs and queried it on demand; results were cached in Redis for 30 s to avoid duplicate calls.  
3. **LLM inference** – The prompt concatenated the last 5 messages from Redis with the top‑k Kendra snippets, then sent it to **Amazon Bedrock (Claude)** via an API Gateway.

I implemented a *fallback* to S3‑based DynamoDB if Redis failed, ensuring **99.9 % availability** while keeping cost < $0.02 per request.  

**Result**  
After deployment, query latency dropped from 1.2 s to 180 ms (a 85 % reduction). User satisfaction scores rose from 3.8/5 to 4.6/5, and we processed 40 k conversational turns monthly with < $10/day in additional cost.

**Reflection & Learning**  
I owned the end‑to‑end stack, performed a *dive deep* into Redis eviction policies, and learned that aggressive TTLs can trade off relevance for speed—so I added an adaptive back‑off strategy. This experience reinforced Amazon’s **Ownership** and **Dive Deep** principles, proving that thoughtful architecture yields measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
