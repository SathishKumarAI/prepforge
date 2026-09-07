---
qid: ing_1a56d111b4__aws__local
question: 'Explain: Um, if you can''t do that, then — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 402
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:25:52-05:00'
sources: []
---

**Situation & Task**  
When I joined Google Cloud’s AI Platform team, we had to migrate a legacy batch‑training pipeline (≈ 5 TB/day) into a fully managed, auto‑scaling system that would support real‑time inference for 200k concurrent users. The goal was to cut cost by 30 % while keeping latency < 50 ms.

**Action**  
*Ownership & Dive Deep*: I led a cross‑functional squad (data scientists, infra, security). We broke the monolith into microservices: data ingestion → *Apache Beam* on Dataflow, model training → *TPU Pods* via Vertex AI, and inference → *Cloud Run + Cloud Memorystore*.  
*Bias for Action & Invent*: Implemented a feature‑store in BigQuery that cached top‑k predictions, eliminating 60 % of compute. Added autoscaling policies based on request bursts detected by Cloud Monitoring alerts.  
*Cost & Availability*: Leveraged spot VMs for training and reserved instances for inference to hit the target cost. Deployed across three regions with global load balancer and health checks to guarantee ≥ 99.95 % availability.

**Result**  
- Latency dropped from 200 ms to **45 ms** (average).  
- Operational cost fell by **32 %**, exceeding our 30 % target.  
- Throughput increased from 5 TB/day to **12 TB/day** without added engineering effort.  

**Learnings**  
I realized the importance of *customer obsession*—continuous user feedback guided my prioritization, and *ownership* drove me to iterate on monitoring dashboards that now serve other teams. This project sharpened my ability to balance innovation with reliability, a lesson I bring to every AWS challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
