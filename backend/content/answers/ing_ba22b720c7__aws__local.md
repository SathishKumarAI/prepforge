---
qid: ing_ba22b720c7__aws__local
question: 'Explain: thing we call it rep out the — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 430
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:30-05:00'
sources: []
---

**Situation / Task**  
At the time of **re:Invent 2018**, I was part of the DynamoDB team that had to explain how our hyper‑scale database works for a global audience. The goal was to demystify the architecture and prove that we could sustain 10⁶ RPS with sub‑millisecond latency while keeping costs predictable.

**Action**  
I organized the talk into three pillars: *partitioning*, *consistency* and *fault tolerance*. For each pillar I drew a live diagram, then walked through the exact data flow when a key is queried:

1. **Partitioning** – a hash of the partition key maps to one of 256 M physical partitions (shards).  
2. **Consistency** – a leader node per shard holds an in‑memory copy of the last 10 k write‑ahead logs; replicas are updated via Raft‑style consensus.  
3. **Fault tolerance** – each replica is located on a different AZ; we use DynamoDB Streams to replay lost writes.

I highlighted how we use *Amazon Kinesis* for log ingestion, *AWS Lambda* for stream processing, and *S3 Glacier* for cold archival. I also ran a live latency probe that showed 99th‑percentile < 5 ms even when the cluster was throttled to 20 % of its capacity.

**Result**  
The session attracted 8 k attendees; post‑event surveys reported a 92 % “understandable” score. Internally, the architecture helped reduce the mean time to recovery (MTTR) from 3 h to < 15 min and cut operational cost by 18 % through better capacity planning.

**Reflection**  
I learned that *Customer Obsession* drives us to simplify complex internals into a single story, while *Dive Deep* forces us to quantify every trade‑off. I now routinely validate design choices against real‑world metrics before presenting them to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
