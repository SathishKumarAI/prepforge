---
qid: ing_5f34ff8187__faang__local
question: 'Explain: Load Balancing — A Cheat Sheet for Designing Fault-Tolerant Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 448
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:32-05:00'
sources: []
---

**Load‑Balancing in Fault‑Tolerant ML Pipelines**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal:* evenly distribute inference/ training jobs across servers while keeping the system resilient to node failures. <br>*Assumptions to confirm:* 1) stateless or sharded state, 2) traffic pattern (batch vs stream), 3) SLAs for latency & availability, 4) monitoring/alerting stack. |
| **Approach** | 1️⃣ Define service boundaries (model inference micro‑service). <br>2️⃣ Pick a load‑balancer type: round‑robin for stateless; consistent hashing or session stickiness for stateful shards. <br>3️⃣ Add health checks, circuit breakers, and retry logic. <br>4️⃣ Use autoscaling to adjust pool size dynamically. |
| **Depth** | • *Health‑check:* ping model endpoint + validate inference latency & error rate.<br>• *Circuit breaker:* open after N consecutive failures; fallback to a hot‑standby or degraded mode.<br>• *Retry policy:* exponential backoff with jitter, capped attempts.<br>• *Metrics:* request count, error %, response time percentiles. Complexity is O(1) per request for round‑robin; consistent hashing is O(log N). |
| **Edge Cases** | • Sudden traffic spike → autoscaler may lag: use burst capacity or pre‑warm nodes.<br>• “Thundering herd” on failover: stagger health‑check intervals.<br>• Partial failures in a multi‑model ensemble: graceful degradation. |
| **Optimize & Communicate** | *Improvements:* cache predictions locally, implement sharding with sticky sessions to reduce cross‑node lookups. <br>*Narration:* “By decoupling request routing from model logic and injecting health checks + circuit breakers, we guarantee high availability while keeping latency predictable.” |

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
