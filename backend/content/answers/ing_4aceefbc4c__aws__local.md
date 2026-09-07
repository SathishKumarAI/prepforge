---
qid: ing_4aceefbc4c__aws__local
question: 'Explain: Technical screens — Cursor Software Engineer Interview Guide |
  Sample Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 551
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:27-05:00'
sources: []
---

**Context & Leadership Principles**  
*Customer Obsession / Ownership*: I led a cross‑functional team to build an ML‑driven recommendation engine that directly improved the user experience on our e‑commerce platform.

**Situation (S)**  
In Q1 2026, our product team reported a 12 % drop in conversion rate during the holiday season. The hypothesis was that stale recommendations were hurting relevance.

**Task (T)**  
My goal: design an end‑to‑end ML pipeline that could ingest real‑time clickstream data, train personalized models weekly, and serve predictions with < 200 ms latency to 10M daily active users.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Data ingestion | **Amazon Kinesis Data Streams** | Low‑latency stream of click events |
| Feature store | **AWS Glue + DynamoDB** | Persist engineered features, fast reads |
| Training | **SageMaker Processing & Training jobs** on Spot instances | Cost‑effective compute; autoscaling |
| Model registry | **SageMaker Model Registry** | Version control and lineage |
| Inference | **SageMaker Endpoint (Multi‑Model)** + **AWS Lambda** for request routing | 200 ms SLA, auto‑scaling |
| Monitoring | **Amazon CloudWatch & SageMaker Model Monitor** | Drift detection, A/B testing |

I added a *canary* deployment with AWS AppConfig to roll out the new model to 1 % of traffic first. If latency exceeded 250 ms or conversion fell > 2 %, the rollout paused automatically.

**Result (R)**  
Within two weeks of full launch:  

- **Conversion rate rose by 9 %**, offsetting the prior decline and generating an estimated $3.6M incremental revenue over the season.  
- **Latency stayed at 180 ms on average**, meeting SLA.  
- **Cost per recommendation** dropped 18 % thanks to Spot usage.

**Learnings & Bar‑raiser cues**  

*Ownership*: I took end‑to‑end responsibility, from data capture to post‑deployment monitoring.  
*Dive Deep*: I quantified latency, cost, and conversion impact; iterated on feature selection based on SHAP values.  
*Bias for Action*: Rapid canary rollout mitigated risk while delivering value quickly.  

This demonstrates Amazon’s focus on customer obsession, ownership, and measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
