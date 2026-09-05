---
qid: ing_36fe389e09__star__local
question: 'Explain: Write index — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 359
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:18-05:00'
sources: []
---

**Situation:**  
While leading a real‑time analytics platform for an e‑commerce company, we had to ingest millions of clickstream events per day into Elasticsearch. The existing daily index approach caused 2–3 hour rebuilds during off‑peak windows and made near‑real‑time querying slow.

**Task:**  
Design a scalable indexing strategy that supports high write throughput, low latency queries, and automatic rollover without manual intervention, while keeping storage costs in check.

**Action:**  
I introduced Elasticsearch **Data Streams**. First, I created an index template with `index.lifecycle.name` pointing to a lifecycle policy that rolls over every 1 GB or 24 hours, whichever came first. The template set `write.index` to a hot tier and used `data_stream=true`. I then re‑ingested the backlog using the `_reindex` API, mapping event timestamps to the correct data stream. To keep queries fast, I added a Kibana Lens dashboard that filtered by the `_timestamp` field and leveraged the `fielddata: true` setting on the user agent field for quick faceting. Finally, I monitored shard allocation with X-Pack monitoring and adjusted the `shard.routing.allocation.require.box_type` to balance hot and warm nodes.

**Result:**  
Write latency dropped from 120 ms to under 20 ms, query response times improved by 35%, and we eliminated nightly rebuild windows entirely. Storage costs fell by 15% due to more efficient tiering. I learned how data streams simplify lifecycle management while delivering consistent performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
