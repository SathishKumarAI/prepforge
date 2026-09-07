---
qid: ing_65243b5fc2__aws__local
question: 'Explain: Uh we also run something I''m not — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 376
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:28-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at Google, we built a real‑time recommendation engine that served 12 M daily users. My role was to design the ML pipeline, guarantee low latency, and keep costs under $2 M/month.

**Action**  
* **Ownership + Bias for Action** – I mapped data flow from Pub/Sub → Dataflow → BigQuery → Vertex AI → Cloud Functions, then re‑engineered it in AWS.  
* **Dive Deep** – I profiled latency hotspots (30 ms per request) and discovered that synchronous model serving on GKE caused 15 % CPU waste.  
* **AWS design** – Switched to SageMaker Endpoint + Lambda + API Gateway. Added **Step Functions** for retry/back‑off, and **S3** for feature store.  
* Implemented automated A/B testing with CloudWatch metrics; achieved a 0.8 % lift in click‑through rate (CTR) while cutting inference cost by 38 %.  

**Result**  
* Served 12 M users with <25 ms latency, 99.9 % uptime.  
* Reduced monthly spend from $2.5 M to $1.6 M (−36 %).  
* Delivered a reusable “ML‑Ops Blueprint” that other teams adopted, improving deployment velocity by 4×.

**Learning & Bar‑Raiser Check**  
I documented trade‑offs between on‑prem GPU clusters vs SageMaker, showing cost/scale curves; this transparency helped the bar‑raiser assess my ownership and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
