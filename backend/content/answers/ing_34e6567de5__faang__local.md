---
qid: ing_34e6567de5__faang__local
question: 'Explain: High Availability Patterns — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 633
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:08-05:00'
sources: []
---

**High‑Availability (HA) Patterns – Availability & System Design**

| # | Clarify | Approach | Depth | Edge Cases | Optimize & Communicate |
|---|---------|----------|-------|------------|------------------------|
| **1** | *Problem*: “Explain HA patterns for availability.” | • Define *availability* as the probability a system serves requests when needed.<br>• Identify key HA strategies: active‑active, active‑passive, sharding, replication, load balancing, graceful degradation. | • **Active‑Passive (Hot Standby)** – identical nodes, one active, one idle; failover via health checks (e.g., EC2 Auto Scaling + Route 53 latency routing).<br>• **Active‑Active (Multi‑Region/Zone)** – traffic split across regions; use global load balancers (CloudFront, Azure Front Door) and conflict‑free replicated data stores (Cassandra, DynamoDB).<br>• **Sharding & Replication** – partition data horizontally; replicate each shard to multiple nodes; use quorum reads/writes for consistency vs. latency trade‑offs.<br>• **Graceful Degradation** – expose “read‑only” or “cached” APIs when backend services are down; return cached responses or reduced feature set. | • Single point of failure in DNS cache.<br>• Split‑brain scenarios if region fails mid‑split.<br>• Latency spikes during failover due to cold starts.<br>• Data staleness vs. consistency (CAP theorem). | • Use health‑check heartbeats + circuit breakers; auto‑scale on CPU/latency thresholds.<br>• Prefer “read replicas” for high read traffic, “write‑through cache” for low write latency.<br>• Document failover scripts and run regular chaos‑engineering drills. |
| **2** | *Assumptions*: 99.999% SLA, multi‑region deployment, stateless microservices, eventual consistency acceptable. | • Map requirements to patterns above; choose active‑active with read replicas for high write traffic, graceful degradation for legacy clients. | • Complexity: O(log n) routing via consistent hashing; cost trade‑off: double infrastructure vs. 5‑nines reliability. | • Test region outage simulation, cache eviction under load, latency thresholds during failover.<br>• Validate that read replicas stay within acceptable lag (<1 s). | • Communicate trade‑offs clearly to stakeholders: “We’ll accept eventual consistency to achieve sub‑200 ms latency; in the rare event of a full region loss we fall back to cached responses for 30 seconds.” |

**Takeaway:** HA is not a single pattern but a portfolio—combine active‑active replication, sharding, load balancing, and graceful degradation. Measure availability with MTBF/MTTR, and iterate by simulating failures to ensure your system meets the target SLA while staying cost‑efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
