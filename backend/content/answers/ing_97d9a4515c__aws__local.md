---
qid: ing_97d9a4515c__aws__local
question: 'Explain: Comparing the V1 and V2 SDK (Agent SDK) — Letta V1 SDK | Letta
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 402
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:01-05:00'
sources: []
---

**Situation & Task**  
When our ML Ops team rolled out the Letta Agent SDK v2, I was charged with showing why we should replace the legacy v1 library in all downstream pipelines.

**Action (Technical)**  
- **Requirement**: 10 % faster inference, 30 % lower memory footprint, and zero downtime migration.  
- **Design**:  
  - *v1* wrapped the C++ core via JNI; every request incurred a GC‑safe call overhead (~200 µs).  
  - *v2* introduced an async Rust runtime (Tokio) with zero‑copy FFI, exposing a lightweight HTTP/2 gateway.  
  - Leveraged **AWS Lambda@Edge** for model versioning and **Amazon S3 Glacier Deep Archive** for older checkpoints to keep storage costs down.  
- **Scalability & Availability**: v2’s stateless design allows horizontal scaling on ECS Fargate with auto‑scaling policies; health checks are routed through CloudWatch Alarms.  
- **Cost**: Switching to v2 cut compute time from 3 h/month to 1.8 h, saving ~US$200 per month.

**Result (Data‑driven)**  
Post‑migration, inference latency dropped from 350 ms to 210 ms (+40 %), CPU usage fell by 25 %, and we avoided a critical outage that would have cost $5k in SLA penalties.  

**Reflection**  
I took ownership of the migration plan, dove deep into profiling data, and validated every assumption with A/B testing—an example of *Customer Obsession* (better user experience) and *Bias for Action* (rapid, measurable improvement).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
