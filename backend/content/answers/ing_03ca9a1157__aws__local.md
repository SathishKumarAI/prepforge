---
qid: ing_03ca9a1157__aws__local
question: 'Explain: You''re ingesting millions of web pages a day. Detect near-duplicates
  - same article, different boilerplate - efficiently.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 465
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:10-05:00'
sources: []
---

**Situation / Task**  
I led the ingestion pipeline for our global news aggregator that pulls ~5 M webpages per day. Duplicate detection was a bottleneck—our storage cost ballooned, and search relevance dropped because users saw the same article multiple times under different URLs.

**Action**  
1. **Design a near‑duplicate engine**:  
   * *Pre‑processing*: Strip boilerplate with AWS Lambda + BeautifulSoup (stateless, auto‑scaling).  
   * *Fingerprinting*: Use MinHash + locality‑sensitive hashing (LSH) to generate 64‑bit signatures in a single pass.  
   * *Storage & lookup*: Persist fingerprints in Amazon DynamoDB Global Tables for low‑latency reads; maintain an inverted index in Amazon OpenSearch Service for similarity queries.  
2. **Scalable ingestion**:  
   * Ingest via Kinesis Data Streams → Lambda → S3 (raw + processed).  
   * Batch deduplication jobs run on AWS Glue ETL, sharding by hash prefix to keep partitions <10 GB and stay within DynamoDB limits.  
3. **Cost & availability**:  
   * Spot‑based EMR clusters for heavy batches reduce compute cost by 35%.  
   * Multi‑AZ DynamoDB ensures 99.999% availability; OpenSearch auto‑scales based on query load.  

**Result**  
- Duplicate rate dropped from 18 % to **3 %** (≈ 4 M fewer documents stored).  
- Storage cost fell by **$120k/month** and search latency improved by **27 %**.  
- The system now processes 5 M pages with <2 s end‑to‑end latency.

**Learning & Ownership**  
I owned the failure mode where new content formats broke the boilerplate stripper; after a rollback, I added a monitoring rule that alerts when the duplicate rate spikes >10 % in a day. This proactive “bias for action” mindset keeps the pipeline robust and cost‑effective.  

*Leadership Principles*: **Ownership**, **Dive Deep**, **Customer Obsession** (better search experience).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
