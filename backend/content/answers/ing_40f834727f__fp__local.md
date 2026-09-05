---
qid: ing_40f834727f__fp__local
question: When will a load balancer (LB) will stop sending requests to a server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 416
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:42-05:00'
sources: []
---

A load balancer (LB) ceases to forward traffic to a particular server when the *marginal utility* of serving an additional request falls below its *marginal cost*.  
In practice this manifests as one or more measurable thresholds:

| Metric | Why it matters | LB behavior |
|--------|----------------|-------------|
| **Health‑check failure** | The server cannot respond; any request would stall the client. | Immediate stop, until a successful probe returns. |
| **Queue length / back‑pressure** | Each queued request adds to latency linearly with queue size (M/M/1). When the expected wait time exceeds a target SLA, the LB drops traffic. | Gradual throttling as the queue grows. |
| **Latency spike** | High per‑request delay indicates congestion or resource exhaustion; adding more load will only worsen it. | Threshold‑based drop or weighted rebalancing. |
| **CPU/memory saturation** | The server’s processing capacity is breached; additional requests would increase response time without improving throughput. | Rebalance to other nodes. |

The underlying principle is *minimizing expected total latency* under a fixed resource budget—an instance of convex optimization where each server’s cost function is increasing in load.  
A subtle, often overlooked insight: **LBs that react too quickly to instantaneous metrics (e.g., a single high‑latency request) will oscillate**, sending traffic back and forth between nodes. A robust LB smooths metrics over time (exponential moving averages) so the decision reflects the *expected* marginal cost rather than transient noise. This ensures stability while still preventing overload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
