---
qid: ing_6d56e3bd4a__aws__local
question: You have a stream of billions of events and need the top-K most frequent
  keys with bounded memory. Exact answer impossible - what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 557
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:57-05:00'
sources: []
---

**Situation / Task**  
I was tasked to surface the top‑5 product IDs from a 1 Tb/day stream of click events without storing all keys—exact counting was impossible due to bounded RAM.

**Action**  
*Design:*  
1. **Ingest** via *Amazon Kinesis Data Streams* (shard capacity → 2 MB/s, auto‑scaling).  
2. For each record, invoke a *Lambda* that updates a **Count‑Min Sketch (CMS)** stored in an *Elasticache Redis* cluster.  
   - CMS width = 1 000 buckets, depth = 4 gives <0.01% error for high‑frequency keys.  
3. Every minute the Lambda snapshots the sketch into *S3* and triggers a *Glue* job that merges sketches across shards (parallel map‑reduce).  
4. The merged sketch is queried by an *Athena* query to extract the top‑5 keys (using `ORDER BY estimate DESC LIMIT 5`).  

*Why this works:*  
- **Scalability:** CMS size is fixed; memory stays <2 MB regardless of traffic.  
- **Availability:** Kinesis + Lambda provide at‑least‑once delivery; Redis cluster auto‑recovery.  
- **Cost:** ~\$0.10/hr for 4‑node Redis, \$0.005 per GB S3 snapshot; total <$20/month vs storing all keys (~\$500).  

**Result**  
Within 30 days we reduced storage costs by 95% and still reported top‑5 product IDs with <1% error (validated against a ground truth sample of 10k events). The system handled 200 M events/second during peak bursts.

---

### Leadership Principles Highlighted
- **Ownership** – I championed the end‑to‑end solution, from ingestion to reporting.  
- **Dive Deep** – Selected CMS parameters after profiling error vs. memory trade‑offs.  
- **Bias for Action** – Deployed within 3 weeks instead of waiting for a perfect algorithm.

### Bar‑raiser cues
- Quantified impact (95% cost savings).  
- Demonstrated deep understanding of sketch algorithms and AWS services.  
- Learned from initial “exact count” prototype that failed memory limits, pivoted to probabilistic data structures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
