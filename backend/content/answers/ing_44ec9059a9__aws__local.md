---
qid: ing_44ec9059a9__aws__local
question: What Limits Throughput? — Latency vs Throughput vs Bandwidth | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 423
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:56-05:00'
sources: []
---

**Situation / Task**  
At a previous role I led the redesign of an ML inference service that served real‑time ad recommendations. The team had to lift latency from ~200 ms to <50 ms while maintaining throughput of 10K requests/s.

**Action (Technical)**  
1. **Profile & Dive Deep** – We instrumented request paths with CloudWatch and X-Ray, revealing the GPU inference container as a bottleneck (CPU saturation at 90 %).  
2. **Architectural change** – Switched to **Amazon SageMaker Endpoint** in *Multi‑Model* mode, auto‑scaling on CPU/GPUs via *Elastic Inference*.  
3. **Bandwidth & Queueing** – Added **AWS Lambda@Edge** to pre‑process payloads and push them into an **SQS FIFO queue**, decoupling client traffic from inference pods.  
4. **Cost & Availability trade‑off** – Employed Spot Instances for GPU workers, coupled with *Multi-AZ* deployment for resilience; paid $0.25/hr per GPU vs on‑demand $1.20/hr.

**Result (Quantified)**  
- Latency dropped 75 % to 48 ms.  
- Throughput increased 3× to 30K req/s.  
- Cost fell 60 % while maintaining 99.9 % availability.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering faster, cheaper recommendations directly improved CTR by 4%.  
- **Ownership & Bias for Action** – Took end‑to‑end ownership of the pipeline and iterated quickly using A/B tests.  

*Bar‑raiser takeaway:* clear ownership, deep profiling, data‑driven impact, and learning from a failed GPU‑monolithic approach to reach scalable, cost‑effective ML inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
