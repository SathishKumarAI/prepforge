---
qid: ing_a42accdf18__aws__local
question: 'Do I Need a Computer Science Degree? — The Real Product Manager Requirements:
  Your 2026 Hiring Blueprint'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 672
total_tokens: 913
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:41-05:00'
sources: []
---

**Customer Obsession & Ownership**

> *“I asked the question myself—do we really need a CS degree for a PM working on ML? If I answered ‘yes,’ would that keep us from hiring the best talent?”*  
> **Situation:** In 2024 our team was short‑listing candidates for an ML‑powered recommendation engine. The hiring board insisted on a CS background.  
> **Task:** Prove that product success depends more on domain expertise, data intuition, and stakeholder alignment than on formal CS training.  
> **Action:** I built a quick proof‑of‑concept (PoC) pipeline using **AWS SageMaker**, **Glue**, and **Lambda** to ingest user logs, train a LightGBM model, and expose predictions via API Gateway. I then ran an A/B test against the existing rule‑based engine—no CS skill required beyond basic Python scripting.  
> **Result:** The PoC increased click‑through by 18% (3 × the target) while cutting inference latency from 350 ms to 120 ms, all within a $1,200/month budget. I presented the metrics to leadership and they approved a new hiring rubric that values *“product ownership + data fluency”* over formal CS degrees.

---

### Technical/System Design

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Data ingestion | **Amazon Kinesis Data Streams** | Handles millions of events/sec, auto‑scales. |
| ETL & feature store | **AWS Glue + SageMaker Feature Store** | Serverless, cost‑effective, versioned features. |
| Model training | **SageMaker Ground Truth + Training Jobs** | Built‑in hyperparameter tuning; pay per hour. |
| Inference | **Lambda + API Gateway** | Zero‑capacity provisioning, 1 ms cold start with provisioned concurrency. |
| Monitoring | **CloudWatch + SageMaker Model Monitor** | Real‑time drift alerts, automatic retraining triggers. |

*Scalability:* Each service scales horizontally; Lambda limits can be increased to 10,000 concurrent executions.  
*Availability:* Multi‑AZ deployments for Kinesis & Glue; Lambda functions are stateless.  
*Cost trade‑offs:* Using serverless reduces idle capacity costs; we keep the total spend under $5k/month.

---

### What a Bar‑raiser Looks For

1. **Ownership:** I owned the PoC from concept to deployment and drove the metrics that mattered to business.  
2. **Dive Deep:** I quantified latency, cost, and engagement impact—no “good enough” numbers.  
3. **Quantified Impact:** 18% lift in CTR; $1,200/month spend; 120 ms inference.  
4. **Learning from Failure:** The first model drifted after a seasonal spike; we built an automated retraining pipeline that now prevents loss of performance.

> *Bottom line:* A CS degree is not a prerequisite for product success in ML—what matters is the ability to own data, experiment rapidly, and deliver measurable business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
