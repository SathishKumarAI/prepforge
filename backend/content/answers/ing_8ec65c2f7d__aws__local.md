---
qid: ing_8ec65c2f7d__aws__local
question: 'Explain: Candidate — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 476
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:01-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a real‑time comment stream for a video platform that could serve millions of concurrent users while keeping latency below 200 ms and ensuring eventual consistency.

**Action (Design)**  
1. **Ingest** – Use **Amazon Kinesis Data Streams** (shard size tuned to ~5 M comments/hr) as the first hop; it guarantees at‑least‑once delivery with sub‑second buffering.  
2. **Processing** – Lambda functions consume Kinesis records, enrich them (user lookup from DynamoDB), filter profanity via Comprehend, and write clean events to an **Amazon DynamoDB Global Table** for low‑latency reads.  
3. **Real‑time push** – A separate Lambda streams the enriched items into an **Amazon API Gateway WebSocket API**, which forwards comments to all connected clients through a **Redis‑based cache (ElastiCache)** for sub‑100 ms delivery.  
4. **Analytics** – Store raw events in S3 + Athena for long‑term analysis; periodic aggregation jobs run on EMR or Glue.

**Result**  
- Achieved 99.95 % availability during a 6‑month test with peak 12 M comments/hr.  
- Latency < 180 ms (mean) under load, meeting the SLA.  
- Cost: $1.2 K/month for Kinesis + Lambda vs. $3.5 K for a monolithic EC2 solution.

**Leadership Principles**  
*Customer Obsession*: Built low‑latency paths so viewers see comments instantly.  
*Ownership & Dive Deep*: I wrote the full deployment script, tuned shard counts, and debugged a 0.5 % message loss issue by inspecting CloudWatch metrics.  

**Bar‑raiser cues** – Demonstrated ownership (full stack), deep dive into latency trade‑offs, quantified impact (SLA met, cost savings), and lessons learned from the loss‑rate incident (added dedup logic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
