---
qid: ing_6ab1ee6d6b__aws__local
question: 'Explain: Video metadata storage — Youtubestreaminghld'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:44-05:00'
sources: []
---

**Situation / Task**  
At my previous company we were launching a new video‑on‑demand service that had to ingest thousands of videos per day and deliver rich metadata (title, tags, captions, thumbnails) for instant search and recommendation. The challenge was to build a highly available, cost‑efficient storage layer that could scale from 10 GB/day to >1 TB/day without blocking ingestion.

**Approach / Design**  
* **Data model** – Partition by video ID, store metadata in JSON documents; use Amazon DynamoDB for low‑latency reads and writes.  
* **Ingestion pipeline** – AWS Lambda triggered by S3 object creation parses the video file, extracts metadata with AWS Elemental MediaConvert, then writes to DynamoDB.  
* **Durability & Availability** – Enable DynamoDB Global Tables (US‑East‑1 ↔ US‑West‑2) for multi‑region failover; use point‑in‑time recovery and on‑demand capacity to handle traffic spikes.  
* **Cost control** – Store raw metadata snapshots in Amazon S3 Glacier Deep Archive as a cold archive; schedule Lambda nightly jobs to move unused records out of DynamoDB, reducing storage costs by 35 %.  
* **Scalability** – Use DynamoDB’s auto‑scaling and provisioned throughput with reserved capacity for predictable peaks.  

**Result**  
Within three months the ingestion latency dropped from 12 s to <2 s per video, search response times improved from 400 ms to 80 ms (5× faster), and storage costs fell by 28 % compared to a monolithic RDBMS approach.

---

### Leadership Principles Highlighted  
* **Customer Obsession** – Delivered sub‑second metadata lookup so the recommendation engine could serve personalized content instantly.  
* **Ownership & Dive Deep** – Took end‑to‑end responsibility for the pipeline, profiled Lambda functions and tuned DynamoDB indexes to eliminate bottlenecks.

### What a Bar‑Raiser Looks For  
* Demonstrated ownership of failure points (e.g., retry logic on MediaConvert failures).  
* Quantified impact with real metrics (latency, cost savings).  
* Clear trade‑offs between consistency, availability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
