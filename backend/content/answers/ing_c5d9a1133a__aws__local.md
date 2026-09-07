---
qid: ing_c5d9a1133a__aws__local
question: 'Explain: Aug. 25, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 536
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:21-05:00'
sources: []
---

**Context (Situation)**  
When I joined the AI‑Ops team at Amazon Web Services in early 2024, we were tasked with building a real‑time recommendation engine for our partner’s e‑commerce platform. The client had a legacy data pipeline that ran nightly and lagged behind user activity by hours—a critical pain point for personalization.

**Task**  
My responsibility was to design an end‑to‑end system that ingested streaming clickstream data, trained lightweight models on the fly, and served predictions with sub‑200 ms latency, all while keeping the cost under 10% of their existing infrastructure spend.

**Action (Design & Implementation)**  
1. **Data Ingestion** – Used **Amazon Kinesis Data Streams** to capture events in real time and **AWS Lambda** for initial parsing.  
2. **Feature Store** – Employed **Amazon DynamoDB** with TTLs for per‑user context, ensuring high availability and low read latency.  
3. **Model Training & Serving** – Deployed a lightweight **XGBoost** model on **SageMaker Pipelines**; training jobs ran every 30 minutes using spot instances (cost savings ~35%).  
4. **Prediction Layer** – Leveraged **Amazon API Gateway + Lambda@Edge** for edge‑caching predictions, keeping latency <200 ms globally.  
5. **Observability & Scaling** – Integrated **CloudWatch Metrics** and **AWS X-Ray**; auto‑scaling rules adjusted based on request volume spikes during promotions.

**Result (Impact)**  
- Reduced recommendation latency from 3 minutes to 150 ms, increasing conversion rate by **12%** during peak sales.  
- Cut operational cost by **28%**, staying well below the 10% budget cap.  
- Achieved 99.95% availability across three regions, meeting SLA requirements.

**Reflection (Learnings & Bar‑raiser Signals)**  
I took full ownership of the pipeline from ingestion to serving, diving deep into Lambda limits and DynamoDB read/write capacity. When the first model failed to converge on a rare user segment, I introduced a fallback rule set—demonstrating bias for action and resilience. The experience reinforced that measurable impact comes from marrying customer obsession (faster recommendations) with rigorous data‑driven design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
