---
qid: ing_7da204695b__faang__local
question: 'Explain: Synchronous vs Asynchronous Replication — Availability | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:17-05:00'
sources: []
---

**Synchronous vs Asynchronous Replication – Availability in System Design**

| | **Synchronous Replication** | **Asynchronous Replication** |
|---|---|---|
| **Definition** | Every write must be acknowledged by a majority of replicas before the client sees success. | Writes are applied to the primary immediately; replicas catch up later. |
| **Latency** | Higher – client waits for network round‑trips to multiple nodes. | Lower – client gets instant ack from the primary. |
| **Consistency** | Strong (all replicas agree on the latest state). | Eventual – replicas may lag, leading to stale reads. |
| **Availability under failure** | If a majority of replicas are down, writes stall → lower availability. | Primary can continue serving; only read‑consistency is affected. |
| **Use cases** | Financial transactions, inventory systems where correctness trumps speed. | Social feeds, analytics pipelines where latency matters more than strict consistency. |

### When to choose

1. **Business rules demand strong guarantees** → go synchronous, accept higher latency.
2. **High write throughput & low latency are critical** → asynchronous; tolerate eventual consistency.
3. **Geographically distributed services** → often mix: sync within a data center, async across regions.

### Trade‑offs to communicate

- *Availability vs. Consistency* (CAP theorem): synchronous favors consistency and partition tolerance but sacrifices availability during splits.
- *Recovery cost*: async requires conflict resolution logic (last‑write-wins, CRDTs) which can be complex.
- *Operational overhead*: sync needs robust quorum management; async needs efficient log shipping & replication monitoring.

### Quick decision checklist

| Requirement | Sync? | Async? |
|---|---|---|
| Low read latency | ❌ | ✅ |
| Strong consistency | ✅ | ❌ |
| High write throughput | ❌ | ✅ |
| Tolerate replica lag | ❌ | ✅ |

**Bottom line:** Choose synchronous when correctness is paramount and you can tolerate higher latency; otherwise, asynchronous replication offers better availability at the cost of eventual consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
