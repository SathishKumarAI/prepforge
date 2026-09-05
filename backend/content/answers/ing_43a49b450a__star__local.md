---
qid: ing_43a49b450a__star__local
question: 'Explain: Sequence Number — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 345
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:44:09-05:00'
sources: []
---

**Situation:**  
While leading a real‑time fraud detection project for a fintech client, we used Amazon Kinesis Data Streams to ingest millions of transaction events per day. The data pipeline had to guarantee that each event was processed exactly once, even during network hiccups and shard rebalancing.

**Task:**  
I needed to design a reliable consumer strategy that could detect duplicate or missing records, maintain ordering within each partition key, and recover gracefully after failures—all while keeping latency under 200 ms.

**Action:**  
I leveraged Kinesis’s **SequenceNumber** metadata. For every record I stored its `SequenceNumber` in a DynamoDB table keyed by the shard ID and event ID. The consumer checkpointed the highest processed sequence number per shard, so on restart it could resume from that point. To handle out‑of‑order records, I implemented a small in‑memory buffer that reordered events using their sequence numbers before passing them to the fraud model. I also added logic to detect gaps (missing sequence numbers) and trigger an alert for manual inspection. Finally, I used Kinesis’s `GetRecords` API with a `Limit` of 10,000 to batch reads efficiently.

**Result:**  
After deployment, duplicate processing dropped from ~3% to <0.01%, and end‑to‑end latency stayed below 180 ms under peak load. The system now reliably processes each transaction exactly once, and I learned that sequence numbers are the backbone of fault‑tolerant stream consumption when ordering matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
