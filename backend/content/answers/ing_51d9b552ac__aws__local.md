---
qid: ing_51d9b552ac__aws__local
question: Sources change constantly. How do you keep the vector index in sync - including
  deletes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 510
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:30:05-05:00'
sources: []
---

**Situation & Task**  
In a recommendation service we ingest millions of product descriptions daily. The embeddings live in an OpenSearch vector index that powers real‑time search. Because product catalogs are volatile—items are added, updated, or deleted—I had to design a *fully automated sync pipeline* that keeps the index 99.9% accurate without manual intervention.

**Action (Design)**  
1. **Event source:** Each CRUD operation on DynamoDB (the master catalog) triggers an EventBridge rule.  
2. **Processing:** A Lambda stream pulls events, calls SageMaker to re‑embed updated items, and writes the new vectors to a Kinesis Data Stream.  
3. **Indexing & Deletion:**  
   * **Bulk ingestion** – a Step Function orchestrates a parallelized `bulk` OpenSearch API call for 10k documents per batch (cost ≈ $0.20/GB).  
   * **Deletes** – DynamoDB streams emit `REMOVE` events; the Lambda writes an `_delete` payload to the same Kinesis stream, and the Step Function issues `DELETE_BY_QUERY` calls with a short TTL (30 s) to avoid stale data.  
4. **Audit & Rollback:** Every event is logged in QLDB for immutable traceability, enabling rollback if an index update fails.

**Result**  
- Index drift dropped from 12% to <0.2% over 6 months.  
- Latency of sync stayed under 5 s per item, meeting SLAs.  
- Operational cost reduced by 35% compared to manual batch jobs.

**Reflection (Leadership)**  
*Ownership:* I owned the end‑to‑end pipeline and set up automated alerts for failures.  
*Dive Deep:* By instrumenting every step with CloudWatch metrics, I could pinpoint bottlenecks and iterate quickly.  
*Learned from failure:* An initial design that used single‑threaded Lambda caused backlogs; switching to parallel Step Functions eliminated the queue.

**Key AWS services:** DynamoDB, EventBridge, Lambda, Kinesis Data Streams, SageMaker, OpenSearch Service, QLDB, CloudWatch, Step Functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
