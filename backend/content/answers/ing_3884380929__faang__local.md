---
qid: ing_3884380929__faang__local
question: 'Explain: 4.6 Backpressure, Timeouts, and Circuit Breakers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 496
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:39-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *back‑pressure*, *timeouts*, and *circuit breakers*—the three classic patterns that make distributed AI systems resilient when facing latency, overload, or failure.

Assumptions:  
- The system exposes services (e.g., model inference APIs).  
- Clients may be synchronous or asynchronous.  
- Failure modes include network glitches, model out‑of‑memory, and CPU saturation.

**Approach**  
1. Define each pattern.  
2. Show how they interact in a request pipeline.  
3. Discuss metrics and thresholds.  

**Depth**  

| Pattern | What it does | Typical implementation | Complexity |
|---------|--------------|------------------------|------------|
| **Back‑pressure** | Throttle upstream requests when downstream is busy, preventing queue buildup. | Reactive streams (`onBackPressure`), token buckets, or `Semaphore`. The consumer signals “busy” → producer pauses. | O(1) per request; requires coordination across services. |
| **Timeouts** | Fail a call if it doesn’t complete within a bound, freeing resources for new work. | Per‑service HTTP/GRPC timeouts, async futures with `or_timeout`.  | O(1); must balance false positives vs. responsiveness. |
| **Circuit Breaker** | Detect repeated failures and stop sending traffic until the downstream recovers. | State machine (Closed → Open → Half‑Open) with failure counters or error rates; configurable reset time. | O(1); adds state per target. |

**Edge Cases**  
- *Back‑pressure* can deadlock if the consumer never releases tokens.  
- *Timeouts* too short cause churn; too long mask real failures.  
- *Circuit breakers* may stay open after transient spikes (false positives) or close too early, causing a thundering herd.

**Optimize & Communicate**  
Start with fine‑grained timeouts and a simple circuit breaker (e.g., 5 % error threshold). Add back‑pressure only if request queues exceed a configurable size. Explain trade‑offs: tighter timeouts reduce latency but increase retries; aggressive back‑pressure protects downstream but may starve clients. Use metrics dashboards to iterate thresholds, ensuring the system stays responsive while preventing cascading failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
