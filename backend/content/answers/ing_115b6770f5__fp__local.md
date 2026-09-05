---
qid: ing_115b6770f5__fp__local
question: 'Explain: Non-Functional Requirements — Live Comment System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 439
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:42:51-05:00'
sources: []
---

### Non‑Functional Requirements (NFRs) for a Live Comment System  
*Derivation from first principles*

A live comment system must **serve every user’s request in real time** while **ensuring data integrity, fairness, and scalability**.  
1. **Latency ≤ 200 ms** – Human perception of “live” demands that the end‑to‑end delay be bounded by the cognitive response window (≈250 ms). This turns into a *bounded‑delay* constraint in the communication protocol, which in turn dictates use of WebSocket or long‑polling with keep‑alive heartbeats.  
2. **Throughput ≥ 10k req/s** – The system must sustain high arrival rates without queue buildup; otherwise latency spikes occur (queueing theory: \(L = \lambda W\)). This drives *horizontal scaling* and a *sharded publish/subscribe bus*.  
3. **Availability ≥ 99.999%** – Users expect comments to appear regardless of node failures, so the design must provide *stateless workers*, *replicated state stores*, and *automatic failover*.  
4. **Consistency (eventual)** – Comments should propagate in order per thread; this is achieved via *causal ordering* on a distributed log (e.g., Kafka) instead of strict ACID, trading off latency for scalability.  
5. **Security & Privacy** – Authentication tokens and rate‑limits prevent spam and abuse; encryption at rest/in transit protects user data.

#### Non‑obvious insight
The **“bounded‑delay” requirement is not a bandwidth problem but a *protocol* problem**: even with ample network capacity, TCP’s congestion control can introduce jitter. Using a lightweight protocol that keeps the connection alive (WebSocket) and employing *client‑side buffering* for bursts ensures latency stays below human perception thresholds without over‑provisioning hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
