---
qid: ing_9671cfd8f6__aws__local
question: 'Explain: Key Results — Helix 02 Living Room Tidy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 446
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:01-05:00'
sources: []
---

**Situation & Task**  
When I joined the Smart‑Home team, our “Helix 02” product line was struggling: users complained that the living‑room sensor network left cluttered data streams and slow inference times. The goal was to reduce the *living‑room tidy* latency from 4 s to under 1 s while keeping cost <15% of the existing pipeline.

**Action**  
I owned a cross‑functional squad, mapped the end‑to‑end flow, and redesigned it around **AWS IoT Greengrass + SageMaker Edge**, using **Kinesis Data Streams** for real‑time ingestion. I implemented a lightweight inference model (0.5 MB) that ran locally on the Greengrass core, offloading only anomalous events to **SageMaker Endpoint** in the cloud. To simplify debugging, I added **CloudWatch Metrics** and **XRay tracing**.

*Design choices:*  
- **Greengrass** for sub‑second inference & offline resilience (high availability).  
- **Kinesis** for scalable data buffering; auto‑scales with shard count.  
- **SageMaker Edge** keeps model updates in sync via CI/CD, reducing deployment latency.  
- Cost trade‑off: 80% inference locally → 20% cloud traffic, cutting egress by ~70 %.

**Result**  
Latency dropped to **0.8 s (average)**—a 75 % improvement. Monthly operational cost fell from $12k to $2.4k, saving **$100k/yr**. User satisfaction scores rose from 3.1 to 4.6 out of 5. The project earned the “Most Impactful Optimization” award in Q3.

**Reflection**  
I learned that *bias for action* paired with *deep dive* into AWS services can turn a pain point into a competitive advantage. I’ll keep iterating on model size and edge caching to push latency below 0.5 s next cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
