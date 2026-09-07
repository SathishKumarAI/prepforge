---
qid: ing_c07b5c2105__aws__local
question: 'Explain: Notes — Which Latency Numbers Should You Know?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:03-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to benchmark an end‑to‑end ML pipeline for a fintech app that needed sub‑200 ms predictions for fraud detection. The leadership team wanted clear latency targets for each stage so we could prioritize engineering effort.

**Action**  
I scoped the workflow: data ingestion → feature store → SageMaker endpoint → post‑processing. Using **AWS CloudWatch Metrics**, **X-Ray tracing**, and a synthetic load generator I measured:

| Stage | Typical Latency (ms) | Target |
|-------|----------------------|--------|
| Ingestion (Kinesis → Lambda) | 15 ± 5 | <30 |
| Feature Store Query (DynamoDB / FSx) | 35 ± 10 | <50 |
| SageMaker Inference (Batch/Real‑time) | 180 ± 20 | <200 |
| Post‑processing (Step Functions) | 25 ± 8 | <40 |

I introduced **SageMaker Real‑Time Endpoint autoscaling** and moved cold starts to a warm pool, cutting inference latency from 280 ms to 170 ms (+39 %). I also added an edge‑caching layer with **CloudFront + Lambda@Edge** for the most frequent queries, shaving 30 ms off the total path.

**Result**  
We achieved a 92 % reduction in SLA violations (from 5.3 % to 0.4 %) and increased throughput by 1.8× while keeping costs under the budgeted $12k/month. The team now tracks these latency buckets as KPIs, enabling proactive capacity planning.

**Learnings**  
*Ownership*: I owned the full observability stack.  
*Dive Deep*: Identified the cold‑start bottleneck in SageMaker.  
*Bias for Action*: Rolled out warm pools and edge caching within a week.  

This approach aligns with **Customer Obsession**, **Deliver Results**, and demonstrates the depth bar‑raisers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
