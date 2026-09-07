---
qid: ing_b65fd9258e__faang__local
question: 'Explain: Request Flow — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 455
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:05-05:00'
sources: []
---

**Clarify**  
We’re asked how an ML inference API can guarantee *idempotent* request flow—i.e., repeated identical calls return the same result without re‑computing or corrupting state.  
Assumptions:  
1. Stateless inference workers (CPU/GPU) behind a load balancer.  
2. Requests may be retried by clients on timeout or failure.  
3. We want to avoid duplicate model execution and cache invalidation.

**Approach**  
1. **Client‑side idempotency key** – each request carries a unique UUID (`idempotency_id`).  
2. **Front‑end gateway** – receives the key, checks a distributed store (Redis/Consul) for an existing entry.  
3. **Cache‑first logic** – if key exists → return cached result; else forward to inference worker.  
4. **Worker writes result atomically** into the store under the same key with TTL.  
5. **Idempotency window** – after TTL, key can be purged; subsequent identical requests will recompute.

**Depth**  
- Use a *write‑once* pattern: `SETNX` in Redis to reserve the key before computation.  
- Store result as JSON + metadata (timestamp, model version).  
- Complexity: O(1) cache lookup; inference cost only on first hit.  
- Consistency: eventual consistency is fine because results are deterministic.

**Edge Cases**  
- **Clock skew** – use server‑generated timestamps to avoid duplicate keys.  
- **Large payloads** – hash the body and store hash + key instead of full request.  
- **Cache miss after TTL** – possible stale data; versioning helps detect changes.

**Optimize & Communicate**  
Explain trade‑offs: tighter TTL reduces storage but increases recomputation risk; looser TTL saves compute but may return outdated predictions. Show a diagram of gateway → Redis → worker flow, and discuss monitoring (cache hit rate). Conclude that this pattern scales horizontally, respects idempotency, and keeps inference cost predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
