---
qid: ing_bb2e985d68__faang__local
question: 'Explain: Return the Right Status Code — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 393
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:59-05:00'
sources: []
---

**Clarify**  
You’re designing a webhook‑receiver service that must reply with the correct HTTP status code after processing an event payload. I’ll assume:  

* The service is stateless and horizontally scalable.  
* Events come from trusted producers (no replay attacks).  
* We need to support idempotency, partial failures, and back‑pressure.

**Approach**  
1. Validate request headers & signature → 400/401.  
2. Queue the payload for async processing.  
3. Return **202 Accepted** immediately if queuing succeeds; otherwise **503 Service Unavailable**.  
4. On worker completion, use a callback or status endpoint to inform the producer of success (200) or failure (5xx).  

This decouples HTTP latency from heavy computation and lets producers retry safely.

**Depth**  
*Signature check*: HMAC‑SHA256 over body → O(1).  
*Queuing*: e.g., Kafka, guaranteeing at‑least‑once delivery.  
*Idempotency*: store a hash of the payload; if duplicate arrives, return 200 with cached result.  
Complexity: O(n) per request for header checks; queuing is amortized constant.  

**Edge Cases**  
*Large payloads*: reject >10 MB → 413 Payload Too Large.  
*Duplicate events*: handled by idempotency store.  
*Queue full*: return 503 to trigger client back‑off.

**Optimize & Communicate**  
We can batch responses for high‑volume producers, reducing round trips. To explain this design in an interview, I’d walk through the flow diagram, justify each status code per RFC 7231, and show how idempotency mitigates retries—demonstrating clear reasoning, depth, and system‑level thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
