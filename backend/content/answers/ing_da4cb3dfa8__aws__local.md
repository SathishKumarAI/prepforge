---
qid: ing_da4cb3dfa8__aws__local
question: 'In the mood for some more reading? — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 395
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:32:08-05:00'
sources: []
---

**Answer – “HyperLogLog: my go‑to ML/analytics tool”**

> *Customer Obsession | Ownership*  

**Situation:** In 2023 I led the real‑time traffic analytics stack for a global ad platform that needed to count unique visitors per campaign with <1 % error, while keeping cost below $5k/month.  
**Task:** Replace an in‑memory Bloom filter that blew memory and slowed query latency after scaling from 10M to 200M distinct users.  
**Action:** I designed a distributed HyperLogLog (HLL) pipeline using **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** to update per‑campaign HLL sketches, and **Amazon DynamoDB** to store the compressed registers. The sketch size was fixed at 1 MB per campaign, giving an error of ~0.81% (ε = 1/√(2^p)). I added a nightly **Glue ETL** job that merges sketches across shards for global counts.  
**Result:** We cut memory usage by 85%, reduced query latency from 250 ms to 30 ms, and lowered monthly cost from $12k to $4.5k. The system now scales linearly; adding a new campaign adds only one HLL record (≈1 MB).  

*Dive Deep:* I benchmarked ε against p=14 vs. p=16 and verified the theoretical error with empirical sampling.  
*Bar‑raiser check:* Ownership – I drove the end‑to‑end solution, including cost modeling; Depth – I quantified sketch error, storage, and latency trade‑offs; Learning – a failed attempt with Count‑Min Sketch taught me the importance of fixed‑size probabilistic data structures for strict memory budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
