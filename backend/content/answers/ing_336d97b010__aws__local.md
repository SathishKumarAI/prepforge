---
qid: ing_336d97b010__aws__local
question: 'Explain: of times already and he''s talked about — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 623
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:44-05:00'
sources: []
---

**Situation**  
At my previous firm we had a monolithic batch‑processing ML pipeline that ran nightly, producing ad‑campaign models for 200k users. The “one‑off” job caused stale predictions (up to 12 h lag) and high costs (≈$4K/day on EC2). I was tasked with modernizing the pipeline.

**Task**  
Re‑architect the ML workflow as an event‑driven system so that model updates, data ingestion, and inference happen in real time while keeping cost <30% of the legacy stack.

**Action**  
1. **Data Ingestion** – Captured raw clickstream events with Amazon Kinesis Data Streams (shard capacity 2 M records/sec).  
2. **Feature Engineering** – Triggered a Lambda function per record; it queried DynamoDB for user profile, enriched features, and pushed them to an SQS queue.  
3. **Model Training** – A Step Functions state machine orchestrated SageMaker training jobs that launched on-demand Spot instances (cost ↓ ≈ 70%).  
4. **Inference** – Deployed the model as a SageMaker Endpoint behind API Gateway; Lambda invoked it per event, returning real‑time scores to downstream ad services.  
5. **Observability & Scaling** – Integrated CloudWatch metrics and X-Ray tracing; auto‑scaling on Kinesis shard count kept latency <200 ms under peak load.

**Result**  
- Prediction freshness improved from 12 h to <2 min, boosting click‑through rate by **18%**.  
- Daily operational cost dropped from $4K to **$1.2K** (≈70% savings).  
- End‑to‑end latency averaged **180 ms**, meeting SLA for real‑time bidding.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered fresher recommendations that directly increased revenue.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility, dissecting every component to optimize cost and performance.

### Bar‑raiser Takeaways
- Demonstrated *quantified impact* (18% CTR lift, 70% cost reduction).  
- Showed *deep technical dive*: precise service choices, trade‑offs between Lambda vs EC2, Spot vs On‑Demand.  
- Learned from failure: initial trial with batch SageMaker jobs caused cold starts; pivoting to on‑demand endpoints fixed latency.

> **Key Insight** – Event‑driven architecture turns a rigid nightly pipeline into a responsive, cost‑efficient ML workflow that scales elastically and keeps the customer experience fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
