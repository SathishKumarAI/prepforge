---
qid: ing_2b14e10a5e__aws__local
question: 'Explain: Latency — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 432
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:35-05:00'
sources: []
---

**Situation (S)**  
I led a project at my previous company to reduce the latency of an AI inference service that powered real‑time recommendation requests. The end‑to‑end latency was 120 ms on average, but our growth target required <30 ms for 95 % of traffic.

**Task (T)**  
Re‑architect the inference pipeline so that it meets the new SLA while keeping cost under budget and preserving accuracy.

**Action (A)**  
1. **Profiling & Dive Deep** – Instrumented the service with CloudWatch and X-Ray, discovering that ~70 % of latency came from CPU‑bound model loading and a 50 ms serialization step.  
2. **Serverless + Edge** – Deployed the model as an Amazon SageMaker endpoint behind an AWS Lambda “warm‑up” layer, and added a CloudFront edge cache for pre‑computed embeddings.  
3. **Batching & Asynchronous Queues** – Implemented SQS FIFO queues to batch inference requests (max 10 per batch), cutting CPU cycles by ~30 %.  
4. **Cost & Availability Trade‑off** – Used SageMaker *On-Demand* instances for burst traffic and *Reserved Instances* for baseline, achieving a 25 % cost saving versus the previous EC2 cluster while maintaining 99.9 % uptime.

**Result (R)**  
Latency dropped from 120 ms to **28 ms** on average, with 97 % of requests below 30 ms. Monthly inference cost fell by **$12K** (≈25 %) and the system now scales elastically during flash sales without manual intervention.  

*Leadership Principles:* **Customer Obsession** – delivered a faster user experience; **Ownership** – drove end‑to‑end optimization; **Dive Deep** – identified root causes; **Bias for Action** – deployed quickly using managed services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
