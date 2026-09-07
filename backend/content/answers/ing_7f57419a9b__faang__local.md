---
qid: ing_7f57419a9b__faang__local
question: 'Explain: Redundancy Across Layers — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 488
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:05-05:00'
sources: []
---

**Redundancy Across Layers – Availability in System Design**

| Phase | What to do | Why it matters |
|-------|------------|----------------|
| **Clarify** | *Problem*: How can we keep a service up‑to‑date when failures happen at any layer?  Assume: stateless workers, persistent storage, and multiple geographic zones. | Ensures we’re targeting the right layers (compute, network, data). |
| **Approach** | 1️⃣ Layered redundancy: <br>• *Infrastructure*: multiple AZs + health‑check routing.<br>• *Compute*: auto‑scaling groups with rolling upgrades.<br>• *Data*: synchronous replication + quorum reads/writes. <br>2️⃣ Use “active‑active” vs “active‑passive” based on latency tolerance. | Keeps each failure domain isolated and mitigates cascading outages. |
| **Depth** | - **Health checks & circuit breakers**: 3xx/5xx thresholds, back‑off logic.<br>- **Read/write quorums (e.g., Raft/Raft‑like)**: guarantees consistency while still serving reads from secondary nodes.<br>- **Blue/Green deployments**: zero‑downtime updates. Complexity: O(1) per request for routing; replication overhead ~O(N) writes. | Provides 99.999% uptime with minimal latency impact. |
| **Edge Cases** | • Simultaneous AZ failure → fall back to backup region.<br>• Data skew leading to hotspot nodes.<br>• Network partition: choose between *split‑brain* prevention or *fast fail‑over*. | Test by shutting down random layers and verifying service continuity. |
| **Optimize & Communicate** | • Cache hot data in edge CDNs to reduce cross‑AZ traffic.<br>• Use multi‑region write quorums for lower latency writes.<br>Explain trade‑offs: higher consistency → more replicas, slower writes; lower consistency → faster but risk of stale reads. | Narrate as a “resiliency ladder”: infrastructure → compute → data, each rung adding redundancy and reducing failure impact. |

*Result*: A multi‑layered redundancy strategy that balances cost, latency, and fault tolerance to achieve high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
