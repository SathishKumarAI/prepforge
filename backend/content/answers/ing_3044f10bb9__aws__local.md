---
qid: ing_3044f10bb9__aws__local
question: 'Explain: Object Storage — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 518
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:16-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to design an object‑storage service for a music streaming platform (think Spotify). The goal was to store millions of user‑generated playlists and audio files with low latency, high durability, and cost efficiency while keeping the system scalable as user base grew from 10 M to 100 M active users.

**Action**  
* **Requirements & Design** –  
  * Durability: ≥ 99.999999999% (11 nines).  
  * Availability: 99.95 % for reads, 99.9 % for writes.  
  * Scale: > 10⁴ requests/sec per region with auto‑sharding.  
  * Cost: Keep storage cost < $0.02/GB/month.

I chose **Amazon S3** as the core store because it already guarantees durability and offers tiered storage (Standard, Infrequent Access, Glacier). For metadata I used a **partitioned DynamoDB table** keyed by user‑id + playlist‑id; this gives O(1) lookups for playlist manifests.  

To accelerate global reads I added an **Amazon CloudFront CDN** in front of S3, using *origin request policies* to keep object keys opaque and cache‑control headers tuned per content type.  
For ingest pipelines, I leveraged **AWS Lambda + API Gateway** for a serverless upload endpoint; the Lambda function validates MIME types, writes the file to S3 via multipart upload, then updates DynamoDB.

**Result**  
After launch, read latency dropped from 350 ms (legacy FTP) to < 120 ms average. Throughput scaled to 15 k RPS without throttling. Cost per GB fell from $0.05 to $0.018 by shifting 30 % of rarely‑played tracks to Glacier Deep Archive. The system handled a 10× traffic spike during a new album release with zero downtime, meeting the SLA.

**Reflection / Learnings**  
I owned the end‑to‑end flow and conducted A/B tests on cache TTLs; when latency spiked I traced it back to a mis‑configured CloudFront origin policy—quick fix reduced error rate by 4×. This experience reinforced my bias for action and deep dive into metrics, aligning with Amazon’s *Ownership* and *Dive Deep* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
