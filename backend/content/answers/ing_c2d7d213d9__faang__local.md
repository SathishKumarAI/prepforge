---
qid: ing_c2d7d213d9__faang__local
question: 'Explain: Measuring Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 570
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:58-05:00'
sources: []
---

**Clarify**  
You’re asking how to quantify *latency* in a ML system and how it differs from *throughput* and *bandwidth*.  
Assumptions: we’re measuring an inference‑oriented pipeline (GPU/CPU cluster), not training, and metrics are taken under realistic load.

---

**Approach**  
1. Define each metric mathematically.  
2. Explain the operational meaning for ML workloads.  
3. Show how to measure them with instrumentation.  
4. Discuss trade‑offs and when one dominates the other.

---

**Depth**  

| Metric | Formula | What it captures in ML |
|--------|---------|-----------------------|
| **Latency** | `L = t_end – t_start` (per request) | Time from input arrival to output delivery; critical for real‑time inference. |
| **Throughput** | `T = N / total_time` (requests/sec) | How many inferences can be processed per unit time; important for batch or high‑volume services. |
| **Bandwidth** | `B = data_size / total_time` (bytes/s) | Data movement rate across network or disk, often a bottleneck when models are huge. |

*Measurement*: use distributed tracing (e.g., OpenTelemetry), sample request timestamps at ingress and egress, aggregate per‑request latencies to compute mean/95th percentile; count completed inferences over a window for throughput; monitor IO counters for bandwidth.

*Trade‑offs*:  
- Reducing latency often requires more parallelism → lower per‑instance throughput.  
- Maximizing throughput may batch requests, increasing latency but improving GPU utilization.  
- Bandwidth limits can force sharding models or compressing tensors.

---

**Edge Cases**  

- **Cold starts**: first request latency inflated by container spin‑up; measure steady‑state separately.  
- **Variable input sizes**: larger inputs increase bandwidth cost → skew throughput if not normalized.  
- **Skewed workloads**: a few long requests can dominate mean latency; report percentiles.

---

**Optimize & Communicate**  

1. Profile each stage (preprocess, model inference, post‑process).  
2. Use GPU‑aware batching to hit the sweet spot between latency and throughput.  
3. Offload heavy I/O to SSD or network fabric to raise bandwidth.  
4. Present results as a *latency–throughput trade‑off curve* to stakeholders, explaining how scaling decisions move along that curve.

This structured view satisfies FAANG interviewers: clear restatement, systematic plan, precise technical depth, awareness of edge cases, and actionable optimization insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
