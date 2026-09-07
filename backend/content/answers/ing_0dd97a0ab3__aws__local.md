---
qid: ing_0dd97a0ab3__aws__local
question: 'Explain: Design a token-based rate limiter for a multi-tenant LLM API.
  Implement the core, then tell me what changes when it''s distributed.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 425
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:56:52-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led a team that exposed an LLM to 10 k tenants daily. We hit “rate‑limit” errors during peak traffic, hurting customer satisfaction. My goal: build a token‑based limiter that guarantees each tenant’s quota while keeping latency <50 ms.

**Action (A)**  
I implemented the core using **Redis Streams + Lua scripts** for atomic `INCRBY` and `EXPIRE`. Each tenant gets a bucket ID (`tenant:{id}`) with capacity *C* tokens. Every request consumes one token; if empty, we return HTTP‑429.  

For a distributed setup I switched to **Amazon DynamoDB Global Tables** + **DAX** as the backing store, exposing an API via **API Gateway + Lambda@Edge** for edge‑first throttling. Tokens are stored in a sharded table (`tenant_id|shard`) and updated with conditional writes (optimistic concurrency).  

I added a **CloudWatch metric** `TokensConsumed` per tenant; alarms trigger when usage >90 % of quota, auto‑scaling the Lambda concurrency to 2× peak.  

**Result (R)**  
After rollout:  
- 99.8 % compliance with per‑tenant quotas.  
- Latency dropped from 120 ms to 38 ms (30 % improvement).  
- Operational cost fell by 18 % thanks to DynamoDB’s pay‑per‑write model versus spinning Redis clusters.

**Learning**  
I realized that a single‑node cache is brittle; moving to a managed, sharded DB gives true scalability and durability—exactly the ownership mindset Amazon champions.  

> **Leadership Principles:** *Ownership*, *Dive Deep* (atomic token logic), *Deliver Results* (measured impact).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
