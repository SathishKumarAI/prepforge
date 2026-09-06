---
qid: ing_d4cee4f3ee__fp__local
question: 'Explain: Throughput vs Bandwidth — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 389
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:58-05:00'
sources: []
---

**Throughput, Bandwidth and Latency – the triad of data‑flow performance**

At the core of any distributed system is a *rate equation*:  
\( \text{Rate} = \frac{\text{Work}}{\text{Time}}\).  
*Bandwidth* is the *maximum* rate that the physical medium can sustain (bits/s). It is an upper bound imposed by physics and protocol overhead; no algorithm can exceed it.

*Throughput* is the *actual* achieved rate after accounting for queuing, contention, and protocol inefficiencies. It satisfies \( \text{Throughput} \leq \text{Bandwidth}\). The gap between them reflects resource contention and scheduling granularity.

*Latency* is a temporal cost per unit of work:  
\( \text{Latency} = \frac{\text{Time}}{\text{Work}}\).  
It captures the delay before any data can start moving, often dominated by startup costs (handshakes, context switches) rather than sustained transfer. In pipelined systems, a small latency allows many parallel streams to overlap; high latency forces each request to wait until the previous one finishes.

**Non‑obvious insight:**  
Increasing bandwidth does not always improve throughput if the workload is *latency‑bounded*. For bursty traffic or short messages, the scheduler’s queuing discipline (e.g., round‑robin vs priority) dominates. Thus, system designers must first classify workloads: **bandwidth‑bounded** (large, continuous streams) versus **latency‑bounded** (short, sporadic requests). Only then can they tune buffer sizes, flow control, and scheduling to move the point of operation from a bandwidth bottleneck to a latency one or vice versa.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
