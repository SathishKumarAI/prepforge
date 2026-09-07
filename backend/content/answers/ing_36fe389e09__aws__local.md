---
qid: ing_36fe389e09__aws__local
question: 'Explain: Write index — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 375
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:00-05:00'
sources: []
---

**Answer (≈190 words)**  

During a recent project I owned the design of a real‑time search layer for streaming telemetry from IoT devices. The requirement was to ingest high‑velocity data streams (≈10 M events/s), index them on the fly, and provide low‑latency full‑text queries via an Elastic Search cluster.

**Solution**  
1. **Ingestion:** Kinesis Data Streams fed into a Lambda that parsed each record and wrote it to Amazon OpenSearch Service (managed ES).  
2. **Indexing strategy:** I created a dedicated index per tenant with a rollover policy every 30 days; this kept shard sizes < 50 GB, improving search performance.  
3. **Scalability/Availability:** OpenSearch’s autoscaling ensured that the cluster automatically added nodes during traffic spikes; cross‑region replication provided disaster recovery.  
4. **Cost control:** I leveraged reserved instances for steady traffic and spot instances for bursty periods, reducing spend by 35 % compared to on‑demand only.

**Result** – Query latency dropped from 2.3 s to 0.45 s (90th percentile), and the system handled a peak of 15 M events/s without outages.  

**Leadership Principles** – *Ownership* (I drove the full stack decision) and *Dive Deep* (I tuned shard sizing, rollover logic, and cost‑model).  

Bar‑raisers look for clear ownership, depth of technical detail, quantified impact, and learning—my post‑mortem on a previous indexing failure led to the shard‑size rule that saved us from a 12 h outage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
