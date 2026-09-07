---
qid: ing_46879aea34__faang__local
question: 'Explain: Rate Limiting and Throttling — A Cheatsheet to Build Secure APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 518
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:55-05:00'
sources: []
---

**Rate‑Limiting & Throttling Cheatsheet for Secure APIs**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | *Problem:* Prevent abuse, DDOS, and resource exhaustion while keeping legitimate traffic smooth.<br>*Assumptions to confirm:* 1️⃣ Do we have per‑user or per‑IP limits? 2️⃣ Are bursty requests acceptable (e.g., login retries)? 3️⃣ What backend tech (API gateway, CDN, microservice) will enforce limits? | Sets scope and constraints for design. |
| **Approach** | 1️⃣ Choose a *token bucket* or *leaky bucket* algorithm.<br>2️⃣ Store counters in an external store (Redis, DynamoDB) with atomic increments.<br>3️⃣ Return `429 Too Many Requests` + `Retry-After`. <br>4️⃣ Log violations and trigger alerts. | Balances accuracy vs. latency; external store gives global consistency across nodes. |
| **Depth** | - **Token Bucket:** replenish rate = R tokens/sec, burst size = B tokens.<br>- **Leaky Bucket:** smooths traffic to a constant flow at rate R.<br>- *Complexity:* O(1) per request; memory O(number_of_keys).<br>- *Trade‑offs:* Token bucket allows short bursts (useful for user experience); leaky bucket guarantees strict pacing. | Technical details enable quick implementation and tuning. |
| **Edge Cases** | • Clock skew between services → use monotonic timestamps.<br>• Distributed counters → use Redis `INCR` or DynamoDB `UpdateItem` with optimistic locking.<br>• API key rotation → reset counters safely.<br>• Exemptions (admin, internal traffic) → separate whitelist. | Highlights pitfalls and testing points. |
| **Optimize & Communicate** | • Cache the counter locally for a few ms to reduce round‑trips.<br>• Use sliding window logs for analytics without affecting latency.<br>• Document limits in API spec; provide SDK helpers. <br>• Narrate: “We’ll enforce per‑user 100 req/min with a burst of 200, using Redis counters, and return 429 when exceeded.” | Shows readiness to scale, maintain, and explain decisions. |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
