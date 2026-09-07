---
qid: ing_c07b5c2105__faang__local
question: 'Explain: Notes — Which Latency Numbers Should You Know?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 479
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:23-05:00'
sources: []
---

**Clarify**  
You’re asking which latency metrics matter when evaluating an ML system (e.g., inference API, model training pipeline). Clarifying: *Is the focus on end‑to‑end request time, per‑step delays, or hardware‑level latencies?* Also confirm whether real‑time constraints (e.g., <50 ms for recommendation) or batch throughput are the priority.

**Approach**  
1. Identify the pipeline stages: client→network→load balancer→model server→GPU/CPU→response.  
2. For each stage, decide if absolute latency or relative change is critical.  
3. Prioritize metrics that directly impact user experience or cost (e.g., request‑level SLA, GPU idle time).

**Depth**  
- **End‑to‑end Latency (request latency)**: total time from client send to response receipt; the primary KPI for SLAs.  
- **Inference Latency**: time spent inside the model server on a single inference; critical when scaling horizontally.  
- **Queuing/Backlog Latency**: delay before a request starts processing, often the bottleneck in bursty traffic.  
- **Batch Latency vs Throughput**: trade‑off between per‑sample latency and overall throughput; important for training jobs.  
- **Hardware Utilization Latency**: GPU idle time or memory stalls; affects cost efficiency.

Complexity: measuring all stages requires distributed tracing (e.g., OpenTelemetry). Trade‑offs involve instrumentation overhead vs granularity.

**Edge Cases**  
- *Cold starts*: first request latency can be orders of magnitude higher.  
- *Model drift*: increased inference time if model size grows.  
- *Network jitter*: masks underlying compute performance.  
Test with synthetic load, varying batch sizes, and edge device simulators.

**Optimize & Communicate**  
Explain that focusing on end‑to‑end latency aligns with user SLAs; breaking it down lets you target the slowest stage (often queuing). Use A/B testing to validate optimizations. Conclude by recommending continuous monitoring of all listed metrics, correlating them with business KPIs, and automating alerts when thresholds are breached.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
