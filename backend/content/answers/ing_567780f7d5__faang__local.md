---
qid: ing_567780f7d5__faang__local
question: 'Explain: Availability patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 717
total_tokens: 986
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:14-05:00'
sources: []
---

**Availability Patterns – A Quick System‑Design Primer**

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | *Restate:* “Explain the different ways a system can guarantee high availability, especially for ML services.”<br>*Assumptions:* We’re talking about stateless/model‑serving endpoints, multi‑region deployment, and typical SLAs (e.g., 99.9%). | Sets scope & ensures we address all relevant patterns. |
| **Approach** | 1️⃣ Identify core availability patterns: *Active‑Standby*, *Multi‑Region*, *Sharding + Replication*, *Circuit Breaker*, *Graceful Degradation*.<br>2️⃣ For each, outline the trade‑offs (latency vs consistency, cost vs complexity).<br>3️⃣ Map patterns to ML workloads (model inference, training pipelines, data ingestion). | Gives a roadmap before diving into details. |
| **Depth** | • **Active‑Standby**: One active node; replicas in sync via streaming logs. Low latency, single point of failure until failover triggers.<br>• **Multi‑Region**: Deploy identical services in ≥2 regions, use global load balancer (e.g., Cloud CDN). Handles regional outages but increases eventual consistency risk.<br>• **Sharding + Replication**: Partition data/model weights across shards; each shard replicated to a hot/cold replica. Balances load and provides redundancy.<br>• **Circuit Breaker**: Detect failing model endpoints, redirect traffic to fallback models or cached predictions. Prevents cascading failures.<br>• **Graceful Degradation**: When resources dip, serve lower‑fidelity models (e.g., linear vs deep). | Complexity: Active‑Standby O(1) latency; Multi‑Region adds ~10–20 ms cross‑region RTT; Sharding + Replication increases write amplification but improves read throughput. |
| **Edge Cases** | • Network partitions between regions.<br>• Model version drift during failover.<br>• Cold start latency for large models.<br>• Sudden traffic spikes (burst) exceeding replica capacity. | Tests: simulate region outage, rapid scaling, model update rollouts. |
| **Optimize & Communicate** | • Use **Canary releases** to validate new replicas before full cut‑over.<br>• Cache predictions in a CDN for latency‑critical use cases.<br>• Employ **gRPC with HTTP/2 multiplexing** to reduce per-request overhead.<br>Explain that the chosen pattern depends on SLA, cost budget, and data consistency needs. | Narrate trade‑offs clearly: “If we prioritize 99.999% uptime over strict consistency, a multi‑region active‑active design is best; if model fidelity must never drop, we lean toward active‑standby with fast failover.” |

**Key Takeaway:**  
Availability patterns are not one‑size‑fits‑all; they’re architectural choices that balance latency, consistency, cost, and resilience. In ML systems, pairing the right pattern (e.g., multi‑region for inference, sharding + replication for training data) with smart tooling (circuit breakers, graceful degradation) delivers robust, scalable services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
