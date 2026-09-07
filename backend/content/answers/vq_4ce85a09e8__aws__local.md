---
qid: vq_4ce85a09e8__aws__local
question: Can one selectively load only the data that you need?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 506
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:50:45-05:00'
sources: []
---

**Answer – Amazon‑style**

**Behavioral (STAR)**  
*Situation:* While revamping a recommendation engine for our e‑commerce platform, the data pipeline was ingesting **all user interaction logs** (~2 TB/day) into an analytics cluster, causing monthly costs to balloon from $15k to $120k and slowing downstream model training by 45%.  
*Task:* Reduce storage and compute spend while keeping latency under 3 s for real‑time scoring.  
*Action:* I introduced **selective loading** via a two‑stage Lambda workflow: (1) an S3 event triggers a Lambda that parses the raw log, extracts only fields needed for downstream models (`user_id`, `timestamp`, `action_type`), and writes them to a DynamoDB table with GSI on `action_type`; (2) an Athena query then scans only those keys. I also added a “hot” in‑memory cache using ElastiCache Redis for the top 10k active users, reducing read latency.  
*Result:* Storage dropped by **80%** (from 2 TB to 400 GB), compute costs fell to $18k/month, and real‑time scoring latency improved to 1.8 s. The change also cut data engineering hours by 30 %.  

**Technical Design & Trade‑offs**  
- **Selective loading** = *lazy parsing* → lower I/O, less CPU on ingestion.  
- **DynamoDB + GSI** gives sub‑10 ms reads for key lookups; cost scales linearly with provisioned throughput.  
- **Athena over S3** avoids moving data into a warehouse; serverless pay‑per‑query (≈$5 per TB scanned).  
- Trade‑off: added complexity of two Lambda functions and eventual consistency in DynamoDB, but outweighed by savings and faster iteration.

**Bar‑raiser cues I hear:** ownership of cost & performance, deep dive into why the naive full load was hurting us, quantifiable impact (80% storage reduction), and learning from the failed 45 % latency spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
