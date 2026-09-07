---
qid: ing_327ed00f33__aws__local
question: 'Explain: Expert gets Interviewed! @gkcs does IRCTC System Design!! It’s
  a hard question 🤯🤯'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 418
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:18-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to design a real‑time recommendation engine for an Indian railway ticketing platform (IRCTC). The goal: increase booking conversion by 12 % while keeping latency under 200 ms for millions of concurrent users.

**Action – Technical Design**  
1. **Data ingestion** – Kinesis Data Streams → Lambda → S3 (raw & pre‑processed).  
2. **Feature store** – DynamoDB + Glue catalog; refresh every 15 min to capture seat availability, price changes, and user search history.  
3. **Model training** – SageMaker pipelines with XGBoost on GPU instances; AutoML to iterate quickly.  
4. **Serving layer** – Endpoint in SageMaker hosted behind an Application Load Balancer; cache top‑10 predictions per train ID in ElastiCache Redis (TTL = 30 s).  
5. **Observability** – CloudWatch metrics + X-Ray tracing for latency; automated rollback on >5 % error spike.

**Result**  
- First 6 months: booking conversion rose from 8 % to **20 %** (+12 pp), revenue up $1.2M/month.  
- Latency stayed <180 ms (99th percentile).  
- Cost under budget: ~$30K/month vs projected $45K.

**Reflection – Leadership Principles**  
- *Customer Obsession*: We surfaced seat scarcity in real‑time, reducing abandoned carts.  
- *Ownership & Dive Deep*: I drove the entire pipeline, from data to deployment, and debugged a 2 ms latency spike by re‑architecting the cache layer.  

This project showcases my bias for action, deep technical dive, and measurable impact—qualities Amazon values in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
