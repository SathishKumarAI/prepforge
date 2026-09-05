---
qid: ing_1a6bed493b__fp__local
question: 'Explain: Concurrent Connections — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 335
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:02:29-05:00'
sources: []
---

**Concurrent Connections – Why a Load Balancer Must Be *Connection‑Aware***  

When a client opens a TCP socket, the server must decide where that session will run. If every request were routed by a simple round‑robin hash, a single “hot” node could receive a flood of short requests while another idle node sits empty. The fundamental problem is *fairness under bursty traffic*: we need to keep all workers saturated without overloading any one.

A connection‑aware balancer solves this by treating each open socket as a unit of capacity. Each backend reports its **current active connections** (or an estimate such as “queue length + in‑flight requests”). The balancer selects the node with the smallest value, optionally applying a *weight* to reflect hardware differences. This greedy policy is essentially the classic *online load balancing* problem; the greedy algorithm guarantees that the maximum load differs from optimal by at most one request (the *greedy–online bound*).

A subtle insight: **latency is not proportional to active connections** when requests vary in size or CPU demand. Therefore, a hybrid metric—e.g., `connections × avg_request_time`—often yields better balance. Most designs ignore this and use raw counts, causing tail latency spikes.

In short, a concurrent‑connection load balancer turns the opaque “how many sockets” into an actionable metric that aligns with information theory (minimizing uncertainty about queue lengths) and geometric load distribution (balancing points in a high‑dimensional capacity space).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
