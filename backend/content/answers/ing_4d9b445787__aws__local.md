---
qid: ing_4d9b445787__aws__local
question: 'Explain: Fetch recent scores — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 529
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:57-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the “LangWatch” scoring pipeline for an AI‑evaluation SaaS that aggregates model performance across thousands of prompts nightly. The product team needed a real‑time dashboard showing the latest evaluation scores with minimal latency.

**Task (T)**  
Design a scalable, cost‑effective system to fetch and aggregate recent scores from Langfuse, compute weighted averages, and expose them via an API for front‑end consumption—all while ensuring 99.9 % availability.

**Action (A)**  
1. **Data ingestion:** Stream evaluation events from Langfuse into Amazon Kinesis Data Streams; this decouples producers from consumers and guarantees at‑least‑once delivery.  
2. **Processing & aggregation:** Run a Lambda function on each Kinesis shard that updates an Amazon DynamoDB “scores” table (partition key: `model_id`, sort key: `timestamp`). Use DynamoDB TTL to purge 30‑day history automatically.  
3. **API layer:** Deploy API Gateway + Lambda Authorizer; the Lambda queries DynamoDB for the latest N scores, calculates weighted averages using a deterministic hash on prompt IDs, and returns JSON.  
4. **Observability:** CloudWatch metrics (`lambda.duration`, `kinesis.shard_iterator_age`) trigger Auto Scaling of Kinesis shards; X-Ray traces reveal latency hotspots.  
5. **Cost & trade‑offs:** Lambda + DynamoDB keep capital costs low (<$50/mo) while offering 1 ms read latency. A single Lambda per shard limits cold starts, but we pre‑warm on schedule to reduce burst latency.

**Result (R)**  
- Latency dropped from ~2 s to <200 ms for end users.  
- Real‑time dashboard now shows scores with a 99.95 % success rate across 10k concurrent requests.  
- Operational cost decreased by 30 % compared to the prior batch‑processing approach.

**Leadership Principles Highlighted**  
*Customer Obsession* – built a system that delivers instant feedback for users.  
*Ownership & Dive Deep* – architected end‑to‑end data flow, tuned every component, and measured impact with concrete metrics.  

Bar‑raiser cues: demonstrated ownership by handling all components, dived deep into latency bottlenecks, quantified success, and iterated on failure (cold starts) to improve performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
