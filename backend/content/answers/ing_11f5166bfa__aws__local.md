---
qid: ing_11f5166bfa__aws__local
question: 'Explain: Components — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 433
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:07-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* My team built a *Customer‑Distillation Pipeline* for a global e‑commerce platform that needed to surface the top 5 sentiment trends from millions of reviews per day.

*Task:* Deliver an end‑to‑end data flow that ingests raw text, distills actionable insights, and feeds them into our recommendation engine with < 2 min latency.

*Action:*  
1. **Ingest** – *Amazon Kinesis Data Streams* streamed 10 M reviews/sec into a *Lambda* layer for basic cleansing.  
2. **Distill** – A *Step Functions* orchestration triggered an *EMR Spark* cluster (Spark‑SQL + OpenNLP) to compute TF‑IDF, sentiment scores, and cluster topics via LDA.  
3. **Store & Serve** – Results landed in a *DynamoDB* global table partitioned by locale; *Amazon API Gateway* exposed a low‑latency REST endpoint for downstream services.  
4. **Monitoring** – *CloudWatch* dashboards tracked latency, error rates, and daily trend accuracy (validated against manual audit).  

*Result:* The pipeline processed 200 M reviews/day with < 120 s total latency; sentiment‑driven recommendations increased conversion by **12%** in the first quarter. Cost was $4k/month—30% below the legacy on‑prem solution.

**Bar‑raiser notes:**  
- Demonstrated *ownership* of cross‑team dependencies (Kinesis, EMR).  
- Showed *dive deep* into Spark tuning and DynamoDB partitioning to meet SLAs.  
- Quantified impact with real conversion lift and cost savings.  
- Learned from an early 10% accuracy drop by integrating a lightweight *SageMaker* model for sentiment re‑scoring, improving precision to 96%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
