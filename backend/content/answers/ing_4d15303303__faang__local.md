---
qid: ing_4d15303303__faang__local
question: 'Explain: Functional Requirements — Ratelimiterapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 486
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:43:37-05:00'
sources: []
---

**Functional Requirements – RateLimiter API**

| Stage | Content |
|-------|---------|
| **Clarify** | *Restate:* Design an HTTP‑based rate‑limiting service that restricts how many requests a client (user/IP/key) can make within a sliding time window. <br> *Assumptions to confirm:* 1️⃣ What is the granularity of limits? (per‑second, per‑minute, etc.)<br>2️⃣ Do we need burst capability or strict throttling?<br>3️⃣ Is persistence required across restarts? <br>4️⃣ How many clients and requests per second are expected? |
| **Approach** | 1. Expose a REST endpoint `/limit` that accepts client ID and request metadata.<br>2. Use an in‑memory, sharded counter (e.g., Redis `INCRBY` + TTL) for speed.<br>3. On each call: <ul><li>Increment counter atomically.</li><li>If count ≤ limit → allow; else return HTTP 429 with Retry‑After.</li></ul> |
| **Depth** | *Data model:* key = `clientID:windowStart`. Value = request count. TTL = window duration + small buffer.<br>*Complexity:* O(1) per request, constant memory per active client. <br>*Trade‑offs:* In‑memory gives sub‑ms latency but loses state on crash; persistence (e.g., Redis AOF) mitigates that at cost of write overhead. |
| **Edge Cases** | • Clock skew between service and clients – use NTP or logical clocks.<br>• Burst traffic: allow a burst factor by adjusting TTL or using token bucket logic.<br>• Key rollover: ensure atomicity when sliding window crosses boundary to avoid double counting. |
| **Optimize & Communicate** | *Improvements:* Cache hot keys in local memory for micro‑second latency; shard Redis horizontally for scale. <br>*Narration:* “We’ll start with a simple counter per client, then discuss sharding and persistence trade‑offs, finally cover edge handling to guarantee correctness.” |

*Word count: ~180 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
