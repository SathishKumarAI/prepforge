---
qid: ing_b9633942c5__faang__local
question: 'Explain: Powers of Two — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 457
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:54:13-05:00'
sources: []
---

**Powers of Two – “Back‑of‑the‑Envelope” System Design**

| Step | What to Do |
|------|------------|
| **Clarify** | *Restate*: Build a service that, given an integer `n`, returns the largest power of two ≤ `n`. Ask: 1) Range of `n` (int32/64, user‑supplied vs. internal)? 2) Throughput requirement? 3) Should we cache results or compute on demand? |
| **Approach** | 1. **Mathematical shortcut** – use bit tricks (`floor(log₂(n))`). 2. **Cache layer** – LRU for recent queries if high traffic. 3. **API gateway → microservice** that exposes `/maxPowerOfTwo?n=`. 4. **Horizontal scaling** with stateless workers behind a load balancer. |
| **Depth** | *Core logic*: `int64 p = 1LL << (63 - __builtin_clzll(n));` runs in O(1). *Complexity*: O(1) time, O(1) space per request. *Trade‑offs*: bit trick is fastest but only works for unsigned ints; fallback to log2 if negative or zero. |
| **Edge Cases** | • `n <= 0`: return 0 or error. <br>• Extremely large `n` beyond 64‑bit: need arbitrary precision (bigint) and slower algorithm. <br>• Concurrency: stateless design eliminates race conditions. |
| **Optimize & Communicate** | • Add a CDN for low‑latency global access. <br>• Rate‑limit per IP to prevent abuse. <br>Explain the trade‑off between pure bit‑ops (fast, limited) vs. generic math library (portable). Conclude with monitoring: latency SLA 99th percentile < 5 ms, error rate < 0.01%. |

*This concise design balances performance, scalability, and simplicity—key for a FAANG interview.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
