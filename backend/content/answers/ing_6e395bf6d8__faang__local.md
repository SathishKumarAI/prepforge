---
qid: ing_6e395bf6d8__faang__local
question: 'Explain: External Side Effects — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 415
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:00-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how external side effects (e.g., calling a payment gateway) can be made *idempotent* in a system‑design context. Key assumptions: the service is stateless from a client view, requests may retry, and we need strong consistency for the external operation.

**Approach**  
1. Generate a unique request ID per operation (client or server side).  
2. Store the mapping of that ID → outcome in a durable store before invoking the external API.  
3. On each retry, look up the ID: if an outcome exists, return it; otherwise, call the external service and persist the result.

**Depth**  
*Idempotency key*: UUID or hash of request payload + timestamp.  
*Storage*: A replicated KV store (e.g., DynamoDB, Spanner) with TTL to avoid unbounded growth.  
*Workflow*:  
- Receive request → check idempotency key in DB.  
- If present → return cached result.  
- Else → call external API, capture response, write `{key:response}` atomically, then respond.  

Complexity: O(1) lookup/write; latency dominated by external API. Trade‑off is extra storage and risk of stale data if TTL expires before retries finish.

**Edge Cases**  
- Network partitions causing inconsistent DB state → use quorum reads/writes.  
- External service failure mid‑write → retry transaction or use two‑phase commit.  
- Duplicate keys with different payloads → enforce strict key‑to‑payload mapping at ingestion.

**Optimize & Communicate**  
Explain that this pattern guarantees at most one side effect per unique request, protecting against double charges or duplicate inventory updates. Highlight the importance of idempotency keys in APIs and mention real‑world use (Stripe, AWS S3). Conclude with how you’d monitor key usage and TTL expirations to ensure reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
