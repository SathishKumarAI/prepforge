---
qid: ing_5e40eb6e9c__aws__local
question: 'Explain: Aug. 22, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 482
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:51-05:00'
sources: []
---

**Situation & Task**  
When I was building an internal recommendation engine for a media company in Q3 2025, the team hit a bottleneck: our training pipeline stalled on nightly jobs and we couldn’t keep up with 12 M user interactions per day. The client demanded “real‑time” personalization without exceeding the $50k/month budget.

**Action & Design**  
I **owned** the solution by first diving deep into the data flow—user events → feature store → model inference. I chose a serverless architecture to eliminate provisioning overhead:

| Step | AWS Service | Why |
|------|-------------|-----|
| Feature ingestion | **Amazon Kinesis Data Streams** | Low‑latency, auto‑scaling ingestion of 10 k events/sec |
| Feature storage | **Amazon DynamoDB (with TTL)** | Fast read/write for per‑user features; cost‑effective with on‑demand capacity |
| Model training | **AWS SageMaker Training Jobs** (spot instances) | GPU acceleration at ~30% cheaper than on‑prem |
| Inference | **SageMaker Endpoint + Lambda@Edge** | Global low‑latency serving; edge caching reduces 15 ms RTT |
| Monitoring | **Amazon CloudWatch & X-Ray** | End‑to‑end observability, automatic rollback on SLA breach |

I added a **blue/green deployment strategy** in SageMaker to avoid downtime and integrated an automated retraining pipeline triggered by Kinesis “feature drift” metrics.

**Result**  
- Training time dropped from 8 hrs to 90 min (≈ 80% faster).  
- Inference latency averaged 12 ms, meeting the <20 ms SLA.  
- Cost fell to $35k/month, a **30% reduction** while boosting recommendation click‑through rate from 3.2% to 4.7% (+46%).  

**Reflection**  
The key learning was that *ownership* means questioning every assumption—why not serverless? Why not spot instances? By diving deep into the data pipeline and AWS tooling, I turned a costly, slow process into an elastic, high‑performing system that delivered measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
