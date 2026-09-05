---
qid: ing_0191b1b027__fp__local
question: Which Pattern Should You Choose? — Design Load Balancer | System Design
  Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 534
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:08:28-05:00'
sources: []
---

**Why a Load Balancer Matters**

The core problem is to **distribute incoming requests among a set of stateless servers while guaranteeing high availability and low latency**.  
A good design must satisfy two opposing constraints:

1. *Throughput*: each request should be forwarded immediately, otherwise the queue grows.
2. *Fairness & fault‑tolerance*: no single server becomes a bottleneck or a single point of failure.

These constraints translate into an **online optimization problem**: minimize the maximum load over all servers given that requests arrive in real time and servers can fail at any moment.

---

### Choosing a Pattern

| Pattern | When It Succeeds | Why It Works |
|---------|------------------|--------------|
| **Round‑Robin (RR)** | *Uniform, low‑cost traffic* | Simple counter; asymptotically equal load if requests are homogeneous. |
| **Least Connections (LC)** | *Bursty or heterogeneous requests* | Dynamically probes server load; approximates optimal load balance under Poisson arrivals. |
| **Weighted RR / LC** | *Servers with differing capacities* | Adds a weight factor, preserving the simplicity of RR while respecting heterogeneity. |
| **Consistent Hashing (CH)** | *Stateful sessions or caching* | Keeps a request routed to the same server unless that server dies; minimizes cache misses during failures. |

---

### Non‑Obvious Insight

**The “sticking” effect of consistent hashing is often misinterpreted as a disadvantage.**  
When a server fails, only the keys mapped to it are remapped, not all. This localizes traffic redistribution and keeps the *entropy* (information spread) high—an essential property for distributed caching. In contrast, RR forces every request to be redistributed, which can create hot spots in caches.

---

### Bottom Line

- Use **RR** for simple, homogeneous workloads.
- Switch to **LC** (or weighted variants) when traffic is bursty or servers differ.
- Opt for **CH** only if you need *session stickiness* or *distributed caching* and can tolerate a slightly higher latency during rebalancing.

The pattern choice should be guided by the *objective function* of your system: throughput, fairness, fault‑tolerance, or cache locality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
