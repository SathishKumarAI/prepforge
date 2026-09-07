---
qid: ing_4c7f579d83__aws__local
question: 'Explain: Now what that would do is it — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 607
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:18:04-05:00'
sources: []
---

**Situation (S)**  
In my last role I was tasked to build a real‑time traffic prediction layer for an on‑demand delivery platform that served 1 M active users daily. The goal was to reduce average delivery time by 15% and increase driver utilization.

**Task (T)**  
I had to design a system that ingests live GPS data, trains short‑term ML models per region, and serves predictions with <200 ms latency while scaling to peak traffic spikes of 50k concurrent updates.

**Action (A)**  
1. **Data pipeline:** Used **Amazon Kinesis Data Streams** for ingesting ~10 M events/day, then routed to **AWS Lambda** for lightweight preprocessing.  
2. **Feature store & training:** Persisted features in **DynamoDB** (partition key = region) and triggered nightly model retraining via **Amazon SageMaker Pipelines** (using XGBoost). Models were stored in **S3** and version‑controlled with **AWS CodeCommit**.  
3. **Inference layer:** Deployed models as **SageMaker Real‑Time Endpoints** behind an **Application Load Balancer**; each endpoint served ~200 req/s with 90th‑percentile latency <150 ms. Auto‑scaling was driven by CloudWatch metrics (CPU, request count).  
4. **Cost & availability:** Leveraged **SageMaker Managed Spot Training** to cut training costs by 70%. For high availability, replicated endpoints across two AZs and used Route 53 health checks.

**Result (R)**  
- Delivery time dropped from 28 min to 24 min (≈14% improvement).  
- Driver utilization rose from 65% to 78%, boosting revenue per driver by $120k annually.  
- System cost remained under the forecasted $200k/month, with a 30% reduction in training spend after adopting Spot Training.

---

### Leadership Principles Highlighted
- **Ownership** – I led cross‑functional teams and drove the end‑to‑end solution from data ingestion to production deployment.  
- **Dive Deep** – Chose AWS services based on latency, cost, and scalability trade‑offs; iterated on model hyperparameters until performance met SLA.

### What a Bar‑raiser Looks For
- Clear ownership narrative and measurable impact.  
- Depth in technical choices (Kinesis vs Kinesis Data Firehose, SageMaker vs EC2).  
- Demonstrated learning from failure: after an initial 400 ms latency spike, I profiled the Lambda function, reduced payload size, and re‑architected to use EventBridge for throttling.

**Takeaway:** By coupling AWS managed services with rigorous metrics, we built a scalable, low‑latency ML inference layer that delivered tangible business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
