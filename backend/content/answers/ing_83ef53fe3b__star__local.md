---
qid: ing_83ef53fe3b__star__local
question: 'Explain: Data streams — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 367
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:04-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a fraud‑detection dashboard that needed near‑real‑time insights on transaction logs streaming from our payment gateway. The existing index was a time‑series roll‑up; adding new fields every day caused mapping conflicts and degraded query performance.

**Task:**  
I had to design a scalable ingestion pipeline that could ingest millions of events per hour, support schema evolution, and allow fast analytical queries without manual rollover or reindexing.

**Action:**  
I introduced Elasticsearch **data streams**. First, I created an index template with a dynamic mapping for the core fields (transaction_id, amount, timestamp) and a versioned schema for optional fraud flags. Then, I set up Logstash to push each transaction as a JSON document into the data stream “transactions‑stream.” The data stream automatically managed hidden backing indices per hour, handling rollover when size or age thresholds were met. For analytics, I queried the view index “transactions‑view” using Kibana’s time‑filter and created scripted fields for risk scoring. Finally, I set up ILM policies to delete old backing indices after 30 days, keeping storage costs low.

**Result:**  
The new pipeline ingested 2 million events/hour with <1 second latency from arrival to queryable state. Query performance improved by 45% compared to the legacy index, and we eliminated manual mapping updates—our engineering cycle time for adding a new fraud metric dropped from weeks to minutes. I learned that data streams abstract away rollover complexity while preserving real‑time analytics power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
