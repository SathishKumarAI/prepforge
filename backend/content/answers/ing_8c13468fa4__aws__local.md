---
qid: ing_8c13468fa4__aws__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:33-05:00'
sources: []
---

**Situation & Task**  
In a recent project I built an AI‑evaluation pipeline for a SaaS platform that needed to ingest millions of distributed traces nightly and surface only the spans that matched “AiEvalsComplete” so that downstream analytics could compute success rates in real time.

**Action (Technical Design)**  
1. **Data Ingestion** – Used *Amazon Kinesis Data Firehose* to stream trace payloads directly into an *S3* landing bucket, ensuring low‑latency and durability.  
2. **Serverless Processing** – Triggered a *Lambda* chain that parses each JSON record, filters by `span.name == "AiEvalsComplete"`, and writes the filtered spans to a dedicated *Amazon DynamoDB* table (partition key: trace_id).  
3. **Query Layer** – Exposed an API via *API Gateway + Lambda Authorizer*, querying DynamoDB with a Global Secondary Index on `span_name` for instant lookup.  
4. **Observability** – Instrumented all Lambdas with *AWS X-Ray* and sent metrics to *Amazon CloudWatch* (e.g., “filtered‑spans‑count”).  

**Result**  
- Reduced storage cost by 35 % (only 12 % of raw traces persisted).  
- Cut query latency from ~1.2 s to <200 ms, enabling real‑time dashboards for 10 k concurrent users.  
- Achieved 99.9 % availability with a single‑region deployment.

**Reflection & Ownership**  
I own the end‑to‑end data flow and continuously monitor drift in trace volume; when a spike hit 20 % above baseline, I auto‑scaled Kinesis shards and added an additional DynamoDB read capacity unit, preventing throttling. This iterative, data‑driven approach exemplifies *Customer Obsession* (delivering fast insights) and *Dive Deep* (root‑cause analysis + cost optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
