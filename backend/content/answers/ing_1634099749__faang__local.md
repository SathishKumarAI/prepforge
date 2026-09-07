---
qid: ing_1634099749__faang__local
question: 'Explain: Graceful Degradation — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 460
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:35:34-05:00'
sources: []
---

**Graceful Degradation – Error Handling & Recovery (AI Systems)**  

| Step | What to cover |
|------|---------------|
| **Clarify** | *Problem*: An AI service must keep serving useful results even when sub‑components fail (e.g., model inference, data pipeline, external APIs). <br>*Assumptions*: 1️⃣ Latency budget is tight (<200 ms), 2️⃣ Users expect “best effort” responses, 3️⃣ We have monitoring & alerting in place. |
| **Approach** | 1️⃣ Detect failure early (health checks, circuit breakers). <br>2️⃣ Switch to a fallback path: cached predictions, simpler model, or static defaults. <br>3️⃣ Log the error, surface metrics, and trigger an alert for ops. |
| **Depth** | *Detection*: Use health‑check endpoints and timeout thresholds; implement a circuit breaker that opens after N consecutive failures. <br>*Fallback*: Maintain a lightweight “fallback” model (e.g., linear regression) trained on the same features; or serve cached predictions with TTL. <br>*Recovery*: On recovery, gradually re‑enable the primary path via a canary rollout to avoid spikes. <br>Complexity: O(1) latency overhead for health checks; fallback adds ~10 ms latency but keeps throughput high. |
| **Edge Cases** | • Cache miss → return “data unavailable” message. <br>• Fallback model drift → re‑train periodically. <br>• Multiple failures simultaneously (e.g., GPU & datastore) → cascade to a minimal response or queue the request for later. |
| **Optimize & Communicate** | *Improvements*: Use adaptive fallback selection based on current load; employ ML‑based anomaly detection to preemptively switch paths. <br>*Narration*: “We’ll first verify component health, then safely redirect traffic to our backup model while keeping users informed and ops alerted.” |

*Result*: The system stays functional, respects SLAs, and provides clear signals for human intervention—all key for a production AI platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
