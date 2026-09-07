---
qid: ing_7cb6d288e0__aws__local
question: Walk me through actually collecting preference data. What are the logistics,
  and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:09-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an AI recommendation engine for a global e‑commerce platform. The goal was to collect real‑time user preference data (clicks, dwell time, cart additions) and feed it into a downstream ML pipeline while keeping latency < 50 ms and cost <$0.05 per event.

**Action**  
1. **Event Capture** – Instrumented the front‑end with a lightweight JavaScript SDK that batched events (max 200 events/5 s) and sent them to an API Gateway endpoint.  
2. **Ingestion Layer** – API Gateway forwarded to a Lambda authorizer, then pushed payloads into an Amazon Kinesis Data Stream for near‑real‑time processing.  
3. **Processing & Storage** – A Kinesis Data Analytics job parsed JSON, enriched with user profile from DynamoDB (partition key = user_id), and wrote the cleaned stream to S3 in Parquet partitions (`/year=2026/month=09/day=07/user_id=`).  
4. **Analytics** – Athena queries over the partitioned data produced daily dashboards; the ML pipeline pulled a 1‑hour rolling window via Glue crawlers into an Amazon SageMaker training dataset.

**Result**  
- Reduced ingestion latency from 350 ms to 45 ms (93% improvement).  
- Cost per event dropped from $0.12 to $0.04, saving ~$120k/yr.  
- Model accuracy (precision@10) improved by 7 percentage points after adding the enriched data.

**What went wrong & lessons learned**  
- Early attempts used a single S3 bucket without partitioning → hot‑spots and OOM errors in Athena.  
- Missing deduplication caused ~12% noise; added a Kinesis DLQ to capture failures for replay.  
- **Bar‑raiser focus:** Ownership of the full pipeline, deep dive into latency bottlenecks, quantitative impact on cost/accuracy, and iterative learning from failure modes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
