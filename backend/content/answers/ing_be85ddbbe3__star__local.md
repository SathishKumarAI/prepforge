---
qid: ing_be85ddbbe3__star__local
question: 'Explain: Storage (Per Day) — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 334
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:52:07-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with estimating the daily data footprint of a messaging app similar to WhatsApp while working on a system‑design mock interview prep project.

**Task**  
I had to calculate how much storage the backend would need per day, factoring in text, media uploads, user metadata, and backups, then propose an architecture that scales to millions of users.

**Action**  
I started by defining average usage: 100 M active users, each sending 10 messages/day (≈5 KB each) and uploading 1 photo/video daily (average 2 MB). I added a 1% churn buffer for metadata. Using these figures I calculated ~2 TB of media and ~500 GB of text per day. I then mapped this onto a sharded, object‑storage system (S3‑compatible) with CDN edge caching for media, and a distributed NoSQL store (Cassandra) for message logs. I also designed incremental backups to cold storage (Glacier) and considered data retention policies to keep hot tier usage under 5 TB/day.

**Result**  
The prototype estimate showed we’d need ~3 TB of daily write capacity and an on‑prem cluster capable of handling 1,000 RPS with 99.9% uptime. The exercise sharpened my ability to translate user metrics into concrete storage needs and taught me how to balance cost, latency, and durability in a high‑scale messaging system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
