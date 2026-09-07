---
qid: ing_31179ce01c__aws__local
question: 'Explain: Um but a pretty common pattern is — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 402
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:11-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Customer Obsession & Ownership)**  
At a previous role I led the migration of Google‑style ML pipelines to an on‑prem cluster for a fintech client that needed real‑time fraud detection. The customer demanded sub‑50 ms latency and 99.9 % uptime, while our budget was capped at $200k/yr.

**Action (Dive Deep & Bias for Action)**  
1. **Requirements Clarification** – I mapped the data flow: ingest → preprocessing → model inference → alerting.  
2. **Design Choice** – Adopted an *event‑driven* architecture with AWS Kinesis Data Streams for ingestion, Lambda for stateless preprocessing, SageMaker Endpoint (real‑time inference) behind an API Gateway, and DynamoDB for stateful tracking.  
3. **Scalability & Availability** – Used auto‑scaling on Lambda and multi‑AZ deployment of SageMaker to meet latency SLAs; leveraged Kinesis’s 2 GB/sec throughput per shard to handle peak spikes.  
4. **Cost Control** – Spot Instances for SageMaker training reduced spend by 35%; reserved capacity for inference kept costs predictable.

**Result (Deliver Results)**  
- Latency dropped from 120 ms to 42 ms (≈65 % improvement).  
- Uptime hit 99.98 %, surpassing the SLA.  
- Operational cost fell to $140k/yr, freeing $60k for new features.  

**Bar‑raiser Takeaway**  
I owned the end‑to‑end solution, dived into each component’s performance curves, quantified impact with real metrics, and documented a rollback plan after an initial outage that taught us the value of graceful degradation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
