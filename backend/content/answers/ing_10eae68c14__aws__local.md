---
qid: ing_10eae68c14__aws__local
question: 'Explain: Context Relevance — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 433
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:52-05:00'
sources: []
---

**Context Relevance – Evaluating LLM Outputs**

*Situation:* At my previous company we launched a conversational AI that had to rank user intent correctly across 1 M daily sessions. A low relevance score meant missed upsells and frustrated customers.

*Task:* Build an automated evaluation pipeline that quantifies “context relevance” (the proportion of responses that stay on topic) and feeds back into model retraining.

*Action:*  
- **Data‑driven metric:** Precision@1 for context relevance, targeting > 92 % after each iteration.  
- **Design:**  
  - Ingest live chat logs to S3 → trigger Glue ETL to annotate ground truth via a small human‑in‑the‑loop batch.  
  - Use SageMaker Ground Truth + Lambda to generate labeled “relevant/irrelevant” pairs.  
  - Train an auxiliary classifier (lightweight transformer) on the same prompt–response data; its probability is our relevance score.  
  - Deploy via SageMaker Endpoint, auto‑scaling on CloudWatch metrics (CPU > 70 % → add instance).  
  - Store predictions in DynamoDB for real‑time dashboards and trigger CloudWatch alarms if the metric dips below 90 %.  
- **Trade‑offs:** Using a lightweight model keeps latency < 200 ms and cost <$0.02 per inference, versus re‑running the full LLM.

*Result:* After two releases, context relevance jumped from 85 % to 93 %, increasing conversion by 4 % (≈ $120k/month). We cut inference costs by 35 %.  

**Leadership Principles:** *Customer Obsession* – directly tied metrics to user satisfaction; *Dive Deep* – built a custom evaluation loop and iterated on data quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
