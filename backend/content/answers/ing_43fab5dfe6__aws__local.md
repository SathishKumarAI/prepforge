---
qid: ing_43fab5dfe6__aws__local
question: 'Explain: Find the top-K most frequent items in a high-volume event stream
  with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:01-05:00'
sources: []
---

**Situation & Task**  
I was hired by the *Real‑Time Analytics* team to build a service that surfaces the top‑10 trending hashtags for each minute from a global Twitter‑scale stream (~5 M events/s). Memory on every edge node had to stay < 512 MB, and latency per event had to be < 2 ms.

**Approach (Technical Design)**  
*Algorithm:* I chose **Count‑Sketch + Top‑K Bloom filter**. Count‑Sketch gives unbiased frequency estimates with O(log(1/δ)/ε) space; the Bloom filter keeps a rolling list of candidate top items, pruning the sketch to only those that exceed an ε‑threshold.  
*AWS Services:*  
- **Amazon Kinesis Data Streams** for ingestion (shard per region).  
- **Lambda@Edge** or **EC2 Spot Fleet** nodes run the sketch in memory; each node processes a shard.  
- **DynamoDB Global Tables** store aggregated counts, enabling cross‑region consistency.  
*Scalability & Availability:* Horizontal scaling is linear—adding shards/instances adds capacity. DynamoDB’s multi‑AZ replication guarantees 99.999% availability.  
*Cost Trade‑off:* Using Spot Fleet cuts EC2 cost by ~70 %, while Lambda keeps idle cost zero; the sketch itself occupies < 200 MB per node, leaving headroom for overhead.

**Result (Impact)**  
After deployment:  
- **Latency:** 1.8 ms/event (≤ 2 ms SLA).  
- **Accuracy:** Top‑10 error < 3 % vs ground truth (measured by offline replay).  
- **Cost Savings:** 65 % reduction over a naive hash map + Redis solution.  

**Learnings & Bar‑raiser Signals**  
I owned the end‑to‑end pipeline, iterated on sketch parameters after a production spike that exposed memory pressure, and documented fallback logic (switch to heavier Bloom filter) for edge cases. The bar‑raiser would note my ownership of failure modes, depth in algorithmic trade‑offs, and quantified business impact.  

> *Leadership Principles:* **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
