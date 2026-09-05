---
qid: ing_5a29fa00f4__star__local
question: 'Explain: The Cost of Context Switching — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 384
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:01-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time analytics dashboard for IoT sensor data. The backend ingested ~10 k events per second and had to compute rolling averages and anomaly scores before pushing updates to the UI. Our initial implementation used a single thread that processed each event sequentially, which caused latency spikes during traffic bursts.

**Task:**  
I needed to reduce end‑to‑end latency below 200 ms while keeping CPU utilization under 70% on our existing hardware. The goal was to decide whether to add more threads (concurrency) or split the workload across multiple cores (parallelism).

**Action:**  
First, I profiled the application and found that context switches were occurring every ~1 ms due to heavy use of a thread‑pool for I/O tasks. Switching cost was adding 50–80 µs per switch, which added up during peak load. I restructured the pipeline into three stages: ingestion, transformation, and aggregation. Each stage ran on its own dedicated goroutine pinned to a specific core using Go’s `runtime.LockOSThread`. I also introduced lock‑free queues (channels with preallocated buffers) between stages to avoid blocking. By reducing unnecessary context switches and exploiting data locality, the system turned into true parallelism.

**Result:**  
Latency dropped from 350 ms to 140 ms during peak traffic, CPU usage stayed at ~55%, and the throughput increased by 35%. I learned that while concurrency can help hide I/O latency, excessive thread churn incurs significant context‑switch overhead; true parallelism with careful core affinity often yields better performance for compute‑bound workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
