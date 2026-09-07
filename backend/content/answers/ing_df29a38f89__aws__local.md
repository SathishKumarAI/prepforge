---
qid: ing_df29a38f89__aws__local
question: 'Explain: Key structures — Architecture in brief'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 428
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:07-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at an e‑commerce startup to build an end‑to‑end ML pipeline that predicted customer churn. The goal was to reduce churn by 15 % within six months.

**Action (Architecture)**  
- **Data ingestion**: Kinesis Data Streams → Lambda → S3 landing zone (raw + curated).  
- **Feature store**: DynamoDB + SageMaker Feature Store for real‑time lookups; batch feature engineering in Glue ETL jobs.  
- **Model training & serving**: SageMaker Pipelines orchestrated with Step Functions, training on Spot instances (cost ↓ 30 %). Models served via SageMaker Endpoints behind API Gateway, auto‑scaling based on CloudWatch metrics.  
- **Monitoring**: Evidently for drift + custom CloudWatch dashboards; automated retraining triggers when MAE > 0.05.

**Result**  
- Reduced churn from 8.4 % to 7.1 % (15 % lift).  
- Cost per inference dropped from $0.12 to $0.07, saving ~$300k annually.  
- Model latency < 120 ms, meeting SLA for real‑time personalization.

**Leadership Principles Highlighted**  
- **Customer Obsession** – built a system that directly improved user retention.  
- **Ownership & Dive Deep** – architected every layer (data lake, feature store, training, serving) and tuned cost/latency trade‑offs.

**Bar‑raiser takeaways**  
- Demonstrated ownership by delivering measurable business impact.  
- Showed depth through explicit AWS service choices and cost/scale reasoning.  
- Learned from an early failure when latency spikes hit the API; resolved with Lambda@Edge caching and endpoint warm‑up scripts, turning a 30 % SLA breach into a 5 % improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
