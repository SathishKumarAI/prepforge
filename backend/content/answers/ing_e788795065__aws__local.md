---
qid: ing_e788795065__aws__local
question: 'Explain: Append-only (mostly) — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 389
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:13-05:00'
sources: []
---

**Situation / Task**  
In my last role I built a real‑time recommendation engine for an e‑commerce platform that needed to ingest ~5 M click events per day and keep the model up‑to‑date with no data loss. The requirement was “append‑only” streams with elastic document storage so we could query any historical snapshot without rewriting large tables.

**Action**  
I chose **Amazon Kinesis Data Streams** for ingestion (high throughput, 99.9 % durability) and **AWS Lambda** to transform each record into a JSON document. For storage I used **Amazon OpenSearch Service** (formerly Elasticsearch) with an index per day; the append‑only nature meant we never updated documents, only inserted new ones, which keeps cluster health high and reduces index rebuild costs.  
To keep costs under control I enabled **dedicated nodes** for hot data and migrated older indices to **S3 Glacier via OpenSearch’s snapshot API**, restoring them on demand.  

I added a **CloudWatch metric filter** that counted ingestion failures; the alert loop allowed us to auto‑scale Kinesis shards within 2 minutes, keeping latency <50 ms.

**Result**  
The pipeline handled 5 M events/day with 99.7 % success and a mean query latency of 30 ms. The cost dropped from $12k/month to $6.3k/month by leveraging cold storage for stale indices.  

**Reflection**  
I learned that “append‑only” simplifies consistency but demands careful index lifecycle policies; future iterations will experiment with **Amazon Timestream** for time‑series compression. This showcases ownership, dive deep into AWS services, and a bias for action that delivers measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
