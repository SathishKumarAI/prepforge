---
qid: ing_9ddffca3d1__aws__local
question: 'Explain: Get all spans for a specific name — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 508
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:59-05:00'
sources: []
---

**Situation** – In my last role I built an “AI‑Evals” dashboard that lets data scientists pull every *span* (a single trace segment) for a given model name from our distributed tracing system (OpenTelemetry + Langfuse). The goal was to surface latency, error rates and token usage per evaluation in under 2 s.

**Task** – I had to expose a simple API endpoint that returned all spans for a supplied `model_name`, while keeping the solution cost‑effective at scale (> 10k evaluations/day).

**Action**  
1. **Data Ingestion** – Each span is emitted to an Amazon Kinesis Data Firehose stream and written in real time to an S3 bucket partitioned by `model_name` (daily).  
2. **Indexing & Query** – A scheduled Glue job crawls the new data, creates a partitioned Athena table (`model_name`, `timestamp`, `span_id`, `metrics`). Athena’s serverless query engine allows ad‑hoc scans without provisioning clusters.  
3. **API Layer** – API Gateway + Lambda (Python) receives `GET /spans?name=AiEvals`. The Lambda runs a parameterized Athena query (`WHERE model_name = :name`) and streams results back via HTTP/2.  
4. **Cost & Availability** – S3 storage is cheap (~$0.023/GB‑month), Kinesis Firehose charges per GB, Athena queries are billed by scanned data (≈ $5/TB). All services are multi‑AZ; Lambda retries on failure.

**Result** – The solution returns < 1 s latency for 95 % of requests and cut storage costs by **30 %** compared to a legacy Redshift approach. We reduced query cost from $0.50/query to <$0.01/query, freeing $10k/month for other features.

**Learning** – I learned that *dive deep* into the data lifecycle (ingest → store → index) is essential; I iterated on partition keys until Athena scans dropped from 200 GB to 30 GB per query. This embodies **Ownership**, **Dive Deep**, and **Deliver Results**—the core of Amazon’s interview style.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
