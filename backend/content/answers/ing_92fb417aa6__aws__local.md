---
qid: ing_92fb417aa6__aws__local
question: 'Explain: Retrieving a Context Window Around a Sentence'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 543
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:58:34-05:00'
sources: []
---

**Context‑window retrieval for NLP pipelines**

*Leadership Principles:* **Customer Obsession** – delivering the most relevant text for downstream models; **Dive Deep** – understanding tokenization and latency trade‑offs.

---

### Situation
In a production recommendation engine, we needed to feed BERT with a 512‑token window centered on a user’s review sentence. The existing naïve approach (scan all sentences) hit *O(N)* time and caused > 200 ms tail latency during peak traffic.

### Task
Design an efficient, scalable retrieval that guarantees < 50 ms latency per request while handling millions of reviews daily.

### Action
1. **Pre‑index** each review’s sentence offsets into a DynamoDB table (`ReviewID | SentenceIdx | StartByte`).  
2. Store the raw review text in S3; load it on demand via *S3 Select* to avoid full object reads.  
3. On request, compute `target_idx = SentIdx + 256` (half‑window left/right).  
4. Query DynamoDB for surrounding indices (±256).  
5. Retrieve the exact byte range from S3 using *Range* header; if not aligned, pad with nearest sentence boundaries.  
6. Pass the 512‑token string to Lambda@Edge for BERT inference.

**AWS services:** DynamoDB (low‑latency key/value), S3 Select (partial reads), Lambda@Edge (edge execution).

### Result
- Latency dropped from **200 ms → 35 ms** average, 99th percentile < 70 ms.  
- Cost savings of **≈ 40 %** by avoiding full S3 object loads.  
- System handled a 10× traffic spike without degradation.

---

**What the bar‑raiser listens for**

| Signal | Why it matters |
|--------|----------------|
| Ownership (pre‑indexing, monitoring) | Shows end‑to‑end responsibility |
| Dive Deep (token offsets, range requests) | Demonstrates technical rigor |
| Quantified impact (latency & cost metrics) | Validates business value |
| Learning from failure (initial O(N) approach) | Highlights iterative improvement |

This solution balances **scalability** (DynamoDB’s partitioning), **availability** (S3’s durability), and **cost** (partial reads), embodying Amazon’s focus on customer‑centric, data‑driven engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
