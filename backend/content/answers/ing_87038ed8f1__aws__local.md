---
qid: ing_87038ed8f1__aws__local
question: 'Explain: AI Engineering — System Design Academy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 408
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I built a production‑grade ML inference platform for a global retailer that served 200 M daily page views. **Leadership Principles:** *Customer Obsession* – we cut latency to under 50 ms so shoppers saw recommendations instantly; *Ownership* – I led cross‑functional squads, drove the architecture and hand‑rolled the CI/CD pipeline.

**Situation / Task**  
The legacy batch‑job model produced predictions every 12 h. Users complained about stale suggestions. My goal: shift to real‑time inference with zero downtime while keeping cost ≤ $2M/yr.

**Action**  
1. **Requirements & Design** – Stateless microservice in AWS Lambda, containerized via Amazon ECS Fargate for burstable traffic.  
2. **Model Serving** – Deployed TensorFlow models on SageMaker endpoints behind an Application Load Balancer; auto‑scales based on CPU/Memory metrics.  
3. **Data Pipeline** – Real‑time feature store in DynamoDB with TTL, updated via Kinesis Data Streams from clickstream logs.  
4. **Observability** – CloudWatch Alarms + X-Ray tracing for latency; SageMaker Model Monitor for drift.  

**Result**  
- Latency dropped from 2 s to < 50 ms (95th percentile).  
- Recommendation CTR rose 12% (≈ $3M incremental revenue per quarter).  
- Operational cost fell 18% by replacing on‑prem GPU clusters with Spot instances.

**Bar‑raiser cues** – I owned the end‑to‑end solution, dove deep into latency bottlenecks, quantified business impact, and learned from a failed model drift incident that led to an automated retraining workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
